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

/***/ "./src/components/Bank-intro/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/Bank-intro/index.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar _this = undefined;\nvar BankIntro = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        className: \"intro-section section-padding pb-0\",\n        __source: {\n            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"container-fluid\",\n            __source: {\n                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"row\",\n                __source: {\n                    fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"col-lg-3 col-md-4\",\n                        __source: {\n                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"htit sm-mb30\",\n                            __source: {\n                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                        lineNumber: 12,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Bring Of Your Prception\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                        lineNumber: 13,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Worldwide banking has entered another age. New advanced banks are showing up all over and innovation is key to progress. Each bank should disturb or confront interruption.\"\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"col-lg-8 offset-lg-1 col-md-8\",\n                        __source: {\n                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AutoPlay, {\n                            __source: {\n                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_c = BankIntro;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BankIntro);\nvar AutoPlay = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    _inherits(AutoPlay, Component);\n    var _super = _createSuper(AutoPlay);\n    function AutoPlay() {\n        _classCallCheck(this, AutoPlay);\n        return _super.apply(this, arguments);\n    }\n    _createClass(AutoPlay, [\n        {\n            key: \"render\",\n            value: function render() {\n                var settings = {\n                    arrow: true,\n                    infinite: true,\n                    slidesToShow: 3,\n                    slidesToScroll: 1,\n                    // autoplay: true,\n                    speed: 2000,\n                    autoplaySpeed: 2000,\n                    cssEase: \"linear\",\n                    className: \"sliderBoxOfTranform\",\n                    responsive: [\n                        {\n                            breakpoint: 1300,\n                            settings: {\n                                slidesToShow: 2,\n                                slidesToScroll: 1\n                            }\n                        },\n                        {\n                            breakpoint: 992,\n                            settings: {\n                                slidesToShow: 1,\n                                slidesToScroll: 1\n                            }\n                        }, \n                    ]\n                };\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"container\",\n                    __source: {\n                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"row\",\n                        __source: {\n                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({\n                        }, settings, {\n                            __source: {\n                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"innerDiv\",\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                            __source: {\n                                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"Banking Specialist\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                            __source: {\n                                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: [\n                                                \"Put customers at the centre of everything you do. \",\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                                    __source: {\n                                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 67\n                                                    },\n                                                    __self: this\n                                                }),\n                                                \"Reimagine the customer experience and offer hyper-personalised services when and where they are needed.\"\n                                            ]\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"innerDiv\",\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                            __source: {\n                                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"Technical Knowledge\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                            __source: {\n                                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                                lineNumber: 75,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: [\n                                                \"Optimise your technology stack and bring costs into line with success. \",\n                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                                    __source: {\n                                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 26\n                                                    },\n                                                    __self: this\n                                                }),\n                                                \"Your roadmap to modernisation can begin anywhere, with clear milestones along the way.\"\n                                            ]\n                                        })\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                    className: \"innerDiv\",\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 13\n                                    },\n                                    __self: this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                            __source: {\n                                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"A worldwide Player\"\n                                        }),\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                            __source: {\n                                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 15\n                                            },\n                                            __self: this,\n                                            children: \"Harness the power of data, artificial intelligence and advanced analytics. As a data-driven bank, you can eliminate guesswork, transform processing and uncover new opportunities.\"\n                                        })\n                                    ]\n                                })\n                            ]\n                        }))\n                    })\n                }));\n            }\n        }\n    ]);\n    return AutoPlay;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\nvar _c;\n$RefreshReg$(_c, \"BankIntro\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CYW5rLWludHJvL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdoQyxHQUFLLENBQUNHLFNBQVMsR0FBRyxRQUFRLEdBQUYsQ0FBQztJQUN2QixNQUFNLHNFQUNIQyxDQUFPO1FBQUNDLFNBQVMsRUFBQyxDQUFvQzs7Ozs7Ozt1RkFDcERDLENBQUc7WUFBQ0QsU0FBUyxFQUFDLENBQWlCOzs7Ozs7OzRGQUM3QkMsQ0FBRztnQkFBQ0QsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7O3lGQUNqQkMsQ0FBRzt3QkFBQ0QsU0FBUyxFQUFDLENBQW1COzs7Ozs7O3dHQUMvQkMsQ0FBRzs0QkFBQ0QsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7O3FHQUMxQkUsQ0FBRTs7Ozs7Ozs4Q0FBQyxDQUF1Qjs7cUdBQzFCQyxDQUFDOzs7Ozs7OzhDQUFDLENBSUg7Ozs7O3lGQUdIRixDQUFHO3dCQUFDRCxTQUFTLEVBQUMsQ0FBK0I7Ozs7Ozs7dUdBQzNDSSxRQUFROzs7Ozs7Ozs7Ozs7O0FBTXJCLENBQUM7S0F0QktOLFNBQVM7QUF3QmYsK0RBQWVBLFNBQVMsRUFBQztJQUVuQk0sUUFBUSxpQkFBZCxRQUFROztjQUFGQSxRQUFROzhCQUFSQSxRQUFRO2FBQVJBLFFBQVE7OEJBQVJBLFFBQVE7OztpQkFBUkEsUUFBUTs7WUFDWkMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQUM7b0JBQ2hCQyxLQUFLLEVBQUUsSUFBSTtvQkFDWEMsUUFBUSxFQUFFLElBQUk7b0JBQ2RDLFlBQVksRUFBRSxDQUFDO29CQUNmQyxjQUFjLEVBQUUsQ0FBQztvQkFDakIsRUFBa0I7b0JBQ2xCQyxLQUFLLEVBQUUsSUFBSTtvQkFDWEMsYUFBYSxFQUFFLElBQUk7b0JBQ25CQyxPQUFPLEVBQUUsQ0FBUTtvQkFDakJiLFNBQVMsRUFBRSxDQUFxQjtvQkFDaENjLFVBQVUsRUFBRSxDQUFDO3dCQUNYLENBQUM7NEJBQ0NDLFVBQVUsRUFBRSxJQUFJOzRCQUNoQlQsUUFBUSxFQUFFLENBQUM7Z0NBQ1RHLFlBQVksRUFBRSxDQUFDO2dDQUNmQyxjQUFjLEVBQUUsQ0FBQzs0QkFDbkIsQ0FBQzt3QkFDSCxDQUFDO3dCQUNELENBQUM7NEJBQ0NLLFVBQVUsRUFBRSxHQUFHOzRCQUNmVCxRQUFRLEVBQUUsQ0FBQztnQ0FDVEcsWUFBWSxFQUFFLENBQUM7Z0NBQ2ZDLGNBQWMsRUFBRSxDQUFDOzRCQUNuQixDQUFDO3dCQUNILENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUNELE1BQU0sc0VBQ0hULENBQUc7b0JBQUNELFNBQVMsRUFBQyxDQUFXOzs7Ozs7O21HQUN2QkMsQ0FBRzt3QkFBQ0QsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7d0dBQ2pCSCxtREFBTTsyQkFBS1MsUUFBUTs7Ozs7Ozs7c0dBQ2pCTCxDQUFHO29DQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs7NkdBQ3RCZ0IsQ0FBRTs7Ozs7OztzREFBQyxDQUFrQjs7OEdBQ3JCYixDQUFDOzs7Ozs7OztnREFBQyxDQUNpRDtxSEFBQ2MsQ0FBRTs7Ozs7Ozs7Z0RBQUcsQ0FHMUQ7Ozs7O3NHQUdEaEIsQ0FBRztvQ0FBQ0QsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7OzZHQUN0QmdCLENBQUU7Ozs7Ozs7c0RBQUMsQ0FBbUI7OzhHQUN0QmIsQ0FBQzs7Ozs7Ozs7Z0RBQUMsQ0FFUTtxSEFBQ2MsQ0FBRTs7Ozs7Ozs7Z0RBQUcsQ0FHakI7Ozs7O3NHQUdEaEIsQ0FBRztvQ0FBQ0QsU0FBUyxFQUFDLENBQVU7Ozs7Ozs7OzZHQUN0QmdCLENBQUU7Ozs7Ozs7c0RBQUMsQ0FBa0I7OzZHQUNyQmIsQ0FBQzs7Ozs7OztzREFBQyxDQUlIOzs7Ozs7OztZQU1aLENBQUM7OztXQWhFR0MsUUFBUTtFQUFTUiw0Q0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CYW5rLWludHJvL2luZGV4LmpzeD81MGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcblxyXG5jb25zdCBCYW5rSW50cm8gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImludHJvLXNlY3Rpb24gc2VjdGlvbi1wYWRkaW5nIHBiLTBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImh0aXQgc20tbWIzMFwiPlxyXG4gICAgICAgICAgICAgIDxoND5CcmluZyBPZiBZb3VyIFByY2VwdGlvbjwvaDQ+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBXb3JsZHdpZGUgYmFua2luZyBoYXMgZW50ZXJlZCBhbm90aGVyIGFnZS4gTmV3IGFkdmFuY2VkIGJhbmtzXHJcbiAgICAgICAgICAgICAgICBhcmUgc2hvd2luZyB1cCBhbGwgb3ZlciBhbmQgaW5ub3ZhdGlvbiBpcyBrZXkgdG8gcHJvZ3Jlc3MuIEVhY2hcclxuICAgICAgICAgICAgICAgIGJhbmsgc2hvdWxkIGRpc3R1cmIgb3IgY29uZnJvbnQgaW50ZXJydXB0aW9uLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggb2Zmc2V0LWxnLTEgY29sLW1kLThcIj5cclxuICAgICAgICAgICAgPEF1dG9QbGF5IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbmtJbnRybztcclxuXHJcbmNsYXNzIEF1dG9QbGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgICAgYXJyb3c6IHRydWUsXHJcbiAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAvLyBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDIwMDAsXHJcbiAgICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICAgIGNzc0Vhc2U6IFwibGluZWFyXCIsXHJcbiAgICAgIGNsYXNzTmFtZTogXCJzbGlkZXJCb3hPZlRyYW5mb3JtXCIsXHJcbiAgICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiAxMzAwLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lckRpdlwiPlxyXG4gICAgICAgICAgICAgIDxoMz5CYW5raW5nIFNwZWNpYWxpc3Q8L2gzPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgUHV0IGN1c3RvbWVycyBhdCB0aGUgY2VudHJlIG9mIGV2ZXJ5dGhpbmcgeW91IGRvLiA8YnIgLz5cclxuICAgICAgICAgICAgICAgIFJlaW1hZ2luZSB0aGUgY3VzdG9tZXIgZXhwZXJpZW5jZSBhbmQgb2ZmZXIgaHlwZXItcGVyc29uYWxpc2VkXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlcyB3aGVuIGFuZCB3aGVyZSB0aGV5IGFyZSBuZWVkZWQuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJEaXZcIj5cclxuICAgICAgICAgICAgICA8aDM+VGVjaG5pY2FsIEtub3dsZWRnZTwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBPcHRpbWlzZSB5b3VyIHRlY2hub2xvZ3kgc3RhY2sgYW5kIGJyaW5nIGNvc3RzIGludG8gbGluZSB3aXRoXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzLiA8YnIgLz5cclxuICAgICAgICAgICAgICAgIFlvdXIgcm9hZG1hcCB0byBtb2Rlcm5pc2F0aW9uIGNhbiBiZWdpbiBhbnl3aGVyZSwgd2l0aCBjbGVhclxyXG4gICAgICAgICAgICAgICAgbWlsZXN0b25lcyBhbG9uZyB0aGUgd2F5LlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyRGl2XCI+XHJcbiAgICAgICAgICAgICAgPGgzPkEgd29ybGR3aWRlIFBsYXllcjwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBIYXJuZXNzIHRoZSBwb3dlciBvZiBkYXRhLCBhcnRpZmljaWFsIGludGVsbGlnZW5jZSBhbmQgYWR2YW5jZWRcclxuICAgICAgICAgICAgICAgIGFuYWx5dGljcy4gQXMgYSBkYXRhLWRyaXZlbiBiYW5rLCB5b3UgY2FuIGVsaW1pbmF0ZSBndWVzc3dvcmssXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gcHJvY2Vzc2luZyBhbmQgdW5jb3ZlciBuZXcgb3Bwb3J0dW5pdGllcy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiU2xpZGVyIiwiQmFua0ludHJvIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImg0IiwicCIsIkF1dG9QbGF5IiwicmVuZGVyIiwic2V0dGluZ3MiLCJhcnJvdyIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsImF1dG9wbGF5U3BlZWQiLCJjc3NFYXNlIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJoMyIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Bank-intro/index.jsx\n");

/***/ })

});