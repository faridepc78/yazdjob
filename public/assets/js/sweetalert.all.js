!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Sweetalert2 = e()
}(this, function () {
    "use strict";

    function f(t) {
        return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function o(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
    }

    function r(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }

    function a() {
        return (a = Object.assign || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
            }
            return t
        }).apply(this, arguments)
    }

    function s(t) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function c(t, e, n) {
        return (c = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                })), !0
            } catch (t) {
                return !1
            }
        }() ? Reflect.construct : function (t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var i = new (Function.bind.apply(t, o));
            return n && u(i, n.prototype), i
        }).apply(null, arguments)
    }

    function l(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function d(t, e, n) {
        return (d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var o = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t));) ;
                return t
            }(t, e);
            if (o) {
                var i = Object.getOwnPropertyDescriptor(o, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function p(e) {
        return Object.keys(e).map(function (t) {
            return e[t]
        })
    }

    function m(t) {
        return Array.prototype.slice.call(t)
    }

    function g(t) {
        console.error("".concat(e, " ").concat(t))
    }

    function h(t, e) {
        !function (t) {
            -1 === n.indexOf(t) && (n.push(t), y(t))
        }('"'.concat(t, '" is deprecated and will be removed in the next major release. Please use "').concat(e, '" instead.'))
    }

    function v(t) {
        return t && Promise.resolve(t) === t
    }

    function t(t) {
        var e = {};
        for (var n in t) e[t[n]] = "swal2-" + t[n];
        return e
    }

    function b(e, t, n) {
        m(e.classList).forEach(function (t) {
            -1 === p(k).indexOf(t) && -1 === p(B).indexOf(t) && e.classList.remove(t)
        }), t && t[n] && nt(e, t[n])
    }

    var e = "SweetAlert2:", y = function (t) {
            console.warn("".concat(e, " ").concat(t))
        }, n = [], w = function (t) {
            return "function" == typeof t ? t() : t
        }, C = Object.freeze({cancel: "cancel", backdrop: "backdrop", close: "close", esc: "esc", timer: "timer"}),
        k = t(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "toast", "toast-shown", "toast-column", "fade", "show", "hide", "noanimation", "close", "title", "header", "content", "actions", "confirm", "cancel", "footer", "icon", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl"]),
        B = t(["success", "warning", "info", "question", "error"]), x = {previousBodyPadding: null},
        S = function (t, e) {
            return t.classList.contains(e)
        };

    function P(t, e) {
        if (!e) return null;
        switch (e) {
            case"select":
            case"textarea":
            case"file":
                return it(t, k[e]);
            case"checkbox":
                return t.querySelector(".".concat(k.checkbox, " input"));
            case"radio":
                return t.querySelector(".".concat(k.radio, " input:checked")) || t.querySelector(".".concat(k.radio, " input:first-child"));
            case"range":
                return t.querySelector(".".concat(k.range, " input"));
            default:
                return it(t, k.input)
        }
    }

    function A(t) {
        if (t.focus(), "file" !== t.type) {
            var e = t.value;
            t.value = "", t.value = e
        }
    }

    function L(t, e, n) {
        t && e && ("string" == typeof e && (e = e.split(/\s+/).filter(Boolean)), e.forEach(function (e) {
            t.forEach ? t.forEach(function (t) {
                n ? t.classList.add(e) : t.classList.remove(e)
            }) : n ? t.classList.add(e) : t.classList.remove(e)
        }))
    }

    function E(t, e, n) {
        n || 0 === parseInt(n) ? t.style[e] = "number" == typeof n ? n + "px" : n : t.style.removeProperty(e)
    }

    function T(t, e) {
        var n = 1 < arguments.length && void 0 !== e ? e : "flex";
        t.style.opacity = "", t.style.display = n
    }

    function O(t) {
        t.style.opacity = "", t.style.display = "none"
    }

    function M(t, e, n) {
        e ? T(t, n) : O(t)
    }

    function V(t) {
        return !(!t || !(t.offsetWidth || t.offsetHeight || t.getClientRects().length))
    }

    function j(t) {
        var e = window.getComputedStyle(t), n = parseFloat(e.getPropertyValue("animation-duration") || "0"),
            o = parseFloat(e.getPropertyValue("transition-duration") || "0");
        return 0 < n || 0 < o
    }

    function q() {
        return document.body.querySelector("." + k.container)
    }

    function H(t) {
        var e = q();
        return e ? e.querySelector(t) : null
    }

    function I(t) {
        return H("." + t)
    }

    function R() {
        var t = rt();
        return m(t.querySelectorAll("." + k.icon))
    }

    function N() {
        var t = R().filter(function (t) {
            return V(t)
        });
        return t.length ? t[0] : null
    }

    function D() {
        return I(k.title)
    }

    function U() {
        return I(k.content)
    }

    function _() {
        return I(k.image)
    }

    function z() {
        return I(k["progress-steps"])
    }

    function W() {
        return I(k["validation-message"])
    }

    function K() {
        return H("." + k.actions + " ." + k.confirm)
    }

    function F() {
        return H("." + k.actions + " ." + k.cancel)
    }

    function Z() {
        return I(k.actions)
    }

    function Q() {
        return I(k.header)
    }

    function Y() {
        return I(k.footer)
    }

    function $() {
        return I(k.close)
    }

    function J() {
        var t = m(rt().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function (t, e) {
                return t = parseInt(t.getAttribute("tabindex")), (e = parseInt(e.getAttribute("tabindex"))) < t ? 1 : t < e ? -1 : 0
            }),
            e = m(rt().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (t) {
                return "-1" !== t.getAttribute("tabindex")
            });
        return function (t) {
            for (var e = [], n = 0; n < t.length; n++) -1 === e.indexOf(t[n]) && e.push(t[n]);
            return e
        }(t.concat(e)).filter(function (t) {
            return V(t)
        })
    }

    function X() {
        return "undefined" == typeof window || "undefined" == typeof document
    }

    function G(t) {
        ce.isVisible() && et !== t.target.value && ce.resetValidationMessage(), et = t.target.value
    }

    function tt(t, e) {
        t instanceof HTMLElement ? e.appendChild(t) : "object" === f(t) ? lt(e, t) : t && (e.innerHTML = t)
    }

    var et, nt = function (t, e) {
            L(t, e, !0)
        }, ot = function (t, e) {
            L(t, e, !1)
        }, it = function (t, e) {
            for (var n = 0; n < t.childNodes.length; n++) if (S(t.childNodes[n], e)) return t.childNodes[n]
        }, rt = function () {
            return I(k.popup)
        }, at = function () {
            return !st() && !document.body.classList.contains(k["no-backdrop"])
        }, st = function () {
            return document.body.classList.contains(k["toast-shown"])
        },
        ut = '\n <div aria-labelledby="'.concat(k.title, '" aria-describedby="').concat(k.content, '" class="').concat(k.popup, '" tabindex="-1">\n   <div class="').concat(k.header, '">\n     <ul class="').concat(k["progress-steps"], '"></ul>\n     <div class="').concat(k.icon, " ").concat(B.error, '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(k.icon, " ").concat(B.question, '"></div>\n     <div class="').concat(k.icon, " ").concat(B.warning, '"></div>\n     <div class="').concat(k.icon, " ").concat(B.info, '"></div>\n     <div class="').concat(k.icon, " ").concat(B.success, '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(k.image, '" />\n     <h2 class="').concat(k.title, '" id="').concat(k.title, '"></h2>\n     <button type="button" class="').concat(k.close, '">&times;</button>\n   </div>\n   <div class="').concat(k.content, '">\n     <div id="').concat(k.content, '"></div>\n     <input class="').concat(k.input, '" />\n     <input type="file" class="').concat(k.file, '" />\n     <div class="').concat(k.range, '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(k.select, '"></select>\n     <div class="').concat(k.radio, '"></div>\n     <label for="').concat(k.checkbox, '" class="').concat(k.checkbox, '">\n       <input type="checkbox" />\n       <span class="').concat(k.label, '"></span>\n     </label>\n     <textarea class="').concat(k.textarea, '"></textarea>\n     <div class="').concat(k["validation-message"], '" id="').concat(k["validation-message"], '"></div>\n   </div>\n   <div class="').concat(k.actions, '">\n     <button type="button" class="').concat(k.confirm, '">باشه</button>\n     <button type="button" class="').concat(k.cancel, '">Cancel</button>\n   </div>\n   <div class="').concat(k.footer, '">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        ct = function (t) {
            if (function () {
                var t = q();
                t && (t.parentNode.removeChild(t), ot([document.documentElement, document.body], [k["no-backdrop"], k["toast-shown"], k["has-column"]]))
            }(), X()) g("SweetAlert2 requires document to initialize"); else {
                var e = document.createElement("div");
                e.className = k.container, e.innerHTML = ut;
                var n = function (t) {
                    return "string" == typeof t ? document.querySelector(t) : t
                }(t.target);
                n.appendChild(e), function (t) {
                    var e = rt();
                    e.setAttribute("role", t.toast ? "alert" : "dialog"), e.setAttribute("aria-live", t.toast ? "polite" : "assertive"), t.toast || e.setAttribute("aria-modal", "true")
                }(t), function (t) {
                    "rtl" === window.getComputedStyle(t).direction && nt(q(), k.rtl)
                }(n), function () {
                    var t = U(), e = it(t, k.input), n = it(t, k.file),
                        o = t.querySelector(".".concat(k.range, " input")),
                        i = t.querySelector(".".concat(k.range, " output")), r = it(t, k.select),
                        a = t.querySelector(".".concat(k.checkbox, " input")), s = it(t, k.textarea);
                    e.oninput = G, n.onchange = G, r.onchange = G, a.onchange = G, s.oninput = G, o.oninput = function (t) {
                        G(t), i.value = o.value
                    }, o.onchange = function (t) {
                        G(t), o.nextSibling.value = o.value
                    }
                }()
            }
        }, lt = function (t, e) {
            if (t.innerHTML = "", 0 in e) for (var n = 0; n in e; n++) t.appendChild(e[n].cloneNode(!0)); else t.appendChild(e.cloneNode(!0))
        }, dt = function () {
            if (X()) return !1;
            var t = document.createElement("div"), e = {
                WebkitAnimation: "webkitAnimationEnd",
                OAnimation: "oAnimationEnd oanimationend",
                animation: "animationend"
            };
            for (var n in e) if (e.hasOwnProperty(n) && void 0 !== t.style[n]) return e[n];
            return !1
        }();

    function pt(t, e, n) {
        M(t, n["showC" + e.substring(1) + "Button"], "inline-block"), t.innerHTML = n[e + "ButtonText"], t.setAttribute("aria-label", n[e + "ButtonAriaLabel"]), t.className = k[e], b(t, n.customClass, e + "Button"), nt(t, n[e + "ButtonClass"])
    }

    function ft(t, e) {
        var n = Z(), o = K(), i = F();
        e.showConfirmButton || e.showCancelButton ? T(n) : O(n), b(n, e.customClass, "actions"), pt(o, "confirm", e), pt(i, "cancel", e), e.buttonsStyling ? function (t, e, n) {
            nt([t, e], k.styled), n.confirmButtonColor && (t.style.backgroundColor = n.confirmButtonColor), n.cancelButtonColor && (e.style.backgroundColor = n.cancelButtonColor);
            var o = window.getComputedStyle(t).getPropertyValue("background-color");
            t.style.borderLeftColor = o, t.style.borderRightColor = o
        }(o, i, e) : (ot([o, i], k.styled), o.style.backgroundColor = o.style.borderLeftColor = o.style.borderRightColor = "", i.style.backgroundColor = i.style.borderLeftColor = i.style.borderRightColor = "")
    }

    function mt(t, e) {
        var n = q();
        n && (function (t, e) {
            "string" == typeof e ? t.style.background = e : e || nt([document.documentElement, document.body], k["no-backdrop"])
        }(n, e.backdrop), !e.backdrop && e.allowOutsideClick && y('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'), function (t, e) {
            e in k ? nt(t, k[e]) : (y('The "position" parameter is not valid, defaulting to "center"'), nt(t, k.center))
        }(n, e.position), function (t, e) {
            if (e && "string" == typeof e) {
                var n = "grow-" + e;
                n in k && nt(t, k[n])
            }
        }(n, e.grow), b(n, e.customClass, "container"), e.customContainerClass && nt(n, e.customContainerClass))
    }

    function gt(t, e) {
        t.placeholder && !e.inputPlaceholder || (t.placeholder = e.inputPlaceholder)
    }

    var ht = {promise: new WeakMap, innerParams: new WeakMap, domCache: new WeakMap}, vt = function (t, e) {
        var n = P(U(), t);
        if (n) for (var o in function (t) {
            for (var e = 0; e < t.attributes.length; e++) {
                var n = t.attributes[e].name;
                -1 === ["type", "value", "style"].indexOf(n) && t.removeAttribute(n)
            }
        }(n), e) "range" === t && "placeholder" === o || n.setAttribute(o, e[o])
    }, bt = function (t, e, n) {
        t.className = e, n.inputClass && nt(t, n.inputClass), n.customClass && nt(t, n.customClass.input)
    }, yt = {};
    yt.text = yt.email = yt.password = yt.number = yt.tel = yt.url = function (t) {
        var e = it(U(), k.input);
        return "string" == typeof t.inputValue || "number" == typeof t.inputValue ? e.value = t.inputValue : v(t.inputValue) || y('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(f(t.inputValue), '"')), gt(e, t), e.type = t.input, e
    }, yt.file = function (t) {
        var e = it(U(), k.file);
        return gt(e, t), e.type = t.input, e
    }, yt.range = function (t) {
        var e = it(U(), k.range), n = e.querySelector("input"), o = e.querySelector("output");
        return n.value = t.inputValue, n.type = t.input, o.value = t.inputValue, e
    }, yt.select = function (t) {
        var e = it(U(), k.select);
        if (e.innerHTML = "", t.inputPlaceholder) {
            var n = document.createElement("option");
            n.innerHTML = t.inputPlaceholder, n.value = "", n.disabled = !0, n.selected = !0, e.appendChild(n)
        }
        return e
    }, yt.radio = function () {
        var t = it(U(), k.radio);
        return t.innerHTML = "", t
    }, yt.checkbox = function (t) {
        var e = it(U(), k.checkbox), n = P(U(), "checkbox");
        return n.type = "checkbox", n.value = 1, n.id = k.checkbox, n.checked = Boolean(t.inputValue), e.querySelector("span").innerHTML = t.inputPlaceholder, e
    }, yt.textarea = function (t) {
        var e = it(U(), k.textarea);
        return e.value = t.inputValue, gt(e, t), e
    };

    function wt(t, e) {
        var n = U().querySelector("#" + k.content);
        e.html ? (tt(e.html, n), T(n, "block")) : e.text ? (n.textContent = e.text, T(n, "block")) : O(n), function (t, e) {
            for (var n = ht.innerParams.get(t), o = !n || e.input !== n.input, i = U(), r = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], a = 0; a < r.length; a++) {
                var s = k[r[a]], u = it(i, s);
                vt(r[a], e.inputAttributes), bt(u, s, e), o && O(u)
            }
            if (e.input) {
                if (!yt[e.input]) return g('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input, '"'));
                if (o) {
                    var c = yt[e.input](e);
                    T(c)
                }
            }
        }(t, e), b(U(), e.customClass, "content")
    }

    function Ct(t, i) {
        var r = z();
        if (!i.progressSteps || 0 === i.progressSteps.length) return O(r);
        T(r), r.innerHTML = "";
        var a = parseInt(null === i.currentProgressStep ? ce.getQueueStep() : i.currentProgressStep);
        a >= i.progressSteps.length && y("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), i.progressSteps.forEach(function (t, e) {
            var n = function (t) {
                var e = document.createElement("li");
                return nt(e, k["progress-step"]), e.innerHTML = t, e
            }(t);
            if (r.appendChild(n), e === a && nt(n, k["active-progress-step"]), e !== i.progressSteps.length - 1) {
                var o = function (t) {
                    var e = document.createElement("li");
                    return nt(e, k["progress-step-line"]), t.progressStepsDistance && (e.style.width = t.progressStepsDistance), e
                }(t);
                r.appendChild(o)
            }
        })
    }

    function kt(t, e) {
        var n = Q();
        b(n, e.customClass, "header"), Ct(0, e), function (t, e) {
            var n = ht.innerParams.get(t);
            if (n && e.type === n.type && N()) b(N(), e.customClass, "icon"); else if (xt(), e.type) if (St(), -1 !== Object.keys(B).indexOf(e.type)) {
                var o = H(".".concat(k.icon, ".").concat(B[e.type]));
                T(o), b(o, e.customClass, "icon"), L(o, "swal2-animate-".concat(e.type, "-icon"), e.animation)
            } else g('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type, '"'))
        }(t, e), function (t, e) {
            var n = _();
            if (!e.imageUrl) return O(n);
            T(n), n.setAttribute("src", e.imageUrl), n.setAttribute("alt", e.imageAlt), E(n, "width", e.imageWidth), E(n, "height", e.imageHeight), n.className = k.image, b(n, e.customClass, "image"), e.imageClass && nt(n, e.imageClass)
        }(0, e), function (t, e) {
            var n = D();
            M(n, e.title || e.titleText), e.title && tt(e.title, n), e.titleText && (n.innerText = e.titleText), b(n, e.customClass, "title")
        }(0, e), function (t, e) {
            var n = $();
            b(n, e.customClass, "closeButton"), M(n, e.showCloseButton), n.setAttribute("aria-label", e.closeButtonAriaLabel)
        }(0, e)
    }

    function Bt(t, e) {
        !function (t, e) {
            var n = rt();
            E(n, "width", e.width), E(n, "padding", e.padding), e.background && (n.style.background = e.background), n.className = k.popup, e.toast ? (nt([document.documentElement, document.body], k["toast-shown"]), nt(n, k.toast)) : nt(n, k.modal), b(n, e.customClass, "popup"), "string" == typeof e.customClass && nt(n, e.customClass), L(n, k.noanimation, !e.animation)
        }(0, e), mt(0, e), kt(t, e), wt(t, e), ft(0, e), function (t, e) {
            var n = Y();
            M(n, e.footer), e.footer && tt(e.footer, n), b(n, e.customClass, "footer")
        }(0, e)
    }

    var xt = function () {
        for (var t = R(), e = 0; e < t.length; e++) O(t[e])
    }, St = function () {
        for (var t = rt(), e = window.getComputedStyle(t).getPropertyValue("background-color"), n = t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), o = 0; o < n.length; o++) n[o].style.backgroundColor = e
    };

    function Pt() {
        var t = rt();
        t || ce.fire(""), t = rt();
        var e = Z(), n = K(), o = F();
        T(e), T(n), nt([t, e], k.loading), n.disabled = !0, o.disabled = !0, t.setAttribute("data-loading", !0), t.setAttribute("aria-busy", !0), t.focus()
    }

    function At(t) {
        return Mt.hasOwnProperty(t)
    }

    function Lt(t) {
        return jt[t]
    }

    var Et = [], Tt = {}, Ot = function () {
            return new Promise(function (t) {
                var e = window.scrollX, n = window.scrollY;
                Tt.restoreFocusTimeout = setTimeout(function () {
                    Tt.previousActiveElement && Tt.previousActiveElement.focus ? (Tt.previousActiveElement.focus(), Tt.previousActiveElement = null) : document.body && document.body.focus(), t()
                }, 100), void 0 !== e && void 0 !== n && window.scrollTo(e, n)
            })
        }, Mt = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            footer: "",
            type: null,
            toast: !1,
            customClass: "",
            customContainerClass: "",
            target: "body",
            backdrop: !0,
            animation: !0,
            heightAuto: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            stopKeydownPropagation: !0,
            keydownListenerCapture: !1,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: null,
            confirmButtonText: "باشه",
            confirmButtonAriaLabel: "",
            confirmButtonColor: null,
            confirmButtonClass: "",
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: null,
            cancelButtonClass: "",
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonAriaLabel: "Close this dialog",
            showLoaderOnConfirm: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageAlt: "",
            imageClass: "",
            timer: null,
            width: null,
            padding: null,
            background: null,
            input: null,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputClass: "",
            inputAttributes: {},
            inputValidator: null,
            validationMessage: null,
            grow: !1,
            position: "center",
            progressSteps: [],
            currentProgressStep: null,
            progressStepsDistance: null,
            onBeforeOpen: null,
            onAfterClose: null,
            onOpen: null,
            onClose: null,
            scrollbarPadding: !0
        },
        Vt = ["title", "titleText", "text", "html", "type", "customClass", "showConfirmButton", "showCancelButton", "confirmButtonText", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonClass", "cancelButtonText", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonClass", "buttonsStyling", "reverseButtons", "imageUrl", "imageWidth", "imageHeigth", "imageAlt", "imageClass", "progressSteps", "currentProgressStep"],
        jt = {
            customContainerClass: "customClass",
            confirmButtonClass: "customClass",
            cancelButtonClass: "customClass",
            imageClass: "customClass",
            inputClass: "customClass"
        },
        qt = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusCancel", "heightAuto", "keydownListenerCapture"],
        Ht = Object.freeze({
            isValidParameter: At,
            isUpdatableParameter: function (t) {
                return -1 !== Vt.indexOf(t)
            },
            isDeprecatedParameter: Lt,
            argsToParams: function (n) {
                var o = {};
                switch (f(n[0])) {
                    case"object":
                        a(o, n[0]);
                        break;
                    default:
                        ["title", "html", "type"].forEach(function (t, e) {
                            switch (f(n[e])) {
                                case"string":
                                    o[t] = n[e];
                                    break;
                                case"undefined":
                                    break;
                                default:
                                    g("Unexpected type of ".concat(t, '! Expected "string", got ').concat(f(n[e])))
                            }
                        })
                }
                return o
            },
            isVisible: function () {
                return V(rt())
            },
            clickConfirm: function () {
                return K() && K().click()
            },
            clickCancel: function () {
                return F() && F().click()
            },
            getContainer: q,
            getPopup: rt,
            getTitle: D,
            getContent: U,
            getImage: _,
            getIcon: N,
            getIcons: R,
            getCloseButton: $,
            getActions: Z,
            getConfirmButton: K,
            getCancelButton: F,
            getHeader: Q,
            getFooter: Y,
            getFocusableElements: J,
            getValidationMessage: W,
            isLoading: function () {
                return rt().hasAttribute("data-loading")
            },
            fire: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return c(this, e)
            },
            mixin: function (n) {
                return function (t) {
                    function e() {
                        return o(this, e), l(this, s(e).apply(this, arguments))
                    }

                    return function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && u(t, e)
                    }(e, t), r(e, [{
                        key: "_main", value: function (t) {
                            return d(s(e.prototype), "_main", this).call(this, a({}, n, t))
                        }
                    }]), e
                }(this)
            },
            queue: function (t) {
                var r = this;
                Et = t;

                function a(t, e) {
                    Et = [], document.body.removeAttribute("data-swal2-queue-step"), t(e)
                }

                var s = [];
                return new Promise(function (i) {
                    !function e(n, o) {
                        n < Et.length ? (document.body.setAttribute("data-swal2-queue-step", n), r.fire(Et[n]).then(function (t) {
                            void 0 !== t.value ? (s.push(t.value), e(n + 1, o)) : a(i, {dismiss: t.dismiss})
                        })) : a(i, {value: s})
                    }(0)
                })
            },
            getQueueStep: function () {
                return document.body.getAttribute("data-swal2-queue-step")
            },
            insertQueueStep: function (t, e) {
                return e && e < Et.length ? Et.splice(e, 0, t) : Et.push(t)
            },
            deleteQueueStep: function (t) {
                void 0 !== Et[t] && Et.splice(t, 1)
            },
            showLoading: Pt,
            enableLoading: Pt,
            getTimerLeft: function () {
                return Tt.timeout && Tt.timeout.getTimerLeft()
            },
            stopTimer: function () {
                return Tt.timeout && Tt.timeout.stop()
            },
            resumeTimer: function () {
                return Tt.timeout && Tt.timeout.start()
            },
            toggleTimer: function () {
                var t = Tt.timeout;
                return t && (t.running ? t.stop() : t.start())
            },
            increaseTimer: function (t) {
                return Tt.timeout && Tt.timeout.increase(t)
            },
            isTimerRunning: function () {
                return Tt.timeout && Tt.timeout.isRunning()
            }
        });

    function It() {
        var t = ht.innerParams.get(this), e = ht.domCache.get(this);
        t.showConfirmButton || (O(e.confirmButton), t.showCancelButton || O(e.actions)), ot([e.popup, e.actions], k.loading), e.popup.removeAttribute("aria-busy"), e.popup.removeAttribute("data-loading"), e.confirmButton.disabled = !1, e.cancelButton.disabled = !1
    }

    function Rt() {
        null === x.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (x.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = x.previousBodyPadding + function () {
            if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
            var t = document.createElement("div");
            t.style.width = "50px", t.style.height = "50px", t.style.overflow = "scroll", document.body.appendChild(t);
            var e = t.offsetWidth - t.clientWidth;
            return document.body.removeChild(t), e
        }() + "px")
    }

    function Nt() {
        return !!window.MSInputMethodContext && !!document.documentMode
    }

    function Dt() {
        var t = q(), e = rt();
        t.style.removeProperty("align-items"), e.offsetTop < 0 && (t.style.alignItems = "flex-start")
    }

    var Ut = function () {
        null !== x.previousBodyPadding && (document.body.style.paddingRight = x.previousBodyPadding + "px", x.previousBodyPadding = null)
    }, _t = function () {
        var e, n = q();
        n.ontouchstart = function (t) {
            e = t.target === n || !function (t) {
                return !!(t.scrollHeight > t.clientHeight)
            }(n) && "INPUT" !== t.target.tagName
        }, n.ontouchmove = function (t) {
            e && (t.preventDefault(), t.stopPropagation())
        }
    }, zt = function () {
        if (S(document.body, k.iosfix)) {
            var t = parseInt(document.body.style.top, 10);
            ot(document.body, k.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * t
        }
    }, Wt = function () {
        "undefined" != typeof window && Nt() && window.removeEventListener("resize", Dt)
    }, Kt = function () {
        m(document.body.children).forEach(function (t) {
            t.hasAttribute("data-previous-aria-hidden") ? (t.setAttribute("aria-hidden", t.getAttribute("data-previous-aria-hidden")), t.removeAttribute("data-previous-aria-hidden")) : t.removeAttribute("aria-hidden")
        })
    }, Ft = {swalPromiseResolve: new WeakMap};

    function Zt(t, e, n) {
        e ? $t(n) : (Ot().then(function () {
            return $t(n)
        }), Tt.keydownTarget.removeEventListener("keydown", Tt.keydownHandler, {capture: Tt.keydownListenerCapture}), Tt.keydownHandlerAdded = !1), delete Tt.keydownHandler, delete Tt.keydownTarget, t.parentNode && t.parentNode.removeChild(t), ot([document.documentElement, document.body], [k.shown, k["height-auto"], k["no-backdrop"], k["toast-shown"], k["toast-column"]]), at() && (Ut(), zt(), Wt(), Kt())
    }

    function Qt(t) {
        var e = q(), n = rt();
        if (n && !S(n, k.hide)) {
            var o = ht.innerParams.get(this), i = Ft.swalPromiseResolve.get(this), r = o.onClose, a = o.onAfterClose;
            ot(n, k.show), nt(n, k.hide), dt && j(n) ? n.addEventListener(dt, function (t) {
                t.target === n && function (t, e, n, o) {
                    S(t, k.hide) && Zt(e, n, o), Yt(ht), Yt(Ft)
                }(n, e, st(), a)
            }) : Zt(e, st(), a), null !== r && "function" == typeof r && r(n), i(t || {}), delete this.params
        }
    }

    var Yt = function (t) {
        for (var e in t) t[e] = new WeakMap
    }, $t = function (t) {
        null !== t && "function" == typeof t && setTimeout(function () {
            t()
        })
    };

    function Jt(t, e, n) {
        var o = ht.domCache.get(t);
        e.forEach(function (t) {
            o[t].disabled = n
        })
    }

    function Xt(t, e) {
        if (!t) return !1;
        if ("radio" === t.type) for (var n = t.parentNode.parentNode.querySelectorAll("input"), o = 0; o < n.length; o++) n[o].disabled = e; else t.disabled = e
    }

    var Gt = function () {
        function n(t, e) {
            o(this, n), this.callback = t, this.remaining = e, this.running = !1, this.start()
        }

        return r(n, [{
            key: "start", value: function () {
                return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
            }
        }, {
            key: "stop", value: function () {
                return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date - this.started), this.remaining
            }
        }, {
            key: "increase", value: function (t) {
                var e = this.running;
                return e && this.stop(), this.remaining += t, e && this.start(), this.remaining
            }
        }, {
            key: "getTimerLeft", value: function () {
                return this.running && (this.stop(), this.start()), this.remaining
            }
        }, {
            key: "isRunning", value: function () {
                return this.running
            }
        }]), n
    }(), te = {
        email: function (t, e) {
            return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid email address")
        }, url: function (t, e) {
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t) ? Promise.resolve() : Promise.resolve(e || "Invalid URL")
        }
    };

    function ee(t, e) {
        t.removeEventListener(dt, ee), e.style.overflowY = "auto"
    }

    function ne(t) {
        var e = q(), n = rt();
        null !== t.onBeforeOpen && "function" == typeof t.onBeforeOpen && t.onBeforeOpen(n), t.animation && (nt(n, k.show), nt(e, k.fade)), T(n), dt && j(n) ? (e.style.overflowY = "hidden", n.addEventListener(dt, ee.bind(null, n, e))) : e.style.overflowY = "auto", nt([document.documentElement, document.body, e], k.shown), t.heightAuto && t.backdrop && !t.toast && nt([document.documentElement, document.body], k["height-auto"]), at() && (t.scrollbarPadding && Rt(), function () {
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !S(document.body, k.iosfix)) {
                var t = document.body.scrollTop;
                document.body.style.top = -1 * t + "px", nt(document.body, k.iosfix), _t()
            }
        }(), "undefined" != typeof window && Nt() && (Dt(), window.addEventListener("resize", Dt)), m(document.body.children).forEach(function (t) {
            t === q() || function (t, e) {
                if ("function" == typeof t.contains) return t.contains(e)
            }(t, q()) || (t.hasAttribute("aria-hidden") && t.setAttribute("data-previous-aria-hidden", t.getAttribute("aria-hidden")), t.setAttribute("aria-hidden", "true"))
        }), setTimeout(function () {
            e.scrollTop = 0
        })), st() || Tt.previousActiveElement || (Tt.previousActiveElement = document.activeElement), null !== t.onOpen && "function" == typeof t.onOpen && setTimeout(function () {
            t.onOpen(n)
        })
    }

    var oe = void 0, ie = {
        select: function (t, e, i) {
            var r = it(t, k.select);
            e.forEach(function (t) {
                var e = t[0], n = t[1], o = document.createElement("option");
                o.value = e, o.innerHTML = n, i.inputValue.toString() === e.toString() && (o.selected = !0), r.appendChild(o)
            }), r.focus()
        }, radio: function (t, e, a) {
            var s = it(t, k.radio);
            e.forEach(function (t) {
                var e = t[0], n = t[1], o = document.createElement("input"), i = document.createElement("label");
                o.type = "radio", o.name = k.radio, o.value = e, a.inputValue.toString() === e.toString() && (o.checked = !0);
                var r = document.createElement("span");
                r.innerHTML = n, r.className = k.label, i.appendChild(o), i.appendChild(r), s.appendChild(i)
            });
            var n = s.querySelectorAll("input");
            n.length && n[0].focus()
        }
    }, re = function (e) {
        var n = [];
        return "undefined" != typeof Map && e instanceof Map ? e.forEach(function (t, e) {
            n.push([e, t])
        }) : Object.keys(e).forEach(function (t) {
            n.push([t, e[t]])
        }), n
    };
    var ae, se = Object.freeze({
        hideLoading: It, disableLoading: It, getInput: function (t) {
            var e = ht.innerParams.get(t || this);
            return P(ht.domCache.get(t || this).content, e.input)
        }, close: Qt, closePopup: Qt, closeModal: Qt, closeToast: Qt, enableButtons: function () {
            Jt(this, ["confirmButton", "cancelButton"], !1)
        }, disableButtons: function () {
            Jt(this, ["confirmButton", "cancelButton"], !0)
        }, enableConfirmButton: function () {
            h("Swal.disableConfirmButton()", "Swal.getConfirmButton().removeAttribute('disabled')"), Jt(this, ["confirmButton"], !1)
        }, disableConfirmButton: function () {
            h("Swal.enableConfirmButton()", "Swal.getConfirmButton().setAttribute('disabled', '')"), Jt(this, ["confirmButton"], !0)
        }, enableInput: function () {
            return Xt(this.getInput(), !1)
        }, disableInput: function () {
            return Xt(this.getInput(), !0)
        }, showValidationMessage: function (t) {
            var e = ht.domCache.get(this);
            e.validationMessage.innerHTML = t;
            var n = window.getComputedStyle(e.popup);
            e.validationMessage.style.marginLeft = "-".concat(n.getPropertyValue("padding-left")), e.validationMessage.style.marginRight = "-".concat(n.getPropertyValue("padding-right")), T(e.validationMessage);
            var o = this.getInput();
            o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", k["validation-message"]), A(o), nt(o, k.inputerror))
        }, resetValidationMessage: function () {
            var t = ht.domCache.get(this);
            t.validationMessage && O(t.validationMessage);
            var e = this.getInput();
            e && (e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedBy"), ot(e, k.inputerror))
        }, getProgressSteps: function () {
            return h("Swal.getProgressSteps()", "const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps"), ht.innerParams.get(this).progressSteps
        }, setProgressSteps: function (t) {
            h("Swal.setProgressSteps()", "Swal.update()");
            var e = a({}, ht.innerParams.get(this), {progressSteps: t});
            Ct(0, e), ht.innerParams.set(this, e)
        }, showProgressSteps: function () {
            var t = ht.domCache.get(this);
            T(t.progressSteps)
        }, hideProgressSteps: function () {
            var t = ht.domCache.get(this);
            O(t.progressSteps)
        }, _main: function (t) {
            var c = this;
            !function (t) {
                for (var e in t) At(i = e) || y('Unknown parameter "'.concat(i, '"')), t.toast && (o = e, -1 !== qt.indexOf(o) && y('The parameter "'.concat(o, '" is incompatible with toasts'))), Lt(n = void 0) && h(n, Lt(n));
                var n, o, i
            }(t);
            var l = a({}, Mt, t);
            !function (e) {
                e.inputValidator || Object.keys(te).forEach(function (t) {
                    e.input === t && (e.inputValidator = te[t])
                }), e.showLoaderOnConfirm && !e.preConfirm && y("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"), e.animation = w(e.animation), e.target && ("string" != typeof e.target || document.querySelector(e.target)) && ("string" == typeof e.target || e.target.appendChild) || (y('Target parameter is not valid, defaulting to "body"'), e.target = "body"), "string" == typeof e.title && (e.title = e.title.split("\n").join("<br />"));
                var t = rt(), n = "string" == typeof e.target ? document.querySelector(e.target) : e.target;
                (!t || t && n && t.parentNode !== n.parentNode) && ct(e)
            }(l), Object.freeze(l), Tt.timeout && (Tt.timeout.stop(), delete Tt.timeout), clearTimeout(Tt.restoreFocusTimeout);
            var d = {
                popup: rt(),
                container: q(),
                content: U(),
                actions: Z(),
                confirmButton: K(),
                cancelButton: F(),
                closeButton: $(),
                validationMessage: W(),
                progressSteps: z()
            };
            ht.domCache.set(this, d), Bt(this, l), ht.innerParams.set(this, l);
            var p = this.constructor;
            return new Promise(function (t) {
                function n(t) {
                    c.closePopup({value: t})
                }

                function s(t) {
                    c.closePopup({dismiss: t})
                }

                Ft.swalPromiseResolve.set(c, t), l.timer && (Tt.timeout = new Gt(function () {
                    s("timer"), delete Tt.timeout
                }, l.timer));
                l.input && setTimeout(function () {
                    var t = c.getInput();
                    t && A(t)
                }, 0);
                for (var u = function (e) {
                    (l.showLoaderOnConfirm && p.showLoading(), l.preConfirm) ? (c.resetValidationMessage(), Promise.resolve().then(function () {
                        return l.preConfirm(e, l.validationMessage)
                    }).then(function (t) {
                        V(d.validationMessage) || !1 === t ? c.hideLoading() : n(void 0 === t ? e : t)
                    })) : n(e)
                }, e = function (t) {
                    var e = t.target, n = d.confirmButton, o = d.cancelButton, i = n && (n === e || n.contains(e)),
                        r = o && (o === e || o.contains(e));
                    switch (t.type) {
                        case"click":
                            if (i) if (c.disableButtons(), l.input) {
                                var a = function () {
                                    var t = c.getInput();
                                    if (!t) return null;
                                    switch (l.input) {
                                        case"checkbox":
                                            return t.checked ? 1 : 0;
                                        case"radio":
                                            return t.checked ? t.value : null;
                                        case"file":
                                            return t.files.length ? t.files[0] : null;
                                        default:
                                            return l.inputAutoTrim ? t.value.trim() : t.value
                                    }
                                }();
                                if (l.inputValidator) c.disableInput(), Promise.resolve().then(function () {
                                    return l.inputValidator(a, l.validationMessage)
                                }).then(function (t) {
                                    c.enableButtons(), c.enableInput(), t ? c.showValidationMessage(t) : u(a)
                                }); else c.getInput().checkValidity() ? u(a) : (c.enableButtons(), c.showValidationMessage(l.validationMessage))
                            } else u(!0); else r && (c.disableButtons(), s(p.DismissReason.cancel))
                    }
                }, o = d.popup.querySelectorAll("button"), i = 0; i < o.length; i++) o[i].onclick = e, o[i].onmouseover = e, o[i].onmouseout = e, o[i].onmousedown = e;
                if (d.closeButton.onclick = function () {
                    s(p.DismissReason.close)
                }, l.toast) d.popup.onclick = function () {
                    l.showConfirmButton || l.showCancelButton || l.showCloseButton || l.input || s(p.DismissReason.close)
                }; else {
                    var r = !1;
                    d.popup.onmousedown = function () {
                        d.container.onmouseup = function (t) {
                            d.container.onmouseup = void 0, t.target === d.container && (r = !0)
                        }
                    }, d.container.onmousedown = function () {
                        d.popup.onmouseup = function (t) {
                            d.popup.onmouseup = void 0, t.target !== d.popup && !d.popup.contains(t.target) || (r = !0)
                        }
                    }, d.container.onclick = function (t) {
                        r ? r = !1 : t.target === d.container && w(l.allowOutsideClick) && s(p.DismissReason.backdrop)
                    }
                }
                l.reverseButtons ? d.confirmButton.parentNode.insertBefore(d.cancelButton, d.confirmButton) : d.confirmButton.parentNode.insertBefore(d.confirmButton, d.cancelButton);

                function a(t, e) {
                    for (var n = J(l.focusCancel), o = 0; o < n.length; o++) return (t += e) === n.length ? t = 0 : -1 === t && (t = n.length - 1), n[t].focus();
                    d.popup.focus()
                }

                Tt.keydownTarget && Tt.keydownHandlerAdded && (Tt.keydownTarget.removeEventListener("keydown", Tt.keydownHandler, {capture: Tt.keydownListenerCapture}), Tt.keydownHandlerAdded = !1), l.toast || (Tt.keydownHandler = function (t) {
                    return function (t, e) {
                        e.stopKeydownPropagation && t.stopPropagation();
                        if ("Enter" !== t.key || t.isComposing) if ("Tab" === t.key) {
                            for (var n = t.target, o = J(e.focusCancel), i = -1, r = 0; r < o.length; r++) if (n === o[r]) {
                                i = r;
                                break
                            }
                            t.shiftKey ? a(i, -1) : a(i, 1), t.stopPropagation(), t.preventDefault()
                        } else -1 !== ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Left", "Right", "Up", "Down"].indexOf(t.key) ? document.activeElement === d.confirmButton && V(d.cancelButton) ? d.cancelButton.focus() : document.activeElement === d.cancelButton && V(d.confirmButton) && d.confirmButton.focus() : "Escape" !== t.key && "Esc" !== t.key || !0 !== w(e.allowEscapeKey) || (t.preventDefault(), s(p.DismissReason.esc)); else if (t.target && c.getInput() && t.target.outerHTML === c.getInput().outerHTML) {
                            if (-1 !== ["textarea", "file"].indexOf(e.input)) return;
                            p.clickConfirm(), t.preventDefault()
                        }
                    }(t, l)
                }, Tt.keydownTarget = l.keydownListenerCapture ? window : d.popup, Tt.keydownListenerCapture = l.keydownListenerCapture, Tt.keydownTarget.addEventListener("keydown", Tt.keydownHandler, {capture: Tt.keydownListenerCapture}), Tt.keydownHandlerAdded = !0), c.enableButtons(), c.hideLoading(), c.resetValidationMessage(), l.toast && (l.input || l.footer || l.showCloseButton) ? nt(document.body, k["toast-column"]) : ot(document.body, k["toast-column"]), "select" === l.input || "radio" === l.input ? function (e, n) {
                    function o(t) {
                        return ie[n.input](i, re(t), n)
                    }

                    var i = U();
                    v(n.inputOptions) ? (Pt(), n.inputOptions.then(function (t) {
                        e.hideLoading(), o(t)
                    })) : "object" === f(n.inputOptions) ? o(n.inputOptions) : g("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(f(n.inputOptions)))
                }(c, l) : -1 !== ["text", "email", "number", "tel", "textarea"].indexOf(l.input) && v(l.inputValue) && function (e, n) {
                    var o = e.getInput();
                    O(o), n.inputValue.then(function (t) {
                        o.value = "number" === n.input ? parseFloat(t) || 0 : t + "", T(o), o.focus(), e.hideLoading()
                    }).catch(function (t) {
                        g("Error in inputValue promise: " + t), o.value = "", T(o), o.focus(), oe.hideLoading()
                    })
                }(c, l), ne(l), l.toast || (w(l.allowEnterKey) ? l.focusCancel && V(d.cancelButton) ? d.cancelButton.focus() : l.focusConfirm && V(d.confirmButton) ? d.confirmButton.focus() : a(-1, 1) : document.activeElement && "function" == typeof document.activeElement.blur && document.activeElement.blur()), d.container.scrollTop = 0
            })
        }, update: function (e) {
            var n = {};
            Object.keys(e).forEach(function (t) {
                ce.isUpdatableParameter(t) ? n[t] = e[t] : y('Invalid parameter to update: "'.concat(t, '". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js'))
            });
            var t = a({}, ht.innerParams.get(this), n);
            Bt(this, t), ht.innerParams.set(this, t), Object.defineProperties(this, {
                params: {
                    value: a({}, this.params, e),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
    });

    function ue() {
        if ("undefined" != typeof window) {
            "undefined" == typeof Promise && g("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"), ae = this;
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            var o = Object.freeze(this.constructor.argsToParams(e));
            Object.defineProperties(this, {params: {value: o, writable: !1, enumerable: !0, configurable: !0}});
            var i = this._main(this.params);
            ht.promise.set(this, i)
        }
    }

    ue.prototype.then = function (t) {
        return ht.promise.get(this).then(t)
    }, ue.prototype.finally = function (t) {
        return ht.promise.get(this).finally(t)
    }, a(ue.prototype, se), a(ue, Ht), Object.keys(se).forEach(function (e) {
        ue[e] = function () {
            var t;
            if (ae) return (t = ae)[e].apply(t, arguments)
        }
    }), ue.DismissReason = C, ue.version = "8.12.1";
    var ce = ue;
    return ce.default = ce
}), void 0 !== this && this.Sweetalert2 && (this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2);
"undefined" != typeof document && function (e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t); else try {
        n.innerHTML = t
    } catch (e) {
        n.innerText = t
    }
}(document, "@charset \"UTF-8\";@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;word-wrap:break-word}#swal2-content{text-align:center}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;zoom:normal;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;zoom:normal;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:\"!\"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:\"i\"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:\"?\"}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:\"؟\"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}");
