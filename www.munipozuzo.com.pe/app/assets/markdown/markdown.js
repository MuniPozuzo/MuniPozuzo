window.CodeMirror = function() {
        "use strict";

        function e(r, n) { if (!(this instanceof e)) return new e(r, n);
            this.options = n = n || {}; for (var i in no) !n.hasOwnProperty(i) && no.hasOwnProperty(i) && (n[i] = no[i]);
            f(n); var o = "string" == typeof n.value ? 0 : n.value.first,
                l = this.display = t(r, o);
            l.wrapper.CodeMirror = this, u(this), n.autofocus && !Wi && dt(this), this.state = { keyMaps: [], overlays: [], modeGen: 0, overwrite: !1, focused: !1, suppressEdits: !1, pasteIncoming: !1, draggingText: !1, highlight: new Gn }, s(this), n.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"); var a = n.value; "string" == typeof a && (a = new yo(n.value, n.mode)), ot(this, cn)(this, a), Li && setTimeout(ei(ft, this, !0), 20), mt(this); var c; try { c = document.activeElement == l.input } catch (h) {}
            c || n.autofocus && !Wi ? setTimeout(ei(Ft, this), 20) : Dt(this), ot(this, function() { for (var e in ro) ro.propertyIsEnumerable(e) && ro[e](this, n[e], io); for (var t = 0; t < ao.length; ++t) ao[t](this) })() }

        function t(e, t) { var r = {},
                n = r.input = ni("textarea", null, null, "position: absolute; padding: 0; width: 1px; height: 1em; outline: none; font-size: 4px;"); return Ti ? n.style.width = "1000px" : n.setAttribute("wrap", "off"), Hi && (n.style.border = "1px solid black"), n.setAttribute("autocorrect", "off"), n.setAttribute("autocapitalize", "off"), n.setAttribute("spellcheck", "false"), r.inputDiv = ni("div", [n], null, "overflow: hidden; position: relative; width: 3px; height: 0px;"), r.scrollbarH = ni("div", [ni("div", null, null, "height: 1px")], "CodeMirror-hscrollbar"), r.scrollbarV = ni("div", [ni("div", null, null, "width: 1px")], "CodeMirror-vscrollbar"), r.scrollbarFiller = ni("div", null, "CodeMirror-scrollbar-filler"), r.gutterFiller = ni("div", null, "CodeMirror-gutter-filler"), r.lineDiv = ni("div", null, "CodeMirror-code"), r.selectionDiv = ni("div", null, null, "position: relative; z-index: 1"), r.cursor = ni("div", " ", "CodeMirror-cursor"), r.otherCursor = ni("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"), r.measure = ni("div", null, "CodeMirror-measure"), r.lineSpace = ni("div", [r.measure, r.selectionDiv, r.lineDiv, r.cursor, r.otherCursor], null, "position: relative; outline: none"), r.mover = ni("div", [ni("div", [r.lineSpace], "CodeMirror-lines")], null, "position: relative"), r.sizer = ni("div", [r.mover], "CodeMirror-sizer"), r.heightForcer = ni("div", null, null, "position: absolute; height: " + Co + "px; width: 1px;"), r.gutters = ni("div", null, "CodeMirror-gutters"), r.lineGutter = null, r.scroller = ni("div", [r.sizer, r.heightForcer, r.gutters], "CodeMirror-scroll"), r.scroller.setAttribute("tabIndex", "-1"), r.wrapper = ni("div", [r.inputDiv, r.scrollbarH, r.scrollbarV, r.scrollbarFiller, r.gutterFiller, r.scroller], "CodeMirror"), Si && (r.gutters.style.zIndex = -1, r.scroller.style.paddingRight = 0), e.appendChild ? e.appendChild(r.wrapper) : e(r.wrapper), Hi && (n.style.width = "0px"), Ti || (r.scroller.draggable = !0), Di ? (r.inputDiv.style.height = "1px", r.inputDiv.style.position = "absolute") : Si && (r.scrollbarH.style.minWidth = r.scrollbarV.style.minWidth = "18px"), r.viewOffset = r.lastSizeC = 0, r.showingFrom = r.showingTo = t, r.lineNumWidth = r.lineNumInnerWidth = r.lineNumChars = null, r.prevInput = "", r.alignWidgets = !1, r.pollingFast = !1, r.poll = new Gn, r.cachedCharWidth = r.cachedTextHeight = null, r.measureLineCache = [], r.measureLineCachePos = 0, r.inaccurateSelection = !1, r.maxLine = null, r.maxLineLength = 0, r.maxLineChanged = !1, r.wheelDX = r.wheelDY = r.wheelStartX = r.wheelStartY = null, r }

        function r(t) { t.doc.mode = e.getMode(t.options, t.doc.modeOption), t.doc.iter(function(e) { e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null) }), t.doc.frontier = t.doc.first, D(t, 100), t.state.modeGen++, t.curOp && at(t) }

        function n(e) { e.options.lineWrapping ? (e.display.wrapper.className += " CodeMirror-wrap", e.display.sizer.style.minWidth = "") : (e.display.wrapper.className = e.display.wrapper.className.replace(" CodeMirror-wrap", ""), h(e)), o(e), at(e), G(e), setTimeout(function() { d(e) }, 100) }

        function i(e) { var t = tt(e.display),
                r = e.options.lineWrapping,
                n = r && Math.max(5, e.display.scroller.clientWidth / rt(e.display) - 3); return function(i) { return Pr(e.doc, i) ? 0 : r ? (Math.ceil(i.text.length / n) || 1) * t : t } }

        function o(e) { var t = e.doc,
                r = i(e);
            t.iter(function(e) { var t = r(e);
                t != e.height && pn(e, t) }) }

        function l(e) { var t = ho[e.options.keyMap],
                r = t.style;
            e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-keymap-\S+/g, "") + (r ? " cm-keymap-" + r : ""), e.state.disableInput = t.disableInput }

        function s(e) { e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), G(e) }

        function a(e) { u(e), at(e), setTimeout(function() { m(e) }, 20) }

        function u(e) { var t = e.display.gutters,
                r = e.options.gutters;
            ii(t); for (var n = 0; n < r.length; ++n) { var i = r[n],
                    o = t.appendChild(ni("div", null, "CodeMirror-gutter " + i)); "CodeMirror-linenumbers" == i && (e.display.lineGutter = o, o.style.width = (e.display.lineNumWidth || 1) + "px") }
            t.style.display = n ? "" : "none" }

        function c(e, t) { if (0 == t.height) return 0; for (var r, n = t.text.length, i = t; r = Hr(i);) { var o = r.find();
                i = hn(e, o.from.line), n += o.from.ch - o.to.ch } for (i = t; r = Wr(i);) { var o = r.find();
                n -= i.text.length - o.from.ch, i = hn(e, o.to.line), n += i.text.length - o.to.ch } return n }

        function h(e) { var t = e.display,
                r = e.doc;
            t.maxLine = hn(r, r.first), t.maxLineLength = c(r, t.maxLine), t.maxLineChanged = !0, r.iter(function(e) { var n = c(r, e);
                n > t.maxLineLength && (t.maxLineLength = n, t.maxLine = e) }) }

        function f(e) { for (var t = !1, r = 0; r < e.gutters.length; ++r) "CodeMirror-linenumbers" == e.gutters[r] && (e.lineNumbers ? t = !0 : e.gutters.splice(r--, 1));!t && e.lineNumbers && e.gutters.push("CodeMirror-linenumbers") }

        function d(e) { var t = e.display,
                r = e.doc.height,
                n = r + W(t);
            t.sizer.style.minHeight = t.heightForcer.style.top = n + "px", t.gutters.style.height = Math.max(n, t.scroller.clientHeight - Co) + "px"; var i = Math.max(n, t.scroller.scrollHeight),
                o = t.scroller.scrollWidth > t.scroller.clientWidth + 1,
                l = i > t.scroller.clientHeight + 1;
            l ? (t.scrollbarV.style.display = "block", t.scrollbarV.style.bottom = o ? ui(t.measure) + "px" : "0", t.scrollbarV.firstChild.style.height = i - t.scroller.clientHeight + t.scrollbarV.clientHeight + "px") : t.scrollbarV.style.display = "", o ? (t.scrollbarH.style.display = "block", t.scrollbarH.style.right = l ? ui(t.measure) + "px" : "0", t.scrollbarH.firstChild.style.width = t.scroller.scrollWidth - t.scroller.clientWidth + t.scrollbarH.clientWidth + "px") : t.scrollbarH.style.display = "", o && l ? (t.scrollbarFiller.style.display = "block", t.scrollbarFiller.style.height = t.scrollbarFiller.style.width = ui(t.measure) + "px") : t.scrollbarFiller.style.display = "", o && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (t.gutterFiller.style.display = "block", t.gutterFiller.style.height = ui(t.measure) + "px", t.gutterFiller.style.width = t.gutters.offsetWidth + "px") : t.gutterFiller.style.display = "", Ni && 0 === ui(t.measure) && (t.scrollbarV.style.minWidth = t.scrollbarH.style.minHeight = zi ? "18px" : "12px") }

        function p(e, t, r) { var n = e.scroller.scrollTop,
                i = e.wrapper.clientHeight; "number" == typeof r ? n = r : r && (n = r.top, i = r.bottom - r.top), n = Math.floor(n - H(e)); var o = Math.ceil(n + i); return { from: gn(t, n), to: gn(t, o) } }

        function m(e) { var t = e.display; if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) { for (var r = y(t) - t.scroller.scrollLeft + e.doc.scrollLeft, n = t.gutters.offsetWidth, i = r + "px", o = t.lineDiv.firstChild; o; o = o.nextSibling)
                    if (o.alignable)
                        for (var l = 0, s = o.alignable; l < s.length; ++l) s[l].style.left = i;
                e.options.fixedGutter && (t.gutters.style.left = r + n + "px") } }

        function g(e) { if (!e.options.lineNumbers) return !1; var t = e.doc,
                r = v(e.options, t.first + t.size - 1),
                n = e.display; if (r.length != n.lineNumChars) { var i = n.measure.appendChild(ni("div", [ni("div", r)], "CodeMirror-linenumber CodeMirror-gutter-elt")),
                    o = i.firstChild.offsetWidth,
                    l = i.offsetWidth - o; return n.lineGutter.style.width = "", n.lineNumInnerWidth = Math.max(o, n.lineGutter.offsetWidth - l), n.lineNumWidth = n.lineNumInnerWidth + l, n.lineNumChars = n.lineNumInnerWidth ? r.length : -1, n.lineGutter.style.width = n.lineNumWidth + "px", !0 } return !1 }

        function v(e, t) { return String(e.lineNumberFormatter(t + e.firstLineNumber)) }

        function y(e) { return si(e.scroller).left - si(e.sizer).left }

        function b(e, t, r, n) { for (var i, o = e.display.showingFrom, l = e.display.showingTo, s = p(e.display, e.doc, r); x(e, t, s, n) && (n = !1, i = !0, E(e), d(e), r && (r = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, "number" == typeof r ? r : r.top)), s = p(e.display, e.doc, r), !(s.from >= e.display.showingFrom && s.to <= e.display.showingTo));) t = []; return i && (Rn(e, "update", e), (e.display.showingFrom != o || e.display.showingTo != l) && Rn(e, "viewportChange", e, e.display.showingFrom, e.display.showingTo)), i }

        function x(e, t, r, n) { var i = e.display,
                o = e.doc; if (!i.wrapper.clientWidth) return i.showingFrom = i.showingTo = o.first, i.viewOffset = 0, void 0; if (!(!n && 0 == t.length && r.from > i.showingFrom && r.to < i.showingTo)) { g(e) && (t = [{ from: o.first, to: o.first + o.size }]); var l = i.sizer.style.marginLeft = i.gutters.offsetWidth + "px";
                i.scrollbarH.style.left = e.options.fixedGutter ? l : "0"; var s = 1 / 0; if (e.options.lineNumbers)
                    for (var a = 0; a < t.length; ++a)
                        if (t[a].diff) { s = t[a].from; break }
                var u = o.first + o.size,
                    c = Math.max(r.from - e.options.viewportMargin, o.first),
                    h = Math.min(u, r.to + e.options.viewportMargin); if (i.showingFrom < c && c - i.showingFrom < 20 && (c = Math.max(o.first, i.showingFrom)), i.showingTo > h && i.showingTo - h < 20 && (h = Math.min(u, i.showingTo)), Vi)
                    for (c = mn(Ir(o, hn(o, c))); u > h && Pr(o, hn(o, h));) ++h; var f = [{ from: Math.max(i.showingFrom, o.first), to: Math.min(i.showingTo, u) }]; if (f = f[0].from >= f[0].to ? [] : C(f, t), Vi)
                    for (var a = 0; a < f.length; ++a)
                        for (var d, p = f[a]; d = Wr(hn(o, p.to - 1));) { var m = d.find().from.line; if (!(m > p.from)) { f.splice(a--, 1); break }
                            p.to = m }
                for (var v = 0, a = 0; a < f.length; ++a) { var p = f[a];
                    p.from < c && (p.from = c), p.to > h && (p.to = h), p.from >= p.to ? f.splice(a--, 1) : v += p.to - p.from } if (!n && v == h - c && c == i.showingFrom && h == i.showingTo) return k(e), void 0;
                f.sort(function(e, t) { return e.from - t.from }); try { var y = document.activeElement } catch (b) {}
                .7 * (h - c) > v && (i.lineDiv.style.display = "none"), S(e, c, h, f, s), i.lineDiv.style.display = "", y && document.activeElement != y && y.offsetHeight && y.focus(); var x = c != i.showingFrom || h != i.showingTo || i.lastSizeC != i.wrapper.clientHeight; return x && (i.lastSizeC = i.wrapper.clientHeight, D(e, 400)), i.showingFrom = c, i.showingTo = h, w(e), k(e), !0 } }

        function w(e) { for (var t, r = e.display, n = r.lineDiv.offsetTop, i = r.lineDiv.firstChild; i; i = i.nextSibling)
                if (i.lineObj) { if (Si) { var o = i.offsetTop + i.offsetHeight;
                        t = o - n, n = o } else { var l = si(i);
                        t = l.bottom - l.top } var s = i.lineObj.height - t; if (2 > t && (t = tt(r)), s > .001 || -.001 > s) { pn(i.lineObj, t); var a = i.lineObj.widgets; if (a)
                            for (var u = 0; u < a.length; ++u) a[u].height = a[u].node.offsetHeight } } }

        function k(e) { var t = e.display.viewOffset = vn(e, hn(e.doc, e.display.showingFrom));
            e.display.mover.style.top = t + "px" }

        function C(e, t) { for (var r = 0, n = t.length || 0; n > r; ++r) { for (var i = t[r], o = [], l = i.diff || 0, s = 0, a = e.length; a > s; ++s) { var u = e[s];
                    i.to <= u.from && i.diff ? o.push({ from: u.from + l, to: u.to + l }) : i.to <= u.from || i.from >= u.to ? o.push(u) : (i.from > u.from && o.push({ from: u.from, to: i.from }), i.to < u.to && o.push({ from: i.to + l, to: u.to + l })) }
                e = o } return e }

        function L(e) { for (var t = e.display, r = {}, n = {}, i = t.gutters.firstChild, o = 0; i; i = i.nextSibling, ++o) r[e.options.gutters[o]] = i.offsetLeft, n[e.options.gutters[o]] = i.offsetWidth; return { fixedPos: y(t), gutterTotalWidth: t.gutters.offsetWidth, gutterLeft: r, gutterWidth: n, wrapperWidth: t.wrapper.clientWidth } }

        function S(e, t, r, n, i) {
            function o(t) { var r = t.nextSibling; return Ti && Ii && e.display.currentWheelTarget == t ? (t.style.display = "none", t.lineObj = null) : t.parentNode.removeChild(t), r } var l = L(e),
                s = e.display,
                a = e.options.lineNumbers;
            n.length || Ti && e.display.currentWheelTarget || ii(s.lineDiv); var u = s.lineDiv,
                c = u.firstChild,
                h = n.shift(),
                f = t; for (e.doc.iter(t, r, function(t) { if (h && h.to == f && (h = n.shift()), Pr(e.doc, t)) { if (0 != t.height && pn(t, 0), t.widgets && c.previousSibling)
                            for (var r = 0; r < t.widgets.length; ++r) { var s = t.widgets[r]; if (s.showIfHidden) { var d = c.previousSibling; if (/pre/i.test(d.nodeName)) { var p = ni("div", null, null, "position: relative");
                                        d.parentNode.replaceChild(p, d), p.appendChild(d), d = p } var m = d.appendChild(ni("div", [s.node], "CodeMirror-linewidget"));
                                    s.handleMouseEvents || (m.ignoreEvents = !0), T(s, m, d, l) } } } else if (h && h.from <= f && h.to > f) { for (; c.lineObj != t;) c = o(c);
                        a && f >= i && c.lineNumber && li(c.lineNumber, v(e.options, f)), c = c.nextSibling } else { if (t.widgets)
                            for (var g, y = 0, b = c; b && 20 > y; ++y, b = b.nextSibling)
                                if (b.lineObj == t && /div/i.test(b.nodeName)) { g = b; break }
                        var x = M(e, t, f, l, g); if (x != g) u.insertBefore(x, c);
                        else { for (; c != g;) c = o(c);
                            c = c.nextSibling }
                        x.lineObj = t }++f }); c;) c = o(c) }

        function M(e, t, r, n, i) { var o, l = Jr(e, t),
                s = t.gutterMarkers,
                a = e.display; if (!(e.options.lineNumbers || s || t.bgClass || t.wrapClass || t.widgets)) return l; if (i) { i.alignable = null; for (var u, c = !0, h = 0, f = null, d = i.firstChild; d; d = u)
                    if (u = d.nextSibling, /\bCodeMirror-linewidget\b/.test(d.className)) { for (var p = 0; p < t.widgets.length; ++p) { var m = t.widgets[p]; if (m.node == d.firstChild) { m.above || f || (f = d), T(m, d, i, n), ++h; break } } if (p == t.widgets.length) { c = !1; break } } else i.removeChild(d);
                i.insertBefore(l, f), c && h == t.widgets.length && (o = i, i.className = t.wrapClass || "") } if (o || (o = ni("div", null, t.wrapClass, "position: relative"), o.appendChild(l)), t.bgClass && o.insertBefore(ni("div", null, t.bgClass + " CodeMirror-linebackground"), o.firstChild), e.options.lineNumbers || s) { var g = o.insertBefore(ni("div", null, null, "position: absolute; left: " + (e.options.fixedGutter ? n.fixedPos : -n.gutterTotalWidth) + "px"), o.firstChild); if (e.options.fixedGutter && (o.alignable || (o.alignable = [])).push(g), !e.options.lineNumbers || s && s["CodeMirror-linenumbers"] || (o.lineNumber = g.appendChild(ni("div", v(e.options, r), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + n.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + a.lineNumInnerWidth + "px"))), s)
                    for (var y = 0; y < e.options.gutters.length; ++y) { var b = e.options.gutters[y],
                            x = s.hasOwnProperty(b) && s[b];
                        x && g.appendChild(ni("div", [x], "CodeMirror-gutter-elt", "left: " + n.gutterLeft[b] + "px; width: " + n.gutterWidth[b] + "px")) } } if (Si && (o.style.zIndex = 2), t.widgets && o != i)
                for (var p = 0, w = t.widgets; p < w.length; ++p) { var m = w[p],
                        k = ni("div", [m.node], "CodeMirror-linewidget");
                    m.handleMouseEvents || (k.ignoreEvents = !0), T(m, k, o, n), m.above ? o.insertBefore(k, e.options.lineNumbers && 0 != t.height ? g : l) : o.appendChild(k), Rn(m, "redraw") }
            return o }

        function T(e, t, r, n) { if (e.noHScroll) {
                (r.alignable || (r.alignable = [])).push(t); var i = n.wrapperWidth;
                t.style.left = n.fixedPos + "px", e.coverGutter || (i -= n.gutterTotalWidth, t.style.paddingLeft = n.gutterTotalWidth + "px"), t.style.width = i + "px" }
            e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -n.gutterTotalWidth + "px")) }

        function E(e) { var t = e.display,
                r = Gt(e.doc.sel.from, e.doc.sel.to); if (r || e.options.showCursorWhenSelecting ? A(e) : t.cursor.style.display = t.otherCursor.style.display = "none", r ? t.selectionDiv.style.display = "none" : _(e), e.options.moveInputWithCursor) { var n = Y(e, e.doc.sel.head, "div"),
                    i = si(t.wrapper),
                    o = si(t.lineDiv);
                t.inputDiv.style.top = Math.max(0, Math.min(t.wrapper.clientHeight - 10, n.top + o.top - i.top)) + "px", t.inputDiv.style.left = Math.max(0, Math.min(t.wrapper.clientWidth - 10, n.left + o.left - i.left)) + "px" } }

        function A(e) { var t = e.display,
                r = Y(e, e.doc.sel.head, "div");
            t.cursor.style.left = r.left + "px", t.cursor.style.top = r.top + "px", t.cursor.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", t.cursor.style.display = "", r.other ? (t.otherCursor.style.display = "", t.otherCursor.style.left = r.other.left + "px", t.otherCursor.style.top = r.other.top + "px", t.otherCursor.style.height = .85 * (r.other.bottom - r.other.top) + "px") : t.otherCursor.style.display = "none" }

        function _(e) {
            function t(e, t, r, n) { 0 > t && (t = 0), l.appendChild(ni("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px; top: " + t + "px; width: " + (null == r ? s - e : r) + "px; height: " + (n - t) + "px")) }

            function r(r, n, o) {
                function l(t, n) { return X(e, Ut(r, t), "div", h, n) } var u, c, h = hn(i, r),
                    f = h.text.length; return hi(yn(h), n || 0, null == o ? f : o, function(e, r, i) { var h, d, p, m = l(e, "left"); if (e == r) h = m, d = p = m.left;
                    else { if (h = l(r - 1, "right"), "rtl" == i) { var g = m;
                            m = h, h = g }
                        d = m.left, p = h.right }
                    null == n && 0 == e && (d = a), h.top - m.top > 3 && (t(d, m.top, null, m.bottom), d = a, m.bottom < h.top && t(d, m.bottom, null, h.top)), null == o && r == f && (p = s), (!u || m.top < u.top || m.top == u.top && m.left < u.left) && (u = m), (!c || h.bottom > c.bottom || h.bottom == c.bottom && h.right > c.right) && (c = h), a + 1 > d && (d = a), t(d, h.top, p - d, h.bottom) }), { start: u, end: c } } var n = e.display,
                i = e.doc,
                o = e.doc.sel,
                l = document.createDocumentFragment(),
                s = n.lineSpace.offsetWidth,
                a = I(e.display); if (o.from.line == o.to.line) r(o.from.line, o.from.ch, o.to.ch);
            else { var u = hn(i, o.from.line),
                    c = hn(i, o.to.line),
                    h = Ir(i, u) == Ir(i, c),
                    f = r(o.from.line, o.from.ch, h ? u.text.length : null).end,
                    d = r(o.to.line, h ? 0 : null, o.to.ch).start;
                h && (f.top < d.top - 2 ? (t(f.right, f.top, null, f.bottom), t(a, d.top, d.left, d.bottom)) : t(f.right, f.top, d.left - f.right, f.bottom)), f.bottom < d.top && t(a, f.bottom, null, d.top) }
            oi(n.selectionDiv, l), n.selectionDiv.style.display = "" }

        function F(e) { if (e.state.focused) { var t = e.display;
                clearInterval(t.blinker); var r = !0;
                t.cursor.style.visibility = t.otherCursor.style.visibility = "", t.blinker = setInterval(function() { t.cursor.style.visibility = t.otherCursor.style.visibility = (r = !r) ? "" : "hidden" }, e.options.cursorBlinkRate) } }

        function D(e, t) { e.doc.mode.startState && e.doc.frontier < e.display.showingTo && e.state.highlight.set(t, ei(N, e)) }

        function N(e) { var t = e.doc; if (t.frontier < t.first && (t.frontier = t.first), !(t.frontier >= e.display.showingTo)) { var r, n = +new Date + e.options.workTime,
                    i = gr(t.mode, O(e, t.frontier)),
                    o = [];
                t.iter(t.frontier, Math.min(t.first + t.size, e.display.showingTo + 500), function(l) { if (t.frontier >= e.display.showingFrom) { var s = l.styles;
                        l.styles = Qr(e, l, i); for (var a = !s || s.length != l.styles.length, u = 0; !a && u < s.length; ++u) a = s[u] != l.styles[u];
                        a && (r && r.end == t.frontier ? r.end++ : o.push(r = { start: t.frontier, end: t.frontier + 1 })), l.stateAfter = gr(t.mode, i) } else Yr(e, l, i), l.stateAfter = t.frontier % 5 == 0 ? gr(t.mode, i) : null; return ++t.frontier, +new Date > n ? (D(e, e.options.workDelay), !0) : void 0 }), o.length && ot(e, function() { for (var e = 0; e < o.length; ++e) at(this, o[e].start, o[e].end) })() } }

        function z(e, t, r) { for (var n, i, o = e.doc, l = t, s = t - 100; l > s; --l) { if (l <= o.first) return o.first; var a = hn(o, l - 1); if (a.stateAfter && (!r || l <= o.frontier)) return l; var u = qn(a.text, null, e.options.tabSize);
                (null == i || n > u) && (i = l - 1, n = u) } return i }

        function O(e, t, r) { var n = e.doc,
                i = e.display; if (!n.mode.startState) return !0; var o = z(e, t, r),
                l = o > n.first && hn(n, o - 1).stateAfter; return l = l ? gr(n.mode, l) : vr(n.mode), n.iter(o, t, function(r) { Yr(e, r, l); var s = o == t - 1 || o % 5 == 0 || o >= i.showingFrom && o < i.showingTo;
                r.stateAfter = s ? gr(n.mode, l) : null, ++o }), l }

        function H(e) { return e.lineSpace.offsetTop }

        function W(e) { return e.mover.offsetHeight - e.lineSpace.offsetHeight }

        function I(e) { var t = oi(e.measure, ni("pre", null, null, "text-align: left")).appendChild(ni("span", "x")); return t.offsetLeft }

        function P(e, t, r, n, i) { var o = -1;
            n = n || $(e, t); for (var l = r;; l += o) { var s = n[l]; if (s) break;
                0 > o && 0 == l && (o = 1) } return i = l > r ? "left" : r > l ? "right" : i, "left" == i && s.leftSide ? s = s.leftSide : "right" == i && s.rightSide && (s = s.rightSide), { left: r > l ? s.right : s.left, right: l > r ? s.left : s.right, top: s.top, bottom: s.bottom } }

        function R(e, t) { for (var r = e.display.measureLineCache, n = 0; n < r.length; ++n) { var i = r[n]; if (i.text == t.text && i.markedSpans == t.markedSpans && e.display.scroller.clientWidth == i.width && i.classes == t.textClass + "|" + t.bgClass + "|" + t.wrapClass) return i } }

        function B(e, t) { var r = R(e, t);
            r && (r.text = r.measure = r.markedSpans = null) }

        function $(e, t) { var r = R(e, t); if (r) return r.measure; var n = j(e, t),
                i = e.display.measureLineCache,
                o = { text: t.text, width: e.display.scroller.clientWidth, markedSpans: t.markedSpans, measure: n, classes: t.textClass + "|" + t.bgClass + "|" + t.wrapClass }; return 16 == i.length ? i[++e.display.measureLineCachePos % 16] = o : i.push(o), n }

        function j(e, t) {
            function r(e) { var t = e.top - p.top,
                    r = e.bottom - p.top;
                r > v && (r = v), 0 > t && (t = 0); for (var n = m.length - 2; n >= 0; n -= 2) { var i = m[n],
                        o = m[n + 1]; if (!(i > r || t > o) && (t >= i && o >= r || i >= t && r >= o || Math.min(r, o) - Math.max(t, i) >= r - t >> 1)) { m[n] = Math.min(t, i), m[n + 1] = Math.max(r, o); break } } return 0 > n && (n = m.length, m.push(t, r)), { left: e.left - p.left, right: e.right - p.left, top: n, bottom: null } }

            function n(e) { e.bottom = m[e.top + 1], e.top = m[e.top] } var i = e.display,
                o = Jn(t.text.length),
                l = Jr(e, t, o, !0); if (Li && !Si && !e.options.lineWrapping && l.childNodes.length > 100) { for (var s = document.createDocumentFragment(), a = 10, u = l.childNodes.length, c = 0, h = Math.ceil(u / a); h > c; ++c) { for (var f = ni("div", null, null, "display: inline-block"), d = 0; a > d && u; ++d) f.appendChild(l.firstChild), --u;
                    s.appendChild(f) }
                l.appendChild(s) }
            oi(i.measure, l); var p = si(i.lineDiv),
                m = [],
                g = Jn(t.text.length),
                v = l.offsetHeight;
            Mi && i.measure.first != l && oi(i.measure, l); for (var y, c = 0; c < o.length; ++c)
                if (y = o[c]) { var b = y,
                        x = null; if (/\bCodeMirror-widget\b/.test(y.className) && y.getClientRects) { 1 == y.firstChild.nodeType && (b = y.firstChild); var w = b.getClientRects();
                        w.length > 1 && (x = g[c] = r(w[0]), x.rightSide = r(w[w.length - 1])) }
                    x || (x = g[c] = r(si(b))), y.measureRight && (x.right = si(y.measureRight).left), y.leftSide && (x.leftSide = r(si(y.leftSide))) }
            for (var y, c = 0; c < g.length; ++c)(y = g[c]) && (n(y), y.leftSide && n(y.leftSide), y.rightSide && n(y.rightSide)); return g }

        function U(e, t) { var r = !1; if (t.markedSpans)
                for (var n = 0; n < t.markedSpans; ++n) { var i = t.markedSpans[n];!i.collapsed || null != i.to && i.to != t.text.length || (r = !0) }
            var o = !r && R(e, t); if (o) return P(e, t, t.text.length, o.measure, "right").right; var l = Jr(e, t, null, !0),
                s = l.appendChild(ci(e.display.measure)); return oi(e.display.measure, l), si(s).right - si(e.display.lineDiv).left }

        function G(e) { e.display.measureLineCache.length = e.display.measureLineCachePos = 0, e.display.cachedCharWidth = e.display.cachedTextHeight = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null }

        function q() { return window.pageXOffset || (document.documentElement || document.body).scrollLeft }

        function V() { return window.pageYOffset || (document.documentElement || document.body).scrollTop }

        function K(e, t, r, n) { if (t.widgets)
                for (var i = 0; i < t.widgets.length; ++i)
                    if (t.widgets[i].above) { var o = Ur(t.widgets[i]);
                        r.top += o, r.bottom += o }
            if ("line" == n) return r;
            n || (n = "local"); var l = vn(e, t); if ("local" == n ? l += H(e.display) : l -= e.display.viewOffset, "page" == n || "window" == n) { var s = si(e.display.lineSpace);
                l += s.top + ("window" == n ? 0 : V()); var a = s.left + ("window" == n ? 0 : q());
                r.left += a, r.right += a } return r.top += l, r.bottom += l, r }

        function Q(e, t, r) { if ("div" == r) return t; var n = t.left,
                i = t.top; if ("page" == r) n -= q(), i -= V();
            else if ("local" == r || !r) { var o = si(e.display.sizer);
                n += o.left, i += o.top } var l = si(e.display.lineSpace); return { left: n - l.left, top: i - l.top } }

        function X(e, t, r, n, i) { return n || (n = hn(e.doc, t.line)), K(e, n, P(e, n, t.ch, null, i), r) }

        function Y(e, t, r, n, i) {
            function o(t, o) { var l = P(e, n, t, i, o ? "right" : "left"); return o ? l.left = l.right : l.right = l.left, K(e, n, l, r) }

            function l(e, t) { var r = s[t],
                    n = r.level % 2; return e == fi(r) && t && r.level < s[t - 1].level ? (r = s[--t], e = di(r) - (r.level % 2 ? 0 : 1), n = !0) : e == di(r) && t < s.length - 1 && r.level < s[t + 1].level && (r = s[++t], e = fi(r) - r.level % 2, n = !1), n && e == r.to && e > r.from ? o(e - 1) : o(e, n) }
            n = n || hn(e.doc, t.line), i || (i = $(e, n)); var s = yn(n),
                a = t.ch; if (!s) return o(a); var u = bi(s, a),
                c = l(a, u); return null != Oo && (c.other = l(a, Oo)), c }

        function Z(e, t, r, n) { var i = new Ut(e, t); return i.xRel = n, r && (i.outside = !0), i }

        function J(e, t, r) { var n = e.doc; if (r += e.display.viewOffset, 0 > r) return Z(n.first, 0, !0, -1); var i = gn(n, r),
                o = n.first + n.size - 1; if (i > o) return Z(n.first + n.size - 1, hn(n, o).text.length, !0, 1); for (0 > t && (t = 0);;) { var l = hn(n, i),
                    s = et(e, l, i, t, r),
                    a = Wr(l),
                    u = a && a.find(); if (!a || !(s.ch > u.from.ch || s.ch == u.from.ch && s.xRel > 0)) return s;
                i = u.to.line } }

        function et(e, t, r, n, i) {
            function o(n) { var i = Y(e, Ut(r, n), "line", t, u); return s = !0, l > i.bottom ? i.left - a : l < i.top ? i.left + a : (s = !1, i.left) } var l = i - vn(e, t),
                s = !1,
                a = 2 * e.display.wrapper.clientWidth,
                u = $(e, t),
                c = yn(t),
                h = t.text.length,
                f = pi(t),
                d = mi(t),
                p = o(f),
                m = s,
                g = o(d),
                v = s; if (n > g) return Z(r, d, v, 1); for (;;) { if (c ? d == f || d == wi(t, f, 1) : 1 >= d - f) { for (var y = p > n || g - n >= n - p ? f : d, b = n - (y == f ? p : g); To.test(t.text.charAt(y));) ++y; var x = Z(r, y, y == f ? m : v, 0 > b ? -1 : b ? 1 : 0); return x } var w = Math.ceil(h / 2),
                    k = f + w; if (c) { k = f; for (var C = 0; w > C; ++C) k = wi(t, k, 1) } var L = o(k);
                L > n ? (d = k, g = L, (v = s) && (g += 1e3), h = w) : (f = k, p = L, m = s, h -= w) } }

        function tt(e) { if (null != e.cachedTextHeight) return e.cachedTextHeight; if (null == Bi) { Bi = ni("pre"); for (var t = 0; 49 > t; ++t) Bi.appendChild(document.createTextNode("x")), Bi.appendChild(ni("br"));
                Bi.appendChild(document.createTextNode("x")) }
            oi(e.measure, Bi); var r = Bi.offsetHeight / 50; return r > 3 && (e.cachedTextHeight = r), ii(e.measure), r || 1 }

        function rt(e) { if (null != e.cachedCharWidth) return e.cachedCharWidth; var t = ni("span", "x"),
                r = ni("pre", [t]);
            oi(e.measure, r); var n = t.offsetWidth; return n > 2 && (e.cachedCharWidth = n), n || 10 }

        function nt(e) { e.curOp = { changes: [], forceUpdate: !1, updateInput: null, userSelChange: null, textChanged: null, selectionChanged: !1, cursorActivity: !1, updateMaxLine: !1, updateScrollPos: !1, id: ++Ki }, ko++ || (wo = []) }

        function it(e) { var t = e.curOp,
                r = e.doc,
                n = e.display; if (e.curOp = null, t.updateMaxLine && h(e), n.maxLineChanged && !e.options.lineWrapping && n.maxLine) { var i = U(e, n.maxLine);
                n.sizer.style.minWidth = Math.max(0, i + 3 + Co) + "px", n.maxLineChanged = !1; var o = Math.max(0, n.sizer.offsetLeft + n.sizer.offsetWidth - n.scroller.clientWidth);
                o < r.scrollLeft && !t.updateScrollPos && Ct(e, Math.min(n.scroller.scrollLeft, o), !0) } var l, s; if (t.updateScrollPos) l = t.updateScrollPos;
            else if (t.selectionChanged && n.scroller.clientHeight) { var a = Y(e, r.sel.head);
                l = lr(e, a.left, a.top, a.left, a.bottom) }(t.changes.length || t.forceUpdate || l && null != l.scrollTop) && (s = b(e, t.changes, l && l.scrollTop, t.forceUpdate), e.display.scroller.offsetHeight && (e.doc.scrollTop = e.display.scroller.scrollTop)), !s && t.selectionChanged && E(e), t.updateScrollPos ? (n.scroller.scrollTop = n.scrollbarV.scrollTop = r.scrollTop = l.scrollTop, n.scroller.scrollLeft = n.scrollbarH.scrollLeft = r.scrollLeft = l.scrollLeft, m(e), t.scrollToPos && ir(e, Qt(e.doc, t.scrollToPos), t.scrollToPosMargin)) : l && nr(e), t.selectionChanged && F(e), e.state.focused && t.updateInput && ft(e, t.userSelChange); var u = t.maybeHiddenMarkers,
                c = t.maybeUnhiddenMarkers; if (u)
                for (var f = 0; f < u.length; ++f) u[f].lines.length || Pn(u[f], "hide"); if (c)
                for (var f = 0; f < c.length; ++f) c[f].lines.length && Pn(c[f], "unhide"); var d; if (--ko || (d = wo, wo = null), t.textChanged && Pn(e, "change", e, t.textChanged), t.cursorActivity && Pn(e, "cursorActivity", e), d)
                for (var f = 0; f < d.length; ++f) d[f]() }

        function ot(e, t) { return function() { var r = e || this,
                    n = !r.curOp;
                n && nt(r); try { var i = t.apply(r, arguments) } finally { n && it(r) } return i } }

        function lt(e) { return function() { var t, r = this.cm && !this.cm.curOp;
                r && nt(this.cm); try { t = e.apply(this, arguments) } finally { r && it(this.cm) } return t } }

        function st(e, t) { var r, n = !e.curOp;
            n && nt(e); try { r = t() } finally { n && it(e) } return r }

        function at(e, t, r, n) { null == t && (t = e.doc.first), null == r && (r = e.doc.first + e.doc.size), e.curOp.changes.push({ from: t, to: r, diff: n }) }

        function ut(e) { e.display.pollingFast || e.display.poll.set(e.options.pollInterval, function() { ht(e), e.state.focused && ut(e) }) }

        function ct(e) {
            function t() { var n = ht(e);
                n || r ? (e.display.pollingFast = !1, ut(e)) : (r = !0, e.display.poll.set(60, t)) } var r = !1;
            e.display.pollingFast = !0, e.display.poll.set(20, t) }

        function ht(e) { var t = e.display.input,
                r = e.display.prevInput,
                n = e.doc,
                i = n.sel; if (!e.state.focused || Do(t) || pt(e) || e.state.disableInput) return !1; var o = t.value; if (o == r && Gt(i.from, i.to)) return !1; if (Li && !Mi && e.display.inputHasSelection === o) return ft(e, !0), !1; var l = !e.curOp;
            l && nt(e), i.shift = !1; for (var s = 0, a = Math.min(r.length, o.length); a > s && r.charCodeAt(s) == o.charCodeAt(s);) ++s; var u = i.from,
                c = i.to;
            s < r.length ? u = Ut(u.line, u.ch - (r.length - s)) : e.state.overwrite && Gt(u, c) && !e.state.pasteIncoming && (c = Ut(c.line, Math.min(hn(n, c.line).text.length, c.ch + (o.length - s)))); var h = e.curOp.updateInput,
                f = { from: u, to: c, text: Fo(o.slice(s)), origin: e.state.pasteIncoming ? "paste" : "+input" }; return Wt(e.doc, f, "end"), e.curOp.updateInput = h, Rn(e, "inputRead", e, f), o.length > 1e3 || o.indexOf("\n") > -1 ? t.value = e.display.prevInput = "" : e.display.prevInput = o, l && it(e), e.state.pasteIncoming = !1, !0 }

        function ft(e, t) { var r, n, i = e.doc; if (Gt(i.sel.from, i.sel.to)) t && (e.display.prevInput = e.display.input.value = "", Li && !Mi && (e.display.inputHasSelection = null));
            else { e.display.prevInput = "", r = No && (i.sel.to.line - i.sel.from.line > 100 || (n = e.getSelection()).length > 1e3); var o = r ? "-" : n || e.getSelection();
                e.display.input.value = o, e.state.focused && Qn(e.display.input), Li && !Mi && (e.display.inputHasSelection = o) }
            e.display.inaccurateSelection = r }

        function dt(e) { "nocursor" == e.options.readOnly || Wi && document.activeElement == e.display.input || e.display.input.focus() }

        function pt(e) { return e.options.readOnly || e.doc.cantEdit }

        function mt(e) {
            function t() { e.state.focused && setTimeout(ei(dt, e), 0) }

            function r() { null == s && (s = setTimeout(function() { s = null, l.cachedCharWidth = l.cachedTextHeight = Ao = null, G(e), st(e, ei(at, e)) }, 100)) }

            function n() { for (var e = l.wrapper.parentNode; e && e != document.body; e = e.parentNode);
                e ? setTimeout(n, 5e3) : In(window, "resize", r) }

            function i(t) { Bn(e, t) || e.options.onDragEvent && e.options.onDragEvent(e, _n(t)) || zn(t) }

            function o() { l.inaccurateSelection && (l.prevInput = "", l.inaccurateSelection = !1, l.input.value = e.getSelection(), Qn(l.input)) } var l = e.display;
            Wn(l.scroller, "mousedown", ot(e, yt)), Li ? Wn(l.scroller, "dblclick", ot(e, function(t) { if (!Bn(e, t)) { var r = vt(e, t); if (r && !bt(e, t) && !gt(e.display, t)) { Fn(t); var n = dr(hn(e.doc, r.line).text, r);
                        Zt(e.doc, n.from, n.to) } } })) : Wn(l.scroller, "dblclick", function(t) { Bn(e, t) || Fn(t) }), Wn(l.lineSpace, "selectstart", function(e) { gt(l, e) || Fn(e) }), Gi || Wn(l.scroller, "contextmenu", function(t) { Nt(e, t) }), Wn(l.scroller, "scroll", function() { l.scroller.clientHeight && (kt(e, l.scroller.scrollTop), Ct(e, l.scroller.scrollLeft, !0), Pn(e, "scroll", e)) }), Wn(l.scrollbarV, "scroll", function() { l.scroller.clientHeight && kt(e, l.scrollbarV.scrollTop) }), Wn(l.scrollbarH, "scroll", function() { l.scroller.clientHeight && Ct(e, l.scrollbarH.scrollLeft) }), Wn(l.scroller, "mousewheel", function(t) { Lt(e, t) }), Wn(l.scroller, "DOMMouseScroll", function(t) { Lt(e, t) }), Wn(l.scrollbarH, "mousedown", t), Wn(l.scrollbarV, "mousedown", t), Wn(l.wrapper, "scroll", function() { l.wrapper.scrollTop = l.wrapper.scrollLeft = 0 }); var s;
            Wn(window, "resize", r), setTimeout(n, 5e3), Wn(l.input, "keyup", ot(e, function(t) { Bn(e, t) || e.options.onKeyEvent && e.options.onKeyEvent(e, _n(t)) || 16 == t.keyCode && (e.doc.sel.shift = !1) })), Wn(l.input, "input", ei(ct, e)), Wn(l.input, "keydown", ot(e, At)), Wn(l.input, "keypress", ot(e, _t)), Wn(l.input, "focus", ei(Ft, e)), Wn(l.input, "blur", ei(Dt, e)), e.options.dragDrop && (Wn(l.scroller, "dragstart", function(t) { wt(e, t) }), Wn(l.scroller, "dragenter", i), Wn(l.scroller, "dragover", i), Wn(l.scroller, "drop", ot(e, xt))), Wn(l.scroller, "paste", function(t) { gt(l, t) || (dt(e), ct(e)) }), Wn(l.input, "paste", function() { e.state.pasteIncoming = !0, ct(e) }), Wn(l.input, "cut", o), Wn(l.input, "copy", o), Di && Wn(l.sizer, "mouseup", function() { document.activeElement == l.input && l.input.blur(), dt(e) }) }

        function gt(e, t) { for (var r = On(t); r != e.wrapper; r = r.parentNode)
                if (!r || r.ignoreEvents || r.parentNode == e.sizer && r != e.mover) return !0 }

        function vt(e, t, r) { var n = e.display; if (!r) { var i = On(t); if (i == n.scrollbarH || i == n.scrollbarH.firstChild || i == n.scrollbarV || i == n.scrollbarV.firstChild || i == n.scrollbarFiller || i == n.gutterFiller) return null } var o, l, s = si(n.lineSpace); try { o = t.clientX, l = t.clientY } catch (t) { return null } return J(e, o - s.left, l - s.top) }

        function yt(e) {
            function t(e) { if (!Gt(v, e)) { if (v = e, "single" == c) return Zt(i.doc, Qt(l, a), e), void 0; if (m = Qt(l, m), g = Qt(l, g), "double" == c) { var t = dr(hn(l, e.line).text, e);
                        qt(e, m) ? Zt(i.doc, t.from, g) : Zt(i.doc, m, t.to) } else "triple" == c && (qt(e, m) ? Zt(i.doc, g, Qt(l, Ut(e.line, 0))) : Zt(i.doc, m, Qt(l, Ut(e.line + 1, 0)))) } }

            function r(e) { var n = ++b,
                    s = vt(i, e, !0); if (s)
                    if (Gt(s, f)) { var a = e.clientY < y.top ? -20 : e.clientY > y.bottom ? 20 : 0;
                        a && setTimeout(ot(i, function() { b == n && (o.scroller.scrollTop += a, r(e)) }), 50) } else { i.state.focused || Ft(i), f = s, t(s); var u = p(o, l);
                        (s.line >= u.to || s.line < u.from) && setTimeout(ot(i, function() { b == n && r(e) }), 150) } }

            function n(e) { b = 1 / 0, Fn(e), dt(i), In(document, "mousemove", x), In(document, "mouseup", w) }
            if (!Bn(this, e)) {
                var i = this,
                    o = i.display,
                    l = i.doc,
                    s = l.sel;
                if (s.shift = e.shiftKey, gt(o, e)) return Ti || (o.scroller.draggable = !1, setTimeout(function() { o.scroller.draggable = !0 }, 100)), void 0;
                if (!bt(i, e)) {
                    var a = vt(i, e);
                    switch (Hn(e)) {
                        case 3:
                            return Gi && Nt.call(i, i, e), void 0;
                        case 2:
                            return a && Zt(i.doc, a), setTimeout(ei(dt, i), 20), Fn(e), void 0 }
                    if (!a) return On(e) == o.scroller && Fn(e), void 0;
                    i.state.focused || Ft(i);
                    var u = +new Date,
                        c = "single";
                    if (ji && ji.time > u - 400 && Gt(ji.pos, a)) c = "triple", Fn(e), setTimeout(ei(dt, i), 20), pr(i, a.line);
                    else if ($i && $i.time > u - 400 && Gt($i.pos, a)) { c = "double", ji = { time: u, pos: a }, Fn(e); var h = dr(hn(l, a.line).text, a);
                        Zt(i.doc, h.from, h.to) } else $i = { time: u, pos: a };
                    var f = a;
                    if (i.options.dragDrop && Eo && !pt(i) && !Gt(s.from, s.to) && !qt(a, s.from) && !qt(s.to, a) && "single" == c) {
                        var d = ot(i, function(t) {
                            Ti && (o.scroller.draggable = !1), i.state.draggingText = !1, In(document, "mouseup", d), In(o.scroller, "drop", d), Math.abs(e.clientX - t.clientX) + Math.abs(e.clientY - t.clientY) < 10 && (Fn(t), Zt(i.doc, a), dt(i))
                        });
                        return Ti && (o.scroller.draggable = !0), i.state.draggingText = d, o.scroller.dragDrop && o.scroller.dragDrop(), Wn(document, "mouseup", d), Wn(o.scroller, "drop", d), void 0
                    }
                    Fn(e), "single" == c && Zt(i.doc, Qt(l, a));
                    var m = s.from,
                        g = s.to,
                        v = a,
                        y = si(o.wrapper),
                        b = 0,
                        x = ot(i, function(e) { Li || Hn(e) ? r(e) : n(e) }),
                        w = ot(i, n);
                    Wn(document, "mousemove", x), Wn(document, "mouseup", w)
                }
            }
        }

        function bt(e, t) { var r = e.display; try { var n = t.clientX,
                    i = t.clientY } catch (t) { return !1 } if (n >= Math.floor(si(r.gutters).right)) return !1; if (Fn(t), !jn(e, "gutterClick")) return !0; var o = si(r.lineDiv); if (i > o.bottom) return !0;
            i -= o.top - r.viewOffset; for (var l = 0; l < e.options.gutters.length; ++l) { var s = r.gutters.childNodes[l]; if (s && si(s).right >= n) { var a = gn(e.doc, i),
                        u = e.options.gutters[l];
                    Rn(e, "gutterClick", e, a, u, t); break } } return !0 }

        function xt(e) { var t = this; if (!(Bn(t, e) || gt(t.display, e) || t.options.onDragEvent && t.options.onDragEvent(t, _n(e)))) { Fn(e), Li && (Qi = +new Date); var r = vt(t, e, !0),
                    n = e.dataTransfer.files; if (r && !pt(t))
                    if (n && n.length && window.FileReader && window.File)
                        for (var i = n.length, o = Array(i), l = 0, s = function(e, n) { var s = new FileReader;
                                s.onload = function() { o[n] = s.result, ++l == i && (r = Qt(t.doc, r), Wt(t.doc, { from: r, to: r, text: Fo(o.join("\n")), origin: "paste" }, "around")) }, s.readAsText(e) }, a = 0; i > a; ++a) s(n[a], a);
                    else { if (t.state.draggingText && !qt(r, t.doc.sel.from) && !qt(t.doc.sel.to, r)) return t.state.draggingText(e), setTimeout(ei(dt, t), 20), void 0; try { var o = e.dataTransfer.getData("Text"); if (o) { var u = t.doc.sel.from,
                                    c = t.doc.sel.to;
                                er(t.doc, r, r), t.state.draggingText && jt(t.doc, "", u, c, "paste"), t.replaceSelection(o, null, "paste"), dt(t), Ft(t) } } catch (e) {} } } }

        function wt(e, t) { if (Li && (!e.state.draggingText || +new Date - Qi < 100)) return zn(t), void 0; if (!Bn(e, t) && !gt(e.display, t)) { var r = e.getSelection(); if (t.dataTransfer.setData("Text", r), t.dataTransfer.setDragImage && !Fi) { var n = ni("img", null, null, "position: fixed; left: 0; top: 0;");
                    _i && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), _i && n.parentNode.removeChild(n) } } }

        function kt(e, t) { Math.abs(e.doc.scrollTop - t) < 2 || (e.doc.scrollTop = t, Ci || b(e, [], t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t), e.display.scrollbarV.scrollTop != t && (e.display.scrollbarV.scrollTop = t), Ci && b(e, []), D(e, 100)) }

        function Ct(e, t, r) {
            (r ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) || (t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth), e.doc.scrollLeft = t, m(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbarH.scrollLeft != t && (e.display.scrollbarH.scrollLeft = t)) }

        function Lt(e, t) { var r = t.wheelDeltaX,
                n = t.wheelDeltaY;
            null == r && t.detail && t.axis == t.HORIZONTAL_AXIS && (r = t.detail), null == n && t.detail && t.axis == t.VERTICAL_AXIS ? n = t.detail : null == n && (n = t.wheelDelta); var i = e.display,
                o = i.scroller; if (r && o.scrollWidth > o.clientWidth || n && o.scrollHeight > o.clientHeight) { if (n && Ii && Ti)
                    for (var l = t.target; l != o; l = l.parentNode)
                        if (l.lineObj) { e.display.currentWheelTarget = l; break }
                if (r && !Ci && !_i && null != Yi) return n && kt(e, Math.max(0, Math.min(o.scrollTop + n * Yi, o.scrollHeight - o.clientHeight))), Ct(e, Math.max(0, Math.min(o.scrollLeft + r * Yi, o.scrollWidth - o.clientWidth))), Fn(t), i.wheelStartX = null, void 0; if (n && null != Yi) { var s = n * Yi,
                        a = e.doc.scrollTop,
                        u = a + i.wrapper.clientHeight;
                    0 > s ? a = Math.max(0, a + s - 50) : u = Math.min(e.doc.height, u + s + 50), b(e, [], { top: a, bottom: u }) }
                20 > Xi && (null == i.wheelStartX ? (i.wheelStartX = o.scrollLeft, i.wheelStartY = o.scrollTop, i.wheelDX = r, i.wheelDY = n, setTimeout(function() { if (null != i.wheelStartX) { var e = o.scrollLeft - i.wheelStartX,
                            t = o.scrollTop - i.wheelStartY,
                            r = t && i.wheelDY && t / i.wheelDY || e && i.wheelDX && e / i.wheelDX;
                        i.wheelStartX = i.wheelStartY = null, r && (Yi = (Yi * Xi + r) / (Xi + 1), ++Xi) } }, 200)) : (i.wheelDX += r, i.wheelDY += n)) } }

        function St(e, t, r) { if ("string" == typeof t && (t = co[t], !t)) return !1;
            e.display.pollingFast && ht(e) && (e.display.pollingFast = !1); var n = e.doc,
                i = n.sel.shift,
                o = !1; try { pt(e) && (e.state.suppressEdits = !0), r && (n.sel.shift = !1), o = t(e) != Lo } finally { n.sel.shift = i, e.state.suppressEdits = !1 } return o }

        function Mt(e) { var t = e.state.keyMaps.slice(0); return e.options.extraKeys && t.push(e.options.extraKeys), t.push(e.options.keyMap), t }

        function Tt(e, t) { var r = yr(e.options.keyMap),
                n = r.auto;
            clearTimeout(Zi), n && !xr(t) && (Zi = setTimeout(function() { yr(e.options.keyMap) == r && (e.options.keyMap = n.call ? n.call(null, e) : n, l(e)) }, 50)); var i = wr(t, !0),
                o = !1; if (!i) return !1; var s = Mt(e); return o = t.shiftKey ? br("Shift-" + i, s, function(t) { return St(e, t, !0) }) || br(i, s, function(t) { return ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) ? St(e, t) : void 0 }) : br(i, s, function(t) { return St(e, t) }), o && (Fn(t), F(e), Mi && (t.oldKeyCode = t.keyCode, t.keyCode = 0), Rn(e, "keyHandled", e, i, t)), o }

        function Et(e, t, r) { var n = br("'" + r + "'", Mt(e), function(t) { return St(e, t, !0) }); return n && (Fn(t), F(e), Rn(e, "keyHandled", e, "'" + r + "'", t)), n }

        function At(e) { var t = this; if (t.state.focused || Ft(t), Li && 27 == e.keyCode && (e.returnValue = !1), !(Bn(t, e) || t.options.onKeyEvent && t.options.onKeyEvent(t, _n(e)))) { var r = e.keyCode;
                t.doc.sel.shift = 16 == r || e.shiftKey; var n = Tt(t, e);
                _i && (eo = n ? r : null, !n && 88 == r && !No && (Ii ? e.metaKey : e.ctrlKey) && t.replaceSelection("")) } }

        function _t(e) { var t = this; if (!(Bn(t, e) || t.options.onKeyEvent && t.options.onKeyEvent(t, _n(e)))) { var r = e.keyCode,
                    n = e.charCode; if (_i && r == eo) return eo = null, Fn(e), void 0; if (!(_i && (!e.which || e.which < 10) || Di) || !Tt(t, e)) { var i = String.fromCharCode(null == n ? r : n);
                    this.options.electricChars && this.doc.mode.electricChars && this.options.smartIndent && !pt(this) && this.doc.mode.electricChars.indexOf(i) > -1 && setTimeout(ot(t, function() { ur(t, t.doc.sel.to.line, "smart") }), 75), Et(t, e, i) || (Li && !Mi && (t.display.inputHasSelection = null), ct(t)) } } }

        function Ft(e) { "nocursor" != e.options.readOnly && (e.state.focused || (Pn(e, "focus", e), e.state.focused = !0, -1 == e.display.wrapper.className.search(/\bCodeMirror-focused\b/) && (e.display.wrapper.className += " CodeMirror-focused"), ft(e, !0)), ut(e), F(e)) }

        function Dt(e) { e.state.focused && (Pn(e, "blur", e), e.state.focused = !1, e.display.wrapper.className = e.display.wrapper.className.replace(" CodeMirror-focused", "")), clearInterval(e.display.blinker), setTimeout(function() { e.state.focused || (e.doc.sel.shift = !1) }, 150) }

        function Nt(e, t) {
            function r() { if (null != i.input.selectionStart) { var e = i.input.value = " " + (Gt(o.from, o.to) ? "" : i.input.value);
                    i.prevInput = " ", i.input.selectionStart = 1, i.input.selectionEnd = e.length } }

            function n() { if (i.inputDiv.style.position = "relative", i.input.style.cssText = a, Mi && (i.scrollbarV.scrollTop = i.scroller.scrollTop = s), ut(e), null != i.input.selectionStart) {
                    (!Li || Mi) && r(), clearTimeout(Ji); var t = 0,
                        n = function() { " " == i.prevInput && 0 == i.input.selectionStart ? ot(e, co.selectAll)(e) : t++ < 10 ? Ji = setTimeout(n, 500) : ft(e) };
                    Ji = setTimeout(n, 200) } } if (!Bn(e, t, "contextmenu")) { var i = e.display,
                    o = e.doc.sel; if (!gt(i, t)) { var l = vt(e, t),
                        s = i.scroller.scrollTop; if (l && !_i) {
                        (Gt(o.from, o.to) || qt(l, o.from) || !qt(l, o.to)) && ot(e, er)(e.doc, l, l); var a = i.input.style.cssText; if (i.inputDiv.style.position = "absolute", i.input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (t.clientY - 5) + "px; left: " + (t.clientX - 5) + "px; z-index: 1000; background: white; outline: none;border-width: 0; outline: none; overflow: hidden; opacity: .05; -ms-opacity: .05; filter: alpha(opacity=5);", dt(e), ft(e, !0), Gt(o.from, o.to) && (i.input.value = i.prevInput = " "), Li && !Mi && r(), Gi) { zn(t); var u = function() { In(window, "mouseup", u), setTimeout(n, 20) };
                            Wn(window, "mouseup", u) } else setTimeout(n, 50) } } } }

        function zt(e, t, r) { if (!qt(t.from, r)) return Qt(e, r); var n = t.text.length - 1 - (t.to.line - t.from.line); if (r.line > t.to.line + n) { var i = r.line - n,
                    o = e.first + e.size - 1; return i > o ? Ut(o, hn(e, o).text.length) : Xt(r, hn(e, i).text.length) } if (r.line == t.to.line + n) return Xt(r, Kn(t.text).length + (1 == t.text.length ? t.from.ch : 0) + hn(e, t.to.line).text.length - t.to.ch); var l = r.line - t.from.line; return Xt(r, t.text[l].length + (l ? 0 : t.from.ch)) }

        function Ot(e, t, r) { if (r && "object" == typeof r) return { anchor: zt(e, t, r.anchor), head: zt(e, t, r.head) }; if ("start" == r) return { anchor: t.from, head: t.from }; var n = to(t); if ("around" == r) return { anchor: t.from, head: n }; if ("end" == r) return { anchor: n, head: n }; var i = function(e) { if (qt(e, t.from)) return e; if (!qt(t.to, e)) return n; var r = e.line + t.text.length - (t.to.line - t.from.line) - 1,
                    i = e.ch; return e.line == t.to.line && (i += n.ch - t.to.ch), Ut(r, i) }; return { anchor: i(e.sel.anchor), head: i(e.sel.head) } }

        function Ht(e, t, r) { var n = { canceled: !1, from: t.from, to: t.to, text: t.text, origin: t.origin, cancel: function() { this.canceled = !0 } }; return r && (n.update = function(t, r, n, i) { t && (this.from = Qt(e, t)), r && (this.to = Qt(e, r)), n && (this.text = n), void 0 !== i && (this.origin = i) }), Pn(e, "beforeChange", e, n), e.cm && Pn(e.cm, "beforeChange", e.cm, n), n.canceled ? null : { from: n.from, to: n.to, text: n.text, origin: n.origin } }

        function Wt(e, t, r, n) { if (e.cm) { if (!e.cm.curOp) return ot(e.cm, Wt)(e, t, r, n); if (e.cm.state.suppressEdits) return } if (!(jn(e, "beforeChange") || e.cm && jn(e.cm, "beforeChange")) || (t = Ht(e, t, !0))) { var i = qi && !n && zr(e, t.from, t.to); if (i) { for (var o = i.length - 1; o >= 1; --o) It(e, { from: i[o].from, to: i[o].to, text: [""] });
                    i.length && It(e, { from: i[0].from, to: i[0].to, text: t.text }, r) } else It(e, t, r) } }

        function It(e, t, r) { var n = Ot(e, t, r);
            kn(e, t, n, e.cm ? e.cm.curOp.id : 0 / 0), Bt(e, t, n, Dr(e, t)); var i = [];
            un(e, function(e, r) { r || -1 != Xn(i, e.history) || (En(e.history, t), i.push(e.history)), Bt(e, t, null, Dr(e, t)) }) }

        function Pt(e, t) { if (!e.cm || !e.cm.state.suppressEdits) { var r = e.history,
                    n = ("undo" == t ? r.done : r.undone).pop(); if (n) { var i = { changes: [], anchorBefore: n.anchorAfter, headBefore: n.headAfter, anchorAfter: n.anchorBefore, headAfter: n.headBefore, generation: r.generation };
                    ("undo" == t ? r.undone : r.done).push(i), r.generation = n.generation || ++r.maxGeneration; for (var o = jn(e, "beforeChange") || e.cm && jn(e.cm, "beforeChange"), l = n.changes.length - 1; l >= 0; --l) { var s = n.changes[l]; if (s.origin = t, o && !Ht(e, s, !1)) return ("undo" == t ? r.done : r.undone).length = 0, void 0;
                        i.changes.push(wn(e, s)); var a = l ? Ot(e, s, null) : { anchor: n.anchorBefore, head: n.headBefore };
                        Bt(e, s, a, Nr(e, s)); var u = [];
                        un(e, function(e, t) { t || -1 != Xn(u, e.history) || (En(e.history, s), u.push(e.history)), Bt(e, s, null, Nr(e, s)) }) } } } }

        function Rt(e, t) {
            function r(e) { return Ut(e.line + t, e.ch) }
            e.first += t, e.cm && at(e.cm, e.first, e.first, t), e.sel.head = r(e.sel.head), e.sel.anchor = r(e.sel.anchor), e.sel.from = r(e.sel.from), e.sel.to = r(e.sel.to) }

        function Bt(e, t, r, n) { if (e.cm && !e.cm.curOp) return ot(e.cm, Bt)(e, t, r, n); if (t.to.line < e.first) return Rt(e, t.text.length - 1 - (t.to.line - t.from.line)), void 0; if (!(t.from.line > e.lastLine())) { if (t.from.line < e.first) { var i = t.text.length - 1 - (e.first - t.from.line);
                    Rt(e, i), t = { from: Ut(e.first, 0), to: Ut(t.to.line + i, t.to.ch), text: [Kn(t.text)], origin: t.origin } } var o = e.lastLine();
                t.to.line > o && (t = { from: t.from, to: Ut(o, hn(e, o).text.length), text: [t.text[0]], origin: t.origin }), t.removed = fn(e, t.from, t.to), r || (r = Ot(e, t, null)), e.cm ? $t(e.cm, t, n, r) : ln(e, t, n, r) } }

        function $t(e, t, r, n) { var o = e.doc,
                l = e.display,
                s = t.from,
                a = t.to,
                u = !1,
                h = s.line;
            e.options.lineWrapping || (h = mn(Ir(o, hn(o, s.line))), o.iter(h, a.line + 1, function(e) { return e == l.maxLine ? (u = !0, !0) : void 0 })), qt(o.sel.head, t.from) || qt(t.to, o.sel.head) || (e.curOp.cursorActivity = !0), ln(o, t, r, n, i(e)), e.options.lineWrapping || (o.iter(h, s.line + t.text.length, function(e) { var t = c(o, e);
                t > l.maxLineLength && (l.maxLine = e, l.maxLineLength = t, l.maxLineChanged = !0, u = !1) }), u && (e.curOp.updateMaxLine = !0)), o.frontier = Math.min(o.frontier, s.line), D(e, 400); var f = t.text.length - (a.line - s.line) - 1; if (at(e, s.line, a.line + 1, f), jn(e, "change")) { var d = { from: s, to: a, text: t.text, removed: t.removed, origin: t.origin }; if (e.curOp.textChanged) { for (var p = e.curOp.textChanged; p.next; p = p.next);
                    p.next = d } else e.curOp.textChanged = d } }

        function jt(e, t, r, n, i) { if (n || (n = r), qt(n, r)) { var o = n;
                n = r, r = o } "string" == typeof t && (t = Fo(t)), Wt(e, { from: r, to: n, text: t, origin: i }, null) }

        function Ut(e, t) { return this instanceof Ut ? (this.line = e, this.ch = t, void 0) : new Ut(e, t) }

        function Gt(e, t) { return e.line == t.line && e.ch == t.ch }

        function qt(e, t) { return e.line < t.line || e.line == t.line && e.ch < t.ch }

        function Vt(e) { return Ut(e.line, e.ch) }

        function Kt(e, t) { return Math.max(e.first, Math.min(t, e.first + e.size - 1)) }

        function Qt(e, t) { if (t.line < e.first) return Ut(e.first, 0); var r = e.first + e.size - 1; return t.line > r ? Ut(r, hn(e, r).text.length) : Xt(t, hn(e, t.line).text.length) }

        function Xt(e, t) { var r = e.ch; return null == r || r > t ? Ut(e.line, t) : 0 > r ? Ut(e.line, 0) : e }

        function Yt(e, t) { return t >= e.first && t < e.first + e.size }

        function Zt(e, t, r, n) { if (e.sel.shift || e.sel.extend) { var i = e.sel.anchor; if (r) { var o = qt(t, i);
                    o != qt(r, i) ? (i = t, t = r) : o != qt(t, r) && (t = r) }
                er(e, i, t, n) } else er(e, t, r || t, n);
            e.cm && (e.cm.curOp.userSelChange = !0) }

        function Jt(e, t, r) { var n = { anchor: t, head: r }; return Pn(e, "beforeSelectionChange", e, n), e.cm && Pn(e.cm, "beforeSelectionChange", e.cm, n), n.anchor = Qt(e, n.anchor), n.head = Qt(e, n.head), n }

        function er(e, t, r, n, i) { if (!i && jn(e, "beforeSelectionChange") || e.cm && jn(e.cm, "beforeSelectionChange")) { var o = Jt(e, t, r);
                r = o.head, t = o.anchor } var l = e.sel; if (l.goalColumn = null, (i || !Gt(t, l.anchor)) && (t = rr(e, t, n, "push" != i)), (i || !Gt(r, l.head)) && (r = rr(e, r, n, "push" != i)), !Gt(l.anchor, t) || !Gt(l.head, r)) { l.anchor = t, l.head = r; var s = qt(r, t);
                l.from = s ? r : t, l.to = s ? t : r, e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = e.cm.curOp.cursorActivity = !0), Rn(e, "cursorActivity", e) } }

        function tr(e) { er(e.doc, e.doc.sel.from, e.doc.sel.to, null, "push") }

        function rr(e, t, r, n) { var i = !1,
                o = t,
                l = r || 1;
            e.cantEdit = !1;
            e: for (;;) { var s = hn(e, o.line); if (s.markedSpans)
                    for (var a = 0; a < s.markedSpans.length; ++a) { var u = s.markedSpans[a],
                            c = u.marker; if ((null == u.from || (c.inclusiveLeft ? u.from <= o.ch : u.from < o.ch)) && (null == u.to || (c.inclusiveRight ? u.to >= o.ch : u.to > o.ch))) { if (n && (Pn(c, "beforeCursorEnter"), c.explicitlyCleared)) { if (s.markedSpans) {--a; continue } break } if (!c.atomic) continue; var h = c.find()[0 > l ? "from" : "to"]; if (Gt(h, o) && (h.ch += l, h.ch < 0 ? h = h.line > e.first ? Qt(e, Ut(h.line - 1)) : null : h.ch > s.text.length && (h = h.line < e.first + e.size - 1 ? Ut(h.line + 1, 0) : null), !h)) { if (i) return n ? (e.cantEdit = !0, Ut(e.first, 0)) : rr(e, t, r, !0);
                                i = !0, h = t, l = -l }
                            o = h; continue e } }
                return o } }

        function nr(e) { var t = ir(e, e.doc.sel.head, e.options.cursorScrollMargin); if (e.state.focused) { var r = e.display,
                    n = si(r.sizer),
                    i = null; if (t.top + n.top < 0 ? i = !0 : t.bottom + n.top > (window.innerHeight || document.documentElement.clientHeight) && (i = !1), null != i && !Oi) { var o = "none" == r.cursor.style.display;
                    o && (r.cursor.style.display = "", r.cursor.style.left = t.left + "px", r.cursor.style.top = t.top - r.viewOffset + "px"), r.cursor.scrollIntoView(i), o && (r.cursor.style.display = "none") } } }

        function ir(e, t, r) { for (null == r && (r = 0);;) { var n = !1,
                    i = Y(e, t),
                    o = lr(e, i.left, i.top - r, i.left, i.bottom + r),
                    l = e.doc.scrollTop,
                    s = e.doc.scrollLeft; if (null != o.scrollTop && (kt(e, o.scrollTop), Math.abs(e.doc.scrollTop - l) > 1 && (n = !0)), null != o.scrollLeft && (Ct(e, o.scrollLeft), Math.abs(e.doc.scrollLeft - s) > 1 && (n = !0)), !n) return i } }

        function or(e, t, r, n, i) { var o = lr(e, t, r, n, i);
            null != o.scrollTop && kt(e, o.scrollTop), null != o.scrollLeft && Ct(e, o.scrollLeft) }

        function lr(e, t, r, n, i) { var o = e.display,
                l = tt(e.display);
            0 > r && (r = 0); var s = o.scroller.clientHeight - Co,
                a = o.scroller.scrollTop,
                u = {},
                c = e.doc.height + W(o),
                h = l > r,
                f = i > c - l; if (a > r) u.scrollTop = h ? 0 : r;
            else if (i > a + s) { var d = Math.min(r, (f ? c : i) - s);
                d != a && (u.scrollTop = d) } var p = o.scroller.clientWidth - Co,
                m = o.scroller.scrollLeft;
            t += o.gutters.offsetWidth, n += o.gutters.offsetWidth; var g = o.gutters.offsetWidth,
                v = g + 10 > t; return m + g > t || v ? (v && (t = 0), u.scrollLeft = Math.max(0, t - 10 - g)) : n > p + m - 3 && (u.scrollLeft = n + 10 - p), u }

        function sr(e, t, r) { e.curOp.updateScrollPos = { scrollLeft: null == t ? e.doc.scrollLeft : t, scrollTop: null == r ? e.doc.scrollTop : r } }

        function ar(e, t, r) { var n = e.curOp.updateScrollPos || (e.curOp.updateScrollPos = { scrollLeft: e.doc.scrollLeft, scrollTop: e.doc.scrollTop }),
                i = e.display.scroller;
            n.scrollTop = Math.max(0, Math.min(i.scrollHeight - i.clientHeight, n.scrollTop + r)), n.scrollLeft = Math.max(0, Math.min(i.scrollWidth - i.clientWidth, n.scrollLeft + t)) }

        function ur(e, t, r, n) { var i = e.doc; if (null == r && (r = "add"), "smart" == r)
                if (e.doc.mode.indent) var o = O(e, t);
                else r = "prev";
            var l, s = e.options.tabSize,
                a = hn(i, t),
                u = qn(a.text, null, s),
                c = a.text.match(/^\s*/)[0]; if ("smart" == r && (l = e.doc.mode.indent(o, a.text.slice(c.length), a.text), l == Lo)) { if (!n) return;
                r = "prev" } "prev" == r ? l = t > i.first ? qn(hn(i, t - 1).text, null, s) : 0 : "add" == r ? l = u + e.options.indentUnit : "subtract" == r ? l = u - e.options.indentUnit : "number" == typeof r && (l = u + r), l = Math.max(0, l); var h = "",
                f = 0; if (e.options.indentWithTabs)
                for (var d = Math.floor(l / s); d; --d) f += s, h += "	";
            l > f && (h += Vn(l - f)), h != c && jt(e.doc, h, Ut(t, 0), Ut(t, c.length), "+input"), a.stateAfter = null }

        function cr(e, t, r) { var n = t,
                i = t,
                o = e.doc; return "number" == typeof t ? i = hn(o, Kt(o, t)) : n = mn(t), null == n ? null : r(i, n) ? (at(e, n, n + 1), i) : null }

        function hr(e, t, r, n, i) {
            function o() { var t = s + r; return t < e.first || t >= e.first + e.size ? h = !1 : (s = t, c = hn(e, t)) }

            function l(e) { var t = (i ? wi : ki)(c, a, r, !0); if (null == t) { if (e || !o()) return h = !1;
                    a = i ? (0 > r ? mi : pi)(c) : 0 > r ? c.text.length : 0 } else a = t; return !0 } var s = t.line,
                a = t.ch,
                u = r,
                c = hn(e, s),
                h = !0; if ("char" == n) l();
            else if ("column" == n) l(!0);
            else if ("word" == n || "group" == n)
                for (var f = null, d = "group" == n, p = !0; !(0 > r) || l(!p); p = !1) { var m = c.text.charAt(a) || "\n",
                        g = ti(m) ? "w" : d ? /\s/.test(m) ? null : "p" : null; if (f && f != g) { 0 > r && (r = 1, l()); break } if (g && (f = g), r > 0 && !l(!p)) break }
            var v = rr(e, Ut(s, a), u, !0); return h || (v.hitSide = !0), v }

        function fr(e, t, r, n) { var i, o = e.doc,
                l = t.left; if ("page" == n) { var s = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
                i = t.top + r * (s - (0 > r ? 1.5 : .5) * tt(e.display)) } else "line" == n && (i = r > 0 ? t.bottom + 3 : t.top - 3); for (;;) { var a = J(e, l, i); if (!a.outside) break; if (0 > r ? 0 >= i : i >= o.height) { a.hitSide = !0; break }
                i += 5 * r } return a }

        function dr(e, t) { var r = t.ch,
                n = t.ch; if (e) {
                (t.xRel < 0 || n == e.length) && r ? --r : ++n; for (var i = e.charAt(r), o = ti(i) ? ti : /\s/.test(i) ? function(e) { return /\s/.test(e) } : function(e) { return !/\s/.test(e) && !ti(e) }; r > 0 && o(e.charAt(r - 1));) --r; for (; n < e.length && o(e.charAt(n));) ++n } return { from: Ut(t.line, r), to: Ut(t.line, n) } }

        function pr(e, t) { Zt(e.doc, Ut(t, 0), Qt(e.doc, Ut(t + 1, 0))) }

        function mr(t, r, n, i) { e.defaults[t] = r, n && (ro[t] = i ? function(e, t, r) { r != io && n(e, t, r) } : n) }

        function gr(e, t) { if (t === !0) return t; if (e.copyState) return e.copyState(t); var r = {}; for (var n in t) { var i = t[n];
                i instanceof Array && (i = i.concat([])), r[n] = i } return r }

        function vr(e, t, r) { return e.startState ? e.startState(t, r) : !0 }

        function yr(e) { return "string" == typeof e ? ho[e] : e }

        function br(e, t, r) {
            function n(t) { t = yr(t); var i = t[e]; if (i === !1) return "stop"; if (null != i && r(i)) return !0; if (t.nofallthrough) return "stop"; var o = t.fallthrough; if (null == o) return !1; if ("[object Array]" != Object.prototype.toString.call(o)) return n(o); for (var l = 0, s = o.length; s > l; ++l) { var a = n(o[l]); if (a) return a } return !1 } for (var i = 0; i < t.length; ++i) { var o = n(t[i]); if (o) return "stop" != o } }

        function xr(e) { var t = zo[e.keyCode]; return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t }

        function wr(e, t) { if (_i && 34 == e.keyCode && e["char"]) return !1; var r = zo[e.keyCode]; return null == r || e.altGraphKey ? !1 : (e.altKey && (r = "Alt-" + r), (Ui ? e.metaKey : e.ctrlKey) && (r = "Ctrl-" + r), (Ui ? e.ctrlKey : e.metaKey) && (r = "Cmd-" + r), !t && e.shiftKey && (r = "Shift-" + r), r) }

        function kr(e, t) { this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0 }

        function Cr(e, t) { this.lines = [], this.type = t, this.doc = e }

        function Lr(e, t, r, n, i) { if (n && n.shared) return Mr(e, t, r, n, i); if (e.cm && !e.cm.curOp) return ot(e.cm, Lr)(e, t, r, n, i); var o = new Cr(e, i); if ("range" == i && !qt(t, r)) return o;
            n && Zn(n, o), o.replacedWith && (o.collapsed = !0, o.replacedWith = ni("span", [o.replacedWith], "CodeMirror-widget"), n.handleMouseEvents || (o.replacedWith.ignoreEvents = !0)), o.collapsed && (Vi = !0), o.addToHistory && kn(e, { from: t, to: r, origin: "markText" }, { head: e.sel.head, anchor: e.sel.anchor }, 0 / 0); var l, s, a, u = t.line,
                c = 0,
                h = e.cm; if (e.iter(u, r.line + 1, function(n) { h && o.collapsed && !h.options.lineWrapping && Ir(e, n) == h.display.maxLine && (a = !0); var i = { from: null, to: null, marker: o };
                    c += n.text.length, u == t.line && (i.from = t.ch, c -= t.ch), u == r.line && (i.to = r.ch, c -= n.text.length - r.ch), o.collapsed && (u == r.line && (s = Or(n, r.ch)), u == t.line ? l = Or(n, t.ch) : pn(n, 0)), Ar(n, i), ++u }), o.collapsed && e.iter(t.line, r.line + 1, function(t) { Pr(e, t) && pn(t, 0) }), o.clearOnEnter && Wn(o, "beforeCursorEnter", function() { o.clear() }), o.readOnly && (qi = !0, (e.history.done.length || e.history.undone.length) && e.clearHistory()), o.collapsed) { if (l != s) throw new Error("Inserting collapsed marker overlapping an existing one");
                o.size = c, o.atomic = !0 } return h && (a && (h.curOp.updateMaxLine = !0), (o.className || o.title || o.startStyle || o.endStyle || o.collapsed) && at(h, t.line, r.line + 1), o.atomic && tr(h)), o }

        function Sr(e, t) { this.markers = e, this.primary = t; for (var r = 0, n = this; r < e.length; ++r) e[r].parent = this, Wn(e[r], "clear", function() { n.clear() }) }

        function Mr(e, t, r, n, i) { n = Zn(n), n.shared = !1; var o = [Lr(e, t, r, n, i)],
                l = o[0],
                s = n.replacedWith; return un(e, function(e) { s && (n.replacedWith = s.cloneNode(!0)), o.push(Lr(e, Qt(e, t), Qt(e, r), n, i)); for (var a = 0; a < e.linked.length; ++a)
                    if (e.linked[a].isParent) return;
                l = Kn(o) }), new Sr(o, l) }

        function Tr(e, t) { if (e)
                for (var r = 0; r < e.length; ++r) { var n = e[r]; if (n.marker == t) return n } }

        function Er(e, t) { for (var r, n = 0; n < e.length; ++n) e[n] != t && (r || (r = [])).push(e[n]); return r }

        function Ar(e, t) { e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], t.marker.attachLine(e) }

        function _r(e, t, r) { if (e)
                for (var n, i = 0; i < e.length; ++i) { var o = e[i],
                        l = o.marker,
                        s = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t); if (s || "bookmark" == l.type && o.from == t && (!r || !o.marker.insertLeft)) { var a = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t);
                        (n || (n = [])).push({ from: o.from, to: a ? null : o.to, marker: l }) } }
            return n }

        function Fr(e, t, r) { if (e)
                for (var n, i = 0; i < e.length; ++i) { var o = e[i],
                        l = o.marker,
                        s = null == o.to || (l.inclusiveRight ? o.to >= t : o.to > t); if (s || "bookmark" == l.type && o.from == t && (!r || o.marker.insertLeft)) { var a = null == o.from || (l.inclusiveLeft ? o.from <= t : o.from < t);
                        (n || (n = [])).push({ from: a ? null : o.from - t, to: null == o.to ? null : o.to - t, marker: l }) } }
            return n }

        function Dr(e, t) { var r = Yt(e, t.from.line) && hn(e, t.from.line).markedSpans,
                n = Yt(e, t.to.line) && hn(e, t.to.line).markedSpans; if (!r && !n) return null; var i = t.from.ch,
                o = t.to.ch,
                l = Gt(t.from, t.to),
                s = _r(r, i, l),
                a = Fr(n, o, l),
                u = 1 == t.text.length,
                c = Kn(t.text).length + (u ? i : 0); if (s)
                for (var h = 0; h < s.length; ++h) { var f = s[h]; if (null == f.to) { var d = Tr(a, f.marker);
                        d ? u && (f.to = null == d.to ? null : d.to + c) : f.to = i } }
            if (a)
                for (var h = 0; h < a.length; ++h) { var f = a[h]; if (null != f.to && (f.to += c), null == f.from) { var d = Tr(s, f.marker);
                        d || (f.from = c, u && (s || (s = [])).push(f)) } else f.from += c, u && (s || (s = [])).push(f) }
            if (u && s) { for (var h = 0; h < s.length; ++h) null != s[h].from && s[h].from == s[h].to && "bookmark" != s[h].marker.type && s.splice(h--, 1);
                s.length || (s = null) } var p = [s]; if (!u) { var m, g = t.text.length - 2; if (g > 0 && s)
                    for (var h = 0; h < s.length; ++h) null == s[h].to && (m || (m = [])).push({ from: null, to: null, marker: s[h].marker }); for (var h = 0; g > h; ++h) p.push(m);
                p.push(a) } return p }

        function Nr(e, t) { var r = Ln(e, t),
                n = Dr(e, t); if (!r) return n; if (!n) return r; for (var i = 0; i < r.length; ++i) { var o = r[i],
                    l = n[i]; if (o && l) e: for (var s = 0; s < l.length; ++s) { for (var a = l[s], u = 0; u < o.length; ++u)
                        if (o[u].marker == a.marker) continue e;
                    o.push(a) } else l && (r[i] = l) } return r }

        function zr(e, t, r) { var n = null; if (e.iter(t.line, r.line + 1, function(e) { if (e.markedSpans)
                        for (var t = 0; t < e.markedSpans.length; ++t) { var r = e.markedSpans[t].marker;!r.readOnly || n && -1 != Xn(n, r) || (n || (n = [])).push(r) } }), !n) return null; for (var i = [{ from: t, to: r }], o = 0; o < n.length; ++o)
                for (var l = n[o], s = l.find(), a = 0; a < i.length; ++a) { var u = i[a]; if (!qt(u.to, s.from) && !qt(s.to, u.from)) { var c = [a, 1];
                        (qt(u.from, s.from) || !l.inclusiveLeft && Gt(u.from, s.from)) && c.push({ from: u.from, to: s.from }), (qt(s.to, u.to) || !l.inclusiveRight && Gt(u.to, s.to)) && c.push({ from: s.to, to: u.to }), i.splice.apply(i, c), a += c.length - 1 } }
            return i }

        function Or(e, t) { var r, n = Vi && e.markedSpans; if (n)
                for (var i, o = 0; o < n.length; ++o) i = n[o], i.marker.collapsed && (null == i.from || i.from < t) && (null == i.to || i.to > t) && (!r || r.width < i.marker.width) && (r = i.marker); return r }

        function Hr(e) { return Or(e, -1) }

        function Wr(e) { return Or(e, e.text.length + 1) }

        function Ir(e, t) { for (var r; r = Hr(t);) t = hn(e, r.find().from.line); return t }

        function Pr(e, t) { var r = Vi && t.markedSpans; if (r)
                for (var n, i = 0; i < r.length; ++i)
                    if (n = r[i], n.marker.collapsed) { if (null == n.from) return !0; if (!n.marker.replacedWith && 0 == n.from && n.marker.inclusiveLeft && Rr(e, t, n)) return !0 } }

        function Rr(e, t, r) { if (null == r.to) { var n = r.marker.find().to,
                    i = hn(e, n.line); return Rr(e, i, Tr(i.markedSpans, r.marker)) } if (r.marker.inclusiveRight && r.to == t.text.length) return !0; for (var o, l = 0; l < t.markedSpans.length; ++l)
                if (o = t.markedSpans[l], o.marker.collapsed && !o.marker.replacedWith && o.from == r.to && (o.marker.inclusiveLeft || r.marker.inclusiveRight) && Rr(e, t, o)) return !0 }

        function Br(e) { var t = e.markedSpans; if (t) { for (var r = 0; r < t.length; ++r) t[r].marker.detachLine(e);
                e.markedSpans = null } }

        function $r(e, t) { if (t) { for (var r = 0; r < t.length; ++r) t[r].marker.attachLine(e);
                e.markedSpans = t } }

        function jr(e) { return function() { var t = !this.cm.curOp;
                t && nt(this.cm); try { var r = e.apply(this, arguments) } finally { t && it(this.cm) } return r } }

        function Ur(e) { return null != e.height ? e.height : (e.node.parentNode && 1 == e.node.parentNode.nodeType || oi(e.cm.display.measure, ni("div", [e.node], null, "position: relative")), e.height = e.node.offsetHeight) }

        function Gr(e, t, r, n) { var i = new fo(e, r, n); return i.noHScroll && (e.display.alignWidgets = !0), cr(e, t, function(t) { var r = t.widgets || (t.widgets = []); if (null == i.insertAt ? r.push(i) : r.splice(Math.min(r.length - 1, Math.max(0, i.insertAt)), 0, i), i.line = t, !Pr(e.doc, t) || i.showIfHidden) { var n = vn(e, t) < e.doc.scrollTop;
                    pn(t, t.height + Ur(i)), n && ar(e, 0, i.height) } return !0 }), i }

        function qr(e, t, r, n) { e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), null != e.order && (e.order = null), Br(e), $r(e, r); var i = n ? n(e) : 1;
            i != e.height && pn(e, i) }

        function Vr(e) { e.parent = null, Br(e) }

        function Kr(e, t, r, n, i) { var o = r.flattenSpans;
            null == o && (o = e.options.flattenSpans); var l, s = 0,
                a = null,
                u = new kr(t, e.options.tabSize); for ("" == t && r.blankLine && r.blankLine(n); !u.eol();) u.pos > e.options.maxHighlightLength ? (o = !1, u.pos = Math.min(t.length, u.start + 5e4), l = null) : l = r.token(u, n), o && a == l || (s < u.start && i(u.start, a), s = u.start, a = l), u.start = u.pos;
            s < u.pos && i(u.pos, a) }

        function Qr(e, t, r) { var n = [e.state.modeGen];
            Kr(e, t.text, e.doc.mode, r, function(e, t) { n.push(e, t) }); for (var i = 0; i < e.state.overlays.length; ++i) { var o = e.state.overlays[i],
                    l = 1,
                    s = 0;
                Kr(e, t.text, o.mode, !0, function(e, t) { for (var r = l; e > s;) { var i = n[l];
                        i > e && n.splice(l, 1, e, n[l + 1], i), l += 2, s = Math.min(e, i) } if (t)
                        if (o.opaque) n.splice(r, l - r, e, t), l = r + 2;
                        else
                            for (; l > r; r += 2) { var a = n[r + 1];
                                n[r + 1] = a ? a + " " + t : t } }) } return n }

        function Xr(e, t) { return t.styles && t.styles[0] == e.state.modeGen || (t.styles = Qr(e, t, t.stateAfter = O(e, mn(t)))), t.styles }

        function Yr(e, t, r) { var n = e.doc.mode,
                i = new kr(t.text, e.options.tabSize); for ("" == t.text && n.blankLine && n.blankLine(r); !i.eol() && i.pos <= e.options.maxHighlightLength;) n.token(i, r), i.start = i.pos }

        function Zr(e) { return e ? mo[e] || (mo[e] = "cm-" + e.replace(/ +/g, " cm-")) : null }

        function Jr(e, t, r, n) { for (var i, o = t, l = !0; i = Hr(o);) o = hn(e.doc, i.find().from.line); var s = { pre: ni("pre"), col: 0, pos: 0, measure: null, measuredSomething: !1, cm: e, copyWidgets: n };
            o.textClass && (s.pre.className = o.textClass);
            do { o.text && (l = !1), s.measure = o == t && r, s.pos = 0, s.addToken = s.measure ? tn : en, (Li || Ti) && e.getOption("lineWrapping") && (s.addToken = rn(s.addToken)); var a = on(o, s, Xr(e, o));
                r && o == t && !s.measuredSomething && (r[0] = s.pre.appendChild(ci(e.display.measure)), s.measuredSomething = !0), a && (o = hn(e.doc, a.to.line)) } while (a);!r || s.measuredSomething || r[0] || (r[0] = s.pre.appendChild(l ? ni("span", " ") : ci(e.display.measure))), s.pre.firstChild || Pr(e.doc, t) || s.pre.appendChild(document.createTextNode(" ")); var u; if (r && Li && (u = yn(o))) { var c = u.length - 1;
                u[c].from == u[c].to && --c; var h = u[c],
                    f = u[c - 1]; if (h.from + 1 == h.to && f && h.level < f.level) { var d = r[s.pos - 1];
                    d && d.parentNode.insertBefore(d.measureRight = ci(e.display.measure), d.nextSibling) } } return Pn(e, "renderLine", e, t, s.pre), s.pre }

        function en(e, t, r, n, i, o) { if (t) { if (go.test(t))
                    for (var l = document.createDocumentFragment(), s = 0;;) { go.lastIndex = s; var a = go.exec(t),
                            u = a ? a.index - s : t.length - s; if (u && (l.appendChild(document.createTextNode(t.slice(s, s + u))), e.col += u), !a) break; if (s += u + 1, "	" == a[0]) { var c = e.cm.options.tabSize,
                                h = c - e.col % c;
                            l.appendChild(ni("span", Vn(h), "cm-tab")), e.col += h } else { var f = ni("span", "•", "cm-invalidchar");
                            f.title = "\\u" + a[0].charCodeAt(0).toString(16), l.appendChild(f), e.col += 1 } } else { e.col += t.length; var l = document.createTextNode(t) }
                if (r || n || i || e.measure) { var d = r || "";
                    n && (d += n), i && (d += i); var f = ni("span", [l], d); return o && (f.title = o), e.pre.appendChild(f) }
                e.pre.appendChild(l) } }

        function tn(e, t, r, n, i) { for (var o = e.cm.options.lineWrapping, l = 0; l < t.length; ++l) { var s = t.charAt(l),
                    a = 0 == l;
                s >= "�" && "�" > s && l < t.length - 1 ? (s = t.slice(l, l + 2), ++l) : l && o && ai(t, l) && e.pre.appendChild(ni("wbr")); var u = e.measure[e.pos],
                    c = e.measure[e.pos] = en(e, s, r, a && n, l == t.length - 1 && i);
                u && (c.leftSide = u.leftSide || u), Li && o && " " == s && l && !/\s/.test(t.charAt(l - 1)) && l < t.length - 1 && !/\s/.test(t.charAt(l + 1)) && (c.style.whiteSpace = "normal"), e.pos += s.length }
            t.length && (e.measuredSomething = !0) }

        function rn(e) {
            function t(e) { for (var t = " ", r = 0; r < e.length - 2; ++r) t += r % 2 ? " " : " "; return t += " " } return function(r, n, i, o, l, s) { return e(r, n.replace(/ {3,}/, t), i, o, l, s) } }

        function nn(e, t, r, n) { var i = !n && r.replacedWith; if (i && (e.copyWidgets && (i = i.cloneNode(!0)), e.pre.appendChild(i), e.measure)) { if (t) e.measure[e.pos] = i;
                else { var o = e.measure[e.pos] = ci(e.cm.display.measure); "bookmark" != r.type || r.insertLeft ? e.pre.insertBefore(o, i) : e.pre.appendChild(o) }
                e.measuredSomething = !0 }
            e.pos += t }

        function on(e, t, r) { var n = e.markedSpans,
                i = e.text,
                o = 0; if (n)
                for (var l, s, a, u, c, h, f = i.length, d = 0, p = 1, m = "", g = 0;;) { if (g == d) { s = a = u = c = "", h = null, g = 1 / 0; for (var v = null, y = 0; y < n.length; ++y) { var b = n[y],
                                x = b.marker;
                            b.from <= d && (null == b.to || b.to > d) ? (null != b.to && g > b.to && (g = b.to, a = ""), x.className && (s += " " + x.className), x.startStyle && b.from == d && (u += " " + x.startStyle), x.endStyle && b.to == g && (a += " " + x.endStyle), x.title && !c && (c = x.title), x.collapsed && (!h || h.marker.size < x.size) && (h = b)) : b.from > d && g > b.from && (g = b.from), "bookmark" == x.type && b.from == d && x.replacedWith && (v = x) } if (h && (h.from || 0) == d && (nn(t, (null == h.to ? f : h.to) - d, h.marker, null == h.from), null == h.to)) return h.marker.find();
                        v && !h && nn(t, 0, v) } if (d >= f) break; for (var w = Math.min(f, g);;) { if (m) { var k = d + m.length; if (!h) { var C = k > w ? m.slice(0, w - d) : m;
                                t.addToken(t, C, l ? l + s : s, u, d + C.length == g ? a : "", c) } if (k >= w) { m = m.slice(w - d), d = w; break }
                            d = k, u = "" }
                        m = i.slice(o, o = r[p++]), l = Zr(r[p++]) } } else
                    for (var p = 1; p < r.length; p += 2) t.addToken(t, i.slice(o, o = r[p]), Zr(r[p + 1])) }

        function ln(e, t, r, n, i) {
            function o(e) { return r ? r[e] : null }

            function l(e, r, n) { qr(e, r, n, i), Rn(e, "change", e, t) } var s = t.from,
                a = t.to,
                u = t.text,
                c = hn(e, s.line),
                h = hn(e, a.line),
                f = Kn(u),
                d = o(u.length - 1),
                p = a.line - s.line; if (0 == s.ch && 0 == a.ch && "" == f) { for (var m = 0, g = u.length - 1, v = []; g > m; ++m) v.push(new po(u[m], o(m), i));
                l(h, h.text, d), p && e.remove(s.line, p), v.length && e.insert(s.line, v) } else if (c == h)
                if (1 == u.length) l(c, c.text.slice(0, s.ch) + f + c.text.slice(a.ch), d);
                else { for (var v = [], m = 1, g = u.length - 1; g > m; ++m) v.push(new po(u[m], o(m), i));
                    v.push(new po(f + c.text.slice(a.ch), d, i)), l(c, c.text.slice(0, s.ch) + u[0], o(0)), e.insert(s.line + 1, v) }
            else if (1 == u.length) l(c, c.text.slice(0, s.ch) + u[0] + h.text.slice(a.ch), o(0)), e.remove(s.line + 1, p);
            else { l(c, c.text.slice(0, s.ch) + u[0], o(0)), l(h, f + h.text.slice(a.ch), d); for (var m = 1, g = u.length - 1, v = []; g > m; ++m) v.push(new po(u[m], o(m), i));
                p > 1 && e.remove(s.line + 1, p - 1), e.insert(s.line + 1, v) }
            Rn(e, "change", e, t), er(e, n.anchor, n.head, null, !0) }

        function sn(e) { this.lines = e, this.parent = null; for (var t = 0, r = e.length, n = 0; r > t; ++t) e[t].parent = this, n += e[t].height;
            this.height = n }

        function an(e) { this.children = e; for (var t = 0, r = 0, n = 0, i = e.length; i > n; ++n) { var o = e[n];
                t += o.chunkSize(), r += o.height, o.parent = this }
            this.size = t, this.height = r, this.parent = null }

        function un(e, t, r) {
            function n(e, i, o) { if (e.linked)
                    for (var l = 0; l < e.linked.length; ++l) { var s = e.linked[l]; if (s.doc != i) { var a = o && s.sharedHist;
                            (!r || a) && (t(s.doc, a), n(s.doc, e, a)) } } }
            n(e, null, !0) }

        function cn(e, t) { if (t.cm) throw new Error("This document is already in use.");
            e.doc = t, t.cm = e, o(e), r(e), e.options.lineWrapping || h(e), e.options.mode = t.modeOption, at(e) }

        function hn(e, t) { for (t -= e.first; !e.lines;)
                for (var r = 0;; ++r) { var n = e.children[r],
                        i = n.chunkSize(); if (i > t) { e = n; break }
                    t -= i }
            return e.lines[t] }

        function fn(e, t, r) { var n = [],
                i = t.line; return e.iter(t.line, r.line + 1, function(e) { var o = e.text;
                i == r.line && (o = o.slice(0, r.ch)), i == t.line && (o = o.slice(t.ch)), n.push(o), ++i }), n }

        function dn(e, t, r) { var n = []; return e.iter(t, r, function(e) { n.push(e.text) }), n }

        function pn(e, t) { for (var r = t - e.height, n = e; n; n = n.parent) n.height += r }

        function mn(e) {
            if (null == e.parent) return null;
            for (var t = e.parent, r = Xn(t.lines, e), n = t.parent; n; t = n, n = n.parent)
                for (var i = 0; n.children[i] != t; ++i) r += n.children[i].chunkSize();
            return r + t.first
        }

        function gn(e, t) { var r = e.first;
            e: do { for (var n = 0, i = e.children.length; i > n; ++n) { var o = e.children[n],
                        l = o.height; if (l > t) { e = o; continue e }
                    t -= l, r += o.chunkSize() } return r } while (!e.lines); for (var n = 0, i = e.lines.length; i > n; ++n) { var s = e.lines[n],
                    a = s.height; if (a > t) break;
                t -= a } return r + n }

        function vn(e, t) { t = Ir(e.doc, t); for (var r = 0, n = t.parent, i = 0; i < n.lines.length; ++i) { var o = n.lines[i]; if (o == t) break;
                r += o.height } for (var l = n.parent; l; n = l, l = n.parent)
                for (var i = 0; i < l.children.length; ++i) { var s = l.children[i]; if (s == n) break;
                    r += s.height }
            return r }

        function yn(e) { var t = e.order; return null == t && (t = e.order = Ho(e.text)), t }

        function bn(e) { return { done: [], undone: [], undoDepth: 1 / 0, lastTime: 0, lastOp: null, lastOrigin: null, generation: e || 1, maxGeneration: e || 1 } }

        function xn(e, t, r, n) { var i = t["spans_" + e.id],
                o = 0;
            e.iter(Math.max(e.first, r), Math.min(e.first + e.size, n), function(r) { r.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = r.markedSpans), ++o }) }

        function wn(e, t) { var r = { line: t.from.line, ch: t.from.ch },
                n = { from: r, to: to(t), text: fn(e, t.from, t.to) }; return xn(e, n, t.from.line, t.to.line + 1), un(e, function(e) { xn(e, n, t.from.line, t.to.line + 1) }, !0), n }

        function kn(e, t, r, n) { var i = e.history;
            i.undone.length = 0; var o = +new Date,
                l = Kn(i.done); if (l && (i.lastOp == n || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastTime > o - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0)))) { var s = Kn(l.changes);
                Gt(t.from, t.to) && Gt(t.from, s.to) ? s.to = to(t) : l.changes.push(wn(e, t)), l.anchorAfter = r.anchor, l.headAfter = r.head } else
                for (l = { changes: [wn(e, t)], generation: i.generation, anchorBefore: e.sel.anchor, headBefore: e.sel.head, anchorAfter: r.anchor, headAfter: r.head }, i.done.push(l), i.generation = ++i.maxGeneration; i.done.length > i.undoDepth;) i.done.shift();
            i.lastTime = o, i.lastOp = n, i.lastOrigin = t.origin }

        function Cn(e) { if (!e) return null; for (var t, r = 0; r < e.length; ++r) e[r].marker.explicitlyCleared ? t || (t = e.slice(0, r)) : t && t.push(e[r]); return t ? t.length ? t : null : e }

        function Ln(e, t) { var r = t["spans_" + e.id]; if (!r) return null; for (var n = 0, i = []; n < t.text.length; ++n) i.push(Cn(r[n])); return i }

        function Sn(e, t) { for (var r = 0, n = []; r < e.length; ++r) { var i = e[r],
                    o = i.changes,
                    l = [];
                n.push({ changes: l, anchorBefore: i.anchorBefore, headBefore: i.headBefore, anchorAfter: i.anchorAfter, headAfter: i.headAfter }); for (var s = 0; s < o.length; ++s) { var a, u = o[s]; if (l.push({ from: u.from, to: u.to, text: u.text }), t)
                        for (var c in u)(a = c.match(/^spans_(\d+)$/)) && Xn(t, Number(a[1])) > -1 && (Kn(l)[c] = u[c], delete u[c]) } } return n }

        function Mn(e, t, r, n) { r < e.line ? e.line += n : t < e.line && (e.line = t, e.ch = 0) }

        function Tn(e, t, r, n) { for (var i = 0; i < e.length; ++i) { for (var o = e[i], l = !0, s = 0; s < o.changes.length; ++s) { var a = o.changes[s]; if (o.copied || (a.from = Vt(a.from), a.to = Vt(a.to)), r < a.from.line) a.from.line += n, a.to.line += n;
                    else if (t <= a.to.line) { l = !1; break } }
                o.copied || (o.anchorBefore = Vt(o.anchorBefore), o.headBefore = Vt(o.headBefore), o.anchorAfter = Vt(o.anchorAfter), o.readAfter = Vt(o.headAfter), o.copied = !0), l ? (Mn(o.anchorBefore), Mn(o.headBefore), Mn(o.anchorAfter), Mn(o.headAfter)) : (e.splice(0, i + 1), i = 0) } }

        function En(e, t) { var r = t.from.line,
                n = t.to.line,
                i = t.text.length - (n - r) - 1;
            Tn(e.done, r, n, i), Tn(e.undone, r, n, i) }

        function An() { zn(this) }

        function _n(e) { return e.stop || (e.stop = An), e }

        function Fn(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1 }

        function Dn(e) { e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0 }

        function Nn(e) { return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue }

        function zn(e) { Fn(e), Dn(e) }

        function On(e) { return e.target || e.srcElement }

        function Hn(e) { var t = e.which; return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)), Ii && e.ctrlKey && 1 == t && (t = 3), t }

        function Wn(e, t, r) { if (e.addEventListener) e.addEventListener(t, r, !1);
            else if (e.attachEvent) e.attachEvent("on" + t, r);
            else { var n = e._handlers || (e._handlers = {}),
                    i = n[t] || (n[t] = []);
                i.push(r) } }

        function In(e, t, r) { if (e.removeEventListener) e.removeEventListener(t, r, !1);
            else if (e.detachEvent) e.detachEvent("on" + t, r);
            else { var n = e._handlers && e._handlers[t]; if (!n) return; for (var i = 0; i < n.length; ++i)
                    if (n[i] == r) { n.splice(i, 1); break } } }

        function Pn(e, t) { var r = e._handlers && e._handlers[t]; if (r)
                for (var n = Array.prototype.slice.call(arguments, 2), i = 0; i < r.length; ++i) r[i].apply(null, n) }

        function Rn(e, t) {
            function r(e) { return function() { e.apply(null, i) } } var n = e._handlers && e._handlers[t]; if (n) { var i = Array.prototype.slice.call(arguments, 2);
                wo || (++ko, wo = [], setTimeout($n, 0)); for (var o = 0; o < n.length; ++o) wo.push(r(n[o])) } }

        function Bn(e, t, r) { return Pn(e, r || t.type, e, t), Nn(t) || t.codemirrorIgnore }

        function $n() {--ko; var e = wo;
            wo = null; for (var t = 0; t < e.length; ++t) e[t]() }

        function jn(e, t) { var r = e._handlers && e._handlers[t]; return r && r.length > 0 }

        function Un(e) { e.prototype.on = function(e, t) { Wn(this, e, t) }, e.prototype.off = function(e, t) { In(this, e, t) } }

        function Gn() { this.id = null }

        function qn(e, t, r, n, i) { null == t && (t = e.search(/[^\s\u00a0]/), -1 == t && (t = e.length)); for (var o = n || 0, l = i || 0; t > o; ++o) "	" == e.charAt(o) ? l += r - l % r : ++l; return l }

        function Vn(e) { for (; So.length <= e;) So.push(Kn(So) + " "); return So[e] }

        function Kn(e) { return e[e.length - 1] }

        function Qn(e) { if (Hi) e.selectionStart = 0, e.selectionEnd = e.value.length;
            else try { e.select() } catch (t) {} }

        function Xn(e, t) { if (e.indexOf) return e.indexOf(t); for (var r = 0, n = e.length; n > r; ++r)
                if (e[r] == t) return r;
            return -1 }

        function Yn(e, t) {
            function r() {}
            r.prototype = e; var n = new r; return t && Zn(t, n), n }

        function Zn(e, t) { t || (t = {}); for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]); return t }

        function Jn(e) { for (var t = [], r = 0; e > r; ++r) t.push(void 0); return t }

        function ei(e) { var t = Array.prototype.slice.call(arguments, 1); return function() { return e.apply(null, t) } }

        function ti(e) { return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Mo.test(e)) }

        function ri(e) { for (var t in e)
                if (e.hasOwnProperty(t) && e[t]) return !1;
            return !0 }

        function ni(e, t, r, n) { var i = document.createElement(e); if (r && (i.className = r), n && (i.style.cssText = n), "string" == typeof t) li(i, t);
            else if (t)
                for (var o = 0; o < t.length; ++o) i.appendChild(t[o]); return i }

        function ii(e) { for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild); return e }

        function oi(e, t) { return ii(e).appendChild(t) }

        function li(e, t) { Mi ? (e.innerHTML = "", e.appendChild(document.createTextNode(t))) : e.textContent = t }

        function si(e) { return e.getBoundingClientRect() }

        function ai() { return !1 }

        function ui(e) { if (null != Ao) return Ao; var t = ni("div", null, null, "width: 50px; height: 50px; overflow-x: scroll"); return oi(e, t), t.offsetWidth && (Ao = t.offsetHeight - t.clientHeight), Ao || 0 }

        function ci(e) { if (null == _o) { var t = ni("span", "​");
                oi(e, ni("span", [t, document.createTextNode("x")])), 0 != e.firstChild.offsetHeight && (_o = t.offsetWidth <= 1 && t.offsetHeight > 2 && !Si) } return _o ? ni("span", "​") : ni("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px") }

        function hi(e, t, r, n) { if (!e) return n(t, r, "ltr"); for (var i = !1, o = 0; o < e.length; ++o) { var l = e[o];
                (l.from < r && l.to > t || t == r && l.to == t) && (n(Math.max(l.from, t), Math.min(l.to, r), 1 == l.level ? "rtl" : "ltr"), i = !0) }
            i || n(t, r, "ltr") }

        function fi(e) { return e.level % 2 ? e.to : e.from }

        function di(e) { return e.level % 2 ? e.from : e.to }

        function pi(e) { var t = yn(e); return t ? fi(t[0]) : 0 }

        function mi(e) { var t = yn(e); return t ? di(Kn(t)) : e.text.length }

        function gi(e, t) { var r = hn(e.doc, t),
                n = Ir(e.doc, r);
            n != r && (t = mn(n)); var i = yn(n),
                o = i ? i[0].level % 2 ? mi(n) : pi(n) : 0; return Ut(t, o) }

        function vi(e, t) { for (var r, n; r = Wr(n = hn(e.doc, t));) t = r.find().to.line; var i = yn(n),
                o = i ? i[0].level % 2 ? pi(n) : mi(n) : n.text.length; return Ut(t, o) }

        function yi(e, t, r) { var n = e[0].level; return t == n ? !0 : r == n ? !1 : r > t }

        function bi(e, t) { for (var r, n = 0; n < e.length; ++n) { var i = e[n]; if (i.from < t && i.to > t) return Oo = null, n; if (i.from == t || i.to == t) { if (null != r) return yi(e, i.level, e[r].level) ? (Oo = r, n) : (Oo = n, r);
                    r = n } } return Oo = null, r }

        function xi(e, t, r, n) { if (!n) return t + r;
            do t += r; while (t > 0 && To.test(e.text.charAt(t))); return t }

        function wi(e, t, r, n) { var i = yn(e); if (!i) return ki(e, t, r, n); for (var o = bi(i, t), l = i[o], s = xi(e, t, l.level % 2 ? -r : r, n);;) { if (s > l.from && s < l.to) return s; if (s == l.from || s == l.to) return bi(i, s) == o ? s : (l = i[o += r], r > 0 == l.level % 2 ? l.to : l.from); if (l = i[o += r], !l) return null;
                s = r > 0 == l.level % 2 ? xi(e, l.to, -1, n) : xi(e, l.from, 1, n) } }

        function ki(e, t, r, n) { var i = t + r; if (n)
                for (; i > 0 && To.test(e.text.charAt(i));) i += r; return 0 > i || i > e.text.length ? null : i }
        var Ci = /gecko\/\d/i.test(navigator.userAgent),
            Li = /MSIE \d/.test(navigator.userAgent),
            Si = Li && (null == document.documentMode || document.documentMode < 8),
            Mi = Li && (null == document.documentMode || document.documentMode < 9),
            Ti = /WebKit\//.test(navigator.userAgent),
            Ei = Ti && /Qt\/\d+\.\d+/.test(navigator.userAgent),
            Ai = /Chrome\//.test(navigator.userAgent),
            _i = /Opera\//.test(navigator.userAgent),
            Fi = /Apple Computer/.test(navigator.vendor),
            Di = /KHTML\//.test(navigator.userAgent),
            Ni = /Mac OS X 1\d\D([7-9]|\d\d)\D/.test(navigator.userAgent),
            zi = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),
            Oi = /PhantomJS/.test(navigator.userAgent),
            Hi = /AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent),
            Wi = Hi || /Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),
            Ii = Hi || /Mac/.test(navigator.platform),
            Pi = /windows/i.test(navigator.platform),
            Ri = _i && navigator.userAgent.match(/Version\/(\d*\.\d*)/);
        Ri && (Ri = Number(Ri[1])), Ri && Ri >= 15 && (_i = !1, Ti = !0);
        var Bi, $i, ji, Ui = Ii && (Ei || _i && (null == Ri || 12.11 > Ri)),
            Gi = Ci || Li && !Mi,
            qi = !1,
            Vi = !1,
            Ki = 0,
            Qi = 0,
            Xi = 0,
            Yi = null;
        Li ? Yi = -.53 : Ci ? Yi = 15 : Ai ? Yi = -.7 : Fi && (Yi = -1 / 3);
        var Zi, Ji, eo = null,
            to = e.changeEnd = function(e) { return e.text ? Ut(e.from.line + e.text.length - 1, Kn(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to };
        e.Pos = Ut, e.prototype = { constructor: e, focus: function() { window.focus(), dt(this), Ft(this), ct(this) }, setOption: function(e, t) { var r = this.options,
                    n = r[e];
                (r[e] != t || "mode" == e) && (r[e] = t, ro.hasOwnProperty(e) && ot(this, ro[e])(this, t, n)) }, getOption: function(e) { return this.options[e] }, getDoc: function() { return this.doc }, addKeyMap: function(e, t) { this.state.keyMaps[t ? "push" : "unshift"](e) }, removeKeyMap: function(e) { for (var t = this.state.keyMaps, r = 0; r < t.length; ++r)
                    if (t[r] == e || "string" != typeof t[r] && t[r].name == e) return t.splice(r, 1), !0 }, addOverlay: ot(null, function(t, r) { var n = t.token ? t : e.getMode(this.options, t); if (n.startState) throw new Error("Overlays may not be stateful.");
                this.state.overlays.push({ mode: n, modeSpec: t, opaque: r && r.opaque }), this.state.modeGen++, at(this) }), removeOverlay: ot(null, function(e) { for (var t = this.state.overlays, r = 0; r < t.length; ++r) { var n = t[r].modeSpec; if (n == e || "string" == typeof e && n.name == e) return t.splice(r, 1), this.state.modeGen++, at(this), void 0 } }), indentLine: ot(null, function(e, t, r) { "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"), Yt(this.doc, e) && ur(this, e, t, r) }), indentSelection: ot(null, function(e) { var t = this.doc.sel; if (Gt(t.from, t.to)) return ur(this, t.from.line, e); for (var r = t.to.line - (t.to.ch ? 0 : 1), n = t.from.line; r >= n; ++n) ur(this, n, e) }), getTokenAt: function(e, t) { var r = this.doc;
                e = Qt(r, e); for (var n = O(this, e.line, t), i = this.doc.mode, o = hn(r, e.line), l = new kr(o.text, this.options.tabSize); l.pos < e.ch && !l.eol();) { l.start = l.pos; var s = i.token(l, n) } return { start: l.start, end: l.pos, string: l.current(), className: s || null, type: s || null, state: n } }, getTokenTypeAt: function(e) { e = Qt(this.doc, e); var t = Xr(this, hn(this.doc, e.line)),
                    r = 0,
                    n = (t.length - 1) / 2,
                    i = e.ch; if (0 == i) return t[2]; for (;;) { var o = r + n >> 1; if ((o ? t[2 * o - 1] : 0) >= i) n = o;
                    else { if (!(t[2 * o + 1] < i)) return t[2 * o + 2];
                        r = o + 1 } } }, getModeAt: function(t) { var r = this.doc.mode; return r.innerMode ? e.innerMode(r, this.getTokenAt(t).state).mode : r }, getHelper: function(e, t) { if (uo.hasOwnProperty(t)) { var r = uo[t],
                        n = this.getModeAt(e); return n[t] && r[n[t]] || n.helperType && r[n.helperType] || r[n.name] } }, getStateAfter: function(e, t) { var r = this.doc; return e = Kt(r, null == e ? r.first + r.size - 1 : e), O(this, e + 1, t) }, cursorCoords: function(e, t) { var r, n = this.doc.sel; return r = null == e ? n.head : "object" == typeof e ? Qt(this.doc, e) : e ? n.from : n.to, Y(this, r, t || "page") }, charCoords: function(e, t) { return X(this, Qt(this.doc, e), t || "page") }, coordsChar: function(e, t) { return e = Q(this, e, t || "page"), J(this, e.left, e.top) }, lineAtHeight: function(e, t) { return e = Q(this, { top: e, left: 0 }, t || "page").top, gn(this.doc, e + this.display.viewOffset) }, heightAtLine: function(e, t) { var r = !1,
                    n = this.doc.first + this.doc.size - 1;
                e < this.doc.first ? e = this.doc.first : e > n && (e = n, r = !0); var i = hn(this.doc, e); return K(this, hn(this.doc, e), { top: 0, left: 0 }, t || "page").top + (r ? i.height : 0) }, defaultTextHeight: function() { return tt(this.display) }, defaultCharWidth: function() { return rt(this.display) }, setGutterMarker: ot(null, function(e, t, r) { return cr(this, e, function(e) { var n = e.gutterMarkers || (e.gutterMarkers = {}); return n[t] = r, !r && ri(n) && (e.gutterMarkers = null), !0 }) }), clearGutter: ot(null, function(e) { var t = this,
                    r = t.doc,
                    n = r.first;
                r.iter(function(r) { r.gutterMarkers && r.gutterMarkers[e] && (r.gutterMarkers[e] = null, at(t, n, n + 1), ri(r.gutterMarkers) && (r.gutterMarkers = null)), ++n }) }), addLineClass: ot(null, function(e, t, r) { return cr(this, e, function(e) { var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "wrapClass"; if (e[n]) { if (new RegExp("(?:^|\\s)" + r + "(?:$|\\s)").test(e[n])) return !1;
                        e[n] += " " + r } else e[n] = r; return !0 }) }), removeLineClass: ot(null, function(e, t, r) { return cr(this, e, function(e) { var n = "text" == t ? "textClass" : "background" == t ? "bgClass" : "wrapClass",
                        i = e[n]; if (!i) return !1; if (null == r) e[n] = null;
                    else { var o = i.match(new RegExp("(?:^|\\s+)" + r + "(?:$|\\s+)")); if (!o) return !1; var l = o.index + o[0].length;
                        e[n] = i.slice(0, o.index) + (o.index && l != i.length ? " " : "") + i.slice(l) || null } return !0 }) }), addLineWidget: ot(null, function(e, t, r) { return Gr(this, e, t, r) }), removeLineWidget: function(e) { e.clear() }, lineInfo: function(e) { if ("number" == typeof e) { if (!Yt(this.doc, e)) return null; var t = e; if (e = hn(this.doc, e), !e) return null } else { var t = mn(e); if (null == t) return null } return { line: t, handle: e, text: e.text, gutterMarkers: e.gutterMarkers, textClass: e.textClass, bgClass: e.bgClass, wrapClass: e.wrapClass, widgets: e.widgets } }, getViewport: function() { return { from: this.display.showingFrom, to: this.display.showingTo } }, addWidget: function(e, t, r, n, i) { var o = this.display;
                e = Y(this, Qt(this.doc, e)); var l = e.bottom,
                    s = e.left; if (t.style.position = "absolute", o.sizer.appendChild(t), "over" == n) l = e.top;
                else if ("above" == n || "near" == n) { var a = Math.max(o.wrapper.clientHeight, this.doc.height),
                        u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                    ("above" == n || e.bottom + t.offsetHeight > a) && e.top > t.offsetHeight ? l = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= a && (l = e.bottom), s + t.offsetWidth > u && (s = u - t.offsetWidth) }
                t.style.top = l + "px", t.style.left = t.style.right = "", "right" == i ? (s = o.sizer.clientWidth - t.offsetWidth, t.style.right = "0px") : ("left" == i ? s = 0 : "middle" == i && (s = (o.sizer.clientWidth - t.offsetWidth) / 2), t.style.left = s + "px"), r && or(this, s, l, s + t.offsetWidth, l + t.offsetHeight) }, triggerOnKeyDown: ot(null, At), execCommand: function(e) { return co[e](this) }, findPosH: function(e, t, r, n) { var i = 1;
                0 > t && (i = -1, t = -t); for (var o = 0, l = Qt(this.doc, e); t > o && (l = hr(this.doc, l, i, r, n), !l.hitSide); ++o); return l }, moveH: ot(null, function(e, t) { var r, n = this.doc.sel;
                r = n.shift || n.extend || Gt(n.from, n.to) ? hr(this.doc, n.head, e, t, this.options.rtlMoveVisually) : 0 > e ? n.from : n.to, Zt(this.doc, r, r, e) }), deleteH: ot(null, function(e, t) { var r = this.doc.sel;
                Gt(r.from, r.to) ? jt(this.doc, "", r.from, hr(this.doc, r.head, e, t, !1), "+delete") : jt(this.doc, "", r.from, r.to, "+delete"), this.curOp.userSelChange = !0 }), findPosV: function(e, t, r, n) { var i = 1,
                    o = n;
                0 > t && (i = -1, t = -t); for (var l = 0, s = Qt(this.doc, e); t > l; ++l) { var a = Y(this, s, "div"); if (null == o ? o = a.left : a.left = o, s = fr(this, a, i, r), s.hitSide) break } return s }, moveV: ot(null, function(e, t) { var r = this.doc.sel,
                    n = Y(this, r.head, "div");
                null != r.goalColumn && (n.left = r.goalColumn); var i = fr(this, n, e, t); "page" == t && ar(this, 0, X(this, i, "div").top - n.top), Zt(this.doc, i, i, e), r.goalColumn = n.left }), toggleOverwrite: function(e) {
                (null == e || e != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? this.display.cursor.className += " CodeMirror-overwrite" : this.display.cursor.className = this.display.cursor.className.replace(" CodeMirror-overwrite", "")) }, hasFocus: function() { return this.state.focused }, scrollTo: ot(null, function(e, t) { sr(this, e, t) }), getScrollInfo: function() { var e = this.display.scroller,
                    t = Co; return { left: e.scrollLeft, top: e.scrollTop, height: e.scrollHeight - t, width: e.scrollWidth - t, clientHeight: e.clientHeight - t, clientWidth: e.clientWidth - t } }, scrollIntoView: ot(null, function(e, t) { "number" == typeof e && (e = Ut(e, 0)), t || (t = 0); var r = e;
                e && null == e.line || (this.curOp.scrollToPos = e ? Qt(this.doc, e) : this.doc.sel.head, this.curOp.scrollToPosMargin = t, r = Y(this, this.curOp.scrollToPos)); var n = lr(this, r.left, r.top - t, r.right, r.bottom + t);
                sr(this, n.scrollLeft, n.scrollTop) }), setSize: ot(null, function(e, t) {
                function r(e) { return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e }
                null != e && (this.display.wrapper.style.width = r(e)), null != t && (this.display.wrapper.style.height = r(t)), this.options.lineWrapping && (this.display.measureLineCache.length = this.display.measureLineCachePos = 0), this.curOp.forceUpdate = !0 }), operation: function(e) { return st(this, e) }, refresh: ot(null, function() { G(this), sr(this, this.doc.scrollLeft, this.doc.scrollTop), at(this) }), swapDoc: ot(null, function(e) { var t = this.doc; return t.cm = null, cn(this, e), G(this), ft(this, !0), sr(this, e.scrollLeft, e.scrollTop), t }), getInputField: function() { return this.display.input }, getWrapperElement: function() { return this.display.wrapper }, getScrollerElement: function() { return this.display.scroller }, getGutterElement: function() { return this.display.gutters } }, Un(e);
        var ro = e.optionHandlers = {},
            no = e.defaults = {},
            io = e.Init = { toString: function() { return "CodeMirror.Init" } };
        mr("value", "", function(e, t) { e.setValue(t) }, !0), mr("mode", null, function(e, t) { e.doc.modeOption = t, r(e) }, !0), mr("indentUnit", 2, r, !0), mr("indentWithTabs", !1), mr("smartIndent", !0), mr("tabSize", 4, function(e) { r(e), G(e), at(e) }, !0), mr("electricChars", !0), mr("rtlMoveVisually", !Pi), mr("theme", "default", function(e) { s(e), a(e) }, !0), mr("keyMap", "default", l), mr("extraKeys", null), mr("onKeyEvent", null), mr("onDragEvent", null), mr("lineWrapping", !1, n, !0), mr("gutters", [], function(e) { f(e.options), a(e) }, !0), mr("fixedGutter", !0, function(e, t) { e.display.gutters.style.left = t ? y(e.display) + "px" : "0", e.refresh() }, !0), mr("coverGutterNextToScrollbar", !1, d, !0), mr("lineNumbers", !1, function(e) { f(e.options), a(e) }, !0), mr("firstLineNumber", 1, a, !0), mr("lineNumberFormatter", function(e) { return e }, a, !0), mr("showCursorWhenSelecting", !1, E, !0), mr("readOnly", !1, function(e, t) { "nocursor" == t ? (Dt(e), e.display.input.blur()) : t || ft(e, !0) }), mr("dragDrop", !0), mr("cursorBlinkRate", 530), mr("cursorScrollMargin", 0), mr("cursorHeight", 1), mr("workTime", 100), mr("workDelay", 100), mr("flattenSpans", !0), mr("pollInterval", 100), mr("undoDepth", 40, function(e, t) { e.doc.history.undoDepth = t }), mr("historyEventDelay", 500), mr("viewportMargin", 10, function(e) { e.refresh() }, !0), mr("maxHighlightLength", 1e4, function(e) { r(e), e.refresh() }, !0), mr("moveInputWithCursor", !0, function(e, t) { t || (e.display.inputDiv.style.top = e.display.inputDiv.style.left = 0) }), mr("tabindex", null, function(e, t) { e.display.input.tabIndex = t || "" }), mr("autofocus", null);
        var oo = e.modes = {},
            lo = e.mimeModes = {};
        e.defineMode = function(t, r) { if (e.defaults.mode || "null" == t || (e.defaults.mode = t), arguments.length > 2) { r.dependencies = []; for (var n = 2; n < arguments.length; ++n) r.dependencies.push(arguments[n]) }
            oo[t] = r }, e.defineMIME = function(e, t) { lo[e] = t }, e.resolveMode = function(t) { if ("string" == typeof t && lo.hasOwnProperty(t)) t = lo[t];
            else if (t && "string" == typeof t.name && lo.hasOwnProperty(t.name)) { var r = lo[t.name];
                t = Yn(r, t), t.name = r.name } else if ("string" == typeof t && /^[\w\-]+\/[\w\-]+\+xml$/.test(t)) return e.resolveMode("application/xml"); return "string" == typeof t ? { name: t } : t || { name: "null" } }, e.getMode = function(t, r) { var r = e.resolveMode(r),
                n = oo[r.name]; if (!n) return e.getMode(t, "text/plain"); var i = n(t, r); if (so.hasOwnProperty(r.name)) { var o = so[r.name]; for (var l in o) o.hasOwnProperty(l) && (i.hasOwnProperty(l) && (i["_" + l] = i[l]), i[l] = o[l]) } return i.name = r.name, i }, e.defineMode("null", function() { return { token: function(e) { e.skipToEnd() } } }), e.defineMIME("text/plain", "null");
        var so = e.modeExtensions = {};
        e.extendMode = function(e, t) { var r = so.hasOwnProperty(e) ? so[e] : so[e] = {};
            Zn(t, r) }, e.defineExtension = function(t, r) { e.prototype[t] = r }, e.defineDocExtension = function(e, t) { yo.prototype[e] = t }, e.defineOption = mr;
        var ao = [];
        e.defineInitHook = function(e) { ao.push(e) };
        var uo = e.helpers = {};
        e.registerHelper = function(t, r, n) { uo.hasOwnProperty(t) || (uo[t] = e[t] = {}), uo[t][r] = n }, e.isWordChar = ti, e.copyState = gr, e.startState = vr, e.innerMode = function(e, t) { for (; e.innerMode;) { var r = e.innerMode(t); if (!r || r.mode == e) break;
                t = r.state, e = r.mode } return r || { mode: e, state: t } };
        var co = e.commands = { selectAll: function(e) { e.setSelection(Ut(e.firstLine(), 0), Ut(e.lastLine())) }, killLine: function(e) { var t = e.getCursor(!0),
                        r = e.getCursor(!1),
                        n = !Gt(t, r);
                    n || e.getLine(t.line).length != t.ch ? e.replaceRange("", t, n ? r : Ut(t.line), "+delete") : e.replaceRange("", t, Ut(t.line + 1, 0), "+delete") }, deleteLine: function(e) { var t = e.getCursor().line;
                    e.replaceRange("", Ut(t, 0), Ut(t), "+delete") }, delLineLeft: function(e) { var t = e.getCursor();
                    e.replaceRange("", Ut(t.line, 0), t, "+delete") }, undo: function(e) { e.undo() }, redo: function(e) { e.redo() }, goDocStart: function(e) { e.extendSelection(Ut(e.firstLine(), 0)) }, goDocEnd: function(e) { e.extendSelection(Ut(e.lastLine())) }, goLineStart: function(e) { e.extendSelection(gi(e, e.getCursor().line)) }, goLineStartSmart: function(e) { var t = e.getCursor(),
                        r = gi(e, t.line),
                        n = e.getLineHandle(r.line),
                        i = yn(n); if (i && 0 != i[0].level) e.extendSelection(r);
                    else { var o = Math.max(0, n.text.search(/\S/)),
                            l = t.line == r.line && t.ch <= o && t.ch;
                        e.extendSelection(Ut(r.line, l ? 0 : o)) } }, goLineEnd: function(e) { e.extendSelection(vi(e, e.getCursor().line)) }, goLineRight: function(e) { var t = e.charCoords(e.getCursor(), "div").top + 5;
                    e.extendSelection(e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: t }, "div")) }, goLineLeft: function(e) { var t = e.charCoords(e.getCursor(), "div").top + 5;
                    e.extendSelection(e.coordsChar({ left: 0, top: t }, "div")) }, goLineUp: function(e) { e.moveV(-1, "line") }, goLineDown: function(e) { e.moveV(1, "line") }, goPageUp: function(e) { e.moveV(-1, "page") }, goPageDown: function(e) { e.moveV(1, "page") }, goCharLeft: function(e) { e.moveH(-1, "char") }, goCharRight: function(e) { e.moveH(1, "char") }, goColumnLeft: function(e) { e.moveH(-1, "column") }, goColumnRight: function(e) { e.moveH(1, "column") }, goWordLeft: function(e) { e.moveH(-1, "word") }, goGroupRight: function(e) { e.moveH(1, "group") }, goGroupLeft: function(e) { e.moveH(-1, "group") }, goWordRight: function(e) { e.moveH(1, "word") }, delCharBefore: function(e) { e.deleteH(-1, "char") }, delCharAfter: function(e) { e.deleteH(1, "char") }, delWordBefore: function(e) { e.deleteH(-1, "word") }, delWordAfter: function(e) { e.deleteH(1, "word") }, delGroupBefore: function(e) { e.deleteH(-1, "group") }, delGroupAfter: function(e) { e.deleteH(1, "group") }, indentAuto: function(e) { e.indentSelection("smart") }, indentMore: function(e) { e.indentSelection("add") }, indentLess: function(e) { e.indentSelection("subtract") }, insertTab: function(e) { e.replaceSelection("	", "end", "+input") }, defaultTab: function(e) { e.somethingSelected() ? e.indentSelection("add") : e.replaceSelection("	", "end", "+input") }, transposeChars: function(e) { var t = e.getCursor(),
                        r = e.getLine(t.line);
                    t.ch > 0 && t.ch < r.length - 1 && e.replaceRange(r.charAt(t.ch) + r.charAt(t.ch - 1), Ut(t.line, t.ch - 1), Ut(t.line, t.ch + 1)) }, newlineAndIndent: function(e) { ot(e, function() { e.replaceSelection("\n", "end", "+input"), e.indentLine(e.getCursor().line, null, !0) })() }, toggleOverwrite: function(e) { e.toggleOverwrite() } },
            ho = e.keyMap = {};
        ho.basic = { Left: "goCharLeft", Right: "goCharRight", Up: "goLineUp", Down: "goLineDown", End: "goLineEnd", Home: "goLineStartSmart", PageUp: "goPageUp", PageDown: "goPageDown", Delete: "delCharAfter", Backspace: "delCharBefore", Tab: "defaultTab", "Shift-Tab": "indentAuto", Enter: "newlineAndIndent", Insert: "toggleOverwrite" }, ho.pcDefault = { "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo", "Ctrl-Home": "goDocStart", "Alt-Up": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Down": "goDocEnd", "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd", "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find", "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll", "Ctrl-[": "indentLess", "Ctrl-]": "indentMore", fallthrough: "basic" }, ho.macDefault = { "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft", "Alt-Right": "goGroupRight", "Cmd-Left": "goLineStart", "Cmd-Right": "goLineEnd", "Alt-Backspace": "delGroupBefore", "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find", "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll", "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delLineLeft", fallthrough: ["basic", "emacsy"] }, ho["default"] = Ii ? ho.macDefault : ho.pcDefault, ho.emacsy = { "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown", "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars" }, e.lookupKey = br, e.isModifierKey = xr, e.keyName = wr, e.fromTextArea = function(t, r) {
            function n() { t.value = u.getValue() } if (r || (r = {}), r.value = t.value, !r.tabindex && t.tabindex && (r.tabindex = t.tabindex), !r.placeholder && t.placeholder && (r.placeholder = t.placeholder), null == r.autofocus) { var i = document.body; try { i = document.activeElement } catch (o) {}
                r.autofocus = i == t || null != t.getAttribute("autofocus") && i == document.body } if (t.form && (Wn(t.form, "submit", n), !r.leaveSubmitMethodAlone)) { var l = t.form,
                    s = l.submit; try { var a = l.submit = function() { n(), l.submit = s, l.submit(), l.submit = a } } catch (o) {} }
            t.style.display = "none"; var u = e(function(e) { t.parentNode.insertBefore(e, t.nextSibling) }, r); return u.save = n, u.getTextArea = function() { return t }, u.toTextArea = function() { n(), t.parentNode.removeChild(u.getWrapperElement()), t.style.display = "", t.form && (In(t.form, "submit", n), "function" == typeof t.form.submit && (t.form.submit = s)) }, u }, kr.prototype = { eol: function() { return this.pos >= this.string.length }, sol: function() { return 0 == this.pos }, peek: function() { return this.string.charAt(this.pos) || void 0 }, next: function() { return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0 }, eat: function(e) { var t = this.string.charAt(this.pos); if ("string" == typeof e) var r = t == e;
                else var r = t && (e.test ? e.test(t) : e(t)); return r ? (++this.pos, t) : void 0 }, eatWhile: function(e) { for (var t = this.pos; this.eat(e);); return this.pos > t }, eatSpace: function() { for (var e = this.pos;
                    /[\s\u00a0]/.test(this.string.charAt(this.pos));) ++this.pos; return this.pos > e }, skipToEnd: function() { this.pos = this.string.length }, skipTo: function(e) { var t = this.string.indexOf(e, this.pos); return t > -1 ? (this.pos = t, !0) : void 0 }, backUp: function(e) { this.pos -= e }, column: function() { return this.lastColumnPos < this.start && (this.lastColumnValue = qn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue }, indentation: function() { return qn(this.string, null, this.tabSize) }, match: function(e, t, r) { if ("string" != typeof e) { var n = this.string.slice(this.pos).match(e); return n && n.index > 0 ? null : (n && t !== !1 && (this.pos += n[0].length), n) } var i = function(e) { return r ? e.toLowerCase() : e },
                    o = this.string.substr(this.pos, e.length); return i(o) == i(e) ? (t !== !1 && (this.pos += e.length), !0) : void 0 }, current: function() { return this.string.slice(this.start, this.pos) } }, e.StringStream = kr, e.TextMarker = Cr, Un(Cr), Cr.prototype.clear = function() { if (!this.explicitlyCleared) { var e = this.doc.cm,
                    t = e && !e.curOp; if (t && nt(e), jn(this, "clear")) { var r = this.find();
                    r && Rn(this, "clear", r.from, r.to) } for (var n = null, i = null, o = 0; o < this.lines.length; ++o) { var l = this.lines[o],
                        s = Tr(l.markedSpans, this);
                    null != s.to && (i = mn(l)), l.markedSpans = Er(l.markedSpans, s), null != s.from ? n = mn(l) : this.collapsed && !Pr(this.doc, l) && e && pn(l, tt(e.display)) } if (e && this.collapsed && !e.options.lineWrapping)
                    for (var o = 0; o < this.lines.length; ++o) { var a = Ir(e.doc, this.lines[o]),
                            u = c(e.doc, a);
                        u > e.display.maxLineLength && (e.display.maxLine = a, e.display.maxLineLength = u, e.display.maxLineChanged = !0) }
                null != n && e && at(e, n, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && tr(e)), t && it(e) } }, Cr.prototype.find = function() { for (var e, t, r = 0; r < this.lines.length; ++r) { var n = this.lines[r],
                    i = Tr(n.markedSpans, this); if (null != i.from || null != i.to) { var o = mn(n);
                    null != i.from && (e = Ut(o, i.from)), null != i.to && (t = Ut(o, i.to)) } } return "bookmark" == this.type ? e : e && { from: e, to: t } }, Cr.prototype.changed = function() { var e = this.find(),
                t = this.doc.cm; if (e && t) { var r = hn(this.doc, e.from.line); if (B(t, r), e.from.line >= t.display.showingFrom && e.from.line < t.display.showingTo) { for (var n = t.display.lineDiv.firstChild; n; n = n.nextSibling)
                        if (n.lineObj == r) { n.offsetHeight != r.height && pn(r, n.offsetHeight); break }
                    st(t, function() { t.curOp.selectionChanged = t.curOp.forceUpdate = t.curOp.updateMaxLine = !0 }) } } }, Cr.prototype.attachLine = function(e) { if (!this.lines.length && this.doc.cm) { var t = this.doc.cm.curOp;
                t.maybeHiddenMarkers && -1 != Xn(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this) }
            this.lines.push(e) }, Cr.prototype.detachLine = function(e) { if (this.lines.splice(Xn(this.lines, e), 1), !this.lines.length && this.doc.cm) { var t = this.doc.cm.curOp;
                (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this) } }, e.SharedTextMarker = Sr, Un(Sr), Sr.prototype.clear = function() { if (!this.explicitlyCleared) { this.explicitlyCleared = !0; for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
                Rn(this, "clear") } }, Sr.prototype.find = function() { return this.primary.find() };
        var fo = e.LineWidget = function(e, t, r) { if (r)
                for (var n in r) r.hasOwnProperty(n) && (this[n] = r[n]);
            this.cm = e, this.node = t };
        Un(fo), fo.prototype.clear = jr(function() { var e = this.line.widgets,
                t = mn(this.line); if (null != t && e) { for (var r = 0; r < e.length; ++r) e[r] == this && e.splice(r--, 1);
                e.length || (this.line.widgets = null); var n = vn(this.cm, this.line) < this.cm.doc.scrollTop;
                pn(this.line, Math.max(0, this.line.height - Ur(this))), n && ar(this.cm, 0, -this.height), at(this.cm, t, t + 1) } }), fo.prototype.changed = jr(function() { var e = this.height;
            this.height = null; var t = Ur(this) - e; if (t) { pn(this.line, this.line.height + t); var r = mn(this.line);
                at(this.cm, r, r + 1) } });
        var po = e.Line = function(e, t, r) { this.text = e, $r(this, t), this.height = r ? r(this) : 1 };
        Un(po);
        var mo = {},
            go = /[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\uFEFF]/g;
        sn.prototype = { chunkSize: function() { return this.lines.length }, removeInner: function(e, t) { for (var r = e, n = e + t; n > r; ++r) { var i = this.lines[r];
                    this.height -= i.height, Vr(i), Rn(i, "delete") }
                this.lines.splice(e, t) }, collapse: function(e) { e.splice.apply(e, [e.length, 0].concat(this.lines)) }, insertInner: function(e, t, r) { this.height += r, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e)); for (var n = 0, i = t.length; i > n; ++n) t[n].parent = this }, iterN: function(e, t, r) { for (var n = e + t; n > e; ++e)
                    if (r(this.lines[e])) return !0 } }, an.prototype = {
            chunkSize: function() { return this.size },
            removeInner: function(e, t) { this.size -= t; for (var r = 0; r < this.children.length; ++r) { var n = this.children[r],
                        i = n.chunkSize(); if (i > e) { var o = Math.min(t, i - e),
                            l = n.height; if (n.removeInner(e, o), this.height -= l - n.height, i == o && (this.children.splice(r--, 1), n.parent = null), 0 == (t -= o)) break;
                        e = 0 } else e -= i } if (this.size - t < 25) { var s = [];
                    this.collapse(s), this.children = [new sn(s)], this.children[0].parent = this } },
            collapse: function(e) { for (var t = 0, r = this.children.length; r > t; ++t) this.children[t].collapse(e) },
            insertInner: function(e, t, r) { this.size += t.length, this.height += r; for (var n = 0, i = this.children.length; i > n; ++n) { var o = this.children[n],
                        l = o.chunkSize(); if (l >= e) { if (o.insertInner(e, t, r), o.lines && o.lines.length > 50) { for (; o.lines.length > 50;) { var s = o.lines.splice(o.lines.length - 25, 25),
                                    a = new sn(s);
                                o.height -= a.height, this.children.splice(n + 1, 0, a), a.parent = this }
                            this.maybeSpill() } break }
                    e -= l } },
            maybeSpill: function() { if (!(this.children.length <= 10)) { var e = this;
                    do { var t = e.children.splice(e.children.length - 5, 5),
                            r = new an(t); if (e.parent) { e.size -= r.size, e.height -= r.height; var n = Xn(e.parent.children, e);
                            e.parent.children.splice(n + 1, 0, r) } else { var i = new an(e.children);
                            i.parent = e, e.children = [i, r], e = i }
                        r.parent = e.parent } while (e.children.length > 10);
                    e.parent.maybeSpill() } },
            iterN: function(e, t, r) {
                for (var n = 0, i = this.children.length; i > n; ++n) {
                    var o = this.children[n],
                        l = o.chunkSize();
                    if (l > e) { var s = Math.min(t, l - e); if (o.iterN(e, s, r)) return !0; if (0 == (t -= s)) break;
                        e = 0 } else e -= l
                }
            }
        };
        var vo = 0,
            yo = e.Doc = function(e, t, r) { if (!(this instanceof yo)) return new yo(e, t, r);
                null == r && (r = 0), an.call(this, [new sn([new po("", null)])]), this.first = r, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.history = bn(), this.cleanGeneration = 1, this.frontier = r; var n = Ut(r, 0);
                this.sel = { from: n, to: n, head: n, anchor: n, shift: !1, extend: !1, goalColumn: null }, this.id = ++vo, this.modeOption = t, "string" == typeof e && (e = Fo(e)), ln(this, { from: n, to: n, text: e }, null, { head: n, anchor: n }) };
        yo.prototype = Yn(an.prototype, { constructor: yo, iter: function(e, t, r) { r ? this.iterN(e - this.first, t - e, r) : this.iterN(this.first, this.first + this.size, e) }, insert: function(e, t) { for (var r = 0, n = 0, i = t.length; i > n; ++n) r += t[n].height;
                this.insertInner(e - this.first, t, r) }, remove: function(e, t) { this.removeInner(e - this.first, t) }, getValue: function(e) { var t = dn(this, this.first, this.first + this.size); return e === !1 ? t : t.join(e || "\n") }, setValue: function(e) { var t = Ut(this.first, 0),
                    r = this.first + this.size - 1;
                Wt(this, { from: t, to: Ut(r, hn(this, r).text.length), text: Fo(e), origin: "setValue" }, { head: t, anchor: t }, !0) }, replaceRange: function(e, t, r, n) { t = Qt(this, t), r = r ? Qt(this, r) : t, jt(this, e, t, r, n) }, getRange: function(e, t, r) { var n = fn(this, Qt(this, e), Qt(this, t)); return r === !1 ? n : n.join(r || "\n") }, getLine: function(e) { var t = this.getLineHandle(e); return t && t.text }, setLine: function(e, t) { Yt(this, e) && jt(this, t, Ut(e, 0), Qt(this, Ut(e))) }, removeLine: function(e) { e ? jt(this, "", Qt(this, Ut(e - 1)), Qt(this, Ut(e))) : jt(this, "", Ut(0, 0), Qt(this, Ut(1, 0))) }, getLineHandle: function(e) { return Yt(this, e) ? hn(this, e) : void 0 }, getLineNumber: function(e) { return mn(e) }, getLineHandleVisualStart: function(e) { return "number" == typeof e && (e = hn(this, e)), Ir(this, e) }, lineCount: function() { return this.size }, firstLine: function() { return this.first }, lastLine: function() { return this.first + this.size - 1 }, clipPos: function(e) { return Qt(this, e) }, getCursor: function(e) { var t, r = this.sel; return t = null == e || "head" == e ? r.head : "anchor" == e ? r.anchor : "end" == e || e === !1 ? r.to : r.from, Vt(t) }, somethingSelected: function() { return !Gt(this.sel.head, this.sel.anchor) }, setCursor: lt(function(e, t, r) { var n = Qt(this, "number" == typeof e ? Ut(e, t || 0) : e);
                r ? Zt(this, n) : er(this, n, n) }), setSelection: lt(function(e, t) { er(this, Qt(this, e), Qt(this, t || e)) }), extendSelection: lt(function(e, t) { Zt(this, Qt(this, e), t && Qt(this, t)) }), getSelection: function(e) { return this.getRange(this.sel.from, this.sel.to, e) }, replaceSelection: function(e, t, r) { Wt(this, { from: this.sel.from, to: this.sel.to, text: Fo(e), origin: r }, t || "around") }, undo: lt(function() { Pt(this, "undo") }), redo: lt(function() { Pt(this, "redo") }), setExtending: function(e) { this.sel.extend = e }, historySize: function() { var e = this.history; return { undo: e.done.length, redo: e.undone.length } }, clearHistory: function() { this.history = bn(this.history.maxGeneration) }, markClean: function() { this.cleanGeneration = this.changeGeneration() }, changeGeneration: function() { return this.history.lastOp = this.history.lastOrigin = null, this.history.generation }, isClean: function(e) { return this.history.generation == (e || this.cleanGeneration) }, getHistory: function() { return { done: Sn(this.history.done), undone: Sn(this.history.undone) } }, setHistory: function(e) { var t = this.history = bn(this.history.maxGeneration);
                t.done = e.done.slice(0), t.undone = e.undone.slice(0) }, markText: function(e, t, r) { return Lr(this, Qt(this, e), Qt(this, t), r, "range") }, setBookmark: function(e, t) { var r = { replacedWith: t && (null == t.nodeType ? t.widget : t), insertLeft: t && t.insertLeft }; return e = Qt(this, e), Lr(this, e, e, r, "bookmark") }, findMarksAt: function(e) { e = Qt(this, e); var t = [],
                    r = hn(this, e.line).markedSpans; if (r)
                    for (var n = 0; n < r.length; ++n) { var i = r[n];
                        (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker) }
                return t }, getAllMarks: function() { var e = []; return this.iter(function(t) { var r = t.markedSpans; if (r)
                        for (var n = 0; n < r.length; ++n) null != r[n].from && e.push(r[n].marker) }), e }, posFromIndex: function(e) { var t, r = this.first; return this.iter(function(n) { var i = n.text.length + 1; return i > e ? (t = e, !0) : (e -= i, ++r, void 0) }), Qt(this, Ut(r, t)) }, indexFromPos: function(e) { e = Qt(this, e); var t = e.ch; return e.line < this.first || e.ch < 0 ? 0 : (this.iter(this.first, e.line, function(e) { t += e.text.length + 1 }), t) }, copy: function(e) { var t = new yo(dn(this, this.first, this.first + this.size), this.modeOption, this.first); return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = { from: this.sel.from, to: this.sel.to, head: this.sel.head, anchor: this.sel.anchor, shift: this.sel.shift, extend: !1, goalColumn: this.sel.goalColumn }, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t }, linkedDoc: function(e) { e || (e = {}); var t = this.first,
                    r = this.first + this.size;
                null != e.from && e.from > t && (t = e.from), null != e.to && e.to < r && (r = e.to); var n = new yo(dn(this, t, r), e.mode || this.modeOption, t); return e.sharedHist && (n.history = this.history), (this.linked || (this.linked = [])).push({ doc: n, sharedHist: e.sharedHist }), n.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], n }, unlinkDoc: function(t) { if (t instanceof e && (t = t.doc), this.linked)
                    for (var r = 0; r < this.linked.length; ++r) { var n = this.linked[r]; if (n.doc == t) { this.linked.splice(r, 1), t.unlinkDoc(this); break } }
                if (t.history == this.history) { var i = [t.id];
                    un(t, function(e) { i.push(e.id) }, !0), t.history = bn(), t.history.done = Sn(this.history.done, i), t.history.undone = Sn(this.history.undone, i) } }, iterLinkedDocs: function(e) { un(this, e) }, getMode: function() { return this.mode }, getEditor: function() { return this.cm } }), yo.prototype.eachLine = yo.prototype.iter;
        var bo = "iter insert remove copy getEditor".split(" ");
        for (var xo in yo.prototype) yo.prototype.hasOwnProperty(xo) && Xn(bo, xo) < 0 && (e.prototype[xo] = function(e) { return function() { return e.apply(this.doc, arguments) } }(yo.prototype[xo]));
        Un(yo), e.e_stop = zn, e.e_preventDefault = Fn, e.e_stopPropagation = Dn;
        var wo, ko = 0;
        e.on = Wn, e.off = In, e.signal = Pn;
        var Co = 30,
            Lo = e.Pass = { toString: function() { return "CodeMirror.Pass" } };
        Gn.prototype = { set: function(e, t) { clearTimeout(this.id), this.id = setTimeout(t, e) } }, e.countColumn = qn;
        var So = [""],
            Mo = /[\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,
            To = /[\u0300-\u036F\u0483-\u0487\u0488-\u0489\u0591-\u05BD\u05BF\u05C1-\u05C2\u05C4-\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7-\u06E8\u06EA-\u06ED\uA66F\uA670-\uA672\uA674-\uA67D\uA69F\udc00-\udfff]/;
        e.replaceGetRect = function(e) { si = e };
        var Eo = function() { if (Mi) return !1; var e = ni("div"); return "draggable" in e || "dragDrop" in e }();
        Ci ? ai = function(e, t) { return 36 == e.charCodeAt(t - 1) && 39 == e.charCodeAt(t) } : Fi && !/Version\/([6-9]|\d\d)\b/.test(navigator.userAgent) ? ai = function(e, t) { return /\-[^ \-?]|\?[^ !\'\"\),.\-\/:;\?\]\}]/.test(e.slice(t - 1, t + 1)) } : Ti && !/Chrome\/(?:29|[3-9]\d|\d\d\d)\./.test(navigator.userAgent) && (ai = function(e, t) { if (t > 1 && 45 == e.charCodeAt(t - 1)) { if (/\w/.test(e.charAt(t - 2)) && /[^\-?\.]/.test(e.charAt(t))) return !0; if (t > 2 && /[\d\.,]/.test(e.charAt(t - 2)) && /[\d\.,]/.test(e.charAt(t))) return !1 } return /[~!#%&*)=+}\]|\"\.>,:;][({[<]|-[^\-?\.\u2010-\u201f\u2026]|\?[\w~`@#$%\^&*(_=+{[|><]|â€¦[\w~`@#$%\^&*(_=+{[><]/.test(e.slice(t - 1, t + 1)) });
        var Ao, _o, Fo = 3 != "\n\nb".split(/\n/).length ? function(e) { for (var t = 0, r = [], n = e.length; n >= t;) { var i = e.indexOf("\n", t); - 1 == i && (i = e.length); var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i),
                    l = o.indexOf("\r"); - 1 != l ? (r.push(o.slice(0, l)), t += l + 1) : (r.push(o), t = i + 1) } return r } : function(e) { return e.split(/\r\n?|\n/) };
        e.splitLines = Fo;
        var Do = window.getSelection ? function(e) { try { return e.selectionStart != e.selectionEnd } catch (t) { return !1 } } : function(e) { try { var t = e.ownerDocument.selection.createRange() } catch (r) {} return t && t.parentElement() == e ? 0 != t.compareEndPoints("StartToEnd", t) : !1 },
            No = function() { var e = ni("div"); return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), "function" == typeof e.oncopy) }(),
            zo = { 3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert", 46: "Delete", 59: ";", 91: "Mod", 92: "Mod", 93: "Mod", 109: "-", 107: "=", 127: "Delete", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 63276: "PageUp", 63277: "PageDown", 63275: "End", 63273: "Home", 63234: "Left", 63232: "Up", 63235: "Right", 63233: "Down", 63302: "Insert", 63272: "Delete" };
        e.keyNames = zo,
            function() { for (var e = 0; 10 > e; e++) zo[e + 48] = String(e); for (var e = 65; 90 >= e; e++) zo[e] = String.fromCharCode(e); for (var e = 1; 12 >= e; e++) zo[e + 111] = zo[e + 63235] = "F" + e }();
        var Oo, Ho = function() {
            function e(e) { return 255 >= e ? t.charAt(e) : e >= 1424 && 1524 >= e ? "R" : e >= 1536 && 1791 >= e ? r.charAt(e - 1536) : e >= 1792 && 2220 >= e ? "r" : "L" } var t = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLL",
                r = "rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmmrrrrrrrrrrrrrrrrrr",
                n = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
                i = /[stwN]/,
                o = /[LRr]/,
                l = /[Lb1n]/,
                s = /[1n]/,
                a = "L"; return function(t) { if (!n.test(t)) return !1; for (var r, u = t.length, c = [], h = 0; u > h; ++h) c.push(r = e(t.charCodeAt(h))); for (var h = 0, f = a; u > h; ++h) { var r = c[h]; "m" == r ? c[h] = f : f = r } for (var h = 0, d = a; u > h; ++h) { var r = c[h]; "1" == r && "r" == d ? c[h] = "n" : o.test(r) && (d = r, "r" == r && (c[h] = "R")) } for (var h = 1, f = c[0]; u - 1 > h; ++h) { var r = c[h]; "+" == r && "1" == f && "1" == c[h + 1] ? c[h] = "1" : "," != r || f != c[h + 1] || "1" != f && "n" != f || (c[h] = f), f = r } for (var h = 0; u > h; ++h) { var r = c[h]; if ("," == r) c[h] = "N";
                    else if ("%" == r) { for (var p = h + 1; u > p && "%" == c[p]; ++p); for (var m = h && "!" == c[h - 1] || u - 1 > p && "1" == c[p] ? "1" : "N", g = h; p > g; ++g) c[g] = m;
                        h = p - 1 } } for (var h = 0, d = a; u > h; ++h) { var r = c[h]; "L" == d && "1" == r ? c[h] = "L" : o.test(r) && (d = r) } for (var h = 0; u > h; ++h)
                    if (i.test(c[h])) { for (var p = h + 1; u > p && i.test(c[p]); ++p); for (var v = "L" == (h ? c[h - 1] : a), y = "L" == (u - 1 > p ? c[p] : a), m = v || y ? "L" : "R", g = h; p > g; ++g) c[g] = m;
                        h = p - 1 }
                for (var b, x = [], h = 0; u > h;)
                    if (l.test(c[h])) { var w = h; for (++h; u > h && l.test(c[h]); ++h);
                        x.push({ from: w, to: h, level: 0 }) } else { var k = h,
                            C = x.length; for (++h; u > h && "L" != c[h]; ++h); for (var g = k; h > g;)
                            if (s.test(c[g])) { g > k && x.splice(C, 0, { from: k, to: g, level: 1 }); var L = g; for (++g; h > g && s.test(c[g]); ++g);
                                x.splice(C, 0, { from: L, to: g, level: 2 }), k = g } else ++g;
                        h > k && x.splice(C, 0, { from: k, to: h, level: 1 }) }
                return 1 == x[0].level && (b = t.match(/^\s+/)) && (x[0].from = b[0].length, x.unshift({ from: 0, to: b[0].length, level: 0 })), 1 == Kn(x).level && (b = t.match(/\s+$/)) && (Kn(x).to -= b[0].length, x.push({ from: u - b[0].length, to: u, level: 0 })), x[0].level != Kn(x).level && x.push({ from: u, to: u, level: x[0].level }), x } }();
        return e.version = "3.15.0", e
    }(), CodeMirror.defineMode("markdown", function(e, t) {
        function r(e, t, r) { return t.f = t.inline = r, r(e, t) }

        function n(e, t, r) { return t.f = t.block = r, r(e, t) }

        function i(e) { return e.linkTitle = !1, e.em = !1, e.strong = !1, e.quote = !1, g || e.f != l || (e.f = c, e.block = o), null }

        function o(e, i) { if (i.list !== !1 && i.indentationDiff >= 0 ? (i.indentationDiff < 4 && (i.indentation -= i.indentationDiff), i.list = null) : i.list = !1, i.indentationDiff >= 4) return i.indentation -= 4, e.skipToEnd(), L; if (e.eatSpace()) return null; if ("#" === e.peek() || w && e.match(P)) i.header = !0;
            else if (e.eat(">")) i.indentation++, i.quote = !0;
            else { if ("[" === e.peek()) return r(e, i, f); if (e.match(H, !0)) return T; if (e.match(W, !0) || e.match(I, !0)) i.indentation += 4, i.list = !0;
                else if (t.fencedCodeBlocks && e.match(/^```([\w+#]*)/, !0)) return i.localMode = b(RegExp.$1), i.localMode && (i.localState = i.localMode.startState()), n(e, i, s), L } return r(e, i, i.inline) }

        function l(e, t) { var r = v.token(e, t.htmlState); return g && "tag" === r && "openTag" !== t.htmlState.type && !t.htmlState.context && (t.f = c, t.block = o), t.md_inside && -1 != e.current().indexOf(">") && (t.f = c, t.block = o, t.htmlState.context = void 0), r }

        function s(e, t) { return e.sol() && e.match(/^```/, !0) ? (t.localMode = t.localState = null, t.f = c, t.block = o, L) : t.localMode ? t.localMode.token(e, t.localState) : (e.skipToEnd(), L) }

        function a(e) { var t = []; return e.strong ? t.push(e.em ? O : z) : e.em && t.push(N), e.linkText && t.push(F), e.code && t.push(L), e.header && t.push(C), e.quote && t.push(S), e.list !== !1 && t.push(M), t.length ? t.join(" ") : null }

        function u(e, t) { return e.match(R, !0) ? a(t) : void 0 }

        function c(e, i) { var o = i.text(e, i); if ("undefined" != typeof o) return o; if (i.list) return i.list = null, M; var s = e.next(); if ("\\" === s) return e.next(), a(i); if (i.linkTitle) { i.linkTitle = !1; var u = s; "(" === s && (u = ")"), u = (u + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"); var c = "^\\s*(?:[^" + u + "\\\\]+|\\\\\\\\|\\\\.)" + u; if (e.match(new RegExp(c), !0)) return D } if ("`" === s) { var f = a(i),
                    d = e.pos;
                e.eatWhile("`"); var p = 1 + e.pos - d; return i.code ? p === x ? (i.code = !1, f) : a(i) : (x = p, i.code = !0, a(i)) } if (i.code) return a(i); if ("!" === s && e.match(/\[[^\]]*\] ?(?:\(|\[)/, !1)) return e.match(/\[[^\]]*\]/), i.inline = i.f = h, E; if ("[" === s && e.match(/.*\](\(| ?\[)/, !1)) return i.linkText = !0, a(i); if ("]" === s && i.linkText) { var g = a(i); return i.linkText = !1, i.inline = i.f = h, g } if ("<" === s && e.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !0)) return r(e, i, m(A, ">")); if ("<" === s && e.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !0)) return r(e, i, m(_, ">")); if ("<" === s && e.match(/^\w/, !1)) { if (-1 != e.string.indexOf(">")) { var v = e.string.substring(1, e.string.indexOf(">")); /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(v) && (i.md_inside = !0) } return e.backUp(1), n(e, i, l) } if ("<" === s && e.match(/^\/\w*?>/)) return i.md_inside = !1, "tag"; var y = !1; if (!t.underscoresBreakWords && "_" === s && "_" !== e.peek() && e.match(/(\w)/, !1)) { var b = e.pos - 2; if (b >= 0) { var w = e.string.charAt(b); "_" !== w && w.match(/(\w)/, !1) && (y = !0) } } var f = a(i); if ("*" === s || "_" === s && !y) { if (i.strong === s && e.eat(s)) return i.strong = !1, f; if (!i.strong && e.eat(s)) return i.strong = s, a(i); if (i.em === s) return i.em = !1, f; if (!i.em) return i.em = s, a(i) } else if (" " === s && (e.eat("*") || e.eat("_"))) { if (" " === e.peek()) return a(i);
                e.backUp(1) } return a(i) }

        function h(e, t) { if (e.eatSpace()) return null; var n = e.next(); return "(" === n || "[" === n ? r(e, t, m(D, "(" === n ? ")" : "]")) : "error" }

        function f(e, t) { return e.match(/^[^\]]*\]:/, !0) ? (t.f = d, F) : r(e, t, c) }

        function d(e, t) { return e.eatSpace() ? null : (e.match(/^[^\s]+/, !0), void 0 === e.peek() ? t.linkTitle = !0 : e.match(/^(?:\s+(?:"(?:[^"\\]|\\\\|\\.)+"|'(?:[^'\\]|\\\\|\\.)+'|\((?:[^)\\]|\\\\|\\.)+\)))?/, !0), t.f = t.inline = c, D) }

        function p(e) { return B[e] || (e = (e + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), B[e] = new RegExp("^(?:[^\\\\]|\\\\.)*?(" + e + ")")), B[e] }

        function m(e, t, r) { return r = r || c,
                function(n, i) { return n.match(p(t)), i.inline = i.f = r, e } } var g = CodeMirror.mimeModes.hasOwnProperty("text/html"),
            v = CodeMirror.getMode(e, g ? "text/html" : "text/plain"),
            y = { html: "htmlmixed", js: "javascript", json: "application/json", c: "text/x-csrc", "c++": "text/x-c++src", java: "text/x-java", csharp: "text/x-csharp", "c#": "text/x-csharp", scala: "text/x-scala" },
            b = function() { var t, r, n = {},
                    i = {},
                    o = []; for (var l in CodeMirror.modes) CodeMirror.modes.propertyIsEnumerable(l) && o.push(l); for (t = 0; t < o.length; t++) n[o[t]] = o[t]; var s = []; for (var l in CodeMirror.mimeModes) CodeMirror.mimeModes.propertyIsEnumerable(l) && s.push({ mime: l, mode: CodeMirror.mimeModes[l] }); for (t = 0; t < s.length; t++) r = s[t].mime, i[r] = s[t].mime; for (var a in y)(y[a] in n || y[a] in i) && (n[a] = y[a]); return function(t) { return n[t] ? CodeMirror.getMode(e, n[t]) : null } }();
        void 0 === t.underscoresBreakWords && (t.underscoresBreakWords = !0), void 0 === t.fencedCodeBlocks && (t.fencedCodeBlocks = !1); var x = 0,
            w = !1,
            k = !1,
            C = "header",
            L = "comment",
            S = "quote",
            M = "string",
            T = "hr",
            E = "tag",
            A = "link",
            _ = "link",
            F = "link",
            D = "string",
            N = "em",
            z = "strong",
            O = "emstrong",
            H = /^([*\-=_])(?:\s*\1){2,}\s*$/,
            W = /^[*\-+]\s+/,
            I = /^[0-9]+\.\s+/,
            P = /^(?:\={1,}|-{1,})$/,
            R = /^[^!\[\]*_\\<>` "'(]+/,
            B = []; return { startState: function() { return w = !1, k = !1, { f: o, block: o, htmlState: CodeMirror.startState(v), indentation: 0, inline: c, text: u, linkText: !1, linkTitle: !1, em: !1, strong: !1, header: !1, list: !1, quote: !1 } }, copyState: function(e) { return { f: e.f, block: e.block, htmlState: CodeMirror.copyState(v, e.htmlState), indentation: e.indentation, localMode: e.localMode, localState: e.localMode ? CodeMirror.copyState(e.localMode, e.localState) : null, inline: e.inline, text: e.text, linkTitle: e.linkTitle, em: e.em, strong: e.strong, header: e.header, list: e.list, quote: e.quote, md_inside: e.md_inside } }, token: function(e, t) { if (e.sol()) { if (e.match(/^\s*$/, !0)) return w = !1, i(t);
                    k && (w = !0, k = !1), k = !0, t.header = !1, t.code = !1, t.f = t.block; var r = e.match(/^\s*/, !0)[0].replace(/\t/g, "    ").length,
                        n = 4 * Math.floor((r - t.indentation) / 4);
                    n > 4 && (n = 4); var o = t.indentation + n; if (t.indentationDiff = o - t.indentation, t.indentation = o, r > 0) return null } return t.f(e, t) }, blankLine: i, getType: a } }, "xml"),
    function() { var e = this,
            t = e._,
            r = Array.prototype,
            n = Object.prototype,
            i = Function.prototype,
            o = r.push,
            l = r.slice,
            s = r.concat,
            a = n.toString,
            u = n.hasOwnProperty,
            c = Array.isArray,
            h = Object.keys,
            f = i.bind,
            d = function(e) { return e instanceof d ? e : this instanceof d ? void(this._wrapped = e) : new d(e) }; "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = d), exports._ = d) : e._ = d, d.VERSION = "1.7.0"; var p = function(e, t, r) { if (void 0 === t) return e; switch (null == r ? 3 : r) {
                case 1:
                    return function(r) { return e.call(t, r) };
                case 2:
                    return function(r, n) { return e.call(t, r, n) };
                case 3:
                    return function(r, n, i) { return e.call(t, r, n, i) };
                case 4:
                    return function(r, n, i, o) { return e.call(t, r, n, i, o) } } return function() { return e.apply(t, arguments) } };
        d.iteratee = function(e, t, r) { return null == e ? d.identity : d.isFunction(e) ? p(e, t, r) : d.isObject(e) ? d.matches(e) : d.property(e) }, d.each = d.forEach = function(e, t, r) { if (null == e) return e;
            t = p(t, r); var n, i = e.length; if (i === +i)
                for (n = 0; i > n; n++) t(e[n], n, e);
            else { var o = d.keys(e); for (n = 0, i = o.length; i > n; n++) t(e[o[n]], o[n], e) } return e }, d.map = d.collect = function(e, t, r) { if (null == e) return [];
            t = d.iteratee(t, r); for (var n, i = e.length !== +e.length && d.keys(e), o = (i || e).length, l = Array(o), s = 0; o > s; s++) n = i ? i[s] : s, l[s] = t(e[n], n, e); return l }; var m = "Reduce of empty array with no initial value";
        d.reduce = d.foldl = d.inject = function(e, t, r, n) { null == e && (e = []), t = p(t, n, 4); var i, o = e.length !== +e.length && d.keys(e),
                l = (o || e).length,
                s = 0; if (arguments.length < 3) { if (!l) throw new TypeError(m);
                r = e[o ? o[s++] : s++] } for (; l > s; s++) i = o ? o[s] : s, r = t(r, e[i], i, e); return r }, d.reduceRight = d.foldr = function(e, t, r, n) { null == e && (e = []), t = p(t, n, 4); var i, o = e.length !== +e.length && d.keys(e),
                l = (o || e).length; if (arguments.length < 3) { if (!l) throw new TypeError(m);
                r = e[o ? o[--l] : --l] } for (; l--;) i = o ? o[l] : l, r = t(r, e[i], i, e); return r }, d.find = d.detect = function(e, t, r) { var n; return t = d.iteratee(t, r), d.some(e, function(e, r, i) { return t(e, r, i) ? (n = e, !0) : void 0 }), n }, d.filter = d.select = function(e, t, r) { var n = []; return null == e ? n : (t = d.iteratee(t, r), d.each(e, function(e, r, i) { t(e, r, i) && n.push(e) }), n) }, d.reject = function(e, t, r) { return d.filter(e, d.negate(d.iteratee(t)), r) }, d.every = d.all = function(e, t, r) { if (null == e) return !0;
            t = d.iteratee(t, r); var n, i, o = e.length !== +e.length && d.keys(e),
                l = (o || e).length; for (n = 0; l > n; n++)
                if (i = o ? o[n] : n, !t(e[i], i, e)) return !1;
            return !0 }, d.some = d.any = function(e, t, r) { if (null == e) return !1;
            t = d.iteratee(t, r); var n, i, o = e.length !== +e.length && d.keys(e),
                l = (o || e).length; for (n = 0; l > n; n++)
                if (i = o ? o[n] : n, t(e[i], i, e)) return !0;
            return !1 }, d.contains = d.include = function(e, t) { return null == e ? !1 : (e.length !== +e.length && (e = d.values(e)), d.indexOf(e, t) >= 0) }, d.invoke = function(e, t) { var r = l.call(arguments, 2),
                n = d.isFunction(t); return d.map(e, function(e) { return (n ? t : e[t]).apply(e, r) }) }, d.pluck = function(e, t) { return d.map(e, d.property(t)) }, d.where = function(e, t) { return d.filter(e, d.matches(t)) }, d.findWhere = function(e, t) { return d.find(e, d.matches(t)) }, d.max = function(e, t, r) { var n, i, o = -1 / 0,
                l = -1 / 0; if (null == t && null != e) { e = e.length === +e.length ? e : d.values(e); for (var s = 0, a = e.length; a > s; s++) n = e[s], n > o && (o = n) } else t = d.iteratee(t, r), d.each(e, function(e, r, n) { i = t(e, r, n), (i > l || i === -1 / 0 && o === -1 / 0) && (o = e, l = i) }); return o }, d.min = function(e, t, r) { var n, i, o = 1 / 0,
                l = 1 / 0; if (null == t && null != e) { e = e.length === +e.length ? e : d.values(e); for (var s = 0, a = e.length; a > s; s++) n = e[s], o > n && (o = n) } else t = d.iteratee(t, r), d.each(e, function(e, r, n) { i = t(e, r, n), (l > i || 1 / 0 === i && 1 / 0 === o) && (o = e, l = i) }); return o }, d.shuffle = function(e) { for (var t, r = e && e.length === +e.length ? e : d.values(e), n = r.length, i = Array(n), o = 0; n > o; o++) t = d.random(0, o), t !== o && (i[o] = i[t]), i[t] = r[o]; return i }, d.sample = function(e, t, r) { return null == t || r ? (e.length !== +e.length && (e = d.values(e)), e[d.random(e.length - 1)]) : d.shuffle(e).slice(0, Math.max(0, t)) }, d.sortBy = function(e, t, r) { return t = d.iteratee(t, r), d.pluck(d.map(e, function(e, r, n) { return { value: e, index: r, criteria: t(e, r, n) } }).sort(function(e, t) { var r = e.criteria,
                    n = t.criteria; if (r !== n) { if (r > n || void 0 === r) return 1; if (n > r || void 0 === n) return -1 } return e.index - t.index }), "value") }; var g = function(e) { return function(t, r, n) { var i = {}; return r = d.iteratee(r, n), d.each(t, function(n, o) { var l = r(n, o, t);
                    e(i, n, l) }), i } };
        d.groupBy = g(function(e, t, r) { d.has(e, r) ? e[r].push(t) : e[r] = [t] }), d.indexBy = g(function(e, t, r) { e[r] = t }), d.countBy = g(function(e, t, r) { d.has(e, r) ? e[r]++ : e[r] = 1 }), d.sortedIndex = function(e, t, r, n) { r = d.iteratee(r, n, 1); for (var i = r(t), o = 0, l = e.length; l > o;) { var s = o + l >>> 1;
                r(e[s]) < i ? o = s + 1 : l = s } return o }, d.toArray = function(e) { return e ? d.isArray(e) ? l.call(e) : e.length === +e.length ? d.map(e, d.identity) : d.values(e) : [] }, d.size = function(e) { return null == e ? 0 : e.length === +e.length ? e.length : d.keys(e).length }, d.partition = function(e, t, r) { t = d.iteratee(t, r); var n = [],
                i = []; return d.each(e, function(e, r, o) {
                (t(e, r, o) ? n : i).push(e) }), [n, i] }, d.first = d.head = d.take = function(e, t, r) { return null == e ? void 0 : null == t || r ? e[0] : 0 > t ? [] : l.call(e, 0, t) }, d.initial = function(e, t, r) { return l.call(e, 0, Math.max(0, e.length - (null == t || r ? 1 : t))) }, d.last = function(e, t, r) { return null == e ? void 0 : null == t || r ? e[e.length - 1] : l.call(e, Math.max(e.length - t, 0)) }, d.rest = d.tail = d.drop = function(e, t, r) { return l.call(e, null == t || r ? 1 : t) }, d.compact = function(e) { return d.filter(e, d.identity) }; var v = function(e, t, r, n) { if (t && d.every(e, d.isArray)) return s.apply(n, e); for (var i = 0, l = e.length; l > i; i++) { var a = e[i];
                d.isArray(a) || d.isArguments(a) ? t ? o.apply(n, a) : v(a, t, r, n) : r || n.push(a) } return n };
        d.flatten = function(e, t) { return v(e, t, !1, []) }, d.without = function(e) { return d.difference(e, l.call(arguments, 1)) }, d.uniq = d.unique = function(e, t, r, n) { if (null == e) return [];
            d.isBoolean(t) || (n = r, r = t, t = !1), null != r && (r = d.iteratee(r, n)); for (var i = [], o = [], l = 0, s = e.length; s > l; l++) { var a = e[l]; if (t) l && o === a || i.push(a), o = a;
                else if (r) { var u = r(a, l, e);
                    d.indexOf(o, u) < 0 && (o.push(u), i.push(a)) } else d.indexOf(i, a) < 0 && i.push(a) } return i }, d.union = function() { return d.uniq(v(arguments, !0, !0, [])) }, d.intersection = function(e) { if (null == e) return []; for (var t = [], r = arguments.length, n = 0, i = e.length; i > n; n++) { var o = e[n]; if (!d.contains(t, o)) { for (var l = 1; r > l && d.contains(arguments[l], o); l++);
                    l === r && t.push(o) } } return t }, d.difference = function(e) { var t = v(l.call(arguments, 1), !0, !0, []); return d.filter(e, function(e) { return !d.contains(t, e) }) }, d.zip = function(e) { if (null == e) return []; for (var t = d.max(arguments, "length").length, r = Array(t), n = 0; t > n; n++) r[n] = d.pluck(arguments, n); return r }, d.object = function(e, t) { if (null == e) return {}; for (var r = {}, n = 0, i = e.length; i > n; n++) t ? r[e[n]] = t[n] : r[e[n][0]] = e[n][1]; return r }, d.indexOf = function(e, t, r) { if (null == e) return -1; var n = 0,
                i = e.length; if (r) { if ("number" != typeof r) return n = d.sortedIndex(e, t), e[n] === t ? n : -1;
                n = 0 > r ? Math.max(0, i + r) : r } for (; i > n; n++)
                if (e[n] === t) return n;
            return -1 }, d.lastIndexOf = function(e, t, r) { if (null == e) return -1; var n = e.length; for ("number" == typeof r && (n = 0 > r ? n + r + 1 : Math.min(n, r + 1)); --n >= 0;)
                if (e[n] === t) return n;
            return -1 }, d.range = function(e, t, r) { arguments.length <= 1 && (t = e || 0, e = 0), r = r || 1; for (var n = Math.max(Math.ceil((t - e) / r), 0), i = Array(n), o = 0; n > o; o++, e += r) i[o] = e; return i }; var y = function() {};
        d.bind = function(e, t) { var r, n; if (f && e.bind === f) return f.apply(e, l.call(arguments, 1)); if (!d.isFunction(e)) throw new TypeError("Bind must be called on a function"); return r = l.call(arguments, 2), n = function() { if (!(this instanceof n)) return e.apply(t, r.concat(l.call(arguments)));
                y.prototype = e.prototype; var i = new y;
                y.prototype = null; var o = e.apply(i, r.concat(l.call(arguments))); return d.isObject(o) ? o : i } }, d.partial = function(e) { var t = l.call(arguments, 1); return function() { for (var r = 0, n = t.slice(), i = 0, o = n.length; o > i; i++) n[i] === d && (n[i] = arguments[r++]); for (; r < arguments.length;) n.push(arguments[r++]); return e.apply(this, n) } }, d.bindAll = function(e) { var t, r, n = arguments.length; if (1 >= n) throw new Error("bindAll must be passed function names"); for (t = 1; n > t; t++) r = arguments[t], e[r] = d.bind(e[r], e); return e }, d.memoize = function(e, t) { var r = function(n) { var i = r.cache,
                    o = t ? t.apply(this, arguments) : n; return d.has(i, o) || (i[o] = e.apply(this, arguments)), i[o] }; return r.cache = {}, r }, d.delay = function(e, t) { var r = l.call(arguments, 2); return setTimeout(function() { return e.apply(null, r) }, t) }, d.defer = function(e) { return d.delay.apply(d, [e, 1].concat(l.call(arguments, 1))) }, d.throttle = function(e, t, r) { var n, i, o, l = null,
                s = 0;
            r || (r = {}); var a = function() { s = r.leading === !1 ? 0 : d.now(), l = null, o = e.apply(n, i), l || (n = i = null) }; return function() { var u = d.now();
                s || r.leading !== !1 || (s = u); var c = t - (u - s); return n = this, i = arguments, 0 >= c || c > t ? (clearTimeout(l), l = null, s = u, o = e.apply(n, i), l || (n = i = null)) : l || r.trailing === !1 || (l = setTimeout(a, c)), o } }, d.debounce = function(e, t, r) { var n, i, o, l, s, a = function() { var u = d.now() - l;
                t > u && u > 0 ? n = setTimeout(a, t - u) : (n = null, r || (s = e.apply(o, i), n || (o = i = null))) }; return function() { o = this, i = arguments, l = d.now(); var u = r && !n; return n || (n = setTimeout(a, t)), u && (s = e.apply(o, i), o = i = null), s } }, d.wrap = function(e, t) { return d.partial(t, e) }, d.negate = function(e) { return function() { return !e.apply(this, arguments) } }, d.compose = function() { var e = arguments,
                t = e.length - 1; return function() { for (var r = t, n = e[t].apply(this, arguments); r--;) n = e[r].call(this, n); return n } }, d.after = function(e, t) { return function() { return --e < 1 ? t.apply(this, arguments) : void 0 } }, d.before = function(e, t) { var r; return function() { return --e > 0 ? r = t.apply(this, arguments) : t = null, r } }, d.once = d.partial(d.before, 2), d.keys = function(e) { if (!d.isObject(e)) return []; if (h) return h(e); var t = []; for (var r in e) d.has(e, r) && t.push(r); return t }, d.values = function(e) { for (var t = d.keys(e), r = t.length, n = Array(r), i = 0; r > i; i++) n[i] = e[t[i]]; return n }, d.pairs = function(e) { for (var t = d.keys(e), r = t.length, n = Array(r), i = 0; r > i; i++) n[i] = [t[i], e[t[i]]]; return n }, d.invert = function(e) { for (var t = {}, r = d.keys(e), n = 0, i = r.length; i > n; n++) t[e[r[n]]] = r[n]; return t }, d.functions = d.methods = function(e) { var t = []; for (var r in e) d.isFunction(e[r]) && t.push(r); return t.sort() }, d.extend = function(e) { if (!d.isObject(e)) return e; for (var t, r, n = 1, i = arguments.length; i > n; n++) { t = arguments[n]; for (r in t) u.call(t, r) && (e[r] = t[r]) } return e }, d.pick = function(e, t, r) { var n, i = {}; if (null == e) return i; if (d.isFunction(t)) { t = p(t, r); for (n in e) { var o = e[n];
                    t(o, n, e) && (i[n] = o) } } else { var a = s.apply([], l.call(arguments, 1));
                e = new Object(e); for (var u = 0, c = a.length; c > u; u++) n = a[u], n in e && (i[n] = e[n]) } return i }, d.omit = function(e, t, r) { if (d.isFunction(t)) t = d.negate(t);
            else { var n = d.map(s.apply([], l.call(arguments, 1)), String);
                t = function(e, t) { return !d.contains(n, t) } } return d.pick(e, t, r) }, d.defaults = function(e) { if (!d.isObject(e)) return e; for (var t = 1, r = arguments.length; r > t; t++) { var n = arguments[t]; for (var i in n) void 0 === e[i] && (e[i] = n[i]) } return e }, d.clone = function(e) { return d.isObject(e) ? d.isArray(e) ? e.slice() : d.extend({}, e) : e }, d.tap = function(e, t) { return t(e), e }; var b = function(e, t, r, n) { if (e === t) return 0 !== e || 1 / e === 1 / t; if (null == e || null == t) return e === t;
            e instanceof d && (e = e._wrapped), t instanceof d && (t = t._wrapped); var i = a.call(e); if (i !== a.call(t)) return !1; switch (i) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t } if ("object" != typeof e || "object" != typeof t) return !1; for (var o = r.length; o--;)
                if (r[o] === e) return n[o] === t;
            var l = e.constructor,
                s = t.constructor; if (l !== s && "constructor" in e && "constructor" in t && !(d.isFunction(l) && l instanceof l && d.isFunction(s) && s instanceof s)) return !1;
            r.push(e), n.push(t); var u, c; if ("[object Array]" === i) { if (u = e.length, c = u === t.length)
                    for (; u-- && (c = b(e[u], t[u], r, n));); } else { var h, f = d.keys(e); if (u = f.length, c = d.keys(t).length === u)
                    for (; u-- && (h = f[u], c = d.has(t, h) && b(e[h], t[h], r, n));); } return r.pop(), n.pop(), c };
        d.isEqual = function(e, t) { return b(e, t, [], []) }, d.isEmpty = function(e) { if (null == e) return !0; if (d.isArray(e) || d.isString(e) || d.isArguments(e)) return 0 === e.length; for (var t in e)
                if (d.has(e, t)) return !1;
            return !0 }, d.isElement = function(e) { return !(!e || 1 !== e.nodeType) }, d.isArray = c || function(e) { return "[object Array]" === a.call(e) }, d.isObject = function(e) { var t = typeof e; return "function" === t || "object" === t && !!e }, d.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) { d["is" + e] = function(t) { return a.call(t) === "[object " + e + "]" } }), d.isArguments(arguments) || (d.isArguments = function(e) { return d.has(e, "callee") }), "function" != typeof /./ && (d.isFunction = function(e) { return "function" == typeof e || !1 }), d.isFinite = function(e) { return isFinite(e) && !isNaN(parseFloat(e)) }, d.isNaN = function(e) { return d.isNumber(e) && e !== +e }, d.isBoolean = function(e) { return e === !0 || e === !1 || "[object Boolean]" === a.call(e) }, d.isNull = function(e) { return null === e }, d.isUndefined = function(e) { return void 0 === e }, d.has = function(e, t) { return null != e && u.call(e, t) }, d.noConflict = function() { return e._ = t, this }, d.identity = function(e) { return e }, d.constant = function(e) { return function() { return e } }, d.noop = function() {}, d.property = function(e) { return function(t) { return t[e] } }, d.matches = function(e) { var t = d.pairs(e),
                r = t.length; return function(e) { if (null == e) return !r;
                e = new Object(e); for (var n = 0; r > n; n++) { var i = t[n],
                        o = i[0]; if (i[1] !== e[o] || !(o in e)) return !1 } return !0 } }, d.times = function(e, t, r) { var n = Array(Math.max(0, e));
            t = p(t, r, 1); for (var i = 0; e > i; i++) n[i] = t(i); return n }, d.random = function(e, t) { return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1)) }, d.now = Date.now || function() { return (new Date).getTime() }; var x = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            w = d.invert(x),
            k = function(e) { var t = function(t) { return e[t] },
                    r = "(?:" + d.keys(e).join("|") + ")",
                    n = RegExp(r),
                    i = RegExp(r, "g"); return function(e) { return e = null == e ? "" : "" + e, n.test(e) ? e.replace(i, t) : e } };
        d.escape = k(x), d.unescape = k(w), d.result = function(e, t) { if (null == e) return void 0; var r = e[t]; return d.isFunction(r) ? e[t]() : r }; var C = 0;
        d.uniqueId = function(e) { var t = ++C + ""; return e ? e + t : t }, d.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var L = /(.)^/,
            S = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
            M = /\\|'|\r|\n|\u2028|\u2029/g,
            T = function(e) { return "\\" + S[e] };
        d.template = function(e, t, r) {!t && r && (t = r), t = d.defaults({}, t, d.templateSettings); var n = RegExp([(t.escape || L).source, (t.interpolate || L).source, (t.evaluate || L).source].join("|") + "|$", "g"),
                i = 0,
                o = "__p+='";
            e.replace(n, function(t, r, n, l, s) { return o += e.slice(i, s).replace(M, T), i = s + t.length, r ? o += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : n ? o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : l && (o += "';\n" + l + "\n__p+='"), t }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n"; try { var l = new Function(t.variable || "obj", "_", o) } catch (s) { throw s.source = o, s } var a = function(e) { return l.call(this, e, d) },
                u = t.variable || "obj"; return a.source = "function(" + u + "){\n" + o + "}", a }, d.chain = function(e) { var t = d(e); return t._chain = !0, t }; var E = function(e) { return this._chain ? d(e).chain() : e };
        d.mixin = function(e) { d.each(d.functions(e), function(t) { var r = d[t] = e[t];
                d.prototype[t] = function() { var e = [this._wrapped]; return o.apply(e, arguments), E.call(this, r.apply(d, e)) } }) }, d.mixin(d), d.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) { var t = r[e];
            d.prototype[e] = function() { var r = this._wrapped; return t.apply(r, arguments), "shift" !== e && "splice" !== e || 0 !== r.length || delete r[0], E.call(this, r) } }), d.each(["concat", "join", "slice"], function(e) { var t = r[e];
            d.prototype[e] = function() { return E.call(this, t.apply(this._wrapped, arguments)) } }), d.prototype.value = function() { return this._wrapped }, "function" == typeof define && define.amd && define("underscore", [], function() { return d }) }.call(this),
    function() {
        function e(e) { this.tokens = [], this.tokens.links = {}, this.options = e || u.defaults, this.rules = c.normal, this.options.gfm && (this.rules = this.options.tables ? c.tables : c.gfm) }

        function t(e, t) {
            if (this.options = t || u.defaults, this.links = e, this.rules = h.normal, this.renderer = this.options.renderer || new r, this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
            this.options.gfm ? this.rules = this.options.breaks ? h.breaks : h.gfm : this.options.pedantic && (this.rules = h.pedantic)
        }

        function r(e) { this.options = e || {} }

        function n(e) { this.tokens = [], this.token = null, this.options = e || u.defaults, this.options.renderer = this.options.renderer || new r, this.renderer = this.options.renderer, this.renderer.options = this.options }

        function i(e, t) { return e.replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;") }

        function o(e) { return e.replace(/&([#\w]+);/g, function(e, t) { return t = t.toLowerCase(), "colon" === t ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "" }) }

        function l(e, t) { return e = e.source, t = t || "",
                function r(n, i) { return n ? (i = i.source || i, i = i.replace(/(^|[^\[])\^/g, "$1"), e = e.replace(n, i), r) : new RegExp(e, t) } }

        function s() {}

        function a(e) { for (var t, r, n = 1; n < arguments.length; n++) { t = arguments[n]; for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]) } return e }

        function u(t, r, o) { if (o || "function" == typeof r) { o || (o = r, r = null), r = a({}, u.defaults, r || {}); var l, s, c = r.highlight,
                    h = 0; try { l = e.lex(t, r) } catch (f) { return o(f) }
                s = l.length; var d = function() { var e, t; try { e = n.parse(l, r) } catch (i) { t = i } return r.highlight = c, t ? o(t) : o(null, e) }; if (!c || c.length < 3) return d(); if (delete r.highlight, !s) return d(); for (; h < l.length; h++) ! function(e) { return "code" !== e.type ? --s || d() : c(e.text, e.lang, function(t, r) { return null == r || r === e.text ? --s || d() : (e.text = r, e.escaped = !0, --s || d(), void 0) }) }(l[h]) } else try { return r && (r = a({}, u.defaults, r)), n.parse(e.lex(t, r), r) } catch (f) { if (f.message += "\nPlease report this to https://github.com/chjj/marked.", (r || u.defaults).silent) return "<p>An error occured:</p><pre>" + i(f.message + "", !0) + "</pre>"; throw f } }
        var c = { newline: /^\n+/, code: /^( {4}[^\n]+\n*)+/, fences: s, hr: /^( *[-*_]){3,} *(?:\n+|$)/, heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/, nptable: s, lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/, blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/, list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/, html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/, def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/, table: s, paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/, text: /^[^\n]+/ };
        c.bullet = /(?:[*+-]|\d+\.)/, c.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/, c.item = l(c.item, "gm")(/bull/g, c.bullet)(), c.list = l(c.list)(/bull/g, c.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + c.def.source + ")")(), c.blockquote = l(c.blockquote)("def", c.def)(), c._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b", c.html = l(c.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, c._tag)(), c.paragraph = l(c.paragraph)("hr", c.hr)("heading", c.heading)("lheading", c.lheading)("blockquote", c.blockquote)("tag", "<" + c._tag)("def", c.def)(), c.normal = a({}, c), c.gfm = a({}, c.normal, { fences: /^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/, paragraph: /^/ }), c.gfm.paragraph = l(c.paragraph)("(?!", "(?!" + c.gfm.fences.source.replace("\\1", "\\2") + "|" + c.list.source.replace("\\1", "\\3") + "|")(), c.tables = a({}, c.gfm, { nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/, table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/ }), e.rules = c, e.lex = function(t, r) { var n = new e(r); return n.lex(t) }, e.prototype.lex = function(e) { return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0) }, e.prototype.token = function(e, t, r) { for (var n, i, o, l, s, a, u, h, f, e = e.replace(/^ +$/gm, ""); e;)
                if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({ type: "space" })), o = this.rules.code.exec(e)) e = e.substring(o[0].length), o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({ type: "code", text: this.options.pedantic ? o : o.replace(/\n+$/, "") });
                else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "code", lang: o[2], text: o[3] });
            else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "heading", depth: o[1].length, text: o[2] });
            else if (t && (o = this.rules.nptable.exec(e))) { for (e = e.substring(o[0].length), a = { type: "table", header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */), align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: o[3].replace(/\n$/, "").split("\n") }, h = 0; h < a.align.length; h++) a.align[h] = /^ *-+: *$/.test(a.align[h]) ? "right" : /^ *:-+: *$/.test(a.align[h]) ? "center" : /^ *:-+ *$/.test(a.align[h]) ? "left" : null; for (h = 0; h < a.cells.length; h++) a.cells[h] = a.cells[h].split(/ *\| */);
                this.tokens.push(a) } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "heading", depth: "=" === o[2] ? 1 : 2, text: o[1] });
            else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "hr" });
            else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "blockquote_start" }), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, t, !0), this.tokens.push({ type: "blockquote_end" });
            else if (o = this.rules.list.exec(e)) { for (e = e.substring(o[0].length), l = o[2], this.tokens.push({ type: "list_start", ordered: l.length > 1 }), o = o[0].match(this.rules.item), n = !1, f = o.length, h = 0; f > h; h++) a = o[h], u = a.length, a = a.replace(/^ *([*+-]|\d+\.) +/, ""), ~a.indexOf("\n ") && (u -= a.length, a = this.options.pedantic ? a.replace(/^ {1,4}/gm, "") : a.replace(new RegExp("^ {1," + u + "}", "gm"), "")), this.options.smartLists && h !== f - 1 && (s = c.bullet.exec(o[h + 1])[0], l === s || l.length > 1 && s.length > 1 || (e = o.slice(h + 1).join("\n") + e, h = f - 1)), i = n || /\n\n(?!\s*$)/.test(a), h !== f - 1 && (n = "\n" === a.charAt(a.length - 1), i || (i = n)), this.tokens.push({ type: i ? "loose_item_start" : "list_item_start" }), this.token(a, !1, r), this.tokens.push({ type: "list_item_end" });
                this.tokens.push({ type: "list_end" }) } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: this.options.sanitize ? "paragraph" : "html", pre: "pre" === o[1] || "script" === o[1] || "style" === o[1], text: o[0] });
            else if (!r && t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), this.tokens.links[o[1].toLowerCase()] = { href: o[2], title: o[3] };
            else if (t && (o = this.rules.table.exec(e))) { for (e = e.substring(o[0].length), a = { type: "table", header: o[1].replace(/^ *| *\| *$/g, "").split(/ *\| */), align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: o[3].replace(/(?: *\| *)?\n$/, "").split("\n") }, h = 0; h < a.align.length; h++) a.align[h] = /^ *-+: *$/.test(a.align[h]) ? "right" : /^ *:-+: *$/.test(a.align[h]) ? "center" : /^ *:-+ *$/.test(a.align[h]) ? "left" : null; for (h = 0; h < a.cells.length; h++) a.cells[h] = a.cells[h].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                this.tokens.push(a) } else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({ type: "paragraph", text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1] });
            else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({ type: "text", text: o[0] });
            else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0)); return this.tokens };
        var h = { escape: /^\\([\\`*{}\[\]()#+\-.!_>])/, autolink: /^<([^ >]+(@|:\/)[^ >]+)>/, url: s, tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/, link: /^!?\[(inside)\]\(href\)/, reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/, nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/, strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/, em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/, code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, br: /^ {2,}\n(?!\s*$)/, del: s, text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/ };
        h._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/, h._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/, h.link = l(h.link)("inside", h._inside)("href", h._href)(), h.reflink = l(h.reflink)("inside", h._inside)(), h.normal = a({}, h), h.pedantic = a({}, h.normal, { strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/ }), h.gfm = a({}, h.normal, { escape: l(h.escape)("])", "~|])")(), url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, del: /^~~(?=\S)([\s\S]*?\S)~~/, text: l(h.text)("]|", "~]|")("|", "|https?://|")() }), h.breaks = a({}, h.gfm, { br: l(h.br)("{2,}", "*")(), text: l(h.gfm.text)("{2,}", "*")() }), t.rules = h, t.output = function(e, r, n) { var i = new t(r, n); return i.output(e) }, t.prototype.output = function(e) { for (var t, r, n, o, l = ""; e;)
                if (o = this.rules.escape.exec(e)) e = e.substring(o[0].length), l += o[1];
                else if (o = this.rules.autolink.exec(e)) e = e.substring(o[0].length), "@" === o[2] ? (r = ":" === o[1].charAt(6) ? this.mangle(o[1].substring(7)) : this.mangle(o[1]), n = this.mangle("mailto:") + r) : (r = i(o[1]), n = r), l += this.renderer.link(n, null, r);
            else if (this.inLink || !(o = this.rules.url.exec(e))) { if (o = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(o[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(o[0]) && (this.inLink = !1), e = e.substring(o[0].length), l += this.options.sanitize ? i(o[0]) : o[0];
                else if (o = this.rules.link.exec(e)) e = e.substring(o[0].length), this.inLink = !0, l += this.outputLink(o, { href: o[2], title: o[3] }), this.inLink = !1;
                else if ((o = this.rules.reflink.exec(e)) || (o = this.rules.nolink.exec(e))) { if (e = e.substring(o[0].length), t = (o[2] || o[1]).replace(/\s+/g, " "), t = this.links[t.toLowerCase()], !t || !t.href) { l += o[0].charAt(0), e = o[0].substring(1) + e; continue }
                    this.inLink = !0, l += this.outputLink(o, t), this.inLink = !1 } else if (o = this.rules.strong.exec(e)) e = e.substring(o[0].length), l += this.renderer.strong(this.output(o[2] || o[1]));
                else if (o = this.rules.em.exec(e)) e = e.substring(o[0].length), l += this.renderer.em(this.output(o[2] || o[1]));
                else if (o = this.rules.code.exec(e)) e = e.substring(o[0].length), l += this.renderer.codespan(i(o[2], !0));
                else if (o = this.rules.br.exec(e)) e = e.substring(o[0].length), l += this.renderer.br();
                else if (o = this.rules.del.exec(e)) e = e.substring(o[0].length), l += this.renderer.del(this.output(o[1]));
                else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), l += i(this.smartypants(o[0]));
                else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0)) } else e = e.substring(o[0].length), r = i(o[1]), n = r, l += this.renderer.link(n, null, r); return l }, t.prototype.outputLink = function(e, t) { var r = i(t.href),
                n = t.title ? i(t.title) : null; return "!" !== e[0].charAt(0) ? this.renderer.link(r, n, this.output(e[1])) : this.renderer.image(r, n, i(e[1])) }, t.prototype.smartypants = function(e) { return this.options.smartypants ? e.replace(/--/g, "—").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e }, t.prototype.mangle = function(e) { for (var t, r = "", n = e.length, i = 0; n > i; i++) t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), r += "&#" + t + ";"; return r }, r.prototype.code = function(e, t, r) { if (this.options.highlight) { var n = this.options.highlight(e, t);
                null != n && n !== e && (r = !0, e = n) } return t ? '<pre><code class="' + this.options.langPrefix + i(t, !0) + '">' + (r ? e : i(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (r ? e : i(e, !0)) + "\n</code></pre>" }, r.prototype.blockquote = function(e) { return "<blockquote>\n" + e + "</blockquote>\n" }, r.prototype.html = function(e) { return e }, r.prototype.heading = function(e, t, r) { return "<h" + t + ' id="' + this.options.headerPrefix + r.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n" }, r.prototype.hr = function() { return this.options.xhtml ? "<hr/>\n" : "<hr>\n" }, r.prototype.list = function(e, t) { var r = t ? "ol" : "ul"; return "<" + r + ">\n" + e + "</" + r + ">\n" }, r.prototype.listitem = function(e) { return "<li>" + e + "</li>\n" }, r.prototype.paragraph = function(e) { return "<p>" + e + "</p>\n" }, r.prototype.table = function(e, t) { return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n" }, r.prototype.tablerow = function(e) { return "<tr>\n" + e + "</tr>\n" }, r.prototype.tablecell = function(e, t) { var r = t.header ? "th" : "td",
                n = t.align ? "<" + r + ' style="text-align:' + t.align + '">' : "<" + r + ">"; return n + e + "</" + r + ">\n" }, r.prototype.strong = function(e) { return "<strong>" + e + "</strong>" }, r.prototype.em = function(e) { return "<em>" + e + "</em>" }, r.prototype.codespan = function(e) { return "<code>" + e + "</code>" }, r.prototype.br = function() { return this.options.xhtml ? "<br/>" : "<br>" }, r.prototype.del = function(e) { return "<del>" + e + "</del>" }, r.prototype.link = function(e, t, r) { if (this.options.sanitize) { try { var n = decodeURIComponent(o(e)).replace(/[^\w:]/g, "").toLowerCase() } catch (i) { return "" } if (0 === n.indexOf("javascript:")) return "" } var l = '<a href="' + e + '"'; return t && (l += ' title="' + t + '"'), l += ">" + r + "</a>" }, r.prototype.image = function(e, t, r) { var n = '<img src="' + e + '" alt="' + r + '"'; return t && (n += ' title="' + t + '"'), n += this.options.xhtml ? "/>" : ">" }, n.parse = function(e, t, r) { var i = new n(t, r); return i.parse(e) }, n.prototype.parse = function(e) { this.inline = new t(e.links, this.options, this.renderer), this.tokens = e.reverse(); for (var r = ""; this.next();) r += this.tok(); return r }, n.prototype.next = function() { return this.token = this.tokens.pop() }, n.prototype.peek = function() { return this.tokens[this.tokens.length - 1] || 0 }, n.prototype.parseText = function() { for (var e = this.token.text;
                "text" === this.peek().type;) e += "\n" + this.next().text; return this.inline.output(e) }, n.prototype.tok = function() { switch (this.token.type) {
                case "space":
                    return "";
                case "hr":
                    return this.renderer.hr();
                case "heading":
                    return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                case "code":
                    return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                case "table":
                    var e, t, r, n, i, o = "",
                        l = ""; for (r = "", e = 0; e < this.token.header.length; e++) n = { header: !0, align: this.token.align[e] }, r += this.renderer.tablecell(this.inline.output(this.token.header[e]), { header: !0, align: this.token.align[e] }); for (o += this.renderer.tablerow(r), e = 0; e < this.token.cells.length; e++) { for (t = this.token.cells[e], r = "", i = 0; i < t.length; i++) r += this.renderer.tablecell(this.inline.output(t[i]), { header: !1, align: this.token.align[i] });
                        l += this.renderer.tablerow(r) } return this.renderer.table(o, l);
                case "blockquote_start":
                    for (var l = "";
                        "blockquote_end" !== this.next().type;) l += this.tok(); return this.renderer.blockquote(l);
                case "list_start":
                    for (var l = "", s = this.token.ordered;
                        "list_end" !== this.next().type;) l += this.tok(); return this.renderer.list(l, s);
                case "list_item_start":
                    for (var l = "";
                        "list_item_end" !== this.next().type;) l += "text" === this.token.type ? this.parseText() : this.tok(); return this.renderer.listitem(l);
                case "loose_item_start":
                    for (var l = "";
                        "list_item_end" !== this.next().type;) l += this.tok(); return this.renderer.listitem(l);
                case "html":
                    var a = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text); return this.renderer.html(a);
                case "paragraph":
                    return this.renderer.paragraph(this.inline.output(this.token.text));
                case "text":
                    return this.renderer.paragraph(this.parseText()) } }, s.exec = s, u.options = u.setOptions = function(e) { return a(u.defaults, e), u }, u.defaults = { gfm: !0, tables: !0, breaks: !1, pedantic: !1, sanitize: !1, smartLists: !1, silent: !1, highlight: null, langPrefix: "lang-", smartypants: !1, headerPrefix: "", renderer: new r, xhtml: !1 }, u.Parser = n, u.parser = n.parse, u.Renderer = r, u.Lexer = e, u.lexer = e.lex, u.InlineLexer = t, u.inlineLexer = t.output, u.parse = u, "object" == typeof exports ? module.exports = u : "function" == typeof define && define.amd ? define(function() { return u }) : this.marked = u
    }.call(function() { return this || ("undefined" != typeof window ? window : global) }()), ! function() {
        function e(t) { var r = e.modules[t]; if (!r) throw new Error('failed to require "' + t + '"'); return "exports" in r || "function" != typeof r.definition || (r.client = r.component = !0, r.definition.call(this, r.exports = {}, r), delete r.definition), r.exports }
        e.loader = "component", e.helper = {}, e.helper.semVerSort = function(e, t) { for (var r = e.version.split("."), n = t.version.split("."), i = 0; i < r.length; ++i) { var o = parseInt(r[i], 10),
                    l = parseInt(n[i], 10); if (o !== l) return o > l ? 1 : -1; var s = r[i].substr(("" + o).length),
                    a = n[i].substr(("" + l).length); if ("" === s && "" !== a) return 1; if ("" !== s && "" === a) return -1; if ("" !== s && "" !== a) return s > a ? 1 : -1 } return 0 }, e.latest = function(t, r) {
            function n(e) { throw new Error('failed to find latest module of "' + e + '"') } var i = /(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/,
                o = /(.*)~(.*)/;
            o.test(t) || n(t); for (var l = Object.keys(e.modules), s = [], a = [], u = 0; u < l.length; u++) { var c = l[u]; if (new RegExp(t + "@").test(c)) { var h = c.substr(t.length + 1),
                        f = i.exec(c);
                    null != f ? s.push({ version: h, name: c }) : a.push({ version: h, name: c }) } } if (0 === s.concat(a).length && n(t), s.length > 0) { var d = s.sort(e.helper.semVerSort).pop().name; return r === !0 ? d : e(d) } var d = a.pop().name; return r === !0 ? d : e(d) }, e.modules = {}, e.register = function(t, r) { e.modules[t] = { definition: r } }, e.define = function(t, r) { e.modules[t] = { exports: r } }, e.register("component~emitter@1.1.2", function(e, t) {
            function r(e) { return e ? n(e) : void 0 }

            function n(e) { for (var t in r.prototype) e[t] = r.prototype[t]; return e }
            t.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) { return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this }, r.prototype.once = function(e, t) {
                function r() { n.off(e, r), t.apply(this, arguments) } var n = this; return this._callbacks = this._callbacks || {}, r.fn = t, this.on(e, r), this }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) { if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this; var r = this._callbacks[e]; if (!r) return this; if (1 == arguments.length) return delete this._callbacks[e], this; for (var n, i = 0; i < r.length; i++)
                    if (n = r[i], n === t || n.fn === t) { r.splice(i, 1); break }
                return this }, r.prototype.emit = function(e) { this._callbacks = this._callbacks || {}; var t = [].slice.call(arguments, 1),
                    r = this._callbacks[e]; if (r) { r = r.slice(0); for (var n = 0, i = r.length; i > n; ++n) r[n].apply(this, t) } return this }, r.prototype.listeners = function(e) { return this._callbacks = this._callbacks || {}, this._callbacks[e] || [] }, r.prototype.hasListeners = function(e) { return !!this.listeners(e).length } }), e.register("dropzone", function(t, r) { r.exports = e("dropzone/lib/dropzone.js") }), e.register("dropzone/lib/dropzone.js", function(t, r) {
            (function() {
                var t, n, i, o, l, s, a, u, c = {}.hasOwnProperty,
                    h = function(e, t) {
                        function r() { this.constructor = e } for (var n in t) c.call(t, n) && (e[n] = t[n]); return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e },
                    f = [].slice;
                n = "undefined" != typeof Emitter && null !== Emitter ? Emitter : e("component~emitter@1.1.2"), a = function() {}, t = function(e) {
                    function t(e, n) { var i, o, l; if (this.element = e, this.version = t.version, this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, ""), this.clickableElements = [], this.listeners = [], this.files = [], "string" == typeof this.element && (this.element = document.querySelector(this.element)), !this.element || null == this.element.nodeType) throw new Error("Invalid dropzone element."); if (this.element.dropzone) throw new Error("Dropzone already attached."); if (t.instances.push(this), this.element.dropzone = this, i = null != (l = t.optionsForElement(this.element)) ? l : {}, this.options = r({}, this.defaultOptions, i, null != n ? n : {}), this.options.forceFallback || !t.isBrowserSupported()) return this.options.fallback.call(this); if (null == this.options.url && (this.options.url = this.element.getAttribute("action")), !this.options.url) throw new Error("No URL provided."); if (this.options.acceptedFiles && this.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                        this.options.acceptedMimeTypes && (this.options.acceptedFiles = this.options.acceptedMimeTypes, delete this.options.acceptedMimeTypes), this.options.method = this.options.method.toUpperCase(), (o = this.getExistingFallback()) && o.parentNode && o.parentNode.removeChild(o), this.options.previewsContainer !== !1 && (this.previewsContainer = this.options.previewsContainer ? t.getElement(this.options.previewsContainer, "previewsContainer") : this.element), this.options.clickable && (this.clickableElements = this.options.clickable === !0 ? [this.element] : t.getElements(this.options.clickable, "clickable")), this.init() }
                    var r;
                    return h(t, e), t.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached"], t.prototype.defaultOptions = { url: null, method: "post", withCredentials: !1, parallelUploads: 2, uploadMultiple: !1, maxFilesize: 256, paramName: "file", createImageThumbnails: !0, maxThumbnailFilesize: 10, thumbnailWidth: 100, thumbnailHeight: 100, maxFiles: null, params: {}, clickable: !0, ignoreHiddenFiles: !0, acceptedFiles: null, acceptedMimeTypes: null, autoProcessQueue: !0, autoQueue: !0, addRemoveLinks: !1, previewsContainer: null, capture: null, dictDefaultMessage: "Drop files here to upload", dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.", dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.", dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.", dictInvalidFileType: "You can't upload files of this type.", dictResponseError: "Server responded with {{statusCode}} code.", dictCancelUpload: "Cancel upload", dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?", dictRemoveFile: "Remove file", dictRemoveFileConfirmation: null, dictMaxFilesExceeded: "You can not upload any more files.", accept: function(e, t) { return t() }, init: function() { return a }, forceFallback: !1, fallback: function() { var e, r, n, i, o, l; for (this.element.className = "" + this.element.className + " dz-browser-not-supported", l = this.element.getElementsByTagName("div"), i = 0, o = l.length; o > i; i++) e = l[i], /(^| )dz-message($| )/.test(e.className) && (r = e, e.className = "dz-message"); return r || (r = t.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(r)), n = r.getElementsByTagName("span")[0], n && (n.textContent = this.options.dictFallbackMessage), this.element.appendChild(this.getFallbackForm()) }, resize: function(e) { var t, r, n; return t = { srcX: 0, srcY: 0, srcWidth: e.width, srcHeight: e.height }, r = e.width / e.height, t.optWidth = this.options.thumbnailWidth, t.optHeight = this.options.thumbnailHeight, null == t.optWidth && null == t.optHeight ? (t.optWidth = t.srcWidth, t.optHeight = t.srcHeight) : null == t.optWidth ? t.optWidth = r * t.optHeight : null == t.optHeight && (t.optHeight = 1 / r * t.optWidth), n = t.optWidth / t.optHeight, e.height < t.optHeight || e.width < t.optWidth ? (t.trgHeight = t.srcHeight, t.trgWidth = t.srcWidth) : r > n ? (t.srcHeight = e.height, t.srcWidth = t.srcHeight * n) : (t.srcWidth = e.width, t.srcHeight = t.srcWidth / n), t.srcX = (e.width - t.srcWidth) / 2, t.srcY = (e.height - t.srcHeight) / 2, t }, drop: function() { return this.element.classList.remove("dz-drag-hover") }, dragstart: a, dragend: function() { return this.element.classList.remove("dz-drag-hover") }, dragenter: function() { return this.element.classList.add("dz-drag-hover") }, dragover: function() { return this.element.classList.add("dz-drag-hover") }, dragleave: function() { return this.element.classList.remove("dz-drag-hover") }, paste: a, reset: function() { return this.element.classList.remove("dz-started") }, addedfile: function(e) { var r, n, i, o, l, s, a, u, c, h, f, d, p; if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) { for (e.previewElement = t.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement), h = e.previewElement.querySelectorAll("[data-dz-name]"), o = 0, a = h.length; a > o; o++) r = h[o], r.textContent = e.name; for (f = e.previewElement.querySelectorAll("[data-dz-size]"), l = 0, u = f.length; u > l; l++) r = f[l], r.innerHTML = this.filesize(e.size); for (this.options.addRemoveLinks && (e._removeLink = t.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), e.previewElement.appendChild(e._removeLink)), n = function(r) { return function(n) { return n.preventDefault(), n.stopPropagation(), e.status === t.UPLOADING ? t.confirm(r.options.dictCancelUploadConfirmation, function() { return r.removeFile(e) }) : r.options.dictRemoveFileConfirmation ? t.confirm(r.options.dictRemoveFileConfirmation, function() { return r.removeFile(e) }) : r.removeFile(e) } }(this), d = e.previewElement.querySelectorAll("[data-dz-remove]"), p = [], s = 0, c = d.length; c > s; s++) i = d[s], p.push(i.addEventListener("click", n)); return p } }, removedfile: function(e) { var t; return e.previewElement && null != (t = e.previewElement) && t.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass() }, thumbnail: function(e, t) { var r, n, i, o, l; if (e.previewElement) { for (e.previewElement.classList.remove("dz-file-preview"), e.previewElement.classList.add("dz-image-preview"), o = e.previewElement.querySelectorAll("[data-dz-thumbnail]"), l = [], n = 0, i = o.length; i > n; n++) r = o[n], r.alt = e.name, l.push(r.src = t); return l } }, error: function(e, t) { var r, n, i, o, l; if (e.previewElement) { for (e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error), o = e.previewElement.querySelectorAll("[data-dz-errormessage]"), l = [], n = 0, i = o.length; i > n; n++) r = o[n], l.push(r.textContent = t); return l } }, errormultiple: a, processing: function(e) { return e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink) ? e._removeLink.textContent = this.options.dictCancelUpload : void 0 }, processingmultiple: a, uploadprogress: function(e, t) { var r, n, i, o, l; if (e.previewElement) { for (o = e.previewElement.querySelectorAll("[data-dz-uploadprogress]"), l = [], n = 0, i = o.length; i > n; n++) r = o[n], l.push("PROGRESS" === r.nodeName ? r.value = t : r.style.width = "" + t + "%"); return l } }, totaluploadprogress: a, sending: a, sendingmultiple: a, success: function(e) { return e.previewElement ? e.previewElement.classList.add("dz-success") : void 0 }, successmultiple: a, canceled: function(e) { return this.emit("error", e, "Upload canceled.") }, canceledmultiple: a, complete: function(e) { return e._removeLink ? e._removeLink.textContent = this.options.dictRemoveFile : void 0 }, completemultiple: a, maxfilesexceeded: a, maxfilesreached: a, previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-details">\n    <div class="dz-filename"><span data-dz-name></span></div>\n    <div class="dz-size" data-dz-size></div>\n    <img data-dz-thumbnail />\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-success-mark"><span>✔</span></div>\n  <div class="dz-error-mark"><span>✘</span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n</div>' }, r = function() { var e, t, r, n, i, o, l; for (n = arguments[0], r = 2 <= arguments.length ? f.call(arguments, 1) : [], o = 0, l = r.length; l > o; o++) { t = r[o]; for (e in t) i = t[e], n[e] = i } return n }, t.prototype.getAcceptedFiles = function() { var e, t, r, n, i; for (n = this.files, i = [], t = 0, r = n.length; r > t; t++) e = n[t], e.accepted && i.push(e); return i }, t.prototype.getRejectedFiles = function() { var e, t, r, n, i; for (n = this.files, i = [], t = 0, r = n.length; r > t; t++) e = n[t], e.accepted || i.push(e); return i }, t.prototype.getFilesWithStatus = function(e) { var t, r, n, i, o; for (i = this.files, o = [], r = 0, n = i.length; n > r; r++) t = i[r], t.status === e && o.push(t); return o }, t.prototype.getQueuedFiles = function() { return this.getFilesWithStatus(t.QUEUED) }, t.prototype.getUploadingFiles = function() { return this.getFilesWithStatus(t.UPLOADING) }, t.prototype.getActiveFiles = function() { var e, r, n, i, o; for (i = this.files, o = [], r = 0, n = i.length; n > r; r++) e = i[r], (e.status === t.UPLOADING || e.status === t.QUEUED) && o.push(e); return o }, t.prototype.init = function() { var e, r, n, i, o, l, s; for ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(t.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length && (n = function(e) { return function() { return e.hiddenFileInput && document.body.removeChild(e.hiddenFileInput), e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), (null == e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), e.hiddenFileInput.className = "dz-hidden-input", null != e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), null != e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", e.hiddenFileInput.style.width = "0", document.body.appendChild(e.hiddenFileInput), e.hiddenFileInput.addEventListener("change", function() { var t, r, i, o; if (r = e.hiddenFileInput.files, r.length)
                                            for (i = 0, o = r.length; o > i; i++) t = r[i], e.addFile(t); return n() }) } }(this))(), this.URL = null != (l = window.URL) ? l : window.webkitURL, s = this.events, i = 0, o = s.length; o > i; i++) e = s[i], this.on(e, this.options[e]); return this.on("uploadprogress", function(e) { return function() { return e.updateTotalUploadProgress() } }(this)), this.on("removedfile", function(e) { return function() { return e.updateTotalUploadProgress() } }(this)), this.on("canceled", function(e) { return function(t) { return e.emit("complete", t) } }(this)), this.on("complete", function(e) { return function() { return 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length ? setTimeout(function() { return e.emit("queuecomplete") }, 0) : void 0 } }(this)), r = function(e) { return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1 }, this.listeners = [{ element: this.element, events: { dragstart: function(e) { return function(t) { return e.emit("dragstart", t) } }(this), dragenter: function(e) { return function(t) { return r(t), e.emit("dragenter", t) } }(this), dragover: function(e) { return function(t) { var n; try { n = t.dataTransfer.effectAllowed } catch (i) {} return t.dataTransfer.dropEffect = "move" === n || "linkMove" === n ? "move" : "copy", r(t), e.emit("dragover", t) } }(this), dragleave: function(e) { return function(t) { return e.emit("dragleave", t) } }(this), drop: function(e) { return function(t) { return r(t), e.drop(t) } }(this), dragend: function(e) { return function(t) { return e.emit("dragend", t) } }(this) } }], this.clickableElements.forEach(function(e) { return function(r) { return e.listeners.push({ element: r, events: { click: function(n) { return r !== e.element || n.target === e.element || t.elementInside(n.target, e.element.querySelector(".dz-message")) ? e.hiddenFileInput.click() : void 0 } } }) } }(this)), this.enable(), this.options.init.call(this) }, t.prototype.destroy = function() { var e; return this.disable(), this.removeAllFiles(!0), (null != (e = this.hiddenFileInput) ? e.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, t.instances.splice(t.instances.indexOf(this), 1) }, t.prototype.updateTotalUploadProgress = function() { var e, t, r, n, i, o, l, s; if (n = 0, r = 0, e = this.getActiveFiles(), e.length) { for (s = this.getActiveFiles(), o = 0, l = s.length; l > o; o++) t = s[o], n += t.upload.bytesSent, r += t.upload.total;
                            i = 100 * n / r } else i = 100; return this.emit("totaluploadprogress", i, r, n) }, t.prototype._getParamName = function(e) { return "function" == typeof this.options.paramName ? this.options.paramName(e) : "" + this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "") }, t.prototype.getFallbackForm = function() { var e, r, n, i; return (e = this.getExistingFallback()) ? e : (n = '<div class="dz-fallback">', this.options.dictFallbackText && (n += "<p>" + this.options.dictFallbackText + "</p>"), n += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>', r = t.createElement(n), "FORM" !== this.element.tagName ? (i = t.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>'), i.appendChild(r)) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != i ? i : r) }, t.prototype.getExistingFallback = function() { var e, t, r, n, i, o; for (t = function(e) { var t, r, n; for (r = 0, n = e.length; n > r; r++)
                                    if (t = e[r], /(^| )fallback($| )/.test(t.className)) return t }, o = ["div", "form"], n = 0, i = o.length; i > n; n++)
                            if (r = o[n], e = t(this.element.getElementsByTagName(r))) return e }, t.prototype.setupEventListeners = function() {
                        var e, t, r, n, i, o, l;
                        for (o = this.listeners, l = [], n = 0, i = o.length; i > n; n++) e = o[n], l.push(function() {
                            var n, i;
                            n = e.events, i = [];
                            for (t in n) r = n[t], i.push(e.element.addEventListener(t, r, !1));
                            return i
                        }());
                        return l
                    }, t.prototype.removeEventListeners = function() { var e, t, r, n, i, o, l; for (o = this.listeners, l = [], n = 0, i = o.length; i > n; n++) e = o[n], l.push(function() { var n, i;
                            n = e.events, i = []; for (t in n) r = n[t], i.push(e.element.removeEventListener(t, r, !1)); return i }()); return l }, t.prototype.disable = function() { var e, t, r, n, i; for (this.clickableElements.forEach(function(e) { return e.classList.remove("dz-clickable") }), this.removeEventListeners(), n = this.files, i = [], t = 0, r = n.length; r > t; t++) e = n[t], i.push(this.cancelUpload(e)); return i }, t.prototype.enable = function() { return this.clickableElements.forEach(function(e) { return e.classList.add("dz-clickable") }), this.setupEventListeners() }, t.prototype.filesize = function(e) { var t; return e >= 109951162777.6 ? (e /= 109951162777.6, t = "TiB") : e >= 107374182.4 ? (e /= 107374182.4, t = "GiB") : e >= 104857.6 ? (e /= 104857.6, t = "MiB") : e >= 102.4 ? (e /= 102.4, t = "KiB") : (e = 10 * e, t = "b"), "<strong>" + Math.round(e) / 10 + "</strong> " + t }, t.prototype._updateMaxFilesReachedClass = function() { return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached") }, t.prototype.drop = function(e) { var t, r;
                        e.dataTransfer && (this.emit("drop", e), t = e.dataTransfer.files, t.length && (r = e.dataTransfer.items, r && r.length && null != r[0].webkitGetAsEntry ? this._addFilesFromItems(r) : this.handleFiles(t))) }, t.prototype.paste = function(e) { var t, r; return null != (null != e && null != (r = e.clipboardData) ? r.items : void 0) ? (this.emit("paste", e), t = e.clipboardData.items, t.length ? this._addFilesFromItems(t) : void 0) : void 0 }, t.prototype.handleFiles = function(e) { var t, r, n, i; for (i = [], r = 0, n = e.length; n > r; r++) t = e[r], i.push(this.addFile(t)); return i }, t.prototype._addFilesFromItems = function(e) { var t, r, n, i, o; for (o = [], n = 0, i = e.length; i > n; n++) r = e[n], o.push(null != r.webkitGetAsEntry && (t = r.webkitGetAsEntry()) ? t.isFile ? this.addFile(r.getAsFile()) : t.isDirectory ? this._addFilesFromDirectory(t, t.name) : void 0 : null != r.getAsFile ? null == r.kind || "file" === r.kind ? this.addFile(r.getAsFile()) : void 0 : void 0); return o }, t.prototype._addFilesFromDirectory = function(e, t) { var r, n; return r = e.createReader(), n = function(e) { return function(r) { var n, i, o; for (i = 0, o = r.length; o > i; i++) n = r[i], n.isFile ? n.file(function(r) { return e.options.ignoreHiddenFiles && "." === r.name.substring(0, 1) ? void 0 : (r.fullPath = "" + t + "/" + r.name, e.addFile(r)) }) : n.isDirectory && e._addFilesFromDirectory(n, "" + t + "/" + n.name) } }(this), r.readEntries(n, function(e) { return "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log(e) : void 0 }) }, t.prototype.accept = function(e, r) { return e.size > 1024 * this.options.maxFilesize * 1024 ? r(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : t.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (r(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, r) : r(this.options.dictInvalidFileType) }, t.prototype.addFile = function(e) { return e.upload = { progress: 0, total: e.size, bytesSent: 0 }, this.files.push(e), e.status = t.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, function(t) { return function(r) { return r ? (e.accepted = !1, t._errorProcessing([e], r)) : (e.accepted = !0, t.options.autoQueue && t.enqueueFile(e)), t._updateMaxFilesReachedClass() } }(this)) }, t.prototype.enqueueFiles = function(e) { var t, r, n; for (r = 0, n = e.length; n > r; r++) t = e[r], this.enqueueFile(t); return null }, t.prototype.enqueueFile = function(e) { if (e.status !== t.ADDED || e.accepted !== !0) throw new Error("This file can't be queued because it has already been processed or was rejected."); return e.status = t.QUEUED, this.options.autoProcessQueue ? setTimeout(function(e) { return function() { return e.processQueue() } }(this), 0) : void 0 }, t.prototype._thumbnailQueue = [], t.prototype._processingThumbnail = !1, t.prototype._enqueueThumbnail = function(e) { return this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024 ? (this._thumbnailQueue.push(e), setTimeout(function(e) { return function() { return e._processThumbnailQueue() } }(this), 0)) : void 0 }, t.prototype._processThumbnailQueue = function() { return this._processingThumbnail || 0 === this._thumbnailQueue.length ? void 0 : (this._processingThumbnail = !0, this.createThumbnail(this._thumbnailQueue.shift(), function(e) { return function() { return e._processingThumbnail = !1, e._processThumbnailQueue() } }(this))) }, t.prototype.removeFile = function(e) { return e.status === t.UPLOADING && this.cancelUpload(e), this.files = u(this.files, e), this.emit("removedfile", e), 0 === this.files.length ? this.emit("reset") : void 0 }, t.prototype.removeAllFiles = function(e) { var r, n, i, o; for (null == e && (e = !1), o = this.files.slice(), n = 0, i = o.length; i > n; n++) r = o[n], (r.status !== t.UPLOADING || e) && this.removeFile(r); return null }, t.prototype.createThumbnail = function(e, t) { var r; return r = new FileReader, r.onload = function(n) { return function() { var i; return "image/svg+xml" === e.type ? (n.emit("thumbnail", e, r.result), void(null != t && t())) : (i = document.createElement("img"), i.onload = function() { var r, o, l, a, u, c, h, f; return e.width = i.width, e.height = i.height, l = n.options.resize.call(n, e), null == l.trgWidth && (l.trgWidth = l.optWidth), null == l.trgHeight && (l.trgHeight = l.optHeight), r = document.createElement("canvas"), o = r.getContext("2d"), r.width = l.trgWidth, r.height = l.trgHeight, s(o, i, null != (u = l.srcX) ? u : 0, null != (c = l.srcY) ? c : 0, l.srcWidth, l.srcHeight, null != (h = l.trgX) ? h : 0, null != (f = l.trgY) ? f : 0, l.trgWidth, l.trgHeight), a = r.toDataURL("image/png"), n.emit("thumbnail", e, a), null != t ? t() : void 0 }, i.src = r.result) } }(this), r.readAsDataURL(e) }, t.prototype.processQueue = function() { var e, t, r, n; if (t = this.options.parallelUploads, r = this.getUploadingFiles().length, e = r, !(r >= t) && (n = this.getQueuedFiles(), n.length > 0)) { if (this.options.uploadMultiple) return this.processFiles(n.slice(0, t - r)); for (; t > e;) { if (!n.length) return;
                                this.processFile(n.shift()), e++ } } }, t.prototype.processFile = function(e) { return this.processFiles([e]) }, t.prototype.processFiles = function(e) { var r, n, i; for (n = 0, i = e.length; i > n; n++) r = e[n], r.processing = !0, r.status = t.UPLOADING, this.emit("processing", r); return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e) }, t.prototype._getFilesWithXhr = function(e) { var t, r; return r = function() { var r, n, i, o; for (i = this.files, o = [], r = 0, n = i.length; n > r; r++) t = i[r], t.xhr === e && o.push(t); return o }.call(this) }, t.prototype.cancelUpload = function(e) { var r, n, i, o, l, s, a; if (e.status === t.UPLOADING) { for (n = this._getFilesWithXhr(e.xhr), i = 0, l = n.length; l > i; i++) r = n[i], r.status = t.CANCELED; for (e.xhr.abort(), o = 0, s = n.length; s > o; o++) r = n[o], this.emit("canceled", r);
                            this.options.uploadMultiple && this.emit("canceledmultiple", n) } else((a = e.status) === t.ADDED || a === t.QUEUED) && (e.status = t.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e])); return this.options.autoProcessQueue ? this.processQueue() : void 0 }, t.prototype.uploadFile = function(e) { return this.uploadFiles([e]) }, t.prototype.uploadFiles = function(e) { var n, i, o, l, s, a, u, c, h, f, d, p, m, g, v, y, b, x, w, k, C, L, S, M, T, E, A, _, F, D, N, z; for (b = new XMLHttpRequest, x = 0, L = e.length; L > x; x++) n = e[x], n.xhr = b;
                        b.open(this.options.method, this.options.url, !0), b.withCredentials = !!this.options.withCredentials, g = null, o = function(t) { return function() { var r, i, o; for (o = [], r = 0, i = e.length; i > r; r++) n = e[r], o.push(t._errorProcessing(e, g || t.options.dictResponseError.replace("{{statusCode}}", b.status), b)); return o } }(this), v = function(t) { return function(r) { var i, o, l, s, a, u, c, h, f; if (null != r)
                                    for (o = 100 * r.loaded / r.total, l = 0, u = e.length; u > l; l++) n = e[l], n.upload = { progress: o, total: r.total, bytesSent: r.loaded };
                                else { for (i = !0, o = 100, s = 0, c = e.length; c > s; s++) n = e[s], (100 !== n.upload.progress || n.upload.bytesSent !== n.upload.total) && (i = !1), n.upload.progress = o, n.upload.bytesSent = n.upload.total; if (i) return } for (f = [], a = 0, h = e.length; h > a; a++) n = e[a], f.push(t.emit("uploadprogress", n, o, n.upload.bytesSent)); return f } }(this), b.onload = function(r) { return function(n) { var i; if (e[0].status !== t.CANCELED && 4 === b.readyState) { if (g = b.responseText, b.getResponseHeader("content-type") && ~b.getResponseHeader("content-type").indexOf("application/json")) try { g = JSON.parse(g) } catch (l) { n = l, g = "Invalid JSON response from server." }
                                    return v(), 200 <= (i = b.status) && 300 > i ? r._finished(e, g, n) : o() } } }(this), b.onerror = function() { return function() { return e[0].status !== t.CANCELED ? o() : void 0 } }(this), m = null != (A = b.upload) ? A : b, m.onprogress = v, a = { Accept: "application/json", "Cache-Control": "no-cache", "X-Requested-With": "XMLHttpRequest" }, this.options.headers && r(a, this.options.headers); for (l in a) s = a[l], b.setRequestHeader(l, s); if (i = new FormData, this.options.params) { _ = this.options.params; for (d in _) y = _[d], i.append(d, y) } for (w = 0, S = e.length; S > w; w++) n = e[w], this.emit("sending", n, b, i); if (this.options.uploadMultiple && this.emit("sendingmultiple", e, b, i), "FORM" === this.element.tagName)
                            for (F = this.element.querySelectorAll("input, textarea, select, button"), k = 0, M = F.length; M > k; k++)
                                if (c = F[k], h = c.getAttribute("name"), f = c.getAttribute("type"), "SELECT" === c.tagName && c.hasAttribute("multiple"))
                                    for (D = c.options, C = 0, T = D.length; T > C; C++) p = D[C], p.selected && i.append(h, p.value);
                                else(!f || "checkbox" !== (N = f.toLowerCase()) && "radio" !== N || c.checked) && i.append(h, c.value);
                        for (u = E = 0, z = e.length - 1; z >= 0 ? z >= E : E >= z; u = z >= 0 ? ++E : --E) i.append(this._getParamName(u), e[u], e[u].name); return b.send(i) }, t.prototype._finished = function(e, r, n) { var i, o, l; for (o = 0, l = e.length; l > o; o++) i = e[o], i.status = t.SUCCESS, this.emit("success", i, r, n), this.emit("complete", i); return this.options.uploadMultiple && (this.emit("successmultiple", e, r, n), this.emit("completemultiple", e)), this.options.autoProcessQueue ? this.processQueue() : void 0 }, t.prototype._errorProcessing = function(e, r, n) { var i, o, l; for (o = 0, l = e.length; l > o; o++) i = e[o], i.status = t.ERROR, this.emit("error", i, r, n), this.emit("complete", i); return this.options.uploadMultiple && (this.emit("errormultiple", e, r, n), this.emit("completemultiple", e)), this.options.autoProcessQueue ? this.processQueue() : void 0 }, t
                }(n), t.version = "3.11.1", t.options = {}, t.optionsForElement = function(e) { return e.getAttribute("id") ? t.options[i(e.getAttribute("id"))] : void 0 }, t.instances = [], t.forElement = function(e) { if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone."); return e.dropzone }, t.autoDiscover = !0, t.discover = function() { var e, r, n, i, o, l; for (document.querySelectorAll ? n = document.querySelectorAll(".dropzone") : (n = [], e = function(e) { var t, r, i, o; for (o = [], r = 0, i = e.length; i > r; r++) t = e[r], o.push(/(^| )dropzone($| )/.test(t.className) ? n.push(t) : void 0); return o }, e(document.getElementsByTagName("div")), e(document.getElementsByTagName("form"))), l = [], i = 0, o = n.length; o > i; i++) r = n[i], l.push(t.optionsForElement(r) !== !1 ? new t(r) : void 0); return l }, t.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i], t.isBrowserSupported = function() { var e, r, n, i, o; if (e = !0, window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                        if ("classList" in document.createElement("a"))
                            for (o = t.blacklistedBrowsers, n = 0, i = o.length; i > n; n++) r = o[n], r.test(navigator.userAgent) && (e = !1);
                        else e = !1;
                    else e = !1; return e }, u = function(e, t) { var r, n, i, o; for (o = [], n = 0, i = e.length; i > n; n++) r = e[n], r !== t && o.push(r); return o }, i = function(e) { return e.replace(/[\-_](\w)/g, function(e) { return e.charAt(1).toUpperCase() }) }, t.createElement = function(e) { var t; return t = document.createElement("div"), t.innerHTML = e, t.childNodes[0] }, t.elementInside = function(e, t) { if (e === t) return !0; for (; e = e.parentNode;)
                        if (e === t) return !0;
                    return !1 }, t.getElement = function(e, t) { var r; if ("string" == typeof e ? r = document.querySelector(e) : null != e.nodeType && (r = e), null == r) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element."); return r }, t.getElements = function(e, t) { var r, n, i, o, l, s, a, u; if (e instanceof Array) { i = []; try { for (o = 0, s = e.length; s > o; o++) n = e[o], i.push(this.getElement(n, t)) } catch (c) { r = c, i = null } } else if ("string" == typeof e)
                        for (i = [], u = document.querySelectorAll(e), l = 0, a = u.length; a > l; l++) n = u[l], i.push(n);
                    else null != e.nodeType && (i = [e]); if (null == i || !i.length) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those."); return i }, t.confirm = function(e, t, r) { return window.confirm(e) ? t() : null != r ? r() : void 0 }, t.isValidFile = function(e, t) { var r, n, i, o, l; if (!t) return !0; for (t = t.split(","), n = e.type, r = n.replace(/\/.*$/, ""), o = 0, l = t.length; l > o; o++)
                        if (i = t[o], i = i.trim(), "." === i.charAt(0)) { if (-1 !== e.name.toLowerCase().indexOf(i.toLowerCase(), e.name.length - i.length)) return !0 } else if (/\/\*$/.test(i)) { if (r === i.replace(/\/.*$/, "")) return !0 } else if (n === i) return !0; return !1 }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function(e) { return this.each(function() { return new t(this, e) }) }), "undefined" != typeof r && null !== r ? r.exports = t : window.Dropzone = t, t.ADDED = "added", t.QUEUED = "queued", t.ACCEPTED = t.QUEUED, t.UPLOADING = "uploading", t.PROCESSING = t.UPLOADING, t.CANCELED = "canceled", t.ERROR = "error", t.SUCCESS = "success", l = function(e) { var t, r, n, i, o, l, s, a, u, c; for (s = e.naturalWidth, l = e.naturalHeight, r = document.createElement("canvas"), r.width = 1, r.height = l, n = r.getContext("2d"), n.drawImage(e, 0, 0), i = n.getImageData(0, 0, 1, l).data, c = 0, o = l, a = l; a > c;) t = i[4 * (a - 1) + 3], 0 === t ? o = a : c = a, a = o + c >> 1; return u = a / l, 0 === u ? 1 : u }, s = function(e, t, r, n, i, o, s, a, u, c) { var h; return h = l(t), e.drawImage(t, r, n, i, o, s, a, u, c / h) }, o = function(e, t) { var r, n, i, o, l, s, a, u, c; if (i = !1, c = !0, n = e.document, u = n.documentElement, r = n.addEventListener ? "addEventListener" : "attachEvent", a = n.addEventListener ? "removeEventListener" : "detachEvent", s = n.addEventListener ? "" : "on", o = function(r) { return "readystatechange" !== r.type || "complete" === n.readyState ? (("load" === r.type ? e : n)[a](s + r.type, o, !1), !i && (i = !0) ? t.call(e, r.type || r) : void 0) : void 0 }, l = function() { var e; try { u.doScroll("left") } catch (t) { return e = t, void setTimeout(l, 50) } return o("poll") }, "complete" !== n.readyState) { if (n.createEventObject && u.doScroll) { try { c = !e.frameElement } catch (h) {}
                            c && l() } return n[r](s + "DOMContentLoaded", o, !1), n[r](s + "readystatechange", o, !1), e[r](s + "load", o, !1) } }, t._autoDiscoverFunction = function() { return t.autoDiscover ? t.discover() : void 0 }, o(window, t._autoDiscoverFunction)
            }).call(this)
        }), "object" == typeof exports ? module.exports = e("dropzone") : "function" == typeof define && define.amd ? define("Dropzone", [], function() { return e("dropzone") }) : (this || window).Dropzone = e("dropzone")
    }();
