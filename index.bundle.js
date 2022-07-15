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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: lightsteelblue;\n    --secondary-color: steelblue;\n    --menu-color: rgb(145, 189, 224);\n    --accent-color: whitesmoke;\n    --font-color: rgb(20, 20, 20);\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    background-color: var(--background-color);\n    display: grid;\n    grid-template-columns: 250px calc(100vw - 250px);\n    grid-template-rows: 110px calc(100vh - 110px - 62px) 62px;\n    margin: 0;\n}\n\n\n\n\n\n/* Header styling */\n\n.logo {\n    max-height: 90%;\n    margin-right: 8px;\n    /* whitesmoke color */\n    filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(201deg) brightness(107%) contrast(92%);\n}\n\nheader {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.8);\n    z-index: 1;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n\n\n\n\n/* Menu styling */\n\n.menu {\n    background-color: var(--menu-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n}\n\n.icon {\n    height: 1.2rem;\n}\n\n.menuOptions {\n    list-style: none;\n    padding: 0;\n}\n\n.menuOptions>li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.projectsHeader {\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n\n.menuOptions li,\n.projectsHeader,\n.contentTitle,\n.addTaskBtn,\n.addProjectForm,\ntbody>tr {\n    margin: 10px 1rem;\n    padding: 8px;\n    border-radius: 8px;    \n}\n\ntbody>tr.task:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n}\n\n.menuOptions li:hover,\n.addTaskBtn:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.menuOptions li:active,\n.addTaskBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.selected {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.1);\n}\n\n\n\n\n/* Form styling */\n\n#showBlock {\n    display: block;\n}\n\n#showFlex {\n    display: flex;\n}\n\n#hidden {\n    display: none;\n}\n\n.addProjectForm,\n.addTaskForm {\n    padding: 0;\n}\n\n.addTaskForm {\n    margin: 10px;\n}\n\n.formRow{\n    display: flex;\n    justify-content:space-around;\n    gap: 8px;\n\n}\n\n#formButtons {\n    margin-top: 8px;\n}\n\n#newTaskInput,\n#newProjectInput {\n    width: 100%;\n    font-size: 1.2rem;\n    padding: 6px;\n    border: none;\n    border-radius: 8px;\n}\n\n.addBtn,\n.cancelBtn {\n    width: 100%;\n    padding: 8px;\n    border-radius: 8px;    \n    font-size: 1rem;\n}\n\n.addBtn {\n    background-color: lightgreen;\n    border: 2px solid hsl(120, 73%, 55%);\n}\n\n.cancelBtn {\n    background-color: lightpink;\n    border: 2px solid hsl(351, 100%, 70%);\n\n}\n\n.addBtn:hover,\n.cancelBtn:hover {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.addBtn:active,\n.cancelBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.newProjErrorContainer,\n.newTaskErrorContainer {\n    margin-top: 8px;\n    text-align: center;\n    color: darkred;\n}\n\n\n\n\n\n/* Content styling */\n\n.content {\n    background-color: var(--background-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n    max-width: 1000px;\n    /* padding: 20px; */\n}\n\n/* .contentTitle {\n    border: 1px solid red;\n}\n\n.taskContainer {\n    border: 1px solid red;\n}\n\n.addTaskBtn {\n    border: 1px solid red;\n} */\n\n\n\n\n\n/* Table styling */\n\ntable {\n    /* border: 1px solid red; */\n    width: 100%;\n}\n\ntbody>tr {\n    box-sizing: border-box;\n    /* width: 100%; */\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    /* border: 2px solid blue; */\n}\n\n.highPriority {\n    border-left: 5px solid red;\n}\n\n.mediumPriority {\n    border-left: 5px solid darkorange;\n}\n\n.lowPriority {\n    border-left: 5px solid green;\n}\n\n.complete {\n    border-left: 5px solid var(--font-color);\n}\n\n.hidden {\n    display: none;\n}\n\ntd {\n    /* border: 2px solid pink; */\n    display: flex;\n    /* align-items: center; */\n    /* justify-content: center; */\n}\n\n/* NEW */\nimg.icon:hover,\n.dateContainer:hover {\n    cursor: pointer;\n}\n/* OLD */\n/* .checkboxContainer:hover,\n.dateContainer:hover,\n.editContainer:hover,\n.editDateContainer:hover,\n#deleteItem:hover {\n    cursor: pointer;\n} */\n\n.dateContainer,\nimg.deleteItem {\n    margin-left: auto;\n}\n\n.checkboxContainer:active {\n    filter: invert(18%) sepia(76%) saturate(2312%) hue-rotate(109deg) brightness(100%) contrast(107%);\n}\n\n.deleteItem:hover {\n    filter: invert(7%) sepia(51%) saturate(5951%) hue-rotate(350deg) brightness(140%) contrast(136%);\n}\n\n.editContainer:hover,\nimg.editDateIcon:hover {\n    filter: invert(60%) sepia(34%) saturate(3621%) hue-rotate(359deg) brightness(100%) contrast(109%);\n}\n\n/* .taskContainer {\n\n} */\n\ntd img {\n    /* border: 2px solid blue; */\n    color: #006400;\n}\n\n#complete {\n    text-decoration: line-through;\n}\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: auto;\n}\n\n.github {\n    height: 24px;\n    margin-left: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --background-color: lightsteelblue;\n    --secondary-color: steelblue;\n    --menu-color: rgb(145, 189, 224);\n    --accent-color: whitesmoke;\n    --font-color: rgb(20, 20, 20);\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    background-color: var(--background-color);\n    display: grid;\n    grid-template-columns: 250px calc(100vw - 250px);\n    grid-template-rows: 110px calc(100vh - 110px - 62px) 62px;\n    margin: 0;\n}\n\n\n\n\n\n/* Header styling */\n\n.logo {\n    max-height: 90%;\n    margin-right: 8px;\n    /* whitesmoke color */\n    filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(201deg) brightness(107%) contrast(92%);\n}\n\nheader {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.8);\n    z-index: 1;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n\n\n\n\n/* Menu styling */\n\n.menu {\n    background-color: var(--menu-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n}\n\n.icon {\n    height: 1.2rem;\n}\n\n.menuOptions {\n    list-style: none;\n    padding: 0;\n}\n\n.menuOptions>li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.projectsHeader {\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n\n.menuOptions li,\n.projectsHeader,\n.contentTitle,\n.addTaskBtn,\n.addProjectForm,\ntbody>tr {\n    margin: 10px 1rem;\n    padding: 8px;\n    border-radius: 8px;    \n}\n\ntbody>tr.task:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n}\n\n.menuOptions li:hover,\n.addTaskBtn:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.menuOptions li:active,\n.addTaskBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.selected {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.1);\n}\n\n\n\n\n/* Form styling */\n\n#showBlock {\n    display: block;\n}\n\n#showFlex {\n    display: flex;\n}\n\n#hidden {\n    display: none;\n}\n\n.addProjectForm,\n.addTaskForm {\n    padding: 0;\n}\n\n.addTaskForm {\n    margin: 10px;\n}\n\n.formRow{\n    display: flex;\n    justify-content:space-around;\n    gap: 8px;\n\n}\n\n#formButtons {\n    margin-top: 8px;\n}\n\n#newTaskInput,\n#newProjectInput {\n    width: 100%;\n    font-size: 1.2rem;\n    padding: 6px;\n    border: none;\n    border-radius: 8px;\n}\n\n.addBtn,\n.cancelBtn {\n    width: 100%;\n    padding: 8px;\n    border-radius: 8px;    \n    font-size: 1rem;\n}\n\n.addBtn {\n    background-color: lightgreen;\n    border: 2px solid hsl(120, 73%, 55%);\n}\n\n.cancelBtn {\n    background-color: lightpink;\n    border: 2px solid hsl(351, 100%, 70%);\n\n}\n\n.addBtn:hover,\n.cancelBtn:hover {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.addBtn:active,\n.cancelBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.newProjErrorContainer,\n.newTaskErrorContainer {\n    margin-top: 8px;\n    text-align: center;\n    color: darkred;\n}\n\n\n\n\n\n/* Content styling */\n\n.content {\n    background-color: var(--background-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n    max-width: 1000px;\n    /* padding: 20px; */\n}\n\n/* .contentTitle {\n    border: 1px solid red;\n}\n\n.taskContainer {\n    border: 1px solid red;\n}\n\n.addTaskBtn {\n    border: 1px solid red;\n} */\n\n\n\n\n\n/* Table styling */\n\ntable {\n    /* border: 1px solid red; */\n    width: 100%;\n}\n\ntbody>tr {\n    box-sizing: border-box;\n    /* width: 100%; */\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    /* border: 2px solid blue; */\n}\n\n.highPriority {\n    border-left: 5px solid red;\n}\n\n.mediumPriority {\n    border-left: 5px solid darkorange;\n}\n\n.lowPriority {\n    border-left: 5px solid green;\n}\n\n.complete {\n    border-left: 5px solid var(--font-color);\n}\n\n.hidden {\n    display: none;\n}\n\ntd {\n    /* border: 2px solid pink; */\n    display: flex;\n    /* align-items: center; */\n    /* justify-content: center; */\n}\n\n/* NEW */\nimg.icon:hover,\n.dateContainer:hover {\n    cursor: pointer;\n}\n/* OLD */\n/* .checkboxContainer:hover,\n.dateContainer:hover,\n.editContainer:hover,\n.editDateContainer:hover,\n#deleteItem:hover {\n    cursor: pointer;\n} */\n\n.dateContainer,\nimg.deleteItem {\n    margin-left: auto;\n}\n\n.checkboxContainer:active {\n    filter: invert(18%) sepia(76%) saturate(2312%) hue-rotate(109deg) brightness(100%) contrast(107%);\n}\n\n.deleteItem:hover {\n    filter: invert(7%) sepia(51%) saturate(5951%) hue-rotate(350deg) brightness(140%) contrast(136%);\n}\n\n.editContainer:hover,\nimg.editDateIcon:hover {\n    filter: invert(60%) sepia(34%) saturate(3621%) hue-rotate(359deg) brightness(100%) contrast(109%);\n}\n\n/* .taskContainer {\n\n} */\n\ntd img {\n    /* border: 2px solid blue; */\n    color: #006400;\n}\n\n#complete {\n    text-decoration: line-through;\n}\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: auto;\n}\n\n.github {\n    height: 24px;\n    margin-left: 10px;\n}"],"sourceRoot":""}]);
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
    allTasks.setAttribute('class', 'allTasks selected');
    allTasks.addEventListener('click', (e) => {
        (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.setTaskFilter)(allTasks, e)
        allTasks.classList.add('selected')
    })
    ;(0,_interactive__WEBPACK_IMPORTED_MODULE_2__.createChecklistIcon)(allTasks);
    const allTasksText = document.createElement('span');
    allTasksText.textContent = 'All tasks';
    allTasks.appendChild(allTasksText)
    menuOptions.appendChild(allTasks);

    const dueToday = document.createElement('li');
    dueToday.setAttribute('class', 'dueToday');
    dueToday.addEventListener('click', (e) => {
        (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.setTaskFilter)(dueToday, e)
        dueToday.classList.add('selected')
    })
    ;(0,_interactive__WEBPACK_IMPORTED_MODULE_2__.createTodayIcon)(dueToday);
    const dueTodayText = document.createElement('span');
    dueTodayText.innerText = 'Due today';
    dueToday.appendChild(dueTodayText);
    menuOptions.appendChild(dueToday);

    const dueWeek = document.createElement('li');
    dueWeek.setAttribute('class', 'dueWeek');
    dueWeek.addEventListener('click', (e) => {
        (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.setTaskFilter)(dueWeek, e)
        dueWeek.classList.add('selected')
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
/* harmony export */   "createAdditionIcon": () => (/* binding */ createAdditionIcon),
/* harmony export */   "createChecklistIcon": () => (/* binding */ createChecklistIcon),
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "createTodayIcon": () => (/* binding */ createTodayIcon),
/* harmony export */   "createWeekIcon": () => (/* binding */ createWeekIcon),
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "displayTasks": () => (/* binding */ displayTasks),
/* harmony export */   "setTaskFilter": () => (/* binding */ setTaskFilter)
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
const _createCheckboxIcon = (td, task, i) => {
    const checkboxIcon = document.createElement('img');
    if (task.complete === 'true') {
        checkboxIcon.src = _assets_checkbox_marked_svg__WEBPACK_IMPORTED_MODULE_1__
    } else {
        checkboxIcon.src = _assets_checkbox_blank_svg__WEBPACK_IMPORTED_MODULE_0__;
    }
    checkboxIcon.setAttribute('class', 'icon');
    checkboxIcon.setAttribute('id', `${i}`);
    checkboxIcon.addEventListener('click', (e) => _markComplete(e))
    td.appendChild(checkboxIcon);
} 

const createChecklistIcon = (li) => {
    const checklistIcon = document.createElement('img');
    checklistIcon.src = _assets_checklist_svg__WEBPACK_IMPORTED_MODULE_2__;
    checklistIcon.setAttribute('class', 'icon')
    li.appendChild(checklistIcon);
}

const _createEditIcon = (td) => {
    const newEditIcon = document.createElement('img');
    newEditIcon.src = _assets_edit_svg__WEBPACK_IMPORTED_MODULE_6__;
    newEditIcon.setAttribute('class', 'icon');
    // event listener to open task card
    newEditIcon.addEventListener('click', (e) => _showTaskCard(e))
    td.appendChild(newEditIcon);
}

const _createCalendarEditIcon = (td) => {
    const newCalendarEditIcon = document.createElement('img');
    newCalendarEditIcon.src = _assets_calendar_edit_svg__WEBPACK_IMPORTED_MODULE_7__;
    newCalendarEditIcon.setAttribute('class', 'icon editDateIcon')
    newCalendarEditIcon.addEventListener('click', (e) => {
    })
    td.appendChild(newCalendarEditIcon);
}

const _createDeleteIcon = (container, i) => {
    // create image and assign attributes
    const newDeleteIcon = document.createElement('img');
    newDeleteIcon.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_8__;
    newDeleteIcon.setAttribute('class', 'icon deleteItem')
    newDeleteIcon.setAttribute('id', `${i}`)
    // add event listener
    if (container.getAttribute('class') === 'taskCloseContainer') {
        // Event listener to delete task
        newDeleteIcon.addEventListener('click', (e) => _deleteTask(e))
    } else if (container.getAttribute('class') === 'project' || 
    container.classList.contains('project')) {
        // Event listener to delete project
        newDeleteIcon.classList.add(`deleteProject${i}`)        
        newDeleteIcon.classList.add(`hidden`)        
        newDeleteIcon.addEventListener('click', (e) => _deleteProject(e, i))        
        // display trash icon on hover
        container.addEventListener('mouseenter', () => {
            const trashIcon = document.querySelector(`.deleteProject${i}`)
            trashIcon.classList.remove('hidden')
        })
        // hide trash icon 
        container.addEventListener('mouseleave', () => {
            const trashIcon = document.querySelector(`.deleteProject${i}`)
            trashIcon.classList.add('hidden')
        })    
    } else {
        console.log(container)
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

const _createAddButton = (container, i) => {
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

const _createCancelButton = (container, i) => {
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
const createCheckboxContainer = (tr, task, i) => {
    const checkboxContainer = document.createElement('td');
    checkboxContainer.setAttribute('class', 'checkboxContainer');
    _createCheckboxIcon(checkboxContainer, task, i);
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
    _createDeleteIcon(closeContainer);
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
    _createAddButton(formRow2);
    _createCancelButton(formRow2);
       
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
        newProjectContainer.classList.add(`project`)
        newProjectContainer.setAttribute('id', `${i}`)
        // assign class to selected project 
        if (newProj.selected === 'true') {
            newProjectContainer.classList.add('selected')
        }

        // event listener to filter tasklist by project name     
        newProjectContainer.addEventListener('click', (e) => {
            // if deleting project, do not set filter
            if (e.target.classList.contains('deleteItem')) {
                return;
            };
            setTaskFilter(newProjectContainer)
        })
    
        createChecklistIcon(newProjectContainer);
        const newProjectText = document.createElement('span');
        newProjectText.textContent = newProj.name;
        newProjectContainer.appendChild(newProjectText)
        _createDeleteIcon(newProjectContainer, i);
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
    // Identify project to delete
    const doomedIndex = e.target.getAttribute('id');
    const doomedName = _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all[doomedIndex].name;

    // delete project
    _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all.splice(doomedIndex, 1);
    displayProjects();

    // delete all tasks in doomed project
    // optional, but seems necesarry
    // change from splice to deleted propery with hidden class to use in stats table with completed property
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all.forEach((task, index) => {
        if (task.project === doomedName) {
            _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all.splice(index, 1)
        }
    })

    // If doomed project was selected, revert tasklist to all tasks
    const contentTitle = document.querySelector('.contentTitle');
    if (contentTitle.textContent === doomedName) {
        contentTitle.textContent = 'All tasks' 
        displayTasks();
    }

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
        newListing.setAttribute('class', `task listing${i}`);
        // complete filter to assign class
        if (task.complete === 'true') {
            newListing.classList.add('complete')
        }
        // assign priority class
        if (task.priority === 'high') {
            newListing.classList.add('highPriority');
        } else if (task.priority === 'medium') {
            newListing.classList.add('mediumPriority');
        } else if (task.priority === 'low') {
            newListing.classList.add('lowPriority');
        }

        newListing.setAttribute('id', `${i}`);
        
        // add checkbox
        createCheckboxContainer(newListing, task, i);
        
        // add task
        const taskContainer = document.createElement('td');
        taskContainer.setAttribute('class', `taskContainer${i}`);
        // complete filter for strikethrough
        if (task.complete === 'true') {
            taskContainer.setAttribute('id', 'complete');
        }
        taskContainer.innerText = `${task.task}`;
        newListing.appendChild(taskContainer);

        // add date
        createDateContainer(newListing, task);

        // add edit button
        const editContainer = document.createElement('td');
        editContainer.setAttribute('class', 'editContainer');
        _createEditIcon(editContainer);
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
            if (project.name === filter) {
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
        newCardContainer.setAttribute('class', `task card${i}`);
        newCardContainer.setAttribute('id', `hidden`);

        // complete filter to assign class
        if (task.complete === 'true') {
            newCardContainer.classList.add('complete')
        }       

        // assign priority class
        if (task.priority === 'high') {
            newCardContainer.classList.add('highPriority');
        } else if (task.priority === 'medium') {
            newCardContainer.classList.add('mediumPriority');
        } else if (task.priority === 'low') {
            newCardContainer.classList.add('lowPriority');
        }
        
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
        _createCalendarEditIcon(cardRow1);



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
            projectOption.value = `${project.name}`
            projectOption.text = `${project.name}`
            if (task.project === project.name) {
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
        _createAddButton(cardRow3, i);
        _createCancelButton(cardRow3, `${i}`);



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
    const taskID = e.target.getAttribute('id');
    if (_tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].complete === 'true') {
        //mark task incomplete
        _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].complete = 'false'
    } else if (_tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].complete === 'false') {
        //mark task complete
        _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].complete = 'true'
    } else {
        console.log('this is strange')
    }
    displayTasks();
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

// how is this being skipped when clicking on delete icon??
const setTaskFilter = (container, e) => {   

    // set content title (filter)
    const contentTitle = document.querySelector('.contentTitle')
    contentTitle.textContent = container.innerText

    // deselect any menu filter 
    const allTasksClassList = document.querySelector('.allTasks').classList
    const dueTodayClassList = document.querySelector('.dueToday').classList
    const dueWeekClassList = document.querySelector('.dueWeek').classList
    if (allTasksClassList.contains('selected')) {
        allTasksClassList.remove('selected')
    } if (dueTodayClassList.contains('selected')) {
        dueTodayClassList.remove('selected')
    } if (dueWeekClassList.contains('selected')) {
        dueWeekClassList.remove('selected')
    } 

    // deselect all projects
    _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all.forEach(project => {
        if (project.selected === 'true') {
            project.selected = 'false'
        }
    }) 

    // Select project if one is chosen (main menu selection is handled in event listener)
    if (container.getAttribute('class') === 'project') {
        var selectedProjectId = container.getAttribute('id');
        _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all[selectedProjectId].selected = 'true'
    }

    displayProjects();    
    displayTasks();
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
        this.selected = selected
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
        // so you can add tasks to new project:
        (0,_interactive__WEBPACK_IMPORTED_MODULE_3__.displayTasks)();
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
        const newProj = {
            name: newProjectInput.value,
            selected: 'false',
        }
        newProjectInput.value
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
        // assign project
        var newTaskProject = ''
        if (document.querySelector('.contentTitle').textContent !== 'All tasks' ||
        document.querySelector('.contentTitle').textContent !== 'Due today' ||
        document.querySelector('.contentTitle').textContent !== 'Due this week') {
            newTaskProject = document.querySelector('.contentTitle').textContent
        } 
        
        // submit new Task
        const newTask = {
            task: newTaskInput.value,
            date: ``,
            project: `${newTaskProject}`,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbnRlcmFjdGl2ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IGxpZ2h0c3RlZWxibHVlO1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogc3RlZWxibHVlO1xcbiAgICAtLW1lbnUtY29sb3I6IHJnYigxNDUsIDE4OSwgMjI0KTtcXG4gICAgLS1hY2NlbnQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDIwLCAyMCwgMjApO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBjYWxjKDEwMHZ3IC0gMjUwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDExMHB4IGNhbGMoMTAwdmggLSAxMTBweCAtIDYycHgpIDYycHg7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogSGVhZGVyIHN0eWxpbmcgKi9cXG5cXG4ubG9nbyB7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgIC8qIHdoaXRlc21va2UgY29sb3IgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0ODAlKSBodWUtcm90YXRlKDIwMWRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCg5MiUpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA2cHggcmdiKDAsIDAsIDAsIDAuOCk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcblxcbi8qIE1lbnUgc3R5bGluZyAqL1xcblxcbi5tZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5pY29uIHtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxufVxcblxcbi5tZW51T3B0aW9ucyB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tZW51T3B0aW9ucz5saSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkZXIge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLm1lbnVPcHRpb25zIGxpLFxcbi5wcm9qZWN0c0hlYWRlcixcXG4uY29udGVudFRpdGxlLFxcbi5hZGRUYXNrQnRuLFxcbi5hZGRQcm9qZWN0Rm9ybSxcXG50Ym9keT50ciB7XFxuICAgIG1hcmdpbjogMTBweCAxcmVtO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgICAgXFxufVxcblxcbnRib2R5PnRyLnRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSwgMC4zKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5tZW51T3B0aW9ucyBsaTpob3ZlcixcXG4uYWRkVGFza0J0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1LCAwLjMpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMgbGk6YWN0aXZlLFxcbi5hZGRUYXNrQnRuOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSwgMC4zKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcblxcblxcblxcbi8qIEZvcm0gc3R5bGluZyAqL1xcblxcbiNzaG93QmxvY2sge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI3Nob3dGbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2hpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hZGRQcm9qZWN0Rm9ybSxcXG4uYWRkVGFza0Zvcm0ge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYWRkVGFza0Zvcm0ge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5mb3JtUm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDhweDtcXG5cXG59XFxuXFxuI2Zvcm1CdXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4jbmV3VGFza0lucHV0LFxcbiNuZXdQcm9qZWN0SW5wdXQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5hZGRCdG4sXFxuLmNhbmNlbEJ0biB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgICAgXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgxMjAsIDczJSwgNTUlKTtcXG59XFxuXFxuLmNhbmNlbEJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0cGluaztcXG4gICAgYm9yZGVyOiAycHggc29saWQgaHNsKDM1MSwgMTAwJSwgNzAlKTtcXG5cXG59XFxuXFxuLmFkZEJ0bjpob3ZlcixcXG4uY2FuY2VsQnRuOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZEJ0bjphY3RpdmUsXFxuLmNhbmNlbEJ0bjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLm5ld1Byb2pFcnJvckNvbnRhaW5lcixcXG4ubmV3VGFza0Vycm9yQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBDb250ZW50IHN0eWxpbmcgKi9cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cXG59XFxuXFxuLyogLmNvbnRlbnRUaXRsZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufVxcblxcbi5hZGRUYXNrQnRuIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn0gKi9cXG5cXG5cXG5cXG5cXG5cXG4vKiBUYWJsZSBzdHlsaW5nICovXFxuXFxudGFibGUge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50Ym9keT50ciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuLmhpZ2hQcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xcbn1cXG5cXG4ubWVkaXVtUHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtvcmFuZ2U7XFxufVxcblxcbi5sb3dQcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47XFxufVxcblxcbi5jb21wbGV0ZSB7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG50ZCB7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHBpbms7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbn1cXG5cXG4vKiBORVcgKi9cXG5pbWcuaWNvbjpob3ZlcixcXG4uZGF0ZUNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLyogT0xEICovXFxuLyogLmNoZWNrYm94Q29udGFpbmVyOmhvdmVyLFxcbi5kYXRlQ29udGFpbmVyOmhvdmVyLFxcbi5lZGl0Q29udGFpbmVyOmhvdmVyLFxcbi5lZGl0RGF0ZUNvbnRhaW5lcjpob3ZlcixcXG4jZGVsZXRlSXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59ICovXFxuXFxuLmRhdGVDb250YWluZXIsXFxuaW1nLmRlbGV0ZUl0ZW0ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmNoZWNrYm94Q29udGFpbmVyOmFjdGl2ZSB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDE4JSkgc2VwaWEoNzYlKSBzYXR1cmF0ZSgyMzEyJSkgaHVlLXJvdGF0ZSgxMDlkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoMTA3JSk7XFxufVxcblxcbi5kZWxldGVJdGVtOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNyUpIHNlcGlhKDUxJSkgc2F0dXJhdGUoNTk1MSUpIGh1ZS1yb3RhdGUoMzUwZGVnKSBicmlnaHRuZXNzKDE0MCUpIGNvbnRyYXN0KDEzNiUpO1xcbn1cXG5cXG4uZWRpdENvbnRhaW5lcjpob3ZlcixcXG5pbWcuZWRpdERhdGVJY29uOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNjAlKSBzZXBpYSgzNCUpIHNhdHVyYXRlKDM2MjElKSBodWUtcm90YXRlKDM1OWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDklKTtcXG59XFxuXFxuLyogLnRhc2tDb250YWluZXIge1xcblxcbn0gKi9cXG5cXG50ZCBpbWcge1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibHVlOyAqL1xcbiAgICBjb2xvcjogIzAwNjQwMDtcXG59XFxuXFxuI2NvbXBsZXRlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcblxcblxcblxcblxcbi8qIEZvb3RlciBzdHlsaW5nICovXFxuXFxuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLmdpdGh1YiB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQ0FBa0M7SUFDbEMsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQywwQkFBMEI7SUFDMUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksd0hBQXdIO0lBQ3hILHlDQUF5QztJQUN6QyxhQUFhO0lBQ2IsZ0RBQWdEO0lBQ2hELHlEQUF5RDtJQUN6RCxTQUFTO0FBQ2I7Ozs7OztBQU1BLG1CQUFtQjs7QUFFbkI7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNy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QWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiBzdGVlbGJsdWU7XFxuICAgIC0tbWVudS1jb2xvcjogcmdiKDE0NSwgMTg5LCAyMjQpO1xcbiAgICAtLWFjY2VudC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS1mb250LWNvbG9yOiByZ2IoMjAsIDIwLCAyMCk7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IGNhbGMoMTAwdncgLSAyNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTEwcHggY2FsYygxMDB2aCAtIDExMHB4IC0gNjJweCkgNjJweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBIZWFkZXIgc3R5bGluZyAqL1xcblxcbi5sb2dvIHtcXG4gICAgbWF4LWhlaWdodDogOTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gICAgLyogd2hpdGVzbW9rZSBjb2xvciAqL1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ4MCUpIGh1ZS1yb3RhdGUoMjAxZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDkyJSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDZweCByZ2IoMCwgMCwgMCwgMC44KTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTWVudSBzdHlsaW5nICovXFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmljb24ge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLm1lbnVPcHRpb25zIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1lbnVPcHRpb25zPmxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0c0hlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMgbGksXFxuLnByb2plY3RzSGVhZGVyLFxcbi5jb250ZW50VGl0bGUsXFxuLmFkZFRhc2tCdG4sXFxuLmFkZFByb2plY3RGb3JtLFxcbnRib2R5PnRyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDFyZW07XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAgICBcXG59XFxuXFxudGJvZHk+dHIudGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1LCAwLjMpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLm1lbnVPcHRpb25zIGxpOmhvdmVyLFxcbi5hZGRUYXNrQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUsIDAuMyk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51T3B0aW9ucyBsaTphY3RpdmUsXFxuLmFkZFRhc2tCdG46YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1LCAwLjMpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuXFxuXFxuXFxuLyogRm9ybSBzdHlsaW5nICovXFxuXFxuI3Nob3dCbG9jayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jc2hvd0ZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZFByb2plY3RGb3JtLFxcbi5hZGRUYXNrRm9ybSB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hZGRUYXNrRm9ybSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmZvcm1Sb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogOHB4O1xcblxcbn1cXG5cXG4jZm9ybUJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbiNuZXdUYXNrSW5wdXQsXFxuI25ld1Byb2plY3RJbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmFkZEJ0bixcXG4uY2FuY2VsQnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAgICBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgaHNsKDEyMCwgNzMlLCA1NSUpO1xcbn1cXG5cXG4uY2FuY2VsQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBoc2woMzUxLCAxMDAlLCA3MCUpO1xcblxcbn1cXG5cXG4uYWRkQnRuOmhvdmVyLFxcbi5jYW5jZWxCdG46aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkQnRuOmFjdGl2ZSxcXG4uY2FuY2VsQnRuOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubmV3UHJvakVycm9yQ29udGFpbmVyLFxcbi5uZXdUYXNrRXJyb3JDb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcblxcblxcblxcblxcbi8qIENvbnRlbnQgc3R5bGluZyAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcbn1cXG5cXG4vKiAuY29udGVudFRpdGxlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmFkZFRhc2tCdG4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufSAqL1xcblxcblxcblxcblxcblxcbi8qIFRhYmxlIHN0eWxpbmcgKi9cXG5cXG50YWJsZSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRib2R5PnRyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4uaGlnaFByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XFxufVxcblxcbi5tZWRpdW1Qcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcXG59XFxuXFxuLmxvd1ByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnRkIHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcGluazsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxufVxcblxcbi8qIE5FVyAqL1xcbmltZy5pY29uOmhvdmVyLFxcbi5kYXRlQ29udGFpbmVyOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBPTEQgKi9cXG4vKiAuY2hlY2tib3hDb250YWluZXI6aG92ZXIsXFxuLmRhdGVDb250YWluZXI6aG92ZXIsXFxuLmVkaXRDb250YWluZXI6aG92ZXIsXFxuLmVkaXREYXRlQ29udGFpbmVyOmhvdmVyLFxcbiNkZWxldGVJdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn0gKi9cXG5cXG4uZGF0ZUNvbnRhaW5lcixcXG5pbWcuZGVsZXRlSXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXI6YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg3NiUpIHNhdHVyYXRlKDIzMTIlKSBodWUtcm90YXRlKDEwOWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDclKTtcXG59XFxuXFxuLmRlbGV0ZUl0ZW06aG92ZXIge1xcbiAgICBmaWx0ZXI6IGludmVydCg3JSkgc2VwaWEoNTElKSBzYXR1cmF0ZSg1OTUxJSkgaHVlLXJvdGF0ZSgzNTBkZWcpIGJyaWdodG5lc3MoMTQwJSkgY29udHJhc3QoMTM2JSk7XFxufVxcblxcbi5lZGl0Q29udGFpbmVyOmhvdmVyLFxcbmltZy5lZGl0RGF0ZUljb246aG92ZXIge1xcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDM0JSkgc2F0dXJhdGUoMzYyMSUpIGh1ZS1yb3RhdGUoMzU5ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwOSUpO1xcbn1cXG5cXG4vKiAudGFza0NvbnRhaW5lciB7XFxuXFxufSAqL1xcblxcbnRkIGltZyB7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7ICovXFxuICAgIGNvbG9yOiAjMDA2NDAwO1xcbn1cXG5cXG4jY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRm9vdGVyIHN0eWxpbmcgKi9cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmltcG9ydCBsb2dvSWNvbiBmcm9tICcuL2Fzc2V0cy9jaGVjay1kZWNhZ3JhbS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tICcuL2Fzc2V0cy9HaXRIdWItbGlnaHQtMzJweC5wbmcnO1xuXG5pbXBvcnQgeyBjcmVhdGVDaGVja2xpc3RJY29uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBzZXRUYXNrRmlsdGVyIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBjcmVhdGVXZWVrSWNvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlVG9kYXlJY29uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBjcmVhdGVBZGRpdGlvbkljb24gfSBmcm9tICcuL2ludGVyYWN0aXZlJztcblxuXG4vLyBJbml0aWFsaXphdGlvbiBmdW5jdGlvbnNcbmNvbnN0IF9jcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBcbiAgICAvLyBkaXNwbGF5IHRpdGxlXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uc3JjID0gbG9nb0ljb247XG4gICAgbG9nby50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBsb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9nbycpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGhpbmdzIFRvIERvJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuXG5jb25zdCBfY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcblxuICAgIC8vIE1haW4gbWVudVxuICAgIGNvbnN0IG1lbnVPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBtZW51T3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgXG4gICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFsbFRhc2tzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWxsVGFza3Mgc2VsZWN0ZWQnKTtcbiAgICBhbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNldFRhc2tGaWx0ZXIoYWxsVGFza3MsIGUpXG4gICAgICAgIGFsbFRhc2tzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICB9KVxuICAgIGNyZWF0ZUNoZWNrbGlzdEljb24oYWxsVGFza3MpO1xuICAgIGNvbnN0IGFsbFRhc2tzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhbGxUYXNrc1RleHQudGV4dENvbnRlbnQgPSAnQWxsIHRhc2tzJztcbiAgICBhbGxUYXNrcy5hcHBlbmRDaGlsZChhbGxUYXNrc1RleHQpXG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoYWxsVGFza3MpO1xuXG4gICAgY29uc3QgZHVlVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGR1ZVRvZGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlVG9kYXknKTtcbiAgICBkdWVUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNldFRhc2tGaWx0ZXIoZHVlVG9kYXksIGUpXG4gICAgICAgIGR1ZVRvZGF5LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICB9KVxuICAgIGNyZWF0ZVRvZGF5SWNvbihkdWVUb2RheSk7XG4gICAgY29uc3QgZHVlVG9kYXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGR1ZVRvZGF5VGV4dC5pbm5lclRleHQgPSAnRHVlIHRvZGF5JztcbiAgICBkdWVUb2RheS5hcHBlbmRDaGlsZChkdWVUb2RheVRleHQpO1xuICAgIG1lbnVPcHRpb25zLmFwcGVuZENoaWxkKGR1ZVRvZGF5KTtcblxuICAgIGNvbnN0IGR1ZVdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGR1ZVdlZWsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkdWVXZWVrJyk7XG4gICAgZHVlV2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNldFRhc2tGaWx0ZXIoZHVlV2VlaywgZSlcbiAgICAgICAgZHVlV2Vlay5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgfSlcbiAgICBjcmVhdGVXZWVrSWNvbihkdWVXZWVrKTtcbiAgICBjb25zdCBkdWVXZWVrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkdWVXZWVrVGV4dC5pbm5lclRleHQgPSAnRHVlIHRoaXMgd2Vlayc7XG4gICAgZHVlV2Vlay5hcHBlbmRDaGlsZChkdWVXZWVrVGV4dCk7XG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoZHVlV2Vlayk7XG5cblxuICAgIC8vIFByb2plY3RzIG1lbnVcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0c0hlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RzSGVhZGVyJylcbiAgICBwcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICBjb25zdCBwcm9qZWN0c01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHByb2plY3RzTWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgcHJvamVjdHNNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHNNZW51Jyk7XG5cblxuICAgIC8vIEdlbmVyYXRlIGFkZCBwcm9qZWN0IGJ1dHRvblxuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGFkZFByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRQcm9qZWN0QnRuJylcbiAgICBjcmVhdGVBZGRpdGlvbkljb24oYWRkUHJvamVjdClcbiAgICBjb25zdCBhZGRQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRQcm9qZWN0VGV4dC5pbm5lclRleHQgPSAnQWRkIFByb2plY3QnO1xuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFRleHQpXG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KVxuXG5cbiAgICAvLyBHZW5lcmF0ZSBhbmQgaGlkZSBuZXcgcHJvamVjdCBmb3JtXG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRQcm9qZWN0Rm9ybScpO1xuICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICBhZGRQcm9qZWN0Rm9ybS5tZXRob2QgPSAnZ2V0JztcbiAgICBjcmVhdGVGb3JtKGFkZFByb2plY3RGb3JtKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RGb3JtKVxuXG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVPcHRpb25zKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHByb2plY3RzTWVudSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVudSk7XG59XG5cblxuY29uc3QgX2NyZWF0ZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnRUaXRsZScpO1xuICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSAnQWxsIHRhc2tzJztcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXG4gICAgICAgIGA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdjaGVja2JveENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J3Rhc2tDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdkYXRlQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZWRpdENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J3Rhc2tDbG9zZUNvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSBpZD0ndGFza0xpc3QnPjwvdGJvZHk+YFxuICAgIFxuXG4gICAgLy8gQ3JlYXRlIGFkZCB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGFkZFRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRUYXNrQnRuJyk7XG4gICAgY3JlYXRlQWRkaXRpb25JY29uKGFkZFRhc2spO1xuICAgIGNvbnN0IGFkZFRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZFRhc2tUZXh0LmlubmVyVGV4dCA9ICdBZGQgdGFzayc7XG4gICAgYWRkVGFzay5hcHBlbmRDaGlsZChhZGRUYXNrVGV4dCk7XG4gICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrKTtcblxuICAgIC8vIEdlbmVyYXRlIGFuZCBoaWRlIG5ldyB0YXNrIGZvcm1cbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZFRhc2tGb3JtJyk7XG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgIGFkZFRhc2tGb3JtLm1ldGhvZCA9ICdnZXQnO1xuICAgIGNyZWF0ZUZvcm0oYWRkVGFza0Zvcm0pO1xuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG5cbmNvbnN0IF9jcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcblxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBqY2FtcGJlbGw1N2A7XG4gIFxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Nyc7XG4gICAgZ2l0aHViTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgXG4gICAgY29uc3QgbmV3R2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0dpdGh1Ykljb24uc3JjID0gZ2l0aHViSWNvbjtcbiAgICBuZXdHaXRodWJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2l0aHViJyk7XG5cbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKG5ld0dpdGh1Ykljb24pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIF9jcmVhdGVIZWFkZXIoKTtcbiAgICBfY3JlYXRlTWVudSgpO1xuICAgIF9jcmVhdGVDb250ZW50KCk7XG4gICAgX2NyZWF0ZUZvb3RlcigpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplOyIsImltcG9ydCBjaGVja2JveEJsYW5rIGZyb20gJy4vYXNzZXRzL2NoZWNrYm94LWJsYW5rLnN2Zyc7XG5pbXBvcnQgY2hlY2tib3hNYXJrZWQgZnJvbSAnLi9hc3NldHMvY2hlY2tib3gtbWFya2VkLnN2Zyc7XG5pbXBvcnQgY2hlY2tsaXN0IGZyb20gJy4vYXNzZXRzL2NoZWNrbGlzdC5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyVG9kYXkgZnJvbSAnLi9hc3NldHMvY2FsZW5kYXItdG9kYXkuc3ZnJztcbmltcG9ydCBjYWxlbmRhcldlZWsgZnJvbSAnLi9hc3NldHMvY2FsZW5kYXItcmFuZ2Uuc3ZnJztcbmltcG9ydCBhZGRpdGlvbkljb24gZnJvbSAnLi9hc3NldHMvcGx1cy5zdmcnO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4vYXNzZXRzL2VkaXQuc3ZnJztcbmltcG9ydCBjYWxlbmRhckVkaXRJY29uIGZyb20gJy4vYXNzZXRzL2NhbGVuZGFyLWVkaXQuc3ZnJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vYXNzZXRzL2RlbGV0ZS5zdmcnO1xuXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdGFza3MnO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3Rhc2tzJztcblxuXG5cbi8vIEljb24gJiBidXR0b24gZ2VuZXJhdG9ycyBcbmNvbnN0IF9jcmVhdGVDaGVja2JveEljb24gPSAodGQsIHRhc2ssIGkpID0+IHtcbiAgICBjb25zdCBjaGVja2JveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGNoZWNrYm94SWNvbi5zcmMgPSBjaGVja2JveE1hcmtlZFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrYm94SWNvbi5zcmMgPSBjaGVja2JveEJsYW5rO1xuICAgIH1cbiAgICBjaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gICAgY2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgIGNoZWNrYm94SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfbWFya0NvbXBsZXRlKGUpKVxuICAgIHRkLmFwcGVuZENoaWxkKGNoZWNrYm94SWNvbik7XG59IFxuXG5jb25zdCBjcmVhdGVDaGVja2xpc3RJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tsaXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoZWNrbGlzdEljb24uc3JjID0gY2hlY2tsaXN0O1xuICAgIGNoZWNrbGlzdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChjaGVja2xpc3RJY29uKTtcbn1cblxuY29uc3QgX2NyZWF0ZUVkaXRJY29uID0gKHRkKSA9PiB7XG4gICAgY29uc3QgbmV3RWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdFZGl0SWNvbi5zcmMgPSBlZGl0SWNvbjtcbiAgICBuZXdFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKTtcbiAgICAvLyBldmVudCBsaXN0ZW5lciB0byBvcGVuIHRhc2sgY2FyZFxuICAgIG5ld0VkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9zaG93VGFza0NhcmQoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQobmV3RWRpdEljb24pO1xufVxuXG5jb25zdCBfY3JlYXRlQ2FsZW5kYXJFZGl0SWNvbiA9ICh0ZCkgPT4ge1xuICAgIGNvbnN0IG5ld0NhbGVuZGFyRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdDYWxlbmRhckVkaXRJY29uLnNyYyA9IGNhbGVuZGFyRWRpdEljb247XG4gICAgbmV3Q2FsZW5kYXJFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24gZWRpdERhdGVJY29uJylcbiAgICBuZXdDYWxlbmRhckVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB9KVxuICAgIHRkLmFwcGVuZENoaWxkKG5ld0NhbGVuZGFyRWRpdEljb24pO1xufVxuXG5jb25zdCBfY3JlYXRlRGVsZXRlSWNvbiA9IChjb250YWluZXIsIGkpID0+IHtcbiAgICAvLyBjcmVhdGUgaW1hZ2UgYW5kIGFzc2lnbiBhdHRyaWJ1dGVzXG4gICAgY29uc3QgbmV3RGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0RlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvbjtcbiAgICBuZXdEZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbiBkZWxldGVJdGVtJylcbiAgICBuZXdEZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICd0YXNrQ2xvc2VDb250YWluZXInKSB7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSB0YXNrXG4gICAgICAgIG5ld0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX2RlbGV0ZVRhc2soZSkpXG4gICAgfSBlbHNlIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAncHJvamVjdCcgfHwgXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKSB7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSBwcm9qZWN0XG4gICAgICAgIG5ld0RlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChgZGVsZXRlUHJvamVjdCR7aX1gKSAgICAgICAgXG4gICAgICAgIG5ld0RlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChgaGlkZGVuYCkgICAgICAgIFxuICAgICAgICBuZXdEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9kZWxldGVQcm9qZWN0KGUsIGkpKSAgICAgICAgXG4gICAgICAgIC8vIGRpc3BsYXkgdHJhc2ggaWNvbiBvbiBob3ZlclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZWxldGVQcm9qZWN0JHtpfWApXG4gICAgICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgfSlcbiAgICAgICAgLy8gaGlkZSB0cmFzaCBpY29uIFxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZWxldGVQcm9qZWN0JHtpfWApXG4gICAgICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgfSkgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coY29udGFpbmVyKVxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBzdHJhbmdlJyk7XG4gICAgfVxuICAgIC8vIGFwcGVuZCB0byBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGVsZXRlSWNvbilcbn1cblxuY29uc3QgY3JlYXRlQWRkaXRpb25JY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgbmV3QWRkaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3QWRkaXRpb25JY29uLnNyYyA9IGFkZGl0aW9uSWNvbjtcbiAgICBuZXdBZGRpdGlvbkljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdBZGRpdGlvbkljb24pO1xufVxuXG5jb25zdCBjcmVhdGVUb2RheUljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBuZXdUb2RheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdUb2RheUljb24uc3JjID0gY2FsZW5kYXJUb2RheTtcbiAgICBuZXdUb2RheUljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdUb2RheUljb24pO1xufVxuXG5jb25zdCBjcmVhdGVXZWVrSWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IG5ld1dlZWtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3V2Vla0ljb24uc3JjID0gY2FsZW5kYXJXZWVrO1xuICAgIG5ld1dlZWtJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQobmV3V2Vla0ljb24pO1xufVxuXG5jb25zdCBfY3JlYXRlQWRkQnV0dG9uID0gKGNvbnRhaW5lciwgaSkgPT4ge1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZEJ0bicpO1xuICAgIGFkZEJ0bi5pbm5lclRleHQgPSBcInN1Ym1pdFwiO1xuICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkUm93MycpKSB7XG4gICAgICAgIC8vIGNvbnZlcnQgY2FyZCB0byBmb3JtPyBhbmQgY2hhbmdlIHRoaXMgZXZlbnQgbGlzdGVuZXIgdG8gdHJpZ2dlciB3aGVuIGZvcm0gc3VibWl0c1xuICAgICAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfc3VibWl0VGFza0NhcmQoZSkpXG4gICAgfTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbn1cblxuY29uc3QgX2NyZWF0ZUNhbmNlbEJ1dHRvbiA9IChjb250YWluZXIsIGkpID0+IHtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYW5jZWxCdG4nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgY2FuY2VsQnRuLmlubmVyVGV4dCA9IFwiY2FuY2VsXCI7XG4gICAgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdjYXJkUm93MycpIHtcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2hpZGVUYXNrQ2FyZChpKSlcbiAgICB9O1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pOyAgIFxufVxuXG5cblxuLy8gQ29udGFpbmVyIEFORCBpY29uIGdlbmVyYXRvcnMgKEZvciB0YXNrIGxpc3RpbmcgYW5kIHRhc2sgY2FyZClcbmNvbnN0IGNyZWF0ZUNoZWNrYm94Q29udGFpbmVyID0gKHRyLCB0YXNrLCBpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNoZWNrYm94Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tib3hDb250YWluZXInKTtcbiAgICBfY3JlYXRlQ2hlY2tib3hJY29uKGNoZWNrYm94Q29udGFpbmVyLCB0YXNrLCBpKTtcbiAgICB0ci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XG59XG5cbmNvbnN0IGNyZWF0ZURhdGVDb250YWluZXIgPSAodHIsIHRhc2ssIGkpID0+IHtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBkYXRlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0ZUNvbnRhaW5lcicpO1xuICAgIGlmICh0ci5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXREYXRlQ29udGFpbmVyJykpIHtcbiAgICAgICAgZGF0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGlucHV0IGNsYXNzPSd0YXNrQ2FyZERhdGUke2l9JyB0eXBlPSdkYXRlJyB2YWx1ZT0nJHt0YXNrLmRhdGV9Jz5gXG4gICAgfSBlbHNlIHtcbiAgICBkYXRlQ29udGFpbmVyLmlubmVyVGV4dCA9IGAke3Rhc2suZGF0ZX1gXG4gICAgfVxuICAgIHRyLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xufVxuXG5jb25zdCBjcmVhdGVEZWxldGVDb250YWluZXIgPSAodHIpID0+IHtcbiAgICBjb25zdCBjbG9zZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2xvc2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2xvc2VDb250YWluZXInKTtcbiAgICBfY3JlYXRlRGVsZXRlSWNvbihjbG9zZUNvbnRhaW5lcik7XG4gICAgdHIuYXBwZW5kQ2hpbGQoY2xvc2VDb250YWluZXIpO1xufVxuXG5cblxuLy8gRm9ybSBnZW5lcmF0b3JcbmNvbnN0IGNyZWF0ZUZvcm0gPSAoZm9ybSkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGZvcm1Sb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvdzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtUm93Jyk7XG4gICAgXG4gICAgY29uc3QgZm9ybVJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93Mi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm1Sb3cnKTtcbiAgICBmb3JtUm93Mi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1CdXR0b25zJyk7XG5cbiAgICBjb25zdCBmb3JtUm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3czLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG5cbiAgICAvLyByb3cgb25lOiBhc3NpZ24gaW5wdXQgYWNjb3JkaW5nIHRvIGNsYXNzIG9mIGZvcm1cbiAgICAvLyByb3cgdGhyZWU6IGFzc2lnbiBlcnJvciBjbGFzcyBhbmQgdGV4dCBhY2NvcmRpbmcgdG8gY2xhc3Mgb2YgZm9ybVxuICAgIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZFByb2plY3RGb3JtJykge1xuICAgICAgICBmb3JtUm93MS5pbm5lckhUTUwgPSBcIjxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nbmV3UHJvamVjdElucHV0JyBuYW1lPSduZXdQcm9qZWN0SW5wdXQnPjwvaW5wdXQ+XCI7XG4gICAgICAgIGZvcm1Sb3czLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3UHJvakVycm9yQ29udGFpbmVyJyk7XG4gICAgICAgIGZvcm1Sb3czLmlubmVyVGV4dCA9ICdOYW1lIHlvdXIgcHJvamVjdCEnXG4gICAgfSBlbHNlIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZFRhc2tGb3JtJykge1xuICAgICAgICBmb3JtUm93MS5pbm5lckhUTUwgPSBcIjxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nbmV3VGFza0lucHV0JyBuYW1lPSduZXdUYXNrSW5wdXQnPjwvaW5wdXQ+XCI7XG4gICAgICAgIGZvcm1Sb3czLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3VGFza0Vycm9yQ29udGFpbmVyJyk7XG4gICAgICAgIGZvcm1Sb3czLmlubmVyVGV4dCA9ICdOYW1lIHlvdXIgdGFzayEnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgc3RyYW5nZScpXG4gICAgfVxuXG4gICAgLy8gcm93IHR3bzogc3VibWl0IGFuZCBjYW5jZWwgYnV0dG9uc1xuICAgIF9jcmVhdGVBZGRCdXR0b24oZm9ybVJvdzIpO1xuICAgIF9jcmVhdGVDYW5jZWxCdXR0b24oZm9ybVJvdzIpO1xuICAgICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzEpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzMpO1xufVxuXG5cblxuXG5cbi8vIERPTSBtb2RpZmljYXRpb24gZnVuY3Rpb25zXG5cbi8vIFBST0pFQ1RTXG4vLyBEaXNwbGF5IGVudGlyZSBhcnJheSBvZiBwcm9qZWN0cyB0byBtZW51XG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgLy8gR3JhYiBwcm9qZWN0cyBtZW51XG4gICAgY29uc3QgcHJvamVjdHNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzTWVudScpO1xuXG4gICAgLy8gQ2xlYXIgcHJvamVjdHMgbWVudVxuICAgIGNvbnN0IG9sZFByb2pDb3VudCA9IHByb2plY3RzTWVudS5jaGlsZEVsZW1lbnRDb3VudFxuICAgIGZvciAobGV0IGk9MDsgaTxvbGRQcm9qQ291bnQ7IGkrKykge1xuICAgICAgICBwcm9qZWN0c01lbnUuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgc2luZ2xlIHByb2plY3QgdG8gbWVudSAoY2FsbGVkIGJlbG93KVxuICAgIGNvbnN0IF9kaXNwbGF5UHJvamVjdCA9IChuZXdQcm9qLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYHByb2plY3RgKVxuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApXG4gICAgICAgIC8vIGFzc2lnbiBjbGFzcyB0byBzZWxlY3RlZCBwcm9qZWN0IFxuICAgICAgICBpZiAobmV3UHJvai5zZWxlY3RlZCA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGV2ZW50IGxpc3RlbmVyIHRvIGZpbHRlciB0YXNrbGlzdCBieSBwcm9qZWN0IG5hbWUgICAgIFxuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGlmIGRlbGV0aW5nIHByb2plY3QsIGRvIG5vdCBzZXQgZmlsdGVyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVJdGVtJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0VGFza0ZpbHRlcihuZXdQcm9qZWN0Q29udGFpbmVyKVxuICAgICAgICB9KVxuICAgIFxuICAgICAgICBjcmVhdGVDaGVja2xpc3RJY29uKG5ld1Byb2plY3RDb250YWluZXIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbmV3UHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBuZXdQcm9qLm5hbWU7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRleHQpXG4gICAgICAgIF9jcmVhdGVEZWxldGVJY29uKG5ld1Byb2plY3RDb250YWluZXIsIGkpO1xuICAgICAgICBwcm9qZWN0c01lbnUuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENvbnRhaW5lcik7XG4gICAgfSBcblxuICAgIC8vIEFwcGVuZCBhbGwgdGFza3MgdG8gdGFza2xpc3RcbiAgICBsZXQgaT0wXG4gICAgcHJvamVjdHMuYWxsLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIF9kaXNwbGF5UHJvamVjdChwcm9qZWN0LCBpKVxuICAgICAgICBpKytcbiAgICB9KTtcbn1cblxuXG5cbi8vIERlbGV0ZSBwcm9qZWN0XG5jb25zdCBfZGVsZXRlUHJvamVjdCA9IChlKSA9PiB7XG4gICAgLy8gSWRlbnRpZnkgcHJvamVjdCB0byBkZWxldGVcbiAgICBjb25zdCBkb29tZWRJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBkb29tZWROYW1lID0gcHJvamVjdHMuYWxsW2Rvb21lZEluZGV4XS5uYW1lO1xuXG4gICAgLy8gZGVsZXRlIHByb2plY3RcbiAgICBwcm9qZWN0cy5hbGwuc3BsaWNlKGRvb21lZEluZGV4LCAxKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcblxuICAgIC8vIGRlbGV0ZSBhbGwgdGFza3MgaW4gZG9vbWVkIHByb2plY3RcbiAgICAvLyBvcHRpb25hbCwgYnV0IHNlZW1zIG5lY2VzYXJyeVxuICAgIC8vIGNoYW5nZSBmcm9tIHNwbGljZSB0byBkZWxldGVkIHByb3Blcnkgd2l0aCBoaWRkZW4gY2xhc3MgdG8gdXNlIGluIHN0YXRzIHRhYmxlIHdpdGggY29tcGxldGVkIHByb3BlcnR5XG4gICAgdGFza3MuYWxsLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh0YXNrLnByb2plY3QgPT09IGRvb21lZE5hbWUpIHtcbiAgICAgICAgICAgIHRhc2tzLmFsbC5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gSWYgZG9vbWVkIHByb2plY3Qgd2FzIHNlbGVjdGVkLCByZXZlcnQgdGFza2xpc3QgdG8gYWxsIHRhc2tzXG4gICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpO1xuICAgIGlmIChjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPT09IGRvb21lZE5hbWUpIHtcbiAgICAgICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gJ0FsbCB0YXNrcycgXG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIH1cblxufVxuXG5cblxuXG5cbi8vIFRBU0tTXG4vLyBEaXNwbGF5IGVudGlyZSBhcnJheSBvZiB0YXNrcyB0byB0YXNrbGlzdFxuY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuXG4gICAgLy8gR3JhYiB0YXNrbGlzdFxuICAgIGNvbnN0IHRhc2tsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tMaXN0Jyk7XG4gICAgXG4gICAgLy8gY2xlYXIgdGFza2xpc3RcbiAgICBjb25zdCBvbGRUYXNrQ291bnQgPSB0YXNrbGlzdC5jaGlsZEVsZW1lbnRDb3VudFxuICAgIGZvciAobGV0IGk9MDsgaTxvbGRUYXNrQ291bnQ7IGkrKykge1xuICAgICAgICB0YXNrbGlzdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICBcblxuICAgIC8vIEFkZCBzaW5nbGUgdGFzayB0byB0YXNrbGlzdCBkaXNwbGF5XG4gICAgY29uc3QgX2NyZWF0ZVRhc2tMaXN0aW5nID0gKHRhc2ssIGkpID0+IHtcbiAgICAgICAgLy8gY3JlYXRlIHRhc2sgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG5ld0xpc3RpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBuZXdMaXN0aW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGFzayBsaXN0aW5nJHtpfWApO1xuICAgICAgICAvLyBjb21wbGV0ZSBmaWx0ZXIgdG8gYXNzaWduIGNsYXNzXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxuICAgICAgICB9XG4gICAgICAgIC8vIGFzc2lnbiBwcmlvcml0eSBjbGFzc1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICBuZXdMaXN0aW5nLmNsYXNzTGlzdC5hZGQoJ2hpZ2hQcmlvcml0eScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICBuZXdMaXN0aW5nLmNsYXNzTGlzdC5hZGQoJ21lZGl1bVByaW9yaXR5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnbG93UHJpb3JpdHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgY2hlY2tib3hcbiAgICAgICAgY3JlYXRlQ2hlY2tib3hDb250YWluZXIobmV3TGlzdGluZywgdGFzaywgaSk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgdGFza1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2tDb250YWluZXIke2l9YCk7XG4gICAgICAgIC8vIGNvbXBsZXRlIGZpbHRlciBmb3Igc3RyaWtldGhyb3VnaFxuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tcGxldGUnKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVyVGV4dCA9IGAke3Rhc2sudGFza31gO1xuICAgICAgICBuZXdMaXN0aW5nLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgICAgIC8vIGFkZCBkYXRlXG4gICAgICAgIGNyZWF0ZURhdGVDb250YWluZXIobmV3TGlzdGluZywgdGFzayk7XG5cbiAgICAgICAgLy8gYWRkIGVkaXQgYnV0dG9uXG4gICAgICAgIGNvbnN0IGVkaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBlZGl0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdENvbnRhaW5lcicpO1xuICAgICAgICBfY3JlYXRlRWRpdEljb24oZWRpdENvbnRhaW5lcik7XG4gICAgICAgIG5ld0xpc3RpbmcuYXBwZW5kQ2hpbGQoZWRpdENvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gYWRkIGRlbGV0ZSBidXR0b25cbiAgICAgICAgY3JlYXRlRGVsZXRlQ29udGFpbmVyKG5ld0xpc3RpbmcpO1xuXG4gICAgICAgIC8vYXBwZW5kIHRhc2sgdG8gdGFza2xpc3RcbiAgICAgICAgdGFza2xpc3QuYXBwZW5kQ2hpbGQobmV3TGlzdGluZyk7XG5cblxuXG4gICAgICAgIC8vIHNldCBkaXNwbGF5IGZpbHRlclxuICAgICAgICBjb25zdCBmaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJykudGV4dENvbnRlbnRcbiAgICAgICAgLy8gZGF0ZSBmaWx0ZXJzXG4gICAgICAgIGlmIChmaWx0ZXIgPT09ICdBbGwgdGFza3MnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSAnRHVlIHRvZGF5Jykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09ICdEdWUgdGhpcyB3ZWVrJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyKTtcbiAgICAgICAgfSBcblxuICAgICAgICAvLyBwcm9qZWN0IGZpbHRlclxuICAgICAgICBwcm9qZWN0cy5hbGwuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IGZpbHRlcikge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnByb2plY3QgIT09IGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0aW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH07ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG4gICAgXG5cbiAgICAvLyBDcmVhdGUgYW5kIGhpZGUgdGFzayBjYXJkIGluIHRhc2tsaXN0IGRpc3BsYXlcbiAgICBjb25zdCBfY3JlYXRlVGFza0NhcmQgPSAodGFzaywgaSkgPT4ge1xuICAgICAgICAvLyBDUkVBVEUgVEFTSyBDQVJEXG4gICAgICAgIGNvbnN0IG5ld0NhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrIGNhcmQke2l9YCk7XG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGBoaWRkZW5gKTtcblxuICAgICAgICAvLyBjb21wbGV0ZSBmaWx0ZXIgdG8gYXNzaWduIGNsYXNzXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIG5ld0NhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxuICAgICAgICB9ICAgICAgIFxuXG4gICAgICAgIC8vIGFzc2lnbiBwcmlvcml0eSBjbGFzc1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZ2hQcmlvcml0eScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lZGl1bVByaW9yaXR5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgIG5ld0NhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG93UHJpb3JpdHknKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIG5ld0NhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmNvbXBsZXRlIG1lbnVPcHRpb25zJyk7XG4gICAgICAgIG5ld0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgZGVsZXRlIGJ1dHRvblxuICAgICAgICBjcmVhdGVEZWxldGVDb250YWluZXIobmV3Q2FyZCk7XG5cbiAgICAgICAgY29uc3QgbmV3VGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICAgICAgICBuZXdUaGVhZC5pbm5lckhUTUwgPSBcbiAgICAgICAgICAgIGA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdjaGVja2JveENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J3Rhc2tDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdkYXRlQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZWRpdENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgIDwvdHI+YFxuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRib2R5XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrQ2FyZCcpO1xuICAgICAgICBcblxuICAgICAgICAvLyBGaXJzdCByb3dcbiAgICAgICAgY29uc3QgY2FyZFJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3cxJylcbiAgICAgICAgLy8gYWRkIHRhc2sgbmFtZSBpbnB1dFxuICAgICAgICBjb25zdCB0YXNrSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrSW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrSW5wdXRDb250YWluZXJgKTtcbiAgICAgICAgdGFza0lucHV0Q29udGFpbmVyLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9J3Rhc2tDYXJkVGFzayR7aX0nIGlkPSduZXdUYXNrSW5wdXQnIG5hbWU9J25ld1Rhc2tJbnB1dCcgdmFsdWU9JyR7dGFzay50YXNrfSc+PC9pbnB1dD5gO1xuICAgICAgICBjYXJkUm93MS5hcHBlbmRDaGlsZCh0YXNrSW5wdXRDb250YWluZXIpO1xuICAgICAgICAvLyBhZGQgZGF0ZVxuICAgICAgICBjb25zdCBlZGl0RGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGVkaXREYXRlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgZWRpdERhdGVDb250YWluZXJgKTtcbiAgICAgICAgY3JlYXRlRGF0ZUNvbnRhaW5lcihlZGl0RGF0ZUNvbnRhaW5lciwgdGFzaywgaSk7XG4gICAgICAgIGNhcmRSb3cxLmFwcGVuZENoaWxkKGVkaXREYXRlQ29udGFpbmVyKTtcbiAgICAgICAgLy8gYWRkIGNhbGVuZGFyIGVkaXQgYnV0dG9uXG4gICAgICAgIF9jcmVhdGVDYWxlbmRhckVkaXRJY29uKGNhcmRSb3cxKTtcblxuXG5cbiAgICAgICAgLy8gU2Vjb25kIHJvdyBcbiAgICAgICAgY29uc3QgY2FyZFJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93Mi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3cyJylcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCBjaGVja2JveFxuICAgICAgICAvLyBjcmVhdGVDaGVja2JveENvbnRhaW5lcihjYXJkUm93Mik7XG4gICAgICAgIFxuICAgICAgICAvLyBwcm9qZWN0IGlucHV0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBwcm9qZWN0SW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0SW5wdXRDb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBwcm9qZWN0IGRyb3Bkb3duIFxuICAgICAgICBjb25zdCBwcm9qZWN0RHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgICBwcm9qZWN0RHJvcGRvd24uc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrQ2FyZFByb2plY3Qke2l9YClcbiAgICAgICAgcHJvamVjdERyb3Bkb3duLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFza0lucHV0JylcbiAgICAgICAgcHJvamVjdERyb3Bkb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXdUYXNrSW5wdXQnKVxuICAgICAgICBwcm9qZWN0RHJvcGRvd24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3Rhc2sucHJvamVjdH1gKVxuXG4gICAgICAgIC8vIGNyZWF0ZSBwcm9qZWN0IGRyb3Bkb3duIG9wdGlvbnNcbiAgICAgICAgLy8gYmxhbmsgb3B0aW9uIGZvciBubyBwcm9qZWN0XG4gICAgICAgIGNvbnN0IGJsYW5rUHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIGJsYW5rUHJvamVjdE9wdGlvbi52YWx1ZSA9ICcnXG4gICAgICAgIGJsYW5rUHJvamVjdE9wdGlvbi50ZXh0ID0gJydcbiAgICAgICAgcHJvamVjdERyb3Bkb3duLmFwcGVuZENoaWxkKGJsYW5rUHJvamVjdE9wdGlvbilcbiAgICAgICAgLy8gcmVtYWluaW5nIG9wdGlvbnMgZ2VuZXJhdGVkIGZyb20gcHJvamVjdHMgYXJyYXlcbiAgICAgICAgcHJvamVjdHMuYWxsLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBgJHtwcm9qZWN0Lm5hbWV9YFxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0ID0gYCR7cHJvamVjdC5uYW1lfWBcbiAgICAgICAgICAgIGlmICh0YXNrLnByb2plY3QgPT09IHByb2plY3QubmFtZSkge1xuICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvamVjdERyb3Bkb3duLmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RHJvcGRvd24pXG4gICAgICAgIGNhcmRSb3cyLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dENvbnRhaW5lcik7XG4gICAgICAgIFxuXG4gICAgICAgIC8vIHByaW9yaXR5IGlucHV0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5SW5wdXRDb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBwcmlvcml0eSBkcm9wZG93biBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlEcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrQ2FyZFByaW9yaXR5JHtpfWApXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCdpZCcsICduZXdUYXNrSW5wdXQnKVxuICAgICAgICBwcmlvcml0eURyb3Bkb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXdUYXNrSW5wdXQnKVxuICAgICAgICBwcmlvcml0eURyb3Bkb3duLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt0YXNrLnByaW9yaXR5fWApXG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgcHJpb3JpdHkgZHJvcGRvd24gb3B0aW9uc1xuICAgICAgICAvLyBoaWdoIHByaW9yaXR5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByaW9yaXR5SGlnaC52YWx1ZSA9ICdoaWdoJ1xuICAgICAgICBwcmlvcml0eUhpZ2gudGV4dCA9ICdIaWdoJ1xuICAgICAgICAvLyBtZWRpdW0gcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBwcmlvcml0eU1lZGl1bS52YWx1ZSA9ICdtZWRpdW0nXG4gICAgICAgIHByaW9yaXR5TWVkaXVtLnRleHQgPSAnTWVkaXVtJ1xuICAgICAgICAvLyBsb3cgcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBwcmlvcml0eUxvdy52YWx1ZSA9ICdsb3cnXG4gICAgICAgIHByaW9yaXR5TG93LnRleHQgPSAnTG93J1xuICAgICAgICBcbiAgICAgICAgLy8gcHJpb3JpdHkgc2VsZWN0aW9uXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgcHJpb3JpdHlIaWdoLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICBwcmlvcml0eUxvdy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBcbiAgICAgICAgcHJpb3JpdHlNZWRpdW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgLy8gYXBwZW5kIHByaW9yaXR5IGlucHV0IHRvIHJvd1xuICAgICAgICBwcmlvcml0eURyb3Bkb3duLmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaCk7XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlNZWRpdW0pO1xuICAgICAgICBwcmlvcml0eURyb3Bkb3duLmFwcGVuZENoaWxkKHByaW9yaXR5TG93KTsgICAgICAgIFxuICAgICAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5RHJvcGRvd24pOyAgICAgICAgXG4gICAgICAgIGNhcmRSb3cyLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXRDb250YWluZXIpO1xuXG5cblxuICAgICAgICAvLyBUaGlyZCByb3cgXG4gICAgICAgIGNvbnN0IGNhcmRSb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY2FyZFJvdzMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkUm93MycpXG4gICAgICAgIF9jcmVhdGVBZGRCdXR0b24oY2FyZFJvdzMsIGkpO1xuICAgICAgICBfY3JlYXRlQ2FuY2VsQnV0dG9uKGNhcmRSb3czLCBgJHtpfWApO1xuXG5cblxuICAgICAgICAvLyBhcHBlbmQgdGFzayBjYXJkIHRvIHRhc2tsaXN0XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNhcmRSb3cxKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFJvdzIpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjYXJkUm93Myk7XG5cbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChuZXdUaGVhZCk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG5cbiAgICAgICAgdGFza2xpc3QuYXBwZW5kQ2hpbGQobmV3Q2FyZENvbnRhaW5lcik7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gYXBwZW5kIGFsbCB0YXNrcyB0byB0YXNrbGlzdFxuICAgIGxldCBpPTBcbiAgICB0YXNrcy5hbGwuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgX2NyZWF0ZVRhc2tMaXN0aW5nKHRhc2ssIGkpO1xuICAgICAgICBfY3JlYXRlVGFza0NhcmQodGFzaywgaSk7XG4gICAgICAgIGkrK1xuICAgIH0pO1xufVxuXG5cblxuXG5cbi8vIENvbXBsZXRlIHRhc2tcbmNvbnN0IF9tYXJrQ29tcGxldGUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJRCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBpZiAodGFza3MuYWxsW3Rhc2tJRF0uY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAvL21hcmsgdGFzayBpbmNvbXBsZXRlXG4gICAgICAgIHRhc2tzLmFsbFt0YXNrSURdLmNvbXBsZXRlID0gJ2ZhbHNlJ1xuICAgIH0gZWxzZSBpZiAodGFza3MuYWxsW3Rhc2tJRF0uY29tcGxldGUgPT09ICdmYWxzZScpIHtcbiAgICAgICAgLy9tYXJrIHRhc2sgY29tcGxldGVcbiAgICAgICAgdGFza3MuYWxsW3Rhc2tJRF0uY29tcGxldGUgPSAndHJ1ZSdcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBzdHJhbmdlJylcbiAgICB9XG4gICAgZGlzcGxheVRhc2tzKCk7XG59XG5cbi8vIFNob3cgdGFzayBjYXJkXG5jb25zdCBfc2hvd1Rhc2tDYXJkID0gKGUpID0+IHtcbiAgICBjb25zdCB0YXNrSUQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIC8vIHNob3cgdGFzayBjYXJkXG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZCR7dGFza0lEfWApO1xuICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrSUR9YCk7XG4gICAgLy9oaWRlIHRhc2sgbGlzdGluZ1xuICAgIGNvbnN0IHRhc2tMaXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3Rpbmcke3Rhc2tJRH1gKTtcbiAgICB0YXNrTGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xufVxuXG5jb25zdCBfc3VibWl0VGFza0NhcmQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJRCA9IChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykpIFxuXG4gICAgLy8gR2V0IGlucHV0IHZhbHVlc1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tDYXJkVGFzayR7dGFza0lEfWApLnZhbHVlXG4gICAgY29uc3QgdXBkYXRlZERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza0NhcmREYXRlJHt0YXNrSUR9YCkudmFsdWVcbiAgICBjb25zdCB1cGRhdGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrQ2FyZFByb2plY3Qke3Rhc2tJRH1gKS52YWx1ZVxuICAgIGNvbnN0IHVwZGF0ZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrQ2FyZFByaW9yaXR5JHt0YXNrSUR9YCkudmFsdWVcblxuICAgIC8vIEFwcGx5IGlucHV0IHZhbHVlcyB0byB0YXNrIG9iamVjdFxuICAgIHRhc2tzLmFsbFt0YXNrSURdLnRhc2sgPSB1cGRhdGVkVGFza1xuICAgIHRhc2tzLmFsbFt0YXNrSURdLmRhdGUgPSB1cGRhdGVkRGF0ZVxuICAgIHRhc2tzLmFsbFt0YXNrSURdLnByb2plY3QgPSB1cGRhdGVkUHJvamVjdFxuICAgIHRhc2tzLmFsbFt0YXNrSURdLnByaW9yaXR5ID0gdXBkYXRlZFByaW9yaXR5XG5cbiAgICAvLyBSZWZyZXNoIHRhc2tsaXN0XG4gICAgZGlzcGxheVRhc2tzKCk7XG59XG5cbi8vIEhpZGUgdGFzayBjYXJkXG5jb25zdCBfaGlkZVRhc2tDYXJkID0gKGkpID0+IHtcbiAgICAvLyBzaG93IHRhc2sgbGlzdGluZ1xuICAgIGNvbnN0IHRhc2tMaXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3Rpbmcke2l9YCk7XG4gICAgdGFza0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgLy8gaGlkZSB0YXNrIGNhcmRcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkJHtpfWApO1xuICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG59XG5cbi8vIERlbGV0ZSB0YXNrXG5jb25zdCBfZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgbGV0IGRvb21lZEluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICB0YXNrcy5hbGwuc3BsaWNlKGRvb21lZEluZGV4LCAxKTtcbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuXG5cblxuXG4vLyBUQVNLIERJU1BMQVkgT1BUSU9OU1xuXG4vLyBob3cgaXMgdGhpcyBiZWluZyBza2lwcGVkIHdoZW4gY2xpY2tpbmcgb24gZGVsZXRlIGljb24/P1xuY29uc3Qgc2V0VGFza0ZpbHRlciA9IChjb250YWluZXIsIGUpID0+IHsgICBcblxuICAgIC8vIHNldCBjb250ZW50IHRpdGxlIChmaWx0ZXIpXG4gICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpXG4gICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gY29udGFpbmVyLmlubmVyVGV4dFxuXG4gICAgLy8gZGVzZWxlY3QgYW55IG1lbnUgZmlsdGVyIFxuICAgIGNvbnN0IGFsbFRhc2tzQ2xhc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFRhc2tzJykuY2xhc3NMaXN0XG4gICAgY29uc3QgZHVlVG9kYXlDbGFzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlVG9kYXknKS5jbGFzc0xpc3RcbiAgICBjb25zdCBkdWVXZWVrQ2xhc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZVdlZWsnKS5jbGFzc0xpc3RcbiAgICBpZiAoYWxsVGFza3NDbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgYWxsVGFza3NDbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgfSBpZiAoZHVlVG9kYXlDbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgZHVlVG9kYXlDbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgfSBpZiAoZHVlV2Vla0NsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICBkdWVXZWVrQ2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgIH0gXG5cbiAgICAvLyBkZXNlbGVjdCBhbGwgcHJvamVjdHNcbiAgICBwcm9qZWN0cy5hbGwuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYgKHByb2plY3Quc2VsZWN0ZWQgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgcHJvamVjdC5zZWxlY3RlZCA9ICdmYWxzZSdcbiAgICAgICAgfVxuICAgIH0pIFxuXG4gICAgLy8gU2VsZWN0IHByb2plY3QgaWYgb25lIGlzIGNob3NlbiAobWFpbiBtZW51IHNlbGVjdGlvbiBpcyBoYW5kbGVkIGluIGV2ZW50IGxpc3RlbmVyKVxuICAgIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkUHJvamVjdElkID0gY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgcHJvamVjdHMuYWxsW3NlbGVjdGVkUHJvamVjdElkXS5zZWxlY3RlZCA9ICd0cnVlJ1xuICAgIH1cblxuICAgIGRpc3BsYXlQcm9qZWN0cygpOyAgICBcbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuXG5cblxuXG5leHBvcnQge1xuICAgIC8vIFVzZWQgaW4gaW5kZXggJiBjb3JlXG5cbiAgICAvLyBVc2VkIG9ubHkgaW4gY29yZVxuICAgIGNyZWF0ZUZvcm0sXG4gICAgY3JlYXRlQ2hlY2tsaXN0SWNvbixcbiAgICBjcmVhdGVXZWVrSWNvbixcbiAgICBjcmVhdGVUb2RheUljb24sXG4gICAgY3JlYXRlQWRkaXRpb25JY29uLFxuICAgIHNldFRhc2tGaWx0ZXIsXG5cbiAgICAvLyBVc2VkIG9ubHkgaW4gaW5kZXhcbiAgICBkaXNwbGF5UHJvamVjdHMsXG4gICAgZGlzcGxheVRhc2tzLFxufSIsImNsYXNzIHRhc2tzIHtcbiAgICBzdGF0aWMgYWxsID0gW107XG5cbiAgICBcblxuICAgIGNvbnN0cnVjdG9yIChuZXdUYXNrKSB7XG4gICAgICAgIHRoaXMudGFzayA9IG5ld1Rhc2tcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZVxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGVcbiAgICB9XG5cblxuXG59O1xuXG5cblxuY2xhc3MgcHJvamVjdHMge1xuICAgIHN0YXRpYyBhbGwgPSBbXTtcblxuXG5cbiAgICBjb25zdHJ1Y3RvciAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvamVjdE5hbWVcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkXG4gICAgfVxuXG5cblxufVxuXG5cblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0cyxcbiAgICB0YXNrcyxcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdGFza3MnO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3Rhc2tzJztcblxuXG4vLyBQYWdlIGluaXRpYWxpemF0aW9uXG4vLyBpbXBvcnQgeyBpbml0aWFsaXplIH0gZnJvbSAnLi9jb3JlJztcbmltcG9ydCBpbml0aWFsaXplIGZyb20gJy4vY29yZSdcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5pbml0aWFsaXplKCk7XG5cblxuXG4vLyBHcmFiIERPTSBlbGVtZW50c1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0QnRuJyk7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRQcm9qZWN0Rm9ybScpXG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3UHJvamVjdElucHV0Jyk7XG5jb25zdCBuZXdQcm9qRXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3UHJvakVycm9yQ29udGFpbmVyJyk7XG5cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0J0bicpO1xuY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0Zvcm0nKTtcbmNvbnN0IG5ld1Rhc2tJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdUYXNrSW5wdXQnKTtcbmNvbnN0IG5ld1Rhc2tFcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdUYXNrRXJyb3JDb250YWluZXInKTtcblxuXG5cbi8vIERPTSBtb2RpZmljYXRpb24gZnVuY3Rpb25zXG5cbmltcG9ydCB7IGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5cblxuXG5cblxuLy8gUFJPSkVDVCBGT1JNXG4vLyBTaG93L2hpZGUgbmV3IHByb2plY3QgZm9ybVxuY29uc3QgX3Nob3dBZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBpZiAoYWRkVGFza0Zvcm0uZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnc2hvd0Jsb2NrJykge1xuICAgICAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd0ZsZXgnKVxuICAgICAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpXG4gICAgfVxuICAgIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd0Jsb2NrJylcbn1cblxuXG4vLyBWZXJpZnkgbmV3IHByb2plY3QgZm9ybSBzdWJtaXNzaW9uXG5jb25zdCBfc3VibWl0TmV3UHJvamVjdEZvcm0gPSAoZSkgPT4ge1xuICAgIC8vIHByZXZlbnQgYWN0dWFsIGZvcm0gc3VibWlzc2lvblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHN1Ym1pdFByb2ogPSAobmV3UHJvaikgPT4ge1xuICAgICAgICBwcm9qZWN0cy5hbGwucHVzaChuZXdQcm9qKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIC8vIHNvIHlvdSBjYW4gYWRkIHRhc2tzIHRvIG5ldyBwcm9qZWN0OlxuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgX2hpZGVBZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3dGbGV4JylcbiAgICAgICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgICAgICBuZXdQcm9qZWN0SW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gICAgXG4gICAgLy8gdmVyaWZ5IG9yIGNhbmNlbCBzdWJtaXNzaW9uXG4gICAgaWYgKGUuc3VibWl0dGVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZEJ0bicgJiYgbmV3UHJvamVjdElucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICAvLyBzaG93IHByb2plY3QgbmFtZSBlcnJvclxuICAgICAgICBuZXdQcm9qRXJyb3JDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaG93QmxvY2snKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoZS5zdWJtaXR0ZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkQnRuJykge1xuICAgICAgICAvLyBzdWJtaXQgbmV3IHByb2plY3RcbiAgICAgICAgY29uc3QgbmV3UHJvaiA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5ld1Byb2plY3RJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIHNlbGVjdGVkOiAnZmFsc2UnLFxuICAgICAgICB9XG4gICAgICAgIG5ld1Byb2plY3RJbnB1dC52YWx1ZVxuICAgICAgICBzdWJtaXRQcm9qKG5ld1Byb2opO1xuICAgIH1cbiAgICBfaGlkZUFkZFByb2plY3RGb3JtKCk7XG4gICAgbmV3UHJvakVycm9yQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG59XG5cblxuXG5cblxuLy8gVEFTSyBGT1JNXG4vLyBTaG93L2hpZGUgbmV3IHRhc2sgZm9ybVxuY29uc3QgX3Nob3dBZGRUYXNrRm9ybSA9ICgpID0+IHtcbiAgICBpZiAoYWRkUHJvamVjdEZvcm0uZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnc2hvd0Jsb2NrJykge1xuICAgICAgICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd0ZsZXgnKVxuICAgICAgICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpICAgIFxuICAgIH1cbiAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3dCbG9jaycpXG59XG5cblxuLy8gVmVyaWZ5IG5ldyB0YXNrIGZvcm0gc3VibWlzc2lvblxuY29uc3QgX3N1Ym1pdE5ld1Rhc2tGb3JtID0gKGUpID0+IHtcbiAgICAvLyBwcmV2ZW50IGFjdHVhbCBmb3JtIHN1Ym1pc3Npb25cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBfc3VibWl0VGFzayA9IChuZXdUYXNrKSA9PiB7XG4gICAgICAgIHRhc2tzLmFsbC5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9XG5cbiAgICBjb25zdCBfaGlkZUFkZFRhc2tGb3JtID0gKCkgPT4ge1xuICAgICAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd0ZsZXgnKVxuICAgICAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpXG4gICAgICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBcbiAgICAvLyB2ZXJpZnkgb3IgY2FuY2VsIHN1Ym1pc3Npb25cbiAgICBpZiAoZS5zdWJtaXR0ZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkQnRuJyAmJiBuZXdUYXNrSW5wdXQudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIC8vIHNob3cgVGFzayBuYW1lIGVycm9yXG4gICAgICAgIG5ld1Rhc2tFcnJvckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3dCbG9jaycpO1xuICAgICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChlLnN1Ym1pdHRlci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRCdG4nKSB7XG4gICAgICAgIC8vIGFzc2lnbiBwcm9qZWN0XG4gICAgICAgIHZhciBuZXdUYXNrUHJvamVjdCA9ICcnXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJykudGV4dENvbnRlbnQgIT09ICdBbGwgdGFza3MnIHx8XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VGl0bGUnKS50ZXh0Q29udGVudCAhPT0gJ0R1ZSB0b2RheScgfHxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpLnRleHRDb250ZW50ICE9PSAnRHVlIHRoaXMgd2VlaycpIHtcbiAgICAgICAgICAgIG5ld1Rhc2tQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpLnRleHRDb250ZW50XG4gICAgICAgIH0gXG4gICAgICAgIFxuICAgICAgICAvLyBzdWJtaXQgbmV3IFRhc2tcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHtcbiAgICAgICAgICAgIHRhc2s6IG5ld1Rhc2tJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGRhdGU6IGBgLFxuICAgICAgICAgICAgcHJvamVjdDogYCR7bmV3VGFza1Byb2plY3R9YCxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAnZmFsc2UnLFxuICAgICAgICB9XG4gICAgICAgIF9zdWJtaXRUYXNrKG5ld1Rhc2spO1xuICAgIH1cbiAgICBfaGlkZUFkZFRhc2tGb3JtKCk7XG4gICAgbmV3VGFza0Vycm9yQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG59XG5cblxuXG5cblxuLy8gRXZlbnQgbGlzdGVuZXJzXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Nob3dBZGRQcm9qZWN0Rm9ybSk7XG5hZGRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gX3N1Ym1pdE5ld1Byb2plY3RGb3JtKGUpKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2hvd0FkZFRhc2tGb3JtKTtcbmFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBfc3VibWl0TmV3VGFza0Zvcm0oZSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==