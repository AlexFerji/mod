(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-a694db38"], {
    "0cb2": function (e, t, n) {
        var a = n("7b0b"), i = Math.floor, r = "".replace, l = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, u = /\$([$&'`]|\d{1,2})/g;
        e.exports = function (e, t, n, c, o, s) {
            var d = n + e.length, f = c.length, v = u;
            return void 0 !== o && (o = a(o), v = l), r.call(s, v, (function (a, r) {
                var l;
                switch (r.charAt(0)) {
                    case"$":
                        return "$";
                    case"&":
                        return e;
                    case"`":
                        return t.slice(0, n);
                    case"'":
                        return t.slice(d);
                    case"<":
                        l = o[r.slice(1, -1)];
                        break;
                    default:
                        var u = +r;
                        if (0 === u) return a;
                        if (u > f) {
                            var s = i(u / 10);
                            return 0 === s ? a : s <= f ? void 0 === c[s - 1] ? r.charAt(1) : c[s - 1] + r.charAt(1) : a
                        }
                        l = c[u - 1]
                }
                return void 0 === l ? "" : l
            }))
        }
    }, "11e5": function (e, t, n) {
    }, 1276: function (e, t, n) {
        "use strict";
        var a = n("d784"), i = n("44e7"), r = n("825a"), l = n("1d80"), u = n("4840"), c = n("8aa5"), o = n("50c4"),
            s = n("577e"), d = n("14c3"), f = n("9263"), v = n("9f7f"), p = n("d039"), b = v.UNSUPPORTED_Y, h = [].push,
            g = Math.min, m = 4294967295, j = !p((function () {
                var e = /(?:)/, t = e.exec;
                e.exec = function () {
                    return t.apply(this, arguments)
                };
                var n = "ab".split(e);
                return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
            }));
        a("split", (function (e, t, n) {
            var a;
            return a = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
                var a = s(l(this)), r = void 0 === n ? m : n >>> 0;
                if (0 === r) return [];
                if (void 0 === e) return [a];
                if (!i(e)) return t.call(a, e, r);
                var u, c, o, d = [],
                    v = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                    p = 0, b = new RegExp(e.source, v + "g");
                while (u = f.call(b, a)) {
                    if (c = b.lastIndex, c > p && (d.push(a.slice(p, u.index)), u.length > 1 && u.index < a.length && h.apply(d, u.slice(1)), o = u[0].length, p = c, d.length >= r)) break;
                    b.lastIndex === u.index && b.lastIndex++
                }
                return p === a.length ? !o && b.test("") || d.push("") : d.push(a.slice(p)), d.length > r ? d.slice(0, r) : d
            } : "0".split(void 0, 0).length ? function (e, n) {
                return void 0 === e && 0 === n ? [] : t.call(this, e, n)
            } : t, [function (t, n) {
                var i = l(this), r = void 0 == t ? void 0 : t[e];
                return void 0 !== r ? r.call(t, i, n) : a.call(s(i), t, n)
            }, function (e, i) {
                var l = r(this), f = s(e), v = n(a, l, f, i, a !== t);
                if (v.done) return v.value;
                var p = u(l, RegExp), h = l.unicode,
                    j = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (b ? "g" : "y"),
                    O = new p(b ? "^(?:" + l.source + ")" : l, j), y = void 0 === i ? m : i >>> 0;
                if (0 === y) return [];
                if (0 === f.length) return null === d(O, f) ? [f] : [];
                var x = 0, S = 0, w = [];
                while (S < f.length) {
                    O.lastIndex = b ? 0 : S;
                    var I, k = d(O, b ? f.slice(S) : f);
                    if (null === k || (I = g(o(O.lastIndex + (b ? S : 0)), f.length)) === x) S = c(f, S, h); else {
                        if (w.push(f.slice(x, S)), w.length === y) return w;
                        for (var V = 1; V <= k.length - 1; V++) if (w.push(k[V]), w.length === y) return w;
                        S = x = I
                    }
                }
                return w.push(f.slice(x)), w
            }]
        }), !j, b)
    }, "1a86": function (e, t, n) {
    }, 2710: function (e, t, n) {
        "use strict";
        n("84c8")
    }, 3276: function (e, t, n) {
        "use strict";
        n("5d54")
    }, "44e7": function (e, t, n) {
        var a = n("861d"), i = n("c6b6"), r = n("b622"), l = r("match");
        e.exports = function (e) {
            var t;
            return a(e) && (void 0 !== (t = e[l]) ? !!t : "RegExp" == i(e))
        }
    }, "498a": function (e, t, n) {
        "use strict";
        var a = n("23e7"), i = n("58a8").trim, r = n("c8d2");
        a({target: "String", proto: !0, forced: r("trim")}, {
            trim: function () {
                return i(this)
            }
        })
    }, 5319: function (e, t, n) {
        "use strict";
        var a = n("d784"), i = n("d039"), r = n("825a"), l = n("a691"), u = n("50c4"), c = n("577e"), o = n("1d80"),
            s = n("8aa5"), d = n("0cb2"), f = n("14c3"), v = n("b622"), p = v("replace"), b = Math.max, h = Math.min,
            g = function (e) {
                return void 0 === e ? e : String(e)
            }, m = function () {
                return "$0" === "a".replace(/./, "$0")
            }(), j = function () {
                return !!/./[p] && "" === /./[p]("a", "$0")
            }(), O = !i((function () {
                var e = /./;
                return e.exec = function () {
                    var e = [];
                    return e.groups = {a: "7"}, e
                }, "7" !== "".replace(e, "$<a>")
            }));
        a("replace", (function (e, t, n) {
            var a = j ? "$" : "$0";
            return [function (e, n) {
                var a = o(this), i = void 0 == e ? void 0 : e[p];
                return void 0 !== i ? i.call(e, a, n) : t.call(c(a), e, n)
            }, function (e, i) {
                var o = r(this), v = c(e);
                if ("string" === typeof i && -1 === i.indexOf(a) && -1 === i.indexOf("$<")) {
                    var p = n(t, o, v, i);
                    if (p.done) return p.value
                }
                var m = "function" === typeof i;
                m || (i = c(i));
                var j = o.global;
                if (j) {
                    var O = o.unicode;
                    o.lastIndex = 0
                }
                var y = [];
                while (1) {
                    var x = f(o, v);
                    if (null === x) break;
                    if (y.push(x), !j) break;
                    var S = c(x[0]);
                    "" === S && (o.lastIndex = s(v, u(o.lastIndex), O))
                }
                for (var w = "", I = 0, k = 0; k < y.length; k++) {
                    x = y[k];
                    for (var V = c(x[0]), A = b(h(l(x.index), v.length), 0), F = [], $ = 1; $ < x.length; $++) F.push(g(x[$]));
                    var C = x.groups;
                    if (m) {
                        var _ = [V].concat(F, A, v);
                        void 0 !== C && _.push(C);
                        var D = c(i.apply(void 0, _))
                    } else D = d(V, v, A, F, C, i);
                    A >= I && (w += v.slice(I, A) + D, I = A + V.length)
                }
                return w + v.slice(I)
            }]
        }), !O || !m || j)
    }, 5899: function (e, t) {
        e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    }, "58a8": function (e, t, n) {
        var a = n("1d80"), i = n("577e"), r = n("5899"), l = "[" + r + "]", u = RegExp("^" + l + l + "*"),
            c = RegExp(l + l + "*$"), o = function (e) {
                return function (t) {
                    var n = i(a(t));
                    return 1 & e && (n = n.replace(u, "")), 2 & e && (n = n.replace(c, "")), n
                }
            };
        e.exports = {start: o(1), end: o(2), trim: o(3)}
    }, "5d54": function (e, t, n) {
    }, "84c8": function (e, t, n) {
    }, "8aa5": function (e, t, n) {
        "use strict";
        var a = n("6547").charAt;
        e.exports = function (e, t, n) {
            return t + (n ? a(e, t).length : 1)
        }
    }, af64: function (e, t, n) {
        "use strict";
        n("1a86")
    }, c039: function (e, t, n) {
        "use strict";
        n("11e5")
    }, c8d2: function (e, t, n) {
        var a = n("d039"), i = n("5899"), r = "​᠎";
        e.exports = function (e) {
            return a((function () {
                return !!i[e]() || r[e]() != r || i[e].name !== e
            }))
        }
    }, d31b: function (e, t, n) {
        "use strict";
        n.r(t);
        n("a4d3"), n("e01a");
        var a = n("7a23");
        Object(a["y"])("data-v-5c4da4ce");
        var i = {class: "form"}, r = Object(a["i"])(" This is my model "), l = Object(a["i"])(" Add ");

        function u(e, t, n, u, c, o) {
            var s = Object(a["D"])("BaseInput"), d = Object(a["D"])("BaseButton"), f = Object(a["D"])("FileInput");
            return Object(a["v"])(), Object(a["g"])("form", i, [Object(a["j"])(s, {
                label: "Model title",
                validationFunctions: [e.nonEmpty, e.lettersAndNumbers],
                value: e.model.title,
                "onUpdate:value": t[0] || (t[0] = function (t) {
                    return e.model.title = t
                }),
                onSetValid: e.setValidStatus
            }, null, 8, ["validationFunctions", "value", "onSetValid"]), Object(a["j"])(s, {
                label: "Description",
                validationFunctions: [e.ascii],
                value: e.model.description,
                "onUpdate:value": t[1] || (t[1] = function (t) {
                    return e.model.description = t
                }),
                onSetValid: e.setValidStatus
            }, null, 8, ["validationFunctions", "value", "onSetValid"]), Object(a["j"])(s, {
                label: "Author",
                validationFunctions: [e.nonEmpty, e.lettersAndNumbers],
                value: e.model.author,
                "onUpdate:value": t[2] || (t[2] = function (t) {
                    return e.model.author = t
                }),
                onSetValid: e.setValidStatus
            }, null, 8, ["validationFunctions", "value", "onSetValid"]), Object(a["j"])(d, {
                class: "assign-self-button",
                title: "Fill author field with your name",
                onClick: e.assignSelf
            }, {
                default: Object(a["K"])((function () {
                    return [r]
                })), _: 1
            }, 8, ["onClick"]), Object(a["j"])(s, {
                label: "Categories",
                hint: "List of categories separated with whitespace",
                validationFunctions: [e.letters],
                "onUpdate:value": e.updateCategories,
                onSetValid: e.setValidStatus
            }, null, 8, ["validationFunctions", "onUpdate:value", "onSetValid"]), Object(a["j"])(f, {
                label: "Image",
                accept: "image/*",
                "onUpdate:value": e.updateImage
            }, null, 8, ["onUpdate:value"]), Object(a["j"])(f, {
                label: "Model",
                accept: ".gltf,.glb",
                hint: "Supported extensions: .gltf, .glb",
                "onUpdate:value": e.updateModel
            }, null, 8, ["onUpdate:value"]), Object(a["j"])(d, {
                isDisabled: !e.isFormValid,
                onClick: e.submit
            }, {
                default: Object(a["K"])((function () {
                    return [l]
                })), _: 1
            }, 8, ["isDisabled", "onClick"])])
        }

        Object(a["w"])();
        n("d81d"), n("4de4"), n("ac1f"), n("1276"), n("498a"), n("99af"), n("b0c0"), n("fb6a"), n("b64b");
        var c = n("0613"), o = (n("5319"), function (e, t) {
                return function (n) {
                    return !!n.replace(e, "") && t
                }
            }), s = function (e) {
                return !e.trim() && "Can not be empty"
            }, d = o(/[\sa-zA-Zа-яА-Я0-9]*/g, "Can contain only letters, numbers and spaces"),
            f = o(/[\sa-zA-Zа-яА-Я]*/g, "Can contain only letters"),
            v = o(/[^0x00-0x7F]*/g, "Can contain only ASCII characters");
        Object(a["y"])("data-v-e6bb3136");
        var p = ["for"], b = ["title"], h = ["id", "type", "value"], g = {key: 0, class: "error"};

        function m(e, t, n, i, r, l) {
            return Object(a["v"])(), Object(a["g"])(a["a"], null, [Object(a["h"])("label", {
                for: "input-".concat(e._.uid),
                class: "label"
            }, [Object(a["i"])(Object(a["F"])(e.label) + " ", 1), e.hint ? (Object(a["v"])(), Object(a["g"])("span", {
                key: 0,
                class: "hint",
                title: e.hint
            }, " ? ", 8, b)) : Object(a["f"])("", !0)], 8, p), Object(a["h"])("input", {
                id: "input-".concat(e._.uid),
                type: e.type,
                class: Object(a["p"])({input: e.isValid, invalid: !e.isValid}),
                value: e.value,
                onInput: t[0] || (t[0] = function (t) {
                    return e.$emit("update:value", t.target.value), e.validate(t.target.value, e._.uid)
                })
            }, null, 42, h), e.errorText ? (Object(a["v"])(), Object(a["g"])("div", g, Object(a["F"])(e.errorText), 1)) : Object(a["f"])("", !0), Object(a["C"])(e.$slots, "default", {}, void 0, !0)], 64)
        }

        Object(a["w"])();
        n("d3b7"), n("d28b"), n("3ca3"), n("ddb0");
        var j = n("06c5");

        function O(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = Object(j["a"])(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var a = 0, i = function () {
                    };
                    return {
                        s: i, n: function () {
                            return a >= e.length ? {done: !0} : {done: !1, value: e[a++]}
                        }, e: function (e) {
                            throw e
                        }, f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, l = !0, u = !1;
            return {
                s: function () {
                    n = n.call(e)
                }, n: function () {
                    var e = n.next();
                    return l = e.done, e
                }, e: function (e) {
                    u = !0, r = e
                }, f: function () {
                    try {
                        l || null == n["return"] || n["return"]()
                    } finally {
                        if (u) throw r
                    }
                }
            }
        }

        var y = Object(a["k"])({
            name: "BaseInput",
            props: {
                label: {type: String, required: !0},
                type: {type: String, required: !1, default: "text"},
                validationFunctions: {
                    type: Array, required: !1, default: function () {
                        return [function () {
                            return !1
                        }]
                    }
                },
                value: {type: String, required: !1, default: ""},
                hint: {type: String, required: !1}
            },
            emits: ["update:value", "setValid"],
            setup: function (e, t) {
                var n = t.emit, i = Object(a["A"])(!0), r = Object(a["A"])(""), l = function (t, a) {
                    var i, l = !1, u = O(e.validationFunctions);
                    try {
                        for (u.s(); !(i = u.n()).done;) {
                            var c = i.value;
                            if (l = c(t), l) return n("setValid", {
                                state: !1,
                                id: "input-".concat(a)
                            }), void (r.value = l);
                            n("setValid", {state: !0, id: "input-".concat(a)}), r.value = ""
                        }
                    } catch (o) {
                        u.e(o)
                    } finally {
                        u.f()
                    }
                };
                return {date: Date.now(), isValid: i, errorText: r, validate: l}
            }
        });
        n("c039");
        y.render = m, y.__scopeId = "data-v-e6bb3136";
        var x = y;
        Object(a["y"])("data-v-1716af94");
        var S = ["for"], w = ["title"], I = ["id", "accept", "multiple", "value"];

        function k(e, t, n, i, r, l) {
            return Object(a["v"])(), Object(a["g"])(a["a"], null, [Object(a["h"])("label", {
                for: "input-".concat(e._.uid),
                class: "label"
            }, [Object(a["i"])(Object(a["F"])(e.label) + " ", 1), e.hint ? (Object(a["v"])(), Object(a["g"])("span", {
                key: 0,
                class: "hint",
                title: e.hint
            }, " ? ", 8, w)) : Object(a["f"])("", !0)], 8, S), Object(a["h"])("input", {
                id: "input-".concat(e._.uid),
                class: "input",
                type: "file",
                accept: e.accept,
                multiple: e.multiple,
                value: e.value,
                onChange: t[0] || (t[0] = function (t) {
                    return e.$emit("update:value", e.multiple ? t.target.files : t.target.files[0] || {})
                })
            }, null, 40, I), Object(a["C"])(e.$slots, "default", {}, void 0, !0)], 64)
        }

        Object(a["w"])();
        var V = Object(a["k"])({
            name: "BaseInput",
            props: {
                label: {type: String, required: !0},
                accept: {type: String, required: !1, default: "*"},
                multiple: {type: Boolean, required: !1, default: !1},
                value: {type: String, required: !1, default: ""},
                hint: {type: String, required: !1}
            },
            emits: ["update:value"]
        });
        n("2710");
        V.render = k, V.__scopeId = "data-v-1716af94";
        var A = V;

        function F(e, t, n, i, r, l) {
            return Object(a["v"])(), Object(a["g"])("div", {
                class: Object(a["p"])(["button", {disabled: e.isDisabled}]),
                onClick: t[0] || (t[0] = function (t) {
                    return e.isDisabled && e.$emit("click", t)
                })
            }, [Object(a["C"])(e.$slots, "default")], 2)
        }

        var $ = Object(a["k"])({name: "BaseButton", props: {isDisabled: {type: Boolean, required: !1, default: !1}}});
        n("3276");
        $.render = F;
        var C = $, _ = Object(a["k"])({
            name: "AddView", components: {BaseInput: x, FileInput: A, BaseButton: C}, setup: function () {
                var e = Object(c["c"])(), t = Object(a["z"])({
                    title: "",
                    description: "",
                    author: "",
                    rating: 0,
                    categories: [],
                    img: {src: "", alt: ""},
                    url: ""
                }), n = function () {
                    return t.author = e.state.User.displayName
                }, i = function (e) {
                    return t.categories = e.split(" ").filter((function (e) {
                        return !!e
                    })).map((function (e) {
                        return e.trim()
                    }))
                }, r = Object(a["A"])(null), l = function (e) {
                    t.img = {
                        src: "image/".concat(Date.now()).concat(e.name),
                        alt: e.name.slice(0, e.name.lastIndexOf("."))
                    }, r.value = e
                }, u = Object(a["A"])(null), o = function (e) {
                    t.url = "".concat(Date.now()).concat(e.name), u.value = e
                }, p = Object(a["A"])({}), b = function (e) {
                    return p.value[e.id] = e.state
                }, h = Object(a["c"])((function () {
                    return Object.keys(p.value).every((function (e) {
                        return p.value[e]
                    })) && r.value && u.value
                })), g = function () {
                    return e.dispatch("uploadModel", {model: t, imageFile: r.value, modelFile: u.value})
                };
                return {
                    model: t,
                    assignSelf: n,
                    updateCategories: i,
                    updateImage: l,
                    updateModel: o,
                    setValidStatus: b,
                    isFormValid: h,
                    submit: g,
                    nonEmpty: s,
                    lettersAndNumbers: d,
                    letters: f,
                    ascii: v
                }
            }
        });
        n("af64");
        _.render = u, _.__scopeId = "data-v-5c4da4ce";
        t["default"] = _
    }
}]);
//# sourceMappingURL=chunk-a694db38.5e13423f.js.map