"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Loading-Screen/index.jsx":
/*!*************************************************!*\
  !*** ./src/components/Loading-Screen/index.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_loadingPace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/loadingPace.js */ \"./src/common/loadingPace.js\");\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/app.json */ \"./src/data/app.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar LoadingScreen = function() {\n    _s();\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var bodyEl = document.querySelector(\"body\");\n        if (_data_app_json__WEBPACK_IMPORTED_MODULE_5__.showLoading) {\n            (0,_common_loadingPace_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n            if (bodyEl.classList.contains(\"hideX\")) {\n                bodyEl.classList.remove(\"hideX\");\n            }\n        } else {\n            bodyEl.classList.add(\"hideX\");\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"\".concat(_data_app_json__WEBPACK_IMPORTED_MODULE_5__.showLoading === true ? \"showX\" : \"hideX\"),\n                __source: {\n                    fileName: \"E:\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Loading-Screen\\\\index.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    id: \"preloader\",\n                    __source: {\n                        fileName: \"E:\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Loading-Screen\\\\index.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/img/logo-light.png\",\n                        alt: \"\",\n                        height: 20,\n                        width: 50,\n                        __source: {\n                            fileName: \"E:\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Loading-Screen\\\\index.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                })\n            }),\n            _data_app_json__WEBPACK_IMPORTED_MODULE_5__.showLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {\n                id: \"pace\",\n                strategy: \"beforeInteractive\",\n                src: \"/js/pace.min.js\",\n                __source: {\n                    fileName: \"E:\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Loading-Screen\\\\index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                },\n                __self: _this\n            }) : \"\"\n        ]\n    }));\n};\n_s(LoadingScreen, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = LoadingScreen;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoadingScreen);\nvar _c;\n$RefreshReg$(_c, \"LoadingScreen\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nLVNjcmVlbi9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNLO0FBQ0U7QUFDcUI7QUFDWjs7O0FBRXpDLEdBQUssQ0FBQ0ssYUFBYSxHQUFHLFFBQVEsR0FBRixDQUFDOztJQUMzQkwsc0RBQWUsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNyQixHQUFHLENBQUNPLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBTTtRQUMxQyxFQUFFLEVBQUVMLHVEQUFtQixFQUFFLENBQUM7WUFDeEJELGtFQUFXO1lBRVgsRUFBRSxFQUFFSSxNQUFNLENBQUNJLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLENBQU8sU0FBRyxDQUFDO2dCQUN2Q0wsTUFBTSxDQUFDSSxTQUFTLENBQUNFLE1BQU0sQ0FBQyxDQUFPO1lBQ2pDLENBQUM7UUFDSCxDQUFDLE1BQU0sQ0FBQztZQUNOTixNQUFNLENBQUNJLFNBQVMsQ0FBQ0csR0FBRyxDQUFDLENBQU87UUFDOUIsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNOztpRkFFREMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFHLEdBQW1ELE9BQWpEWix1REFBbUIsS0FBSyxJQUFJLEdBQUcsQ0FBTyxTQUFHLENBQU87Ozs7Ozs7K0ZBQ2hFVyxDQUFHO29CQUFDRSxFQUFFLEVBQUMsQ0FBVzs7Ozs7OzttR0FJaEJoQixtREFBSzt3QkFBQ2lCLEdBQUcsRUFBQyxDQUFxQjt3QkFBQ0MsR0FBRyxFQUFDLENBQUU7d0JBQUNDLE1BQU0sRUFBRSxFQUFFO3dCQUFFQyxLQUFLLEVBQUUsRUFBRTs7Ozs7Ozs7OztZQUdoRWpCLHVEQUFtQix3RUFDakJGLG9EQUFNO2dCQUNMZSxFQUFFLEVBQUMsQ0FBTTtnQkFDVEssUUFBUSxFQUFDLENBQW1CO2dCQUM1QkosR0FBRyxFQUFDLENBQWlCOzs7Ozs7O2lCQUd2QixDQUFFOzs7QUFJVixDQUFDO0dBbENLYixhQUFhO0tBQWJBLGFBQWE7QUFvQ25CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy1TY3JlZW4vaW5kZXguanN4PzY4YjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IGxvYWRpbmdQYWNlIGZyb20gXCIuLi8uLi9jb21tb24vbG9hZGluZ1BhY2UuanNcIjtcclxuaW1wb3J0IGFwcERhdGEgZnJvbSBcIi4uLy4uL2RhdGEvYXBwLmpzb25cIjtcclxuXHJcbmNvbnN0IExvYWRpbmdTY3JlZW4gPSAoKSA9PiB7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBib2R5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuICAgIGlmIChhcHBEYXRhLnNob3dMb2FkaW5nKSB7XHJcbiAgICAgIGxvYWRpbmdQYWNlKCk7XHJcblxyXG4gICAgICBpZiAoYm9keUVsLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGVYXCIpKSB7XHJcbiAgICAgICAgYm9keUVsLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlWFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keUVsLmNsYXNzTGlzdC5hZGQoXCJoaWRlWFwiKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2FwcERhdGEuc2hvd0xvYWRpbmcgPT09IHRydWUgPyBcInNob3dYXCIgOiBcImhpZGVYXCJ9YH0+XHJcbiAgICAgICAgPGRpdiBpZD1cInByZWxvYWRlclwiPlxyXG4gICAgICAgICAgey8qIDxoND5cclxuICAgICAgICAgIGhhbXphXHJcbiAgICAgICAgICA8L2g0PiAqL31cclxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2xvZ28tbGlnaHQucG5nXCIgYWx0PVwiXCIgaGVpZ2h0PXsyMH0gd2lkdGg9ezUwfT48L0ltYWdlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2FwcERhdGEuc2hvd0xvYWRpbmcgPyAoXHJcbiAgICAgICAgPFNjcmlwdFxyXG4gICAgICAgICAgaWQ9XCJwYWNlXCJcclxuICAgICAgICAgIHN0cmF0ZWd5PVwiYmVmb3JlSW50ZXJhY3RpdmVcIlxyXG4gICAgICAgICAgc3JjPVwiL2pzL3BhY2UubWluLmpzXCJcclxuICAgICAgICA+PC9TY3JpcHQ+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgXCJcIlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTY3JlZW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiU2NyaXB0IiwibG9hZGluZ1BhY2UiLCJhcHBEYXRhIiwiTG9hZGluZ1NjcmVlbiIsInVzZUVmZmVjdCIsImJvZHlFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNob3dMb2FkaW5nIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwic3RyYXRlZ3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Loading-Screen/index.jsx\n");

/***/ })

});