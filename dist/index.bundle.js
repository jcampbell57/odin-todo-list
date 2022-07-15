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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: lightsteelblue;\n    --secondary-color: steelblue;\n    --menu-color: rgb(145, 189, 224);\n    --accent-color: whitesmoke;\n    --font-color: rgb(20, 20, 20);\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    background-color: var(--background-color);\n    display: grid;\n    grid-template-columns: 250px calc(100vw - 250px);\n    grid-template-rows: 110px calc(100vh - 110px - 62px) 62px;\n    margin: 0;\n}\n\n\n\n\n\n/* Header styling */\n\n.logo {\n    max-height: 90%;\n    margin-right: 8px;\n    /* whitesmoke color */\n    filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(201deg) brightness(107%) contrast(92%);\n}\n\nheader {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.8);\n    z-index: 1;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n\n\n\n\n/* Menu styling */\n\n.menu {\n    background-color: var(--menu-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n}\n\n.icon {\n    height: 1.2rem;\n}\n\n.menuOptions {\n    list-style: none;\n    padding: 0;\n}\n\n.menuOptions>li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.projectsHeader {\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n\n.menuOptions li,\n.projectsHeader,\n.contentTitle,\n.addTaskBtn,\n.addProjectForm,\ntbody>tr {\n    margin: 10px 1rem;\n    padding: 8px;\n    border-radius: 8px;    \n}\n\ntbody>tr.task:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n}\n\n.menuOptions li:hover,\n.addTaskBtn:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.menuOptions li:active,\n.addTaskBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.projectCloseContainer {\n    margin-left: auto;\n}\n\n\n\n\n\n/* Form styling */\n\n#showBlock {\n    display: block;\n}\n\n#showFlex {\n    display: flex;\n}\n\n#hidden {\n    display: none;\n}\n\n.addProjectForm,\n.addTaskForm {\n    padding: 0;\n}\n\n.addTaskForm {\n    margin: 10px;\n}\n\n.formRow{\n    display: flex;\n    justify-content:space-around;\n    gap: 8px;\n\n}\n\n#formButtons {\n    margin-top: 8px;\n}\n\n#newTaskInput,\n#newProjectInput {\n    width: 100%;\n    font-size: 1.2rem;\n    padding: 6px;\n    border: none;\n    border-radius: 8px;\n}\n\n.addBtn,\n.cancelBtn {\n    width: 100%;\n    padding: 8px;\n    border-radius: 8px;    \n    font-size: 1rem;\n}\n\n.addBtn {\n    background-color: lightgreen;\n    border: 2px solid hsl(120, 73%, 55%);\n}\n\n.cancelBtn {\n    background-color: lightpink;\n    border: 2px solid hsl(351, 100%, 70%);\n\n}\n\n.addBtn:hover,\n.cancelBtn:hover {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.addBtn:active,\n.cancelBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.newProjErrorContainer,\n.newTaskErrorContainer {\n    margin-top: 8px;\n    text-align: center;\n    color: darkred;\n}\n\n\n\n\n\n/* Content styling */\n\n.content {\n    background-color: var(--background-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n    /* padding: 20px; */\n}\n\n/* .contentTitle {\n    border: 1px solid red;\n}\n\n.taskContainer {\n    border: 1px solid red;\n}\n\n.addTaskBtn {\n    border: 1px solid red;\n} */\n\n\n\n\n\n/* Table styling */\n\ntable {\n    /* border: 1px solid red; */\n    width: 100%;\n}\n\ntbody>tr {\n    box-sizing: border-box;\n    /* width: 100%; */\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    /* border: 2px solid blue; */\n}\n\n.hidden {\n    display: none;\n}\n\ntd {\n    /* border: 2px solid pink; */\n    display: flex;\n    /* align-items: center; */\n    /* justify-content: center; */\n}\n\n/* NEW */\nimg.icon:hover,\n.dateContainer:hover {\n    cursor: pointer;\n}\n/* OLD */\n/* .checkboxContainer:hover,\n.dateContainer:hover,\n.editContainer:hover,\n.editDateContainer:hover,\n#deleteItem:hover {\n    cursor: pointer;\n} */\n\n.dateContainer,\nimg#deleteItem {\n    margin-left: auto;\n}\n\n.checkboxContainer:active {\n    filter: invert(18%) sepia(76%) saturate(2312%) hue-rotate(109deg) brightness(100%) contrast(107%);\n}\n\n#deleteItem:active {\n    filter: invert(7%) sepia(51%) saturate(5951%) hue-rotate(350deg) brightness(140%) contrast(136%);\n}\n\n.editContainer:active,\nimg.editDateIcon:active {\n    filter: invert(60%) sepia(34%) saturate(3621%) hue-rotate(359deg) brightness(100%) contrast(109%);\n}\n\n/* .taskContainer {\n\n} */\n\ntd img {\n    /* border: 2px solid blue; */\n    color: #006400;\n}\n\n#complete {\n    text-decoration: line-through;\n}\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: auto;\n}\n\n.github {\n    height: 24px;\n    margin-left: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,kCAAkC;IAClC,4BAA4B;IAC5B,gCAAgC;IAChC,0BAA0B;IAC1B,6BAA6B;AACjC;;AAEA;IACI,wHAAwH;IACxH,yCAAyC;IACzC,aAAa;IACb,gDAAgD;IAChD,yDAAyD;IACzD,SAAS;AACb;;;;;;AAMA,mBAAmB;;AAEnB;IACI,eAAe;IACf,iBAAiB;IACjB,qBAAqB;IACrB,gGAAgG;AACpG;;AAEA;IACI,mBAAmB;IACnB,wCAAwC;IACxC,0BAA0B;IAC1B,yCAAyC;IACzC,UAAU;IACV,aAAa;IACb,aAAa;IACb,mBAAmB;AACvB;;;;;;AAMA,iBAAiB;;AAEjB;IACI,mCAAmC;IACnC,wBAAwB;IACxB,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;;;;;;IAMI,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,yCAAyC;IACzC,yCAAyC;AAC7C;;AAEA;;IAEI,yCAAyC;IACzC,yCAAyC;IACzC,eAAe;AACnB;;AAEA;;IAEI,yCAAyC;AAC7C;;AAEA;IACI,iBAAiB;AACrB;;;;;;AAMA,iBAAiB;;AAEjB;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,QAAQ;;AAEZ;;AAEA;IACI,eAAe;AACnB;;AAEA;;IAEI,WAAW;IACX,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;;IAEI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,4BAA4B;IAC5B,oCAAoC;AACxC;;AAEA;IACI,2BAA2B;IAC3B,qCAAqC;;AAEzC;;AAEA;;IAEI,yCAAyC;IACzC,eAAe;AACnB;;AAEA;;IAEI,yCAAyC;AAC7C;;AAEA;;IAEI,eAAe;IACf,kBAAkB;IAClB,cAAc;AAClB;;;;;;AAMA,oBAAoB;;AAEpB;IACI,yCAAyC;IACzC,wBAAwB;IACxB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;;;;;;;;;;GAUG;;;;;;AAMH,kBAAkB;;AAElB;IACI,2BAA2B;IAC3B,WAAW;AACf;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4BAA4B;IAC5B,aAAa;IACb,yBAAyB;IACzB,6BAA6B;AACjC;;AAEA,QAAQ;AACR;;IAEI,eAAe;AACnB;AACA,QAAQ;AACR;;;;;;GAMG;;AAEH;;IAEI,iBAAiB;AACrB;;AAEA;IACI,iGAAiG;AACrG;;AAEA;IACI,gGAAgG;AACpG;;AAEA;;IAEI,iGAAiG;AACrG;;AAEA;;GAEG;;AAEH;IACI,4BAA4B;IAC5B,cAAc;AAClB;;AAEA;IACI,6BAA6B;AACjC;;;;;;AAMA,mBAAmB;;AAEnB;IACI,mBAAmB;IACnB,wCAAwC;IACxC,0BAA0B;IAC1B,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB","sourcesContent":[":root {\n    --background-color: lightsteelblue;\n    --secondary-color: steelblue;\n    --menu-color: rgb(145, 189, 224);\n    --accent-color: whitesmoke;\n    --font-color: rgb(20, 20, 20);\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    background-color: var(--background-color);\n    display: grid;\n    grid-template-columns: 250px calc(100vw - 250px);\n    grid-template-rows: 110px calc(100vh - 110px - 62px) 62px;\n    margin: 0;\n}\n\n\n\n\n\n/* Header styling */\n\n.logo {\n    max-height: 90%;\n    margin-right: 8px;\n    /* whitesmoke color */\n    filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(201deg) brightness(107%) contrast(92%);\n}\n\nheader {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.8);\n    z-index: 1;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n\n\n\n\n/* Menu styling */\n\n.menu {\n    background-color: var(--menu-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n}\n\n.icon {\n    height: 1.2rem;\n}\n\n.menuOptions {\n    list-style: none;\n    padding: 0;\n}\n\n.menuOptions>li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.projectsHeader {\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n\n.menuOptions li,\n.projectsHeader,\n.contentTitle,\n.addTaskBtn,\n.addProjectForm,\ntbody>tr {\n    margin: 10px 1rem;\n    padding: 8px;\n    border-radius: 8px;    \n}\n\ntbody>tr.task:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n}\n\n.menuOptions li:hover,\n.addTaskBtn:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.menuOptions li:active,\n.addTaskBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.projectCloseContainer {\n    margin-left: auto;\n}\n\n\n\n\n\n/* Form styling */\n\n#showBlock {\n    display: block;\n}\n\n#showFlex {\n    display: flex;\n}\n\n#hidden {\n    display: none;\n}\n\n.addProjectForm,\n.addTaskForm {\n    padding: 0;\n}\n\n.addTaskForm {\n    margin: 10px;\n}\n\n.formRow{\n    display: flex;\n    justify-content:space-around;\n    gap: 8px;\n\n}\n\n#formButtons {\n    margin-top: 8px;\n}\n\n#newTaskInput,\n#newProjectInput {\n    width: 100%;\n    font-size: 1.2rem;\n    padding: 6px;\n    border: none;\n    border-radius: 8px;\n}\n\n.addBtn,\n.cancelBtn {\n    width: 100%;\n    padding: 8px;\n    border-radius: 8px;    \n    font-size: 1rem;\n}\n\n.addBtn {\n    background-color: lightgreen;\n    border: 2px solid hsl(120, 73%, 55%);\n}\n\n.cancelBtn {\n    background-color: lightpink;\n    border: 2px solid hsl(351, 100%, 70%);\n\n}\n\n.addBtn:hover,\n.cancelBtn:hover {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.addBtn:active,\n.cancelBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.newProjErrorContainer,\n.newTaskErrorContainer {\n    margin-top: 8px;\n    text-align: center;\n    color: darkred;\n}\n\n\n\n\n\n/* Content styling */\n\n.content {\n    background-color: var(--background-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n    /* padding: 20px; */\n}\n\n/* .contentTitle {\n    border: 1px solid red;\n}\n\n.taskContainer {\n    border: 1px solid red;\n}\n\n.addTaskBtn {\n    border: 1px solid red;\n} */\n\n\n\n\n\n/* Table styling */\n\ntable {\n    /* border: 1px solid red; */\n    width: 100%;\n}\n\ntbody>tr {\n    box-sizing: border-box;\n    /* width: 100%; */\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    /* border: 2px solid blue; */\n}\n\n.hidden {\n    display: none;\n}\n\ntd {\n    /* border: 2px solid pink; */\n    display: flex;\n    /* align-items: center; */\n    /* justify-content: center; */\n}\n\n/* NEW */\nimg.icon:hover,\n.dateContainer:hover {\n    cursor: pointer;\n}\n/* OLD */\n/* .checkboxContainer:hover,\n.dateContainer:hover,\n.editContainer:hover,\n.editDateContainer:hover,\n#deleteItem:hover {\n    cursor: pointer;\n} */\n\n.dateContainer,\nimg#deleteItem {\n    margin-left: auto;\n}\n\n.checkboxContainer:active {\n    filter: invert(18%) sepia(76%) saturate(2312%) hue-rotate(109deg) brightness(100%) contrast(107%);\n}\n\n#deleteItem:active {\n    filter: invert(7%) sepia(51%) saturate(5951%) hue-rotate(350deg) brightness(140%) contrast(136%);\n}\n\n.editContainer:active,\nimg.editDateIcon:active {\n    filter: invert(60%) sepia(34%) saturate(3621%) hue-rotate(359deg) brightness(100%) contrast(109%);\n}\n\n/* .taskContainer {\n\n} */\n\ntd img {\n    /* border: 2px solid blue; */\n    color: #006400;\n}\n\n#complete {\n    text-decoration: line-through;\n}\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: auto;\n}\n\n.github {\n    height: 24px;\n    margin-left: 10px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _assets_GitHub_light_32px_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/GitHub-light-32px.png */ "./src/assets/GitHub-light-32px.png");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive */ "./src/interactive.js");

const body = document.querySelector('body');














// Initialization functions
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
    allTasks.setAttribute('class', 'allTasks');
    allTasks.addEventListener('click', (e) => {
        (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.setContentTitle)(e)
        ;(0,_interactive__WEBPACK_IMPORTED_MODULE_2__.displayTasks)();
    })
    ;(0,_interactive__WEBPACK_IMPORTED_MODULE_2__.createChecklistIcon)(allTasks);
    const allTasksText = document.createElement('span');
    allTasksText.textContent = 'All tasks';
    allTasks.appendChild(allTasksText)
    menuOptions.appendChild(allTasks);

    const dueToday = document.createElement('li');
    dueToday.setAttribute('class', 'dueToday');
    dueToday.addEventListener('click', (e) => {
        (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.displayTasks)();
        (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.setContentTitle)(e)
    })
    ;(0,_interactive__WEBPACK_IMPORTED_MODULE_2__.createTodayIcon)(dueToday);
    const dueTodayText = document.createElement('span');
    dueTodayText.innerText = 'Due today';
    dueToday.appendChild(dueTodayText);
    menuOptions.appendChild(dueToday);

    const dueWeek = document.createElement('li');
    dueWeek.setAttribute('class', 'dueWeek');
    dueWeek.addEventListener('click', (e) => {
        (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.displayTasks)();
        (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.setContentTitle)(e)
    })
    ;(0,_interactive__WEBPACK_IMPORTED_MODULE_2__.createWeekIcon)(dueWeek);
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


    // Generate add project button
    const addProjectContainer = document.createElement('ul');
    addProjectContainer.setAttribute('class', 'menuOptions');
    const addProject = document.createElement('li');
    addProject.setAttribute('class', 'addProjectBtn')
    ;(0,_interactive__WEBPACK_IMPORTED_MODULE_2__.createAdditionIcon)(addProject)
    const addProjectText = document.createElement('span');
    addProjectText.innerText = 'Add Project';
    addProject.appendChild(addProjectText)
    addProjectContainer.appendChild(addProject)


    // Generate and hide new project form
    const addProjectForm = document.createElement('form');
    addProjectForm.setAttribute('class', 'addProjectForm');
    addProjectForm.setAttribute('id', 'hidden')
    addProjectForm.method = 'get';
    (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.createForm)(addProjectForm);
    addProjectContainer.appendChild(addProjectForm)


    menu.appendChild(menuOptions);
    menu.appendChild(projectsHeader);
    menu.appendChild(projectsMenu);
    menu.appendChild(addProjectContainer);

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
                <th class='taskCloseContainer'></th>
            </tr>
        </thead>
        <tbody id='taskList'></tbody>`
    

    // Create add task button
    const addTaskContainer = document.createElement('ul');
    addTaskContainer.setAttribute('class', 'menuOptions');
    const addTask = document.createElement('li');
    addTask.setAttribute('class', 'addTaskBtn');
    (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.createAdditionIcon)(addTask);
    const addTaskText = document.createElement('span');
    addTaskText.innerText = 'Add task';
    addTask.appendChild(addTaskText);
    addTaskContainer.appendChild(addTask);

    // Generate and hide new task form
    const addTaskForm = document.createElement('form');
    addTaskForm.setAttribute('class', 'addTaskForm');
    addTaskForm.setAttribute('id', 'hidden')
    addTaskForm.method = 'get';
    (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.createForm)(addTaskForm);
    
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
    newGithubIcon.src = _assets_GitHub_light_32px_png__WEBPACK_IMPORTED_MODULE_1__;
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

/***/ "./src/interactive.js":
/*!****************************!*\
  !*** ./src/interactive.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddButton": () => (/* binding */ createAddButton),
/* harmony export */   "createAdditionIcon": () => (/* binding */ createAdditionIcon),
/* harmony export */   "createCalendarEditIcon": () => (/* binding */ createCalendarEditIcon),
/* harmony export */   "createCancelButton": () => (/* binding */ createCancelButton),
/* harmony export */   "createCheckboxIcon": () => (/* binding */ createCheckboxIcon),
/* harmony export */   "createChecklistIcon": () => (/* binding */ createChecklistIcon),
/* harmony export */   "createDeleteIcon": () => (/* binding */ createDeleteIcon),
/* harmony export */   "createEditIcon": () => (/* binding */ createEditIcon),
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "createTodayIcon": () => (/* binding */ createTodayIcon),
/* harmony export */   "createWeekIcon": () => (/* binding */ createWeekIcon),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "setContentTitle": () => (/* binding */ setContentTitle)
/* harmony export */ });
/* harmony import */ var _assets_checkbox_blank_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/checkbox-blank.svg */ "./src/assets/checkbox-blank.svg");
/* harmony import */ var _assets_checkbox_marked_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/checkbox-marked.svg */ "./src/assets/checkbox-marked.svg");
/* harmony import */ var _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/checklist.svg */ "./src/assets/checklist.svg");
/* harmony import */ var _assets_calendar_today_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/calendar-today.svg */ "./src/assets/calendar-today.svg");
/* harmony import */ var _assets_calendar_range_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/calendar-range.svg */ "./src/assets/calendar-range.svg");
/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/plus.svg */ "./src/assets/plus.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/calendar-edit.svg */ "./src/assets/calendar-edit.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");















// Icon & button generators 
const createCheckboxIcon = (td) => {
    const checkboxIcon = document.createElement('img');
    checkboxIcon.src = _assets_checkbox_blank_svg__WEBPACK_IMPORTED_MODULE_0__;
    checkboxIcon.setAttribute('class', 'icon');
    checkboxIcon.addEventListener('click', (e) => _markComplete(e))
    td.appendChild(checkboxIcon);
} 

const _createMarkedCheckboxIcon = (td) => {
    const markedCheckboxIcon = document.createElement('img');
    markedCheckboxIcon.src = _assets_checkbox_marked_svg__WEBPACK_IMPORTED_MODULE_1__;
    markedCheckboxIcon.setAttribute('class', 'icon');
    markedCheckboxIcon.addEventListener('click', (e) => _markIncomplete(e))
    td.appendChild(markedCheckboxIcon);
} 

const createChecklistIcon = (li) => {
    const checklistIcon = document.createElement('img');
    checklistIcon.src = _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_2__;
    checklistIcon.setAttribute('class', 'icon')
    li.appendChild(checklistIcon);
}

const createEditIcon = (td) => {
    const newEditIcon = document.createElement('img');
    newEditIcon.src = _assets_edit_svg__WEBPACK_IMPORTED_MODULE_6__;
    newEditIcon.setAttribute('class', 'icon');
    //event listener to open task card
    newEditIcon.addEventListener('click', (e) => _showTaskCard(e))
    td.appendChild(newEditIcon);
}

const createCalendarEditIcon = (td) => {
    const newCalendarEditIcon = document.createElement('img');
    newCalendarEditIcon.src = _assets_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_7__;
    newCalendarEditIcon.setAttribute('class', 'icon editDateIcon')
    newCalendarEditIcon.addEventListener('click', (e) => {
    })
    td.appendChild(newCalendarEditIcon);
}

const createDeleteIcon = (container) => {
    // create image and assign attributes
    const newDeleteIcon = document.createElement('img');
    newDeleteIcon.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_8__;
    newDeleteIcon.setAttribute('class', 'icon')
    newDeleteIcon.setAttribute('id', 'deleteItem')
    // add event listener
    if (container.getAttribute('class') === 'taskCloseContainer') {
        // Event listener to delete task
        newDeleteIcon.addEventListener('click', (e) => _deleteTask(e))
    } else if (container.getAttribute('class') === 'projectCloseContainer') {
        // Event listener to delete project
        newDeleteIcon.addEventListener('click', (e) => _deleteProject(e))
    } else {
        console.log('this is strange');
    }
    // append to container
    container.appendChild(newDeleteIcon)
}

const createAdditionIcon = (li) => {
    const newAdditionIcon = document.createElement('img');
    newAdditionIcon.src = _assets_plus_svg__WEBPACK_IMPORTED_MODULE_5__;
    newAdditionIcon.setAttribute('class', 'icon')
    li.appendChild(newAdditionIcon);
}

const createTodayIcon = (li) => {
    const newTodayIcon = document.createElement('img');
    newTodayIcon.src = _assets_calendar_today_svg__WEBPACK_IMPORTED_MODULE_3__;
    newTodayIcon.setAttribute('class', 'icon')
    li.appendChild(newTodayIcon);
}

const createWeekIcon = (li) => {
    const newWeekIcon = document.createElement('img');
    newWeekIcon.src = _assets_calendar_range_svg__WEBPACK_IMPORTED_MODULE_4__;
    newWeekIcon.setAttribute('class', 'icon')
    li.appendChild(newWeekIcon);
}

const createAddButton = (container, i) => {
    // console.log(container)
    const addBtn = document.createElement('button');
    addBtn.setAttribute('class', 'addBtn');
    addBtn.innerText = "submit";
    if (container.classList.contains('cardRow3')) {
        // convert card to form? and change this event listener to trigger when form submits
        addBtn.setAttribute('id', `${i}`);
        addBtn.addEventListener('click', (e) => _submitTaskCard(e))
    };
    container.appendChild(addBtn);
}

const createCancelButton = (container, i) => {
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('class', 'cancelBtn');
    cancelBtn.setAttribute('id', `${i}`);
    cancelBtn.innerText = "cancel";
    if (container.getAttribute('class') === 'cardRow3') {
        cancelBtn.addEventListener('click', () => _hideTaskCard(i))
    };
    container.appendChild(cancelBtn);   
}



// Container AND icon generators (For task listing and task card)
const createCheckboxContainer = (tr) => {
    const checkboxContainer = document.createElement('td');
    checkboxContainer.setAttribute('class', 'checkboxContainer');
    createCheckboxIcon(checkboxContainer);
    tr.appendChild(checkboxContainer);
}

const createDateContainer = (tr, task, i) => {
    const dateContainer = document.createElement('td');
    dateContainer.setAttribute('class', 'dateContainer');
    if (tr.classList.contains('editDateContainer')) {
        dateContainer.innerHTML = `<input class='taskCardDate${i}' type='date' value='${task.date}'>`
    } else {
    dateContainer.innerText = `${task.date}`
    }
    tr.appendChild(dateContainer);
}

const createDeleteContainer = (tr) => {
    const closeContainer = document.createElement('td');
    closeContainer.setAttribute('class', 'taskCloseContainer');
    createDeleteIcon(closeContainer);
    tr.appendChild(closeContainer);
}



// Form generator
const createForm = (form) => {
    
    const formRow1 = document.createElement('div');
    formRow1.setAttribute('class', 'formRow');
    
    const formRow2 = document.createElement('div');
    formRow2.setAttribute('class', 'formRow');
    formRow2.setAttribute('id', 'formButtons');

    const formRow3 = document.createElement('div');
    formRow3.setAttribute('id', 'hidden');

    // row one: assign input according to class of form
    // row three: assign error class and text according to class of form
    if (form.getAttribute('class') === 'addProjectForm') {
        formRow1.innerHTML = "<input type='text' id='newProjectInput' name='newProjectInput'></input>";
        formRow3.setAttribute('class', 'newProjErrorContainer');
        formRow3.innerText = 'Name your project!'
    } else if (form.getAttribute('class') === 'addTaskForm') {
        formRow1.innerHTML = "<input type='text' id='newTaskInput' name='newTaskInput'></input>";
        formRow3.setAttribute('class', 'newTaskErrorContainer');
        formRow3.innerText = 'Name your task!'
    } else {
        console.log('this is strange')
    }

    // row two: submit and cancel buttons
    createAddButton(formRow2);
    createCancelButton(formRow2);
       
    form.appendChild(formRow1);
    form.appendChild(formRow2);
    form.appendChild(formRow3);
}





// DOM modification functions

// PROJECTS
// Display entire array of projects to menu
const displayProjects = () => {
    // Grab projects menu
    const projectsMenu = document.querySelector('#projectsMenu');

    // Clear projects menu
    const oldProjCount = projectsMenu.childElementCount
    for (let i=0; i<oldProjCount; i++) {
        projectsMenu.firstChild.remove();
    }

    // Add single project to menu (called below)
    const _displayProject = (newProj, i) => {
        const newProjectContainer = document.createElement('li');
        newProjectContainer.setAttribute('class', `project`)
        newProjectContainer.setAttribute('id', `${i}`)
        newProjectContainer.addEventListener('click', (e) => {
            // console.log(e.target)
            setContentTitle(e)
            displayTasks();
        })
        createChecklistIcon(newProjectContainer);
        const newProjectText = document.createElement('span');
        newProjectText.textContent = newProj;
        newProjectContainer.appendChild(newProjectText)
        // extra wrapper so event listeners work on both tasks and projects
        const closeContainerDiv = document.createElement('div');
        closeContainerDiv.setAttribute('class', 'projectCloseContainer')
        createDeleteIcon(closeContainerDiv);    
        // createDeleteIcon(newProjectContainer);
        newProjectContainer.appendChild(closeContainerDiv)
        projectsMenu.appendChild(newProjectContainer);
    } 

    // Append all tasks to tasklist
    let i=0
    _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all.forEach(project => {
        _displayProject(project, i)
        i++
    });
}



// Delete project
const _deleteProject = (e) => {
    let doomedIndex = e.target.parentElement.parentElement.getAttribute('id');
    _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all.splice(doomedIndex, 1);
    displayProjects();
}





// TASKS
// Display entire array of tasks to tasklist
const displayTasks = () => {

    // Grab tasklist
    const tasklist = document.querySelector('#taskList');
    
    // clear tasklist
    const oldTaskCount = tasklist.childElementCount
    for (let i=0; i<oldTaskCount; i++) {
        tasklist.firstChild.remove();
    }
    

    // Add single task to tasklist display
    const _createTaskListing = (task, i) => {
        // create task container
        const newListing = document.createElement('tr');
        newListing.setAttribute('class', `incomplete task listing${i}`);
        newListing.setAttribute('id', `${i}`);
        
        // add checkbox
        createCheckboxContainer(newListing);
        
        // add task
        const taskContainer = document.createElement('td');
        taskContainer.setAttribute('class', 'taskContainer');
        taskContainer.innerText = `${task.task}`;
        newListing.appendChild(taskContainer);

        // add date
        createDateContainer(newListing, task);

        // add edit button
        const editContainer = document.createElement('td');
        editContainer.setAttribute('class', 'editContainer');
        createEditIcon(editContainer);
        newListing.appendChild(editContainer);

        // add delete button
        createDeleteContainer(newListing);

        //append task to tasklist
        tasklist.appendChild(newListing);



        // set display filter
        const filter = document.querySelector('.contentTitle').textContent

        // date filters
        if (filter === 'All tasks') {
            return;
        } else if (filter === 'Due today') {
            console.log(filter);
        } else if (filter === 'Due this week') {
            console.log(filter);
        } 

        // project filter
        _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all.forEach(project => {
            if (project === filter) {
                if (task.project !== filter) {
                    newListing.classList.add('hidden');
                };    
            }
        })
        
    }
    

    // Create and hide task card in tasklist display
    const _createTaskCard = (task, i) => {
        // CREATE TASK CARD
        const newCardContainer = document.createElement('tr')
        newCardContainer.setAttribute('class', `incomplete task card${i}`);
        newCardContainer.setAttribute('id', `hidden`);

        const newCard = document.createElement('table');
        newCard.setAttribute('class', 'incomplete menuOptions');
        newCard.setAttribute('id', `${i}`);
        
        // Create delete button
        createDeleteContainer(newCard);

        const newThead = document.createElement('thead');
        newThead.innerHTML = 
            `<tr>
                <th class='checkboxContainer'></th>
                <th class='taskContainer'></th>
                <th class='dateContainer'></th>
                <th class='editContainer'></th>
            </tr>`
        
        // Create tbody
        const taskCard = document.createElement('tbody');
        taskCard.setAttribute('id', 'taskCard');
        

        // First row
        const cardRow1 = document.createElement('tr');
        cardRow1.setAttribute('class', 'cardRow1')
        // add task name input
        const taskInputContainer = document.createElement('td');
        taskInputContainer.setAttribute('class', `taskInputContainer`);
        taskInputContainer.innerHTML = `<input type='text' class='taskCardTask${i}' id='newTaskInput' name='newTaskInput' value='${task.task}'></input>`;
        cardRow1.appendChild(taskInputContainer);
        // add date
        const editDateContainer = document.createElement('td');
        editDateContainer.setAttribute('class', `editDateContainer`);
        createDateContainer(editDateContainer, task, i);
        cardRow1.appendChild(editDateContainer);
        // add calendar edit button
        createCalendarEditIcon(cardRow1);



        // Second row 
        const cardRow2 = document.createElement('tr');
        cardRow2.setAttribute('class', 'cardRow2')
        
        // add checkbox
        // createCheckboxContainer(cardRow2);
        
        // project input container
        const projectInputContainer = document.createElement('td');
        projectInputContainer.setAttribute('class', 'projectInputContainer');
        
        // create project dropdown 
        const projectDropdown = document.createElement('select')
        projectDropdown.setAttribute('class', `taskCardProject${i}`)
        projectDropdown.setAttribute('id', 'newTaskInput')
        projectDropdown.setAttribute('name', 'newTaskInput')
        projectDropdown.setAttribute('value', `${task.project}`)

        // create project dropdown options
        // blank option for no project
        const blankProjectOption = document.createElement('option')
        blankProjectOption.value = ''
        blankProjectOption.text = ''
        projectDropdown.appendChild(blankProjectOption)
        // remaining options generated from projects array
        _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all.forEach(project => {
            const projectOption = document.createElement('option')
            projectOption.value = `${project}`
            projectOption.text = `${project}`
            if (task.project === project) {
                projectOption.selected = true;
            }
            projectDropdown.appendChild(projectOption)
        })
        projectInputContainer.appendChild(projectDropdown)
        cardRow2.appendChild(projectInputContainer);
        

        // priority input container
        const priorityInputContainer = document.createElement('td');
        priorityInputContainer.setAttribute('class', 'priorityInputContainer');
        
        // create priority dropdown 
        const priorityDropdown = document.createElement('select')
        priorityDropdown.setAttribute('class', `taskCardPriority${i}`)
        priorityDropdown.setAttribute('id', 'newTaskInput')
        priorityDropdown.setAttribute('name', 'newTaskInput')
        priorityDropdown.setAttribute('value', `${task.priority}`)
        
        // create priority dropdown options
        // high priority
        const priorityHigh = document.createElement('option')
        priorityHigh.value = 'high'
        priorityHigh.text = 'High'
        // medium priority
        const priorityMedium = document.createElement('option')
        priorityMedium.value = 'medium'
        priorityMedium.text = 'Medium'
        // low priority
        const priorityLow = document.createElement('option')
        priorityLow.value = 'low'
        priorityLow.text = 'Low'
        
        // priority selection
        if (task.priority === 'high') {
        priorityHigh.selected = true;
        } else if (task.priority === 'low') {
        priorityLow.selected = true;
        } else 
        priorityMedium.selected = true;
        
        // append priority input to row
        priorityDropdown.appendChild(priorityHigh);
        priorityDropdown.appendChild(priorityMedium);
        priorityDropdown.appendChild(priorityLow);        
        priorityInputContainer.appendChild(priorityDropdown);        
        cardRow2.appendChild(priorityInputContainer);



        // Third row 
        const cardRow3 = document.createElement('tr');
        cardRow3.setAttribute('class', 'cardRow3')
        createAddButton(cardRow3, i);
        createCancelButton(cardRow3, `${i}`);



        // append task card to tasklist
        taskCard.appendChild(cardRow1);
        taskCard.appendChild(cardRow2);
        taskCard.appendChild(cardRow3);

        newCard.appendChild(newThead);
        newCard.appendChild(taskCard);

        newCardContainer.appendChild(newCard);

        tasklist.appendChild(newCardContainer);
    }
    

    // append all tasks to tasklist
    let i=0
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all.forEach(task => {
        _createTaskListing(task, i);
        _createTaskCard(task, i);
        i++
    });
}





// Complete task
const _markComplete = (e) => {
    e.target.parentElement.parentElement.children[1].setAttribute('id', 'complete');
    let checkboxContainer = e.target.parentElement
    e.target.remove();
    _createMarkedCheckboxIcon(checkboxContainer)
}

// Incomplete task
const _markIncomplete = (e) => {
    e.target.parentElement.parentElement.children[1].setAttribute('id', '');
    let checkboxContainer = e.target.parentElement
    e.target.remove();
    createCheckboxIcon(checkboxContainer)
}

// Show task card
const _showTaskCard = (e) => {
    const taskID = e.target.parentElement.parentElement.getAttribute('id');
    // show task card
    const taskCard = document.querySelector(`.card${taskID}`);
    taskCard.setAttribute('id', `${taskID}`);
    //hide task listing
    const taskListing = document.querySelector(`.listing${taskID}`);
    taskListing.setAttribute('id', 'hidden');
}

const _submitTaskCard = (e) => {
    const taskID = (e.target.getAttribute('id')) 

    // Get input values
    const updatedTask = document.querySelector(`.taskCardTask${taskID}`).value
    const updatedDate = document.querySelector(`.taskCardDate${taskID}`).value
    const updatedProject = document.querySelector(`.taskCardProject${taskID}`).value
    const updatedPriority = document.querySelector(`.taskCardPriority${taskID}`).value

    // Apply input values to task object
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].task = updatedTask
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].date = updatedDate
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].project = updatedProject
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].priority = updatedPriority

    // Refresh tasklist
    displayTasks();
    // console.log(tasks.all[taskID])
    // console.log(document.querySelector(`.taskCardPriority${taskID}`))
}

// Hide task card
const _hideTaskCard = (i) => {
    // show task listing
    const taskListing = document.querySelector(`.listing${i}`);
    taskListing.setAttribute('id', `${i}`);
    // hide task card
    const taskCard = document.querySelector(`.card${i}`);
    taskCard.setAttribute('id', 'hidden');
}

// Delete task
const _deleteTask = (e) => {
    let doomedIndex = e.target.parentElement.parentElement.getAttribute('id');
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all.splice(doomedIndex, 1);
    displayTasks();
}





// TASK DISPLAY OPTIONS

const setContentTitle = (e) => {
    if (e.target.getAttribute('id') !== 'deleteItem') {
        const contentTitle = document.querySelector('.contentTitle')
        contentTitle.textContent = e.target.innerText
        } else {
        return
    }
}







/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
class tasks {
    static all = [];

    

    constructor (newTask) {
        this.task = newTask
        this.date = date
        this.project = project
        this.priority = priority
        this.complete = complete
    }



};



class projects {
    static all = [];



    constructor (projectName) {
        this.name = projectName
    }



}





/***/ }),

/***/ "./src/assets/GitHub-light-32px.png":
/*!******************************************!*\
  !*** ./src/assets/GitHub-light-32px.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "266ca63177bca6f330a7.png";

/***/ }),

/***/ "./src/assets/calendar-edit.svg":
/*!**************************************!*\
  !*** ./src/assets/calendar-edit.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "11bc74ef4a949980ebf8.svg";

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

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

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
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive */ "./src/interactive.js");





// Page initialization
// import { initialize } from './core';



(0,_core__WEBPACK_IMPORTED_MODULE_1__["default"])();



// Grab DOM elements
const addProjectBtn = document.querySelector('.addProjectBtn');
const addProjectForm = document.querySelector('.addProjectForm')
const newProjectInput = document.querySelector('#newProjectInput');
const newProjErrorContainer = document.querySelector('.newProjErrorContainer');

const addTaskBtn = document.querySelector('.addTaskBtn');
const addTaskForm = document.querySelector('.addTaskForm');
const newTaskInput = document.querySelector('#newTaskInput');
const newTaskErrorContainer = document.querySelector('.newTaskErrorContainer');



// DOM modification functions








// PROJECT FORM
// Show/hide new project form
const _showAddProjectForm = () => {
    if (addTaskForm.getAttribute('id') === 'showBlock') {
        addTaskBtn.setAttribute('id', 'showFlex')
        addTaskForm.setAttribute('id', 'hidden')
    }
    addProjectBtn.setAttribute('id', 'hidden')
    addProjectForm.setAttribute('id', 'showBlock')
}


// Verify new project form submission
const _submitNewProjectForm = (e) => {
    // prevent actual form submission
    e.preventDefault();

    const submitProj = (newProj) => {
        _tasks__WEBPACK_IMPORTED_MODULE_0__.projects.all.push(newProj);
        (0,_interactive__WEBPACK_IMPORTED_MODULE_3__.displayProjects)();
    }
    
    const _hideAddProjectForm = () => {
        addProjectBtn.setAttribute('id', 'showFlex')
        addProjectForm.setAttribute('id', 'hidden')
        newProjectInput.value = '';
    }
    
    // verify or cancel submission
    if (e.submitter.getAttribute('class') === 'addBtn' && newProjectInput.value === '') {
        // show project name error
        newProjErrorContainer.setAttribute('id', 'showBlock');
        return;
    } else if (e.submitter.getAttribute('class') === 'addBtn') {
        // submit new project
        const newProj = newProjectInput.value
        submitProj(newProj);
    }
    _hideAddProjectForm();
    newProjErrorContainer.setAttribute('id', 'hidden');
}





// TASK FORM
// Show/hide new task form
const _showAddTaskForm = () => {
    if (addProjectForm.getAttribute('id') === 'showBlock') {
        addProjectBtn.setAttribute('id', 'showFlex')
        addProjectForm.setAttribute('id', 'hidden')    
    }
    addTaskBtn.setAttribute('id', 'hidden')
    addTaskForm.setAttribute('id', 'showBlock')
}


// Verify new task form submission
const _submitNewTaskForm = (e) => {
    // prevent actual form submission
    e.preventDefault();

    const _submitTask = (newTask) => {
        _tasks__WEBPACK_IMPORTED_MODULE_0__.tasks.all.push(newTask);
        (0,_interactive__WEBPACK_IMPORTED_MODULE_3__.displayTasks)();
    }

    const _hideAddTaskForm = () => {
        addTaskBtn.setAttribute('id', 'showFlex')
        addTaskForm.setAttribute('id', 'hidden')
        newTaskInput.value = '';
    }
    
    // verify or cancel submission
    if (e.submitter.getAttribute('class') === 'addBtn' && newTaskInput.value === '') {
        // show Task name error
        newTaskErrorContainer.setAttribute('id', 'showBlock');
        return;
    } else if (e.submitter.getAttribute('class') === 'addBtn') {
        // submit new Task
        const newTask = {
            task: newTaskInput.value,
            date: '2022-07-27',
            project: 'Seattle',
            priority: 'medium',
            complete: 'false',
        }
        _submitTask(newTask);
    }
    _hideAddTaskForm();
    newTaskErrorContainer.setAttribute('id', 'hidden');
}





// Event listeners
addProjectBtn.addEventListener('click', _showAddProjectForm);
addProjectForm.addEventListener('submit', (e) => _submitNewProjectForm(e));
addTaskBtn.addEventListener('click', _showAddTaskForm);
addTaskForm.addEventListener('submit', (e) => _submitNewTaskForm(e));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgLS1tZW51LWNvbG9yOiByZ2IoMTQ1LCAxODksIDIyNCk7XFxuICAgIC0tYWNjZW50LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLWZvbnQtY29sb3I6IHJnYigyMCwgMjAsIDIwKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggY2FsYygxMDB2dyAtIDI1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMTBweCBjYWxjKDEwMHZoIC0gMTEwcHggLSA2MnB4KSA2MnB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcblxcblxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuXFxuLmxvZ28ge1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAvKiB3aGl0ZXNtb2tlIGNvbG9yICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDgwJSkgaHVlLXJvdGF0ZSgyMDFkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoOTIlKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4IHJnYigwLCAwLCAwLCAwLjgpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBNZW51IHN0eWxpbmcgKi9cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWVudU9wdGlvbnM+bGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tZW51T3B0aW9ucyBsaSxcXG4ucHJvamVjdHNIZWFkZXIsXFxuLmNvbnRlbnRUaXRsZSxcXG4uYWRkVGFza0J0bixcXG4uYWRkUHJvamVjdEZvcm0sXFxudGJvZHk+dHIge1xcbiAgICBtYXJnaW46IDEwcHggMXJlbTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7ICAgIFxcbn1cXG5cXG50Ym9keT50ci50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUsIDAuMyk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMgbGk6aG92ZXIsXFxuLmFkZFRhc2tCdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSwgMC4zKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVPcHRpb25zIGxpOmFjdGl2ZSxcXG4uYWRkVGFza0J0bjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnByb2plY3RDbG9zZUNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBGb3JtIHN0eWxpbmcgKi9cXG5cXG4jc2hvd0Jsb2NrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNzaG93RmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNoaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkUHJvamVjdEZvcm0sXFxuLmFkZFRhc2tGb3JtIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmFkZFRhc2tGb3JtIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZm9ybVJvd3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcXG4gICAgZ2FwOiA4cHg7XFxuXFxufVxcblxcbiNmb3JtQnV0dG9ucyB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG59XFxuXFxuI25ld1Rhc2tJbnB1dCxcXG4jbmV3UHJvamVjdElucHV0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uYWRkQnRuLFxcbi5jYW5jZWxCdG4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7ICAgIFxcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hZGRCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBoc2woMTIwLCA3MyUsIDU1JSk7XFxufVxcblxcbi5jYW5jZWxCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgzNTEsIDEwMCUsIDcwJSk7XFxuXFxufVxcblxcbi5hZGRCdG46aG92ZXIsXFxuLmNhbmNlbEJ0bjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRCdG46YWN0aXZlLFxcbi5jYW5jZWxCdG46YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5uZXdQcm9qRXJyb3JDb250YWluZXIsXFxuLm5ld1Rhc2tFcnJvckNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogZGFya3JlZDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogQ29udGVudCBzdHlsaW5nICovXFxuXFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cXG59XFxuXFxuLyogLmNvbnRlbnRUaXRsZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5hZGRUYXNrQnRuIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn0gKi9cXG5cXG5cXG5cXG5cXG5cXG4vKiBUYWJsZSBzdHlsaW5nICovXFxuXFxudGFibGUge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50Ym9keT50ciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnRkIHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcGluazsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxufVxcblxcbi8qIE5FVyAqL1xcbmltZy5pY29uOmhvdmVyLFxcbi5kYXRlQ29udGFpbmVyOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBPTEQgKi9cXG4vKiAuY2hlY2tib3hDb250YWluZXI6aG92ZXIsXFxuLmRhdGVDb250YWluZXI6aG92ZXIsXFxuLmVkaXRDb250YWluZXI6aG92ZXIsXFxuLmVkaXREYXRlQ29udGFpbmVyOmhvdmVyLFxcbiNkZWxldGVJdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn0gKi9cXG5cXG4uZGF0ZUNvbnRhaW5lcixcXG5pbWcjZGVsZXRlSXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXI6YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg3NiUpIHNhdHVyYXRlKDIzMTIlKSBodWUtcm90YXRlKDEwOWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDclKTtcXG59XFxuXFxuI2RlbGV0ZUl0ZW06YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNyUpIHNlcGlhKDUxJSkgc2F0dXJhdGUoNTk1MSUpIGh1ZS1yb3RhdGUoMzUwZGVnKSBicmlnaHRuZXNzKDE0MCUpIGNvbnRyYXN0KDEzNiUpO1xcbn1cXG5cXG4uZWRpdENvbnRhaW5lcjphY3RpdmUsXFxuaW1nLmVkaXREYXRlSWNvbjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDM0JSkgc2F0dXJhdGUoMzYyMSUpIGh1ZS1yb3RhdGUoMzU5ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwOSUpO1xcbn1cXG5cXG4vKiAudGFza0NvbnRhaW5lciB7XFxuXFxufSAqL1xcblxcbnRkIGltZyB7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7ICovXFxuICAgIGNvbG9yOiAjMDA2NDAwO1xcbn1cXG5cXG4jY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRm9vdGVyIHN0eWxpbmcgKi9cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx3SEFBd0g7SUFDeEgseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixnREFBZ0Q7SUFDaEQseURBQXlEO0lBQ3pELFNBQVM7QUFDYjs7Ozs7O0FBTUEsbUJBQW1COztBQUVuQjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdHQUFnRztBQUNwRzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLHlDQUF5QztJQUN6QyxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7Ozs7OztBQU1BLGlCQUFpQjs7QUFFakI7SUFDSSxtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7Ozs7SUFNSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyx5Q0FBeUM7QUFDN0M7O0FBRUE7O0lBRUkseUNBQXlDO0lBQ3pDLHlDQUF5QztJQUN6QyxlQUFlO0FBQ25COztBQUVBOztJQUVJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7Ozs7O0FBTUEsaUJBQWlCOztBQUVqQjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixRQUFROztBQUVaOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHFDQUFxQzs7QUFFekM7O0FBRUE7O0lBRUkseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUkseUNBQXlDO0FBQzdDOztBQUVBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7Ozs7O0FBTUEsb0JBQW9COztBQUVwQjtJQUNJLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7Ozs7Ozs7OztHQVVHOzs7Ozs7QUFNSCxrQkFBa0I7O0FBRWxCO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLDZCQUE2QjtBQUNqQzs7QUFFQSxRQUFRO0FBQ1I7O0lBRUksZUFBZTtBQUNuQjtBQUNBLFFBQVE7QUFDUjs7Ozs7O0dBTUc7O0FBRUg7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUdBQWlHO0FBQ3JHOztBQUVBO0lBQ0ksZ0dBQWdHO0FBQ3BHOztBQUVBOztJQUVJLGlHQUFpRztBQUNyRzs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLDRCQUE0QjtJQUM1QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOzs7Ozs7QUFNQSxtQkFBbUI7O0FBRW5CO0lBQ0ksbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QywwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogc3RlZWxibHVlO1xcbiAgICAtLW1lbnUtY29sb3I6IHJnYigxNDUsIDE4OSwgMjI0KTtcXG4gICAgLS1hY2NlbnQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDIwLCAyMCwgMjApO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBjYWxjKDEwMHZ3IC0gMjUwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDExMHB4IGNhbGMoMTAwdmggLSAxMTBweCAtIDYycHgpIDYycHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogSGVhZGVyIHN0eWxpbmcgKi9cXG5cXG4ubG9nbyB7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgIC8qIHdoaXRlc21va2UgY29sb3IgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0ODAlKSBodWUtcm90YXRlKDIwMWRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCg5MiUpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA2cHggcmdiKDAsIDAsIDAsIDAuOCk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcblxcbi8qIE1lbnUgc3R5bGluZyAqL1xcblxcbi5tZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5pY29uIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxufVxcblxcbi5tZW51T3B0aW9ucyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tZW51T3B0aW9ucz5saSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkZXIge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLm1lbnVPcHRpb25zIGxpLFxcbi5wcm9qZWN0c0hlYWRlcixcXG4uY29udGVudFRpdGxlLFxcbi5hZGRUYXNrQnRuLFxcbi5hZGRQcm9qZWN0Rm9ybSxcXG50Ym9keT50ciB7XFxuICAgIG1hcmdpbjogMTBweCAxcmVtO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgICAgXFxufVxcblxcbnRib2R5PnRyLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSwgMC4zKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5tZW51T3B0aW9ucyBsaTpob3ZlcixcXG4uYWRkVGFza0J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1LCAwLjMpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMgbGk6YWN0aXZlLFxcbi5hZGRUYXNrQnRuOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ucHJvamVjdENsb3NlQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcblxcblxcblxcblxcbi8qIEZvcm0gc3R5bGluZyAqL1xcblxcbiNzaG93QmxvY2sge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI3Nob3dGbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2hpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGRQcm9qZWN0Rm9ybSxcXG4uYWRkVGFza0Zvcm0ge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYWRkVGFza0Zvcm0ge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5mb3JtUm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDhweDtcXG5cXG59XFxuXFxuI2Zvcm1CdXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4jbmV3VGFza0lucHV0LFxcbiNuZXdQcm9qZWN0SW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5hZGRCdG4sXFxuLmNhbmNlbEJ0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgICAgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgxMjAsIDczJSwgNTUlKTtcXG59XFxuXFxuLmNhbmNlbEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcXG4gICAgYm9yZGVyOiAycHggc29saWQgaHNsKDM1MSwgMTAwJSwgNzAlKTtcXG5cXG59XFxuXFxuLmFkZEJ0bjpob3ZlcixcXG4uY2FuY2VsQnRuOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZEJ0bjphY3RpdmUsXFxuLmNhbmNlbEJ0bjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLm5ld1Byb2pFcnJvckNvbnRhaW5lcixcXG4ubmV3VGFza0Vycm9yQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBDb250ZW50IHN0eWxpbmcgKi9cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcbn1cXG5cXG4vKiAuY29udGVudFRpdGxlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmFkZFRhc2tCdG4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufSAqL1xcblxcblxcblxcblxcblxcbi8qIFRhYmxlIHN0eWxpbmcgKi9cXG5cXG50YWJsZSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRib2R5PnRyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxudGQge1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBwaW5rOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG59XFxuXFxuLyogTkVXICovXFxuaW1nLmljb246aG92ZXIsXFxuLmRhdGVDb250YWluZXI6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi8qIE9MRCAqL1xcbi8qIC5jaGVja2JveENvbnRhaW5lcjpob3ZlcixcXG4uZGF0ZUNvbnRhaW5lcjpob3ZlcixcXG4uZWRpdENvbnRhaW5lcjpob3ZlcixcXG4uZWRpdERhdGVDb250YWluZXI6aG92ZXIsXFxuI2RlbGV0ZUl0ZW06aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufSAqL1xcblxcbi5kYXRlQ29udGFpbmVyLFxcbmltZyNkZWxldGVJdGVtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5jaGVja2JveENvbnRhaW5lcjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDc2JSkgc2F0dXJhdGUoMjMxMiUpIGh1ZS1yb3RhdGUoMTA5ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwNyUpO1xcbn1cXG5cXG4jZGVsZXRlSXRlbTphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGludmVydCg3JSkgc2VwaWEoNTElKSBzYXR1cmF0ZSg1OTUxJSkgaHVlLXJvdGF0ZSgzNTBkZWcpIGJyaWdodG5lc3MoMTQwJSkgY29udHJhc3QoMTM2JSk7XFxufVxcblxcbi5lZGl0Q29udGFpbmVyOmFjdGl2ZSxcXG5pbWcuZWRpdERhdGVJY29uOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDYwJSkgc2VwaWEoMzQlKSBzYXR1cmF0ZSgzNjIxJSkgaHVlLXJvdGF0ZSgzNTlkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTA5JSk7XFxufVxcblxcbi8qIC50YXNrQ29udGFpbmVyIHtcXG5cXG59ICovXFxuXFxudGQgaW1nIHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cXG4gICAgY29sb3I6ICMwMDY0MDA7XFxufVxcblxcbiNjb21wbGV0ZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBGb290ZXIgc3R5bGluZyAqL1xcblxcbmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5naXRodWIge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuaW1wb3J0IGxvZ29JY29uIGZyb20gJy4vYXNzZXRzL2NoZWNrLWRlY2FncmFtLW91dGxpbmUuc3ZnJztcbmltcG9ydCBnaXRodWJJY29uIGZyb20gJy4vYXNzZXRzL0dpdEh1Yi1saWdodC0zMnB4LnBuZyc7XG5cbmltcG9ydCB7IGNyZWF0ZUNoZWNrbGlzdEljb24gfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IHNldENvbnRlbnRUaXRsZSB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlV2Vla0ljb24gfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IGNyZWF0ZVRvZGF5SWNvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlQWRkaXRpb25JY29uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5cbmltcG9ydCB7IGRpc3BsYXlUYXNrcyB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuXG5cbi8vIEluaXRpYWxpemF0aW9uIGZ1bmN0aW9uc1xuY29uc3QgX2NyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIFxuICAgIC8vIGRpc3BsYXkgdGl0bGVcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbG9nby5zcmMgPSBsb2dvSWNvbjtcbiAgICBsb2dvLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGxvZ28uc2V0QXR0cmlidXRlKCdjbGFzcycsICdsb2dvJyk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaGluZ3MgVG8gRG8nO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgXG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5cbmNvbnN0IF9jcmVhdGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudScpO1xuXG4gICAgLy8gTWFpbiBtZW51XG4gICAgY29uc3QgbWVudU9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG1lbnVPcHRpb25zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudU9wdGlvbnMnKTtcbiAgICBcbiAgICBjb25zdCBhbGxUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWxsVGFza3Muc2V0QXR0cmlidXRlKCdjbGFzcycsICdhbGxUYXNrcycpO1xuICAgIGFsbFRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgc2V0Q29udGVudFRpdGxlKGUpXG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIH0pXG4gICAgY3JlYXRlQ2hlY2tsaXN0SWNvbihhbGxUYXNrcyk7XG4gICAgY29uc3QgYWxsVGFza3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFsbFRhc2tzVGV4dC50ZXh0Q29udGVudCA9ICdBbGwgdGFza3MnO1xuICAgIGFsbFRhc2tzLmFwcGVuZENoaWxkKGFsbFRhc2tzVGV4dClcbiAgICBtZW51T3B0aW9ucy5hcHBlbmRDaGlsZChhbGxUYXNrcyk7XG5cbiAgICBjb25zdCBkdWVUb2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZHVlVG9kYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkdWVUb2RheScpO1xuICAgIGR1ZVRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIHNldENvbnRlbnRUaXRsZShlKVxuICAgIH0pXG4gICAgY3JlYXRlVG9kYXlJY29uKGR1ZVRvZGF5KTtcbiAgICBjb25zdCBkdWVUb2RheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHVlVG9kYXlUZXh0LmlubmVyVGV4dCA9ICdEdWUgdG9kYXknO1xuICAgIGR1ZVRvZGF5LmFwcGVuZENoaWxkKGR1ZVRvZGF5VGV4dCk7XG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoZHVlVG9kYXkpO1xuXG4gICAgY29uc3QgZHVlV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZHVlV2Vlay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZVdlZWsnKTtcbiAgICBkdWVXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIHNldENvbnRlbnRUaXRsZShlKVxuICAgIH0pXG4gICAgY3JlYXRlV2Vla0ljb24oZHVlV2Vlayk7XG4gICAgY29uc3QgZHVlV2Vla1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHVlV2Vla1RleHQuaW5uZXJUZXh0ID0gJ0R1ZSB0aGlzIHdlZWsnO1xuICAgIGR1ZVdlZWsuYXBwZW5kQ2hpbGQoZHVlV2Vla1RleHQpO1xuICAgIG1lbnVPcHRpb25zLmFwcGVuZENoaWxkKGR1ZVdlZWspO1xuXG5cbiAgICAvLyBQcm9qZWN0cyBtZW51XG4gICAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdHNIZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0c0hlYWRlcicpXG4gICAgcHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gICAgY29uc3QgcHJvamVjdHNNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBwcm9qZWN0c01lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIHByb2plY3RzTWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzTWVudScpO1xuXG5cbiAgICAvLyBHZW5lcmF0ZSBhZGQgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudU9wdGlvbnMnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkUHJvamVjdEJ0bicpXG4gICAgY3JlYXRlQWRkaXRpb25JY29uKGFkZFByb2plY3QpXG4gICAgY29uc3QgYWRkUHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWRkUHJvamVjdFRleHQuaW5uZXJUZXh0ID0gJ0FkZCBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RUZXh0KVxuICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdClcblxuXG4gICAgLy8gR2VuZXJhdGUgYW5kIGhpZGUgbmV3IHByb2plY3QgZm9ybVxuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkUHJvamVjdEZvcm0nKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpXG4gICAgYWRkUHJvamVjdEZvcm0ubWV0aG9kID0gJ2dldCc7XG4gICAgY3JlYXRlRm9ybShhZGRQcm9qZWN0Rm9ybSk7XG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Rm9ybSlcblxuXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51T3B0aW9ucyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0c01lbnUpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdENvbnRhaW5lcik7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKG1lbnUpO1xufVxuXG5cbmNvbnN0IF9jcmVhdGVDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudCcpO1xuXG4gICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50VGl0bGUnKTtcbiAgICBjb250ZW50VGl0bGUuaW5uZXJUZXh0ID0gJ0FsbCB0YXNrcyc7XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudU9wdGlvbnMnKTtcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFxuICAgICAgICBgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nY2hlY2tib3hDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSd0YXNrQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZGF0ZUNvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2VkaXRDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSd0YXNrQ2xvc2VDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHkgaWQ9J3Rhc2tMaXN0Jz48L3Rib2R5PmBcbiAgICBcblxuICAgIC8vIENyZWF0ZSBhZGQgdGFzayBidXR0b25cbiAgICBjb25zdCBhZGRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudU9wdGlvbnMnKTtcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRUYXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkVGFza0J0bicpO1xuICAgIGNyZWF0ZUFkZGl0aW9uSWNvbihhZGRUYXNrKTtcbiAgICBjb25zdCBhZGRUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRUYXNrVGV4dC5pbm5lclRleHQgPSAnQWRkIHRhc2snO1xuICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQoYWRkVGFza1RleHQpO1xuICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG5cbiAgICAvLyBHZW5lcmF0ZSBhbmQgaGlkZSBuZXcgdGFzayBmb3JtXG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRUYXNrRm9ybScpO1xuICAgIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICBhZGRUYXNrRm9ybS5tZXRob2QgPSAnZ2V0JztcbiAgICBjcmVhdGVGb3JtKGFkZFRhc2tGb3JtKTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0pO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuXG5jb25zdCBfY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG5cbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gamNhbXBiZWxsNTdgO1xuICBcbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcnO1xuICAgIGdpdGh1YkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIFxuICAgIGNvbnN0IG5ld0dpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdHaXRodWJJY29uLnNyYyA9IGdpdGh1Ykljb247XG4gICAgbmV3R2l0aHViSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dpdGh1YicpO1xuXG4gICAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChuZXdHaXRodWJJY29uKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cblxuY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBfY3JlYXRlSGVhZGVyKCk7XG4gICAgX2NyZWF0ZU1lbnUoKTtcbiAgICBfY3JlYXRlQ29udGVudCgpO1xuICAgIF9jcmVhdGVGb290ZXIoKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTsiLCJpbXBvcnQgY2hlY2tib3hCbGFuayBmcm9tICcuL2Fzc2V0cy9jaGVja2JveC1ibGFuay5zdmcnO1xuaW1wb3J0IGNoZWNrYm94TWFya2VkIGZyb20gJy4vYXNzZXRzL2NoZWNrYm94LW1hcmtlZC5zdmcnO1xuaW1wb3J0IGNoZWNrbGlzdCBmcm9tICcuL2Fzc2V0cy9jaGVja2xpc3Quc3ZnJztcbmltcG9ydCBjYWxlbmRhclRvZGF5IGZyb20gJy4vYXNzZXRzL2NhbGVuZGFyLXRvZGF5LnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJXZWVrIGZyb20gJy4vYXNzZXRzL2NhbGVuZGFyLXJhbmdlLnN2Zyc7XG5pbXBvcnQgYWRkaXRpb25JY29uIGZyb20gJy4vYXNzZXRzL3BsdXMuc3ZnJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2Fzc2V0cy9lZGl0LnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJFZGl0SWNvbiBmcm9tICcuL2Fzc2V0cy9jYWxlbmRhci1lZGl0LnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2Fzc2V0cy9kZWxldGUuc3ZnJztcblxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90YXNrcyc7XG5cblxuXG4vLyBJY29uICYgYnV0dG9uIGdlbmVyYXRvcnMgXG5jb25zdCBjcmVhdGVDaGVja2JveEljb24gPSAodGQpID0+IHtcbiAgICBjb25zdCBjaGVja2JveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGVja2JveEljb24uc3JjID0gY2hlY2tib3hCbGFuaztcbiAgICBjaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gICAgY2hlY2tib3hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9tYXJrQ29tcGxldGUoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQoY2hlY2tib3hJY29uKTtcbn0gXG5cbmNvbnN0IF9jcmVhdGVNYXJrZWRDaGVja2JveEljb24gPSAodGQpID0+IHtcbiAgICBjb25zdCBtYXJrZWRDaGVja2JveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYXJrZWRDaGVja2JveEljb24uc3JjID0gY2hlY2tib3hNYXJrZWQ7XG4gICAgbWFya2VkQ2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICAgIG1hcmtlZENoZWNrYm94SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfbWFya0luY29tcGxldGUoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQobWFya2VkQ2hlY2tib3hJY29uKTtcbn0gXG5cbmNvbnN0IGNyZWF0ZUNoZWNrbGlzdEljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBjaGVja2xpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2hlY2tsaXN0SWNvbi5zcmMgPSBjaGVja2xpc3Q7XG4gICAgY2hlY2tsaXN0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKGNoZWNrbGlzdEljb24pO1xufVxuXG5jb25zdCBjcmVhdGVFZGl0SWNvbiA9ICh0ZCkgPT4ge1xuICAgIGNvbnN0IG5ld0VkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3RWRpdEljb24uc3JjID0gZWRpdEljb247XG4gICAgbmV3RWRpdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gICAgLy9ldmVudCBsaXN0ZW5lciB0byBvcGVuIHRhc2sgY2FyZFxuICAgIG5ld0VkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9zaG93VGFza0NhcmQoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQobmV3RWRpdEljb24pO1xufVxuXG5jb25zdCBjcmVhdGVDYWxlbmRhckVkaXRJY29uID0gKHRkKSA9PiB7XG4gICAgY29uc3QgbmV3Q2FsZW5kYXJFZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0NhbGVuZGFyRWRpdEljb24uc3JjID0gY2FsZW5kYXJFZGl0SWNvbjtcbiAgICBuZXdDYWxlbmRhckVkaXRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbiBlZGl0RGF0ZUljb24nKVxuICAgIG5ld0NhbGVuZGFyRWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIH0pXG4gICAgdGQuYXBwZW5kQ2hpbGQobmV3Q2FsZW5kYXJFZGl0SWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZURlbGV0ZUljb24gPSAoY29udGFpbmVyKSA9PiB7XG4gICAgLy8gY3JlYXRlIGltYWdlIGFuZCBhc3NpZ24gYXR0cmlidXRlc1xuICAgIGNvbnN0IG5ld0RlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdEZWxldGVJY29uLnNyYyA9IGRlbGV0ZUljb247XG4gICAgbmV3RGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIG5ld0RlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVJdGVtJylcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ3Rhc2tDbG9zZUNvbnRhaW5lcicpIHtcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gZGVsZXRlIHRhc2tcbiAgICAgICAgbmV3RGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfZGVsZXRlVGFzayhlKSlcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdwcm9qZWN0Q2xvc2VDb250YWluZXInKSB7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSBwcm9qZWN0XG4gICAgICAgIG5ld0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX2RlbGV0ZVByb2plY3QoZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgc3RyYW5nZScpO1xuICAgIH1cbiAgICAvLyBhcHBlbmQgdG8gY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0RlbGV0ZUljb24pXG59XG5cbmNvbnN0IGNyZWF0ZUFkZGl0aW9uSWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IG5ld0FkZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0FkZGl0aW9uSWNvbi5zcmMgPSBhZGRpdGlvbkljb247XG4gICAgbmV3QWRkaXRpb25JY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQobmV3QWRkaXRpb25JY29uKTtcbn1cblxuY29uc3QgY3JlYXRlVG9kYXlJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3VG9kYXlJY29uLnNyYyA9IGNhbGVuZGFyVG9kYXk7XG4gICAgbmV3VG9kYXlJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQobmV3VG9kYXlJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlV2Vla0ljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBuZXdXZWVrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld1dlZWtJY29uLnNyYyA9IGNhbGVuZGFyV2VlaztcbiAgICBuZXdXZWVrSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKG5ld1dlZWtJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlQWRkQnV0dG9uID0gKGNvbnRhaW5lciwgaSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbnRhaW5lcilcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRCdG4nKTtcbiAgICBhZGRCdG4uaW5uZXJUZXh0ID0gXCJzdWJtaXRcIjtcbiAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2FyZFJvdzMnKSkge1xuICAgICAgICAvLyBjb252ZXJ0IGNhcmQgdG8gZm9ybT8gYW5kIGNoYW5nZSB0aGlzIGV2ZW50IGxpc3RlbmVyIHRvIHRyaWdnZXIgd2hlbiBmb3JtIHN1Ym1pdHNcbiAgICAgICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX3N1Ym1pdFRhc2tDYXJkKGUpKVxuICAgIH07XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG59XG5cbmNvbnN0IGNyZWF0ZUNhbmNlbEJ1dHRvbiA9IChjb250YWluZXIsIGkpID0+IHtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYW5jZWxCdG4nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgY2FuY2VsQnRuLmlubmVyVGV4dCA9IFwiY2FuY2VsXCI7XG4gICAgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdjYXJkUm93MycpIHtcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2hpZGVUYXNrQ2FyZChpKSlcbiAgICB9O1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pOyAgIFxufVxuXG5cblxuLy8gQ29udGFpbmVyIEFORCBpY29uIGdlbmVyYXRvcnMgKEZvciB0YXNrIGxpc3RpbmcgYW5kIHRhc2sgY2FyZClcbmNvbnN0IGNyZWF0ZUNoZWNrYm94Q29udGFpbmVyID0gKHRyKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNoZWNrYm94Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tib3hDb250YWluZXInKTtcbiAgICBjcmVhdGVDaGVja2JveEljb24oY2hlY2tib3hDb250YWluZXIpO1xuICAgIHRyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKTtcbn1cblxuY29uc3QgY3JlYXRlRGF0ZUNvbnRhaW5lciA9ICh0ciwgdGFzaywgaSkgPT4ge1xuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGRhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXRlQ29udGFpbmVyJyk7XG4gICAgaWYgKHRyLmNsYXNzTGlzdC5jb250YWlucygnZWRpdERhdGVDb250YWluZXInKSkge1xuICAgICAgICBkYXRlQ29udGFpbmVyLmlubmVySFRNTCA9IGA8aW5wdXQgY2xhc3M9J3Rhc2tDYXJkRGF0ZSR7aX0nIHR5cGU9J2RhdGUnIHZhbHVlPScke3Rhc2suZGF0ZX0nPmBcbiAgICB9IGVsc2Uge1xuICAgIGRhdGVDb250YWluZXIuaW5uZXJUZXh0ID0gYCR7dGFzay5kYXRlfWBcbiAgICB9XG4gICAgdHIuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG59XG5cbmNvbnN0IGNyZWF0ZURlbGV0ZUNvbnRhaW5lciA9ICh0cikgPT4ge1xuICAgIGNvbnN0IGNsb3NlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjbG9zZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tDbG9zZUNvbnRhaW5lcicpO1xuICAgIGNyZWF0ZURlbGV0ZUljb24oY2xvc2VDb250YWluZXIpO1xuICAgIHRyLmFwcGVuZENoaWxkKGNsb3NlQ29udGFpbmVyKTtcbn1cblxuXG5cbi8vIEZvcm0gZ2VuZXJhdG9yXG5jb25zdCBjcmVhdGVGb3JtID0gKGZvcm0pID0+IHtcbiAgICBcbiAgICBjb25zdCBmb3JtUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3cxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybVJvdycpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1Sb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvdzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtUm93Jyk7XG4gICAgZm9ybVJvdzIuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtQnV0dG9ucycpO1xuXG4gICAgY29uc3QgZm9ybVJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xuXG4gICAgLy8gcm93IG9uZTogYXNzaWduIGlucHV0IGFjY29yZGluZyB0byBjbGFzcyBvZiBmb3JtXG4gICAgLy8gcm93IHRocmVlOiBhc3NpZ24gZXJyb3IgY2xhc3MgYW5kIHRleHQgYWNjb3JkaW5nIHRvIGNsYXNzIG9mIGZvcm1cbiAgICBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRQcm9qZWN0Rm9ybScpIHtcbiAgICAgICAgZm9ybVJvdzEuaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25ld1Byb2plY3RJbnB1dCcgbmFtZT0nbmV3UHJvamVjdElucHV0Jz48L2lucHV0PlwiO1xuICAgICAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld1Byb2pFcnJvckNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtUm93My5pbm5lclRleHQgPSAnTmFtZSB5b3VyIHByb2plY3QhJ1xuICAgIH0gZWxzZSBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRUYXNrRm9ybScpIHtcbiAgICAgICAgZm9ybVJvdzEuaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25ld1Rhc2tJbnB1dCcgbmFtZT0nbmV3VGFza0lucHV0Jz48L2lucHV0PlwiO1xuICAgICAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld1Rhc2tFcnJvckNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtUm93My5pbm5lclRleHQgPSAnTmFtZSB5b3VyIHRhc2shJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHN0cmFuZ2UnKVxuICAgIH1cblxuICAgIC8vIHJvdyB0d286IHN1Ym1pdCBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgICBjcmVhdGVBZGRCdXR0b24oZm9ybVJvdzIpO1xuICAgIGNyZWF0ZUNhbmNlbEJ1dHRvbihmb3JtUm93Mik7XG4gICAgICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93MSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93Mik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93Myk7XG59XG5cblxuXG5cblxuLy8gRE9NIG1vZGlmaWNhdGlvbiBmdW5jdGlvbnNcblxuLy8gUFJPSkVDVFNcbi8vIERpc3BsYXkgZW50aXJlIGFycmF5IG9mIHByb2plY3RzIHRvIG1lbnVcbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAvLyBHcmFiIHByb2plY3RzIG1lbnVcbiAgICBjb25zdCBwcm9qZWN0c01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHNNZW51Jyk7XG5cbiAgICAvLyBDbGVhciBwcm9qZWN0cyBtZW51XG4gICAgY29uc3Qgb2xkUHJvakNvdW50ID0gcHJvamVjdHNNZW51LmNoaWxkRWxlbWVudENvdW50XG4gICAgZm9yIChsZXQgaT0wOyBpPG9sZFByb2pDb3VudDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RzTWVudS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIEFkZCBzaW5nbGUgcHJvamVjdCB0byBtZW51IChjYWxsZWQgYmVsb3cpXG4gICAgY29uc3QgX2Rpc3BsYXlQcm9qZWN0ID0gKG5ld1Byb2osIGkpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBwcm9qZWN0YClcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKVxuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgICAgICAgICAgc2V0Q29udGVudFRpdGxlKGUpXG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfSlcbiAgICAgICAgY3JlYXRlQ2hlY2tsaXN0SWNvbihuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG5ld1Byb2plY3RUZXh0LnRleHRDb250ZW50ID0gbmV3UHJvajtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGV4dClcbiAgICAgICAgLy8gZXh0cmEgd3JhcHBlciBzbyBldmVudCBsaXN0ZW5lcnMgd29yayBvbiBib3RoIHRhc2tzIGFuZCBwcm9qZWN0c1xuICAgICAgICBjb25zdCBjbG9zZUNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjbG9zZUNvbnRhaW5lckRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RDbG9zZUNvbnRhaW5lcicpXG4gICAgICAgIGNyZWF0ZURlbGV0ZUljb24oY2xvc2VDb250YWluZXJEaXYpOyAgICBcbiAgICAgICAgLy8gY3JlYXRlRGVsZXRlSWNvbihuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUNvbnRhaW5lckRpdilcbiAgICAgICAgcHJvamVjdHNNZW51LmFwcGVuZENoaWxkKG5ld1Byb2plY3RDb250YWluZXIpO1xuICAgIH0gXG5cbiAgICAvLyBBcHBlbmQgYWxsIHRhc2tzIHRvIHRhc2tsaXN0XG4gICAgbGV0IGk9MFxuICAgIHByb2plY3RzLmFsbC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBfZGlzcGxheVByb2plY3QocHJvamVjdCwgaSlcbiAgICAgICAgaSsrXG4gICAgfSk7XG59XG5cblxuXG4vLyBEZWxldGUgcHJvamVjdFxuY29uc3QgX2RlbGV0ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIGxldCBkb29tZWRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgcHJvamVjdHMuYWxsLnNwbGljZShkb29tZWRJbmRleCwgMSk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG59XG5cblxuXG5cblxuLy8gVEFTS1Ncbi8vIERpc3BsYXkgZW50aXJlIGFycmF5IG9mIHRhc2tzIHRvIHRhc2tsaXN0XG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG5cbiAgICAvLyBHcmFiIHRhc2tsaXN0XG4gICAgY29uc3QgdGFza2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKTtcbiAgICBcbiAgICAvLyBjbGVhciB0YXNrbGlzdFxuICAgIGNvbnN0IG9sZFRhc2tDb3VudCA9IHRhc2tsaXN0LmNoaWxkRWxlbWVudENvdW50XG4gICAgZm9yIChsZXQgaT0wOyBpPG9sZFRhc2tDb3VudDsgaSsrKSB7XG4gICAgICAgIHRhc2tsaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gQWRkIHNpbmdsZSB0YXNrIHRvIHRhc2tsaXN0IGRpc3BsYXlcbiAgICBjb25zdCBfY3JlYXRlVGFza0xpc3RpbmcgPSAodGFzaywgaSkgPT4ge1xuICAgICAgICAvLyBjcmVhdGUgdGFzayBjb250YWluZXJcbiAgICAgICAgY29uc3QgbmV3TGlzdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIG5ld0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBpbmNvbXBsZXRlIHRhc2sgbGlzdGluZyR7aX1gKTtcbiAgICAgICAgbmV3TGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCBjaGVja2JveFxuICAgICAgICBjcmVhdGVDaGVja2JveENvbnRhaW5lcihuZXdMaXN0aW5nKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCB0YXNrXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza0NvbnRhaW5lcicpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVyVGV4dCA9IGAke3Rhc2sudGFza31gO1xuICAgICAgICBuZXdMaXN0aW5nLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgICAgIC8vIGFkZCBkYXRlXG4gICAgICAgIGNyZWF0ZURhdGVDb250YWluZXIobmV3TGlzdGluZywgdGFzayk7XG5cbiAgICAgICAgLy8gYWRkIGVkaXQgYnV0dG9uXG4gICAgICAgIGNvbnN0IGVkaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBlZGl0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdENvbnRhaW5lcicpO1xuICAgICAgICBjcmVhdGVFZGl0SWNvbihlZGl0Q29udGFpbmVyKTtcbiAgICAgICAgbmV3TGlzdGluZy5hcHBlbmRDaGlsZChlZGl0Q29udGFpbmVyKTtcblxuICAgICAgICAvLyBhZGQgZGVsZXRlIGJ1dHRvblxuICAgICAgICBjcmVhdGVEZWxldGVDb250YWluZXIobmV3TGlzdGluZyk7XG5cbiAgICAgICAgLy9hcHBlbmQgdGFzayB0byB0YXNrbGlzdFxuICAgICAgICB0YXNrbGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0aW5nKTtcblxuXG5cbiAgICAgICAgLy8gc2V0IGRpc3BsYXkgZmlsdGVyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VGl0bGUnKS50ZXh0Q29udGVudFxuXG4gICAgICAgIC8vIGRhdGUgZmlsdGVyc1xuICAgICAgICBpZiAoZmlsdGVyID09PSAnQWxsIHRhc2tzJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gJ0R1ZSB0b2RheScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSAnRHVlIHRoaXMgd2VlaycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XG4gICAgICAgIH0gXG5cbiAgICAgICAgLy8gcHJvamVjdCBmaWx0ZXJcbiAgICAgICAgcHJvamVjdHMuYWxsLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdCA9PT0gZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2sucHJvamVjdCAhPT0gZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgfTsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBcblxuICAgIC8vIENyZWF0ZSBhbmQgaGlkZSB0YXNrIGNhcmQgaW4gdGFza2xpc3QgZGlzcGxheVxuICAgIGNvbnN0IF9jcmVhdGVUYXNrQ2FyZCA9ICh0YXNrLCBpKSA9PiB7XG4gICAgICAgIC8vIENSRUFURSBUQVNLIENBUkRcbiAgICAgICAgY29uc3QgbmV3Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcbiAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYGluY29tcGxldGUgdGFzayBjYXJkJHtpfWApO1xuICAgICAgICBuZXdDYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgaGlkZGVuYCk7XG5cbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIG5ld0NhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmNvbXBsZXRlIG1lbnVPcHRpb25zJyk7XG4gICAgICAgIG5ld0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgZGVsZXRlIGJ1dHRvblxuICAgICAgICBjcmVhdGVEZWxldGVDb250YWluZXIobmV3Q2FyZCk7XG5cbiAgICAgICAgY29uc3QgbmV3VGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICAgICAgICBuZXdUaGVhZC5pbm5lckhUTUwgPSBcbiAgICAgICAgICAgIGA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdjaGVja2JveENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J3Rhc2tDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdkYXRlQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZWRpdENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgIDwvdHI+YFxuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRib2R5XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrQ2FyZCcpO1xuICAgICAgICBcblxuICAgICAgICAvLyBGaXJzdCByb3dcbiAgICAgICAgY29uc3QgY2FyZFJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3cxJylcbiAgICAgICAgLy8gYWRkIHRhc2sgbmFtZSBpbnB1dFxuICAgICAgICBjb25zdCB0YXNrSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrSW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrSW5wdXRDb250YWluZXJgKTtcbiAgICAgICAgdGFza0lucHV0Q29udGFpbmVyLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9J3Rhc2tDYXJkVGFzayR7aX0nIGlkPSduZXdUYXNrSW5wdXQnIG5hbWU9J25ld1Rhc2tJbnB1dCcgdmFsdWU9JyR7dGFzay50YXNrfSc+PC9pbnB1dD5gO1xuICAgICAgICBjYXJkUm93MS5hcHBlbmRDaGlsZCh0YXNrSW5wdXRDb250YWluZXIpO1xuICAgICAgICAvLyBhZGQgZGF0ZVxuICAgICAgICBjb25zdCBlZGl0RGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGVkaXREYXRlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgZWRpdERhdGVDb250YWluZXJgKTtcbiAgICAgICAgY3JlYXRlRGF0ZUNvbnRhaW5lcihlZGl0RGF0ZUNvbnRhaW5lciwgdGFzaywgaSk7XG4gICAgICAgIGNhcmRSb3cxLmFwcGVuZENoaWxkKGVkaXREYXRlQ29udGFpbmVyKTtcbiAgICAgICAgLy8gYWRkIGNhbGVuZGFyIGVkaXQgYnV0dG9uXG4gICAgICAgIGNyZWF0ZUNhbGVuZGFyRWRpdEljb24oY2FyZFJvdzEpO1xuXG5cblxuICAgICAgICAvLyBTZWNvbmQgcm93IFxuICAgICAgICBjb25zdCBjYXJkUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNhcmRSb3cyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZFJvdzInKVxuICAgICAgICBcbiAgICAgICAgLy8gYWRkIGNoZWNrYm94XG4gICAgICAgIC8vIGNyZWF0ZUNoZWNrYm94Q29udGFpbmVyKGNhcmRSb3cyKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHByb2plY3QgaW5wdXQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHByb2plY3RJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RJbnB1dENvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIHByb2plY3QgZHJvcGRvd24gXG4gICAgICAgIGNvbnN0IHByb2plY3REcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAgIHByb2plY3REcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2tDYXJkUHJvamVjdCR7aX1gKVxuICAgICAgICBwcm9qZWN0RHJvcGRvd24uc2V0QXR0cmlidXRlKCdpZCcsICduZXdUYXNrSW5wdXQnKVxuICAgICAgICBwcm9qZWN0RHJvcGRvd24uc2V0QXR0cmlidXRlKCduYW1lJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgICAgIHByb2plY3REcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dGFzay5wcm9qZWN0fWApXG5cbiAgICAgICAgLy8gY3JlYXRlIHByb2plY3QgZHJvcGRvd24gb3B0aW9uc1xuICAgICAgICAvLyBibGFuayBvcHRpb24gZm9yIG5vIHByb2plY3RcbiAgICAgICAgY29uc3QgYmxhbmtQcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgYmxhbmtQcm9qZWN0T3B0aW9uLnZhbHVlID0gJydcbiAgICAgICAgYmxhbmtQcm9qZWN0T3B0aW9uLnRleHQgPSAnJ1xuICAgICAgICBwcm9qZWN0RHJvcGRvd24uYXBwZW5kQ2hpbGQoYmxhbmtQcm9qZWN0T3B0aW9uKVxuICAgICAgICAvLyByZW1haW5pbmcgb3B0aW9ucyBnZW5lcmF0ZWQgZnJvbSBwcm9qZWN0cyBhcnJheVxuICAgICAgICBwcm9qZWN0cy5hbGwuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IGAke3Byb2plY3R9YFxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0ID0gYCR7cHJvamVjdH1gXG4gICAgICAgICAgICBpZiAodGFzay5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REcm9wZG93bilcbiAgICAgICAgY2FyZFJvdzIuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0Q29udGFpbmVyKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gcHJpb3JpdHkgaW5wdXQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHlJbnB1dENvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIHByaW9yaXR5IGRyb3Bkb3duIFxuICAgICAgICBjb25zdCBwcmlvcml0eURyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2tDYXJkUHJpb3JpdHkke2l9YClcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCduYW1lJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3Rhc2sucHJpb3JpdHl9YClcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBwcmlvcml0eSBkcm9wZG93biBvcHRpb25zXG4gICAgICAgIC8vIGhpZ2ggcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgcHJpb3JpdHlIaWdoLnZhbHVlID0gJ2hpZ2gnXG4gICAgICAgIHByaW9yaXR5SGlnaC50ZXh0ID0gJ0hpZ2gnXG4gICAgICAgIC8vIG1lZGl1bSBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByaW9yaXR5TWVkaXVtLnZhbHVlID0gJ21lZGl1bSdcbiAgICAgICAgcHJpb3JpdHlNZWRpdW0udGV4dCA9ICdNZWRpdW0nXG4gICAgICAgIC8vIGxvdyBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByaW9yaXR5TG93LnZhbHVlID0gJ2xvdydcbiAgICAgICAgcHJpb3JpdHlMb3cudGV4dCA9ICdMb3cnXG4gICAgICAgIFxuICAgICAgICAvLyBwcmlvcml0eSBzZWxlY3Rpb25cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICBwcmlvcml0eUhpZ2guc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgIHByaW9yaXR5TG93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIFxuICAgICAgICBwcmlvcml0eU1lZGl1bS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAvLyBhcHBlbmQgcHJpb3JpdHkgaW5wdXQgdG8gcm93XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoKTtcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5hcHBlbmRDaGlsZChwcmlvcml0eU1lZGl1bSk7XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3cpOyAgICAgICAgXG4gICAgICAgIHByaW9yaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlEcm9wZG93bik7ICAgICAgICBcbiAgICAgICAgY2FyZFJvdzIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dENvbnRhaW5lcik7XG5cblxuXG4gICAgICAgIC8vIFRoaXJkIHJvdyBcbiAgICAgICAgY29uc3QgY2FyZFJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3czJylcbiAgICAgICAgY3JlYXRlQWRkQnV0dG9uKGNhcmRSb3czLCBpKTtcbiAgICAgICAgY3JlYXRlQ2FuY2VsQnV0dG9uKGNhcmRSb3czLCBgJHtpfWApO1xuXG5cblxuICAgICAgICAvLyBhcHBlbmQgdGFzayBjYXJkIHRvIHRhc2tsaXN0XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNhcmRSb3cxKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFJvdzIpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjYXJkUm93Myk7XG5cbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChuZXdUaGVhZCk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG5cbiAgICAgICAgdGFza2xpc3QuYXBwZW5kQ2hpbGQobmV3Q2FyZENvbnRhaW5lcik7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gYXBwZW5kIGFsbCB0YXNrcyB0byB0YXNrbGlzdFxuICAgIGxldCBpPTBcbiAgICB0YXNrcy5hbGwuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgX2NyZWF0ZVRhc2tMaXN0aW5nKHRhc2ssIGkpO1xuICAgICAgICBfY3JlYXRlVGFza0NhcmQodGFzaywgaSk7XG4gICAgICAgIGkrK1xuICAgIH0pO1xufVxuXG5cblxuXG5cbi8vIENvbXBsZXRlIHRhc2tcbmNvbnN0IF9tYXJrQ29tcGxldGUgPSAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXBsZXRlJyk7XG4gICAgbGV0IGNoZWNrYm94Q29udGFpbmVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudFxuICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xuICAgIF9jcmVhdGVNYXJrZWRDaGVja2JveEljb24oY2hlY2tib3hDb250YWluZXIpXG59XG5cbi8vIEluY29tcGxldGUgdGFza1xuY29uc3QgX21hcmtJbmNvbXBsZXRlID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdpZCcsICcnKTtcbiAgICBsZXQgY2hlY2tib3hDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgZS50YXJnZXQucmVtb3ZlKCk7XG4gICAgY3JlYXRlQ2hlY2tib3hJY29uKGNoZWNrYm94Q29udGFpbmVyKVxufVxuXG4vLyBTaG93IHRhc2sgY2FyZFxuY29uc3QgX3Nob3dUYXNrQ2FyZCA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza0lEID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAvLyBzaG93IHRhc2sgY2FyZFxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmQke3Rhc2tJRH1gKTtcbiAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza0lEfWApO1xuICAgIC8vaGlkZSB0YXNrIGxpc3RpbmdcbiAgICBjb25zdCB0YXNrTGlzdGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saXN0aW5nJHt0YXNrSUR9YCk7XG4gICAgdGFza0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKTtcbn1cblxuY29uc3QgX3N1Ym1pdFRhc2tDYXJkID0gKGUpID0+IHtcbiAgICBjb25zdCB0YXNrSUQgPSAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpKSBcblxuICAgIC8vIEdldCBpbnB1dCB2YWx1ZXNcbiAgICBjb25zdCB1cGRhdGVkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrQ2FyZFRhc2ske3Rhc2tJRH1gKS52YWx1ZVxuICAgIGNvbnN0IHVwZGF0ZWREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tDYXJkRGF0ZSR7dGFza0lEfWApLnZhbHVlXG4gICAgY29uc3QgdXBkYXRlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza0NhcmRQcm9qZWN0JHt0YXNrSUR9YCkudmFsdWVcbiAgICBjb25zdCB1cGRhdGVkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza0NhcmRQcmlvcml0eSR7dGFza0lEfWApLnZhbHVlXG5cbiAgICAvLyBBcHBseSBpbnB1dCB2YWx1ZXMgdG8gdGFzayBvYmplY3RcbiAgICB0YXNrcy5hbGxbdGFza0lEXS50YXNrID0gdXBkYXRlZFRhc2tcbiAgICB0YXNrcy5hbGxbdGFza0lEXS5kYXRlID0gdXBkYXRlZERhdGVcbiAgICB0YXNrcy5hbGxbdGFza0lEXS5wcm9qZWN0ID0gdXBkYXRlZFByb2plY3RcbiAgICB0YXNrcy5hbGxbdGFza0lEXS5wcmlvcml0eSA9IHVwZGF0ZWRQcmlvcml0eVxuXG4gICAgLy8gUmVmcmVzaCB0YXNrbGlzdFxuICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRhc2tzLmFsbFt0YXNrSURdKVxuICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrQ2FyZFByaW9yaXR5JHt0YXNrSUR9YCkpXG59XG5cbi8vIEhpZGUgdGFzayBjYXJkXG5jb25zdCBfaGlkZVRhc2tDYXJkID0gKGkpID0+IHtcbiAgICAvLyBzaG93IHRhc2sgbGlzdGluZ1xuICAgIGNvbnN0IHRhc2tMaXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3Rpbmcke2l9YCk7XG4gICAgdGFza0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgLy8gaGlkZSB0YXNrIGNhcmRcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkJHtpfWApO1xuICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG59XG5cbi8vIERlbGV0ZSB0YXNrXG5jb25zdCBfZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgbGV0IGRvb21lZEluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICB0YXNrcy5hbGwuc3BsaWNlKGRvb21lZEluZGV4LCAxKTtcbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuXG5cblxuXG4vLyBUQVNLIERJU1BMQVkgT1BUSU9OU1xuXG5jb25zdCBzZXRDb250ZW50VGl0bGUgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09ICdkZWxldGVJdGVtJykge1xuICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJylcbiAgICAgICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gZS50YXJnZXQuaW5uZXJUZXh0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbn1cblxuXG5cblxuXG5leHBvcnQge1xuICAgIC8vIFVzZWQgaW4gaW5kZXggJiBjb3JlXG5cblxuICAgIC8vIFVzZWQgb25seSBpbiBjb3JlXG4gICAgY3JlYXRlRm9ybSxcbiAgICBjcmVhdGVDaGVja2xpc3RJY29uLFxuICAgIGNyZWF0ZVdlZWtJY29uLFxuICAgIGNyZWF0ZVRvZGF5SWNvbixcbiAgICBjcmVhdGVBZGRpdGlvbkljb24sXG4gICAgc2V0Q29udGVudFRpdGxlLFxuXG4gICAgLy8gVXNlZCBvbmx5IGluIGluZGV4XG4gICAgY3JlYXRlQ2hlY2tib3hJY29uLFxuICAgIGNyZWF0ZUVkaXRJY29uLFxuICAgIGNyZWF0ZUNhbGVuZGFyRWRpdEljb24sXG4gICAgY3JlYXRlRGVsZXRlSWNvbixcbiAgICBjcmVhdGVBZGRCdXR0b24sXG4gICAgY3JlYXRlQ2FuY2VsQnV0dG9uLFxuXG4gICAgZGlzcGxheVByb2plY3RzLFxuICAgIGRpc3BsYXlUYXNrcyxcbn0iLCJjbGFzcyB0YXNrcyB7XG4gICAgc3RhdGljIGFsbCA9IFtdO1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvciAobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2sgPSBuZXdUYXNrXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlXG4gICAgfVxuXG5cblxufTtcblxuXG5cbmNsYXNzIHByb2plY3RzIHtcbiAgICBzdGF0aWMgYWxsID0gW107XG5cblxuXG4gICAgY29uc3RydWN0b3IgKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb2plY3ROYW1lXG4gICAgfVxuXG5cblxufVxuXG5cblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0cyxcbiAgICB0YXNrcyxcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdGFza3MnO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3Rhc2tzJztcblxuXG4vLyBQYWdlIGluaXRpYWxpemF0aW9uXG4vLyBpbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vY29yZSdcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbml0aWFsaXplKCk7XG5cblxuXG4vLyBHcmFiIERPTSBlbGVtZW50c1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnRuJyk7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Rm9ybScpXG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdElucHV0Jyk7XG5jb25zdCBuZXdQcm9qRXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvakVycm9yQ29udGFpbmVyJyk7XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0J0bicpO1xuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0Zvcm0nKTtcbmNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrSW5wdXQnKTtcbmNvbnN0IG5ld1Rhc2tFcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUYXNrRXJyb3JDb250YWluZXInKTtcblxuXG5cbi8vIERPTSBtb2RpZmljYXRpb24gZnVuY3Rpb25zXG5cbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5cblxuXG5cblxuLy8gUFJPSkVDVCBGT1JNXG4vLyBTaG93L2hpZGUgbmV3IHByb2plY3QgZm9ybVxuY29uc3QgX3Nob3dBZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBpZiAoYWRkVGFza0Zvcm0uZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnc2hvd0Jsb2NrJykge1xuICAgICAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd0ZsZXgnKVxuICAgICAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpXG4gICAgfVxuICAgIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd0Jsb2NrJylcbn1cblxuXG4vLyBWZXJpZnkgbmV3IHByb2plY3QgZm9ybSBzdWJtaXNzaW9uXG5jb25zdCBfc3VibWl0TmV3UHJvamVjdEZvcm0gPSAoZSkgPT4ge1xuICAgIC8vIHByZXZlbnQgYWN0dWFsIGZvcm0gc3VibWlzc2lvblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHN1Ym1pdFByb2ogPSAobmV3UHJvaikgPT4ge1xuICAgICAgICBwcm9qZWN0cy5hbGwucHVzaChuZXdQcm9qKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IF9oaWRlQWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93RmxleCcpXG4gICAgICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICAgICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICAgIFxuICAgIC8vIHZlcmlmeSBvciBjYW5jZWwgc3VibWlzc2lvblxuICAgIGlmIChlLnN1Ym1pdHRlci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRCdG4nICYmIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgLy8gc2hvdyBwcm9qZWN0IG5hbWUgZXJyb3JcbiAgICAgICAgbmV3UHJvakVycm9yQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd0Jsb2NrJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGUuc3VibWl0dGVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZEJ0bicpIHtcbiAgICAgICAgLy8gc3VibWl0IG5ldyBwcm9qZWN0XG4gICAgICAgIGNvbnN0IG5ld1Byb2ogPSBuZXdQcm9qZWN0SW5wdXQudmFsdWVcbiAgICAgICAgc3VibWl0UHJvaihuZXdQcm9qKTtcbiAgICB9XG4gICAgX2hpZGVBZGRQcm9qZWN0Rm9ybSgpO1xuICAgIG5ld1Byb2pFcnJvckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xufVxuXG5cblxuXG5cbi8vIFRBU0sgRk9STVxuLy8gU2hvdy9oaWRlIG5ldyB0YXNrIGZvcm1cbmNvbnN0IF9zaG93QWRkVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgaWYgKGFkZFByb2plY3RGb3JtLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ3Nob3dCbG9jaycpIHtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3dGbGV4JylcbiAgICAgICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKSAgICBcbiAgICB9XG4gICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpXG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93QmxvY2snKVxufVxuXG5cbi8vIFZlcmlmeSBuZXcgdGFzayBmb3JtIHN1Ym1pc3Npb25cbmNvbnN0IF9zdWJtaXROZXdUYXNrRm9ybSA9IChlKSA9PiB7XG4gICAgLy8gcHJldmVudCBhY3R1YWwgZm9ybSBzdWJtaXNzaW9uXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgX3N1Ym1pdFRhc2sgPSAobmV3VGFzaykgPT4ge1xuICAgICAgICB0YXNrcy5hbGwucHVzaChuZXdUYXNrKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgX2hpZGVBZGRUYXNrRm9ybSA9ICgpID0+IHtcbiAgICAgICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3dGbGV4JylcbiAgICAgICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgICAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gICAgXG4gICAgLy8gdmVyaWZ5IG9yIGNhbmNlbCBzdWJtaXNzaW9uXG4gICAgaWYgKGUuc3VibWl0dGVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZEJ0bicgJiYgbmV3VGFza0lucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICAvLyBzaG93IFRhc2sgbmFtZSBlcnJvclxuICAgICAgICBuZXdUYXNrRXJyb3JDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaG93QmxvY2snKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoZS5zdWJtaXR0ZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkQnRuJykge1xuICAgICAgICAvLyBzdWJtaXQgbmV3IFRhc2tcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHtcbiAgICAgICAgICAgIHRhc2s6IG5ld1Rhc2tJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIyLTA3LTI3JyxcbiAgICAgICAgICAgIHByb2plY3Q6ICdTZWF0dGxlJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAnZmFsc2UnLFxuICAgICAgICB9XG4gICAgICAgIF9zdWJtaXRUYXNrKG5ld1Rhc2spO1xuICAgIH1cbiAgICBfaGlkZUFkZFRhc2tGb3JtKCk7XG4gICAgbmV3VGFza0Vycm9yQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG59XG5cblxuXG5cblxuLy8gRXZlbnQgbGlzdGVuZXJzXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Nob3dBZGRQcm9qZWN0Rm9ybSk7XG5hZGRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gX3N1Ym1pdE5ld1Byb2plY3RGb3JtKGUpKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2hvd0FkZFRhc2tGb3JtKTtcbmFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBfc3VibWl0TmV3VGFza0Zvcm0oZSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==