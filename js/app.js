const wrapperEl = document.querySelector(".wrapper"),
    numberOfEls = 90;
if (screen.width <= "700") var duration = 2500;
else duration = 6e3;
const delay = duration / numberOfEls;
let tl = anime.timeline({
    duration: delay,
    complete: function () {
        tl.restart();
    },
});
function createEl(e) {
    let t = document.createElement("div");
    const i = (360 / numberOfEls) * e,
        a = Math.round((360 / numberOfEls) * e);
    t.classList.add("el"),
        (t.style.backgroundColor = "hsl(" + a + ", 40%, 60%)"),
        (t.style.transform = "rotate(" + i + "deg) translateY(" + -50 + "%)"),
        tl.add({
            begin: function () {
                anime({
                    targets: t,
                    backgroundColor: ["hsl(" + a + ", 40%, 60%)", "hsl(" + a + ", 60%, 40%)"],
                    rotate: [i + "deg", i + 10 + "deg"],
                    translateY: ["-50%", "-40%"],
                    scale: [1, 1.25],
                    easing: "easeInOutSine",
                    direction: "alternate",
                    duration: 0.1 * duration,
                });
            },
        }),
        wrapperEl.appendChild(t);
}
for (let e = 0; e < numberOfEls; e++) createEl(e);
$(window).scroll(function () {
    $(".wrapper").css({ left: $(window).scrollTop() + "px" });
}),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.AOS = t()) : (e.AOS = t());
    })(this, function () {
        return (function (e) {
            function t(a) {
                if (i[a]) return i[a].exports;
                var n = (i[a] = { exports: {}, id: a, loaded: !1 });
                return e[a].call(n.exports, n, n.exports, t), (n.loaded = !0), n.exports;
            }
            var i = {};
            return (t.m = e), (t.c = i), (t.p = "dist/"), t(0);
        })([
            function (e, t, i) {
                "use strict";
                function a(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                var n =
                        Object.assign ||
                        function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var i = arguments[t];
                                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e[a] = i[a]);
                            }
                            return e;
                        },
                    r = (a(i(1)), i(6)),
                    s = a(r),
                    o = a(i(7)),
                    c = a(i(8)),
                    l = a(i(9)),
                    u = a(i(10)),
                    d = a(i(11)),
                    p = a(i(14)),
                    m = [],
                    v = !1,
                    f = document.all && !window.atob,
                    b = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: !1, once: !1, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: !1 },
                    y = function () {
                        if ((arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (v = !0), v)) return (m = (0, d.default)(m, b)), (0, u.default)(m, b.once), m;
                    },
                    h = function () {
                        (m = (0, p.default)()), y();
                    };
                e.exports = {
                    init: function (e) {
                        return (
                            (b = n(b, e)),
                            (m = (0, p.default)()),
                            (function (e) {
                                return !0 === e || ("mobile" === e && l.default.mobile()) || ("phone" === e && l.default.phone()) || ("tablet" === e && l.default.tablet()) || ("function" == typeof e && !0 === e());
                            })(b.disable) || f
                                ? void m.forEach(function (e, t) {
                                      e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
                                  })
                                : (document.querySelector("body").setAttribute("data-aos-easing", b.easing),
                                  document.querySelector("body").setAttribute("data-aos-duration", b.duration),
                                  document.querySelector("body").setAttribute("data-aos-delay", b.delay),
                                  "DOMContentLoaded" === b.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1
                                      ? y(!0)
                                      : "load" === b.startEvent
                                      ? window.addEventListener(b.startEvent, function () {
                                            y(!0);
                                        })
                                      : document.addEventListener(b.startEvent, function () {
                                            y(!0);
                                        }),
                                  window.addEventListener("resize", (0, o.default)(y, b.debounceDelay, !0)),
                                  window.addEventListener("orientationchange", (0, o.default)(y, b.debounceDelay, !0)),
                                  window.addEventListener(
                                      "scroll",
                                      (0, s.default)(function () {
                                          (0, u.default)(m, b.once);
                                      }, b.throttleDelay)
                                  ),
                                  b.disableMutationObserver || (0, c.default)("[data-aos]", h),
                                  m)
                        );
                    },
                    refresh: y,
                    refreshHard: h,
                };
            },
            function (e, t) {},
            ,
            ,
            ,
            ,
            function (e, t) {
                (function (t) {
                    "use strict";
                    function i(e, t, i) {
                        function n(t) {
                            var i = d,
                                a = p;
                            return (d = p = void 0), (y = t), (v = e.apply(a, i));
                        }
                        function s(e) {
                            var i = e - b;
                            return void 0 === b || i >= t || i < 0 || (x && e - y >= m);
                        }
                        function c() {
                            var e = _();
                            return s(e)
                                ? l(e)
                                : void (f = setTimeout(
                                      c,
                                      (function (e) {
                                          var i = t - (e - b);
                                          return x ? w(i, m - (e - y)) : i;
                                      })(e)
                                  ));
                        }
                        function l(e) {
                            return (f = void 0), k && d ? n(e) : ((d = p = void 0), v);
                        }
                        function u() {
                            var e = _(),
                                i = s(e);
                            if (((d = arguments), (p = this), (b = e), i)) {
                                if (void 0 === f)
                                    return (function (e) {
                                        return (y = e), (f = setTimeout(c, t)), h ? n(e) : v;
                                    })(b);
                                if (x) return (f = setTimeout(c, t)), n(b);
                            }
                            return void 0 === f && (f = setTimeout(c, t)), v;
                        }
                        var d,
                            p,
                            m,
                            v,
                            f,
                            b,
                            y = 0,
                            h = !1,
                            x = !1,
                            k = !0;
                        if ("function" != typeof e) throw new TypeError(o);
                        return (
                            (t = r(t) || 0),
                            a(i) && ((h = !!i.leading), (m = (x = "maxWait" in i) ? g(r(i.maxWait) || 0, t) : m), (k = "trailing" in i ? !!i.trailing : k)),
                            (u.cancel = function () {
                                void 0 !== f && clearTimeout(f), (y = 0), (d = b = p = f = void 0);
                            }),
                            (u.flush = function () {
                                return void 0 === f ? v : l(_());
                            }),
                            u
                        );
                    }
                    function a(e) {
                        var t = void 0 === e ? "undefined" : s(e);
                        return !!e && ("object" == t || "function" == t);
                    }
                    function n(e) {
                        return (
                            "symbol" == (void 0 === e ? "undefined" : s(e)) ||
                            ((function (e) {
                                return !!e && "object" == (void 0 === e ? "undefined" : s(e));
                            })(e) &&
                                h.call(e) == l)
                        );
                    }
                    function r(e) {
                        if ("number" == typeof e) return e;
                        if (n(e)) return c;
                        if (a(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = a(t) ? t + "" : t;
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(u, "");
                        var i = p.test(e);
                        return i || m.test(e) ? v(e.slice(2), i ? 2 : 8) : d.test(e) ? c : +e;
                    }
                    var s =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  },
                        o = "Expected a function",
                        c = NaN,
                        l = "[object Symbol]",
                        u = /^\s+|\s+$/g,
                        d = /^[-+]0x[0-9a-f]+$/i,
                        p = /^0b[01]+$/i,
                        m = /^0o[0-7]+$/i,
                        v = parseInt,
                        f = "object" == (void 0 === t ? "undefined" : s(t)) && t && t.Object === Object && t,
                        b = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                        y = f || b || Function("return this")(),
                        h = Object.prototype.toString,
                        g = Math.max,
                        w = Math.min,
                        _ = function () {
                            return y.Date.now();
                        };
                    e.exports = function (e, t, n) {
                        var r = !0,
                            s = !0;
                        if ("function" != typeof e) throw new TypeError(o);
                        return a(n) && ((r = "leading" in n ? !!n.leading : r), (s = "trailing" in n ? !!n.trailing : s)), i(e, t, { leading: r, maxWait: t, trailing: s });
                    };
                }.call(
                    t,
                    (function () {
                        return this;
                    })()
                ));
            },
            function (e, t) {
                (function (t) {
                    "use strict";
                    function i(e) {
                        var t = void 0 === e ? "undefined" : r(e);
                        return !!e && ("object" == t || "function" == t);
                    }
                    function a(e) {
                        return (
                            "symbol" == (void 0 === e ? "undefined" : r(e)) ||
                            ((function (e) {
                                return !!e && "object" == (void 0 === e ? "undefined" : r(e));
                            })(e) &&
                                y.call(e) == c)
                        );
                    }
                    function n(e) {
                        if ("number" == typeof e) return e;
                        if (a(e)) return o;
                        if (i(e)) {
                            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                            e = i(t) ? t + "" : t;
                        }
                        if ("string" != typeof e) return 0 === e ? e : +e;
                        e = e.replace(l, "");
                        var n = d.test(e);
                        return n || p.test(e) ? m(e.slice(2), n ? 2 : 8) : u.test(e) ? o : +e;
                    }
                    var r =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  },
                        s = "Expected a function",
                        o = NaN,
                        c = "[object Symbol]",
                        l = /^\s+|\s+$/g,
                        u = /^[-+]0x[0-9a-f]+$/i,
                        d = /^0b[01]+$/i,
                        p = /^0o[0-7]+$/i,
                        m = parseInt,
                        v = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
                        f = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                        b = v || f || Function("return this")(),
                        y = Object.prototype.toString,
                        h = Math.max,
                        g = Math.min,
                        w = function () {
                            return b.Date.now();
                        };
                    e.exports = function (e, t, a) {
                        function r(t) {
                            var i = d,
                                a = p;
                            return (d = p = void 0), (y = t), (v = e.apply(a, i));
                        }
                        function o(e) {
                            var i = e - b;
                            return void 0 === b || i >= t || i < 0 || (x && e - y >= m);
                        }
                        function c() {
                            var e = w();
                            return o(e)
                                ? l(e)
                                : void (f = setTimeout(
                                      c,
                                      (function (e) {
                                          var i = t - (e - b);
                                          return x ? g(i, m - (e - y)) : i;
                                      })(e)
                                  ));
                        }
                        function l(e) {
                            return (f = void 0), k && d ? r(e) : ((d = p = void 0), v);
                        }
                        function u() {
                            var e = w(),
                                i = o(e);
                            if (((d = arguments), (p = this), (b = e), i)) {
                                if (void 0 === f)
                                    return (function (e) {
                                        return (y = e), (f = setTimeout(c, t)), _ ? r(e) : v;
                                    })(b);
                                if (x) return (f = setTimeout(c, t)), r(b);
                            }
                            return void 0 === f && (f = setTimeout(c, t)), v;
                        }
                        var d,
                            p,
                            m,
                            v,
                            f,
                            b,
                            y = 0,
                            _ = !1,
                            x = !1,
                            k = !0;
                        if ("function" != typeof e) throw new TypeError(s);
                        return (
                            (t = n(t) || 0),
                            i(a) && ((_ = !!a.leading), (m = (x = "maxWait" in a) ? h(n(a.maxWait) || 0, t) : m), (k = "trailing" in a ? !!a.trailing : k)),
                            (u.cancel = function () {
                                void 0 !== f && clearTimeout(f), (y = 0), (d = b = p = f = void 0);
                            }),
                            (u.flush = function () {
                                return void 0 === f ? v : l(w());
                            }),
                            u
                        );
                    };
                }.call(
                    t,
                    (function () {
                        return this;
                    })()
                ));
            },
            function (e, t) {
                "use strict";
                function i(e) {
                    e &&
                        e.forEach(function (e) {
                            var t = Array.prototype.slice.call(e.addedNodes),
                                i = Array.prototype.slice.call(e.removedNodes);
                            t.concat(i).filter(function (e) {
                                return e.hasAttribute && e.hasAttribute("data-aos");
                            }).length && r();
                        });
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var a = window.document,
                    n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
                    r = function () {};
                t.default = function (e, t) {
                    var s = new n(i);
                    (r = t), s.observe(a.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
                };
            },
            function (e, t) {
                "use strict";
                function i() {
                    return navigator.userAgent || navigator.vendor || window.opera || "";
                }
                Object.defineProperty(t, "__esModule", { value: !0 });
                var a = (function () {
                        function e(e, t) {
                            for (var i = 0; i < t.length; i++) {
                                var a = t[i];
                                (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
                            }
                        }
                        return function (t, i, a) {
                            return i && e(t.prototype, i), a && e(t, a), t;
                        };
                    })(),
                    n = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                    r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                    o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                    c = (function () {
                        function e() {
                            !(function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, e);
                        }
                        return (
                            a(e, [
                                {
                                    key: "phone",
                                    value: function () {
                                        var e = i();
                                        return !(!n.test(e) && !r.test(e.substr(0, 4)));
                                    },
                                },
                                {
                                    key: "mobile",
                                    value: function () {
                                        var e = i();
                                        return !(!s.test(e) && !o.test(e.substr(0, 4)));
                                    },
                                },
                                {
                                    key: "tablet",
                                    value: function () {
                                        return this.mobile() && !this.phone();
                                    },
                                },
                            ]),
                            e
                        );
                    })();
                t.default = new c();
            },
            function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                t.default = function (e, t) {
                    var i = window.pageYOffset,
                        a = window.innerHeight;
                    e.forEach(function (e, n) {
                        !(function (e, t, i) {
                            var a = e.node.getAttribute("data-aos-once");
                            t > e.position ? e.node.classList.add("aos-animate") : void 0 !== a && ("false" === a || (!i && "true" !== a)) && e.node.classList.remove("aos-animate");
                        })(e, a + i, t);
                    });
                };
            },
            function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var a = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(i(12));
                t.default = function (e, t) {
                    return (
                        e.forEach(function (e, i) {
                            e.node.classList.add("aos-init"), (e.position = (0, a.default)(e.node, t.offset));
                        }),
                        e
                    );
                };
            },
            function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                var a = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(i(13));
                t.default = function (e, t) {
                    var i = 0,
                        n = 0,
                        r = window.innerHeight,
                        s = { offset: e.getAttribute("data-aos-offset"), anchor: e.getAttribute("data-aos-anchor"), anchorPlacement: e.getAttribute("data-aos-anchor-placement") };
                    switch ((s.offset && !isNaN(s.offset) && (n = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (e = document.querySelectorAll(s.anchor)[0]), (i = (0, a.default)(e).top), s.anchorPlacement)) {
                        case "top-bottom":
                            break;
                        case "center-bottom":
                            i += e.offsetHeight / 2;
                            break;
                        case "bottom-bottom":
                            i += e.offsetHeight;
                            break;
                        case "top-center":
                            i += r / 2;
                            break;
                        case "bottom-center":
                            i += r / 2 + e.offsetHeight;
                            break;
                        case "center-center":
                            i += r / 2 + e.offsetHeight / 2;
                            break;
                        case "top-top":
                            i += r;
                            break;
                        case "bottom-top":
                            i += e.offsetHeight + r;
                            break;
                        case "center-top":
                            i += e.offsetHeight / 2 + r;
                    }
                    return s.anchorPlacement || s.offset || isNaN(t) || (n = t), i + n;
                };
            },
            function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                t.default = function (e) {
                    for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); )
                        (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)), (i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)), (e = e.offsetParent);
                    return { top: i, left: t };
                };
            },
            function (e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", { value: !0 });
                t.default = function (e) {
                    return (
                        (e = e || document.querySelectorAll("[data-aos]")),
                        Array.prototype.map.call(e, function (e) {
                            return { node: e };
                        })
                    );
                };
            },
        ]);
    }),
    $(document).ready(function () {
        $(".logo").css("left", "-12rem").animate({ left: "2rem" }, 400, "swing"),
            $(".page_home h1").css("left", "-27%").animate({ left: "0%" }, 400, "swing"),
            $(".l_h1").css("left", "-20%").animate({ left: "0%" }, 400, "swing"),
            $(".social").css("left", "-20%").animate({ left: "0%" }, 400, "swing"),
            $(".wrapper").css("margin-left", "120vw").animate({ "margin-left": "77vw" }, 600, "swing");
    }),
    $("#demo").css("top", "-200px").animate({ top: "-30px" }, 600, "swing"),
    $(".li_house, .i_house").click(function () {
        $(".page_home").css("display", "inline"), $(".proiecte").css("display", "none"), $(".contact").css("display", "none");
    }),
    $(".li_proiecte, .i_proiecte").click(function () {
        $(".page_home").css("display", "none"), $(".proiecte").css("display", "inline"), $(".contact").css("display", "none");
    }),
    $(".li_contact, .i_contact").click(function () {
        $(".page_home").css("display", "none"), $(".proiecte").css("display", "none"), $(".contact").css("display", "inline");
    }),
    $(".li_house, .i_house").click(function () {
        "20" != $('rect[id="stretchy"]').attr("x") &&
            ($(".page_home h1").css("left", "-27%").animate({ left: "0%" }, 400, "swing"),
            $(".l_h1").css("left", "-20%").animate({ left: "0%" }, 400, "swing"),
            $(".social").css("left", "-20%").animate({ left: "0%" }, 400, "swing"),
            $(".wrapper").css("margin-left", "0vw").animate({ "margin-left": "77vw" }, 400, "swing"));
    }),
    $(".li_proiecte, .i_proiecte").click(function () {
        "20" == $('rect[id="stretchy"]').attr("x") && ($(".box1").css("left", "100%").animate({ left: "6%" }, 400, "swing"), $(".box2").css("right", "-40%").animate({ right: "4%" }, 400, "swing")),
            "320" == $('rect[id="stretchy"]').attr("x") && ($(".box1").css("left", "-40%").animate({ left: "6%" }, 400, "swing"), $(".box2").css("right", "100%").animate({ right: "4%" }, 400, "swing"));
    }),
    $(".li_contact, .i_contact").click(function () {
        ("20" != $('rect[id="stretchy"]').attr("x") && "170" != $('rect[id="stretchy"]').attr("x")) ||
            ($(".content").css("left", "130%").animate({ left: "50%" }, 400, "swing"), $(".logo2").css("left", "130%").animate({ left: "50%" }, 400, "swing"));
    });
