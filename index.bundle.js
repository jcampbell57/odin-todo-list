/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: lightsteelblue;\n    --secondary-color: steelblue;\n    --menu-color: rgb(145, 189, 224);\n    --accent-color: whitesmoke;\n    --font-color: rgb(20, 20, 20);\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    background-color: var(--background-color);\n    display: grid;\n    grid-template-columns: 250px calc(100vw - 250px);\n    grid-template-rows: 110px calc(100vh - 110px - 62px) 62px;\n    margin: 0;\n}\n\n.logo {\n    max-height: 90%;\n    margin-right: 8px;\n    /* whitesmoke color */\n    filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(201deg) brightness(107%) contrast(92%);\n}\n\n\n\n\n\nheader {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.8);\n    z-index: 1;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n\n\n\n\n.menu {\n    background-color: var(--menu-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n}\n\n.icon {\n    height: 1.2rem;\n}\n\n.menuOptions {\n    list-style: none;\n    padding: 0;\n}\n\n.menuOptions>li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.projectsHeader {\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n\n.menuOptions li,\n.projectsHeader,\n.contentTitle,\n.addTaskBtn,\n.addProjectForm,\ntbody>tr {\n    margin: 10px 1rem;\n    padding: 8px;\n    border-radius: 8px;    \n}\n\ntbody>tr:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n}\n\n.menuOptions li:hover,\n.addTaskBtn:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.menuOptions li:active,\n.addTaskBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n\n\n\n\n/* form styling */\n\n#shown {\n    display: block;\n}\n\n#hidden {\n    display: none;\n}\n\n.addProjectForm,\n.addTaskForm {\n    padding: 0;\n}\n\n.addTaskForm {\n    margin: 10px;\n}\n\n.formRow{\n    display: flex;\n    justify-content:space-around;\n    gap: 8px;\n\n}\n\n#formButtons {\n    margin-top: 8px;\n}\n\n#newTaskInput,\n#newProjectInput {\n    width: 100%;\n    font-size: 1.2rem;\n    padding: 6px;\n    border: none;\n    border-radius: 8px;\n}\n\n.addBtn,\n.cancelBtn {\n    width: 100%;\n    padding: 8px;\n    border-radius: 8px;    \n    font-size: 1rem;\n}\n\n.addBtn {\n    background-color: lightgreen;\n    border: 2px solid hsl(120, 73%, 55%);\n}\n\n.cancelBtn {\n    background-color: lightpink;\n    border: 2px solid hsl(351, 100%, 70%);\n\n}\n\n.addBtn:hover,\n.cancelBtn:hover {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.addBtn:active,\n.cancelBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n\n\n\n\n.content {\n    background-color: var(--background-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n    /* padding: 20px; */\n}\n\n/* .contentTitle {\n    border: 1px solid red;\n}\n\n.taskContainer {\n    border: 1px solid red;\n}\n\n.addTaskBtn {\n    border: 1px solid red;\n} */\n\n\n\n\n\n/* table styling */\n\ntable {\n    /* border: 1px solid red; */\n    width: 100%;\n}\n\ntbody>tr {\n    box-sizing: border-box;\n    /* width: 100%; */\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    /* border: 2px solid blue; */\n}\n\ntd {\n    /* border: 2px solid pink; */\n    display: flex;\n    /* align-items: center; */\n    /* justify-content: center; */\n}\n\n.checkboxContainer:hover,\n.dateContainer:hover,\n.editContainer:hover,\n.closeContainer:hover {\n    cursor: pointer;\n}\n\n.checkboxContainer:active {\n    filter: invert(18%) sepia(76%) saturate(2312%) hue-rotate(109deg) brightness(100%) contrast(107%);\n}\n\n.editContainer:active,\n.closeContainer:active {\n    filter: invert(7%) sepia(51%) saturate(5951%) hue-rotate(350deg) brightness(140%) contrast(136%);\n}\n\n.taskContainer {\n\n}\n\ntd img {\n    /* border: 2px solid blue; */\n    color: #006400;\n}\n\n\n\n\nfooter {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: auto;\n}\n\n.github {\n    height: 24px;\n    margin-left: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;IAClC,4BAA4B;IAC5B,gCAAgC;IAChC,0BAA0B;IAC1B,6BAA6B;AACjC;;AAEA;IACI,wHAAwH;IACxH,yCAAyC;IACzC,aAAa;IACb,gDAAgD;IAChD,yDAAyD;IACzD,SAAS;AACb;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,qBAAqB;IACrB,gGAAgG;AACpG;;;;;;AAMA;IACI,mBAAmB;IACnB,wCAAwC;IACxC,0BAA0B;IAC1B,yCAAyC;IACzC,UAAU;IACV,aAAa;IACb,aAAa;IACb,mBAAmB;AACvB;;;;;;AAMA;IACI,mCAAmC;IACnC,wBAAwB;IACxB,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;;;;;;IAMI,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;IACzC,yCAAyC;AAC7C;;AAEA;;IAEI,yCAAyC;IACzC,yCAAyC;IACzC,eAAe;AACnB;;AAEA;;IAEI,yCAAyC;AAC7C;;;;;;AAMA,iBAAiB;;AAEjB;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,QAAQ;;AAEZ;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,WAAW;IACX,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,oCAAoC;AACxC;;AAEA;IACI,2BAA2B;IAC3B,qCAAqC;;AAEzC;;AAEA;;IAEI,yCAAyC;IACzC,eAAe;AACnB;;AAEA;;IAEI,yCAAyC;AAC7C;;;;;;AAMA;IACI,yCAAyC;IACzC,wBAAwB;IACxB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;;;;;;;;;;GAUG;;;;;;AAMH,kBAAkB;;AAElB;IACI,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,4BAA4B;AAChC;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,yBAAyB;IACzB,6BAA6B;AACjC;;AAEA;;;;IAII,eAAe;AACnB;;AAEA;IACI,iGAAiG;AACrG;;AAEA;;IAEI,gGAAgG;AACpG;;AAEA;;AAEA;;AAEA;IACI,4BAA4B;IAC5B,cAAc;AAClB;;;;;AAKA;IACI,mBAAmB;IACnB,wCAAwC;IACxC,0BAA0B;IAC1B,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":[":root {\n    --background-color: lightsteelblue;\n    --secondary-color: steelblue;\n    --menu-color: rgb(145, 189, 224);\n    --accent-color: whitesmoke;\n    --font-color: rgb(20, 20, 20);\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    background-color: var(--background-color);\n    display: grid;\n    grid-template-columns: 250px calc(100vw - 250px);\n    grid-template-rows: 110px calc(100vh - 110px - 62px) 62px;\n    margin: 0;\n}\n\n.logo {\n    max-height: 90%;\n    margin-right: 8px;\n    /* whitesmoke color */\n    filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(201deg) brightness(107%) contrast(92%);\n}\n\n\n\n\n\nheader {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.8);\n    z-index: 1;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n\n\n\n\n.menu {\n    background-color: var(--menu-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n}\n\n.icon {\n    height: 1.2rem;\n}\n\n.menuOptions {\n    list-style: none;\n    padding: 0;\n}\n\n.menuOptions>li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.projectsHeader {\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n\n.menuOptions li,\n.projectsHeader,\n.contentTitle,\n.addTaskBtn,\n.addProjectForm,\ntbody>tr {\n    margin: 10px 1rem;\n    padding: 8px;\n    border-radius: 8px;    \n}\n\ntbody>tr:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n}\n\n.menuOptions li:hover,\n.addTaskBtn:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.menuOptions li:active,\n.addTaskBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n\n\n\n\n/* form styling */\n\n#shown {\n    display: block;\n}\n\n#hidden {\n    display: none;\n}\n\n.addProjectForm,\n.addTaskForm {\n    padding: 0;\n}\n\n.addTaskForm {\n    margin: 10px;\n}\n\n.formRow{\n    display: flex;\n    justify-content:space-around;\n    gap: 8px;\n\n}\n\n#formButtons {\n    margin-top: 8px;\n}\n\n#newTaskInput,\n#newProjectInput {\n    width: 100%;\n    font-size: 1.2rem;\n    padding: 6px;\n    border: none;\n    border-radius: 8px;\n}\n\n.addBtn,\n.cancelBtn {\n    width: 100%;\n    padding: 8px;\n    border-radius: 8px;    \n    font-size: 1rem;\n}\n\n.addBtn {\n    background-color: lightgreen;\n    border: 2px solid hsl(120, 73%, 55%);\n}\n\n.cancelBtn {\n    background-color: lightpink;\n    border: 2px solid hsl(351, 100%, 70%);\n\n}\n\n.addBtn:hover,\n.cancelBtn:hover {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.addBtn:active,\n.cancelBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n\n\n\n\n.content {\n    background-color: var(--background-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n    /* padding: 20px; */\n}\n\n/* .contentTitle {\n    border: 1px solid red;\n}\n\n.taskContainer {\n    border: 1px solid red;\n}\n\n.addTaskBtn {\n    border: 1px solid red;\n} */\n\n\n\n\n\n/* table styling */\n\ntable {\n    /* border: 1px solid red; */\n    width: 100%;\n}\n\ntbody>tr {\n    box-sizing: border-box;\n    /* width: 100%; */\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    /* border: 2px solid blue; */\n}\n\ntd {\n    /* border: 2px solid pink; */\n    display: flex;\n    /* align-items: center; */\n    /* justify-content: center; */\n}\n\n.checkboxContainer:hover,\n.dateContainer:hover,\n.editContainer:hover,\n.closeContainer:hover {\n    cursor: pointer;\n}\n\n.checkboxContainer:active {\n    filter: invert(18%) sepia(76%) saturate(2312%) hue-rotate(109deg) brightness(100%) contrast(107%);\n}\n\n.editContainer:active,\n.closeContainer:active {\n    filter: invert(7%) sepia(51%) saturate(5951%) hue-rotate(350deg) brightness(140%) contrast(136%);\n}\n\n.taskContainer {\n\n}\n\ntd img {\n    /* border: 2px solid blue; */\n    color: #006400;\n}\n\n\n\n\nfooter {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: auto;\n}\n\n.github {\n    height: 24px;\n    margin-left: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_check_decagram_outline_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/check-decagram-outline.svg */ "./src/assets/check-decagram-outline.svg");
/* harmony import */ var _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/checklist.svg */ "./src/assets/checklist.svg");
/* harmony import */ var _assets_calendar_today_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/calendar-today.svg */ "./src/assets/calendar-today.svg");
/* harmony import */ var _assets_calendar_range_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/calendar-range.svg */ "./src/assets/calendar-range.svg");
/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/plus.svg */ "./src/assets/plus.svg");
/* harmony import */ var _assets_checkbox_blank_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/checkbox-blank.svg */ "./src/assets/checkbox-blank.svg");
/* harmony import */ var _assets_checkbox_marked_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/checkbox-marked.svg */ "./src/assets/checkbox-marked.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_GitHub_light_32px_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/GitHub-light-32px.png */ "./src/assets/GitHub-light-32px.png");

