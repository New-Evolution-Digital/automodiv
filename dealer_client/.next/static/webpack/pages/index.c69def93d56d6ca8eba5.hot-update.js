"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/components/menu/useMenuState.ts":
/*!***************************************************!*\
  !*** ./src/pages/components/menu/useMenuState.ts ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useMenuState\": function() { return /* binding */ useMenuState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\nvar useMenuState = function useMenuState(initalState) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {\n    return initalState;\n  }),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var indexPages = [{\n    name: 'Home',\n    href: '/'\n  }];\n\n  var toggleMenu = function toggleMenu() {\n    setOpen(!open);\n  };\n\n  return {\n    get: {\n      open: open\n    },\n    set: {\n      open: setOpen\n    },\n    toggleMenu: toggleMenu\n  };\n};\n\n_s(useMenuState, \"QaSybt2DRmqZMkrKtJowBr/9Eng=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9tZW51L3VzZU1lbnVTdGF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFdBQUQsRUFBMEI7QUFBQTs7QUFDcEQsa0JBQXdCRiwrQ0FBUSxDQUFDO0FBQUEsV0FBTUUsV0FBTjtBQUFBLEdBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxNQUFNQyxVQUF1QixHQUFHLENBQUM7QUFBRUMsSUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLElBQUFBLElBQUksRUFBRTtBQUF0QixHQUFELENBQWhDOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJKLElBQUFBLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU87QUFBRU0sSUFBQUEsR0FBRyxFQUFFO0FBQUVOLE1BQUFBLElBQUksRUFBSkE7QUFBRixLQUFQO0FBQWlCTyxJQUFBQSxHQUFHLEVBQUU7QUFBRVAsTUFBQUEsSUFBSSxFQUFFQztBQUFSLEtBQXRCO0FBQXlDSSxJQUFBQSxVQUFVLEVBQVZBO0FBQXpDLEdBQVA7QUFDRCxDQVRNOztHQUFNUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9tZW51L3VzZU1lbnVTdGF0ZS50cz9jMTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCB1c2VNZW51U3RhdGUgPSAoaW5pdGFsU3RhdGU6IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoKCkgPT4gaW5pdGFsU3RhdGUpXG4gIGNvbnN0IGluZGV4UGFnZXM6IExpbmtUeXBlc1tdID0gW3sgbmFtZTogJ0hvbWUnLCBocmVmOiAnLycgfV1cblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldE9wZW4oIW9wZW4pXG4gIH1cblxuICByZXR1cm4geyBnZXQ6IHsgb3BlbiB9LCBzZXQ6IHsgb3Blbjogc2V0T3BlbiB9LCB0b2dnbGVNZW51IH1cbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZU1lbnVTdGF0ZSIsImluaXRhbFN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJpbmRleFBhZ2VzIiwibmFtZSIsImhyZWYiLCJ0b2dnbGVNZW51IiwiZ2V0Iiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/menu/useMenuState.ts\n");

/***/ })

});