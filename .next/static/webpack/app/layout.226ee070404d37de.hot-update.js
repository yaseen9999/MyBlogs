"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/Authlinks/authlink.jsx":
/*!*******************************************!*\
  !*** ./components/Authlinks/authlink.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _authlink_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authlink.module.css */ \"(app-pages-browser)/./components/Authlinks/authlink.module.css\");\n/* harmony import */ var _authlink_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_authlink_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _app_redux_userslice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/redux/userslice */ \"(app-pages-browser)/./app/redux/userslice.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Authlink = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const id = dispatch((0,_app_redux_userslice__WEBPACK_IMPORTED_MODULE_4__.loadUserid)());\n        console.log(id);\n    }, [\n        dispatch\n    ]);\n    const status = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user.isLoggedIn);\n    console.log(status);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: status === false || null || undefined || !status ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: (_authlink_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n            href: \"\",\n            children: \"Login\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\components\\\\Authlinks\\\\authlink.jsx\",\n            lineNumber: 25,\n            columnNumber: 10\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"write\",\n                    children: \"Write\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\components\\\\Authlinks\\\\authlink.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 10\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_authlink_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                    children: \"logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yasin\\\\blog\\\\components\\\\Authlinks\\\\authlink.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 10\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false);\n};\n_s(Authlink, \"Q+WDt6rCnSlrXwzJvJhTV3QZGPc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = Authlink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Authlink);\nvar _c;\n$RefreshReg$(_c, \"Authlink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQXV0aGxpbmtzL2F1dGhsaW5rLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNzQztBQUNUO0FBQ2E7QUFDQTtBQUNBO0FBQ1M7QUFHbkQsTUFBTU8sV0FBVzs7SUFDZixNQUFNQyxXQUFVSCx3REFBV0E7SUFFM0JKLGdEQUFTQSxDQUFDO1FBRVYsTUFBTVEsS0FBR0QsU0FBVUYsZ0VBQVVBO1FBQzdCSSxRQUFRQyxHQUFHLENBQUNGO0lBQ1osR0FBRTtRQUFDRDtLQUFTO0lBRVosTUFBTUksU0FBU1Isd0RBQVdBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsSUFBSSxDQUFDQyxVQUFVO0lBQzNETCxRQUFRQyxHQUFHLENBQUNDO0lBQ1oscUJBQ0U7a0JBQ0NBLFdBQVMsU0FBUyxRQUFRSSxhQUFhLENBQUNKLHVCQUVwQyw4REFBQ1YsaURBQUlBO1lBQUNlLFdBQVdkLGtFQUFXO1lBQUVnQixNQUFLO3NCQUFHOzs7OztzQ0FFdkM7OzhCQUNDLDhEQUFDakIsaURBQUlBO29CQUFFaUIsTUFBSzs4QkFBUTs7Ozs7OzhCQUNwQiw4REFBQ0M7b0JBQUtILFdBQVdkLGtFQUFXOzhCQUFFOzs7Ozs7Ozs7QUFPdkM7R0ExQk1JOztRQUNZRixvREFBV0E7UUFRWkQsb0RBQVdBOzs7S0FUdEJHO0FBNEJOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXV0aGxpbmtzL2F1dGhsaW5rLmpzeD8zODY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSAgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hdXRobGluay5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvYWRVc2VyaWQgfSBmcm9tICdAL2FwcC9yZWR1eC91c2Vyc2xpY2UnO1xyXG5cclxuXHJcbmNvbnN0IEF1dGhsaW5rID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID11c2VEaXNwYXRjaCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICBcclxuICBjb25zdCBpZD1kaXNwYXRjaCggbG9hZFVzZXJpZCgpKTtcclxuICBjb25zb2xlLmxvZyhpZClcclxuICB9LFtkaXNwYXRjaF0pXHJcbiAgXHJcbiAgY29uc3Qgc3RhdHVzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLmlzTG9nZ2VkSW4pO1xyXG4gIGNvbnNvbGUubG9nKHN0YXR1cylcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIHtzdGF0dXM9PT1mYWxzZSB8fCBudWxsIHx8IHVuZGVmaW5lZCB8fCAhc3RhdHVzPyhcclxuICAgIFxyXG4gICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSBocmVmPVwiXCI+TG9naW48L0xpbms+XHJcbiAgICApOihcclxuICAgICAgICA8PlxyXG4gICAgICAgICA8TGluayAgaHJlZj1cIndyaXRlXCI+V3JpdGU8L0xpbms+XHJcbiAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PmxvZ291dDwvc3Bhbj5cclxuICAgICAgICBcclxuICAgICAgICA8Lz5cclxuICAgICAgICl9XHJcbiAgXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhsaW5rXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkxpbmsiLCJzdHlsZXMiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwibG9hZFVzZXJpZCIsIkF1dGhsaW5rIiwiZGlzcGF0Y2giLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwidW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwibGluayIsImhyZWYiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Authlinks/authlink.jsx\n"));

/***/ })

});