const body = document.querySelector('body');













// Icon generators 
const _createChecklistIcon = (li) => {
    const checklistIcon = document.createElement('img');
    checklistIcon.src = _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_1__;
    checklistIcon.setAttribute('class', 'icon')
    li.appendChild(checklistIcon);
}

const _createAdditionIcon = (li) => {
    const newAdditionIcon = document.createElement('img');
    newAdditionIcon.src = _assets_plus_svg__WEBPACK_IMPORTED_MODULE_4__;
    newAdditionIcon.setAttribute('class', 'icon')
    li.appendChild(newAdditionIcon);
}

const _createTodayIcon = (li) => {
    const _createTodayIcon = document.createElement('img');
    _createTodayIcon.src = _assets_calendar_today_svg__WEBPACK_IMPORTED_MODULE_2__;
    _createTodayIcon.setAttribute('class', 'icon')
    li.appendChild(_createTodayIcon);
}

const _createWeekIcon = (li) => {
    const _createWeekIcon = document.createElement('img');
    _createWeekIcon.src = _assets_calendar_range_svg__WEBPACK_IMPORTED_MODULE_3__;
    _createWeekIcon.setAttribute('class', 'icon')
    li.appendChild(_createWeekIcon);
}


// Form generator
const _createForm = (form) => {
    const formRow1 = document.createElement('div');
    formRow1.setAttribute('class', 'formRow');
    // assign input ID according to class of form
    if (form.getAttribute('class') === 'addProjectForm') {
        formRow1.innerHTML = "<input type='text' id='newProjectInput' name='newProjectInput'></input>";
    } else if (form.getAttribute('class') === 'addTaskForm') {
        formRow1.innerHTML = "<input type='text' id='newTaskInput' name='newTaskInput'></input>";
    } else {
        console.log('this is strange')
    }

    const formRow2 = document.createElement('div');
    formRow2.setAttribute('class', 'formRow');
    formRow2.setAttribute('id', 'formButtons');

    const addBtn = document.createElement('button');
    addBtn.setAttribute('class', 'addBtn');
    addBtn.innerText = "add";
    formRow2.appendChild(addBtn);

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('class', 'cancelBtn');
    cancelBtn.innerText = "cancel";
    formRow2.appendChild(cancelBtn);

    form.appendChild(formRow1);
    form.appendChild(formRow2);
}


