yoastWebpackJsonp([224],{356:function(module,exports,__webpack_require__){"use strict";eval('var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };\n\n!function (e, t) {\n  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === \'function\' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (e.ReactIntlLocaleData = e.ReactIntlLocaleData || {}, e.ReactIntlLocaleData.be = t());\n}(undefined, function () {\n  "use strict";\n  return [{ locale: "be", pluralRuleFunction: function pluralRuleFunction(e, t) {\n      var a = String(e).split("."),\n          n = Number(a[0]) == e,\n          o = n && a[0].slice(-1),\n          r = n && a[0].slice(-2);return t ? 2 != o && 3 != o || 12 == r || 13 == r ? "other" : "few" : 1 == o && 11 != r ? "one" : o >= 2 && o <= 4 && (r < 12 || r > 14) ? "few" : n && 0 == o || o >= 5 && o <= 9 || r >= 11 && r <= 14 ? "many" : "other";\n    }, fields: { year: { displayName: "год", relative: { 0: "у гэтым годзе", 1: "у наступным годзе", "-1": "у мінулым годзе" }, relativeTime: { future: { one: "праз {0} год", few: "праз {0} гады", many: "праз {0} гадоў", other: "праз {0} года" }, past: { one: "{0} год таму", few: "{0} гады таму", many: "{0} гадоў таму", other: "{0} года таму" } } }, month: { displayName: "месяц", relative: { 0: "у гэтым месяцы", 1: "у наступным месяцы", "-1": "у мінулым месяцы" }, relativeTime: { future: { one: "праз {0} месяц", few: "праз {0} месяцы", many: "праз {0} месяцаў", other: "праз {0} месяца" }, past: { one: "{0} месяц таму", few: "{0} месяцы таму", many: "{0} месяцаў таму", other: "{0} месяца таму" } } }, day: { displayName: "дзень", relative: { 0: "сёння", 1: "заўтра", 2: "паслязаўтра", "-2": "пазаўчора", "-1": "учора" }, relativeTime: { future: { one: "праз {0} дзень", few: "праз {0} дні", many: "праз {0} дзён", other: "праз {0} дня" }, past: { one: "{0} дзень таму", few: "{0} дні таму", many: "{0} дзён таму", other: "{0} дня таму" } } }, hour: { displayName: "гадзіна", relative: { 0: "у гэту гадзіну" }, relativeTime: { future: { one: "праз {0} гадзіну", few: "праз {0} гадзіны", many: "праз {0} гадзін", other: "праз {0} гадзіны" }, past: { one: "{0} гадзіну таму", few: "{0} гадзіны таму", many: "{0} гадзін таму", other: "{0} гадзіны таму" } } }, minute: { displayName: "хвіліна", relative: { 0: "у гэту хвіліну" }, relativeTime: { future: { one: "праз {0} хвіліну", few: "праз {0} хвіліны", many: "праз {0} хвілін", other: "праз {0} хвіліны" }, past: { one: "{0} хвіліну таму", few: "{0} хвіліны таму", many: "{0} хвілін таму", other: "{0} хвіліны таму" } } }, second: { displayName: "секунда", relative: { 0: "цяпер" }, relativeTime: { future: { one: "праз {0} секунду", few: "праз {0} секунды", many: "праз {0} секунд", other: "праз {0} секунды" }, past: { one: "{0} секунду таму", few: "{0} секунды таму", many: "{0} секунд таму", other: "{0} секунды таму" } } } } }];\n});\n\n//////////////////\n// WEBPACK FOOTER\n// /Users/joostdevalk/Code/GitHub/wordpress-seo/node_modules/react-intl/locale-data/be.js\n// module id = 356\n// module chunks = 224\n\n//# sourceURL=webpack:////Users/joostdevalk/Code/GitHub/wordpress-seo/node_modules/react-intl/locale-data/be.js?')}});