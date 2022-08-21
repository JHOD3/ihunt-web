!(function (e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).multilang = e();
    }
})(function () {
    return (function e(t, n, o) {
        function i(a, f) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!f && l) return l(a, !0);
                    if (r) return r(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw ((u.code = "MODULE_NOT_FOUND"), u);
                }
                var c = (n[a] = { exports: {} });
                t[a][0].call(
                    c.exports,
                    function (e) {
                        return i(t[a][1][e] || e);
                    },
                    c,
                    c.exports,
                    e,
                    t,
                    n,
                    o
                );
            }
            return n[a].exports;
        }
        for (var r = "function" == typeof require && require, a = 0; a < o.length; a++) i(o[a]);
        return i;
    })(
        {
            1: [
                function (e, t, n) {
                    const o = function (e, t) {
                        let n = t.split("."),
                            o = "";
                        switch (n.length) {
                            case 1:
                            case 2:
                                o = e[n[0]][n[1]];
                                break;
                            case 3:
                                o = e[n[0]][n[1]][n[2]];
                                break;
                            case 4:
                                o = e[n[0]][n[1]][n[2]][n[3]];
                                break;
                            case 5:
                                o = e[n[0]][n[1]][n[2]][n[3]][n[4]];
                        }
                        return o;
                    };
                    t.exports = {
                        translate: function (e) {
                            (this.idioma = localStorage.getItem("idioma")),
                                (this.idioma = null == this.idioma ? e.default : this.idioma),
                                fetch(baseUrl+"/lang/" + this.idioma + ".json")
                                    .then((e) => e.json())
                                    .then((t) => {
                                        document.querySelectorAll("." + e.classElements).forEach(function (n, i) {
                                            let r = n.getAttribute(e.attrKey),
                                            a = o(t, r);
                                            let arrayInput = ['text','password','tel','email','number','url','search','date','time','datetime','datetime-local','month','week','color'];
                                            if(arrayInput.includes(n.getAttribute('type'))){
                                                n.setAttribute('placeholder', a);
                                            }else{
                                                n.innerHTML = a;
                                            }                                              
                                            
                                        });
                                    }),
                                document.querySelector('a[data-lang="'+this.idioma+'"]')?.parentElement.classList.add("active");
                                localStorage.setItem("idioma", this.idioma)
                                document.querySelectorAll("." + e.btnClassChange).forEach(function (e) {
                                    e.addEventListener("click", function (e) {
                                        localStorage.setItem("idioma", this.dataset.lang), location.reload();
                                    });
                                });
                        },
                    };
                },
                {},
            ],
        },
        {},
        [1]
    )(1);
});