const _createHeader = () => {
    const header = document.createElement('header')
    
    // display title
    const logo = document.createElement('img');
    logo.src = _assets_check_decagram_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
    logo.target = '_blank';
    logo.setAttribute('class', 'logo');
    header.appendChild(logo);
    
    const title = document.createElement('h1');
    title.textContent = 'Things To Do';
    header.appendChild(title);
    
    body.appendChild(header);
}


const _createMenu = () => {
    const menu = document.createElement('div');
    menu.setAttribute('class', 'menu');

    // Main menu
    const menuOptions = document.createElement('ul');
    menuOptions.setAttribute('class', 'menuOptions');
    
    const allTasks = document.createElement('li');
    _createChecklistIcon(allTasks);
    const allTasksText = document.createElement('span');
    allTasksText.textContent = 'All tasks';
    allTasks.appendChild(allTasksText)
    menuOptions.appendChild(allTasks);

    const dueToday = document.createElement('li');
    _createTodayIcon(dueToday);
    const dueTodayText = document.createElement('span');
    dueTodayText.innerText = 'Due today';
    dueToday.appendChild(dueTodayText);
    menuOptions.appendChild(dueToday);

    const dueWeek = document.createElement('li');
    _createWeekIcon(dueWeek);
    const dueWeekText = document.createElement('span');
    dueWeekText.innerText = 'Due this week';
    dueWeek.appendChild(dueWeekText);
    menuOptions.appendChild(dueWeek);


    // Projects menu
    const projectsHeader = document.createElement('p');
    projectsHeader.setAttribute('class', 'projectsHeader')
    projectsHeader.textContent = 'Projects';

    const projectsMenu = document.createElement('ul');
    projectsMenu.setAttribute('class', 'menuOptions');
    projectsMenu.setAttribute('id', 'projectsMenu');


    // Add project button
    const addTaskContainer = document.createElement('ul');
    addTaskContainer.setAttribute('class', 'menuOptions');
    const addProject = document.createElement('li');
    addProject.setAttribute('class', 'addProjectBtn')
    _createAdditionIcon(addProject)
    const addProjectText = document.createElement('span');
    addProjectText.innerText = 'Add Project';
    addProject.appendChild(addProjectText)
    addTaskContainer.appendChild(addProject)
    // projectsMenu.appendChild(addTaskContainer);


    // Generate and hide new project form
    const addProjectForm = document.createElement('form');
    addProjectForm.setAttribute('class', 'addProjectForm');
    addProjectForm.setAttribute('id', 'hidden')
    addProjectForm.method = 'get';
    _createForm(addProjectForm);
    addTaskContainer.appendChild(addProjectForm)


    menu.appendChild(menuOptions);
    menu.appendChild(projectsHeader);
    menu.appendChild(projectsMenu);
    menu.appendChild(addTaskContainer);

    body.appendChild(menu);
}


const _createContent = () => {
    const content = document.createElement('div');
    content.setAttribute('class', 'content');

    const contentTitle = document.createElement('h2');
    contentTitle.setAttribute('class', 'contentTitle');
    contentTitle.innerText = 'All tasks';

    const taskContainer = document.createElement('table');
    taskContainer.setAttribute('class', 'menuOptions');
    taskContainer.innerHTML = 
        `<thead>
            <tr>
                <th class='checkboxContainer'></th>
                <th class='taskContainer'></th>
                <th class='dateContainer'></th>
                <th class='editContainer'></th>
                <th class='closeContainer'></th>
            </tr>
        </thead>
        <tbody id='taskList'>
            <tr id='notComplete'>
                <td class='checkboxContainer'><img src='${_assets_checkbox_blank_svg__WEBPACK_IMPORTED_MODULE_5__}' class='icon'></td>
                <td class='taskContainer'>do chores</td>
                <td class='dateContainer'>no date</td>
                <td class='editContainer'><img src='${_assets_edit_svg__WEBPACK_IMPORTED_MODULE_8__}' class='icon'></td>
                <td class='closeContainer'><img src='${_assets_delete_svg__WEBPACK_IMPORTED_MODULE_7__}' class='icon' alt='delete' id='removeRow'></td>
            </tr>
            <tr id='notComplete'>
                <td class='checkboxContainer'><img src='${_assets_checkbox_blank_svg__WEBPACK_IMPORTED_MODULE_5__}' class='icon'></td>
                <td class='taskContainer'>do chores2</td>
                <td class='dateContainer'>no date</td>
                <td class='editContainer'><img src='${_assets_edit_svg__WEBPACK_IMPORTED_MODULE_8__}' class='icon'></td>
                <td class='closeContainer'><img src='${_assets_delete_svg__WEBPACK_IMPORTED_MODULE_7__}' class='icon' alt='delete' id='removeRow'></td>
            </tr>
        </tbody>`
    

    // Add task button
    const addTaskContainer = document.createElement('ul');
    addTaskContainer.setAttribute('class', 'menuOptions');
    const addTask = document.createElement('li');
    addTask.setAttribute('class', 'addTaskBtn');
    _createAdditionIcon(addTask);
    const addTaskText = document.createElement('span');
    addTaskText.innerText = 'Add task';
    addTask.appendChild(addTaskText);
    addTaskContainer.appendChild(addTask);

    // Generate and hide new task form
    const addTaskForm = document.createElement('form');
    addTaskForm.setAttribute('class', 'addTaskForm');
    addTaskForm.setAttribute('id', 'hidden')
    addTaskForm.method = 'get';
    _createForm(addTaskForm);

    
    content.appendChild(contentTitle);
    content.appendChild(taskContainer);
    content.appendChild(addTaskContainer);
    content.appendChild(addTaskForm);

    body.appendChild(content);
}


const _createFooter = () => {
    const footer = document.createElement('footer')

    const copyright = document.createElement('p');
    copyright.textContent = `Copyright © ${new Date().getFullYear()} jcampbell57`;
  
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/jcampbell57';
    githubLink.target = '_blank';
  
    const newGithubIcon = document.createElement('img');
    newGithubIcon.src = _assets_GitHub_light_32px_png__WEBPACK_IMPORTED_MODULE_9__;
    newGithubIcon.setAttribute('class', 'github');

    githubLink.appendChild(newGithubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    body.appendChild(footer);
}


const initialize = () => {
    _createHeader();
    _createMenu();
    _createContent();
    _createFooter();
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialize);

/***/ }),

/***/ "./src/assets/GitHub-light-32px.png":
/*!******************************************!*\
  !*** ./src/assets/GitHub-light-32px.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "266ca63177bca6f330a7.png";

/***/ }),

