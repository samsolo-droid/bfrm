! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        ((t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).braintree || (t.braintree = {})).dropin = e()
    }
}(function() {
    return function a(o, s, l) {
        function d(t, e) {
            if (!s[t]) {
                if (!o[t]) { var r = "function" == typeof require && require; if (!e && r) return r(t, !0); if (c) return c(t, !0); var i = new Error("Cannot find module '" + t + "'"); throw i.code = "MODULE_NOT_FOUND", i }
                var n = s[t] = { exports: {} };
                o[t][0].call(n.exports, function(e) { return d(o[t][1][e] || e) }, n, n.exports, a, o, s, l)
            }
            return s[t].exports
        }
        for (var c = "function" == typeof require && require, e = 0; e < l.length; e++) d(l[e]);
        return d
    }({
        1: [function(e, r, t) {
            (function(t) {
                "use strict";
                r.exports = function(e) { return e = e || t.navigator.userAgent, /Android/.test(e) }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        2: [function(e, t, r) {
            "use strict";
            var i = e("./is-edge"),
                n = e("./is-samsung");
            t.exports = function(e) { return !(-1 === (e = e || navigator.userAgent).indexOf("Chrome") && -1 === e.indexOf("CriOS") || i(e) || n(e)) }
        }, { "./is-edge": 3, "./is-samsung": 12 }],
        3: [function(e, t, r) {
            "use strict";
            t.exports = function(e) { return -1 !== (e = e || navigator.userAgent).indexOf("Edge/") }
        }, {}],
        4: [function(e, i, t) {
            (function(t) {
                "use strict";
                var r = e("./is-ie11");
                i.exports = function(e) { return -1 !== (e = e || t.navigator.userAgent).indexOf("MSIE") || r(e) }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "./is-ie11": 5 }],
        5: [function(e, t, r) {
            "use strict";
            t.exports = function(e) { return -1 !== (e = e || navigator.userAgent).indexOf("Trident/7") }
        }, {}],
        6: [function(e, t, r) {
            "use strict";
            t.exports = function(e) { return -1 !== (e = e || navigator.userAgent).indexOf("MSIE 9") }
        }, {}],
        7: [function(e, r, t) {
            (function(t) {
                "use strict";
                r.exports = function(e) { return e = e || t.navigator.userAgent, /FxiOS/i.test(e) }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        8: [function(e, t, r) {
            "use strict";
            var i = e("./is-ios"),
                n = /webkit/i;
            t.exports = function(e) { return e = e || navigator.userAgent, i(e) && e.match(n) && -1 === e.indexOf("CriOS") }
        }, { "./is-ios": 10 }],
        9: [function(e, i, t) {
            (function(t) {
                "use strict";
                var r = e("./is-ios");
                i.exports = function(e) { return e = e || t.navigator.userAgent, !!r(e) && (!!/\bGSA\b/.test(e) || /.+AppleWebKit(?!.*Safari)/.test(e)) }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "./is-ios": 10 }],
        10: [function(e, r, t) {
            (function(t) {
                "use strict";
                r.exports = function(e) { return e = e || t.navigator.userAgent, /iPhone|iPod|iPad/i.test(e) }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        11: [function(e, i, t) {
            (function(t) {
                "use strict";
                var r = e("./is-ios-firefox");
                i.exports = function(e) { return e = e || t.navigator.userAgent, r(e) || /iPhone|iPod|iPad|Mobile|Tablet/i.test(e) && /Firefox/i.test(e) }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "./is-ios-firefox": 7 }],
        12: [function(e, r, t) {
            (function(t) {
                "use strict";
                r.exports = function(e) { return e = e || t.navigator.userAgent, /SamsungBrowser/i.test(e) }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        13: [function(e, t, r) {
            "use strict";
            var i = e("./lib/set-attributes"),
                n = e("./lib/default-attributes"),
                a = e("./lib/assign");
            t.exports = function(e) {
                var t = document.createElement("iframe"),
                    r = a({}, n, e);
                return r.style && "string" != typeof r.style && (a(t.style, r.style), delete r.style), i(t, r), t.getAttribute("id") || (t.id = t.name), t
            }
        }, { "./lib/assign": 14, "./lib/default-attributes": 15, "./lib/set-attributes": 16 }],
        14: [function(e, t, r) {
            "use strict";
            t.exports = function(r) { return Array.prototype.slice.call(arguments, 1).forEach(function(t) { "object" == typeof t && Object.keys(t).forEach(function(e) { r[e] = t[e] }) }), r }
        }, {}],
        15: [function(e, t, r) {
            "use strict";
            t.exports = { src: "about:blank", frameBorder: 0, allowtransparency: !0, scrolling: "no" }
        }, {}],
        16: [function(e, t, r) {
            "use strict";
            t.exports = function(e, t) { var r; for (var i in t) t.hasOwnProperty(i) && (null == (r = t[i]) ? e.removeAttribute(i) : e.setAttribute(i, r)) }
        }, {}],
        17: [function(e, t, r) {
            "use strict";
            t.exports = function(t) {
                return function() {
                    var e = arguments;
                    setTimeout(function() { t.apply(null, e) }, 1)
                }
            }
        }, {}],
        18: [function(e, t, r) {
            "use strict";
            t.exports = function(e) { var t = !1; return function() { t || (t = !0, e.apply(null, arguments)) } }
        }, {}],
        19: [function(e, t, r) {
            "use strict";
            t.exports = function(e, t) {
                if (!t) return e;
                e.then(function(e) { t(null, e) }).catch(function(e) { t(e) })
            }
        }, {}],
        20: [function(e, t, r) {
            "use strict";
            var i = e("./lib/deferred"),
                n = e("./lib/once"),
                a = e("./lib/promise-or-callback");

            function s(r) { return function() { var e, t = Array.prototype.slice.call(arguments); return "function" == typeof t[t.length - 1] && (e = t.pop(), e = n(i(e))), a(r.apply(this, t), e) } }
            s.wrapPrototype = function(n, e) {
                var a, o;
                return a = (e = e || {}).ignoreMethods || [], o = !0 === e.transformPrivateMethods, Object.getOwnPropertyNames(n.prototype).filter(function(e) {
                    var t, r = "constructor" !== e && "function" == typeof n.prototype[e],
                        i = -1 === a.indexOf(e);
                    return t = !!o || "_" !== e.charAt(0), r && t && i
                }).forEach(function(e) {
                    var t = n.prototype[e];
                    n.prototype[e] = s(t)
                }), n
            }, t.exports = s
        }, { "./lib/deferred": 17, "./lib/once": 18, "./lib/promise-or-callback": 19 }],
        21: [function(d, c, e) {
            (function(i) {
                "use strict";
                var n = d("../lib/braintree-error"),
                    a = d("../lib/analytics"),
                    o = d("./errors"),
                    s = d("../lib/promise"),
                    e = d("../lib/methods"),
                    t = d("../lib/convert-methods-to-error"),
                    r = d("@braintree/wrap-promise");

                function l(e) { this._client = e.client, Object.defineProperty(this, "merchantIdentifier", { value: this._client.getConfiguration().gatewayConfiguration.applePayWeb.merchantIdentifier, configurable: !1, writable: !1 }) }
                l.prototype.createPaymentRequest = function(e) {
                    var t = this._client.getConfiguration().gatewayConfiguration.applePayWeb,
                        r = { countryCode: t.countryCode, currencyCode: t.currencyCode, merchantCapabilities: t.merchantCapabilities || ["supports3DS"], supportedNetworks: t.supportedNetworks.map(function(e) { return "mastercard" === e ? "masterCard" : e }) };
                    return Object.assign({}, r, e)
                }, l.prototype.performValidation = function(e) { var t, r = this; return e && e.validationURL ? (t = { validationUrl: e.validationURL, domainName: e.domainName || i.location.hostname, merchantIdentifier: e.merchantIdentifier || this.merchantIdentifier }, null != e.displayName && (t.displayName = e.displayName), this._client.request({ method: "post", endpoint: "apple_pay_web/sessions", data: { _meta: { source: "apple-pay" }, applePayWebSession: t } }).then(function(e) { return a.sendEvent(r._client, "applepay.performValidation.succeeded"), s.resolve(e) }).catch(function(e) { return a.sendEvent(r._client, "applepay.performValidation.failed"), "CLIENT_REQUEST_ERROR" === e.code ? s.reject(new n({ type: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.type, code: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.code, message: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.message, details: { originalError: e.details.originalError } })) : s.reject(new n({ type: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.type, code: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.code, message: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.message, details: { originalError: e } })) })) : s.reject(new n(o.APPLE_PAY_VALIDATION_URL_REQUIRED)) }, l.prototype.tokenize = function(e) { var t = this; return e.token ? this._client.request({ method: "post", endpoint: "payment_methods/apple_payment_tokens", data: { _meta: { source: "apple-pay" }, applePaymentToken: Object.assign({}, e.token, { paymentData: btoa(JSON.stringify(e.token.paymentData)) }) } }).then(function(e) { return a.sendEvent(t._client, "applepay.tokenize.succeeded"), s.resolve(e.applePayCards[0]) }).catch(function(e) { return a.sendEvent(t._client, "applepay.tokenize.failed"), s.reject(new n({ type: o.APPLE_PAY_TOKENIZATION.type, code: o.APPLE_PAY_TOKENIZATION.code, message: o.APPLE_PAY_TOKENIZATION.message, details: { originalError: e } })) }) : s.reject(new n(o.APPLE_PAY_PAYMENT_TOKEN_REQUIRED)) }, l.prototype.teardown = function() { return t(this, e(l.prototype)), s.resolve() }, c.exports = r.wrapPrototype(l)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "../lib/analytics": 60, "../lib/braintree-error": 64, "../lib/convert-methods-to-error": 70, "../lib/methods": 83, "../lib/promise": 85, "./errors": 22, "@braintree/wrap-promise": 20 }],
        22: [function(e, t, r) {
            "use strict";
            var i = e("../lib/braintree-error");
            t.exports = { APPLE_PAY_NOT_ENABLED: { type: i.types.MERCHANT, code: "APPLE_PAY_NOT_ENABLED", message: "Apple Pay is not enabled for this merchant." }, APPLE_PAY_VALIDATION_URL_REQUIRED: { type: i.types.MERCHANT, code: "APPLE_PAY_VALIDATION_URL_REQUIRED", message: "performValidation must be called with a validationURL." }, APPLE_PAY_MERCHANT_VALIDATION_NETWORK: { type: i.types.NETWORK, code: "APPLE_PAY_MERCHANT_VALIDATION_NETWORK", message: "A network error occurred when validating the Apple Pay merchant." }, APPLE_PAY_MERCHANT_VALIDATION_FAILED: { type: i.types.MERCHANT, code: "APPLE_PAY_MERCHANT_VALIDATION_FAILED", message: "Make sure you have registered your domain name in the Braintree Control Panel." }, APPLE_PAY_PAYMENT_TOKEN_REQUIRED: { type: i.types.MERCHANT, code: "APPLE_PAY_PAYMENT_TOKEN_REQUIRED", message: "tokenize must be called with a payment token." }, APPLE_PAY_TOKENIZATION: { type: i.types.NETWORK, code: "APPLE_PAY_TOKENIZATION", message: "A network error occurred when processing the Apple Pay payment." } }
        }, { "../lib/braintree-error": 64 }],
        23: [function(e, t, r) {
            "use strict";
            var i = e("../lib/braintree-error"),
                n = e("./apple-pay"),
                a = e("../lib/analytics"),
                o = e("../lib/basic-component-verification"),
                s = e("./errors"),
                l = e("../lib/promise"),
                d = e("@braintree/wrap-promise");
            t.exports = { create: d(function(e) { return o.verify({ name: "Apple Pay", client: e.client }).then(function() { return e.client.getConfiguration().gatewayConfiguration.applePayWeb ? (a.sendEvent(e.client, "applepay.initialized"), new n(e)) : l.reject(new i(s.APPLE_PAY_NOT_ENABLED)) }) }), VERSION: "3.34.0" }
        }, { "../lib/analytics": 60, "../lib/basic-component-verification": 62, "../lib/braintree-error": 64, "../lib/promise": 85, "./apple-pay": 21, "./errors": 22, "@braintree/wrap-promise": 20 }],
        24: [function(e, t, r) {
            "use strict";
            var i = e("@braintree/browser-detection/is-ie"),
                n = e("@braintree/browser-detection/is-ie9");
            t.exports = { isIe: i, isIe9: n }
        }, { "@braintree/browser-detection/is-ie": 4, "@braintree/browser-detection/is-ie9": 6 }],
        25: [function(e, t, r) {
            "use strict";
            var n = e("./request/graphql"),
                a = e("./request"),
                o = e("../lib/is-whitelisted-domain"),
                l = e("../lib/braintree-error"),
                d = e("../lib/convert-to-braintree-error"),
                c = e("../lib/add-metadata"),
                i = e("../lib/promise"),
                s = e("@braintree/wrap-promise"),
                p = e("../lib/once"),
                u = e("../lib/deferred"),
                h = e("../lib/assign").assign,
                y = e("../lib/analytics"),
                m = e("./constants"),
                f = e("./errors"),
                v = e("../lib/errors"),
                b = e("../lib/constants").VERSION,
                g = e("../lib/methods"),
                E = e("../lib/convert-methods-to-error");

            function _(e) {
                var t, r, i;
                if (e = e || {}, t = JSON.stringify(e), !(r = e.gatewayConfiguration)) throw new l(f.CLIENT_MISSING_GATEWAY_CONFIGURATION);
                if (["assetsUrl", "clientApiUrl", "configUrl"].forEach(function(e) { if (e in r && !o(r[e])) throw new l({ type: f.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type, code: f.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code, message: e + " property is on an invalid domain." }) }), this.getConfiguration = function() { return JSON.parse(t) }, this._request = a, this._configuration = this.getConfiguration(), this._clientApiBaseUrl = r.clientApiUrl + "/v1/", (i = r.braintreeApi) && (this._braintreeApi = { baseUrl: i.url + "/", accessToken: i.accessToken }, !o(this._braintreeApi.baseUrl))) throw new l({ type: f.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type, code: f.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code, message: "braintreeApi URL is on an invalid domain." });
                r.graphQL && (this._graphQL = new n({ graphQL: r.graphQL }))
            }
            _.prototype.request = function(n, r) {
                var s = this,
                    e = new i(function(a, o) {
                        var e, t, r, i;
                        if (n.method ? n.endpoint || (e = "options.endpoint") : e = "options.method", e) throw new l({ type: f.CLIENT_OPTION_REQUIRED.type, code: f.CLIENT_OPTION_REQUIRED.code, message: e + " is required when making a request." });
                        if (t = "api" in n ? n.api : "clientApi", i = { method: n.method, graphQL: s._graphQL, timeout: n.timeout, metadata: s._configuration.analyticsMetadata }, "clientApi" === t) r = s._clientApiBaseUrl, i.data = c(s._configuration, n.data);
                        else {
                            if ("braintreeApi" !== t) throw new l({ type: f.CLIENT_OPTION_INVALID.type, code: f.CLIENT_OPTION_INVALID.code, message: "options.api is invalid." });
                            if (!s._braintreeApi) throw new l(v.BRAINTREE_API_ACCESS_RESTRICTED);
                            r = s._braintreeApi.baseUrl, i.data = n.data, i.headers = { "Braintree-Version": m.BRAINTREE_API_VERSION_HEADER, Authorization: "Bearer " + s._braintreeApi.accessToken }
                        }
                        i.url = r + n.endpoint, i.sendAnalyticsEvent = function(e) { y.sendEvent(s, e) }, s._request(i, function(e, t, r) {
                            var i, n;
                            (n = function(e, t) { var r; - 1 === e ? r = new l(f.CLIENT_REQUEST_TIMEOUT) : 403 === e ? r = new l(f.CLIENT_AUTHORIZATION_INSUFFICIENT) : 429 === e ? r = new l(f.CLIENT_RATE_LIMITED) : 500 <= e ? r = new l(f.CLIENT_GATEWAY_NETWORK) : (e < 200 || 400 <= e) && (r = d(t, { type: f.CLIENT_REQUEST_ERROR.type, code: f.CLIENT_REQUEST_ERROR.code, message: f.CLIENT_REQUEST_ERROR.message })); if (r) return r.details = r.details || {}, r.details.httpStatus = e, r }(r, e)) ? o(n): (i = h({ _httpStatus: r }, t), a(i))
                        })
                    });
                return "function" == typeof r ? (r = p(u(r)), void e.then(function(e) { r(null, e, e._httpStatus) }).catch(function(e) {
                    var t = e && e.details && e.details.httpStatus;
                    r(e, null, t)
                })) : e
            }, _.prototype.toJSON = function() { return this.getConfiguration() }, _.prototype.getVersion = function() { return b }, _.prototype.teardown = s(function() { return E(this, g(_.prototype)), i.resolve() }), t.exports = _
        }, { "../lib/add-metadata": 59, "../lib/analytics": 60, "../lib/assign": 61, "../lib/braintree-error": 64, "../lib/constants": 69, "../lib/convert-methods-to-error": 70, "../lib/convert-to-braintree-error": 71, "../lib/deferred": 73, "../lib/errors": 76, "../lib/is-whitelisted-domain": 81, "../lib/methods": 83, "../lib/once": 84, "../lib/promise": 85, "./constants": 26, "./errors": 27, "./request": 40, "./request/graphql": 38, "@braintree/wrap-promise": 20 }],
        26: [function(e, t, r) {
            "use strict";
            t.exports = { BRAINTREE_API_VERSION_HEADER: "2017-04-03", BRAINTREE_VERSION: "2018-05-10" }
        }, {}],
        27: [function(e, t, r) {
            "use strict";
            var i = e("../lib/braintree-error");
            t.exports = { CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN: { type: i.types.MERCHANT, code: "CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN" }, CLIENT_OPTION_REQUIRED: { type: i.types.MERCHANT, code: "CLIENT_OPTION_REQUIRED" }, CLIENT_OPTION_INVALID: { type: i.types.MERCHANT, code: "CLIENT_OPTION_INVALID" }, CLIENT_MISSING_GATEWAY_CONFIGURATION: { type: i.types.INTERNAL, code: "CLIENT_MISSING_GATEWAY_CONFIGURATION", message: "Missing gatewayConfiguration." }, CLIENT_INVALID_AUTHORIZATION: { type: i.types.MERCHANT, code: "CLIENT_INVALID_AUTHORIZATION", message: "Authorization is invalid. Make sure your client token or tokenization key is valid." }, CLIENT_GATEWAY_NETWORK: { type: i.types.NETWORK, code: "CLIENT_GATEWAY_NETWORK", message: "Cannot contact the gateway at this time." }, CLIENT_REQUEST_TIMEOUT: { type: i.types.NETWORK, code: "CLIENT_REQUEST_TIMEOUT", message: "Request timed out waiting for a reply." }, CLIENT_REQUEST_ERROR: { type: i.types.NETWORK, code: "CLIENT_REQUEST_ERROR", message: "There was a problem with your request." }, CLIENT_RATE_LIMITED: { type: i.types.MERCHANT, code: "CLIENT_RATE_LIMITED", message: "You are being rate-limited; please try again in a few minutes." }, CLIENT_AUTHORIZATION_INSUFFICIENT: { type: i.types.MERCHANT, code: "CLIENT_AUTHORIZATION_INSUFFICIENT", message: "The authorization used has insufficient privileges." } }
        }, { "../lib/braintree-error": 64 }],
        28: [function(r, i, e) {
            (function(c) {
                "use strict";
                var p = r("../lib/braintree-error"),
                    e = r("../lib/promise"),
                    t = r("@braintree/wrap-promise"),
                    u = r("./request"),
                    h = r("../lib/vendor/uuid"),
                    y = r("../lib/constants"),
                    m = r("../lib/create-authorization-data"),
                    f = r("./errors"),
                    v = r("./request/graphql"),
                    b = r("../lib/is-date-string-before-or-on"),
                    g = r("./constants").BRAINTREE_VERSION;
                i.exports = {
                    getConfiguration: t(function(d) {
                        return new e(function(n, a) {
                            var o, e, s, t, r, i = h(),
                                l = { merchantAppId: c.location.host, platform: y.PLATFORM, sdkVersion: y.VERSION, source: y.SOURCE, integration: y.INTEGRATION, integrationType: y.INTEGRATION, sessionId: i };
                            try { e = m(d.authorization) } catch (e) { return void a(new p(f.CLIENT_INVALID_AUTHORIZATION)) }
                            s = e.attrs, t = e.configUrl, s._meta = l, s.braintreeLibraryVersion = y.BRAINTREE_LIBRARY_VERSION, s.configVersion = "3", r = { url: t, method: "GET", data: s }, s.authorizationFingerprint && e.graphQL && (b(e.graphQL.date, g) && (r.graphQL = new v({ graphQL: { url: e.graphQL.url, features: ["configuration"] } })), r.metadata = l), u(r, function(e, t, r) {
                                var i;
                                if (e) return i = 403 === r ? f.CLIENT_AUTHORIZATION_INSUFFICIENT : f.CLIENT_GATEWAY_NETWORK, void a(new p({ type: i.type, code: i.code, message: i.message, details: { originalError: e } }));
                                o = { authorization: d.authorization, authorizationType: s.tokenizationKey ? "TOKENIZATION_KEY" : "CLIENT_TOKEN", analyticsMetadata: l, gatewayConfiguration: t }, n(o)
                            })
                        })
                    })
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "../lib/braintree-error": 64, "../lib/constants": 69, "../lib/create-authorization-data": 72, "../lib/is-date-string-before-or-on": 79, "../lib/promise": 85, "../lib/vendor/uuid": 89, "./constants": 26, "./errors": 27, "./request": 40, "./request/graphql": 38, "@braintree/wrap-promise": 20 }],
        29: [function(e, t, r) {
            "use strict";
            var i = e("../lib/braintree-error"),
                n = e("./client"),
                a = e("./get-configuration").getConfiguration,
                o = e("../lib/promise"),
                s = e("@braintree/wrap-promise"),
                l = e("../lib/errors"),
                d = {};
            t.exports = { create: s(function(r) { return r.authorization ? d[r.authorization] ? o.resolve(d[r.authorization]) : a(r).then(function(e) { var t; return r.debug && (e.isDebug = !0), t = new n(e), d[r.authorization] = t }) : o.reject(new i({ type: l.INSTANTIATION_OPTION_REQUIRED.type, code: l.INSTANTIATION_OPTION_REQUIRED.code, message: "options.authorization is required when instantiating a client." })) }), VERSION: "3.34.0", _clearCache: function() { d = {} } }
        }, { "../lib/braintree-error": 64, "../lib/errors": 76, "../lib/promise": 85, "./client": 25, "./get-configuration": 28, "@braintree/wrap-promise": 20 }],
        30: [function(e, t, r) {
            "use strict";
            var f = e("../../lib/querystring"),
                v = e("../browser-detection"),
                b = e("../../lib/assign").assign,
                g = e("./prep-body"),
                E = e("./parse-body"),
                _ = e("./xhr"),
                P = _.isAvailable,
                C = e("./graphql/request"),
                T = e("./default-request"),
                A = 1,
                I = 408;

            function w(r, i, n) {
                var a, o, s, e, t, l, d, c = r.url,
                    p = r.graphQL,
                    u = r.timeout,
                    h = _.getRequestObject(),
                    y = n,
                    m = Boolean(p && p.isGraphQLRequest(c, r.data));
                r.headers = b({ "Content-Type": "application/json" }, r.headers), c = (s = m ? new C(r) : new T(r)).getUrl(), e = s.getBody(), t = s.getMethod(), l = s.getHeaders(), "GET" === t && (c = f.queryify(c, e), e = null), P ? h.onreadystatechange = function() {
                    if (4 === h.readyState) {
                        if (0 === h.status && m) return delete r.graphQL, void w(r, i, n);
                        if (d = E(h.responseText), o = s.adaptResponseBody(d), 400 <= (a = s.determineStatus(h.status, d)) || a < 200) {
                            if (m && "unknown_error" === (!(t = d).data && t.errors && t.errors[0] && t.errors[0].extensions && t.errors[0].extensions.errorType)) return delete r.graphQL, void w(r, i, n);
                            if (i < A && ((!(e = a) || e === I) && v.isIe())) return void w(r, ++i, n);
                            y(o || "error", null, a || 500)
                        } else y(null, o, a);
                        var e, t
                    }
                } : (r.headers && (c = f.queryify(c, l)), h.onload = function() { y(null, E(h.responseText), h.status) }, h.onerror = function() { y("error", null, 500) }, h.onprogress = function() {}, h.ontimeout = function() { y("timeout", null, -1) });
                try { h.open(t, c, !0) } catch (e) { if (!m) throw e; return delete r.graphQL, void w(r, i, n) }
                h.timeout = u, P && Object.keys(l).forEach(function(e) { h.setRequestHeader(e, l[e]) });
                try { h.send(g(t, e)) } catch (e) {}
            }
            t.exports = { request: function(e, t) { w(e, 0, t) } }
        }, { "../../lib/assign": 61, "../../lib/querystring": 86, "../browser-detection": 24, "./default-request": 31, "./graphql/request": 39, "./parse-body": 43, "./prep-body": 44, "./xhr": 45 }],
        31: [function(e, t, r) {
            "use strict";

            function i(e) { this._url = e.url, this._data = e.data, this._method = e.method, this._headers = e.headers }
            i.prototype.getUrl = function() { return this._url }, i.prototype.getBody = function() { return this._data }, i.prototype.getMethod = function() { return this._method }, i.prototype.getHeaders = function() { return this._headers }, i.prototype.adaptResponseBody = function(e) { return e }, i.prototype.determineStatus = function(e) { return e }, t.exports = i
        }, {}],
        32: [function(e, t, r) {
            (function(e) {
                "use strict";
                t.exports = function() { return e.navigator.userAgent }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        33: [function(e, t, r) {
            "use strict";
            var o = e("./error"),
                s = e("../../../../lib/assign").assign,
                l = { creditCard: { AMERICAN_EXPRESS: "American Express", DISCOVER: "Discover", INTERNATIONAL_MAESTRO: "Maestro", JCB: "JCB", MASTERCARD: "MasterCard", SOLO: "Solo", UK_MAESTRO: "UK Maestro", UNION_PAY: "UnionPay", VISA: "Visa" }, applePayWeb: { VISA: "visa", MASTERCARD: "mastercard", DISCOVER: "discover", AMERICAN_EXPRESS: "amex" }, visaCheckout: { VISA: "Visa", MASTERCARD: "MasterCard", DISCOVER: "Discover", AMERICAN_EXPRESS: "American Express" }, googlePay: { VISA: "visa", MASTERCARD: "mastercard", DISCOVER: "discover", AMERICAN_EXPRESS: "amex" }, masterpass: { VISA: "visa", MASTERCARD: "master", DISCOVER: "discover", AMERICAN_EXPRESS: "amex", DINERS: "diners", INTERNATIONAL_MAESTRO: "maestro", JCB: "jcb" } };

            function d(e, r) { return e.reduce(function(e, t) { return r.hasOwnProperty(t) ? e.concat(r[t]) : e }, []) }
            t.exports = function(e, t) { return e.data && !e.errors ? (r = e, i = t, a = r.data.clientConfiguration, n = { environment: a.environment.toLowerCase(), clientApiUrl: a.clientApiUrl, assetsUrl: a.assetsUrl, analytics: { url: a.analyticsUrl }, merchantId: a.merchantId, venmo: "off" }, a.supportedFeatures && (n.graphQL = { url: i._graphQL._config.url, features: a.supportedFeatures.map(function(e) { return e.toLowerCase() }) }), a.braintreeApi && (n.braintreeApi = a.braintreeApi), a.applePayWeb && (n.applePayWeb = a.applePayWeb, n.applePayWeb.supportedNetworks = d(a.applePayWeb.supportedCardBrands, l.applePayWeb), delete n.applePayWeb.supportedCardBrands), a.ideal && (n.ideal = a.ideal), a.kount && (n.kount = { kountMerchantId: a.kount.merchantId }), a.creditCard ? (n.challenges = a.creditCard.challenges.map(function(e) { return e.toLowerCase() }), n.creditCards = { supportedCardTypes: d(a.creditCard.supportedCardBrands, l.creditCard) }, n.threeDSecureEnabled = a.creditCard.threeDSecureEnabled) : (n.challenges = [], n.creditCards = { supportedCardTypes: [] }, n.threeDSecureEnabled = !1), a.googlePay && (n.androidPay = { displayName: a.googlePay.displayName, enabled: !0, environment: a.googlePay.environment.toLowerCase(), googleAuthorizationFingerprint: a.googlePay.googleAuthorization, supportedNetworks: d(a.googlePay.supportedCardBrands, l.googlePay) }), a.venmo && (n.payWithVenmo = { merchantId: a.venmo.merchantId, accessToken: a.venmo.accessToken, environment: a.venmo.environment.toLowerCase() }), a.paypal ? (n.paypalEnabled = !0, n.paypal = s({}, a.paypal), n.paypal.currencyIsoCode = n.paypal.currencyCode, n.paypal.environment = n.paypal.environment.toLowerCase(), delete n.paypal.currencyCode) : n.paypalEnabled = !1, a.unionPay && (n.unionPay = { enabled: !0, merchantAccountId: a.unionPay.merchantAccountId }), a.visaCheckout && (n.visaCheckout = { apikey: a.visaCheckout.apiKey, externalClientId: a.visaCheckout.externalClientId, supportedCardTypes: d(a.visaCheckout.supportedCardBrands, l.visaCheckout) }), a.masterpass && (n.masterpass = { merchantCheckoutId: a.masterpass.merchantCheckoutId, supportedNetworks: d(a.masterpass.supportedCardBrands, l.masterpass) }), a.usBankAccount && (n.usBankAccount = { routeId: a.usBankAccount.routeId, plaid: { publicKey: a.usBankAccount.plaidPublicKey } }), n) : o(e); var r, i, n, a }
        }, { "../../../../lib/assign": 61, "./error": 35 }],
        34: [function(e, t, r) {
            "use strict";
            var o = e("./error"),
                s = { AMERICAN_EXPRESS: "American Express", DINERS: "Discover", DISCOVER: "Discover", INTERNATIONAL_MAESTRO: "Maestro", JCB: "JCB", MASTERCARD: "MasterCard", UK_MAESTRO: "Maestro", UNION_PAY: "Union Pay", VISA: "Visa" },
                l = { YES: "Yes", NO: "No", UNKNOWN: "Unknown" };
            t.exports = function(e) { return e.data && !e.errors ? (t = e, r = t.data.tokenizeCreditCard, i = r.creditCard, n = i.last4 ? i.last4.substr(2, 4) : "", a = i.binData, a && (["commercial", "debit", "durbinRegulated", "healthcare", "payroll", "prepaid"].forEach(function(e) { a[e] ? a[e] = l[a[e]] : a[e] = "Unknown" }), ["issuingBank", "countryOfIssuance", "productId"].forEach(function(e) { a[e] || (a[e] = "Unknown") })), { creditCards: [{ binData: a, consumed: !1, description: n ? "ending in " + n : "", nonce: r.token, details: { cardType: s[i.brandCode] || "Unknown", lastFour: i.last4 || "", lastTwo: n }, type: "CreditCard", threeDSecureInfo: null }] }) : o(e); var t, r, i, n, a }
        }, { "./error": 35 }],
        35: [function(e, t, r) {
            "use strict";
            t.exports = function(e) {
                var t, r, i, n, a, o, s = e.errors && e.errors[0] && e.errors[0].extensions && e.errors[0].extensions.errorType;
                return "user_error" === s ? (i = e.errors, n = [], i.forEach(function(e) {
                    ! function e(t, r, i) {
                        var n, a = r.extensions.legacyCode,
                            o = t[0];
                        1 !== t.length ? (i.forEach(function(e) { e.field === o && (n = e) }), n || (n = { field: o, fieldErrors: [] }, i.push(n)), e(t.slice(1), r, n.fieldErrors)) : i.push({ code: a, field: o, message: r.message })
                    }(e.extensions.inputPath.slice(1), e, n)
                }), t = { error: { message: (a = r = n, o = a[0].field, { creditCard: "Credit card is invalid" }[o]) }, fieldErrors: r }) : t = s ? { error: { message: e.errors[0].message }, fieldErrors: [] } : { error: { message: "There was a problem serving your request" }, fieldErrors: [] }, t
            }
        }, {}],
        36: [function(e, t, r) {
            "use strict";
            t.exports = function() { return { query: "query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       privacyUrl       userAgreementUrl       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment     }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }", operationName: "ClientConfiguration" } }
        }, {}],
        37: [function(e, t, r) {
            "use strict";
            var s = e("../../../../lib/assign").assign;

            function i(e) {
                var t = e.creditCard,
                    r = t && t.billingAddress,
                    i = t && t.expirationDate,
                    n = t && (t.expirationMonth || i && i.split("/")[0].trim()),
                    a = t && (t.expirationYear || i && i.split("/")[1].trim()),
                    o = { input: { creditCard: { number: t && t.number, expirationMonth: n, expirationYear: a, cvv: t && t.cvv, cardholderName: t && t.cardholderName }, options: {} } };
                return r && (o.input.creditCard.billingAddress = r), o.input = function(e, t) {
                    var r;
                    e.creditCard && e.creditCard.options && "boolean" == typeof e.creditCard.options.validate ? r = e.creditCard.options.validate : e.authorizationFingerprint && e.tokenizationKey || e.authorizationFingerprint ? r = !0 : e.tokenizationKey && (r = !1);
                    "boolean" == typeof r && (t.options = s({ validate: r }, t.options));
                    return t
                }(e, o.input), o
            }
            t.exports = function(e) { return { query: "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!) {   tokenizeCreditCard(input: $input) {     token     creditCard {       brandCode       last4       binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }   } }", variables: i(e), operationName: "TokenizeCreditCard" } }
        }, { "../../../../lib/assign": 61 }],
        38: [function(e, t, r) {
            "use strict";
            var a = e("../../browser-detection"),
                o = { tokenize_credit_cards: "payment_methods/credit_cards", configuration: "configuration" },
                s = ["creditCard.options.unionPayEnrollment"];

            function i(e) { this._config = e.graphQL }
            i.prototype.getGraphQLEndpoint = function() { return this._config.url }, i.prototype.isGraphQLRequest = function(e, t) { var r, i, n = this.getClientApiPath(e); return !(!this._isGraphQLEnabled() || !n || a.isIe9()) && (r = this._config.features.some(function(e) { return o[e] === n }), i = t, !s.some(function(e) { var t = e.split(".").reduce(function(e, t) { return e && e[t] }, i); return void 0 !== t }) && r) }, i.prototype.getClientApiPath = function(e) { var t, r = e.split("/client_api/v1/"); return 1 < r.length && (t = r[1].split("?")[0]), t }, i.prototype._isGraphQLEnabled = function() { return Boolean(this._config) }, t.exports = i
        }, { "../../browser-detection": 24 }],
        39: [function(e, t, r) {
            "use strict";
            var i = e("../../constants").BRAINTREE_VERSION,
                n = e("../../../lib/assign").assign,
                a = e("./generators/credit-card-tokenization"),
                o = e("./adapters/credit-card-tokenization"),
                s = e("./generators/configuration"),
                l = e("./adapters/configuration"),
                d = { "payment_methods/credit_cards": a, configuration: s },
                c = { "payment_methods/credit_cards": o, configuration: l };

            function p(e) {
                var t = e.graphQL.getClientApiPath(e.url);
                this._graphQL = e.graphQL, this._data = e.data, this._method = e.method, this._headers = e.headers, this._clientSdkMetadata = { source: e.metadata.source, integration: e.metadata.integration, sessionId: e.metadata.sessionId }, this._sendAnalyticsEvent = e.sendAnalyticsEvent || Function.prototype, this._generator = d[t], this._adapter = c[t], this._sendAnalyticsEvent("graphql.init")
            }
            p.prototype.getUrl = function() { return this._graphQL.getGraphQLEndpoint() }, p.prototype.getBody = function() {
                var e = function r(i) {
                        var n = {};
                        Object.keys(i).forEach(function(e) { var t = function(e) { if (-1 === e.indexOf("_")) return e; return e.toLowerCase().replace(/(\_\w)/g, function(e) { return e[1].toUpperCase() }) }(e); "object" == typeof i[e] ? n[t] = r(i[e]) : "number" == typeof i[e] ? n[t] = String(i[e]) : n[t] = i[e] });
                        return n
                    }(this._data),
                    t = this._generator(e),
                    r = n({ clientSdkMetadata: this._clientSdkMetadata }, t);
                return JSON.stringify(r)
            }, p.prototype.getMethod = function() { return "POST" }, p.prototype.getHeaders = function() { var e, t; return this._data.authorizationFingerprint ? (this._sendAnalyticsEvent("graphql.authorization-fingerprint"), e = this._data.authorizationFingerprint) : (this._sendAnalyticsEvent("graphql.tokenization-key"), e = this._data.tokenizationKey), t = { Authorization: "Bearer " + e, "Braintree-Version": i }, n({}, this._headers, t) }, p.prototype.adaptResponseBody = function(e) { return this._adapter(e, this) }, p.prototype.determineStatus = function(e, t) { var r, i, n; return 200 === e ? (i = t.errors && t.errors[0] && t.errors[0].extensions && t.errors[0].extensions.errorType, t.data && !t.errors ? r = 200 : "user_error" === i ? r = 422 : "developer_error" === i ? r = 403 : "unknown_error" === i ? r = 500 : (n = t, r = !i && n.errors[0].message ? 403 : 500)) : r = e || 500, this._sendAnalyticsEvent("graphql.status." + e), this._sendAnalyticsEvent("graphql.determinedStatus." + r), r }, t.exports = p
        }, { "../../../lib/assign": 61, "../../constants": 26, "./adapters/configuration": 33, "./adapters/credit-card-tokenization": 34, "./generators/configuration": 36, "./generators/credit-card-tokenization": 37 }],
        40: [function(e, t, r) {
            "use strict";
            var i, n = e("../../lib/once"),
                a = e("./jsonp-driver"),
                o = e("./ajax-driver"),
                s = e("./get-user-agent"),
                l = e("./is-http");
            t.exports = function(e, t) { t = n(t || Function.prototype), e.method = (e.method || "GET").toUpperCase(), e.timeout = null == e.timeout ? 6e4 : e.timeout, e.data = e.data || {}, null == i && (i = !(l() && /MSIE\s(8|9)/.test(s()))), i ? o.request(e, t) : a.request(e, t) }
        }, { "../../lib/once": 84, "./ajax-driver": 30, "./get-user-agent": 32, "./is-http": 41, "./jsonp-driver": 42 }],
        41: [function(e, t, r) {
            (function(e) {
                "use strict";
                t.exports = function() { return "http:" === e.location.protocol }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        42: [function(e, t, r) {
            (function(v) {
                "use strict";
                var b, g = e("../../lib/vendor/uuid"),
                    E = e("../../lib/querystring"),
                    _ = {};

                function P(t) { try { delete v[t] } catch (e) { v[t] = null } }
                t.exports = {
                    request: function(e, t) {
                        var r, i, n, a, o, s, l, d, c, p, u = "callback_json_" + g().replace(/-/g, ""),
                            h = e.url,
                            y = e.data,
                            m = e.method,
                            f = e.timeout;
                        h = E.queryify(h, y), h = E.queryify(h, { _method: m, callback: u }), i = h, n = u, a = document.createElement("script"), o = !1, a.src = i, a.async = !0, a.onerror = function() { v[n]({ message: "error", status: 500 }) }, a.onload = a.onreadystatechange = function() { o || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (o = !0, a.onload = a.onreadystatechange = null) }, s = r = a, l = t, v[d = u] = function(e) {
                            var t, r = e.status || 500,
                                i = null,
                                n = null;
                            delete e.status, 400 <= r || r < 200 ? i = e : n = e, P(d), (t = s) && t.parentNode && t.parentNode.removeChild(t), clearTimeout(_[d]), l(i, n, r)
                        }, c = f, _[p = u] = setTimeout(function() { _[p] = null, v[p]({ error: "timeout", status: -1 }), v[p] = function() { P(p) } }, c), b || (b = document.getElementsByTagName("head")[0]), b.appendChild(r)
                    }
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "../../lib/querystring": 86, "../../lib/vendor/uuid": 89 }],
        43: [function(e, t, r) {
            "use strict";
            t.exports = function(e) { try { e = JSON.parse(e) } catch (e) {} return e }
        }, {}],
        44: [function(e, t, r) {
            "use strict";
            t.exports = function(e, t) { if ("string" != typeof e) throw new Error("Method must be a string"); return "get" !== e.toLowerCase() && null != t && (t = "string" == typeof t ? t : JSON.stringify(t)), t }
        }, {}],
        45: [function(e, r, t) {
            (function(e) {
                "use strict";
                var t = e.XMLHttpRequest && "withCredentials" in new e.XMLHttpRequest;
                r.exports = { isAvailable: t, getRequestObject: function() { return t ? new XMLHttpRequest : new XDomainRequest } }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        46: [function(e, t, r) {
            "use strict";
            var a = e("../lib/analytics"),
                i = e("../lib/assign").assign,
                n = e("../lib/convert-methods-to-error"),
                o = e("../lib/generate-google-pay-configuration"),
                s = e("../lib/braintree-error"),
                l = e("../lib/methods"),
                d = e("../lib/promise"),
                c = e("@braintree/wrap-promise");

            function p(e) { this._client = e.client, this._braintreeGeneratedPaymentRequestConfiguration = o(this._client.getConfiguration()) }
            p.prototype.createPaymentDataRequest = function(e) { return a.sendEvent(this._client, "google-payment.createPaymentDataRequest"), i({}, this._braintreeGeneratedPaymentRequestConfiguration, e) }, p.prototype.parseResponse = function(i) {
                var n = this._client;
                return d.resolve().then(function() {
                    var e, t = JSON.parse(i.paymentMethodToken.token),
                        r = t.error;
                    return r ? d.reject(r) : (e = t.androidPayCards[0], a.sendEvent(n, "google-payment.parseResponse.succeeded"), d.resolve({ nonce: e.nonce, type: e.type, description: e.description, details: { cardType: e.details.cardType, lastFour: e.details.lastFour, lastTwo: e.details.lastTwo }, binData: e.binData }))
                }).catch(function(e) { return a.sendEvent(n, "google-payment.parseResponse.failed"), d.reject(new s({ code: "GOOGLE_PAYMENT_GATEWAY_ERROR", message: "There was an error when tokenizing the Google Pay payment method.", type: s.types.UNKNOWN, details: { originalError: e } })) })
            }, p.prototype.teardown = function() { return n(this, l(p.prototype)), d.resolve() }, t.exports = c.wrapPrototype(p)
        }, { "../lib/analytics": 60, "../lib/assign": 61, "../lib/braintree-error": 64, "../lib/convert-methods-to-error": 70, "../lib/generate-google-pay-configuration": 78, "../lib/methods": 83, "../lib/promise": 85, "@braintree/wrap-promise": 20 }],
        47: [function(e, t, r) {
            "use strict";
            var i = e("../lib/basic-component-verification"),
                n = e("../lib/braintree-error"),
                a = e("./google-payment"),
                o = e("../lib/promise"),
                s = e("@braintree/wrap-promise");
            t.exports = { create: s(function(e) { return i.verify({ name: "Google Pay", client: e.client }).then(function() { return e.client.getConfiguration().gatewayConfiguration.androidPay ? new a(e) : o.reject(new n({ type: n.types.MERCHANT, code: "GOOGLE_PAYMENT_NOT_ENABLED", message: "Google Pay is not enabled for this merchant." })) }) }), VERSION: "3.34.0" }
        }, { "../lib/basic-component-verification": 62, "../lib/braintree-error": 64, "../lib/promise": 85, "./google-payment": 46, "@braintree/wrap-promise": 20 }],
        48: [function(e, t, r) {
            "use strict";
            var a = e("../../lib/braintree-error"),
                o = e("../shared/errors"),
                s = e("../shared/constants").whitelistedAttributes;
            t.exports = function(e, t) { var r; return s.hasOwnProperty(e) ? null == t || (i = e, n = t, "string" === s[i] ? "string" == typeof n || "number" == typeof n : "boolean" === s[i] && ("true" === String(n) || "false" === String(n))) || (r = new a({ type: o.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type, code: o.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code, message: 'Value "' + t + '" is not allowed for "' + e + '" attribute.' })) : r = new a({ type: o.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type, code: o.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code, message: 'The "' + e + '" attribute is not supported in Hosted Fields.' }), r; var i, n }
        }, { "../../lib/braintree-error": 64, "../shared/constants": 55, "../shared/errors": 56 }],
        49: [function(e, t, r) {
            "use strict";
            var i = e("../shared/constants"),
                n = e("../../lib/use-min");
            t.exports = function(e, t, r) { return e + "/web/" + i.VERSION + "/html/hosted-fields-frame" + n(r) + ".html#" + t }
        }, { "../../lib/use-min": 87, "../shared/constants": 55 }],
        50: [function(e, t, r) {
            (function(n) {
                "use strict";
                var a = e("../shared/constants").whitelistedStyles;
                t.exports = function(e) {
                    var r, t = document.createElement("input"),
                        i = {};
                    return "." === e[0] && (e = e.substring(1)), t.className = e, t.style.display = "none !important", t.style.position = "fixed !important", t.style.left = "-99999px !important", t.style.top = "-99999px !important", n.document.body.appendChild(t), r = n.getComputedStyle(t), a.forEach(function(e) {
                        var t = r[e];
                        t && (i[e] = t)
                    }), n.document.body.removeChild(t), i
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "../shared/constants": 55 }],
        51: [function(r, a, e) {
            (function(d) {
                "use strict";
                var e = r("../../lib/assign").assign,
                    c = r("../../lib/destructor"),
                    p = r("../../lib/classlist"),
                    u = r("@braintree/iframer"),
                    h = r("../../lib/bus"),
                    y = r("../../lib/braintree-error"),
                    m = r("./compose-url"),
                    f = r("./get-styles-from-class"),
                    v = r("../shared/constants"),
                    b = r("../shared/errors"),
                    g = r("../../lib/constants").INTEGRATION_TIMEOUT_MS,
                    E = r("../../lib/vendor/uuid"),
                    s = r("../shared/find-parent-tags"),
                    l = r("../shared/browser-detection"),
                    _ = v.events,
                    P = r("../../lib/event-emitter"),
                    C = r("./inject-frame"),
                    T = r("../../lib/analytics"),
                    i = v.whitelistedFields,
                    A = r("../../lib/methods"),
                    I = r("../../lib/convert-methods-to-error"),
                    w = r("../../lib/errors"),
                    N = r("../shared/get-card-types"),
                    n = r("./attribute-validation-error"),
                    o = r("../../lib/promise"),
                    t = r("@braintree/wrap-promise");

                function D(a) {
                    return function(e) {
                        var t, r = e.merchantPayload,
                            i = r.emittedBy,
                            n = a[i].containerElement;
                        Object.keys(r.fields).forEach(function(e) { r.fields[e].container = a[e].containerElement }), t = r.fields[i], "blur" === e.type && function(e) {
                            var t;
                            if (!l.isIos()) return;
                            document.activeElement === document.body && ((t = e.querySelector("input")) || ((t = document.createElement("input")).type = "button", t.style.height = "0px", t.style.width = "0px", t.style.opacity = "0", t.style.padding = "0", t.style.position = "absolute", t.style.left = "-200%", t.style.top = "0px", e.insertBefore(t, e.firstChild)), t.focus(), t.blur())
                        }(n), p.toggle(n, v.externalClasses.FOCUSED, t.isFocused), p.toggle(n, v.externalClasses.VALID, t.isValid), p.toggle(n, v.externalClasses.INVALID, !t.isPotentiallyValid), this._state = { cards: r.cards, fields: r.fields }, this._emit(e.type, r)
                    }
                }

                function F(n) {
                    var t, a, i = this,
                        o = {},
                        r = e({}, n),
                        s = 0,
                        l = E();
                    if (a = n.client.getConfiguration(), !n.fields) throw new y({ type: w.INSTANTIATION_OPTION_REQUIRED.type, code: w.INSTANTIATION_OPTION_REQUIRED.code, message: "options.fields is required when instantiating Hosted Fields." });
                    P.call(this), this._injectedNodes = [], this._destructor = new c, this._fields = o, this._state = { fields: {}, cards: N("") }, this._bus = new h({ channel: l, merchantUrl: location.href }), this._destructor.registerFunctionForTeardown(function() { i._bus.teardown() }), this._client = n.client, T.sendEvent(this._client, "custom.hosted-fields.initialized"), Object.keys(n.fields).forEach(function(e) {
                        var t, r, i;
                        if (!v.whitelistedFields.hasOwnProperty(e)) throw new y({ type: b.HOSTED_FIELDS_INVALID_FIELD_KEY.type, code: b.HOSTED_FIELDS_INVALID_FIELD_KEY.code, message: '"' + e + '" is not a valid field.' });
                        if (t = n.fields[e], !(r = document.querySelector(t.selector))) throw new y({ type: b.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.type, code: b.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.code, message: b.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.message, details: { fieldSelector: t.selector, fieldKey: e } });
                        if (r.querySelector('iframe[name^="braintree-"]')) throw new y({ type: b.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.type, code: b.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.code, message: b.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.message, details: { fieldSelector: t.selector, fieldKey: e } });
                        if (t.maxlength && "number" != typeof t.maxlength) throw new y({ type: b.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type, code: b.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code, message: "The value for maxlength must be a number.", details: { fieldKey: e } });
                        if (t.minlength && "number" != typeof t.minlength) throw new y({ type: b.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type, code: b.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code, message: "The value for minlength must be a number.", details: { fieldKey: e } });
                        i = u({ type: e, name: "braintree-hosted-field-" + e, style: v.defaultIFrameStyle }), this._injectedNodes = this._injectedNodes.concat(C(i, r)), this._setupLabelFocus(e, r), o[e] = { frameElement: i, containerElement: r }, s++, this._state.fields[e] = { isEmpty: !0, isValid: !1, isPotentiallyValid: !0, isFocused: !1, container: r }, setTimeout(function() { d.navigator && d.navigator.vendor && -1 === d.navigator.vendor.indexOf("Apple") && (i.src = "about:blank"), setTimeout(function() { i.src = m(a.gatewayConfiguration.assetsUrl, l, a.isDebug) }, 0) }, 0)
                    }.bind(this)), n.fields.number && n.fields.number.rejectUnsupportedCards && (r.supportedCardTypes = a.gatewayConfiguration.creditCards.supportedCardTypes), r.styles && Object.keys(r.styles).forEach(function(e) { var t = r.styles[e]; "string" == typeof t && (r.styles[e] = f(t)) }), t = setTimeout(function() { T.sendEvent(i._client, "custom.hosted-fields.load.timed-out"), i._emit("timeout") }, g), this._bus.on(_.FRAME_READY, function(e) { 0 === --s && (clearTimeout(t), e(r), i._emit("ready")) }), this._bus.on(_.INPUT_EVENT, D(o).bind(this)), this._destructor.registerFunctionForTeardown(function() { var e, t, r; for (e = 0; e < i._injectedNodes.length; e++)(r = (t = i._injectedNodes[e]).parentNode).removeChild(t), p.remove(r, v.externalClasses.FOCUSED, v.externalClasses.INVALID, v.externalClasses.VALID) }), this._destructor.registerFunctionForTeardown(function() {
                        var e = A(F.prototype).concat(A(P.prototype));
                        I(i, e)
                    })
                }(F.prototype = Object.create(P.prototype, { constructor: F }))._setupLabelFocus = function(e, t) {
                    var r, i, n = l.isIos(),
                        a = this._bus;
                    if (!n && null != t.id) {
                        for (r = (r = Array.prototype.slice.call(document.querySelectorAll('label[for="' + t.id + '"]'))).concat(s(t, "label")), i = 0; i < r.length; i++) r[i].addEventListener("click", o, !1);
                        this._destructor.registerFunctionForTeardown(function() { for (i = 0; i < r.length; i++) r[i].removeEventListener("click", o, !1) })
                    }

                    function o() { a.emit(_.TRIGGER_INPUT_FOCUS, e) }
                }, F.prototype._attachInvalidFieldContainersToError = function(t) { t.details && t.details.invalidFieldKeys && 0 < t.details.invalidFieldKeys.length && (t.details.invalidFields = {}, t.details.invalidFieldKeys.forEach(function(e) { t.details.invalidFields[e] = this._fields[e].containerElement }.bind(this))) }, F.prototype.teardown = function() { var i = this; return new o(function(t, r) { i._destructor.teardown(function(e) { T.sendEvent(i._client, "custom.hosted-fields.teardown-completed"), e ? r(e) : t() }) }) }, F.prototype.tokenize = function(e) {
                    var a = this;
                    return e || (e = {}), new o(function(i, n) {
                        a._bus.emit(_.TOKENIZATION_REQUEST, e, function(e) {
                            var t = e[0],
                                r = e[1];
                            t ? (a._attachInvalidFieldContainersToError(t), n(new y(t))) : i(r)
                        })
                    })
                }, F.prototype.addClass = function(e, t) { var r; return i.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(_.ADD_CLASS, e, t) : r = new y({ type: b.HOSTED_FIELDS_FIELD_NOT_PRESENT.type, code: b.HOSTED_FIELDS_FIELD_NOT_PRESENT.code, message: 'Cannot add class to "' + e + '" field because it is not part of the current Hosted Fields options.' }) : r = new y({ type: b.HOSTED_FIELDS_FIELD_INVALID.type, code: b.HOSTED_FIELDS_FIELD_INVALID.code, message: '"' + e + '" is not a valid field. You must use a valid field option when adding a class.' }), r ? o.reject(r) : o.resolve() }, F.prototype.removeClass = function(e, t) { var r; return i.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(_.REMOVE_CLASS, e, t) : r = new y({ type: b.HOSTED_FIELDS_FIELD_NOT_PRESENT.type, code: b.HOSTED_FIELDS_FIELD_NOT_PRESENT.code, message: 'Cannot remove class from "' + e + '" field because it is not part of the current Hosted Fields options.' }) : r = new y({ type: b.HOSTED_FIELDS_FIELD_INVALID.type, code: b.HOSTED_FIELDS_FIELD_INVALID.code, message: '"' + e + '" is not a valid field. You must use a valid field option when removing a class.' }), r ? o.reject(r) : o.resolve() }, F.prototype.setAttribute = function(e) { var t, r; return i.hasOwnProperty(e.field) ? this._fields.hasOwnProperty(e.field) ? (t = n(e.attribute, e.value)) ? r = t : this._bus.emit(_.SET_ATTRIBUTE, e.field, e.attribute, e.value) : r = new y({ type: b.HOSTED_FIELDS_FIELD_NOT_PRESENT.type, code: b.HOSTED_FIELDS_FIELD_NOT_PRESENT.code, message: 'Cannot set attribute for "' + e.field + '" field because it is not part of the current Hosted Fields options.' }) : r = new y({ type: b.HOSTED_FIELDS_FIELD_INVALID.type, code: b.HOSTED_FIELDS_FIELD_INVALID.code, message: '"' + e.field + '" is not a valid field. You must use a valid field option when setting an attribute.' }), r ? o.reject(r) : o.resolve() }, F.prototype.setMessage = function(e) { this._bus.emit(_.SET_MESSAGE, e.field, e.message) }, F.prototype.removeAttribute = function(e) { var t, r; return i.hasOwnProperty(e.field) ? this._fields.hasOwnProperty(e.field) ? (t = n(e.attribute)) ? r = t : this._bus.emit(_.REMOVE_ATTRIBUTE, e.field, e.attribute) : r = new y({ type: b.HOSTED_FIELDS_FIELD_NOT_PRESENT.type, code: b.HOSTED_FIELDS_FIELD_NOT_PRESENT.code, message: 'Cannot remove attribute for "' + e.field + '" field because it is not part of the current Hosted Fields options.' }) : r = new y({ type: b.HOSTED_FIELDS_FIELD_INVALID.type, code: b.HOSTED_FIELDS_FIELD_INVALID.code, message: '"' + e.field + '" is not a valid field. You must use a valid field option when removing an attribute.' }), r ? o.reject(r) : o.resolve() }, F.prototype.setPlaceholder = function(e, t) { return this.setAttribute({ field: e, attribute: "placeholder", value: t }) }, F.prototype.clear = function(e) { var t; return i.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(_.CLEAR_FIELD, e) : t = new y({ type: b.HOSTED_FIELDS_FIELD_NOT_PRESENT.type, code: b.HOSTED_FIELDS_FIELD_NOT_PRESENT.code, message: 'Cannot clear "' + e + '" field because it is not part of the current Hosted Fields options.' }) : t = new y({ type: b.HOSTED_FIELDS_FIELD_INVALID.type, code: b.HOSTED_FIELDS_FIELD_INVALID.code, message: '"' + e + '" is not a valid field. You must use a valid field option when clearing a field.' }), t ? o.reject(t) : o.resolve() }, F.prototype.focus = function(e) { var t; return i.hasOwnProperty(e) ? this._fields.hasOwnProperty(e) ? this._bus.emit(_.TRIGGER_INPUT_FOCUS, e) : t = new y({ type: b.HOSTED_FIELDS_FIELD_NOT_PRESENT.type, code: b.HOSTED_FIELDS_FIELD_NOT_PRESENT.code, message: 'Cannot focus "' + e + '" field because it is not part of the current Hosted Fields options.' }) : t = new y({ type: b.HOSTED_FIELDS_FIELD_INVALID.type, code: b.HOSTED_FIELDS_FIELD_INVALID.code, message: '"' + e + '" is not a valid field. You must use a valid field option when focusing a field.' }), t ? o.reject(t) : o.resolve() }, F.prototype.getState = function() { return this._state }, a.exports = t.wrapPrototype(F)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "../../lib/analytics": 60, "../../lib/assign": 61, "../../lib/braintree-error": 64, "../../lib/bus": 67, "../../lib/classlist": 68, "../../lib/constants": 69, "../../lib/convert-methods-to-error": 70, "../../lib/destructor": 74, "../../lib/errors": 76, "../../lib/event-emitter": 77, "../../lib/methods": 83, "../../lib/promise": 85, "../../lib/vendor/uuid": 89, "../shared/browser-detection": 54, "../shared/constants": 55, "../shared/errors": 56, "../shared/find-parent-tags": 57, "../shared/get-card-types": 58, "./attribute-validation-error": 48, "./compose-url": 49, "./get-styles-from-class": 50, "./inject-frame": 52, "@braintree/iframer": 13, "@braintree/wrap-promise": 20 }],
        52: [function(e, t, r) {
            "use strict";
            t.exports = function(e, t) {
                var r = document.createElement("div"),
                    i = document.createDocumentFragment();
                return r.style.clear = "both", i.appendChild(e), i.appendChild(r), t.appendChild(i), [e, r]
            }
        }, {}],
        53: [function(e, t, r) {
            "use strict";
            var i = e("./external/hosted-fields"),
                n = e("../lib/basic-component-verification"),
                a = e("./shared/errors"),
                o = e("restricted-input/supports-input-formatting"),
                s = e("@braintree/wrap-promise"),
                l = e("../lib/braintree-error"),
                d = e("../lib/promise");
            t.exports = { supportsInputFormatting: o, create: s(function(e) { return n.verify({ name: "Hosted Fields", client: e.client }).then(function() { var r = new i(e); return new d(function(e, t) { r.on("ready", function() { e(r) }), r.on("timeout", function() { t(new l(a.HOSTED_FIELDS_TIMEOUT)) }) }) }) }), VERSION: "3.34.0" }
        }, { "../lib/basic-component-verification": 62, "../lib/braintree-error": 64, "../lib/promise": 85, "./external/hosted-fields": 51, "./shared/errors": 56, "@braintree/wrap-promise": 20, "restricted-input/supports-input-formatting": 110 }],
        54: [function(e, t, r) {
            "use strict";
            t.exports = { isIe9: e("@braintree/browser-detection/is-ie9"), isIos: e("@braintree/browser-detection/is-ios"), isIosWebview: e("@braintree/browser-detection/is-ios-webview") }
        }, { "@braintree/browser-detection/is-ie9": 6, "@braintree/browser-detection/is-ios": 10, "@braintree/browser-detection/is-ios-webview": 9 }],
        55: [function(e, t, r) {
            "use strict";
            var i = e("../../lib/enumerate"),
                n = e("./errors"),
                a = { VERSION: "3.34.0", maxExpirationYearAge: 19, externalEvents: { FOCUS: "focus", BLUR: "blur", EMPTY: "empty", NOT_EMPTY: "notEmpty", VALIDITY_CHANGE: "validityChange", CARD_TYPE_CHANGE: "cardTypeChange" }, defaultMaxLengths: { number: 19, postalCode: 8, expirationDate: 7, expirationMonth: 2, expirationYear: 4, cvv: 3 }, externalClasses: { FOCUSED: "braintree-hosted-fields-focused", INVALID: "braintree-hosted-fields-invalid", VALID: "braintree-hosted-fields-valid" }, defaultIFrameStyle: { border: "none", width: "100%", height: "100%", float: "left" }, tokenizationErrorCodes: { 81724: n.HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE, 81736: n.HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED }, whitelistedStyles: ["-moz-appearance", "-moz-osx-font-smoothing", "-moz-tap-highlight-color", "-moz-transition", "-webkit-appearance", "-webkit-font-smoothing", "-webkit-tap-highlight-color", "-webkit-transition", "appearance", "color", "direction", "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-variant-alternates", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-weight", "letter-spacing", "line-height", "padding", "opacity", "outline", "text-shadow", "transition"], whitelistedFields: { number: { name: "credit-card-number", label: "Credit Card Number" }, cvv: { name: "cvv", label: "CVV" }, expirationDate: { name: "expiration", label: "Expiration Date" }, expirationMonth: { name: "expiration-month", label: "Expiration Month" }, expirationYear: { name: "expiration-year", label: "Expiration Year" }, postalCode: { name: "postal-code", label: "Postal Code" } }, whitelistedAttributes: { "aria-invalid": "boolean", "aria-required": "boolean", disabled: "boolean", placeholder: "string" }, autocompleteMappings: { "credit-card-number": "cc-number", expiration: "cc-exp", "expiration-month": "cc-exp-month", "expiration-year": "cc-exp-year", cvv: "cc-csc", "postal-code": "billing postal-code" } };
            a.events = i(["FRAME_READY", "VALIDATE_STRICT", "CONFIGURATION", "TOKENIZATION_REQUEST", "INPUT_EVENT", "TRIGGER_INPUT_FOCUS", "ADD_CLASS", "REMOVE_CLASS", "SET_ATTRIBUTE", "REMOVE_ATTRIBUTE", "CLEAR_FIELD", "AUTOFILL_EXPIRATION_DATE", "SET_MESSAGE"], "hosted-fields:"), t.exports = a
        }, { "../../lib/enumerate": 75, "./errors": 56 }],
        56: [function(e, t, r) {
            "use strict";
            var i = e("../../lib/braintree-error");
            t.exports = { HOSTED_FIELDS_TIMEOUT: { type: i.types.UNKNOWN, code: "HOSTED_FIELDS_TIMEOUT", message: "Hosted Fields timed out when attempting to set up." }, HOSTED_FIELDS_INVALID_FIELD_KEY: { type: i.types.MERCHANT, code: "HOSTED_FIELDS_INVALID_FIELD_KEY" }, HOSTED_FIELDS_INVALID_FIELD_SELECTOR: { type: i.types.MERCHANT, code: "HOSTED_FIELDS_INVALID_FIELD_SELECTOR", message: "Selector does not reference a valid DOM node." }, HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME: { type: i.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME", message: "Element already contains a Braintree iframe." }, HOSTED_FIELDS_FIELD_INVALID: { type: i.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_INVALID" }, HOSTED_FIELDS_FIELD_NOT_PRESENT: { type: i.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_NOT_PRESENT" }, HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR: { type: i.types.NETWORK, code: "HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR", message: "A tokenization network error occurred." }, HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: { type: i.types.CUSTOMER, code: "HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE", message: "This credit card already exists in the merchant's vault." }, HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: { type: i.types.CUSTOMER, code: "HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED", message: "CVV verification failed during tokenization." }, HOSTED_FIELDS_FAILED_TOKENIZATION: { type: i.types.CUSTOMER, code: "HOSTED_FIELDS_FAILED_TOKENIZATION", message: "The supplied card data failed tokenization." }, HOSTED_FIELDS_FIELDS_EMPTY: { type: i.types.CUSTOMER, code: "HOSTED_FIELDS_FIELDS_EMPTY", message: "All fields are empty. Cannot tokenize empty card fields." }, HOSTED_FIELDS_FIELDS_INVALID: { type: i.types.CUSTOMER, code: "HOSTED_FIELDS_FIELDS_INVALID", message: "Some payment input fields are invalid. Cannot tokenize invalid card fields." }, HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED: { type: i.types.MERCHANT, code: "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED" }, HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED: { type: i.types.MERCHANT, code: "HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED" }, HOSTED_FIELDS_FIELD_PROPERTY_INVALID: { type: i.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_PROPERTY_INVALID" } }
        }, { "../../lib/braintree-error": 64 }],
        57: [function(e, t, r) {
            "use strict";
            t.exports = function(e, t) { for (var r = e.parentNode, i = []; null != r;) null != r.tagName && r.tagName.toLowerCase() === t && i.push(r), r = r.parentNode; return i }
        }, {}],
        58: [function(e, t, r) {
            "use strict";
            var i = e("credit-card-type");
            i.removeCard(i.types.MIR), t.exports = i
        }, { "credit-card-type": 105 }],
        59: [function(e, t, r) {
            "use strict";
            var o = e("./create-authorization-data"),
                s = e("./json-clone"),
                l = e("./constants");
            t.exports = function(e, t) {
                var r, i = t ? s(t) : {},
                    n = o(e.authorization).attrs,
                    a = s(e.analyticsMetadata);
                for (r in i.braintreeLibraryVersion = l.BRAINTREE_LIBRARY_VERSION, i._meta) i._meta.hasOwnProperty(r) && (a[r] = i._meta[r]);
                return i._meta = a, n.tokenizationKey ? i.tokenizationKey = n.tokenizationKey : i.authorizationFingerprint = n.authorizationFingerprint, i
            }
        }, { "./constants": 69, "./create-authorization-data": 72, "./json-clone": 82 }],
        60: [function(e, t, r) {
            "use strict";
            var d = e("./constants"),
                c = e("./add-metadata");
            t.exports = {
                sendEvent: function(e, t, r) {
                    var i, n = e.getConfiguration(),
                        a = e._request,
                        o = (i = Date.now(), Math.floor(i / 1e3)),
                        s = n.gatewayConfiguration.analytics.url,
                        l = { analytics: [{ kind: d.ANALYTICS_PREFIX + t, timestamp: o }] };
                    a({ url: s, method: "post", data: c(n, l), timeout: d.ANALYTICS_REQUEST_TIMEOUT_MS }, r)
                }
            }
        }, { "./add-metadata": 59, "./constants": 69 }],
        61: [function(e, t, r) {
            "use strict";
            var i = "function" == typeof Object.assign ? Object.assign : n;

            function n(e) {
                var t, r, i;
                for (t = 1; t < arguments.length; t++)
                    for (i in r = arguments[t]) r.hasOwnProperty(i) && (e[i] = r[i]);
                return e
            }
            t.exports = { assign: i, _assign: n }
        }, {}],
        62: [function(e, t, r) {
            "use strict";
            var n = e("./braintree-error"),
                a = e("./promise"),
                o = e("./errors");
            t.exports = { verify: function(e) { var t, r, i; return e ? (i = e.name, null == (t = e.client) ? a.reject(new n({ type: o.INSTANTIATION_OPTION_REQUIRED.type, code: o.INSTANTIATION_OPTION_REQUIRED.code, message: "options.client is required when instantiating " + i + "." })) : "3.34.0" !== (r = t.getVersion()) ? a.reject(new n({ type: o.INCOMPATIBLE_VERSIONS.type, code: o.INCOMPATIBLE_VERSIONS.code, message: "Client (version " + r + ") and " + i + " (version 3.34.0) components must be from the same SDK version." })) : a.resolve()) : a.reject(new n({ type: o.INVALID_USE_OF_INTERNAL_FUNCTION.type, code: o.INVALID_USE_OF_INTERNAL_FUNCTION.code, message: "Options must be passed to basicComponentVerification function." })) } }
        }, { "./braintree-error": 64, "./errors": 76, "./promise": 85 }],
        63: [function(e, t, r) {
            "use strict";
            var d = e("./once");
            t.exports = function(e, t) {
                var r, i, n, a = e.length,
                    o = a,
                    s = d(t);
                if (0 !== a)
                    for (r = 0; r < a; r++) i = e[r], n = l, 0 === i.length ? (i(), n(null)) : i(n);
                else s(null);

                function l(e) { e ? s(e) : 0 === (o -= 1) && s(null) }
            }
        }, { "./once": 84 }],
        64: [function(e, t, r) {
            "use strict";
            var i = e("./enumerate");

            function n(e) {
                if (!n.types.hasOwnProperty(e.type)) throw new Error(e.type + " is not a valid type.");
                if (!e.code) throw new Error("Error code required.");
                if (!e.message) throw new Error("Error message required.");
                this.name = "BraintreeError", this.code = e.code, this.message = e.message, this.type = e.type, this.details = e.details
            }((n.prototype = Object.create(Error.prototype)).constructor = n).types = i(["CUSTOMER", "MERCHANT", "NETWORK", "INTERNAL", "UNKNOWN"]), n.findRootError = function(e) { return e instanceof n && e.details && e.details.originalError ? n.findRootError(e.details.originalError) : e }, t.exports = n
        }, { "./enumerate": 75 }],
        65: [function(e, t, r) {
            "use strict";
            var n = e("../is-whitelisted-domain");
            t.exports = { checkOrigin: function(e, t) { var r, i = document.createElement("a"); return i.href = t, r = "https:" === i.protocol ? i.host.replace(/:443$/, "") : "http:" === i.protocol ? i.host.replace(/:80$/, "") : i.host, i.protocol + "//" + r === e || (i.href = e, n(e)) } }
        }, { "../is-whitelisted-domain": 81 }],
        66: [function(e, t, r) {
            "use strict";
            var i = e("../enumerate");
            t.exports = i(["CONFIGURATION_REQUEST"], "bus:")
        }, { "../enumerate": 75 }],
        67: [function(e, t, r) {
            "use strict";
            var o = e("framebus"),
                i = e("./events"),
                s = e("./check-origin").checkOrigin,
                n = e("../braintree-error");

            function a(e) {
                if (e = e || {}, this.channel = e.channel, !this.channel) throw new n({ type: n.types.INTERNAL, code: "MISSING_CHANNEL_ID", message: "Channel ID must be specified." });
                this.merchantUrl = e.merchantUrl, this._isDestroyed = !1, this._isVerbose = !1, this._listeners = [], this._log("new bus on channel " + this.channel, [location.href])
            }
            a.prototype.on = function(e, t) {
                var r, i, n = t,
                    a = this;
                this._isDestroyed || (this.merchantUrl && (n = function() { s(this.origin, a.merchantUrl) && t.apply(this, arguments) }), r = this._namespaceEvent(e), (i = Array.prototype.slice.call(arguments))[0] = r, i[1] = n, this._log("on", i), o.on.apply(o, i), this._listeners.push({ eventName: e, handler: n, originalHandler: t }))
            }, a.prototype.emit = function(e) {
                var t;
                this._isDestroyed || ((t = Array.prototype.slice.call(arguments))[0] = this._namespaceEvent(e), this._log("emit", t), o.emit.apply(o, t))
            }, a.prototype._offDirect = function(e) {
                var t = Array.prototype.slice.call(arguments);
                this._isDestroyed || (t[0] = this._namespaceEvent(e), this._log("off", t), o.off.apply(o, t))
            }, a.prototype.off = function(e, t) {
                var r, i, n = t;
                if (!this._isDestroyed) {
                    if (this.merchantUrl)
                        for (r = 0; r < this._listeners.length; r++)(i = this._listeners[r]).originalHandler === t && (n = i.handler);
                    this._offDirect(e, n)
                }
            }, a.prototype._namespaceEvent = function(e) { return ["braintree", this.channel, e].join(":") }, a.prototype.teardown = function() {
                var e, t;
                for (t = 0; t < this._listeners.length; t++) e = this._listeners[t], this._offDirect(e.eventName, e.handler);
                this._listeners.length = 0, this._isDestroyed = !0
            }, a.prototype._log = function(e, t) { this._isVerbose && console.log(e, t) }, a.events = i, t.exports = a
        }, { "../braintree-error": 64, "./check-origin": 65, "./events": 66, framebus: 106 }],
        68: [function(e, t, r) {
            "use strict";

            function i(e) { return e.className.trim().split(/\s+/) }

            function n(e) {
                var t = Array.prototype.slice.call(arguments, 1),
                    r = i(e).filter(function(e) { return -1 === t.indexOf(e) }).concat(t).join(" ");
                e.className = r
            }

            function a(e) {
                var t = Array.prototype.slice.call(arguments, 1),
                    r = i(e).filter(function(e) { return -1 === t.indexOf(e) }).join(" ");
                e.className = r
            }
            t.exports = { add: n, remove: a, toggle: function(e, t, r) { r ? n(e, t) : a(e, t) } }
        }, {}],
        69: [function(e, t, r) {
            "use strict";
            t.exports = { ANALYTICS_PREFIX: "web.", ANALYTICS_REQUEST_TIMEOUT_MS: 2e3, INTEGRATION_TIMEOUT_MS: 6e4, VERSION: "3.34.0", INTEGRATION: "custom", SOURCE: "client", PLATFORM: "web", BRAINTREE_LIBRARY_VERSION: "braintree/web/3.34.0" }
        }, {}],
        70: [function(e, t, r) {
            "use strict";
            var i = e("./braintree-error"),
                n = e("./errors");
            t.exports = function(t, e) { e.forEach(function(e) { t[e] = function() { throw new i({ type: n.METHOD_CALLED_AFTER_TEARDOWN.type, code: n.METHOD_CALLED_AFTER_TEARDOWN.code, message: e + " cannot be called after teardown." }) } }) }
        }, { "./braintree-error": 64, "./errors": 76 }],
        71: [function(e, t, r) {
            "use strict";
            var i = e("./braintree-error");
            t.exports = function(e, t) { return e instanceof i ? e : new i({ type: t.type, code: t.code, message: t.message, details: { originalError: e } }) }
        }, { "./braintree-error": 64 }],
        72: [function(e, t, r) {
            "use strict";
            var o = e("../lib/vendor/polyfill").atob,
                s = { production: "https://api.braintreegateway.com:443", sandbox: "https://api.sandbox.braintreegateway.com:443" };
            t.exports = function(e) { var t, r, i, n, a = { attrs: {}, configUrl: "" }; return /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e) ? (i = e.split("_"), n = i[0], r = { merchantId: i.slice(2).join("_"), environment: n }, a.attrs.tokenizationKey = e, a.configUrl = s[r.environment] + "/merchants/" + r.merchantId + "/client_api/v1/configuration") : (t = JSON.parse(o(e)), a.attrs.authorizationFingerprint = t.authorizationFingerprint, a.configUrl = t.configUrl, a.graphQL = t.graphQL), a }
        }, { "../lib/vendor/polyfill": 88 }],
        73: [function(e, t, r) {
            "use strict";
            t.exports = function(t) {
                return function() {
                    var e = arguments;
                    setTimeout(function() { t.apply(null, e) }, 1)
                }
            }
        }, {}],
        74: [function(e, t, r) {
            "use strict";
            var i = e("./batch-execute-functions");

            function n() { this._teardownRegistry = [], this._isTearingDown = !1 }
            n.prototype.registerFunctionForTeardown = function(e) { "function" == typeof e && this._teardownRegistry.push(e) }, n.prototype.teardown = function(t) { this._isTearingDown ? t(new Error("Destructor is already tearing down")) : (this._isTearingDown = !0, i(this._teardownRegistry, function(e) { this._teardownRegistry = [], this._isTearingDown = !1, "function" == typeof t && t(e) }.bind(this))) }, t.exports = n
        }, { "./batch-execute-functions": 63 }],
        75: [function(e, t, r) {
            "use strict";
            t.exports = function(e, r) { return r = null == r ? "" : r, e.reduce(function(e, t) { return e[t] = r + t, e }, {}) }
        }, {}],
        76: [function(e, t, r) {
            "use strict";
            var i = e("./braintree-error");
            t.exports = { INVALID_USE_OF_INTERNAL_FUNCTION: { type: i.types.INTERNAL, code: "INVALID_USE_OF_INTERNAL_FUNCTION" }, CALLBACK_REQUIRED: { type: i.types.MERCHANT, code: "CALLBACK_REQUIRED" }, INSTANTIATION_OPTION_REQUIRED: { type: i.types.MERCHANT, code: "INSTANTIATION_OPTION_REQUIRED" }, INVALID_OPTION: { type: i.types.MERCHANT, code: "INVALID_OPTION" }, INCOMPATIBLE_VERSIONS: { type: i.types.MERCHANT, code: "INCOMPATIBLE_VERSIONS" }, METHOD_CALLED_AFTER_TEARDOWN: { type: i.types.MERCHANT, code: "METHOD_CALLED_AFTER_TEARDOWN" }, BRAINTREE_API_ACCESS_RESTRICTED: { type: i.types.MERCHANT, code: "BRAINTREE_API_ACCESS_RESTRICTED", message: "Your access is restricted and cannot use this part of the Braintree API." } }
        }, { "./braintree-error": 64 }],
        77: [function(e, t, r) {
            "use strict";

            function i() { this._events = {} }
            i.prototype.on = function(e, t) { this._events[e] ? this._events[e].push(t) : this._events[e] = [t] }, i.prototype._emit = function(e) {
                var t, r, i = this._events[e];
                if (i)
                    for (r = Array.prototype.slice.call(arguments, 1), t = 0; t < i.length; t++) i[t].apply(null, r)
            }, t.exports = i
        }, {}],
        78: [function(e, t, r) {
            "use strict";
            t.exports = function(e) {
                var t = "production" === e.gatewayConfiguration.environment,
                    r = e.gatewayConfiguration.androidPay,
                    i = e.analyticsMetadata,
                    n = { environment: t ? "PRODUCTION" : "TEST", allowedPaymentMethods: ["CARD", "TOKENIZED_CARD"], paymentMethodTokenizationParameters: { tokenizationType: "PAYMENT_GATEWAY", parameters: { gateway: "braintree", "braintree:merchantId": e.gatewayConfiguration.merchantId, "braintree:authorizationFingerprint": r.googleAuthorizationFingerprint, "braintree:apiVersion": "v1", "braintree:sdkVersion": "3.34.0", "braintree:metadata": JSON.stringify({ source: i.source, integration: i.integration, sessionId: i.sessionId, version: "3.34.0", platform: i.platform }) } }, cardRequirements: { allowedCardNetworks: r.supportedNetworks.map(function(e) { return e.toUpperCase() }) } };
                return "TOKENIZATION_KEY" === e.authorizationType && (n.paymentMethodTokenizationParameters.parameters["braintree:clientKey"] = e.authorization), n
            }
        }, {}],
        79: [function(e, t, r) {
            "use strict";

            function i(e) { var t = e.split("-"); return new Date(t[0], t[1], t[2]) }
            t.exports = function(e, t) { return i(e) <= i(t) }
        }, {}],
        80: [function(e, r, t) {
            (function(t) {
                "use strict";
                r.exports = { isHTTPS: function(e) { return "https:" === (e = e || t.location.protocol) } }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        81: [function(e, t, r) {
            "use strict";
            var i, n = { "paypal.com": 1, "braintreepayments.com": 1, "braintreegateway.com": 1, "braintree-api.com": 1 };
            t.exports = function(e) { var t; return e = e.toLowerCase(), !!/^https:/.test(e) && ((i = i || document.createElement("a")).href = e, t = i.hostname.split(".").slice(-2).join("."), n.hasOwnProperty(t)) }
        }, {}],
        82: [function(e, t, r) {
            "use strict";
            t.exports = function(e) { return JSON.parse(JSON.stringify(e)) }
        }, {}],
        83: [function(e, t, r) {
            "use strict";
            t.exports = function(t) { return Object.keys(t).filter(function(e) { return "function" == typeof t[e] }) }
        }, {}],
        84: [function(e, t, r) { arguments[4][18][0].apply(r, arguments) }, { dup: 18 }],
        85: [function(r, i, e) {
            (function(e) {
                "use strict";
                var t = e.Promise || r("promise-polyfill");
                i.exports = t
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "promise-polyfill": 108 }],
        86: [function(e, r, t) {
            (function(t) {
                "use strict";

                function s(e, t) { var r, i, n, a, o = []; for (n in e) e.hasOwnProperty(n) && (i = e[n], r = t ? (a = e) && "object" == typeof a && "number" == typeof a.length && "[object Array]" === Object.prototype.toString.call(a) ? t + "[]" : t + "[" + n + "]" : n, "object" == typeof i ? o.push(s(i, r)) : o.push(encodeURIComponent(r) + "=" + encodeURIComponent(i))); return o.join("&") }
                r.exports = {
                    parse: function(e) {
                        return e = e || t.location.href, /\?/.test(e) ? e.replace(/#.*$/, "").replace(/^.*\?/, "").split("&").reduce(function(e, t) {
                            var r = t.split("="),
                                i = decodeURIComponent(r[0]),
                                n = decodeURIComponent(r[1]);
                            return e[i] = n, e
                        }, {}) : {}
                    },
                    stringify: s,
                    queryify: function(e, t) {
                        return e = e || "", null != t && "object" == typeof t && function(e) {
                            var t;
                            for (t in e)
                                if (e.hasOwnProperty(t)) return !0;
                            return !1
                        }(t) && (e += -1 === e.indexOf("?") ? "?" : "", e += -1 !== e.indexOf("=") ? "&" : "", e += s(t)), e
                    }
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        87: [function(e, t, r) {
            "use strict";
            t.exports = function(e) { return e ? "" : ".min" }
        }, {}],
        88: [function(e, i, t) {
            (function(t) {
                "use strict";
                var r = "function" == typeof t.atob ? t.atob : e;

                function e(e) {
                    var t, r, i, n, a, o, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        l = "";
                    if (!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e)) throw new Error("Non base64 encoded input passed to window.atob polyfill");
                    for (o = 0; t = (63 & s.indexOf(e.charAt(o++))) << 2 | (n = s.indexOf(e.charAt(o++))) >> 4 & 3, r = (15 & n) << 4 | (a = s.indexOf(e.charAt(o++))) >> 2 & 15, i = (3 & a) << 6 | 63 & s.indexOf(e.charAt(o++)), l += String.fromCharCode(t) + (r ? String.fromCharCode(r) : "") + (i ? String.fromCharCode(i) : ""), o < e.length;);
                    return l
                }
                i.exports = { atob: function(e) { return r.call(t, e) }, _atob: e }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        89: [function(e, t, r) {
            "use strict";
            t.exports = function() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) { var t = 16 * Math.random() | 0; return ("x" === e ? t : 3 & t | 8).toString(16) }) }
        }, {}],
        90: [function(e, t, r) {
            "use strict";
            var i = e("../lib/braintree-error");
            t.exports = { PAYPAL_NOT_ENABLED: { type: i.types.MERCHANT, code: "PAYPAL_NOT_ENABLED", message: "PayPal is not enabled for this merchant." }, PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED: { type: i.types.MERCHANT, code: "PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED", message: "A linked PayPal Sandbox account is required to use PayPal Checkout in Sandbox. See https://developers.braintreepayments.com/guides/paypal/testing-go-live/#linked-paypal-testing for details on linking your PayPal sandbox with Braintree." }, PAYPAL_TOKENIZATION_REQUEST_ACTIVE: { type: i.types.MERCHANT, code: "PAYPAL_TOKENIZATION_REQUEST_ACTIVE", message: "Another tokenization request is active." }, PAYPAL_ACCOUNT_TOKENIZATION_FAILED: { type: i.types.NETWORK, code: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED", message: "Could not tokenize user's PayPal account." }, PAYPAL_FLOW_FAILED: { type: i.types.NETWORK, code: "PAYPAL_FLOW_FAILED", message: "Could not initialize PayPal flow." }, PAYPAL_FLOW_OPTION_REQUIRED: { type: i.types.MERCHANT, code: "PAYPAL_FLOW_OPTION_REQUIRED", message: "PayPal flow property is invalid or missing." }, PAYPAL_POPUP_OPEN_FAILED: { type: i.types.MERCHANT, code: "PAYPAL_POPUP_OPEN_FAILED", message: "PayPal popup failed to open, make sure to tokenize in response to a user action." }, PAYPAL_POPUP_CLOSED: { type: i.types.CUSTOMER, code: "PAYPAL_POPUP_CLOSED", message: "Customer closed PayPal popup before authorizing." }, PAYPAL_INVALID_PAYMENT_OPTION: { type: i.types.MERCHANT, code: "PAYPAL_INVALID_PAYMENT_OPTION", message: "PayPal payment options are invalid." } }
        }, { "../lib/braintree-error": 64 }],
        91: [function(e, t, r) {
            "use strict";
            var i = e("../lib/braintree-error"),
                n = e("../lib/analytics"),
                a = e("../lib/basic-component-verification"),
                o = e("./errors"),
                s = e("../lib/promise"),
                l = e("@braintree/wrap-promise"),
                d = e("./paypal-checkout");
            t.exports = { create: l(function(t) { return a.verify({ name: "PayPal Checkout", client: t.client }).then(function() { var e = t.client.getConfiguration(); return e.gatewayConfiguration.paypalEnabled ? !0 === e.gatewayConfiguration.paypal.environmentNoNetwork ? s.reject(new i(o.PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED)) : (n.sendEvent(t.client, "paypal-checkout.initialized"), new d(t)) : s.reject(new i(o.PAYPAL_NOT_ENABLED)) }) }), isSupported: function() { return !0 }, VERSION: "3.34.0" }
        }, { "../lib/analytics": 60, "../lib/basic-component-verification": 62, "../lib/braintree-error": 64, "../lib/promise": 85, "./errors": 90, "./paypal-checkout": 92, "@braintree/wrap-promise": 20 }],
        92: [function(e, t, r) {
            "use strict";
            var o = e("../lib/analytics"),
                s = e("../lib/promise"),
                i = e("@braintree/wrap-promise"),
                n = e("../lib/braintree-error"),
                l = e("../lib/convert-to-braintree-error"),
                d = e("./errors"),
                a = e("../paypal/shared/constants"),
                c = e("../lib/methods"),
                p = e("../lib/convert-methods-to-error");

            function u(e) { this._client = e.client }
            u.prototype.createPayment = function(t) { var e; return t && a.FLOW_ENDPOINTS.hasOwnProperty(t.flow) ? (e = "paypal_hermes/" + a.FLOW_ENDPOINTS[t.flow], o.sendEvent(this._client, "paypal-checkout.createPayment"), !0 === t.offerCredit && o.sendEvent(this._client, "paypal-checkout.credit.offered"), this._client.request({ endpoint: e, method: "post", data: this._formatPaymentResourceData(t) }).then(function(e) { return "checkout" === t.flow ? e.paymentResource.paymentToken : e.agreementSetup.tokenId }).catch(function(e) { return 422 === (e.details && e.details.httpStatus) ? s.reject(new n({ type: d.PAYPAL_INVALID_PAYMENT_OPTION.type, code: d.PAYPAL_INVALID_PAYMENT_OPTION.code, message: d.PAYPAL_INVALID_PAYMENT_OPTION.message, details: { originalError: e } })) : s.reject(l(e, { type: d.PAYPAL_FLOW_FAILED.type, code: d.PAYPAL_FLOW_FAILED.code, message: d.PAYPAL_FLOW_FAILED.message })) })) : s.reject(new n(d.PAYPAL_FLOW_OPTION_REQUIRED)) }, u.prototype.tokenizePayment = function(e) {
                var t, r = this,
                    i = this._client,
                    n = { flow: e.billingToken ? "vault" : "checkout", intent: e.intent },
                    a = { ecToken: e.paymentToken, billingToken: e.billingToken, payerId: e.payerID, paymentId: e.paymentID };
                return o.sendEvent(i, "paypal-checkout.tokenization.started"), i.request({ endpoint: "payment_methods/paypal_accounts", method: "post", data: r._formatTokenizeData(n, a) }).then(function(e) { return t = r._formatTokenizePayload(e), o.sendEvent(i, "paypal-checkout.tokenization.success"), t.creditFinancingOffered && o.sendEvent(i, "paypal-checkout.credit.accepted"), t }).catch(function(e) { return o.sendEvent(i, "paypal-checkout.tokenization.failed"), s.reject(l(e, { type: d.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type, code: d.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code, message: d.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message })) })
            }, u.prototype._formatPaymentResourceData = function(e) {
                var t, r = this._client.getConfiguration().gatewayConfiguration,
                    i = { returnUrl: "x", cancelUrl: "x", offerPaypalCredit: !0 === e.offerCredit, experienceProfile: { brandName: e.displayName || r.paypal.displayName, localeCode: e.locale, noShipping: (!e.enableShippingAddress).toString(), addressOverride: !1 === e.shippingAddressEditable, landingPageType: e.landingPageType } };
                if ("checkout" === e.flow)
                    for (t in i.amount = e.amount, i.currencyIsoCode = e.currency, e.hasOwnProperty("intent") && (i.intent = e.intent), e.shippingAddressOverride) e.shippingAddressOverride.hasOwnProperty(t) && (i[t] = e.shippingAddressOverride[t]);
                else i.shippingAddress = e.shippingAddressOverride, e.billingAgreementDescription && (i.description = e.billingAgreementDescription);
                return i
            }, u.prototype._formatTokenizeData = function(e, t) {
                var r = this._client.getConfiguration(),
                    i = r.gatewayConfiguration,
                    n = "TOKENIZATION_KEY" === r.authorizationType,
                    a = { paypalAccount: { correlationId: t.billingToken || t.ecToken, options: { validate: "vault" === e.flow && !n } } };
                return t.billingToken ? a.paypalAccount.billingAgreementToken = t.billingToken : (a.paypalAccount.paymentToken = t.paymentId, a.paypalAccount.payerId = t.payerId, a.paypalAccount.unilateral = i.paypal.unvettedMerchant, e.intent && (a.paypalAccount.intent = e.intent)), a
            }, u.prototype._formatTokenizePayload = function(e) { var t, r = {}; return e.paypalAccounts && (r = e.paypalAccounts[0]), t = { nonce: r.nonce, details: {}, type: r.type }, r.details && r.details.payerInfo && (t.details = r.details.payerInfo), r.details && r.details.creditFinancingOffered && (t.creditFinancingOffered = r.details.creditFinancingOffered), t }, u.prototype.teardown = function() { return p(this, c(u.prototype)), s.resolve() }, t.exports = i.wrapPrototype(u)
        }, { "../lib/analytics": 60, "../lib/braintree-error": 64, "../lib/convert-methods-to-error": 70, "../lib/convert-to-braintree-error": 71, "../lib/methods": 83, "../lib/promise": 85, "../paypal/shared/constants": 93, "./errors": 90, "@braintree/wrap-promise": 20 }],
        93: [function(e, t, r) {
            "use strict";
            t.exports = { LANDING_FRAME_NAME: "braintreepaypallanding", FLOW_ENDPOINTS: { checkout: "create_payment_resource", vault: "setup_billing_agreement" } }
        }, {}],
        94: [function(e, t, r) {
            "use strict";
            var l = e("../../lib/braintree-error"),
                i = e("../../lib/analytics"),
                d = e("../../lib/assign").assign,
                n = e("../../lib/methods"),
                a = e("../../lib/convert-methods-to-error"),
                o = e("../shared/constants"),
                s = e("../../lib/use-min"),
                c = e("../../lib/bus"),
                p = e("../../lib/vendor/uuid"),
                u = e("../../lib/deferred"),
                h = e("../shared/errors"),
                y = e("../shared/events"),
                m = "3.34.0",
                f = e("@braintree/iframer"),
                v = e("../../lib/promise"),
                b = e("@braintree/wrap-promise");

            function g(e) { this._options = e, this._assetsUrl = e.client.getConfiguration().gatewayConfiguration.assetsUrl, this._isDebug = e.client.getConfiguration().isDebug, this._client = e.client }
            g.prototype.verifyCard = function(e) { var t, n, a, o, r, i, s = this; return (e = d({}, e)).customer && e.customer.billingAddress && (e.customer.billingAddress.line1 = e.customer.billingAddress.streetAddress, e.customer.billingAddress.line2 = e.customer.billingAddress.extendedAddress, e.customer.billingAddress.city = e.customer.billingAddress.locality, e.customer.billingAddress.state = e.customer.billingAddress.region, e.customer.billingAddress.countryCode = e.customer.billingAddress.countryCodeAlpha2, delete e.customer.billingAddress.streetAddress, delete e.customer.billingAddress.extendedAddress, delete e.customer.billingAddress.locality, delete e.customer.billingAddress.region, delete e.customer.billingAddress.countryCodeAlpha2), !0 === this._verifyCardInProgress ? r = h.THREEDS_AUTHENTICATION_IN_PROGRESS : e.nonce ? e.amount ? "function" != typeof e.addFrame ? i = "an addFrame function" : "function" != typeof e.removeFrame && (i = "a removeFrame function") : i = "an amount" : i = "a nonce", i && (r = { type: h.THREEDS_MISSING_VERIFY_CARD_OPTION.type, code: h.THREEDS_MISSING_VERIFY_CARD_OPTION.code, message: "verifyCard options must include " + i + "." }), r ? v.reject(new l(r)) : (n = !1 !== e.showLoader, this._verifyCardInProgress = !0, a = u(e.addFrame), o = u(e.removeFrame), t = "payment_methods/" + e.nonce + "/three_d_secure/lookup", this._client.request({ endpoint: t, method: "post", data: { amount: e.amount, customer: e.customer } }).then(function(e) { return s._lookupPaymentMethod = e.paymentMethod, new v(function(r, i) { s._verifyCardCallback = function(e, t) { s._verifyCardInProgress = !1, e ? i(e) : r(t) }, s._handleLookupResponse({ showLoader: n, lookupResponse: e, addFrame: a, removeFrame: o }) }) }).catch(function(e) { return s._verifyCardInProgress = !1, v.reject(e) })) }, g.prototype.cancelVerifyCard = function() { var e; return this._verifyCardInProgress = !1, this._lookupPaymentMethod ? (e = d({}, this._lookupPaymentMethod, { liabilityShiftPossible: this._lookupPaymentMethod.threeDSecureInfo.liabilityShiftPossible, liabilityShifted: this._lookupPaymentMethod.threeDSecureInfo.liabilityShifted, verificationDetails: this._lookupPaymentMethod.threeDSecureInfo.verificationDetails }), v.resolve(e)) : v.reject(new l(h.THREEDS_NO_VERIFICATION_PAYLOAD)) }, g.prototype._handleLookupResponse = function(e) {
                var t, r = e.lookupResponse;
                r.lookup && r.lookup.acsUrl && 0 < r.lookup.acsUrl.length ? e.addFrame(null, this._createIframe({ showLoader: e.showLoader, response: r.lookup, removeFrame: e.removeFrame })) : ((t = this._formatAuthResponse(r.paymentMethod, r.threeDSecureInfo)).verificationDetails = r.threeDSecureInfo, this._verifyCardCallback(null, t))
            }, g.prototype._createIframe = function(t) {
                var e, r, i = window.location.href,
                    n = t.response;
                return this._bus = new c({ channel: p(), merchantUrl: location.href }), r = this._assetsUrl + "/web/" + m + "/html/three-d-secure-authentication-complete-frame.html?channel=" + encodeURIComponent(this._bus.channel) + "&", -1 < i.indexOf("#") && (i = i.split("#")[0]), this._bus.on(c.events.CONFIGURATION_REQUEST, function(e) { e({ acsUrl: n.acsUrl, pareq: n.pareq, termUrl: n.termUrl + "&three_d_secure_version=" + m + "&authentication_complete_base_url=" + encodeURIComponent(r), md: n.md, parentUrl: i }) }), this._bus.on(y.AUTHENTICATION_COMPLETE, function(e) { this._handleAuthResponse(e, t) }.bind(this)), e = this._assetsUrl + "/web/" + m + "/html/three-d-secure-bank-frame" + s(this._isDebug) + ".html?showLoader=" + t.showLoader, this._bankIframe = f({ src: e, height: 400, width: 400, name: o.LANDING_FRAME_NAME + "_" + this._bus.channel }), this._bankIframe
            }, g.prototype._handleAuthResponse = function(e, t) {
                var r = JSON.parse(e.auth_response);
                this._bus.teardown(), t.removeFrame(), u(function() { r.success ? this._verifyCardCallback(null, this._formatAuthResponse(r.paymentMethod, r.threeDSecureInfo)) : r.threeDSecureInfo && r.threeDSecureInfo.liabilityShiftPossible ? this._verifyCardCallback(null, this._formatAuthResponse(this._lookupPaymentMethod, r.threeDSecureInfo)) : this._verifyCardCallback(new l({ type: l.types.UNKNOWN, code: "UNKNOWN_AUTH_RESPONSE", message: r.error.message })) }.bind(this))()
            }, g.prototype._formatAuthResponse = function(e, t) { return { nonce: e.nonce, binData: e.binData, details: e.details, description: e.description && e.description.replace(/\+/g, " "), liabilityShifted: t.liabilityShifted, liabilityShiftPossible: t.liabilityShiftPossible } }, g.prototype.teardown = function() { var e; return a(this, n(g.prototype)), i.sendEvent(this._options.client, "threedsecure.teardown-completed"), this._bus && this._bus.teardown(), this._bankIframe && (e = this._bankIframe.parentNode) && e.removeChild(this._bankIframe), v.resolve() }, t.exports = b.wrapPrototype(g)
        }, { "../../lib/analytics": 60, "../../lib/assign": 61, "../../lib/braintree-error": 64, "../../lib/bus": 67, "../../lib/convert-methods-to-error": 70, "../../lib/deferred": 73, "../../lib/methods": 83, "../../lib/promise": 85, "../../lib/use-min": 87, "../../lib/vendor/uuid": 89, "../shared/constants": 96, "../shared/errors": 97, "../shared/events": 98, "@braintree/iframer": 13, "@braintree/wrap-promise": 20 }],
        95: [function(e, t, r) {
            "use strict";
            var i = e("./external/three-d-secure"),
                n = e("../lib/is-https").isHTTPS,
                a = e("../lib/basic-component-verification"),
                o = e("../lib/braintree-error"),
                s = e("../lib/analytics"),
                l = e("./shared/errors"),
                d = e("../lib/promise"),
                c = e("@braintree/wrap-promise");
            t.exports = { create: c(function(r) { return a.verify({ name: "3D Secure", client: r.client }).then(function() { var e, t = r.client.getConfiguration(); return t.gatewayConfiguration.threeDSecureEnabled || (e = l.THREEDS_NOT_ENABLED), "TOKENIZATION_KEY" === t.authorizationType && (e = l.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY), "production" === t.gatewayConfiguration.environment && !n() && (e = l.THREEDS_HTTPS_REQUIRED), e ? d.reject(new o(e)) : (s.sendEvent(r.client, "threedsecure.initialized"), new i(r)) }) }), VERSION: "3.34.0" }
        }, { "../lib/analytics": 60, "../lib/basic-component-verification": 62, "../lib/braintree-error": 64, "../lib/is-https": 80, "../lib/promise": 85, "./external/three-d-secure": 94, "./shared/errors": 97, "@braintree/wrap-promise": 20 }],
        96: [function(e, t, r) {
            "use strict";
            t.exports = { LANDING_FRAME_NAME: "braintreethreedsecurelanding" }
        }, {}],
        97: [function(e, t, r) {
            "use strict";
            var i = e("../../lib/braintree-error");
            t.exports = { THREEDS_AUTHENTICATION_IN_PROGRESS: { type: i.types.MERCHANT, code: "THREEDS_AUTHENTICATION_IN_PROGRESS", message: "Cannot call verifyCard while existing authentication is in progress." }, THREEDS_MISSING_VERIFY_CARD_OPTION: { type: i.types.MERCHANT, code: "THREEDS_MISSING_VERIFY_CARD_OPTION" }, THREEDS_NO_VERIFICATION_PAYLOAD: { type: i.types.MERCHANT, code: "THREEDS_NO_VERIFICATION_PAYLOAD", message: "No verification payload available." }, THREEDS_NOT_ENABLED: { type: i.types.MERCHANT, code: "THREEDS_NOT_ENABLED", message: "3D Secure is not enabled for this merchant." }, THREEDS_CAN_NOT_USE_TOKENIZATION_KEY: { type: i.types.MERCHANT, code: "THREEDS_CAN_NOT_USE_TOKENIZATION_KEY", message: "3D Secure can not use a tokenization key for authorization." }, THREEDS_HTTPS_REQUIRED: { type: i.types.MERCHANT, code: "THREEDS_HTTPS_REQUIRED", message: "3D Secure requires HTTPS." }, THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN: { type: i.types.INTERNAL, code: "THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN", message: "Term Url must be on a Braintree domain." } }
        }, { "../../lib/braintree-error": 64 }],
        98: [function(e, t, r) {
            "use strict";
            var i = e("../../lib/enumerate");
            t.exports = i(["AUTHENTICATION_COMPLETE"], "threedsecure:")
        }, { "../../lib/enumerate": 75 }],
        99: [function(e, t, r) {
            "use strict";
            var i = e("../lib/analytics"),
                n = e("../lib/basic-component-verification"),
                a = e("./shared/errors"),
                o = e("@braintree/wrap-promise"),
                s = e("../lib/braintree-error"),
                l = e("./venmo"),
                d = e("../lib/promise"),
                c = e("./shared/supports-venmo");
            t.exports = { create: o(function(t) { return n.verify({ name: "Venmo", client: t.client }).then(function() { var e; return t.client.getConfiguration().gatewayConfiguration.payWithVenmo ? (e = new l(t), i.sendEvent(t.client, "venmo.initialized"), e._initialize()) : d.reject(new s(a.VENMO_NOT_ENABLED)) }) }), isBrowserSupported: function(e) { return c.isBrowserSupported(e) }, VERSION: "3.34.0" }
        }, { "../lib/analytics": 60, "../lib/basic-component-verification": 62, "../lib/braintree-error": 64, "../lib/promise": 85, "./shared/errors": 102, "./shared/supports-venmo": 103, "./venmo": 104, "@braintree/wrap-promise": 20 }],
        100: [function(e, t, r) {
            "use strict";
            var i = e("@braintree/browser-detection/is-android"),
                n = e("@braintree/browser-detection/is-chrome"),
                a = e("@braintree/browser-detection/is-ios"),
                o = e("@braintree/browser-detection/is-ios-safari"),
                s = e("@braintree/browser-detection/is-samsung"),
                l = e("@braintree/browser-detection/is-mobile-firefox");
            t.exports = { isAndroid: i, isChrome: n, isIos: a, isIosSafari: o, isSamsungBrowser: s, isMobileFirefox: l }
        }, { "@braintree/browser-detection/is-android": 1, "@braintree/browser-detection/is-chrome": 2, "@braintree/browser-detection/is-ios": 10, "@braintree/browser-detection/is-ios-safari": 8, "@braintree/browser-detection/is-mobile-firefox": 11, "@braintree/browser-detection/is-samsung": 12 }],
        101: [function(e, t, r) {
            "use strict";
            t.exports = { DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY: 500, PROCESS_RESULTS_DELAY: 1e3, VENMO_OPEN_URL: "https://venmo.com/braintree/checkout" }
        }, {}],
        102: [function(e, t, r) {
            "use strict";
            var i = e("../../lib/braintree-error");
            t.exports = { VENMO_NOT_ENABLED: { type: i.types.MERCHANT, code: "VENMO_NOT_ENABLED", message: "Venmo is not enabled for this merchant." }, VENMO_TOKENIZATION_REQUEST_ACTIVE: { type: i.types.MERCHANT, code: "VENMO_TOKENIZATION_REQUEST_ACTIVE", message: "Another tokenization request is active." }, VENMO_APP_FAILED: { type: i.types.UNKNOWN, code: "VENMO_APP_FAILED", message: "Venmo app encountered a problem." }, VENMO_APP_CANCELED: { type: i.types.CUSTOMER, code: "VENMO_APP_CANCELED", message: "Venmo app authorization was canceled." }, VENMO_CANCELED: { type: i.types.CUSTOMER, code: "VENMO_CANCELED", message: "User canceled Venmo authorization, or Venmo app is not available." } }
        }, { "../../lib/braintree-error": 64 }],
        103: [function(e, t, r) {
            "use strict";
            var a = e("./browser-detection");
            t.exports = {
                isBrowserSupported: function(e) {
                    var t = a.isAndroid() && a.isChrome(),
                        r = a.isIos() && a.isChrome(),
                        i = a.isIosSafari() || t,
                        n = r || a.isSamsungBrowser() || a.isMobileFirefox();
                    return e = e || { allowNewBrowserTab: !0 }, i || e.allowNewBrowserTab && n
                }
            }
        }, { "./browser-detection": 100 }],
        104: [function(y, m, e) {
            (function(o) {
                "use strict";
                var s = y("../lib/analytics"),
                    e = y("./shared/supports-venmo"),
                    a = y("./shared/constants"),
                    l = y("./shared/errors"),
                    d = y("../lib/querystring"),
                    t = y("../lib/methods"),
                    r = y("../lib/convert-methods-to-error"),
                    i = y("@braintree/wrap-promise"),
                    c = y("../lib/braintree-error"),
                    p = y("../lib/promise");

                function n(e) {
                    var t;
                    this._client = e.client, t = this._client.getConfiguration(), this._isDebug = t.isDebug, this._assetsUrl = t.gatewayConfiguration.assetsUrl + "/web/3.34.0", this._allowNewBrowserTab = !1 !== e.allowNewBrowserTab, this._profileId = e.profileId
                }

                function u() {
                    return o.location.hash.substring(1).split("&").reduce(function(e, t) {
                        var r = t.split("="),
                            i = decodeURIComponent(r[0]),
                            n = decodeURIComponent(r[1]);
                        return e[i] = n, e
                    }, {})
                }

                function h() { var e; return void 0 !== o.document.hidden ? e = "visibilitychange" : void 0 !== o.document.msHidden ? e = "msvisibilitychange" : void 0 !== o.document.webkitHidden && (e = "webkitvisibilitychange"), e }
                n.prototype._initialize = function() {
                    var e = o.location.href.replace(o.location.hash, ""),
                        t = d.parse(o.location.href),
                        r = this._client.getConfiguration().gatewayConfiguration.payWithVenmo,
                        i = this._client.getConfiguration().analyticsMetadata,
                        n = { _meta: { version: i.sdkVersion, integration: i.integration, platform: i.platform, sessionId: i.sessionId } };
                    return t["x-success"] = e + "#venmoSuccess=1", t["x-cancel"] = e + "#venmoCancel=1", t["x-error"] = e + "#venmoError=1", t.ua = o.navigator.userAgent, t.braintree_merchant_id = this._profileId || r.merchantId, t.braintree_access_token = r.accessToken, t.braintree_environment = r.environment, t.braintree_sdk_data = btoa(JSON.stringify(n)), this._url = a.VENMO_OPEN_URL + "?" + d.stringify(t), p.resolve(this)
                }, n.prototype.isBrowserSupported = function() { return e.isBrowserSupported({ allowNewBrowserTab: this._allowNewBrowserTab }) }, n.prototype.hasTokenizationResult = function() { var e = u(); return void 0 !== (e.venmoSuccess || e.venmoError || e.venmoCancel) }, n.prototype.tokenize = function() { var r = this; return !0 === this._tokenizationInProgress ? p.reject(new c(l.VENMO_TOKENIZATION_REQUEST_ACTIVE)) : this.hasTokenizationResult() ? this._processResults() : new p(function(e, t) { r._tokenizationInProgress = !0, r._previousHash = o.location.hash, o.open(r._url), r._visibilityChangeListener = function() { o.document.hidden || (r._tokenizationInProgress = !1, setTimeout(function() { r._processResults().then(e).catch(t).then(function() { o.location.hash = r._previousHash, r._removeVisibilityEventListener(), delete r._visibilityChangeListener }) }, a.PROCESS_RESULTS_DELAY)) }, setTimeout(function() { o.document.addEventListener(h(), r._visibilityChangeListener) }, a.DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY) }) }, n.prototype.teardown = function() { return this._removeVisibilityEventListener(), r(this, t(n.prototype)), p.resolve() }, n.prototype._removeVisibilityEventListener = function() { o.document.removeEventListener(h(), this._visibilityChangeListener) }, n.prototype._processResults = function() {
                    var n = this,
                        a = u();
                    return new p(function(e, t) {
                        var r, i;
                        a.venmoSuccess ? (s.sendEvent(n._client, "venmo.appswitch.handle.success"), e((r = a, { nonce: i ? i.nonce : r.paymentMethodNonce, type: "VenmoAccount", details: { username: r.username } }))) : a.venmoError ? (s.sendEvent(n._client, "venmo.appswitch.handle.error"), t(new c({ type: l.VENMO_APP_FAILED.type, code: l.VENMO_APP_FAILED.code, message: l.VENMO_APP_FAILED.message, details: { originalError: { message: decodeURIComponent(a.errorMessage), code: a.errorCode } } }))) : a.venmoCancel ? (s.sendEvent(n._client, "venmo.appswitch.handle.cancel"), t(new c(l.VENMO_APP_CANCELED))) : (s.sendEvent(n._client, "venmo.appswitch.cancel-or-unavailable"), t(new c(l.VENMO_CANCELED))), "function" == typeof o.history.replaceState && history.pushState({}, "", o.location.href.slice(0, o.location.href.indexOf("#")))
                    })
                }, m.exports = i.wrapPrototype(n)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "../lib/analytics": 60, "../lib/braintree-error": 64, "../lib/convert-methods-to-error": 70, "../lib/methods": 83, "../lib/promise": 85, "../lib/querystring": 86, "./shared/constants": 101, "./shared/errors": 102, "./shared/supports-venmo": 103, "@braintree/wrap-promise": 20 }],
        105: [function(e, t, r) {
            "use strict";
            var a, i = {},
                n = {},
                o = "visa",
                s = "master-card",
                l = "american-express",
                d = "diners-club",
                c = "discover",
                p = "jcb",
                u = "unionpay",
                h = "maestro",
                y = "mir",
                m = [o, s, l, d, c, p, u, h, y];

            function f(e) { var t; return e ? (delete(t = JSON.parse(JSON.stringify(e))).prefixPattern, delete t.exactPattern, t) : null }

            function v(e) { return n[e] || i[e] }

            function b(e) {
                var t, r, i = [],
                    n = [];
                if (!("string" == typeof e || e instanceof String)) return [];
                for (r = 0; r < a.length; r++) t = v(a[r]), 0 !== e.length ? t.exactPattern.test(e) ? n.push(f(t)) : t.prefixPattern.test(e) && i.push(f(t)) : i.push(f(t));
                return n.length ? n : i
            }

            function g(e, t) { var r = a.indexOf(e); if (!t && -1 === r) throw new Error('"' + e + '" is not a supported card type.'); return r }
            a = f(m), i[o] = { niceType: "Visa", type: o, prefixPattern: /^4$/, exactPattern: /^4\d*$/, gaps: [4, 8, 12], lengths: [16, 18, 19], code: { name: "CVV", size: 3 } }, i[s] = { niceType: "Mastercard", type: s, prefixPattern: /^(5|5[1-5]|2|22|222|222[1-9]|2[3-6]|27|27[0-2]|2720)$/, exactPattern: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[0-1]|2720)\d*$/, gaps: [4, 8, 12], lengths: [16], code: { name: "CVC", size: 3 } }, i[l] = { niceType: "American Express", type: l, prefixPattern: /^(3|34|37)$/, exactPattern: /^3[47]\d*$/, isAmex: !0, gaps: [4, 10], lengths: [15], code: { name: "CID", size: 4 } }, i[d] = { niceType: "Diners Club", type: d, prefixPattern: /^(3|3[0689]|30[0-5])$/, exactPattern: /^3(0[0-5]|[689])\d*$/, gaps: [4, 10], lengths: [14, 16, 19], code: { name: "CVV", size: 3 } }, i[c] = { niceType: "Discover", type: c, prefixPattern: /^(6|60|601|6011|65|64|64[4-9])$/, exactPattern: /^(6011|65|64[4-9])\d*$/, gaps: [4, 8, 12], lengths: [16, 19], code: { name: "CID", size: 3 } }, i.jcb = { niceType: "JCB", type: p, prefixPattern: /^(2|21|213|2131|1|18|180|1800|3|35)$/, exactPattern: /^(2131|1800|35)\d*$/, gaps: [4, 8, 12], lengths: [16, 17, 18, 19], code: { name: "CVV", size: 3 } }, i[u] = { niceType: "UnionPay", type: u, prefixPattern: /^((6|62|62\d|(621(?!83|88|98|99))|622(?!06)|627[02,06,07]|628(?!0|1)|629[1,2])|622018)$/, exactPattern: /^(((620|(621(?!83|88|98|99))|622(?!06|018)|62[3-6]|627[02,06,07]|628(?!0|1)|629[1,2]))\d*|622018\d{12})$/, gaps: [4, 8, 12], lengths: [16, 17, 18, 19], code: { name: "CVN", size: 3 } }, i[h] = { niceType: "Maestro", type: h, prefixPattern: /^(5|5[06-9]|6\d*)$/, exactPattern: /^(5[06-9]|6[37])\d*$/, gaps: [4, 8, 12], lengths: [12, 13, 14, 15, 16, 17, 18, 19], code: { name: "CVC", size: 3 } }, i.mir = { niceType: "Mir", type: y, prefixPattern: /^(2|22|220|220[0-4])$/, exactPattern: /^(220[0-4])\d*$/, gaps: [4, 8, 12], lengths: [16, 17, 18, 19], code: { name: "CVP2", size: 3 } }, b.getTypeInfo = function(e) { return f(v(e)) }, b.removeCard = function(e) {
                var t = g(e);
                a.splice(t, 1)
            }, b.addCard = function(e) {
                var t = g(e.type, !0);
                n[e.type] = e, -1 === t && a.push(e.type)
            }, b.changeOrder = function(e, t) {
                var r = g(e);
                a.splice(r, 1), a.splice(t, 0, e)
            }, b.resetModifications = function() { a = f(m), n = {} }, b.types = { VISA: o, MASTERCARD: s, AMERICAN_EXPRESS: l, DINERS_CLUB: d, DISCOVER: c, JCB: p, UNIONPAY: u, MAESTRO: h, MIR: y }, t.exports = b
        }, {}],
        106: [function(e, E, t) {
            (function(t) {
                "use strict";
                var i, o, a = [],
                    s = {},
                    l = "/*framebus*/";

                function e(e) { var t, r = d(this); return !c(e) && (!c(r) && (!1 !== (t = p(e, Array.prototype.slice.call(arguments, 1), r)) && (v(i.top || i.self, t, r), !0))) }

                function r(e, t) { var r = d(this); return !g(e, t, r) && (s[r] = s[r] || {}, s[r][e] = s[r][e] || [], s[r][e].push(t), !0) }

                function n(e, t) {
                    var r, i, n = d(this);
                    if (g(e, t, n)) return !1;
                    if (!(i = s[n] && s[n][e])) return !1;
                    for (r = 0; r < i.length; r++)
                        if (i[r] === t) return i.splice(r, 1), !0;
                    return !1
                }

                function d(e) { return e && e._origin || "*" }

                function c(e) { return "string" != typeof e }

                function p(e, t, r) {
                    var i = !1,
                        n = { event: e, origin: r },
                        a = t[t.length - 1];
                    "function" == typeof a && (n.reply = b(a, r), t = t.slice(0, -1)), n.args = t;
                    try { i = l + JSON.stringify(n) } catch (e) { throw new Error("Could not stringify event: " + e.message) }
                    return i
                }

                function u(e) {
                    var t, r, i, n;
                    if (e.data.slice(0, l.length) !== l) return !1;
                    try { t = JSON.parse(e.data.slice(l.length)) } catch (e) { return !1 }
                    return null != t.reply && (r = e.origin, i = e.source, n = t.reply, t.reply = function(e) {
                        var t = p(n, [e], r);
                        if (!1 === t) return !1;
                        i.postMessage(t, r)
                    }, t.args.push(t.reply)), t
                }

                function h(e) { i || ((i = e || t).addEventListener ? i.addEventListener("message", m, !1) : i.attachEvent ? i.attachEvent("onmessage", m) : null === i.onmessage ? i.onmessage = m : i = null) }

                function y() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) { var t = 16 * Math.random() | 0; return ("x" === e ? t : 3 & t | 8).toString(16) }) }

                function m(e) {
                    var t;
                    c(e.data) || (t = u(e)) && (f("*", t.event, t.args, e), f(e.origin, t.event, t.args, e), function(e, t, r) { var i, n; for (i = a.length - 1; 0 <= i; i--) !0 === (n = a[i]).closed ? a = a.slice(i, 1) : r !== n && v(n.top, e, t) }(e.data, t.origin, e.source))
                }

                function f(e, t, r, i) {
                    var n;
                    if (s[e] && s[e][t])
                        for (n = 0; n < s[e][t].length; n++) s[e][t][n].apply(i, r)
                }

                function v(e, t, r) { var i, n, a = 0; try { for (e.postMessage(t, r), (n = e).top === n && null != n.opener && n.opener !== n && !0 !== n.opener.closed && v(e.opener.top, t, r); i = e.frames[a];) v(i, t, r), a++ } catch (e) {} }

                function b(i, n) { var a = y(); return o.target(n).subscribe(a, function e(t, r) { i(t, r), o.target(n).unsubscribe(a, e) }), a }

                function g(e, t, r) { return !!c(e) || ("function" != typeof t || !!c(r)) }
                h(), o = { target: function(e) { var t, r = {}; for (t in o) o.hasOwnProperty(t) && (r[t] = o[t]); return r._origin = e || "*", r }, _packagePayload: p, _unpackPayload: u, _attach: h, _detach: function() { null != i && (i.removeEventListener ? i.removeEventListener("message", m, !1) : i.detachEvent ? i.detachEvent("onmessage", m) : i.onmessage === m && (i.onmessage = null), i = null, a = [], s = {}) }, _dispatch: f, _broadcast: v, _subscribeReplier: b, _subscriptionArgsInvalid: g, _onmessage: m, _uuid: y, _getSubscribers: function() { return s }, _win: function() { return i }, include: function(e) { return null != e && null != e.Window && e.constructor === e.Window && (a.push(e), !0) }, publish: e, pub: e, trigger: e, emit: e, subscribe: r, sub: r, on: r, unsubscribe: n, unsub: n, off: n }, E.exports = o
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        107: [function(e, t, r) {
            var i, n, a = t.exports = {};

            function o() { throw new Error("setTimeout has not been defined") }

            function s() { throw new Error("clearTimeout has not been defined") }

            function l(t) { if (i === setTimeout) return setTimeout(t, 0); if ((i === o || !i) && setTimeout) return i = setTimeout, setTimeout(t, 0); try { return i(t, 0) } catch (e) { try { return i.call(null, t, 0) } catch (e) { return i.call(this, t, 0) } } }! function() { try { i = "function" == typeof setTimeout ? setTimeout : o } catch (e) { i = o } try { n = "function" == typeof clearTimeout ? clearTimeout : s } catch (e) { n = s } }();
            var d, c = [],
                p = !1,
                u = -1;

            function h() { p && d && (p = !1, d.length ? c = d.concat(c) : u = -1, c.length && y()) }

            function y() {
                if (!p) {
                    var e = l(h);
                    p = !0;
                    for (var t = c.length; t;) {
                        for (d = c, c = []; ++u < t;) d && d[u].run();
                        u = -1, t = c.length
                    }
                    d = null, p = !1,
                        function(t) { if (n === clearTimeout) return clearTimeout(t); if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t); try { n(t) } catch (e) { try { return n.call(null, t) } catch (e) { return n.call(this, t) } } }(e)
                }
            }

            function m(e, t) { this.fun = e, this.array = t }

            function f() {}
            a.nextTick = function(e) {
                var t = new Array(arguments.length - 1);
                if (1 < arguments.length)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                c.push(new m(e, t)), 1 !== c.length || p || l(y)
            }, m.prototype.run = function() { this.fun.apply(null, this.array) }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = f, a.addListener = f, a.once = f, a.off = f, a.removeListener = f, a.removeAllListeners = f, a.emit = f, a.prependListener = f, a.prependOnceListener = f, a.listeners = function(e) { return [] }, a.binding = function(e) { throw new Error("process.binding is not supported") }, a.cwd = function() { return "/" }, a.chdir = function(e) { throw new Error("process.chdir is not supported") }, a.umask = function() { return 0 }
        }, {}],
        108: [function(e, p, t) {
            (function(t) {
                "use strict";
                var r = setTimeout;

                function i() {}

                function a(e) {
                    if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(e, this)
                }

                function n(r, i) {
                    for (; 3 === r._state;) r = r._value;
                    0 !== r._state ? (r._handled = !0, a._immediateFn(function() {
                        var e = 1 === r._state ? i.onFulfilled : i.onRejected;
                        if (null !== e) {
                            var t;
                            try { t = e(r._value) } catch (e) { return void s(i.promise, e) }
                            o(i.promise, t)
                        } else(1 === r._state ? o : s)(i.promise, r._value)
                    })) : r._deferreds.push(i)
                }

                function o(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" == typeof e || "function" == typeof e)) { var r = e.then; if (e instanceof a) return t._state = 3, t._value = e, void l(t); if ("function" == typeof r) return void c((i = r, n = e, function() { i.apply(n, arguments) }), t) }
                        t._state = 1, t._value = e, l(t)
                    } catch (e) { s(t, e) }
                    var i, n
                }

                function s(e, t) { e._state = 2, e._value = t, l(e) }

                function l(e) {
                    2 === e._state && 0 === e._deferreds.length && a._immediateFn(function() { e._handled || a._unhandledRejectionFn(e._value) });
                    for (var t = 0, r = e._deferreds.length; t < r; t++) n(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function d(e, t, r) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = r }

                function c(e, t) {
                    var r = !1;
                    try { e(function(e) { r || (r = !0, o(t, e)) }, function(e) { r || (r = !0, s(t, e)) }) } catch (e) {
                        if (r) return;
                        r = !0, s(t, e)
                    }
                }
                a.prototype.catch = function(e) { return this.then(null, e) }, a.prototype.then = function(e, t) { var r = new this.constructor(i); return n(this, new d(e, t, r)), r }, a.all = function(t) {
                    return new a(function(i, n) {
                        if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
                        var a = Array.prototype.slice.call(t);
                        if (0 === a.length) return i([]);
                        var o = a.length;

                        function s(t, e) {
                            try {
                                if (e && ("object" == typeof e || "function" == typeof e)) { var r = e.then; if ("function" == typeof r) return void r.call(e, function(e) { s(t, e) }, n) }
                                a[t] = e, 0 == --o && i(a)
                            } catch (e) { n(e) }
                        }
                        for (var e = 0; e < a.length; e++) s(e, a[e])
                    })
                }, a.resolve = function(t) { return t && "object" == typeof t && t.constructor === a ? t : new a(function(e) { e(t) }) }, a.reject = function(r) { return new a(function(e, t) { t(r) }) }, a.race = function(n) { return new a(function(e, t) { for (var r = 0, i = n.length; r < i; r++) n[r].then(e, t) }) }, a._immediateFn = "function" == typeof t && function(e) { t(e) } || function(e) { r(e, 0) }, a._unhandledRejectionFn = function(e) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e) }, p.exports = a
            }).call(this, e("timers").setImmediate)
        }, { timers: 111 }],
        109: [function(s, l, e) {
            (function(e) {
                "use strict";
                var r = e.navigator && e.navigator.userAgent,
                    i = s("@braintree/browser-detection/is-android"),
                    n = s("@braintree/browser-detection/is-chrome"),
                    t = s("@braintree/browser-detection/is-ios"),
                    a = s("@braintree/browser-detection/is-ie9"),
                    o = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
                l.exports = { isIE9: a, isAndroidChrome: function(e) { var t = e || r; return i(t) && n(t) }, isIos: t, isKitKatWebview: function(e) { var t = e || r; return i(t) && o.test(t) }, isSamsungBrowser: function(e) { return /SamsungBrowser/.test(e = e || r) || !n(t = e) && -1 < t.indexOf("Samsung"); var t } }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "@braintree/browser-detection/is-android": 1, "@braintree/browser-detection/is-chrome": 2, "@braintree/browser-detection/is-ie9": 6, "@braintree/browser-detection/is-ios": 10 }],
        110: [function(e, t, r) {
            "use strict";
            var i = e("./lib/device");
            t.exports = function() { return !i.isSamsungBrowser() }
        }, { "./lib/device": 109 }],
        111: [function(l, e, d) {
            (function(e, t) {
                var i = l("process/browser.js").nextTick,
                    r = Function.prototype.apply,
                    n = Array.prototype.slice,
                    a = {},
                    o = 0;

                function s(e, t) { this._id = e, this._clearFn = t }
                d.setTimeout = function() { return new s(r.call(setTimeout, window, arguments), clearTimeout) }, d.setInterval = function() { return new s(r.call(setInterval, window, arguments), clearInterval) }, d.clearTimeout = d.clearInterval = function(e) { e.close() }, s.prototype.unref = s.prototype.ref = function() {}, s.prototype.close = function() { this._clearFn.call(window, this._id) }, d.enroll = function(e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t }, d.unenroll = function(e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1 }, d._unrefActive = d.active = function(e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    0 <= t && (e._idleTimeoutId = setTimeout(function() { e._onTimeout && e._onTimeout() }, t))
                }, d.setImmediate = "function" == typeof e ? e : function(e) {
                    var t = o++,
                        r = !(arguments.length < 2) && n.call(arguments, 1);
                    return a[t] = !0, i(function() { a[t] && (r ? e.apply(null, r) : e.call(null), d.clearImmediate(t)) }), t
                }, d.clearImmediate = "function" == typeof t ? t : function(e) { delete a[e] }
            }).call(this, l("timers").setImmediate, l("timers").clearImmediate)
        }, { "process/browser.js": 107, timers: 111 }],
        112: [function(e, t, r) {
            "use strict";
            t.exports = { paymentOptionIDs: { card: "card", paypal: "paypal", paypalCredit: "paypalCredit", applePay: "applePay", venmo: "venmo", googlePay: "googlePay" }, paymentMethodTypes: { card: "CreditCard", paypal: "PayPalAccount", paypalCredit: "PayPalAccount", applePay: "ApplePayCard", venmo: "VenmoAccount", googlePay: "AndroidPayCard" }, analyticsKinds: { CreditCard: "card", PayPalAccount: "paypal", ApplePayCard: "applepay", VenmoAccount: "venmo", AndroidPayCard: "googlepay" }, paymentMethodCardTypes: { Visa: "visa", MasterCard: "master-card", "American Express": "american-express", "Diners Club": "diners-club", Discover: "discover", JCB: "jcb", UnionPay: "unionpay", Maestro: "maestro" }, configurationCardTypes: { visa: "Visa", "master-card": "MasterCard", "american-express": "American Express", "diners-club": "Discover", discover: "Discover", jcb: "JCB", unionpay: "UnionPay", maestro: "Maestro" }, errors: { NO_PAYMENT_METHOD_ERROR: "No payment method is available.", DEVELOPER_MISCONFIGURATION_MESSAGE: "Developer Error: Something went wrong. Check the console for details." }, ANALYTICS_REQUEST_TIMEOUT_MS: 2e3, ANALYTICS_PREFIX: "web.dropin.", CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT: 200, CHECKOUT_JS_SOURCE: "https://www.paypalobjects.com/api/checkout.min.js", GOOGLE_PAYMENT_SOURCE: "https://pay.google.com/gp/p/js/pay.js", INTEGRATION: "dropin2", PAYPAL_CHECKOUT_SCRIPT_ID: "braintree-dropin-paypal-checkout-script", GOOGLE_PAYMENT_SCRIPT_ID: "braintree-dropin-google-payment-script", DATA_COLLECTOR_SCRIPT_ID: "braintree-dropin-data-collector-script", STYLESHEET_ID: "braintree-dropin-stylesheet" }
        }, {}],
        113: [function(e, t, r) {
            "use strict";
            var o = e("./lib/dropin-error"),
                i = e("./lib/event-emitter"),
                n = e("./constants"),
                a = n.paymentMethodTypes,
                s = n.paymentOptionIDs,
                l = e("./lib/is-guest-checkout"),
                d = e("./lib/promise"),
                c = e("./views/payment-sheet-views"),
                p = [a.applePay, a.googlePay, a.venmo],
                u = [s.card, s.paypal, s.paypalCredit, s.venmo, s.applePay, s.googlePay];

            function h(e) { this.componentID = e.componentID, this.merchantConfiguration = e.merchantConfiguration, this.isGuestCheckout = l(e.client), this.dependenciesInitializing = 0, this.dependencySuccessCount = 0, this.failedDependencies = {}, this._options = e, i.call(this) }(h.prototype = Object.create(i.prototype, { constructor: h })).initialize = function() { return function(a) { var e, r = a.merchantConfiguration.paymentOptionPriority || u; if (!(r instanceof Array)) throw new o("paymentOptionPriority must be an array."); return r = r.filter(function(e, t) { return r.indexOf(e) === t }), e = r.map(function(e) { return (t = n = e, r = a, i = c[s[t]], i ? i.isEnabled({ client: r.client, merchantConfiguration: r.merchantConfiguration }).catch(function(e) { return console.error(i.ID + " view errored when checking if it was supported."), console.error(e), d.resolve(!1) }) : d.reject(new o("paymentOptionPriority: Invalid payment option specified."))).then(function(e) { return { success: e, id: s[n] } }); var t, r, i, n }), d.all(e).then(function(e) { return 0 === (e = e.filter(function(e) { return e.success })).length ? d.reject(new o("No valid payment options available.")) : e.map(function(e) { return e.id }) }) }(this._options).then(function(e) { this.supportedPaymentOptions = e, this._paymentMethods = this._getSupportedPaymentMethods(this._options.paymentMethods), this._paymentMethodIsRequestable = 0 < this._paymentMethods.length }.bind(this)) }, h.prototype.isPaymentMethodRequestable = function() { return Boolean(this._paymentMethodIsRequestable) }, h.prototype.addPaymentMethod = function(e) { this._paymentMethods.push(e), this._emit("addPaymentMethod", e), this.changeActivePaymentMethod(e) }, h.prototype.removePaymentMethod = function(e) { var t = this._paymentMethods.indexOf(e); - 1 !== t && (this._paymentMethods.splice(t, 1), this._emit("removePaymentMethod", e)) }, h.prototype.changeActivePaymentMethod = function(e) { this._activePaymentMethod = e, this._emit("changeActivePaymentMethod", e) }, h.prototype.changeActivePaymentView = function(e) { this._activePaymentView = e, this._emit("changeActivePaymentView", e) }, h.prototype.removeActivePaymentMethod = function() { this._activePaymentMethod = null, this._emit("removeActivePaymentMethod"), this.setPaymentMethodRequestable({ isRequestable: !1 }) }, h.prototype.selectPaymentOption = function(e) { this._emit("paymentOptionSelected", { paymentOption: e }) }, h.prototype._shouldEmitRequestableEvent = function(e) {
                var t = this.isPaymentMethodRequestable() === e.isRequestable,
                    r = e.type === this._paymentMethodRequestableType;
                return !(t && (!e.isRequestable || r))
            }, h.prototype.setPaymentMethodRequestable = function(e) {
                var t = this._shouldEmitRequestableEvent(e),
                    r = { paymentMethodIsSelected: Boolean(e.selectedPaymentMethod), type: e.type };
                this._paymentMethodIsRequestable = e.isRequestable, e.isRequestable ? this._paymentMethodRequestableType = e.type : delete this._paymentMethodRequestableType, t && (e.isRequestable ? this._emit("paymentMethodRequestable", r) : this._emit("noPaymentMethodRequestable"))
            }, h.prototype.getPaymentMethods = function() { return this._paymentMethods.slice() }, h.prototype.getActivePaymentMethod = function() { return this._activePaymentMethod }, h.prototype.getActivePaymentView = function() { return this._activePaymentView }, h.prototype.reportAppSwitchPayload = function(e) { this.appSwitchPayload = e }, h.prototype.reportAppSwitchError = function(e, t) { this.appSwitchError = { id: e, error: t } }, h.prototype.asyncDependencyStarting = function() { this.dependenciesInitializing++ }, h.prototype.asyncDependencyReady = function() { this.dependencySuccessCount++, this.dependenciesInitializing--, this._checkAsyncDependencyFinished() }, h.prototype.asyncDependencyFailed = function(e) { this.failedDependencies.hasOwnProperty(e.view) || (this.failedDependencies[e.view] = e.error, this.dependenciesInitializing--, this._checkAsyncDependencyFinished()) }, h.prototype._checkAsyncDependencyFinished = function() { 0 === this.dependenciesInitializing && this._emit("asyncDependenciesReady") }, h.prototype.cancelInitialization = function(e) { this._emit("cancelInitialization", e) }, h.prototype.reportError = function(e) { this._emit("errorOccurred", e) }, h.prototype.clearError = function() { this._emit("errorCleared") }, h.prototype.preventUserAction = function() { this._emit("preventUserAction") }, h.prototype.allowUserAction = function() { this._emit("allowUserAction") }, h.prototype._getSupportedPaymentMethods = function(e) { var t = this.supportedPaymentOptions.reduce(function(e, t) { var r, i = a[t]; return (r = i) && -1 === p.indexOf(r) && e.push(i), e }, []); return e.filter(function(e) { return -1 < t.indexOf(e.type) }) }, t.exports = h
        }, { "./constants": 112, "./lib/dropin-error": 124, "./lib/event-emitter": 125, "./lib/is-guest-checkout": 127, "./lib/promise": 132, "./views/payment-sheet-views": 171 }],
        114: [function(e, t, r) {
            "use strict";
            var a = e("./lib/assign").assign,
                o = e("./lib/analytics"),
                s = e("./constants"),
                l = e("./lib/dropin-error"),
                d = e("./dropin-model"),
                i = e("./lib/event-emitter"),
                n = e("./lib/is-guest-checkout"),
                c = e("./lib/assets"),
                p = e("./views/main-view"),
                u = e("./views/payment-methods-view").ID,
                h = e("./views/payment-options-view").ID,
                y = s.paymentOptionIDs,
                m = e("./translations").translations,
                f = e("./lib/is-utf-8"),
                v = e("./lib/uuid"),
                b = e("./lib/promise"),
                g = e("./lib/sanitize-html"),
                E = e("./lib/data-collector"),
                _ = e("./lib/three-d-secure"),
                P = e("@braintree/wrap-promise").wrapPrototype,
                C = [y.paypal, y.paypalCredit, y.applePay, y.googlePay, "threeDSecure"],
                T = [y.paypal, y.paypalCredit, y.applePay, y.googlePay];

            function A(e) { this._client = e.client, this._componentID = v(), this._dropinWrapper = document.createElement("div"), this._dropinWrapper.id = "braintree--dropin__" + this._componentID, this._dropinWrapper.setAttribute("data-braintree-id", "wrapper"), this._dropinWrapper.style.display = "none", this._dropinWrapper.className = "braintree-loading", this._merchantConfiguration = e.merchantConfiguration, i.call(this) }

            function I(e) { var t = { nonce: e.nonce, details: e.details, type: e.type }; return null != e.vaulted && (t.vaulted = e.vaulted), e.type === s.paymentMethodTypes.card && (t.description = e.description), e.type === s.paymentMethodTypes.googlePay && (t.details.rawPaymentData = e.rawPaymentData), "boolean" == typeof e.liabilityShiftPossible && (t.liabilityShifted = e.liabilityShifted, t.liabilityShiftPossible = e.liabilityShiftPossible), e.deviceData && (t.deviceData = e.deviceData), e.binData && (t.binData = e.binData), t }(A.prototype = Object.create(i.prototype, { constructor: A }))._initialize = function(t) {
                var e, r, i = this,
                    n = i._merchantConfiguration.container || i._merchantConfiguration.selector;
                return i._injectStylesheet(), n ? i._merchantConfiguration.container && i._merchantConfiguration.selector ? (o.sendEvent(i._client, "configuration-error"), void t(new l("Must only have one options.selector or options.container."))) : ("string" == typeof n && (n = document.querySelector(n)), n && 1 === n.nodeType ? n.innerHTML.trim() ? (o.sendEvent(i._client, "configuration-error"), void t(new l("options.selector or options.container must reference an empty DOM node."))) : (i._strings = a({}, m.en), i._merchantConfiguration.locale && (e = m[i._merchantConfiguration.locale] || m[i._merchantConfiguration.locale.split("_")[0]], i._strings = a(i._strings, e)), f() || (i._strings.endingIn = i._strings.endingIn.replace(/â€¢/g, "*")), i._merchantConfiguration.translations && Object.keys(i._merchantConfiguration.translations).forEach(function(e) { i._strings[e] = g(i._merchantConfiguration.translations[e]) }), r = Object.keys(i._strings).reduce(function(e, t) { var r = i._strings[t]; return e.replace(RegExp("{{" + t + "}}", "g"), r) }, '<div class="braintree-dropin">\n  <div data-braintree-id="methods-label" class="braintree-heading">&nbsp;</div>\n  <div data-braintree-id="choose-a-way-to-pay" class="braintree-heading">{{chooseAWayToPay}}</div>\n  <div class="braintree-placeholder">&nbsp;</div>\n\n  <div data-braintree-id="upper-container" class="braintree-upper-container">\n    <div data-braintree-id="loading-container" class="braintree-loader__container">\n      <div data-braintree-id="loading-indicator" class="braintree-loader__indicator">\n        <svg width="14" height="16" class="braintree-loader__lock">\n          <use xlink:href="#iconLockLoader"></use>\n        </svg>\n      </div>\n    </div>\n\n    <div data-braintree-id="methods" class="braintree-methods braintree-methods-initial">\n      <div data-braintree-id="methods-container"></div>\n    </div>\n\n    <div data-braintree-id="options" class="braintree-test-class braintree-options braintree-options-initial">\n      <div data-braintree-id="payment-options-container" class="braintree-options-list"></div>\n    </div>\n\n    <div data-braintree-id="sheet-container" class="braintree-sheet__container">\n      <div data-braintree-id="paypal" class="braintree-paypal braintree-sheet">\n        <div data-braintree-id="paypal-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg width="40" height="24">\n                <use xlink:href="#logoPayPal"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{PayPal}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="paypal-button" class="braintree-sheet__button--paypal"></div>\n        </div>\n      </div>\n      <div data-braintree-id="paypalCredit" class="braintree-paypalCredit braintree-sheet">\n        <div data-braintree-id="paypal-credit-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg width="40" height="24">\n                <use xlink:href="#logoPayPalCredit"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{PayPal Credit}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="paypal-credit-button" class="braintree-sheet__button--paypal"></div>\n        </div>\n      </div>\n      <div data-braintree-id="applePay" class="braintree-applePay braintree-sheet">\n        <div data-braintree-id="apple-pay-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg height="24" width="40">\n              <use xlink:href="#logoApplePay"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{Apple Pay}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <div data-braintree-id="apple-pay-button" class="braintree-sheet__button--apple-pay apple-pay-button"></div>\n        </div>\n      </div>\n      <div data-braintree-id="googlePay" class="braintree-googlePay braintree-sheet">\n        <div data-braintree-id="google-pay-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg height="24" width="40">\n              <use xlink:href="#logoGooglePay"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{Google Pay}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <button type="button" data-braintree-id="google-pay-button" class="braintree-sheet__button--google-pay google-pay-button"></button>\n        </div>\n      </div>\n      <div data-braintree-id="venmo" class="braintree-venmo braintree-sheet">\n        <div data-braintree-id="venmo-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg height="24" width="40">\n              <use xlink:href="#logoVenmo"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__label">{{Venmo}}</div>\n          </div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--button">\n          <svg data-braintree-id="venmo-button" class="braintree-sheet__button--venmo">\n            <use xlink:href="#buttonVenmo"></use>\n          </svg>\n        </div>\n      </div>\n      <div data-braintree-id="card" class="braintree-card braintree-form braintree-sheet">\n        <div data-braintree-id="card-sheet-header" class="braintree-sheet__header">\n          <div class="braintree-sheet__header-label">\n            <div class="braintree-sheet__logo--header">\n              <svg width="40" height="24" class="braintree-icon--bordered">\n                <use xlink:href="#iconCardFront"></use>\n              </svg>\n            </div>\n            <div class="braintree-sheet__text">{{payWithCard}}</div>\n          </div>\n          <div data-braintree-id="card-view-icons" class="braintree-sheet__icons"></div>\n        </div>\n        <div class="braintree-sheet__content braintree-sheet__content--form">\n          <div data-braintree-id="cardholder-name-field-group" class="braintree-form__field-group">\n            <label for="braintree__card-view-input__cardholder-name">\n              <div class="braintree-form__label">{{cardholderNameLabel}}</div>\n              <div class="braintree-form__field">\n                <div class="braintree-form-cardholder-name braintree-form__hosted-field">\n                  <input id="braintree__card-view-input__cardholder-name" type="text" placeholder="{{cardholderNamePlaceholder}}"/>\n                </div>\n                <div class="braintree-form__icon-container">\n                  <div class="braintree-form__icon braintree-form__field-error-icon">\n                    <svg width="24" height="24">\n                      <use xlink:href="#iconError"></use>\n                    </svg>\n                  </div>\n                </div>\n              </div>\n            </label>\n            <div data-braintree-id="cardholder-name-field-error" class="braintree-form__field-error"></div>\n          </div>\n          <div data-braintree-id="number-field-group" class="braintree-form__field-group">\n            <label>\n              <div class="braintree-form__label">{{cardNumberLabel}}</div>\n              <div class="braintree-form__field">\n                <div class="braintree-form-number braintree-form__hosted-field"></div>\n                <div class="braintree-form__icon-container">\n                  <div data-braintree-id="card-number-icon" class="braintree-form__icon braintree-form__field-secondary-icon">\n                    <svg width="40" height="24" class="braintree-icon--bordered">\n                    <use data-braintree-id="card-number-icon-svg" xlink:href="#iconCardFront"></use>\n                    </svg>\n                  </div>\n                  <div class="braintree-form__icon braintree-form__field-error-icon">\n                    <svg width="24" height="24">\n                      <use xlink:href="#iconError"></use>\n                    </svg>\n                  </div>\n                </div>\n              </div>\n            </label>\n            <div data-braintree-id="number-field-error" class="braintree-form__field-error"></div>\n          </div>\n\n          <div class="braintree-form__flexible-fields">\n            <div data-braintree-id="expiration-date-field-group" class="braintree-form__field-group">\n              <label>\n                <div class="braintree-form__label">{{expirationDateLabel}}\n                  <span class="braintree-form__descriptor">{{expirationDateLabelSubheading}}</span>\n                </div>\n                <div class="braintree-form__field">\n                  <div class="braintree-form__hosted-field braintree-form-expiration"></div>\n                  <div class="braintree-form__icon-container">\n                    <div class="braintree-form__icon braintree-form__field-error-icon">\n                      <svg width="24" height="24">\n                        <use xlink:href="#iconError"></use>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n\n                <div data-braintree-id="expiration-date-field-error" class="braintree-form__field-error"></div>\n              </div>\n            </label>\n\n            <div data-braintree-id="cvv-field-group" class="braintree-form__field-group">\n              <label>\n                <div class="braintree-form__label">{{cvvLabel}}\n                  <span data-braintree-id="cvv-label-descriptor" class="braintree-form__descriptor">{{cvvThreeDigitLabelSubheading}}</span>\n                </div>\n                <div class="braintree-form__field">\n                  <div class="braintree-form__hosted-field braintree-form-cvv"></div>\n                  <div class="braintree-form__icon-container">\n                    <div data-braintree-id="cvv-icon" class="braintree-form__icon braintree-form__field-secondary-icon">\n                      <svg width="40" height="24" class="braintree-icon--bordered">\n                      <use data-braintree-id="cvv-icon-svg" xlink:href="#iconCVVBack"></use>\n                      </svg>\n                    </div>\n                    <div class="braintree-form__icon braintree-form__field-error-icon">\n                      <svg width="24" height="24">\n                        <use xlink:href="#iconError"></use>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n              </label>\n              <div data-braintree-id="cvv-field-error" class="braintree-form__field-error"></div>\n            </div>\n\n            <div data-braintree-id="postal-code-field-group" class="braintree-form__field-group">\n              <label>\n                <div class="braintree-form__label">{{postalCodeLabel}}</div>\n                <div class="braintree-form__field">\n                  <div class="braintree-form__hosted-field braintree-form-postal-code"></div>\n                  <div class="braintree-form__icon-container">\n                    <div class="braintree-form__icon braintree-form__field-error-icon">\n                      <svg width="24" height="24">\n                        <use xlink:href="#iconError"></use>\n                      </svg>\n                    </div>\n                  </div>\n                </div>\n              </label>\n              <div data-braintree-id="postal-code-field-error" class="braintree-form__field-error"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div data-braintree-id="sheet-error" class="braintree-sheet__error">\n        <div class="braintree-form__icon braintree-sheet__error-icon">\n          <svg width="24" height="24">\n            <use xlink:href="#iconError"></use>\n          </svg>\n        </div>\n        <div data-braintree-id="sheet-error-text" class="braintree-sheet__error-text"></div>\n      </div>\n    </div>\n  </div>\n\n  <div data-braintree-id="lower-container" class="braintree-test-class braintree-options braintree-hidden">\n    <div data-braintree-id="other-ways-to-pay" class="braintree-heading">{{otherWaysToPay}}</div>\n  </div>\n\n  <div data-braintree-id="toggle" class="braintree-toggle braintree-hidden" tabindex="0">\n    <span>{{chooseAnotherWayToPay}}</span>\n  </div>\n</div>\n<div data-braintree-id="disable-wrapper" class="braintree-dropin__disabled braintree-hidden"></div>\n'), i._dropinWrapper.innerHTML = '<svg data-braintree-id="svgs" style="display: none">\n  <defs>\n    <symbol id="icon-visa" viewBox="0 0 40 24">\n      <title>Visa</title>\n      <path d="M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z" style="fill: #FFF" />\n      <path d="M0 22.033C0 23.12.892 24 1.992 24h36.016c1.1 0 1.992-.88 1.992-1.967V20.08H0v1.953z" style="fill: #F8B600" />\n      <path d="M0 3.92h40V1.967C40 .88 39.108 0 38.008 0H1.992C.892 0 0 .88 0 1.967V3.92zM19.596 7.885l-2.11 9.478H14.93l2.11-9.478h2.554zm10.743 6.12l1.343-3.56.773 3.56H30.34zm2.85 3.358h2.36l-2.063-9.478H31.31c-.492 0-.905.274-1.088.695l-3.832 8.783h2.682l.532-1.415h3.276l.31 1.415zm-6.667-3.094c.01-2.502-3.6-2.64-3.577-3.76.008-.338.345-.7 1.083-.793.365-.045 1.373-.08 2.517.425l.448-2.01c-.615-.214-1.405-.42-2.39-.42-2.523 0-4.3 1.288-4.313 3.133-.016 1.364 1.268 2.125 2.234 2.58.996.464 1.33.762 1.325 1.177-.006.636-.793.918-1.526.928-1.285.02-2.03-.333-2.623-.6l-.462 2.08c.598.262 1.7.49 2.84.502 2.682 0 4.437-1.273 4.445-3.243zM15.948 7.884l-4.138 9.478h-2.7L7.076 9.8c-.123-.466-.23-.637-.606-.834-.615-.32-1.63-.62-2.52-.806l.06-.275h4.345c.554 0 1.052.354 1.178.966l1.076 5.486 2.655-6.45h2.683z" style="fill: #1A1F71" />\n    </symbol>\n\n    <symbol id="icon-master-card" viewBox="0 0 40 24">\n      <title>MasterCard</title>\n      <path d="M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z" style="fill: #FFF" />\n      <path d="M11.085 22.2v-1.36c0-.522-.318-.863-.864-.863-.272 0-.568.09-.773.386-.16-.25-.386-.386-.727-.386-.228 0-.455.068-.637.318v-.272h-.478V22.2h.478v-1.202c0-.386.204-.567.523-.567.318 0 .478.205.478.568V22.2h.477v-1.202c0-.386.23-.567.524-.567.32 0 .478.205.478.568V22.2h.523zm7.075-2.177h-.774v-.658h-.478v.658h-.432v.43h.432v.998c0 .5.205.795.75.795.206 0 .433-.068.592-.16l-.136-.407c-.136.09-.296.114-.41.114-.227 0-.318-.137-.318-.363v-.976h.774v-.43zm4.048-.046c-.273 0-.454.136-.568.318v-.272h-.478V22.2h.478v-1.225c0-.363.16-.567.455-.567.09 0 .204.023.295.046l.137-.454c-.09-.023-.228-.023-.32-.023zm-6.118.227c-.228-.16-.546-.227-.888-.227-.546 0-.91.272-.91.703 0 .363.274.567.75.635l.23.023c.25.045.385.113.385.227 0 .16-.182.272-.5.272-.32 0-.57-.113-.728-.227l-.228.363c.25.18.59.272.932.272.637 0 1-.295 1-.703 0-.385-.295-.59-.75-.658l-.227-.022c-.205-.023-.364-.068-.364-.204 0-.16.16-.25.41-.25.272 0 .545.114.682.182l.205-.386zm12.692-.227c-.273 0-.455.136-.568.318v-.272h-.478V22.2h.478v-1.225c0-.363.16-.567.455-.567.09 0 .203.023.294.046L29.1 20c-.09-.023-.227-.023-.318-.023zm-6.096 1.134c0 .66.455 1.135 1.16 1.135.32 0 .546-.068.774-.25l-.228-.385c-.182.136-.364.204-.57.204-.385 0-.658-.272-.658-.703 0-.407.273-.68.66-.702.204 0 .386.068.568.204l.228-.385c-.228-.182-.455-.25-.774-.25-.705 0-1.16.477-1.16 1.134zm4.413 0v-1.087h-.48v.272c-.158-.204-.385-.318-.68-.318-.615 0-1.093.477-1.093 1.134 0 .66.478 1.135 1.092 1.135.317 0 .545-.113.68-.317v.272h.48v-1.09zm-1.753 0c0-.384.25-.702.66-.702.387 0 .66.295.66.703 0 .387-.273.704-.66.704-.41-.022-.66-.317-.66-.703zm-5.71-1.133c-.636 0-1.09.454-1.09 1.134 0 .682.454 1.135 1.114 1.135.32 0 .638-.09.888-.295l-.228-.34c-.18.136-.41.227-.636.227-.296 0-.592-.136-.66-.522h1.615v-.18c.022-.704-.388-1.158-1.002-1.158zm0 .41c.297 0 .502.18.547.52h-1.137c.045-.295.25-.52.59-.52zm11.852.724v-1.95h-.48v1.135c-.158-.204-.385-.318-.68-.318-.615 0-1.093.477-1.093 1.134 0 .66.478 1.135 1.092 1.135.318 0 .545-.113.68-.317v.272h.48v-1.09zm-1.752 0c0-.384.25-.702.66-.702.386 0 .66.295.66.703 0 .387-.274.704-.66.704-.41-.022-.66-.317-.66-.703zm-15.97 0v-1.087h-.476v.272c-.16-.204-.387-.318-.683-.318-.615 0-1.093.477-1.093 1.134 0 .66.478 1.135 1.092 1.135.318 0 .545-.113.682-.317v.272h.477v-1.09zm-1.773 0c0-.384.25-.702.66-.702.386 0 .66.295.66.703 0 .387-.274.704-.66.704-.41-.022-.66-.317-.66-.703z" style="fill: #000" />\n      <path style="fill: #FF5F00" d="M23.095 3.49H15.93v12.836h7.165" />\n      <path d="M16.382 9.91c0-2.61 1.23-4.922 3.117-6.42-1.39-1.087-3.14-1.745-5.05-1.745-4.528 0-8.19 3.65-8.19 8.164 0 4.51 3.662 8.162 8.19 8.162 1.91 0 3.66-.657 5.05-1.746-1.89-1.474-3.118-3.81-3.118-6.417z" style="fill: #EB001B" />\n      <path d="M32.76 9.91c0 4.51-3.664 8.162-8.19 8.162-1.91 0-3.662-.657-5.05-1.746 1.91-1.496 3.116-3.81 3.116-6.417 0-2.61-1.228-4.922-3.116-6.42 1.388-1.087 3.14-1.745 5.05-1.745 4.526 0 8.19 3.674 8.19 8.164z" style="fill: #F79E1B" />\n    </symbol>\n\n    <symbol id="icon-unionpay" viewBox="0 0 40 24">\n      <title>Union Pay</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" style="fill: #FFF" />\n      <path d="M9.877 2h8.126c1.135 0 1.84.93 1.575 2.077l-3.783 16.35c-.267 1.142-1.403 2.073-2.538 2.073H5.13c-1.134 0-1.84-.93-1.574-2.073L7.34 4.076C7.607 2.93 8.74 2 9.878 2z" style="fill: #E21836" />\n      <path d="M17.325 2h9.345c1.134 0 .623.93.356 2.077l-3.783 16.35c-.265 1.142-.182 2.073-1.32 2.073H12.58c-1.137 0-1.84-.93-1.574-2.073l3.783-16.35C15.056 2.93 16.19 2 17.324 2z" style="fill: #00447B" />\n      <path d="M26.3 2h8.126c1.136 0 1.84.93 1.575 2.077l-3.782 16.35c-.266 1.142-1.402 2.073-2.54 2.073h-8.122c-1.137 0-1.842-.93-1.574-2.073l3.78-16.35C24.03 2.93 25.166 2 26.303 2z" style="fill: #007B84" />\n      <path d="M27.633 14.072l-.99 3.3h.266l-.208.68h-.266l-.062.212h-.942l.064-.21H23.58l.193-.632h.194l1.005-3.35.2-.676h.962l-.1.34s.255-.184.498-.248c.242-.064 1.636-.088 1.636-.088l-.206.672h-.33zm-1.695 0l-.254.843s.285-.13.44-.172c.16-.04.395-.057.395-.057l.182-.614h-.764zm-.38 1.262l-.263.877s.29-.15.447-.196c.157-.037.396-.066.396-.066l.185-.614h-.766zm-.614 2.046h.767l.222-.74h-.765l-.223.74z" style="fill: #FEFEFE" />\n      <path d="M28.055 13.4h1.027l.01.385c-.005.065.05.096.17.096h.208l-.19.637h-.555c-.48.035-.662-.172-.65-.406l-.02-.71zM28.193 16.415h-.978l.167-.566H28.5l.16-.517h-1.104l.19-.638h3.072l-.193.638h-1.03l-.16.516h1.032l-.17.565H29.18l-.2.24h.454l.11.712c.013.07.014.116.036.147.023.026.158.038.238.038h.137l-.21.694h-.348c-.054 0-.133-.004-.243-.01-.105-.008-.18-.07-.25-.105-.064-.03-.16-.11-.182-.24l-.11-.712-.507.7c-.162.222-.38.39-.748.39h-.712l.186-.62h.273c.078 0 .15-.03.2-.056.052-.023.098-.05.15-.126l.74-1.05zM17.478 14.867h2.59l-.19.622H18.84l-.16.53h1.06l-.194.64h-1.06l-.256.863c-.03.095.25.108.353.108l.53-.072-.212.71h-1.193c-.096 0-.168-.013-.272-.037-.1-.023-.145-.07-.19-.138-.043-.07-.11-.128-.064-.278l.343-1.143h-.588l.195-.65h.592l.156-.53h-.588l.188-.623zM19.223 13.75h1.063l-.194.65H18.64l-.157.136c-.067.066-.09.038-.18.087-.08.04-.254.123-.477.123h-.466l.19-.625h.14c.118 0 .198-.01.238-.036.046-.03.098-.096.157-.203l.267-.487h1.057l-.187.356zM20.74 13.4h.905l-.132.46s.286-.23.487-.313c.2-.075.65-.143.65-.143l1.464-.007-.498 1.672c-.085.286-.183.472-.244.555-.055.087-.12.16-.248.23-.124.066-.236.104-.34.115-.096.007-.244.01-.45.012h-1.41l-.4 1.324c-.037.13-.055.194-.03.23.02.03.068.066.135.066l.62-.06-.21.726h-.698c-.22 0-.383-.004-.495-.013-.108-.01-.22 0-.295-.058-.065-.058-.164-.133-.162-.21.007-.073.037-.192.082-.356l1.268-4.23zm1.922 1.69h-1.484l-.09.3h1.283c.152-.018.184.004.196-.003l.096-.297zm-1.402-.272s.29-.266.786-.353c.112-.022.82-.015.82-.015l.106-.357h-1.496l-.216.725z" style="fill: #FEFEFE" />\n      <path d="M23.382 16.1l-.084.402c-.036.125-.067.22-.16.302-.1.084-.216.172-.488.172l-.502.02-.004.455c-.006.13.028.117.048.138.024.022.045.032.067.04l.157-.008.48-.028-.198.663h-.552c-.385 0-.67-.008-.765-.084-.092-.057-.105-.132-.103-.26l.035-1.77h.88l-.013.362h.212c.072 0 .12-.007.15-.026.027-.02.047-.048.06-.093l.087-.282h.692zM10.84 7.222c-.032.143-.596 2.763-.598 2.764-.12.53-.21.91-.508 1.152-.172.14-.37.21-.6.21-.37 0-.587-.185-.624-.537l-.007-.12.113-.712s.593-2.388.7-2.703c.002-.017.005-.026.007-.035-1.152.01-1.357 0-1.37-.018-.007.024-.037.173-.037.173l-.605 2.688-.05.23-.1.746c0 .22.042.4.13.553.275.485 1.06.557 1.504.557.573 0 1.11-.123 1.47-.345.63-.375.797-.962.944-1.48l.067-.267s.61-2.48.716-2.803c.003-.017.006-.026.01-.035-.835.01-1.08 0-1.16-.018zM14.21 12.144c-.407-.006-.55-.006-1.03.018l-.018-.036c.042-.182.087-.363.127-.548l.06-.25c.086-.39.173-.843.184-.98.007-.084.036-.29-.2-.29-.1 0-.203.048-.307.096-.058.207-.174.79-.23 1.055-.118.558-.126.62-.178.897l-.036.037c-.42-.006-.566-.006-1.05.018l-.024-.04c.08-.332.162-.668.24-.998.203-.9.25-1.245.307-1.702l.04-.028c.47-.067.585-.08 1.097-.185l.043.047-.077.287c.086-.052.168-.104.257-.15.242-.12.51-.155.658-.155.223 0 .468.062.57.323.098.232.034.52-.094 1.084l-.066.287c-.13.627-.152.743-.225 1.174l-.05.036zM15.87 12.144c-.245 0-.405-.006-.56 0-.153 0-.303.008-.532.018l-.013-.02-.015-.02c.062-.238.097-.322.128-.406.03-.084.06-.17.115-.41.072-.315.116-.535.147-.728.033-.187.052-.346.075-.53l.02-.014.02-.018c.244-.036.4-.057.56-.082.16-.024.32-.055.574-.103l.008.023.008.022c-.047.195-.094.39-.14.588-.047.197-.094.392-.137.587-.093.414-.13.57-.152.68-.02.105-.026.163-.063.377l-.022.02-.023.017zM19.542 10.728c.143-.633.033-.928-.108-1.11-.213-.273-.59-.36-.978-.36-.235 0-.793.023-1.23.43-.312.29-.458.687-.546 1.066-.088.387-.19 1.086.447 1.344.198.085.48.108.662.108.466 0 .945-.13 1.304-.513.278-.312.405-.775.448-.965zm-1.07-.046c-.02.106-.113.503-.24.673-.086.123-.19.198-.305.198-.033 0-.235 0-.238-.3-.003-.15.027-.304.063-.47.108-.478.236-.88.56-.88.255 0 .27.298.16.78zM29.536 12.187c-.493-.004-.635-.004-1.09.015l-.03-.037c.124-.472.248-.943.358-1.42.142-.62.175-.882.223-1.244l.037-.03c.49-.07.625-.09 1.135-.186l.015.044c-.093.388-.186.777-.275 1.166-.19.816-.258 1.23-.33 1.658l-.044.035z" style="fill: #FEFEFE" />\n      <path d="M29.77 10.784c.144-.63-.432-.056-.525-.264-.14-.323-.052-.98-.62-1.2-.22-.085-.732.025-1.17.428-.31.29-.458.683-.544 1.062-.088.38-.19 1.078.444 1.328.2.085.384.11.567.103.638-.034 1.124-1.002 1.483-1.386.277-.303.326.115.368-.07zm-.974-.047c-.024.1-.117.503-.244.67-.083.117-.283.192-.397.192-.032 0-.232 0-.24-.3 0-.146.03-.3.067-.467.11-.47.235-.87.56-.87.254 0 .363.293.254.774zM22.332 12.144c-.41-.006-.55-.006-1.03.018l-.018-.036c.04-.182.087-.363.13-.548l.057-.25c.09-.39.176-.843.186-.98.008-.084.036-.29-.198-.29-.1 0-.203.048-.308.096-.057.207-.175.79-.232 1.055-.115.558-.124.62-.176.897l-.035.037c-.42-.006-.566-.006-1.05.018l-.022-.04.238-.998c.203-.9.25-1.245.307-1.702l.038-.028c.472-.067.587-.08 1.098-.185l.04.047-.073.287c.084-.052.17-.104.257-.15.24-.12.51-.155.655-.155.224 0 .47.062.575.323.095.232.03.52-.098 1.084l-.065.287c-.133.627-.154.743-.225 1.174l-.05.036zM26.32 8.756c-.07.326-.282.603-.554.736-.225.114-.498.123-.78.123h-.183l.013-.074.336-1.468.01-.076.007-.058.132.015.71.062c.275.105.388.38.31.74zM25.88 7.22l-.34.003c-.883.01-1.238.006-1.383-.012l-.037.182-.315 1.478-.793 3.288c.77-.01 1.088-.01 1.22.004l.21-1.024s.153-.644.163-.667c0 0 .047-.066.096-.092h.07c.665 0 1.417 0 2.005-.437.4-.298.675-.74.797-1.274.03-.132.054-.29.054-.446 0-.205-.04-.41-.16-.568-.3-.423-.896-.43-1.588-.433zM33.572 9.28l-.04-.043c-.502.1-.594.118-1.058.18l-.034.034-.005.023-.003-.007c-.345.803-.334.63-.615 1.26-.003-.03-.003-.048-.004-.077l-.07-1.37-.044-.043c-.53.1-.542.118-1.03.18l-.04.034-.006.056.003.007c.06.315.047.244.108.738.03.244.065.49.093.73.05.4.077.6.134 1.21-.328.55-.408.757-.722 1.238l.017.044c.478-.018.587-.018.94-.018l.08-.088c.265-.578 2.295-4.085 2.295-4.085zM16.318 9.62c.27-.19.304-.45.076-.586-.23-.137-.634-.094-.906.095-.273.186-.304.45-.075.586.228.134.633.094.905-.096z" style="fill: #FEFEFE" />\n      <path d="M31.238 13.415l-.397.684c-.124.232-.357.407-.728.41l-.632-.01.184-.618h.124c.064 0 .11-.004.148-.022.03-.01.054-.035.08-.072l.233-.373h.988z" style="fill: #FEFEFE" />\n    </symbol>\n\n    <symbol id="icon-american-express" viewBox="0 0 40 24">\n      <title>American Express</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" style="fill: #FFF" />\n      <path style="fill: #1478BE" d="M6.26 12.32h2.313L7.415 9.66M27.353 9.977h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z" />\n      <path d="M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575V15.1zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328H29.53l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z" style="fill: #1478BE" />\n    </symbol>\n\n    <symbol id="icon-jcb" viewBox="0 0 40 24">\n      <title>JCB</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" style="fill: #FFF" />\n      <path d="M33.273 2.01h.013v17.062c-.004 1.078-.513 2.103-1.372 2.746-.63.47-1.366.67-2.14.67-.437 0-4.833.026-4.855 0-.01-.01 0-.07 0-.082v-6.82c0-.04.004-.064.033-.064h5.253c.867 0 1.344-.257 1.692-.61.44-.448.574-1.162.294-1.732-.24-.488-.736-.78-1.244-.913-.158-.04-.32-.068-.483-.083-.01 0-.064 0-.07-.006-.03-.034.023-.04.038-.046.102-.033.215-.042.32-.073.532-.164.993-.547 1.137-1.105.15-.577-.05-1.194-.524-1.552-.34-.257-.768-.376-1.187-.413-.43-.038-4.774-.022-5.21-.022-.072 0-.05-.02-.05-.09V5.63c0-.31.01-.616.073-.92.126-.592.41-1.144.815-1.59.558-.615 1.337-1.01 2.16-1.093.478-.048 4.89-.017 5.305-.017zm-4.06 8.616c.06.272-.01.567-.204.77-.173.176-.407.25-.648.253-.195.003-1.725 0-1.788 0l.003-1.645c.012-.027.02-.018.06-.018.097 0 1.713-.004 1.823.005.232.02.45.12.598.306.076.096.128.208.155.328zm-2.636 2.038h1.944c.242.002.47.063.652.228.226.204.327.515.283.815-.04.263-.194.5-.422.634-.187.112-.39.125-.6.125h-1.857v-1.8z" style="fill: #53B230" />\n      <path d="M6.574 13.89c-.06-.03-.06-.018-.07-.06-.006-.026-.005-8.365.003-8.558.04-.95.487-1.857 1.21-2.47.517-.434 1.16-.71 1.83-.778.396-.04.803-.018 1.2-.018.69 0 4.11-.013 4.12 0 .008.008.002 16.758 0 17.074-.003.956-.403 1.878-1.105 2.523-.506.465-1.15.77-1.83.86-.41.056-5.02.032-5.363.032-.066 0-.054.013-.066-.024-.01-.025 0-7 0-7.17.66.178 1.35.28 2.03.348.662.067 1.33.093 1.993.062.93-.044 1.947-.192 2.712-.762.32-.238.574-.553.73-.922.148-.353.2-.736.2-1.117 0-.348.006-3.93-.016-3.942-.023-.014-2.885-.015-2.9.012-.012.022 0 3.87 0 3.95-.003.47-.16.933-.514 1.252-.468.42-1.11.47-1.707.423-.687-.055-1.357-.245-1.993-.508-.157-.065-.312-.135-.466-.208z" style="fill: #006CB9" />\n      <path d="M15.95 9.835c-.025.02-.05.04-.072.06V6.05c0-.295-.012-.594.01-.888.12-1.593 1.373-2.923 2.944-3.126.382-.05 5.397-.042 5.41-.026.01.01 0 .062 0 .074v16.957c0 1.304-.725 2.52-1.89 3.1-.504.25-1.045.35-1.605.35-.322 0-4.757.015-4.834 0-.05-.01-.023.01-.035-.02-.007-.022 0-6.548 0-7.44v-.422c.554.48 1.256.75 1.96.908.536.12 1.084.176 1.63.196.537.02 1.076.01 1.61-.037.546-.05 1.088-.136 1.625-.244.137-.028.274-.057.41-.09.033-.006.17-.017.187-.044.013-.02 0-.097 0-.12v-1.324c-.582.292-1.19.525-1.83.652-.778.155-1.64.198-2.385-.123-.752-.326-1.2-1.024-1.274-1.837-.076-.837.173-1.716.883-2.212.736-.513 1.7-.517 2.553-.38.634.1 1.245.305 1.825.58.078.037.154.075.23.113V9.322c0-.02.013-.1 0-.118-.02-.028-.152-.038-.188-.046-.066-.016-.133-.03-.2-.045C22.38 9 21.84 8.908 21.3 8.85c-.533-.06-1.068-.077-1.603-.066-.542.01-1.086.054-1.62.154-.662.125-1.32.337-1.883.716-.085.056-.167.117-.245.18z" style="fill: #E20138" />\n    </symbol>\n\n    <symbol id="icon-discover" viewBox="0 0 40 24">\n      <title>Discover</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" style="fill: #FFF" />\n      <path d="M38.995 11.75S27.522 20.1 6.5 23.5h31.495c.552 0 1-.448 1-1V11.75z" style="fill: #F48024" />\n      <path d="M5.332 11.758c-.338.305-.776.438-1.47.438h-.29V8.55h.29c.694 0 1.115.124 1.47.446.37.33.595.844.595 1.372 0 .53-.224 1.06-.595 1.39zM4.077 7.615H2.5v5.515h1.57c.833 0 1.435-.197 1.963-.637.63-.52 1-1.305 1-2.116 0-1.628-1.214-2.762-2.956-2.762zM7.53 13.13h1.074V7.616H7.53M11.227 9.732c-.645-.24-.834-.397-.834-.695 0-.347.338-.61.8-.61.322 0 .587.132.867.446l.562-.737c-.462-.405-1.015-.612-1.618-.612-.975 0-1.718.678-1.718 1.58 0 .76.346 1.15 1.355 1.513.42.148.635.247.743.314.215.14.322.34.322.57 0 .448-.354.78-.834.78-.51 0-.924-.258-1.17-.736l-.695.67c.495.726 1.09 1.05 1.907 1.05 1.116 0 1.9-.745 1.9-1.812 0-.876-.363-1.273-1.585-1.72zM13.15 10.377c0 1.62 1.27 2.877 2.907 2.877.462 0 .858-.09 1.347-.32v-1.267c-.43.43-.81.604-1.297.604-1.082 0-1.85-.785-1.85-1.9 0-1.06.792-1.895 1.8-1.895.512 0 .9.183 1.347.62V7.83c-.472-.24-.86-.34-1.322-.34-1.627 0-2.932 1.283-2.932 2.887zM25.922 11.32l-1.468-3.705H23.28l2.337 5.656h.578l2.38-5.655H27.41M29.06 13.13h3.046v-.934h-1.973v-1.488h1.9v-.934h-1.9V8.55h1.973v-.935H29.06M34.207 10.154h-.314v-1.67h.33c.67 0 1.034.28 1.034.818 0 .554-.364.852-1.05.852zm2.155-.91c0-1.033-.71-1.628-1.95-1.628H32.82v5.514h1.073v-2.215h.14l1.487 2.215h1.32l-1.733-2.323c.81-.165 1.255-.72 1.255-1.563z" style="fill: #221F20" />\n      <path d="M23.6 10.377c0 1.62-1.31 2.93-2.927 2.93-1.617.002-2.928-1.31-2.928-2.93s1.31-2.932 2.928-2.932c1.618 0 2.928 1.312 2.928 2.932z" style="fill: #F48024" />\n    </symbol>\n\n    <symbol id="icon-diners-club" viewBox="0 0 40 24">\n      <title>Diners Club</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" style="fill: #FFF" />\n      <path d="M9.02 11.83c0-5.456 4.54-9.88 10.14-9.88 5.6 0 10.139 4.424 10.139 9.88-.002 5.456-4.54 9.88-10.14 9.88-5.6 0-10.14-4.424-10.14-9.88z" style="fill: #FEFEFE" />\n      <path style="fill: #FFF" d="M32.522 22H8.5V1.5h24.022" />\n      <path d="M25.02 11.732c-.003-2.534-1.607-4.695-3.868-5.55v11.102c2.26-.857 3.865-3.017 3.87-5.552zm-8.182 5.55V6.18c-2.26.86-3.86 3.017-3.867 5.55.007 2.533 1.61 4.69 3.868 5.55zm2.158-14.934c-5.25.002-9.503 4.202-9.504 9.384 0 5.182 4.254 9.38 9.504 9.382 5.25 0 9.504-4.2 9.505-9.382 0-5.182-4.254-9.382-9.504-9.384zM18.973 22C13.228 22.027 8.5 17.432 8.5 11.84 8.5 5.726 13.228 1.5 18.973 1.5h2.692c5.677 0 10.857 4.225 10.857 10.34 0 5.59-5.18 10.16-10.857 10.16h-2.692z" style="fill: #004A97" />\n    </symbol>\n\n    <symbol id="icon-maestro" viewBox="0 0 40 24">\n      <title>Maestro</title>\n      <path d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z" style="fill: #FFF" />\n      <path d="M14.67 22.39V21c.022-.465-.303-.86-.767-.882h-.116c-.3-.023-.603.14-.788.394-.164-.255-.442-.417-.743-.394-.256-.023-.51.116-.65.324v-.278h-.487v2.203h.487v-1.183c-.046-.278.162-.533.44-.58h.094c.325 0 .488.21.488.58v1.23h.487v-1.23c-.047-.278.162-.556.44-.58h.093c.325 0 .487.21.487.58v1.23l.534-.024zm2.712-1.09v-1.113h-.487v.28c-.162-.21-.417-.326-.695-.326-.65 0-1.16.51-1.16 1.16 0 .65.51 1.16 1.16 1.16.278 0 .533-.117.695-.325v.278h.487V21.3zm-1.786 0c.024-.37.348-.65.72-.626.37.023.65.348.626.72-.023.347-.302.625-.673.625-.372 0-.674-.28-.674-.65-.023-.047-.023-.047 0-.07zm12.085-1.16c.163 0 .325.024.465.094.14.046.278.14.37.255.117.115.186.23.256.37.117.3.117.626 0 .927-.046.14-.138.255-.254.37-.116.117-.232.186-.37.256-.303.116-.65.116-.952 0-.14-.046-.28-.14-.37-.255-.118-.116-.187-.232-.257-.37-.116-.302-.116-.627 0-.928.047-.14.14-.255.256-.37.115-.117.23-.187.37-.256.163-.07.325-.116.488-.093zm0 .465c-.092 0-.185.023-.278.046-.092.024-.162.094-.232.14-.07.07-.116.14-.14.232-.068.185-.068.394 0 .58.024.092.094.162.14.23.07.07.14.117.232.14.186.07.37.07.557 0 .092-.023.16-.092.23-.14.07-.068.117-.138.14-.23.07-.186.07-.395 0-.58-.023-.093-.093-.162-.14-.232-.07-.07-.138-.116-.23-.14-.094-.045-.187-.07-.28-.045zm-7.677.695c0-.695-.44-1.16-1.043-1.16-.65 0-1.16.534-1.137 1.183.023.65.534 1.16 1.183 1.136.325 0 .65-.093.905-.302l-.23-.348c-.187.14-.42.232-.65.232-.326.023-.627-.21-.673-.533h1.646v-.21zm-1.646-.21c.023-.3.278-.532.58-.532.3 0 .556.232.556.533h-1.136zm3.664-.346c-.207-.116-.44-.186-.695-.186-.255 0-.417.093-.417.255 0 .163.162.186.37.21l.233.022c.488.07.766.278.766.672 0 .395-.37.72-1.02.72-.348 0-.673-.094-.95-.28l.23-.37c.21.162.465.232.743.232.324 0 .51-.094.51-.28 0-.115-.117-.185-.395-.23l-.232-.024c-.487-.07-.765-.302-.765-.65 0-.44.37-.718.927-.718.325 0 .627.07.905.232l-.21.394zm2.32-.116h-.788v.997c0 .23.07.37.325.37.14 0 .3-.046.417-.115l.14.417c-.186.116-.395.162-.604.162-.58 0-.765-.302-.765-.812v-1.02h-.44v-.44h.44v-.673h.487v.672h.79v.44zm1.67-.51c.117 0 .233.023.35.07l-.14.463c-.093-.045-.21-.045-.302-.045-.325 0-.464.208-.464.58v1.25h-.487v-2.2h.487v.277c.116-.255.325-.37.557-.394z" style="fill: #000" />\n      <path style="fill: #7673C0" d="M23.64 3.287h-7.305V16.41h7.306" />\n      <path d="M16.8 9.848c0-2.55 1.183-4.985 3.2-6.56C16.384.435 11.12 1.06 8.29 4.7 5.435 8.32 6.06 13.58 9.703 16.41c3.038 2.387 7.283 2.387 10.32 0-2.04-1.578-3.223-3.99-3.223-6.562z" style="fill: #EB001B" />\n      <path d="M33.5 9.848c0 4.613-3.735 8.346-8.35 8.346-1.88 0-3.69-.626-5.15-1.785 3.618-2.83 4.245-8.092 1.415-11.71-.418-.532-.882-.996-1.415-1.413C23.618.437 28.883 1.06 31.736 4.7 32.873 6.163 33.5 7.994 33.5 9.85z" style="fill: #00A1DF" />\n    </symbol>\n\n    <symbol id="logoPayPal" viewBox="0 0 48 29">\n      <title>PayPal Logo</title>\n      <path d="M46 29H2c-1.1 0-2-.87-2-1.932V1.934C0 .87.9 0 2 0h44c1.1 0 2 .87 2 1.934v25.134C48 28.13 47.1 29 46 29z" fill-opacity="0" style="fill: #FFF" />\n      <path d="M31.216 16.4c.394-.7.69-1.5.886-2.4.196-.8.196-1.6.1-2.2-.1-.7-.396-1.2-.79-1.7-.195-.3-.59-.5-.885-.7.1-.8.1-1.5 0-2.1-.1-.6-.394-1.1-.886-1.6-.885-1-2.56-1.6-4.922-1.6h-6.4c-.492 0-.787.3-.886.8l-2.658 17.2c0 .2 0 .3.1.4.097.1.294.2.393.2h4.036l-.295 1.8c0 .1 0 .3.1.4.098.1.195.2.393.2h3.35c.393 0 .688-.3.786-.7v-.2l.59-4.1v-.2c.1-.4.395-.7.788-.7h.59c1.675 0 3.152-.4 4.137-1.1.59-.5 1.083-1 1.478-1.7h-.002z" style="fill: #263B80" />\n      <path d="M21.364 9.4c0-.3.196-.5.492-.6.098-.1.196-.1.394-.1h5.02c.592 0 1.183 0 1.675.1.1 0 .295.1.394.1.098 0 .294.1.393.1.1 0 .1 0 .197.102.295.1.492.2.69.3.295-1.6 0-2.7-.887-3.8-.985-1.1-2.658-1.6-4.923-1.6h-6.4c-.49 0-.885.3-.885.8l-2.758 17.3c-.098.3.197.6.59.6h3.94l.985-6.4 1.083-6.9z" style="fill: #263B80" />\n      <path d="M30.523 9.4c0 .1 0 .3-.098.4-.887 4.4-3.742 5.9-7.484 5.9h-1.87c-.492 0-.787.3-.886.8l-.985 6.2-.296 1.8c0 .3.196.6.492.6h3.348c.394 0 .69-.3.787-.7v-.2l.592-4.1v-.2c.1-.4.394-.7.787-.7h.69c3.248 0 5.808-1.3 6.497-5.2.296-1.6.197-3-.69-3.9-.196-.3-.49-.5-.885-.7z" style="fill: #159BD7" />\n      <path d="M29.635 9c-.098 0-.295-.1-.394-.1-.098 0-.294-.1-.393-.1-.492-.102-1.083-.102-1.673-.102h-5.022c-.1 0-.197 0-.394.1-.198.1-.394.3-.492.6l-1.083 6.9v.2c.1-.5.492-.8.886-.8h1.87c3.742 0 6.598-1.5 7.484-5.9 0-.1 0-.3.098-.4-.196-.1-.492-.2-.69-.3 0-.1-.098-.1-.196-.1z" style="fill: #232C65" />\n    </symbol>\n\n    <symbol id="logoPayPalCredit" viewBox="0 0 48 29">\n      <title>PayPal Credit Logo</title>\n      <path d="M46 29H2c-1.1 0-2-.87-2-1.932V1.934C0 .87.9 0 2 0h44c1.1 0 2 .87 2 1.934v25.134C48 28.13 47.1 29 46 29z" fill-opacity="0" style="fill: #FFF" fill-rule="nonzero" />\n      <path d="M27.44 21.6h.518c1.377 0 2.67-.754 2.953-2.484.248-1.588-.658-2.482-2.14-2.482h-.38c-.093 0-.172.067-.187.16l-.763 4.805zm-1.254-6.646c.024-.158.16-.273.32-.273h2.993c2.47 0 4.2 1.942 3.81 4.436-.4 2.495-2.752 4.436-5.21 4.436h-3.05c-.116 0-.205-.104-.187-.218l1.323-8.38zM22.308 16.907l-.192 1.21h2.38c.116 0 .204.103.186.217l-.23 1.462c-.023.157-.16.273-.318.273h-2.048c-.16 0-.294.114-.32.27l-.203 1.26h2.52c.117 0 .205.102.187.217l-.228 1.46c-.025.16-.16.275-.32.275h-4.55c-.116 0-.204-.104-.186-.218l1.322-8.38c.025-.158.16-.273.32-.273h4.55c.116 0 .205.104.187.22l-.23 1.46c-.024.158-.16.274-.32.274H22.63c-.16 0-.295.115-.32.273M35.325 23.552h-1.81c-.115 0-.203-.104-.185-.218l1.322-8.38c.025-.158.16-.273.32-.273h1.81c.115 0 .203.104.185.22l-1.322 8.38c-.025.156-.16.272-.32.272M14.397 18.657h.224c.754 0 1.62-.14 1.777-1.106.158-.963-.345-1.102-1.15-1.104h-.326c-.097 0-.18.07-.197.168l-.326 2.043zm3.96 4.895h-2.37c-.102 0-.194-.058-.238-.15l-1.565-3.262h-.023l-.506 3.19c-.02.128-.13.222-.26.222h-1.86c-.116 0-.205-.104-.187-.218l1.33-8.432c.02-.128.13-.22.26-.22h3.222c1.753 0 2.953.834 2.66 2.728-.2 1.224-1.048 2.283-2.342 2.506l2.037 3.35c.076.125-.014.286-.16.286zM40.216 23.552h-1.808c-.116 0-.205-.104-.187-.218l1.06-6.7h-1.684c-.116 0-.205-.104-.187-.218l.228-1.462c.025-.157.16-.273.32-.273h5.62c.116 0 .205.104.186.22l-.228 1.46c-.025.158-.16.274-.32.274h-1.63l-1.05 6.645c-.025.156-.16.272-.32.272M11.467 17.202c-.027.164-.228.223-.345.104-.395-.405-.975-.62-1.6-.62-1.41 0-2.526 1.083-2.75 2.458-.21 1.4.588 2.41 2.022 2.41.592 0 1.22-.225 1.74-.6.144-.105.34.02.313.194l-.328 2.03c-.02.12-.108.22-.226.254-.702.207-1.24.355-1.9.355-3.823 0-4.435-3.266-4.238-4.655.553-3.894 3.712-4.786 5.65-4.678.623.034 1.182.117 1.73.323.177.067.282.25.252.436l-.32 1.99" style="fill: #21306F" />\n      <path d="M23.184 7.67c-.11.717-.657.717-1.186.717h-.302l.212-1.34c.013-.08.082-.14.164-.14h.138c.36 0 .702 0 .877.206.105.123.137.305.097.557zm-.23-1.87h-1.998c-.137 0-.253.098-.274.233l-.808 5.123c-.016.1.062.192.165.192h1.024c.095 0 .177-.07.192-.164l.23-1.452c.02-.135.136-.235.273-.235h.63c1.317 0 2.076-.636 2.275-1.898.09-.553.003-.987-.255-1.29-.284-.334-.788-.51-1.456-.51z" style="fill: #0093C7" />\n      <path d="M8.936 7.67c-.11.717-.656.717-1.186.717h-.302l.212-1.34c.013-.08.082-.14.164-.14h.138c.36 0 .702 0 .877.206.104.123.136.305.096.557zm-.23-1.87H6.708c-.136 0-.253.098-.274.233l-.808 5.123c-.016.1.062.192.165.192h.955c.136 0 .252-.1.274-.234l.217-1.382c.02-.135.137-.235.274-.235h.633c1.316 0 2.075-.636 2.274-1.898.09-.553.003-.987-.255-1.29-.284-.334-.788-.51-1.456-.51zM13.343 9.51c-.092.545-.526.912-1.08.912-.277 0-.5-.09-.642-.258-.14-.168-.193-.406-.148-.672.086-.542.527-.92 1.072-.92.27 0 .492.09.637.26.148.172.205.412.163.677zm1.334-1.863h-.957c-.082 0-.152.06-.164.14l-.042.268-.067-.097c-.208-.3-.67-.4-1.13-.4-1.057 0-1.96.8-2.135 1.923-.092.56.038 1.097.356 1.47.29.344.708.487 1.204.487.852 0 1.325-.548 1.325-.548l-.043.265c-.016.1.062.193.164.193h.862c.136 0 .253-.1.274-.234l.517-3.275c.017-.102-.06-.193-.163-.193z" style="fill: #21306F" />\n      <path d="M27.59 9.51c-.09.545-.525.912-1.078.912-.278 0-.5-.09-.643-.258-.142-.168-.195-.406-.15-.672.086-.542.526-.92 1.07-.92.273 0 .494.09.64.26.146.172.203.412.16.677zm1.334-1.863h-.956c-.082 0-.152.06-.164.14l-.043.268-.065-.097c-.208-.3-.67-.4-1.13-.4-1.057 0-1.96.8-2.136 1.923-.092.56.038 1.097.355 1.47.292.344.71.487 1.205.487.852 0 1.325-.548 1.325-.548l-.043.265c-.016.1.062.193.164.193h.862c.136 0 .253-.1.274-.234l.517-3.275c.015-.102-.063-.193-.166-.193z" style="fill: #0093C7" />\n      <path d="M19.77 7.647h-.96c-.092 0-.178.045-.23.122L17.254 9.72l-.562-1.877c-.035-.118-.143-.198-.266-.198h-.945c-.113 0-.194.112-.157.22l1.06 3.108-.997 1.404c-.078.11 0 .262.136.262h.96c.092 0 .177-.044.23-.12l3.196-4.614c.077-.11-.002-.26-.137-.26" style="fill: #21306F" />\n      <path d="M30.052 5.94l-.82 5.216c-.016.1.062.192.165.192h.824c.138 0 .254-.1.275-.234l.81-5.122c.015-.1-.064-.193-.166-.193h-.924c-.082 0-.15.06-.164.14" style="fill: #0093C7" />\n    </symbol>\n\n    <symbol id="iconCardFront" viewBox="0 0 48 29">\n      <title>Generic Card</title>\n      <path d="M46.177 29H1.823C.9 29 0 28.13 0 27.187V1.813C0 .87.9 0 1.823 0h44.354C47.1 0 48 .87 48 1.813v25.375C48 28.13 47.1 29 46.177 29z" style="fill: #FFF" />\n      <path d="M4.8 9.14c0-.427.57-.973 1.067-.973h7.466c.496 0 1.067.546 1.067.972v3.888c0 .425-.57.972-1.067.972H5.867c-.496 0-1.067-.547-1.067-.972v-3.89z" style="fill: #828282" />\n      <rect style="fill: #828282" x="10.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <rect style="fill: #828282" x="4.8" y="22.167" width="3.6" height="2.333" rx="1.167" />\n      <path d="M6.55 16.333h34.9c.966 0 1.75.784 1.75 1.75 0 .967-.784 1.75-1.75 1.75H6.55c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75z" style="fill: #828282" />\n      <ellipse style="fill: #828282" cx="40.2" cy="6.417" rx="3" ry="2.917" />\n    </symbol>\n\n    <symbol id="iconCVVBack" viewBox="0 0 40 24">\n      <title>CVV Back</title>\n      <path d="M38.48 24H1.52C.75 24 0 23.28 0 22.5v-21C0 .72.75 0 1.52 0h36.96C39.25 0 40 .72 40 1.5v21c0 .78-.75 1.5-1.52 1.5z" style="fill: #FFF"/>\n      <path style="fill: #828282" d="M0 5h40v4H0z" />\n      <path d="M20 13.772v5.456c0 .423.37.772.82.772h13.36c.45 0 .82-.35.82-.772v-5.456c0-.423-.37-.772-.82-.772H20.82c-.45 0-.82.35-.82.772zm-1-.142c0-.9.76-1.63 1.68-1.63h13.64c.928 0 1.68.737 1.68 1.63v5.74c0 .9-.76 1.63-1.68 1.63H20.68c-.928 0-1.68-.737-1.68-1.63v-5.74z" style="fill: #000" fill-rule="nonzero" />\n      <circle style="fill: #828282" cx="23.5" cy="16.5" r="1.5" />\n      <circle style="fill: #828282" cx="27.5" cy="16.5" r="1.5" />\n      <circle style="fill: #828282" cx="31.5" cy="16.5" r="1.5" />\n    </symbol>\n\n    <symbol id="iconCVVFront" viewBox="0 0 40 24">\n      <title>CVV Front</title>\n      <path d="M38.48 24H1.52C.75 24 0 23.28 0 22.5v-21C0 .72.75 0 1.52 0h36.96C39.25 0 40 .72 40 1.5v21c0 .78-.75 1.5-1.52 1.5z" style="fill: #FFF" />\n      <path d="M16 5.772v5.456c0 .423.366.772.81.772h17.38c.444 0 .81-.348.81-.772V5.772C35 5.35 34.634 5 34.19 5H16.81c-.444 0-.81.348-.81.772zm-1-.142c0-.9.75-1.63 1.66-1.63h17.68c.917 0 1.66.737 1.66 1.63v5.74c0 .9-.75 1.63-1.66 1.63H16.66c-.917 0-1.66-.737-1.66-1.63V5.63z" style="fill: #000" fill-rule="nonzero" />\n      <circle style="fill: #828282" cx="19.5" cy="8.5" r="1.5" />\n      <circle style="fill: #828282" cx="27.5" cy="8.5" r="1.5" />\n      <circle style="fill: #828282" cx="23.5" cy="8.5" r="1.5" />\n      <circle style="fill: #828282" cx="31.5" cy="8.5" r="1.5" />\n      <path d="M4 7.833C4 7.47 4.476 7 4.89 7h6.22c.414 0 .89.47.89.833v3.334c0 .364-.476.833-.89.833H4.89c-.414 0-.89-.47-.89-.833V7.833zM4 18.5c0-.828.668-1.5 1.5-1.5h29c.828 0 1.5.666 1.5 1.5 0 .828-.668 1.5-1.5 1.5h-29c-.828 0-1.5-.666-1.5-1.5z" style="fill: #828282" />\n    </symbol>\n\n    <symbol id="iconCheck" viewBox="0 0 42 32">\n      <title>Check</title>\n      <path class="path1" d="M14.379 29.76L39.741 3.415 36.194.001l-21.815 22.79-10.86-11.17L0 15.064z" />\n    </symbol>\n\n    <symbol id="iconLockLoader" viewBox="0 0 28 32">\n      <title>Lock Loader</title>\n      <path d="M6 10V8c0-4.422 3.582-8 8-8 4.41 0 8 3.582 8 8v2h-4V7.995C18 5.79 16.205 4 14 4c-2.21 0-4 1.792-4 3.995V10H6zM.997 14c-.55 0-.997.445-.997.993v16.014c0 .548.44.993.997.993h26.006c.55 0 .997-.445.997-.993V14.993c0-.548-.44-.993-.997-.993H.997z" />\n    </symbol>\n\n    <symbol id="iconError" height="24" viewBox="0 0 24 24" width="24">\n      <path d="M0 0h24v24H0z" style="fill: none" />\n      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />\n    </symbol>\n\n    <symbol id="logoApplePay" viewBox="0 0 165.52 105.97" width="24">\n      <title>Apple Pay Logo</title>\n      <defs>\n      <style>\n        .cls-1{fill:#231f20;}.cls-2{fill:#fff;}\n      </style>\n      </defs>\n      <path id="_Path_" data-name="&lt;Path&gt;" class="cls-1" d="M150.7 0h-139a20.78 20.78 0 0 0-3.12.3 10.51 10.51 0 0 0-3 1 9.94 9.94 0 0 0-4.31 4.32 10.46 10.46 0 0 0-1 3A20.65 20.65 0 0 0 0 11.7v82.57a20.64 20.64 0 0 0 .3 3.11 10.46 10.46 0 0 0 1 3 9.94 9.94 0 0 0 4.35 4.35 10.47 10.47 0 0 0 3 1 20.94 20.94 0 0 0 3.11.27h142.06a21 21 0 0 0 3.11-.27 10.48 10.48 0 0 0 3-1 9.94 9.94 0 0 0 4.35-4.35 10.4 10.4 0 0 0 1-3 20.63 20.63 0 0 0 .27-3.11V11.69a20.64 20.64 0 0 0-.27-3.11 10.4 10.4 0 0 0-1-3 9.94 9.94 0 0 0-4.35-4.35 10.52 10.52 0 0 0-3-1 20.84 20.84 0 0 0-3.1-.23h-1.43z"/>\n      <path id="_Path_2" data-name="&lt;Path&gt;" class="cls-2" d="M150.7 3.53h3.03a17.66 17.66 0 0 1 2.58.22 7 7 0 0 1 2 .65 6.41 6.41 0 0 1 2.8 2.81 6.88 6.88 0 0 1 .64 2 17.56 17.56 0 0 1 .22 2.58v82.38a17.54 17.54 0 0 1-.22 2.59 6.85 6.85 0 0 1-.64 2 6.41 6.41 0 0 1-2.81 2.81 6.92 6.92 0 0 1-2 .65 18 18 0 0 1-2.57.22H11.79a18 18 0 0 1-2.58-.22 6.94 6.94 0 0 1-2-.65 6.41 6.41 0 0 1-2.8-2.8 6.93 6.93 0 0 1-.65-2 17.47 17.47 0 0 1-.22-2.58v-82.4a17.49 17.49 0 0 1 .22-2.59 6.92 6.92 0 0 1 .65-2 6.41 6.41 0 0 1 2.8-2.8 7 7 0 0 1 2-.65 17.63 17.63 0 0 1 2.58-.22H150.7"/>\n      <g id="_Group_" data-name="&lt;Group&gt;">\n      <g id="_Group_2" data-name="&lt;Group&gt;">\n      <path id="_Path_3" data-name="&lt;Path&gt;" class="cls-1" d="M43.51 35.77a9.15 9.15 0 0 0 2.1-6.52 9.07 9.07 0 0 0-6 3.11 8.56 8.56 0 0 0-2.16 6.27 7.57 7.57 0 0 0 6.06-2.86"/>\n      <path id="_Path_4" data-name="&lt;Path&gt;" class="cls-1" d="M45.59 39.08c-3.35-.2-6.2 1.9-7.79 1.9s-4-1.8-6.7-1.75a9.87 9.87 0 0 0-8.4 5.1c-3.6 6.2-.95 15.4 2.55 20.45 1.7 2.5 3.75 5.25 6.45 5.15s3.55-1.65 6.65-1.65 4 1.65 6.7 1.6 4.55-2.5 6.25-5a22.2 22.2 0 0 0 2.8-5.75 9.08 9.08 0 0 1-5.45-8.25A9.26 9.26 0 0 1 53 43.13a9.57 9.57 0 0 0-7.45-4"/>\n      </g>\n      <g id="_Group_3" data-name="&lt;Group&gt;">\n      <path id="_Compound_Path_" data-name="&lt;Compound Path&gt;" class="cls-1" d="M79 32.11c7.28 0 12.35 5 12.35 12.32S86.15 56.8 78.79 56.8h-8.06v12.82h-5.82V32.11zm-8.27 19.81h6.68c5.07 0 8-2.73 8-7.46S82.48 37 77.44 37h-6.71z"/>\n      <path id="_Compound_Path_2" data-name="&lt;Compound Path&gt;" class="cls-1" d="M92.76 61.85c0-4.81 3.67-7.56 10.42-8l7.25-.44v-2.06c0-3-2-4.7-5.56-4.7-2.94 0-5.07 1.51-5.51 3.82h-5.24c.16-4.86 4.73-8.4 10.92-8.4 6.65 0 11 3.48 11 8.89v18.66h-5.38v-4.5h-.13a9.59 9.59 0 0 1-8.58 4.78c-5.42 0-9.19-3.22-9.19-8.05zm17.68-2.42v-2.11l-6.47.42c-3.64.23-5.54 1.59-5.54 4s2 3.77 5.07 3.77c3.95-.05 6.94-2.57 6.94-6.08z"/>\n      <path id="_Compound_Path_3" data-name="&lt;Compound Path&gt;" class="cls-1" d="M121 79.65v-4.5a17.14 17.14 0 0 0 1.72.1c2.57 0 4-1.09 4.91-3.9l.52-1.66-9.88-27.29h6.08l6.86 22.15h.13l6.86-22.15h5.93l-10.21 28.67c-2.34 6.58-5 8.73-10.68 8.73a15.93 15.93 0 0 1-2.24-.15z"/>\n      </g>\n      </g>\n    </symbol>\n    <symbol id="logoGooglePay" viewBox="0 0 60.51 24.04">\n      <title>GooglePay_AcceptanceMark_RGB_60x24pt</title>\n      <path d="M28.67,11.76v7H26.43V1.42h5.92a5.39,5.39,0,0,1,3.84,1.51A5,5,0,0,1,36.44,10l-.25.26a5.35,5.35,0,0,1-3.84,1.48Zm0-8.2V9.62H32.4a2.93,2.93,0,0,0,2.21-.9A3,3,0,0,0,32.4,3.56Z" fill="#5f6368"/>\n      <path d="M42.93,6.52a5.56,5.56,0,0,1,3.91,1.32,4.71,4.71,0,0,1,1.43,3.63v7.32H46.13V17.14H46a4.28,4.28,0,0,1-3.69,2A4.83,4.83,0,0,1,39.06,18a3.74,3.74,0,0,1-1.32-2.92,3.52,3.52,0,0,1,1.39-2.93,5.87,5.87,0,0,1,3.73-1.09,6.65,6.65,0,0,1,3.27.72v-.51a2.5,2.5,0,0,0-.92-2,3.17,3.17,0,0,0-2.16-.81,3.4,3.4,0,0,0-2.95,1.57l-2-1.23A5.45,5.45,0,0,1,42.93,6.52ZM40,15.15a1.82,1.82,0,0,0,.74,1.46,2.74,2.74,0,0,0,1.74.58,3.58,3.58,0,0,0,2.51-1,3.26,3.26,0,0,0,1.11-2.45,4.54,4.54,0,0,0-2.91-.83,3.74,3.74,0,0,0-2.27.66A2,2,0,0,0,40,15.15Z" fill="#5f6368"/>\n      <path d="M60.52,6.9,53.07,24H50.76l2.77-6L48.63,6.91h2.43l3.54,8.54h0l3.44-8.54Z" fill="#5f6368"/>\n      <path d="M19.65,10.24a12.54,12.54,0,0,0-.17-2H10.06v3.84h5.39a4.61,4.61,0,0,1-2,3v2.49h3.22A9.75,9.75,0,0,0,19.65,10.24Z" fill="#4285f4"/>\n      <path d="M10.06,20a9.54,9.54,0,0,0,6.62-2.41l-3.22-2.49a6,6,0,0,1-3.4.95,6,6,0,0,1-5.6-4.12H1.15V14.5A10,10,0,0,0,10.06,20Z" fill="#34a853"/>\n      <path d="M4.46,11.92a6,6,0,0,1,0-3.82V5.53H1.15a10,10,0,0,0,0,9Z" fill="#fbbc04"/>\n      <path d="M10.06,4a5.44,5.44,0,0,1,3.83,1.5h0l2.85-2.85A9.58,9.58,0,0,0,10.06,0a10,10,0,0,0-8.91,5.5L4.46,8.1A6,6,0,0,1,10.06,4Z" fill="#ea4335"/>\n    </symbol>\n\n    <symbol id="logoVenmo" viewBox="0 0 48 32">\n      <title>Venmo</title>\n      <g fill="none" fill-rule="evenodd">\n        <rect fill="#3D95CE" width="47.4074074" height="31.6049383" rx="3.16049383"/>\n        <path d="M33.1851852,10.1131555 C33.1851852,14.8373944 29.2425262,20.9745161 26.0425868,25.2839506 L18.7337285,25.2839506 L15.8024691,7.35534396 L22.202175,6.73384536 L23.7519727,19.4912014 C25.2000422,17.0781163 26.9870326,13.2859484 26.9870326,10.7005 C26.9870326,9.28531656 26.7500128,8.32139205 26.3796046,7.52770719 L32.207522,6.32098765 C32.8813847,7.45939896 33.1851852,8.63196439 33.1851852,10.1131555 Z" fill="#FFF"/>\n      </g>\n    </symbol>\n    <symbol id="buttonVenmo" viewBox="0 0 295 42">\n      <g fill="none" fill-rule="evenodd">\n        <rect fill="#3D95CE" width="295" height="42" rx="3"/>\n        <path d="M11.3250791 0C11.7902741.780434316 12 1.58428287 12 2.59970884 12 5.838396 9.27822123 10.0456806 7.06917212 13L2.02356829 13 0 .709099732 4.41797878.283033306 5.48786751 9.02879887C6.48752911 7.3745159 7.72116169 4.77480706 7.72116169 3.00236102 7.72116169 2.03218642 7.55753727 1.37137098 7.30182933.827262801L11.3250791 0 11.3250791 0zM17.5051689 5.68512193C18.333931 5.68512193 20.4203856 5.28483546 20.4203856 4.03281548 20.4203856 3.43161451 20.0177536 3.13172102 19.5432882 3.13172102 18.7131868 3.13172102 17.6238766 4.18269796 17.5051689 5.68512193L17.5051689 5.68512193zM17.4102028 8.1647385C17.4102028 9.69351403 18.2153451 10.293301 19.2827401 10.293301 20.4451012 10.293301 21.5580312 9.99340752 23.0045601 9.21725797L22.4597224 13.1234575C21.440541 13.649203 19.8521716 14 18.310433 14 14.3996547 14 13 11.49596 13 8.36552446 13 4.30815704 15.2767521 0 19.9706358 0 22.554932 0 24 1.52864698 24 3.65720949 24.0002435 7.08869546 19.8287953 8.13992948 17.4102028 8.1647385L17.4102028 8.1647385zM37 2.84753211C37 3.32189757 36.9261179 4.00994664 36.8526108 4.45959542L35.4649774 12.9998782 30.9621694 12.9998782 32.2279161 5.1711436C32.2519185 4.95879931 32.3256755 4.53131032 32.3256755 4.29412759 32.3256755 3.72466988 31.9603904 3.5825794 31.5212232 3.5825794 30.9379171 3.5825794 30.3532359 3.84326124 29.9638234 4.03356751L28.5281854 13 24 13 26.0686989.213683657 29.9878258.213683657 30.0374555 1.23425123C30.9620444.641294408 32.1795365 3.90379019e-8 33.9069526 3.90379019e-8 36.1955476-.000243475057 37 1.1387937 37 2.84753211L37 2.84753211zM51.2981937 1.39967969C52.6582977.49918987 53.9425913 0 55.7133897 0 58.1518468 0 59 1.13900518 59 2.84769558 59 3.32204771 58.9223438 4.01007745 58.8448195 4.4597136L57.3830637 12.9997565 52.6328518 12.9997565 53.9932194 5.00577861C54.0182698 4.792101 54.0708756 4.53142648 54.0708756 4.36608506 54.0708756 3.72493046 53.6854953 3.58272222 53.2224587 3.58272222 52.6325881 3.58272222 52.0429812 3.81989829 51.6052587 4.03369766L50.0914245 12.9998782 45.3423992 12.9998782 46.7027668 5.00590037C46.7278172 4.79222275 46.7788409 4.53154824 46.7788409 4.36620681 46.7788409 3.72505221 46.3933287 3.58284398 45.9318743 3.58284398 45.3153711 3.58284398 44.7000546 3.84351849 44.2893602 4.03381941L42.7740757 13 38 13 40.1814929.214042876 44.2643098.214042876 44.3925941 1.28145692C45.3423992.641763367 46.6253743.000487014507 48.3452809.000487014507 49.8344603 0 50.8094476.593061916 51.2981937 1.39967969L51.2981937 1.39967969zM67.5285327 5.39061542C67.5285327 4.29258876 67.2694573 3.54396333 66.4936812 3.54396333 64.7759775 3.54396333 64.4232531 6.76273249 64.4232531 8.4093242 64.4232531 9.65848482 64.7530184 10.4315735 65.5285529 10.4315735 67.1521242 10.4315735 67.5285327 7.03707905 67.5285327 5.39061542L67.5285327 5.39061542zM60 8.21054461C60 3.96893154 62.1170713 0 66.988027 0 70.6583423 0 72 2.29633967 72 5.46592624 72 9.65835674 69.905767 14 64.9173573 14 61.2233579 14 60 11.4294418 60 8.21054461L60 8.21054461z" transform="translate(112 14)" fill="#FFF"/>\n      </g>\n    </symbol>\n\n    <symbol id="iconClose" width="21" height="21" viewBox="0 0 21 21" overflow="visible">\n      <path d="M16 5.414L14.586 4 10 8.586 5.414 4 4 5.414 8.586 10 4 14.586 5.414 16 10 11.414 14.586 16 16 14.586 11.414 10"/>\n    </symbol>\n  </defs>\n</svg>\n' + r, n.appendChild(i._dropinWrapper), void i._getVaultedPaymentMethods().then(function(e) { return i._model = new d({ client: i._client, componentID: i._componentID, merchantConfiguration: i._merchantConfiguration, paymentMethods: e }), i._model.initialize() }).then(function() { return i._model.on("cancelInitialization", function(e) { i._dropinWrapper.innerHTML = "", o.sendEvent(i._client, "load-error"), t(e) }), i._model.on("asyncDependenciesReady", function() { 1 <= i._model.dependencySuccessCount ? (o.sendEvent(i._client, "appeared"), i._disableErroredPaymentMethods(), i._handleAppSwitch(), t(null, i)) : i._model.cancelInitialization(new l("All payment options failed to load.")) }), i._model.on("paymentMethodRequestable", function(e) { i._emit("paymentMethodRequestable", e) }), i._model.on("noPaymentMethodRequestable", function() { i._emit("noPaymentMethodRequestable") }), i._model.on("paymentOptionSelected", function(e) { i._emit("paymentOptionSelected", e) }), i._setUpDependenciesAndViews() }).catch(function(e) { i.teardown().then(function() { t(e) }) })) : (o.sendEvent(i._client, "configuration-error"), void t(new l("options.selector or options.container must reference a valid DOM node.")))) : (o.sendEvent(i._client, "configuration-error"), void t(new l("options.container is required.")))
            }, A.prototype.updateConfiguration = function(t, e, r) {-1 !== C.indexOf(t) && ("threeDSecure" !== t ? (this._mainView.getView(t).updateConfiguration(e, r), -1 !== T.indexOf(t) && (this._removeUnvaultedPaymentMethods(function(e) { return e.type === s.paymentMethodTypes[t] }), this._navigateToInitialView())) : this._threeDSecure && this._threeDSecure.updateConfiguration(e, r)) }, A.prototype.clearSelectedPaymentMethod = function() { this._removeUnvaultedPaymentMethods(), this._navigateToInitialView(), this._model.removeActivePaymentMethod() }, A.prototype._setUpDataCollector = function() {
                var t = this,
                    e = a({}, t._merchantConfiguration.dataCollector, { client: t._client });
                this._model.asyncDependencyStarting(), this._dataCollector = new E(e), this._dataCollector.initialize().then(function() { t._model.asyncDependencyReady() }).catch(function(e) { t._model.cancelInitialization(new l({ message: "Data Collector failed to set up.", braintreeWebError: e })) })
            }, A.prototype._setUpThreeDSecure = function() {
                var t = this,
                    e = a({}, this._merchantConfiguration.threeDSecure);
                this._model.asyncDependencyStarting(), this._threeDSecure = new _(this._client, e, this._strings.cardVerification), this._threeDSecure.initialize().then(function() { t._model.asyncDependencyReady() }).catch(function(e) { t._model.cancelInitialization(new l({ message: "3D Secure failed to set up.", braintreeWebError: e })) })
            }, A.prototype._setUpDependenciesAndViews = function() { this._merchantConfiguration.dataCollector && this._setUpDataCollector(), this._merchantConfiguration.threeDSecure && this._setUpThreeDSecure(), this._mainView = new p({ client: this._client, element: this._dropinWrapper, model: this._model, strings: this._strings }) }, A.prototype._removeUnvaultedPaymentMethods = function(t) { t = t || function() { return !0 }, this._model.getPaymentMethods().forEach(function(e) { t(e) && !e.vaulted && this._model.removePaymentMethod(e) }.bind(this)) }, A.prototype._navigateToInitialView = function() { this._mainView.primaryView.ID === u && 0 === this._model.getPaymentMethods().length && (1 === this._model.supportedPaymentOptions.length ? this._mainView.setPrimaryView(this._model.supportedPaymentOptions[0]) : this._mainView.setPrimaryView(h)) }, A.prototype._supportsPaymentOption = function(e) { return -1 !== this._model.supportedPaymentOptions.indexOf(e) }, A.prototype._disableErroredPaymentMethods = function() {
                var o, e = Object.keys(this._model.failedDependencies);
                0 !== e.length && (o = this._mainView.getOptionsElements(), e.forEach(function(e) {
                    var t = o[e],
                        r = t.div,
                        i = t.clickHandler,
                        n = this._model.failedDependencies[e],
                        a = r.querySelector(".braintree-option__disabled-message");
                    r.classList.add("braintree-disabled"), r.removeEventListener("click", i), a.innerHTML = s.errors.DEVELOPER_MISCONFIGURATION_MESSAGE, console.error(n)
                }.bind(this)))
            }, A.prototype._handleAppSwitch = function() { this._model.appSwitchError ? (this._mainView.setPrimaryView(this._model.appSwitchError.id), this._model.reportError(this._model.appSwitchError.error)) : this._model.appSwitchPayload && this._model.addPaymentMethod(this._model.appSwitchPayload) }, A.prototype.requestPaymentMethod = function() { return this._mainView.requestPaymentMethod().then(function(t) { return this._threeDSecure && t.type === s.paymentMethodTypes.card && null == t.liabilityShifted ? this._threeDSecure.verify(t.nonce).then(function(e) { return t.nonce = e.nonce, t.liabilityShifted = e.liabilityShifted, t.liabilityShiftPossible = e.liabilityShiftPossible, t }) : t }.bind(this)).then(function(e) { return this._dataCollector && (e.deviceData = this._dataCollector.getDeviceData()), e }.bind(this)).then(function(e) { return I(e) }) }, A.prototype._removeStylesheet = function() {
                var e = document.getElementById(s.STYLESHEET_ID);
                e && e.parentNode.removeChild(e)
            }, A.prototype._injectStylesheet = function() {
                var e;
                document.getElementById(s.STYLESHEET_ID) || (e = this._client.getConfiguration().gatewayConfiguration.assetsUrl + "/web/dropin/1.11.0/css/dropin.min.css", c.loadStylesheet({ href: e, id: s.STYLESHEET_ID }))
            }, A.prototype._getVaultedPaymentMethods = function() { return n(this._client) ? b.resolve([]) : this._client.request({ endpoint: "payment_methods", method: "get", data: { defaultFirst: 1 } }).then(function(e) { var t = e.paymentMethods.map(function(e) { return e.vaulted = !0, e }).map(I); return b.resolve(t) }).catch(function() { return b.resolve([]) }) }, A.prototype.teardown = function() {
                var t, e = b.resolve(),
                    r = this;
                return this._removeStylesheet(), this._mainView && e.then(function() { return r._mainView.teardown().catch(function(e) { t = e }) }), this._dataCollector && e.then(function() { return this._dataCollector.teardown().catch(function(e) { t = new l({ message: "Drop-in errored tearing down Data Collector.", braintreeWebError: e }) }) }.bind(this)), this._threeDSecure && e.then(function() { return this._threeDSecure.teardown().catch(function(e) { t = new l({ message: "Drop-in errored tearing down 3D Secure.", braintreeWebError: e }) }) }.bind(this)), e.then(function() { return r._removeDropinWrapper() }).then(function() { return t ? b.reject(t) : b.resolve() })
            }, A.prototype.isPaymentMethodRequestable = function() { return this._model.isPaymentMethodRequestable() }, A.prototype._removeDropinWrapper = function() { return this._dropinWrapper.parentNode.removeChild(this._dropinWrapper), b.resolve() }, t.exports = P(A)
        }, { "./constants": 112, "./dropin-model": 113, "./lib/analytics": 117, "./lib/assets": 118, "./lib/assign": 119, "./lib/data-collector": 123, "./lib/dropin-error": 124, "./lib/event-emitter": 125, "./lib/is-guest-checkout": 127, "./lib/is-utf-8": 129, "./lib/promise": 132, "./lib/sanitize-html": 133, "./lib/three-d-secure": 135, "./lib/uuid": 137, "./translations": 147, "./views/main-view": 163, "./views/payment-methods-view": 165, "./views/payment-options-view": 166, "@braintree/wrap-promise": 20 }],
        115: [function(e, t, r) {
            "use strict";
            var a = e("./dropin"),
                i = e("braintree-web/client"),
                n = e("./lib/create-from-script-tag"),
                o = e("./constants"),
                s = e("./lib/analytics"),
                l = e("./lib/dropin-error"),
                d = e("./lib/promise"),
                c = e("@braintree/wrap-promise"),
                p = "1.11.0";

            function u(n) { return n.authorization ? i.create({ authorization: n.authorization }).catch(function(e) { return d.reject(new l({ message: "There was an error creating Drop-in.", braintreeWebError: e })) }).then(function(e) { var t, r; return (r = (t = e).getConfiguration()).analyticsMetadata.integration = o.INTEGRATION, r.analyticsMetadata.integrationType = o.INTEGRATION, r.analyticsMetadata.dropinVersion = p, t.getConfiguration = function() { return r }, "TOKENIZATION_KEY" === (e = t).getConfiguration().authorizationType ? s.sendEvent(e, "started.tokenization-key") : s.sendEvent(e, "started.client-token"), new d(function(r, i) { new a({ merchantConfiguration: n, client: e })._initialize(function(e, t) { e ? i(e) : r(t) }) }) }) : d.reject(new l("options.authorization is required.")) }
            n(u, "undefined" != typeof document && document.querySelector("script[data-braintree-dropin-authorization]")), t.exports = { create: c(u), VERSION: p }
        }, { "./constants": 112, "./dropin": 114, "./lib/analytics": 117, "./lib/create-from-script-tag": 122, "./lib/dropin-error": 124, "./lib/promise": 132, "@braintree/wrap-promise": 20, "braintree-web/client": 29 }],
        116: [function(e, t, r) {
            "use strict";
            t.exports = function(e, t) { e.addEventListener("click", t), e.addEventListener("keyup", function(e) { 13 === e.keyCode && t() }) }
        }, {}],
        117: [function(e, t, r) {
            "use strict";
            var d = e("./polyfill").atob,
                c = e("../constants"),
                p = e("braintree-web/client").VERSION;
            t.exports = {
                sendEvent: function(e, t, r) {
                    var i, n = e.getConfiguration(),
                        a = e._request,
                        o = (i = Date.now(), Math.floor(i / 1e3)),
                        s = n.gatewayConfiguration.analytics.url,
                        l = { analytics: [{ kind: c.ANALYTICS_PREFIX + t, timestamp: o }], _meta: n.analyticsMetadata, braintreeLibraryVersion: p };
                    "TOKENIZATION_KEY" === n.authorizationType ? l.tokenizationKey = n.authorization : l.authorizationFingerprint = JSON.parse(d(n.authorization)).authorizationFingerprint, a({ url: s, method: "post", data: l, timeout: c.ANALYTICS_REQUEST_TIMEOUT_MS }, r)
                }
            }
        }, { "../constants": 112, "./polyfill": 131, "braintree-web/client": 29 }],
        118: [function(e, t, r) {
            "use strict";
            var a = e("./promise");
            t.exports = {
                loadScript: function(r) {
                    var i = document.createElement("script"),
                        t = r.dataAttributes || {},
                        n = r.container || document.head;
                    return i.src = r.src, i.id = r.id, i.async = !0, Object.keys(t).forEach(function(e) { i.setAttribute("data-" + e, t[e]) }), new a(function(e, t) { i.addEventListener("load", e), i.addEventListener("error", function() { t(new Error(r.src + " failed to load.")) }), i.addEventListener("abort", function() { t(new Error(r.src + " has aborted.")) }), n.appendChild(i) })
                },
                loadStylesheet: function(e) {
                    var t = document.createElement("link"),
                        r = e.container || document.head;
                    t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", e.href), t.setAttribute("id", e.id), r.firstChild ? r.insertBefore(t, r.firstChild) : r.appendChild(t)
                }
            }
        }, { "./promise": 132 }],
        119: [function(e, t, r) { arguments[4][61][0].apply(r, arguments) }, { dup: 61 }],
        120: [function(e, t, r) {
            "use strict";
            var i = e("@braintree/browser-detection/is-ie9");
            t.exports = { isIe9: i }
        }, { "@braintree/browser-detection/is-ie9": 6 }],
        121: [function(e, t, r) {
            "use strict";

            function i(e) { return e.className.trim().split(/\s+/) }

            function n(e) {
                var t = Array.prototype.slice.call(arguments, 1),
                    r = i(e).filter(function(e) { return -1 === t.indexOf(e) }).concat(t).join(" ");
                e.className = r
            }

            function a(e) {
                var t = Array.prototype.slice.call(arguments, 1),
                    r = i(e).filter(function(e) { return -1 === t.indexOf(e) }).join(" ");
                e.className = r
            }
            t.exports = {
                add: n,
                remove: a,
                toggle: function(e, t, r) {
                    var i;
                    arguments.length < 3 ? (i = e, new RegExp("\\b" + t + "\\b").test(i.className) ? a(e, t) : n(e, t)) : r ? n(e, t) : a(e, t)
                }
            }
        }, {}],
        122: [function(e, t, r) {
            "use strict";
            var o = e("./analytics"),
                s = e("./find-parent-form"),
                l = e("./uuid"),
                d = e("./dropin-error"),
                a = e("./kebab-case-to-camel-case"),
                c = ["locale", "payment-option-priority", "data-collector.kount", "data-collector.paypal", "card.cardholderName", "card.cardholderName.required", "card.cardholder-name", "card.cardholder-name.required", "paypal.amount", "paypal.currency", "paypal.flow", "paypal.landing-page-type", "paypal-credit.amount", "paypal-credit.currency", "paypal-credit.flow", "paypal-credit.landing-page-type"];

            function p(e, t, r) {
                var i = r.querySelector('[name="' + e + '"]');
                i || ((i = document.createElement("input")).type = "hidden", i.name = e, r.appendChild(i)), i.value = t
            }

            function u(e, t, r) {
                var i = t.split("."),
                    n = a(i[0]);
                1 === i.length ? e[n] = function(t) { try { return JSON.parse(t) } catch (e) { return t } }(r) : (e[n] = e[n] || {}, u(e[n], i.slice(1).join("."), r))
            }
            t.exports = function(e, r) {
                var t, i, n, a;
                if (r) {
                    if (!(t = r.getAttribute("data-braintree-dropin-authorization"))) throw new d("Authorization not found in data-braintree-dropin-authorization attribute");
                    if ((i = document.createElement("div")).id = "braintree-dropin-" + l(), !(a = s.findParentForm(r))) throw new d("No form found for script tag integration.");
                    a.addEventListener("submit", function(e) { e.preventDefault() }), r.parentNode.insertBefore(i, r), n = { authorization: t, container: i }, c.forEach(function(e) {
                        var t = r.getAttribute("data-" + e);
                        null != t && u(n, e, t)
                    }), e(n).then(function(e) { o.sendEvent(e._client, "integration-type.script-tag"), a.addEventListener("submit", function() { e.requestPaymentMethod(function(e, t) { e || (p("payment_method_nonce", t.nonce, a), t.deviceData && p("device_data", t.deviceData, a), a.submit()) }) }) })
                }
            }
        }, { "./analytics": 117, "./dropin-error": 124, "./find-parent-form": 126, "./kebab-case-to-camel-case": 130, "./uuid": 137 }],
        123: [function(t, o, e) {
            (function(r) {
                "use strict";
                var i = t("../constants"),
                    n = t("./assets"),
                    a = t("./promise");

                function e(e) { this._config = e }
                e.prototype.initialize = function() { var t = this; return a.resolve().then(function() { var e; return r.braintree && r.braintree.dataCollector ? a.resolve() : (e = t._config.client.getVersion(), n.loadScript({ src: "https://js.braintreegateway.com/web/" + e + "/js/data-collector.min.js", id: i.DATA_COLLECTOR_SCRIPT_ID })) }).then(function() { return r.braintree.dataCollector.create(t._config) }).then(function(e) { t._instance = e }) }, e.prototype.getDeviceData = function() { return this._instance.deviceData }, e.prototype.teardown = function() { return this._instance.teardown() }, o.exports = e
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "../constants": 112, "./assets": 118, "./promise": 132 }],
        124: [function(e, t, r) {
            "use strict";

            function i(e) { this.name = "DropinError", this.message = "string" == typeof e ? e : e.message, "BraintreeError" === e.name ? this._braintreeWebError = e : this._braintreeWebError = e.braintreeWebError }(i.prototype = Object.create(Error.prototype)).constructor = i, t.exports = i
        }, {}],
        125: [function(e, t, r) { arguments[4][77][0].apply(r, arguments) }, { dup: 77 }],
        126: [function(e, t, r) {
            "use strict";
            t.exports = { findParentForm: function e(t) { var r = t.parentNode; return r && "FORM" !== r.nodeName ? e(r) : r } }
        }, {}],
        127: [function(e, t, r) {
            "use strict";
            var i = e("./polyfill").atob;
            t.exports = function(e) { var t, r = e.getConfiguration(); return "TOKENIZATION_KEY" === r.authorizationType || (!(t = JSON.parse(i(r.authorization)).authorizationFingerprint) || -1 === t.indexOf("customer_id=")) }
        }, { "./polyfill": 131 }],
        128: [function(e, t, r) {
            (function(e) {
                "use strict";
                t.exports = { isHTTPS: function() { return "https:" === e.location.protocol } }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        129: [function(e, r, t) {
            (function(t) {
                "use strict";
                r.exports = function(e) { return "utf-8" === (e = e || t).document.characterSet.toLowerCase() }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        130: [function(e, t, r) {
            "use strict";
            t.exports = function(e) {
                var t = e.split("-"),
                    r = t.shift(),
                    i = t.map(function(e) { return e.charAt(0).toUpperCase() + e.substring(1) });
                return [r].concat(i).join("")
            }
        }, {}],
        131: [function(e, i, t) {
            (function(t) {
                "use strict";
                var r = "function" == typeof t.atob ? t.atob : e;

                function e(e) {
                    var t, r, i, n, a, o, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                        l = "";
                    if (!new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$").test(e)) throw new Error("Non base64 encoded input passed to window.atob polyfill");
                    for (o = 0; t = (63 & s.indexOf(e.charAt(o++))) << 2 | (n = s.indexOf(e.charAt(o++))) >> 4 & 3, r = (15 & n) << 4 | (a = s.indexOf(e.charAt(o++))) >> 2 & 15, i = (3 & a) << 6 | 63 & s.indexOf(e.charAt(o++)), l += String.fromCharCode(t) + (r ? String.fromCharCode(r) : "") + (i ? String.fromCharCode(i) : ""), o < e.length;);
                    return l
                }
                i.exports = { atob: function(e) { return r.call(t, e) }, _atob: e }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        132: [function(e, t, r) { arguments[4][85][0].apply(r, arguments) }, { dup: 85, "promise-polyfill": 108 }],
        133: [function(e, t, r) {
            "use strict";
            t.exports = function(e) { return "string" != typeof e ? "" : e.replace(/</g, "&lt;").replace(/>/g, "&gt;") }
        }, {}],
        134: [function(e, t, r) {
            "use strict";
            t.exports = function() { var t = document.createElement("div"); return ["-webkit-", "-moz-", "-ms-", "-o-", ""].forEach(function(e) { t.style.cssText += e + "flex-basis: 1px" }), Boolean(t.style.length) }
        }, {}],
        135: [function(e, t, r) {
            "use strict";
            var n = e("./classlist"),
                i = e("braintree-web/three-d-secure"),
                a = e("./promise");

            function o(e, t, r) { this._client = e, this._config = t, this._modal = this._setupModal(r) }
            o.prototype.initialize = function() { var t = this; return i.create({ client: this._client }).then(function(e) { t._instance = e }) }, o.prototype.verify = function(e) {
                var i = this;
                return this._revealModal(), a.all([this._waitForThreeDSecure(), this._instance.verifyCard({
                    nonce: e,
                    amount: this._config.amount,
                    showLoader: !1,
                    addFrame: function(e, t) {
                        var r = i._modal.querySelector(".braintree-three-d-secure__modal-body");
                        t.onload = function() { n.add(r, "braintree-three-d-secure__frame-active") }, r.appendChild(t)
                    },
                    removeFrame: function() { i._cleanupModal() }
                }).then(function(e) { return i._resolveThreeDSecure(), e })]).then(function(e) { return i._cleanupModal(), e[1] }).catch(function(e) { return i._cleanupModal(), "THREE_D_SECURE_CANCELLED" === e.type ? a.resolve(e.payload) : a.reject(e) })
            }, o.prototype.cancel = function() { var t = this; return this._instance.cancelVerifyCard().then(function(e) { t._rejectThreeDSecure({ type: "THREE_D_SECURE_CANCELLED", payload: { nonce: e.nonce, liabilityShifted: e.liabilityShifted, liabilityShiftPossible: e.liabilityShiftPossible } }) }).catch(function() {}).then(function() { t._cleanupModal() }) }, o.prototype.updateConfiguration = function(e, t) { this._config[e] = t }, o.prototype.teardown = function() { return this._instance.teardown() }, o.prototype._cleanupModal = function() {
                var e = this._modal.querySelector("iframe");
                n.remove(this._modal.querySelector(".braintree-three-d-secure__modal"), "braintree-three-d-secure__frame_visible"), n.remove(this._modal.querySelector(".braintree-three-d-secure__backdrop"), "braintree-three-d-secure__frame_visible"), e && e.parentNode && e.parentNode.removeChild(e), setTimeout(function() { this._modal.parentNode && this._modal.parentNode.removeChild(this._modal) }.bind(this), 300)
            }, o.prototype._setupModal = function(e) {
                var t = this,
                    r = document.createElement("div");
                return r.innerHTML = '<div class="braintree-three-d-secure">\n  <div class="braintree-three-d-secure__backdrop"></div>\n  <div class="braintree-three-d-secure__modal">\n    <div data-braintree-id="three-d-secure-loading-container" class="braintree-loader__container">\n      <div data-braintree-id="three-d-secure-loading-indicator" class="braintree-loader__indicator">\n        <svg width="14" height="16" class="braintree-loader__lock">\n          <use xlink:href="#iconLockLoader"></use>\n        </svg>\n      </div>\n    </div>\n    <div class="braintree-three-d-secure__modal-header">\n      {{cardVerification}}\n      <div class="braintree-three-d-secure__modal-close">\n        <svg width="21" height="21">\n          <use xlink:href="#iconClose"></use>\n        </svg>\n      </div>\n    </div>\n    <div class="braintree-three-d-secure__modal-body">\n    </div>\n  </div>\n</div>\n'.replace("{{cardVerification}}", e), r.querySelector(".braintree-three-d-secure__modal-close").addEventListener("click", function() { t.cancel() }), r
            }, o.prototype._waitForThreeDSecure = function() { var r = this; return new a(function(e, t) { r._resolveThreeDSecure = e, r._rejectThreeDSecure = t }) }, o.prototype._revealModal = function() { document.body.appendChild(this._modal), n.add(this._modal.querySelector(".braintree-three-d-secure__backdrop"), "braintree-three-d-secure__frame_visible"), setTimeout(function() { n.add(this._modal.querySelector(".braintree-three-d-secure__modal"), "braintree-three-d-secure__frame_visible") }.bind(this), 10) }, t.exports = o
        }, { "./classlist": 121, "./promise": 132, "braintree-web/three-d-secure": 95 }],
        136: [function(e, t, r) {
            "use strict";
            var a = e("./browser-detection");
            t.exports = { onTransitionEnd: function(r, i, n) { a.isIe9() || function e(t) { return !!t && ("none" === t.style.display || e(t.parentNode)) }(r) ? n() : r.addEventListener("transitionend", function e(t) { t.propertyName === i && (r.removeEventListener("transitionend", e), n()) }) } }
        }, { "./browser-detection": 120 }],
        137: [function(e, t, r) {
            "use strict";
            t.exports = function() { return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) { var t = 16 * Math.random() | 0; return ("x" === e ? t : 3 & t | 8).toString(16) }) }
        }, {}],
        138: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Betaler med {{paymentSource}}", chooseAnotherWayToPay: "VÃ¦lg en anden betalingsmetode", chooseAWayToPay: "VÃ¦lg, hvordan du vil betale", otherWaysToPay: "Andre betalingsmetoder", cardVerification: "BekrÃ¦ftelse af kort", fieldEmptyForCvv: "Du skal angive kontrolcifrene.", fieldEmptyForExpirationDate: "Du skal angive udlÃ¸bsdatoen.", fieldEmptyForCardholderName: "Du skal angive kortindehaverens navn.", fieldTooLongForCardholderName: "Kortejerens navn skal vÃ¦re mindre end 256 tegn.", fieldEmptyForNumber: "Du skal angive et nummer.", fieldEmptyForPostalCode: "Du skal angive et postnummer.", fieldInvalidForCvv: "Sikkerhedskoden er ugyldig.", fieldInvalidForExpirationDate: "UdlÃ¸bsdatoen er ugyldig.", fieldInvalidForNumber: "Kortnummeret er ugyldigt.", fieldInvalidForPostalCode: "Postnummeret er ugyldigt.", genericError: "Der opstod fejl i vores system.", hostedFieldsTokenizationFailOnDuplicateError: "Dette betalingskort er allerede en gemt betalingsmetode.", hostedFieldsFailedTokenizationError: "Kontroller oplysningerne, og prÃ¸v igen.", hostedFieldsFieldsInvalidError: "Kontroller oplysningerne, og prÃ¸v igen.", hostedFieldsTokenizationNetworkErrorError: "NetvÃ¦rksfejl. PrÃ¸v igen.", hostedFieldsTokenizationCvvVerificationFailedError: "Betalingskortet blev ikke bekrÃ¦ftet. KontrollÃ©r oplysningerne, og prÃ¸v igen.", paypalAccountTokenizationFailedError: "PayPal-kontoen blev ikke tilfÃ¸jet. PrÃ¸v igen.", paypalFlowFailedError: "Der kunne ikke oprettes forbindelse til PayPal. PrÃ¸v igen.", paypalTokenizationRequestActiveError: "PayPal-betalingen er i gang med at blive autoriseret.", venmoCanceledError: "Der opstod en fejl. SÃ¸rg for, at du har den seneste version af Venmo-appen installeret pÃ¥ din enhed, og at din browser understÃ¸tter skift til Venmo.", venmoAppFailedError: "Venmo-appen blev ikke fundet pÃ¥ din enhed.", unsupportedCardTypeError: "Korttypen understÃ¸ttes ikke. PrÃ¸v et andet kort.", applePayTokenizationError: "Der opstod en netvÃ¦rksfejl under behandlingen af betalingen med Apple Pay. PrÃ¸v igen.", applePayActiveCardError: "Knyt et understÃ¸ttet kort til din Apple Pay-e-pung.", cardholderNameLabel: "Kortindehaverens navn", cardNumberLabel: "Kortnummer", cvvLabel: "Kontrolcifre", cvvThreeDigitLabelSubheading: "(3 cifre)", cvvFourDigitLabelSubheading: "(4 cifre)", cardholderNamePlaceholder: "Kortindehaverens navn", expirationDateLabel: "UdlÃ¸bsdato", expirationDateLabelSubheading: "(MM/Ã…Ã…)", expirationDatePlaceholder: "MM/Ã…Ã…", postalCodeLabel: "Postnummer", payWithCard: "Betal med kort", endingIn: "Slutter med â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Kort", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        139: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Zahlen mit {{paymentSource}}", chooseAnotherWayToPay: "Andere Zahlungsmethode wÃ¤hlen", chooseAWayToPay: "Wie mÃ¶chten Sie bezahlen?", otherWaysToPay: "Andere Zahlungsmethoden", cardVerification: "KartenbestÃ¤tigung", fieldEmptyForCvv: "Geben Sie die KartenprÃ¼fnummer ein.", fieldEmptyForExpirationDate: "Geben Sie das Ablaufdatum ein.", fieldEmptyForCardholderName: "Geben Sie den Namen des Karteninhabers ein.", fieldTooLongForCardholderName: "Der Name des Karteninhabers darf 255 Zeichen nicht Ã¼bersteigen.", fieldEmptyForNumber: "Geben Sie die Nummer ein.", fieldEmptyForPostalCode: "Geben Sie die PLZ ein.", fieldInvalidForCvv: "Die KartenprÃ¼fnummer ist ungÃ¼ltig.", fieldInvalidForExpirationDate: "Das Ablaufdatum ist ungÃ¼ltig.", fieldInvalidForNumber: "Die Kreditkartennummer ist ungÃ¼ltig.", fieldInvalidForPostalCode: "Die PLZ ist ungÃ¼ltig.", genericError: "Bei uns ist ein Problem aufgetreten.", hostedFieldsTokenizationFailOnDuplicateError: "Diese Kreditkarte ist bereits als gespeicherte Zahlungsmethode vorhanden.", hostedFieldsFailedTokenizationError: "ÃœberprÃ¼fen Sie Ihre Eingabe und versuchen Sie es erneut.", hostedFieldsFieldsInvalidError: "ÃœberprÃ¼fen Sie Ihre Eingabe und versuchen Sie es erneut.", hostedFieldsTokenizationNetworkErrorError: "Netzwerkfehler. Versuchen Sie es erneut.", hostedFieldsTokenizationCvvVerificationFailedError: "ÃœberprÃ¼fung der Karte fehlgeschlagen. ÃœberprÃ¼fen Sie Ihre Eingabe und versuchen Sie es erneut.", paypalAccountTokenizationFailedError: "Beim HinzufÃ¼gen des PayPal-Kontos ist ein Problem aufgetreten. Versuchen Sie es erneut.", paypalFlowFailedError: "Beim Verbinden mit PayPal ist ein Problem aufgetreten. Versuchen Sie es erneut.", paypalTokenizationRequestActiveError: "Die PayPal-Zahlung wird bereits autorisiert.", venmoCanceledError: "Etwas ist schief gelaufen. Vergewissern Sie sich, dass Sie die neueste Version der Venmo-App auf Ihrem GerÃ¤t installiert haben und Ihr Browser den Wechsel zu Venmo unterstÃ¼tzt.", venmoAppFailedError: "Die Venmo-App wurde auf Ihrem GerÃ¤t nicht gefunden.", unsupportedCardTypeError: "Dieser Kreditkartentyp wird nicht unterstÃ¼tzt. Versuchen Sie es mit einer anderen Karte.", applePayTokenizationError: "Netzwerkfehler bei der Zahlungsabwicklung mit Apple Pay. Versuchen Sie es erneut.", applePayActiveCardError: "FÃ¼gen Sie der Apple-Pay-BÃ¶rse eine unterstÃ¼tzte Kreditkarte hinzu.", cardholderNameLabel: "Name des Karteninhabers", cardNumberLabel: "Kartennummer", cvvLabel: "PrÃ¼fnr.", cvvThreeDigitLabelSubheading: "(3-stellig)", cvvFourDigitLabelSubheading: "(4-stellig)", cardholderNamePlaceholder: "Name des Karteninhabers", expirationDateLabel: "GÃ¼ltig bis", expirationDateLabelSubheading: "(MM/JJ)", expirationDatePlaceholder: "MM/JJ", postalCodeLabel: "PLZ", payWithCard: "Mit Kreditkarte zahlen", endingIn: "Mit den Endziffern â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Kreditkarte", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        140: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Paying with {{paymentSource}}", chooseAnotherWayToPay: "Choose another way to pay", chooseAWayToPay: "Choose a way to pay", otherWaysToPay: "Other ways to pay", cardVerification: "Card verification", fieldEmptyForCvv: "Please fill out a CVV.", fieldEmptyForExpirationDate: "Please fill out an expiry date.", fieldEmptyForCardholderName: "Please fill out a cardholder name.", fieldTooLongForCardholderName: "Cardholder name must be less than 256 characters.", fieldEmptyForNumber: "Please fill out a number.", fieldEmptyForPostalCode: "Please fill out a postcode.", fieldInvalidForCvv: "This security code is not valid.", fieldInvalidForExpirationDate: "This expiry date is not valid.", fieldInvalidForNumber: "This card number is not valid.", fieldInvalidForPostalCode: "This postcode is not valid.", genericError: "Something went wrong on our end.", hostedFieldsTokenizationFailOnDuplicateError: "This credit card already exists as a saved payment method.", hostedFieldsFailedTokenizationError: "Check your entries and try again.", hostedFieldsFieldsInvalidError: "Check your entries and try again.", hostedFieldsTokenizationNetworkErrorError: "Network error. Please try again.", hostedFieldsTokenizationCvvVerificationFailedError: "Credit card verification failed. Check your entries and try again.", paypalAccountTokenizationFailedError: "Something went wrong while adding the PayPal account. Please try again.", paypalFlowFailedError: "Something went wrong while connecting to PayPal. Please try again.", paypalTokenizationRequestActiveError: "PayPal payment authorisation is already in progress.", venmoCanceledError: "We're sorry, something seems to have gone wrong. Please ensure you have the most recent version of the Venmo app installed on your device and your browser supports switching to Venmo.", venmoAppFailedError: "The Venmo app wasn't found on your device.", unsupportedCardTypeError: "This card type is not supported. Please try another card.", applePayTokenizationError: "A network error occurred while processing the Apple Pay payment. Please try again.", applePayActiveCardError: "Link a supported card to your Apple Pay wallet.", cardholderNameLabel: "Cardholder Name", cardNumberLabel: "Card Number", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "(3 digits)", cvvFourDigitLabelSubheading: "(4 digits)", cardholderNamePlaceholder: "Cardholder Name", expirationDateLabel: "Expiry date", expirationDateLabelSubheading: "(MM/YY)", expirationDatePlaceholder: "MM/YY", postalCodeLabel: "Postcode", payWithCard: "Pay with credit or debit card", endingIn: "Ending in â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Card", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        141: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Paying with {{paymentSource}}", chooseAnotherWayToPay: "Choose another way to pay", chooseAWayToPay: "Choose a way to pay", otherWaysToPay: "Other ways to pay", cardVerification: "Card Verification", fieldEmptyForCvv: "Please fill in a CSC.", fieldEmptyForExpirationDate: "Please fill in an expiry date.", fieldEmptyForCardholderName: "Please fill in a cardholder name.", fieldTooLongForCardholderName: "Cardholder name must be less than 256 characters.", fieldEmptyForNumber: "Please fill in a number.", fieldEmptyForPostalCode: "Please fill in a postcode.", fieldInvalidForCvv: "This security code is not valid.", fieldInvalidForExpirationDate: "This expiry date is not valid.", fieldInvalidForNumber: "This card number is not valid.", fieldInvalidForPostalCode: "This postcode is not valid.", genericError: "Something went wrong on our end.", hostedFieldsTokenizationFailOnDuplicateError: "This credit card already exists as a saved funding source.", hostedFieldsFailedTokenizationError: "Please check your information and try again.", hostedFieldsFieldsInvalidError: "Please check your information and try again.", hostedFieldsTokenizationNetworkErrorError: "Network error. Please try again.", hostedFieldsTokenizationCvvVerificationFailedError: "Credit card verification failed. Please check your information and try again.", paypalAccountTokenizationFailedError: "Something went wrong while adding the PayPal account. Please try again.", paypalFlowFailedError: "Something went wrong while connecting to PayPal. Please try again.", paypalTokenizationRequestActiveError: "PayPal payment authorisation is already in progress.", venmoCanceledError: "We're sorry, something seems to have gone wrong. Make sure you have the most recent version of the Venmo app installed on your device and your browser supports the switch to Venmo.", venmoAppFailedError: "The Venmo app isn't on your device.", unsupportedCardTypeError: "This card type is not supported. Please try another card.", applePayTokenizationError: "A network error occurred while processing the Apple Pay payment. Please try again.", applePayActiveCardError: "Add a supported card to your Apple Pay wallet.", cardholderNameLabel: "Cardholder Name", cardNumberLabel: "Card Number", cvvLabel: "CSC", cvvThreeDigitLabelSubheading: "(3 digits)", cvvFourDigitLabelSubheading: "(4 digits)", cardholderNamePlaceholder: "Cardholder Name", expirationDateLabel: "Expiry Date", expirationDateLabelSubheading: "(MM/YY)", expirationDatePlaceholder: "MM/YY", postalCodeLabel: "Postcode", payWithCard: "Pay with card", endingIn: "Ending in â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Card", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        142: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Paying with {{paymentSource}}", chooseAnotherWayToPay: "Choose another way to pay", chooseAWayToPay: "Choose a way to pay", otherWaysToPay: "Other ways to pay", cardVerification: "Card Verification", fieldEmptyForCvv: "Please fill out a CVV.", fieldEmptyForExpirationDate: "Please fill out an expiration date.", fieldEmptyForCardholderName: "Please fill out a cardholder name.", fieldEmptyForNumber: "Please fill out a card number.", fieldEmptyForPostalCode: "Please fill out a postal code.", fieldInvalidForCvv: "This security code is not valid.", fieldInvalidForExpirationDate: "This expiration date is not valid.", fieldInvalidForNumber: "This card number is not valid.", fieldInvalidForPostalCode: "This postal code is not valid.", fieldTooLongForCardholderName: "Cardholder name must be less than 256 characters.", genericError: "Something went wrong on our end.", hostedFieldsTokenizationFailOnDuplicateError: "This credit card already exists as a saved payment method.", hostedFieldsFailedTokenizationError: "Please check your information and try again.", hostedFieldsTokenizationCvvVerificationFailedError: "Credit card verification failed. Please check your information and try again.", hostedFieldsTokenizationNetworkErrorError: "Network error. Please try again.", hostedFieldsFieldsInvalidError: "Please check your information and try again.", paypalAccountTokenizationFailedError: "Something went wrong adding the PayPal account. Please try again.", paypalFlowFailedError: "Something went wrong connecting to PayPal. Please try again.", paypalTokenizationRequestActiveError: "PayPal payment authorization is already in progress.", applePayTokenizationError: "A network error occurred while processing the Apple Pay payment. Please try again.", applePayActiveCardError: "Add a supported card to your Apple Pay wallet.", venmoCanceledError: "Something went wrong. Ensure you have the most recent version of the Venmo app installed on your device and your browser supports switching to Venmo.", venmoAppFailedError: "The Venmo app could not be found on your device.", unsupportedCardTypeError: "This card type is not supported. Please try another card.", cardholderNameLabel: "Cardholder Name", cardNumberLabel: "Card Number", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "(3 digits)", cvvFourDigitLabelSubheading: "(4 digits)", expirationDateLabel: "Expiration Date", expirationDateLabelSubheading: "(MM/YY)", cardholderNamePlaceholder: "Cardholder Name", expirationDatePlaceholder: "MM/YY", postalCodeLabel: "Postal Code", payWithCard: "Pay with card", endingIn: "Ending in â€¢â€¢{{lastTwoCardDigits}}", Card: "Card", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Apple Pay": "Apple Pay", "Google Pay": "Google Pay", Venmo: "Venmo", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        143: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Pago con {{paymentSource}}", chooseAnotherWayToPay: "Selecciona otra forma de pago.", chooseAWayToPay: "Selecciona una forma de pago.", otherWaysToPay: "Otras formas de pago", cardVerification: "VerificaciÃ³n de tarjeta", fieldEmptyForCvv: "Escribe el cÃ³digo CVV.", fieldEmptyForExpirationDate: "Escribe la fecha de vencimiento.", fieldEmptyForCardholderName: "Escribe el nombre de un titular de la tarjeta.", fieldTooLongForCardholderName: "El nombre del titular de la tarjeta debe tener menos de 256Â caracteres.", fieldEmptyForNumber: "Escribe un nÃºmero.", fieldEmptyForPostalCode: "Escribe el cÃ³digo postal.", fieldInvalidForCvv: "Este cÃ³digo de seguridad no es vÃ¡lido.", fieldInvalidForExpirationDate: "Esta fecha de vencimiento no es vÃ¡lida.", fieldInvalidForNumber: "Este nÃºmero de tarjeta no es vÃ¡lido.", fieldInvalidForPostalCode: "Este cÃ³digo postal no es vÃ¡lido.", genericError: "Hemos tenido algÃºn problema.", hostedFieldsTokenizationFailOnDuplicateError: "Esta tarjeta de crÃ©dito ya existe como forma de pago guardada.", hostedFieldsFailedTokenizationError: "Comprueba la informaciÃ³n e intÃ©ntalo de nuevo.", hostedFieldsFieldsInvalidError: "Comprueba la informaciÃ³n e intÃ©ntalo de nuevo.", hostedFieldsTokenizationNetworkErrorError: "Error de red. IntÃ©ntalo de nuevo.", hostedFieldsTokenizationCvvVerificationFailedError: "Error de verificaciÃ³n de la tarjeta de crÃ©dito. Comprueba la informaciÃ³n e intÃ©ntalo de nuevo.", paypalAccountTokenizationFailedError: "Se ha producido un error al vincular la cuenta PayPal. IntÃ©ntalo de nuevo.", paypalFlowFailedError: "Se ha producido un error al conectarse a PayPal. IntÃ©ntalo de nuevo.", paypalTokenizationRequestActiveError: "Ya hay una autorizaciÃ³n de pago de PayPal en curso.", venmoCanceledError: "Ha habido un problema. AsegÃºrate de que tienes la versiÃ³n mÃ¡s reciente de la aplicaciÃ³n de Venmo instalada en tu dispositivo y de que tu navegador es compatible con cambiar a Venmo.", venmoAppFailedError: "No se ha encontrado la aplicaciÃ³n de Venmo en tu dispositivo.", unsupportedCardTypeError: "No se admite este tipo de tarjeta. Prueba con otra tarjeta.", applePayTokenizationError: "Se ha producido un error de red al procesar el pago con Apple Pay. IntÃ©ntalo de nuevo.", applePayActiveCardError: "AÃ±ade una tarjeta admitida a tu Wallet de Apple Pay.", cardholderNameLabel: "Nombre del titular de la tarjeta", cardNumberLabel: "NÃºmero de tarjeta", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "(3Â dÃ­gitos)", cvvFourDigitLabelSubheading: "(4Â dÃ­gitos)", cardholderNamePlaceholder: "Nombre del titular de la tarjeta", expirationDateLabel: "Fecha de vencimiento", expirationDateLabelSubheading: "(MM/AA)", expirationDatePlaceholder: "MM/AA", postalCodeLabel: "CÃ³digo postal", payWithCard: "Pagar con tarjeta", endingIn: "Terminada enÂ â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Tarjeta", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        144: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Payer avec {{paymentSource}}", chooseAnotherWayToPay: "Choisir un autre mode de paiement", chooseAWayToPay: "Choisir le mode de paiement", otherWaysToPay: "Autres modes de paiement", cardVerification: "VÃ©rification de la carte", fieldEmptyForCvv: "Veuillez saisir un cryptogramme visuel.", fieldEmptyForExpirationDate: "Veuillez saisir une date d'expiration.", fieldEmptyForCardholderName: "Veuillez saisir un nom de titulaire de la carte.", fieldTooLongForCardholderName: "Le nom du titulaire de la carte doit contenir moins de 256Â caractÃ¨res.", fieldEmptyForNumber: "Veuillez saisir un numÃ©ro.", fieldEmptyForPostalCode: "Veuillez saisir un code postal.", fieldInvalidForCvv: "Ce cryptogramme visuel n'est pas valide.", fieldInvalidForExpirationDate: "Cette date d'expiration n'est pas valide.", fieldInvalidForNumber: "Ce numÃ©ro de carte n'est pas valide.", fieldInvalidForPostalCode: "Ce code postal n'est pas valide.", genericError: "Une erreur s'est produite de notre cÃ´tÃ©.", hostedFieldsTokenizationFailOnDuplicateError: "Cette carte de crÃ©dit existe dÃ©jÃ  comme mode de paiement enregistrÃ©.", hostedFieldsFailedTokenizationError: "VÃ©rifiez vos informations, puis rÃ©essayez.", hostedFieldsFieldsInvalidError: "VÃ©rifiez vos informations, puis rÃ©essayez.", hostedFieldsTokenizationNetworkErrorError: "Erreur rÃ©seau. Veuillez rÃ©essayer.", hostedFieldsTokenizationCvvVerificationFailedError: "La vÃ©rification de la carte de crÃ©dit a Ã©chouÃ©. VÃ©rifiez vos informations, puis rÃ©essayez.", paypalAccountTokenizationFailedError: "Une erreur s'est produite lors de l'enregistrement du compte PayPal. Veuillez rÃ©essayer.", paypalFlowFailedError: "Une erreur s'est produite au cours de la connexion Ã  PayPal. Veuillez rÃ©essayer.", paypalTokenizationRequestActiveError: "L'autorisation de paiement PayPal est dÃ©jÃ  en cours.", venmoCanceledError: "Une erreur s'est produite. Assurez-vous que la version la plus rÃ©cente de l'application Venmo est installÃ©e sur votre appareil et que votre navigateur prend Venmo en charge.", venmoAppFailedError: "L'application Venmo est introuvable sur votre appareil.", unsupportedCardTypeError: "Ce type de carte n'est pas pris en charge. Veuillez essayer une autre carte.", applePayTokenizationError: "Une erreur de rÃ©seau s'est produite lors du traitement du paiement avec Apple Pay. Veuillez rÃ©essayer.", applePayActiveCardError: "Ajoutez une carte prise en charge Ã  Apple Pay.", cardholderNameLabel: "Nom du titulaire de la carte", cardNumberLabel: "NumÃ©ro de carte", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "(3 chiffres)", cvvFourDigitLabelSubheading: "(4Â chiffres)", cardholderNamePlaceholder: "Nom du titulaire de la carte", expirationDateLabel: "Date d'expiration", expirationDateLabelSubheading: "(MM/AA)", expirationDatePlaceholder: "MM/AA", postalCodeLabel: "Code postal", payWithCard: "Payer par carte", endingIn: "Se terminant par â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Carte", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        145: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Payer avec {{paymentSource}}", chooseAnotherWayToPay: "Choisissez une autre faÃ§on de payer.", chooseAWayToPay: "Choisissez comment payer.", otherWaysToPay: "Autres faÃ§ons de payer", cardVerification: "VÃ©rification de la carte", fieldEmptyForCvv: "Entrez un cryptogramme visuel.", fieldEmptyForExpirationDate: "Entrez une date d'expiration.", fieldEmptyForCardholderName: "Entrez un nom du titulaire de la carte.", fieldTooLongForCardholderName: "Le nom du titulaire de la carte doit contenir moins de 256Â caractÃ¨res.", fieldEmptyForNumber: "Entrez un numÃ©ro.", fieldEmptyForPostalCode: "Entrez un code postal.", fieldInvalidForCvv: "Ce cryptogramme visuel n'est pas valide.", fieldInvalidForExpirationDate: "Cette date d'expiration n'est pas valide.", fieldInvalidForNumber: "Ce numÃ©ro de carte n'est pas valide.", fieldInvalidForPostalCode: "Ce code postal n'est pas valide.", genericError: "Une erreur est survenue.", hostedFieldsTokenizationFailOnDuplicateError: "Cette carte bancaire existe dÃ©jÃ  comme mode de paiement enregistrÃ©.", hostedFieldsFailedTokenizationError: "VÃ©rifiez vos informations et rÃ©essayez.", hostedFieldsFieldsInvalidError: "VÃ©rifiez vos informations et rÃ©essayez.", hostedFieldsTokenizationNetworkErrorError: "Erreur rÃ©seau. RÃ©essayez.", hostedFieldsTokenizationCvvVerificationFailedError: "Ã‰chec de vÃ©rification de la carte bancaire. VÃ©rifiez vos informations et rÃ©essayez.", paypalAccountTokenizationFailedError: "Une erreur est survenue lors de l'ajout du compte PayPal. RÃ©essayez.", paypalFlowFailedError: "Une erreur est survenue lors de la connexion Ã  PayPal. RÃ©essayez.", paypalTokenizationRequestActiveError: "L'autorisation de paiement PayPal est dÃ©jÃ  en cours.", venmoCanceledError: "Une erreur est survenue. VÃ©rifiez que vous disposez de la derniÃ¨re version de l'application Venmo sur votre appareil et que votre navigateur prend en charge la redirection vers Venmo.", venmoAppFailedError: "L'application Venmo est introuvable sur votre appareil.", unsupportedCardTypeError: "Ce type de carte n'est pas pris en charge. Essayez une autre carte.", applePayTokenizationError: "Une erreur rÃ©seau s'est produite lors du traitement du paiement Apple Pay. RÃ©essayez.", applePayActiveCardError: "Enregistrez une carte prise en charge sur Apple Pay.", cardholderNameLabel: "Nom du titulaire de la carte", cardNumberLabel: "NÂº de carte", cvvLabel: "Cryptogramme visuel", cvvThreeDigitLabelSubheading: "(3Â chiffres)", cvvFourDigitLabelSubheading: "(4Â chiffres)", cardholderNamePlaceholder: "Nom du titulaire de la carte", expirationDateLabel: "Date d'expiration", expirationDateLabelSubheading: "(MM/AA)", expirationDatePlaceholder: "MM/AA", postalCodeLabel: "Code postal", payWithCard: "Payer par carte", endingIn: "Se terminant par â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Carte", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        146: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Membayar dengan {{paymentSource}}", chooseAnotherWayToPay: "Pilih metode pembayaran lain", chooseAWayToPay: "Pilih metode pembayaran", otherWaysToPay: "Metode pembayaran lain", cardVerification: "Verifikasi Kartu", fieldEmptyForCvv: "Masukkan CVV.", fieldEmptyForExpirationDate: "Masukkan tanggal akhir berlaku.", fieldEmptyForCardholderName: "Masukkan nama pemegang kartu.", fieldTooLongForCardholderName: "Nama pemegang kartu harus kurang dari 256 karakter.", fieldEmptyForNumber: "Masukkan nomor.", fieldEmptyForPostalCode: "Masukkan kode pos.", fieldInvalidForCvv: "Kode keamanan ini tidak valid.", fieldInvalidForExpirationDate: "Tanggal akhir berlaku ini tidak valid.", fieldInvalidForNumber: "Nomor kartu ini tidak valid.", fieldInvalidForPostalCode: "Kode pos ini tidak valid.", genericError: "Terjadi kesalahan pada sistem kami.", hostedFieldsTokenizationFailOnDuplicateError: "Kartu kredit ini sudah dimasukkan sebagai metode pembayaran tersimpan.", hostedFieldsFailedTokenizationError: "Periksa informasi Anda dan coba lagi.", hostedFieldsFieldsInvalidError: "Periksa informasi Anda dan coba lagi.", hostedFieldsTokenizationNetworkErrorError: "Masalah jaringan. Coba lagi.", hostedFieldsTokenizationCvvVerificationFailedError: "Verifikasi kartu kredit gagal. Periksa informasi Anda dan coba lagi.", paypalAccountTokenizationFailedError: "Terjadi kesalahan saat menambahkan rekening PayPal. Coba lagi.", paypalFlowFailedError: "Terjadi kesalahan saat menyambung ke PayPal. Coba lagi.", paypalTokenizationRequestActiveError: "Otorisasi pembayaran PayPal sedang diproses.", venmoCanceledError: "Terdapat kesalahan. Pastikan Anda telah menginstal aplikasi Venmo versi terbaru pada perangkat dan peramban Anda mendukung untuk beralih ke Venmo.", venmoAppFailedError: "Aplikasi Venmo tidak dapat ditemukan pada perangkat Anda.", unsupportedCardTypeError: "Jenis kartu ini tidak didukung. Coba kartu lainnya.", applePayTokenizationError: "Terjadi kesalahan jaringan sewaktu memproses pembayaran melalui Apple Pay. Coba lagi.", applePayActiveCardError: "Tambahkan kartu yang didukung ke wallet Apple Pay.", cardholderNameLabel: "Nama Pemegang Kartu", cardNumberLabel: "Nomor Kartu", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "(3 angka)", cvvFourDigitLabelSubheading: "(4 angka)", cardholderNamePlaceholder: "Nama Pemegang Kartu", expirationDateLabel: "Tanggal Kedaluwarsa", expirationDateLabelSubheading: "(BB/TT)", expirationDatePlaceholder: "BB/TT", postalCodeLabel: "Kode Pos", payWithCard: "Bayar dengan kartu", endingIn: "Berakhiran â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Kartu", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        147: [function(e, t, r) {
            "use strict";
            var i = e("../lib/assign").assign,
                n = { da_DK: e("./da_DK"), de_DE: e("./de_DE"), en_US: e("./en_US"), en_AU: e("./en_AU"), en_GB: e("./en_GB"), es_ES: e("./es_ES"), fr_CA: e("./fr_CA"), fr_FR: e("./fr_FR"), id_ID: e("./id_ID"), it_IT: e("./it_IT"), ja_JP: e("./ja_JP"), ko_KR: e("./ko_KR"), nl_NL: e("./nl_NL"), no_NO: e("./no_NO"), pl_PL: e("./pl_PL"), pt_BR: e("./pt_BR"), pt_PT: e("./pt_PT"), ru_RU: e("./ru_RU"), sv_SE: e("./sv_SE"), th_TH: e("./th_TH"), zh_CN: e("./zh_CN"), zh_HK: e("./zh_HK"), zh_TW: e("./zh_TW") },
                a = { da: n.da_DK, de: n.de_DE, en: n.en_US, es: n.es_ES, fr: n.fr_FR, id: n.id_ID, it: n.it_IT, ja: n.ja_JP, ko: n.ko_KR, nl: n.nl_NL, no: n.no_NO, pl: n.pl_PL, pt: n.pt_PT, ru: n.ru_RU, sv: n.sv_SE, th: n.th_TH, zh: n.zh_CN };
            t.exports = { twoCharacterLocaleAliases: a, fiveCharacterLocales: n, translations: i({}, a, n) }
        }, { "../lib/assign": 119, "./da_DK": 138, "./de_DE": 139, "./en_AU": 140, "./en_GB": 141, "./en_US": 142, "./es_ES": 143, "./fr_CA": 144, "./fr_FR": 145, "./id_ID": 146, "./it_IT": 148, "./ja_JP": 149, "./ko_KR": 150, "./nl_NL": 151, "./no_NO": 152, "./pl_PL": 153, "./pt_BR": 154, "./pt_PT": 155, "./ru_RU": 156, "./sv_SE": 157, "./th_TH": 158, "./zh_CN": 159, "./zh_HK": 160, "./zh_TW": 161 }],
        148: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Pagamento con {{paymentSource}}", chooseAnotherWayToPay: "Scegli di pagare in un altro modo", chooseAWayToPay: "Scegli come pagare", otherWaysToPay: "Altri modi di pagare", cardVerification: "Codice di sicurezza", fieldEmptyForCvv: "Immetti il codice di sicurezza (CVV).", fieldEmptyForExpirationDate: "Immetti la data di scadenza.", fieldEmptyForCardholderName: "Immetti il nome del titolare della carta.", fieldTooLongForCardholderName: "Il nome del titolare della carta deve avere meno di 256 caratteri.", fieldEmptyForNumber: "Immetti il numero di carta.", fieldEmptyForPostalCode: "Immetti il CAP.", fieldInvalidForCvv: "Il codice di sicurezza non Ã¨ valido.", fieldInvalidForExpirationDate: "La data di scadenza non Ã¨ valida.", fieldInvalidForNumber: "Il numero di carta non Ã¨ valido.", fieldInvalidForPostalCode: "Il CAP non Ã¨ valido.", genericError: "Si Ã¨ verificato un errore nei nostri sistemi.", hostedFieldsTokenizationFailOnDuplicateError: "Questa carta di credito Ã¨ giÃ  registrata come metodo di pagamento salvato.", hostedFieldsFailedTokenizationError: "Controlla e riprova.", hostedFieldsFieldsInvalidError: "Controlla e riprova.", hostedFieldsTokenizationNetworkErrorError: "Errore di rete. Riprova.", hostedFieldsTokenizationCvvVerificationFailedError: "La verifica della carta di credito non Ã¨ andata a buon fine. Controlla i dati e riprova.", paypalAccountTokenizationFailedError: "Si Ã¨ verificato un errore nel collegamento del conto PayPal. Riprova.", paypalFlowFailedError: "Si Ã¨ verificato un errore di connessione a PayPal. Riprova.", paypalTokenizationRequestActiveError: "L'autorizzazione di pagamento PayPal Ã¨ giÃ  in corso.", venmoCanceledError: "Si Ã¨ verificato un errore. Assicurati di avere la versione piÃ¹ recente dell'app Venmo installata sul tuo dispositivo e che il browser supporti l'uso di Venmo.", venmoAppFailedError: "Impossibile trovare l'app Venmo sul dispositivo in uso.", unsupportedCardTypeError: "Questo tipo di carta non Ã¨ supportato. Prova con un'altra carta.", applePayTokenizationError: "Si Ã¨ verificato un errore di rete durante l'elaborazione del pagamento con Apple Pay. Riprova.", applePayActiveCardError: "Collega una carta supportata al tuo Apple Pay Wallet.", cardholderNameLabel: "Titolare della carta", cardNumberLabel: "Numero di carta", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "(3 cifre)", cvvFourDigitLabelSubheading: "(4 cifre)", cardholderNamePlaceholder: "Titolare della carta", expirationDateLabel: "Data di scadenza", expirationDateLabelSubheading: "(MM/AA)", expirationDatePlaceholder: "MM/AA", postalCodeLabel: "CAP", payWithCard: "Paga con una carta", endingIn: "Le cui ultime cifre sono â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Carta", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        149: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "{{paymentSource}}ã§æ”¯æ‰•ã†", chooseAnotherWayToPay: "åˆ¥ã®æ”¯æ‰•æ–¹æ³•ã‚’é¸æŠžã™ã‚‹", chooseAWayToPay: "æ”¯æ‰•æ–¹æ³•ã‚’é¸æŠžã™ã‚‹", otherWaysToPay: "ãã®ä»–ã®æ”¯æ‰•æ–¹æ³•", cardVerification: "ã‚«ãƒ¼ãƒ‰ç¢ºèª", fieldEmptyForCvv: "ã‚«ãƒ¼ãƒ‰ç¢ºèªã‚³ãƒ¼ãƒ‰ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚", fieldEmptyForExpirationDate: "æœ‰åŠ¹æœŸé™ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚", fieldEmptyForCardholderName: "ã‚«ãƒ¼ãƒ‰ä¿æœ‰è€…ã®åå‰ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚", fieldTooLongForCardholderName: "ã‚«ãƒ¼ãƒ‰ä¿æœ‰è€…ã®åå‰ã¯256æ–‡å­—æœªæº€ã«ã—ã¦ãã ã•ã„ã€‚", fieldEmptyForNumber: "ç•ªå·ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚", fieldEmptyForPostalCode: "éƒµä¾¿ç•ªå·ã‚’å…¥åŠ›ã—ã¦ãã ã•ã„ã€‚", fieldInvalidForCvv: "ã“ã®ã‚»ã‚­ãƒ¥ãƒªãƒ†ã‚£ã‚³ãƒ¼ãƒ‰ã¯ç„¡åŠ¹ã§ã™ã€‚", fieldInvalidForExpirationDate: "ã“ã®æœ‰åŠ¹æœŸé™ã¯ç„¡åŠ¹ã§ã™ã€‚", fieldInvalidForNumber: "ã“ã®ã‚«ãƒ¼ãƒ‰ç•ªå·ã¯ç„¡åŠ¹ã§ã™ã€‚", fieldInvalidForPostalCode: "ã“ã®éƒµä¾¿ç•ªå·ã¯ç„¡åŠ¹ã§ã™ã€‚", genericError: "å¼Šç¤¾å´ã§å•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚", hostedFieldsTokenizationFailOnDuplicateError: "ã“ã®ã‚¯ãƒ¬ã‚¸ãƒƒãƒˆã‚«ãƒ¼ãƒ‰ã¯ã€ä¿å­˜æ¸ˆã¿ã®æ”¯æ‰•æ–¹æ³•ã¨ã—ã¦ã™ã§ã«ç™»éŒ²ã•ã‚Œã¦ã„ã¾ã™ã€‚", hostedFieldsFailedTokenizationError: "æƒ…å ±ã‚’ç¢ºèªã—ã¦ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ãã ã•ã„ã€‚", hostedFieldsFieldsInvalidError: "æƒ…å ±ã‚’ç¢ºèªã—ã¦ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ãã ã•ã„ã€‚", hostedFieldsTokenizationNetworkErrorError: "ãƒãƒƒãƒˆãƒ¯ãƒ¼ã‚¯ã‚¨ãƒ©ãƒ¼ã§ã™ã€‚ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ãã ã•ã„ã€‚", hostedFieldsTokenizationCvvVerificationFailedError: "ã‚¯ãƒ¬ã‚¸ãƒƒãƒˆã‚«ãƒ¼ãƒ‰ã®èªè¨¼ã«å¤±æ•—ã—ã¾ã—ãŸã€‚æƒ…å ±ã‚’ç¢ºèªã—ã¦ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ãã ã•ã„ã€‚", paypalAccountTokenizationFailedError: "PayPalã‚¢ã‚«ã‚¦ãƒ³ãƒˆã®è¿½åŠ ã§å•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ãã ã•ã„ã€‚", paypalFlowFailedError: "PayPalã¸ã®æŽ¥ç¶šã«å•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ãã ã•ã„ã€‚", paypalTokenizationRequestActiveError: "PayPalæ”¯æ‰•ã„ã®æ‰¿èªã¯ã™ã§ã«å‡¦ç†ä¸­ã§ã™ã€‚", venmoCanceledError: "å•é¡ŒãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚ãŠå®¢ã•ã¾ã®ç«¯æœ«ã«ã‚¤ãƒ³ã‚¹ãƒˆãƒ¼ãƒ«ã•ã‚Œã¦ã„ã‚‹Venmoã‚¢ãƒ—ãƒªãŒæœ€æ–°ã®ãƒãƒ¼ã‚¸ãƒ§ãƒ³ã§ã‚ã‚‹ã“ã¨ã€ãŠä½¿ã„ã®ãƒ–ãƒ©ã‚¦ã‚¶ãŒVenmoã¸ã®åˆ‡ã‚Šæ›¿ãˆã‚’ã‚µãƒãƒ¼ãƒˆã—ã¦ã„ã‚‹ã“ã¨ã‚’ç¢ºèªã—ã¦ãã ã•ã„ã€‚", venmoAppFailedError: "ãŠå®¢ã•ã¾ã®ç«¯æœ«ã§Venmoã‚¢ãƒ—ãƒªãŒè¦‹ã¤ã‹ã‚Šã¾ã›ã‚“ã§ã—ãŸã€‚", unsupportedCardTypeError: "ã“ã®ã‚«ãƒ¼ãƒ‰ã‚¿ã‚¤ãƒ—ã¯ã‚µãƒãƒ¼ãƒˆã•ã‚Œã¦ã„ã¾ã›ã‚“ã€‚åˆ¥ã®ã‚«ãƒ¼ãƒ‰ã‚’ã”ä½¿ç”¨ãã ã•ã„ã€‚", applePayTokenizationError: "Apple Payã®æ”¯æ‰•ã„ã‚’å‡¦ç†ã™ã‚‹éš›ã«ãƒãƒƒãƒˆãƒ¯ãƒ¼ã‚¯ã‚¨ãƒ©ãƒ¼ãŒç™ºç”Ÿã—ã¾ã—ãŸã€‚ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ãã ã•ã„ã€‚", applePayActiveCardError: "Apple Payã‚¦ã‚©ãƒ¬ãƒƒãƒˆã«å¯¾å¿œã—ã¦ã„ã‚‹ã‚«ãƒ¼ãƒ‰ã‚’è¿½åŠ ã—ã¦ãã ã•ã„ã€‚", cardholderNameLabel: "ã‚«ãƒ¼ãƒ‰ä¿æœ‰è€…ã®åå‰", cardNumberLabel: "ã‚«ãƒ¼ãƒ‰ç•ªå·", cvvLabel: "ã‚«ãƒ¼ãƒ‰ç¢ºèªã‚³ãƒ¼ãƒ‰", cvvThreeDigitLabelSubheading: "(3æ¡)", cvvFourDigitLabelSubheading: "(4æ¡)", cardholderNamePlaceholder: "ã‚«ãƒ¼ãƒ‰ä¿æœ‰è€…ã®åå‰", expirationDateLabel: "æœ‰åŠ¹æœŸé™", expirationDateLabelSubheading: "(MM/YY)", expirationDatePlaceholder: "MM/YY", postalCodeLabel: "éƒµä¾¿ç•ªå·", payWithCard: "ã‚«ãƒ¼ãƒ‰ã§æ”¯æ‰•ã†", endingIn: "x-{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "ã‚«ãƒ¼ãƒ‰", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "éŠ€è¯(UnionPay)" }
        }, {}],
        150: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "{{paymentSource}}(ìœ¼)ë¡œ ê²°ì œ", chooseAnotherWayToPay: "ë‹¤ë¥¸ ê²°ì œìˆ˜ë‹¨ ì„ íƒ", chooseAWayToPay: "ê²°ì œìˆ˜ë‹¨ ì„ íƒ", otherWaysToPay: "ë‹¤ë¥¸ ë°©ë²•ìœ¼ë¡œ ê²°ì œ", cardVerification: "ì¹´ë“œ ì¸ì¦", fieldEmptyForCvv: "CVVë¥¼ ìž…ë ¥í•˜ì„¸ìš”.", fieldEmptyForExpirationDate: "ë§Œë£Œì¼ì„ ìž…ë ¥í•˜ì„¸ìš”.", fieldEmptyForCardholderName: "ì¹´ë“œ ì†Œìœ ìž ì´ë¦„ì„ ìž…ë ¥í•˜ì„¸ìš”.", fieldTooLongForCardholderName: "ì¹´ë“œ ì†Œìœ ìž ì´ë¦„ì€ 256ìž ë¯¸ë§Œì´ì–´ì•¼ í•©ë‹ˆë‹¤.", fieldEmptyForNumber: "ë²ˆí˜¸ë¥¼ ìž…ë ¥í•˜ì„¸ìš”.", fieldEmptyForPostalCode: "ìš°íŽ¸ë²ˆí˜¸ë¥¼ ìž…ë ¥í•˜ì„¸ìš”.", fieldInvalidForCvv: "ì´ ë³´ì•ˆ ì½”ë“œê°€ ì˜¬ë°”ë¥´ì§€ ì•ŠìŠµë‹ˆë‹¤.", fieldInvalidForExpirationDate: "ì´ ë§Œë£Œì¼ì´ ì˜¬ë°”ë¥´ì§€ ì•ŠìŠµë‹ˆë‹¤.", fieldInvalidForNumber: "ì´ ì¹´ë“œ ë²ˆí˜¸ê°€ ì˜¬ë°”ë¥´ì§€ ì•ŠìŠµë‹ˆë‹¤.", fieldInvalidForPostalCode: "ì´ ìš°íŽ¸ë²ˆí˜¸ê°€ ì˜¬ë°”ë¥´ì§€ ì•ŠìŠµë‹ˆë‹¤.", genericError: "ì €í¬ ìª½ì— ë¬¸ì œê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤.", hostedFieldsTokenizationFailOnDuplicateError: "ì €ìž¥ëœ ê²°ì œìˆ˜ë‹¨ì— ì´ë¯¸ ì´ ì‹ ìš©ì¹´ë“œê°€ ì¡´ìž¬í•©ë‹ˆë‹¤.", hostedFieldsFailedTokenizationError: "ì •ë³´ë¥¼ í™•ì¸í•˜ê³  ë‹¤ì‹œ ì‹œë„í•´ ì£¼ì„¸ìš”.", hostedFieldsFieldsInvalidError: "ì •ë³´ë¥¼ í™•ì¸í•˜ê³  ë‹¤ì‹œ ì‹œë„í•´ ì£¼ì„¸ìš”.", hostedFieldsTokenizationNetworkErrorError: "ë„¤íŠ¸ì›Œí¬ ì˜¤ë¥˜ê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤. ë‹¤ì‹œ ì‹œë„í•´ ì£¼ì„¸ìš”.", hostedFieldsTokenizationCvvVerificationFailedError: "ì‹ ìš©ì¹´ë“œ ì¸ì¦ì— ì‹¤íŒ¨í–ˆìŠµë‹ˆë‹¤. ì •ë³´ë¥¼ í™•ì¸í•˜ê³  ë‹¤ì‹œ ì‹œë„í•´ ì£¼ì„¸ìš”.", paypalAccountTokenizationFailedError: "PayPal ê³„ì •ì„ ì¶”ê°€í•˜ëŠ” ë™ì•ˆ ë¬¸ì œê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤. ë‹¤ì‹œ ì‹œë„í•´ ì£¼ì„¸ìš”.", paypalFlowFailedError: "PayPal ê³„ì •ì„ ì—°ê²°í•˜ëŠ” ë™ì•ˆ ë¬¸ì œê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤. ë‹¤ì‹œ ì‹œë„í•´ ì£¼ì„¸ìš”.", paypalTokenizationRequestActiveError: "PayPal ê²°ì œ ìŠ¹ì¸ì´ ì´ë¯¸ ì§„í–‰ ì¤‘ìž…ë‹ˆë‹¤.", venmoCanceledError: "ì˜¤ë¥˜ê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤. ê¸°ê¸°ì— ìµœì‹  ë²„ì „ì˜ Venmo ì•±ì´ ì„¤ì¹˜ë˜ì–´ ìžˆìœ¼ë©° ë¸Œë¼ìš°ì €ê°€ Venmoë¡œ ì „í™˜ ê¸°ëŠ¥ì„ ì§€ì›í•˜ëŠ”ì§€ í™•ì¸í•˜ì„¸ìš”.", venmoAppFailedError: "ê¸°ê¸°ì—ì„œ Venmo ì•±ì„ ì°¾ì„ ìˆ˜ ì—†ìŠµë‹ˆë‹¤.", unsupportedCardTypeError: "ì´ ì¹´ë“œ í˜•ì‹ì€ ì§€ì›ë˜ì§€ ì•ŠìŠµë‹ˆë‹¤. ë‹¤ë¥¸ ì¹´ë“œë¡œ ì‹œë„í•´ ì£¼ì„¸ìš”.", applePayTokenizationError: "Apple Pay ê²°ì œë¥¼ ì²˜ë¦¬í•˜ëŠ” ë™ì•ˆ ë„¤íŠ¸ì›Œí¬ ì˜¤ë¥˜ê°€ ë°œìƒí–ˆìŠµë‹ˆë‹¤. ë‹¤ì‹œ ì‹œë„í•´ ì£¼ì„¸ìš”.", applePayActiveCardError: "Apple Pay ì „ìžì§€ê°‘ì— ì§€ì›ë˜ëŠ” ì¹´ë“œë¥¼ ì¶”ê°€í•˜ì„¸ìš”.", cardholderNameLabel: "ì¹´ë“œ ì†Œìœ ìž ì´ë¦„", cardNumberLabel: "ì¹´ë“œ ë²ˆí˜¸", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "(3ìžë¦¬)", cvvFourDigitLabelSubheading: "(4ìžë¦¬)", cardholderNamePlaceholder: "ì¹´ë“œ ì†Œìœ ìž ì´ë¦„", expirationDateLabel: "ë§Œë£Œì¼", expirationDateLabelSubheading: "(MM/YY)", expirationDatePlaceholder: "MM/YY", postalCodeLabel: "ìš°íŽ¸ë²ˆí˜¸", payWithCard: "ì¹´ë“œë¡œ ê²°ì œ", endingIn: "ë ë²ˆí˜¸: â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "ì¹´ë“œ", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        151: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Betalen met {{paymentSource}}", chooseAnotherWayToPay: "Kies een andere betaalmethode", chooseAWayToPay: "Kies een betaalwijze", otherWaysToPay: "Andere manieren om te betalen", cardVerification: "Kaartcontrole", fieldEmptyForCvv: "Vul een CSC in.", fieldEmptyForExpirationDate: "Vul een vervaldatum in.", fieldEmptyForCardholderName: "Vul een naam voor de kaarthouder in.", fieldTooLongForCardholderName: "De naam van de kaarthouder moet korter zijn dan 256 tekens.", fieldEmptyForNumber: "Vul een nummer in.", fieldEmptyForPostalCode: "Vul een postcode in.", fieldInvalidForCvv: "Deze CSC is ongeldig.", fieldInvalidForExpirationDate: "Deze vervaldatum is ongeldig.", fieldInvalidForNumber: "Dit creditcardnummer is ongeldig.", fieldInvalidForPostalCode: "Deze postcode is ongeldig.", genericError: "Er is iets fout gegaan.", hostedFieldsTokenizationFailOnDuplicateError: "Deze creditcard staat al geregistreerd als een opgeslagen betaalmethode.", hostedFieldsFailedTokenizationError: "Controleer uw gegevens en probeer het opnieuw.", hostedFieldsFieldsInvalidError: "Controleer uw gegevens en probeer het opnieuw.", hostedFieldsTokenizationNetworkErrorError: "Netwerkfout. Probeer het opnieuw.", hostedFieldsTokenizationCvvVerificationFailedError: "De controle van de creditcard is mislukt. Controleer uw gegevens en probeer het opnieuw.", paypalAccountTokenizationFailedError: "Er is iets misgegaan bij het toevoegen van de PayPal-rekening. Probeer het opnieuw.", paypalFlowFailedError: "Er is iets misgegaan bij de verbinding met PayPal. Probeer het opnieuw.", paypalTokenizationRequestActiveError: "De autorisatie van de PayPal-betaling is al in behandeling.", venmoCanceledError: "Er ging iets fout. Controleer of de meest recente versie van de Venmo-app op je apparaat is geÃ¯nstalleerd en dat je browser overschakelen naar Venmo ondersteunt.", venmoAppFailedError: "De Venmo-app is niet aangetroffen op je apparaat.", unsupportedCardTypeError: "Dit type creditcard wordt niet ondersteund. Gebruik een andere creditcard.", applePayTokenizationError: "Er is een netwerkfout opgetreden bij het verwerken van de Apple Pay-betaling. Probeer het opnieuw.", applePayActiveCardError: "Voeg een ondersteunde creditcard toe aan je Apple Pay-wallet.", cardholderNameLabel: "Naam kaarthouder", cardNumberLabel: "Creditcardnummer", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "(3 cijfers)", cvvFourDigitLabelSubheading: "(4 cijfers)", cardholderNamePlaceholder: "Naam kaarthouder", expirationDateLabel: "VervaldatumB", expirationDateLabelSubheading: "(MM/JJ)", expirationDatePlaceholder: "MM/JJ", postalCodeLabel: "Postcode", payWithCard: "Betalen met creditcard", endingIn: "Eindigend op â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Creditcard", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        152: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Betaling med {{paymentSource}}", chooseAnotherWayToPay: "Velg en annen mÃ¥te Ã¥ betale pÃ¥", chooseAWayToPay: "Velg betalingsmÃ¥te", otherWaysToPay: "Andre mÃ¥ter Ã¥ betale pÃ¥", cardVerification: "Kortbekreftelse", fieldEmptyForCvv: "Oppgi en kortsikkerhetskode (CVV).", fieldEmptyForExpirationDate: "Oppgi en utlÃ¸psdato.", fieldEmptyForCardholderName: "Oppgi et navn for kortinnehaveren.", fieldTooLongForCardholderName: "Makslengden for kortinnehaverens navn er 256 tegn.", fieldEmptyForNumber: "Oppgi et nummer.", fieldEmptyForPostalCode: "Oppgi et postnummer.", fieldInvalidForCvv: "Denne sikkerhetskoden er ikke gyldig.", fieldInvalidForExpirationDate: "Denne utlÃ¸psdatoen er ikke gyldig.", fieldInvalidForNumber: "Dette kortnummeret er ikke gyldig.", fieldInvalidForPostalCode: "Dette postnummeret er ikke gyldig.", genericError: "Noe gikk galt hos oss.", hostedFieldsTokenizationFailOnDuplicateError: "Dette betalingskortet eksisterer allerede som en lagret betalingsmetode.", hostedFieldsFailedTokenizationError: "Kontroller informasjonen og prÃ¸v pÃ¥ nytt.", hostedFieldsFieldsInvalidError: "Kontroller informasjonen og prÃ¸v pÃ¥ nytt.", hostedFieldsTokenizationNetworkErrorError: "Nettverksfeil. PrÃ¸v pÃ¥ nytt.", hostedFieldsTokenizationCvvVerificationFailedError: "Bekreftelsen av betalingskortet mislyktes. Kontroller informasjonen og prÃ¸v pÃ¥ nytt.", paypalAccountTokenizationFailedError: "Noe gikk galt da PayPal-kontoen ble lagt til. PrÃ¸v pÃ¥ nytt.", paypalFlowFailedError: "Det oppsto et problem med tilkoblingen til PayPal. PrÃ¸v pÃ¥ nytt.", paypalTokenizationRequestActiveError: "Godkjenning av PayPal-betalingen pÃ¥gÃ¥r allerede", venmoCanceledError: "Noe gikk galt. Kontroller at du har installert den nyeste versjonen av Venmo-appen pÃ¥ enheten og at nettleseren din stÃ¸tter bytte til Venmo.", venmoAppFailedError: "Finner ikke Venmo-appen pÃ¥ enheten.", unsupportedCardTypeError: "Denne korttypen stÃ¸ttes ikke. PrÃ¸v med et annet kort.", applePayTokenizationError: "Det oppsto en nettverksfeil under behandlingen av Apple Pay-betalingen. PrÃ¸v pÃ¥ nytt.", applePayActiveCardError: "Legg til et kort som stÃ¸ttes i Apple Pay-lommeboken din.", cardholderNameLabel: "Kortinnehaverens navn", cardNumberLabel: "Kortnummer", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "(3 siffer)", cvvFourDigitLabelSubheading: "(4 siffer)", cardholderNamePlaceholder: "Kortinnehaverens navn", expirationDateLabel: "UtlÃ¸psdato", expirationDateLabelSubheading: "(MM/Ã…Ã…)", expirationDatePlaceholder: "MM/Ã…Ã…", postalCodeLabel: "Postnummer", payWithCard: "Betal med kort", endingIn: "Som slutter pÃ¥ â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Kort", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        153: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Forma pÅ‚atnoÅ›ci: {{paymentSource}}", chooseAnotherWayToPay: "Wybierz innÄ… formÄ™ pÅ‚atnoÅ›ci", chooseAWayToPay: "Wybierz sposÃ³b pÅ‚atnoÅ›ci", otherWaysToPay: "Inne formy pÅ‚atnoÅ›ci", cardVerification: "Weryfikacja karty", fieldEmptyForCvv: "Podaj kod bezpieczeÅ„stwa.", fieldEmptyForExpirationDate: "Podaj datÄ™ waÅ¼noÅ›ci.", fieldEmptyForCardholderName: "Podaj imiÄ™ i nazwisko posiadacza karty.", fieldTooLongForCardholderName: "ImiÄ™ i nazwisko posiadacza karty musi mieÄ‡ mniej niÅ¼ 256 znakÃ³w.", fieldEmptyForNumber: "Podaj numer.", fieldEmptyForPostalCode: "Podaj kod pocztowy.", fieldInvalidForCvv: "Podany kod bezpieczeÅ„stwa jest nieprawidÅ‚owy.", fieldInvalidForExpirationDate: "Podana data waÅ¼noÅ›ci jest nieprawidÅ‚owa.", fieldInvalidForNumber: "Podany numer karty jest nieprawidÅ‚owy.", fieldInvalidForPostalCode: "Podany kod pocztowy jest nieprawidÅ‚owy.", genericError: "WystÄ…piÅ‚ bÅ‚Ä…d po naszej stronie.", hostedFieldsTokenizationFailOnDuplicateError: "Ta karta kredytowa jest juÅ¼ zapisana jako ÅºrÃ³dÅ‚o finansowania pÅ‚atnoÅ›ci.", hostedFieldsFailedTokenizationError: "SprawdÅº swoje informacje i sprÃ³buj ponownie.", hostedFieldsFieldsInvalidError: "SprawdÅº swoje informacje i sprÃ³buj ponownie.", hostedFieldsTokenizationNetworkErrorError: "BÅ‚Ä…d sieci. SprÃ³buj ponownie.", hostedFieldsTokenizationCvvVerificationFailedError: "Weryfikacja karty kredytowej nie powiodÅ‚a siÄ™. SprawdÅº swoje informacje i sprÃ³buj ponownie.", paypalAccountTokenizationFailedError: "CoÅ› poszÅ‚o nie tak podczas dodawania konta PayPal. SprÃ³buj ponownie.", paypalFlowFailedError: "CoÅ› poszÅ‚o nie tak podczas Å‚Ä…czenia z systemem PayPal. SprÃ³buj ponownie.", paypalTokenizationRequestActiveError: "Autoryzacja pÅ‚atnoÅ›ci PayPal jest juÅ¼ w trakcie realizacji.", venmoCanceledError: "WystÄ…piÅ‚ problem. Upewnij siÄ™, czy na swoim urzÄ…dzeniu masz zainstalowanÄ… najnowszÄ… wersjÄ™ aplikacji Venmo i Twoja przeglÄ…darka jÄ… obsÅ‚uguje.", venmoAppFailedError: "Nie moÅ¼na odnaleÅºÄ‡ aplikacji Venmo na urzÄ…dzeniu.", unsupportedCardTypeError: "Ten typ karty nie jest obsÅ‚ugiwany. SprÃ³buj uÅ¼yÄ‡ innej karty.", applePayTokenizationError: "WystÄ…piÅ‚ bÅ‚Ä…d sieci podczas przetwarzania pÅ‚atnoÅ›ci Apple Pay. SprÃ³buj ponownie.", applePayActiveCardError: "Dodaj obsÅ‚ugiwanÄ… kartÄ™ do portfela Apple Pay.", cardholderNameLabel: "ImiÄ™ i nazwisko posiadacza karty", cardNumberLabel: "Numer karty", cvvLabel: "Kod CVC", cvvThreeDigitLabelSubheading: "(3 cyfry)", cvvFourDigitLabelSubheading: "(4 cyfry)", cardholderNamePlaceholder: "ImiÄ™ i nazwisko posiadacza karty", expirationDateLabel: "Data waÅ¼noÅ›ci", expirationDateLabelSubheading: "(MM/RR)", expirationDatePlaceholder: "MM/RR", postalCodeLabel: "Kod pocztowy", payWithCard: "ZapÅ‚aÄ‡ kartÄ…", endingIn: "O numerze zakoÅ„czonym cyframi â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Karta", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        154: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Pagando com {{paymentSource}}", chooseAnotherWayToPay: "Escolher outro meio de pagamento", chooseAWayToPay: "Escolher um meio de pagamento", otherWaysToPay: "Outro meio de pagamento", cardVerification: "VerificaÃ§Ã£o do cartÃ£o", fieldEmptyForCvv: "Informe o CÃ³digo de SeguranÃ§a.", fieldEmptyForExpirationDate: "Informe a data de vencimento.", fieldEmptyForCardholderName: "Informe o nome do titular do cartÃ£o.", fieldTooLongForCardholderName: "O nome do titular do cartÃ£o deve ter menos de 256 caracteres.", fieldEmptyForNumber: "Informe um nÃºmero.", fieldEmptyForPostalCode: "Informe um CEP.", fieldInvalidForCvv: "Este cÃ³digo de seguranÃ§a nÃ£o Ã© vÃ¡lido.", fieldInvalidForExpirationDate: "Esta data de vencimento nÃ£o Ã© vÃ¡lida.", fieldInvalidForNumber: "O nÃºmero do cartÃ£o nÃ£o Ã© vÃ¡lido.", fieldInvalidForPostalCode: "Este CEP nÃ£o Ã© vÃ¡lido.", genericError: "Ocorreu um erro.", hostedFieldsTokenizationFailOnDuplicateError: "Este cartÃ£o de crÃ©dito jÃ¡ existe como meio de pagamento salvo.", hostedFieldsFailedTokenizationError: "Verifique as informaÃ§Ãµes e tente novamente.", hostedFieldsFieldsInvalidError: "Verifique as informaÃ§Ãµes e tente novamente.", hostedFieldsTokenizationNetworkErrorError: "Erro de rede. Tente novamente.", hostedFieldsTokenizationCvvVerificationFailedError: "Falha ao verificar o cartÃ£o de crÃ©dito. Verifique as informaÃ§Ãµes e tente novamente.", paypalAccountTokenizationFailedError: "Ocorreu um erro ao adicionar a conta do PayPal. Tente novamente.", paypalFlowFailedError: "Ocorreu um erro de conexÃ£o com o PayPal. Tente novamente.", paypalTokenizationRequestActiveError: "A autorizaÃ§Ã£o de pagamento do PayPal jÃ¡ estÃ¡ em andamento.", venmoCanceledError: "Ocorreu um erro. Certifique-se de ter a versÃ£o mais recente do aplicativo Venmo instalado no seu dispositivo e que o seu navegador suporte a mudanÃ§a para o Venmo.", venmoAppFailedError: "NÃ£o foi possÃ­vel encontrar o aplicativo Venmo no seu dispositivo.", unsupportedCardTypeError: "Este tipo de cartÃ£o nÃ£o Ã© aceito. Experimente outro cartÃ£o.", applePayTokenizationError: "Ocorreu um erro de rede ao processar o pagamento com Apple Pay. Tente novamente.", applePayActiveCardError: "Adicione cartÃ£o suportado Ã  sua carteira do Apple Pay.", cardholderNameLabel: "Nome do titular do cartÃ£o", cardNumberLabel: "NÃºmero do cartÃ£o", cvvLabel: "CSC", cvvThreeDigitLabelSubheading: "(3 dÃ­gitos)", cvvFourDigitLabelSubheading: "(4 dÃ­gitos)", cardholderNamePlaceholder: "Nome do titular do cartÃ£o", expirationDateLabel: "Data de vencimento", expirationDateLabelSubheading: "(MM/AA)", expirationDatePlaceholder: "MM/AA", postalCodeLabel: "CEP", payWithCard: "Pague com seu cartÃ£o", endingIn: "Com final â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "CartÃ£o", PayPal: "PayPal", "PayPal Credit": "CrÃ©dito do PayPal", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        155: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Pagar com {{paymentSource}}", chooseAnotherWayToPay: "Escolher outra forma de pagamento", chooseAWayToPay: "Escolha um meio de pagamento", otherWaysToPay: "Outras formas de pagamento", cardVerification: "VerificaÃ§Ã£o de cartÃ£o", fieldEmptyForCvv: "Introduza o cÃ³digo CVV.", fieldEmptyForExpirationDate: "Introduza a data de validade.", fieldEmptyForCardholderName: "Introduza um nome do titular do cartÃ£o.", fieldTooLongForCardholderName: "O nome do titular do cartÃ£o tem de ter menos de 256 carateres.", fieldEmptyForNumber: "Introduza um nÃºmero.", fieldEmptyForPostalCode: "Introduza o cÃ³digo postal.", fieldInvalidForCvv: "Este cÃ³digo de seguranÃ§a nÃ£o Ã© vÃ¡lido.", fieldInvalidForExpirationDate: "Esta data de validade nÃ£o Ã© correta.", fieldInvalidForNumber: "Este nÃºmero de cartÃ£o nÃ£o Ã© vÃ¡lido.", fieldInvalidForPostalCode: "Este cÃ³digo postal nÃ£o Ã© vÃ¡lido.", genericError: "Tudo indica que ocorreu um problema.", hostedFieldsTokenizationFailOnDuplicateError: "Este cartÃ£o de crÃ©dito jÃ¡ estÃ¡ registado como um meio de pagamento guardado.", hostedFieldsFailedTokenizationError: "Verifique os dados e tente novamente.", hostedFieldsFieldsInvalidError: "Verifique os dados e tente novamente.", hostedFieldsTokenizationNetworkErrorError: "Erro de rede. Tente novamente.", hostedFieldsTokenizationCvvVerificationFailedError: "A verificaÃ§Ã£o do cartÃ£o de crÃ©dito falhou. Verifique os dados e tente novamente.", paypalAccountTokenizationFailedError: "Ocorreu um erro ao associar a conta PayPal. Tente novamente.", paypalFlowFailedError: "Ocorreu um erro na ligaÃ§Ã£o com PayPal. Tente novamente.", paypalTokenizationRequestActiveError: "JÃ¡ hÃ¡ uma autorizaÃ§Ã£o de pagamento PayPal em curso.", venmoCanceledError: "Ocorreu um erro. Certifique-se de que tem a versÃ£o mais recente da aplicaÃ§Ã£o Venmo instalada no seu dispositivo e que o navegador suporta a mudanÃ§a para o Venmo.", venmoAppFailedError: "NÃ£o foi possÃ­vel encontrar a aplicaÃ§Ã£o Venmo no dispositivo.", unsupportedCardTypeError: "Este tipo de cartÃ£o nÃ£o Ã© suportado. Tente usar outro cartÃ£o.", applePayTokenizationError: "Ocorreu um erro de rede ao processar o pagamento com Apple Pay. Tente novamente.", applePayActiveCardError: "Adicione um cartÃ£o suportado Ã  sua carteira Apple Pay.", cardholderNameLabel: "Nome do titular do cartÃ£o", cardNumberLabel: "NÃºmero do cartÃ£o", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "(3 dÃ­gitos)", cvvFourDigitLabelSubheading: "(4 dÃ­gitos)", cardholderNamePlaceholder: "Nome do titular do cartÃ£o", expirationDateLabel: "Data de validade", expirationDateLabelSubheading: "(MM/AA)", expirationDatePlaceholder: "MM/AA", postalCodeLabel: "CÃ³digo postal", payWithCard: "Pagar com cartÃ£o", endingIn: "TerminaÃ§Ã£o em â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "CartÃ£o", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        156: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Ð¡Ð¿Ð¾ÑÐ¾Ð±Ñ‹ Ð¾Ð¿Ð»Ð°Ñ‚Ñ‹: {{paymentSource}}", chooseAnotherWayToPay: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð´Ñ€ÑƒÐ³Ð¾Ð¹ ÑÐ¿Ð¾ÑÐ¾Ð± Ð¾Ð¿Ð»Ð°Ñ‚Ñ‹", chooseAWayToPay: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÑÐ¿Ð¾ÑÐ¾Ð± Ð¾Ð¿Ð»Ð°Ñ‚Ñ‹", otherWaysToPay: "Ð”Ñ€ÑƒÐ³Ð¸Ðµ ÑÐ¿Ð¾ÑÐ¾Ð±Ñ‹ Ð¾Ð¿Ð»Ð°Ñ‚Ñ‹", cardVerification: "ÐŸÑ€Ð¾Ð²ÐµÑ€ÐºÐ° ÐºÐ°Ñ€Ñ‚Ñ‹", fieldEmptyForCvv: "Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ ÐºÐ¾Ð´ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸.", fieldEmptyForExpirationDate: "Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð´Ð°Ñ‚Ñƒ Ð¾ÐºÐ¾Ð½Ñ‡Ð°Ð½Ð¸Ñ ÑÑ€Ð¾ÐºÐ° Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ.", fieldEmptyForCardholderName: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¸Ð¼Ñ Ð¸ Ñ„Ð°Ð¼Ð¸Ð»Ð¸ÑŽ Ð²Ð»Ð°Ð´ÐµÐ»ÑŒÑ†Ð° ÐºÐ°Ñ€Ñ‚Ñ‹.", fieldTooLongForCardholderName: "Ð˜Ð¼Ñ Ð²Ð»Ð°Ð´ÐµÐ»ÑŒÑ†Ð° ÐºÐ°Ñ€Ñ‚Ñ‹ Ð´Ð¾Ð»Ð¶Ð½Ð¾ ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‚ÑŒ Ð½Ðµ Ð±Ð¾Ð»ÐµÐµ 256 ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð².", fieldEmptyForNumber: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ð¾Ð¼ÐµÑ€.", fieldEmptyForPostalCode: "Ð£ÐºÐ°Ð¶Ð¸Ñ‚Ðµ Ð¿Ð¾Ñ‡Ñ‚Ð¾Ð²Ñ‹Ð¹ Ð¸Ð½Ð´ÐµÐºÑ.", fieldInvalidForCvv: "Ð­Ñ‚Ð¾Ñ‚ ÐºÐ¾Ð´ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð½ÐµÐ´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÐµÐ½.", fieldInvalidForExpirationDate: "Ð­Ñ‚Ð° Ð´Ð°Ñ‚Ð° Ð¾ÐºÐ¾Ð½Ñ‡Ð°Ð½Ð¸Ñ ÑÑ€Ð¾ÐºÐ° Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ Ð½ÐµÐ´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð°.", fieldInvalidForNumber: "Ð­Ñ‚Ð¾Ñ‚ Ð½Ð¾Ð¼ÐµÑ€ ÐºÐ°Ñ€Ñ‚Ñ‹ Ð½ÐµÐ´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÐµÐ½.", fieldInvalidForPostalCode: "Ð­Ñ‚Ð¾Ñ‚ Ð¿Ð¾Ñ‡Ñ‚Ð¾Ð²Ñ‹Ð¹ Ð¸Ð½Ð´ÐµÐºÑ Ð½ÐµÐ´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÐµÐ½.", genericError: "Ð’Ð¾Ð·Ð½Ð¸ÐºÐ»Ð° Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð° Ñ Ð½Ð°ÑˆÐµÐ¹ ÑÑ‚Ð¾Ñ€Ð¾Ð½Ñ‹.", hostedFieldsTokenizationFailOnDuplicateError: "Ð­Ñ‚Ð° ÐºÑ€ÐµÐ´Ð¸Ñ‚Ð½Ð°Ñ ÐºÐ°Ñ€Ñ‚Ð° ÑƒÐ¶Ðµ ÑƒÐºÐ°Ð·Ð°Ð½Ð° ÐºÐ°Ðº ÑÐ¾Ñ…Ñ€Ð°Ð½ÐµÐ½Ð½Ñ‹Ð¹ Ð¸ÑÑ‚Ð¾Ñ‡Ð½Ð¸Ðº ÑÑ€ÐµÐ´ÑÑ‚Ð².", hostedFieldsFailedTokenizationError: "ÐŸÑ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ Ð²Ð²Ð¾Ð´Ð° Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð¸ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.", hostedFieldsFieldsInvalidError: "ÐŸÑ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ Ð²Ð²Ð¾Ð´Ð° Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð¸ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.", hostedFieldsTokenizationNetworkErrorError: "ÐžÑˆÐ¸Ð±ÐºÐ° ÑÐµÑ‚Ð¸. ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.", hostedFieldsTokenizationCvvVerificationFailedError: "ÐŸÑ€Ð¾Ð²ÐµÑ€ÐºÐ° Ð±Ð°Ð½ÐºÐ¾Ð²ÑÐºÐ¾Ð¹ ÐºÐ°Ñ€Ñ‚Ñ‹ Ð½Ðµ Ð²Ñ‹Ð¿Ð¾Ð»Ð½ÐµÐ½Ð°. ÐŸÑ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ Ð²Ð²Ð¾Ð´Ð° Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð¸ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.", paypalAccountTokenizationFailedError: "Ð§Ñ‚Ð¾-Ñ‚Ð¾ Ð¿Ð¾ÑˆÐ»Ð¾ Ð½Ðµ Ñ‚Ð°Ðº â€” Ð½Ðµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð´Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ ÑƒÑ‡ÐµÑ‚Ð½ÑƒÑŽ Ð·Ð°Ð¿Ð¸ÑÑŒ PayPal. ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.", paypalFlowFailedError: "Ð§Ñ‚Ð¾-Ñ‚Ð¾ Ð¿Ð¾ÑˆÐ»Ð¾ Ð½Ðµ Ñ‚Ð°Ðº â€” Ð½Ðµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð¿Ð¾Ð´ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒÑÑ Ðº ÑÐ¸ÑÑ‚ÐµÐ¼Ðµ PayPal. ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.", paypalTokenizationRequestActiveError: "Ð’Ñ‹Ð¿Ð¾Ð»Ð½ÑÐµÑ‚ÑÑ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ñ Ð¿Ð»Ð°Ñ‚ÐµÐ¶Ð° PayPal.", venmoCanceledError: "Ð’Ð¾Ð·Ð½Ð¸ÐºÐ»Ð° Ð¾ÑˆÐ¸Ð±ÐºÐ°. ÐŸÑ€Ð¾ÑÐ¸Ð¼ Ð²Ð°Ñ ÑƒÐ±ÐµÐ´Ð¸Ñ‚ÑŒÑÑ, Ñ‡Ñ‚Ð¾ Ñƒ Ð²Ð°Ñ ÑƒÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð° Ð½Ð¾Ð²ÐµÐ¹ÑˆÐ°Ñ Ð²ÐµÑ€ÑÐ¸Ñ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ Venmo Ð¸ Ð²Ð°Ñˆ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÑ‚ Ð¿ÐµÑ€ÐµÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ðº Venmo.", venmoAppFailedError: "ÐŸÑ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ Venmo Ð½Ðµ Ð¾Ð±Ð½Ð°Ñ€ÑƒÐ¶ÐµÐ½Ð¾ Ð½Ð° Ð²Ð°ÑˆÐµÐ¼ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ðµ.", unsupportedCardTypeError: "Ð­Ñ‚Ð¾Ñ‚ Ñ‚Ð¸Ð¿ ÐºÐ°Ñ€Ñ‚Ñ‹ Ð½Ðµ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÑ‚ÑÑ. ÐŸÐ¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ Ð²Ð¾ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÑŒÑÑ Ð´Ñ€ÑƒÐ³Ð¾Ð¹ ÐºÐ°Ñ€Ñ‚Ð¾Ð¹.", applePayTokenizationError: "ÐŸÑ€Ð¸ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐµ Ð¿Ð»Ð°Ñ‚ÐµÐ¶Ð° Ñ‡ÐµÑ€ÐµÐ· Apple Pay Ð²Ð¾Ð·Ð½Ð¸ÐºÐ»Ð° ÑÐµÑ‚ÐµÐ²Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°. ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.", applePayActiveCardError: "Ð”Ð¾Ð±Ð°Ð²ÑŒÑ‚Ðµ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÐ¼ÑƒÑŽ ÐºÐ°Ñ€Ñ‚Ñƒ Ðº ÑÐ²Ð¾ÐµÐ¼Ñƒ ÑÑ‡ÐµÑ‚Ñƒ Apple Pay.", cardholderNameLabel: "Ð˜Ð¼Ñ Ð¸ Ñ„Ð°Ð¼Ð¸Ð»Ð¸Ñ Ð²Ð»Ð°Ð´ÐµÐ»ÑŒÑ†Ð°", cardNumberLabel: "ÐÐ¾Ð¼ÐµÑ€ ÐºÐ°Ñ€Ñ‚Ñ‹", cvvLabel: "ÐšÐ¾Ð´ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸", cvvThreeDigitLabelSubheading: "(3 Ñ†Ð¸Ñ„Ñ€Ñ‹)", cvvFourDigitLabelSubheading: "(4 Ñ†Ð¸Ñ„Ñ€Ñ‹)", cardholderNamePlaceholder: "Ð˜Ð¼Ñ Ð¸ Ñ„Ð°Ð¼Ð¸Ð»Ð¸Ñ Ð²Ð»Ð°Ð´ÐµÐ»ÑŒÑ†Ð°", expirationDateLabel: "Ð¡Ñ€Ð¾Ðº Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ", expirationDateLabelSubheading: "(ÐœÐœ/Ð“Ð“)", expirationDatePlaceholder: "ÐœÐœ/Ð“Ð“", postalCodeLabel: "Ð˜Ð½Ð´ÐµÐºÑ", payWithCard: "ÐžÐ¿Ð»Ð°Ñ‚Ð¸Ñ‚ÑŒ ÐºÐ°Ñ€Ñ‚Ð¾Ð¹", endingIn: "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¸Ðµ Ð´Ð²Ðµ Ñ†Ð¸Ñ„Ñ€Ñ‹ Ð½Ð¾Ð¼ÐµÑ€Ð° ÐºÐ°Ñ€Ñ‚Ñ‹: â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "ÐšÐ°Ñ€Ñ‚Ð°", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        157: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "Betalas med {{paymentSource}}", chooseAnotherWayToPay: "VÃ¤lj ett annat sÃ¤tt att betala", chooseAWayToPay: "VÃ¤lj hur du vill betala", otherWaysToPay: "Andra sÃ¤tt att betala", cardVerification: "Kortverifiering", fieldEmptyForCvv: "Fyll i en CVV-kod.", fieldEmptyForExpirationDate: "Fyll i ett utgÃ¥ngsdatum.", fieldEmptyForCardholderName: "Fyll i kortinnehavarens namn.", fieldTooLongForCardholderName: "Kortinnehavarens namn mÃ¥ste vara kortare Ã¤n 256 tecken.", fieldEmptyForNumber: "Fyll i ett nummer.", fieldEmptyForPostalCode: "Fyll i ett postnummer.", fieldInvalidForCvv: "Den hÃ¤r sÃ¤kerhetskoden Ã¤r inte giltig.", fieldInvalidForExpirationDate: "Det hÃ¤r utgÃ¥ngsdatumet Ã¤r inte giltigt.", fieldInvalidForNumber: "Det hÃ¤r kortnumret Ã¤r inte giltigt.", fieldInvalidForPostalCode: "Det hÃ¤r postnumret Ã¤r inte giltigt.", genericError: "Ett fel uppstod.", hostedFieldsTokenizationFailOnDuplicateError: "Det hÃ¤r betalkortet finns redan som en sparad betalningsmetod.", hostedFieldsFailedTokenizationError: "Kontrollera uppgifterna och fÃ¶rsÃ¶k igen.", hostedFieldsFieldsInvalidError: "Kontrollera uppgifterna och fÃ¶rsÃ¶k igen.", hostedFieldsTokenizationNetworkErrorError: "NÃ¤tverksfel. FÃ¶rsÃ¶k igen.", hostedFieldsTokenizationCvvVerificationFailedError: "Verifieringen av betalkort misslyckades. Kontrollera uppgifterna och fÃ¶rsÃ¶k igen.", paypalAccountTokenizationFailedError: "Ett fel uppstod nÃ¤r PayPal-kontot skulle lÃ¤ggas till. FÃ¶rsÃ¶k igen.", paypalFlowFailedError: "Ett fel uppstod nÃ¤r anslutningen till PayPal skulle upprÃ¤ttas. FÃ¶rsÃ¶k igen.", paypalTokenizationRequestActiveError: "BetalningsgodkÃ¤nnandet fÃ¶r PayPal behandlas redan.", venmoCanceledError: "NÃ¥got gick fel. Se till att du har den senaste versionen av Venmo-appen installerad pÃ¥ din enhet och att webblÃ¤saren stÃ¶der att gÃ¥ Ã¶ver till Venmo.", venmoAppFailedError: "Venmo-appen kunde inte hittas pÃ¥ din enhet.", unsupportedCardTypeError: "Den hÃ¤r korttypen stÃ¶ds inte. PrÃ¶va med ett annat kort.", applePayTokenizationError: "Ett nÃ¤tverksfel intrÃ¤ffade nÃ¤r Apple Pay-betalningen skulle behandlas. FÃ¶rsÃ¶k igen.", applePayActiveCardError: "LÃ¤gg till ett kort som stÃ¶ds i Apple Pay-e-plÃ¥nboken.", cardholderNameLabel: "Kortinnehavarens namn", cardNumberLabel: "Kortnummer", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "(3 siffror)", cvvFourDigitLabelSubheading: "(4 siffror)", cardholderNamePlaceholder: "Kortinnehavarens namn", expirationDateLabel: "UtgÃ¥ngsdatum", expirationDateLabelSubheading: "(MM/Ã…Ã…)", expirationDatePlaceholder: "MM/Ã…Ã…", postalCodeLabel: "Postnummer", payWithCard: "Betala med kort", endingIn: "Slutar pÃ¥ â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "Kort", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        158: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "à¸à¸²à¸£à¸Šà¸³à¸£à¸°à¹€à¸‡à¸´à¸™à¸”à¹‰à¸§à¸¢ {{paymentSource}}", chooseAnotherWayToPay: "à¹€à¸¥à¸·à¸­à¸à¸§à¸´à¸˜à¸µà¸­à¸·à¹ˆà¸™à¹€à¸žà¸·à¹ˆà¸­à¸Šà¸³à¸£à¸°à¹€à¸‡à¸´à¸™", chooseAWayToPay: "à¹€à¸¥à¸·à¸­à¸à¸§à¸´à¸˜à¸µà¸Šà¸³à¸£à¸°à¹€à¸‡à¸´à¸™", otherWaysToPay: "à¸§à¸´à¸˜à¸µà¸­à¸·à¹ˆà¸™à¹† à¹ƒà¸™à¸à¸²à¸£à¸Šà¸³à¸£à¸°à¹€à¸‡à¸´à¸™", cardVerification: "à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸¢à¸·à¸™à¸¢à¸±à¸™à¸šà¸±à¸•à¸£", fieldEmptyForCvv: "à¹‚à¸›à¸£à¸”à¸à¸£à¸­à¸ CVV (à¸£à¸«à¸±à¸ªà¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸¢à¸·à¸™à¸¢à¸±à¸™à¸šà¸±à¸•à¸£)", fieldEmptyForExpirationDate: "à¹‚à¸›à¸£à¸”à¸à¸£à¸­à¸à¸§à¸±à¸™à¸—à¸µà¹ˆà¸«à¸¡à¸”à¸­à¸²à¸¢à¸¸", fieldEmptyForCardholderName: "à¹‚à¸›à¸£à¸”à¸à¸£à¸­à¸à¸Šà¸·à¹ˆà¸­à¹€à¸ˆà¹‰à¸²à¸‚à¸­à¸‡à¸šà¸±à¸•à¸£", fieldTooLongForCardholderName: "à¸Šà¸·à¹ˆà¸­à¸œà¸¹à¹‰à¸–à¸·à¸­à¸šà¸±à¸•à¸£à¸ˆà¸°à¸•à¹‰à¸­à¸‡à¹„à¸¡à¹ˆà¹€à¸à¸´à¸™ 256 à¸­à¸±à¸à¸‚à¸£à¸°", fieldEmptyForNumber: "à¹‚à¸›à¸£à¸”à¸à¸£à¸­à¸à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚", fieldEmptyForPostalCode: "à¹‚à¸›à¸£à¸”à¸à¸£à¸­à¸à¸£à¸«à¸±à¸ªà¹„à¸›à¸£à¸©à¸“à¸µà¸¢à¹Œ", fieldInvalidForCvv: "à¸£à¸«à¸±à¸ªà¸„à¸§à¸²à¸¡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢à¸™à¸µà¹‰à¹„à¸¡à¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡", fieldInvalidForExpirationDate: "à¸§à¸±à¸™à¸—à¸µà¹ˆà¸«à¸¡à¸”à¸­à¸²à¸¢à¸¸à¸™à¸µà¹‰à¹„à¸¡à¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡", fieldInvalidForNumber: "à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸šà¸±à¸•à¸£à¸™à¸µà¹‰à¹„à¸¡à¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡", fieldInvalidForPostalCode: "à¸£à¸«à¸±à¸ªà¹„à¸›à¸£à¸©à¸“à¸µà¸¢à¹Œà¸™à¸µà¹‰à¹„à¸¡à¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡", genericError: "à¹€à¸à¸´à¸”à¸‚à¹‰à¸­à¸œà¸´à¸”à¸žà¸¥à¸²à¸”à¸‚à¸¶à¹‰à¸™à¹ƒà¸™à¸£à¸°à¸šà¸šà¸‚à¸­à¸‡à¹€à¸£à¸²", hostedFieldsTokenizationFailOnDuplicateError: "à¸šà¸±à¸•à¸£à¹€à¸„à¸£à¸”à¸´à¸•à¸™à¸µà¹‰à¸–à¸¹à¸à¸šà¸±à¸™à¸—à¸¶à¸à¹„à¸§à¹‰à¹€à¸›à¹‡à¸™à¸§à¸´à¸˜à¸µà¸à¸²à¸£à¸Šà¸³à¸£à¸°à¹€à¸‡à¸´à¸™", hostedFieldsFailedTokenizationError: "à¹‚à¸›à¸£à¸”à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸‚à¸­à¸‡à¸„à¸¸à¸“ à¹à¸¥à¹‰à¸§à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡", hostedFieldsFieldsInvalidError: "à¹‚à¸›à¸£à¸”à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸‚à¸­à¸‡à¸„à¸¸à¸“ à¹à¸¥à¹‰à¸§à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡", hostedFieldsTokenizationNetworkErrorError: "à¸‚à¹‰à¸­à¸œà¸´à¸”à¸žà¸¥à¸²à¸”à¸”à¹‰à¸²à¸™à¹€à¸„à¸£à¸·à¸­à¸‚à¹ˆà¸²à¸¢ à¹‚à¸›à¸£à¸”à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡", hostedFieldsTokenizationCvvVerificationFailedError: "à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸¢à¸·à¸™à¸¢à¸±à¸™à¸šà¸±à¸•à¸£à¹€à¸„à¸£à¸”à¸´à¸•à¸¥à¹‰à¸¡à¹€à¸«à¸¥à¸§ à¹‚à¸›à¸£à¸”à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸‚à¸­à¸‡à¸„à¸¸à¸“ à¹à¸¥à¹‰à¸§à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡", paypalAccountTokenizationFailedError: "à¹€à¸à¸´à¸”à¸‚à¹‰à¸­à¸œà¸´à¸”à¸žà¸¥à¸²à¸”à¹ƒà¸™à¸à¸²à¸£à¹€à¸žà¸´à¹ˆà¸¡à¸šà¸±à¸à¸Šà¸µ PayPal à¹‚à¸›à¸£à¸”à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡", paypalFlowFailedError: "à¹€à¸à¸´à¸”à¸‚à¹‰à¸­à¸œà¸´à¸”à¸žà¸¥à¸²à¸”à¹ƒà¸™à¸à¸²à¸£à¹€à¸Šà¸·à¹ˆà¸­à¸¡à¸•à¹ˆà¸­à¸à¸±à¸š PayPal à¹‚à¸›à¸£à¸”à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡", paypalTokenizationRequestActiveError: "à¸à¸²à¸£à¸­à¸™à¸¸à¸à¸²à¸•à¸à¸²à¸£à¸Šà¸³à¸£à¸°à¹€à¸‡à¸´à¸™à¸‚à¸­à¸‡ PayPal à¸­à¸¢à¸¹à¹ˆà¹ƒà¸™à¸£à¸°à¸«à¸§à¹ˆà¸²à¸‡à¸”à¸³à¹€à¸™à¸´à¸™à¸à¸²à¸£", venmoCanceledError: "à¹€à¸à¸´à¸”à¸‚à¹‰à¸­à¸œà¸´à¸”à¸žà¸¥à¸²à¸”à¸šà¸²à¸‡à¸›à¸£à¸°à¸à¸²à¸£ à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸§à¹ˆà¸²à¸„à¸¸à¸“à¸¡à¸µà¹à¸­à¸› Venmo à¹€à¸§à¸­à¸£à¹Œà¸Šà¸±à¸™à¸¥à¹ˆà¸²à¸ªà¸¸à¸”à¸•à¸´à¸”à¸•à¸±à¹‰à¸‡à¹ƒà¸™à¸­à¸¸à¸›à¸à¸£à¸“à¹Œà¸‚à¸­à¸‡à¸„à¸¸à¸“ à¹à¸¥à¸°à¸¡à¸µà¹€à¸šà¸£à¸²à¹€à¸‹à¸­à¸£à¹Œà¸—à¸µà¹ˆà¸£à¸­à¸‡à¸£à¸±à¸š Venmo", venmoAppFailedError: "à¹„à¸¡à¹ˆà¸žà¸šà¹à¸­à¸› Venmo à¸šà¸™à¸­à¸¸à¸›à¸à¸£à¸“à¹Œà¸‚à¸­à¸‡à¸„à¸¸à¸“", unsupportedCardTypeError: "à¹„à¸¡à¹ˆà¸£à¸­à¸‡à¸£à¸±à¸šà¸šà¸±à¸•à¸£à¸›à¸£à¸°à¹€à¸ à¸—à¸™à¸µà¹‰ à¹‚à¸›à¸£à¸”à¸¥à¸­à¸‡à¹ƒà¸Šà¹‰à¸šà¸±à¸•à¸£à¹ƒà¸šà¸­à¸·à¹ˆà¸™", applePayTokenizationError: "à¹€à¸à¸´à¸”à¸‚à¹‰à¸­à¸œà¸´à¸”à¸žà¸¥à¸²à¸”à¸”à¹‰à¸²à¸™à¹€à¸„à¸£à¸·à¸­à¸‚à¹ˆà¸²à¸¢à¸‚à¸¶à¹‰à¸™à¸‚à¸“à¸°à¸”à¸³à¹€à¸™à¸´à¸™à¸à¸²à¸£à¸Šà¸³à¸£à¸°à¹€à¸‡à¸´à¸™à¸”à¹‰à¸§à¸¢ Apple Pay à¹‚à¸›à¸£à¸”à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡", applePayActiveCardError: "à¹€à¸žà¸´à¹ˆà¸¡à¸šà¸±à¸•à¸£à¸—à¸µà¹ˆà¸£à¸­à¸‡à¸£à¸±à¸šà¹ƒà¸™à¸à¸£à¸°à¹€à¸›à¹‹à¸²à¸ªà¸•à¸²à¸‡à¸„à¹Œ Apple Pay à¸‚à¸­à¸‡à¸„à¸¸à¸“", cardholderNameLabel: "à¸Šà¸·à¹ˆà¸­à¹€à¸ˆà¹‰à¸²à¸‚à¸­à¸‡à¸šà¸±à¸•à¸£", cardNumberLabel: "à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸šà¸±à¸•à¸£", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "(3 à¸«à¸¥à¸±à¸)", cvvFourDigitLabelSubheading: "(4 à¸«à¸¥à¸±à¸)", cardholderNamePlaceholder: "à¸Šà¸·à¹ˆà¸­à¹€à¸ˆà¹‰à¸²à¸‚à¸­à¸‡à¸šà¸±à¸•à¸£", expirationDateLabel: "à¸§à¸±à¸™à¸«à¸¡à¸”à¸­à¸²à¸¢à¸¸", expirationDateLabelSubheading: "(à¸”à¸”/à¸›à¸›)", expirationDatePlaceholder: "à¸”à¸”/à¸›à¸›", postalCodeLabel: "à¸£à¸«à¸±à¸ªà¹„à¸›à¸£à¸©à¸“à¸µà¸¢à¹Œ", payWithCard: "à¸Šà¸³à¸£à¸°à¹€à¸‡à¸´à¸™à¸”à¹‰à¸§à¸¢à¸šà¸±à¸•à¸£", endingIn: "à¸¥à¸‡à¸—à¹‰à¸²à¸¢à¸”à¹‰à¸§à¸¢ â€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "à¸šà¸±à¸•à¸£", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        159: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "æ­£åœ¨ä½¿ç”¨{{paymentSource}}ä»˜æ¬¾", chooseAnotherWayToPay: "é€‰æ‹©å…¶ä»–ä»˜æ¬¾æ–¹å¼", chooseAWayToPay: "é€‰æ‹©ä»˜æ¬¾æ–¹å¼", otherWaysToPay: "å…¶ä»–ä»˜æ¬¾æ–¹å¼", cardVerification: "å¡éªŒè¯", fieldEmptyForCvv: "è¯·å¡«å†™CVVã€‚", fieldEmptyForExpirationDate: "è¯·å¡«å†™æœ‰æ•ˆæœŸé™ã€‚", fieldEmptyForCardholderName: "è¯·å¡«å†™æŒå¡äººçš„å§“åã€‚", fieldTooLongForCardholderName: "æŒå¡äººå§“åå¿…é¡»å°‘äºŽ256ä¸ªå­—ç¬¦ã€‚", fieldEmptyForNumber: "è¯·å¡«å†™ä¸€ä¸ªå·ç ã€‚", fieldEmptyForPostalCode: "è¯·å¡«å†™é‚®æ”¿ç¼–ç ã€‚", fieldInvalidForCvv: "æ­¤å®‰å…¨ä»£ç æ— æ•ˆã€‚", fieldInvalidForExpirationDate: "æ­¤æœ‰æ•ˆæœŸé™æ— æ•ˆã€‚", fieldInvalidForNumber: "æ­¤å¡å·æ— æ•ˆã€‚", fieldInvalidForPostalCode: "æ­¤é‚®æ”¿ç¼–ç æ— æ•ˆã€‚", genericError: "æˆ‘ä»¬é‡åˆ°äº†ä¸€äº›é—®é¢˜", hostedFieldsTokenizationFailOnDuplicateError: "æ­¤ä¿¡ç”¨å¡å·²ä½œä¸ºä¿å­˜åŽçš„ä»˜æ¬¾æ–¹å¼å­˜åœ¨ã€‚", hostedFieldsFailedTokenizationError: "è¯·æ£€æŸ¥æ‚¨çš„ä¿¡æ¯ï¼Œç„¶åŽé‡è¯•ã€‚", hostedFieldsFieldsInvalidError: "è¯·æ£€æŸ¥æ‚¨çš„ä¿¡æ¯ï¼Œç„¶åŽé‡è¯•ã€‚", hostedFieldsTokenizationNetworkErrorError: "ç½‘ç»œé”™è¯¯ã€‚è¯·é‡è¯•ã€‚", hostedFieldsTokenizationCvvVerificationFailedError: "ä¿¡ç”¨å¡éªŒè¯å¤±è´¥ã€‚è¯·æ£€æŸ¥æ‚¨çš„ä¿¡æ¯ï¼Œç„¶åŽé‡è¯•ã€‚", paypalAccountTokenizationFailedError: "æ·»åŠ PayPalè´¦æˆ·æ—¶å‡ºé”™ã€‚è¯·é‡è¯•ã€‚", paypalFlowFailedError: "è¿žæŽ¥åˆ°PayPalæ—¶å‡ºé”™ã€‚è¯·é‡è¯•ã€‚", paypalTokenizationRequestActiveError: "PayPalä»˜æ¬¾æŽˆæƒå·²åœ¨è¿›è¡Œä¸­ã€‚", venmoCanceledError: "æˆ‘ä»¬é‡åˆ°äº†é—®é¢˜ã€‚è¯·ç¡®ä¿æ‚¨çš„è®¾å¤‡ä¸Šå·²å®‰è£…æœ€æ–°ç‰ˆæœ¬çš„Venmoåº”ç”¨ï¼Œå¹¶ä¸”æ‚¨çš„æµè§ˆå™¨æ”¯æŒåˆ‡æ¢åˆ°Venmoã€‚", venmoAppFailedError: "åœ¨æ‚¨çš„è®¾å¤‡ä¸Šæ‰¾ä¸åˆ°Venmoåº”ç”¨ã€‚", unsupportedCardTypeError: "ä¸æ”¯æŒè¯¥å¡ç±»åž‹ã€‚è¯·å°è¯•å…¶ä»–å¡ã€‚", applePayTokenizationError: "å¤„ç†Apple Payä»˜æ¬¾æ—¶å‡ºçŽ°ç½‘ç»œé”™è¯¯ã€‚è¯·é‡è¯•ã€‚", applePayActiveCardError: "è¯·æ·»åŠ å—æ”¯æŒçš„å¡åˆ°æ‚¨çš„Apple Payé’±åŒ…ã€‚", cardholderNameLabel: "æŒå¡äººå§“å", cardNumberLabel: "å¡å·", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "ï¼ˆ3ä½æ•°ï¼‰", cvvFourDigitLabelSubheading: "ï¼ˆ4ä½æ•°ï¼‰", cardholderNamePlaceholder: "æŒå¡äººå§“å", expirationDateLabel: "æœ‰æ•ˆæœŸé™", expirationDateLabelSubheading: "ï¼ˆMM/YYï¼‰", expirationDatePlaceholder: "MM/YY", postalCodeLabel: "é‚®æ”¿ç¼–ç ", payWithCard: "ç”¨å¡ä»˜æ¬¾", endingIn: "å°¾å·ä¸º{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "å¡", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "é“¶è”" }
        }, {}],
        160: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "ä»˜æ¬¾æ–¹å¼ç‚º {{paymentSource}}", chooseAnotherWayToPay: "é¸æ“‡å…¶ä»–ä»˜æ¬¾æ–¹å¼", chooseAWayToPay: "é¸æ“‡ä»˜æ¬¾æ–¹å¼", otherWaysToPay: "å…¶ä»–ä»˜æ¬¾æ–¹å¼", cardVerification: "ä¿¡ç”¨å¡èªè­‰", fieldEmptyForCvv: "è«‹å¡«å¯«ä¿¡ç”¨å¡èªè­‰ç¢¼ã€‚", fieldEmptyForExpirationDate: "è«‹å¡«å¯«åˆ°æœŸæ—¥ã€‚", fieldEmptyForCardholderName: "è«‹å¡«å¯«æŒå¡äººçš„åå­—ã€‚", fieldTooLongForCardholderName: "æŒå¡äººå§“åå¿…é ˆå°‘æ–¼ 256 å€‹å­—å…ƒã€‚", fieldEmptyForNumber: "è«‹å¡«å¯«è™Ÿç¢¼ã€‚", fieldEmptyForPostalCode: "è«‹å¡«å¯«éƒµéžå€è™Ÿã€‚", fieldInvalidForCvv: "æ­¤å®‰å…¨ä»£ç¢¼ç„¡æ•ˆã€‚", fieldInvalidForExpirationDate: "æ­¤åˆ°æœŸæ—¥ç„¡æ•ˆã€‚", fieldInvalidForNumber: "æ­¤å¡è™Ÿç„¡æ•ˆã€‚", fieldInvalidForPostalCode: "æ­¤éƒµéžå€è™Ÿç„¡æ•ˆã€‚", genericError: "ç³»çµ±ç™¼ç”ŸéŒ¯èª¤ã€‚", hostedFieldsTokenizationFailOnDuplicateError: "æ­¤ä¿¡ç”¨å¡å·²å­˜åœ¨ï¼Œç‚ºå·²å„²å­˜çš„ä»˜æ¬¾æ–¹å¼ã€‚", hostedFieldsFailedTokenizationError: "è«‹æª¢æŸ¥ä½ çš„è³‡æ–™ä¸¦å†è©¦ä¸€æ¬¡ã€‚", hostedFieldsFieldsInvalidError: "è«‹æª¢æŸ¥ä½ çš„è³‡æ–™ä¸¦å†è©¦ä¸€æ¬¡ã€‚", hostedFieldsTokenizationNetworkErrorError: "ç¶²çµ¡éŒ¯èª¤ã€‚è«‹é‡è©¦ã€‚", hostedFieldsTokenizationCvvVerificationFailedError: "ä¿¡ç”¨å¡èªè­‰å¤±æ•—ã€‚è«‹æª¢æŸ¥ä½ çš„è³‡æ–™ä¸¦å†è©¦ä¸€æ¬¡ã€‚", paypalAccountTokenizationFailedError: "åŠ å…¥ PayPal å¸³æˆ¶æ™‚ç™¼ç”ŸéŒ¯èª¤ã€‚è«‹é‡è©¦ã€‚", paypalFlowFailedError: "é€£æŽ¥ PayPal æ™‚ç™¼ç”ŸéŒ¯èª¤ã€‚è«‹é‡è©¦ã€‚", paypalTokenizationRequestActiveError: "PayPal ä»˜æ¬¾æŽˆæ¬Šå·²åœ¨è™•ç†ä¸­ã€‚", venmoCanceledError: "ç³»çµ±ç™¼ç”ŸéŒ¯èª¤ï¼Œè«‹ç¢ºä¿ä½ å·²åœ¨è£ç½®ä¸Šå®‰è£æœ€æ–°ç‰ˆæœ¬çš„ Venmo æ‡‰ç”¨ç¨‹å¼ï¼Œè€Œä¸”ä½ çš„ç€è¦½å™¨æ”¯æ´åˆ‡æ›è‡³ Venmoã€‚", venmoAppFailedError: "åœ¨ä½ çš„è£ç½®ä¸Šæ‰¾ä¸åˆ° Venmo æ‡‰ç”¨ç¨‹å¼ã€‚", unsupportedCardTypeError: "ä¸å¯ä½¿ç”¨æ­¤ä¿¡ç”¨å¡é¡žåž‹ã€‚è«‹æ”¹ç”¨å…¶ä»–ä¿¡ç”¨å¡ã€‚", applePayTokenizationError: "è™•ç† Apple Pay ä»˜æ¬¾æ™‚ç™¼ç”Ÿç¶²çµ¡éŒ¯èª¤ã€‚è«‹é‡è©¦ã€‚", applePayActiveCardError: "åœ¨ Apple Pay éŒ¢åŒ…ä¸­åŠ å…¥æ”¯æ´çš„ä¿¡ç”¨å¡ã€‚", cardholderNameLabel: "æŒå¡äººåå­—", cardNumberLabel: "å¡è™Ÿ", cvvLabel: "ä¿¡ç”¨å¡èªè­‰ç¢¼", cvvThreeDigitLabelSubheading: "ï¼ˆ3 ä½æ•¸ï¼‰", cvvFourDigitLabelSubheading: "ï¼ˆ4 ä½æ•¸ï¼‰", cardholderNamePlaceholder: "æŒå¡äººåå­—", expirationDateLabel: "åˆ°æœŸæ—¥", expirationDateLabelSubheading: "(MM/YY)", expirationDatePlaceholder: "æœˆ / å¹´", postalCodeLabel: "éƒµéžå€è™Ÿ", payWithCard: "ä½¿ç”¨ä¿¡ç”¨å¡ä»˜æ¬¾", endingIn: "æœ€å¾Œå…©ä½æ•¸ç‚ºâ€¢â€¢{{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "ä¿¡ç”¨å¡", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "American Express", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        161: [function(e, t, r) {
            "use strict";
            t.exports = { payingWith: "ä»¥ {{paymentSource}} ä»˜æ¬¾", chooseAnotherWayToPay: "é¸æ“‡æ”¯ä»˜æ¬¾é …çš„ä»¥å…¶ä»–æ–¹å¼ä»˜æ¬¾", chooseAWayToPay: "é¸æ“‡æ”¯ä»˜æ¬¾é …çš„æ–¹å¼", otherWaysToPay: "å…¶ä»–ä»˜æ¬¾æ–¹å¼", cardVerification: "ä¿¡ç”¨å¡èªè­‰", fieldEmptyForCvv: "è«‹å¡«å¦¥ä¿¡ç”¨å¡é©—è­‰ç¢¼ã€‚", fieldEmptyForExpirationDate: "è«‹å¡«å¦¥åˆ°æœŸæ—¥ã€‚", fieldEmptyForCardholderName: "è«‹å¡«å¦¥æŒå¡äººå§“åã€‚", fieldTooLongForCardholderName: "æŒå¡äººå§“åä¸èƒ½è¶…éŽ 256 å€‹å­—å…ƒã€‚", fieldEmptyForNumber: "è«‹å¡«å¦¥è™Ÿç¢¼ã€‚", fieldEmptyForPostalCode: "è«‹å¡«å¯«éƒµéžå€è™Ÿã€‚", fieldInvalidForCvv: "é€™çµ„å®‰å…¨ä»£ç¢¼ç„¡æ•ˆã€‚", fieldInvalidForExpirationDate: "æ­¤åˆ°æœŸæ—¥ç„¡æ•ˆã€‚", fieldInvalidForNumber: "æ­¤å¡è™Ÿç„¡æ•ˆã€‚", fieldInvalidForPostalCode: "æ­¤éƒµéžå€è™Ÿç„¡æ•ˆã€‚", genericError: "æˆ‘å€‘çš„ç³»çµ±ç™¼ç”Ÿå•é¡Œã€‚", hostedFieldsTokenizationFailOnDuplicateError: "æ­¤ä¿¡ç”¨å¡å·²å­˜åœ¨ï¼Œç‚ºå·²å„²å­˜çš„ä»˜æ¬¾æ–¹å¼ã€‚", hostedFieldsFailedTokenizationError: "è«‹æª¢æŸ¥ä½ çš„è³‡æ–™ä¸¦é‡è©¦ã€‚", hostedFieldsFieldsInvalidError: "è«‹æª¢æŸ¥ä½ çš„è³‡æ–™ä¸¦é‡è©¦ã€‚", hostedFieldsTokenizationNetworkErrorError: "ç¶²è·¯éŒ¯èª¤ã€‚è«‹é‡è©¦ã€‚", hostedFieldsTokenizationCvvVerificationFailedError: "ä¿¡ç”¨å¡èªè­‰å¤±æ•—ã€‚è«‹æª¢æŸ¥ä½ çš„è³‡æ–™ä¸¦é‡è©¦ã€‚", paypalAccountTokenizationFailedError: "æ–°å¢ž PayPal å¸³æˆ¶æ™‚ï¼Œç³»çµ±ç™¼ç”ŸéŒ¯èª¤ã€‚è«‹é‡è©¦ã€‚", paypalFlowFailedError: "é€£çµè‡³ PayPal æ™‚ï¼Œç³»çµ±ç™¼ç”ŸéŒ¯èª¤ã€‚è«‹é‡è©¦ã€‚", paypalTokenizationRequestActiveError: "PayPal æ”¯ä»˜æ¬¾é …çš„æŽˆæ¬Šå·²åœ¨è™•ç†ä¸­ã€‚", venmoCanceledError: "ç³»çµ±ç™¼ç”ŸéŒ¯èª¤ã€‚ç¢ºèªä½ çš„è£ç½®ä¸Šè£æœ‰æœ€æ–°ç‰ˆæœ¬çš„ Venmo æ‡‰ç”¨ç¨‹å¼ï¼Œè€Œä¸”ç€è¦½å™¨æ”¯æ´åˆ‡æ›è‡³ Venmoã€‚", venmoAppFailedError: "ä½ çš„è£ç½®ä¸Šæ‰¾ä¸åˆ° Venmo æ‡‰ç”¨ç¨‹å¼ã€‚", unsupportedCardTypeError: "ä¸æ”¯æ´æ­¤å¡ç‰‡é¡žåž‹ã€‚è«‹æ”¹ç”¨å…¶ä»–å¡ç‰‡ã€‚", applePayTokenizationError: "åœ¨è™•ç† Apple Pay ä»˜æ¬¾æ™‚ç™¼ç”Ÿç¶²è·¯éŒ¯èª¤ã€‚è«‹é‡è©¦ã€‚", applePayActiveCardError: "æ–°å¢žæ”¯æ´çš„å¡ç‰‡è‡³ä½ çš„ Apple Pay éŒ¢åŒ…ã€‚", cardholderNameLabel: "æŒå¡äººå§“å", cardNumberLabel: "å¡è™Ÿ", cvvLabel: "CVV", cvvThreeDigitLabelSubheading: "ï¼ˆ3 ä½æ•¸ï¼‰", cvvFourDigitLabelSubheading: "ï¼ˆ4 ä½æ•¸ï¼‰", cardholderNamePlaceholder: "æŒå¡äººå§“å", expirationDateLabel: "åˆ°æœŸæ—¥", expirationDateLabelSubheading: "ï¼ˆæœˆ / å¹´ï¼‰", expirationDatePlaceholder: "æœˆ / å¹´", postalCodeLabel: "éƒµéžå€è™Ÿ", payWithCard: "ä½¿ç”¨ä¿¡ç”¨å¡ / æ‰£å¸³å¡ä»˜æ¬¾", endingIn: "ä½ çš„æœ«å…©ç¢¼ç‚º â€¢â€¢ {{lastTwoCardDigits}}", "Apple Pay": "Apple Pay", Venmo: "Venmo", Card: "ä¿¡ç”¨å¡æˆ–æ‰£å¸³å¡", PayPal: "PayPal", "PayPal Credit": "PayPal Credit", "Google Pay": "Google Pay", "American Express": "ç¾Žåœ‹é‹é€š", Discover: "Discover", "Diners Club": "Diners Club", MasterCard: "Mastercard", Visa: "Visa", JCB: "JCB", Maestro: "Maestro", UnionPay: "UnionPay" }
        }, {}],
        162: [function(e, t, r) {
            "use strict";
            var i = e("../lib/assign").assign,
                n = e("../lib/classlist"),
                a = e("../lib/dropin-error"),
                o = e("../constants").errors,
                s = e("../lib/promise");

            function l(e) { i(this, e = e || {}) }
            l.prototype.getElementById = function(e) { return this.element ? this.element.querySelector('[data-braintree-id="' + e + '"]') : null }, l.prototype.requestPaymentMethod = function() { return s.reject(new a(o.NO_PAYMENT_METHOD_ERROR)) }, l.prototype.getPaymentMethod = function() { return this.activeMethodView && this.activeMethodView.paymentMethod }, l.prototype.onSelection = function() {}, l.prototype.teardown = function() { return s.resolve() }, l.prototype.preventUserAction = function() { this.element && n.add(this.element, "braintree-sheet--loading"), this.model.preventUserAction() }, l.prototype.allowUserAction = function() { this.element && n.remove(this.element, "braintree-sheet--loading"), this.model.allowUserAction() }, t.exports = l
        }, { "../constants": 112, "../lib/assign": 119, "../lib/classlist": 121, "../lib/dropin-error": 124, "../lib/promise": 132 }],
        163: [function(e, t, r) {
            "use strict";
            var i = e("../lib/analytics"),
                n = e("../constants").analyticsKinds,
                a = e("./base-view"),
                o = e("../lib/classlist"),
                s = e("./payment-sheet-views"),
                l = e("./payment-methods-view"),
                d = e("./payment-options-view"),
                c = e("../lib/add-selection-event-handler"),
                p = e("../lib/promise"),
                u = e("../lib/supports-flexbox"),
                h = e("../lib/transition-helper"),
                y = e("../constants").CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT,
                m = e("../constants").errors.DEVELOPER_MISCONFIGURATION_MESSAGE;

            function f() { a.apply(this, arguments), this.dependenciesInitializing = 0, this._initialize() }

            function v(e) { return "braintree-show-" + e }((f.prototype = Object.create(a.prototype)).constructor = f).prototype._initialize = function() {
                var e, t = 1 < this.model.supportedPaymentOptions.length,
                    r = this.model.getPaymentMethods(),
                    i = !1 !== this.model.merchantConfiguration.preselectVaultedPaymentMethod;
                this._views = {}, this.sheetContainer = this.getElementById("sheet-container"), this.sheetErrorText = this.getElementById("sheet-error-text"), this.toggle = this.getElementById("toggle"), this.disableWrapper = this.getElementById("disable-wrapper"), this.lowerContainer = this.getElementById("lower-container"), this.loadingContainer = this.getElementById("loading-container"), this.loadingIndicator = this.getElementById("loading-indicator"), this.dropinContainer = this.element.querySelector(".braintree-dropin"), this.supportsFlexbox = u(), this.model.on("asyncDependenciesReady", this.hideLoadingIndicator.bind(this)), this.model.on("errorOccurred", this.showSheetError.bind(this)), this.model.on("errorCleared", this.hideSheetError.bind(this)), this.model.on("preventUserAction", this.preventUserAction.bind(this)), this.model.on("allowUserAction", this.allowUserAction.bind(this)), this.paymentSheetViewIDs = Object.keys(s).reduce(function(e, t) { var r, i; return -1 !== this.model.supportedPaymentOptions.indexOf(t) && ((i = new(r = s[t])({ element: this.getElementById(r.ID), mainView: this, model: this.model, client: this.client, strings: this.strings })).initialize(), this.addView(i), e.push(i.ID)), e }.bind(this), []), this.paymentMethodsViews = new l({ element: this.element, model: this.model, strings: this.strings }), this.addView(this.paymentMethodsViews), c(this.toggle, this.toggleAdditionalOptions.bind(this)), this.model.on("changeActivePaymentMethod", function() { setTimeout(function() { this.setPrimaryView(l.ID) }.bind(this), y) }.bind(this)), this.model.on("changeActivePaymentView", function(e) {
                    var t = this.getView(e);
                    e === l.ID ? (o.add(this.paymentMethodsViews.container, "braintree-methods--active"), o.remove(this.sheetContainer, "braintree-sheet--active")) : (setTimeout(function() { o.add(this.sheetContainer, "braintree-sheet--active") }.bind(this), 0), o.remove(this.paymentMethodsViews.container, "braintree-methods--active"), this.getView(e).getPaymentMethod() || this.model.setPaymentMethodRequestable({ isRequestable: !1 })), t.onSelection()
                }.bind(this)), this.model.on("removeActivePaymentMethod", function() {
                    var e = this.getView(this.model.getActivePaymentView());
                    e && "function" == typeof e.removeActivePaymentMethod && e.removeActivePaymentMethod()
                }.bind(this)), t && (e = new d({ client: this.client, element: this.getElementById(d.ID), mainView: this, model: this.model, strings: this.strings }), this.addView(e)), 0 < r.length ? i ? this.model.changeActivePaymentMethod(r[0]) : this.setPrimaryView(this.paymentMethodsViews.ID) : t ? this.setPrimaryView(e.ID) : this.setPrimaryView(this.paymentSheetViewIDs[0])
            }, f.prototype.addView = function(e) { this._views[e.ID] = e }, f.prototype.getView = function(e) { return this._views[e] }, f.prototype.setPrimaryView = function(e, t) {
                var r;
                setTimeout(function() { this.element.className = v(e), t && o.add(this.element, v(t)) }.bind(this), 0), this.primaryView = this.getView(e), this.model.changeActivePaymentView(e), -1 !== this.paymentSheetViewIDs.indexOf(e) ? 0 < this.model.getPaymentMethods().length || this.getView(d.ID) ? this.showToggle() : this.hideToggle() : e === l.ID ? (this.showToggle(), this.getElementById("lower-container").appendChild(this.getElementById("options"))) : e === d.ID && this.hideToggle(), this.supportsFlexbox || this.element.setAttribute("data-braintree-no-flexbox", !0), r = this.primaryView.getPaymentMethod(), this.model.setPaymentMethodRequestable({ isRequestable: Boolean(r), type: r && r.type, selectedPaymentMethod: r }), this.model.clearError()
            }, f.prototype.requestPaymentMethod = function() { return this.getView(this.model.getActivePaymentView()).requestPaymentMethod().then(function(e) { return i.sendEvent(this.client, "request-payment-method." + n[e.type]), e }.bind(this)).catch(function(e) { return i.sendEvent(this.client, "request-payment-method.error"), p.reject(e) }.bind(this)) }, f.prototype.hideLoadingIndicator = function() { o.add(this.dropinContainer, "braintree-loaded"), h.onTransitionEnd(this.loadingIndicator, "transform", function() { this.loadingContainer.parentNode.removeChild(this.loadingContainer) }.bind(this)) }, f.prototype.toggleAdditionalOptions = function() {
                var e, t = 1 < this.model.supportedPaymentOptions.length,
                    r = -1 !== this.paymentSheetViewIDs.indexOf(this.primaryView.ID);
                this.hideToggle(), t ? r ? 0 === this.model.getPaymentMethods().length ? this.setPrimaryView(d.ID) : (this.setPrimaryView(l.ID, d.ID), this.hideToggle()) : o.add(this.element, v(d.ID)) : (e = this.paymentSheetViewIDs[0], o.add(this.element, v(e)), this.model.changeActivePaymentView(e))
            }, f.prototype.showToggle = function() { o.remove(this.toggle, "braintree-hidden"), o.add(this.lowerContainer, "braintree-hidden") }, f.prototype.hideToggle = function() { o.add(this.toggle, "braintree-hidden"), o.remove(this.lowerContainer, "braintree-hidden") }, f.prototype.showSheetError = function(e) {
                var t, r, i = this.strings.genericError;
                t = this.strings.hasOwnProperty(e) ? this.strings[e] : e && e.code ? this.strings[(r = e.code, r.toLowerCase().replace(/(\_\w)/g, function(e) { return e[1].toUpperCase() }) + "Error")] || i : "developerError" === e ? m : i, o.add(this.sheetContainer, "braintree-sheet--has-error"), this.sheetErrorText.innerHTML = t
            }, f.prototype.hideSheetError = function() { o.remove(this.sheetContainer, "braintree-sheet--has-error") }, f.prototype.getOptionsElements = function() { return this._views.options.elements }, f.prototype.preventUserAction = function() { o.remove(this.disableWrapper, "braintree-hidden") }, f.prototype.allowUserAction = function() { o.add(this.disableWrapper, "braintree-hidden") }, f.prototype.teardown = function() { var t, e = Object.keys(this._views).map(function(e) { return this._views[e].teardown().catch(function(e) { t = e }) }.bind(this)); return p.all(e).then(function() { return t ? p.reject(t) : p.resolve() }) }, t.exports = f
        }, { "../constants": 112, "../lib/add-selection-event-handler": 116, "../lib/analytics": 117, "../lib/classlist": 121, "../lib/promise": 132, "../lib/supports-flexbox": 134, "../lib/transition-helper": 136, "./base-view": 162, "./payment-methods-view": 165, "./payment-options-view": 166, "./payment-sheet-views": 171 }],
        164: [function(e, t, r) {
            "use strict";
            var i = e("./base-view"),
                n = e("../lib/classlist"),
                a = e("../constants"),
                o = e("../lib/add-selection-event-handler");

            function s() { i.apply(this, arguments), this._initialize() }((s.prototype = Object.create(i.prototype)).constructor = s).prototype._initialize = function() {
                var e, t = '<div class="braintree-method__logo">\n  <svg width="40" height="24" class="@CLASSNAME">\n    <use xlink:href="#@ICON"></use>\n  </svg>\n</div>\n\n<div class="braintree-method__label">@TITLE<br><div class="braintree-method__label--small">@SUBTITLE</div></div>\n\n<div class="braintree-method__check-container">\n  <div class="braintree-method__check">\n    <svg height="100%" width="100%">\n      <use xlink:href="#iconCheck"></use>\n    </svg>\n  </div>\n</div>\n',
                    r = a.paymentMethodCardTypes,
                    i = a.paymentMethodTypes;
                switch (this.element = document.createElement("div"), this.element.className = "braintree-method", this.element.setAttribute("tabindex", "0"), o(this.element, function() { this.model.changeActivePaymentMethod(this.paymentMethod) }.bind(this)), this.paymentMethod.type) {
                    case i.applePay:
                        t = t.replace(/@ICON/g, "logoApplePay").replace(/@CLASSNAME/g, "").replace(/@TITLE/g, this.strings["Apple Pay"]).replace(/@SUBTITLE/g, "");
                        break;
                    case i.card:
                        e = this.strings.endingIn.replace("{{lastTwoCardDigits}}", this.paymentMethod.details.lastTwo), t = t.replace(/@ICON/g, "icon-" + r[this.paymentMethod.details.cardType]).replace(/@CLASSNAME/g, " braintree-icon--bordered").replace(/@TITLE/g, e).replace(/@SUBTITLE/g, this.strings[this.paymentMethod.details.cardType]);
                        break;
                    case i.googlePay:
                        t = t.replace(/@ICON/g, "logoGooglePay").replace(/@CLASSNAME/g, "").replace(/@TITLE/g, this.strings["Google Pay"]).replace(/@SUBTITLE/g, "");
                        break;
                    case i.paypal:
                        t = t.replace(/@ICON/g, "logoPayPal").replace(/@CLASSNAME/g, "").replace(/@TITLE/g, this.paymentMethod.details.email).replace(/@SUBTITLE/g, this.strings.PayPal);
                        break;
                    case i.venmo:
                        t = t.replace(/@ICON/g, "logoVenmo").replace(/@CLASSNAME/g, "").replace(/@TITLE/g, this.paymentMethod.details.username).replace(/@SUBTITLE/g, this.strings.Venmo)
                }
                this.element.innerHTML = t
            }, s.prototype.setActive = function(e) { setTimeout(function() { n.toggle(this.element, "braintree-method--active", e) }.bind(this), 0) }, t.exports = s
        }, { "../constants": 112, "../lib/add-selection-event-handler": 116, "../lib/classlist": 121, "./base-view": 162 }],
        165: [function(e, t, r) {
            "use strict";
            var i = e("./base-view"),
                n = e("./payment-method-view"),
                a = e("../lib/dropin-error"),
                o = e("../lib/classlist"),
                s = e("../constants").errors,
                l = e("../lib/promise"),
                d = { CreditCard: "Card", PayPalAccount: "PayPal", ApplePayCard: "Apple Pay", AndroidPayCard: "Google Pay", VenmoAccount: "Venmo" };

            function c() { i.apply(this, arguments), this._initialize() }((c.prototype = Object.create(i.prototype)).constructor = c).ID = c.prototype.ID = "methods", c.prototype._initialize = function() { var e, t = this.model.getPaymentMethods(); for (this.views = [], this.container = this.getElementById("methods-container"), this._headingLabel = this.getElementById("methods-label"), this.model.on("addPaymentMethod", this._addPaymentMethod.bind(this)), this.model.on("removePaymentMethod", this._removePaymentMethod.bind(this)), this.model.on("changeActivePaymentMethod", this._changeActivePaymentMethodView.bind(this)), e = t.length - 1; 0 <= e; e--) this._addPaymentMethod(t[e]) }, c.prototype.removeActivePaymentMethod = function() { this.activeMethodView && (this.activeMethodView.setActive(!1), this.activeMethodView = null, o.add(this._headingLabel, "braintree-no-payment-method-selected")) }, c.prototype._getPaymentMethodString = function() {
                var e = d[this.activeMethodView.paymentMethod.type],
                    t = this.strings[e];
                return this.strings.payingWith.replace("{{paymentSource}}", t)
            }, c.prototype._addPaymentMethod = function(e) {
                var t = new n({ model: this.model, paymentMethod: e, strings: this.strings });
                this.model.isGuestCheckout && this.container.firstChild && (this.container.removeChild(this.container.firstChild), this.views.pop()), this.container.firstChild ? this.container.insertBefore(t.element, this.container.firstChild) : this.container.appendChild(t.element), this.views.push(t)
            }, c.prototype._removePaymentMethod = function(e) {
                var t;
                for (t = 0; t < this.views.length; t++)
                    if (this.views[t].paymentMethod === e) { this.container.removeChild(this.views[t].element), this._headingLabel.innerHTML = "&nbsp;", this.views.splice(t, 1); break }
            }, c.prototype._changeActivePaymentMethodView = function(e) {
                var t, r = this.activeMethodView;
                for (t = 0; t < this.views.length; t++)
                    if (this.views[t].paymentMethod === e) { this.activeMethodView = this.views[t], this._headingLabel.innerHTML = this._getPaymentMethodString(); break }
                r && r.setActive(!1), this.activeMethodView.setActive(!0), o.remove(this._headingLabel, "braintree-no-payment-method-selected")
            }, c.prototype.requestPaymentMethod = function() { return this.activeMethodView ? l.resolve(this.activeMethodView.paymentMethod) : l.reject(new a(s.NO_PAYMENT_METHOD_ERROR)) }, t.exports = c
        }, { "../constants": 112, "../lib/classlist": 121, "../lib/dropin-error": 124, "../lib/promise": 132, "./base-view": 162, "./payment-method-view": 164 }],
        166: [function(e, t, r) {
            "use strict";
            var a = e("../lib/analytics"),
                o = e("../lib/add-selection-event-handler"),
                i = e("./base-view"),
                s = e("../constants").paymentOptionIDs;

            function n() { i.apply(this, arguments), this._initialize() }((n.prototype = Object.create(i.prototype)).constructor = n).ID = n.prototype.ID = "options", n.prototype._initialize = function() { this.container = this.getElementById("payment-options-container"), this.elements = {}, this.model.supportedPaymentOptions.forEach(function(e) { this._addPaymentOption(e) }.bind(this)) }, n.prototype._addPaymentOption = function(e) {
                var t, r = document.createElement("div"),
                    i = '<div class="braintree-option__logo">\n  <svg width="48" height="29" class="@CLASSNAME">\n    <use xlink:href="#@ICON"></use>\n  </svg>\n</div>\n\n<div class="braintree-option__label" aria-label="@OPTION_LABEL">\n  @OPTION_TITLE\n  <div class="braintree-option__disabled-message"></div>\n</div>\n',
                    n = function() { this.mainView.setPrimaryView(e), this.model.selectPaymentOption(e), a.sendEvent(this.client, "selected." + s[e]) }.bind(this);
                switch (r.className = "braintree-option braintree-option__" + e, r.setAttribute("tabindex", "0"), e) {
                    case s.applePay:
                        t = this.strings["Apple Pay"], i = i.replace(/@ICON/g, "logoApplePay");
                        break;
                    case s.card:
                        t = this.strings.Card, i = (i = i.replace(/@ICON/g, "iconCardFront")).replace(/@CLASSNAME/g, "braintree-icon--bordered");
                        break;
                    case s.googlePay:
                        t = this.strings["Google Pay"], i = i.replace(/@ICON/g, "logoGooglePay");
                        break;
                    case s.paypal:
                        t = this.strings.PayPal, i = i.replace(/@ICON/g, "logoPayPal");
                        break;
                    case s.paypalCredit:
                        t = this.strings["PayPal Credit"], i = i.replace(/@ICON/g, "logoPayPalCredit");
                        break;
                    case s.venmo:
                        t = this.strings.Venmo, i = i.replace(/@ICON/g, "logoVenmo")
                }
                i = (i = (i = i.replace(/@OPTION_LABEL/g, this._generateOptionLabel(t))).replace(/@OPTION_TITLE/g, t)).replace(/@CLASSNAME/g, ""), r.innerHTML = i, o(r, n), this.container.appendChild(r), this.elements[e] = { div: r, clickHandler: n }
            }, n.prototype._generateOptionLabel = function(e) { return this.strings.payingWith.replace("{{paymentSource}}", e) }, t.exports = n
        }, { "../constants": 112, "../lib/add-selection-event-handler": 116, "../lib/analytics": 117, "./base-view": 162 }],
        167: [function(d, c, e) {
            (function(n) {
                "use strict";
                var e = d("../../lib/assign").assign,
                    t = d("../base-view"),
                    i = d("braintree-web/apple-pay"),
                    a = d("../../lib/dropin-error"),
                    r = d("../../lib/is-https"),
                    o = d("../../lib/promise"),
                    s = d("../../constants").paymentOptionIDs;

                function l() { t.apply(this, arguments) }((l.prototype = Object.create(t.prototype)).constructor = l).ID = l.prototype.ID = s.applePay, l.prototype.initialize = function() {
                    var r = this;
                    return r.applePayConfiguration = e({}, r.model.merchantConfiguration.applePay), r.model.asyncDependencyStarting(), i.create({ client: this.client }).then(function(e) {
                        var t = r.getElementById("apple-pay-button");
                        r.applePayInstance = e, r.model.on("changeActivePaymentView", function(e) { e === r.ID && n.ApplePaySession.canMakePaymentsWithActiveCard(r.applePayInstance.merchantIdentifier).then(function(e) { e || r.model.reportError("applePayActiveCardError") }) }), t.onclick = r._showPaymentSheet.bind(r), t.classList.add("apple-pay-button-" + (r.model.merchantConfiguration.applePay.buttonStyle || "black")), r.model.asyncDependencyReady()
                    }).catch(function(e) { r.model.asyncDependencyFailed({ view: r.ID, error: new a(e) }) })
                }, l.prototype._showPaymentSheet = function() {
                    var r = this,
                        e = r.applePayInstance.createPaymentRequest(this.applePayConfiguration.paymentRequest),
                        i = new n.ApplePaySession(2, e);
                    return i.onvalidatemerchant = function(e) { r.applePayInstance.performValidation({ validationURL: e.validationURL, displayName: r.applePayConfiguration.displayName }).then(function(e) { i.completeMerchantValidation(e) }).catch(function(e) { r.model.reportError(e), i.abort() }) }, i.onpaymentauthorized = function(t) { r.applePayInstance.tokenize({ token: t.payment.token }).then(function(e) { i.completePayment(n.ApplePaySession.STATUS_SUCCESS), e.payment = t.payment, r.model.addPaymentMethod(e) }).catch(function(e) { r.model.reportError(e), i.completePayment(n.ApplePaySession.STATUS_FAILURE) }) }, i.begin(), !1
                }, l.prototype.updateConfiguration = function(e, t) { this.applePayConfiguration[e] = t }, l.isEnabled = function(e) { return e.client.getConfiguration().gatewayConfiguration.applePayWeb && Boolean(e.merchantConfiguration.applePay) && n.ApplePaySession && r.isHTTPS() ? o.resolve(Boolean(n.ApplePaySession.canMakePayments())) : o.resolve(!1) }, c.exports = l
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "../../constants": 112, "../../lib/assign": 119, "../../lib/dropin-error": 124, "../../lib/is-https": 128, "../../lib/promise": 132, "../base-view": 162, "braintree-web/apple-pay": 23 }],
        168: [function(u, h, e) {
            (function(c) {
                "use strict";
                var t, r = u("../../lib/assign").assign,
                    e = u("../base-view"),
                    i = u("braintree-web/paypal-checkout"),
                    n = u("../../lib/dropin-error"),
                    a = u("../../constants"),
                    o = u("../../lib/assets"),
                    p = u("../../translations").fiveCharacterLocales,
                    s = u("../../lib/promise"),
                    l = ["offerCredit", "locale"];

                function d() { e.apply(this, arguments) }(d.prototype = Object.create(e.prototype)).initialize = function() {
                    var a, o = Boolean(this._isPayPalCredit),
                        s = !1,
                        l = this,
                        e = o ? "paypalCredit" : "paypal",
                        t = this.model.merchantConfiguration[e];
                    return this.paypalConfiguration = r({}, t), this.model.asyncDependencyStarting(), a = setTimeout(function() { l.model.asyncDependencyFailed({ view: l.ID, error: new n("There was an error connecting to PayPal.") }) }, 3e4), i.create({ client: this.client }).then(function(t) {
                        var e, r = '[data-braintree-id="paypal-button"]',
                            i = "production" === l.client.getConfiguration().gatewayConfiguration.environment ? "production" : "sandbox",
                            n = l.model.merchantConfiguration.locale;
                        return l.paypalInstance = t, l.paypalConfiguration.offerCredit = Boolean(o), e = { env: i, style: l.paypalConfiguration.buttonStyle || {}, commit: l.paypalConfiguration.commit, payment: function() { return t.createPayment(l.paypalConfiguration).catch(d) }, onAuthorize: function(e) { return t.tokenizePayment(e).then(function(e) { "vault" !== l.paypalConfiguration.flow || l.model.isGuestCheckout || (e.vaulted = !0), l.model.addPaymentMethod(e) }).catch(d) }, onError: d }, n && n in p && (l.paypalConfiguration.locale = n, e.locale = n), o && (r = '[data-braintree-id="paypal-credit-button"]', e.style.label = "credit"), c.paypal.Button.render(e, r).then(function() { l.model.asyncDependencyReady(), s = !0, clearTimeout(a) })
                    }).catch(d);

                    function d(e) { s ? l.model.reportError(e) : (l.model.asyncDependencyFailed({ view: l.ID, error: e }), clearTimeout(a)) }
                }, d.prototype.updateConfiguration = function(e, t) {-1 === l.indexOf(e) && (this.paypalConfiguration[e] = t) }, d.isEnabled = function(e) { return e.client.getConfiguration().gatewayConfiguration.paypalEnabled ? c.paypal && c.paypal.Button ? s.resolve(!0) : t || (t = o.loadScript({ src: a.CHECKOUT_JS_SOURCE, id: a.PAYPAL_CHECKOUT_SCRIPT_ID, dataAttributes: { "log-level": e.merchantConfiguration.paypal.logLevel || "warn" } }).then(function() { return s.resolve(!0) }).catch(function() { return s.resolve(!1) }).then(function(e) { return t = null, s.resolve(e) })) : s.resolve(!1) }, h.exports = d
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "../../constants": 112, "../../lib/assets": 118, "../../lib/assign": 119, "../../lib/dropin-error": 124, "../../lib/promise": 132, "../../translations": 147, "../base-view": 162, "braintree-web/paypal-checkout": 91 }],
        169: [function(e, t, r) {
            "use strict";
            var o = e("../../lib/assign").assign,
                i = e("../base-view"),
                s = e("../../lib/classlist"),
                a = e("../../constants"),
                n = e("../../lib/dropin-error"),
                l = e("braintree-web/hosted-fields"),
                d = e("../../lib/is-utf-8"),
                c = e("../../lib/transition-helper"),
                p = e("../../lib/promise");

            function u() { i.apply(this, arguments) }

            function h(e) { return -1 !== e.id.indexOf("braintree__card-view-input") }

            function y(e) { return e.isEmpty && m() }

            function m() { var e = document.activeElement && document.activeElement.id; return document.activeElement instanceof HTMLIFrameElement && -1 !== e.indexOf("braintree-hosted-field") || h(document.activeElement) }

            function f(e) { return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() }

            function v(e) { return e[0].toUpperCase() + e.substr(1) }

            function b(e) { var t = d() ? "â€¢" : "*"; return Array(e + 1).join(t) }((u.prototype = Object.create(i.prototype)).constructor = u).ID = u.prototype.ID = a.paymentOptionIDs.card, u.prototype.initialize = function() {
                var e, t, r = this.getElementById("cardholder-name-field-group"),
                    i = this.getElementById("card-view-icons"),
                    n = this._generateHostedFieldsOptions();
                return i.innerHTML = '<div data-braintree-id="visa-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-visa"></use>\n    </svg>\n</div>\n<div data-braintree-id="master-card-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-master-card"></use>\n    </svg>\n</div>\n<div data-braintree-id="unionpay-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-unionpay"></use>\n    </svg>\n</div>\n<div data-braintree-id="american-express-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-american-express"></use>\n    </svg>\n</div>\n<div data-braintree-id="jcb-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-jcb"></use>\n    </svg>\n</div>\n\x3c!-- Remove braintree-hidden class when supportedCardType accurately indicates Diners Club support --\x3e\n<div data-braintree-id="diners-club-card-icon" class="braintree-sheet__card-icon braintree-hidden">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-diners-club"></use>\n    </svg>\n</div>\n<div data-braintree-id="discover-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-discover"></use>\n    </svg>\n</div>\n<div data-braintree-id="maestro-card-icon" class="braintree-sheet__card-icon">\n    <svg width="40" height="24">\n        <use xlink:href="#icon-maestro"></use>\n    </svg>\n</div>\n', this._hideUnsupportedCardIcons(), this.hasCVV = n.fields.cvv, this.hasCardholderName = Boolean(this.model.merchantConfiguration.card && this.model.merchantConfiguration.card.cardholderName), this.cardholderNameInput = r.querySelector("input"), this.cardNumberIcon = this.getElementById("card-number-icon"), this.cardNumberIconSvg = this.getElementById("card-number-icon-svg"), this.cvvIcon = this.getElementById("cvv-icon"), this.cvvIconSvg = this.getElementById("cvv-icon-svg"), this.cvvLabelDescriptor = this.getElementById("cvv-label-descriptor"), this.fieldErrors = {}, this.extraInputs = [{ fieldName: "cardholderName", enabled: this.hasCardholderName, required: this.hasCardholderName && this.model.merchantConfiguration.card.cardholderName.required, requiredError: this.strings.fieldEmptyForCardholderName, validations: [{ isValid: function(e) { return e.length < 256 }, error: this.strings.fieldTooLongForCardholderName }] }], this.hasCVV || (e = this.getElementById("cvv-field-group")).parentNode.removeChild(e), n.fields.postalCode || (t = this.getElementById("postal-code-field-group")).parentNode.removeChild(t), this.extraInputs.forEach(function(e) { e.enabled ? this._setupExtraInput(e) : this._removeExtraInput(e) }.bind(this)), this.model.asyncDependencyStarting(), l.create(n).then(function(e) { this.hostedFieldsInstance = e, this.hostedFieldsInstance.on("blur", this._onBlurEvent.bind(this)), this.hostedFieldsInstance.on("cardTypeChange", this._onCardTypeChangeEvent.bind(this)), this.hostedFieldsInstance.on("focus", this._onFocusEvent.bind(this)), this.hostedFieldsInstance.on("notEmpty", this._onNotEmptyEvent.bind(this)), this.hostedFieldsInstance.on("validityChange", this._onValidityChangeEvent.bind(this)), this.model.asyncDependencyReady() }.bind(this)).catch(function(e) { this.model.asyncDependencyFailed({ view: this.ID, error: e }) }.bind(this))
            }, u.prototype._setupExtraInput = function(t) {
                var r = this,
                    e = f(t.fieldName),
                    i = this.getElementById(e + "-field-group"),
                    n = i.querySelector("input"),
                    a = i.querySelector(".braintree-form__hosted-field");
                n.addEventListener("keyup", function() {
                    var e = r._validateExtraInput(t, !0);
                    s.toggle(a, "braintree-form__field--valid", e), e && r.hideFieldError(t.fieldName), r._sendRequestableEvent()
                }, !1), t.required && n.addEventListener("blur", function() { setTimeout(function() { m() && r._validateExtraInput(t, !0) }, 0) }, !1)
            }, u.prototype._removeExtraInput = function(e) {
                var t = this.getElementById(f(e.fieldName) + "-field-group");
                t.parentNode.removeChild(t)
            }, u.prototype._sendRequestableEvent = function() { this._isTokenizing || this.model.setPaymentMethodRequestable({ isRequestable: this._validateForm(), type: a.paymentMethodTypes.card }) }, u.prototype._generateHostedFieldsOptions = function() {
                var e, t = this.client.getConfiguration().gatewayConfiguration.challenges,
                    r = -1 !== t.indexOf("cvv"),
                    i = -1 !== t.indexOf("postal_code"),
                    n = this.model.merchantConfiguration.card && this.model.merchantConfiguration.card.overrides,
                    a = { client: this.client, fields: { number: { selector: this._generateFieldSelector("number"), placeholder: (e = b(4), [e, e, e, e].join(" ")) }, expirationDate: { selector: this._generateFieldSelector("expiration"), placeholder: this.strings.expirationDatePlaceholder }, cvv: { selector: this._generateFieldSelector("cvv"), placeholder: b(3) }, postalCode: { selector: this._generateFieldSelector("postal-code") } }, styles: { input: { "font-size": "16px", "font-family": '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif', color: "#000" }, ":focus": { color: "black" }, "::-webkit-input-placeholder": { color: "#6a6a6a" }, ":-moz-placeholder": { color: "#6a6a6a" }, "::-moz-placeholder": { color: "#6a6a6a" }, ":-ms-input-placeholder ": { color: "#6a6a6a" }, "input::-ms-clear": { color: "transparent" } } };
                return r || delete a.fields.cvv, i || delete a.fields.postalCode, n && (n.fields && (n.fields.cvv && n.fields.cvv.placeholder && (this._hasCustomCVVPlaceholder = !0), Object.keys(n.fields).forEach(function(e) { "cvv" !== e && "postalCode" !== e || null !== n.fields[e] ? a.fields[e] && o(a.fields[e], n.fields[e], { selector: a.fields[e].selector }) : delete a.fields[e] })), n.styles && Object.keys(n.styles).forEach(function(e) {
                    var r;
                    null !== n.styles[e] ? (r = n.styles[e], Object.keys(r).forEach(function(e) {
                        var t = f(e);
                        r[t] = r[e]
                    }), a.styles[e] = a.styles[e] || {}, o(a.styles[e], n.styles[e])) : delete a.styles[e]
                })), a
            }, u.prototype._validateForm = function(r) {
                var e, i, n = !0,
                    t = this.client.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes;
                return !!this.hostedFieldsInstance && (i = this.hostedFieldsInstance.getState(), Object.keys(i.fields).forEach(function(e) {
                    var t = i.fields[e];
                    (r || n) && (t.isEmpty ? (n = !1, r && this.showFieldError(e, this.strings["fieldEmptyFor" + v(e)])) : t.isValid || (n = !1, r && this.showFieldError(e, this.strings["fieldInvalidFor" + v(e)])))
                }.bind(this)), i.fields.number.isValid && (e = a.configurationCardTypes[i.cards[0].type], -1 !== t.indexOf(e) || (n = !1, r && this.showFieldError("number", this.strings.unsupportedCardTypeError))), this.extraInputs && this.extraInputs.forEach(function(e) {
                    var t;
                    e.enabled && (t = this._validateExtraInput(e, r), n = n && t)
                }.bind(this)), n)
            }, u.prototype._validateExtraInput = function(r, i) {
                var e = f(r.fieldName),
                    n = this.getElementById(e + "-field-group").querySelector("input"),
                    a = !0;
                return r.required && !(a = 0 < n.value.length) && i && this.showFieldError(r.fieldName, r.requiredError), r.validations.forEach(function(e) { var t = e.isValid(n.value);!t && i && this.showFieldError(r.fieldName, e.error), a = a && t }.bind(this)), a
            }, u.prototype.getPaymentMethod = function() { if (this._validateForm()) return { type: a.paymentMethodTypes.card } }, u.prototype.tokenize = function() {
                var r, i = this,
                    e = i.hostedFieldsInstance.getState(),
                    t = { vault: !i.model.isGuestCheckout };
                return this.model.clearError(), this._validateForm(!0) ? (this.hasCardholderName && (t.cardholderName = this.cardholderNameInput.value), i._isTokenizing = !0, i.hostedFieldsInstance.tokenize(t).then(function(t) { return i.model.merchantConfiguration.card && !1 === i.model.merchantConfiguration.card.clearFieldsAfterTokenization || (Object.keys(e.fields).forEach(function(e) { i.hostedFieldsInstance.clear(e) }), i.hasCardholderName && (i.cardholderNameInput.value = "")), i.model.isGuestCheckout || (t.vaulted = !0), new p(function(e) { r = function() { setTimeout(function() { i.model.addPaymentMethod(t), e(t), s.remove(i.element, "braintree-sheet--tokenized") }, 0), i._isTokenizing = !1 }, c.onTransitionEnd(i.element, "max-height", r), setTimeout(function() { i.allowUserAction() }, a.CHANGE_ACTIVE_PAYMENT_METHOD_TIMEOUT), s.add(i.element, "braintree-sheet--tokenized") }) }).catch(function(e) { return i._isTokenizing = !1, i.model.reportError(e), i.allowUserAction(), p.reject(new n({ message: a.errors.NO_PAYMENT_METHOD_ERROR, braintreeWebError: e })) })) : (i.model.reportError("hostedFieldsFieldsInvalidError"), i.allowUserAction(), p.reject(new n(a.errors.NO_PAYMENT_METHOD_ERROR)))
            }, u.prototype.showFieldError = function(e, t) {
                var r = this.getElementById(f(e) + "-field-group"),
                    i = r.querySelector("input");
                this.fieldErrors.hasOwnProperty(e) || (this.fieldErrors[e] = this.getElementById(f(e) + "-field-error")), s.add(r, "braintree-form__field-group--has-error"), this.fieldErrors[e].innerHTML = t, i && h(i) ? i.setAttribute("aria-invalid", !0) : (this.hostedFieldsInstance.setAttribute({ field: e, attribute: "aria-invalid", value: !0 }), this.hostedFieldsInstance.setMessage({ field: e, message: t }))
            }, u.prototype.hideFieldError = function(e) {
                var t = this.getElementById(f(e) + "-field-group"),
                    r = t.querySelector("input");
                this.fieldErrors.hasOwnProperty(e) || (this.fieldErrors[e] = this.getElementById(f(e) + "-field-error")), s.remove(t, "braintree-form__field-group--has-error"), r && h(r) ? r.removeAttribute("aria-invalid") : (this.hostedFieldsInstance.removeAttribute({ field: e, attribute: "aria-invalid" }), this.hostedFieldsInstance.setMessage({ field: e, message: "" }))
            }, u.prototype.teardown = function() { return this.hostedFieldsInstance.teardown() }, u.prototype._generateFieldSelector = function(e) { return "#braintree--dropin__" + this.model.componentID + " .braintree-form-" + e }, u.prototype._onBlurEvent = function(e) {
                var t = e.fields[e.emittedBy],
                    r = this.getElementById(f(e.emittedBy) + "-field-group");
                s.remove(r, "braintree-form__field-group--is-focused"), y(t) ? this.showFieldError(e.emittedBy, this.strings["fieldEmptyFor" + v(e.emittedBy)]) : t.isEmpty || t.isValid ? "number" !== e.emittedBy || this._isCardTypeSupported(e.cards[0].type) || this.showFieldError("number", this.strings.unsupportedCardTypeError) : this.showFieldError(e.emittedBy, this.strings["fieldInvalidFor" + v(e.emittedBy)]), setTimeout(function() { y(t) && this.showFieldError(e.emittedBy, this.strings["fieldEmptyFor" + v(e.emittedBy)]) }.bind(this), 150)
            }, u.prototype._onCardTypeChangeEvent = function(e) {
                var t, r = "#iconCardFront",
                    i = "#iconCVVBack",
                    n = this.strings.cvvThreeDigitLabelSubheading,
                    a = b(3),
                    o = this.getElementById("number-field-group");
                1 === e.cards.length ? (r = "#icon-" + (t = e.cards[0].type), "american-express" === t && (i = "#iconCVVFront", n = this.strings.cvvFourDigitLabelSubheading, a = b(4)), s.add(o, "braintree-form__field-group--card-type-known")) : s.remove(o, "braintree-form__field-group--card-type-known"), this.cardNumberIconSvg.setAttribute("xlink:href", r), this.hasCVV && (this.cvvIconSvg.setAttribute("xlink:href", i), this.cvvLabelDescriptor.innerHTML = n, this._hasCustomCVVPlaceholder || this.hostedFieldsInstance.setAttribute({ field: "cvv", attribute: "placeholder", value: a }))
            }, u.prototype._onFocusEvent = function(e) {
                var t = this.getElementById(f(e.emittedBy) + "-field-group");
                s.add(t, "braintree-form__field-group--is-focused")
            }, u.prototype._onNotEmptyEvent = function(e) { this.hideFieldError(e.emittedBy) }, u.prototype._onValidityChangeEvent = function(e) {
                var t, r = e.fields[e.emittedBy];
                t = "number" === e.emittedBy && e.cards[0] ? r.isValid && this._isCardTypeSupported(e.cards[0].type) : r.isValid, s.toggle(r.container, "braintree-form__field--valid", t), r.isPotentiallyValid && this.hideFieldError(e.emittedBy), this._sendRequestableEvent()
            }, u.prototype.requestPaymentMethod = function() { return this.preventUserAction(), this.tokenize() }, u.prototype.onSelection = function() { this.hostedFieldsInstance && (this.hasCardholderName ? setTimeout(function() { this.cardholderNameInput.focus() }.bind(this), 1) : this.hostedFieldsInstance.focus("number")) }, u.prototype._hideUnsupportedCardIcons = function() {
                var i = this.client.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes;
                Object.keys(a.configurationCardTypes).forEach(function(e) { var t, r = a.configurationCardTypes[e]; - 1 === i.indexOf(r) && (t = this.getElementById(e + "-card-icon"), s.add(t, "braintree-hidden")) }.bind(this))
            }, u.prototype._isCardTypeSupported = function(e) { var t = a.configurationCardTypes[e]; return -1 !== this.client.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes.indexOf(t) }, u.isEnabled = function(e) { var t = e.client.getConfiguration().gatewayConfiguration; return p.resolve(0 < t.creditCards.supportedCardTypes.length) }, t.exports = u
        }, { "../../constants": 112, "../../lib/assign": 119, "../../lib/classlist": 121, "../../lib/dropin-error": 124, "../../lib/is-utf-8": 129, "../../lib/promise": 132, "../../lib/transition-helper": 136, "../base-view": 162, "braintree-web/hosted-fields": 53 }],
        170: [function(p, u, e) {
            (function(t) {
                "use strict";
                var e = p("../../lib/assign").assign,
                    r = p("../base-view"),
                    i = p("braintree-web/google-payment"),
                    n = p("../../lib/dropin-error"),
                    a = p("../../constants"),
                    o = p("../../lib/assets"),
                    s = p("../../lib/promise"),
                    l = p("../../lib/analytics");

                function d() { r.apply(this, arguments) }

                function c(e) { return new t.google.payments.api.PaymentsClient({ environment: "production" === e.getConfiguration().gatewayConfiguration.environment ? "PRODUCTION" : "TEST" }) }((d.prototype = Object.create(r.prototype)).constructor = d).ID = d.prototype.ID = a.paymentOptionIDs.googlePay, d.prototype.initialize = function() { var t = this; return t.googlePayConfiguration = e({}, t.model.merchantConfiguration.googlePay), t.model.asyncDependencyStarting(), i.create({ client: t.client }).then(function(e) { t.googlePayInstance = e, t.paymentsClient = c(t.client) }).then(function() { t.getElementById("google-pay-button").addEventListener("click", function(e) { e.preventDefault(), t.preventUserAction(), t.tokenize().then(function() { t.allowUserAction() }) }), t.model.asyncDependencyReady() }).catch(function(e) { t.model.asyncDependencyFailed({ view: t.ID, error: new n(e) }) }) }, d.prototype.tokenize = function() {
                    var t, r = this,
                        e = r.googlePayInstance.createPaymentDataRequest(r.googlePayConfiguration);
                    return r.paymentsClient.loadPaymentData(e).then(function(e) { return t = e, r.googlePayInstance.parseResponse(e) }).then(function(e) { e.rawPaymentData = t, r.model.addPaymentMethod(e) }).catch(function(e) {
                        var t = e;
                        if ("DEVELOPER_ERROR" === e.statusCode) console.error(e), t = "developerError";
                        else {
                            if ("CANCELED" === e.statusCode) return void l.sendEvent(r.client, "googlepay.loadPaymentData.canceled");
                            e.statusCode && l.sendEvent(r.client, "googlepay.loadPaymentData.failed")
                        }
                        r.model.reportError(t)
                    })
                }, d.prototype.updateConfiguration = function(e, t) { this.googlePayConfiguration[e] = t }, d.isEnabled = function(e) { return e.client.getConfiguration().gatewayConfiguration.androidPay && Boolean(e.merchantConfiguration.googlePay) ? s.resolve().then(function() { return t.google && t.google.payments && t.google.payments.api && t.google.payments.api.PaymentsClient ? s.resolve() : o.loadScript({ id: a.GOOGLE_PAYMENT_SCRIPT_ID, src: a.GOOGLE_PAYMENT_SOURCE }) }).then(function() { return c(e.client).isReadyToPay({ allowedPaymentMethods: ["CARD", "TOKENIZED_CARD"] }) }).then(function(e) { return Boolean(e.result) }) : s.resolve(!1) }, u.exports = d
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, { "../../constants": 112, "../../lib/analytics": 117, "../../lib/assets": 118, "../../lib/assign": 119, "../../lib/dropin-error": 124, "../../lib/promise": 132, "../base-view": 162, "braintree-web/google-payment": 47 }],
        171: [function(e, t, r) {
            "use strict";
            var i = e("../../constants").paymentOptionIDs,
                n = {};
            n[i.applePay] = e("./apple-pay-view"), n[i.card] = e("./card-view"), n[i.googlePay] = e("./google-pay-view"), n[i.paypal] = e("./paypal-view"), n[i.paypalCredit] = e("./paypal-credit-view"), n[i.venmo] = e("./venmo-view"), t.exports = n
        }, { "../../constants": 112, "./apple-pay-view": 167, "./card-view": 169, "./google-pay-view": 170, "./paypal-credit-view": 172, "./paypal-view": 173, "./venmo-view": 174 }],
        172: [function(e, t, r) {
            "use strict";
            var i = e("../../lib/promise"),
                n = e("../../constants").paymentOptionIDs,
                a = e("./base-paypal-view");

            function o() { a.apply(this, arguments), this._isPayPalCredit = !0 }((o.prototype = Object.create(a.prototype)).constructor = o).ID = o.prototype.ID = n.paypalCredit, o.isEnabled = function(e) { return e.merchantConfiguration.paypalCredit ? a.isEnabled(e) : i.resolve(!1) }, t.exports = o
        }, { "../../constants": 112, "../../lib/promise": 132, "./base-paypal-view": 168 }],
        173: [function(e, t, r) {
            "use strict";
            var i = e("../../lib/promise"),
                n = e("../../constants").paymentOptionIDs,
                a = e("./base-paypal-view");

            function o() { a.apply(this, arguments) }((o.prototype = Object.create(a.prototype)).constructor = o).ID = o.prototype.ID = n.paypal, o.isEnabled = function(e) { return e.merchantConfiguration.paypal ? a.isEnabled(e) : i.resolve(!1) }, t.exports = o
        }, { "../../constants": 112, "../../lib/promise": 132, "./base-paypal-view": 168 }],
        174: [function(e, t, r) {
            "use strict";
            var i = e("../../lib/assign").assign,
                n = e("../base-view"),
                a = e("braintree-web/venmo"),
                o = e("../../lib/dropin-error"),
                s = e("../../lib/promise"),
                l = e("../../constants").paymentOptionIDs;

            function d() { n.apply(this, arguments) }((d.prototype = Object.create(n.prototype)).constructor = d).ID = d.prototype.ID = l.venmo, d.prototype.initialize = function() {
                var t = this,
                    e = i({}, t.model.merchantConfiguration.venmo, { client: this.client });
                return t.model.asyncDependencyStarting(), a.create(e).then(function(e) { return t.venmoInstance = e, t.venmoInstance.hasTokenizationResult() ? t.venmoInstance.tokenize().then(function(e) { t.model.reportAppSwitchPayload(e) }).catch(function(e) { t._isIgnorableError(e) || t.model.reportAppSwitchError(l.venmo, e) }) : s.resolve() }).then(function() { t.getElementById("venmo-button").addEventListener("click", function(e) { return e.preventDefault(), t.preventUserAction(), t.venmoInstance.tokenize().then(function(e) { t.model.addPaymentMethod(e) }).catch(function(e) { t._isIgnorableError(e) || t.model.reportError(e) }).then(function() { t.allowUserAction() }) }), t.model.asyncDependencyReady() }).catch(function(e) { t.model.asyncDependencyFailed({ view: t.ID, error: new o(e) }) })
            }, d.prototype._isIgnorableError = function(e) { return "VENMO_APP_CANCELED" === e.code }, d.isEnabled = function(e) { return e.client.getConfiguration().gatewayConfiguration.payWithVenmo && Boolean(e.merchantConfiguration.venmo) ? s.resolve(a.isBrowserSupported(e.merchantConfiguration.venmo)) : s.resolve(!1) }, t.exports = d
        }, { "../../constants": 112, "../../lib/assign": 119, "../../lib/dropin-error": 124, "../../lib/promise": 132, "../base-view": 162, "braintree-web/venmo": 99 }]
    }, {}, [115])(115)
});