var mover = document.querySelector(".mover"),
    svg = document.querySelector("#demo"),
    cont_b = svg.querySelector(".li_contact");
mover.addEventListener("click", function (e) {
    cont_b.dispatchEvent(new Event("click")), cont_b.parentElement.dispatchEvent(new Event("click"));
}),
    $(".box1").hover(
        function () {
            $(".vitaminer_titlu").css("left", "40%").animate({ left: "50%" }, 400, "swing"),
                $(".vit").css("left", "0%").animate({ left: "-4%" }, 400, "swing"),
                $(".highlight-inner3").css("left", "58%").animate({ left: "59%" }, 400, "swing");
        },
        function () {
            $(".vitaminer_titlu").css("left", "50%").animate({ left: "40%" }, 400, "swing"),
                $(".vit").css("left", "-4%").animate({ left: "0%" }, 400, "swing"),
                $(".highlight-inner3").css("left", "59%").animate({ left: "58%" }, 400, "swing");
        }
    ),
    $(".box2").hover(
        function () {
            $(".unity_titlu").css("left", "40%").animate({ left: "50%" }, 400, "swing"), $(".unity").css("left", "0%").animate({ left: "-4%" }, 400, "swing"), $(".highlight-inner4").css("left", "58%").animate({ left: "59%" }, 400, "swing");
        },
        function () {
            $(".unity_titlu").css("left", "50%").animate({ left: "40%" }, 400, "swing"), $(".unity").css("left", "-4%").animate({ left: "0%" }, 400, "swing"), $(".highlight-inner4").css("left", "59%").animate({ left: "58%" }, 400, "swing");
        }
    );