var MdEditor, __bind = function(e, t) { return function() { return e.apply(t, arguments) } };
MdEditor = function() {
    function t(e, t) { return this.save = __bind(this.save, this), this.fullscreen = __bind(this.fullscreen, this), this.image = __bind(this.image, this), this.link = __bind(this.link, this), this.code = __bind(this.code, this), this.italic = __bind(this.italic, this), this.bold = __bind(this.bold, this), this.textarea = $(e), 0 === this.textarea.length ? console.log("Aucun élément ne correspond à ce selecteuir") : (this.options = { labelClose: "Do you really want to close this window ? Every edit you did could be lost", labelInsert: "Insert", labelDelete: "Delete", labelSuccess: "Content save with success", preview: !0, uploader: !1, uploaderData: {} }, this.markdownSections = [], this.previewSections = [], this.lastMardownScrollTop = null, this.lastPreviewScrollTop = null, this.scrolling = !1, this.isMarkdownMoving = !1, this.isPreviewMoving = !1, void 0 !== t && $.extend(this.options, t), this.canExit = !0, this.element = $('<div class="mdeditor">\n  <div class="mdeditor_toolbar"></div>\n  <div class="mdeditor_body">\n    <section class="mdeditor_markdown"><div class="mdeditor_scroll mdeditor_markdown_scroll"><header>Markdown</header></div></section>\n    <section class="mdeditor_preview"><div class="mdeditor_scroll mdeditor_preview_scroll"><header>Aperçu</header><div class="mdeditor_render"></div></div></section>\n  </div>\n  <div class="mdeditor_modal"><div class="mdeditor_drop"></div></div>\n</div>'), this.markdownScroll = $(".mdeditor_markdown_scroll", this.element), this.previewScroll = $(".mdeditor_preview_scroll", this.element), this.preview = $(".mdeditor_render", this.element), this.toolbar = $(".mdeditor_toolbar", this.element), this.form = this.textarea.parents("form"), this.textarea.after(this.element), this.options.preview || this.element.addClass("has-no-preview"), $(".mdeditor_markdown .mdeditor_scroll", this.element).append(this.textarea), this.editor = CodeMirror.fromTextArea(this.textarea[0], { mode: "markdown", tabMode: "indent", theme: "neo", lineWrapping: !0, viewportMargin: 1 / 0 }), this.updatePreview(), this._buildToolbar()/* , this._buildDropzone() */, this._bindEvents(), void 0) } return t.prototype.updatePreview = function() { var e; return e = this.editor.getValue(), this.textarea.val(this.editor.getValue()), this.preview.is(":visible") ? (this.preview.html(marked(e), { breaks: !0 }), this._setSections()) : void 0 }, t.prototype.flash = function(e) { return alert(e) }, t.prototype.bold = function(e) { return void 0 !== e && e.preventDefault(), this.editor.doc.replaceSelection("**" + this.editor.doc.getSelection("around") + "**"), this.editor.focus() }, t.prototype.italic = function(e) { return void 0 !== e && e.preventDefault(), this.editor.doc.replaceSelection("*" + this.editor.doc.getSelection("around") + "*"), this.editor.focus() }, t.prototype.code = function(e) { return void 0 !== e && e.preventDefault(), this.editor.doc.replaceSelection("```\n" + this.editor.doc.getSelection("around") + "\n```"), this.editor.focus() }, t.prototype.link = function(e) { var t; return void 0 !== e && e.preventDefault(), this.editor.doc.replaceSelection("[" + this.editor.doc.getSelection("end") + "]()"), t = this.editor.doc.getCursor(), this.editor.doc.setCursor({ line: t.line, ch: t.ch - 1 }), this.editor.focus() }, t.prototype.image = function(e) { return void 0 !== e && e.preventDefault(), $(".mdeditor_modal", this.element).toggle() }, t.prototype.fullscreen = function(e) { return void 0 !== e && e.preventDefault(), this.element.toggleClass("is-fullscreen"), this.editor.refresh() }, t.prototype.save = function(e) { return void 0 !== e && e.preventDefault, canExit ? !0 : $.ajax({ dataType: "json", url: this.form.attr("action"), data: this.form.serialize(), type: this.form.attr("method") }).done(function(e) { return function() { return e.canExit = !0, e.flash(e.options.labelSuccess) } }(this)).fail(function(e) { return function(t) { return e.flash(t.responseText) } }(this)) }, t.prototype._bindEvents = function() { return this.editor.on("change", function(e) { return function() { return e.cenExit = !1, e.updatePreview() } }(this)), this.form.submit(function() { var e; return e = !0, !0 }), $(document).keydown(function(t) { return function(e) { return (e.ctrlKey || e.metaKey) && (83 === e.which ? t.save(e) : 66 === e.which ? t.bold(e) : 73 === e.which ? t.italic(e) : 76 === e.which && t.link(e)), 27 === e.which && t.element.hasClass("is-fullscreen") ? fullscreen(e) : void 0 } }(this)), $(window).bind("beforeunload", function(e) { return function() { return e.canExit ? void 0 : e.options.labelClose } }(this)), this.markdownScroll.scroll(function(e) { return function() { return e.isMarkdownMoving === !1 && (e.scrolling = "markdown", e._syncScroll()), !0 } }(this)), this.previewScroll.scroll(function(e) { return function() { return e.isPreviewMoving === !1 && (e.scrolling = "preview", e._syncScroll()), !0 } }(this)) }, t.prototype._syncScroll = _.throttle(function() { var e, t, r; return this.preview.is(":visible") && 0 !== this.markdownSections.length && 0 !== this.previewSections.length ? (t = this.markdownScroll.scrollTop(), r = this.previewScroll.scrollTop(), e = 0, "markdown" === this.scrolling ? Math.abs(t - this.lastMarkdownScrollTop) <= 9 ? !1 : (this.scrolling = !1, this.lastMarkdownScrollTop = t, e = this._scrollTop(t, this.markdownSections, this.previewSections), Math.abs(e - r) <= 9 ? (this.lastPreviewScrollTop = r, !1) : (this.isPreviewMoving = !0, this.previewScroll.stop().animate({ scrollTop: e }, 100, function(e) { return function() { return e.isPreviewMoving = !1, !0 } }(this)))) : void 0) : !1 }, 100), t.prototype._scrollTop = function(e, t, r) { var n, i, o, l; return l = 0, o = _.find(t, function(t, r) { return l = r, e < t.endOffset }), void 0 === o ? 0 : (i = (e - o.startOffset) / (o.height || 1), n = r[l], n.startOffset + n.height * i) }, t.prototype._buildToolbar = function() { return $('<button class="mdeditor_bold">b</button>').appendTo(this.toolbar).click(this.bold), $('<button class="mdeditor_italic">i</button>').appendTo(this.toolbar).click(this.italic), $('<button class="mdeditor_link">l</button>').appendTo(this.toolbar).click(this.link), $('<button class="mdeditor_picture">p</button>').appendTo(this.toolbar).click(this.image), $('<button class="mdeditor_code">c</button>').appendTo(this.toolbar).click(this.code), $('<button class="mdeditor_fullscreen">f</button>').appendTo(this.toolbar).click(this.fullscreen) }, t.prototype._buildDropzone = function() { var e, t, r;
        r = this.options, t = this.flash, e = this.editor, this.dropzone = new Dropzone($(".mdeditor_drop").get(0), { maxFiles: 10, paramName: "image", url: r.uploader, addRemoveLinks: !0, thumbnailWidth: 150, thumbnailHeight: 150, dictRemoveFile: r.labelDelete, init: function() { var n, i; return i = this, n = function(t) { var n; return n = $(t.previewElement), n.append('<a class="dz-insert" href="#">' + r.labelInsert + "</a>"), $(".dz-insert", n).click(function(r) { var n; return r.preventDefault(), r.stopPropagation(), e.doc.replaceSelection("![](" + t.url + ")"), n = e.doc.getCursor(), e.doc.setCursor({ line: n.line, ch: 2 }), e.focus(), $(".mdeditor_modal").hide() }) }, this.on("addedfile", function(e) { return n(e) }), this.on("sending", function(e, t, n) { return $.extend(n, r.uploaderData) }), this.on("success", function(e, t) { return $.extend(e, t), $(e.previewElement).removeClass("dz-processing") }), this.on("error", function(e, r) { return t(r), $(e.previewElement).fadeOut() }), this.on("removedfile", function(e) { return $.ajax({ url: r.uploader + "/" + e.id, method: "DELETE" }).done(function() {}).fail(function(e) { return t(e.responseText) }) }), $.each(r.images, function(e, t) { return i.options.addedfile.call(i, t), i.options.thumbnail.call(i, t, t.url), i.files.push(t), n(t) }) } }) }, t.prototype._setSections = _.debounce(function() { var e, t;
        this.markdownSections = [], this.previewSections = [], e = null, t = null, $(".CodeMirror-code .cm-header", this.element).each(function(t) { return function(r, n) { var i; return null === e ? (e = 0, void 0) : (i = $(n).offset().top + t.markdownScroll.scrollTop(), t.markdownSections.push({ startOffset: e, endOffset: i, height: i - e }), e = i, void 0) } }(this)), this.markdownSections.push({ startOffset: e, endOffset: this.markdownScroll[0].scrollHeight, height: this.markdownScroll[0].scrollHeight - e }), this.preview.find("h1, h2, h3, h4, h5").each(function(e) { return function(r, n) { var i; return null === t ? (t = 0, void 0) : (i = $(n).offset().top + e.previewScroll.scrollTop(), e.previewSections.push({ startOffset: t, endOffset: i, height: i - t }), t = i, void 0) } }(this)), this.previewSections.push({ startOffset: t, endOffset: this.previewScroll[0].scrollHeight, height: this.previewScroll[0].scrollHeight - t }), this.lastMardownScrollTop = -10, this.lastPreviewScrollTop = -10 }, 500), t }();