webpackJsonp([8], {
    161: function(e, t, n) { "use strict";
        e.exports = { DropdownMenu: n(162), MenuItem: n(165), Menu: n(164), IconButton: n(170), SimpleButton: n(171), LinkButton: n(172), Tab: n(173), TabItem: n(176), Dialog: n(177), Tooltip: n(166), Mask: n(179), Toast: n(180), SearchInput: n(181), ImageIcon: n(182), WindowListener: n(178), DelegateClick: n(167) } },
    162: function(e, t, n) { "use strict";
        var r = n(7),
            i = n(163),
            o = n(164),
            a = n(166),
            s = n(167);
        e.exports = r.createClass({ displayName: "exports", mixins: [s], propTypes: { menuItems: r.PropTypes.array.isRequired, wrapClassName: r.PropTypes.string, itemTpl: r.PropTypes.func, selectedTpl: r.PropTypes.func, selectedIndex: r.PropTypes.number, onMenuChange: r.PropTypes.func, forceTap: r.PropTypes.bool, tooltip: r.PropTypes.string, tipClass: r.PropTypes.string, isScroll: r.PropTypes.bool }, getDefaultProps: function() {
                return { hasMask: !1, autoWidth: !1, tooltip: "", tipClass: "", displayKey: "text", valKey: "value", itemTpl: function(e, t, n, i) {
                        var o = t[n],
                            a = t[i];
                        return r.createElement("div", { "data-val": a }, o) }, selectedTpl: function(e, t, n, i) {
                        var o = t[n];
                        return r.createElement("div", null, t[o]) } } }, getInitialState: function() {
                return { open: !1, selectedIndex: this.props.selectedIndex || 0, isShowTip: !1, hovered: !1 } }, componentDidMount: function() { this.props.autoWidth && this._setWidth(), this.props.hasOwnProperty("selectedIndex") && this._setSelectedIndex(this.props.selectedIndex) }, componentWillReceiveProps: function(e) { this.props.autoWidth && this._setWidth(), e.hasOwnProperty("selectedIndex") && this._setSelectedIndex(e.selectedIndex) }, render: function() {
                var e, t = this.props,
                    n = this.state.open ? "" : "unactive",
                    i = t.wrapClassName + " d-menu-wrap " + n;
                this.state.hovered ? "hovered" : "";
                return t.tooltip && (e = r.createElement(a, { ref: "tooltip", tip: t.tooltip, isShow: this.state.isShowTip, customClass: t.tipClass })), r.createElement("div", { className: i, onMouseEnter: this._handleMouseEnter, onMouseLeave: this._handleMouseLeave }, r.createElement("div", { className: "d-menu-display-wrap", onTouchTap: this._onToggleMenu }, t.selectedTpl(this.state.selectedIndex, t.menuItems[this.state.selectedIndex], t.displayKey, t.valKey), e), r.createElement(o, { ref: "menuWrap", menuItems: t.menuItems, displayKey: t.displayKey, valKey: t.valKey, isScroll: t.isScroll, selectedIndex: this.state.selectedIndex, itemTpl: t.itemTpl, onItemTap: this._onItemTap }), this.state.open && t.hasMask && r.createElement("div", { className: "d-menu-mask", onTouchTap: this._onMenuMaskTap })) }, componentClick: function() { this.close() }, close: function() { this.state.open && this.setState({ open: !1 }) }, _onToggleMenu: function() { this.setState({ open: !this.state.open, isShowTip: this.state.open }) }, _onItemTap: function(e, t, n) {
                var r = this.props;
                r.onMenuChange && (this.state.selectedIndex !== t || r.forceTap) && r.onMenuChange(e, t, n), this.setState({ selectedIndex: t, open: !1 }) }, _onMenuMaskTap: function() { this.setState({ open: !1 }) }, _setWidth: function() {
                var e = i.findDOMNode(this),
                    t = i.findDOMNode(this.refs.menuWrap);
                e.style.width = t.offsetWidth + "px" }, _setSelectedIndex: function(e) { this.setState({ selectedIndex: e }) }, _handleMouseEnter: function(e) { this.setState({ isShowTip: !this.state.open, hovered: !0 }) }, _handleMouseLeave: function(e) { this.setState({ isShowTip: !1, hovered: !1 }) } }) },
    164: function(e, t, n) { "use strict";
        var r = n(7),
            i = n(165);
        e.exports = r.createClass({ displayName: "exports", propTypes: { menuItems: r.PropTypes.array.isRequired, selectedIndex: r.PropTypes.number, selectedVal: r.PropTypes.string, onItemTap: r.PropTypes.func, itemTpl: r.PropTypes.func, isScroll: r.PropTypes.bool }, getDefaultProps: function() {}, getInitialState: function() {
                return { selectedIndex: this.props.selectedIndex || this._getSelectedIndexByVal() } }, componentDidMount: function() { this.props.hasOwnProperty("selectedIndex") && this._setSelectedIndex(this.props.selectedIndex) }, componentWillReceiveProps: function(e) { e.hasOwnProperty("selectedIndex") && this._setSelectedIndex(e.selectedIndex) }, render: function() {
                return r.createElement("div", { className: "menu-wrap" }, this._renderChilden()) }, _renderChilden: function() {
                for (var e, t = [], n = this.props, o = 0, a = n.menuItems.length; o < a; o++) e = r.createElement(i, { selected: this.state.selectedIndex === o, key: o, index: o, data: n.menuItems[o], itemTpl: n.itemTpl, displayKey: n.displayKey, valKey: n.valKey, onTap: this._onItemTap }), t.push(e);
                return n.isScroll ? r.createElement("div", { className: "menu-scroller-wrap" }, t) : t }, _onItemTap: function(e, t, n) { this.setState({ selectedIndex: t }), this.props.onItemTap && this.props.onItemTap(e, t, n) }, _getSelectedIndexByVal: function() {
                var e = this.props;
                if (e.selectedVal)
                    for (var t = 0, n = e.menuItems.length; t < n; t++)
                        if (e.menuItems[t][e.valKey] == e.selectedVal) return t;
                return 0 }, _setSelectedIndex: function(e) { this.setState({ selectedIndex: e }) } }) },
    165: function(e, t, n) { "use strict";
        var r = n(7);
        e.exports = r.createClass({ displayName: "exports", propTypes: { index: r.PropTypes.number.isRequired, selected: r.PropTypes.bool, data: r.PropTypes.object, onTap: r.PropTypes.func, itemTpl: r.PropTypes.func }, getDefaultProps: function() {
                return { itemTpl: function(e, t, n, i, o) {
                        var a = t[i],
                            s = t[o];
                        return r.createElement("div", { "data-val": s }, a) } } }, getInitialState: function() {
                return { hovered: !1 } }, render: function() {
                var e = this.props,
                    t = "menu-item",
                    n = this.state.hovered ? "hovered" : "";
                return n && (t += " " + n), e.selected && (t += " menu-item-selected"), e.data.class && (t += " " + e.data.class), r.createElement("div", { className: t, onMouseEnter: this._handleMouseEnter, onMouseLeave: this._handleMouseLeave, onTouchTap: this._onTap }, e.itemTpl(e.index, e.data, e.selected, e.displayKey, e.valKey)) }, _onTap: function(e) {
                var t = this.props;
                t.onTap && t.onTap(e, t.index, t.data) }, _handleMouseEnter: function(e) { this.setState({ hovered: !0 }) }, _handleMouseLeave: function(e) { this.setState({ hovered: !1 }) } }) },
    166: function(e, t, n) { "use strict";
        var r = n(7);
        e.exports = r.createClass({ displayName: "exports", propTypes: { tip: r.PropTypes.string.isRequired, isShow: r.PropTypes.bool, customClass: r.PropTypes.string }, render: function() {
                var e = this.props,
                    t = e.isShow ? "" : "hide",
                    n = e.customClass || "";
                return r.createElement("span", { className: "tooltip " + t + " " + n }, e.tip) } }) },
    167: function(e, t, n) { "use strict";
        var r = (n(7), n(163)),
            i = n(168),
            o = n(169);
        e.exports = { componentDidMount: function() { this._bindClick() }, componentWillUnmount: function() { this._unbindClick() }, _checkClick: function(e) {
                var t = r.findDOMNode(this),
                    n = e.target;
                n != t && !o.isDescendant(t, n) && document.documentElement.contains(n) && this.componentClick && this.componentClick(e, t) }, _bindClick: function() { i.on(document, "mouseup", this._checkClick), i.on(document, "touchend", this._checkClick) }, _unbindClick: function() { i.off(document, "mouseup", this._checkClick), i.off(document, "touchend", this._checkClick) } } },
    168: function(e, t) { "use strict";
        e.exports = { on: function(e, t, n) { window.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n) }, off: function(e, t, n) { window.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n) } } },
    169: function(e, t) { "use strict";
        e.exports = { isDescendant: function(e, t) {
                for (var n = t.parentNode; null != n;) {
                    if (n === e) return !0;
                    n = n.parentNode }
                return !1 } } },
    170: function(e, t, n) { "use strict";
        var r = n(7),
            i = n(166);
        e.exports = r.createClass({ displayName: "exports", propTypes: { customClass: r.PropTypes.string, tooltip: r.PropTypes.string, disabled: r.PropTypes.bool, onBtnTap: r.PropTypes.func, isShowTip: r.PropTypes.bool, tipClass: r.PropTypes.string, iconBtnClass: r.PropTypes.string, iconBtnTpl: r.PropTypes.func }, getDefaultProps: function() {
                return { customClass: "" } }, getInitialState: function() {
                return { isShowTip: !1, hovered: !1, tipClass: "" } }, render: function() {
                var e, t = this.props,
                    n = this.state.hovered ? "hovered" : "";
                return t.tooltip && (e = r.createElement(i, { ref: "tooltip", tip: t.tooltip, isShow: this.state.isShowTip, customClass: t.tipClass })), r.createElement("span", { className: "icon-btn-wrap " + n + " " + t.customClass, onMouseEnter: this._handleMouseEnter, onMouseLeave: this._handleMouseLeave, onTouchTap: t.onBtnTap }, r.createElement("span", { className: "icon-btn " + t.iconBtnClass }, t.iconBtnTpl ? t.iconBtnTpl() : ""), e) }, _handleMouseEnter: function(e) { this.setState({ isShowTip: !0, hovered: !0 }) }, _handleMouseLeave: function(e) { this.setState({ isShowTip: !1, hovered: !1 }) } }) },
    171: function(e, t, n) { "use strict";
        var r = n(7);
        e.exports = r.createClass({ displayName: "exports", propTypes: { customClass: r.PropTypes.string, disabled: r.PropTypes.bool, label: r.PropTypes.string, btnTpl: r.PropTypes.func, onTap: r.PropTypes.func }, getDefaultProps: function() {
                return { customClass: "" } }, render: function() {
                var e, t = this.props;
                return e = t.btnTpl ? t.btnTpl(t.label) : r.createElement("div", { className: "btn-inner" }, t.label && r.createElement("span", { ref: "btnLabel", className: "btn-label" }, t.label), t.children), r.createElement("button", { className: "btn " + t.customClass, disabled: t.disabled, onTouchTap: this._onTap }, e) }, _onTap: function(e) {
                var t = this.props;!t.disabled && t.onTap && t.onTap(e) } }) },
    172: function(e, t, n) { "use strict";
        var r = n(7),
            i = n(171);
        e.exports = r.createClass({ displayName: "exports", propTypes: { customClass: r.PropTypes.string, disabled: r.PropTypes.bool, newTab: r.PropTypes.bool, label: r.PropTypes.string, btnTpl: r.PropTypes.func, href: r.PropTypes.string.isRequired, onTap: r.PropTypes.func }, getDefaultProps: function() {
                return { customClass: "", newTab: !1 } }, render: function() {
                var e, t = this.props;
                return e = t.btnTpl ? t.btnTpl(t.label) : r.createElement("div", { className: "btn-inner" }, t.label && r.createElement("span", { ref: "btnLabel", className: "btn-label" }, t.label), t.children), r.createElement(i, { customClass: t.customClass, disabled: t.disabled, onTap: t.onTap }, r.createElement("a", { className: "link-btn", href: t.href, target: t.newTab ? "_blank" : "_self" }, e)) } }) },
    173: function(e, t, n) { "use strict";
        var r = n(7),
            i = n(174),
            o = n(175);
        e.exports = r.createClass({ displayName: "exports", propTypes: { customClass: r.PropTypes.string, selectedIndex: r.PropTypes.number, tabWillChange: r.PropTypes.func, tabDidChange: r.PropTypes.func, onTapContent: r.PropTypes.func, disableSetWidth: r.PropTypes.bool }, getInitialState: function() {
                return { selectedIndex: this.props.selectedIndex || 0 } }, componentWillReceiveProps: function(e) { void 0 !== e.selectedIndex && e.selectedIndex !== this.props.selectedIndex && this.setState({ selectedIndex: e.selectedIndex }) }, render: function() {
                var e, t, n, a = this.props,
                    s = [],
                    l = [];
                return r.Children.forEach(a.children, function(u, c) { "TabItem" == u.type.displayName ? (a.disableSetWidth ? e = r.createElement(i, { key: c, index: c, title: u.props.title, selected: this.state.selectedIndex === c, headTpl: a.headTpl, onTap: this._onHeadTap }) : (n = 100 / this.getTabCount() + "%", e = r.createElement(i, { key: c, index: c, title: u.props.title, selected: this.state.selectedIndex === c, width: n, headTpl: a.headTpl, onTap: this._onHeadTap })), t = r.createElement(o, { key: c, index: c, selected: this.state.selectedIndex === c, onTapContent: this._onTapContent, className: u.props.className }, u.props.children), s.push(e), l.push(t)) : console.error("The tab item tag name must be TagItem") }.bind(this)), r.createElement("div", { className: "tab-wrap " + (a.customClass || "") + " selected-" + this.state.selectedIndex }, r.createElement("div", { className: "tab-head-wrap" }, s), r.createElement("div", { className: "tab-content-wrap" }, l)) }, getTabCount: function() {
                return r.Children.count(this.props.children) }, _onHeadTap: function(e, t, n) {
                var r = this.props;
                r.tabWillChange && r.tabWillChange(this.state.selectedIndex, e, n), this.setState({ selectedIndex: e }), r.tabDidChange && r.tabDidChange(e, t, n) }, _onTapContent: function(e, t, n) { this.props.onTapContent && this.props.onTapContent(e, t, n) } }) },
    174: function(e, t, n) { "use strict";
        var r = n(7);
        e.exports = r.createClass({ displayName: "exports", propTypes: { index: r.PropTypes.number, title: r.PropTypes.string, selected: r.PropTypes.bool, headTpl: r.PropTypes.func, onTap: r.PropTypes.func }, getDefaultProps: function() {
                return { index: 0, selected: !1 } }, render: function() {
                var e, t = this.props,
                    n = { width: t.width };
                return e = t.headTpl ? t.headTpl(t.title, t.selected) : t.title, r.createElement("div", { className: "tab-head-item " + (t.selected ? "selected" : ""), style: n, onTouchTap: this._onTap }, e) }, _onTap: function(e) { this.props.onTap && this.props.onTap(this.props.index, this.props.title, e) } }) },
    175: function(e, t, n) { "use strict";
        var r = n(7);
        e.exports = r.createClass({ displayName: "exports", propTypes: { index: r.PropTypes.number, selected: r.PropTypes.bool, onTapContent: r.PropTypes.func, className: r.PropTypes.string }, getDefaultProps: function() {
                return { index: 0, selected: !1 } }, render: function() {
                var e = this.props,
                    t = "tab-content-item";
                return e.className && (t += " " + e.className), r.createElement("div", { className: t + (e.selected ? " selected" : " hide"), onTouchTap: this._onTap }, e.children) }, _onTap: function(e) {
                var t = this.props;
                t.onTapContent && t.onTapContent(t.index, this, e) } }) },
    176: function(e, t, n) { "use strict";
        var r = n(7);
        e.exports = r.createClass({ render: function() {
                return r.createElement("div", { className: "tab-item" }) }, displayName: "TabItem" }) },
    177: function(e, t, n) { "use strict";
        var r = n(7),
            i = n(163),
            o = n(178),
            a = n(171),
            s = n(179);
        e.exports = r.createClass({ displayName: "exports", mixins: [o], propTypes: { title: r.PropTypes.string, body: r.PropTypes.string, headTpl: r.PropTypes.func, bodyTpl: r.PropTypes.func, footTpl: r.PropTypes.func, hasMask: r.PropTypes.bool, hasActions: r.PropTypes.bool, actions: r.PropTypes.array, onShow: r.PropTypes.func, onClose: r.PropTypes.func, open: r.PropTypes.bool, enableCloseClickMask: r.PropTypes.bool }, getDefaultProps: function() {
                return { hasMask: !0, hasActions: !0, customClass: "", actions: [{ customClass: "dialog-submit", onTap: this._onSubmit, label: "submit" }, { customClass: "dialog-cancel", onTap: this.close, label: "cancel" }] } }, getInitialState: function() {
                return { open: this.props.open || !1 } }, windowListeners: { resize: "_onResize" }, componentDidMount: function() { setTimeout(function() { this._onResize() }.bind(this), 300), this.props.open && this._onShow() }, componentWillReceiveProps: function(e) { void 0 !== e.open && e.open !== this.props.open && this.setState({ open: e.open }) }, componentDidUpdate: function() { this._onResize() }, render: function() {
                var e, t, n = this.props,
                    i = n.actions,
                    o = [],
                    l = {};
                if (n.hasActions)
                    for (var u = 0, c = i.length; u < c; u++) t = i[u], e = t.tpl ? t.tpl(t) : r.createElement(a, { key: u, customClass: t.customClass || "", disabled: t.disabled || !1, onTap: t.onTap || this.close, label: t.label }), o.push(e);
                return this.state.open && (l = { width: "100%", height: "100%" }), r.createElement("div", { className: "dialog-wrap " + n.customClass, style: l }, this.state.open && r.createElement("div", { ref: "dialog", className: "dialog" }, r.createElement("div", { className: "dialog-head" }, n.headTpl ? n.headTpl(n.title) : n.title), r.createElement("div", { className: "dialog-body" }, n.bodyTpl ? n.bodyTpl(n.body) : n.body), r.createElement("div", { className: "dialog-foot" }, n.footTpl ? n.footTpl() : "", o)), this.state.open && this.props.hasMask && r.createElement(s, { autoLockScroll: !0, isShow: !0, onTap: this._handleMaskTap })) }, show: function() { this.setState({ open: !0 }, this._onShow) }, close: function() { this.setState({ open: !1 }, this._onClose) }, _onShow: function() { this.props.onShow && this.props.onShow() }, _onClose: function() { this.props.onClose && this.props.onClose() }, _onSubmit: function() { this.setState({ open: !1 }), this.props.onClose(!0) }, _onResize: function() {
                if (this.state.open) {
                    var e = i.findDOMNode(this.refs.dialog),
                        t = e.offsetWidth,
                        n = e.offsetHeight;
                    e.style.marginLeft = -t / 2 + "px", e.style.marginTop = -n / 2 + "px" } }, _handleMaskTap: function(e) {
                var t = this.props.enableCloseClickMask;
                ("undefined" == typeof t || t) && this.close() } }) },
    178: function(e, t, n) { "use strict";
        var r = n(168);
        e.exports = { componentDidMount: function() {
                var e, t = this.windowListeners;
                for (var n in t) e = t[n], r.on(window, n, this[e]) }, componentWillUnmount: function() {
                var e, t = this.windowListeners;
                for (var n in t) e = t[n], r.off(window, n, this[e]) } } },
    179: function(e, t, n) { "use strict";
        var r = n(7);
        e.exports = r.createClass({ displayName: "exports", propTypes: { autoLockScroll: r.PropTypes.bool, isShow: r.PropTypes.bool, onTap: r.PropTypes.func }, _originalBodyOverflow: "", componentDidMount: function() { this._originalBodyOverflow = document.getElementsByTagName("body")[0].style.oveflow, this.props.autoLockScroll && this._disableScroll() }, componentWillUnmount: function() { this._enableScroll() }, componentDidUpdate: function() { this.props.autoLockScroll && (this.props.isShow ? this._disableScroll() : this._enableScroll()) }, render: function() {
                return r.createElement("div", { className: "mask", onTouchTap: this._onTap }) }, _disableScroll: function() { document.getElementsByTagName("body")[0].style.oveflow = "hidden" }, _enableScroll: function() { document.getElementsByTagName("body")[0].style.oveflow = this._originalBodyOverflow }, _onTap: function(e) { this.props.onTap && this.props.onTap(e) } }) },
    180: function(e, t, n) { "use strict";
        var r = n(7),
            i = n(163);
        e.exports = r.createClass({ displayName: "exports", propTypes: { msg: r.PropTypes.string, timeout: r.PropTypes.number, type: r.PropTypes.string }, getDefaultProps: function() {
                return { msg: "", timeout: 3e3, type: "info" } }, render: function() {
                return r.createElement("div", { id: "toast-wrap", className: "toast fadein " + this.props.type }, this.props.msg) }, componentDidMount: function() { this._setTimeout() }, componentDidUpdate: function() { this._setTimeout() }, _timeoutId: null, _setTimeout: function() { this._timeoutId && clearTimeout(this._timeoutId), this._timeoutId = setTimeout(function() { i.unmountComponentAtNode(i.findDOMNode(this).parentNode) }.bind(this), this.props.timeout) } }) },
    181: function(e, t, n) { "use strict";
        var r = n(7),
            i = n(163);
        e.exports = r.createClass({ displayName: "exports", propTypes: { customClass: r.PropTypes.string, placeholder: r.PropTypes.string, onSearch: r.PropTypes.func, throttle: r.PropTypes.number, isFocus: r.PropTypes.bool, text: r.PropTypes.string }, getDefaultProps: function() {
                return { customClass: "", placeholder: "search...", throttle: 200, isFocus: !0 } }, getInitialState: function() {
                return { text: this.props.text || "" } }, componentDidMount: function() { this.props.isFocus && this._setFocus() }, componentWillReceiveProps: function(e) { e.isFocus && this._setFocus(), "undefined" != typeof e.text && e.text !== this.state.text && this.setState({ text: e.text }) }, render: function() {
                var e = this.props;
                return r.createElement("div", { className: "search-wrap " + e.customClass }, r.createElement("form", { className: "search-form", onSubmit: this._onSubmit }, r.createElement("input", { ref: "searchInput", type: "text", autoComplete: "off", value: this.state.text, onChange: this._onInputChange, className: "search-input", placeholder: e.placeholder, onKeyDown: this._onKeyDown }))) }, _timeoutId: null, _onKeyDown: function(e) { this._timeoutId && clearTimeout(this._timeoutId), this._timeoutId = setTimeout(function() { this._goSearch(e) }.bind(this), this.props.throttle) }, _onSubmit: function(e) {
                return this._goSearch(e), e.preventDefault(), !1 }, _goSearch: function(e) {
                var t, n;
                t = i.findDOMNode(this.refs.searchInput), n = t.value, this.props.onSearch && this.props.onSearch(n, e) }, _setFocus: function() {
                var e;
                e = i.findDOMNode(this.refs.searchInput), e.focus() }, _onInputChange: function(e) {
                var t;
                t = i.findDOMNode(this.refs.searchInput), this.setState({ text: t.value }) } }) },
    182: function(e, t, n) { "use strict";
        var r = n(7),
            i = n(168);
        e.exports = r.createClass({ displayName: "exports", propTypes: { customClass: r.PropTypes.string, defaultImg: r.PropTypes.string, realImg: r.PropTypes.string }, getDefaultProps: function() {
                return { customClass: "", defaultImg: "", realImg: "" } }, getInitialState: function() {
                return { loaded: null } }, componentDidMount: function() {
                var e, t = this,
                    n = this.props.realImg;
                n && (e = document.createElement("img"), i.on(e, "load", function() { t.isMounted() && t.setState({ loaded: "success" }) }), i.on(e, "error", function() { t.isMounted() && t.setState({ loaded: "failed" }) }), e.setAttribute("src", n)) }, render: function() {
                var e = this.props,
                    t = {},
                    n = {};
                return "success" == this.state.loaded ? (t = { backgroundImage: "url(" + e.realImg + ")" }, n = { visibility: "hidden" }) : "failed" == this.state.loaded && (n = { visibility: "visible" }), r.createElement("div", { className: "img-wrap " + e.customClass, style: t }, r.createElement("img", { ref: "image", "data-real": e.realImg, src: e.defaultImg, style: n })) } }) },
    230: function(e, t, n) { e.exports = function() { n(36).injection.injectEventPluginsByName({ TapEventPlugin: n(231) }) } },
    231: function(e, t, n) { "use strict";

        function r(e, t) {
            var n = u.extractSingleTouch(t);
            return n ? n[e.page] : e.page in t ? t[e.page] : t[e.client] + c[e.envScroll] }

        function i(e, t) {
            var n = r(_.x, t),
                i = r(_.y, t);
            return Math.pow(Math.pow(n - e.x, 2) + Math.pow(i - e.y, 2), .5) }
        var o = n(35),
            a = n(38),
            s = n(78),
            l = n(92),
            u = n(232),
            c = n(43),
            p = n(233),
            f = o.topLevelTypes,
            d = a.isStartish,
            h = a.isEndish,
            m = function(e) {
                var t = [f.topTouchCancel, f.topTouchEnd, f.topTouchStart, f.topTouchMove];
                return t.indexOf(e) >= 0 },
            v = 10,
            y = 750,
            g = { x: null, y: null },
            b = null,
            _ = { x: { page: "pageX", client: "clientX", envScroll: "currentPageScrollLeft" }, y: { page: "pageY", client: "clientY", envScroll: "currentPageScrollTop" } },
            T = [f.topTouchStart, f.topTouchCancel, f.topTouchEnd, f.topTouchMove],
            w = [f.topMouseDown, f.topMouseMove, f.topMouseUp].concat(T),
            k = { touchTap: { phasedRegistrationNames: { bubbled: p({ onTouchTap: null }), captured: p({ onTouchTapCapture: null }) }, dependencies: w } },
            C = function() {
                return Date.now ? Date.now : function() {
                    return +new Date } }(),
            P = { tapMoveThreshold: v, ignoreMouseThreshold: y, eventTypes: k, extractEvents: function(e, t, n, o, a) {
                    if (m(e)) b = C();
                    else if (b && C() - b < y) return null;
                    if (!d(e) && !h(e)) return null;
                    var u = null,
                        c = i(g, o);
                    return h(e) && c < v && (u = l.getPooled(k.touchTap, n, o, a)), d(e) ? (g.x = r(_.x, o), g.y = r(_.y, o)) : h(e) && (g.x = 0, g.y = 0), s.accumulateTwoPhaseDispatches(u), u } };
        e.exports = P },
    232: function(e, t) {
        var n = { extractSingleTouch: function(e) {
                var t = e.touches,
                    n = e.changedTouches,
                    r = t && t.length > 0,
                    i = n && n.length > 0;
                return !r && i ? n[0] : r ? t[0] : e } };
        e.exports = n },
    233: 84,
    244: function(e, t, n) { "use strict";
        t.__esModule = !0;
        var r = n(245);
        Object.defineProperty(t, "Provider", { enumerable: !0, get: function() {
                return r.default } });
        var i = n(247);
        Object.defineProperty(t, "connect", { enumerable: !0, get: function() {
                return i.default } }) },
    245: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

        function s() { p || (p = !0, console.error("<Provider> does not support changing `store` on the fly. It is most likely that you see this error because you updated to Redux 2.x and React Redux 2.x which no longer hot reload reducers automatically. See https://github.com/rackt/react-redux/releases/tag/v2.0.0 for the migration instructions.")) }
        t.__esModule = !0, t.default = void 0;
        var l = n(7),
            u = n(246),
            c = r(u),
            p = !1,
            f = function(e) {
                function t(n, r) { i(this, t);
                    var a = o(this, e.call(this, n, r));
                    return a.store = n.store, a }
                return a(t, e), t.prototype.getChildContext = function() {
                    return { store: this.store } }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = this.store,
                        n = e.store;
                    t !== n && s() }, t.prototype.render = function() {
                    var e = this.props.children;
                    return l.Children.only(e) }, t }(l.Component);
        t.default = f, f.propTypes = { store: c.default.isRequired, children: l.PropTypes.element.isRequired }, f.childContextTypes = { store: c.default.isRequired } },
    246: function(e, t, n) { "use strict";
        t.__esModule = !0;
        var r = n(7);
        t.default = r.PropTypes.shape({ subscribe: r.PropTypes.func.isRequired, dispatch: r.PropTypes.func.isRequired, getState: r.PropTypes.func.isRequired }) },
    247: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

        function s(e) {
            return e.displayName || e.name || "Component" }

        function l(e, t, n) {
            function r(e, t) {
                var n = e.getState(),
                    r = E ? g(n, t) : g(n);
                return (0, k.default)((0, y.default)(r), "`mapStateToProps` must return an object. Instead received %s.", r), r }

            function l(e, t) {
                var n = e.dispatch,
                    r = x ? _(n, t) : _(n);
                return (0, k.default)((0, y.default)(r), "`mapDispatchToProps` must return an object. Instead received %s.", r), r }

            function f(e, t, n) {
                var r = w(e, t, n);
                return (0, k.default)((0, y.default)(r), "`mergeProps` must return an object. Instead received %s.", r), r }
            var h = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3],
                v = Boolean(e),
                g = e || C,
                _ = (0, y.default)(t) ? (0, b.default)(t) : t || P,
                w = n || O,
                E = g.length > 1,
                x = _.length > 1,
                I = h.pure,
                D = void 0 === I || I,
                L = h.withRef,
                M = void 0 !== L && L,
                N = S++;
            return function(e) {
                var t = function(t) {
                    function n(e, a) { i(this, n);
                        var s = o(this, t.call(this, e, a));
                        return s.version = N, s.store = e.store || a.store, (0, k.default)(s.store, 'Could not find "store" in either the context or ' + ('props of "' + s.constructor.displayName + '". ') + "Either wrap the root component in a <Provider>, " + ('or explicitly pass "store" as a prop to "' + s.constructor.displayName + '".')), s.stateProps = r(s.store, e), s.dispatchProps = l(s.store, e), s.state = { storeState: null }, s.updateState(), s }
                    return a(n, t), n.prototype.shouldComponentUpdate = function(e, t) {
                        if (!D) return this.updateStateProps(e), this.updateDispatchProps(e), this.updateState(e), !0;
                        var n = t.storeState !== this.state.storeState,
                            r = !(0, m.default)(e, this.props),
                            i = !1,
                            o = !1;
                        return (n || r && E) && (i = this.updateStateProps(e)), r && x && (o = this.updateDispatchProps(e)), !!(r || i || o) && (this.updateState(e), !0) }, n.prototype.computeNextState = function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? this.props : arguments[0];
                        return f(this.stateProps, this.dispatchProps, e) }, n.prototype.updateStateProps = function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? this.props : arguments[0],
                            t = r(this.store, e);
                        return !(0, m.default)(t, this.stateProps) && (this.stateProps = t, !0) }, n.prototype.updateDispatchProps = function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? this.props : arguments[0],
                            t = l(this.store, e);
                        return !(0, m.default)(t, this.dispatchProps) && (this.dispatchProps = t, !0) }, n.prototype.updateState = function() {
                        var e = arguments.length <= 0 || void 0 === arguments[0] ? this.props : arguments[0];
                        this.nextState = this.computeNextState(e) }, n.prototype.isSubscribed = function() {
                        return "function" == typeof this.unsubscribe }, n.prototype.trySubscribe = function() { v && !this.unsubscribe && (this.unsubscribe = this.store.subscribe(this.handleChange.bind(this)), this.handleChange()) }, n.prototype.tryUnsubscribe = function() { this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null) }, n.prototype.componentDidMount = function() { this.trySubscribe() }, n.prototype.componentWillUnmount = function() { this.tryUnsubscribe() }, n.prototype.handleChange = function() { this.unsubscribe && this.setState({ storeState: this.store.getState() }) }, n.prototype.getWrappedInstance = function() {
                        return (0, k.default)(M, "To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call."), this.refs.wrappedInstance }, n.prototype.render = function() {
                        var t = M ? "wrappedInstance" : null;
                        return p.default.createElement(e, u({}, this.nextState, { ref: t })) }, n }(c.Component);
                return t.displayName = "Connect(" + s(e) + ")", t.WrappedComponent = e, t.contextTypes = { store: d.default }, t.propTypes = { store: d.default }, (0, T.default)(t, e) } }
        var u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) }
            return e };
        t.__esModule = !0, t.default = l;
        var c = n(7),
            p = r(c),
            f = n(246),
            d = r(f),
            h = n(248),
            m = r(h),
            v = n(249),
            y = r(v),
            g = n(250),
            b = r(g),
            _ = n(260),
            T = r(_),
            w = n(261),
            k = r(w),
            C = function() {
                return {} },
            P = function(e) {
                return { dispatch: e } },
            O = function(e, t, n) {
                return u({}, n, e, t) },
            S = 0 },
    248: function(e, t) { "use strict";

        function n(e, t) {
            if (e === t) return !0;
            var n = Object.keys(e),
                r = Object.keys(t);
            if (n.length !== r.length) return !1;
            for (var i = Object.prototype.hasOwnProperty, o = 0; o < n.length; o++)
                if (!i.call(t, n[o]) || e[n[o]] !== t[n[o]]) return !1;
            return !0 }
        t.__esModule = !0, t.default = n },
    249: function(e, t) { "use strict";

        function n(e) {
            return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e }

        function r(e) {
            if (!e || "object" !== ("undefined" == typeof e ? "undefined" : n(e))) return !1;
            var t = "function" == typeof e.constructor ? Object.getPrototypeOf(e) : Object.prototype;
            if (null === t) return !0;
            var r = t.constructor;
            return "function" == typeof r && r instanceof r && i(r) === i(Object) }
        t.__esModule = !0, t.default = r;
        var i = function(e) {
            return Function.prototype.toString.call(e) } },
    250: function(e, t, n) { "use strict";

        function r(e) {
            return function(t) {
                return (0, i.bindActionCreators)(e, t) } }
        t.__esModule = !0, t.default = r;
        var i = n(251) },
    251: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }
        t.__esModule = !0;
        var i = n(252),
            o = r(i),
            a = n(254),
            s = r(a),
            l = n(257),
            u = r(l),
            c = n(258),
            p = r(c),
            f = n(259),
            d = r(f);
        t.createStore = o.default, t.combineReducers = s.default, t.bindActionCreators = u.default, t.applyMiddleware = p.default, t.compose = d.default },
    252: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            function n() {
                return u }

            function r(e) { c.push(e);
                var t = !0;
                return function() {
                    if (t) { t = !1;
                        var n = c.indexOf(e);
                        c.splice(n, 1) } } }

            function i(e) {
                if (!a.default(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if ("undefined" == typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (p) throw new Error("Reducers may not dispatch actions.");
                try { p = !0, u = l(u, e) } finally { p = !1 }
                return c.slice().forEach(function(e) {
                    return e() }), e }

            function o(e) { l = e, i({ type: s.INIT }) }
            if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
            var l = e,
                u = t,
                c = [],
                p = !1;
            return i({ type: s.INIT }), { dispatch: i, subscribe: r, getState: n, replaceReducer: o } }
        t.__esModule = !0, t.default = i;
        var o = n(253),
            a = r(o),
            s = { INIT: "@@redux/INIT" };
        t.ActionTypes = s },
    253: function(e, t) { "use strict";

        function n(e) {
            if (!e || "object" != typeof e) return !1;
            var t = "function" == typeof e.constructor ? Object.getPrototypeOf(e) : Object.prototype;
            if (null === t) return !0;
            var n = t.constructor;
            return "function" == typeof n && n instanceof n && r(n) === r(Object) }
        t.__esModule = !0, t.default = n;
        var r = function(e) {
            return Function.prototype.toString.call(e) };
        e.exports = t.default },
    254: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            var n = t && t.type,
                r = n && '"' + n.toString() + '"' || "an action";
            return 'Reducer "' + e + '" returned undefined handling ' + r + ". To ignore an action, you must explicitly return the previous state." }

        function o(e) { Object.keys(e).forEach(function(t) {
                var n = e[t],
                    r = n(void 0, { type: s.ActionTypes.INIT });
                if ("undefined" == typeof r) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if ("undefined" == typeof n(void 0, { type: i })) throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + s.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.") }) }

        function a(e) {
            var t, n = f.default(e, function(e) {
                return "function" == typeof e });
            try { o(n) } catch (e) { t = e }
            var r = c.default(n, function() {});
            return function(e, o) {
                if (void 0 === e && (e = r), t) throw t;
                var a = !1,
                    s = c.default(n, function(t, n) {
                        var r = e[n],
                            s = t(r, o);
                        if ("undefined" == typeof s) {
                            var l = i(n, o);
                            throw new Error(l) }
                        return a = a || s !== r, s });
                return a ? s : e } }
        t.__esModule = !0, t.default = a;
        var s = n(252),
            l = n(253),
            u = (r(l), n(255)),
            c = r(u),
            p = n(256),
            f = r(p);
        e.exports = t.default },
    255: function(e, t) { "use strict";

        function n(e, t) {
            return Object.keys(e).reduce(function(n, r) {
                return n[r] = t(e[r], r), n }, {}) }
        t.__esModule = !0, t.default = n, e.exports = t.default },
    256: function(e, t) { "use strict";

        function n(e, t) {
            return Object.keys(e).reduce(function(n, r) {
                return t(e[r]) && (n[r] = e[r]), n }, {}) }
        t.__esModule = !0, t.default = n, e.exports = t.default },
    257: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            return function() {
                return t(e.apply(void 0, arguments)) } }

        function o(e, t) {
            if ("function" == typeof e) return i(e, t);
            if ("object" != typeof e || null === e || void 0 === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            return s.default(e, function(e) {
                return i(e, t) })
        }
        t.__esModule = !0, t.default = o;
        var a = n(255),
            s = r(a);
        e.exports = t.default
    },
    258: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function(e) {
                return function(n, r) {
                    var i = e(n, r),
                        a = i.dispatch,
                        l = [],
                        u = { getState: i.getState, dispatch: function(e) {
                                return a(e) } };
                    return l = t.map(function(e) {
                        return e(u) }), a = s.default.apply(void 0, l)(i.dispatch), o({}, i, { dispatch: a }) } } }
        t.__esModule = !0;
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) }
            return e };
        t.default = i;
        var a = n(259),
            s = r(a);
        e.exports = t.default },
    259: function(e, t) { "use strict";

        function n() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function(e) {
                return t.reduceRight(function(e, t) {
                    return t(e) }, e) } }
        t.__esModule = !0, t.default = n, e.exports = t.default },
    260: function(e, t) { "use strict";
        var n = { childContextTypes: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, mixins: !0, propTypes: !0, type: !0 },
            r = { name: !0, length: !0, prototype: !0, caller: !0, arguments: !0, arity: !0 },
            i = "function" == typeof Object.getOwnPropertySymbols;
        e.exports = function(e, t, o) {
            if ("string" != typeof t) {
                var a = Object.getOwnPropertyNames(t);
                i && (a = a.concat(Object.getOwnPropertySymbols(t)));
                for (var s = 0; s < a.length; ++s)
                    if (!(n[a[s]] || r[a[s]] || o && o[a[s]])) try { e[a[s]] = t[a[s]] } catch (e) {} }
            return e } },
    261: function(e, t, n) { "use strict";
        var r = function(e, t, n, r, i, o, a, s) {
            if (!e) {
                var l;
                if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, r, i, o, a, s],
                        c = 0;
                    l = new Error(t.replace(/%s/g, function() {
                        return u[c++] })), l.name = "Invariant Violation" }
                throw l.framesToPop = 1, l } };
        e.exports = r },
    263: function(e, t) { "use strict";

        function n(e) {
            var t = e.dispatch,
                n = e.getState;
            return function(e) {
                return function(r) {
                    return "function" == typeof r ? r(t, n) : e(r) } } }
        e.exports = n },
    264: function(e, t, n) {
        (function(t) {
            function n(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) < 0 && (n[r] = e[r]);
                return n }
            e.exports = function() {
                return function(e) {
                    return function(r) {
                        var i = r.promise,
                            o = r.types,
                            a = n(r, ["promise", "types"]);
                        if (!i) return e(r);
                        var s = o[0],
                            l = o[1],
                            u = o[2];
                        return e({ type: "@@REQUEST/START" }), e(t.assign({}, a, { type: s })), i.then(function(n) {
                            return e({ type: "@@REQUEST/SUCCESS" }), e(t.assign({}, a, { type: l, result: n })), n }, function(n) {
                            return e({ type: "@@REQUEST/FAILED" }), e(t.assign({}, a, { type: u, error: n })), n }) } } } }).call(t, n(4)) },
    275: function(e, t, n) {
        (function(r) { "use strict";

            function i(e) {
                return e && e.__esModule ? e : { default: e } }

            function o(e, t) { e || (e = "无标题");
                var n = { name: e },
                    r = window.cow.currentFile.guid;
                g.default.post("/api/file/" + r, n).then(function() { "function" == typeof t && t(), _.default.notify("file:updateTitle", e) }).fail(function() { console.log("name modify failed") }) }

            function a(e, t) {
                var n = r.Deferred(),
                    i = [],
                    o = {};
                for (var a in t) e[a] !== t[a] && (i.push(a), o[a] = t[a]);
                if (0 === i.length) n.resolve({});
                else {
                    var s = "/api/file/" + e.guid;
                    g.default.post(s, o, function(t) { 0 === t.code ? (v(e.guid, t.data), n.resolve(t.data)) : n.reject() }, function(e) { n.reject(e) }) }
                return n.promise() }

            function s(e) {
                var t = "/favorites/create",
                    n = r.Deferred(),
                    i = { guid: e.guid },
                    o = e.tags || [];
                return g.default.post(t, i, function(t) { 0 === t.code ? (o.indexOf("favorites") === -1 && o.push("favorites"), v(e.guid, { tags: o }), n.resolve({ tags: o })) : n.reject() }, function(e) { n.reject(e) }), n.promise() }

            function l(e) {
                var t = "/favorites/destroy",
                    n = r.Deferred(),
                    i = { guid: e.guid },
                    o = e.tags || [];
                return g.default.post(t, i, function(t) {
                    if (0 === t.code) {
                        var r = o.indexOf("favorites");
                        o.splice(r, 1), v(e.guid, { tags: o }), n.resolve({ tags: o }) } else n.reject() }, function(e) { n.reject(e) }), n.promise() }

            function u(e) {
                var t = "/api/file/create_copy",
                    n = r.Deferred(),
                    i = { guid: e };
                return g.default.post(t, i, function(e) { 0 === e.code ? (n.resolve(e.data), cow.currentFile.children.push(e.data)) : n.reject() }, function(e) { n.reject(e) }), n.promise() }

            function c(e) {
                var t = r.Deferred(),
                    n = e.guid,
                    i = "/api/file/" + n + "/ancestors";
                return g.default.get(i, function(e) {
                    if (0 === e.code) {
                        var n = e.data,
                            r = n.ancestors || [];
                        r.unshift({ name: "个人桌面", type: "desktop", link: "/desktop" }), p(r), t.resolve(r) } else t.reject() }, function() { t.reject() }), t.promise() }

            function p(e) { e.map(function(e, t) {
                    return 0 !== t && (e.link = "/folder/" + e.guid, e.type = "folder"), e }) }

            function f(e) {
                var t = r.Deferred(),
                    n = "/api/share/delete",
                    i = { guid: e.guid, user_id: window.cow.currentUser.id, file_type: e.shortcut_id ? "shortcut" : "file" };
                return g.default.post(n, i, function(n) { 0 === n.code ? (t.resolve(n), v(e.guid, { is_delete: 1 })) : t.reject() }, function() { t.reject() }), t.promise() }

            function d(e, t, n) {
                var i = arguments.length <= 3 || void 0 === arguments[3] ? "info" : arguments[3],
                    o = r.Deferred(),
                    a = { from: e, to: t, file_type: n, action_type: i },
                    s = "/api/file/move";
                return g.default.post(s, a, function(t) { o.resolve(t), "action" === i && v(e, { is_delete: 1 }) }, function(e) { o.reject(e) }), o.promise() }

            function h(e, t) {
                var n = r.Deferred(),
                    i = "/api/file/sort",
                    o = { target_id: e };
                return t && (o.next_id = t), cow.currentFile.guid ? (o.sort_type = "folder", o.folder_id = cow.currentFile.id) : o.sort_type = "home", g.default.post(i, o).then(function(r) { 0 === r.code ? (n.resolve(), m(e, t)) : n.reject() }).fail(function(e) { n.reject(e) }), n.promise() }

            function m(e, t) {
                var n = cow.currentFile.children,
                    r = null,
                    i = -1,
                    o = -1;
                (n || []).some(function(n, a) {
                    return n.id === e && (r = n, i = a), n.id === t && (o = a), i >= 0 && (o >= 0 || null === t || "undefined" == typeof t) }), o >= 0 && i >= 0 ? (n.splice(o, 0, r), o > i ? n.splice(i, 1) : n.splice(i + 1, 1)) : "undefined" != typeof t && null !== t || (n.splice(i, 1), n.push(r)) }

            function v(e, t) {
                var n = cow.currentFile.children;
                (n || []).some(function(r, i) {
                    if (r.guid === e) {
                        for (var o in t) r[o] = t[o], "is_delete" === o && +t.is_delete >= 1 && n.splice(i, 1);
                        return !0 }
                    return !1 }) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var y = n(189),
                g = i(y),
                b = n(186),
                _ = i(b);
            t.default = { updateTitle: o, updateFile: a, destroyFavoriteFile: l, createFavoriteFile: s, createCopyFile: u, getAncestors: c, quiteShare: f, resortList: h, moveToFolder: d }, e.exports = t.default }).call(t, n(1)) },
    282: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(283),
            o = r(i),
            a = function(e) {
                var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                return { types: ["LIST_LOAD", "LIST_LOAD_SUCCESS", "LIST_LOAD_FAIL"], promise: o.default.getListByGuid(e, t) } },
            s = function() {
                return { types: ["RECENT_LIST_LOAD", "RECENT_LIST_LOAD_SUCCESS", "RECENT_LIST_LOAD_FAIL"], promise: o.default.getRecentList() } };
        t.default = { getList: a, getRecentList: s }, e.exports = t.default },
    283: function(e, t, n) {
        (function(r, i, o) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = n(189),
                s = n(239),
                l = function(e) {
                    var t = e,
                        n = e.children,
                        r = {};
                    return n && n.length > 0 ? ! function() {
                        var e = t.guid || "",
                            i = n.map(function(t) {
                                return t.authorized = "undefined" == typeof t.authorized || t.authorized, t.parent = { guid: e }, t });
                        i.forEach(function(e) { r[e.guid] = e }) }() : "undefined" == typeof n && (t.authorized = window.cow.authorized, r[t.guid] = t), r },
                u = function(e) {
                    return r.remove(e.children, function(e) {
                        return !!e.is_delete }), e },
                c = function(e, t) {
                    var n = window.cow.tempCurrentFile,
                        r = window.cow.tempCurrentFile.guid || "";
                    if (!t && n && e === r) return i.resolve(u(n));
                    var o = window.cow.listType,
                        l = (0, a.genGuid)(),
                        c = "";
                    return c = ["recent", "favorites"].indexOf(o) > -1 ? "/-/" + o + "/?t=" + l : "/-/" + e + "?t=" + l, "undefined" == typeof e && (c = "/-/?t=" + l), (0, s.ajaxGet)(c).then(function(t) {
                        if (0 === t.code) {
                            var n = t.data.file;
                            return u(n) }
                        throw location.href = e ? "/folder/" + e : "/desktop", new Error("ajax error: " + t.code) }).catch(function(t) {
                        throw window.loction.href = e ? "/folder/" + e : "/desktop", new Error("ajax error") }) },
                p = function() {
                    var e = o.Deferred(),
                        t = (0, a.genGuid)(),
                        n = "/-/recent/?t=" + t;
                    return o.get(n).done(function(t) {
                        if (0 === t.code) {
                            var n = t.data.file;
                            e.resolve(u(n)) } else e.reject(t) }).fail(function(t) { e.reject(t) }), e.promise() };
            t.default = { processListData: l, getListByGuid: c, getRecentList: p }, e.exports = t.default }).call(t, n(4), n(198), n(1)) },
    292: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t } }(),
            s = function(e, t, n) {
                for (var r = !0; r;) {
                    var i = e,
                        o = t,
                        a = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a) }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    e = u, t = o, n = a, r = !0, s = u = void 0 } },
            l = n(7),
            u = r(l),
            c = n(161),
            p = function(e) {
                function t(e) { i(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { open: e.open || !1 } }
                return o(t, e), a(t, [{ key: "componentWillReceiveProps", value: function(e) { "undefined" != typeof e.open && e.open !== this.state.open && this.setState({ open: e.open }) } }, { key: "_headTpl", value: function(e) {
                        return this.props.hasCloseButton ? u.default.createElement("div", null, u.default.createElement("span", { className: "dialog-title" }, e), u.default.createElement("span", { className: "hicon icon-close dialog-close", onTouchTap: this._close.bind(this) })) : u.default.createElement("span", { className: "dialog-title" }, e) } }, { key: "_close", value: function() { this.setState({ open: !1 });
                        var e = this.props.onClose; "function" == typeof e && e() } }, { key: "render", value: function() {
                        var e = this.props,
                            t = e.customClass,
                            n = e.title,
                            r = e.bodyTpl,
                            i = e.onClose,
                            o = e.actions,
                            a = e.enableCloseClickMask,
                            s = this.state.open,
                            l = this.props.buttonLayout,
                            p = !1;
                        o && o.length > 0 && (p = !0, l = l || "vertical", o.map(function(e) { e.customClass += " flat-footer-button " + l }));
                        var f = n ? "" : "no-title",
                            d = o && o.length > 0 ? "" : "no-action";
                        return u.default.createElement(c.Dialog, { ref: "dialog", customClass: "flat-dialog " + f + " " + d + " " + t, title: n, headTpl: this._headTpl.bind(this), bodyTpl: r, onClose: i || function() {}, actions: o || [], open: "boolean" == typeof s && s, enableCloseClickMask: a, hasActions: p }) } }]), t }(l.Component);
        t.default = p, p.propTypes = { customClass: l.PropTypes.string, title: l.PropTypes.string, bodyTpl: l.PropTypes.func, onClose: l.PropTypes.func, actions: l.PropTypes.array, open: l.PropTypes.bool, hasCloseButton: l.PropTypes.bool, enableCloseClickMask: l.PropTypes.bool, buttonLayout: l.PropTypes.oneOf(["vertical", "horizontal"]) }, e.exports = t.default },
    467: function(e, t, n) {
        var r = n(7),
            i = n(163),
            o = n(468);
        e.exports = function(e) {
            var e, t, n, a;
            a = function() {
                return t.remove() }, e = e || {}, e.cleanup = a, t = document.body.appendChild(document.createElement("div")), n = i.render(r.createElement(o, e), t) } },
    468: function(e, t, n) {
        (function(t) { "use strict";
            var r = n(7);
            e.exports = r.createClass({ displayName: "exports", propTypes: { title: r.PropTypes.string, description: r.PropTypes.string, confirmLabel: r.PropTypes.string, abortLabel: r.PropTypes.string, confirmClass: r.PropTypes.string, abortClass: r.PropTypes.string, confirmFun: r.PropTypes.func, abortFun: r.PropTypes.func, buttons: r.PropTypes.array }, getDefaultProps: function() {
                    return { title: "确认弹窗", description: "确定执行该操作吗？", confirmLabel: "确认", abortLabel: "取消", confirmFun: function() {}, abortFun: function() {}, confirmClass: "", abortClass: "", buttons: [] } }, render: function() {
                    return r.createElement("div", { className: "confirm-wrap", onClick: this._handleWrapClick }, r.createElement("div", { className: "confirm-dialog dialog" }, r.createElement("div", { className: "confirm-dialog-header dialog-head" }, r.createElement("span", null, this.props.title), r.createElement("span", { className: "hicon icon-close confirm-close", onClick: this._abort })), r.createElement("div", { className: "confirm-dialog-content dialog-body", dangerouslySetInnerHTML: { __html: this.props.description } }), this._renderFooter())) }, _customButtonClickFun: function(e, t) {
                    var n = this;
                    return function() { "function" == typeof e && e(), "boolean" == typeof t && t && n._cleanup() } }, _renderFooter: function() {
                    var e = this;
                    if (this.props.buttons.length > 0) {
                        var n = [];
                        return t.each(this.props.buttons, function(t, i) {
                            var o = t.type || "button",
                                a = t.onClick || function() {},
                                s = t.customClass || "",
                                l = t.href || "",
                                u = t.target || "_blank",
                                c = t.buttonLabel || "",
                                p = !!t.closeAfterClick; "link-button" === o ? n.push(r.createElement("a", { key: i, className: "btn confirm-btn " + s, href: l, onClick: e._customButtonClickFun(a, p), target: u }, c)) : "button" === o && n.push(r.createElement("button", { key: i, className: "btn confirm-btn " + s, onClick: e._customButtonClickFun(a, p) }, c)) }), r.createElement("div", { className: "confirm-dialog-footer dialog-foot" }, n) }
                    return r.createElement("div", { className: "confirm-dialog-footer dialog-foot" }, r.createElement("button", { role: "confirm", type: "button", className: "btn btn-ok confirm-btn " + this.props.confirmClass, ref: "confirm", onClick: this._confirm }, this.props.confirmLabel), r.createElement("button", { role: "abort", type: "button", className: "btn confirm-btn " + this.props.abortClass, onClick: this._abort }, this.props.abortLabel)) }, _confirm: function() { this.props.confirmFun(), this._cleanup() }, _abort: function() { this.props.abortFun(), this._cleanup() }, _cleanup: function() { this.props.cleanup && this.props.cleanup() }, _handleWrapClick: function(e) { e.target.className.indexOf("confirm-wrap") > -1 && this._abort() } }) }).call(t, n(4)) },
    489: function(e, t, n) {
        (function(r) { "use strict";

            function i(e) {
                return e && e.__esModule ? e : { default: e } }

            function o(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n }
                return Array.from(e) }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var l = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t } }(),
                u = function(e, t, n) {
                    for (var r = !0; r;) {
                        var i = e,
                            o = t,
                            a = n;
                        r = !1, null === i && (i = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(i, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(a) }
                        var u = Object.getPrototypeOf(i);
                        if (null === u) return;
                        e = u, t = o, n = a, r = !0, s = u = void 0 } },
                c = n(7),
                p = i(c),
                f = n(490),
                d = i(f),
                h = n(499),
                m = i(h),
                v = n(342),
                y = i(v),
                g = n(467),
                b = i(g),
                _ = n(492),
                T = i(_),
                w = n(189),
                k = i(w),
                C = n(500),
                P = i(C),
                O = y.default.initLimition(),
                S = function(e) {
                    function t(e) { a(this, t), u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
                        var n = {};
                        n = { memberDialogOpen: !1, shareDialogOpen: !1, disableAddUser: !0 };
                        var r = e.shareList,
                            i = e.fileGuid;
                        r ? n.shareList = [].concat(o(e.shareList)) : (n.shareList = [], i && this._initShareList(i)), this.state = n }
                    return s(t, e), l(t, [{ key: "componentWillReceiveProps", value: function(e) {
                            var t = this;
                            if (e.shareList) {
                                if (!this._isSameUserList(e.shareList, this.state.shareList)) {
                                    var n = [].concat(o(e.shareList));
                                    this._attachPermission(n).then(function(e) { t.setState({ shareList: e.userList, fileTeamId: e.fileTeamId, disableAddUser: e.disableAddUser }) }, function(e) { console.dir(e) }) } } else !e.fileGuid || e.shareList || this.props.shareList || this._initShareList(e.fileGuid) } }, { key: "_attachPermission", value: function(e) {
                            var t = this;
                            return new r(function(n, r) {!e || e && 0 === e.length ? n({ userList: e }) : ! function() {
                                    var i = t.props.fileGuid,
                                        o = t.props.fileUserId,
                                        a = cow.currentUser,
                                        s = !0;
                                    P.default.getFileTeamInfo(i).then(function(t) {
                                        var r = t.team_id || t.teamId;
                                        o === a.id ? (e.map(function(e) { e.canBeRemove = !0 }), s = !1) : r ? T.default.isEnterpriseStandard(a) && r === a.team_id ? (s = !1, e.map(function(e) { "admin" === a.team_role && e.id !== o && "admin" !== e.team_role && "creator" !== e.team_role ? e.canBeRemove = !0 : "creator" === a.team_role ? e.canBeRemove = !0 : e.canBeRemove = T.default.isSelf(e, a) })) : (s = !0, e.map(function(e) { e.canBeRemove = T.default.isSelf(e, a) })) : (s = !1, e.map(function(e) { e.canBeRemove = T.default.isSelf(e, a) })), n({ disableAddUser: s, userList: e, fileTeamId: r }) }, function(e) { r(e) }) }() }) } }, { key: "_isSameUserList", value: function(e, t) {
                            if (!e || !t) return !1;
                            if (e.length !== t.length) return !1;
                            var n = !0;
                            return e.some(function(e, r) {
                                return !T.default.isSameUser(e, t[r]) && (n = !1, !0) }), n } }, { key: "_initShareList", value: function(e) {
                            var t = this;
                            T.default.getShareUsers(e).then(function(e) {
                                var n = t.state || {},
                                    r = n.memberDialogOpen,
                                    i = n.shareDialogOpen,
                                    o = {};
                                o.shareList = e, t._attachPermission(e).then(function(n) { o.shareList = n.userList, o.fileTeamId = n.fileTeamId, o.disableAddUser = n.disableAddUser, i && !r && t._shouldShowMemberDialogFirst(e) && (o.shareDialogOpen = !1, o.memberDialogOpen = !0), t.setState(o) }, function(e) { console.dir(e) }) }) } }, { key: "close", value: function() { this._hideAllDialog() } }, { key: "show", value: function() {
                            var e = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];!e && this._shouldShowMemberDialogFirst() ? this.state.memberDialogOpen || this._showMemberDialog() : this.state.shareDialogOpen || this._showShareDialog() } }, { key: "_shouldShowMemberDialogFirst", value: function(e) {
                            var t = this.state.shareList,
                                n = this.props.fileGuid;
                            return e && (t = e), !!(t && 1 === t.length && t[0].isOwner && !n && ["doc", "spreadsheet"].indexOf(cow.pageType) > -1) } }, { key: "_showMemberDialog", value: function() {
                            var e = this;
                            T.default.getRecentMember().then(function(t) {
                                if (0 === +t.code) {
                                    var n = (t.data || []).filter(function(e) {
                                        return +e.status > -1 });
                                    e.setState({ memberDialogOpen: !0, shareDialogOpen: !1, recentUserList: n }) } }, function() {}), T.default.isEnterpriseStandard(cow.currentUser) && T.default.getTeamMembers().then(function(t) {
                                var n = [];
                                t.forEach(function(e) { T.default.isSelf(e) || n.push(e) }), e.setState({ teamMembers: n }) }, function() {}) } }, { key: "_showShareDialog", value: function() { this.setState({ memberDialogOpen: !1, shareDialogOpen: !0 }) } }, { key: "_hideAllDialog", value: function() { this.state.memberDialogOpen && this.setState({ memberDialogOpen: !1 }), this.state.shareDialogOpen && this.setState({ shareDialogOpen: !1 }) } }, { key: "_onMemberDialogSubmit", value: function(e) {
                            var t = this.props.onShareUsersChanged; "function" == typeof t && t({ type: "add", users: e || [] }), this._showShareDialog() } }, { key: "_onMemberDialogCancel", value: function() { this._shouldShowMemberDialogFirst() ? (this._hideAllDialog(), this._handleDialogClose()) : this._showShareDialog() } }, { key: "_onShareDialogCancel", value: function() { this._hideAllDialog(), this._handleDialogClose() } }, { key: "_onRemoveMember", value: function(e) {
                            var t = this,
                                n = this.state.shareList,
                                r = "";
                            if (r = ["doc", "spreadsheet"].indexOf(cow.pageType) > -1 ? cow.currentFile.guid : this.props.fileGuid) {
                                var i = "";
                                i = T.default.isSelf(e) ? "确认要删除对你自己的共享吗？<br/>删除后你将无权限访问该文件" : "确认要删除对 <b>" + (e.email ? e.email : e.name) + "</b> 的共享吗？<br/>删除后该成员将无权限访问该文件", this._hideAllDialog(), (0, b.default)({ title: "删除共享", description: i, confirmFun: function() { T.default.deleteShareUser(r, e.id).then(function() { k.default.alert({ title: "已删除<span class='blue'>" + e.name + "</span>" });
                                            var r = t.props.onShareUsersChanged;
                                            n.some(function(t, r) {
                                                return !!T.default.isSameUser(t, e) && (n.splice(r, 1), !0) }), t.setState({ shareList: n }, function() { "function" == typeof r && r({ type: "remove", users: e ? [e] : [] }) }), T.default.isSelf(e) || t._showShareDialog() }, function() { k.default.alert({ title: "删除失败", type: "error" }), t._showShareDialog() }) }, abortFun: function() { t._showShareDialog() } }) } } }, { key: "_onMemberDialogClose", value: function() { this.state.memberDialogOpen && this.setState({ memberDialogOpen: !1 }), this._handleDialogClose() } }, { key: "_onShareDialogClose", value: function() { this.state.shareDialogOpen && this.setState({ shareDialogOpen: !1 }), this._handleDialogClose() } }, { key: "_handleDialogClose", value: function() {
                            var e = this.props.onClose; "function" == typeof e && e() } }, { key: "render", value: function() {
                            var e = this.props,
                                t = e.fileId,
                                n = e.fileGuid,
                                r = e.fileUserId,
                                i = this.state,
                                o = i.memberDialogOpen,
                                a = i.teamMembers,
                                s = i.recentUserList,
                                l = i.shareDialogOpen,
                                u = i.shareList,
                                c = i.fileTeamId,
                                f = i.disableAddUser;
                            return p.default.createElement("div", { className: "teamworker-wrapper" }, p.default.createElement(d.default, { open: o, fileId: t, fileGuid: n, fileUserId: r, fileTeamId: c, onSubmit: this._onMemberDialogSubmit.bind(this), onCancel: this._onMemberDialogCancel.bind(this), recentUserList: s, teamMembers: a, shareList: u, onClose: this._onMemberDialogClose.bind(this), maxShareCount: O.teamworkerCount }), p.default.createElement(m.default, { ref: "shareList", open: l, onCancel: this._onShareDialogCancel.bind(this), showAddPanel: this._showMemberDialog.bind(this), onRemoveMember: this._onRemoveMember.bind(this), fileUserId: r, fileTeamId: c, disableAddUser: f, shareList: u, onClose: this._onShareDialogClose.bind(this), maxShareCount: O.teamworkerCount })) } }]), t }(c.Component);
            t.default = S, S.propTypes = { shareList: c.PropTypes.array, fileId: c.PropTypes.number, fileGuid: c.PropTypes.string, fileUserId: c.PropTypes.number, onShareUsersChanged: c.PropTypes.func, onClose: c.PropTypes.func }, e.exports = t.default }).call(t, n(198)) },
    490: function(e, t, n) {
        (function(r, i) { "use strict";

            function o(e) {
                return e && e.__esModule ? e : { default: e } }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var l = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t } }(),
                u = function(e, t, n) {
                    for (var r = !0; r;) {
                        var i = e,
                            o = t,
                            a = n;
                        r = !1, null === i && (i = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(i, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(a) }
                        var u = Object.getPrototypeOf(i);
                        if (null === u) return;
                        e = u, t = o, n = a, r = !0, s = u = void 0 } },
                c = n(7),
                p = o(c),
                f = n(161),
                d = n(491),
                h = o(d),
                m = n(498),
                v = o(m),
                y = n(186),
                g = o(y),
                b = n(467),
                _ = o(b),
                T = n(492),
                w = o(T),
                k = n(189),
                C = o(k),
                P = function(e) {
                    function t(e) { a(this, t), u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
                        var n = this._preSolveRecentList(e),
                            r = { wechatPop: !1, submitBtnClass: "disable", submitBtnText: "确定", selectedList: [], recentUserList: n };
                        w.default.isEnterpriseStandard(cow.currentUser) && (r.teamMembers = this._preSolveTeamMembers(e)), this.state = r }
                    return s(t, e), l(t, [{ key: "componentWillReceiveProps", value: function(e) {
                            var t = this._preSolveRecentList(e),
                                n = { recentUserList: t };
                            w.default.isEnterpriseStandard(cow.currentUser) && (n.teamMembers = this._preSolveTeamMembers(e)), this.setState(n) } }, { key: "_preSolveRecentList", value: function(e) {
                            var t = e.recentUserList || [];
                            return t = this._preSolveUserList(e, t) } }, { key: "_preSolveTeamMembers", value: function(e) {
                            var t = e.teamMembers || [];
                            return t = this._preSolveUserList(e, t, !0) } }, { key: "_hasInviteWebUserPermission", value: function() {
                            var e = this;
                            return new r(function(t, n) { "undefined" == typeof e._inviteWebUserPermission ? w.default.getMyPermission().then(function(r) { e._inviteWebUserPermission = r.share, r.share ? t() : n(new Error("没有权限")) }, function(e) { n(e) }) : e._inviteWebUserPermission ? t() : n(new Error("没有权限")) }) } }, { key: "_preSolveUserList", value: function(e, t) {
                            var n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
                                r = [],
                                o = this.state && this.state.selectedList ? this.state.selectedList : [],
                                a = e.shareList || [];
                            return t.forEach(function(e) {
                                (n && !w.default.isSelf(e) || e.status > -1) && ! function() {
                                    var t = i.assign(e, {});
                                    a.some(function(e) {
                                        return w.default.isSameUser(t, e) }) ? t.isShared = !0 : o.some(function(e) {
                                        return w.default.isSameUser(e, t) }) ? t.isChecked = !0 : (t.isChecked = !1, t.isShared = !1), r.push(t) }() }), r } }, { key: "_onAddUser", value: function(e) {
                            var t = this,
                                n = function() {
                                    var n = t.state,
                                        r = n.selectedList,
                                        i = n.recentUserList,
                                        o = n.teamMembers;
                                    i.some(function(t) {
                                        return !!w.default.isSameUser(e, t) && (t.isChecked = !0, !0) }), (o || []).some(function(t) {
                                        return !!w.default.isSameUser(e, t) && (t.isChecked = !0, !0) }), r.push(e), t.setState({ recentUserList: i, selectedList: r, teamMembers: o, submitBtnClass: "" }) },
                                r = this.props.fileTeamId;
                            r ? w.default.isEnterpriseStandard(cow.currentUser) && r === cow.currentUser.team_id ? "member" === cow.currentUser.team_role && r !== e.team_id ? this._hasInviteWebUserPermission().then(function() { n() }, function() { C.default.alert({ title: "没有添加外部协作者的权限", type: "error" }) }) : n() : C.default.alert({ title: "没有添加外部协作者的权限", type: "error" }) : n() } }, { key: "_onDeleteUser", value: function(e) {
                            var t = this.state,
                                n = t.selectedList,
                                r = t.recentUserList,
                                i = t.teamMembers;
                            r.some(function(t) {
                                return !!w.default.isSameUser(e, t) && (t.isChecked = !1, !0) }), (i || []).some(function(t) {
                                return !!w.default.isSameUser(e, t) && (t.isChecked = !1, !0) }), n.some(function(t, r) {
                                return !!w.default.isSameUser(e, t) && (n.splice(r, 1), !0) }), this.setState({ recentUserList: r, selectedList: n, teamMembers: i, submitBtnClass: n.length > 0 ? "" : "disable" }) } }, { key: "_onHeaderCloseBtnClick", value: function() {
                            var e = this.props.onCancel; "function" == typeof e && e() } }, { key: "_headTpl", value: function(e) {
                            return p.default.createElement("div", null, p.default.createElement("span", { className: "dialog-title" }, e), p.default.createElement("span", { className: "hicon icon-close teamworker-close dialog-close-btn", onTouchTap: this._onHeaderCloseBtnClick.bind(this) })) } }, { key: "_bodyTpl", value: function() {
                            return p.default.createElement(h.default, { ref: "searchList", recentUserList: this.state.recentUserList, teamMembers: this.state.teamMembers, selectedList: this.state.selectedList, onAddUser: this._onAddUser.bind(this), onDeleteUser: this._onDeleteUser.bind(this), shareList: this.props.shareList }) } }, { key: "_onShow", value: function() { g.default.notify("tableAction:unlisten", "member-dialog") } }, { key: "_onClose", value: function() { g.default.notify("tableAction:listen", "member-dialog") } }, { key: "_submit", value: function() {
                            var e = this,
                                t = this.state.selectedList;
                            if ("disable" !== this.state.submitBtnClass && 0 !== t.length) { this.setState({ submitBtnClass: "disable", submitBtnText: "请求中..." });
                                var n = !1;
                                if (this.props.maxShareCount !== 1 / 0) {
                                    var r = this.props.maxShareCount - cow.shareList.length;
                                    if (r <= 0 ? n = !0 : t.length > r && (n = !0), n) return this.setState({ submitBtnClass: "", submitBtnText: "确定" }), void this._showOutCountWarning() }
                                t.length > 0 ? ! function() {
                                    var n = e.props,
                                        r = n.onSubmit,
                                        i = n.fileId;
                                    w.default.addNewShareUsers(t, i).then(function(t) { C.default.alert({ title: "添加成功" }), e.setState({ submitBtnClass: "disable", submitBtnText: "确定", selectedList: [] }, function() { "function" == typeof r && r(t) }) }, function() { C.default.alert({ title: "添加失败", type: "error" }), e.setState({ submitBtnClass: "", submitBtnText: "确定" }) }) }() : this.setState({ submitBtnClass: "", submitBtnText: "确定" }) } } }, { key: "_createWechatTpl", value: function(e) {
                            return p.default.createElement(v.default, { fileGuid: this.props.fileGuid, data: e }) } }, { key: "_showOutCountWarning", value: function() {
                            var e = { title: "达到上限", description: "最多添加" + this.props.maxShareCount + "个协作者，升级<b>石墨高级版</b>无此限制", buttons: [{ type: "link-button", buttonLabel: "了解详情", href: "/payment", target: "_blank", customClass: "btn-ok", closeAfterClick: !0 }, { type: "button", buttonLabel: "取消", customClass: "", closeAfterClick: !0 }] };
                            (0, _.default)(e) } }, { key: "render", value: function() {
                            var e = w.default.isEnterpriseStandard(cow.currentUser) ? "hide" : "",
                                t = [{ customClass: "btn teamworker-btn invite-link " + e, label: "添加微信好友", tpl: this._createWechatTpl.bind(this) }, { customClass: "add-submit teamworker-btn btn-ok " + this.state.submitBtnClass, onTap: this._submit.bind(this), label: this.state.submitBtnText }, { customClass: "add-cancel teamworker-btn hide", label: "取消", onTap: this.props.onCancel || function() {} }];
                            return p.default.createElement(f.Dialog, { ref: "target", title: "添加成员", headTpl: this._headTpl.bind(this), bodyTpl: this._bodyTpl.bind(this), actions: t, onClose: this.props.onClose, open: this.props.open }) } }]), t }(c.Component);
            t.default = P, P.propTypes = { fileId: c.PropTypes.number, fileGuid: c.PropTypes.string, fileTeamId: c.PropTypes.number, recentUserList: c.PropTypes.array, teamMembers: c.PropTypes.array, showShareListDialog: c.PropTypes.func, shareList: c.PropTypes.array, maxShareCount: c.PropTypes.number, open: c.PropTypes.bool, onSubmit: c.PropTypes.func, onCancel: c.PropTypes.func, onClose: c.PropTypes.func }, e.exports = t.default }).call(t, n(198), n(4)) },
    491: function(e, t, n) {
        (function(r) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : { default: e } }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t } }(),
                l = function(e, t, n) {
                    for (var r = !0; r;) {
                        var i = e,
                            o = t,
                            a = n;
                        r = !1, null === i && (i = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(i, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(a) }
                        var u = Object.getPrototypeOf(i);
                        if (null === u) return;
                        e = u, t = o, n = a, r = !0, s = u = void 0 } },
                u = n(7),
                c = i(u),
                p = n(161),
                f = n(189),
                d = n(492),
                h = i(d),
                m = n(493),
                v = i(m),
                y = function(e) {
                    function t(e) { o(this, t), l(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.keywords = {}, this.state = { searchList: [], keywords: {}, isSearching: !1, searchText: "", listType: "recent" } }
                    return a(t, e), s(t, [{ key: "_leftUserListChange", value: function(e) { e && ("select" === e.type ? this._addUser(e.user) : "unSelect" === e.type && this._deleteUser(e.user)) } }, { key: "_usersWillAddChange", value: function(e) { "remove" === e.type && this._deleteUser(e.user) } }, { key: "_isSameUser", value: function(e, t) {
                            return e.id && t.id && e.id === t.id || e.email && t.email && e.email === t.email } }, { key: "_addUser", value: function(e) {
                            var t = this,
                                n = r.clone(e),
                                i = this.state,
                                o = i.isSearching,
                                a = i.searchList;
                            o && a.some(function(e) {
                                return !!h.default.isSameUser(e, n) && (e.isChecked = !0, t.setState({ searchList: a }), !0) });
                            var s = function() { "function" == typeof this.props.onAddUser && this.props.onAddUser(n) }.bind(this);
                            n.email ? h.default.getUserInfoByEmail(n.email).then(function(e) { 0 === e.code && (n.name = e.data.name, n.avatar = e.data.avatar), s() }) : s() } }, { key: "_deleteUser", value: function(e) {
                            var t = this,
                                n = this.state,
                                r = n.isSearching,
                                i = n.searchList;
                            r && i.some(function(n) {
                                return !!h.default.isSameUser(n, e) && (n.isChecked = !1, t.setState({ searchList: i }), !0) }), "function" == typeof this.props.onDeleteUser && this.props.onDeleteUser(e) } }, { key: "_inShareList", value: function(e) {
                            var t = this.props.shareList;
                            return t.some(function(t) {
                                return !!h.default.isSameUser(e, t) && (e.name = t.name, !0) }) } }, { key: "_inSelectedList", value: function(e) {
                            var t = this.props.selectedList;
                            return t.some(function(t) {
                                return !!h.default.isSameUser(e, t) && (t.name = e.name, !0) }) } }, {
                        key: "_onSearch",
                        value: function(e, t) {
                            var n = void 0,
                                r = this.state.listType;
                            if ("recent" === r ? n = this.props.recentUserList.filter(function(e) {
                                    return e.status > -1 }) : "team" === r && (n = this.props.teamMembers), e) {
                                if (n = h.default.searchByKeyword(e, n), 0 === n.length && f.regs.email.test(e)) {
                                    var i = "/static/dist/assets/images/invited-829002c507.png",
                                        o = { name: "邮件邀请", email: e, isChecked: !1, avatar: i };
                                    this._inShareList(o) ? o.isShared = !0 : this._inSelectedList(o) && (o.isChecked = !0), n.push(o) }
                                if ("submit" === t.type) {
                                    if (1 === n.length) {
                                        var a = n[0];
                                        a.isChecked || a.isShared || (this._addUser(a), this.setState({ isSearching: !1, searchList: [], searchText: "" })) } } else this.setState({
                                    isSearching: !0,
                                    searchList: n,
                                    searchText: e
                                })
                            } else this.setState({ isSearching: !1, searchList: [], searchText: e })
                        }
                    }, { key: "_onListTypeChange", value: function(e) { e !== this.state.listType && this.setState({ listType: e }) } }, { key: "_renderContactListSwitcher", value: function() {
                            if (!this.state.isSearching && h.default.isEnterpriseStandard(cow.currentUser)) {
                                var e = this.state.listType,
                                    t = "recent" === e ? "active" : "",
                                    n = "team" === e ? "active" : "";
                                return c.default.createElement("ul", { className: "contact-list-switcher" }, c.default.createElement("li", { className: "list-switcher-item " + t, onClick: this._onListTypeChange.bind(this, "recent") }, "最近"), c.default.createElement("li", { className: "list-switcher-item " + n, onClick: this._onListTypeChange.bind(this, "team") }, "成员")) }
                            return null } }, { key: "render", value: function() {
                            var e = this.state,
                                t = e.isSearching,
                                n = e.searchList,
                                r = e.searchText,
                                i = e.listType,
                                o = this.props,
                                a = o.recentUserList,
                                s = o.teamMembers,
                                l = [];
                            t ? l = n || [] : "recent" === i ? l = a || [] : "team" === i && (l = s || []);
                            var u = "待邀请成员" + (this.props.selectedList.length ? "(" + this.props.selectedList.length + ")" : ""),
                                f = !0,
                                d = !0;
                            return c.default.createElement("div", { className: "mem-list" }, c.default.createElement("div", { className: "search-list" }, c.default.createElement(p.SearchInput, { placeholder: "输入邮箱、搜索姓名进行添加", customClass: "teamworker-input-box", text: r, onSearch: this._onSearch.bind(this) }), this._renderContactListSwitcher(), c.default.createElement(v.default, { classPrefix: "teamworker", onChange: this._leftUserListChange.bind(this), selectable: f, userList: l })), c.default.createElement("div", { className: "result-list" }, c.default.createElement("div", { className: "share-li-title teamworker-li-title invite-title" }, u), c.default.createElement(v.default, { classPrefix: "teamworker", onChange: this._usersWillAddChange.bind(this), removeable: d, userList: this.props.selectedList }))) } }]), t
                }(u.Component);
            t.default = y, y.propTypes = { recentUserList: u.PropTypes.array, teamMembers: u.PropTypes.array, shareList: u.PropTypes.array, selectedList: u.PropTypes.array, onAddUser: u.PropTypes.func, onDeleteUser: u.PropTypes.func }, e.exports = t.default
        }).call(t, n(4))
    },
    492: function(e, t, n) {
        (function(r, i) { "use strict";

            function o(e) {
                return c(cow.currentUser, e) }

            function a(e) {
                if (u(e)) {
                    if (e.team_role && "creator" === e.team_role) return !0 } else if (e.isOwner) return !0;
                return !1 }

            function s(e) {
                if (u(e)) {
                    if (e.team_role && "member" === e.team_role) return !0 } else if (!a(e)) return !0;
                return !1 }

            function l(e) {
                return !(!u(e) || !e.team_role || "admin" !== e.team_role) }

            function u(e) {
                return e.accountType && "enterprise_standard" === e.accountType }

            function c(e, t) {
                return e.id && t.id && e.id === t.id || e.email && t.email && e.email === t.email }

            function p(e, t) {
                return !!a(e) || !(!l(e) || a(t) || l(t)) }

            function f(e, t) {
                var n = [];
                return e && /^[\w-@\.\u4E00-\u9FFF]+$/.test(e) ? (e = e.toLowerCase(), t && r.each(t, function(t) {
                    if (t.name_pinyin && !(t.id < 0)) {
                        if (!T[t.id]) {
                            if (!t.name_pinyin || t.id < 0) return;
                            var i = t.name_pinyin.split("|");
                            T[t.id] = { name: t.name, firstLetters: i[0], fullPinyin: i[1], fullPinyinS: i[1].replace(/\'/g, ""), emailPrefix: (null !== t.email ? t.email.split("@")[0] : void 0) || "", emailFull: t.email || "" } }
                        var o = T[t.id],
                            a = o.name.toLowerCase().indexOf(e) + 1,
                            s = o.firstLetters.toLowerCase().indexOf(e) + 1,
                            l = o.fullPinyin.toLowerCase().indexOf("'" + e) + 1,
                            u = o.emailPrefix.toLowerCase().indexOf(e) + 1,
                            c = o.emailFull.toLowerCase().indexOf(e) + 1,
                            p = o.fullPinyinS.toLowerCase().indexOf(e) + 1,
                            f = r.min([a, 20 * s, 20 * l, 20 * u, 1e4 * c, 1e3 * p].filter(function(e) {
                                return e > 0 })); "undefined" != typeof f && t.status > -1 && n.push({ weight: f, user: t }) } }), n = n.sort(function(e, t) {
                    return e.weight - t.weight }).map(function(e) {
                    return e.user })) : n }

            function d(e) {
                var t = "/api/getUserInfo?email=" + e;
                return (0, _.ajaxGet)(t) }

            function h(e, t) {
                return new i(function(n, r) {
                    if (0 === e.length) return void n();
                    var i = { file_id: t, users: [] };
                    e.forEach(function(e) {
                        var t = "number" == typeof e.id ? e.id : e.email;
                        i.users.push(t) }), (0, _.ajaxPost)("/api/invite", i).then(function(e) {
                        if (0 === e.code && e.data.success) {
                            var t = e.data.detail.map(function(e) {
                                return e.user });
                            n(t) } else r() }, function() { r() }) }) }

            function m() {
                return (0, _.ajaxGet)("/api/share/recent_contact") }

            function v() {
                return new i(function(e, t) {
                    (0, _.ajaxGet)("/smapi/teams/mine/members").then(function(n) { 0 === n.code ? e(n.data || []) : t(n) }, function(e) { t(e) }) }) }

            function y(e) {
                return new i(function(t, n) {
                    ["doc", "spreadsheet"].indexOf(cow.pageType) < 0 || cow.authorized ? (0, _.ajaxGet)("/api/share/" + e).then(function(e) { 0 === e.code ? ! function() {
                            var n = e.data.grand,
                                r = [],
                                i = e.data.current || [];
                            (n || []).forEach(function(e) {
                                (e.users || []).forEach(function(t) { t.isGrand = !0, +e.user_id === +t.id && (t.isOwner = !0), r.push(t) }) });
                            var o = r.concat(i);
                            t(o) }() : n(e) }, function(e) { n(e) }) : (0, _.ajaxGet)("/api/" + e + "/user_list").then(function(e) {
                        if (0 === +e.code) {
                            var r = e.data || [];
                            t(r) } else n(e) }, function(e) { n(e) }) }) }

            function g(e, t) {
                var n = { guid: e, user_id: t };
                return new i(function(e, t) {
                    (0, _.ajaxPost)("/api/share/delete", n).then(function(n) { 0 === n.code ? e(n) : t() }, function(e) { t(e) }) }) }

            function b() {
                return new i(function(e, t) {
                    (0, _.ajaxGet)("/smapi/teams/mine/permissions").then(function(n) {
                        if (0 === n.code) {
                            var r = cow.currentUser.team_role;
                            e({ share: (n.data.share || []).indexOf(r) > -1, invite: (n.data.invite || []).indexOf(r) > -1, setAdmin: (n.data.setAdmin || []).indexOf(r) > -1 }) } else t(new Error(n.message)) }, function(e) { t(e) }) }) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var _ = n(239),
                T = {};
            t.default = { isSelf: o, isSameUser: c, isCreator: a, isMember: s, isAdmin: l, isEnterpriseStandard: u, hasPermissionRemoveUserFromTeam: p, searchByKeyword: f, getUserInfoByEmail: d, addNewShareUsers: h, getRecentMember: m, getTeamMembers: v, getShareUsers: y, deleteShareUser: g, getMyPermission: b }, e.exports = t.default }).call(t, n(4), n(198)) },
    493: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t } }(),
            s = function(e, t, n) {
                for (var r = !0; r;) {
                    var i = e,
                        o = t,
                        a = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a) }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    e = u, t = o, n = a, r = !0, s = u = void 0 } },
            l = n(7),
            u = r(l),
            c = n(161),
            p = n(494),
            f = r(p),
            d = n(492),
            h = r(d),
            m = function(e) {
                function t(e) { i(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { me: this._filterMeFromUserList(e.userList) } }
                return o(t, e), a(t, [{ key: "componentWillReceiveProps", value: function(e) {
                        var t = this._filterMeFromUserList(e.userList);
                        this.setState({ me: t }) } }, { key: "_filterMeFromUserList", value: function(e) {
                        var t = null;
                        return e.some(function(e) {
                            return !!h.default.isSameUser(e, cow.currentUser) && (t = e, !0) }), t } }, { key: "_getProps", value: function() {
                        var e = this.props,
                            t = { selectable: !!e.selectable, removeable: !!e.removeable, showRole: !!e.showRole, onChange: e.onChange || function() {}, roleField: e.roleField || "role", userList: e.userList || [], customClass: e.customClass || "", groupBy: e.groupBy, headTag: e.headTag };
                        return t.groupBy ? (t.adapter = { type: "group" }, t.userList = this._groupUserList(t.groupBy)) : t.headTag ? (t.adapter = { type: "group" }, t.userList = [{ name: t.headTag, items: t.userList }]) : t.adapter = { type: "plain" }, t } }, { key: "_groupUserList", value: function() {
                        return [] } }, { key: "_createListRowDom", value: function(e, t) {
                        var n = this.props.classPrefix;
                        return u.default.createElement("div", { className: "share-user-li " + (n ? n + "-user-li" : "user-li") }, u.default.createElement(c.ImageIcon, { customClass: "share-user-avatar avatar", defaultImg: "/static/dist/assets/images/loading-b67e5a67dc.gif", realImg: t.avatar }), u.default.createElement("span", { className: "share-user-name ellipsis " + (n ? n + "-user-name" : "") }, t.name), u.default.createElement("span", { className: "share-user-email ellipsis " + (n ? n + "-user-email" : "") }, t.email), this._createRowActions.bind(this)(t)) } }, { key: "_createHeadDom", value: function(e, t) {
                        var n = t || "",
                            r = "";
                        return this.props.classPrefix && (r = this.props.classPrefix + "-li-title"), u.default.createElement("div", { className: "share-li-title " + r }, n) } }, { key: "_createRowActions", value: function(e) {
                        var t = this._getProps(),
                            n = t.selectable,
                            r = t.removeable,
                            i = t.showRole,
                            o = (this.state.me, []);
                        if (n) {
                            var a = "";
                            a = e.isShared ? "is-shared" : e.isChecked ? "is-checked" : "", o.push(u.default.createElement("span", { className: "operation-icon doc-share-icon " + a })) }
                        if (i) {
                            var s = !1;
                            r && (s = !!e.canBeRemove);
                            var l = "share-status share-user-identity " + (s ? "share-show-remove" : "") + (this.props.classPrefix ? " " + this.props.classPrefix + "-user-identify" : "");
                            console.log(l), o.push(u.default.createElement("span", { className: l }, "disable" === e.team_role ? "已禁用" : h.default.isCreator(e) ? "创建者" : "成员")), s && o.push(u.default.createElement("span", { onClick: this._removeMember.bind(this, e), "data-user": e.id, className: "share-status share-user-remove doc-share-icon" })) } else r && o.push(u.default.createElement("span", { className: "operation-icon doc-share-icon is-remove" }));
                        return o } }, { key: "_removeMember", value: function(e) {
                        var t = this._getProps(),
                            n = t.onChange;
                        n({ type: "remove", user: e }) } }, { key: "_onRowClick", value: function(e, t, n) {
                        var r = this._getProps(),
                            i = r.selectable,
                            o = r.removeable,
                            a = r.onChange,
                            s = r.showRole;
                        if (!s)
                            if (i) {
                                if (n.isShared) return;
                                a({ type: n.isChecked ? "unSelect" : "select", user: n }) } else o && a({ type: "remove", user: n }) } }, { key: "_onHeadClick", value: function() {} }, { key: "render", value: function() {
                        var e = this._getProps(),
                            t = e.userList,
                            n = e.adapter;
                        return u.default.createElement(f.default, { data: t, adapter: n, headDom: this._createHeadDom.bind(this), onClickRow: this._onRowClick.bind(this), onClickHead: this._onHeadClick.bind(this), rowDom: this._createListRowDom.bind(this) }) } }]), t }(l.Component);
        t.default = m, m.propTypes = { selectable: l.PropTypes.bool, removeable: l.PropTypes.bool, enableRowClick: l.PropTypes.bool, onChange: l.PropTypes.func, classPrefix: l.PropTypes.string, showRole: l.PropTypes.bool, roleField: l.PropTypes.string, userList: l.PropTypes.array, customClass: l.PropTypes.string, adapter: l.PropTypes.object }, e.exports = t.default },
    494: function(e, t, n) {
        var r = n(7),
            i = n(495),
            o = n(496);
        e.exports = r.createClass({ displayName: "exports", propTypes: { data: r.PropTypes.array, adapter: r.PropTypes.object, rowDom: r.PropTypes.func, headDom: r.PropTypes.func, onClickRow: r.PropTypes.func, onClickHead: r.PropTypes.func }, getInitialState: function() {
                return {} }, getDefaultProps: function() {
                return { rowDom: function(e, t) {
                        var n = t && t.title || "";
                        return r.createElement("div", { className: "" }, n) }, headDom: function(e, t) {
                        var n = t || "";
                        return r.createElement("div", { className: "" }, n) }, onClickRow: function(e, t, n) { alert("click row: " + t.group + ", " + t.row + "\ndata: " + JSON.stringify(n)) }, onClickHead: function(e, t, n) { alert("click head:" + t.group + "\ndata: " + JSON.stringify(n)) } } }, render: function() {
                var e, t = this.props;
                return e = t.adapter && "group" == t.adapter.type ? t.data.map(function(e, n) {
                    return r.createElement(i, r.__spread({}, t, { key: n, groupIndex: n, groupItem: e })) }) : t.data.map(function(e, n) {
                    return r.createElement(o, r.__spread({}, t, { key: n, groupIndex: 0, rowIndex: n, rowItem: e })) }), r.createElement("div", { className: "ui-list" }, e) } }) },
    495: function(e, t, n) {
        var r = n(7),
            i = n(496),
            o = n(497);
        e.exports = r.createClass({ displayName: "exports", propTypes: {}, render: function() {
                var e, t = this.props;
                return e = this.props.groupItem.items.map(function(e, n) {
                    return r.createElement(i, r.__spread({}, t, { key: n, groupIndex: t.groupIndex, rowIndex: n, rowItem: e })) }), r.createElement("div", { className: "ui-list-group" }, r.createElement(o, r.__spread({}, t, { groupIndex: t.groupIndex, headItem: t.groupItem.name })), e) } }) },
    496: function(e, t, n) {
        var r = n(7);
        e.exports = r.createClass({ displayName: "exports", render: function() {
                var e = { group: this.props.groupIndex, row: this.props.rowIndex };
                return r.createElement("div", { className: "ui-list-row", onClick: this._onClickRow }, this.props.rowDom(e, this.props.rowItem)) }, _onClickRow: function(e) {
                var t = { group: this.props.groupIndex, row: this.props.rowIndex };
                this.props.onClickRow(e, t, this.props.rowItem) } }) },
    497: function(e, t, n) {
        var r = n(7);
        e.exports = r.createClass({ displayName: "exports", render: function() {
                var e = { group: this.props.groupIndex };
                return r.createElement("div", { className: "ui-list-head", onClick: this._onClickHead }, this.props.headDom(e, this.props.headItem)) }, _onClickHead: function(e) {
                var t = { group: this.props.groupIndex };
                this.props.onClickHead(e, t, this.props.headItem) } }) },
    498: function(e, t, n) { "use strict";
        var r = n(7),
            i = n(161),
            o = i.SimpleButton,
            a = i.DelegateClick,
            s = n(189);
        e.exports = r.createClass({ displayName: "exports", mixins: [a], propTypes: { guid: r.PropTypes.string }, getInitialState: function() {
                return { open: !1 } }, componentDidMount: function() {
                var e = this,
                    t = "";
                t = ["doc", "spreadsheet"].indexOf(cow.pageType) > -1 ? window.cow.currentFile.guid : this.props.fileGuid, s.get("/api/file/" + t + "/invite_link").then(function(t) { e.setState({ inviteUrl: s.getQrImageUrl(114, t.data.link) }) }) }, render: function() {
                var e, t = this.props,
                    n = t.data,
                    i = { display: "block" };
                return this.state.open && (e = r.createElement("div", { className: "invite-link-popup" }, r.createElement("p", null, "微信扫一扫"), r.createElement("img", { src: this.state.inviteUrl }), r.createElement("p", null, "把表格发送给好友", r.createElement("br", null), "邀请好友加入"), r.createElement("div", { className: "arrow-down", style: i }, r.createElement("span", { className: "top" }), r.createElement("span", { className: "down" })))), r.createElement("div", { className: "dialog-wechat-box" }, r.createElement(o, { customClass: n.customClass || "", disabled: n.disabled || !1, onTap: this._onTap, label: n.label }), e) }, _onTap: function() { this.setState({ open: !this.state.open }) }, componentClick: function() { this.close() }, close: function() { this.setState({ open: !1 }) } }) },
    499: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t } }(),
            s = function(e, t, n) {
                for (var r = !0; r;) {
                    var i = e,
                        o = t,
                        a = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a) }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    e = u, t = o, n = a, r = !0, s = u = void 0 } },
            l = n(7),
            u = r(l),
            c = n(161),
            p = n(186),
            f = r(p),
            d = n(467),
            h = r(d),
            m = n(493),
            v = r(m),
            y = n(189),
            g = r(y),
            b = n(492),
            _ = (r(b), function(e) {
                function t() { i(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments) }
                return o(t, e), a(t, [{ key: "show", value: function() { this.refs.target.show() } }, { key: "close", value: function() { this.refs.target.close() } }, { key: "_groupList", value: function(e, t) {
                        var n = [],
                            r = [];
                        this.props.fileUserId;
                        return e && e.length > 0 && e.forEach(function(e) { e.team_id === t ? n.push(e) : r.push(e) }), { teamMembers: n, otherMembers: r } } }, { key: "_headTpl", value: function(e) {
                        return u.default.createElement("div", null, u.default.createElement("span", { className: "dialog-title" }, e), u.default.createElement("span", { className: "hicon icon-close teamworker-close dialog-close-btn", onTouchTap: this.props.onCancel })) } }, { key: "_getUserListDoms", value: function(e, t) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = !0;
                        return n.push(u.default.createElement("div", { className: "userlist-legend" }, u.default.createElement("span", { className: "userlist-legend-label" }, t + "（" + e.length + "）"))), n.push(u.default.createElement(v.default, { classPrefix: "teamworker-sharelist", onChange: this._removeMember.bind(this), showRole: r, selectable: i, removeable: o, userList: e })), n } }, { key: "_bodyTpl", value: function() {
                        var e = this.props,
                            t = e.shareList,
                            n = e.fileTeamId,
                            r = [];
                        if (n) {
                            var i = this._groupList(t, n),
                                o = i.teamMembers,
                                a = i.otherMembers;
                            if (o.length > 0) {
                                var s = cow.currentUser.team_id === n ? "团队成员" : "成员",
                                    l = this._getUserListDoms(o, s);
                                r = r.concat(l) }
                            if (a.length > 0) {
                                var c = this._getUserListDoms(a, "外部协作者");
                                r = r.concat(c) }
                            return u.default.createElement("div", { className: "teamworker-content" }, r) }
                        var p = this._getUserListDoms(t, "成员");
                        return u.default.createElement("div", { className: "teamworker-content" }, p) } }, { key: "_onShow", value: function() { "spreadsheet" === cow.pageType && f.default.notify("tableAction:unlisten", "share-dialog") } }, { key: "_onClose", value: function() {
                        var e = this.props.onClose; "function" == typeof e && e(), "spreadsheet" === cow.pageType && f.default.notify("tableAction:listen", "share-dialog") } }, { key: "_showAddPanel", value: function() {
                        var e = this.props.disableAddUser;
                        if (e) return void g.default.alert({ title: "没有权限添加协作者", type: "error" });
                        if (this.props.maxShareCount !== 1 / 0) {
                            var t = this.props.maxShareCount - cow.shareList.length;
                            if (t <= 0) return void this._showOutCountWarning() }
                        this.close(), this.props.showAddPanel() } }, { key: "_removeMember", value: function(e) {
                        var t = this.props.onRemoveMember;
                        if (e.type && "remove" === e.type) {
                            var n = e.user;
                            if (n.isGrand) return void g.default.alert({ title: "<b>" + n.name + "</b> 属于文件夹的协作人，无法移除", type: "error" }); "function" == typeof t && t(e.user) } } }, { key: "_showOutCountWarning", value: function() {
                        var e = { title: "达到上限", description: "最多添加" + this.props.maxShareCount + "个协作者，升级<b>石墨高级版</b>无此限制", buttons: [{ type: "link-button", buttonLabel: "了解详情", href: "/payment", target: "_blank", customClass: "btn-ok", closeAfterClick: !0 }, { type: "button", buttonLabel: "取消", customClass: "", closeAfterClick: !0 }] };
                        (0, h.default)(e) } }, { key: "render", value: function() {
                        var e = [{ customClass: "teamworker-btn btn btn-ok", onTap: this._showAddPanel.bind(this), label: "添加成员" }];
                        return u.default.createElement(c.Dialog, { ref: "target", title: "共享", customClass: "teamworker-sharelist-inner", open: this.props.open, headTpl: this._headTpl.bind(this), bodyTpl: this._bodyTpl.bind(this), actions: e, onShow: this._onShow.bind(this), onClose: this._onClose.bind(this) }) } }]), t }(l.Component));
        t.default = _, _.propTypes = { fileUserId: l.PropTypes.number, disableAddUser: l.PropTypes.bool, onRemoveMember: l.PropTypes.func, fileTeamId: l.PropTypes.number, shareList: l.PropTypes.array, maxShareCount: l.PropTypes.number, showAddPanel: l.PropTypes.func, open: l.PropTypes.bool, onCancel: l.PropTypes.func.isRequired, onClose: l.PropTypes.func }, e.exports = t.default },
    500: function(e, t, n) {
        (function(r) { "use strict";

            function i(e) {
                return new r(function(t, n) {
                    (0, u.ajaxGet)("/smapi/files/" + e).then(function(e) { 0 === e.code ? t(e.data) : n(new Error(e.message)) }, function(e) { n(e) }) }) }

            function o() {
                return new r(function(e, t) {
                    (0, u.ajaxGet)("/smapi/teams/mine/invite_state").then(function(n) {
                        if (0 === n.code) {
                            var r = n.data.inviteGuid || "";
                            if (r) {
                                var i = window.location.protocol + "//" + window.location.host + "/company/invite/" + r;
                                e(i) } else e("") } else t() }, function(e) { t(e) }) }) }

            function a() {
                return new r(function(e, t) {
                    (0, u.ajaxDelete)("/smapi/teams/mine/invite_state").then(function() { e("") }, function(e) { t(e) }) }) }

            function s() {
                return new r(function(e, t) {
                    (0, u.ajaxPost)("/smapi/teams/mine/invite_state", {}).then(function(n) {
                        if (0 === n.code) {
                            var r = n.data.inviteGuid;
                            if (r) {
                                var i = window.location.protocol + "//" + window.location.host + "/company/invite/" + r;
                                e(i) } else e("") } else t() }, function(e) { t(e) }) }) }

            function l(e) {
                return (0, u.ajaxPost)("/teams/invite_members", { users: e.join(",") }) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var u = n(239);
            t.default = { getFileTeamInfo: i, getInviteLink: o, inviteMembers: l, closeInviteLink: a, openInviteLink: s }, e.exports = t.default }).call(t, n(198)) },
    666: function(e, t, n) {
        (function(r) { "use strict";

            function i(e) {
                return e && e.__esModule ? e : { default: e } }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }

            function s(e) {
                return e }

            function l(e) {
                return { dispatch: e } }

            function u(e, t, n) {
                return Object.assign ? Object.assign({}, n, e, t) : r.assign({}, n, e, t) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var c = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t } }(),
                p = function(e, t, n) {
                    for (var r = !0; r;) {
                        var i = e,
                            o = t,
                            a = n;
                        r = !1, null === i && (i = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(i, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(a) }
                        var u = Object.getPrototypeOf(i);
                        if (null === u) return;
                        e = u, t = o, n = a, r = !0, s = u = void 0 } },
                f = n(7),
                d = i(f),
                h = n(163),
                m = i(h),
                v = n(244),
                y = n(667),
                g = i(y),
                b = n(668),
                _ = i(b),
                T = n(670),
                w = i(T),
                k = n(681),
                C = i(k),
                P = n(685),
                O = i(P),
                S = n(230),
                E = i(S);
            (0, E.default)(), (0, O.default)();
            var x = function(e) {
                function t(e) { o(this, t), p(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { dataList: [], listType: "" } }
                return a(t, e), c(t, [{ key: "componentDidMount", value: function() { m.default.render(d.default.createElement(C.default, null), document.getElementById("react-header")) } }, { key: "componentDidUpdate", value: function() { m.default.render(d.default.createElement(C.default, null), document.getElementById("react-header")) } }, { key: "render", value: function() {
                        var e = this.props.dispatch,
                            t = this.props.list,
                            n = t.files,
                            r = t.loading,
                            i = t.loaded,
                            o = t.isMoving,
                            a = this.props.listNature,
                            s = a.listType,
                            l = a.currentFile;
                        return d.default.createElement("div", { className: "out-container" }, d.default.createElement("div", { className: "list-container fix" }, d.default.createElement(g.default, { enableDrop: o, listType: s, currentFile: l, files: n, dispatch: e }), d.default.createElement(_.default, { listType: s, currentFile: l, files: n, loaded: i, enableDrop: o, dispatch: e }), d.default.createElement(w.default, { dispatch: e, files: n, loading: r, loaded: i, isMoving: o }))) } }]), t }(f.Component);
            x.propTypes = { list: f.PropTypes.object.isRequired, dispatch: f.PropTypes.func.isRequired, listNature: f.PropTypes.object, team: f.PropTypes.object };
            var I = (0, v.connect)(s, l, u, { withRef: !0 })(x);
            t.default = { List: x, ListContainer: I }, e.exports = t.default }).call(t, n(4)) },
    667: function(e, t, n) {
        (function(r) { "use strict";

            function i(e) {
                return e && e.__esModule ? e : { default: e } }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t } }(),
                l = function(e, t, n) {
                    for (var r = !0; r;) {
                        var i = e,
                            o = t,
                            a = n;
                        r = !1, null === i && (i = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(i, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(a) }
                        var u = Object.getPrototypeOf(i);
                        if (null === u) return;
                        e = u, t = o, n = a, r = !0, s = u = void 0 } },
                u = n(7),
                c = i(u),
                p = function(e) {
                    function t(e) { o(this, t), l(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { willAcceptDropTag: "" } }
                    return a(t, e), s(t, [{ key: "_onListItemClick", value: function(e) {
                            var t = e.currentTarget,
                                n = t.getAttribute("data-href");
                            n !== location.pathname && r(n) } }, { key: "_onDrop", value: function(e) {
                            var t = this.props.enableDrop;
                            if (!t) return this._stopEvent(e);
                            var n = e.currentTarget;
                            return n.className.match(/active/) && e.preventDefault(), this.setState({ willAcceptDropTag: "" }), this._stopEvent(e) } }, { key: "_onDragEnter", value: function(e) {
                            var t = this.props.enableDrop;
                            if (!t) return this._stopEvent(e);
                            var n = e.currentTarget;
                            return n.className.match(/active/) ? e.preventDefault() : this.setState({ willAcceptDropTag: "desktop" }), e.preventDefault() } }, { key: "_onDragLeave", value: function() { this.setState({ willAcceptDropTag: "" }) } }, { key: "_onDragOver", value: function(e) { e.preventDefault() } }, { key: "_stopEvent", value: function(e) {
                            return e.stopPropagation(), e.preventDefault(), !1 } }, { key: "_isActive", value: function(e) {
                            var t = location.pathname;
                            return t === e ? "active" : e.match(/\/desktop\b/) && t.match(/\/folder\/[0-9a-zA-Z]{16}\b/) ? "active" : "" } }, { key: "render", value: function() {
                            var e = this,
                                t = this.props.enableDrop,
                                n = this.state.willAcceptDropTag,
                                r = function() {
                                    var r = e._isActive.bind(e)("/desktop") ? "active" : t ? "ondrag" : "",
                                        i = "desktop" === n ? "scale" : "";
                                    return " " + r + " " + i + " " };
                            return c.default.createElement("ul", { className: "list-tabs" }, c.default.createElement("li", { "data-href": "/desktop", className: "list-tab desktop " + r(), onDragEnter: this._onDragEnter.bind(this), onDragLeave: this._onDragLeave.bind(this), onDragOver: this._onDragOver.bind(this), onDrop: this._onDrop.bind(this), onClick: this._onListItemClick.bind(this) }, c.default.createElement("span", { className: "team-sprite list-tab-icon" }), "我的桌面"), c.default.createElement("li", { className: "list-tab recent " + this._isActive.bind(this)("/recent"), "data-href": "/recent", onClick: this._onListItemClick.bind(this) }, c.default.createElement("span", { className: "team-sprite list-tab-icon" }), "最近使用"), c.default.createElement("li", { className: "list-tab favorites " + this._isActive.bind(this)("/favorites"), "data-href": "/favorites", onClick: this._onListItemClick.bind(this) }, c.default.createElement("span", { className: "team-sprite list-tab-icon" }), "标星文件")) } }]), t }(u.Component);
            t.default = p, p.propTypes = { dispatch: u.PropTypes.func, enableDrop: u.PropTypes.bool, files: u.PropTypes.array, currentFile: u.PropTypes.object }, e.exports = t.default }).call(t, n(240)) },
    668: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t } }(),
            s = function(e, t, n) {
                for (var r = !0; r;) {
                    var i = e,
                        o = t,
                        a = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a) }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    e = u, t = o, n = a, r = !0, s = u = void 0 } },
            l = n(7),
            u = r(l),
            c = n(189),
            p = r(c),
            f = n(275),
            d = r(f),
            h = n(669),
            m = r(h),
            v = n(467),
            y = r(v),
            g = function(e) {
                function t(e) { i(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { willAcceptDropTag: "" } }
                return o(t, e), a(t, [{ key: "shouldComponentUpdate", value: function(e) {
                        var t = e.loaded;
                        return t } }, { key: "_onDrop", value: function(e) {
                        var t = this,
                            n = this.props,
                            r = n.dispatch,
                            i = n.enableDrop,
                            o = n.files;
                        i && ! function() {
                            var n = e.dataTransfer.getData("Text"),
                                i = e.currentTarget.getAttribute("data-guid") || ""; "0" === i && (i = "");
                            var a = null;
                            o.some(function(e) {
                                return e.guid === n && (a = e, !0) }) && ! function() {
                                var e = a.shortcut_id ? "shortcut" : "file",
                                    o = 0 === a.type ? "文档" : 1 === a.type ? "文件夹" : "表格";
                                d.default.moveToFolder(n, i, e, "info").then(function(t) {
                                    var a = { title: "移动" + o, description: "", confirmLabel: "确认", abortLabel: "取消", confirmFun: function() { d.default.moveToFolder(n, i, e, "action").then(function() { setTimeout(function() { r(m.default.updateFile(n, { is_delete: 2 })) }, 200) }) } };
                                    if ("dialog" === t.data.type) {
                                        var s = t.data;
                                        s.data.removeUserCount > 0 && (a.description = "移动后所有上级文件夹的共享成员将无权限访问该" + o), s.data.addUserCount > 0 && (a.description = "移动后所有上级文件夹的共享成员将有权限访问该" + o), a.description && (0, y.default)(a) } }).fail(function(e) { "no_move_privilege" === e.message ? i ? p.default.alert({ title: "只有管理员或创建者才能将" + o + "移入共享文件夹", type: "error" }) : p.default.alert({ title: "只有管理员或创建者才能将" + o + "移动到桌面", type: "error" }) : "err_shawlortcut_inside" === e.message ? p.default.alert({ titie: "文件夹中有他人分享的文档/文件夹，无法移动到共享文件夹", type: "error" }) : p.default.alert({ title: "移动文件失败", type: "error" }) }), t.setState({ willAcceptDropTag: "" }) }() }() } }, { key: "_onDragEnter", value: function(e) {
                        var t = this.props.enableDrop,
                            n = e.currentTarget.getAttribute("data-guid");
                        t && this.setState({ willAcceptDropTag: n }), e.preventDefault() } }, { key: "_onDragLeave", value: function() {
                        var e = this.props.enableDrop;
                        e && this.setState({ willAcceptDropTag: "" }) } }, { key: "_onDragOver", value: function(e) { e.preventDefault() } }, { key: "_renderCrumbList", value: function(e) {
                        var t = this,
                            n = [],
                            r = this.props.currentFile,
                            i = { name: "桌面", link: "/desktop" };
                        if (!e) return u.default.createElement("span", { className: "no-crumb" }, i.name);
                        e.unshift(i), e.forEach(function(e, r) {
                            var i = e.link ? e.link : "/folder/" + e.guid,
                                o = e.guid ? e.guid : "0",
                                a = p.default.cutName(e.name, 32),
                                s = t.state.willAcceptDropTag;
                            n.push(u.default.createElement("a", { key: r, className: "crumb list-crumb-item " + (s === o ? "scale" : ""), href: i, "data-guid": o, onDrop: t._onDrop.bind(t), onDragEnter: t._onDragEnter.bind(t), onDragLeave: t._onDragLeave.bind(t), onDragOver: t._onDragOver.bind(t) }, a)), n.push(u.default.createElement("span", { key: 1e3 + r, className: "hicon icon-breadcrumb" })) });
                        var o = p.default.cutName(r.name);
                        return n.push(u.default.createElement("span", { key: e.length, className: "no-crumb" }, o)), n } }, { key: "render", value: function() {
                        var e = this.props,
                            t = e.currentFile,
                            n = e.listType,
                            r = e.enableDrop;
                        if ("list" === n) {
                            var i = t.crumbList ? [].concat(t.crumbList) : void 0;
                            return u.default.createElement("div", { className: "crumb-list list-crumb " + (r ? "ondrag" : "") }, this._renderCrumbList(i)) }
                        return null } }]), t }(l.Component);
        t.default = g, g.propTypes = { dispatch: l.PropTypes.func.isRequired, files: l.PropTypes.array, currentFile: l.PropTypes.object, listType: l.PropTypes.string, enableDrop: l.PropTypes.bool }, e.exports = t.default },
    669: function(e, t) { "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = function() {
                return { type: "CLEAR_LIST" } },
            r = function(e) {
                return { type: "ADD_FILE", file: e } },
            i = function(e) {
                return { type: "DELETE_FILE", guid: e } },
            o = function(e, t) {
                return { type: "MOVE_FILE", fromIndex: e, toIndex: t } },
            a = function(e) {
                return { type: "PREPARE_MOVE", guid: e } },
            s = function(e, t) {
                return { type: "START_MOVE", fromIndex: e, toIndex: t } },
            l = function() {
                return { type: "END_MOVE" } },
            u = function(e, t, n) {
                return { type: "CANCEL_MOVE", fromIndex: t, toIndex: n, guid: e } },
            c = function(e, t) {
                return { type: "ROLLBACK_MOVE", originIndex: e, newIndex: t } },
            p = function(e, t) {
                return { type: "UPDATE_FILE", guid: e, newAttrs: t } };
        t.default = { clearList: n, addFile: r, deleteFile: i, moveFile: o, prepareMove: a, startMove: s, cancelMove: u, rollbackMove: c, endMove: l, updateFile: p }, e.exports = t.default },
    670: function(e, t, n) {
        (function(r, i) {
            "use strict";

            function o(e) {
                return e && e.__esModule ? e : { default: e } }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var l = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t } }(),
                u = function(e, t, n) {
                    for (var r = !0; r;) {
                        var i = e,
                            o = t,
                            a = n;
                        r = !1, null === i && (i = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(i, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(a) }
                        var u = Object.getPrototypeOf(i);
                        if (null === u) return;
                        e = u, t = o, n = a, r = !0, s = u = void 0
                    }
                },
                c = n(7),
                p = o(c),
                f = n(671),
                d = o(f),
                h = n(669),
                m = o(h),
                v = n(189),
                y = o(v),
                g = n(275),
                b = o(g),
                _ = n(467),
                T = o(_),
                w = n(673),
                k = o(w),
                C = n(489),
                P = o(C),
                O = n(676),
                S = o(O),
                E = n(314),
                x = o(E),
                I = n(492),
                D = o(I),
                L = function(e) {
                    function t(e) { a(this, t), u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { draggingFileGuid: "", originFromIndex: -1, dropped: !1, shareList: [], showFirstInvitation: !1, teamworkerOpen: !1 } }
                    return s(t, e), l(t, [{ key: "componentDidMount", value: function() { D.default.isEnterpriseStandard(cow.currentUser) && location.href.indexOf("team_created") > -1 && this._prepareForShowInvitation() } }, { key: "shouldComponentUpdate", value: function(e) {
                            var t = e.loaded;
                            return t } }, { key: "componentDidUpdate", value: function() { this._locateFolder() } }, { key: "_getListItems", value: function(e) {
                            var t = this,
                                n = [],
                                r = this.state.draggingFileGuid,
                                i = this.props.isMoving,
                                o = cow.listType;
                            if ("list" === o) e.forEach(function(e, o) {
                                var a = e.guid === r;
                                n.push(p.default.createElement(d.default, { key: o, file: e, draggable: "true", isDragging: a, isMoving: i, handleDragStart: t._handleItemDragStart.bind(t), handleDragEnter: t._handleItemDragEnter.bind(t), handleDragEnd: t._handleItemDragEnd.bind(t), handleDrop: t._handleItemDrop.bind(t), handleFolderDrop: t._handleFolderItemDrop.bind(t), handleUpdateFile: t._updateFile.bind(t), handleMenuItemClick: t._handleMenuItemClick.bind(t) })) });
                            else if ("favorites" === o) e.forEach(function(e, r) { n.push(p.default.createElement(d.default, { key: r, file: e, draggable: "false", isDragging: !1, handleUpdateFile: t._updateFile.bind(t), handleMenuItemClick: t._handleMenuItemClick.bind(t) })) });
                            else if ("recent" === o) {
                                var a = y.default.DateTime.sortByDate(e);
                                a.forEach(function(e, r) {
                                    var i = [];
                                    e.forEach(function(e, n) { i.push(p.default.createElement(d.default, { key: n, file: e, draggable: "false", isDragging: !1, handleUpdateFile: t._updateFile.bind(t), handleMenuItemClick: t._handleMenuItemClick.bind(t) })) });
                                    var o = ["今天", "昨天", "最近七天", "最近三十天", "很久以前"];
                                    i.length > 0 && n.push(p.default.createElement("li", { key: r, className: "recent-wrapper" }, p.default.createElement("div", { className: "recent-label" }, p.default.createElement("span", { className: "recent-text" }, o[r])), p.default.createElement("ul", { className: "recent-list" }, i))) }) }
                            return 0 === n.length ? p.default.createElement("div", { className: "list-empty", draggable: "false" }, p.default.createElement("div", { className: "list-empty-icon" }), p.default.createElement("div", { className: "list-empty-text" }, "没有文件")) : n } }, { key: "_handleItemDragStart", value: function(e, t) {
                            var n = this.props.dispatch;
                            this.setState({ draggingFileGuid: t, originFromIndex: this._getFileIndexByGuid(t) }), n(m.default.prepareMove(t)) } }, { key: "_handleItemDragEnter", value: function(e, t) {
                            var n = this.props.dispatch,
                                r = this.state.draggingFileGuid;
                            if (t !== r) {
                                var i = this._getFileIndexByGuid(r),
                                    o = this._getFileIndexByGuid(t);
                                i >= 0 && o >= 0 && n(m.default.moveFile(i, o)) } } }, { key: "_handleItemDrop", value: function(e, t) {
                            var n = this,
                                r = this.props,
                                i = r.files,
                                o = r.dispatch,
                                a = this.state,
                                s = a.draggingFileGuid,
                                l = a.originFromIndex;
                            t.guid === s && ! function() { n.setState({ dropped: !0 });
                                var e = n._getFileIndexByGuid(t.guid);
                                if (e !== l) {
                                    var r = t.id,
                                        a = e < i.length - 1 ? i[e + 1].id : null;
                                    b.default.resortList(r, a).then(function() { o(m.default.endMove()) }).fail(function() { o(m.default.rollbackMove(l, e)) }) } else o(m.default.endMove()) }() } }, { key: "_handleFolderItemDrop", value: function(e, t) {
                            var n = this.props.dispatch,
                                r = this.state.draggingFileGuid,
                                i = 0 === t.type ? "文档" : 1 === t.type ? "文件夹" : "表格",
                                o = t.shortcut_id ? "shortcut" : "file";
                            t.guid !== r && ! function() {
                                var e = { title: "移动" + i, description: "", confirmLabel: "确认", abortLabel: "取消", confirmFun: function() { b.default.moveToFolder(r, t.guid, o, "action").then(function() { n(m.default.updateFile(r, { is_delete: 2 })) }) } };
                                b.default.moveToFolder(r, t.guid, o, "info").then(function(t) {
                                    if ("dialog" === t.data.type) {
                                        var n = t.data;
                                        n.data.removeUserCount > 0 && (e.description = "移动后所有上级文件夹的共享成员将无权限访问该" + i), n.data.addUserCount > 0 && (e.description = "移动后所有上级文件夹的共享成员将有权限访问该" + i), e.description && (0, T.default)(e) } }).fail(function(e) { "no_move_privilege" === e.message ? y.default.alert({ title: "只有管理员或创建者才能将" + i + "移入共享文件夹", type: "error" }) : "err_shawlortcut_inside" === e.message ? y.default.alert({ titie: "文件夹中有他人分享的文档/文件夹，无法移动到共享文件夹", type: "error" }) : y.default.alert({ title: "移动文件失败", type: "error" }) }) }() } }, { key: "_handleItemDragEnd", value: function() {
                            var e = this.props.dispatch,
                                t = this.state.dropped;
                            if (!t) {
                                var n = this.state,
                                    r = n.originFromIndex,
                                    i = n.draggingFileGuid,
                                    o = this._getFileIndexByGuid(i);
                                e(m.default.rollbackMove(r, o)) }
                            this.setState({ draggingFileGuid: "", dropped: !1 }) } }, { key: "_handleMenuItemClick", value: function(e, t) {
                            var n = this.props.dispatch;
                            if ("mark" === e) b.default.createFavoriteFile(t).then(function(e) { n(m.default.updateFile(t.guid, e)) });
                            else if ("unmark" === e) b.default.destroyFavoriteFile(t).then(function(e) { n(m.default.updateFile(t.guid, e)) });
                            else if ("delete" === e) {
                                var i = 1 === t.type ? "文件夹" : 0 === t.type ? "文档" : "表格",
                                    o = { title: "删除" + i, description: "确定要删除" + i + "吗？", confirmLabel: "确认", abortLabel: "取消", confirmFun: function() { b.default.updateFile(t, { is_delete: 1 }).then(function(e) { n(m.default.updateFile(t.guid, e)) }) } };
                                (0, T.default)(o) } else "copy" === e ? b.default.createCopyFile(t.guid).then(function(e) { e.authorized = !0, e.privilege = { del: !0, move: !0 }, n(m.default.addFile(e)) }) : "locate" === e ? b.default.getAncestors(t).then(function(e) {
                                if (e.length > 0) {
                                    var n = e.pop();
                                    window.cow.locateFileGuid = t.guid, r(n.link) } }) : "share" === e ? this._showTeamworker(t) : "unshare" === e && ! function() {
                                var e = 1 === t.type ? "文件夹" : 0 === t.type ? "文档" : "表格";
                                if (t.privilege.del) {
                                    var r = { title: "转让管理员权限", description: "管理员退出共享需转让管理员权限", confirmLabel: "转让权限", abortLabel: "取消", confirmFun: function() {
                                            var e = new k.default("#transfer-admin");
                                            e.showTransferAdmin(t) } };
                                    (0, T.default)(r) } else {
                                    var r = { title: "退出共享", description: "确认要退出共享吗？<br />退出共享后你将无权限访问该文件", confirmLabel: "确定", abortLabel: "取消", confirmFun: function() { b.default.quiteShare(t).then(function() { n(m.default.updateFile(t.guid, { is_delete: 1 })), y.default.alert({ title: "已从此" + e + "的共享中退出" }) }).fail(function() { y.default.alert({ title: "操作失败", type: "error" }) }) } };
                                    (0, T.default)(r) } }() } }, { key: "_getFileIndexByGuid", value: function(e) {
                            var t = this.props.files,
                                n = -1;
                            return t.some(function(t, r) {
                                return t.guid === e && (n = r, !0) }), n } }, { key: "_updateFile", value: function(e, t) {
                            var n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
                                r = this.props.dispatch,
                                i = e.guid,
                                o = {};
                            for (var a in t) e[a] !== t[a] && (o[a] = e[a]);
                            r(m.default.updateFile(i, t)), n ? r(m.default.updateFile(i, t)) : b.default.updateFile(e, t).then(function(e) { r(m.default.updateFile(i, e)) }).fail(function() { r(m.default.updateFile(i, o)) }) } }, { key: "_locateFolder", value: function() {
                            var e = cow.locateFileGuid;
                            if (e && "list" === cow.listType) {
                                var t = i(".list-view-wrap"),
                                    n = t.find('div[data-guid="' + e + '"]');
                                if (n.length > 0) { t.scrollTop(0);
                                    var r = n.offset().top,
                                        o = t.height(),
                                        a = n.height(),
                                        s = r + a - 50 - o / 2;
                                    s > 0 && t.animate({ scrollTop: s }, "500"), cow.locateFileGuid = "" } } } }, { key: "_showTeamworker", value: function(e) { this.refs.teamworker.show(), this.setState({ fileId: e.id, fileGuid: e.guid, fileUserId: e.user_id }) } }, { key: "_prepareForShowInvitation", value: function() {
                            var e = this;
                            x.default.needToGuide() && x.default.checkIsReady().then(function() { cow.guideStatus.team_first_invitation || (e.setState({ showFirstInvitation: !0 }), x.default.removeTipAjax("team_first_invitation"), r("/desktop")) }) } }, { key: "_renderFirstInvation", value: function() {
                            var e = this.state.showFirstInvitation;
                            return e ? p.default.createElement(S.default, { open: e }) : null } }, { key: "render", value: function() {
                            var e = this.props,
                                t = e.files,
                                n = e.isMoving,
                                r = this.state,
                                i = r.fileGuid,
                                o = r.fileId,
                                a = r.fileUserId,
                                s = cow.currentFile.guid || 0,
                                l = "number" == typeof cow.currentFile.id ? cow.currentFile : 0;
                            return p.default.createElement("div", { className: "list-view-wrapper" }, p.default.createElement(P.default, { ref: "teamworker", fileId: o, fileUserId: a, fileGuid: i }), this._renderFirstInvation.bind(this)(), p.default.createElement("ul", { className: "ob-ul list-inner-container " + (n ? "ondrag" : ""), "data-guid": s, "data-id": l }, this._getListItems(t))) } }]), t }(c.Component);
            L.propTypes = { files: c.PropTypes.array, loaded: c.PropTypes.bool, loading: c.PropTypes.bool, isMoving: c.PropTypes.bool, dispatch: c.PropTypes.func }, t.default = L, e.exports = t.default
        }).call(t, n(240), n(1))
    },
    671: function(e, t, n) {
        (function(r, i, o) { "use strict";

            function a(e) {
                return e && e.__esModule ? e : { default: e } }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function l(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var u = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t } }(),
                c = function(e, t, n) {
                    for (var r = !0; r;) {
                        var i = e,
                            o = t,
                            a = n;
                        r = !1, null === i && (i = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(i, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(a) }
                        var u = Object.getPrototypeOf(i);
                        if (null === u) return;
                        e = u, t = o, n = a, r = !0, s = u = void 0 } },
                p = n(7),
                f = a(p),
                d = n(163),
                h = a(d),
                m = n(189),
                v = a(m),
                y = n(672),
                g = a(y),
                b = n(314),
                _ = a(b),
                T = function(e) {
                    function t(e) { s(this, t), c(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
                        var n = this.props.file,
                            r = n.type,
                            i = { hover: "", showOperation: !1, guide: "" };
                        1 === r && (i.willAcceptDrag = !1), this._timerId = -1, this.state = i }
                    return l(t, e), u(t, [{ key: "componentDidMount", value: function() { this._showUserGuide() } }, { key: "_hideOperation", value: function() { this.setState({ hover: "", showOperation: !1 }) } }, { key: "_getFileType", value: function(e) {
                            var t = +e.type;
                            return 0 === t ? "doc" : 1 === t ? "folder" : "spreadsheet" } }, { key: "_onMouseEnter", value: function() { this.setState({ hover: "hover" }) } }, { key: "_onMouseLeave", value: function() {
                            var e = this.state.showOperation;
                            this.setState({ hover: e ? "hover" : "" }) } }, { key: "_onItemClick", value: function(e, t) { this._clearUserGuide();
                            var n = t.target.className.match(/(settings-[0-9a-zA-Z]{16}|list-dropdown-btn)/);
                            if (!n)
                                if (t.ctrlKey || t.metaKey || !e.authorized) v.default.openFile(e);
                                else {
                                    var i = +e.type;
                                    1 === i ? r("/folder/" + e.guid) : 0 === i ? r("/doc/" + e.guid) : i === -1 && r("/spreadsheet/" + e.guid) }
                            t.preventDefault() } }, { key: "_onDragStart", value: function(e) {
                            var t = this,
                                n = this.state.showOperation;
                            if (n) return this._stopEvent(e);
                            var r = this.props,
                                i = r.file,
                                o = r.handleDragStart;
                            return e.dataTransfer.setData("Text", i.guid), e.dataTransfer.dropEffect = "move", this.setState({ hover: "" }, function() { setTimeout(function() { "function" == typeof o && t.props.handleDragStart(e, i.guid) }, 10) }), !0 } }, { key: "_onDragEnd", value: function(e) {
                            var t = this.props,
                                n = t.file,
                                r = t.handleDragEnd;
                            1 === n.type && this.setState({ willAcceptDrag: !1 }), "function" == typeof r && r(e) } }, { key: "_onDragEnter", value: function(e) {
                            var t = this.props,
                                n = t.isMoving,
                                r = t.file,
                                i = t.handleDragEnter;
                            if (!n) return this._stopEvent(e);
                            var o = 100;
                            return 1 === r.type && (o = 300), "function" == typeof i && (this._timerId && clearTimeout(this._timerId), this._timerId = setTimeout(function() { i(e, r.guid) }, o)), e.preventDefault() } }, { key: "_onDragLeave", value: function(e) {
                            var t = this.props,
                                n = t.file,
                                r = t.isMoving;
                            if (r || this._stopEvent(e), 1 === n.type) {
                                var o = i(e.target).offset(),
                                    a = e.clientX - o.left,
                                    s = e.clientY - o.top;
                                (a < 0 || a > 124 || s < 0 || s > 128) && this._timerId && (clearTimeout(this._timerId), this._timerId = -1) } } }, { key: "_onDragOver", value: function(e) {
                            return e.dataTransfer.dropEffect = "move", this._stopEvent(e) } }, { key: "_onDrop", value: function(e) {
                            var t = this.props,
                                n = t.file,
                                r = t.handleDrop;
                            return "function" == typeof r && r(e, n), this._stopEvent(e) } }, { key: "_onFolderDragEnter", value: function(e) {
                            var t = this.props,
                                n = t.file,
                                r = t.isMoving;
                            return r ? (1 === n.type && this._timerId && (clearTimeout(this._timerId), this.setState({ willAcceptDrag: !0 })), this._stopEvent(e)) : this._stopEvent(e) } }, { key: "_onFolderDragLeave", value: function(e) {
                            var t = this.props,
                                n = t.file,
                                r = t.isMoving;
                            return r ? (1 === n.type && this.setState({ willAcceptDrag: !1 }), this._stopEvent(e)) : this._stopEvent(e) } }, { key: "_onFolderDrop", value: function(e) {
                            var t = this.props,
                                n = t.file,
                                r = t.handleFolderDrop,
                                i = t.isMoving;
                            return i ? (1 === n.type && ("function" == typeof r && r(e, n), this.setState({ willAcceptDrag: !1, hover: "hover" })), this._stopEvent(e)) : this._stopEvent(e) } }, { key: "_stopEvent", value: function(e) {
                            return e.preventDefault(), e.stopPropagation(), !1 } }, { key: "_onSettingsClick", value: function() {
                            var e = this.state.showOperation,
                                t = this.props,
                                n = t.clearOperation,
                                r = t.file;
                            this._clearUserGuide(), "function" == typeof n && n(r.guid), e || this.refs.listItemOperation.updateName(), this.setState({ showOperation: !e }) } }, { key: "_handleMenuItemClick", value: function(e) { this.setState({ showOperation: !1, hover: "" }), this._handleOperationHide();
                            var t = this.props,
                                n = t.file,
                                r = t.handleMenuItemClick; "function" == typeof r && r(e, n) } }, { key: "_showNewFileOperation", value: function() {
                            var e = this,
                                t = this.props,
                                n = t.handleUpdateFile,
                                r = t.file;
                            this.setState({ hover: "hover", showOperation: !0 }, function() { e.refs.listItemOperation.updateName(), setTimeout(function() {
                                    var t = h.default.findDOMNode(e),
                                        n = t.getElementsByClassName("list-item-input");
                                    n = n && n.length > 0 && n[0], n && n.focus() }, 500) }), r.isNew && n(r, { isNew: !1 }, !0) } }, { key: "_showUserGuide", value: function() {
                            var e = this;
                            _.default.needToGuide() && _.default.checkIsReady().then(function() {
                                if (!cow.guideStatus.desktop_open_doc) {
                                    var t = e.props.file;
                                    t.name === _.default.guideDocTitle && e.setState({ guide: "guide-doc" }, function() { _.default.addTip("guide-open-doc") }) } }) } }, { key: "_clearUserGuide", value: function() {
                            var e = this.state.guide;
                            e && this.setState({ guide: "" }, function() { _.default.removeTip("guide-open-doc") }) } }, { key: "_handleOperationHide", value: function() {
                            var e = this.props,
                                t = e.file,
                                n = e.handleUpdateFile;
                            t.isNew && "function" == typeof n && n(t, { isNew: !1 }, !0) } }, { key: "render", value: function() {
                            var e = this,
                                t = this.props,
                                n = t.file,
                                r = t.isDragging,
                                i = t.handleUpdateFile,
                                a = this.state,
                                s = a.hover,
                                l = a.willAcceptDrag,
                                u = a.guide,
                                c = n.name,
                                p = n.guid,
                                d = n.id,
                                h = n.share_count,
                                m = n.parent_id,
                                y = n.tags,
                                b = this._getFileType(n),
                                _ = this.state.showOperation,
                                T = o.unescape(v.default.cutName(o.unescape(c), 32)),
                                w = T === c ? "" : c,
                                k = n.guid === window.cow.locateFileGuid ? "hover" : s;
                            n.isNew && setTimeout(function() { e._showNewFileOperation() }, 500);
                            var C = function() {
                                if (r) return f.default.createElement("div", { className: "list-item-content hover" });
                                var t = "";
                                0 === m && h > 1 ? t = h : m > 0 && h > 0 && (t = "+" + h);
                                var n = function() {
                                        return t ? f.default.createElement("span", { className: "list-shared-tag file-folder-sprite" }) : null },
                                    i = function() {
                                        return y && y.indexOf("favorites") > -1 ? f.default.createElement("span", { className: "list-marked-tag file-folder-sprite" }) : null },
                                    o = e.props.draggable;
                                return f.default.createElement("div", { className: b + "-content list-item-content " + k, draggable: o }, f.default.createElement("div", { className: b + "-style file-folder-sprite", onDragEnter: e._onFolderDragEnter.bind(e), onDragLeave: e._onFolderDragLeave.bind(e), onDrop: e._onFolderDrop.bind(e), draggable: "false" }, f.default.createElement("span", { className: "share-count list-share-count", "data-share-count": h }, t), n(), i()), f.default.createElement("div", { className: "list-item-title info" }, T), f.default.createElement("div", { className: "dropdown-btn list-dropdown-btn", onClick: e._onSettingsClick.bind(e) }, f.default.createElement("span", { className: "icon-settings settings-" + p }))) };
                            return f.default.createElement("li", { className: "ob-li list-item " + (l ? "scale" : "") + " " + u, onMouseEnter: this._onMouseEnter.bind(this), onMouseLeave: this._onMouseLeave.bind(this), onDragEnter: this._onDragEnter.bind(this), onDragLeave: this._onDragLeave.bind(this), onDragOver: this._onDragOver.bind(this), onDragStart: this._onDragStart.bind(this), onDrop: this._onDrop.bind(this), onDragEnd: this._onDragEnd.bind(this) }, f.default.createElement("div", { className: "list-thumbnail thumbnail list-share-box " + ("folder" === b ? "folder" : ""), "data-id": d, "data-guid": p }, f.default.createElement("a", { "data-href": "/" + p, target: p, title: w, href: "/" + b + "/" + p, onClick: this._onItemClick.bind(this, n) }, C()), f.default.createElement(g.default, { ref: "listItemOperation", handleUpdateFile: i, onHide: this._handleOperationHide.bind(this), hideOperation: this._hideOperation.bind(this), handleMenuItemClick: this._handleMenuItemClick.bind(this), file: n, active: _ }))) } }]), t }(p.Component);
            t.default = T, T.propTypes = { file: p.PropTypes.object, isDragging: p.PropTypes.bool, draggable: p.PropTypes.string, isMoving: p.PropTypes.bool, handleUpdateFile: p.PropTypes.func, handleMenuItemClick: p.PropTypes.func, handleDragStart: p.PropTypes.func, handleDragEnd: p.PropTypes.func, handleDragEnter: p.PropTypes.func, handleDrop: p.PropTypes.func, handleFolderDrop: p.PropTypes.func, clearOperation: p.PropTypes.func }, e.exports = t.default }).call(t, n(240), n(1), n(4)) },
    672: function(e, t, n) {
        (function(r) { "use strict";

            function i(e) {
                return e && e.__esModule ? e : { default: e } }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t } }(),
                l = function(e, t, n) {
                    for (var r = !0; r;) {
                        var i = e,
                            o = t,
                            a = n;
                        r = !1, null === i && (i = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(i, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(a) }
                        var u = Object.getPrototypeOf(i);
                        if (null === u) return;
                        e = u, t = o, n = a, r = !0, s = u = void 0 } },
                u = n(7),
                c = i(u),
                p = n(163),
                f = i(p),
                d = n(189),
                h = i(d),
                m = function(e) {
                    function t(e) { o(this, t), l(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = {}, this.handleOtherClick = this._handleOtherClick.bind(this) }
                    return a(t, e), s(t, [{ key: "componentWillMount", value: function() { r(window).on("click", this.handleOtherClick), r(".header-item-add-wrap").on("click", this.handleOtherClick) } }, { key: "componentWillUnmount", value: function() { r(window).off("click", this.handleOtherClick), r(".header-item-add-wrap").off("click", this.handleOtherClick) } }, { key: "hide", value: function() {
                            var e = this.props,
                                t = e.onHide,
                                n = e.hideOperation; "function" == typeof n && n(), "function" == typeof t && t() } }, { key: "updateName", value: function() {
                            var e = this.props.file;
                            this.setState({ name: e.name }) } }, { key: "_handleOtherClick", value: function(e) {
                            var t = e.target,
                                n = this.props,
                                r = n.file,
                                i = n.active,
                                o = !!e.target.className.match(/icon-settings/),
                                a = !!e.target.className.match(/list-dropdown-btn/);
                            if (o || a) {
                                var s = "";
                                if (o) s = t.className;
                                else {
                                    var l = e.target.getElementsByClassName("icon-settings");
                                    l = l.length > 0 ? l[0] : null, l && (s = l.className) }
                                var u = s.match(/settings-([0-9a-zA-Z]{16})/);
                                u = u && u[1] ? u[1] : "", u !== r.guid && i && !f.default.findDOMNode(this).contains(t) && this.hide() } else i && !f.default.findDOMNode(this).contains(t) && this.hide() } }, { key: "_onInputFocus", value: function(e) {
                            var t = this.state.name,
                                n = this.props.file,
                                r = this.props.file.type;
                            return "undefined" == typeof t && (t = n.name), (1 === r && "新建文件夹" === t || 1 !== r && "无标题" === t) && this.setState({ name: "" }), e.stopPropagation(), e.preventDefault(), !1 } }, { key: "_onInputBlur", value: function() { this.hide();
                            var e = this.state.name,
                                t = this.props,
                                n = t.handleUpdateFile,
                                r = t.file;
                            e || (e = 1 === r.type ? "新建文件夹" : "无标题"), e !== r.name && "function" == typeof n && n(r, { name: e }) } }, { key: "_onInputKeyPress", value: function(e) {
                            var t = this.props,
                                n = t.handleUpdateFile,
                                r = t.file,
                                i = this.state.name;
                            e.charCode === h.default.keyCodes.ENTER && (this.hide(), "function" == typeof n && ("" === i && (i = 1 === +r.type ? "新建文件夹" : "无标题", this.setState({ name: i })), n(r, { name: i }))) } }, { key: "_onInputChange", value: function() {
                            var e = this.refs.nameInput,
                                t = e.value;
                            this.setState({ name: t }) } }, { key: "_onMenuItemClick", value: function(e) {
                            var t = this.props.handleMenuItemClick;
                            if ("function" == typeof t) {
                                var n = e.currentTarget.className,
                                    r = "";
                                n.match(/unmark-star/) ? r = "unmark" : n.match(/mark-star/) ? r = "mark" : n.match(/share-ob/) ? r = "share" : n.match(/cancel-share/) ? r = "unshare" : n.match(/create-copy/) ? r = "copy" : n.match(/delete-ob/) ? r = "delete" : n.match(/locate-folder/) && (r = "locate"), r && t(r) } } }, { key: "render", value: function() {
                            var e = this,
                                t = this.props,
                                n = t.active,
                                r = t.file,
                                i = r.type,
                                o = r.tags,
                                a = r.parent_id,
                                s = r.privilege,
                                l = r.share_count,
                                u = r.authorized,
                                p = r.name,
                                f = this.state.name; "undefined" == typeof f && (f = r.name);
                            var d = cow.listType || "list",
                                h = function(t, n) {
                                    var r = function() {
                                        return c.default.createElement("div", { className: "list-menu-item " + t, onClick: e._onMenuItemClick.bind(e) }, c.default.createElement("span", { className: "list-menu-item-icon menu-" + t + "-icon little-icon-sprite" }), c.default.createElement("span", null, n)) };
                                    return "locate-folder" !== t || "favorites" !== d && "recent" !== d ? "unmark-star" === t && (o || []).indexOf("favorites") > -1 ? r() : "mark-star" === t && (o || []).indexOf("favorites") === -1 ? r() : "share-ob" === t ? r() : "create-copy" === t && 1 !== i && "list" === d ? r() : "cancel-share" !== t || 1 !== cow.currentFile.share_count && "undefined" != typeof cow.currentFile.share_count || !(l > 1 || l > 0 && a) ? "delete-ob" === t && s.del ? r() : null : r() : r() };
                            if (u) {
                                var m = h("cancel-share", "退出共享"),
                                    v = h("delete-ob", "删除"),
                                    y = null;
                                return (m || v) && (y = c.default.createElement("hr", null)), c.default.createElement("div", { draggable: "false", className: "file-operations list-item-dropdown " + (n ? "active" : "") }, c.default.createElement("div", { className: "trangle" }, c.default.createElement("span", { className: "list-trangle-item top" }), c.default.createElement("span", { className: "list-trangle-item down" })), c.default.createElement("div", { className: "normal-menu list-item-menu" }, c.default.createElement("div", { className: "name-input list-item-name" }, c.default.createElement("input", { className: "form-control list-item-input", ref: "nameInput", "data-value": f, placeholder: 1 === +i ? "文件名称" : "文档标题", defaultValue: p, value: f, onChange: this._onInputChange.bind(this), onBlur: this._onInputBlur.bind(this), onFocus: this._onInputFocus.bind(this), onKeyPress: this._onInputKeyPress.bind(this) })), h("locate-folder", "定位到所在文件夹"), h("unmark-star", "取消标星"), h("mark-star", "标星"), h("share-ob", "共享"), h("create-copy", "创建副本"), y, m, v)) }
                            return c.default.createElement("div", { draggable: "false", className: "dropdown file-operations list-item-dropdown " + (n ? "active" : "") }, c.default.createElement("div", { className: "trangle" }, c.default.createElement("span", { className: "list-trangle-item top" }), c.default.createElement("span", { className: "list-trangle-item down" })), h("locate-folder", "定位到所在文件夹"), h("unmark-star", "取消标星")) } }]), t }(u.Component);
            t.default = m, m.propTypes = { active: u.PropTypes.bool, file: u.PropTypes.object, hideOperation: u.PropTypes.func, handleUpdateFile: u.PropTypes.func, handleMenuItemClick: u.PropTypes.func, onHide: u.PropTypes.func }, e.exports = t.default }).call(t, n(1)) },
    673: function(e, t, n) {
        var r, i;
        (function(o, a) {
            var s = function(e, t) {
                    function n() { this.constructor = e }
                    for (var r in t) l.call(t, r) && (e[r] = t[r]);
                    return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e },
                l = {}.hasOwnProperty;
            r = [n(189), n(206), n(299), n(674), n(675)], i = function(e, t, n, r, i) {
                var l;
                return l = function(l) {
                    function u() {
                        return u.__super__.constructor.apply(this, arguments) }
                    return s(u, l), u.prototype.init = function() {
                        var e;
                        return e = this, this.$view = o("#transfer-admin"), this.currentPick = "", this.$view.click(function(t) {
                            return o(t.target).is(e.$view) ? o(this).hide() : t.stopPropagation() }) }, u.prototype.eventMap = { "click .transfer-close": "hideWin", "click .sure-transfer": "sureTransfer", "click .transfer-list-item": "pickUser", "propertychange .transfer-input": "inputChange", "input .transfer-input": "inputChange", "click .cancel-transfer": "hideWin" }, u.prototype.domEvents = { hideWin: function() {
                            return this.$view.hide() }, sureTransfer: function(e, r) {
                            var i, a;
                            if (!o(r).hasClass("disable") && "" !== this.currentPick) return a = this, i = t.contacts[this.currentPick], +i.status === -1 ? n.show({ okCallback: function() {
                                    return a.sendTransferRequest() }, headText: "管理员转让", bodyText: i.email + " 还未接受邀请<br>确定要把管理员转让给吗？" }) : this.sendTransferRequest() }, pickUser: function(e, t) {
                            var n, r;
                            return n = o(t), r = n.attr("data-user-id"), n.hasClass("is-checked") ? (n.removeClass("is-checked"), this.currentPick = "") : (this.$view.find(".is-checked").removeClass("is-checked"), n.addClass("is-checked"), this.currentPick = r), this.changeBtnStatus() }, inputChange: function(e) {
                            var t;
                            return t = o(e.target).val(), t ? this.search(t) : this.resetView(), this.currentPick = "", this.changeBtnStatus() } }, u.prototype.sendTransferRequest = function() {
                        var t, n, r;
                        return r = this, t = this.$view.find(".sure-transfer"), t.addClass("disable").text("处理中..."), n = { guid: this.file.guid, new_owner_id: this.currentPick }, e.post("/api/file/transfer_ownership", n, function(n) {
                            return 0 === n.code ? (r.$view.hide(), e.alert({ title: "已转交管理员并退出共享" })) : (e.alert({ title: "操作失败！", type: "error" }), t.removeClass("disable").text("确认转让并退出共享")) }, function(n) {
                            return e.alert({ title: "操作失败！", type: "error" }), t.removeClass("disable").text("确认转让并退出共享") }) }, u.prototype.resetView = function() {
                        return this.renderTransferList(this.shareUsers) }, u.prototype.search = function(e) {
                        var n;
                        return n = t.search(e, this.shareUsers), n.length ? this.renderTransferList(n, "search") : this.showNoResult() }, u.prototype.hideContentShadow = function() {
                        return this.$view.find(".transfer-content-shadow").hide() }, u.prototype.showContentShadow = function() {
                        return this.$view.find(".transfer-content-shadow").show() }, u.prototype.hideNoResult = function() {
                        return this.$view.find(".transfer-no-result").hide() }, u.prototype.showNoResult = function() {
                        return this.$view.find(".transfer-no-result").show(), this.hideContentShadow() }, u.prototype.changeBtnStatus = function() {
                        var e;
                        return e = this.$view.find(".sure-transfer"), this.currentPick ? e.removeClass("disable") : e.addClass("disable") }, u.prototype.renderTransferList = function(e, t) {
                        var n;
                        return this.hideNoResult(), this.$view.find(".transfer-content-list").html(a.template(i)({ userList: e })), n = this.$view.find(".transfer-content-title"), "search" === t ? n.text("搜索结果") : n.text("所有成员"), e.length > 5 ? this.showContentShadow() : this.hideContentShadow() }, u.prototype.showTransferList = function(t) {
                        var n;
                        return n = this, this.file = t, e.post("/api/share/" + t.guid, {}, function(t) {
                            var i, o;
                            return 0 === t.code ? (i = window.cow.currentUser, o = t.data.current, n.shareUsers = a.remove(o, function(e) {
                                return e.id !== i.id }), n.$view.html(a.template(r)({})).show(), n.renderTransferList(n.shareUsers)) : e.alert({ title: "请求共享人失败！", type: "error" }) }, function(t) {
                            return e.alert({ titile: "服务器出错", type: "error" }) }) }, u.prototype.showTransferAdmin = function(e) {
                        return this.showTransferList(e) }, u }(e.DomModule) }.apply(t, r), !(void 0 !== i && (e.exports = i)) }).call(t, n(1), n(4)) },
    674: function(e, t) { e.exports = '<div class="transfer-box">\n    <div class="transfer-header">\n        <span class="transfer-title">转让管理员权限</span>\n        <span class="transfer-close hicon icon-close"></span>\n    </div>\n    <div class="transfer-body">\n        <div class="transfer-input-box">\n            <input class="transfer-input" placelholer="查找成员"></input>\n        </div>\n        <div class="transfer-content">\n            <div class="transfer-content-title">所有成员</div>\n            <ul class="transfer-content-list"></ul>\n            <div class="transfer-no-result">无搜索结果</div>\n        </div>\n        <div class="transfer-content-shadow"></div>\n    </div>\n    <div class="transfer-footer">\n        <span class="transfer-btn btn cancel-transfer">取消</span>\n        <span class="transfer-btn btn btn-ok disable sure-transfer">确认转让并退出共享</span>\n    </div>\n</div>' },
    675: function(e, t) { e.exports = '<% _.each(userList, function (user) { %>\n    <li class="transfer-list-item" data-user-id="<%= user.id %>" data-user-email="<%= user.email %>">\n        <img class="transfer-item-avatar" alt="头像"/ src="<%= user.avatar %>">\n        <span class="transfer-item-username ellipsis"><%= user.name %></span>\n        <span class="transfer-item-email ellipsis"><%= user.email || \'石墨用户\' %></span>\n        <span class="transfer-item-icon doc-share-icon"></span>\n    </li>\n<% }) %>\n' },
    676: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n }
            return Array.from(e) }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t } }(),
            l = function(e, t, n) {
                for (var r = !0; r;) {
                    var i = e,
                        o = t,
                        a = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a) }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    e = u, t = o, n = a, r = !0, s = u = void 0 } },
            u = n(7),
            c = r(u),
            p = n(292),
            f = r(p),
            d = n(677),
            h = r(d),
            m = n(500),
            v = r(m),
            y = n(189),
            g = r(y),
            b = function(e) {
                function t(e) { o(this, t), l(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { open: e.open, inviteType: "link", inviteList: [], isInviting: !1 } }
                return a(t, e), s(t, [{ key: "componentWillReceiveProps", value: function(e) {
                        var t = e.open; "undefined" != typeof t && t !== this.state.open && t !== this.props.open && this.setState({ open: t }) } }, { key: "_close", value: function() { this.setState({ open: !1 }) } }, { key: "_onInvitationChange", value: function(e) {
                        var t = e.type,
                            n = e.data; "tabChange" === t ? this.setState({ inviteType: n, inviteList: [] }) : "dataChange" === t && this.setState({ inviteList: [].concat(i(n)) }) } }, { key: "_closeAfterAlert", value: function() {
                        var e = this;
                        g.default.alert({ title: "创建成功<br />你还可以在「个人头像菜单-企业管理-成员管理」中添加新成员" }), setTimeout(function() { e._close() }, 500) } }, { key: "_startInvite", value: function() {
                        var e = this,
                            t = this.state,
                            n = t.inviteType,
                            r = t.inviteList; "link" === n ? this._closeAfterAlert() : r.length > 0 && (this.setState({ isInviting: !0 }), v.default.inviteMembers(r).then(function() { e.setState({ isInviting: !1 }), e._closeAfterAlert() }, function() {})) } }, { key: "_bodyTpl", value: function() {
                        var e = this.state,
                            t = e.inviteType,
                            n = e.inviteList,
                            r = e.isInviting,
                            i = ["link", "email", "recent"],
                            o = "link" === t ? "完成" : r ? "正在邀请" : "发送邀请",
                            a = "link" === t ? "" : n.length > 0 && !r ? "" : "disable";
                        return c.default.createElement("div", { className: "invitation-content-wrap" }, c.default.createElement("span", { className: "invitation-content-title" }, "创建成功"), c.default.createElement("span", { className: "invitation-content-desc" }, "邀请企业成员，即刻开始优美高效协作"), c.default.createElement(h.default, { onChange: this._onInvitationChange.bind(this), showItems: i }), c.default.createElement("div", { className: "invitation-foot" }, c.default.createElement("a", { className: "invitation-ignore", onClick: this._closeAfterAlert.bind(this) }, "跳过"), c.default.createElement("button", { className: "btn btn-ok " + a, onClick: this._startInvite.bind(this) }, o))) } }, { key: "render", value: function() {
                        var e = !1,
                            t = !1;
                        return c.default.createElement(f.default, { customClass: "invitation-dialog light", ref: "flatDialog", hasCloseButton: e, title: "", open: this.state.open, enableCloseClickMask: t, bodyTpl: this._bodyTpl.bind(this) }) } }]), t }(u.Component);
        t.default = b, b.propTypes = { open: u.PropTypes.bool }, e.exports = t.default },
    677: function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n }
            return Array.from(e) }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t } }(),
            l = function(e, t, n) {
                for (var r = !0; r;) {
                    var i = e,
                        o = t,
                        a = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a) }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    e = u, t = o, n = a, r = !0, s = u = void 0 } },
            u = n(7),
            c = r(u),
            p = n(161),
            f = n(678),
            d = r(f),
            h = n(679),
            m = r(h),
            v = n(680),
            y = r(v),
            g = n(492),
            b = r(g),
            _ = function(e) {
                function t(e) { o(this, t), l(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { recentList: [] }, this._result = {}, this._result.currentInfoList = [] }
                return a(t, e), s(t, [{ key: "componentDidMount", value: function() { this._getRecentList() } }, { key: "_headTpl", value: function(e) {
                        return c.default.createElement("span", { className: "" }, e) } }, { key: "_tabWillChange", value: function(e, t) {
                        var n = this.props,
                            r = n.onChange,
                            i = n.showItems,
                            o = { type: "tabChange", data: i[t] }; "function" == typeof r && r(o), this._result[i[e]] = this._result.currentInfoList;
                        var a = this._result[i[t]] || [];
                        this._changeInviteList(a) } }, { key: "_changeInviteList", value: function(e) { this._result.currentInfoList = [].concat(i(e));
                        var t = this.props.onChange,
                            n = { type: "dataChange", data: e }; "function" == typeof t && t(n) } }, { key: "_onEmailChange", value: function(e) { this._changeInviteList(e) } }, { key: "_onRecentChange", value: function(e) {
                        var t = this.state.recentList,
                            n = [];
                        t.forEach(function(t) { b.default.isSameUser(t, e.user) && (t.isChecked = !1, "select" === e.type ? t.isChecked = !0 : "unSelect" === e.type && (t.isChecked = !1)), t.isChecked && n.push(t.email || t.id) }), this.setState({ recentList: t }), this._changeInviteList(n) } }, { key: "_getRecentList", value: function() {
                        var e = this;
                        b.default.getRecentMember().then(function(t) {
                            if (0 === t.code) {
                                var n = t.data.filter(function(e) {
                                    return !(e.status < 0) && e.team_id !== cow.currentUser.team_id });
                                e.setState({ recentList: n }) } }, function() {}) } }, { key: "render", value: function() {
                        var e = this,
                            t = this.props.showItems,
                            n = this.state.recentList,
                            r = [],
                            i = !0;
                        return (t || []).forEach(function(t) { "link" === t ? r.push(c.default.createElement(p.TabItem, { title: "邀请链接" }, c.default.createElement(d.default, null))) : "email" === t ? r.push(c.default.createElement(p.TabItem, { title: "邮箱邀请" }, c.default.createElement(m.default, { onChange: e._onEmailChange.bind(e) }))) : "recent" === t && n.length > 0 && r.push(c.default.createElement(p.TabItem, { title: "协作过的人" }, c.default.createElement(y.default, { recentList: n, onChange: e._onRecentChange.bind(e) }))) }), c.default.createElement(p.Tab, { customClass: "sm-nav-tabs invitation-tabs large", disableSetWidth: i, headTpl: this._headTpl, tabWillChange: this._tabWillChange.bind(this) }, r) } }]), t }(u.Component);
        t.default = _, _.propTypes = { showItems: u.PropTypes.arrayOf(u.PropTypes.oneOf(["link", "email", "recent"])), onChange: u.PropTypes.func }, e.exports = t.default
    },
    678: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t } }(),
            s = function(e, t, n) {
                for (var r = !0; r;) {
                    var i = e,
                        o = t,
                        a = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a) }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    e = u, t = o, n = a, r = !0, s = u = void 0 } },
            l = n(7),
            u = r(l),
            c = n(500),
            p = r(c),
            f = n(437),
            d = r(f),
            h = n(189),
            m = r(h),
            v = function(e) {
                function t(e) { i(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { inviteLink: "", disabled: !0, copyStatus: "" } }
                return o(t, e), a(t, [{ key: "componentDidMount", value: function() { this._getInviteLink(), this._initCopy() } }, { key: "_getInviteLink", value: function() {
                        var e = this;
                        p.default.getInviteLink().then(function(t) { t ? e.setState({ inviteLink: t, disabled: !1 }) : e.setState({ disabled: !0 }) }, function() {}) } }, { key: "_initCopy", value: function() {
                        var e = this;
                        d.default.config({ swfPath: "//dn-shimo-assets.qbox.me/assets/res/ZeroClipboard.swf" });
                        var t = new d.default(this.refs.copyBtn);
                        t.on("ready", function() { t.on("copy", function() { m.default.alert({ title: "复制成功！", delay: 1500 }), t.setText(e.state.inviteLink) }) }), t.on("error", function() { self.setState({ copyStatus: "unable" }) }) } }, { key: "_toggleInviteLink", value: function() {
                        var e = this,
                            t = this.state.disabled;
                        t ? p.default.openInviteLink().then(function(t) { e.setState({ inviteLink: t, disabled: !1 }) }, function() { m.default.alert({ title: "开启邀请链接失败", type: "error" }) }) : p.default.closeInviteLink().then(function() { e.setState({ disabled: !0 }) }, function() { m.default.alert({ title: "关闭邀请链接失败", type: "error" }) }) } }, { key: "_renderLinkDesc", value: function() {
                        var e = this.state.disabled;
                        return e ? u.default.createElement("div", { className: "invitation-link-desc" }, "收到邀请链接的人可以申请加入企业，需企业创建者或管理员批准", u.default.createElement("br", null), "邀请链接已关闭，启用将生成新的链接（旧链接失效）", u.default.createElement("a", { className: "close-invitation-link", onClick: this._toggleInviteLink.bind(this) }, "开启邀请链接")) : u.default.createElement("div", { className: "invitation-link-desc" }, "收到邀请链接的人可以申请加入企业，需企业创建者或管理员批准", u.default.createElement("br", null), "加入完毕后避免链接泄漏，可以 ", u.default.createElement("a", { className: "close-invitation-link", onClick: this._toggleInviteLink.bind(this) }, "关闭邀请链接")) } }, { key: "render", value: function() {
                        var e = this.state,
                            t = e.inviteLink,
                            n = e.disabled,
                            r = e.copyStatus,
                            i = n ? "disable" : "",
                            o = "unable" === r ? "copy-unable" : "";
                        return u.default.createElement("div", { className: "invitation-link-panel" }, u.default.createElement("div", { className: "invitation-link-line " + i }, u.default.createElement("input", { className: "sm-form-control invitation-link-input " + o, readOnly: "readonly", disabled: n ? "disabled" : "", value: t }), u.default.createElement("button", { ref: "copyBtn", className: "btn btn-default invitation-link-copy " + i + " " + o }, "复制")), this._renderLinkDesc()) } }]), t }(l.Component);
        t.default = v, v.propTypes = {}, e.exports = t.default },
    679: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t } }(),
            s = function(e, t, n) {
                for (var r = !0; r;) {
                    var i = e,
                        o = t,
                        a = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a) }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    e = u, t = o, n = a, r = !0, s = u = void 0 } },
            l = n(7),
            u = r(l),
            c = function(e) {
                function t(e) { i(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { emailContent: "" } }
                return o(t, e), a(t, [{ key: "_onChange", value: function(e) {
                        var t = e.target.value;
                        this.setState({ emailContent: t });
                        var n = t.split("\n") || [],
                            r = this.props.onChange; "function" == typeof r && r(n) } }, { key: "render", value: function() {
                        var e = this.state.emailContent;
                        return u.default.createElement("div", { className: "invitation-email-panel" }, u.default.createElement("textarea", { className: "invitation-email-list sm-form-control", onChange: this._onChange.bind(this), value: e, placeholder: "输入邮箱，多个邮箱之间用换行分隔，每次最多添加20个" })) } }]), t }(l.Component);
        t.default = c, c.propTypes = { onChange: l.PropTypes.func }, e.exports = t.default },
    680: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t } }(),
            s = function(e, t, n) {
                for (var r = !0; r;) {
                    var i = e,
                        o = t,
                        a = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a) }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    e = u, t = o, n = a, r = !0, s = u = void 0 } },
            l = n(7),
            u = r(l),
            c = n(493),
            p = r(c),
            f = function(e) {
                function t() { i(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).apply(this, arguments) }
                return o(t, e), a(t, [{ key: "render", value: function() {
                        var e = !0,
                            t = this.props.recentList;
                        return u.default.createElement("div", { className: "invitation-recent-wrap" }, u.default.createElement(p.default, { classPrefix: "invitation", onChange: this.props.onChange, selectable: e, userList: t || [] })) } }]), t }(l.Component);
        t.default = f, f.propTypes = { onChange: l.PropTypes.func, recentList: l.PropTypes.array }, e.exports = t.default },
    681: function(e, t, n) {
        (function(r, i) { "use strict";

            function o(e) {
                return e && e.__esModule ? e : { default: e } }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function s(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var l = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t } }(),
                u = function(e, t, n) {
                    for (var r = !0; r;) {
                        var i = e,
                            o = t,
                            a = n;
                        r = !1, null === i && (i = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(i, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(a) }
                        var u = Object.getPrototypeOf(i);
                        if (null === u) return;
                        e = u, t = o, n = a, r = !0, s = u = void 0 } },
                c = n(7),
                p = o(c),
                f = n(682),
                d = o(f),
                h = n(683),
                m = o(h),
                v = n(684),
                y = o(v),
                g = n(197),
                b = o(g),
                _ = n(275),
                T = n(186),
                w = o(T),
                k = function(e) {
                    function t(e) { a(this, t), u(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { tableTitle: r.unescape(window.cow.currentFile.name), userId: window.cow.currentUser.id, shareStatus: window.cow.shareStatus.mode } }
                    return s(t, e), l(t, [{ key: "componentDidMount", value: function() { this._init() } }, { key: "_onTitleChange", value: function() {} }, { key: "_onTitleBlur", value: function() {
                            var e = this.refs.tableName.getValue();
                            e !== this.state.tableTitle && (0, _.updateTitle)(e) } }, { key: "_init", value: function() { this._initPush() } }, { key: "_initPush", value: function() {
                            var e = this,
                                t = this;
                            b.default.bind("File", function(e) {
                                if (!(["spreadsheet", "doc"].indexOf(window.cow.pageType) < 0) && "update" === e.db_event && +e.data.id === +cow.currentFile.id)
                                    if (0 === +e.data.is_delete) {
                                        var n = e.data.name;
                                        w.default.notify("file:updateTitle", n) } else 1 === +e.data.is_delete && +e.data.deleted_by !== +cow.currentUser.id && t._backParent() }), w.default.attach("file:updateTitle", function(t) { e.setState({ tableTitle: t }), window.cow.currentFile.name = t, e.refs.tableName && (document.title = t, e.refs.tableName.setValue(r.unescape(t))) }) } }, { key: "_backParent", value: function() {
                            var e = void 0,
                                t = void 0;
                            i.len > 0 ? i.back() : (e = window.cow.currentFile, t = window.cow.authorized ? e.parent && e.parent.guid ? "/folder/" + e.parent.guid : e.team_id ? "/team/" + e.team_id + "/files" : "/desktop" : "/login", i(t)) } }, { key: "render", value: function() {
                            var e = this;
                            if (["spreadsheet", "doc"].indexOf(window.cow.pageType) >= 0) {
                                var t = "header-star-btn s-header-star-btn" + (window.cow.currentFile.tags && window.cow.currentFile.tags.indexOf("favorites") >= 0 ? " active" : ""),
                                    n = "doc" === window.cow.pageType ? "team-icon-doc" : "team-icon-sheet",
                                    r = p.default.createElement("a", { className: t }, p.default.createElement("span", { className: "team-sprite team-icon-star mark-star-icon" }));
                                return p.default.createElement("div", { className: "s-header" }, p.default.createElement("a", { className: "header-back-up", onClick: function(t) {
                                        return e._backParent(t) } }, p.default.createElement("span", { className: "header-back-icon" })), p.default.createElement("span", { className: "header-crumb-arrow little-icon-sprite" }), p.default.createElement("span", { className: "left-sheet-img team-sprite " + n }), p.default.createElement("span", { className: "s-header-text" }, p.default.createElement(d.default, { customClass: "title-input", defaultValue: this.state.tableTitle ? this.state.tableTitle : "无标题", placeholder: "无标题", maxWidth: "240px", autoWidth: !0, onBlur: function(t) {
                                        return e._onTitleBlur(t) }, onChange: function(t) {
                                        return e._onTitleChange(t) }, tooltip: "重命名", ref: "tableName" })), cow.currentFile.authorized ? p.default.createElement(y.default, { guid: cow.currentFile.guid }) : null, cow.currentFile.authorized ? r : null, p.default.createElement(m.default, { customClassName: "s-header-time" })) }
                            return p.default.createElement("a", { className: "header-logo logo-22", href: "/desktop" }) } }]), t }(c.Component);
            t.default = k, e.exports = t.default }).call(t, n(4), n(240)) },
    682: function(e, t, n) { "use strict";
        var r = n(7),
            i = n(186);
        e.exports = r.createClass({ displayName: "exports", propTypes: { customClass: r.PropTypes.string, placeholder: r.PropTypes.string, defaultValue: r.PropTypes.string, autoWidth: r.PropTypes.bool, tooltip: r.PropTypes.string }, getInitialState: function() {
                return { inputWidth: this._getInputMinWidth(), value: this.props.defaultValue, inputValue: this.props.defaultValue, showTooltip: !1, focused: !1 } }, componentDidMount: function() { this._copyInputStyles(), this._updateInputWidth() }, shouldComponentUpdate: function(e, t) {
                return t != this.state }, componentDidUpdate: function() { this._updateInputWidth() }, render: function() {
                var e = this.props,
                    t = {};
                this.state.inputWidth && (t.width = this.state.inputWidth + "px");
                var n = this.state.showTooltip && !this.state.focused ? " active" : "";
                return r.createElement("div", { className: "span-input-wrap" }, r.createElement("input", { className: e.customClass + " span-input", placeholder: e.placeholder || "输入", defaultValue: e.defaultValue || "石墨表格", onChange: this._onChange, onBlur: this._onBlur, onFocus: this._onFocus, onKeyUp: this._onKeyUp, onKeyDown: this._onKeyDown, onMouseOver: this._onMouseOver, onMouseOut: this._onMouseOut, value: this.state.inputValue, style: t, maxLength: 100, ref: "input" }), r.createElement("span", { ref: "input-pre", className: e.customClass + "-pre span-input-pre" }, this.state.value), r.createElement("span", { className: "tooltip span-input-tooltip s-tooltip" + n }, this.props.tooltip)) }, getValue: function() {
                return this.state.inputValue }, setValue: function(e) { this.setState({ value: e, inputValue: e }), this._updateInputWidth() }, _copyInputStyles: function() {
                if (this.isMounted() && window.getComputedStyle) {
                    var e = window.getComputedStyle(this.refs.input),
                        t = this.refs["input-pre"];
                    t.style.fontSize = e.fontSize, t.style.fontFamily = e.fontFamily, t.style.fontWeight = e.fontWeight, t.style.fontStyle = e.fontStyle, t.style.letterSpacing = e.letterSpacing } }, _updateInputWidth: function() {
                if ("" === this.state.value && this.props.placeholder) return void this.setState({ value: this.props.placeholder });
                if (this.props.autoWidth && this.isMounted() && "undefined" != typeof this.refs["input-pre"].scrollWidth) {
                    var e = this.refs["input-pre"].scrollWidth + 4,
                        t = this._getInputMinWidth(),
                        n = this._getInputMaxWidth();
                    e < t ? e = t : e > n && (e = n), e !== this.state.inputWidth && this.setState({ inputWidth: e }) } }, _getInputMinWidth: function() {
                var e = parseInt(this.props.minWidth);
                return e = isNaN(e) ? 0 : e }, _getInputMaxWidth: function() {
                var e = parseInt(this.props.maxWidth);
                return e = isNaN(e) ? 9999999 : e }, _onChange: function(e) { this.setState({ value: e.target.value, inputValue: e.target.value }), this._updateInputWidth(), this.props.onChange && this.props.onChange() }, _onBlur: function(e) { "" == this.state.inputValue && this.props.placeholder ? this.setState({ inputValue: this.props.placeholder }, function() { this.props.onBlur && this.props.onBlur() }) : this.props.onBlur && this.props.onBlur(), this.setState({ focused: !1 }), window.cow.iOS && i.notify("sheetTitleStatus", { status: "blur" }) }, _onFocus: function(e) {
                var t = e.target.value; "无标题" === t && this.setState({ inputValue: "" }), this.setState({ focused: !0 }), window.cow.iOS && i.notify("sheetTitleStatus", { status: "focus" }) }, _onKeyUp: function(e) { 13 == e.keyCode && e.target.blur() }, _onKeyDown: function(e) {
                if ((90 === e.keyCode || 89 === e.keyCode) && e.ctrlKey) return e.stopPropagation(), e.preventDefault(), !1 }, _onMouseOver: function(e) { this.props.tooltip && !this.state.showTooltip && this.setState({ showTooltip: !0 }) }, _onMouseOut: function(e) { this.props.tooltip && this.state.showTooltip && this.setState({ showTooltip: !1 }) } }) },
    683: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

        function o(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t } }(),
            s = function(e, t, n) {
                for (var r = !0; r;) {
                    var i = e,
                        o = t,
                        a = n;
                    r = !1, null === i && (i = Function.prototype);
                    var s = Object.getOwnPropertyDescriptor(i, o);
                    if (void 0 !== s) {
                        if ("value" in s) return s.value;
                        var l = s.get;
                        if (void 0 === l) return;
                        return l.call(a) }
                    var u = Object.getPrototypeOf(i);
                    if (null === u) return;
                    e = u, t = o, n = a, r = !0, s = u = void 0 } },
            l = n(7),
            u = r(l),
            c = n(189),
            p = r(c),
            f = n(186),
            d = r(f),
            h = function(e) {
                function t(e) { i(this, t), s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e);
                    var n = window.cow.currentFile.updated_at,
                        r = p.default.DateTime.format(n) + "更新"; "刚刚更新" === r && (r = "doc" === window.cow.pageType ? "文档将实时更新" : "表格将实时更新"), this.state = { displayText: r, lastUpdateTime: n, timerId: -1 } }
                return o(t, e), a(t, [{ key: "componentDidMount", value: function() {
                        var e = this;
                        d.default.attachOne("saveStatus:start", function() {
                            return e._startSave() }), d.default.attachOne("saveStatus:success", function() {
                            return e._saveSuccess() }), d.default.attachOne("saveStatus:error", function() {
                            return e._saveError() }), d.default.attachOne("saveStatus:getUpdate", function() {
                            return e._getUpdateFromServer() }), this._tellIos(), this._createTimerTick() } }, { key: "_startSave", value: function() { this._destroyTimerTick(), this.setState({ displayText: "正在保存..." }, this._tellIos) } }, { key: "_saveSuccess", value: function() {
                        var e = this;
                        setTimeout(function() { e.setState({ displayText: "保存成功", lastUpdateTime: (new Date).toString() }, e._tellIos), e._createTimerTick() }, 500) } }, { key: "_saveError", value: function() { this.setState({ displayText: "保存失败" }, this._tellIos) } }, { key: "_getUpdateFromServer", value: function() { this.setState({ displayText: "表格将实时保存", lastUpdateTime: (new Date).toString() }, this._tellIos), this._destroyTimerTick(), this._createTimerTick() } }, { key: "_createTimerTick", value: function() {
                        var e = this,
                            t = setInterval(function() {
                                var t = p.default.DateTime.format(e.state.lastUpdateTime) + "更新"; "刚刚更新" === t && (t = "表格将实时更新"), e.setState({ displayText: t }, e._tellIos) }, 18e5);
                        e.setState({ timerId: t }) } }, { key: "_destroyTimerTick", value: function() { clearInterval(this.state.timerId) } }, { key: "_tellIos", value: function() {
                        if (window.cow.iOS) {
                            var e = this.state.displayText;
                            d.default.notify("updateSaveStatus", { message: e }) } } }, { key: "render", value: function() {
                        var e;
                        return "保存失败" === this.state.displayText && (e = { color: "#ee7b70" }), u.default.createElement("span", { className: this.props.customClassName, style: e, id: "save-status" }, this.state.displayText) } }]), t }(u.default.Component);
        t.default = h, h.propTypes = { customClassName: u.default.PropTypes.string }, e.exports = t.default },
    684: function(e, t, n) {
        (function(r) { "use strict";

            function i(e) {
                return e && e.__esModule ? e : { default: e } }

            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var s = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
                    return function(t, n, r) {
                        return n && e(t.prototype, n), r && e(t, r), t } }(),
                l = function(e, t, n) {
                    for (var r = !0; r;) {
                        var i = e,
                            o = t,
                            a = n;
                        r = !1, null === i && (i = Function.prototype);
                        var s = Object.getOwnPropertyDescriptor(i, o);
                        if (void 0 !== s) {
                            if ("value" in s) return s.value;
                            var l = s.get;
                            if (void 0 === l) return;
                            return l.call(a) }
                        var u = Object.getPrototypeOf(i);
                        if (null === u) return;
                        e = u, t = o, n = a, r = !0, s = u = void 0 } },
                u = n(7),
                c = i(u),
                p = n(239),
                f = n(190),
                d = n(201),
                h = function(e) {
                    function t(e) { o(this, t), l(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e), this.state = { isLoading: !0, ancestors: [], active: !1 } }
                    return a(t, e), s(t, [{ key: "componentDidMount", value: function() { this._getAncestors(), this.handleOtherClick = this._otherClick.bind(this), (0, d.on)(document.getElementsByTagName("html")[0], "click", this.handleOtherClick) } }, { key: "componentWillUnmount", value: function() {
                            (0, d.off)(document.getElementsByTagName("html")[0], "click", this.handleOtherClick) } }, { key: "_otherClick", value: function(e) { "undefined" != typeof this.state.active && this.state.active && (e.target.className.match(/crumb-dropdown-btn/) || this.setState({ active: !1 })) } }, { key: "_renderCrumbList", value: function(e) {
                            var t = this,
                                n = [];
                            if (this.state.isLoading) return c.default.createElement("div", { className: "crumb-loading" }, c.default.createElement("img", { className: "crumb-loading-img", src: "/static/dist/assets/images/loading-b67e5a67dc.gif" }));
                            var r = [22, 20, 18, 16];
                            return e.forEach(function(e, i) {
                                var o = i > 3 ? 3 : i,
                                    a = (0, f.cutLength)(e.name, r[o]),
                                    s = a === e.name ? "" : e.name;
                                n.push(c.default.createElement("li", { key: i, className: "crumb-list-item", title: s, "data-href": e.link, "data-type": e.type, onClick: t._onCrumbListClick.bind(t) }, c.default.createElement("a", { className: "crumb-list-link crumb-list-indent" + o, href: "javascript:void(0);" }, c.default.createElement("span", { className: "little-icon-sprite crumb-list-icon crumb-" + e.type + "-icon" }), c.default.createElement("span", { className: "crumb-item-name" }, a)))) }), n } }, { key: "_onCrumbListClick", value: function(e) {
                            var t = e.currentTarget,
                                n = t.getAttribute("data-href");
                            n && r(n) } }, { key: "_toggleDropdown", value: function() { this.setState({ active: !this.state.active }) } }, { key: "_attachAncestors", value: function(e) {
                            (e || []).map(function(e, t) {
                                return 0 !== t && (e.link = "/folder/" + e.guid, e.type = "folder"), e }) } }, { key: "_getAncestors", value: function() {
                            var e = this,
                                t = this.props.guid,
                                n = "/api/file/" + t + "/ancestors";
                            this.setState({ isLoading: !0 }), (0, p.ajaxGet)(n).then(function(t) {
                                if (0 === t.code) {
                                    var n = t.data,
                                        r = n.ancestors || [];
                                    r.unshift({ name: "个人桌面", type: "desktop", link: "/desktop" }), e._attachAncestors(r), e.setState({ isLoading: !1, ancestors: r }) } }) } }, { key: "render", value: function() {
                            var e = this.state.ancestors || [],
                                t = this.state.active ? "active" : "";
                            return c.default.createElement("div", { className: "crumb-wrap" }, c.default.createElement("a", { className: "crumb-dropdown-btn little-icon-sprite", onClick: this._toggleDropdown.bind(this) }), c.default.createElement("ul", { className: "crumb-dropdown-wrap " + t }, this._renderCrumbList(e))) } }]), t }(u.Component);
            t.default = h, h.propTypes = { guid: u.PropTypes.string }, e.exports = t.default }).call(t, n(240)) },
    685: function(e, t, n) {
        (function(r) { "use strict";

            function i(e) {
                return e && e.__esModule ? e : { default: e } }

            function o() {
                function e() {
                    var e = r("#email-verify");
                    if (0 !== e.length) {
                        var n = cow.currentUser.email;
                        if (n) {
                            var i = n.substr(n.indexOf("@") + 1),
                                o = s.default.emailList[i];
                            o && e.find(".current-email").attr("href", "http://" + o), t() } } }

                function t() { r("#email-verify .email-verify-send.active").on("click", function() { n() }), r(".email-verify-close").on("click", function() { i() }) }

                function n() {
                    var e = r("#email-verify .email-verify-send");
                    s.default.post("/api/resend_activation_mail", {}, function() { s.default.alert({ title: "激活邮件发送成功，请前往激活" }), e.removeClass("active").text("已发送") }, function() { s.default.alert({ title: "激活邮件发送失败，请重试", type: "error" }) }) }

                function i() { r("#email-verify").hide(), s.default.post("/flash_messages/read", { message_name: "verify_email" }, function() { console.log("close verify email") }) }
                e() }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = o;
            var a = n(189),
                s = i(a);
            e.exports = t.default }).call(t, n(1)) },
    686: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(7),
            o = r(i),
            a = n(163),
            s = r(a),
            l = n(244),
            u = n(687),
            c = r(u),
            p = n(197),
            f = r(p),
            d = n(282),
            h = r(d),
            m = n(189),
            v = r(m),
            y = n(398),
            g = r(y),
            b = n(690),
            _ = r(b),
            T = (0, c.default)();
        (0, _.default)(T), t.default = function(e) {
            var t = e.ListContainer,
                n = e.guid,
                r = e.isAjaxForce,
                i = { listWrap: document.getElementById("list-view") },
                a = T.dispatch(h.default.getList(n, r));
            a.then(function(e) { g.default.inc(), window.cow.currentFile = e;
                var n = e.pageTitle || "石墨"; "home" === cow.pageType ? n = "石墨" : "folder" === cow.pageType && (n = cow.currentFile.name), document.title = n, f.default.getConnectSocket().then(function() { window.cow.listApp || (window.cow.listApp = s.default.render(o.default.createElement(l.Provider, { store: T }, o.default.createElement(t, null)), i.listWrap)), g.default.done() }).catch(function(e) { setTimeout(function() { g.default.done(), v.default.alert({ title: e ? e.message : "加载出错" }) }, 0) }) }) }, e.exports = t.default },
    687: function(e, t, n) { "use strict";

        function r(e) {
            return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(251),
            o = n(263),
            a = r(o),
            s = n(264),
            l = r(s),
            u = n(688),
            c = r(u),
            p = n(689),
            f = r(p),
            d = null,
            h = (0, i.combineReducers)({ list: c.default, listNature: f.default }),
            m = (0, i.applyMiddleware)(a.default, l.default)(i.createStore),
            v = function(e) {
                return m(h, e) };
        t.default = function() {
            return d || (d = v()), d }, e.exports = t.default },
    688: function(e, t, n) {
        (function(n) { "use strict";

            function r(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n }
                return Array.from(e) }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var i = { loading: !0, loaded: !1, isMoving: !1, files: cow.currentFile.children },
                o = function(e, t) {
                    return Object.assign ? Object.assign({}, e, t) : n.assign({}, e, t) },
                a = function(e, t, n) {
                    var r = [].concat(e);
                    if (t === n) return r;
                    var i = r[t];
                    return t > n ? (r.splice(n, 0, i), r.splice(t + 1, 1)) : (r.splice(n + 1, 0, i), r.splice(t, 1)), r },
                s = function(e) {
                    return o(e, { files: [] }) },
                l = function(e) {
                    return o(e, { loaded: !1, loading: !0 }) },
                u = function(e, t) {
                    return (t.children || []).forEach(function(e) { e.authorized = "undefined" == typeof e.authorized || e.authorized }), o(e, { loaded: !0, loading: !1, files: [].concat(t.children || []) }) },
                c = function(e, t) {
                    return o(e, { loaded: !0, loading: !1, error: t }) },
                p = function(e, t) {
                    var n = o({}, t),
                        i = [n].concat(r(e.files));
                    return o(e, { files: i }) },
                f = function(e, t) {
                    var n = e.files.filter(function(e) {
                        return e.guid !== t });
                    return o(e, { files: n }) },
                d = function(e, t, n) {
                    var r = [].concat(e.files);
                    return r = a(r, t, n), o(e, { files: r }) },
                h = function(e) {
                    var t = [].concat(e.files);
                    return o(e, { isMoving: !0, files: t }) },
                m = function(e) {
                    var t = [].concat(e.files);
                    return o(e, { files: t }) },
                v = function(e) {
                    var t = [].concat(e.files);
                    return o(e, { isMoving: !1, files: t }) },
                y = function(e) {
                    var t = [].concat(e.files);
                    return o(e, { isMoving: !1, files: t }) },
                g = function(e, t, n) {
                    var r = [].concat(e.files);
                    return r = a(r, n, t), o(e, { isMoving: !1, files: r }) },
                b = function(e, t, n) {
                    var r = [].concat(e.files);
                    return n.hasOwnProperty("is_delete") && +n.is_delete >= 1 ? r.some(function(e, n) {
                        return e.guid === t && (r.splice(n, 1), !0) }) : r = r.map(function(e) {
                        return e.guid === t ? o(e, n) : e }), o(e, { files: r }) };
            t.default = function(e, t) {
                switch (e = e || i, t.type) {
                    case "CLEAR_LIST":
                        return s(e);
                    case "LIST_LOAD":
                        return l(e);
                    case "LIST_LOAD_SUCCESS":
                        return u(e, t.result);
                    case "LIST_LOAD_FAIL":
                        return c(e, t.error);
                    case "ADD_FILE":
                        return p(e, t.file);
                    case "DELETE_FILE":
                        return f(e, t.guid);
                    case "MOVE_FILE":
                        return d(e, t.fromIndex, t.toIndex);
                    case "PREPARE_MOVE":
                        return h(e, t.guid);
                    case "START_MOVE":
                        return m(e, t.fromIndex, t.toIndex);
                    case "CANCEL_MOVE":
                        return y(e, t.guid, t.fromIndex, t.toIndex);
                    case "ROLLBACK_MOVE":
                        return g(e, t.originIndex, t.newIndex);
                    case "END_MOVE":
                        return v(e);
                    case "UPDATE_FILE":
                        return b(e, t.guid, t.newAttrs) }
                return e }, e.exports = t.default }).call(t, n(4)) },
    689: function(e, t, n) {
        (function(n) { "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = { listType: cow.listType },
                i = function(e, t) {
                    return Object.assign ? Object.assign({}, e, t) : n.assign({}, e, t) },
                o = function(e) {
                    return i(e, { listType: cow.listType }) },
                a = function(e, t) {
                    return i(e, { currentFile: t }) };
            t.default = function(e, t) {
                switch (e = e || r, t.type) {
                    case "LIST_LOAD":
                        return o(e);
                    case "LIST_LOAD_SUCCESS":
                        return a(e, t.result) }
                return e }, e.exports = t.default }).call(t, n(4)) },
    690: function(e, t, n) {
        (function(r) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = n(197),
                a = i(o),
                s = n(669),
                l = i(s);
            t.default = function(e) {
                function t() { a.default.bind("File", function(e) {
                        if (["doc", "spreadsheet"].indexOf(cow.pageType) === -1) {
                            var t = e.data; "create" === e.db_event ? d(t) && f(t) && s(t, !0) : "update" === e.db_event ? d(t) && f(t) && 0 === +t.is_delete ? s(t) : m(l.default.updateFile(t.guid, t)) : "sortFiles" === e.db_event && p(t) } }) }

                function n() { a.default.bind("TagFile", function(e) {
                        if (["doc", "spreadsheet"].indexOf(window.cow.pageType) < 0) {
                            var t = e.data;
                            if ("favorites" === e.data.tag_name) {
                                var n = cow.listType;
                                if ("create" === e.db_event) {
                                    if ("list" === n || "recent" === n) {
                                        var r = c(t.file.id);
                                        if (r) {
                                            var i = r.tags || [];
                                            i.indexOf("favorites") === -1 && i.push("favorites"), m(l.default.updateFile(r.guid, { tags: i })), u(r.guid, { tags: i }) } } else if ("favorites" === n) {
                                        var r = t.file;
                                        if (r) {
                                            var i = r.tags || [];
                                            i.indexOf("favorites") === -1 && i.push("favorites"), r.tags = i, s(r) } } } else {
                                    var o = t.file_id,
                                        a = t.is_delete,
                                        r = c(o);
                                    r && 1 === +a && ("list" === n || "recent" === n ? ! function() {
                                        var e = r.tags || [];
                                        e.some(function(t, n) {
                                            return "favorites" === t && (e.splice(n, 1), !0) }), m(l.default.updateFile(r.guid, { tags: e })), u(r.guid, { tags: e }) }() : "favorites" === n && (m(l.default.updateFile(r.guid, { is_delete: 1 })), u(r.guid, { is_delete: 1 }))) } } } }) }

                function i() { a.default.bind("Share", function(e) {
                        var t = cow.listType,
                            n = ["recent", "favorites"].indexOf(t) < 0,
                            r = e.data,
                            i = r.file;
                        if ("create" === e.db_event && n) f(i) && d(i) && (i.user_id === cow.currentUser.id && 1 === i.type ? s(i, !0) : s(i));
                        else if ("update" === e.db_event) {
                            var o = {};
                            o = +r.is_delete >= 1 ? n ? { is_delete: 1 } : { authorized: !1 } : i, m(l.default.updateFile(i.guid, o)), u(i.guid, o) } }) }

                function o() { a.default.bind("Activation", function(e) { e.success && r("#email-verify").remove() }) }

                function s(e) {
                    var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                    1 === e.type && (e.isNew = t), e.authorized = !0, e.tags = e.tags || [], cow.currentFile.children.unshift(e), m(l.default.addFile(e)) }

                function u(e, t) {
                    var n = cow.currentFile.children;
                    (n || []).some(function(r, i) {
                        if (r.guid === e) {
                            for (var o in t) r[o] = t[o], "is_delete" === o && +t.is_delete >= 1 && n.splice(i, 1);
                            return !0
                        }
                        return !1
                    })
                }

                function c(e) {
                    var t = h.getState().list,
                        n = t.files,
                        r = null;
                    return n && n.some(function(t) {
                        return t.id === e && (r = t, !0) }), r }

                function p(e) {
                    var t = e.nextId,
                        n = e.targetId,
                        r = -1,
                        i = -1,
                        o = -1,
                        a = -1,
                        s = h.getState().list;
                    s.files.forEach(function(e, i) { e.id === n ? (r = i, a = i) : t === e.id && (o = i) }), i = null === t ? s.files.length - 1 : r >= o ? o : o - 1, s = h.getState().list, a !== i && !s.isMoving && r > -1 && i > -1 && m(l.default.moveFile(r, i)) }

                function f(e) {
                    var t = h.getState().list,
                        n = t.files;
                    return !n.some(function(t) {
                        return t.guid === e.guid }) }

                function d(e) {
                    var t = cow.currentFile.id || 0;
                    return e.parent_id === t }
                var h = e,
                    m = e.dispatch;
                ! function() { t(), n(), i(), o() }()
            }, e.exports = t.default
        }).call(t, n(1))
    }
});
