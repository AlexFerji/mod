(function (e) {
    function t(t) {
        for (var r, c, i = t[0], s = t[1], u = t[2], l = 0, d = []; l < i.length; l++) c = i[l], Object.prototype.hasOwnProperty.call(o, c) && o[c] && d.push(o[c][0]), o[c] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        b && b(t);
        while (d.length) d.shift()();
        return a.push.apply(a, u || []), n()
    }

    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, c = 1; c < n.length; c++) {
                var i = n[c];
                0 !== o[i] && (r = !1)
            }
            r && (a.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }

    var r = {}, c = {app: 0}, o = {app: 0}, a = [];

    function i(e) {
        return s.p + "js/" + ({}[e] || e) + "." + {"chunk-a694db38": "5e13423f"}[e] + ".js"
    }

    function s(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }

    s.e = function (e) {
        var t = [], n = {"chunk-a694db38": 1};
        c[e] ? t.push(c[e]) : 0 !== c[e] && n[e] && t.push(c[e] = new Promise((function (t, n) {
            for (var r = "css/" + ({}[e] || e) + "." + {"chunk-a694db38": "08d8959d"}[e] + ".css", o = s.p + r, a = document.getElementsByTagName("link"), i = 0; i < a.length; i++) {
                var u = a[i], l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === r || l === o)) return t()
            }
            var d = document.getElementsByTagName("style");
            for (i = 0; i < d.length; i++) {
                u = d[i], l = u.getAttribute("data-href");
                if (l === r || l === o) return t()
            }
            var b = document.createElement("link");
            b.rel = "stylesheet", b.type = "text/css", b.onload = t, b.onerror = function (t) {
                var r = t && t.target && t.target.src || o,
                    a = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                a.code = "CSS_CHUNK_LOAD_FAILED", a.request = r, delete c[e], b.parentNode.removeChild(b), n(a)
            }, b.href = o;
            var j = document.getElementsByTagName("head")[0];
            j.appendChild(b)
        })).then((function () {
            c[e] = 0
        })));
        var r = o[e];
        if (0 !== r) if (r) t.push(r[2]); else {
            var a = new Promise((function (t, n) {
                r = o[e] = [t, n]
            }));
            t.push(r[2] = a);
            var u, l = document.createElement("script");
            l.charset = "utf-8", l.timeout = 120, s.nc && l.setAttribute("nonce", s.nc), l.src = i(e);
            var d = new Error;
            u = function (t) {
                l.onerror = l.onload = null, clearTimeout(b);
                var n = o[e];
                if (0 !== n) {
                    if (n) {
                        var r = t && ("load" === t.type ? "missing" : t.type), c = t && t.target && t.target.src;
                        d.message = "Loading chunk " + e + " failed.\n(" + r + ": " + c + ")", d.name = "ChunkLoadError", d.type = r, d.request = c, n[1](d)
                    }
                    o[e] = void 0
                }
            };
            var b = setTimeout((function () {
                u({type: "timeout", target: l})
            }), 12e4);
            l.onerror = l.onload = u, document.head.appendChild(l)
        }
        return Promise.all(t)
    }, s.m = e, s.c = r, s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, s.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) s.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/", s.oe = function (e) {
        throw console.error(e), e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [], l = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var d = 0; d < u.length; d++) t(u[d]);
    var b = l;
    a.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("cd49")
    }, "058e": function (e, t, n) {
        "use strict";
        n("c31b")
    }, "0613": function (e, t, n) {
        "use strict";
        n.d(t, "b", (function () {
            return b
        })), n.d(t, "a", (function () {
            return j
        })), n.d(t, "c", (function () {
            return O
        }));
        var r = n("1da1"), c = n("2909"), o = (n("a4d3"), n("e01a"), n("d3b7"), n("96cf"), n("5502")), a = n("260b"),
            i = n("ea7b"), s = n("e71f"), u = n("588e"), l = (n("bf19"), function (e) {
                switch (e) {
                    case"google":
                        var t = new i["b"];
                        return t.addScope("profile"), t.addScope("email"), t;
                    case"github":
                        var n = new i["a"];
                        return n.setCustomParameters({allow_signup: "false"}), n.addScope("read:user"), n.addScope("user:email"), n;
                    default:
                        throw new Error("Invalid auth provider name!")
                }
            }), d = {
                apiKey: "AIzaSyBplaQdF1Nr4xuG9pV_BjIjkckfuIwBKkg",
                authDomain: "model-catalog-303814.firebaseapp.com",
                projectId: "model-catalog-303814",
                storageBucket: "model-catalog-303814.appspot.com",
                messagingSenderId: "712573757834",
                appId: "1:712573757834:web:0481e2d581c867be624073"
            }, b = Object(o["a"])({
                state: {
                    imgLogo: "/assets/img/logo.gif",
                    IsAuthorized: !1,
                    Firebase: {
                        app: Object(a["a"])(d),
                        auth: Object(i["d"])(),
                        db: Object(s["d"])(),
                        storage: Object(u["b"])()
                    },
                    User: null,
                    Models: {rated: [], currentList: []}
                }, mutations: {
                    setUser: function (e, t) {
                        e.User = t
                    }, setRatedModels: function (e, t) {
                        e.Models.rated = t
                    }, setCurrentModels: function (e, t) {
                        e.Models.currentList = t
                    }, addCurrentModels: function (e, t) {
                        var n;
                        (n = e.Models.currentList).push.apply(n, Object(c["a"])(t))
                    }
                }, actions: {
                    auth: function (e, t) {
                        var n = e.state;
                        return Object(i["e"])(n.Firebase.auth, l(t))
                    }, logout: function (e) {
                        var t = e.state;
                        return Object(i["f"])(t.Firebase.auth)
                    }, uploadModel: function () {
                        var e = Object(r["a"])(regeneratorRuntime.mark((function e(t, n) {
                            var r, c, o, a, i, l;
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.state, c = n.model, o = n.imageFile, a = n.modelFile, i = Object(u["c"])(r.Firebase.storage, c.img.src), e.next = 5, Object(u["d"])(i, o);
                                    case 5:
                                        return l = Object(u["c"])(r.Firebase.storage, c.url), e.next = 8, Object(u["d"])(l, a);
                                    case 8:
                                        return e.next = 10, Object(s["a"])(Object(s["b"])(r.Firebase.db, "model"), c);
                                    case 10:
                                        return e.abrupt("return", !0);
                                    case 11:
                                    case"end":
                                        return e.stop()
                                }
                            }), e)
                        })));

                        function t(t, n) {
                            return e.apply(this, arguments)
                        }

                        return t
                    }()
                }, getters: {
                    isAuthenticated: function (e) {
                        return null !== e.User
                    }
                }, modules: {}
            }), j = Symbol("VuexStore");

        function O() {
            return Object(o["b"])(j)
        }
    }, "10fb": function (e, t, n) {
        e.exports = n.p + "img/logo.61af48d3.gif"
    }, 1768: function (e, t, n) {
        "use strict";
        n("d655")
    }, "227f": function (e, t, n) {
        "use strict";
        n("5607")
    }, "29b5": function (e, t, n) {
        "use strict";
        n("5c3d")
    }, "449f": function (e, t, n) {
    }, 5607: function (e, t, n) {
    }, "5c3d": function (e, t, n) {
    }, "721b": function (e, t, n) {
    }, 8523: function (e, t, n) {
    }, a535: function (e, t, n) {
    }, bb9b: function (e, t, n) {
        "use strict";
        n("449f")
    }, c31b: function (e, t, n) {
    }, c5fa: function (e, t, n) {
        "use strict";
        n("8523")
    }, cd49: function (e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d");
        var r = n("7a23");

        function c(e, t, n, c, o, a) {
            var i = Object(r["D"])("SideBar"), s = Object(r["D"])("HeaderComponent"), u = Object(r["D"])("router-view"),
                l = Object(r["D"])("Toast");
            return Object(r["v"])(), Object(r["g"])(r["a"], null, [Object(r["j"])(i, {imgLogo: e.imgLogo}, null, 8, ["imgLogo"]), Object(r["j"])(s, {onClick: e.showToast}, null, 8, ["onClick"]), Object(r["j"])(u), Object(r["j"])(l)], 64)
        }

        var o = n("0613"), a = n("10fb"), i = n.n(a);
        Object(r["y"])("data-v-45e66d0e");
        var s = {class: "sidebar"}, u = {class: "sidebar-title"}, l = ["title"], d = ["onClick"],
            b = {class: "sidebar-item__text"};

        function j(e, t, n, c, o, a) {
            var j = Object(r["D"])("Icon");
            return Object(r["v"])(), Object(r["g"])(r["a"], null, [Object(r["L"])(Object(r["h"])("div", {
                class: "overlay",
                onClick: t[2] || (t[2] = function (t) {
                    return e.setSidebarOpened(!1)
                })
            }, [Object(r["h"])("div", s, [Object(r["h"])("div", u, [Object(r["h"])("img", {
                class: "sidebar-title__logo logo",
                src: i.a,
                title: e.host,
                onClick: t[0] || (t[0] = Object(r["M"])((function (t) {
                    return e.$router.push("/")
                }), ["stop"]))
            }, null, 8, l), Object(r["j"])(j, {
                icon: "mdi:close",
                color: "black",
                class: "sidebar-title__close-button",
                onClick: t[1] || (t[1] = Object(r["M"])((function (t) {
                    return e.setSidebarOpened(!1)
                }), ["stop"]))
            })]), (Object(r["v"])(!0), Object(r["g"])(r["a"], null, Object(r["B"])(e.sidebarItems, (function (e, t) {
                return Object(r["v"])(), Object(r["g"])("div", {
                    class: "sidebar-item", key: t, onClick: function (t) {
                        return e.action ? e.action : null
                    }
                }, [e.imgSrcPrependIcon ? (Object(r["v"])(), Object(r["e"])(j, {
                    key: 0,
                    class: "sidebar-item__prepend-icon",
                    icon: "mdi:".concat(e.imgSrcPrependIcon),
                    color: "white"
                }, null, 8, ["icon"])) : Object(r["f"])("", !0), Object(r["h"])("span", b, Object(r["F"])(e.text), 1), e.imgSrcAppendIcon ? (Object(r["v"])(), Object(r["e"])(j, {
                    key: 1,
                    class: "sidebar-item__append-icon",
                    icon: "mdi:".concat(e.imgSrcAppendIcon),
                    color: "white"
                }, null, 8, ["icon"])) : Object(r["f"])("", !0)], 8, d)
            })), 128))])], 512), [[r["I"], e.isSidebarOpened]]), Object(r["L"])(Object(r["h"])("div", {
                class: "sidebar-open-button",
                onClick: t[3] || (t[3] = function (t) {
                    return e.setSidebarOpened(!0)
                })
            }, " > ", 512), [[r["I"], !e.isSidebarOpened]])], 64)
        }

        Object(r["w"])();
        var O = n("2909"), p = (n("d81d"), n("4de4"), n("99af"), n("b0c0"), n("d3b7"), n("25f0"), n("6c02")),
            f = n("5779"), m = Object(r["k"])({
                name: "SideBar",
                props: {
                    imgLogo: {type: String, required: !0},
                    items: {type: Array, required: !1},
                    pathFilters: {
                        type: Array, required: !1, default: function () {
                            return []
                        }
                    }
                },
                components: {Icon: f["a"]},
                setup: function (e) {
                    var t = Object(p["c"])(), n = Object(r["A"])(!1), c = function (e) {
                        switch (e) {
                            case"/":
                                return "home";
                            case"/about":
                                return "info";
                            case"/add":
                                return "plus";
                            default:
                                return
                        }
                    }, o = function () {
                        return void 0 === e.items ? t.options.routes.filter((function (t) {
                            return -1 === ["/:pathMatch(.*)*"].concat(Object(O["a"])(e.pathFilters)).indexOf(t.path)
                        })).map((function (e) {
                            return {
                                imgSrcPrependIcon: c(e.path),
                                text: e.name ? e.name.toString() : e.path,
                                action: function () {
                                    return t.push(e.path)
                                }
                            }
                        })) : e.items
                    };
                    return {
                        isSidebarOpened: n, setSidebarOpened: function (e) {
                            return n.value = e
                        }, sidebarItems: o(), host: document.location.host
                    }
                }
            });
        n("bb9b");
        m.render = j, m.__scopeId = "data-v-45e66d0e";
        var v = m;
        Object(r["y"])("data-v-7d1fca4c");
        var h = {class: "header"}, g = {class: "header-toolbox"}, w = Object(r["i"])(" Sign in "),
            y = Object(r["i"])(" Google "), _ = Object(r["i"])(" GitHub "), k = ["src"], S = Object(r["i"])(" Logout "),
            C = Object(r["i"])(" Add model ");

        function x(e, t, n, c, o, a) {
            var s = Object(r["D"])("Icon"), u = Object(r["D"])("CustomDropdown");
            return Object(r["v"])(), Object(r["g"])("div", h, [Object(r["h"])("img", {
                class: "header__logo logo",
                src: i.a,
                alt: "",
                onClick: t[0] || (t[0] = function (t) {
                    return e.$router.push("/")
                })
            }), Object(r["h"])("div", g, [e.isAuthenticated ? (Object(r["v"])(), Object(r["e"])(u, {
                key: 1,
                class: "header-toolbox__auth-complete"
            }, {
                title: Object(r["K"])((function () {
                    return [e.user.photoURL ? (Object(r["v"])(), Object(r["g"])("img", {
                        key: 0,
                        src: e.user.photoURL,
                        alt: ""
                    }, null, 8, k)) : (Object(r["v"])(), Object(r["e"])(s, {
                        key: 1,
                        class: "iconify",
                        icon: "mdi:account",
                        color: "white"
                    })), Object(r["i"])(" " + Object(r["F"])(e.user.displayName), 1)]
                })), items: Object(r["K"])((function () {
                    return [Object(r["h"])("div", {
                        class: "dropdown-item", onClick: t[3] || (t[3] = function () {
                            return e.logout && e.logout.apply(e, arguments)
                        })
                    }, [Object(r["j"])(s, {class: "iconify", icon: "mdi:logout", color: "white"}), S])]
                })), _: 1
            })) : (Object(r["v"])(), Object(r["e"])(u, {
                key: 0,
                openOnHover: "",
                class: "header-toolbox__auth"
            }, {
                title: Object(r["K"])((function () {
                    return [Object(r["j"])(s, {class: "iconify", icon: "mdi:account", color: "white"}), w]
                })), items: Object(r["K"])((function () {
                    return [Object(r["h"])("div", {
                        class: "dropdown-item", onClick: t[1] || (t[1] = function (t) {
                            return e.authenticate("google")
                        })
                    }, [Object(r["j"])(s, {
                        class: "iconify",
                        icon: "mdi:google",
                        color: "white"
                    }), y]), Object(r["h"])("div", {
                        class: "dropdown-item", onClick: t[2] || (t[2] = function (t) {
                            return e.authenticate("github")
                        })
                    }, [Object(r["j"])(s, {class: "iconify", icon: "mdi:github", color: "white"}), _])]
                })), _: 1
            })), e.isAuthenticated ? (Object(r["v"])(), Object(r["g"])("div", {
                key: 2,
                class: "header-toolbox__add-model-button",
                onClick: t[4] || (t[4] = function (t) {
                    return e.$router.push("/add")
                })
            }, [Object(r["j"])(s, {icon: "mdi:plus", color: "white"}), C])) : Object(r["f"])("", !0)])])
        }

        Object(r["w"])();
        var M = {class: "dropdown-title"}, F = {class: "dropdown__items"};

        function L(e, t, n, c, o, a) {
            return Object(r["v"])(), Object(r["g"])("div", {
                class: Object(r["p"])(["dropdown", {dropdown_opened: e.opened}]),
                onClick: t[0] || (t[0] = function (t) {
                    return e.setOpened(!e.opened)
                }),
                onMouseenter: t[1] || (t[1] = function () {
                    return e.onHover && e.onHover.apply(e, arguments)
                }),
                onMouseleave: t[2] || (t[2] = function (t) {
                    return e.setOpened(!1)
                })
            }, [Object(r["h"])("div", M, [Object(r["C"])(e.$slots, "title")]), Object(r["L"])(Object(r["h"])("div", F, [Object(r["C"])(e.$slots, "items")], 512), [[r["I"], e.opened]])], 34)
        }

        var I = Object(r["k"])({
            name: "CustomDropdown",
            props: {openOnHover: {type: Boolean, default: !1}},
            setup: function (e) {
                var t = Object(r["A"])(!1), n = function (e) {
                    return t.value = e
                }, c = function () {
                    e.openOnHover && n(!0)
                };
                return {opened: t, setOpened: n, onHover: c}
            }
        });
        n("29b5");
        I.render = L;
        var A = I, D = Object(r["k"])({
            name: "HeaderComponent",
            components: {CustomDropdown: A, Icon: f["a"]},
            setup: function () {
                var e = Object(o["c"])();
                return {
                    user: Object(r["c"])((function () {
                        return e.state.User
                    })), authenticate: function (t) {
                        return e.dispatch("auth", t)
                    }, logout: function () {
                        return e.dispatch("logout")
                    }, isAuthenticated: Object(r["c"])((function () {
                        return e.getters.isAuthenticated
                    }))
                }
            }
        });
        n("1768");
        D.render = x, D.__scopeId = "data-v-7d1fca4c";
        var R = D;

        function B(e, t, n, c, o, a) {
            return e.state.isShown ? (Object(r["v"])(), Object(r["g"])("div", {
                key: 0,
                class: Object(r["p"])(["toast", {
                    success: "success" === e.state.state,
                    error: "error" === e.state.state,
                    warning: "warning" === e.state.state
                }]),
                onClick: t[0] || (t[0] = function () {
                    return e.hide && e.hide.apply(e, arguments)
                })
            }, Object(r["F"])(e.messageText), 3)) : Object(r["f"])("", !0)
        }

        var P = Object(r["k"])({
            name: "Toast", setup: function () {
                var e = Object(r["n"])("$toastState", {}), t = Object(r["c"])((function () {
                    switch (e.state) {
                        case"success":
                            return e.message ? e.message + "!" : "Successful request!";
                        case"warning":
                            return "Warning: ".concat(e.message);
                        case"error":
                            return "Error: ".concat(e.message ? e.message : "request error", "!");
                        default:
                            return "Invalid state!"
                    }
                })), n = function () {
                    return e.isShown = !1
                };
                return Object(r["J"])((function () {
                    return e.isShown
                }), (function () {
                    return setTimeout(n, 1e4)
                })), {state: e, messageText: t, hide: n}
            }
        });
        n("c5fa");
        P.render = B;
        var T = P, H = Object(r["k"])({
            name: "Layout",
            components: {SideBar: v, HeaderComponent: R, Toast: T},
            setup: function () {
                var e = Object(o["c"])(), t = Object(r["n"])("$toast"), n = function () {
                    return t.warning("Yes")
                };
                return {imgLogo: e.state.imgLogo, showToast: n}
            }
        });
        H.render = c;
        var E = H;
        n("3ca3"), n("ddb0");

        function U(e, t, n, c, o, a) {
            var i = Object(r["D"])("ModelList"), s = Object(r["D"])("MainToolbox");
            return Object(r["v"])(), Object(r["g"])(r["a"], null, [Object(r["j"])(i, {isRated: ""}), Object(r["j"])(s), Object(r["j"])(i)], 64)
        }

        var q = n("1da1"), K = (n("96cf"), n("159b"), n("e71f"));
        n("ac1f"), n("841c");
        Object(r["y"])("data-v-2ad9e0dc");
        var $ = {class: "toolbox"}, z = ["onClick"], N = {class: "toolbox__right"}, J = {class: "toolbox__search"},
            W = ["onClick"];

        function V(e, t, n, c, o, a) {
            var i = Object(r["D"])("Icon"), s = Object(r["D"])("CustomDropdown");
            return Object(r["v"])(), Object(r["g"])("div", $, [Object(r["j"])(s, {
                class: "toolbox__sort",
                openOnHover: ""
            }, {
                title: Object(r["K"])((function () {
                    return [Object(r["j"])(i, {
                        class: "iconify",
                        icon: "mdi:".concat(e.currentSort.img),
                        color: "white"
                    }, null, 8, ["icon"]), Object(r["i"])(" " + Object(r["F"])(e.currentSort.text), 1)]
                })), items: Object(r["K"])((function () {
                    return [(Object(r["v"])(!0), Object(r["g"])(r["a"], null, Object(r["B"])(e.otherSorts, (function (t) {
                        return Object(r["v"])(), Object(r["g"])("div", {
                            class: "dropdown-item",
                            key: t.name,
                            onClick: function (n) {
                                return e.currentSort = t
                            }
                        }, [Object(r["j"])(i, {
                            class: "iconify",
                            icon: "mdi:".concat(t.img),
                            color: "white"
                        }, null, 8, ["icon"]), Object(r["i"])(" " + Object(r["F"])(t.text), 1)], 8, z)
                    })), 128))]
                })), _: 1
            }), Object(r["h"])("div", N, [Object(r["h"])("div", J, [Object(r["L"])(Object(r["h"])("input", {
                "onUpdate:modelValue": t[0] || (t[0] = function (t) {
                    return e.searchText = t
                }), type: "text", placeholder: "Search...", onUpdate: t[1] || (t[1] = function () {
                    return e.search && e.search.apply(e, arguments)
                })
            }, null, 544), [[r["H"], e.searchText]]), Object(r["j"])(i, {
                class: "iconify",
                icon: "mdi:search",
                color: "#757575"
            })]), Object(r["j"])(s, {
                class: "toolbox__switch-layout",
                openOnHover: ""
            }, {
                title: Object(r["K"])((function () {
                    return [Object(r["j"])(i, {
                        class: "iconify",
                        icon: "mdi:".concat(e.currentLayout.img),
                        color: "white"
                    }, null, 8, ["icon"])]
                })), items: Object(r["K"])((function () {
                    return [(Object(r["v"])(!0), Object(r["g"])(r["a"], null, Object(r["B"])(e.otherLayouts, (function (t) {
                        return Object(r["v"])(), Object(r["g"])("div", {
                            class: "dropdown-item",
                            key: t.name,
                            onClick: function (n) {
                                return e.currentLayout = t
                            }
                        }, [Object(r["j"])(i, {
                            class: "iconify",
                            icon: "mdi:".concat(t.img),
                            color: "white"
                        }, null, 8, ["icon"])], 8, W)
                    })), 128))]
                })), _: 1
            })])])
        }

        Object(r["w"])();
        var G = Object(r["k"])({
            name: "MainToolbox", components: {CustomDropdown: A, Icon: f["a"]}, setup: function () {
                var e = [{name: "ratingDesc", text: "Rating desc", img: "sort-variant"}, {
                    name: "ratingAsc",
                    text: "Rating asc",
                    img: "sort-reverse-variant"
                }], t = Object(r["A"])(e[0]), n = Object(r["c"])((function () {
                    return e.filter((function (e) {
                        return e.name !== t.value.name
                    }))
                })), c = Object(r["n"])("updateSort", (function (e) {
                    return e
                }));
                Object(r["J"])((function () {
                    return t.value
                }), (function (e) {
                    return c(e)
                }));
                var o = [{name: "layoutList", img: "view-list"}, {name: "layoutModule", img: "view-module"}],
                    a = Object(r["A"])(o[0]), i = Object(r["c"])((function () {
                        return o.filter((function (e) {
                            return e.name !== a.value.name
                        }))
                    })), s = Object(r["n"])("updateLayout", (function (e) {
                        return e
                    }));
                Object(r["J"])((function () {
                    return a.value
                }), (function (e) {
                    return s(e)
                }));
                var u = Object(r["A"])(""), l = Object(r["n"])("setSearchText", (function (e) {
                    return e
                })), d = function () {
                    return l(u.value)
                };
                return {currentSort: t, otherSorts: n, currentLayout: a, otherLayouts: i, searchText: u, search: d}
            }
        });
        n("f714");
        G.render = V, G.__scopeId = "data-v-2ad9e0dc";
        var Q = G;
        n("b680"), n("a4d3"), n("e01a");
        Object(r["y"])("data-v-10dce956");
        var Y = ["onClick"], X = {class: "model__title"}, Z = {class: "model-rating"},
            ee = {class: "model-rating__rating"}, te = {class: "model-rating__stars"},
            ne = {class: "model__description"}, re = {class: "model-categories"}, ce = {class: "model-author"},
            oe = Object(r["i"])(" Author: "), ae = {class: "model-author__author"};

        function ie(e, t, n, c, o, a) {
            var i = Object(r["D"])("PreviewModal"), s = Object(r["D"])("FirebaseImg"), u = Object(r["D"])("Icon");
            return Object(r["v"])(), Object(r["g"])("div", {class: Object(r["p"])(["models", {"models_is-rated": e.isRated}])}, [e.previewUrl ? (Object(r["v"])(), Object(r["e"])(i, {
                key: 0,
                url: e.previewUrl,
                name: e.previewName,
                onClose: t[0] || (t[0] = function (t) {
                    return e.previewUrl = ""
                })
            }, null, 8, ["url", "name"])) : Object(r["f"])("", !0), (Object(r["v"])(!0), Object(r["g"])(r["a"], null, Object(r["B"])(e.models, (function (n, c) {
                return Object(r["v"])(), Object(r["g"])("div", {
                    class: Object(r["p"])(["model", {
                        "model_is-short": e.isShort,
                        "model_is-rated": e.isRated
                    }]), key: c, onClick: function (t) {
                        return e.openPreview(n.url, n.title)
                    }
                }, [Object(r["j"])(s, {
                    class: "model__img",
                    src: n.img.src,
                    alt: n.img.alt
                }, null, 8, ["src", "alt"]), Object(r["h"])("div", X, Object(r["F"])(n.title), 1), Object(r["h"])("div", Z, [Object(r["h"])("span", ee, Object(r["F"])(n.rating.toFixed(2)) + "/" + Object(r["F"])(e.ratingScaleSize), 1), Object(r["h"])("div", te, [(Object(r["v"])(!0), Object(r["g"])(r["a"], null, Object(r["B"])(Array(Math.floor(n.rating)), (function (e) {
                    return Object(r["v"])(), Object(r["e"])(u, {
                        key: "starFull".concat(e),
                        icon: "mdi:star",
                        color: "#ffea00",
                        class: "iconify model-rating__star model-rating__star_full"
                    })
                })), 128)), n.rating % 1 > .5 ? (Object(r["v"])(), Object(r["e"])(u, {
                    key: 0,
                    icon: "mdi:star-half",
                    color: "#ffea00",
                    class: "model-rating__star model-rating__star_half"
                })) : Object(r["f"])("", !0), (Object(r["v"])(!0), Object(r["g"])(r["a"], null, Object(r["B"])(Array(Math.floor(e.ratingScaleSize - n.rating + .5)), (function (e) {
                    return Object(r["v"])(), Object(r["e"])(u, {
                        key: "starEmpty".concat(e),
                        icon: "mdi:star",
                        color: "#757575",
                        class: "model-rating__star model-rating__star_empty"
                    })
                })), 128))])]), Object(r["h"])("div", ne, Object(r["F"])(n.description), 1), Object(r["h"])("div", re, [(Object(r["v"])(!0), Object(r["g"])(r["a"], null, Object(r["B"])(n.categories, (function (n, c) {
                    return Object(r["v"])(), Object(r["g"])("span", {
                        class: "model-categories__category",
                        key: c,
                        onClick: t[1] || (t[1] = function () {
                            return e.searchWithCategory && e.searchWithCategory.apply(e, arguments)
                        })
                    }, Object(r["F"])(n), 1)
                })), 128))]), Object(r["h"])("div", ce, [oe, Object(r["h"])("span", ae, Object(r["F"])(n.author), 1)])], 10, Y)
            })), 128))], 2)
        }

        Object(r["w"])();
        var se = n("588e");
        n("b64b");
        Object(r["y"])("data-v-b7590b78");
        var ue = {class: "preview-header"}, le = {class: "preview-header__name"}, de = {class: "preview-settings"},
            be = ["onClick"],
            je = Object(r["h"])("div", {class: "preview__preview"}, [Object(r["h"])("div", {id: "preview-model"})], -1);

        function Oe(e, t, n, c, o, a) {
            var i = Object(r["D"])("Icon"), s = Object(r["D"])("CustomDropdown");
            return Object(r["v"])(), Object(r["e"])(r["b"], {to: "body"}, [Object(r["h"])("div", {
                class: "overlay",
                onClick: t[2] || (t[2] = Object(r["M"])((function (t) {
                    return e.$emit("close")
                }), ["stop"]))
            }, [Object(r["h"])("div", {
                class: "preview", onClick: t[1] || (t[1] = Object(r["M"])((function () {
                    return null
                }), ["stop"]))
            }, [Object(r["h"])("div", ue, [Object(r["h"])("span", le, Object(r["F"])(e.name), 1), Object(r["j"])(i, {
                icon: "mdi:close",
                color: "white",
                class: "preview-header__close",
                onClick: t[0] || (t[0] = Object(r["M"])((function (t) {
                    return e.$emit("close")
                }), ["stop"]))
            })]), Object(r["h"])("div", de, [Object(r["j"])(s, {class: "preview-settings__light"}, {
                title: Object(r["K"])((function () {
                    return [Object(r["i"])(Object(r["F"])(e.light), 1)]
                })), items: Object(r["K"])((function () {
                    return [(Object(r["v"])(!0), Object(r["g"])(r["a"], null, Object(r["B"])(Object.keys(e.lights), (function (t, n) {
                        return Object(r["v"])(), Object(r["g"])("div", {
                            key: n, onClick: Object(r["M"])((function (n) {
                                return e.light = t
                            }), ["stop"])
                        }, Object(r["F"])(t), 9, be)
                    })), 128))]
                })), _: 1
            })]), je])])])
        }

        Object(r["w"])();
        var pe = n("3835"), fe = n("5a89"), me = n("34ad"), ve = n("4721"), he = Object(r["k"])({
            name: "PreviewModal",
            props: {url: {type: String, required: !0}, name: {type: String, required: !0}},
            emits: ["close"],
            components: {CustomDropdown: A, Icon: f["a"]},
            setup: function (e) {
                var t = new fe["rb"]({antialias: !0}), n = new fe["db"], c = new fe["U"](75, 16 / 9, .01, 200);
                c.position.x = -1, c.position.z = 1, c.lookAt(n.position), n.add(c);
                var o = new ve["a"](c, t.domElement);
                o.autoRotate = !0;
                var a = new fe["j"](16777215, 1);
                a.position.set(0, -80, 0);
                var i = new fe["p"](16777215, 16777215, 1), s = new fe["ib"](16777215);
                s.position.set(0, -80, 0);
                var u = new fe["a"](16777215);
                n.add(u);
                var l = {directionalLight: a, hemisphereLight: i, spotLight: s, ambientLight: u},
                    d = Object(r["A"])("ambientLight");
                Object(r["J"])((function () {
                    return d.value
                }), (function (e, t) {
                    n.remove(l[t]), n.add(l[e])
                }));
                var b = Object(r["c"])((function () {
                    var e;
                    return null === (e = document.querySelector("#preview-model")) || void 0 === e ? void 0 : e.clientWidth
                })), j = Object(r["c"])((function () {
                    var e;
                    return null === (e = document.querySelector("#preview-model")) || void 0 === e ? void 0 : e.clientHeight
                }));
                Object(r["J"])((function () {
                    return [b.value, j.value]
                }), (function (e) {
                    var n = Object(pe["a"])(e, 2), r = n[0], c = n[1];
                    r && c && t.setSize(r, c)
                }));
                var O = function e() {
                    t.render(n, c), o.update(), requestAnimationFrame(e)
                };
                return Object(r["t"])(Object(q["a"])(regeneratorRuntime.mark((function r() {
                    var c, o;
                    return regeneratorRuntime.wrap((function (r) {
                        while (1) switch (r.prev = r.next) {
                            case 0:
                                t.setPixelRatio(window.devicePixelRatio), c = new me["a"], c.load(e.url, (function (e) {
                                    return n.add(e.scene)
                                })), o = document.getElementById("preview-model"), t.setSize(o.offsetWidth, o.offsetHeight), o.appendChild(t.domElement), requestAnimationFrame(O);
                            case 7:
                            case"end":
                                return r.stop()
                        }
                    }), r)
                })))), {light: d, lights: l, parentWidth: b, parentHeight: j}
            }
        });
        n("058e");
        he.render = Oe, he.__scopeId = "data-v-b7590b78";
        var ge = he, we = ["src", "alt"];

        function ye(e, t, n, c, o, a) {
            return Object(r["v"])(), Object(r["g"])("img", {src: e.srcRef, alt: e.alt}, null, 8, we)
        }

        var _e = Object(r["k"])({
            name: "FirebaseImg",
            props: {src: {type: String, required: !0}, alt: {type: String, required: !0}},
            setup: function (e) {
                var t = Object(o["c"])(), n = Object(r["A"])("");
                return Object(r["r"])(Object(q["a"])(regeneratorRuntime.mark((function r() {
                    return regeneratorRuntime.wrap((function (r) {
                        while (1) switch (r.prev = r.next) {
                            case 0:
                                return r.next = 2, Object(se["a"])(Object(se["c"])(t.state.Firebase.storage, e.src)).then((function (e) {
                                    return n.value = e
                                }));
                            case 2:
                                return r.abrupt("return", r.sent);
                            case 3:
                            case"end":
                                return r.stop()
                        }
                    }), r)
                })))), {srcRef: n}
            }
        });
        _e.render = ye;
        var ke = _e, Se = Object(r["k"])({
            name: "ModelList",
            props: {isShort: {type: Boolean, default: !0}, isRated: {type: Boolean, default: !1}},
            components: {PreviewModal: ge, FirebaseImg: ke, Icon: f["a"]},
            setup: function (e) {
                var t = Object(o["c"])(), n = function () {
                    var e = Object(q["a"])(regeneratorRuntime.mark((function e(n) {
                        return regeneratorRuntime.wrap((function (e) {
                            while (1) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(se["a"])(Object(se["c"])(t.state.Firebase.storage, n));
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                }(), c = Object(r["c"])((function () {
                    return e.isRated ? t.state.Models.rated : t.state.Models.currentList
                })), a = Object(r["A"])(""), i = Object(r["A"])(""), s = function (e, n) {
                    Object(se["a"])(Object(se["c"])(t.state.Firebase.storage, e)).then((function (e) {
                        return a.value = e
                    })), i.value = n
                }, u = 5;
                return {models: c, ratingScaleSize: u, previewUrl: a, previewName: i, openPreview: s, getSrc: n}
            }
        });
        n("227f");
        Se.render = ie, Se.__scopeId = "data-v-10dce956";
        var Ce = Se, xe = Object(r["k"])({
            name: "MainView", components: {MainToolbox: Q, ModelList: Ce}, setup: function () {
                var e = Object(o["c"])();
                return Object(r["r"])(Object(q["a"])(regeneratorRuntime.mark((function t() {
                    var n, r;
                    return regeneratorRuntime.wrap((function (t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, Object(K["c"])(Object(K["b"])(e.state.Firebase.db, "model"));
                            case 2:
                                n = t.sent, r = [], n.forEach((function (e) {
                                    r.push(e.data())
                                })), e.commit("setCurrentModels", r), e.commit("setRatedModels", r);
                            case 7:
                            case"end":
                                return t.stop()
                        }
                    }), t)
                })))), {}
            }
        });
        xe.render = U;
        var Me = xe, Fe = [{path: "/", name: "Home", component: Me}, {
            path: "/add", name: "Add model", component: function () {
                return n.e("chunk-a694db38").then(n.bind(null, "d31b"))
            }
        }, {path: "/:pathMatch(.*)*", redirect: "/"}], Le = Object(p["a"])({history: Object(p["b"])("/"), routes: Fe});
        Le.afterEach((function (e) {
            return document.title = "Model 3D - ".concat(String(e.name || ""))
        }));
        var Ie = Le, Ae = (n("721b"), n("ea7b")), De = {
            install: function (e, t) {
                e.component("toast", T);
                var n = Object(r["z"])({isShown: !1, state: "success", message: ""});
                e.provide("$toastState", n), e.provide("$toast", {
                    success: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        n.state = "success", n.message = e, n.isShown = !0
                    }, error: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        n.state = "error", n.message = e, n.isShown = !0
                    }, warning: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        n.state = "warning", n.message = e, n.isShown = !0
                    }
                })
            }
        };
        o["b"].state.Firebase.auth.useDeviceLanguage(), o["b"].state.Firebase.auth.setPersistence(Ae["c"]), o["b"].state.Firebase.auth.onAuthStateChanged((function (e) {
            return o["b"].commit("setUser", e)
        })), document.title = "Model 3D", Object(r["d"])(E).use(o["b"], o["a"]).use(Ie).use(De).mount("#app")
    }, d655: function (e, t, n) {
    }, f714: function (e, t, n) {
        "use strict";
        n("a535")
    }
});
//# sourceMappingURL=app.6b7b8f76.js.map