let anim,
    targetDot,
    targets = gsap.utils.toArray("#icons g"),
    targetStarts = [20, 170, 320],
    activeDot = 0,
    maxDur = 0.6;
function letsStretch() {
    if ((targetDot = this.index) != activeDot) {
        {
            anim && anim.isActive() && anim.progress(1);
            let e = targetStarts[activeDot],
                t = targetStarts[targetDot],
                i = Math.abs(e - t),
                a = gsap.utils.mapRange(100, 500, 0.5, 1, i),
                n = maxDur * a;
            (anim = gsap.timeline({ defaults: { duration: n, ease: "back.in(2)" } })),
                t > e
                    ? (anim.to("#stretchy", { attr: { width: i + 60 } }), anim.to("#stretchy", { attr: { x: t, width: 60 }, ease: "back" }, "+=0.08"))
                    : (anim.to("#stretchy", { attr: { x: t, width: i + 60 } }), anim.to("#stretchy", { attr: { width: 60 }, ease: "back" }, "+=0.08")),
                anim.to("#stretchy", { duration: n, ease: "sine.inOut", attr: { height: 30, y: 45 }, yoyo: !0, repeat: 1 }, 0);
        }
        activeDot = targetDot;
    }
}
targets.forEach((e, t) => {
    (e.index = t), e.addEventListener("click", letsStretch);
});
let durationUp = 1.5;
function animateFlight() {
    Snap.selectAll("#crane > path").forEach(function (e, t) {
        let i = e.animate({ d: e.attr("d2") }, durationUp),
            a = i.anims[Object.keys(i.anims)[0]];
        a.pause();
        let n = { progress: 0 };
        TweenMax.to(n, durationUp, {
            progress: 1,
            ease: Sine.easeInOut,
            onUpdate: function () {
                a.status(n.progress), a.update();
            },
            yoyo: !0,
            repeat: -1,
        });
    });
}
animateFlight();
var count_particles,
    update,
    pJS = function (e, t) {
        var i = document.querySelector("#" + e + " > .particles-js-canvas-el");
        this.pJS = {
            canvas: { el: i, w: i.offsetWidth, h: i.offsetHeight },
            particles: {
                number: { value: 400, density: { enable: !0, value_area: 800 } },
                color: { value: "#fff" },
                shape: { type: "circle", stroke: { width: 0, color: "#ff0000" }, polygon: { nb_sides: 5 }, image: { src: "", width: 100, height: 100 } },
                opacity: { value: 1, random: !1, anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 } },
                size: { value: 20, random: !1, anim: { enable: !1, speed: 20, size_min: 0, sync: !1 } },
                line_linked: { enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1 },
                move: { enable: !0, speed: 2, direction: "none", random: !1, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 } },
                array: [],
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: !0, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 },
                modes: { grab: { distance: 100, line_linked: { opacity: 1 } }, bubble: { distance: 200, size: 80, duration: 0.4 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
                mouse: {},
            },
            retina_detect: !1,
            fn: { interact: {}, modes: {}, vendors: {} },
            tmp: {},
        };
        var a = this.pJS;
        t && Object.deepExtend(a, t),
            (a.tmp.obj = {
                size_value: a.particles.size.value,
                size_anim_speed: a.particles.size.anim.speed,
                move_speed: a.particles.move.speed,
                line_linked_distance: a.particles.line_linked.distance,
                line_linked_width: a.particles.line_linked.width,
                mode_grab_distance: a.interactivity.modes.grab.distance,
                mode_bubble_distance: a.interactivity.modes.bubble.distance,
                mode_bubble_size: a.interactivity.modes.bubble.size,
                mode_repulse_distance: a.interactivity.modes.repulse.distance,
            }),
            (a.fn.retinaInit = function () {
                a.retina_detect && window.devicePixelRatio > 1 ? ((a.canvas.pxratio = window.devicePixelRatio), (a.tmp.retina = !0)) : ((a.canvas.pxratio = 1), (a.tmp.retina = !1)),
                    (a.canvas.w = a.canvas.el.offsetWidth * a.canvas.pxratio),
                    (a.canvas.h = a.canvas.el.offsetHeight * a.canvas.pxratio),
                    (a.particles.size.value = a.tmp.obj.size_value * a.canvas.pxratio),
                    (a.particles.size.anim.speed = a.tmp.obj.size_anim_speed * a.canvas.pxratio),
                    (a.particles.move.speed = a.tmp.obj.move_speed * a.canvas.pxratio),
                    (a.particles.line_linked.distance = a.tmp.obj.line_linked_distance * a.canvas.pxratio),
                    (a.interactivity.modes.grab.distance = a.tmp.obj.mode_grab_distance * a.canvas.pxratio),
                    (a.interactivity.modes.bubble.distance = a.tmp.obj.mode_bubble_distance * a.canvas.pxratio),
                    (a.particles.line_linked.width = a.tmp.obj.line_linked_width * a.canvas.pxratio),
                    (a.interactivity.modes.bubble.size = a.tmp.obj.mode_bubble_size * a.canvas.pxratio),
                    (a.interactivity.modes.repulse.distance = a.tmp.obj.mode_repulse_distance * a.canvas.pxratio);
            }),
            (a.fn.canvasInit = function () {
                a.canvas.ctx = a.canvas.el.getContext("2d");
            }),
            (a.fn.canvasSize = function () {
                (a.canvas.el.width = a.canvas.w),
                    (a.canvas.el.height = a.canvas.h),
                    a &&
                        a.interactivity.events.resize &&
                        window.addEventListener("resize", function () {
                            (a.canvas.w = a.canvas.el.offsetWidth),
                                (a.canvas.h = a.canvas.el.offsetHeight),
                                a.tmp.retina && ((a.canvas.w *= a.canvas.pxratio), (a.canvas.h *= a.canvas.pxratio)),
                                (a.canvas.el.width = a.canvas.w),
                                (a.canvas.el.height = a.canvas.h),
                                a.particles.move.enable || (a.fn.particlesEmpty(), a.fn.particlesCreate(), a.fn.particlesDraw(), a.fn.vendors.densityAutoParticles()),
                                a.fn.vendors.densityAutoParticles();
                        });
            }),
            (a.fn.canvasPaint = function () {
                a.canvas.ctx.fillRect(0, 0, a.canvas.w, a.canvas.h);
            }),
            (a.fn.canvasClear = function () {
                a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h);
            }),
            (a.fn.particle = function (e, t, i) {
                if (
                    ((this.radius = (a.particles.size.random ? Math.random() : 1) * a.particles.size.value),
                    a.particles.size.anim.enable && ((this.size_status = !1), (this.vs = a.particles.size.anim.speed / 100), a.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
                    (this.x = i ? i.x : Math.random() * a.canvas.w),
                    (this.y = i ? i.y : Math.random() * a.canvas.h),
                    this.x > a.canvas.w - 2 * this.radius ? (this.x = this.x - this.radius) : this.x < 2 * this.radius && (this.x = this.x + this.radius),
                    this.y > a.canvas.h - 2 * this.radius ? (this.y = this.y - this.radius) : this.y < 2 * this.radius && (this.y = this.y + this.radius),
                    a.particles.move.bounce && a.fn.vendors.checkOverlap(this, i),
                    (this.color = {}),
                    "object" == typeof e.value)
                )
                    if (e.value instanceof Array) {
                        var n = e.value[Math.floor(Math.random() * a.particles.color.value.length)];
                        this.color.rgb = hexToRgb(n);
                    } else
                        null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
                            null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
                else
                    "random" == e.value
                        ? (this.color.rgb = { r: Math.floor(256 * Math.random()) + 0, g: Math.floor(256 * Math.random()) + 0, b: Math.floor(256 * Math.random()) + 0 })
                        : "string" == typeof e.value && ((this.color = e), (this.color.rgb = hexToRgb(this.color.value)));
                (this.opacity = (a.particles.opacity.random ? Math.random() : 1) * a.particles.opacity.value),
                    a.particles.opacity.anim.enable && ((this.opacity_status = !1), (this.vo = a.particles.opacity.anim.speed / 100), a.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
                var r = {};
                switch (a.particles.move.direction) {
                    case "top":
                        r = { x: 0, y: -1 };
                        break;
                    case "top-right":
                        r = { x: 0.5, y: -0.5 };
                        break;
                    case "right":
                        r = { x: 1, y: -0 };
                        break;
                    case "bottom-right":
                        r = { x: 0.5, y: 0.5 };
                        break;
                    case "bottom":
                        r = { x: 0, y: 1 };
                        break;
                    case "bottom-left":
                        r = { x: -0.5, y: 1 };
                        break;
                    case "left":
                        r = { x: -1, y: 0 };
                        break;
                    case "top-left":
                        r = { x: -0.5, y: -0.5 };
                        break;
                    default:
                        r = { x: 0, y: 0 };
                }
                a.particles.move.straight
                    ? ((this.vx = r.x), (this.vy = r.y), a.particles.move.random && ((this.vx = this.vx * Math.random()), (this.vy = this.vy * Math.random())))
                    : ((this.vx = r.x + Math.random() - 0.5), (this.vy = r.y + Math.random() - 0.5)),
                    (this.vx_i = this.vx),
                    (this.vy_i = this.vy);
                var s = a.particles.shape.type;
                if ("object" == typeof s) {
                    if (s instanceof Array) {
                        var o = s[Math.floor(Math.random() * s.length)];
                        this.shape = o;
                    }
                } else this.shape = s;
                if ("image" == this.shape) {
                    var c = a.particles.shape;
                    (this.img = { src: c.image.src, ratio: c.image.width / c.image.height }),
                        this.img.ratio || (this.img.ratio = 1),
                        "svg" == a.tmp.img_type && null != a.tmp.source_svg && (a.fn.vendors.createSvgImg(this), a.tmp.pushing && (this.img.loaded = !1));
                }
            }),
            (a.fn.particle.prototype.draw = function () {
                var e = this;
                if (null != e.radius_bubble) var t = e.radius_bubble;
                else t = e.radius;
                if (null != e.opacity_bubble) var i = e.opacity_bubble;
                else i = e.opacity;
                if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + i + ")";
                else n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + i + ")";
                switch (((a.canvas.ctx.fillStyle = n), a.canvas.ctx.beginPath(), e.shape)) {
                    case "circle":
                        a.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
                        break;
                    case "edge":
                        a.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
                        break;
                    case "triangle":
                        a.fn.vendors.drawShape(a.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
                        break;
                    case "polygon":
                        a.fn.vendors.drawShape(a.canvas.ctx, e.x - t / (a.particles.shape.polygon.nb_sides / 3.5), e.y - t / 0.76, (2.66 * t) / (a.particles.shape.polygon.nb_sides / 3), a.particles.shape.polygon.nb_sides, 1);
                        break;
                    case "star":
                        a.fn.vendors.drawShape(a.canvas.ctx, e.x - (2 * t) / (a.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, (2 * t * 2.66) / (a.particles.shape.polygon.nb_sides / 3), a.particles.shape.polygon.nb_sides, 2);
                        break;
                    case "image":
                        if ("svg" == a.tmp.img_type) var r = e.img.obj;
                        else r = a.tmp.img_obj;
                        r && a.canvas.ctx.drawImage(r, e.x - t, e.y - t, 2 * t, (2 * t) / e.img.ratio);
                }
                a.canvas.ctx.closePath(),
                    a.particles.shape.stroke.width > 0 && ((a.canvas.ctx.strokeStyle = a.particles.shape.stroke.color), (a.canvas.ctx.lineWidth = a.particles.shape.stroke.width), a.canvas.ctx.stroke()),
                    a.canvas.ctx.fill();
            }),
            (a.fn.particlesCreate = function () {
                for (var e = 0; e < a.particles.number.value; e++) a.particles.array.push(new a.fn.particle(a.particles.color, a.particles.opacity.value));
            }),
            (a.fn.particlesUpdate = function () {
                for (var e = 0; e < a.particles.array.length; e++) {
                    var t = a.particles.array[e];
                    if (a.particles.move.enable) {
                        var i = a.particles.move.speed / 2;
                        (t.x += t.vx * i), (t.y += t.vy * i);
                    }
                    if (
                        (a.particles.opacity.anim.enable &&
                            (1 == t.opacity_status
                                ? (t.opacity >= a.particles.opacity.value && (t.opacity_status = !1), (t.opacity += t.vo))
                                : (t.opacity <= a.particles.opacity.anim.opacity_min && (t.opacity_status = !0), (t.opacity -= t.vo)),
                            t.opacity < 0 && (t.opacity = 0)),
                        a.particles.size.anim.enable &&
                            (1 == t.size_status ? (t.radius >= a.particles.size.value && (t.size_status = !1), (t.radius += t.vs)) : (t.radius <= a.particles.size.anim.size_min && (t.size_status = !0), (t.radius -= t.vs)),
                            t.radius < 0 && (t.radius = 0)),
                        "bounce" == a.particles.move.out_mode)
                    )
                        var n = { x_left: t.radius, x_right: a.canvas.w, y_top: t.radius, y_bottom: a.canvas.h };
                    else n = { x_left: -t.radius, x_right: a.canvas.w + t.radius, y_top: -t.radius, y_bottom: a.canvas.h + t.radius };
                    switch (
                        (t.x - t.radius > a.canvas.w ? ((t.x = n.x_left), (t.y = Math.random() * a.canvas.h)) : t.x + t.radius < 0 && ((t.x = n.x_right), (t.y = Math.random() * a.canvas.h)),
                        t.y - t.radius > a.canvas.h ? ((t.y = n.y_top), (t.x = Math.random() * a.canvas.w)) : t.y + t.radius < 0 && ((t.y = n.y_bottom), (t.x = Math.random() * a.canvas.w)),
                        a.particles.move.out_mode)
                    ) {
                        case "bounce":
                            t.x + t.radius > a.canvas.w ? (t.vx = -t.vx) : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > a.canvas.h ? (t.vy = -t.vy) : t.y - t.radius < 0 && (t.vy = -t.vy);
                    }
                    if (
                        (isInArray("grab", a.interactivity.events.onhover.mode) && a.fn.modes.grabParticle(t),
                        (isInArray("bubble", a.interactivity.events.onhover.mode) || isInArray("bubble", a.interactivity.events.onclick.mode)) && a.fn.modes.bubbleParticle(t),
                        (isInArray("repulse", a.interactivity.events.onhover.mode) || isInArray("repulse", a.interactivity.events.onclick.mode)) && a.fn.modes.repulseParticle(t),
                        a.particles.line_linked.enable || a.particles.move.attract.enable)
                    )
                        for (var r = e + 1; r < a.particles.array.length; r++) {
                            var s = a.particles.array[r];
                            a.particles.line_linked.enable && a.fn.interact.linkParticles(t, s), a.particles.move.attract.enable && a.fn.interact.attractParticles(t, s), a.particles.move.bounce && a.fn.interact.bounceParticles(t, s);
                        }
                }
            }),
            (a.fn.particlesDraw = function () {
                a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h), a.fn.particlesUpdate();
                for (var e = 0; e < a.particles.array.length; e++) {
                    a.particles.array[e].draw();
                }
            }),
            (a.fn.particlesEmpty = function () {
                a.particles.array = [];
            }),
            (a.fn.particlesRefresh = function () {
                cancelRequestAnimFrame(a.fn.checkAnimFrame),
                    cancelRequestAnimFrame(a.fn.drawAnimFrame),
                    (a.tmp.source_svg = void 0),
                    (a.tmp.img_obj = void 0),
                    (a.tmp.count_svg = 0),
                    a.fn.particlesEmpty(),
                    a.fn.canvasClear(),
                    a.fn.vendors.start();
            }),
            (a.fn.interact.linkParticles = function (e, t) {
                var i = e.x - t.x,
                    n = e.y - t.y,
                    r = Math.sqrt(i * i + n * n);
                if (r <= a.particles.line_linked.distance) {
                    var s = a.particles.line_linked.opacity - r / (1 / a.particles.line_linked.opacity) / a.particles.line_linked.distance;
                    if (s > 0) {
                        var o = a.particles.line_linked.color_rgb_line;
                        (a.canvas.ctx.strokeStyle = "rgba(" + o.r + "," + o.g + "," + o.b + "," + s + ")"),
                            (a.canvas.ctx.lineWidth = a.particles.line_linked.width),
                            a.canvas.ctx.beginPath(),
                            a.canvas.ctx.moveTo(e.x, e.y),
                            a.canvas.ctx.lineTo(t.x, t.y),
                            a.canvas.ctx.stroke(),
                            a.canvas.ctx.closePath();
                    }
                }
            }),
            (a.fn.interact.attractParticles = function (e, t) {
                var i = e.x - t.x,
                    n = e.y - t.y;
                if (Math.sqrt(i * i + n * n) <= a.particles.line_linked.distance) {
                    var r = i / (1e3 * a.particles.move.attract.rotateX),
                        s = n / (1e3 * a.particles.move.attract.rotateY);
                    (e.vx -= r), (e.vy -= s), (t.vx += r), (t.vy += s);
                }
            }),
            (a.fn.interact.bounceParticles = function (e, t) {
                var i = e.x - t.x,
                    a = e.y - t.y;
                Math.sqrt(i * i + a * a) <= e.radius + t.radius && ((e.vx = -e.vx), (e.vy = -e.vy), (t.vx = -t.vx), (t.vy = -t.vy));
            }),
            (a.fn.modes.pushParticles = function (e, t) {
                a.tmp.pushing = !0;
                for (var i = 0; i < e; i++)
                    a.particles.array.push(new a.fn.particle(a.particles.color, a.particles.opacity.value, { x: t ? t.pos_x : Math.random() * a.canvas.w, y: t ? t.pos_y : Math.random() * a.canvas.h })),
                        i == e - 1 && (a.particles.move.enable || a.fn.particlesDraw(), (a.tmp.pushing = !1));
            }),
            (a.fn.modes.removeParticles = function (e) {
                a.particles.array.splice(0, e), a.particles.move.enable || a.fn.particlesDraw();
            }),
            (a.fn.modes.bubbleParticle = function (e) {
                if (a.interactivity.events.onhover.enable && isInArray("bubble", a.interactivity.events.onhover.mode)) {
                    var t = e.x - a.interactivity.mouse.pos_x,
                        i = e.y - a.interactivity.mouse.pos_y,
                        n = 1 - (l = Math.sqrt(t * t + i * i)) / a.interactivity.modes.bubble.distance;
                    function r() {
                        (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
                    }
                    if (l <= a.interactivity.modes.bubble.distance) {
                        if (n >= 0 && "mousemove" == a.interactivity.status) {
                            if (a.interactivity.modes.bubble.size != a.particles.size.value)
                                if (a.interactivity.modes.bubble.size > a.particles.size.value) {
                                    (o = e.radius + a.interactivity.modes.bubble.size * n) >= 0 && (e.radius_bubble = o);
                                } else {
                                    var s = e.radius - a.interactivity.modes.bubble.size,
                                        o = e.radius - s * n;
                                    e.radius_bubble = o > 0 ? o : 0;
                                }
                            var c;
                            if (a.interactivity.modes.bubble.opacity != a.particles.opacity.value)
                                if (a.interactivity.modes.bubble.opacity > a.particles.opacity.value) (c = a.interactivity.modes.bubble.opacity * n) > e.opacity && c <= a.interactivity.modes.bubble.opacity && (e.opacity_bubble = c);
                                else (c = e.opacity - (a.particles.opacity.value - a.interactivity.modes.bubble.opacity) * n) < e.opacity && c >= a.interactivity.modes.bubble.opacity && (e.opacity_bubble = c);
                        }
                    } else r();
                    "mouseleave" == a.interactivity.status && r();
                } else if (a.interactivity.events.onclick.enable && isInArray("bubble", a.interactivity.events.onclick.mode)) {
                    if (a.tmp.bubble_clicking) {
                        (t = e.x - a.interactivity.mouse.click_pos_x), (i = e.y - a.interactivity.mouse.click_pos_y);
                        var l = Math.sqrt(t * t + i * i),
                            u = (new Date().getTime() - a.interactivity.mouse.click_time) / 1e3;
                        u > a.interactivity.modes.bubble.duration && (a.tmp.bubble_duration_end = !0), u > 2 * a.interactivity.modes.bubble.duration && ((a.tmp.bubble_clicking = !1), (a.tmp.bubble_duration_end = !1));
                    }
                    function d(t, i, n, r, s) {
                        if (t != i)
                            if (a.tmp.bubble_duration_end) null != n && ((c = t + (t - (r - (u * (r - t)) / a.interactivity.modes.bubble.duration))), "size" == s && (e.radius_bubble = c), "opacity" == s && (e.opacity_bubble = c));
                            else if (l <= a.interactivity.modes.bubble.distance) {
                                if (null != n) var o = n;
                                else o = r;
                                if (o != t) {
                                    var c = r - (u * (r - t)) / a.interactivity.modes.bubble.duration;
                                    "size" == s && (e.radius_bubble = c), "opacity" == s && (e.opacity_bubble = c);
                                }
                            } else "size" == s && (e.radius_bubble = void 0), "opacity" == s && (e.opacity_bubble = void 0);
                    }
                    a.tmp.bubble_clicking &&
                        (d(a.interactivity.modes.bubble.size, a.particles.size.value, e.radius_bubble, e.radius, "size"), d(a.interactivity.modes.bubble.opacity, a.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
                }
            }),
            (a.fn.modes.repulseParticle = function (e) {
                if (a.interactivity.events.onhover.enable && isInArray("repulse", a.interactivity.events.onhover.mode) && "mousemove" == a.interactivity.status) {
                    var t = e.x - a.interactivity.mouse.pos_x,
                        i = e.y - a.interactivity.mouse.pos_y,
                        n = Math.sqrt(t * t + i * i),
                        r = { x: t / n, y: i / n },
                        s = clamp((1 / (c = a.interactivity.modes.repulse.distance)) * (-1 * Math.pow(n / c, 2) + 1) * c * 100, 0, 50),
                        o = { x: e.x + r.x * s, y: e.y + r.y * s };
                    "bounce" == a.particles.move.out_mode ? (o.x - e.radius > 0 && o.x + e.radius < a.canvas.w && (e.x = o.x), o.y - e.radius > 0 && o.y + e.radius < a.canvas.h && (e.y = o.y)) : ((e.x = o.x), (e.y = o.y));
                } else if (a.interactivity.events.onclick.enable && isInArray("repulse", a.interactivity.events.onclick.mode))
                    if ((a.tmp.repulse_finish || (a.tmp.repulse_count++, a.tmp.repulse_count == a.particles.array.length && (a.tmp.repulse_finish = !0)), a.tmp.repulse_clicking)) {
                        var c = Math.pow(a.interactivity.modes.repulse.distance / 6, 3),
                            l = a.interactivity.mouse.click_pos_x - e.x,
                            u = a.interactivity.mouse.click_pos_y - e.y,
                            d = l * l + u * u,
                            p = (-c / d) * 1;
                        d <= c &&
                            (function () {
                                var t = Math.atan2(u, l);
                                if (((e.vx = p * Math.cos(t)), (e.vy = p * Math.sin(t)), "bounce" == a.particles.move.out_mode)) {
                                    var i = { x: e.x + e.vx, y: e.y + e.vy };
                                    i.x + e.radius > a.canvas.w ? (e.vx = -e.vx) : i.x - e.radius < 0 && (e.vx = -e.vx), i.y + e.radius > a.canvas.h ? (e.vy = -e.vy) : i.y - e.radius < 0 && (e.vy = -e.vy);
                                }
                            })();
                    } else 0 == a.tmp.repulse_clicking && ((e.vx = e.vx_i), (e.vy = e.vy_i));
            }),
            (a.fn.modes.grabParticle = function (e) {
                if (a.interactivity.events.onhover.enable && "mousemove" == a.interactivity.status) {
                    var t = e.x - a.interactivity.mouse.pos_x,
                        i = e.y - a.interactivity.mouse.pos_y,
                        n = Math.sqrt(t * t + i * i);
                    if (n <= a.interactivity.modes.grab.distance) {
                        var r = a.interactivity.modes.grab.line_linked.opacity - n / (1 / a.interactivity.modes.grab.line_linked.opacity) / a.interactivity.modes.grab.distance;
                        if (r > 0) {
                            var s = a.particles.line_linked.color_rgb_line;
                            (a.canvas.ctx.strokeStyle = "rgba(" + s.r + "," + s.g + "," + s.b + "," + r + ")"),
                                (a.canvas.ctx.lineWidth = a.particles.line_linked.width),
                                a.canvas.ctx.beginPath(),
                                a.canvas.ctx.moveTo(e.x, e.y),
                                a.canvas.ctx.lineTo(a.interactivity.mouse.pos_x, a.interactivity.mouse.pos_y),
                                a.canvas.ctx.stroke(),
                                a.canvas.ctx.closePath();
                        }
                    }
                }
            }),
            (a.fn.vendors.eventsListeners = function () {
                "window" == a.interactivity.detect_on ? (a.interactivity.el = window) : (a.interactivity.el = a.canvas.el),
                    (a.interactivity.events.onhover.enable || a.interactivity.events.onclick.enable) &&
                        (a.interactivity.el.addEventListener("mousemove", function (e) {
                            if (a.interactivity.el == window)
                                var t = e.clientX,
                                    i = e.clientY;
                            else (t = e.offsetX || e.clientX), (i = e.offsetY || e.clientY);
                            (a.interactivity.mouse.pos_x = t),
                                (a.interactivity.mouse.pos_y = i),
                                a.tmp.retina && ((a.interactivity.mouse.pos_x *= a.canvas.pxratio), (a.interactivity.mouse.pos_y *= a.canvas.pxratio)),
                                (a.interactivity.status = "mousemove");
                        }),
                        a.interactivity.el.addEventListener("mouseleave", function (e) {
                            (a.interactivity.mouse.pos_x = null), (a.interactivity.mouse.pos_y = null), (a.interactivity.status = "mouseleave");
                        })),
                    a.interactivity.events.onclick.enable &&
                        a.interactivity.el.addEventListener("click", function () {
                            if (
                                ((a.interactivity.mouse.click_pos_x = a.interactivity.mouse.pos_x),
                                (a.interactivity.mouse.click_pos_y = a.interactivity.mouse.pos_y),
                                (a.interactivity.mouse.click_time = new Date().getTime()),
                                a.interactivity.events.onclick.enable)
                            )
                                switch (a.interactivity.events.onclick.mode) {
                                    case "push":
                                        a.particles.move.enable
                                            ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse)
                                            : 1 == a.interactivity.modes.push.particles_nb
                                            ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse)
                                            : a.interactivity.modes.push.particles_nb > 1 && a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb);
                                        break;
                                    case "remove":
                                        a.fn.modes.removeParticles(a.interactivity.modes.remove.particles_nb);
                                        break;
                                    case "bubble":
                                        a.tmp.bubble_clicking = !0;
                                        break;
                                    case "repulse":
                                        (a.tmp.repulse_clicking = !0),
                                            (a.tmp.repulse_count = 0),
                                            (a.tmp.repulse_finish = !1),
                                            setTimeout(function () {
                                                a.tmp.repulse_clicking = !1;
                                            }, 1e3 * a.interactivity.modes.repulse.duration);
                                }
                        });
            }),
            (a.fn.vendors.densityAutoParticles = function () {
                if (a.particles.number.density.enable) {
                    var e = (a.canvas.el.width * a.canvas.el.height) / 1e3;
                    a.tmp.retina && (e /= 2 * a.canvas.pxratio);
                    var t = (e * a.particles.number.value) / a.particles.number.density.value_area,
                        i = a.particles.array.length - t;
                    i < 0 ? a.fn.modes.pushParticles(Math.abs(i)) : a.fn.modes.removeParticles(i);
                }
            }),
            (a.fn.vendors.checkOverlap = function (e, t) {
                for (var i = 0; i < a.particles.array.length; i++) {
                    var n = a.particles.array[i],
                        r = e.x - n.x,
                        s = e.y - n.y;
                    Math.sqrt(r * r + s * s) <= e.radius + n.radius && ((e.x = t ? t.x : Math.random() * a.canvas.w), (e.y = t ? t.y : Math.random() * a.canvas.h), a.fn.vendors.checkOverlap(e));
                }
            }),
            (a.fn.vendors.createSvgImg = function (e) {
                var t = a.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function (t, i, a, n) {
                        if (e.color.rgb) var r = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
                        else r = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
                        return r;
                    }),
                    i = new Blob([t], { type: "image/svg+xml;charset=utf-8" }),
                    n = window.URL || window.webkitURL || window,
                    r = n.createObjectURL(i),
                    s = new Image();
                s.addEventListener("load", function () {
                    (e.img.obj = s), (e.img.loaded = !0), n.revokeObjectURL(r), a.tmp.count_svg++;
                }),
                    (s.src = r);
            }),
            (a.fn.vendors.destroypJS = function () {
                cancelAnimationFrame(a.fn.drawAnimFrame), i.remove(), (pJSDom = null);
            }),
            (a.fn.vendors.drawShape = function (e, t, i, a, n, r) {
                var s = n * r,
                    o = n / r,
                    c = (180 * (o - 2)) / o,
                    l = Math.PI - (Math.PI * c) / 180;
                e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);
                for (var u = 0; u < s; u++) e.lineTo(a, 0), e.translate(a, 0), e.rotate(l);
                e.fill(), e.restore();
            }),
            (a.fn.vendors.exportImg = function () {
                window.open(a.canvas.el.toDataURL("image/png"), "_blank");
            }),
            (a.fn.vendors.loadImg = function (e) {
                if (((a.tmp.img_error = void 0), "" != a.particles.shape.image.src))
                    if ("svg" == e) {
                        var t = new XMLHttpRequest();
                        t.open("GET", a.particles.shape.image.src),
                            (t.onreadystatechange = function (e) {
                                4 == t.readyState && (200 == t.status ? ((a.tmp.source_svg = e.currentTarget.response), a.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), (a.tmp.img_error = !0)));
                            }),
                            t.send();
                    } else {
                        var i = new Image();
                        i.addEventListener("load", function () {
                            (a.tmp.img_obj = i), a.fn.vendors.checkBeforeDraw();
                        }),
                            (i.src = a.particles.shape.image.src);
                    }
                else console.log("Error pJS - No image.src"), (a.tmp.img_error = !0);
            }),
            (a.fn.vendors.draw = function () {
                "image" == a.particles.shape.type
                    ? "svg" == a.tmp.img_type
                        ? a.tmp.count_svg >= a.particles.number.value
                            ? (a.fn.particlesDraw(), a.particles.move.enable ? (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : cancelRequestAnimFrame(a.fn.drawAnimFrame))
                            : a.tmp.img_error || (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
                        : null != a.tmp.img_obj
                        ? (a.fn.particlesDraw(), a.particles.move.enable ? (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : cancelRequestAnimFrame(a.fn.drawAnimFrame))
                        : a.tmp.img_error || (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw))
                    : (a.fn.particlesDraw(), a.particles.move.enable ? (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : cancelRequestAnimFrame(a.fn.drawAnimFrame));
            }),
            (a.fn.vendors.checkBeforeDraw = function () {
                "image" == a.particles.shape.type
                    ? "svg" == a.tmp.img_type && null == a.tmp.source_svg
                        ? (a.tmp.checkAnimFrame = requestAnimFrame(check))
                        : (cancelRequestAnimFrame(a.tmp.checkAnimFrame), a.tmp.img_error || (a.fn.vendors.init(), a.fn.vendors.draw()))
                    : (a.fn.vendors.init(), a.fn.vendors.draw());
            }),
            (a.fn.vendors.init = function () {
                a.fn.retinaInit(), a.fn.canvasInit(), a.fn.canvasSize(), a.fn.canvasPaint(), a.fn.particlesCreate(), a.fn.vendors.densityAutoParticles(), (a.particles.line_linked.color_rgb_line = hexToRgb(a.particles.line_linked.color));
            }),
            (a.fn.vendors.start = function () {
                isInArray("image", a.particles.shape.type) ? ((a.tmp.img_type = a.particles.shape.image.src.substr(a.particles.shape.image.src.length - 3)), a.fn.vendors.loadImg(a.tmp.img_type)) : a.fn.vendors.checkBeforeDraw();
            }),
            a.fn.vendors.eventsListeners(),
            a.fn.vendors.start();
    };
function hexToRgb(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, i, a) {
        return t + t + i + i + a + a;
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function clamp(e, t, i) {
    return Math.min(Math.max(e, t), i);
}
function isInArray(e, t) {
    return t.indexOf(e) > -1;
}
(Object.deepExtend = function (e, t) {
    for (var i in t) t[i] && t[i].constructor && t[i].constructor === Object ? ((e[i] = e[i] || {}), arguments.callee(e[i], t[i])) : (e[i] = t[i]);
    return e;
}),
    (window.requestAnimFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (e) {
            window.setTimeout(e, 1e3 / 60);
        }),
    (window.cancelRequestAnimFrame =
        window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout),
    (window.pJSDom = []),
    (window.particlesJS = function (e, t) {
        "string" != typeof e && ((t = e), (e = "particles-js")), e || (e = "particles-js");
        var i = document.getElementById(e),
            a = i.getElementsByClassName("particles-js-canvas-el");
        if (a.length) for (; a.length > 0; ) i.removeChild(a[0]);
        var n = document.createElement("canvas");
        (n.className = "particles-js-canvas-el"), (n.style.width = "100%"), (n.style.height = "100%"), null != document.getElementById(e).appendChild(n) && pJSDom.push(new pJS(e, t));
    }),
    (window.particlesJS.load = function (e, t, i) {
        var a = new XMLHttpRequest();
        a.open("GET", t),
            (a.onreadystatechange = function (t) {
                if (4 == a.readyState)
                    if (200 == a.status) {
                        var n = JSON.parse(t.currentTarget.response);
                        window.particlesJS(e, n), i && i();
                    } else console.log("Error pJS - XMLHttpRequest status: " + a.status), console.log("Error pJS - File config not found");
            }),
            a.send();
    }),
    particlesJS("particles", {
        particles: {
            number: { value: 180, density: { enable: !0, value_area: 2e3 } },
            color: { value: "#FF8C00" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } },
            opacity: { value: 0.5, random: !1, anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 } },
            size: { value: 3, random: !0, anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 } },
            line_linked: { enable: !1, distance: 150, color: "#FF8C00", opacity: 0.4, width: 1 },
            move: { enable: !0, speed: 6, direction: "none", random: !1, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 600, rotateY: 1200 } },
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: !0, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
            },
        },
        retina_detect: !0,
    }),
    (count_particles = document.querySelector(".js-count-particles")),
    (update = function () {
        requestAnimationFrame(update);
    }),
    requestAnimationFrame(update);