/***/ "./src/assets/calendar-range.svg":
/*!***************************************!*\
  !*** ./src/assets/calendar-range.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eff04cf8dead8e68a7ba.svg";

/***/ }),

/***/ "./src/assets/calendar-today.svg":
/*!***************************************!*\
  !*** ./src/assets/calendar-today.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3faae0cf01e4ecd160ef.svg";

/***/ }),

/***/ "./src/assets/check-decagram-outline.svg":
/*!***********************************************!*\
  !*** ./src/assets/check-decagram-outline.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "430096b7d803d3aff26f.svg";

/***/ }),

/***/ "./src/assets/checkbox-blank.svg":
/*!***************************************!*\
  !*** ./src/assets/checkbox-blank.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcc9a49980346cbbe75f.svg";

/***/ }),

/***/ "./src/assets/checkbox-marked.svg":
/*!****************************************!*\
  !*** ./src/assets/checkbox-marked.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9176c6d3b82f0db4593a.svg";

/***/ }),

/***/ "./src/assets/checklist.svg":
/*!**********************************!*\
  !*** ./src/assets/checklist.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bfe3d460ccbd8aaeef2.svg";

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c11ca64583db9195885d.svg";

/***/ }),

/***/ "./src/assets/plus.svg":
/*!*****************************!*\
  !*** ./src/assets/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_checkbox_blank_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/checkbox-blank.svg */ "./src/assets/checkbox-blank.svg");
/* harmony import */ var _assets_checkbox_marked_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/checkbox-marked.svg */ "./src/assets/checkbox-marked.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/checklist.svg */ "./src/assets/checklist.svg");
// Page initialization



(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])();


// Event listeners
// import { addProject } from './tasks';
// import { addTask } from './tasks';

// generate content (important)
const taskList = document.querySelector('#taskList');


const _generateContent = () => {

}

;





const _displayTask = (newTask) => {
    const newRow = document.createElement('tr');
    newRow.setAttribute('id', 'notComplete');
    newRow.innerHTML = 
        `<tr id='notComplete'>
            <td class='checkboxContainer'><img src='${_assets_checkbox_blank_svg__WEBPACK_IMPORTED_MODULE_2__}' class='icon'></td>
            <td class='taskContainer'>${newTask}</td>
            <td class='dateContainer'>no date</td>
            <td class='editContainer'><img src='${_assets_edit_svg__WEBPACK_IMPORTED_MODULE_5__}' class='icon'></td>
            <td class='closeContainer'><img src='${_assets_delete_svg__WEBPACK_IMPORTED_MODULE_4__}' class='icon' alt='delete' id='removeRow'></td>
        </tr>`;
    taskList.appendChild(newRow);
}


// add project
const _showAddProjectForm = () => {
    if (addTaskForm.getAttribute('id') === 'shown') {
        addTaskBtn.setAttribute('id', 'shown')
        addTaskForm.setAttribute('id', 'hidden')
    }
    addProjectBtn.setAttribute('id', 'hidden')
    addProjectForm.setAttribute('id', 'shown')
}

const addProjectBtn = document.querySelector('.addProjectBtn');
addProjectBtn.addEventListener('click', _showAddProjectForm);

const _hideAddProjectForm = () => {
    addProjectBtn.setAttribute('id', 'shown')
    addProjectForm.setAttribute('id', 'hidden')
    newProjectInput.value = '';
}





// REDUNDANT WITH CORE.JS -- CONSOLODATE
;
const _createChecklistIcon = (li) => {
    const checklistIcon = document.createElement('img');
    checklistIcon.src = _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_6__;
    checklistIcon.setAttribute('class', 'icon')
    li.appendChild(checklistIcon);
}

const addProj = (newProj) => {
    const projectsMenu = document.querySelector('#projectsMenu');
    const sampleProj = document.createElement('li');
    _createChecklistIcon(sampleProj);
    const sampleProjText = document.createElement('span');
    sampleProjText.textContent = newProj;
    sampleProj.appendChild(sampleProjText)
    projectsMenu.appendChild(sampleProj);
} 
// REDUNDANT WITH CORE.JS -- CONSOLODATE





const newProjectInput = document.querySelector('#newProjectInput');
const addProjectForm = document.querySelector('.addProjectForm')
addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.submitter.getAttribute('class') === 'addBtn') {
        // submitProject function goes here
        const newProj = newProjectInput.value
        addProj(newProj);
    }
    _hideAddProjectForm();
});


// add task
const _showAddTaskForm = () => {
    if (addProjectForm.getAttribute('id') === 'shown') {
        addProjectBtn.setAttribute('id', 'shown')
        addProjectForm.setAttribute('id', 'hidden')    
    }
    addTaskBtn.setAttribute('id', 'hidden')
    addTaskForm.setAttribute('id', 'shown')
}
const addTaskBtn = document.querySelector('.addTaskBtn');
addTaskBtn.addEventListener('click', _showAddTaskForm);

const _hideAddTaskForm = () => {
    addTaskBtn.setAttribute('id', 'shown')
    addTaskForm.setAttribute('id', 'hidden')
    newTaskInput.value = '';
}

