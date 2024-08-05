"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/write/page",{

/***/ "(app-pages-browser)/./app/write/page.jsx":
/*!****************************!*\
  !*** ./app/write/page.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _write_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./write.module.css */ \"(app-pages-browser)/./app/write/write.module.css\");\n/* harmony import */ var _write_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_write_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react_quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-quill/dist/quill.bubble.css */ \"(app-pages-browser)/./node_modules/react-quill/dist/quill.bubble.css\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _app_redux_userslice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/app/redux/userslice */ \"(app-pages-browser)/./app/redux/userslice.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n// Import ReactQuill dynamically to prevent SSR issues\nconst ReactQuill = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"(app-pages-browser)/./node_modules/react-quill/lib/index.js\", 23)), {\n    loadableGenerated: {\n        modules: [\n            \"app\\\\write\\\\page.jsx -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false\n});\n_c = ReactQuill;\nconst Write = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();\n    const id = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)((state)=>state.user.userid);\n    console.log(id);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_app_redux_userslice__WEBPACK_IMPORTED_MODULE_6__.loadUserid)());\n    }, [\n        dispatch\n    ]);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(value);\n    }, [\n        value\n    ]);\n    const handleSubmit = async ()=>{\n        console.log(\"publish\");\n        const formData = new FormData();\n        formData.append(\"title\", title);\n        formData.append(\"content\", value);\n        formData.append(\"imageUrl\", file);\n        formData.append(\"userid\", id);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(\"/api/post\", formData, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                }\n            });\n            console.log(\"Response:\", response.data);\n            if (response.status === 200) {\n                router.push(\"/\"); // Redirect to home page\n            }\n        } catch (error) {\n            console.log(\"Error in uploading\", error);\n        }\n    };\n    const clickHandler = ()=>{\n        setOpen((prevOpen)=>!prevOpen);\n    };\n    const handleChange = (content)=>{\n        setValue(content);\n    };\n    const modules = {\n        toolbar: [\n            [\n                {\n                    \"header\": \"1\"\n                },\n                {\n                    \"header\": \"2\"\n                },\n                {\n                    \"font\": []\n                }\n            ],\n            [\n                {\n                    size: []\n                }\n            ],\n            [\n                \"bold\",\n                \"italic\",\n                \"underline\",\n                \"strike\",\n                \"blockquote\"\n            ],\n            [\n                {\n                    \"list\": \"ordered\"\n                },\n                {\n                    \"list\": \"bullet\"\n                },\n                {\n                    \"indent\": \"-1\"\n                },\n                {\n                    \"indent\": \"+1\"\n                }\n            ],\n            [\n                \"link\",\n                \"image\",\n                \"video\"\n            ],\n            [\n                \"clean\"\n            ]\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_write_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: (e)=>setTitle(e.target.value),\n                className: (_write_module_css__WEBPACK_IMPORTED_MODULE_2___default().custominput),\n                type: \"text\",\n                placeholder: \"Title\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_write_module_css__WEBPACK_IMPORTED_MODULE_2___default().editor),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_write_module_css__WEBPACK_IMPORTED_MODULE_2___default().addbutton),\n                        onClick: clickHandler,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            src: \"/images/plus.png\",\n                            width: 16,\n                            height: 16,\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_write_module_css__WEBPACK_IMPORTED_MODULE_2___default().add),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                id: \"image\",\n                                onChange: (e)=>setFile(e.target.files[0]),\n                                style: {\n                                    display: \"none\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"image\",\n                                className: (_write_module_css__WEBPACK_IMPORTED_MODULE_2___default().addbutton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: \"/images/addimage.png\",\n                                    width: 16,\n                                    height: 16,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_write_module_css__WEBPACK_IMPORTED_MODULE_2___default().addbutton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: \"/images/video.png\",\n                                    width: 16,\n                                    height: 16,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_write_module_css__WEBPACK_IMPORTED_MODULE_2___default().addbutton),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: \"/images/extenal.png\",\n                                    width: 16,\n                                    height: 16,\n                                    alt: \"\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_write_module_css__WEBPACK_IMPORTED_MODULE_2___default().textarea),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactQuill, {\n                    theme: \"bubble\",\n                    value: value,\n                    onChange: handleChange,\n                    placeholder: \"Tell your story\",\n                    modules: modules\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_write_module_css__WEBPACK_IMPORTED_MODULE_2___default().publish),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                    sx: {\n                        \"& button\": {\n                            m: 1\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            onClick: ()=>handleSubmit(),\n                            variant: \"outlined\",\n                            size: \"medium\",\n                            children: \"Publish\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                            lineNumber: 119,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 19\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n                lineNumber: 116,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\app\\\\write\\\\page.jsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Write, \"rCdge0/E/W2kyseI4jk6sCkCf/s=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector,\n        next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter\n    ];\n});\n_c1 = Write;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Write);\nvar _c, _c1;\n$RefreshReg$(_c, \"ReactQuill\");\n$RefreshReg$(_c1, \"Write\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC93cml0ZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDWDtBQUNUO0FBQ0Y7QUFDYztBQUNqQjtBQUM2QjtBQUNKO0FBQ2hCO0FBQ0M7QUFDTTtBQUNGO0FBQ3hDLHNEQUFzRDtBQUN0RCxNQUFNYyxhQUFhSix3REFBT0EsQ0FBQyxJQUFNLDZPQUFPOzs7Ozs7SUFBa0JLLEtBQUs7O0tBQXpERDtBQUNOLE1BQU1FLFFBQVE7O0lBQ1osTUFBTUMsV0FBV1Qsd0RBQVdBO0lBQzVCLE1BQU1VLEtBQUtYLHdEQUFXQSxDQUFDLENBQUNZLFFBQVVBLE1BQU1DLElBQUksQ0FBQ0MsTUFBTTtJQUNuREMsUUFBUUMsR0FBRyxDQUFDTDtJQUNaLE1BQU1NLFNBQVNYLHNEQUFTQTtJQUN4QlgsZ0RBQVNBLENBQUM7UUFDUmUsU0FBU1IsZ0VBQVVBO0lBQ3JCLEdBQUc7UUFBQ1E7S0FBUztJQUViLE1BQU0sQ0FBQ1EsTUFBTUMsUUFBUSxHQUFHekIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDMEIsT0FBT0MsU0FBUyxHQUFHM0IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDNEIsT0FBT0MsU0FBUyxHQUFHN0IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDOEIsTUFBTUMsUUFBUSxHQUFHL0IsK0NBQVFBLENBQUM7SUFDakNDLGdEQUFTQSxDQUFDO1FBQ1JvQixRQUFRQyxHQUFHLENBQUNNO0lBQ2IsR0FBRztRQUFDQTtLQUFNO0lBQ1gsTUFBTUksZUFBZTtRQUNuQlgsUUFBUUMsR0FBRyxDQUFDO1FBRVosTUFBTVcsV0FBVyxJQUFJQztRQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFNBQVNUO1FBQ3pCTyxTQUFTRSxNQUFNLENBQUMsV0FBV1A7UUFDM0JLLFNBQVNFLE1BQU0sQ0FBQyxZQUFZTDtRQUM1QkcsU0FBU0UsTUFBTSxDQUFDLFVBQVVsQjtRQUUxQixJQUFJO1lBQ0YsTUFB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LFlBQVk7NEJBQUVDLEdBQUc7d0JBQUU7b0JBQUU7OEJBQ3RCLDRFQUFDNUI7a0NBQ0QsNEVBQUN2Qyw2REFBTUE7NEJBQUVvRCxTQUFTLElBQUkvQjs0QkFBZ0IrQyxTQUFROzRCQUFXOUIsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3pGO0dBaEhNbEM7O1FBQ2FSLG9EQUFXQTtRQUNqQkQsb0RBQVdBO1FBRVBNLGtEQUFTQTs7O01BSnBCRztBQWtITiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvd3JpdGUvcGFnZS5qc3g/YzJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi93cml0ZS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuYnViYmxlLmNzcyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9hZFVzZXJpZCB9IGZyb20gJ0AvYXBwL3JlZHV4L3VzZXJzbGljZSc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBJbXBvcnQgUmVhY3RRdWlsbCBkeW5hbWljYWxseSB0byBwcmV2ZW50IFNTUiBpc3N1ZXNcclxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1xdWlsbCcpLCB7IHNzcjogZmFsc2UgfSk7XHJcbmNvbnN0IFdyaXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci51c2VyaWQpO1xyXG4gIGNvbnNvbGUubG9nKGlkKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChsb2FkVXNlcmlkKCkpO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgfSwgW3ZhbHVlXSk7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJwdWJsaXNoXCIpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3RpdGxlJywgdGl0bGUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgdmFsdWUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZVVybCcsIGZpbGUpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCd1c2VyaWQnLCBpZCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLCBmb3JtRGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2U6XCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpOyAvLyBSZWRpcmVjdCB0byBob21lIHBhZ2VcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvciBpbiB1cGxvYWRpbmdcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oKHByZXZPcGVuKSA9PiAhcHJldk9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChjb250ZW50KSA9PiB7XHJcbiAgICBzZXRWYWx1ZShjb250ZW50KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtb2R1bGVzID0ge1xyXG4gICAgdG9vbGJhcjogW1xyXG4gICAgICBbeyAnaGVhZGVyJzogJzEnfSwgeydoZWFkZXInOiAnMid9LCB7ICdmb250JzogW10gfV0sXHJcbiAgICAgIFt7c2l6ZTogW119XSxcclxuICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlJywgJ2Jsb2NrcXVvdGUnXSxcclxuICAgICAgW3snbGlzdCc6ICdvcmRlcmVkJ30sIHsnbGlzdCc6ICdidWxsZXQnfSwgeydpbmRlbnQnOiAnLTEnfSwgeydpbmRlbnQnOiAnKzEnfV0sXHJcbiAgICAgIFsnbGluaycsICdpbWFnZScsICd2aWRlbyddLFxyXG4gICAgICBbJ2NsZWFuJ11cclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY3VzdG9taW5wdXR9XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVkaXRvcn0+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5hZGRidXR0b259IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9wbHVzLnBuZ1wiIHdpZHRoPXsxNn0gaGVpZ2h0PXsxNn0gYWx0PScnIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAge29wZW4gJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGR9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCIgY2xhc3NOYW1lPXtzdHlsZXMuYWRkYnV0dG9ufT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy9hZGRpbWFnZS5wbmdcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGFsdD0nJy8+XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkYnV0dG9ufT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltYWdlcy92aWRlby5wbmdcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGFsdD0nJy8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmFkZGJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZXMvZXh0ZW5hbC5wbmdcIiB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IGFsdD0nJyAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRhcmVhfT5cclxuICAgICAgICA8UmVhY3RRdWlsbFxyXG4gICAgICAgICAgdGhlbWU9XCJidWJibGVcIlxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGVsbCB5b3VyIHN0b3J5XCJcclxuICAgICAgICAgIG1vZHVsZXM9e21vZHVsZXN9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wdWJsaXNofSA+XHJcbiAgICAgICAgPEJveCBzeD17eyAnJiBidXR0b24nOiB7IG06IDEgfSB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgb25DbGljaz17KCk9PmhhbmRsZVN1Ym1pdCgpfSB2YXJpYW50PVwib3V0bGluZWRcIiBzaXplPVwibWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHVibGlzaFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdyaXRlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkltYWdlIiwiTGluayIsImF4aW9zIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsImxvYWRVc2VyaWQiLCJkeW5hbWljIiwiQm94IiwiQnV0dG9uIiwidXNlUm91dGVyIiwiUmVhY3RRdWlsbCIsInNzciIsIldyaXRlIiwiZGlzcGF0Y2giLCJpZCIsInN0YXRlIiwidXNlciIsInVzZXJpZCIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJvcGVuIiwic2V0T3BlbiIsInRpdGxlIiwic2V0VGl0bGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZmlsZSIsInNldEZpbGUiLCJoYW5kbGVTdWJtaXQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsImRhdGEiLCJzdGF0dXMiLCJwdXNoIiwiZXJyb3IiLCJjbGlja0hhbmRsZXIiLCJwcmV2T3BlbiIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJtb2R1bGVzIiwidG9vbGJhciIsInNpemUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImN1c3RvbWlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZWRpdG9yIiwiYnV0dG9uIiwiYWRkYnV0dG9uIiwib25DbGljayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiYWRkIiwiZmlsZXMiLCJzdHlsZSIsImRpc3BsYXkiLCJsYWJlbCIsImh0bWxGb3IiLCJ0ZXh0YXJlYSIsInRoZW1lIiwicHVibGlzaCIsInN4IiwibSIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/write/page.jsx\n"));

/***/ })

});