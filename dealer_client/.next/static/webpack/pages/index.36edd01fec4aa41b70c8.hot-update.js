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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useMenuState\": function() { return /* binding */ useMenuState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\nvar useMenuState = function useMenuState(initialState) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {\n    return initialState;\n  }),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var indexPages = [{\n    name: 'Home',\n    href: '/'\n  }];\n  var catPages = [{\n    name: 'Dealership Tools',\n    featured: [{\n      name: 'Regional Pricing'\n    }]\n  }];\n\n  var toggleMenu = function toggleMenu() {\n    setOpen(!open);\n  };\n\n  return {\n    get: {\n      open: open,\n      pages: {\n        indexPages: indexPages\n      }\n    },\n    set: {\n      open: setOpen\n    },\n    toggleMenu: toggleMenu\n  };\n};\n\n_s(useMenuState, \"M2CvOvDk8yp8qG5AfjflT0B9GzU=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9tZW51L3VzZU1lbnVTdGF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFlBQUQsRUFBMkI7QUFBQTs7QUFDckQsa0JBQXdCRiwrQ0FBUSxDQUFDO0FBQUEsV0FBTUUsWUFBTjtBQUFBLEdBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxNQUFNQyxVQUF1QixHQUFHLENBQUM7QUFBRUMsSUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLElBQUFBLElBQUksRUFBRTtBQUF0QixHQUFELENBQWhDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFBRUYsSUFBQUEsSUFBSSxFQUFFLGtCQUFSO0FBQTRCRyxJQUFBQSxRQUFRLEVBQUUsQ0FBQztBQUFFSCxNQUFBQSxJQUFJLEVBQUU7QUFBUixLQUFEO0FBQXRDLEdBRGUsQ0FBakI7O0FBSUEsTUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2Qk4sSUFBQUEsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsU0FBTztBQUNMUSxJQUFBQSxHQUFHLEVBQUU7QUFBRVIsTUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFTLE1BQUFBLEtBQUssRUFBRTtBQUFFUCxRQUFBQSxVQUFVLEVBQVZBO0FBQUY7QUFBZixLQURBO0FBRUxRLElBQUFBLEdBQUcsRUFBRTtBQUFFVixNQUFBQSxJQUFJLEVBQUVDO0FBQVIsS0FGQTtBQUdMTSxJQUFBQSxVQUFVLEVBQVZBO0FBSEssR0FBUDtBQUtELENBaEJNOztHQUFNVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY29tcG9uZW50cy9tZW51L3VzZU1lbnVTdGF0ZS50cz9jMTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCB1c2VNZW51U3RhdGUgPSAoaW5pdGlhbFN0YXRlOiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKCgpID0+IGluaXRpYWxTdGF0ZSlcbiAgY29uc3QgaW5kZXhQYWdlczogTGlua1R5cGVzW10gPSBbeyBuYW1lOiAnSG9tZScsIGhyZWY6ICcvJyB9XVxuICBjb25zdCBjYXRQYWdlcyA9IFtcbiAgICB7IG5hbWU6ICdEZWFsZXJzaGlwIFRvb2xzJywgZmVhdHVyZWQ6IFt7IG5hbWU6ICdSZWdpb25hbCBQcmljaW5nJyB9XSB9XG4gIF1cblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldE9wZW4oIW9wZW4pXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGdldDogeyBvcGVuLCBwYWdlczogeyBpbmRleFBhZ2VzIH0gfSxcbiAgICBzZXQ6IHsgb3Blbjogc2V0T3BlbiB9LFxuICAgIHRvZ2dsZU1lbnVcbiAgfVxufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlTWVudVN0YXRlIiwiaW5pdGlhbFN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJpbmRleFBhZ2VzIiwibmFtZSIsImhyZWYiLCJjYXRQYWdlcyIsImZlYXR1cmVkIiwidG9nZ2xlTWVudSIsImdldCIsInBhZ2VzIiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/menu/useMenuState.ts\n");

/***/ })

});