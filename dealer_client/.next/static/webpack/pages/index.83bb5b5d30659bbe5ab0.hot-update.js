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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useMenuState\": function() { return /* binding */ useMenuState; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _s = $RefreshSig$();\n\n\nvar useMenuState = function useMenuState(initialState) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {\n    return initialState;\n  }),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var indexPages = [{\n    name: 'Home',\n    href: '/'\n  }];\n  var catPages = [{\n    name: 'Dealership Tools',\n    featured: [{\n      name: 'Regional Pricing',\n      imgSrc: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'\n    }, {\n      name: 'Reputaion Managment'\n    }, {\n      name: 'VIN Verification'\n    }]\n  }];\n\n  var toggleMenu = function toggleMenu() {\n    setOpen(!open);\n  };\n\n  return {\n    get: {\n      open: open,\n      pages: {\n        indexPages: indexPages,\n        catPages: catPages\n      }\n    },\n    set: {\n      open: setOpen\n    },\n    toggleMenu: toggleMenu\n  };\n};\n\n_s(useMenuState, \"M2CvOvDk8yp8qG5AfjflT0B9GzU=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9tZW51L3VzZU1lbnVTdGF0ZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFlBQUQsRUFBMkI7QUFBQTs7QUFDckQsa0JBQXdCRiwrQ0FBUSxDQUFDO0FBQUEsV0FBTUUsWUFBTjtBQUFBLEdBQUQsQ0FBaEM7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxNQUFNQyxVQUF1QixHQUFHLENBQUM7QUFBRUMsSUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLElBQUFBLElBQUksRUFBRTtBQUF0QixHQUFELENBQWhDO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFDRUYsSUFBQUEsSUFBSSxFQUFFLGtCQURSO0FBRUVHLElBQUFBLFFBQVEsRUFBRSxDQUNSO0FBQ0VILE1BQUFBLElBQUksRUFBRSxrQkFEUjtBQUVFSSxNQUFBQSxNQUFNLEVBQ0o7QUFISixLQURRLEVBTVI7QUFBRUosTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FOUSxFQU9SO0FBQUVBLE1BQUFBLElBQUksRUFBRTtBQUFSLEtBUFE7QUFGWixHQURlLENBQWpCOztBQWVBLE1BQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJQLElBQUFBLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQU87QUFDTFMsSUFBQUEsR0FBRyxFQUFFO0FBQUVULE1BQUFBLElBQUksRUFBSkEsSUFBRjtBQUFRVSxNQUFBQSxLQUFLLEVBQUU7QUFBRVIsUUFBQUEsVUFBVSxFQUFWQSxVQUFGO0FBQWNHLFFBQUFBLFFBQVEsRUFBUkE7QUFBZDtBQUFmLEtBREE7QUFFTE0sSUFBQUEsR0FBRyxFQUFFO0FBQUVYLE1BQUFBLElBQUksRUFBRUM7QUFBUixLQUZBO0FBR0xPLElBQUFBLFVBQVUsRUFBVkE7QUFISyxHQUFQO0FBS0QsQ0EzQk07O0dBQU1WIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb25lbnRzL21lbnUvdXNlTWVudVN0YXRlLnRzP2MxMmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IHVzZU1lbnVTdGF0ZSA9IChpbml0aWFsU3RhdGU6IGJvb2xlYW4pID0+IHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoKCkgPT4gaW5pdGlhbFN0YXRlKVxuICBjb25zdCBpbmRleFBhZ2VzOiBMaW5rVHlwZXNbXSA9IFt7IG5hbWU6ICdIb21lJywgaHJlZjogJy8nIH1dXG4gIGNvbnN0IGNhdFBhZ2VzID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdEZWFsZXJzaGlwIFRvb2xzJyxcbiAgICAgIGZlYXR1cmVkOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnUmVnaW9uYWwgUHJpY2luZycsXG4gICAgICAgICAgaW1nU3JjOlxuICAgICAgICAgICAgJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTkxNjk2MjA1NjAyLTJmOTUwYzQxN2NiOT9peGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4Jml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTE3MCZxPTgwJ1xuICAgICAgICB9LFxuICAgICAgICB7IG5hbWU6ICdSZXB1dGFpb24gTWFuYWdtZW50JyB9LFxuICAgICAgICB7IG5hbWU6ICdWSU4gVmVyaWZpY2F0aW9uJyB9XG4gICAgICBdXG4gICAgfVxuICBdXG5cbiAgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKCFvcGVuKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQ6IHsgb3BlbiwgcGFnZXM6IHsgaW5kZXhQYWdlcywgY2F0UGFnZXMgfSB9LFxuICAgIHNldDogeyBvcGVuOiBzZXRPcGVuIH0sXG4gICAgdG9nZ2xlTWVudVxuICB9XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VNZW51U3RhdGUiLCJpbml0aWFsU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImluZGV4UGFnZXMiLCJuYW1lIiwiaHJlZiIsImNhdFBhZ2VzIiwiZmVhdHVyZWQiLCJpbWdTcmMiLCJ0b2dnbGVNZW51IiwiZ2V0IiwicGFnZXMiLCJzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/components/menu/useMenuState.ts\n");

/***/ })

});