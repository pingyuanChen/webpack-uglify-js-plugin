/*
  Incremental Uglify JS for webpack
*/
var path = require('path');
var fs = require('fs');
var chalk = require('chalk');
var uglify = require("uglify-js");
var SourceMapConsumer = require("webpack-core/lib/source-map").SourceMapConsumer;
var SourceMapSource = require("webpack-core/lib/SourceMapSource");
var RawSource = require("webpack-core/lib/RawSource");
var RequestShortener = require("./utils/RequestShortener");
var ModuleFilenameHelpers = require("./utils/ModuleFilenameHelpers");
var fileUtils = require('./utils/file');


var M_TIME_FILE = 'm_time_record';
var CACHED_UGLIFY_JS_FOLDER = 'cached_uglify';

function UglifyJsPlugin(options) {
  if(typeof options !== "object") options = {};

  if(options.cacheFolder === undefined) {
    console.error(chalk.bold.red('cacheFolder parameter must be required!'))
    return;
  }

  if(typeof options.compressor !== "undefined") {
    options.compress = options.compressor;
  }

  options.mTimeFileName = options.mTimeFileName || M_TIME_FILE;
  this.options = options;
}
module.exports = UglifyJsPlugin;

UglifyJsPlugin.prototype.apply = function(compiler) {
  var options = this.options, 
    log = this.log.bind(this);
  options.test = options.test || /\.js($|\?)/i;

  var requestShortener = new RequestShortener(compiler.context);
  compiler.plugin("compilation", function(compilation) {
    if(options.sourceMap !== false) {
      compilation.plugin("build-module", function(module) {
        // to get detailed location info about errors
        module.useSourceMap = true;
      });
    }
    compilation.plugin("optimize-chunk-assets", function(chunks, callback) {
      var cacheUglifyFolder = options.cacheFolder+'/'+CACHED_UGLIFY_JS_FOLDER,
        mTimeRecordsFile = options.cacheFolder+'/'+options.mTimeFileName+'.json';
      var mTimeRecords,
        changedChunks = [], changedFiles = [], changedChunksName = [],
        unChangedChunks = [], unChangedFiles = [], unChangedChunksName = [],
        newMTimeRecords = {};

      try {
        mTimeRecords = JSON.parse(fileUtils.read(mTimeRecordsFile));
      }catch(e) {
        mTimeRecords = {};
      }

      if(!mTimeRecords.lastHash) { //兼容
        fileUtils.deleteDirectory(options.cacheFolder);
      }

      chunks.forEach(function(chunk) {
        var _modules = chunk.modules || [],
          isChanged = false,
          chunkName = chunk.name,
          isInChanged = changedChunksName.indexOf(chunkName) > -1,
          chunkParents = chunk.parents,
          chunkParentsItem, unChangedChunksIndex, changedChunksIndex;

        if(isInChanged){
          isChanged = true;
        }else{
          _modules.forEach(function(_module) {
            var modulePath = _module.resource;
            if(!modulePath) {
              // isChanged = true
              return;
            }
            var moduleStat = fs.statSync(modulePath),
              moduleStatMTime = moduleStat.mtime.getTime(),
              lastMTime = mTimeRecords[modulePath];
            if(!lastMTime || moduleStatMTime !== lastMTime) {
              isChanged = true;
              newMTimeRecords[modulePath] = moduleStatMTime
            }
          });
        }

        if(isChanged) {
          if(changedChunksName.indexOf(chunkName) === -1){
            changedChunks.push(chunk);
            changedChunksName.push(chunkName);
          }
          if(chunkParents.length > 0){
            //process parents chunks
            for(var i=0,l=chunkParents.length; i<l; i++) {
              chunkParentsItem = chunkParents[i];
              unChangedChunksIndex = unChangedChunksName.indexOf(chunkParentsItem.name);
              changedChunksIndex = changedChunksName.indexOf(chunkParentsItem.name);
              if(changedChunksIndex === -1) {
                changedChunks.push(chunkParentsItem);
                changedChunksName.push(chunkParentsItem.name);
              }

              if(unChangedChunksIndex > -1) {
                unChangedChunks.splice(unChangedChunksIndex, 1);
                unChangedChunksName.splice(unChangedChunksIndex, 1);
              }
            }
          }
        } else {
          unChangedChunks.push(chunk);
          unChangedChunksName.push(chunkName);
        }
      });

      mTimeRecords = Object.assign(mTimeRecords, newMTimeRecords);


      log('changedChunks: '+chalk.red.bold(changedChunks.length)+'\n'+chalk.green(changedChunksName.join('\n')));
      log('unChangedChunks: '+chalk.red.bold(unChangedChunksName.length)+'\n'+chalk.green(unChangedChunksName.join('\n')));

      var files = getFilesFromChunks(changedChunks),
        isHashChanged = false;

      if(unChangedChunks.length > 0) {
        isHashChanged = compilation.hash !== mTimeRecords.lastHash;
        unChangedFiles = getFilesFromChunks(unChangedChunks);
        unChangedFiles.forEach(function(unChangedFile) {
          var unChangedFilePath = cacheUglifyFolder + '/' + unChangedFile.replace(compilation.hash, ''),
            replacedContent;
          if(fileUtils.exists(unChangedFilePath)) {
            if(isHashChanged){
              replacedContent = fileUtils.readAndReplace(unChangedFilePath, new RegExp(mTimeRecords.lastHash), compilation.hash);
            }else{
              replacedContent = fileUtils.read(unChangedFilePath);
            }
            compilation.assets[unChangedFile] = new RawSource(replacedContent);
          }else {
            files.push(unChangedFile);
          }
        });
      }
      
      compilation.additionalChunkAssets.forEach(function(file) {
        files.push(file);
      });
      files = files.filter(ModuleFilenameHelpers.matchObject.bind(undefined, options));
      files.forEach(function(file) {
        var oldWarnFunction = uglify.AST_Node.warn_function;
        var warnings = [];
        try {
          var asset = compilation.assets[file];
          if(asset.__UglifyJsPlugin) {
            compilation.assets[file] = asset.__UglifyJsPlugin;
            return;
          }
          if(options.sourceMap !== false) {
            if(asset.sourceAndMap) {
              var sourceAndMap = asset.sourceAndMap();
              var inputSourceMap = sourceAndMap.map;
              var input = sourceAndMap.source;
            } else {
              var inputSourceMap = asset.map();
              var input = asset.source();
            }
            var sourceMap = new SourceMapConsumer(inputSourceMap);
            uglify.AST_Node.warn_function = function(warning) { // eslint-disable-line camelcase
              var match = /\[.+:([0-9]+),([0-9]+)\]/.exec(warning);
              var line = +match[1];
              var column = +match[2];
              var original = sourceMap.originalPositionFor({
                line: line,
                column: column
              });
              if(!original || !original.source || original.source === file) return;
              warnings.push(warning.replace(/\[.+:([0-9]+),([0-9]+)\]/, "") +
                "[" + requestShortener.shorten(original.source) + ":" + original.line + "," + original.column + "]");
            };
          } else {
            var input = asset.source();
            uglify.AST_Node.warn_function = function(warning) { // eslint-disable-line camelcase
              warnings.push(warning);
            };
          }
          uglify.base54.reset();
          var ast = uglify.parse(input, {
            filename: file
          });
          if(options.compress !== false) {
            ast.figure_out_scope();
            var compress = uglify.Compressor(options.compress); // eslint-disable-line new-cap
            ast = ast.transform(compress);
          }
          if(options.mangle !== false) {
            ast.figure_out_scope();
            ast.compute_char_frequency(options.mangle || {});
            ast.mangle_names(options.mangle || {});
            if(options.mangle && options.mangle.props) {
              uglify.mangle_properties(ast, options.mangle.props);
            }
          }
          var output = {};
          output.comments = Object.prototype.hasOwnProperty.call(options, "comments") ? options.comments : /^\**!|@preserve|@license/;
          output.beautify = options.beautify;
          for(var k in options.output) {
            output[k] = options.output[k];
          }
          if(options.sourceMap !== false) {
            var map = uglify.SourceMap({ // eslint-disable-line new-cap
              file: file,
              root: ""
            });
            output.source_map = map; // eslint-disable-line camelcase
          }
          var stream = uglify.OutputStream(output); // eslint-disable-line new-cap
          ast.print(stream);
          if(map) map = map + "";
          stream = stream + "";
          asset.__UglifyJsPlugin = compilation.assets[file] = (map ?
            new SourceMapSource(stream, file, JSON.parse(map), input, inputSourceMap) :
            new RawSource(stream));
          if(warnings.length > 0) {
            compilation.warnings.push(new Error(file + " from UglifyJs\n" + warnings.join("\n")));
          }
        } catch(err) {
          if(err.line) {
            var original = sourceMap && sourceMap.originalPositionFor({
              line: err.line,
              column: err.col
            });
            if(original && original.source) {
              compilation.errors.push(new Error(file + " from UglifyJs\n" + err.message + " [" + requestShortener.shorten(original.source) + ":" + original.line + "," + original.column + "]"));
            } else {
              compilation.errors.push(new Error(file + " from UglifyJs\n" + err.message + " [" + file + ":" + err.line + "," + err.col + "]"));
            }
          } else if(err.msg) {
            compilation.errors.push(new Error(file + " from UglifyJs\n" + err.msg));
          } else
            compilation.errors.push(new Error(file + " from UglifyJs\n" + err.stack));
        } finally {
          uglify.AST_Node.warn_function = oldWarnFunction; // eslint-disable-line camelcase

          var toBeCachedJS = file.replace(compilation.hash, '');
          if(asset.__UglifyJsPlugin && asset.__UglifyJsPlugin._value) {
            fileUtils.write(cacheUglifyFolder + '/' + toBeCachedJS, asset.__UglifyJsPlugin._value);
          }
        }
      });
      
      mTimeRecords.lastHash = compilation.hash;
      fileUtils.write(mTimeRecordsFile, JSON.stringify(mTimeRecords));
      
      callback();
    });
    compilation.plugin("normal-module-loader", function(context) {
      context.minimize = true;
    });
  });
};

UglifyJsPlugin.prototype.log = function(logInfo) {
  if(this.options.debug) {
    console.log(logInfo);
  }
};

function getFilesFromChunks(chunks) {
  var files = [];
  chunks.forEach(function(chunk) {
    chunk.files.forEach(function(file) {
      files.push(file);
    });
  });
  return files;
}