const newTaskInput = document.querySelector('#newTaskInput');
const addTaskForm = document.querySelector('.addTaskForm');
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.submitter.getAttribute('class') === 'addBtn') {
        // submitTask function goes here
        const newTask = newTaskInput.value
        _displayTask(newTask);
    }
    _hideAddTaskForm();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogc3RlZWxibHVlO1xcbiAgICAtLW1lbnUtY29sb3I6IHJnYigxNDUsIDE4OSwgMjI0KTtcXG4gICAgLS1hY2NlbnQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDIwLCAyMCwgMjApO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBjYWxjKDEwMHZ3IC0gMjUwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDExMHB4IGNhbGMoMTAwdmggLSAxMTBweCAtIDYycHgpIDYycHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAvKiB3aGl0ZXNtb2tlIGNvbG9yICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDgwJSkgaHVlLXJvdGF0ZSgyMDFkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoOTIlKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4IHJnYigwLCAwLCAwLCAwLjgpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWVudU9wdGlvbnM+bGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tZW51T3B0aW9ucyBsaSxcXG4ucHJvamVjdHNIZWFkZXIsXFxuLmNvbnRlbnRUaXRsZSxcXG4uYWRkVGFza0J0bixcXG4uYWRkUHJvamVjdEZvcm0sXFxudGJvZHk+dHIge1xcbiAgICBtYXJnaW46IDEwcHggMXJlbTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7ICAgIFxcbn1cXG5cXG50Ym9keT50cjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1LCAwLjMpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLm1lbnVPcHRpb25zIGxpOmhvdmVyLFxcbi5hZGRUYXNrQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUsIDAuMyk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51T3B0aW9ucyBsaTphY3RpdmUsXFxuLmFkZFRhc2tCdG46YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcblxcblxcblxcblxcbi8qIGZvcm0gc3R5bGluZyAqL1xcblxcbiNzaG93biB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZFByb2plY3RGb3JtLFxcbi5hZGRUYXNrRm9ybSB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hZGRUYXNrRm9ybSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmZvcm1Sb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogOHB4O1xcblxcbn1cXG5cXG4jZm9ybUJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbiNuZXdUYXNrSW5wdXQsXFxuI25ld1Byb2plY3RJbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmFkZEJ0bixcXG4uY2FuY2VsQnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAgICBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgaHNsKDEyMCwgNzMlLCA1NSUpO1xcbn1cXG5cXG4uY2FuY2VsQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBoc2woMzUxLCAxMDAlLCA3MCUpO1xcblxcbn1cXG5cXG4uYWRkQnRuOmhvdmVyLFxcbi5jYW5jZWxCdG46aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkQnRuOmFjdGl2ZSxcXG4uY2FuY2VsQnRuOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcbn1cXG5cXG4vKiAuY29udGVudFRpdGxlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmFkZFRhc2tCdG4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufSAqL1xcblxcblxcblxcblxcblxcbi8qIHRhYmxlIHN0eWxpbmcgKi9cXG5cXG50YWJsZSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRib2R5PnRyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG50ZCB7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHBpbms7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXI6aG92ZXIsXFxuLmRhdGVDb250YWluZXI6aG92ZXIsXFxuLmVkaXRDb250YWluZXI6aG92ZXIsXFxuLmNsb3NlQ29udGFpbmVyOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXI6YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg3NiUpIHNhdHVyYXRlKDIzMTIlKSBodWUtcm90YXRlKDEwOWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDclKTtcXG59XFxuXFxuLmVkaXRDb250YWluZXI6YWN0aXZlLFxcbi5jbG9zZUNvbnRhaW5lcjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGludmVydCg3JSkgc2VwaWEoNTElKSBzYXR1cmF0ZSg1OTUxJSkgaHVlLXJvdGF0ZSgzNTBkZWcpIGJyaWdodG5lc3MoMTQwJSkgY29udHJhc3QoMTM2JSk7XFxufVxcblxcbi50YXNrQ29udGFpbmVyIHtcXG5cXG59XFxuXFxudGQgaW1nIHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cXG4gICAgY29sb3I6ICMwMDY0MDA7XFxufVxcblxcblxcblxcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5naXRodWIge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdIQUF3SDtJQUN4SCx5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLGdEQUFnRDtJQUNoRCx5REFBeUQ7SUFDekQsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0dBQWdHO0FBQ3BHOzs7Ozs7QUFNQTtJQUNJLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLHlDQUF5QztJQUN6QyxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7Ozs7OztBQU1BO0lBQ0ksbUNBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTs7Ozs7O0lBTUksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMseUNBQXlDO0FBQzdDOztBQUVBOztJQUVJLHlDQUF5QztJQUN6Qyx5Q0FBeUM7SUFDekMsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSx5Q0FBeUM7QUFDN0M7Ozs7OztBQU1BLGlCQUFpQjs7QUFFakI7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixRQUFROztBQUVaOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHFDQUFxQzs7QUFFekM7O0FBRUE7O0lBRUkseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUkseUNBQXlDO0FBQzdDOzs7Ozs7QUFNQTtJQUNJLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7Ozs7Ozs7OztHQVVHOzs7Ozs7QUFNSCxrQkFBa0I7O0FBRWxCO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsNkJBQTZCO0FBQ2pDOztBQUVBOzs7O0lBSUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlHQUFpRztBQUNyRzs7QUFFQTs7SUFFSSxnR0FBZ0c7QUFDcEc7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjs7Ozs7QUFLQTtJQUNJLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgLS1tZW51LWNvbG9yOiByZ2IoMTQ1LCAxODksIDIyNCk7XFxuICAgIC0tYWNjZW50LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLWZvbnQtY29sb3I6IHJnYigyMCwgMjAsIDIwKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggY2FsYygxMDB2dyAtIDI1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMTBweCBjYWxjKDEwMHZoIC0gMTEwcHggLSA2MnB4KSA2MnB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgLyogd2hpdGVzbW9rZSBjb2xvciAqL1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ4MCUpIGh1ZS1yb3RhdGUoMjAxZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDkyJSk7XFxufVxcblxcblxcblxcblxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDZweCByZ2IoMCwgMCwgMCwgMC44KTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmljb24ge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLm1lbnVPcHRpb25zIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1lbnVPcHRpb25zPmxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0c0hlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMgbGksXFxuLnByb2plY3RzSGVhZGVyLFxcbi5jb250ZW50VGl0bGUsXFxuLmFkZFRhc2tCdG4sXFxuLmFkZFByb2plY3RGb3JtLFxcbnRib2R5PnRyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDFyZW07XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAgICBcXG59XFxuXFxudGJvZHk+dHI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSwgMC4zKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5tZW51T3B0aW9ucyBsaTpob3ZlcixcXG4uYWRkVGFza0J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1LCAwLjMpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMgbGk6YWN0aXZlLFxcbi5hZGRUYXNrQnRuOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBmb3JtIHN0eWxpbmcgKi9cXG5cXG4jc2hvd24ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2hpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGRQcm9qZWN0Rm9ybSxcXG4uYWRkVGFza0Zvcm0ge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYWRkVGFza0Zvcm0ge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5mb3JtUm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDhweDtcXG5cXG59XFxuXFxuI2Zvcm1CdXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4jbmV3VGFza0lucHV0LFxcbiNuZXdQcm9qZWN0SW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5hZGRCdG4sXFxuLmNhbmNlbEJ0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgICAgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgxMjAsIDczJSwgNTUlKTtcXG59XFxuXFxuLmNhbmNlbEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcXG4gICAgYm9yZGVyOiAycHggc29saWQgaHNsKDM1MSwgMTAwJSwgNzAlKTtcXG5cXG59XFxuXFxuLmFkZEJ0bjpob3ZlcixcXG4uY2FuY2VsQnRuOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZEJ0bjphY3RpdmUsXFxuLmNhbmNlbEJ0bjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cXG59XFxuXFxuLyogLmNvbnRlbnRUaXRsZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5hZGRUYXNrQnRuIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn0gKi9cXG5cXG5cXG5cXG5cXG5cXG4vKiB0YWJsZSBzdHlsaW5nICovXFxuXFxudGFibGUge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50Ym9keT50ciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxudGQge1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBwaW5rOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG59XFxuXFxuLmNoZWNrYm94Q29udGFpbmVyOmhvdmVyLFxcbi5kYXRlQ29udGFpbmVyOmhvdmVyLFxcbi5lZGl0Q29udGFpbmVyOmhvdmVyLFxcbi5jbG9zZUNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNoZWNrYm94Q29udGFpbmVyOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDE4JSkgc2VwaWEoNzYlKSBzYXR1cmF0ZSgyMzEyJSkgaHVlLXJvdGF0ZSgxMDlkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTA3JSk7XFxufVxcblxcbi5lZGl0Q29udGFpbmVyOmFjdGl2ZSxcXG4uY2xvc2VDb250YWluZXI6YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNyUpIHNlcGlhKDUxJSkgc2F0dXJhdGUoNTk1MSUpIGh1ZS1yb3RhdGUoMzUwZGVnKSBicmlnaHRuZXNzKDE0MCUpIGNvbnRyYXN0KDEzNiUpO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuXFxufVxcblxcbnRkIGltZyB7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7ICovXFxuICAgIGNvbG9yOiAjMDA2NDAwO1xcbn1cXG5cXG5cXG5cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmltcG9ydCBsb2dvSWNvbiBmcm9tICcuL2Fzc2V0cy9jaGVjay1kZWNhZ3JhbS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgY2hlY2tsaXN0IGZyb20gJy4vYXNzZXRzL2NoZWNrbGlzdC5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyVG9kYXkgZnJvbSAnLi9hc3NldHMvY2FsZW5kYXItdG9kYXkuc3ZnJztcbmltcG9ydCBjYWxlbmRhcldlZWsgZnJvbSAnLi9hc3NldHMvY2FsZW5kYXItcmFuZ2Uuc3ZnJztcbmltcG9ydCBhZGRpdGlvbkljb24gZnJvbSAnLi9hc3NldHMvcGx1cy5zdmcnO1xuaW1wb3J0IGNoZWNrYm94QmxhbmsgZnJvbSAnLi9hc3NldHMvY2hlY2tib3gtYmxhbmsuc3ZnJztcbmltcG9ydCBjaGVja2JveE1hcmtlZCBmcm9tICcuL2Fzc2V0cy9jaGVja2JveC1tYXJrZWQuc3ZnJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vYXNzZXRzL2RlbGV0ZS5zdmcnO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4vYXNzZXRzL2VkaXQuc3ZnJztcbmltcG9ydCBnaXRodWJJY29uIGZyb20gJy4vYXNzZXRzL0dpdEh1Yi1saWdodC0zMnB4LnBuZyc7XG5cblxuLy8gSWNvbiBnZW5lcmF0b3JzIFxuY29uc3QgX2NyZWF0ZUNoZWNrbGlzdEljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBjaGVja2xpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2hlY2tsaXN0SWNvbi5zcmMgPSBjaGVja2xpc3Q7XG4gICAgY2hlY2tsaXN0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKGNoZWNrbGlzdEljb24pO1xufVxuXG5jb25zdCBfY3JlYXRlQWRkaXRpb25JY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgbmV3QWRkaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3QWRkaXRpb25JY29uLnNyYyA9IGFkZGl0aW9uSWNvbjtcbiAgICBuZXdBZGRpdGlvbkljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdBZGRpdGlvbkljb24pO1xufVxuXG5jb25zdCBfY3JlYXRlVG9kYXlJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgX2NyZWF0ZVRvZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIF9jcmVhdGVUb2RheUljb24uc3JjID0gY2FsZW5kYXJUb2RheTtcbiAgICBfY3JlYXRlVG9kYXlJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRvZGF5SWNvbik7XG59XG5cbmNvbnN0IF9jcmVhdGVXZWVrSWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IF9jcmVhdGVXZWVrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIF9jcmVhdGVXZWVrSWNvbi5zcmMgPSBjYWxlbmRhcldlZWs7XG4gICAgX2NyZWF0ZVdlZWtJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQoX2NyZWF0ZVdlZWtJY29uKTtcbn1cblxuXG4vLyBGb3JtIGdlbmVyYXRvclxuY29uc3QgX2NyZWF0ZUZvcm0gPSAoZm9ybSkgPT4ge1xuICAgIGNvbnN0IGZvcm1Sb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvdzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtUm93Jyk7XG4gICAgLy8gYXNzaWduIGlucHV0IElEIGFjY29yZGluZyB0byBjbGFzcyBvZiBmb3JtXG4gICAgaWYgKGZvcm0uZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkUHJvamVjdEZvcm0nKSB7XG4gICAgICAgIGZvcm1Sb3cxLmlubmVySFRNTCA9IFwiPGlucHV0IHR5cGU9J3RleHQnIGlkPSduZXdQcm9qZWN0SW5wdXQnIG5hbWU9J25ld1Byb2plY3RJbnB1dCc+PC9pbnB1dD5cIjtcbiAgICB9IGVsc2UgaWYgKGZvcm0uZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkVGFza0Zvcm0nKSB7XG4gICAgICAgIGZvcm1Sb3cxLmlubmVySFRNTCA9IFwiPGlucHV0IHR5cGU9J3RleHQnIGlkPSduZXdUYXNrSW5wdXQnIG5hbWU9J25ld1Rhc2tJbnB1dCc+PC9pbnB1dD5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBzdHJhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3cyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybVJvdycpO1xuICAgIGZvcm1Sb3cyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybUJ1dHRvbnMnKTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZEJ0bicpO1xuICAgIGFkZEJ0bi5pbm5lclRleHQgPSBcImFkZFwiO1xuICAgIGZvcm1Sb3cyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYW5jZWxCdG4nKTtcbiAgICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gXCJjYW5jZWxcIjtcbiAgICBmb3JtUm93Mi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93MSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93Mik7XG59XG5cblxuY29uc3QgX2NyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIFxuICAgIC8vIGRpc3BsYXkgdGl0bGVcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9nby5zcmMgPSBsb2dvSWNvbjtcbiAgICBsb2dvLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsb2dvJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaGluZ3MgVG8gRG8nO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgXG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5cbmNvbnN0IF9jcmVhdGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudScpO1xuXG4gICAgLy8gTWFpbiBtZW51XG4gICAgY29uc3QgbWVudU9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG1lbnVPcHRpb25zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudU9wdGlvbnMnKTtcbiAgICBcbiAgICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgX2NyZWF0ZUNoZWNrbGlzdEljb24oYWxsVGFza3MpO1xuICAgIGNvbnN0IGFsbFRhc2tzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhbGxUYXNrc1RleHQudGV4dENvbnRlbnQgPSAnQWxsIHRhc2tzJztcbiAgICBhbGxUYXNrcy5hcHBlbmRDaGlsZChhbGxUYXNrc1RleHQpXG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoYWxsVGFza3MpO1xuXG4gICAgY29uc3QgZHVlVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIF9jcmVhdGVUb2RheUljb24oZHVlVG9kYXkpO1xuICAgIGNvbnN0IGR1ZVRvZGF5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkdWVUb2RheVRleHQuaW5uZXJUZXh0ID0gJ0R1ZSB0b2RheSc7XG4gICAgZHVlVG9kYXkuYXBwZW5kQ2hpbGQoZHVlVG9kYXlUZXh0KTtcbiAgICBtZW51T3B0aW9ucy5hcHBlbmRDaGlsZChkdWVUb2RheSk7XG5cbiAgICBjb25zdCBkdWVXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBfY3JlYXRlV2Vla0ljb24oZHVlV2Vlayk7XG4gICAgY29uc3QgZHVlV2Vla1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHVlV2Vla1RleHQuaW5uZXJUZXh0ID0gJ0R1ZSB0aGlzIHdlZWsnO1xuICAgIGR1ZVdlZWsuYXBwZW5kQ2hpbGQoZHVlV2Vla1RleHQpO1xuICAgIG1lbnVPcHRpb25zLmFwcGVuZENoaWxkKGR1ZVdlZWspO1xuXG5cbiAgICAvLyBQcm9qZWN0cyBtZW51XG4gICAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdHNIZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0c0hlYWRlcicpXG4gICAgcHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gICAgY29uc3QgcHJvamVjdHNNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBwcm9qZWN0c01lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIHByb2plY3RzTWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzTWVudScpO1xuXG5cbiAgICAvLyBBZGQgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBhZGRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudU9wdGlvbnMnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkUHJvamVjdEJ0bicpXG4gICAgX2NyZWF0ZUFkZGl0aW9uSWNvbihhZGRQcm9qZWN0KVxuICAgIGNvbnN0IGFkZFByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZFByb2plY3RUZXh0LmlubmVyVGV4dCA9ICdBZGQgUHJvamVjdCc7XG4gICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0VGV4dClcbiAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3QpXG4gICAgLy8gcHJvamVjdHNNZW51LmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXIpO1xuXG5cbiAgICAvLyBHZW5lcmF0ZSBhbmQgaGlkZSBuZXcgcHJvamVjdCBmb3JtXG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRQcm9qZWN0Rm9ybScpO1xuICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICBhZGRQcm9qZWN0Rm9ybS5tZXRob2QgPSAnZ2V0JztcbiAgICBfY3JlYXRlRm9ybShhZGRQcm9qZWN0Rm9ybSk7XG4gICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Rm9ybSlcblxuXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51T3B0aW9ucyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0c01lbnUpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lcik7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKG1lbnUpO1xufVxuXG5cbmNvbnN0IF9jcmVhdGVDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudCcpO1xuXG4gICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50VGl0bGUnKTtcbiAgICBjb250ZW50VGl0bGUuaW5uZXJUZXh0ID0gJ0FsbCB0YXNrcyc7XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudU9wdGlvbnMnKTtcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFxuICAgICAgICBgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nY2hlY2tib3hDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSd0YXNrQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZGF0ZUNvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2VkaXRDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdjbG9zZUNvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSBpZD0ndGFza0xpc3QnPlxuICAgICAgICAgICAgPHRyIGlkPSdub3RDb21wbGV0ZSc+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPSdjaGVja2JveENvbnRhaW5lcic+PGltZyBzcmM9JyR7Y2hlY2tib3hCbGFua30nIGNsYXNzPSdpY29uJz48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz0ndGFza0NvbnRhaW5lcic+ZG8gY2hvcmVzPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9J2RhdGVDb250YWluZXInPm5vIGRhdGU8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz0nZWRpdENvbnRhaW5lcic+PGltZyBzcmM9JyR7ZWRpdEljb259JyBjbGFzcz0naWNvbic+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9J2Nsb3NlQ29udGFpbmVyJz48aW1nIHNyYz0nJHtkZWxldGVJY29ufScgY2xhc3M9J2ljb24nIGFsdD0nZGVsZXRlJyBpZD0ncmVtb3ZlUm93Jz48L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciBpZD0nbm90Q29tcGxldGUnPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz0nY2hlY2tib3hDb250YWluZXInPjxpbWcgc3JjPScke2NoZWNrYm94Qmxhbmt9JyBjbGFzcz0naWNvbic+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9J3Rhc2tDb250YWluZXInPmRvIGNob3JlczI8L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz0nZGF0ZUNvbnRhaW5lcic+bm8gZGF0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPSdlZGl0Q29udGFpbmVyJz48aW1nIHNyYz0nJHtlZGl0SWNvbn0nIGNsYXNzPSdpY29uJz48L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz0nY2xvc2VDb250YWluZXInPjxpbWcgc3JjPScke2RlbGV0ZUljb259JyBjbGFzcz0naWNvbicgYWx0PSdkZWxldGUnIGlkPSdyZW1vdmVSb3cnPjwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PmBcbiAgICBcblxuICAgIC8vIEFkZCB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGFkZFRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRUYXNrQnRuJyk7XG4gICAgX2NyZWF0ZUFkZGl0aW9uSWNvbihhZGRUYXNrKTtcbiAgICBjb25zdCBhZGRUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRUYXNrVGV4dC5pbm5lclRleHQgPSAnQWRkIHRhc2snO1xuICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQoYWRkVGFza1RleHQpO1xuICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG5cbiAgICAvLyBHZW5lcmF0ZSBhbmQgaGlkZSBuZXcgdGFzayBmb3JtXG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRUYXNrRm9ybScpO1xuICAgIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICBhZGRUYXNrRm9ybS5tZXRob2QgPSAnZ2V0JztcbiAgICBfY3JlYXRlRm9ybShhZGRUYXNrRm9ybSk7XG5cbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0pO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuXG5jb25zdCBfY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG5cbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gamNhbXBiZWxsNTdgO1xuICBcbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcnO1xuICAgIGdpdGh1YkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIFxuICAgIGNvbnN0IG5ld0dpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdHaXRodWJJY29uLnNyYyA9IGdpdGh1Ykljb247XG4gICAgbmV3R2l0aHViSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dpdGh1YicpO1xuXG4gICAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChuZXdHaXRodWJJY29uKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cblxuY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBfY3JlYXRlSGVhZGVyKCk7XG4gICAgX2NyZWF0ZU1lbnUoKTtcbiAgICBfY3JlYXRlQ29udGVudCgpO1xuICAgIF9jcmVhdGVGb290ZXIoKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gUGFnZSBpbml0aWFsaXphdGlvblxuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9jb3JlJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbml0aWFsaXplKCk7XG5cblxuLy8gRXZlbnQgbGlzdGVuZXJzXG4vLyBpbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi90YXNrcyc7XG4vLyBpbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSAnLi90YXNrcyc7XG5cbi8vIGdlbmVyYXRlIGNvbnRlbnQgKGltcG9ydGFudClcbmNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tMaXN0Jyk7XG5cblxuY29uc3QgX2dlbmVyYXRlQ29udGVudCA9ICgpID0+IHtcblxufVxuXG5pbXBvcnQgY2hlY2tib3hCbGFuayBmcm9tICcuL2Fzc2V0cy9jaGVja2JveC1ibGFuay5zdmcnO1xuaW1wb3J0IGNoZWNrYm94TWFya2VkIGZyb20gJy4vYXNzZXRzL2NoZWNrYm94LW1hcmtlZC5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9hc3NldHMvZGVsZXRlLnN2Zyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9hc3NldHMvZWRpdC5zdmcnO1xuXG5cbmNvbnN0IF9kaXNwbGF5VGFzayA9IChuZXdUYXNrKSA9PiB7XG4gICAgY29uc3QgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBuZXdSb3cuc2V0QXR0cmlidXRlKCdpZCcsICdub3RDb21wbGV0ZScpO1xuICAgIG5ld1Jvdy5pbm5lckhUTUwgPSBcbiAgICAgICAgYDx0ciBpZD0nbm90Q29tcGxldGUnPlxuICAgICAgICAgICAgPHRkIGNsYXNzPSdjaGVja2JveENvbnRhaW5lcic+PGltZyBzcmM9JyR7Y2hlY2tib3hCbGFua30nIGNsYXNzPSdpY29uJz48L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPSd0YXNrQ29udGFpbmVyJz4ke25ld1Rhc2t9PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz0nZGF0ZUNvbnRhaW5lcic+bm8gZGF0ZTwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9J2VkaXRDb250YWluZXInPjxpbWcgc3JjPScke2VkaXRJY29ufScgY2xhc3M9J2ljb24nPjwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9J2Nsb3NlQ29udGFpbmVyJz48aW1nIHNyYz0nJHtkZWxldGVJY29ufScgY2xhc3M9J2ljb24nIGFsdD0nZGVsZXRlJyBpZD0ncmVtb3ZlUm93Jz48L3RkPlxuICAgICAgICA8L3RyPmA7XG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQobmV3Um93KTtcbn1cblxuXG4vLyBhZGQgcHJvamVjdFxuY29uc3QgX3Nob3dBZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBpZiAoYWRkVGFza0Zvcm0uZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnc2hvd24nKSB7XG4gICAgICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93bicpXG4gICAgICAgIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICB9XG4gICAgYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpXG4gICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93bicpXG59XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdEJ0bicpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zaG93QWRkUHJvamVjdEZvcm0pO1xuXG5jb25zdCBfaGlkZUFkZFByb2plY3RGb3JtID0gKCkgPT4ge1xuICAgIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93bicpXG4gICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5cblxuXG5cbi8vIFJFRFVOREFOVCBXSVRIIENPUkUuSlMgLS0gQ09OU09MT0RBVEVcbmltcG9ydCBjaGVja2xpc3QgZnJvbSAnLi9hc3NldHMvY2hlY2tsaXN0LnN2Zyc7XG5jb25zdCBfY3JlYXRlQ2hlY2tsaXN0SWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IGNoZWNrbGlzdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGVja2xpc3RJY29uLnNyYyA9IGNoZWNrbGlzdDtcbiAgICBjaGVja2xpc3RJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0SWNvbik7XG59XG5cbmNvbnN0IGFkZFByb2ogPSAobmV3UHJvaikgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0c01lbnUnKTtcbiAgICBjb25zdCBzYW1wbGVQcm9qID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBfY3JlYXRlQ2hlY2tsaXN0SWNvbihzYW1wbGVQcm9qKTtcbiAgICBjb25zdCBzYW1wbGVQcm9qVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzYW1wbGVQcm9qVGV4dC50ZXh0Q29udGVudCA9IG5ld1Byb2o7XG4gICAgc2FtcGxlUHJvai5hcHBlbmRDaGlsZChzYW1wbGVQcm9qVGV4dClcbiAgICBwcm9qZWN0c01lbnUuYXBwZW5kQ2hpbGQoc2FtcGxlUHJvaik7XG59IFxuLy8gUkVEVU5EQU5UIFdJVEggQ09SRS5KUyAtLSBDT05TT0xPREFURVxuXG5cblxuXG5cbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdQcm9qZWN0SW5wdXQnKTtcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RGb3JtJylcbmFkZFByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLnN1Ym1pdHRlci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRCdG4nKSB7XG4gICAgICAgIC8vIHN1Ym1pdFByb2plY3QgZnVuY3Rpb24gZ29lcyBoZXJlXG4gICAgICAgIGNvbnN0IG5ld1Byb2ogPSBuZXdQcm9qZWN0SW5wdXQudmFsdWVcbiAgICAgICAgYWRkUHJvaihuZXdQcm9qKTtcbiAgICB9XG4gICAgX2hpZGVBZGRQcm9qZWN0Rm9ybSgpO1xufSk7XG5cblxuLy8gYWRkIHRhc2tcbmNvbnN0IF9zaG93QWRkVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgaWYgKGFkZFByb2plY3RGb3JtLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ3Nob3duJykge1xuICAgICAgICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd24nKVxuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpICAgIFxuICAgIH1cbiAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3duJylcbn1cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0J0bicpO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zaG93QWRkVGFza0Zvcm0pO1xuXG5jb25zdCBfaGlkZUFkZFRhc2tGb3JtID0gKCkgPT4ge1xuICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93bicpXG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5jb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza0lucHV0Jyk7XG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrRm9ybScpO1xuYWRkVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGUuc3VibWl0dGVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZEJ0bicpIHtcbiAgICAgICAgLy8gc3VibWl0VGFzayBmdW5jdGlvbiBnb2VzIGhlcmVcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ld1Rhc2tJbnB1dC52YWx1ZVxuICAgICAgICBfZGlzcGxheVRhc2sobmV3VGFzayk7XG4gICAgfVxuICAgIF9oaWRlQWRkVGFza0Zvcm0oKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==