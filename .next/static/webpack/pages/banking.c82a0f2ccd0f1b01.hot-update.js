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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {\n        }));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar _this = undefined;\nvar BankIntro = function() {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"section\", {\n        className: \"intro-section section-padding pb-0\",\n        __source: {\n            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n            lineNumber: 7,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"container-fluid\",\n            __source: {\n                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"row\",\n                __source: {\n                    fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"col-lg-3 col-md-4\",\n                        __source: {\n                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                            className: \"htit sm-mb30\",\n                            __source: {\n                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                        lineNumber: 12,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Bring Of Your Prception\"\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                    __source: {\n                                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                        lineNumber: 13,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this,\n                                    children: \"Worldwide banking has entered another age. New advanced banks are showing up all over and innovation is key to progress. Each bank should disturb or confront interruption.\"\n                                })\n                            ]\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"col-lg-8 offset-lg-1 col-md-8\",\n                        __source: {\n                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AutoPlay, {\n                            __source: {\n                                fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            },\n                            __self: _this\n                        })\n                    })\n                ]\n            })\n        })\n    }));\n};\n_c = BankIntro;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BankIntro);\nvar AutoPlay = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    _inherits(AutoPlay, Component);\n    var _super = _createSuper(AutoPlay);\n    function AutoPlay() {\n        _classCallCheck(this, AutoPlay);\n        return _super.apply(this, arguments);\n    }\n    _createClass(AutoPlay, [\n        {\n            key: \"render\",\n            value: function render() {\n                var settings = {\n                    arrow: true,\n                    infinite: true,\n                    slidesToShow: 3,\n                    slidesToScroll: 1,\n                    // autoplay: true,\n                    speed: 2000,\n                    autoplaySpeed: 2000,\n                    cssEase: \"linear\",\n                    className: \"sliderBoxOfTranform\",\n                    responsive: [\n                        {\n                            breakpoint: 1300,\n                            settings: {\n                                slidesToShow: 2,\n                                slidesToScroll: 1\n                            }\n                        },\n                        {\n                            breakpoint: 992,\n                            settings: {\n                                slidesToShow: 1,\n                                slidesToScroll: 1\n                            }\n                        }, \n                    ]\n                };\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    __source: {\n                        fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_slick__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({\n                    }, settings, {\n                        __source: {\n                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 9\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"innerDiv\",\n                                __source: {\n                                    fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        __source: {\n                                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Banking Specialist\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                        __source: {\n                                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: [\n                                            \"Put customers at the centre of everything you do. \",\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                                __source: {\n                                                    fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 65\n                                                },\n                                                __self: this\n                                            }),\n                                            \"Reimagine the customer experience and offer hyper-personalised services when and where they are needed.\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"innerDiv\",\n                                __source: {\n                                    fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        __source: {\n                                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Aligning costs with success\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                        __source: {\n                                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: [\n                                            \"Optimise your technology stack and bring costs into line with success. \",\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                                __source: {\n                                                    fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 24\n                                                },\n                                                __self: this\n                                            }),\n                                            \"Your roadmap to modernisation can begin anywhere, with clear milestones along the way.\"\n                                        ]\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"innerDiv\",\n                                __source: {\n                                    fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 11\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                                        __source: {\n                                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Let data drive decisions\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        __source: {\n                                            fileName: \"E:\\\\Smart Solution\\\\ssssco\\\\ssssco\\\\src\\\\components\\\\Bank-intro\\\\index.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 13\n                                        },\n                                        __self: this,\n                                        children: \"Harness the power of data, artificial intelligence and advanced analytics. As a data-driven bank, you can eliminate guesswork, transform processing and uncover new opportunities.\"\n                                    })\n                                ]\n                            })\n                        ]\n                    }))\n                }));\n            }\n        }\n    ]);\n    return AutoPlay;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\nvar _c;\n$RefreshReg$(_c, \"BankIntro\");\n\n\n;\r\n    var _a, _b;\r\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n    // to extract CSS. For backwards compatibility, we need to check we're in a\r\n    // browser context before continuing.\r\n    if (typeof self !== 'undefined' &&\r\n        // AMP / No-JS mode does not inject these helpers:\r\n        '$RefreshHelpers$' in self) {\r\n        var currentExports = module.__proto__.exports;\r\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n        // This cannot happen in MainTemplate because the exports mismatch between\r\n        // templating and execution.\r\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n        // A module can be accepted automatically based on its exports, e.g. when\r\n        // it is a Refresh Boundary.\r\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n            // Save the previous exports on update so we can compare the boundary\r\n            // signatures.\r\n            module.hot.dispose(function (data) {\r\n                data.prevExports = currentExports;\r\n            });\r\n            // Unconditionally accept an update to this module, we'll check if it's\r\n            // still a Refresh Boundary later.\r\n            module.hot.accept();\r\n            // This field is set when the previous version of this module was a\r\n            // Refresh Boundary, letting us know we need to check for invalidation or\r\n            // enqueue an update.\r\n            if (prevExports !== null) {\r\n                // A boundary can become ineligible if its exports are incompatible\r\n                // with the previous exports.\r\n                //\r\n                // For example, if you add/remove/change exports, we'll want to\r\n                // re-execute the importing modules, and force those components to\r\n                // re-render. Similarly, if you convert a class component to a\r\n                // function, we want to invalidate the boundary.\r\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                    module.hot.invalidate();\r\n                }\r\n                else {\r\n                    self.$RefreshHelpers$.scheduleUpdate();\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            // Since we just executed the code for the module, it's possible that the\r\n            // new exports made it ineligible for being a boundary.\r\n            // We only care about the case when we were _previously_ a boundary,\r\n            // because we already accepted this update (accidental side effect).\r\n            var isNoLongerABoundary = prevExports !== null;\r\n            if (isNoLongerABoundary) {\r\n                module.hot.invalidate();\r\n            }\r\n        }\r\n    }\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CYW5rLWludHJvL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdoQyxHQUFLLENBQUNHLFNBQVMsR0FBRyxRQUFRLEdBQUYsQ0FBQztJQUN2QixNQUFNLHNFQUNIQyxDQUFPO1FBQUNDLFNBQVMsRUFBQyxDQUFvQzs7Ozs7Ozt1RkFDcERDLENBQUc7WUFBQ0QsU0FBUyxFQUFDLENBQWlCOzs7Ozs7OzRGQUM3QkMsQ0FBRztnQkFBQ0QsU0FBUyxFQUFDLENBQUs7Ozs7Ozs7O3lGQUNqQkMsQ0FBRzt3QkFBQ0QsU0FBUyxFQUFDLENBQW1COzs7Ozs7O3dHQUMvQkMsQ0FBRzs0QkFBQ0QsU0FBUyxFQUFDLENBQWM7Ozs7Ozs7O3FHQUMxQkUsQ0FBRTs7Ozs7Ozs4Q0FBQyxDQUF1Qjs7cUdBQzFCQyxDQUFDOzs7Ozs7OzhDQUFDLENBSUg7Ozs7O3lGQUdIRixDQUFHO3dCQUFDRCxTQUFTLEVBQUMsQ0FBK0I7Ozs7Ozs7dUdBQzNDSSxRQUFROzs7Ozs7Ozs7Ozs7O0FBTXJCLENBQUM7S0F0QktOLFNBQVM7QUF3QmYsK0RBQWVBLFNBQVMsRUFBQztJQUVuQk0sUUFBUSxpQkFBZCxRQUFROztjQUFGQSxRQUFROzhCQUFSQSxRQUFRO2FBQVJBLFFBQVE7OEJBQVJBLFFBQVE7OztpQkFBUkEsUUFBUTs7WUFDWkMsR0FBTSxFQUFOQSxDQUFNO21CQUFOQSxRQUFRLENBQVJBLE1BQU0sR0FBRyxDQUFDO2dCQUNSLEdBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQUM7b0JBQ2hCQyxLQUFLLEVBQUUsSUFBSTtvQkFDWEMsUUFBUSxFQUFFLElBQUk7b0JBQ2RDLFlBQVksRUFBRSxDQUFDO29CQUNmQyxjQUFjLEVBQUUsQ0FBQztvQkFDakIsRUFBa0I7b0JBQ2xCQyxLQUFLLEVBQUUsSUFBSTtvQkFDWEMsYUFBYSxFQUFFLElBQUk7b0JBQ25CQyxPQUFPLEVBQUUsQ0FBUTtvQkFDakJiLFNBQVMsRUFBRSxDQUFxQjtvQkFDaENjLFVBQVUsRUFBRSxDQUFDO3dCQUNYLENBQUM7NEJBQ0NDLFVBQVUsRUFBRSxJQUFJOzRCQUNoQlQsUUFBUSxFQUFFLENBQUM7Z0NBQ1RHLFlBQVksRUFBRSxDQUFDO2dDQUNmQyxjQUFjLEVBQUUsQ0FBQzs0QkFDbkIsQ0FBQzt3QkFDSCxDQUFDO3dCQUNELENBQUM7NEJBQ0NLLFVBQVUsRUFBRSxHQUFHOzRCQUNmVCxRQUFRLEVBQUUsQ0FBQztnQ0FDVEcsWUFBWSxFQUFFLENBQUM7Z0NBQ2ZDLGNBQWMsRUFBRSxDQUFDOzRCQUNuQixDQUFDO3dCQUNILENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2dCQUNELE1BQU0sc0VBQ0hULENBQUc7Ozs7Ozs7b0dBQ0RKLG1EQUFNO3VCQUFLUyxRQUFROzs7Ozs7OztrR0FDakJMLENBQUc7Z0NBQUNELFNBQVMsRUFBQyxDQUFVOzs7Ozs7Ozt5R0FDdEJnQixDQUFFOzs7Ozs7O2tEQUFDLENBQWtCOzswR0FDckJiLENBQUM7Ozs7Ozs7OzRDQUFDLENBQ2lEO2lIQUFDYyxDQUFFOzs7Ozs7Ozs0Q0FBRyxDQUcxRDs7Ozs7a0dBR0RoQixDQUFHO2dDQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs7eUdBQ3RCZ0IsQ0FBRTs7Ozs7OztrREFBQyxDQUEyQjs7MEdBQzlCYixDQUFDOzs7Ozs7Ozs0Q0FBQyxDQUVRO2lIQUFDYyxDQUFFOzs7Ozs7Ozs0Q0FBRyxDQUdqQjs7Ozs7a0dBR0RoQixDQUFHO2dDQUFDRCxTQUFTLEVBQUMsQ0FBVTs7Ozs7Ozs7eUdBQ3RCZ0IsQ0FBRTs7Ozs7OztrREFBQyxDQUF3Qjs7eUdBQzNCYixDQUFDOzs7Ozs7O2tEQUFDLENBSUg7Ozs7Ozs7WUFPVixDQUFDOzs7V0FoRUdDLFFBQVE7RUFBU1IsNENBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmFuay1pbnRyby9pbmRleC5qc3g/NTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5cclxuY29uc3QgQmFua0ludHJvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJpbnRyby1zZWN0aW9uIHNlY3Rpb24tcGFkZGluZyBwYi0wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJodGl0IHNtLW1iMzBcIj5cclxuICAgICAgICAgICAgICA8aDQ+QnJpbmcgT2YgWW91ciBQcmNlcHRpb248L2g0PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgV29ybGR3aWRlIGJhbmtpbmcgaGFzIGVudGVyZWQgYW5vdGhlciBhZ2UuIE5ldyBhZHZhbmNlZCBiYW5rc1xyXG4gICAgICAgICAgICAgICAgYXJlIHNob3dpbmcgdXAgYWxsIG92ZXIgYW5kIGlubm92YXRpb24gaXMga2V5IHRvIHByb2dyZXNzLiBFYWNoXHJcbiAgICAgICAgICAgICAgICBiYW5rIHNob3VsZCBkaXN0dXJiIG9yIGNvbmZyb250IGludGVycnVwdGlvbi5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IG9mZnNldC1sZy0xIGNvbC1tZC04XCI+XHJcbiAgICAgICAgICAgIDxBdXRvUGxheSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5rSW50cm87XHJcblxyXG5jbGFzcyBBdXRvUGxheSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICAgIGFycm93OiB0cnVlLFxyXG4gICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgLy8gYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIHNwZWVkOiAyMDAwLFxyXG4gICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxyXG4gICAgICBjc3NFYXNlOiBcImxpbmVhclwiLFxyXG4gICAgICBjbGFzc05hbWU6IFwic2xpZGVyQm94T2ZUcmFuZm9ybVwiLFxyXG4gICAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogMTMwMCxcclxuICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJEaXZcIj5cclxuICAgICAgICAgICAgPGgzPkJhbmtpbmcgU3BlY2lhbGlzdDwvaDM+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFB1dCBjdXN0b21lcnMgYXQgdGhlIGNlbnRyZSBvZiBldmVyeXRoaW5nIHlvdSBkby4gPGJyIC8+XHJcbiAgICAgICAgICAgICAgUmVpbWFnaW5lIHRoZSBjdXN0b21lciBleHBlcmllbmNlIGFuZCBvZmZlciBoeXBlci1wZXJzb25hbGlzZWRcclxuICAgICAgICAgICAgICBzZXJ2aWNlcyB3aGVuIGFuZCB3aGVyZSB0aGV5IGFyZSBuZWVkZWQuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJEaXZcIj5cclxuICAgICAgICAgICAgPGgzPkFsaWduaW5nIGNvc3RzIHdpdGggc3VjY2VzczwvaDM+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIE9wdGltaXNlIHlvdXIgdGVjaG5vbG9neSBzdGFjayBhbmQgYnJpbmcgY29zdHMgaW50byBsaW5lIHdpdGhcclxuICAgICAgICAgICAgICBzdWNjZXNzLiA8YnIgLz5cclxuICAgICAgICAgICAgICBZb3VyIHJvYWRtYXAgdG8gbW9kZXJuaXNhdGlvbiBjYW4gYmVnaW4gYW55d2hlcmUsIHdpdGggY2xlYXJcclxuICAgICAgICAgICAgICBtaWxlc3RvbmVzIGFsb25nIHRoZSB3YXkuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJEaXZcIj5cclxuICAgICAgICAgICAgPGgzPkxldCBkYXRhIGRyaXZlIGRlY2lzaW9uczwvaDM+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIEhhcm5lc3MgdGhlIHBvd2VyIG9mIGRhdGEsIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIGFuZCBhZHZhbmNlZFxyXG4gICAgICAgICAgICAgIGFuYWx5dGljcy4gQXMgYSBkYXRhLWRyaXZlbiBiYW5rLCB5b3UgY2FuIGVsaW1pbmF0ZSBndWVzc3dvcmssXHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtIHByb2Nlc3NpbmcgYW5kIHVuY292ZXIgbmV3IG9wcG9ydHVuaXRpZXMuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJTbGlkZXIiLCJCYW5rSW50cm8iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDQiLCJwIiwiQXV0b1BsYXkiLCJyZW5kZXIiLCJzZXR0aW5ncyIsImFycm93IiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwiYXV0b3BsYXlTcGVlZCIsImNzc0Vhc2UiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImgzIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Bank-intro/index.jsx\n");

/***/ })

});