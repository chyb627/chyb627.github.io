"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

;// CONCATENATED MODULE: external "recoil"
const external_recoil_namespaceObject = require("recoil");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Header.tsx





const Header = () => {
  const {
    0: isShowingMenu,
    1: isShowingMenuSet
  } = (0,external_react_.useState)(false);
  console.log('isShowingMenu', isShowingMenu);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: "navbar fixed top-0 left-0 right-0 border-b-4",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "navbar__logo",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx((image_default()), {
          src: "/images/star.png",
          alt: "Menu",
          width: 40,
          height: 40
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: `navbar__menu ${isShowingMenu ? 'active' : ''}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: "\uCC28\uC601\uBE48\uC18C\uAC1C"
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: "\uC9C8\uBB38\uD558\uAE30"
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: "\uAC1C\uBC1C\uBE14\uB85C\uADF8"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `navbar__icons ${isShowingMenu ? 'active' : ''}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("li", {
        className: "flex",
        children: "\uC624\uD508\uCC57\uAC00\uAE30"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "navbar__toogleBtn",
      onClick: () => {
        isShowingMenuSet(!isShowingMenu);
      }
    })]
  });
};

/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_recoil_namespaceObject.RecoilRoot, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(159)));
module.exports = __webpack_exports__;

})();