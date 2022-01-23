webpackJsonp([1], {
    0: function(e, t) {},
    "2Ipj": function(e, t) {
        ! function(e) {
            function t(n) {
                if (a[n]) return a[n].exports;
                var o = a[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
            }
            var a = {};
            t.m = e, t.c = a, t.p = "", t(0)
        }([function(e, t, a) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var o = n(a(1)),
                i = n(a(2));
            o.default.setToongineApi(i.default), "undefined" != typeof window && void 0 !== window.document && window.document.write('<script src="https://cdn.jsdelivr.net/eruda/1.2.2/eruda.min.js" type="text/javascript" async><\/script>')
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function() {
                return "undefined" == typeof toongine_window ? window : toongine_window
            };
            t.default = {
                getToongineEnv: a,
                setToongineApi: function(e) {
                    a().toongine = e
                }
            }
        }, function(e, t, a) {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function o(e) {
                return !!e.handlerName || (e.callback({
                    msg: "参数不合法~",
                    code: -1
                }), !1)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = n(a(1)),
                r = n(a(3)),
                s = n(a(4)),
                l = n(a(6)),
                c = [],
                d = [],
                p = i.default.getToongineEnv();
            if (!p.AEJSBridge) {
                "undefined" != typeof document && document.addEventListener && document.addEventListener("AEJSBridgeReady", function e() {
                    for (var t = c.length, a = 0; a < t; a++) {
                        var n = c.shift();
                        p.AEJSBridge.dispatch({
                            handlerName: n.handlerName,
                            params: n.params,
                            callback: n.callback
                        })
                    }
                    for (var o = d.length, i = 0; i < o; i++) {
                        var r = d.shift();
                        p.AEJSBridge.addEventListener({
                            handlerName: r.params && r.params.eventId && "string" == typeof r.params.eventId ? r.handlerName + "_" + r.params.eventId : r.handlerName,
                            params: r.params,
                            callback: r.callback
                        })
                    }
                    "undefined" != typeof document && document.removeEventListener && document.removeEventListener("AEJSBridgeReady", e)
                })
            }
            var u = r.default.generateApi(l.default);
            u.dispatch = function(e) {
                o(e) && (p.AEJSBridge ? p.AEJSBridge.dispatch(e) : c.push(e))
            }, u.addEventListener = function(e) {
                o(e) && (p.AEJSBridge ? p.AEJSBridge.addEventListener(e) : d.push(e))
            }, u.removeEventListener = function(e) {
                o(e) && p.AEJSBridge && p.AEJSBridge.removeEventListener(e)
            }, u.devTools = s.default, t.default = u
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = function(e, t) {
                var a = e.groupName,
                    n = e.moduleName,
                    o = e.actionKeys,
                    i = e.eventKeys;
                if (n) {
                    var r = n;
                    a && "" != a && "core" != a && (r = a + "_" + n);
                    var s = {};
                    return o && o.forEach(function(e) {
                        s[e] = function() {
                            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            t.dispatch({
                                handlerName: "action_" + r + "_" + e,
                                params: a.params,
                                callback: a.callback
                            })
                        }
                    }), i && i.forEach(function(e) {
                        s[e] = function() {
                            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            t.addEventListener({
                                handlerName: a.params && a.params.eventId && "string" == typeof a.params.eventId ? "event_" + r + "_" + e + "_" + a.params.eventId : "event_" + r + "_" + e,
                                callback: a.callback
                            })
                        }
                    }), s
                }
            };
            t.default = {
                generate: a,
                generateApi: function(e) {
                    var t = {};
                    return e.forEach(function(e) {
                        var n = e.groupName,
                            o = n ? t[n] : {};
                        if (void 0 == o && (o = {}), void 0 == n || "" == n || "core" == n) o = t;
                        else {
                            var i = t[n];
                            i ? o = i : t[n] = o
                        }
                        o[e.moduleName] = a(e, t)
                    }), t
                }
            }
        }, function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(a(5));
            t.default = {
                setEnableDebug: function(e) {
                    if ("undefined" != typeof window && void 0 !== window.document) {
                        if (!e.params.enable) return eruda._$el.hide(), void e.callback({
                            code: 0,
                            msg: "关闭调试工具成功~"
                        });
                        document.getElementById("eruda") || eruda.init(), eruda._$el.show(), e.callback({
                            code: 0,
                            msg: "开启调试工具成功~"
                        })
                    }
                },
                enableDebugMode: function(e) {
                    n.default.init(e)
                }
            }
        }, function(e, t) {
            "use strict";

            function a(e) {
                s = e,
                    function() {
                        if (!window.AEJSBridge) {
                            var e = window.AEJSBridge = {
                                    init: a,
                                    addEventListener: n,
                                    removeEventListener: o,
                                    dispatch: i
                                },
                                t = document,
                                r = t.createEvent("Events");
                            r.initEvent("AEJSBridgeReady"), r.bridge = e, t.dispatchEvent(r)
                        }
                    }()
            }

            function n(e) {
                setTimeout(function() {
                    e.callback && e.callback(r(e.handlerName), function(e) {
                        console.log("res", e)
                    })
                }, 2e3)
            }

            function o(e) {}

            function i(e) {
                e && e.callback && e.callback(r(e.handlerName, e.params))
            }

            function r(e, t) {
                return {
                    data: s[e] ? s[e] : "handlerName 不存在！！！",
                    msg: "ok !!!",
                    code: 0
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = {};
            t.default = {
                init: a
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = [{
                moduleName: "app",
                actionKeys: ["shutdown", "setClearStorage"],
                eventKeys: ["onAppLifecycle"]
            }, {
                moduleName: "card",
                actionKeys: ["chooseCard", "openQrCode"]
            }, {
                moduleName: "cardList",
                actionKeys: ["chooseCard"]
            }, {
                moduleName: "chat",
                actionKeys: ["openChat", "createSingleChat", "request", "uploadFile", "uploadAvatar", "chooseFile", "chooseContact"]
            }, {
                moduleName: "contact",
                actionKeys: ["openFriends", "openColleagues", "openCard", "openContact"]
            }, {
                moduleName: "database",
                actionKeys: ["createTable", "insert", "delete", "update", "select"]
            }, {
                moduleName: "device",
                actionKeys: ["makePhoneCall", "getClipboardData", "setClipboardData", "getNetworkType", "scanCode", "genQrCode", "rotateScreen", "addCalendarEvent", "deleteCalendarEvent", "editCalendarEvent", "getCalendarEvent", "startVibrate", "openGps", "getSystemInfo", "setScreenBrightness", "getScreenBrightness", "setKeepScreenOn", "startBeaconDiscovery", "stopBeaconDiscovery", "getBeacons", "startWifi", "stopWifi", "connectWifi", "getWifiList", "setWifiList", "getConnectedWifi", "getHCEState", "startHCE", "stopHCE", "sendHCEMessage"],
                eventKeys: ["onBeaconUpdate", "onBeaconServiceChange", "onGetWifiList", "onWifiConnected", "onHCEMessage"]
            }, {
                moduleName: "discovery",
                actionKeys: ["openAround", "openGroup"]
            }, {
                moduleName: "file",
                actionKeys: ["openDocument", "getFileInfo", "deleteFile", "getFileList"]
            }, {
                moduleName: "frame",
                actionKeys: ["open", "openFrame", "displayFrame"]
            }, {
                moduleName: "group",
                actionKeys: ["setGroup", "create", "openQrCode", "discovery"]
            }, {
                moduleName: "groupChat",
                actionKeys: ["create", "joinGroupChat", "openGroupChat"]
            }, {
                moduleName: "location",
                actionKeys: ["getLocation", "openLocation", "chooseLocation"],
                eventKeys: ["onLocationChange"]
            }, {
                moduleName: "media",
                actionKeys: ["chooseImage", "previewImage", "audioPlay", "videoPlay", "audioRecord", "chooseVideo"]
            }, {
                moduleName: "minJianglWallet",
                actionKeys: ["qrcode", "tradeList"]
            }, {
                moduleName: "municipalWallet",
                actionKeys: ["authorized", "qrcode", "tradeList", "recharge"]
            }, {
                moduleName: "net",
                actionKeys: ["request", "initDownload", "pauseDownload", "cancelDownload", "resumeDownload", "initUpload", "resumeUpload", "cancelUpload", "connectSocket", "sendSocketMessage", "closeSocket", "openUrl"],
                eventKeys: ["onNetworkStatusChange", "onDownloadProgressListener", "onDownloadCompleteListener", "onUploadProgressListener", "onUploadCompleteListener", "onSocketOpen", "onSocketError", "onSocketMessage", "onSocketClose"]
            }, {
                moduleName: "notify",
                actionKeys: ["openHome", "openCatalog"]
            }, {
                moduleName: "oauth",
                actionKeys: ["personal", "organizational"]
            }, {
                moduleName: "open",
                actionKeys: ["getCode", "getEnv", "getSystemInfo", "getToken", "getAppParams", "openPageApp", "pageAppSendData"],
                eventKeys: ["onPageAppReceiveDataListener"]
            }, {
                moduleName: "openAppWithAuthLevel",
                actionKeys: ["openApp"]
            }, {
                moduleName: "homeprovider",
                actionKeys: ["jumpapp"]
            }, {
                moduleName: "page",
                actionKeys: ["setShareInfo", "openShare", "hideLoading", "hideToast", "showActionSheet", "showLoading", "showModal", "showToast", "navigateBack", "navigateTo", "redirectTo", "hideNavigationBarLoading", "setNavigationBarTitle", "showNavigationBarLoading", "disableLoadMore", "disableRefresh", "dismissLoadMore", "enableLoadMore", "enableRefresh", "dismissRefresh"],
                eventKeys: ["onLoadMoreListener", "onRefreshListener"]
            }, {
                moduleName: "pay",
                actionKeys: ["openCashPay", "openLuckyMoney", "openGathering", "stopGathering", "openRecharge", "checkoutPayCash"]
            }, {
                moduleName: "recommend",
                actionKeys: ["openHome", "recommendFriend"]
            }, {
                moduleName: "storage",
                actionKeys: ["getStorageSpace", "getAvailableSpace", "getTotalSpace", "setStorage", "clearStorage", "getStorage"]
            }, {
                moduleName: "toon",
                actionKeys: ["goHome"]
            }, {
                moduleName: "toonflash",
                actionKeys: ["openHome", "showUserMainView", "doorgrandSet"]
            }, {
                moduleName: "topic",
                actionKeys: ["openArticle"]
            }, {
                moduleName: "trends",
                actionKeys: ["openDetail", "openEditor"]
            }, {
                moduleName: "user",
                actionKeys: ["getUserInfo", "getUserToken"]
            }, {
                moduleName: "protocol",
                actionKeys: ["request"]
            }, {
                groupName: "tcTemail",
                moduleName: "assistant",
                actionKeys: ["update", "loadAfter", "loadBefore", "invoke"],
                eventKeys: []
            }, {
                groupName: "tcpage",
                moduleName: "pages",
                actionKeys: ["display"],
                eventKeys: []
            }, {
                groupName: "tcCertEngin",
                moduleName: "housekeeping",
                actionKeys: ["checkFaceImageEngin"],
                eventKeys: []
            }, {
                groupName: "tcPublic",
                moduleName: "huairou",
                actionKeys: ["webOpenMap", "webOpenLivingPay", "openLoginClass", "openH5App"],
                eventKeys: []
            }, {
                groupName: "tcPublic",
                moduleName: "group",
                actionKeys: ["openDiscovery", "openGroupMain"],
                eventKeys: []
            }, {
                groupName: "tcPublic",
                moduleName: "user",
                actionKeys: ["getUserAvatar", "getUserInfo"],
                eventKeys: []
            }, {
                groupName: "tcTemail",
                moduleName: "chat",
                actionKeys: ["createSession"],
                eventKeys: []
            }, {
                groupName: "tcTemail",
                moduleName: "group",
                actionKeys: ["selectMember"],
                eventKeys: []
            }, {
                groupName: "tcTemail",
                moduleName: "teamwork",
                actionKeys: ["getTeamworkConfig", "setTeamworkConfig"],
                eventKeys: []
            }, {
                groupName: "jumptonative",
                moduleName: "jumptonativerouter",
                actionKeys: ["getTeamworkConfig", "setTeamworkConfig"],
                eventKeys: []
            }]
        }])
    },
    NHnr: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        a("tvR6");
        var n = a("qBF2"),
            o = a.n(n),
            i = a("7+uW"),
            r = {
                render: function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", {
                        attrs: {
                            id: "app"
                        }
                    }, [t("router-view")], 1)
                },
                staticRenderFns: []
            };
        var s, l = a("VU/8")({
                name: "App"
            }, r, !1, function(e) {
                a("gSHi")
            }, null, null).exports,
            c = a("8+8L"),
            d = a("NYxO"),
            p = a("bOdI"),
            u = a.n(p),
            m = (s = {}, u()(s, "OPEN_LOADING", function(e) {
                e.loading = e.loading + 1, console.log("[STORE]OPEN_LOADING...", e.loading)
            }), u()(s, "CLOSE_LOADING", function(e) {
                e.loading = e.loading > 0 ? e.loading - 1 : 0, console.log("[STORE]CLOSE_LOADING...", e.loading)
            }), u()(s, "SET_SIGNIN_NAME", function(e, t) {
                var a;
                e.signinName = t, (a = console).log.apply(a, ["[STORE]SET_SIGNIN_NAME..."].concat(Array.prototype.slice.call(arguments)))
            }), u()(s, "GET_SIGNIN_NAME", function(e) {
                return e.signinName
            }), s),
            g = {
                state: {
                    loading: 0,
                    ticket: "",
                    signinName: ""
                },
                getters: {
                    loading: function(e) {
                        return e.loading > 0
                    }
                },
                actions: u()({}, "CLOSE_LOADING", function(e) {
                    var t = e.commit;
                    setTimeout(function() {
                        t("CLOSE_LOADING")
                    }, 400)
                }),
                mutations: m
            };
        i.default.use(d.a);
        var f, v, h, y = new d.a.Store({
                modules: {
                    status: g
                },
                strict: !1
            }),
            b = a("/ocq"),
            D = a("mvHQ"),
            _ = a.n(D),
            S = (f = {
                DEBUG: !0,
                TITLE: "bjt",
                URL: "http://172.28.16.82:8081/"
            }, u()(f, "URL", ""), u()(f, "LIMIT", 10), f),
            L = function(e) {
                var t = document.location.search.match(new RegExp("[?&]" + e + "=([^&]+)", "i"));
                return null == t || t.length < 1 ? "" : t[1]
            },
            T = function(e) {
                return document.location.pathname
            },
            k = function(e, t) {
                if (!e) return "";
                "string" == typeof e && (e = e.toString().replace(/-/g, "/")), "number" == typeof e && 10 === e.toString().length && (e = parseInt(e + "000"));
                var a = new Date(e),
                    n = new Date,
                    o = a.getFullYear(),
                    i = a.getMonth() + 1 > 9 ? a.getMonth() + 1 : "0" + (a.getMonth() + 1),
                    r = a.getDate() > 9 ? a.getDate() : "0" + a.getDate(),
                    s = a.getHours() > 9 ? a.getHours() : "0" + a.getHours(),
                    l = a.getMinutes() > 9 ? a.getMinutes() : "0" + a.getMinutes(),
                    c = a.getSeconds() > 9 ? a.getSeconds() : "0" + a.getSeconds(),
                    d = a.getMilliseconds() < 100 ? "0" + (a.getMilliseconds() < 10 ? "0" + a.getMilliseconds() : a.getMilliseconds()) : a.getMilliseconds(),
                    p = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][a.getDay()];
                return t ? (t = (t = (t = (t = (t = (t = (t = t.replace("yyyy", o)).replace("MM", i)).replace("dd", r)).replace("hh", s)).replace("mm", l)).replace("ss", c)).replace("ms", d), o === n.getFullYear() && a.getMonth() === n.getMonth() && a.getDate() === n.getDate() && (p = "今天"), t = t.replace("week", p)) : t = o + "-" + i + "-" + r + " " + s + ":" + l, t
            },
            N = (h = function() {}, (v = function() {}).toString = function() {
                return "[" + k(new Date, "hh:mm:ss ms") + "][" + T({
                    pathOnly: !0
                }) + "]"
            }, window.console && console.log && S && S.DEBUG && (h = console.log.bind(console, "%s", v)), {
                log: h,
                error: console.error.bind(console, "%s", v),
                warn: console.warn.bind(console, "%s", v)
            }),
            w = a("pFYg"),
            I = a.n(w),
            F = 2;

        function C(e) {
            this.state = F, this.value = void 0, this.deferred = [];
            var t = this;
            try {
                e(function(e) {
                    t.resolve(e)
                }, function(e) {
                    t.reject(e)
                })
            } catch (e) {
                t.reject(e)
            }
        }
        C.reject = function(e) {
            return new C(function(t, a) {
                a(e)
            })
        }, C.resolve = function(e) {
            return new C(function(t, a) {
                t(e)
            })
        }, C.all = function(e) {
            return new C(function(t, a) {
                var n = 0,
                    o = [];

                function i(a) {
                    return function(i) {
                        o[a] = i, (n += 1) === e.length && t(o)
                    }
                }
                0 === e.length && t(o);
                for (var r = 0; r < e.length; r += 1) C.resolve(e[r]).then(i(r), a)
            })
        }, C.race = function(e) {
            return new C(function(t, a) {
                for (var n = 0; n < e.length; n += 1) C.resolve(e[n]).then(t, a)
            })
        };
        var E = C.prototype;
        if (E.resolve = function(e) {
                var t = this;
                if (t.state === F) {
                    if (e === t) throw new TypeError("Promise settled with itself.");
                    var a = !1;
                    try {
                        var n = e && e.then;
                        if (null !== e && "object" === (void 0 === e ? "undefined" : I()(e)) && "function" == typeof n) return void n.call(e, function(e) {
                            a || t.resolve(e), a = !0
                        }, function(e) {
                            a || t.reject(e), a = !0
                        })
                    } catch (e) {
                        return void(a || t.reject(e))
                    }
                    t.state = 0, t.value = e, t.notify()
                }
            }, E.reject = function(e) {
                if (this.state === F) {
                    if (e === this) throw new TypeError("Promise settled with itself.");
                    this.state = 1, this.value = e, this.notify()
                }
            }, E.notify = function() {
                var e = this;
                setTimeout(function() {
                    if (e.state !== F)
                        for (; e.deferred.length;) {
                            var t = e.deferred.shift(),
                                a = t[0],
                                n = t[1],
                                o = t[2],
                                i = t[3];
                            try {
                                0 === e.state ? o("function" == typeof a ? a(e.value) : e.value) : 1 === e.state && ("function" == typeof n ? o(n(e.value)) : i(e.value))
                            } catch (e) {
                                i(e)
                            }
                        }
                }, 100)
            }, E.then = function(e, t) {
                var a = this;
                return new C(function(n, o) {
                    a.deferred.push([e, t, n, o]), a.notify()
                })
            }, E.catch = function(e) {
                return this.then(void 0, e)
            }, void 0 === O) var O = C;
        var A = function(e, t, a) {
                a && a.loading && (N.log("api.post: START LOADING ... "), y.commit("OPEN_LOADING"));
                var n = "";
                if (t)
                    for (var o in t) n += o + "=" + t[o] + "&";
                return n.length > 0 && "&" === n.substring(n.length - 1, n.length) && (n = n.substring(0, n.length - 1)), i.default.http.post(e + "?" + n).then(function(e) {
                    a && a.loading && (N.log("api.post: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING"));
                    var t = e.data;
                    return "200" === t.code || 200 === t.code ? O.resolve(t.data) : "401" !== t.code && 401 !== t.code ? O.reject(t.errorMsg) : void K()
                }, function(t) {
                    return N.error("POST ERROR-2", e, t), a && a.loading && (N.log("api.post: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING")), O.reject(t)
                }).catch(function(e) {
                    return N.error("POST ERROR-3", e), a && a.loading && (N.log("api.post: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING")), O.reject(e)
                })
            },
            M = function(e, t, a, n) {
                var o = t || {},
                    r = a || {};
                return n && n.loading && (console.warn("open:", e), y.commit("OPEN_LOADING")), i.default.http.post(e, o, {
                    params: r
                }).then(function(e) {
                    n && n.loading && y.dispatch("CLOSE_LOADING");
                    var t = e.body;
                    return 200 === t.code || "200" === t.code ? O.resolve(t.data) : "401" !== t.code && 401 !== t.code ? O.reject(t.errorMsg) : void K()
                }, function(t) {
                    return N.error("POST ERROR-2", e, t.errorMsg), n && n.loading && (N.log("api.post: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING")), O.reject(t)
                }).catch(function(e) {
                    return N.error(e), O.reject(e)
                })
            },
            x = function(e, t, a) {
                a && a.loading && (N.log("api.get: START LOADING ... "), y.commit("OPEN_LOADING"));
                var n = "";
                if (t)
                    for (var o in t) n += o + "=" + t[o] + "&";
                return n.length > 0 && "&" === n.substring(n.length - 1, n.length) && (n = n.substring(0, n.length - 1)), i.default.http.get(e + "?" + n).then(function(e) {
                    a && a.loading && (N.log("api.get: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING"));
                    var t = e.data;
                    return "200" === t.code || 200 === t.code ? O.resolve(t.data) : "401" !== t.code && 401 !== t.code ? O.reject(t.message) : void K()
                }, function(e) {
                    return a && a.loading && (N.log("api.get: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING")), O.reject(e)
                }).catch(function(e) {
                    return N.error(e, "???????????????=========="), a && a.loading && (N.log("api.get: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING")), O.reject(e)
                })
            },
            j = function(e, t, a) {
                a && a.loading && (N.log("api.get: START LOADING ... "), y.commit("OPEN_LOADING"));
                var n = "";
                if (t)
                    for (var o in t) n += o + "=" + t[o] + "&";
                return n.length > 0 && "&" === n.substring(n.length - 1, n.length) && (n = n.substring(0, n.length - 1)), i.default.http.get(e + "?" + n).then(function(e) {
                    a && a.loading && (N.log("api.get: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING"));
                    var t = e;
                    if (200 === t.status) {
                        var n = t.body;
                        window.location.href = n
                    }
                }, function(e) {
                    return a && a.loading && (N.log("api.get: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING")), O.reject(e)
                }).catch(function(e) {
                    return N.error(e, "???????????????=========="), a && a.loading && (N.log("api.get: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING")), O.reject(e)
                })
            },
            G = function(e, t, a) {
                a && a.loading && (N.log("api.get: START LOADING ... "), y.commit("OPEN_LOADING"));
                var n = "";
                if (t)
                    for (var o in t) n += o + "=" + t[o] + "&";
                return n.length > 0 && "&" === n.substring(n.length - 1, n.length) && (n = n.substring(0, n.length - 1)), i.default.http.get(e + "?" + n).then(function(e) {
                    a && a.loading && (N.log("api.get: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING"));
                    var t = e.data;
                    return "0" === t.meta.code || 0 === t.meta.code ? O.resolve(t.data) : "401" !== t.meta.code && 401 !== t.meta.code ? O.reject(t.message) : void K()
                }, function(e) {
                    return a && a.loading && (N.log("api.get: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING")), O.reject(e)
                }).catch(function(e) {
                    return N.error(e, "???????????????=========="), a && a.loading && (N.log("api.get: CLOSE LOADING ... "), y.dispatch("CLOSE_LOADING")), O.reject(e)
                })
            };

        function K(e, t) {
            var a = S.URL + "login";
            return j(a, e || {}, t)
        }

        function P(e, t) {
            var a = S.URL + "/notice/detail";
            return x(a, e || {}, t)
        }
        var R = a("X3tD"),
            U = a.n(R),
            $ = void 0,
            J = {
                components: {},
                data: function() {
                    return {
                        bjtJsons: {
                            toonType: "",
                            version: "",
                            role: "",
                            district: "",
                            operator: ""
                        },
                        is_loading: !1,
                        currentPage: 1,
                        currentSize: 10,
                        totalPage: 50,
                        listData: [],
                        formSearch: {
                            title: "",
                            type: "",
                            state: ""
                        },
                        typeList: [{
                            value: "",
                            label: "全部"
                        }, {
                            value: 0,
                            label: "图文"
                        }, {
                            value: 1,
                            label: "网络连接"
                        }, {
                            value: 2,
                            label: "服务应用"
                        }],
                        stateList: [{
                            value: "",
                            label: "全部"
                        }, {
                            value: 1,
                            label: "待发布"
                        }, {
                            value: 0,
                            label: "已发布"
                        }],
                        addVisible: !1,
                        limitNum: 3,
                        addFormData: {
                            title: "",
                            time: "",
                            publishDate: "",
                            endTime: "",
                            tag: "",
                            type: "",
                            serve: [],
                            apply: "",
                            address: ""
                        },
                        rules: {
                            title: [{
                                required: !0,
                                message: "请输入公告标题",
                                trigger: "blur"
                            }],
                            time: [{
                                required: !0,
                                message: "请选择发布时间",
                                trigger: "change"
                            }],
                            type: [{
                                required: !0,
                                message: "请选择公告类型",
                                trigger: "change"
                            }],
                            address: [{
                                required: !0,
                                message: "请输入链接地址",
                                trigger: "blur"
                            }],
                            apply: [{
                                required: !0,
                                message: "请选择服务应用",
                                trigger: "change"
                            }],
                            content: [{
                                message: "请输入公告内容",
                                required: !0,
                                trigger: "blur"
                            }]
                        },
                        disableTimePassed: {
                            disabledDate: function(e) {
                                return e.getTime() < Date.now() - 864e5
                            }
                        },
                        selType: "",
                        isModify: !1,
                        formLabelWidth: "115px",
                        preViewDialog: !1,
                        preData: {},
                        formLabelWidthS: "135px",
                        setDialog: !1,
                        setFormData: {
                            contentType: 0,
                            tagState: 0,
                            contentStyle: 0,
                            contentIcon: "",
                            linkType: "",
                            linkUrl: "",
                            appId: ""
                        },
                        uploadUrl: S.URL + "/notice/upload/pic",
                        is_icon_uploading: !1,
                        setRules: {
                            contentType: [{
                                required: !0,
                                message: "请选择滚动条显示内容",
                                trigger: "change"
                            }],
                            tagState: [{
                                required: !0,
                                message: "请选择是否显示标签",
                                trigger: "change"
                            }],
                            contentStyle: [{
                                required: !0,
                                message: "滚动条样式",
                                trigger: "change"
                            }],
                            linkUrl: [{
                                required: !0,
                                message: "请输入正确的链接地址",
                                trigger: "blur"
                            }]
                        },
                        selLink: "",
                        contentTypeList: [{
                            value: 0,
                            label: "内容+资讯"
                        }, {
                            value: 1,
                            label: "只显示内容"
                        }],
                        linkTypeList: [{
                            value: 2,
                            label: "头条"
                        }, {
                            value: 0,
                            label: "链接地址"
                        }, {
                            value: 1,
                            label: "服务应用"
                        }],
                        applyList: [],
                        applyList1: [{
                            value: 3,
                            label: "一卡通充值"
                        }, {
                            value: 4,
                            label: "报修"
                        }, {
                            value: 5,
                            label: "网络自助服务"
                        }],
                        viewDialog: !1,
                        selViewType: "",
                        detailData: {
                            appId: "",
                            appIds: "",
                            content: "",
                            endTime: "",
                            link: "",
                            linkType: "",
                            publishState: "",
                            publishTime: "",
                            tag: "",
                            title: ""
                        }
                    }
                },
                created: function() {
                    var e = L("toonType"),
                        t = L("version"),
                        a = L("role"),
                        n = L("district"),
                        o = L("operator"),
                        i = {
                            toonType: e,
                            version: t,
                            role: a,
                            district: n,
                            operator: decodeURI(o)
                        };
                    window.sessionStorage.setItem("bjtJsons", _()(i))
                },
                mounted: function() {
                    var e = window.sessionStorage.getItem("bjtJsons");
                    if (e) {
                        var t = JSON.parse(e);
                        this.bjtJsons.toonType = t.toonType, this.bjtJsons.version = t.version, this.bjtJsons.role = t.role, this.bjtJsons.district = t.district, this.bjtJsons.operator = t.operator, this.init()
                    }
                },
                computed: {
                    datetimeDisabled: function() {
                        return 1 != this.addFormData.time
                    }
                },
                methods: {
                    init: function() {
                        this.getSelAppList(), this.getList()
                    },
                    getSelAppList: function() {
                        var e = this;
                        (function(e, t) {
                            var a = S.URL + "/notice/list/app";
                            return x(a, e || {}, t)
                        })({
                            toonType: this.bjtJsons.toonType
                        }).then(function(t) {
                            if (e.applyList = [], t && t.length > 0)
                                for (var a = 0; a < t.length; a++) {
                                    var n = {
                                        value: t[a].id,
                                        label: t[a].appTitle,
                                        appIcon: t[a].appIcon
                                    };
                                    e.applyList.push(n)
                                }
                        }).catch(function(t) {
                            e.$message({
                                type: "error",
                                message: t
                            })
                        })
                    },
                    getList: function() {
                        var e = this,
                            t = {};
                        t.toonType = e.bjtJsons.toonType, t.version = e.bjtJsons.version, t.role = e.bjtJsons.role, t.district = e.bjtJsons.district, t.linkType = e.formSearch.type, t.state = e.formSearch.state, t.title = e.formSearch.title, e.is_loading = !0,
                            function(e, t) {
                                var a = S.URL + "/notice/query";
                                return M(a, e, {}, t)
                            }(t).then(function(t) {
                                if (e.is_loading = !1, e.listData = [], e.totalPage = t.length, t && t.length > 0)
                                    for (var a = 0; a < t.length; a++) {
                                        var n = t[a];
                                        n.index = a + 1, 0 == n.linkType ? n.linkTypeVal = "图文" : 1 == n.linkType ? n.linkTypeVal = "网络链接" : 2 == n.linkType && (n.linkTypeVal = "服务应用"), 1 == n.publishState ? n.publishStateVal = "已发布" : 0 == n.publishState && (n.publishStateVal = "待发布"), n.endTimeStr = k(n.endTime, "yyyy-MM-dd hh:mm:ss"), n.updateDateStr = k(n.updateDate, "yyyy-MM-dd hh:mm:ss"), e.listData.push(n)
                                    }
                            }).catch(function(t) {
                                e.is_loading = !1, e.$message({
                                    type: "error",
                                    message: t
                                })
                            })
                    },
                    getInfoById: function(e) {
                        var t = this,
                            a = {};
                        a.id = e, P(a).then(function(e) {
                            t.addFormData.id = e.id, t.addFormData.title = e.title, e.timingState ? t.addFormData.time = e.timingState : t.addFormData.time = 1 == e.publishState ? 0 : 1, t.addFormData.publishDate = e.publishTime, t.addFormData.endTime = e.endTime, t.addFormData.type = e.linkType, t.selType = e.linkType, t.addFormData.tag = e.tag, t.addFormData.content = e.content, 0 == e.linkType || "0" == e.linkType ? (t.addFormData.serve = e.appIds, $ ? $.txt.html(e.content) : (($ = new U.a("#editorElem")).customConfig.menus = ["head", "bold", "foreColor", "image"], $.customConfig.pasteFilterStyle = !0, $.customConfig.uploadFileName = "imgFile", $.customConfig.uploadImgServer = t.uploadUrl, $.customConfig.uploadImgMaxLength = 1, $.customConfig.uploadImgHeaders = {
                                ocmToken: S.ocmToken
                            }, t.$nextTick(function() {
                                $.customConfig.uploadImgHooks = {
                                    before: function(e, t, a) {
                                        var n = "image/bmp" === a[0].type,
                                            o = "image/png" === a[0].type,
                                            i = "image/jpg" === a[0].type,
                                            r = "image/jpeg" === a[0].type,
                                            s = a[0].size / 1024 < 100;
                                        return n || o || i || r ? s ? void 0 : {
                                            prevent: !0,
                                            msg: "上传图片大小不能超过100K"
                                        } : {
                                            prevent: !0,
                                            msg: "上传图片大小只能是BMP/PNG/JPG/JPEG格式"
                                        }
                                    },
                                    customInsert: function(e, t, a) {
                                        e(t.data)
                                    }
                                }, $.customConfig.customAlert = function(e) {
                                    t.$message({
                                        message: e,
                                        type: "warning"
                                    })
                                }, $.customConfig.onchange = function(e) {
                                    t.addFormData.content = e
                                }, $.create(), $.txt.html(e.content)
                            }))) : 1 == e.linkType || "1" == e.linkType ? t.addFormData.address = e.link : 2 != e.linkType && "2" != e.linkType || (t.addFormData.apply = e.appId)
                        }).catch(function(e) {
                            t.$message({
                                type: "error",
                                message: e
                            })
                        })
                    },
                    getAppName: function(e) {
                        for (var t = "", a = 0; a < this.applyList.length; a++) e == this.applyList[a].value && (t = this.applyList[a].label);
                        return t
                    },
                    getAppNames: function(e) {
                        for (var t = "", a = 0; a < this.applyList.length; a++)
                            for (var n = 0; n < e.length; n++) e[n] == this.applyList[a].value && (t += this.applyList[a].label + ",");
                        return t.length > 0 && "," === t.substring(t.length - 1, t.length) && (t = t.substring(0, t.length - 1)), t
                    },
                    getViewDetail: function(e) {
                        var t = this,
                            a = this,
                            n = {};
                        n.id = e, P(n).then(function(e) {
                            e && (e.appId ? a.detailData.app = t.getAppName(e.appId) : a.detailData.app = "", e.appIds ? a.detailData.apps = t.getAppNames(e.appIds) : a.detailData.apps = "", a.detailData.content = e.content, a.detailData.link = e.link, 0 == e.linkType ? a.detailData.linkTypeStr = "图文" : 1 == e.linkType ? a.detailData.linkTypeStr = "网络链接" : 2 == e.linkType && (a.detailData.linkTypeStr = "服务应用"), a.detailData.publishState = e.publishState, a.selViewType = e.linkType, 1 == e.publishState ? a.detailData.publishStatueStr = "已发布" : 0 == e.publishState && (a.detailData.publishStatueStr = "待发布"), a.detailData.endTimeStr = k(e.endTime, "yyyy-MM-dd hh:mm:ss"), a.detailData.publishTimeStr = k(e.publishTime, "yyyy-MM-dd hh:mm:ss"), a.detailData.tag = e.tag, a.detailData.title = e.title)
                        }).catch(function(e) {
                            a.$message({
                                type: "error",
                                message: e
                            })
                        })
                    },
                    goView: function(e) {
                        this.getViewDetail(e.id), this.viewDialog = !0
                    },
                    changeOperation: function(e, t) {
                        var a = this;
                        1 === e ? "待发布" == t.publishStateVal ? this.$confirm("确定发布该公告？", "提示", {
                            type: "warning"
                        }).then(function() {
                            (function(e, t) {
                                var a = S.URL + "/notice/release";
                                return x(a, e || {}, t)
                            })({
                                id: t.id
                            }).then(function(e) {
                                a.$message({
                                    type: "success",
                                    message: "发布成功!"
                                }), a.getList()
                            }).catch(function(e) {
                                a.$message({
                                    type: "error",
                                    message: e
                                })
                            })
                        }).catch(function() {
                            a.$message({
                                type: "info",
                                message: "已取消发布"
                            })
                        }) : "已发布" == t.publishStateVal && this.$confirm("确定下线该公告？", "提示", {
                            type: "warning"
                        }).then(function() {
                            (function(e, t) {
                                var a = S.URL + "/notice/revoke";
                                return x(a, e || {}, t)
                            })({
                                id: t.id
                            }).then(function(e) {
                                a.$message({
                                    type: "success",
                                    message: "下线成功!"
                                }), a.getList()
                            }).catch(function(e) {
                                a.$message({
                                    type: "error",
                                    message: e
                                })
                            })
                        }).catch(function() {
                            a.$message({
                                type: "info",
                                message: "已取消下线"
                            })
                        }) : 2 === e ? (this.getInfoById(t.id), this.addVisible = !0, this.isModify = !0) : 3 === e && this.$confirm("确定删除该公告？", "提示", {
                            type: "warning"
                        }).then(function() {
                            (function(e, t) {
                                var a = S.URL + "/notice/remove";
                                return x(a, e || {}, t)
                            })({
                                id: t.id
                            }).then(function(e) {
                                a.$message({
                                    type: "success",
                                    message: "删除成功"
                                }), a.getList()
                            }).catch(function(e) {
                                a.$message({
                                    type: "error",
                                    message: e
                                })
                            })
                        }).catch(function() {
                            a.$message({
                                type: "info",
                                message: "已取消删除"
                            })
                        })
                    },
                    handleSizeChange: function(e) {
                        this.currentSize = e, this.getList()
                    },
                    handleCurrentChange: function(e) {
                        this.currentPage = e, this.getList()
                    },
                    addNotice: function() {
                        this.selType = "", this.addFormData.endTime = "", this.addFormData.serve = [], this.addFormData.apply = "", this.addVisible = !0, this.isModify = !1
                    },
                    searchEvent: function() {
                        this.currentPage = 1, this.currentSize = 10, this.getList()
                    },
                    changeSearchState: function() {
                        this.currentPage = 1, this.currentSize = 10, this.getList()
                    },
                    changeSearchType: function() {
                        this.currentPage = 1, this.currentSize = 10, this.getList()
                    },
                    resetForm: function(e) {
                        this.addVisible = !1, this.isModify = !1, this.$refs[e].resetFields()
                    },
                    getApplyIcon: function(e) {
                        for (var t = [], a = 0; a < this.applyList.length; a++)
                            for (var n = 0; n < e.length; n++) e[n] == this.applyList[a].value && t.push({
                                appTitle: this.applyList[a].label,
                                appIcon: this.applyList[a].appIcon
                            });
                        return t
                    },
                    previewEvent: function() {
                        var e = this;
                        this.$refs.addFormData.validate(function(t) {
                            if (t)
                                if (0 != e.addFormData.type && "0" != e.addFormData.type || !$ || "<p><br></p>" != $.txt.html())
                                    if (0 != e.addFormData.type || "0" != e.addFormData.type) e.$message({
                                        message: "只有公告内容可以预览!",
                                        type: "warning"
                                    });
                                    else {
                                        if (e.preData.title = e.addFormData.title, 1 == e.addFormData.time) e.preData.updateDate = k(e.addFormData.publishDate, "yyyy-MM-dd hh:mm:ss");
                                        else if (0 == e.addFormData.time) {
                                            var a = (new Date).getTime();
                                            e.preData.updateDate = k(a, "yyyy-MM-dd hh:mm:ss")
                                        }
                                        e.preData.content = $.txt.html() || e.addFormData.content;
                                        var n = e.getApplyIcon(e.addFormData.serve);
                                        e.preData.appList = n, e.preViewDialog = !0
                                    }
                            else e.$message({
                                message: "请输入公告内容",
                                type: "warning"
                            })
                        })
                    },
                    changeType: function(e) {
                        var t = this;
                        t.selType = e, "0" === e || 0 === e ? ($ = null) ? $.txt.clear() : (($ = new U.a("#editorElem")).customConfig.menus = ["head", "bold", "foreColor", "image"], $.customConfig.pasteFilterStyle = !0, $.customConfig.uploadFileName = "file", $.customConfig.uploadImgServer = t.uploadUrl, $.customConfig.uploadImgMaxLength = 1, t.$nextTick(function() {
                            $.customConfig.uploadImgHooks = {
                                before: function(e, t, a) {
                                    var n = "image/bmp" === a[0].type,
                                        o = "image/png" === a[0].type,
                                        i = "image/jpg" === a[0].type,
                                        r = "image/jpeg" === a[0].type,
                                        s = a[0].size / 1024 < 100;
                                    return n || o || i || r ? s ? void 0 : {
                                        prevent: !0,
                                        msg: "上传图片大小不能超过100K"
                                    } : {
                                        prevent: !0,
                                        msg: "上传图片大小只能是BMP/PNG/JPG/JPEG格式"
                                    }
                                },
                                customInsert: function(e, t, a) {
                                    e(t.data)
                                }
                            }, $.customConfig.customAlert = function(e) {
                                t.$message({
                                    message: e,
                                    type: "warning"
                                })
                            }, $.customConfig.onchange = function(e) {
                                t.addFormData.content = e
                            }, $.create(), $.txt.clear()
                        })) : $ = null
                    },
                    addOrEditEvent: function(e) {
                        var t = this,
                            a = new Date(t.addFormData.publishDate),
                            n = new Date(t.addFormData.endTime),
                            o = {
                                title: t.addFormData.title,
                                timingState: t.addFormData.time,
                                publishState: 0 == t.addFormData.time ? 1 : 0,
                                publishTime: a.getTime(),
                                endTime: n.getTime(),
                                linkType: t.addFormData.type,
                                tag: t.addFormData.tag,
                                link: t.addFormData.address,
                                appIds: t.addFormData.serve,
                                appId: t.addFormData.apply,
                                content: t.addFormData.content,
                                toonType: t.bjtJsons.toonType,
                                version: t.bjtJsons.version,
                                role: t.bjtJsons.role,
                                district: t.bjtJsons.district,
                                operator: t.bjtJsons.operator
                            };
                        t.is_loading = !0, t.isModify ? (o.id = t.addFormData.id, function(e, t) {
                            var a = S.URL + "/notice/update";
                            return M(a, e, {}, t)
                        }(o).then(function(a) {
                            t.is_loading = !1, t.getList(), t.$message({
                                type: "success",
                                message: "修改成功"
                            }), t.resetForm(e)
                        }).catch(function(e) {
                            t.is_loading = !1, t.$message({
                                type: "error",
                                message: e
                            })
                        })) : function(e, t) {
                            var a = S.URL + "/notice/add";
                            return M(a, e, {}, t)
                        }(o).then(function(a) {
                            t.is_loading = !1, t.getList(), t.$message({
                                type: "success",
                                message: "发布成功"
                            }), t.resetForm(e)
                        }).catch(function(e) {
                            t.is_loading = !1, t.$message({
                                type: "error",
                                message: e
                            })
                        })
                    },
                    fbOrSaveEvent: function(e) {
                        var t = this;
                        if (this.is_loading) return !1;
                        this.is_loading = !0, this.$refs[e].validate(function(a) {
                            a ? (t.is_loading = !1, t.addOrEditEvent(e)) : t.is_loading = !1
                        })
                    },
                    setNotice: function() {
                        this.getSettingInfo(), this.setDialog = !0
                    },
                    getSettingInfo: function() {
                        var e = this;
                        (function(e, t) {
                            var a = S.URL + "/notice/setting/query";
                            return A(a, e || {}, t)
                        })({
                            toonType: e.bjtJsons.toonType,
                            version: e.bjtJsons.version,
                            role: e.bjtJsons.role,
                            district: e.bjtJsons.district
                        }).then(function(t) {
                            t && (e.selLink = t.linkType, e.setFormData = {
                                contentType: t.contentType,
                                tagState: t.tagState,
                                contentStyle: t.contentStyle,
                                contentIcon: t.contentIcon,
                                linkType: t.linkType,
                                linkUrl: t.linkUrl,
                                appId: t.appId,
                                nsid: t.nsid
                            })
                        }).catch(function(t) {
                            e.$message({
                                type: "error",
                                message: t
                            })
                        })
                    },
                    removeImg: function() {
                        this.setFormData.contentIcon = ""
                    },
                    changeLinkType: function(e) {
                        this.selLink = e
                    },
                    handleIconSuccess: function(e) {
                        this.is_icon_uploading = !1, "106" == e.errno ? this.$message({
                            message: "上传图片失败",
                            type: "warning"
                        }) : this.setFormData.contentIcon = e.data
                    },
                    defaultIconError: function() {
                        this.is_icon_uploading = !1, this.$message.error("滚动条icon上传失败！")
                    },
                    beforeAvatarUpload: function(e) {
                        var t = "image/bmp" === e.type,
                            a = "image/png" === e.type,
                            n = "image/jpg" === e.type,
                            o = "image/jpeg" === e.type,
                            i = e.size / 1024 < 100,
                            r = !0;
                        return t || a || n || o || (this.$message({
                            message: "滚动条icon只能是BMP/PNG/JPG/JPEG格式",
                            type: "warning"
                        }), r = !1), i || (this.$message({
                            message: "滚动条icon大小不超过100K",
                            type: "warning"
                        }), r = !1), r
                    },
                    beforeIconUpload: function(e) {
                        var t = this.beforeAvatarUpload(e);
                        return t && (this.is_icon_uploading = !0), t
                    },
                    addOrEditBgEvent: function() {
                        var e = this;
                        (function(e, t) {
                            var a = S.URL + "/notice/setting/update";
                            return M(a, e, {}, t)
                        })(e.setFormData).then(function(t) {
                            e.$message({
                                type: "success",
                                message: "设置成功"
                            }), e.setDialog = !1
                        }).catch(function(t) {
                            e.is_loading = !1, e.$message({
                                message: t,
                                type: "error"
                            })
                        })
                    },
                    saveNotice: function(e) {
                        var t = this;
                        this.$refs[e].validate(function(e) {
                            e && t.addOrEditBgEvent()
                        })
                    }
                }
            },
            B = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "notice-list"
                    }, [a("div", {
                        staticClass: "bg-div search-box"
                    }, [a("el-row", [a("el-col", {
                        attrs: {
                            xs: 4,
                            sm: 4,
                            md: 4,
                            lg: 6,
                            xl: 6
                        }
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.addNotice
                        }
                    }, [e._v("添加公告")])], 1), e._v(" "), a("el-col", {
                        staticClass: "text-right",
                        attrs: {
                            xs: 20,
                            sm: 20,
                            md: 20,
                            lg: 18,
                            xl: 18
                        }
                    }, [a("el-form", {
                        staticClass: "search-form",
                        attrs: {
                            inline: !0,
                            model: e.formSearch
                        }
                    }, [a("el-form-item", {
                        attrs: {
                            label: ""
                        }
                    }, [a("el-input", {
                        attrs: {
                            maxlength: 18,
                            placeholder: "搜索公告"
                        },
                        model: {
                            value: e.formSearch.title,
                            callback: function(t) {
                                e.$set(e.formSearch, "title", t)
                            },
                            expression: "formSearch.title"
                        }
                    })], 1), e._v(" "), a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.searchEvent
                        }
                    }, [e._v("查询")]), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "类型"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "全部"
                        },
                        on: {
                            change: e.changeSearchType
                        },
                        model: {
                            value: e.formSearch.type,
                            callback: function(t) {
                                e.$set(e.formSearch, "type", t)
                            },
                            expression: "formSearch.type"
                        }
                    }, e._l(e.typeList, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1)], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "状态"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "全部"
                        },
                        on: {
                            change: e.changeSearchState
                        },
                        model: {
                            value: e.formSearch.state,
                            callback: function(t) {
                                e.$set(e.formSearch, "state", t)
                            },
                            expression: "formSearch.state"
                        }
                    }, e._l(e.stateList, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1)], 1), e._v(" "), a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: e.setNotice
                        }
                    }, [e._v("设置")])], 1)], 1)], 1)], 1), e._v(" "), a("div", {
                        staticClass: "bg-div"
                    }, [a("el-table", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.is_loading,
                            expression: "is_loading"
                        }],
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            data: e.listData,
                            border: ""
                        }
                    }, [a("el-table-column", {
                        attrs: {
                            prop: "index",
                            width: "80",
                            label: "序号",
                            align: "center"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "tag",
                            label: "标签",
                            align: "center",
                            width: "100"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "title",
                            label: "标题",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("div", {
                                    staticClass: "viewText",
                                    attrs: {
                                        title: t.row.title
                                    },
                                    on: {
                                        click: function(a) {
                                            return e.goView(t.row)
                                        }
                                    }
                                }, [e._v(e._s(t.row.title.length > 10 ? t.row.title.substring(0, 10) + "..." : t.row.title))])]
                            }
                        }])
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "linkTypeVal",
                            label: "类别",
                            align: "center",
                            width: "120"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "publishStateVal",
                            label: "状态",
                            align: "center",
                            width: "100"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "operator",
                            label: "操作人",
                            align: "center",
                            width: "120"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "endTimeStr",
                            label: "到期时间",
                            align: "center",
                            width: "170"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "updateDateStr",
                            label: "更新时间",
                            align: "center",
                            width: "170"
                        }
                    }), e._v(" "), a("el-table-column", {
                        attrs: {
                            prop: "operation",
                            label: "操作",
                            width: "150",
                            align: "center"
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                return [a("el-button", {
                                    attrs: {
                                        type: "text",
                                        size: "small"
                                    },
                                    on: {
                                        click: function(a) {
                                            return e.changeOperation(1, t.row)
                                        }
                                    }
                                }, [e._v(e._s("待发布" == t.row.publishStateVal ? "发布" : "下线"))]), e._v(" "), a("el-button", {
                                    attrs: {
                                        type: "text",
                                        size: "small"
                                    },
                                    on: {
                                        click: function(a) {
                                            return e.changeOperation(2, t.row)
                                        }
                                    }
                                }, [e._v("修改")]), e._v(" "), a("el-button", {
                                    attrs: {
                                        type: "text",
                                        size: "small"
                                    },
                                    on: {
                                        click: function(a) {
                                            return e.changeOperation(3, t.row)
                                        }
                                    }
                                }, [e._v("删除")])]
                            }
                        }])
                    })], 1)], 1), e._v(" "), a("div", {
                        staticClass: "bg-div"
                    }, [a("el-pagination", {
                        attrs: {
                            "current-page": e.currentPage,
                            "page-sizes": [10, 20, 30, 40],
                            "page-size": e.currentSize,
                            layout: "total, sizes, prev, pager, next, jumper",
                            total: e.totalPage
                        },
                        on: {
                            "size-change": e.handleSizeChange,
                            "current-change": e.handleCurrentChange
                        }
                    })], 1), e._v(" "), a("el-dialog", {
                        staticClass: "dialog-container",
                        attrs: {
                            visible: e.addVisible,
                            "close-on-click-modal": !1,
                            "show-close": !1,
                            width: "600px"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.addVisible = t
                            }
                        }
                    }, [a("div", {
                        staticClass: "sub-dialog-title",
                        attrs: {
                            slot: "title"
                        },
                        slot: "title"
                    }, [a("span", {
                        staticStyle: {
                            float: "left"
                        }
                    }, [e._v(e._s(e.isModify ? "修改公告" : "添加公告"))]), e._v(" "), a("i", {
                        staticClass: "el-dialog__close el-icon el-icon-close",
                        staticStyle: {
                            float: "right",
                            cursor: "pointer"
                        },
                        on: {
                            click: function(t) {
                                return e.resetForm("addFormData")
                            }
                        }
                    })]), e._v(" "), a("el-form", {
                        ref: "addFormData",
                        attrs: {
                            model: e.addFormData,
                            rules: e.rules,
                            "label-width": e.formLabelWidth
                        }
                    }, [a("el-form-item", {
                        attrs: {
                            label: "公告标题",
                            prop: "title"
                        }
                    }, [a("el-input", {
                        attrs: {
                            maxlength: 18,
                            placeholder: "请输入公告标题"
                        },
                        model: {
                            value: e.addFormData.title,
                            callback: function(t) {
                                e.$set(e.addFormData, "title", t)
                            },
                            expression: "addFormData.title"
                        }
                    })], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "发布时间",
                            prop: "time"
                        }
                    }, [a("el-radio-group", {
                        model: {
                            value: e.addFormData.time,
                            callback: function(t) {
                                e.$set(e.addFormData, "time", t)
                            },
                            expression: "addFormData.time"
                        }
                    }, [a("el-radio", {
                        attrs: {
                            label: 0
                        }
                    }, [e._v("立即发布")]), e._v(" "), a("el-radio", {
                        attrs: {
                            label: 1
                        }
                    }, [e._v("定时发布")])], 1), e._v(" "), 1 === e.addFormData.time ? a("el-date-picker", {
                        staticClass: "selPublishTime",
                        attrs: {
                            type: "datetime",
                            format: "yyyy-MM-dd HH:mm",
                            "default-time": "01:00:00",
                            placeholder: "请选择定时发布时间",
                            "picker-options": e.disableTimePassed,
                            disabled: e.datetimeDisabled
                        },
                        model: {
                            value: e.addFormData.publishDate,
                            callback: function(t) {
                                e.$set(e.addFormData, "publishDate", t)
                            },
                            expression: "addFormData.publishDate"
                        }
                    }) : e._e()], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "到期时间"
                        }
                    }, [a("el-date-picker", {
                        attrs: {
                            type: "datetime",
                            format: "yyyy-MM-dd HH:mm",
                            "default-time": "23:59:59",
                            placeholder: "请选择到期时间",
                            "picker-options": e.disableTimePassed
                        },
                        model: {
                            value: e.addFormData.endTime,
                            callback: function(t) {
                                e.$set(e.addFormData, "endTime", t)
                            },
                            expression: "addFormData.endTime"
                        }
                    })], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "标签",
                            prop: "tag"
                        }
                    }, [a("el-input", {
                        attrs: {
                            maxlength: 2,
                            placeholder: "请输入标签"
                        },
                        model: {
                            value: e.addFormData.tag,
                            callback: function(t) {
                                e.$set(e.addFormData, "tag", t)
                            },
                            expression: "addFormData.tag"
                        }
                    })], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "选择公告类型",
                            prop: "type"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "请选择"
                        },
                        on: {
                            change: e.changeType
                        },
                        model: {
                            value: e.addFormData.type,
                            callback: function(t) {
                                e.$set(e.addFormData, "type", t)
                            },
                            expression: "addFormData.type"
                        }
                    }, e._l(e.typeList, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1)], 1), e._v(" "), "0" == e.selType ? a("el-form-item", {
                        attrs: {
                            label: "相关服务推荐"
                        }
                    }, [a("el-select", {
                        attrs: {
                            multiple: "",
                            clearable: "",
                            "multiple-limit": e.limitNum,
                            placeholder: "请选择推荐服务"
                        },
                        model: {
                            value: e.addFormData.serve,
                            callback: function(t) {
                                e.$set(e.addFormData, "serve", t)
                            },
                            expression: "addFormData.serve"
                        }
                    }, e._l(e.applyList, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1)], 1) : e._e(), e._v(" "), "0" == e.selType ? a("el-form-item", {
                        attrs: {
                            label: "公告内容",
                            prop: "content"
                        }
                    }, [a("div", {
                        staticStyle: {
                            "text-align": "left"
                        },
                        attrs: {
                            id: "editorElem"
                        }
                    })]) : e._e(), e._v(" "), "1" == e.selType ? a("el-form-item", {
                        attrs: {
                            label: "网络链接地址",
                            prop: "address"
                        }
                    }, [a("el-input", {
                        attrs: {
                            maxlength: 2e3,
                            placeholder: "请输入链接地址"
                        },
                        model: {
                            value: e.addFormData.address,
                            callback: function(t) {
                                e.$set(e.addFormData, "address", t)
                            },
                            expression: "addFormData.address"
                        }
                    })], 1) : e._e(), e._v(" "), "2" == e.selType ? a("el-form-item", {
                        attrs: {
                            label: "选择服务应用",
                            prop: "apply"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "请选择服务应用"
                        },
                        model: {
                            value: e.addFormData.apply,
                            callback: function(t) {
                                e.$set(e.addFormData, "apply", t)
                            },
                            expression: "addFormData.apply"
                        }
                    }, e._l(e.applyList, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1)], 1) : e._e()], 1), e._v(" "), a("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.previewEvent("addFormData")
                            }
                        }
                    }, [e._v("预览")]), e._v(" "), e.isModify ? e._e() : a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.is_loading
                        },
                        on: {
                            click: function(t) {
                                !e.is_loading && e.fbOrSaveEvent("addFormData")
                            }
                        }
                    }, [e._v("发布")]), e._v(" "), e.isModify ? a("el-button", {
                        attrs: {
                            type: "primary",
                            loading: e.is_loading
                        },
                        on: {
                            click: function(t) {
                                !e.is_loading && e.fbOrSaveEvent("addFormData")
                            }
                        }
                    }, [e._v("保存")]) : e._e()], 1)], 1), e._v(" "), a("el-dialog", {
                        staticClass: "pre-dialog",
                        attrs: {
                            visible: e.preViewDialog,
                            width: "375px"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.preViewDialog = t
                            }
                        }
                    }, [a("div", {
                        staticClass: "preContent"
                    }, [a("div", {
                        staticClass: "preHeader"
                    }, [a("h2", [e._v(e._s(e.preData.title))]), e._v(" "), a("div", {
                        staticClass: "preTime"
                    }, [e._v(e._s(e.preData.updateDate))])]), e._v(" "), a("div", {
                        staticClass: "preBody",
                        domProps: {
                            innerHTML: e._s(e.preData.content)
                        }
                    }), e._v(" "), a("div", {
                        staticClass: "preFooter"
                    }, [a("p", [e._v("推荐服务")]), e._v(" "), a("ul", e._l(e.preData.appList, function(t, n) {
                        return a("li", [a("img", {
                            attrs: {
                                src: t.appIcon
                            }
                        }), e._v(" "), a("div", [e._v(e._s(t.appTitle))])])
                    }), 0)])])]), e._v(" "), a("el-dialog", {
                        staticClass: "view-dialog",
                        attrs: {
                            visible: e.viewDialog,
                            width: "550px"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.viewDialog = t
                            }
                        }
                    }, [a("div", {
                        staticClass: "sub-dialog-title",
                        attrs: {
                            slot: "title"
                        },
                        slot: "title"
                    }, [a("span", {
                        staticStyle: {
                            float: "left"
                        }
                    }, [e._v("详情")]), e._v(" "), a("i", {
                        staticClass: "el-dialog__close el-icon el-icon-close",
                        staticStyle: {
                            float: "right",
                            cursor: "pointer"
                        },
                        on: {
                            click: function(t) {
                                e.viewDialog = !1
                            }
                        }
                    })]), e._v(" "), a("el-form", {
                        staticClass: "view-form",
                        attrs: {
                            model: e.detailData
                        }
                    }, [a("el-form-item", {
                        attrs: {
                            label: "公告标题："
                        }
                    }, [a("div", [e._v(e._s(e.detailData.title))])]), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "发布时间："
                        }
                    }, [a("span", [e._v(e._s(e.detailData.publishStatueStr))]), 0 == e.detailData.publishState ? a("span", [e._v(" " + e._s(e.detailData.publishTimeStr))]) : e._e()]), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "到期时间："
                        }
                    }, [a("div", [e._v(e._s(e.detailData.endTimeStr))])]), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "标签："
                        }
                    }, [a("div", [e._v(e._s(e.detailData.tag))])]), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "公告类型："
                        }
                    }, [a("div", [e._v(e._s(e.detailData.linkTypeStr))])]), e._v(" "), "0" == e.selViewType ? a("el-form-item", {
                        attrs: {
                            label: "相关服务推荐："
                        }
                    }, [a("div", [e._v(e._s(e.detailData.apps))])]) : e._e(), e._v(" "), "0" == e.selViewType ? a("el-form-item", {
                        attrs: {
                            label: "公告内容："
                        }
                    }, [a("div", {
                        staticClass: "contentDiv",
                        domProps: {
                            innerHTML: e._s(e.detailData.content)
                        }
                    })]) : e._e(), e._v(" "), "1" == e.selViewType ? a("el-form-item", {
                        attrs: {
                            label: "网络链接地址："
                        }
                    }, [a("div", [e._v(e._s(e.detailData.link))])]) : e._e(), e._v(" "), "2" == e.selViewType ? a("el-form-item", {
                        attrs: {
                            label: "服务应用："
                        }
                    }, [a("div", [e._v(e._s(e.detailData.app))])]) : e._e()], 1)], 1), e._v(" "), a("el-dialog", {
                        staticClass: "dialog-container",
                        attrs: {
                            title: "设置",
                            visible: e.setDialog,
                            "close-on-click-modal": !1,
                            width: "600px"
                        },
                        on: {
                            "update:visible": function(t) {
                                e.setDialog = t
                            }
                        }
                    }, [a("el-form", {
                        ref: "setFormData",
                        attrs: {
                            model: e.setFormData,
                            rules: e.setRules,
                            "label-width": e.formLabelWidthS
                        }
                    }, [a("el-form-item", {
                        attrs: {
                            label: "滚动条显示内容",
                            prop: "contentType"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "请选择"
                        },
                        model: {
                            value: e.setFormData.contentType,
                            callback: function(t) {
                                e.$set(e.setFormData, "contentType", t)
                            },
                            expression: "setFormData.contentType"
                        }
                    }, e._l(e.contentTypeList, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1)], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "是否显示标签",
                            prop: "tagState"
                        }
                    }, [a("el-radio-group", {
                        model: {
                            value: e.setFormData.tagState,
                            callback: function(t) {
                                e.$set(e.setFormData, "tagState", t)
                            },
                            expression: "setFormData.tagState"
                        }
                    }, [a("el-radio", {
                        attrs: {
                            label: 0
                        }
                    }, [e._v("显示")]), e._v(" "), a("el-radio", {
                        attrs: {
                            label: 1
                        }
                    }, [e._v("不显示")]), e._v(" "), a("span", {
                        staticClass: "tag-tip"
                    }, [e._v("滚动条内容前的标签 如"), a("span", {
                        staticClass: "tip-red"
                    }, [e._v("公告")])])], 1)], 1), e._v(" "), a("el-form-item", {
                        staticClass: "show-style",
                        attrs: {
                            label: "滚动条样式",
                            prop: "contentStyle"
                        }
                    }, [a("el-radio-group", {
                        model: {
                            value: e.setFormData.contentStyle,
                            callback: function(t) {
                                e.$set(e.setFormData, "contentStyle", t)
                            },
                            expression: "setFormData.contentStyle"
                        }
                    }, [a("el-radio", {
                        attrs: {
                            label: 0
                        }
                    }, [a("img", {
                        attrs: {
                            src: "static/img/rollStyle1.png",
                            alt: ""
                        }
                    })]), e._v(" "), a("el-radio", {
                        attrs: {
                            label: 1
                        }
                    }, [a("img", {
                        attrs: {
                            src: "static/img/rollStyle2.png",
                            alt: ""
                        }
                    })]), e._v(" "), a("el-radio", {
                        attrs: {
                            label: 2
                        }
                    }, [a("img", {
                        attrs: {
                            src: "static/img/rollStyle3.png",
                            alt: ""
                        }
                    })])], 1)], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "滚动条icon"
                        }
                    }, [a("el-upload", {
                        directives: [{
                            name: "loading",
                            rawName: "v-loading",
                            value: e.is_icon_uploading,
                            expression: "is_icon_uploading"
                        }],
                        staticClass: "avatar-uploader",
                        attrs: {
                            name: "imgFile",
                            "show-file-list": !1,
                            action: e.uploadUrl,
                            "on-success": e.handleIconSuccess,
                            "on-error": e.defaultIconError,
                            "before-upload": e.beforeIconUpload
                        }
                    }, [e.setFormData.contentIcon ? a("img", {
                        staticClass: "avatar",
                        attrs: {
                            src: e.setFormData.contentIcon
                        }
                    }) : a("i", {
                        staticClass: "el-icon-plus avatar-uploader-icon"
                    })]), e._v(" "), e.setFormData.contentIcon ? a("img", {
                        staticClass: "icon-remove",
                        attrs: {
                            src: "static/img/icon-remove.png"
                        },
                        on: {
                            click: e.removeImg
                        }
                    }) : e._e()], 1), e._v(" "), a("el-form-item", {
                        attrs: {
                            label: "点击跳转至"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "请选择"
                        },
                        on: {
                            change: e.changeLinkType
                        },
                        model: {
                            value: e.setFormData.linkType,
                            callback: function(t) {
                                e.$set(e.setFormData, "linkType", t)
                            },
                            expression: "setFormData.linkType"
                        }
                    }, e._l(e.linkTypeList, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1)], 1), e._v(" "), "0" == e.selLink ? a("el-form-item", {
                        attrs: {
                            label: "链接地址",
                            prop: "linkUrl"
                        }
                    }, [a("el-input", {
                        attrs: {
                            maxlength: 2e3,
                            placeholder: "请输入正确的链接地址"
                        },
                        model: {
                            value: e.setFormData.linkUrl,
                            callback: function(t) {
                                e.$set(e.setFormData, "linkUrl", t)
                            },
                            expression: "setFormData.linkUrl"
                        }
                    })], 1) : e._e(), e._v(" "), "1" == e.selLink ? a("el-form-item", {
                        attrs: {
                            label: "服务应用",
                            prop: "appId"
                        }
                    }, [a("el-select", {
                        attrs: {
                            placeholder: "请选择"
                        },
                        model: {
                            value: e.setFormData.appId,
                            callback: function(t) {
                                e.$set(e.setFormData, "appId", t)
                            },
                            expression: "setFormData.appId"
                        }
                    }, e._l(e.applyList, function(e) {
                        return a("el-option", {
                            key: e.value,
                            attrs: {
                                label: e.label,
                                value: e.value
                            }
                        })
                    }), 1)], 1) : e._e()], 1), e._v(" "), a("div", {
                        staticClass: "dialog-footer",
                        attrs: {
                            slot: "footer"
                        },
                        slot: "footer"
                    }, [a("el-button", {
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(t) {
                                return e.saveNotice("setFormData")
                            }
                        }
                    }, [e._v("保存")])], 1)], 1)], 1)
                },
                staticRenderFns: []
            };
        a("VU/8")(J, B, !1, function(e) {
            a("liKN")
        }, null, null).exports, a("2Ipj");
        var V = {
                name: "noticeDetail",
                data: function() {
                    return {
                        noticeId: 0,
                        detailData: {
                            title: "",
                            publishTime: "",
                            recommendApps: [],
                            content: ""
                        },
                        appList: [{
                            appIcon: "http://fast.scloud.systoon.com/f/DOic6t18wBD95aYdiV+FfYsLPDmKIydAdDykDKjFJ-0fF.png",
                            appTitle: "公积金"
                        }, {
                            appIcon: "http://fast.scloud.systoon.com/f/zxBGrg1f780GlO6QuNREn5RflaRLH93u8p0VeR-ETVQfF.png",
                            appTitle: "阳光餐饮"
                        }, {
                            appIcon: "http://fast.scloud.systoon.com/f/zxBGrg1f780GlO6QuNREn5RflaRLH93u8p0VeR-ETVQfF.png",
                            appTitle: "阳光餐饮"
                        }, {
                            appIcon: "http://fast.scloud.systoon.com/f/FXthwnche2PBER3DAOVyfo7x5oU0++idQY+ZsB4cfbUfF.png",
                            appTitle: "西客站导航"
                        }, {
                            appIcon: "http://fast.scloud.systoon.com/f/FXthwnche2PBER3DAOVyfo7x5oU0++idQY+ZsB4cfbUfF.png",
                            appTitle: "西客站导航"
                        }, {
                            appIcon: "http://fast.scloud.systoon.com/f/FXthwnche2PBER3DAOVyfo7x5oU0++idQY+ZsB4cfbUfF.png",
                            appTitle: "西客站导航"
                        }]
                    }
                },
                mounted: function() {
                    this.noticeId = L("noticeId"), this.noticeId ? this.init() : this.detailData = {
                        title: "公积金支持查询啦！",
                        publishTime: "2014-03-31 14:47:44",
                        recommendApps: [],
                        content: "<h3>查询条件</h3><div>已成功办理公积金联名卡，且公积金账户处于“缴存”和“封存”状态的缴存职工，可通过住房公积金网站查询个人公积金未办理联名卡的缴存职工，请尽快办理。联名卡办理条件和流程详见“北京住房公积金联名卡办理条件和办理流程”。 </div>"
                    }
                },
                methods: {
                    init: function() {
                        this.getData()
                    },
                    getData: function() {
                        var e = this,
                            t = this;
                        (function(e, t) {
                            var a = S.URL + "notice/detail";
                            return G(a, e || {}, t)
                        })({
                            noticeId: parseInt(this.noticeId)
                        }).then(function(a) {
                            a && (t.detailData = {
                                title: a.title,
                                publishTime: k(a.publishTime, "yyyy-MM-dd hh:mm:ss"),
                                content: e.checkJavascript(a.content),
                                recommendApps: a.recommendApps
                            })
                        }).catch(function(e) {
                            t.$message({
                                type: "error",
                                message: e
                            })
                        })
                    },
                    checkJavascript: function(e) {
                        var t = !0;
                        return ["script", "javascript:", "onload", "onerror", "<iframe", "onclick", "console", "print(", "onactivate", "onafterprint", "onbeforeactivate", "onbeforecut", "onbeforedeactivate", "onbeforeeditfocus", "onbeforepaste", "onbeforeprint", "onbeforeunload", "onclick", "oncontextmenu", "oncontrolselect", "oncut", "ondblclick", "ondeactivate", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "onfilterchange", "onfocusin", "onfocusout", "onkeydown", "onkeypress", "onkeyup", "onload", "onlosecapture", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onmove", "onmoveend", "onmovestart", "onpaste", "onpropertychange", "onreadystatechange", "onresizeend", "onresizestart", "onscroll", "onselect", "onselectstart", "onunload", "onchange", "onerror", "onabort", "onhashchange", "onpageshow", "onpagehide", "onresize", "onblur", "onfocus", "oninput", "onreset", "onsearch", "onsubmit", "oncopy", "oncanplay", "oncanplaythrough", "ondurationchange", "onemptied", "onended", "onloadeddata", "onloadedmetadata", "onloadstart", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onseeked", "onseeking", "onstalled", "onsuspend", "ontimeupdate", "onvolumechange", "onwaiting"].forEach(function(a) {
                            for (t = !0; t;) {
                                var n = e.toLowerCase(),
                                    o = a.length,
                                    i = n.indexOf(a);
                                if (i > -1) {
                                    e.substr(i, o);
                                    e = e.substr(0, i) + e.substr(i + o + 1)
                                } else t = !1
                            }
                        }), e
                    },
                    goToApply: function(e) {
                        var t = {
                            appId: e.appId,
                            appTitle: e.appTitle,
                            appUrl: e.appUrl,
                            appType: e.appType,
                            isAuthentication: e.isAuthentication,
                            iosUrl: e.iosUrl,
                            androidUrl: e.androidUrl
                        };
                        console.log(t), toongine.protocol.request({
                            params: {
                                scheme: "toon",
                                domain: "homeprovider",
                                path: "jumpapp",
                                query: t
                            },
                            callback: function(e) {
                                console.log("res: " + e.data)
                            }
                        })
                    }
                }
            },
            H = {
                render: function() {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", {
                        staticClass: "notice-detail"
                    }, [a("div", {
                        staticClass: "nonticeHeader"
                    }, [a("h2", {
                        attrs: {
                            id: "noticeTitle"
                        }
                    }, [e._v(e._s(e.detailData.title))]), e._v(" "), a("div", {
                        staticClass: "noticetime"
                    }, [e._v(e._s(e.detailData.publishTime))])]), e._v(" "), a("div", {
                        staticClass: "noticeConter",
                        domProps: {
                            innerHTML: e._s(e.detailData.content)
                        }
                    }), e._v(" "), e.detailData.recommendApps && e.detailData.recommendApps.length >= 1 ? a("div", {
                        staticClass: "noticefooter"
                    }, [a("p", [e._v("推荐服务")]), e._v(" "), a("ul", e._l(e.detailData.recommendApps, function(t, n) {
                        return a("li", {
                            key: n,
                            on: {
                                click: function(a) {
                                    return e.goToApply(t)
                                }
                            }
                        }, [a("img", {
                            attrs: {
                                src: t.appIcon
                            }
                        }), e._v(" "), a("div", [e._v(e._s(t.appTitle))])])
                    }), 0)]) : e._e()])
                },
                staticRenderFns: []
            };
        var z = a("VU/8")(V, H, !1, function(e) {
            a("fx/J")
        }, null, null).exports;
        i.default.use(b.a);
        var q = new b.a({
                routes: [{
                    path: "/",
                    name: "notice-detail",
                    component: z
                }]
            }),
            W = a("9JMe");
        Object(W.sync)(y, q), i.default.use(c.a), i.default.use(o.a), i.default.config.productionTip = !1, new i.default({
            el: "#app",
            router: q,
            store: y,
            components: {
                App: l
            },
            template: "<App/>"
        })
    },
    "fx/J": function(e, t) {},
    gSHi: function(e, t) {},
    liKN: function(e, t) {},
    tvR6: function(e, t) {}
}, ["NHnr"]);