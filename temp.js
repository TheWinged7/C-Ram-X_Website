! function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    function e(e, n) {
        var o, s, a, r = e.nodeName.toLowerCase();
        return "area" === r ? (o = e.parentNode, s = o.name, e.href && s && "map" === o.nodeName.toLowerCase() ? (a = t("img[usemap='#" + s + "']")[0], !!a && i(a)) : !1) : (/input|select|textarea|button|object/.test(r) ? !e.disabled : "a" === r ? e.href || n : n) && i(e)
    }

    function i(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
            return "hidden" === t.css(this, "visibility")
        }).length
    }
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.11.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        scrollParent: function(e) {
            var i = this.css("position"),
                n = "absolute" === i,
                o = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                s = this.parents().filter(function() {
                    var e = t(this);
                    return n && "static" === e.css("position") ? !1 : o.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && s.length ? s : t(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var t = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, n) {
            return !!t.data(e, n[3])
        },
        focusable: function(i) {
            return e(i, !isNaN(t.attr(i, "tabindex")))
        },
        tabbable: function(i) {
            var n = t.attr(i, "tabindex"),
                o = isNaN(n);
            return (o || n >= 0) && e(i, !o)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
        function n(e, i, n, s) {
            return t.each(o, function() {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }
        var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            s = i.toLowerCase(),
            a = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + i] = function(e) {
            return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                t(this).css(s, n(this, e) + "px")
            })
        }, t.fn["outer" + i] = function(e, o) {
            return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                t(this).css(s, n(this, e, !0, o) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
        return function(i) {
            return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
        focus: function(e) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var e = this;
                    setTimeout(function() {
                        t(e).focus(), n && n.call(e)
                    }, i)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        disableSelection: function() {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(t + ".ui-disableSelection", function(t) {
                    t.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length)
                for (var i, n, o = t(this[0]); o.length && o[0] !== document;) {
                    if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(o.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                    o = o.parent()
                }
            return 0
        }
    }), t.ui.plugin = {
        add: function(e, i, n) {
            var o, s = t.ui[e].prototype;
            for (o in n) s.plugins[o] = s.plugins[o] || [], s.plugins[o].push([i, n[o]])
        },
        call: function(t, e, i, n) {
            var o, s = t.plugins[e];
            if (s && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (o = 0; s.length > o; o++) t.options[s[o][0]] && s[o][1].apply(t.element, i)
        }
    };
    var n = 0,
        o = Array.prototype.slice;
    t.cleanData = function(e) {
        return function(i) {
            var n, o, s;
            for (s = 0; null != (o = i[s]); s++) try {
                n = t._data(o, "events"), n && n.remove && t(o).triggerHandler("remove")
            } catch (a) {}
            e(i)
        }
    }(t.cleanData), t.widget = function(e, i, n) {
        var o, s, a, r, l = {},
            c = e.split(".")[0];
        return e = e.split(".")[1], o = c + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
            return !!t.data(e, o)
        }, t[c] = t[c] || {}, s = t[c][e], a = t[c][e] = function(t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new a(t, e)
        }, t.extend(a, s, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), r = new i, r.options = t.widget.extend({}, r.options), t.each(n, function(e, n) {
            return t.isFunction(n) ? void(l[e] = function() {
                var t = function() {
                        return i.prototype[e].apply(this, arguments)
                    },
                    o = function(t) {
                        return i.prototype[e].apply(this, t)
                    };
                return function() {
                    var e, i = this._super,
                        s = this._superApply;
                    return this._super = t, this._superApply = o, e = n.apply(this, arguments), this._super = i, this._superApply = s, e
                }
            }()) : void(l[e] = n)
        }), a.prototype = t.widget.extend(r, {
            widgetEventPrefix: s ? r.widgetEventPrefix || e : e
        }, l, {
            constructor: a,
            namespace: c,
            widgetName: e,
            widgetFullName: o
        }), s ? (t.each(s._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, a, i._proto)
        }), delete s._childConstructors) : i._childConstructors.push(a), t.widget.bridge(e, a), a
    }, t.widget.extend = function(e) {
        for (var i, n, s = o.call(arguments, 1), a = 0, r = s.length; r > a; a++)
            for (i in s[a]) n = s[a][i], s[a].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
        return e
    }, t.widget.bridge = function(e, i) {
        var n = i.prototype.widgetFullName || e;
        t.fn[e] = function(s) {
            var a = "string" == typeof s,
                r = o.call(arguments, 1),
                l = this;
            return s = !a && r.length ? t.widget.extend.apply(null, [s].concat(r)) : s, this.each(a ? function() {
                var i, o = t.data(this, n);
                return "instance" === s ? (l = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, r), i !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'")
            } : function() {
                var e = t.data(this, n);
                e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
            }), l
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === i && this.destroy()
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var n, o, s, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {}, n = e.split("."), e = n.shift(), n.length) {
                    for (o = a[e] = t.widget.extend({}, this.options[e]), s = 0; n.length - 1 > s; s++) o[n[s]] = o[n[s]] || {}, o = o[n[s]];
                    if (e = n.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
                    o[e] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i
                }
            return this._setOptions(a), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(e, i, n) {
            var o, s = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, o = this.widget()), t.each(n, function(n, a) {
                function r() {
                    return e || s.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? s[a] : a).apply(s, arguments) : void 0
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = n.match(/^([\w:-]*)\s*(.*)$/),
                    c = l[1] + s.eventNamespace,
                    d = l[2];
                d ? o.delegate(d, c, r) : i.bind(c, r)
            })
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? n[t] : t).apply(n, arguments)
            }
            var n = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, n) {
            var o, s, a = this.options[e];
            if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], s = i.originalEvent)
                for (o in s) o in i || (i[o] = s[o]);
            return this.element.trigger(i, n), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, o, s) {
            "string" == typeof o && (o = {
                effect: o
            });
            var a, r = o ? o === !0 || "number" == typeof o ? i : o.effect || i : e;
            o = o || {}, "number" == typeof o && (o = {
                duration: o
            }), a = !t.isEmptyObject(o), o.complete = s, o.delay && n.delay(o.delay), a && t.effects && t.effects.effect[r] ? n[e](o) : r !== e && n[r] ? n[r](o.duration, o.easing, s) : n.queue(function(i) {
                t(this)[e](), s && s.call(n[0]), i()
            })
        }
    }), t.widget, t.widget("ui.tabs", {
        version: "1.11.2",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, n;
                e = e.cloneNode(!1), i = e.href.replace(t, ""), n = location.href.replace(t, "");
                try {
                    i = decodeURIComponent(i)
                } catch (o) {}
                try {
                    n = decodeURIComponent(n)
                } catch (o) {}
                return e.hash.length > 1 && i === n
            }
        }(),
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active,
                i = this.options.collapsible,
                n = location.hash.substring(1);
            return null === e && (n && this.tabs.each(function(i, o) {
                return t(o).attr("aria-controls") === n ? (e = i, !1) : void 0
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : t()
            }
        },
        _tabKeydown: function(e) {
            var i = t(this.document[0].activeElement).closest("li"),
                n = this.tabs.index(i),
                o = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        o = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n === this.options.active ? !1 : n);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, o), e.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function(e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(e, i) {
            function n() {
                return e > o && (e = 0), 0 > e && (e = o), e
            }
            for (var o = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
        },
        _setOption: function(t, e) {
            return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this,
                i = this.tabs,
                n = this.anchors,
                o = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = t(), this.anchors.each(function(i, n) {
                var o, s, a, r = t(n).uniqueId().attr("id"),
                    l = t(n).closest("li"),
                    c = l.attr("aria-controls");
                e._isLocal(n) ? (o = n.hash, a = o.substring(1), s = e.element.find(e._sanitizeSelector(o))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, o = "#" + a, s = e.element.find(o), s.length || (s = e._createPanel(a), s.insertAfter(e.panels[i - 1] || e.tablist)), s.attr("aria-live", "polite")), s.length && (e.panels = e.panels.add(s)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }), s.attr("aria-labelledby", r)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(o.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(e) {
            t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
            for (var i, n = 0; i = this.tabs[n]; n++) e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = e
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, n = this.element.parent();
            "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                n = this.active,
                o = t(e.currentTarget),
                s = o.closest("li"),
                a = s[0] === n[0],
                r = a && i.collapsible,
                l = r ? t() : this._getPanelForTab(s),
                c = n.length ? this._getPanelForTab(n) : t(),
                d = {
                    oldTab: n,
                    oldPanel: c,
                    newTab: r ? t() : s,
                    newPanel: l
                };
            e.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, d) === !1 || (i.active = r ? !1 : this.tabs.index(s), this.active = a ? t() : s, this.xhr && this.xhr.abort(), c.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(s), e), this._toggle(e, d))
        },
        _toggle: function(e, i) {
            function n() {
                s.running = !1, s._trigger("activate", e, i)
            }

            function o() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && s.options.show ? s._show(a, s.options.show, n) : (a.show(), n())
            }
            var s = this,
                a = i.newPanel,
                r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), o()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i, n = this._findActive(e);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return e === !1 ? t() : this.tabs.eq(e)
        },
        _getIndex: function(t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(e) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                return t !== e ? t : null
            }) : t.map(this.tabs, function(t, i) {
                return i !== e ? i : null
            })), this._setupDisabled(i))
        },
        disable: function(e) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === e) i = !0;
                else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setupDisabled(i)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var n = this,
                o = this.tabs.eq(e),
                s = o.find(".ui-tabs-anchor"),
                a = this._getPanelForTab(o),
                r = {
                    tab: o,
                    panel: a
                };
            this._isLocal(s[0]) || (this.xhr = t.ajax(this._ajaxSettings(s, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.success(function(t) {
                setTimeout(function() {
                    a.html(t), n._trigger("load", i, r)
                }, 1)
            }).complete(function(t, e) {
                setTimeout(function() {
                    "abort" === e && n.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(e, i, n) {
            var o = this;
            return {
                url: e.attr("href"),
                beforeSend: function(e, s) {
                    return o._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: s
                    }, n))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    })
}), jQuery.effects || function(t, e) {
        var i = t.uiBackCompat !== !1,
            n = "ui-effects-";
        t.effects = {
                effect: {}
            },
            function(e, i) {
                function n(t, e, i) {
                    var n = h[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t)
                }

                function o(t) {
                    var n = d(),
                        o = n._rgba = [];
                    return t = t.toLowerCase(), g(c, function(e, s) {
                        var a, r = s.re.exec(t),
                            l = r && s.parse(r),
                            c = s.space || "rgba";
                        return l ? (a = n[c](l), n[u[c].cache] = a[u[c].cache], o = n._rgba = a._rgba, !1) : i
                    }), o.length ? ("0,0,0,0" === o.join() && e.extend(o, a.transparent), n) : a[t]
                }

                function s(t, e, i) {
                    return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
                }
                var a, r = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
                    l = /^([\-+])=\s*(\d+\.?\d*)/,
                    c = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    d = e.Color = function(t, i, n, o) {
                        return new e.Color.fn.parse(t, i, n, o)
                    },
                    u = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    h = {
                        "byte": {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    f = d.support = {},
                    p = e("<p>")[0],
                    g = e.each;
                p.style.cssText = "background-color:rgba(1,1,1,.5)", f.rgba = p.style.backgroundColor.indexOf("rgba") > -1, g(u, function(t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), d.fn = e.extend(d.prototype, {
                    parse: function(s, r, l, c) {
                        if (s === i) return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = e(s).css(r), r = i);
                        var h = this,
                            f = e.type(s),
                            p = this._rgba = [];
                        return r !== i && (s = [s, r, l, c], f = "array"), "string" === f ? this.parse(o(s) || a._default) : "array" === f ? (g(u.rgba.props, function(t, e) {
                            p[e.idx] = n(s[e.idx], e)
                        }), this) : "object" === f ? (s instanceof d ? g(u, function(t, e) {
                            s[e.cache] && (h[e.cache] = s[e.cache].slice())
                        }) : g(u, function(e, i) {
                            var o = i.cache;
                            g(i.props, function(t, e) {
                                if (!h[o] && i.to) {
                                    if ("alpha" === t || null == s[t]) return;
                                    h[o] = i.to(h._rgba)
                                }
                                h[o][e.idx] = n(s[t], e, !0)
                            }), h[o] && 0 > t.inArray(null, h[o].slice(0, 3)) && (h[o][3] = 1, i.from && (h._rgba = i.from(h[o])))
                        }), this) : i
                    },
                    is: function(t) {
                        var e = d(t),
                            n = !0,
                            o = this;
                        return g(u, function(t, s) {
                            var a, r = e[s.cache];
                            return r && (a = o[s.cache] || s.to && s.to(o._rgba) || [], g(s.props, function(t, e) {
                                return null != r[e.idx] ? n = r[e.idx] === a[e.idx] : i
                            })), n
                        }), n
                    },
                    _space: function() {
                        var t = [],
                            e = this;
                        return g(u, function(i, n) {
                            e[n.cache] && t.push(i)
                        }), t.pop()
                    },
                    transition: function(t, e) {
                        var i = d(t),
                            o = i._space(),
                            s = u[o],
                            a = 0 === this.alpha() ? d("transparent") : this,
                            r = a[s.cache] || s.to(a._rgba),
                            l = r.slice();
                        return i = i[s.cache], g(s.props, function(t, o) {
                            var s = o.idx,
                                a = r[s],
                                c = i[s],
                                d = h[o.type] || {};
                            null !== c && (null === a ? l[s] = c : (d.mod && (c - a > d.mod / 2 ? a += d.mod : a - c > d.mod / 2 && (a -= d.mod)), l[s] = n((c - a) * e + a, o)))
                        }), this[o](l)
                    },
                    blend: function(t) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            n = i.pop(),
                            o = d(t)._rgba;
                        return d(e.map(i, function(t, e) {
                            return (1 - n) * o[e] + n * t
                        }))
                    },
                    toRgbaString: function() {
                        var t = "rgba(",
                            i = e.map(this._rgba, function(t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
                    },
                    toHslaString: function() {
                        var t = "hsla(",
                            i = e.map(this.hsla(), function(t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
                    },
                    toHexString: function(t) {
                        var i = this._rgba.slice(),
                            n = i.pop();
                        return t && i.push(~~(255 * n)), "#" + e.map(i, function(t) {
                            return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), d.fn.parse.prototype = d.fn, u.hsla.to = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, i, n = t[0] / 255,
                        o = t[1] / 255,
                        s = t[2] / 255,
                        a = t[3],
                        r = Math.max(n, o, s),
                        l = Math.min(n, o, s),
                        c = r - l,
                        d = r + l,
                        u = .5 * d;
                    return e = l === r ? 0 : n === r ? 60 * (o - s) / c + 360 : o === r ? 60 * (s - n) / c + 120 : 60 * (n - o) / c + 240, i = 0 === u || 1 === u ? u : .5 >= u ? c / d : c / (2 - d), [Math.round(e) % 360, i, u, null == a ? 1 : a]
                }, u.hsla.from = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        a = .5 >= n ? n * (1 + i) : n + i - n * i,
                        r = 2 * n - a;
                    return [Math.round(255 * s(r, a, e + 1 / 3)), Math.round(255 * s(r, a, e)), Math.round(255 * s(r, a, e - 1 / 3)), o]
                }, g(u, function(t, o) {
                    var s = o.props,
                        a = o.cache,
                        r = o.to,
                        c = o.from;
                    d.fn[t] = function(t) {
                        if (r && !this[a] && (this[a] = r(this._rgba)), t === i) return this[a].slice();
                        var o, l = e.type(t),
                            u = "array" === l || "object" === l ? t : arguments,
                            h = this[a].slice();
                        return g(s, function(t, e) {
                            var i = u["object" === l ? t : e.idx];
                            null == i && (i = h[e.idx]), h[e.idx] = n(i, e)
                        }), c ? (o = d(c(h)), o[a] = h, o) : d(h)
                    }, g(s, function(i, n) {
                        d.fn[i] || (d.fn[i] = function(o) {
                            var s, a = e.type(o),
                                r = "alpha" === i ? this._hsla ? "hsla" : "rgba" : t,
                                c = this[r](),
                                d = c[n.idx];
                            return "undefined" === a ? d : ("function" === a && (o = o.call(this, d), a = e.type(o)), null == o && n.empty ? this : ("string" === a && (s = l.exec(o), s && (o = d + parseFloat(s[2]) * ("+" === s[1] ? 1 : -1))), c[n.idx] = o, this[r](c)))
                        })
                    })
                }), g(r, function(t, i) {
                    e.cssHooks[i] = {
                        set: function(t, n) {
                            var s, a, r = "";
                            if ("string" !== e.type(n) || (s = o(n))) {
                                if (n = d(s || n), !f.rgba && 1 !== n._rgba[3]) {
                                    for (a = "backgroundColor" === i ? t.parentNode : t;
                                        ("" === r || "transparent" === r) && a && a.style;) try {
                                        r = e.css(a, "backgroundColor"), a = a.parentNode
                                    } catch (l) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                t.style[i] = n
                            } catch (c) {}
                        }
                    }, e.fx.step[i] = function(t) {
                        t.colorInit || (t.start = d(t.elem, i), t.end = d(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                    }
                }), e.cssHooks.borderColor = {
                    expand: function(t) {
                        var e = {};
                        return g(["Top", "Right", "Bottom", "Left"], function(i, n) {
                            e["border" + n + "Color"] = t
                        }), e
                    }
                }, a = e.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(jQuery),
            function() {
                function i() {
                    var e, i, n = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                        o = {};
                    if (n && n.length && n[0] && n[n[0]])
                        for (i = n.length; i--;) e = n[i], "string" == typeof n[e] && (o[t.camelCase(e)] = n[e]);
                    else
                        for (e in n) "string" == typeof n[e] && (o[e] = n[e]);
                    return o
                }

                function n(e, i) {
                    var n, o, a = {};
                    for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (a[n] = o));
                    return a
                }
                var o = ["add", "remove", "toggle"],
                    s = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                    t.fx.step[i] = function(t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                    }
                }), t.effects.animateClass = function(e, s, a, r) {
                    var l = t.speed(s, a, r);
                    return this.queue(function() {
                        var s, a = t(this),
                            r = a.attr("class") || "",
                            c = l.children ? a.find("*").andSelf() : a;
                        c = c.map(function() {
                            var e = t(this);
                            return {
                                el: e,
                                start: i.call(this)
                            }
                        }), s = function() {
                            t.each(o, function(t, i) {
                                e[i] && a[i + "Class"](e[i])
                            })
                        }, s(), c = c.map(function() {
                            return this.end = i.call(this.el[0]), this.diff = n(this.start, this.end), this
                        }), a.attr("class", r), c = c.map(function() {
                            var e = this,
                                i = t.Deferred(),
                                n = jQuery.extend({}, l, {
                                    queue: !1,
                                    complete: function() {
                                        i.resolve(e)
                                    }
                                });
                            return this.el.animate(this.diff, n), i.promise()
                        }), t.when.apply(t, c.get()).done(function() {
                            s(), t.each(arguments, function() {
                                var e = this.el;
                                t.each(this.diff, function(t) {
                                    e.css(t, "")
                                })
                            }), l.complete.call(a[0])
                        })
                    })
                }, t.fn.extend({
                    _addClass: t.fn.addClass,
                    addClass: function(e, i, n, o) {
                        return i ? t.effects.animateClass.call(this, {
                            add: e
                        }, i, n, o) : this._addClass(e)
                    },
                    _removeClass: t.fn.removeClass,
                    removeClass: function(e, i, n, o) {
                        return i ? t.effects.animateClass.call(this, {
                            remove: e
                        }, i, n, o) : this._removeClass(e)
                    },
                    _toggleClass: t.fn.toggleClass,
                    toggleClass: function(i, n, o, s, a) {
                        return "boolean" == typeof n || n === e ? o ? t.effects.animateClass.call(this, n ? {
                            add: i
                        } : {
                            remove: i
                        }, o, s, a) : this._toggleClass(i, n) : t.effects.animateClass.call(this, {
                            toggle: i
                        }, n, o, s)
                    },
                    switchClass: function(e, i, n, o, s) {
                        return t.effects.animateClass.call(this, {
                            add: i,
                            remove: e
                        }, n, o, s)
                    }
                })
            }(),
            function() {
                function o(e, i, n, o) {
                    return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                        effect: e
                    }, null == i && (i = {}), t.isFunction(i) && (o = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (o = n, n = i, i = {}), t.isFunction(n) && (o = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = o || i.complete, e
                }

                function s(e) {
                    return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? !1 : i && t.effects[e] ? !1 : !0
                }
                t.extend(t.effects, {
                    version: "1.9.2",
                    save: function(t, e) {
                        for (var i = 0; e.length > i; i++) null !== e[i] && t.data(n + e[i], t[0].style[e[i]])
                    },
                    restore: function(t, i) {
                        var o, s;
                        for (s = 0; i.length > s; s++) null !== i[s] && (o = t.data(n + i[s]), o === e && (o = ""), t.css(i[s], o))
                    },
                    setMode: function(t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    getBaseline: function(t, e) {
                        var i, n;
                        switch (t[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = t[0] / e.height
                        }
                        switch (t[1]) {
                            case "left":
                                n = 0;
                                break;
                            case "center":
                                n = .5;
                                break;
                            case "right":
                                n = 1;
                                break;
                            default:
                                n = t[1] / e.width
                        }
                        return {
                            x: n,
                            y: i
                        }
                    },
                    createWrapper: function(e) {
                        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                        var i = {
                                width: e.outerWidth(!0),
                                height: e.outerHeight(!0),
                                "float": e.css("float")
                            },
                            n = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            o = {
                                width: e.width(),
                                height: e.height()
                            },
                            s = document.activeElement;
                        try {
                            s.id
                        } catch (a) {
                            s = document.body
                        }
                        return e.wrap(n), (e[0] === s || t.contains(e[0], s)) && t(s).focus(), n = e.parent(), "static" === e.css("position") ? (n.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(i, {
                            position: e.css("position"),
                            zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], function(t, n) {
                            i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                        }), e.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), e.css(o), n.css(i).show()
                    },
                    removeWrapper: function(e) {
                        var i = document.activeElement;
                        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                    },
                    setTransition: function(e, i, n, o) {
                        return o = o || {}, t.each(i, function(t, i) {
                            var s = e.cssUnit(i);
                            s[0] > 0 && (o[i] = s[0] * n + s[1])
                        }), o
                    }
                }), t.fn.extend({
                    effect: function() {
                        function e(e) {
                            function i() {
                                t.isFunction(s) && s.call(o[0]), t.isFunction(e) && e()
                            }
                            var o = t(this),
                                s = n.complete,
                                a = n.mode;
                            (o.is(":hidden") ? "hide" === a : "show" === a) ? i(): r.call(o[0], n, i)
                        }
                        var n = o.apply(this, arguments),
                            s = n.mode,
                            a = n.queue,
                            r = t.effects.effect[n.effect],
                            l = !r && i && t.effects[n.effect];
                        return t.fx.off || !r && !l ? s ? this[s](n.duration, n.complete) : this.each(function() {
                            n.complete && n.complete.call(this)
                        }) : r ? a === !1 ? this.each(e) : this.queue(a || "fx", e) : l.call(this, {
                            options: n,
                            duration: n.duration,
                            callback: n.complete,
                            mode: n.mode
                        })
                    },
                    _show: t.fn.show,
                    show: function(t) {
                        if (s(t)) return this._show.apply(this, arguments);
                        var e = o.apply(this, arguments);
                        return e.mode = "show", this.effect.call(this, e)
                    },
                    _hide: t.fn.hide,
                    hide: function(t) {
                        if (s(t)) return this._hide.apply(this, arguments);
                        var e = o.apply(this, arguments);
                        return e.mode = "hide", this.effect.call(this, e)
                    },
                    __toggle: t.fn.toggle,
                    toggle: function(e) {
                        if (s(e) || "boolean" == typeof e || t.isFunction(e)) return this.__toggle.apply(this, arguments);
                        var i = o.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    },
                    cssUnit: function(e) {
                        var i = this.css(e),
                            n = [];
                        return t.each(["em", "px", "%", "pt"], function(t, e) {
                            i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                        }), n
                    }
                })
            }(),
            function() {
                var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                    e[i] = function(e) {
                        return Math.pow(e, t + 2)
                    }
                }), t.extend(e, {
                    Sine: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function(t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function(t) {
                        for (var e, i = 4;
                            ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), t.each(e, function(e, i) {
                    t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                        return 1 - i(1 - t)
                    }, t.easing["easeInOut" + e] = function(t) {
                        return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                    }
                })
            }()
    }(jQuery),
    function(t) {
        t.fn.fullpage = function(e) {
            function i(t) {
                t.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'), "#fff" != e.controlArrowColor && (t.find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " + e.controlArrowColor), t.find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + e.controlArrowColor + " transparent transparent")), e.loopHorizontal || t.find(".fp-controlArrow.fp-prev").hide()
            }

            function n() {
                t("body").append('<div id="fp-nav"><ul></ul></div>'), Z = t("#fp-nav"), Z.css("color", e.navigationColor), Z.addClass(e.navigationPosition);
                for (var i = 0; i < t(".fp-section").length; i++) {
                    var n = "";
                    e.anchors.length && (n = e.anchors[i]);
                    var n = '<li><a href="#' + n + '"><span></span></a>',
                        o = e.navigationTooltips[i];
                    void 0 !== o && "" != o && (n += '<div class="fp-tooltip ' + e.navigationPosition + '">' + o + "</div>"), n += "</li>", Z.find("ul").append(n)
                }
            }

            function o() {
                t(".fp-section").each(function() {
                    var e = t(this).find(".fp-slide");
                    e.length ? e.each(function() {
                        A(t(this))
                    }) : A(t(this))
                }), t.isFunction(e.afterRender) && e.afterRender.call(this)
            }

            function s() {
                var i;
                if (!e.autoScrolling || e.scrollBar) {
                    var n = t(window).scrollTop(),
                        o = 0,
                        s = Math.abs(n - t(".fp-section").first().offset().top);
                    t(".fp-section").each(function(e) {
                        var i = Math.abs(n - t(this).offset().top);
                        s > i && (o = e, s = i)
                    }), i = t(".fp-section").eq(o)
                }
                if ((!e.autoScrolling || e.scrollBar) && !i.hasClass("active")) {
                    ue = !0;
                    var a = t(".fp-section.active"),
                        r = a.index(".fp-section") + 1,
                        l = E(i),
                        c = i.data("anchor"),
                        d = i.index(".fp-section") + 1,
                        u = i.find(".fp-slide.active");
                    if (u.length) var h = u.data("anchor"),
                        f = u.index();
                    i.addClass("active").siblings().removeClass("active"), oe || (t.isFunction(e.onLeave) && e.onLeave.call(a, r, d, l), t.isFunction(e.afterLoad) && e.afterLoad.call(i, c, d)), k(c, 0), e.anchors.length && !oe && (G = c, B(f, h, c, d)), clearTimeout(ce), ce = setTimeout(function() {
                        ue = !1
                    }, 100)
                }
                e.scrollBar && (clearTimeout(de), de = setTimeout(function() {
                    oe || (t(".fp-section.active").is(i) && (se = !0), p(i), se = !1)
                }, 1e3))
            }

            function a(t) {
                return t.find(".fp-slides").length ? t.find(".fp-slide.active").find(".fp-scrollable") : t.find(".fp-scrollable")
            }

            function r(e, i) {
                if (re[e]) {
                    var n, o;
                    if ("down" == e ? (n = "bottom", o = t.fn.fullpage.moveSectionDown) : (n = "top", o = t.fn.fullpage.moveSectionUp), 0 < i.length) {
                        if (!(n = "top" === n ? !i.scrollTop() : "bottom" === n ? i.scrollTop() + 1 + i.innerHeight() >= i[0].scrollHeight : void 0)) return !0;
                        o()
                    } else o()
                }
            }

            function l(i) {
                var n = i.originalEvent;
                if (!c(i.target)) {
                    e.autoScrolling && i.preventDefault(), i = t(".fp-section.active");
                    var o = a(i);
                    oe || J || (n = z(n), pe = n.y, ge = n.x, i.find(".fp-slides").length && Math.abs(fe - ge) > Math.abs(he - pe) ? Math.abs(fe - ge) > t(window).width() / 100 * e.touchSensitivity && (fe > ge ? re.right && t.fn.fullpage.moveSlideRight() : re.left && t.fn.fullpage.moveSlideLeft()) : e.autoScrolling && Math.abs(he - pe) > t(window).height() / 100 * e.touchSensitivity && (he > pe ? r("down", o) : pe > he && r("up", o)))
                }
            }

            function c(i, n) {
                n = n || 0;
                var o = t(i).parent();
                return n < e.normalScrollElementTouchThreshold && o.is(e.normalScrollElements) ? !0 : n == e.normalScrollElementTouchThreshold ? !1 : c(o, ++n)
            }

            function d(i) {
                i = i.originalEvent, e.scrollBar && t("html,body").stop(), i = z(i), he = i.y, fe = i.x
            }

            function u(i) {
                if (e.autoScrolling) {
                    i = window.event || i;
                    var n = Math.max(-1, Math.min(1, i.wheelDelta || -i.deltaY || -i.detail));
                    return e.scrollBar && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), i = t(".fp-section.active"), i = a(i), oe || (0 > n ? r("down", i) : r("up", i)), !1
                }
                e.scrollBar && t("html,body").stop()
            }

            function h(i) {
                var n = t(".fp-section.active").find(".fp-slides");
                if (n.length && !J) {
                    var o = n.find(".fp-slide.active"),
                        s = null,
                        s = "prev" === i ? o.prev(".fp-slide") : o.next(".fp-slide");
                    if (!s.length) {
                        if (!e.loopHorizontal) return;
                        s = o.siblings("prev" === i ? ":last" : ":first")
                    }
                    J = !0, y(n, s)
                }
            }

            function f() {
                t(".fp-slide.active").each(function() {
                    W(t(this))
                })
            }

            function p(i, n, o) {
                var s = i.position();
                if ("undefined" != typeof s && (n = {
                        element: i,
                        callback: n,
                        isMovementUp: o,
                        dest: s,
                        dtop: s.top,
                        yMovement: E(i),
                        anchorLink: i.data("anchor"),
                        sectionIndex: i.index(".fp-section"),
                        activeSlide: i.find(".fp-slide.active"),
                        activeSection: t(".fp-section.active"),
                        leavingSection: t(".fp-section.active").index(".fp-section") + 1,
                        localIsResizing: se
                    }, !(n.activeSection.is(i) && !se || e.scrollBar && t(window).scrollTop() === n.dtop))) {
                    if (n.activeSlide.length) var a = n.activeSlide.data("anchor"),
                        r = n.activeSlide.index();
                    e.autoScrolling && e.continuousVertical && "undefined" != typeof n.isMovementUp && (!n.isMovementUp && "up" == n.yMovement || n.isMovementUp && "down" == n.yMovement) && (n.isMovementUp ? t(".fp-section.active").before(n.activeSection.nextAll(".fp-section")) : t(".fp-section.active").after(n.activeSection.prevAll(".fp-section").get().reverse()), V(t(".fp-section.active").position().top), f(), n.wrapAroundElements = n.activeSection, n.dest = n.element.position(), n.dtop = n.dest.top, n.yMovement = E(n.element)), i.addClass("active").siblings().removeClass("active"), oe = !0, B(r, a, n.anchorLink, n.sectionIndex), t.isFunction(e.onLeave) && !n.localIsResizing && e.onLeave.call(n.activeSection, n.leavingSection, n.sectionIndex + 1, n.yMovement), g(n), G = n.anchorLink, e.autoScrolling && k(n.anchorLink, n.sectionIndex)
                }
            }

            function g(i) {
                if (e.css3 && e.autoScrolling && !e.scrollBar) M("translate3d(0px, -" + i.dtop + "px, 0px)", !0), setTimeout(function() {
                    b(i)
                }, e.scrollingSpeed);
                else {
                    var n = v(i);
                    t(n.element).animate(n.options, e.scrollingSpeed, e.easing).promise().done(function() {
                        b(i)
                    })
                }
            }

            function v(t) {
                var i = {};
                return e.autoScrolling && !e.scrollBar ? (i.options = {
                    top: -t.dtop
                }, i.element = "." + ae) : (i.options = {
                    scrollTop: t.dtop
                }, i.element = "html, body"), i
            }

            function m(e) {
                e.wrapAroundElements && e.wrapAroundElements.length && (e.isMovementUp ? t(".fp-section:first").before(e.wrapAroundElements) : t(".fp-section:last").after(e.wrapAroundElements), V(t(".fp-section.active").position().top), f())
            }

            function b(i) {
                m(i), t.isFunction(e.afterLoad) && !i.localIsResizing && e.afterLoad.call(i.element, i.anchorLink, i.sectionIndex + 1), setTimeout(function() {
                    oe = !1, t.isFunction(i.callback) && i.callback.call(this)
                }, 600)
            }

            function w() {
                if (!ue) {
                    var t = window.location.hash.replace("#", "").split("/"),
                        e = t[0],
                        t = t[1];
                    if (e.length) {
                        var i = "undefined" == typeof G,
                            n = "undefined" == typeof G && "undefined" == typeof t && !J;
                        (e && e !== G && !i || n || !J && X != t) && P(e, t)
                    }
                }
            }

            function y(i, n) {
                var o = n.position(),
                    s = i.find(".fp-slidesContainer").parent(),
                    a = n.index(),
                    r = i.closest(".fp-section"),
                    l = r.index(".fp-section"),
                    c = r.data("anchor"),
                    d = r.find(".fp-slidesNav"),
                    u = n.data("anchor"),
                    h = se;
                if (e.onSlideLeave) {
                    var f, p = r.find(".fp-slide.active"),
                        g = p.index();
                    f = g == a ? "none" : g > a ? "left" : "right", h || "none" === f || t.isFunction(e.onSlideLeave) && e.onSlideLeave.call(p, c, l + 1, g, f)
                }
                n.addClass("active").siblings().removeClass("active"), "undefined" == typeof u && (u = a), !e.loopHorizontal && e.controlArrows && (r.find(".fp-controlArrow.fp-prev").toggle(0 != a), r.find(".fp-controlArrow.fp-next").toggle(!n.is(":last-child"))), r.hasClass("active") && B(a, u, c, l);
                var v = function() {
                    h || t.isFunction(e.afterSlideLoad) && e.afterSlideLoad.call(n, c, l + 1, u, a), J = !1
                };
                e.css3 ? (o = "translate3d(-" + o.left + "px, 0px, 0px)", _(i.find(".fp-slidesContainer"), 0 < e.scrollingSpeed).css(U(o)), setTimeout(function() {
                    v()
                }, e.scrollingSpeed, e.easing)) : s.animate({
                    scrollLeft: o.left
                }, e.scrollingSpeed, e.easing, function() {
                    v()
                }), d.find(".active").removeClass("active"), d.find("li").eq(a).find("a").addClass("active")
            }

            function x() {
                if (C(), te) {
                    if ("text" !== t(document.activeElement).attr("type")) {
                        var e = t(window).height();
                        Math.abs(e - me) > 20 * Math.max(me, e) / 100 && (t.fn.fullpage.reBuild(!0), me = e)
                    }
                } else clearTimeout(ve), ve = setTimeout(function() {
                    t.fn.fullpage.reBuild(!0)
                }, 500)
            }

            function C() {
                if (e.responsive) {
                    var i = ie.hasClass("fp-responsive");
                    t(window).width() < e.responsive ? i || (t.fn.fullpage.setAutoScrolling(!1, "internal"), t("#fp-nav").hide(), ie.addClass("fp-responsive")) : i && (t.fn.fullpage.setAutoScrolling(le.autoScrolling, "internal"), t("#fp-nav").show(), ie.removeClass("fp-responsive"))
                }
            }

            function _(t) {
                var i = "all " + e.scrollingSpeed + "ms " + e.easingcss3;
                return t.removeClass("fp-notransition"), t.css({
                    "-webkit-transition": i,
                    transition: i
                })
            }

            function S(t) {
                return t.addClass("fp-notransition")
            }

            function T(e, i) {
                if (825 > e || 900 > i) {
                    var n = Math.min(100 * e / 825, 100 * i / 900).toFixed(2);
                    t("body").css("font-size", n + "%")
                } else t("body").css("font-size", "100%")
            }

            function k(i, n) {
                e.menu && (t(e.menu).find(".active").removeClass("active"), t(e.menu).find('[data-menuanchor="' + i + '"]').addClass("active")), e.navigation && (t("#fp-nav").find(".active").removeClass("active"), i ? t("#fp-nav").find('a[href="#' + i + '"]').addClass("active") : t("#fp-nav").find("li").eq(n).find("a").addClass("active"))
            }

            function E(e) {
                var i = t(".fp-section.active").index(".fp-section");
                return e = e.index(".fp-section"), i == e ? "none" : i > e ? "up" : "down"
            }

            function A(t) {
                t.css("overflow", "hidden");
                var i, n = t.closest(".fp-section"),
                    o = t.find(".fp-scrollable");
                o.length ? i = o.get(0).scrollHeight : (i = t.get(0).scrollHeight, e.verticalCentered && (i = t.find(".fp-tableCell").get(0).scrollHeight)), n = ne - parseInt(n.css("padding-bottom")) - parseInt(n.css("padding-top")), i > n ? o.length ? o.css("height", n + "px").parent().css("height", n + "px") : (e.verticalCentered ? t.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />') : t.wrapInner('<div class="fp-scrollable" />'), t.find(".fp-scrollable").slimScroll({
                    allowPageScroll: !0,
                    height: n + "px",
                    size: "10px",
                    alwaysVisible: !0
                })) : H(t), t.css("overflow", "")
            }

            function H(t) {
                t.find(".fp-scrollable").children().first().unwrap().unwrap(), t.find(".slimScrollBar").remove(), t.find(".slimScrollRail").remove()
            }

            function N(t) {
                t.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + I(t) + 'px;" />')
            }

            function I(t) {
                var i = ne;
                return (e.paddingTop || e.paddingBottom) && (i = t, i.hasClass("fp-section") || (i = t.closest(".fp-section")), t = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom")), i = ne - t), i
            }

            function M(t, e) {
                e ? _(ie) : S(ie), ie.css(U(t)), setTimeout(function() {
                    ie.removeClass("fp-notransition")
                }, 10)
            }

            function P(e, i) {
                var n;
                "undefined" == typeof i && (i = 0), n = isNaN(e) ? t('[data-anchor="' + e + '"]') : t(".fp-section").eq(e - 1), e === G || n.hasClass("active") ? L(n, i) : p(n, function() {
                    L(n, i)
                })
            }

            function L(t, e) {
                if ("undefined" != typeof e) {
                    var i = t.find(".fp-slides"),
                        n = i.find('[data-anchor="' + e + '"]');
                    n.length || (n = i.find(".fp-slide").eq(e)), n.length && y(i, n)
                }
            }

            function D(t, i) {
                t.append('<div class="fp-slidesNav"><ul></ul></div>');
                var n = t.find(".fp-slidesNav");
                n.addClass(e.slidesNavPosition);
                for (var o = 0; i > o; o++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
                n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass("active")
            }

            function B(t, i, n, o) {
                var s = "";
                e.anchors.length ? (t ? ("undefined" != typeof n && (s = n), "undefined" == typeof i && (i = t), X = i, F(s + "/" + i)) : ("undefined" != typeof t && (X = i), F(n)), R(location.hash)) : R("undefined" != typeof t ? o + "-" + t : String(o))
            }

            function F(t) {
                if (e.recordHistory) location.hash = t;
                else if (te || ee) history.replaceState(void 0, void 0, "#" + t);
                else {
                    var i = window.location.href.split("#")[0];
                    window.location.replace(i + "#" + t)
                }
            }

            function R(e) {
                e = e.replace("/", "-").replace("#", ""), t("body")[0].className = t("body")[0].className.replace(/\b\s?fp-viewing-[^\s]+\b/g, ""), t("body").addClass("fp-viewing-" + e)
            }

            function j() {
                var t, e = document.createElement("p"),
                    i = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                document.body.insertBefore(e, null);
                for (var n in i) void 0 !== e.style[n] && (e.style[n] = "translate3d(1px,1px,1px)", t = window.getComputedStyle(e).getPropertyValue(i[n]));
                return document.body.removeChild(e), void 0 !== t && 0 < t.length && "none" !== t
            }

            function $() {
                if (te || ee) {
                    var e = q();
                    t(document).off("touchstart " + e.down).on("touchstart " + e.down, d), t(document).off("touchmove " + e.move).on("touchmove " + e.move, l)
                }
            }

            function O() {
                if (te || ee) {
                    var e = q();
                    t(document).off("touchstart " + e.down), t(document).off("touchmove " + e.move)
                }
            }

            function q() {
                return window.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                }
            }

            function z(t) {
                var e = [];
                return e.y = "undefined" != typeof t.pageY && (t.pageY || t.pageX) ? t.pageY : t.touches[0].pageY, e.x = "undefined" != typeof t.pageX && (t.pageY || t.pageX) ? t.pageX : t.touches[0].pageX, e
            }

            function W(e) {
                t.fn.fullpage.setScrollingSpeed(0, "internal"), y(e.closest(".fp-slides"), e), t.fn.fullpage.setScrollingSpeed(le.scrollingSpeed, "internal")
            }

            function V(t) {
                e.scrollBar ? ie.scrollTop(t) : e.css3 ? M("translate3d(0px, -" + t + "px, 0px)", !1) : ie.css("top", -t)
            }

            function U(t) {
                return {
                    "-webkit-transform": t,
                    "-moz-transform": t,
                    "-ms-transform": t,
                    transform: t
                }
            }

            function Y() {
                V(0), t("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(), t(".fp-section").css({
                    height: "",
                    "background-color": "",
                    padding: ""
                }), t(".fp-slide").css({
                    width: ""
                }), ie.css({
                    height: "",
                    position: "",
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), t(".fp-section, .fp-slide").each(function() {
                    H(t(this)), t(this).removeClass("fp-table active")
                }), S(ie), S(ie.find(".fp-easing")), ie.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function() {
                    t(this).replaceWith(this.childNodes)
                }), t("html, body").scrollTop(0)
            }

            function Q(t, i, n) {
                e[t] = i, "internal" !== n && (le[t] = i)
            }

            function K(t, e) {
                console && console[t] && console[t]("fullPage: " + e)
            }
            e = t.extend({
                    menu: !1,
                    anchors: [],
                    navigation: !1,
                    navigationPosition: "right",
                    navigationColor: "#000",
                    navigationTooltips: [],
                    slidesNavigation: !1,
                    slidesNavPosition: "bottom",
                    scrollBar: !1,
                    css3: !0,
                    scrollingSpeed: 700,
                    autoScrolling: !0,
                    easing: "easeInQuart",
                    easingcss3: "ease",
                    loopBottom: !1,
                    loopTop: !1,
                    loopHorizontal: !0,
                    continuousVertical: !1,
                    normalScrollElements: null,
                    scrollOverflow: !1,
                    touchSensitivity: 5,
                    normalScrollElementTouchThreshold: 5,
                    keyboardScrolling: !0,
                    animateAnchor: !0,
                    recordHistory: !0,
                    controlArrows: !0,
                    controlArrowColor: "#fff",
                    verticalCentered: !0,
                    resize: !0,
                    sectionsColor: [],
                    paddingTop: 0,
                    paddingBottom: 0,
                    fixedElements: null,
                    responsive: 0,
                    sectionSelector: ".section",
                    slideSelector: ".slide",
                    afterLoad: null,
                    onLeave: null,
                    afterRender: null,
                    afterResize: null,
                    afterReBuild: null,
                    afterSlideLoad: null,
                    onSlideLeave: null
                }, e),
                function() {
                    e.continuousVertical && (e.loopTop || e.loopBottom) && (e.continuousVertical = !1, K("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), e.continuousVertical && e.scrollBar && (e.continuousVertical = !1, K("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), t.each(e.anchors, function(e, i) {
                        (t("#" + i).length || t('[name="' + i + '"]').length) && K("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
                    })
                }(), t.extend(t.easing, {
                    easeInQuart: function(t, e, i, n, o) {
                        return n * (e /= o) * e * e * e + i
                    }
                }), t.fn.fullpage.setAutoScrolling = function(i, n) {
                    Q("autoScrolling", i, n);
                    var o = t(".fp-section.active");
                    e.autoScrolling && !e.scrollBar ? (t("html, body").css({
                        overflow: "hidden",
                        height: "100%"
                    }), t.fn.fullpage.setRecordHistory(e.recordHistory, "internal"), ie.css({
                        "-ms-touch-action": "none",
                        "touch-action": "none"
                    }), o.length && V(o.position().top)) : (t("html, body").css({
                        overflow: "visible",
                        height: "initial"
                    }), t.fn.fullpage.setRecordHistory(!1, "internal"), ie.css({
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), V(0), t("html, body").scrollTop(o.position().top))
                }, t.fn.fullpage.setRecordHistory = function(t, e) {
                    Q("recordHistory", t, e)
                }, t.fn.fullpage.setScrollingSpeed = function(t, e) {
                    Q("scrollingSpeed", t, e)
                }, t.fn.fullpage.setMouseWheelScrolling = function(t) {
                    t ? document.addEventListener ? (document.addEventListener("mousewheel", u, !1), document.addEventListener("wheel", u, !1)) : document.attachEvent("onmousewheel", u) : document.addEventListener ? (document.removeEventListener("mousewheel", u, !1), document.removeEventListener("wheel", u, !1)) : document.detachEvent("onmousewheel", u)
                }, t.fn.fullpage.setAllowScrolling = function(e, i) {
                    "undefined" != typeof i ? (i = i.replace(" ", "").split(","), t.each(i, function(i, n) {
                        switch (n) {
                            case "up":
                                re.up = e;
                                break;
                            case "down":
                                re.down = e;
                                break;
                            case "left":
                                re.left = e;
                                break;
                            case "right":
                                re.right = e;
                                break;
                            case "all":
                                t.fn.fullpage.setAllowScrolling(e)
                        }
                    })) : e ? (t.fn.fullpage.setMouseWheelScrolling(!0), $()) : (t.fn.fullpage.setMouseWheelScrolling(!1), O())
                }, t.fn.fullpage.setKeyboardScrolling = function(t) {
                    e.keyboardScrolling = t
                }, t.fn.fullpage.moveSectionUp = function() {
                    var i = t(".fp-section.active").prev(".fp-section");
                    i.length || !e.loopTop && !e.continuousVertical || (i = t(".fp-section").last()), i.length && p(i, null, !0)
                }, t.fn.fullpage.moveSectionDown = function() {
                    var i = t(".fp-section.active").next(".fp-section");
                    i.length || !e.loopBottom && !e.continuousVertical || (i = t(".fp-section").first()), i.length && p(i, null, !1)
                }, t.fn.fullpage.moveTo = function(e, i) {
                    var n = "",
                        n = isNaN(e) ? t('[data-anchor="' + e + '"]') : t(".fp-section").eq(e - 1);
                    "undefined" != typeof i ? P(e, i) : 0 < n.length && p(n)
                }, t.fn.fullpage.moveSlideRight = function() {
                    h("next")
                }, t.fn.fullpage.moveSlideLeft = function() {
                    h("prev")
                }, t.fn.fullpage.reBuild = function(i) {
                    se = !0;
                    var n = t(window).width();
                    ne = t(window).height(), e.resize && T(ne, n), t(".fp-section").each(function() {
                        var i = t(this).find(".fp-slides"),
                            n = t(this).find(".fp-slide");
                        e.verticalCentered && t(this).find(".fp-tableCell").css("height", I(t(this)) + "px"), t(this).css("height", ne + "px"), e.scrollOverflow && (n.length ? n.each(function() {
                            A(t(this))
                        }) : A(t(this))), n.length && y(i, i.find(".fp-slide.active"))
                    }), n = t(".fp-section.active"), n.index(".fp-section") && p(n), se = !1, t.isFunction(e.afterResize) && i && e.afterResize.call(ie), t.isFunction(e.afterReBuild) && !i && e.afterReBuild.call(ie)
                };
            var G, X, Z, J = !1,
                te = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/),
                ee = "ontouchstart" in window || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                ie = t(this),
                ne = t(window).height(),
                oe = !1,
                se = !1,
                ae = "fullpage-wrapper",
                re = {
                    up: !0,
                    down: !0,
                    left: !0,
                    right: !0
                },
                le = t.extend(!0, {}, e);
            t.fn.fullpage.setAllowScrolling(!0), e.css3 && (e.css3 = j()), t(this).length ? (ie.css({
                height: "100%",
                position: "relative"
            }), ie.addClass(ae)) : K("error", "Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();"), t(e.sectionSelector).each(function() {
                t(this).addClass("fp-section")
            }), t(e.slideSelector).each(function() {
                t(this).addClass("fp-slide")
            }), e.navigation && n(), t(".fp-section").each(function(n) {
                var o = t(this),
                    s = t(this).find(".fp-slide"),
                    a = s.length;
                if (n || 0 !== t(".fp-section.active").length || t(this).addClass("active"), t(this).css("height", ne + "px"), (e.paddingTop || e.paddingBottom) && t(this).css("padding", e.paddingTop + " 0 " + e.paddingBottom + " 0"), "undefined" != typeof e.sectionsColor[n] && t(this).css("background-color", e.sectionsColor[n]), "undefined" != typeof e.anchors[n] && t(this).attr("data-anchor", e.anchors[n]), a > 1) {
                    n = 100 * a;
                    var r = 100 / a;
                    s.wrapAll('<div class="fp-slidesContainer" />'), s.parent().wrap('<div class="fp-slides" />'), t(this).find(".fp-slidesContainer").css("width", n + "%"), e.controlArrows && i(t(this)), e.slidesNavigation && D(t(this), a), s.each(function() {
                        t(this).css("width", r + "%"), e.verticalCentered && N(t(this))
                    }), o = o.find(".fp-slide.active"), o.length ? W(o) : s.eq(0).addClass("active")
                } else e.verticalCentered && N(t(this))
            }).promise().done(function() {
                t.fn.fullpage.setAutoScrolling(e.autoScrolling, "internal");
                var i = t(".fp-section.active").find(".fp-slide.active");
                if (i.length && (0 !== t(".fp-section.active").index(".fp-section") || 0 === t(".fp-section.active").index(".fp-section") && 0 !== i.index()) && W(i), e.fixedElements && e.css3 && t(e.fixedElements).appendTo("body"), e.navigation && (Z.css("margin-top", "-" + Z.height() / 2 + "px"), Z.find("li").eq(t(".fp-section.active").index(".fp-section")).find("a").addClass("active")), e.menu && e.css3 && t(e.menu).closest(".fullpage-wrapper").length && t(e.menu).appendTo("body"), e.scrollOverflow ? ("complete" === document.readyState && o(), t(window).on("load", o)) : t.isFunction(e.afterRender) && e.afterRender.call(ie), C(), i = window.location.hash.replace("#", "").split("/")[0], i.length) {
                    var n = t('[data-anchor="' + i + '"]');
                    !e.animateAnchor && n.length && (e.autoScrolling ? V(n.position().top) : (V(0), R(i), t("html, body").scrollTop(n.position().top)), k(i, null), t.isFunction(e.afterLoad) && e.afterLoad.call(n, i, n.index(".fp-section") + 1), n.addClass("active").siblings().removeClass("active"))
                }
                t(window).on("load", function() {
                    var t = window.location.hash.replace("#", "").split("/"),
                        e = t[0],
                        t = t[1];
                    e && P(e, t)
                })
            });
            var ce, de, ue = !1;
            t(window).on("scroll", s);
            var he = 0,
                fe = 0,
                pe = 0,
                ge = 0;
            t(window).on("hashchange", w), t(document).keydown(function(i) {
                if (e.keyboardScrolling && e.autoScrolling && (40 != i.which && 38 != i.which || i.preventDefault(), !oe)) switch (i.which) {
                    case 38:
                    case 33:
                        t.fn.fullpage.moveSectionUp();
                        break;
                    case 40:
                    case 34:
                        t.fn.fullpage.moveSectionDown();
                        break;
                    case 36:
                        t.fn.fullpage.moveTo(1);
                        break;
                    case 35:
                        t.fn.fullpage.moveTo(t(".fp-section").length);
                        break;
                    case 37:
                        t.fn.fullpage.moveSlideLeft();
                        break;
                    case 39:
                        t.fn.fullpage.moveSlideRight()
                }
            }), t(document).on("click touchstart", "#fp-nav a", function(e) {
                e.preventDefault(), e = t(this).parent().index(), p(t(".fp-section").eq(e))
            }), t(document).on("click touchstart", ".fp-slidesNav a", function(e) {
                e.preventDefault(), e = t(this).closest(".fp-section").find(".fp-slides");
                var i = e.find(".fp-slide").eq(t(this).closest("li").index());
                y(e, i)
            }), e.normalScrollElements && (t(document).on("mouseenter", e.normalScrollElements, function() {
                t.fn.fullpage.setMouseWheelScrolling(!1)
            }), t(document).on("mouseleave", e.normalScrollElements, function() {
                t.fn.fullpage.setMouseWheelScrolling(!0)
            })), t(".fp-section").on("click touchstart", ".fp-controlArrow", function() {
                t(this).hasClass("fp-prev") ? t.fn.fullpage.moveSlideLeft() : t.fn.fullpage.moveSlideRight()
            }), t(window).resize(x);
            var ve, me = ne;
            t.fn.fullpage.destroy = function(i) {
                t.fn.fullpage.setAutoScrolling(!1, "internal"), t.fn.fullpage.setAllowScrolling(!1), t.fn.fullpage.setKeyboardScrolling(!1), t(window).off("scroll", s).off("hashchange", w).off("resize", x), t(document).off("click", "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", e.normalScrollElements).off("mouseout", e.normalScrollElements), t(".fp-section").off("click", ".fp-controlArrow"), i && Y()
            }
        }
    }(jQuery),
    function(e) {
        jQuery.fn.extend({
            slimScroll: function(i) {
                var n = e.extend({
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "7px",
                    railBorderRadius: "7px"
                }, i);
                return this.each(function() {
                    function o(t) {
                        t = t || window.event;
                        var i = 0;
                        t.wheelDelta && (i = -t.wheelDelta / 120), t.detail && (i = t.detail / 3), e(t.target || t.srcTarget || t.srcElement).closest("." + n.wrapperClass).is(y.parent()) && s(i, !0), t.preventDefault && !w && t.preventDefault(), w || (t.returnValue = !1)
                    }

                    function s(t, e, i) {
                        w = !1;
                        var o = t,
                            s = y.outerHeight() - C.outerHeight();
                        e && (o = parseInt(C.css("top")) + t * parseInt(n.wheelStep) / 100 * C.outerHeight(), o = Math.min(Math.max(o, 0), s), o = t > 0 ? Math.ceil(o) : Math.floor(o), C.css({
                            top: o + "px"
                        })), v = parseInt(C.css("top")) / (y.outerHeight() - C.outerHeight()), o = v * (y[0].scrollHeight - y.outerHeight()), i && (o = t, t = o / y[0].scrollHeight * y.outerHeight(), t = Math.min(Math.max(t, 0), s), C.css({
                            top: t + "px"
                        })), y.scrollTop(o), y.trigger("slimscrolling", ~~o), l(), c()
                    }

                    function a() {
                        window.addEventListener ? (this.addEventListener("DOMMouseScroll", o, !1), this.addEventListener("mousewheel", o, !1)) : document.attachEvent("onmousewheel", o)
                    }

                    function r() {
                        g = Math.max(y.outerHeight() / y[0].scrollHeight * y.outerHeight(), b), C.css({
                            height: g + "px"
                        });
                        var t = g == y.outerHeight() ? "none" : "block";
                        C.css({
                            display: t
                        })
                    }

                    function l() {
                        r(), clearTimeout(f), v == ~~v ? (w = n.allowPageScroll, m != v && y.trigger("slimscroll", 0 == ~~v ? "top" : "bottom")) : w = !1, m = v, g >= y.outerHeight() ? w = !0 : (C.stop(!0, !0).fadeIn("fast"), n.railVisible && _.stop(!0, !0).fadeIn("fast"))
                    }

                    function c() {
                        n.alwaysVisible || (f = setTimeout(function() {
                            n.disableFadeOut && d || u || h || (C.fadeOut("slow"), _.fadeOut("slow"))
                        }, 1e3))
                    }
                    var d, u, h, f, p, g, v, m, b = 30,
                        w = !1,
                        y = e(this);
                    if (y.parent().hasClass(n.wrapperClass)) {
                        var x = y.scrollTop(),
                            C = y.parent().find("." + n.barClass),
                            _ = y.parent().find("." + n.railClass);
                        if (r(), e.isPlainObject(i)) {
                            if ("height" in i && "auto" == i.height) {
                                y.parent().css("height", "auto"), y.css("height", "auto");
                                var S = y.parent().parent().height();
                                y.parent().css("height", S), y.css("height", S)
                            }
                            if ("scrollTo" in i) x = parseInt(n.scrollTo);
                            else if ("scrollBy" in i) x += parseInt(n.scrollBy);
                            else if ("destroy" in i) return C.remove(), _.remove(), void y.unwrap();
                            s(x, !1, !0)
                        }
                    } else {
                        n.height = "auto" == i.height ? y.parent().height() : i.height, x = e("<div></div>").addClass(n.wrapperClass).css({
                            position: "relative",
                            overflow: "hidden",
                            width: n.width,
                            height: n.height
                        }), y.css({
                            overflow: "hidden",
                            width: n.width,
                            height: n.height
                        });
                        var _ = e("<div></div>").addClass(n.railClass).css({
                                width: n.size,
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                display: n.alwaysVisible && n.railVisible ? "block" : "none",
                                "border-radius": n.railBorderRadius,
                                background: n.railColor,
                                opacity: n.railOpacity,
                                zIndex: 90
                            }),
                            C = e("<div></div>").addClass(n.barClass).css({
                                background: n.color,
                                width: n.size,
                                position: "absolute",
                                top: 0,
                                opacity: n.opacity,
                                display: n.alwaysVisible ? "block" : "none",
                                "border-radius": n.borderRadius,
                                BorderRadius: n.borderRadius,
                                MozBorderRadius: n.borderRadius,
                                WebkitBorderRadius: n.borderRadius,
                                zIndex: 99
                            }),
                            S = "right" == n.position ? {
                                right: n.distance
                            } : {
                                left: n.distance
                            };
                        _.css(S), C.css(S), y.wrap(x), y.parent().append(C), y.parent().append(_), n.railDraggable && C.bind("mousedown", function(i) {
                            var n = e(document);
                            return h = !0, t = parseFloat(C.css("top")), pageY = i.pageY, n.bind("mousemove.slimscroll", function(e) {
                                currTop = t + e.pageY - pageY, C.css("top", currTop), s(0, C.position().top, !1)
                            }), n.bind("mouseup.slimscroll", function() {
                                h = !1, c(), n.unbind(".slimscroll")
                            }), !1
                        }).bind("selectstart.slimscroll", function(t) {
                            return t.stopPropagation(), t.preventDefault(), !1
                        }), _.hover(function() {
                            l()
                        }, function() {
                            c()
                        }), C.hover(function() {
                            u = !0
                        }, function() {
                            u = !1
                        }), y.hover(function() {
                            d = !0, l(), c()
                        }, function() {
                            d = !1, c()
                        }), y.bind("touchstart", function(t) {
                            t.originalEvent.touches.length && (p = t.originalEvent.touches[0].pageY)
                        }), y.bind("touchmove", function(t) {
                            w || t.originalEvent.preventDefault(), t.originalEvent.touches.length && (s((p - t.originalEvent.touches[0].pageY) / n.touchScrollStep, !0), p = t.originalEvent.touches[0].pageY)
                        }), r(), "bottom" === n.start ? (C.css({
                            top: y.outerHeight() - C.outerHeight()
                        }), s(0, !0)) : "top" !== n.start && (s(e(n.start).position().top, null, !0), n.alwaysVisible || C.hide()), a()
                    }
                }), this
            }
        }), jQuery.fn.extend({
            slimscroll: jQuery.fn.slimScroll
        })
    }(jQuery), ! function(t, e) {
        "use strict";

        function i(t) {
            this.callback = t, this.ticking = !1
        }

        function n(e) {
            return e && "undefined" != typeof t && (e === t || e.nodeType)
        }

        function o(t) {
            if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
            var e, i, s = t || {};
            for (i = 1; i < arguments.length; i++) {
                var a = arguments[i] || {};
                for (e in a) s[e] = "object" != typeof s[e] || n(s[e]) ? s[e] || a[e] : o(s[e], a[e])
            }
            return s
        }

        function s(t) {
            return t === Object(t) ? t : {
                down: t,
                up: t
            }
        }

        function a(t, e) {
            e = o(e, a.options), this.lastKnownScrollY = 0, this.elem = t, this.debouncer = new i(this.update.bind(this)), this.tolerance = s(e.tolerance), this.classes = e.classes, this.offset = e.offset, this.scroller = e.scroller, this.initialised = !1, this.onPin = e.onPin, this.onUnpin = e.onUnpin, this.onTop = e.onTop, this.onNotTop = e.onNotTop
        }
        var r = {
            bind: !! function() {}.bind,
            classList: "classList" in e.documentElement,
            rAF: !!(t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame)
        };
        t.requestAnimationFrame = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame, i.prototype = {
            constructor: i,
            update: function() {
                this.callback && this.callback(), this.ticking = !1
            },
            requestTick: function() {
                this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0)
            },
            handleEvent: function() {
                this.requestTick()
            }
        }, a.prototype = {
            constructor: a,
            init: function() {
                return a.cutsTheMustard ? (this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this) : void 0
            },
            destroy: function() {
                var t = this.classes;
                this.initialised = !1, this.elem.classList.remove(t.unpinned, t.pinned, t.top, t.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1)
            },
            attachEvent: function() {
                this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent())
            },
            unpin: function() {
                var t = this.elem.classList,
                    e = this.classes;
                (t.contains(e.pinned) || !t.contains(e.unpinned)) && (t.add(e.unpinned), t.remove(e.pinned), this.onUnpin && this.onUnpin.call(this))
            },
            pin: function() {
                var t = this.elem.classList,
                    e = this.classes;
                t.contains(e.unpinned) && (t.remove(e.unpinned), t.add(e.pinned), this.onPin && this.onPin.call(this))
            },
            top: function() {
                var t = this.elem.classList,
                    e = this.classes;
                t.contains(e.top) || (t.add(e.top), t.remove(e.notTop), this.onTop && this.onTop.call(this))
            },
            notTop: function() {
                var t = this.elem.classList,
                    e = this.classes;
                t.contains(e.notTop) || (t.add(e.notTop), t.remove(e.top), this.onNotTop && this.onNotTop.call(this))
            },
            getScrollY: function() {
                return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (e.documentElement || e.body.parentNode || e.body).scrollTop
            },
            getViewportHeight: function() {
                return t.innerHeight || e.documentElement.clientHeight || e.body.clientHeight
            },
            getDocumentHeight: function() {
                var t = e.body,
                    i = e.documentElement;
                return Math.max(t.scrollHeight, i.scrollHeight, t.offsetHeight, i.offsetHeight, t.clientHeight, i.clientHeight)
            },
            getElementHeight: function(t) {
                return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight)
            },
            getScrollerHeight: function() {
                return this.scroller === t || this.scroller === e.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller)
            },
            isOutOfBounds: function(t) {
                var e = 0 > t,
                    i = t + this.getViewportHeight() > this.getScrollerHeight();
                return e || i
            },
            toleranceExceeded: function(t, e) {
                return Math.abs(t - this.lastKnownScrollY) >= this.tolerance[e]
            },
            shouldUnpin: function(t, e) {
                var i = t > this.lastKnownScrollY,
                    n = t >= this.offset;
                return i && n && e
            },
            shouldPin: function(t, e) {
                var i = t < this.lastKnownScrollY,
                    n = t <= this.offset;
                return i && e || n
            },
            update: function() {
                var t = this.getScrollY(),
                    e = t > this.lastKnownScrollY ? "down" : "up",
                    i = this.toleranceExceeded(t, e);
                this.isOutOfBounds(t) || (t <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(t, i) ? this.unpin() : this.shouldPin(t, i) && this.pin(), this.lastKnownScrollY = t)
            }
        }, a.options = {
            tolerance: {
                up: 0,
                down: 0
            },
            offset: 0,
            scroller: t,
            classes: {
                pinned: "headroom--pinned",
                unpinned: "headroom--unpinned",
                top: "headroom--top",
                notTop: "headroom--not-top",
                initial: "headroom"
            }
        }, a.cutsTheMustard = "undefined" != typeof r && r.rAF && r.bind && r.classList, t.Headroom = a
    }(window, document),
    function(t) {
        t && (t.fn.headroom = function(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("headroom"),
                    o = "object" == typeof e && e;
                o = t.extend(!0, {}, Headroom.options, o), n || (n = new Headroom(this, o), n.init(), i.data("headroom", n)), "string" == typeof e && n[e]()
            })
        }, t("[data-headroom]").each(function() {
            var e = t(this);
            e.headroom(e.data())
        }))
    }(window.Zepto || window.jQuery);
var $doc = $(document),
    $win = $(window),
    $winWidth = $win.width(),
    $body = $("body"),
    $desktop = $winWidth > 767 ? !0 : !1,
    $mobile = 768 > $winWidth ? !0 : !1;
$doc.ready(function() {
    $(".js-scroll-to").on("click", function(t) {
        if ($win.width() < 768) {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                e = e.length ? e : $("[data-anchor=" + this.hash.slice(1) + "]"), e.length && ($("html,body").animate({
                    scrollTop: e.offset().top - 40
                }, 1e3), t.preventDefault())
            }
            setTimeout(function() {
                $(".header").removeClass("header--pinned").addClass("header--unpinned")
            }, 1500)
        }
    }), $desktop && $(".js-tabs").tabs(), $(".js-headroom").headroom({
        tolerance: {
            up: 20,
            down: 0
        },
        classes: {
            initial: "header",
            pinned: "header--pinned",
            unpinned: "header--unpinned",
            top: "header--top",
            notTop: "header--not-top"
        }
    }), $(".js-s-nav").on("click", function(t) {
        var e = $(this),
            i = e.data("skin");
        $(".js-splash-art").removeClass("s-view__slide--active"), $(".js-splash-art-" + i).addClass("s-view__slide--active"), $(".s-nav__item").removeClass("s-nav__item--active s-nav__item--indent"), $(this).parent(".s-nav__item").addClass("s-nav__item--active").nextAll().addClass("s-nav__item--indent"), t.preventDefault()
    }), $mobile && $(".js-mobile-window-height").each(function() {
        var t = $(this),
            e = 0;
        t.data("offset") && (e = t.data("offset")), $(this).css("min-height", $win.height() + e - 40)
    }), window.init_fullpage = function() {
        $desktop && $(".js-fullpage").fullpage({
            menu: ".nav__list",
            anchors: ["home", "skins", "wards", "icons", "sales"],
            easing: "easeInOutQuad",
            resize: !1,
            scrollingSpeed: 1300,
            animateAnchor: !1,
            verticalCentered: !1,
            fixedElements: ".header, #riotbar-bar, #riotbar-subbar, #riotbar-alerts",
            sectionSelector: ".js-fullpage-slide",
            afterLoad: function(t) {
                $(".js-nav-item").removeClass("nav__item--current"), $('.js-nav-item[data-menuanchor="' + t + '"]').addClass("nav__item--current"), "home" === t ? console.log("Home") : "skins" === t ? console.log("Skins") : "wards" === t ? console.log("Wards") : "icons" === t ? console.log("Icons") : "sales" === t && console.log("Sales")
            }
        })
    }, $win.resize(function() {
        ($desktop && $win.width() < 768 || $mobile && $win.width() > 767) && (location = location.href, history.go(0))
    })
}), $win.load(function() {
    $body.removeClass("loading").addClass("loaded"), setTimeout(function() {
        $(".header").removeClass("header--pinned").addClass("header--unpinned")
    }, 1500)
}), window.riotBarConfig = {
    locale: {
        landingUrlPattern: "http://promo.{{region}}.leagueoflegends.com/{{lang}}/lunar-revel-2015/"
    }
};
