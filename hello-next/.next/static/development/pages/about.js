(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\about.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5CMac%5CDesktop%5CCodingProject%5CNextJs%5Chello-next%5Cpages%5Cabout.js!./":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5CMac%5CDesktop%5CCodingProject%5CNextJs%5Chello-next%5Cpages%5Cabout.js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/about", function() {
      var mod = __webpack_require__(/*! ./pages/about.js */ "./pages/about.js")
      if(true) {
        module.hot.accept(/*! ./pages/about.js */ "./pages/about.js", function() {
          if(!next.router.components["/about"]) return
          var updatedPage = __webpack_require__(/*! ./pages/about.js */ "./pages/about.js")
          next.router.update("/about", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Mac\\Desktop\\CodingProject\\NextJs\\hello-next\\pages\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function About() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("section", {
    id: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), __jsx("img", {
    src: "https://s3.amazonaws.com/codecademy-content/courses/web-101/unit-6/htmlcss1-img_burger-logo.svg",
    alt: "Davie's Burgers Logo",
    id: "logo",
    width: "500px",
    height: "500px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Create a burger!"), __jsx("section", {
    "class": "protein",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("label", {
    "for": "patty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "What type of protein would you like?"), __jsx("input", {
    type: "text",
    name: "patty",
    id: "patty",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), __jsx("section", {
    "class": "patties",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("label", {
    "for": "amount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "How many patties would you like?"), __jsx("input", {
    type: "number",
    name: "amount",
    id: "amount",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("section", {
    "class": "cooked",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("label", {
    "for": "doneness",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "How do you want your patty cooked"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Rare"), __jsx("input", {
    type: "range",
    name: "doneness",
    id: "doneness",
    value: "3",
    min: "1",
    max: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Well-Done"), __jsx("section", {
    "class": "toppings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "What toppings would you like?"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("input", {
    id: "lettuce",
    name: "topping",
    type: "checkbox",
    value: "lettuce",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("label", {
    "for": "lettuce",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Lettuce"), __jsx("input", {
    id: "tomato",
    name: "topping",
    type: "checkbox",
    value: "tomato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("label", {
    "for": "tomato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Tomato"), __jsx("input", {
    id: "cheese",
    name: "topping",
    type: "checkbox",
    value: "cheese",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("label", {
    "for": "cheese",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Cheese"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("section", {
    "class": "spice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("label", {
    "for": "spiceLevel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "How how would you like it"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Mild"), __jsx("input", {
    type: "range",
    name: "spiceLevel",
    id: "spiceLevel",
    value: "3",
    min: "1",
    max: "5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Hot"));
}

/***/ }),

/***/ 3:
/*!***********************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5CMac%5CDesktop%5CCodingProject%5CNextJs%5Chello-next%5Cpages%5Cabout.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5CMac%5CDesktop%5CCodingProject%5CNextJs%5Chello-next%5Cpages%5Cabout.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fabout&absolutePagePath=C%3A%5CUsers%5CMac%5CDesktop%5CCodingProject%5CNextJs%5Chello-next%5Cpages%5Cabout.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=about.js.map