"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/banking",{

/***/ "./src/components/backingSlide/BankingSlide.jsx":
/*!******************************************************!*\
  !*** ./src/components/backingSlide/BankingSlide.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar SimpleSlider = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    _inherits(SimpleSlider, Component);\n    var _super = _createSuper(SimpleSlider);\n    function SimpleSlider() {\n        _classCallCheck(this, SimpleSlider);\n        return _super.apply(this, arguments);\n    }\n    _createClass(SimpleSlider, [\n        {\n            key: \"render\",\n            value: function render() {\n                var settings = {\n                    dots: true,\n                    infinite: true,\n                    speed: 500,\n                    slidesToShow: 1,\n                    slidesToScroll: 1\n                };\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 7\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                            __source: {\n                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                lineNumber: 15,\n                                columnNumber: 9\n                            },\n                            __self: this,\n                            children: \" Single Item\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({\n                        }, settings, {\n                            __source: {\n                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 9\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    className: styles.slide1,\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                        lineNumber: 17,\n                                        columnNumber: 11\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        __source: {\n                                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                            lineNumber: 18,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"01\"\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                        lineNumber: 20,\n                                        columnNumber: 11\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        __source: {\n                                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                            lineNumber: 21,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"2\"\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 11\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        __source: {\n                                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"3\"\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 11\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        __source: {\n                                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"4\"\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 11\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        __source: {\n                                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"5\"\n                                    })\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 11\n                                    },\n                                    __self: this,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        __source: {\n                                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\backingSlide\\\\BankingSlide.jsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"6\"\n                                    })\n                                })\n                            ]\n                        }))\n                    ]\n                }));\n            }\n        }\n    ]);\n    return SimpleSlider;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9iYWNraW5nU2xpZGUvQmFua2luZ1NsaWRlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVhHLFlBQVksaUJBQWxCLFFBQVE7O2NBQUZBLFlBQVk7OEJBQVpBLFlBQVk7YUFBWkEsWUFBWTs4QkFBWkEsWUFBWTs7O2lCQUFaQSxZQUFZOztZQUMvQkMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQUM7b0JBQ2hCQyxJQUFJLEVBQUUsSUFBSTtvQkFDVkMsUUFBUSxFQUFFLElBQUk7b0JBQ2RDLEtBQUssRUFBRSxHQUFHO29CQUNWQyxZQUFZLEVBQUUsQ0FBQztvQkFDZkMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBQ0QsTUFBTSx1RUFDSEMsQ0FBRzs7Ozs7Ozs7NkZBQ0RDLENBQUU7Ozs7Ozs7c0NBQUMsQ0FBWTs7OEZBQ2ZWLG1EQUFNOzJCQUFLRyxRQUFROzs7Ozs7OztxR0FDakJNLENBQUc7b0NBQUNFLFNBQVMsRUFBRUMsTUFBTSxDQUFDQyxNQUFNOzs7Ozs7O21IQUMxQkMsQ0FBRTs7Ozs7OztrREFBQyxDQUFFOzs7cUdBRVBMLENBQUc7Ozs7Ozs7bUhBQ0RLLENBQUU7Ozs7Ozs7a0RBQUMsQ0FBQzs7O3FHQUVOTCxDQUFHOzs7Ozs7O21IQUNESyxDQUFFOzs7Ozs7O2tEQUFDLENBQUM7OztxR0FFTkwsQ0FBRzs7Ozs7OzttSEFDREssQ0FBRTs7Ozs7OztrREFBQyxDQUFDOzs7cUdBRU5MLENBQUc7Ozs7Ozs7bUhBQ0RLLENBQUU7Ozs7Ozs7a0RBQUMsQ0FBQzs7O3FHQUVOTCxDQUFHOzs7Ozs7O21IQUNESyxDQUFFOzs7Ozs7O2tEQUFDLENBQUM7Ozs7Ozs7WUFLZixDQUFDOzs7V0FsQ2tCYixZQUFZO0VBQVNGLDRDQUFTO0FBQWxCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2JhY2tpbmdTbGlkZS9CYW5raW5nU2xpZGUuanN4PzcyMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltcGxlU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDI+IFNpbmdsZSBJdGVtPC9oMj5cclxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlMX0+XHJcbiAgICAgICAgICAgIDxoMz4wMTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz4yPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPjM8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+NDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMz41PC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgzPjY8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU2xpZGVyIiwiU2ltcGxlU2xpZGVyIiwicmVuZGVyIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJzbGlkZTEiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/backingSlide/BankingSlide.jsx\n");

/***/ })

});