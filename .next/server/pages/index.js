"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 3986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ IndexFive),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/common/faq/faq-accordion-two.js
var faq_accordion_two = __webpack_require__(1015);
// EXTERNAL MODULE: ./components/common/sliders/client/client-slider-one.js
var client_slider_one = __webpack_require__(8509);
// EXTERNAL MODULE: ./components/common/video/video-section-four.js
var video_section_four = __webpack_require__(2561);
// EXTERNAL MODULE: ./components/home-five/cta-section.js
var cta_section = __webpack_require__(3073);
// EXTERNAL MODULE: ./components/home-five/feature-section.js
var feature_section = __webpack_require__(5937);
// EXTERNAL MODULE: ./components/home-five/hero-section.js
var hero_section = __webpack_require__(6833);
// EXTERNAL MODULE: ./components/home-five/wallet-section.js
var wallet_section = __webpack_require__(815);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/home-five/value-section.js
/* eslint-disable react/no-unescaped-entities */ 

function FeatureSection() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fugu--feature-section fugu--section-padding1",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-3 col-md-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--iconbox-wrap fugu--iconbox-wrap3 wow fadeInUpX",
                            "data-wow-delay": "0s",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fugu--iconbox-data",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Name"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "GROK XMAS"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-3 col-md-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--iconbox-wrap fugu--iconbox-wrap3 wow fadeInUpX",
                            "data-wow-delay": ".10s",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fugu--iconbox-data",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Symbol"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "$GROK XMAS"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-3 col-md-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--iconbox-wrap fugu--iconbox-wrap3 wow fadeInUpX",
                            "data-wow-delay": ".20s",
                            style: {
                                backgroundColor: "red"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fugu--iconbox-data",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Supply "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "6,000,000,000,000 (6T)"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-xl-3 col-md-6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fugu--iconbox-wrap fugu--iconbox-wrap3 wow fadeInUpX",
                            "data-wow-delay": ".20s",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "fugu--iconbox-data",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Decimal  "
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: "18"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./pages/index.js










function IndexFive() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Grok Xmas "
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(hero_section/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(FeatureSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(client_slider_one/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(video_section_four/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(feature_section/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(wallet_section/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(faq_accordion_two/* default */.Z, {})
        ]
    });
}
async function getStaticProps() {
    return {
        props: {
            header: "five",
            footer: "five"
        }
    };
}


/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 9485:
/***/ ((module) => {

module.exports = require("react-modal-video");

/***/ }),

/***/ 8096:
/***/ ((module) => {

module.exports = require("react-slick");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,1664,5152,3169], () => (__webpack_exec__(3986)));
module.exports = __webpack_exports__;

})();