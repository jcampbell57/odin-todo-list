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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: lightsteelblue;\n    --secondary-color: steelblue;\n    --menu-color: rgb(145, 189, 224);\n    --accent-color: whitesmoke;\n    --font-color: rgb(20, 20, 20);\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    background-color: var(--background-color);\n    display: grid;\n    grid-template-columns: 250px calc(100vw - 250px);\n    grid-template-rows: 110px calc(100vh - 110px - 62px) 62px;\n    margin: 0;\n}\n\n\n\n\n\n/* Header styling */\n\n.logo {\n    max-height: 90%;\n    margin-right: 8px;\n    /* whitesmoke color */\n    filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(201deg) brightness(107%) contrast(92%);\n}\n\nheader {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.8);\n    z-index: 1;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n\n\n\n\n/* Menu styling */\n\n.menu {\n    background-color: var(--menu-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n}\n\n.icon {\n    height: 1.2rem;\n}\n\n.menuOptions {\n    list-style: none;\n    padding: 0;\n}\n\n.menuOptions>li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.projectsHeader {\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n\n.menuOptions li,\n.projectsHeader,\n.contentTitle,\n.addTaskBtn,\n.addProjectForm,\ntbody>tr {\n    margin: 10px 1rem;\n    padding: 8px;\n    border-radius: 8px;    \n}\n\ntbody>tr.task:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n}\n\n.menuOptions li:hover,\n.addTaskBtn:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.menuOptions li:active,\n.addTaskBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n\n\n\n\n/* Form styling */\n\n#showBlock {\n    display: block;\n}\n\n#showFlex {\n    display: flex;\n}\n\n#hidden {\n    display: none;\n}\n\n.addProjectForm,\n.addTaskForm {\n    padding: 0;\n}\n\n.addTaskForm {\n    margin: 10px;\n}\n\n.formRow{\n    display: flex;\n    justify-content:space-around;\n    gap: 8px;\n\n}\n\n#formButtons {\n    margin-top: 8px;\n}\n\n#newTaskInput,\n#newProjectInput {\n    width: 100%;\n    font-size: 1.2rem;\n    padding: 6px;\n    border: none;\n    border-radius: 8px;\n}\n\n.addBtn,\n.cancelBtn {\n    width: 100%;\n    padding: 8px;\n    border-radius: 8px;    \n    font-size: 1rem;\n}\n\n.addBtn {\n    background-color: lightgreen;\n    border: 2px solid hsl(120, 73%, 55%);\n}\n\n.cancelBtn {\n    background-color: lightpink;\n    border: 2px solid hsl(351, 100%, 70%);\n\n}\n\n.addBtn:hover,\n.cancelBtn:hover {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.addBtn:active,\n.cancelBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.newProjErrorContainer,\n.newTaskErrorContainer {\n    margin-top: 8px;\n    text-align: center;\n    color: darkred;\n}\n\n\n\n\n\n/* Content styling */\n\n.content {\n    background-color: var(--background-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n    max-width: 1000px;\n    /* padding: 20px; */\n}\n\n/* .contentTitle {\n    border: 1px solid red;\n}\n\n.taskContainer {\n    border: 1px solid red;\n}\n\n.addTaskBtn {\n    border: 1px solid red;\n} */\n\n\n\n\n\n/* Table styling */\n\ntable {\n    /* border: 1px solid red; */\n    width: 100%;\n}\n\ntbody>tr {\n    box-sizing: border-box;\n    /* width: 100%; */\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    /* border: 2px solid blue; */\n}\n\n.highPriority {\n    border-left: 5px solid red;\n}\n\n.mediumPriority {\n    border-left: 5px solid darkorange;\n}\n\n.lowPriority {\n    border-left: 5px solid green;\n}\n\n.complete {\n    border-left: 5px solid var(--font-color);\n}\n\n.hidden {\n    display: none;\n}\n\ntd {\n    /* border: 2px solid pink; */\n    display: flex;\n    /* align-items: center; */\n    /* justify-content: center; */\n}\n\n/* NEW */\nimg.icon:hover,\n.dateContainer:hover {\n    cursor: pointer;\n}\n/* OLD */\n/* .checkboxContainer:hover,\n.dateContainer:hover,\n.editContainer:hover,\n.editDateContainer:hover,\n#deleteItem:hover {\n    cursor: pointer;\n} */\n\n.dateContainer,\nimg#deleteItem {\n    margin-left: auto;\n}\n\n.checkboxContainer:active {\n    filter: invert(18%) sepia(76%) saturate(2312%) hue-rotate(109deg) brightness(100%) contrast(107%);\n}\n\n#deleteItem:hover {\n    filter: invert(7%) sepia(51%) saturate(5951%) hue-rotate(350deg) brightness(140%) contrast(136%);\n}\n\n.editContainer:hover,\nimg.editDateIcon:hover {\n    filter: invert(60%) sepia(34%) saturate(3621%) hue-rotate(359deg) brightness(100%) contrast(109%);\n}\n\n/* .taskContainer {\n\n} */\n\ntd img {\n    /* border: 2px solid blue; */\n    color: #006400;\n}\n\n#complete {\n    text-decoration: line-through;\n}\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: auto;\n}\n\n.github {\n    height: 24px;\n    margin-left: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --background-color: lightsteelblue;\n    --secondary-color: steelblue;\n    --menu-color: rgb(145, 189, 224);\n    --accent-color: whitesmoke;\n    --font-color: rgb(20, 20, 20);\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    background-color: var(--background-color);\n    display: grid;\n    grid-template-columns: 250px calc(100vw - 250px);\n    grid-template-rows: 110px calc(100vh - 110px - 62px) 62px;\n    margin: 0;\n}\n\n\n\n\n\n/* Header styling */\n\n.logo {\n    max-height: 90%;\n    margin-right: 8px;\n    /* whitesmoke color */\n    filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(201deg) brightness(107%) contrast(92%);\n}\n\nheader {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.8);\n    z-index: 1;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n\n\n\n\n/* Menu styling */\n\n.menu {\n    background-color: var(--menu-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n}\n\n.icon {\n    height: 1.2rem;\n}\n\n.menuOptions {\n    list-style: none;\n    padding: 0;\n}\n\n.menuOptions>li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.projectsHeader {\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n\n.menuOptions li,\n.projectsHeader,\n.contentTitle,\n.addTaskBtn,\n.addProjectForm,\ntbody>tr {\n    margin: 10px 1rem;\n    padding: 8px;\n    border-radius: 8px;    \n}\n\ntbody>tr.task:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n}\n\n.menuOptions li:hover,\n.addTaskBtn:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.menuOptions li:active,\n.addTaskBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n\n\n\n\n/* Form styling */\n\n#showBlock {\n    display: block;\n}\n\n#showFlex {\n    display: flex;\n}\n\n#hidden {\n    display: none;\n}\n\n.addProjectForm,\n.addTaskForm {\n    padding: 0;\n}\n\n.addTaskForm {\n    margin: 10px;\n}\n\n.formRow{\n    display: flex;\n    justify-content:space-around;\n    gap: 8px;\n\n}\n\n#formButtons {\n    margin-top: 8px;\n}\n\n#newTaskInput,\n#newProjectInput {\n    width: 100%;\n    font-size: 1.2rem;\n    padding: 6px;\n    border: none;\n    border-radius: 8px;\n}\n\n.addBtn,\n.cancelBtn {\n    width: 100%;\n    padding: 8px;\n    border-radius: 8px;    \n    font-size: 1rem;\n}\n\n.addBtn {\n    background-color: lightgreen;\n    border: 2px solid hsl(120, 73%, 55%);\n}\n\n.cancelBtn {\n    background-color: lightpink;\n    border: 2px solid hsl(351, 100%, 70%);\n\n}\n\n.addBtn:hover,\n.cancelBtn:hover {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.addBtn:active,\n.cancelBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.newProjErrorContainer,\n.newTaskErrorContainer {\n    margin-top: 8px;\n    text-align: center;\n    color: darkred;\n}\n\n\n\n\n\n/* Content styling */\n\n.content {\n    background-color: var(--background-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n    max-width: 1000px;\n    /* padding: 20px; */\n}\n\n/* .contentTitle {\n    border: 1px solid red;\n}\n\n.taskContainer {\n    border: 1px solid red;\n}\n\n.addTaskBtn {\n    border: 1px solid red;\n} */\n\n\n\n\n\n/* Table styling */\n\ntable {\n    /* border: 1px solid red; */\n    width: 100%;\n}\n\ntbody>tr {\n    box-sizing: border-box;\n    /* width: 100%; */\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    /* border: 2px solid blue; */\n}\n\n.highPriority {\n    border-left: 5px solid red;\n}\n\n.mediumPriority {\n    border-left: 5px solid darkorange;\n}\n\n.lowPriority {\n    border-left: 5px solid green;\n}\n\n.complete {\n    border-left: 5px solid var(--font-color);\n}\n\n.hidden {\n    display: none;\n}\n\ntd {\n    /* border: 2px solid pink; */\n    display: flex;\n    /* align-items: center; */\n    /* justify-content: center; */\n}\n\n/* NEW */\nimg.icon:hover,\n.dateContainer:hover {\n    cursor: pointer;\n}\n/* OLD */\n/* .checkboxContainer:hover,\n.dateContainer:hover,\n.editContainer:hover,\n.editDateContainer:hover,\n#deleteItem:hover {\n    cursor: pointer;\n} */\n\n.dateContainer,\nimg#deleteItem {\n    margin-left: auto;\n}\n\n.checkboxContainer:active {\n    filter: invert(18%) sepia(76%) saturate(2312%) hue-rotate(109deg) brightness(100%) contrast(107%);\n}\n\n#deleteItem:hover {\n    filter: invert(7%) sepia(51%) saturate(5951%) hue-rotate(350deg) brightness(140%) contrast(136%);\n}\n\n.editContainer:hover,\nimg.editDateIcon:hover {\n    filter: invert(60%) sepia(34%) saturate(3621%) hue-rotate(359deg) brightness(100%) contrast(109%);\n}\n\n/* .taskContainer {\n\n} */\n\ntd img {\n    /* border: 2px solid blue; */\n    color: #006400;\n}\n\n#complete {\n    text-decoration: line-through;\n}\n\n\n\n\n\n/* Footer styling */\n\nfooter {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: auto;\n}\n\n.github {\n    height: 24px;\n    margin-left: 10px;\n}"],"sourceRoot":""}]);
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
const createCheckboxIcon = (td, task, i) => {
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

const createDeleteIcon = (container, i) => {
    // create image and assign attributes
    const newDeleteIcon = document.createElement('img');
    newDeleteIcon.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_8__;
    newDeleteIcon.setAttribute('class', 'icon')
    newDeleteIcon.setAttribute('id', 'deleteItem')
    // add event listener
    if (container.getAttribute('class') === 'taskCloseContainer') {
        // Event listener to delete task
        newDeleteIcon.addEventListener('click', (e) => _deleteTask(e))
    } else if (container.getAttribute('class') === 'project') {
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
const createCheckboxContainer = (tr, task, i) => {
    const checkboxContainer = document.createElement('td');
    checkboxContainer.setAttribute('class', 'checkboxContainer');
    createCheckboxIcon(checkboxContainer, task, i);
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
        // filter tasklist by project     
        newProjectContainer.addEventListener('click', (e) => {
            // console.log(e.target)
            setContentTitle(e)
            displayTasks();
        })
    
        createChecklistIcon(newProjectContainer);
        const newProjectText = document.createElement('span');
        newProjectText.textContent = newProj;
        newProjectContainer.appendChild(newProjectText)
        createDeleteIcon(newProjectContainer, i);
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
    console.log(e.target);
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
    const taskID = e.target.getAttribute('id');
    if (_tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].complete === 'true') {
        //mark task incomplete
        _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].complete = 'false'
        console.log(_tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID])
    } else if (_tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].complete === 'false') {
        //mark task complete
        _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID].complete = 'true'
        console.log(_tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.all[taskID])
    } else {
        console.log('this is strange')
    }
    displayTasks();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDbUM7QUFDSDs7O0FBR2hDO0FBQ0EsWUFBWSxhQUFhO0FBQ007QUFDVjs7QUFFckIsaURBQVU7Ozs7QUFJVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRWdEO0FBQ0g7Ozs7OztBQU03QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLHFEQUFpQjtBQUN6QixRQUFRLDZEQUFlO0FBQ3ZCO0FBQ0EsUUFBUSwwREFBWTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxrREFBYztBQUN0QixRQUFRLDBEQUFZO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgLS1tZW51LWNvbG9yOiByZ2IoMTQ1LCAxODksIDIyNCk7XFxuICAgIC0tYWNjZW50LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLWZvbnQtY29sb3I6IHJnYigyMCwgMjAsIDIwKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggY2FsYygxMDB2dyAtIDI1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMTBweCBjYWxjKDEwMHZoIC0gMTEwcHggLSA2MnB4KSA2MnB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcblxcblxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuXFxuLmxvZ28ge1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAvKiB3aGl0ZXNtb2tlIGNvbG9yICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDgwJSkgaHVlLXJvdGF0ZSgyMDFkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoOTIlKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4IHJnYigwLCAwLCAwLCAwLjgpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBNZW51IHN0eWxpbmcgKi9cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWVudU9wdGlvbnM+bGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tZW51T3B0aW9ucyBsaSxcXG4ucHJvamVjdHNIZWFkZXIsXFxuLmNvbnRlbnRUaXRsZSxcXG4uYWRkVGFza0J0bixcXG4uYWRkUHJvamVjdEZvcm0sXFxudGJvZHk+dHIge1xcbiAgICBtYXJnaW46IDEwcHggMXJlbTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7ICAgIFxcbn1cXG5cXG50Ym9keT50ci50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUsIDAuMyk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMgbGk6aG92ZXIsXFxuLmFkZFRhc2tCdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSwgMC4zKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVPcHRpb25zIGxpOmFjdGl2ZSxcXG4uYWRkVGFza0J0bjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRm9ybSBzdHlsaW5nICovXFxuXFxuI3Nob3dCbG9jayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jc2hvd0ZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZFByb2plY3RGb3JtLFxcbi5hZGRUYXNrRm9ybSB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hZGRUYXNrRm9ybSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmZvcm1Sb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogOHB4O1xcblxcbn1cXG5cXG4jZm9ybUJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbiNuZXdUYXNrSW5wdXQsXFxuI25ld1Byb2plY3RJbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmFkZEJ0bixcXG4uY2FuY2VsQnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAgICBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgaHNsKDEyMCwgNzMlLCA1NSUpO1xcbn1cXG5cXG4uY2FuY2VsQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBoc2woMzUxLCAxMDAlLCA3MCUpO1xcblxcbn1cXG5cXG4uYWRkQnRuOmhvdmVyLFxcbi5jYW5jZWxCdG46aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkQnRuOmFjdGl2ZSxcXG4uY2FuY2VsQnRuOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubmV3UHJvakVycm9yQ29udGFpbmVyLFxcbi5uZXdUYXNrRXJyb3JDb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcblxcblxcblxcblxcbi8qIENvbnRlbnQgc3R5bGluZyAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcbn1cXG5cXG4vKiAuY29udGVudFRpdGxlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmFkZFRhc2tCdG4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufSAqL1xcblxcblxcblxcblxcblxcbi8qIFRhYmxlIHN0eWxpbmcgKi9cXG5cXG50YWJsZSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRib2R5PnRyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4uaGlnaFByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XFxufVxcblxcbi5tZWRpdW1Qcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcXG59XFxuXFxuLmxvd1ByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnRkIHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcGluazsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxufVxcblxcbi8qIE5FVyAqL1xcbmltZy5pY29uOmhvdmVyLFxcbi5kYXRlQ29udGFpbmVyOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBPTEQgKi9cXG4vKiAuY2hlY2tib3hDb250YWluZXI6aG92ZXIsXFxuLmRhdGVDb250YWluZXI6aG92ZXIsXFxuLmVkaXRDb250YWluZXI6aG92ZXIsXFxuLmVkaXREYXRlQ29udGFpbmVyOmhvdmVyLFxcbiNkZWxldGVJdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn0gKi9cXG5cXG4uZGF0ZUNvbnRhaW5lcixcXG5pbWcjZGVsZXRlSXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXI6YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg3NiUpIHNhdHVyYXRlKDIzMTIlKSBodWUtcm90YXRlKDEwOWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDclKTtcXG59XFxuXFxuI2RlbGV0ZUl0ZW06aG92ZXIge1xcbiAgICBmaWx0ZXI6IGludmVydCg3JSkgc2VwaWEoNTElKSBzYXR1cmF0ZSg1OTUxJSkgaHVlLXJvdGF0ZSgzNTBkZWcpIGJyaWdodG5lc3MoMTQwJSkgY29udHJhc3QoMTM2JSk7XFxufVxcblxcbi5lZGl0Q29udGFpbmVyOmhvdmVyLFxcbmltZy5lZGl0RGF0ZUljb246aG92ZXIge1xcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDM0JSkgc2F0dXJhdGUoMzYyMSUpIGh1ZS1yb3RhdGUoMzU5ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwOSUpO1xcbn1cXG5cXG4vKiAudGFza0NvbnRhaW5lciB7XFxuXFxufSAqL1xcblxcbnRkIGltZyB7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7ICovXFxuICAgIGNvbG9yOiAjMDA2NDAwO1xcbn1cXG5cXG4jY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRm9vdGVyIHN0eWxpbmcgKi9cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFDNUIsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx3SEFBd0g7SUFDeEgseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixnREFBZ0Q7SUFDaEQseURBQXlEO0lBQ3pELFNBQVM7QUFDYjs7Ozs7O0FBTUEsbUJBQW1COztBQUVuQjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdHQUFnRztBQUNwRzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLHlDQUF5QztJQUN6QyxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7Ozs7OztBQU1BLGlCQUFpQjs7QUFFakI7SUFDSSxtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBOzs7Ozs7SUFNSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyx5Q0FBeUM7QUFDN0M7O0FBRUE7O0lBRUkseUNBQXlDO0lBQ3pDLHlDQUF5QztJQUN6QyxlQUFlO0FBQ25COztBQUVBOztJQUVJLHlDQUF5QztBQUM3Qzs7Ozs7O0FBTUEsaUJBQWlCOztBQUVqQjtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixRQUFROztBQUVaOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHFDQUFxQzs7QUFFekM7O0FBRUE7O0lBRUkseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUkseUNBQXlDO0FBQzdDOztBQUVBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7Ozs7O0FBTUEsb0JBQW9COztBQUVwQjtJQUNJLHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7Ozs7Ozs7R0FVRzs7Ozs7O0FBTUgsa0JBQWtCOztBQUVsQjtJQUNJLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUEsUUFBUTtBQUNSOztJQUVJLGVBQWU7QUFDbkI7QUFDQSxRQUFRO0FBQ1I7Ozs7OztHQU1HOztBQUVIOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlHQUFpRztBQUNyRzs7QUFFQTtJQUNJLGdHQUFnRztBQUNwRzs7QUFFQTs7SUFFSSxpR0FBaUc7QUFDckc7O0FBRUE7O0dBRUc7O0FBRUg7SUFDSSw0QkFBNEI7SUFDNUIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7Ozs7O0FBTUEsbUJBQW1COztBQUVuQjtJQUNJLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgLS1tZW51LWNvbG9yOiByZ2IoMTQ1LCAxODksIDIyNCk7XFxuICAgIC0tYWNjZW50LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLWZvbnQtY29sb3I6IHJnYigyMCwgMjAsIDIwKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggY2FsYygxMDB2dyAtIDI1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMTBweCBjYWxjKDEwMHZoIC0gMTEwcHggLSA2MnB4KSA2MnB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcblxcblxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuXFxuLmxvZ28ge1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAvKiB3aGl0ZXNtb2tlIGNvbG9yICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDgwJSkgaHVlLXJvdGF0ZSgyMDFkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoOTIlKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4IHJnYigwLCAwLCAwLCAwLjgpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBNZW51IHN0eWxpbmcgKi9cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWVudU9wdGlvbnM+bGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tZW51T3B0aW9ucyBsaSxcXG4ucHJvamVjdHNIZWFkZXIsXFxuLmNvbnRlbnRUaXRsZSxcXG4uYWRkVGFza0J0bixcXG4uYWRkUHJvamVjdEZvcm0sXFxudGJvZHk+dHIge1xcbiAgICBtYXJnaW46IDEwcHggMXJlbTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7ICAgIFxcbn1cXG5cXG50Ym9keT50ci50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUsIDAuMyk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMgbGk6aG92ZXIsXFxuLmFkZFRhc2tCdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSwgMC4zKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVPcHRpb25zIGxpOmFjdGl2ZSxcXG4uYWRkVGFza0J0bjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRm9ybSBzdHlsaW5nICovXFxuXFxuI3Nob3dCbG9jayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jc2hvd0ZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZFByb2plY3RGb3JtLFxcbi5hZGRUYXNrRm9ybSB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hZGRUYXNrRm9ybSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmZvcm1Sb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogOHB4O1xcblxcbn1cXG5cXG4jZm9ybUJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbiNuZXdUYXNrSW5wdXQsXFxuI25ld1Byb2plY3RJbnB1dCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmFkZEJ0bixcXG4uY2FuY2VsQnRuIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAgICBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgaHNsKDEyMCwgNzMlLCA1NSUpO1xcbn1cXG5cXG4uY2FuY2VsQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBoc2woMzUxLCAxMDAlLCA3MCUpO1xcblxcbn1cXG5cXG4uYWRkQnRuOmhvdmVyLFxcbi5jYW5jZWxCdG46aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkQnRuOmFjdGl2ZSxcXG4uY2FuY2VsQnRuOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubmV3UHJvakVycm9yQ29udGFpbmVyLFxcbi5uZXdUYXNrRXJyb3JDb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcblxcblxcblxcblxcbi8qIENvbnRlbnQgc3R5bGluZyAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcbn1cXG5cXG4vKiAuY29udGVudFRpdGxlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbn1cXG5cXG4udGFza0NvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLmFkZFRhc2tCdG4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxufSAqL1xcblxcblxcblxcblxcblxcbi8qIFRhYmxlIHN0eWxpbmcgKi9cXG5cXG50YWJsZSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRib2R5PnRyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBibHVlOyAqL1xcbn1cXG5cXG4uaGlnaFByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCByZWQ7XFxufVxcblxcbi5tZWRpdW1Qcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZGFya29yYW5nZTtcXG59XFxuXFxuLmxvd1ByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbnRkIHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcGluazsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxufVxcblxcbi8qIE5FVyAqL1xcbmltZy5pY29uOmhvdmVyLFxcbi5kYXRlQ29udGFpbmVyOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4vKiBPTEQgKi9cXG4vKiAuY2hlY2tib3hDb250YWluZXI6aG92ZXIsXFxuLmRhdGVDb250YWluZXI6aG92ZXIsXFxuLmVkaXRDb250YWluZXI6aG92ZXIsXFxuLmVkaXREYXRlQ29udGFpbmVyOmhvdmVyLFxcbiNkZWxldGVJdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn0gKi9cXG5cXG4uZGF0ZUNvbnRhaW5lcixcXG5pbWcjZGVsZXRlSXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXI6YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg3NiUpIHNhdHVyYXRlKDIzMTIlKSBodWUtcm90YXRlKDEwOWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDclKTtcXG59XFxuXFxuI2RlbGV0ZUl0ZW06aG92ZXIge1xcbiAgICBmaWx0ZXI6IGludmVydCg3JSkgc2VwaWEoNTElKSBzYXR1cmF0ZSg1OTUxJSkgaHVlLXJvdGF0ZSgzNTBkZWcpIGJyaWdodG5lc3MoMTQwJSkgY29udHJhc3QoMTM2JSk7XFxufVxcblxcbi5lZGl0Q29udGFpbmVyOmhvdmVyLFxcbmltZy5lZGl0RGF0ZUljb246aG92ZXIge1xcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDM0JSkgc2F0dXJhdGUoMzYyMSUpIGh1ZS1yb3RhdGUoMzU5ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwOSUpO1xcbn1cXG5cXG4vKiAudGFza0NvbnRhaW5lciB7XFxuXFxufSAqL1xcblxcbnRkIGltZyB7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7ICovXFxuICAgIGNvbG9yOiAjMDA2NDAwO1xcbn1cXG5cXG4jY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogRm9vdGVyIHN0eWxpbmcgKi9cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmltcG9ydCBsb2dvSWNvbiBmcm9tICcuL2Fzc2V0cy9jaGVjay1kZWNhZ3JhbS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tICcuL2Fzc2V0cy9HaXRIdWItbGlnaHQtMzJweC5wbmcnO1xuXG5pbXBvcnQgeyBjcmVhdGVDaGVja2xpc3RJY29uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBzZXRDb250ZW50VGl0bGUgfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IGNyZWF0ZVdlZWtJY29uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBjcmVhdGVUb2RheUljb24gfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IGNyZWF0ZUFkZGl0aW9uSWNvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuXG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tICcuL2ludGVyYWN0aXZlJztcblxuXG4vLyBJbml0aWFsaXphdGlvbiBmdW5jdGlvbnNcbmNvbnN0IF9jcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBcbiAgICAvLyBkaXNwbGF5IHRpdGxlXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uc3JjID0gbG9nb0ljb247XG4gICAgbG9nby50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBsb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9nbycpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGhpbmdzIFRvIERvJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuXG5jb25zdCBfY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcblxuICAgIC8vIE1haW4gbWVudVxuICAgIGNvbnN0IG1lbnVPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBtZW51T3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgXG4gICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFsbFRhc2tzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWxsVGFza3MnKTtcbiAgICBhbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNldENvbnRlbnRUaXRsZShlKVxuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9KVxuICAgIGNyZWF0ZUNoZWNrbGlzdEljb24oYWxsVGFza3MpO1xuICAgIGNvbnN0IGFsbFRhc2tzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhbGxUYXNrc1RleHQudGV4dENvbnRlbnQgPSAnQWxsIHRhc2tzJztcbiAgICBhbGxUYXNrcy5hcHBlbmRDaGlsZChhbGxUYXNrc1RleHQpXG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoYWxsVGFza3MpO1xuXG4gICAgY29uc3QgZHVlVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGR1ZVRvZGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlVG9kYXknKTtcbiAgICBkdWVUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICBzZXRDb250ZW50VGl0bGUoZSlcbiAgICB9KVxuICAgIGNyZWF0ZVRvZGF5SWNvbihkdWVUb2RheSk7XG4gICAgY29uc3QgZHVlVG9kYXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGR1ZVRvZGF5VGV4dC5pbm5lclRleHQgPSAnRHVlIHRvZGF5JztcbiAgICBkdWVUb2RheS5hcHBlbmRDaGlsZChkdWVUb2RheVRleHQpO1xuICAgIG1lbnVPcHRpb25zLmFwcGVuZENoaWxkKGR1ZVRvZGF5KTtcblxuICAgIGNvbnN0IGR1ZVdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGR1ZVdlZWsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkdWVXZWVrJyk7XG4gICAgZHVlV2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICBzZXRDb250ZW50VGl0bGUoZSlcbiAgICB9KVxuICAgIGNyZWF0ZVdlZWtJY29uKGR1ZVdlZWspO1xuICAgIGNvbnN0IGR1ZVdlZWtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGR1ZVdlZWtUZXh0LmlubmVyVGV4dCA9ICdEdWUgdGhpcyB3ZWVrJztcbiAgICBkdWVXZWVrLmFwcGVuZENoaWxkKGR1ZVdlZWtUZXh0KTtcbiAgICBtZW51T3B0aW9ucy5hcHBlbmRDaGlsZChkdWVXZWVrKTtcblxuXG4gICAgLy8gUHJvamVjdHMgbWVudVxuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RzSGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHNIZWFkZXInKVxuICAgIHByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAgIGNvbnN0IHByb2plY3RzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcHJvamVjdHNNZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudU9wdGlvbnMnKTtcbiAgICBwcm9qZWN0c01lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0c01lbnUnKTtcblxuXG4gICAgLy8gR2VuZXJhdGUgYWRkIHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZFByb2plY3RCdG4nKVxuICAgIGNyZWF0ZUFkZGl0aW9uSWNvbihhZGRQcm9qZWN0KVxuICAgIGNvbnN0IGFkZFByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZFByb2plY3RUZXh0LmlubmVyVGV4dCA9ICdBZGQgUHJvamVjdCc7XG4gICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0VGV4dClcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3QpXG5cblxuICAgIC8vIEdlbmVyYXRlIGFuZCBoaWRlIG5ldyBwcm9qZWN0IGZvcm1cbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZFByb2plY3RGb3JtJyk7XG4gICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgIGFkZFByb2plY3RGb3JtLm1ldGhvZCA9ICdnZXQnO1xuICAgIGNyZWF0ZUZvcm0oYWRkUHJvamVjdEZvcm0pO1xuICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pXG5cblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudU9wdGlvbnMpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdHNNZW51KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGFkZFByb2plY3RDb250YWluZXIpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZW51KTtcbn1cblxuXG5jb25zdCBfY3JlYXRlQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29udGVudFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudFRpdGxlJyk7XG4gICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9ICdBbGwgdGFza3MnO1xuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcbiAgICAgICAgYDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2NoZWNrYm94Q29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0ndGFza0NvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2RhdGVDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdlZGl0Q29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0ndGFza0Nsb3NlQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5IGlkPSd0YXNrTGlzdCc+PC90Ym9keT5gXG4gICAgXG5cbiAgICAvLyBDcmVhdGUgYWRkIHRhc2sgYnV0dG9uXG4gICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgYWRkVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWRkVGFzay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZFRhc2tCdG4nKTtcbiAgICBjcmVhdGVBZGRpdGlvbkljb24oYWRkVGFzayk7XG4gICAgY29uc3QgYWRkVGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWRkVGFza1RleHQuaW5uZXJUZXh0ID0gJ0FkZCB0YXNrJztcbiAgICBhZGRUYXNrLmFwcGVuZENoaWxkKGFkZFRhc2tUZXh0KTtcbiAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gICAgLy8gR2VuZXJhdGUgYW5kIGhpZGUgbmV3IHRhc2sgZm9ybVxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkVGFza0Zvcm0nKTtcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpXG4gICAgYWRkVGFza0Zvcm0ubWV0aG9kID0gJ2dldCc7XG4gICAgY3JlYXRlRm9ybShhZGRUYXNrRm9ybSk7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cblxuY29uc3QgX2NyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGpjYW1wYmVsbDU3YDtcbiAgXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3JztcbiAgICBnaXRodWJMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICBcbiAgICBjb25zdCBuZXdHaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3R2l0aHViSWNvbi5zcmMgPSBnaXRodWJJY29uO1xuICAgIG5ld0dpdGh1Ykljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdnaXRodWInKTtcblxuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQobmV3R2l0aHViSWNvbik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgX2NyZWF0ZUhlYWRlcigpO1xuICAgIF9jcmVhdGVNZW51KCk7XG4gICAgX2NyZWF0ZUNvbnRlbnQoKTtcbiAgICBfY3JlYXRlRm9vdGVyKCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemU7IiwiaW1wb3J0IGNoZWNrYm94QmxhbmsgZnJvbSAnLi9hc3NldHMvY2hlY2tib3gtYmxhbmsuc3ZnJztcbmltcG9ydCBjaGVja2JveE1hcmtlZCBmcm9tICcuL2Fzc2V0cy9jaGVja2JveC1tYXJrZWQuc3ZnJztcbmltcG9ydCBjaGVja2xpc3QgZnJvbSAnLi9hc3NldHMvY2hlY2tsaXN0LnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJUb2RheSBmcm9tICcuL2Fzc2V0cy9jYWxlbmRhci10b2RheS5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyV2VlayBmcm9tICcuL2Fzc2V0cy9jYWxlbmRhci1yYW5nZS5zdmcnO1xuaW1wb3J0IGFkZGl0aW9uSWNvbiBmcm9tICcuL2Fzc2V0cy9wbHVzLnN2Zyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9hc3NldHMvZWRpdC5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyRWRpdEljb24gZnJvbSAnLi9hc3NldHMvY2FsZW5kYXItZWRpdC5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9hc3NldHMvZGVsZXRlLnN2Zyc7XG5cbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi90YXNrcyc7XG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4vdGFza3MnO1xuXG5cblxuLy8gSWNvbiAmIGJ1dHRvbiBnZW5lcmF0b3JzIFxuY29uc3QgY3JlYXRlQ2hlY2tib3hJY29uID0gKHRkLCB0YXNrLCBpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWYgKHRhc2suY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICBjaGVja2JveEljb24uc3JjID0gY2hlY2tib3hNYXJrZWRcbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGVja2JveEljb24uc3JjID0gY2hlY2tib3hCbGFuaztcbiAgICB9XG4gICAgY2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICAgIGNoZWNrYm94SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICBjaGVja2JveEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX21hcmtDb21wbGV0ZShlKSlcbiAgICB0ZC5hcHBlbmRDaGlsZChjaGVja2JveEljb24pO1xufSBcblxuY29uc3QgX2NyZWF0ZU1hcmtlZENoZWNrYm94SWNvbiA9ICh0ZCkgPT4ge1xuICAgIGNvbnN0IG1hcmtlZENoZWNrYm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1hcmtlZENoZWNrYm94SWNvbi5zcmMgPSBjaGVja2JveE1hcmtlZDtcbiAgICBtYXJrZWRDaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gICAgbWFya2VkQ2hlY2tib3hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9tYXJrSW5jb21wbGV0ZShlKSlcbiAgICB0ZC5hcHBlbmRDaGlsZChtYXJrZWRDaGVja2JveEljb24pO1xufSBcblxuY29uc3QgY3JlYXRlQ2hlY2tsaXN0SWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IGNoZWNrbGlzdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGVja2xpc3RJY29uLnNyYyA9IGNoZWNrbGlzdDtcbiAgICBjaGVja2xpc3RJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQoY2hlY2tsaXN0SWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZUVkaXRJY29uID0gKHRkKSA9PiB7XG4gICAgY29uc3QgbmV3RWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdFZGl0SWNvbi5zcmMgPSBlZGl0SWNvbjtcbiAgICBuZXdFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKTtcbiAgICAvL2V2ZW50IGxpc3RlbmVyIHRvIG9wZW4gdGFzayBjYXJkXG4gICAgbmV3RWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX3Nob3dUYXNrQ2FyZChlKSlcbiAgICB0ZC5hcHBlbmRDaGlsZChuZXdFZGl0SWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZUNhbGVuZGFyRWRpdEljb24gPSAodGQpID0+IHtcbiAgICBjb25zdCBuZXdDYWxlbmRhckVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3Q2FsZW5kYXJFZGl0SWNvbi5zcmMgPSBjYWxlbmRhckVkaXRJY29uO1xuICAgIG5ld0NhbGVuZGFyRWRpdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uIGVkaXREYXRlSWNvbicpXG4gICAgbmV3Q2FsZW5kYXJFZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgfSlcbiAgICB0ZC5hcHBlbmRDaGlsZChuZXdDYWxlbmRhckVkaXRJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlRGVsZXRlSWNvbiA9IChjb250YWluZXIsIGkpID0+IHtcbiAgICAvLyBjcmVhdGUgaW1hZ2UgYW5kIGFzc2lnbiBhdHRyaWJ1dGVzXG4gICAgY29uc3QgbmV3RGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0RlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvbjtcbiAgICBuZXdEZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbmV3RGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZUl0ZW0nKVxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lclxuICAgIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAndGFza0Nsb3NlQ29udGFpbmVyJykge1xuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciB0byBkZWxldGUgdGFza1xuICAgICAgICBuZXdEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9kZWxldGVUYXNrKGUpKVxuICAgIH0gZWxzZSBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ3Byb2plY3QnKSB7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSBwcm9qZWN0XG4gICAgICAgIG5ld0RlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChgZGVsZXRlUHJvamVjdCR7aX1gKSAgICAgICAgXG4gICAgICAgIG5ld0RlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChgaGlkZGVuYCkgICAgICAgIFxuICAgICAgICBuZXdEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9kZWxldGVQcm9qZWN0KGUsIGkpKSAgICAgICAgXG4gICAgICAgIC8vIGRpc3BsYXkgdHJhc2ggaWNvbiBvbiBob3ZlclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZWxldGVQcm9qZWN0JHtpfWApXG4gICAgICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgfSlcbiAgICAgICAgLy8gaGlkZSB0cmFzaCBpY29uIFxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZWxldGVQcm9qZWN0JHtpfWApXG4gICAgICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgfSkgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgc3RyYW5nZScpO1xuICAgIH1cbiAgICAvLyBhcHBlbmQgdG8gY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0RlbGV0ZUljb24pXG59XG5cbmNvbnN0IGNyZWF0ZUFkZGl0aW9uSWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IG5ld0FkZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0FkZGl0aW9uSWNvbi5zcmMgPSBhZGRpdGlvbkljb247XG4gICAgbmV3QWRkaXRpb25JY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQobmV3QWRkaXRpb25JY29uKTtcbn1cblxuY29uc3QgY3JlYXRlVG9kYXlJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3VG9kYXlJY29uLnNyYyA9IGNhbGVuZGFyVG9kYXk7XG4gICAgbmV3VG9kYXlJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQobmV3VG9kYXlJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlV2Vla0ljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBuZXdXZWVrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld1dlZWtJY29uLnNyYyA9IGNhbGVuZGFyV2VlaztcbiAgICBuZXdXZWVrSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKG5ld1dlZWtJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlQWRkQnV0dG9uID0gKGNvbnRhaW5lciwgaSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbnRhaW5lcilcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRCdG4nKTtcbiAgICBhZGRCdG4uaW5uZXJUZXh0ID0gXCJzdWJtaXRcIjtcbiAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2FyZFJvdzMnKSkge1xuICAgICAgICAvLyBjb252ZXJ0IGNhcmQgdG8gZm9ybT8gYW5kIGNoYW5nZSB0aGlzIGV2ZW50IGxpc3RlbmVyIHRvIHRyaWdnZXIgd2hlbiBmb3JtIHN1Ym1pdHNcbiAgICAgICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX3N1Ym1pdFRhc2tDYXJkKGUpKVxuICAgIH07XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG59XG5cbmNvbnN0IGNyZWF0ZUNhbmNlbEJ1dHRvbiA9IChjb250YWluZXIsIGkpID0+IHtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYW5jZWxCdG4nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgY2FuY2VsQnRuLmlubmVyVGV4dCA9IFwiY2FuY2VsXCI7XG4gICAgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdjYXJkUm93MycpIHtcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2hpZGVUYXNrQ2FyZChpKSlcbiAgICB9O1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pOyAgIFxufVxuXG5cblxuLy8gQ29udGFpbmVyIEFORCBpY29uIGdlbmVyYXRvcnMgKEZvciB0YXNrIGxpc3RpbmcgYW5kIHRhc2sgY2FyZClcbmNvbnN0IGNyZWF0ZUNoZWNrYm94Q29udGFpbmVyID0gKHRyLCB0YXNrLCBpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNoZWNrYm94Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tib3hDb250YWluZXInKTtcbiAgICBjcmVhdGVDaGVja2JveEljb24oY2hlY2tib3hDb250YWluZXIsIHRhc2ssIGkpO1xuICAgIHRyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKTtcbn1cblxuY29uc3QgY3JlYXRlRGF0ZUNvbnRhaW5lciA9ICh0ciwgdGFzaywgaSkgPT4ge1xuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGRhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXRlQ29udGFpbmVyJyk7XG4gICAgaWYgKHRyLmNsYXNzTGlzdC5jb250YWlucygnZWRpdERhdGVDb250YWluZXInKSkge1xuICAgICAgICBkYXRlQ29udGFpbmVyLmlubmVySFRNTCA9IGA8aW5wdXQgY2xhc3M9J3Rhc2tDYXJkRGF0ZSR7aX0nIHR5cGU9J2RhdGUnIHZhbHVlPScke3Rhc2suZGF0ZX0nPmBcbiAgICB9IGVsc2Uge1xuICAgIGRhdGVDb250YWluZXIuaW5uZXJUZXh0ID0gYCR7dGFzay5kYXRlfWBcbiAgICB9XG4gICAgdHIuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG59XG5cbmNvbnN0IGNyZWF0ZURlbGV0ZUNvbnRhaW5lciA9ICh0cikgPT4ge1xuICAgIGNvbnN0IGNsb3NlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjbG9zZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tDbG9zZUNvbnRhaW5lcicpO1xuICAgIGNyZWF0ZURlbGV0ZUljb24oY2xvc2VDb250YWluZXIpO1xuICAgIHRyLmFwcGVuZENoaWxkKGNsb3NlQ29udGFpbmVyKTtcbn1cblxuXG5cbi8vIEZvcm0gZ2VuZXJhdG9yXG5jb25zdCBjcmVhdGVGb3JtID0gKGZvcm0pID0+IHtcbiAgICBcbiAgICBjb25zdCBmb3JtUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3cxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybVJvdycpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1Sb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvdzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtUm93Jyk7XG4gICAgZm9ybVJvdzIuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtQnV0dG9ucycpO1xuXG4gICAgY29uc3QgZm9ybVJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xuXG4gICAgLy8gcm93IG9uZTogYXNzaWduIGlucHV0IGFjY29yZGluZyB0byBjbGFzcyBvZiBmb3JtXG4gICAgLy8gcm93IHRocmVlOiBhc3NpZ24gZXJyb3IgY2xhc3MgYW5kIHRleHQgYWNjb3JkaW5nIHRvIGNsYXNzIG9mIGZvcm1cbiAgICBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRQcm9qZWN0Rm9ybScpIHtcbiAgICAgICAgZm9ybVJvdzEuaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25ld1Byb2plY3RJbnB1dCcgbmFtZT0nbmV3UHJvamVjdElucHV0Jz48L2lucHV0PlwiO1xuICAgICAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld1Byb2pFcnJvckNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtUm93My5pbm5lclRleHQgPSAnTmFtZSB5b3VyIHByb2plY3QhJ1xuICAgIH0gZWxzZSBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRUYXNrRm9ybScpIHtcbiAgICAgICAgZm9ybVJvdzEuaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25ld1Rhc2tJbnB1dCcgbmFtZT0nbmV3VGFza0lucHV0Jz48L2lucHV0PlwiO1xuICAgICAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld1Rhc2tFcnJvckNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtUm93My5pbm5lclRleHQgPSAnTmFtZSB5b3VyIHRhc2shJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHN0cmFuZ2UnKVxuICAgIH1cblxuICAgIC8vIHJvdyB0d286IHN1Ym1pdCBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgICBjcmVhdGVBZGRCdXR0b24oZm9ybVJvdzIpO1xuICAgIGNyZWF0ZUNhbmNlbEJ1dHRvbihmb3JtUm93Mik7XG4gICAgICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93MSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93Mik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93Myk7XG59XG5cblxuXG5cblxuLy8gRE9NIG1vZGlmaWNhdGlvbiBmdW5jdGlvbnNcblxuLy8gUFJPSkVDVFNcbi8vIERpc3BsYXkgZW50aXJlIGFycmF5IG9mIHByb2plY3RzIHRvIG1lbnVcbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAvLyBHcmFiIHByb2plY3RzIG1lbnVcbiAgICBjb25zdCBwcm9qZWN0c01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHNNZW51Jyk7XG5cbiAgICAvLyBDbGVhciBwcm9qZWN0cyBtZW51XG4gICAgY29uc3Qgb2xkUHJvakNvdW50ID0gcHJvamVjdHNNZW51LmNoaWxkRWxlbWVudENvdW50XG4gICAgZm9yIChsZXQgaT0wOyBpPG9sZFByb2pDb3VudDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RzTWVudS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIEFkZCBzaW5nbGUgcHJvamVjdCB0byBtZW51IChjYWxsZWQgYmVsb3cpXG4gICAgY29uc3QgX2Rpc3BsYXlQcm9qZWN0ID0gKG5ld1Byb2osIGkpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBwcm9qZWN0YClcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKVxuICAgICAgICAvLyBmaWx0ZXIgdGFza2xpc3QgYnkgcHJvamVjdCAgICAgXG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpXG4gICAgICAgICAgICBzZXRDb250ZW50VGl0bGUoZSlcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICB9KVxuICAgIFxuICAgICAgICBjcmVhdGVDaGVja2xpc3RJY29uKG5ld1Byb2plY3RDb250YWluZXIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbmV3UHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBuZXdQcm9qO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUZXh0KVxuICAgICAgICBjcmVhdGVEZWxldGVJY29uKG5ld1Byb2plY3RDb250YWluZXIsIGkpO1xuICAgICAgICBwcm9qZWN0c01lbnUuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENvbnRhaW5lcik7XG4gICAgfSBcblxuICAgIC8vIEFwcGVuZCBhbGwgdGFza3MgdG8gdGFza2xpc3RcbiAgICBsZXQgaT0wXG4gICAgcHJvamVjdHMuYWxsLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIF9kaXNwbGF5UHJvamVjdChwcm9qZWN0LCBpKVxuICAgICAgICBpKytcbiAgICB9KTtcbn1cblxuXG5cbi8vIERlbGV0ZSBwcm9qZWN0XG5jb25zdCBfZGVsZXRlUHJvamVjdCA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xuICAgIGxldCBkb29tZWRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgcHJvamVjdHMuYWxsLnNwbGljZShkb29tZWRJbmRleCwgMSk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG59XG5cblxuXG5cblxuLy8gVEFTS1Ncbi8vIERpc3BsYXkgZW50aXJlIGFycmF5IG9mIHRhc2tzIHRvIHRhc2tsaXN0XG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG5cbiAgICAvLyBHcmFiIHRhc2tsaXN0XG4gICAgY29uc3QgdGFza2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKTtcbiAgICBcbiAgICAvLyBjbGVhciB0YXNrbGlzdFxuICAgIGNvbnN0IG9sZFRhc2tDb3VudCA9IHRhc2tsaXN0LmNoaWxkRWxlbWVudENvdW50XG4gICAgZm9yIChsZXQgaT0wOyBpPG9sZFRhc2tDb3VudDsgaSsrKSB7XG4gICAgICAgIHRhc2tsaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gQWRkIHNpbmdsZSB0YXNrIHRvIHRhc2tsaXN0IGRpc3BsYXlcbiAgICBjb25zdCBfY3JlYXRlVGFza0xpc3RpbmcgPSAodGFzaywgaSkgPT4ge1xuICAgICAgICAvLyBjcmVhdGUgdGFzayBjb250YWluZXJcbiAgICAgICAgY29uc3QgbmV3TGlzdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIG5ld0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrIGxpc3Rpbmcke2l9YCk7XG4gICAgICAgIC8vIGNvbXBsZXRlIGZpbHRlciB0byBhc3NpZ24gY2xhc3NcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXG4gICAgICAgIH1cbiAgICAgICAgLy8gYXNzaWduIHByaW9yaXR5IGNsYXNzXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlnaFByaW9yaXR5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnbWVkaXVtUHJpb3JpdHknKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdsb3dQcmlvcml0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3TGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCBjaGVja2JveFxuICAgICAgICBjcmVhdGVDaGVja2JveENvbnRhaW5lcihuZXdMaXN0aW5nLCB0YXNrLCBpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCB0YXNrXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGFza0NvbnRhaW5lciR7aX1gKTtcbiAgICAgICAgLy8gY29tcGxldGUgZmlsdGVyIGZvciBzdHJpa2V0aHJvdWdoXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wbGV0ZScpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJUZXh0ID0gYCR7dGFzay50YXNrfWA7XG4gICAgICAgIG5ld0xpc3RpbmcuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gYWRkIGRhdGVcbiAgICAgICAgY3JlYXRlRGF0ZUNvbnRhaW5lcihuZXdMaXN0aW5nLCB0YXNrKTtcblxuICAgICAgICAvLyBhZGQgZWRpdCBidXR0b25cbiAgICAgICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGVkaXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0Q29udGFpbmVyJyk7XG4gICAgICAgIGNyZWF0ZUVkaXRJY29uKGVkaXRDb250YWluZXIpO1xuICAgICAgICBuZXdMaXN0aW5nLmFwcGVuZENoaWxkKGVkaXRDb250YWluZXIpO1xuXG4gICAgICAgIC8vIGFkZCBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNyZWF0ZURlbGV0ZUNvbnRhaW5lcihuZXdMaXN0aW5nKTtcblxuICAgICAgICAvL2FwcGVuZCB0YXNrIHRvIHRhc2tsaXN0XG4gICAgICAgIHRhc2tsaXN0LmFwcGVuZENoaWxkKG5ld0xpc3RpbmcpO1xuXG5cblxuICAgICAgICAvLyBzZXQgZGlzcGxheSBmaWx0ZXJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpLnRleHRDb250ZW50XG5cbiAgICAgICAgLy8gZGF0ZSBmaWx0ZXJzXG4gICAgICAgIGlmIChmaWx0ZXIgPT09ICdBbGwgdGFza3MnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSAnRHVlIHRvZGF5Jykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09ICdEdWUgdGhpcyB3ZWVrJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyKTtcbiAgICAgICAgfSBcblxuICAgICAgICAvLyBwcm9qZWN0IGZpbHRlclxuICAgICAgICBwcm9qZWN0cy5hbGwuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0ID09PSBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5wcm9qZWN0ICE9PSBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9OyAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG4gICAgLy8gQ3JlYXRlIGFuZCBoaWRlIHRhc2sgY2FyZCBpbiB0YXNrbGlzdCBkaXNwbGF5XG4gICAgY29uc3QgX2NyZWF0ZVRhc2tDYXJkID0gKHRhc2ssIGkpID0+IHtcbiAgICAgICAgLy8gQ1JFQVRFIFRBU0sgQ0FSRFxuICAgICAgICBjb25zdCBuZXdDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxuICAgICAgICBuZXdDYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGFzayBjYXJkJHtpfWApO1xuICAgICAgICBuZXdDYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgaGlkZGVuYCk7XG5cbiAgICAgICAgLy8gY29tcGxldGUgZmlsdGVyIHRvIGFzc2lnbiBjbGFzc1xuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJylcbiAgICAgICAgfSAgICAgICBcblxuICAgICAgICAvLyBhc3NpZ24gcHJpb3JpdHkgY2xhc3NcbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWdoUHJpb3JpdHknKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZWRpdW1Qcmlvcml0eScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvd1ByaW9yaXR5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICBuZXdDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5jb21wbGV0ZSBtZW51T3B0aW9ucycpO1xuICAgICAgICBuZXdDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIGRlbGV0ZSBidXR0b25cbiAgICAgICAgY3JlYXRlRGVsZXRlQ29udGFpbmVyKG5ld0NhcmQpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcbiAgICAgICAgbmV3VGhlYWQuaW5uZXJIVE1MID0gXG4gICAgICAgICAgICBgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nY2hlY2tib3hDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSd0YXNrQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZGF0ZUNvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2VkaXRDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICA8L3RyPmBcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSB0Ym9keVxuICAgICAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0NhcmQnKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gRmlyc3Qgcm93XG4gICAgICAgIGNvbnN0IGNhcmRSb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY2FyZFJvdzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkUm93MScpXG4gICAgICAgIC8vIGFkZCB0YXNrIG5hbWUgaW5wdXRcbiAgICAgICAgY29uc3QgdGFza0lucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGFza0lucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGFza0lucHV0Q29udGFpbmVyYCk7XG4gICAgICAgIHRhc2tJbnB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSd0YXNrQ2FyZFRhc2ske2l9JyBpZD0nbmV3VGFza0lucHV0JyBuYW1lPSduZXdUYXNrSW5wdXQnIHZhbHVlPScke3Rhc2sudGFza30nPjwvaW5wdXQ+YDtcbiAgICAgICAgY2FyZFJvdzEuYXBwZW5kQ2hpbGQodGFza0lucHV0Q29udGFpbmVyKTtcbiAgICAgICAgLy8gYWRkIGRhdGVcbiAgICAgICAgY29uc3QgZWRpdERhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBlZGl0RGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYGVkaXREYXRlQ29udGFpbmVyYCk7XG4gICAgICAgIGNyZWF0ZURhdGVDb250YWluZXIoZWRpdERhdGVDb250YWluZXIsIHRhc2ssIGkpO1xuICAgICAgICBjYXJkUm93MS5hcHBlbmRDaGlsZChlZGl0RGF0ZUNvbnRhaW5lcik7XG4gICAgICAgIC8vIGFkZCBjYWxlbmRhciBlZGl0IGJ1dHRvblxuICAgICAgICBjcmVhdGVDYWxlbmRhckVkaXRJY29uKGNhcmRSb3cxKTtcblxuXG5cbiAgICAgICAgLy8gU2Vjb25kIHJvdyBcbiAgICAgICAgY29uc3QgY2FyZFJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93Mi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3cyJylcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCBjaGVja2JveFxuICAgICAgICAvLyBjcmVhdGVDaGVja2JveENvbnRhaW5lcihjYXJkUm93Mik7XG4gICAgICAgIFxuICAgICAgICAvLyBwcm9qZWN0IGlucHV0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBwcm9qZWN0SW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0SW5wdXRDb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBwcm9qZWN0IGRyb3Bkb3duIFxuICAgICAgICBjb25zdCBwcm9qZWN0RHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgICBwcm9qZWN0RHJvcGRvd24uc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrQ2FyZFByb2plY3Qke2l9YClcbiAgICAgICAgcHJvamVjdERyb3Bkb3duLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFza0lucHV0JylcbiAgICAgICAgcHJvamVjdERyb3Bkb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXdUYXNrSW5wdXQnKVxuICAgICAgICBwcm9qZWN0RHJvcGRvd24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3Rhc2sucHJvamVjdH1gKVxuXG4gICAgICAgIC8vIGNyZWF0ZSBwcm9qZWN0IGRyb3Bkb3duIG9wdGlvbnNcbiAgICAgICAgLy8gYmxhbmsgb3B0aW9uIGZvciBubyBwcm9qZWN0XG4gICAgICAgIGNvbnN0IGJsYW5rUHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIGJsYW5rUHJvamVjdE9wdGlvbi52YWx1ZSA9ICcnXG4gICAgICAgIGJsYW5rUHJvamVjdE9wdGlvbi50ZXh0ID0gJydcbiAgICAgICAgcHJvamVjdERyb3Bkb3duLmFwcGVuZENoaWxkKGJsYW5rUHJvamVjdE9wdGlvbilcbiAgICAgICAgLy8gcmVtYWluaW5nIG9wdGlvbnMgZ2VuZXJhdGVkIGZyb20gcHJvamVjdHMgYXJyYXlcbiAgICAgICAgcHJvamVjdHMuYWxsLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBgJHtwcm9qZWN0fWBcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24udGV4dCA9IGAke3Byb2plY3R9YFxuICAgICAgICAgICAgaWYgKHRhc2sucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvamVjdERyb3Bkb3duLmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RHJvcGRvd24pXG4gICAgICAgIGNhcmRSb3cyLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dENvbnRhaW5lcik7XG4gICAgICAgIFxuXG4gICAgICAgIC8vIHByaW9yaXR5IGlucHV0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5SW5wdXRDb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBwcmlvcml0eSBkcm9wZG93biBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlEcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrQ2FyZFByaW9yaXR5JHtpfWApXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCdpZCcsICduZXdUYXNrSW5wdXQnKVxuICAgICAgICBwcmlvcml0eURyb3Bkb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXdUYXNrSW5wdXQnKVxuICAgICAgICBwcmlvcml0eURyb3Bkb3duLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt0YXNrLnByaW9yaXR5fWApXG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgcHJpb3JpdHkgZHJvcGRvd24gb3B0aW9uc1xuICAgICAgICAvLyBoaWdoIHByaW9yaXR5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByaW9yaXR5SGlnaC52YWx1ZSA9ICdoaWdoJ1xuICAgICAgICBwcmlvcml0eUhpZ2gudGV4dCA9ICdIaWdoJ1xuICAgICAgICAvLyBtZWRpdW0gcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBwcmlvcml0eU1lZGl1bS52YWx1ZSA9ICdtZWRpdW0nXG4gICAgICAgIHByaW9yaXR5TWVkaXVtLnRleHQgPSAnTWVkaXVtJ1xuICAgICAgICAvLyBsb3cgcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBwcmlvcml0eUxvdy52YWx1ZSA9ICdsb3cnXG4gICAgICAgIHByaW9yaXR5TG93LnRleHQgPSAnTG93J1xuICAgICAgICBcbiAgICAgICAgLy8gcHJpb3JpdHkgc2VsZWN0aW9uXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgcHJpb3JpdHlIaWdoLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICBwcmlvcml0eUxvdy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBcbiAgICAgICAgcHJpb3JpdHlNZWRpdW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgLy8gYXBwZW5kIHByaW9yaXR5IGlucHV0IHRvIHJvd1xuICAgICAgICBwcmlvcml0eURyb3Bkb3duLmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaCk7XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlNZWRpdW0pO1xuICAgICAgICBwcmlvcml0eURyb3Bkb3duLmFwcGVuZENoaWxkKHByaW9yaXR5TG93KTsgICAgICAgIFxuICAgICAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5RHJvcGRvd24pOyAgICAgICAgXG4gICAgICAgIGNhcmRSb3cyLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXRDb250YWluZXIpO1xuXG5cblxuICAgICAgICAvLyBUaGlyZCByb3cgXG4gICAgICAgIGNvbnN0IGNhcmRSb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY2FyZFJvdzMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkUm93MycpXG4gICAgICAgIGNyZWF0ZUFkZEJ1dHRvbihjYXJkUm93MywgaSk7XG4gICAgICAgIGNyZWF0ZUNhbmNlbEJ1dHRvbihjYXJkUm93MywgYCR7aX1gKTtcblxuXG5cbiAgICAgICAgLy8gYXBwZW5kIHRhc2sgY2FyZCB0byB0YXNrbGlzdFxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjYXJkUm93MSk7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNhcmRSb3cyKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFJvdzMpO1xuXG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQobmV3VGhlYWQpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblxuICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQpO1xuXG4gICAgICAgIHRhc2tsaXN0LmFwcGVuZENoaWxkKG5ld0NhcmRDb250YWluZXIpO1xuICAgIH1cbiAgICBcblxuICAgIC8vIGFwcGVuZCBhbGwgdGFza3MgdG8gdGFza2xpc3RcbiAgICBsZXQgaT0wXG4gICAgdGFza3MuYWxsLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIF9jcmVhdGVUYXNrTGlzdGluZyh0YXNrLCBpKTtcbiAgICAgICAgX2NyZWF0ZVRhc2tDYXJkKHRhc2ssIGkpO1xuICAgICAgICBpKytcbiAgICB9KTtcbn1cblxuXG5cblxuXG4vLyBDb21wbGV0ZSB0YXNrXG5jb25zdCBfbWFya0NvbXBsZXRlID0gKGUpID0+IHtcbiAgICBjb25zdCB0YXNrSUQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgaWYgKHRhc2tzLmFsbFt0YXNrSURdLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgLy9tYXJrIHRhc2sgaW5jb21wbGV0ZVxuICAgICAgICB0YXNrcy5hbGxbdGFza0lEXS5jb21wbGV0ZSA9ICdmYWxzZSdcbiAgICAgICAgY29uc29sZS5sb2codGFza3MuYWxsW3Rhc2tJRF0pXG4gICAgfSBlbHNlIGlmICh0YXNrcy5hbGxbdGFza0lEXS5jb21wbGV0ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAvL21hcmsgdGFzayBjb21wbGV0ZVxuICAgICAgICB0YXNrcy5hbGxbdGFza0lEXS5jb21wbGV0ZSA9ICd0cnVlJ1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcy5hbGxbdGFza0lEXSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBzdHJhbmdlJylcbiAgICB9XG4gICAgZGlzcGxheVRhc2tzKCk7XG59XG5cbi8vIEluY29tcGxldGUgdGFza1xuY29uc3QgX21hcmtJbmNvbXBsZXRlID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdpZCcsICcnKTtcbiAgICBsZXQgY2hlY2tib3hDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgZS50YXJnZXQucmVtb3ZlKCk7XG4gICAgY3JlYXRlQ2hlY2tib3hJY29uKGNoZWNrYm94Q29udGFpbmVyKVxufVxuXG4vLyBTaG93IHRhc2sgY2FyZFxuY29uc3QgX3Nob3dUYXNrQ2FyZCA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza0lEID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAvLyBzaG93IHRhc2sgY2FyZFxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmQke3Rhc2tJRH1gKTtcbiAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza0lEfWApO1xuICAgIC8vaGlkZSB0YXNrIGxpc3RpbmdcbiAgICBjb25zdCB0YXNrTGlzdGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saXN0aW5nJHt0YXNrSUR9YCk7XG4gICAgdGFza0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKTtcbn1cblxuY29uc3QgX3N1Ym1pdFRhc2tDYXJkID0gKGUpID0+IHtcbiAgICBjb25zdCB0YXNrSUQgPSAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpKSBcblxuICAgIC8vIEdldCBpbnB1dCB2YWx1ZXNcbiAgICBjb25zdCB1cGRhdGVkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrQ2FyZFRhc2ske3Rhc2tJRH1gKS52YWx1ZVxuICAgIGNvbnN0IHVwZGF0ZWREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tDYXJkRGF0ZSR7dGFza0lEfWApLnZhbHVlXG4gICAgY29uc3QgdXBkYXRlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza0NhcmRQcm9qZWN0JHt0YXNrSUR9YCkudmFsdWVcbiAgICBjb25zdCB1cGRhdGVkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza0NhcmRQcmlvcml0eSR7dGFza0lEfWApLnZhbHVlXG5cbiAgICAvLyBBcHBseSBpbnB1dCB2YWx1ZXMgdG8gdGFzayBvYmplY3RcbiAgICB0YXNrcy5hbGxbdGFza0lEXS50YXNrID0gdXBkYXRlZFRhc2tcbiAgICB0YXNrcy5hbGxbdGFza0lEXS5kYXRlID0gdXBkYXRlZERhdGVcbiAgICB0YXNrcy5hbGxbdGFza0lEXS5wcm9qZWN0ID0gdXBkYXRlZFByb2plY3RcbiAgICB0YXNrcy5hbGxbdGFza0lEXS5wcmlvcml0eSA9IHVwZGF0ZWRQcmlvcml0eVxuXG4gICAgLy8gUmVmcmVzaCB0YXNrbGlzdFxuICAgIGRpc3BsYXlUYXNrcygpO1xufVxuXG4vLyBIaWRlIHRhc2sgY2FyZFxuY29uc3QgX2hpZGVUYXNrQ2FyZCA9IChpKSA9PiB7XG4gICAgLy8gc2hvdyB0YXNrIGxpc3RpbmdcbiAgICBjb25zdCB0YXNrTGlzdGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saXN0aW5nJHtpfWApO1xuICAgIHRhc2tMaXN0aW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgIC8vIGhpZGUgdGFzayBjYXJkXG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZCR7aX1gKTtcbiAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xufVxuXG4vLyBEZWxldGUgdGFza1xuY29uc3QgX2RlbGV0ZVRhc2sgPSAoZSkgPT4ge1xuICAgIGxldCBkb29tZWRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgdGFza3MuYWxsLnNwbGljZShkb29tZWRJbmRleCwgMSk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG59XG5cblxuXG5cblxuLy8gVEFTSyBESVNQTEFZIE9QVElPTlNcblxuY29uc3Qgc2V0Q29udGVudFRpdGxlID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpICE9PSAnZGVsZXRlSXRlbScpIHtcbiAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpXG4gICAgICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LmlubmVyVGV4dFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm5cbiAgICB9XG59XG5cblxuXG5cblxuZXhwb3J0IHtcbiAgICAvLyBVc2VkIGluIGluZGV4ICYgY29yZVxuXG5cbiAgICAvLyBVc2VkIG9ubHkgaW4gY29yZVxuICAgIGNyZWF0ZUZvcm0sXG4gICAgY3JlYXRlQ2hlY2tsaXN0SWNvbixcbiAgICBjcmVhdGVXZWVrSWNvbixcbiAgICBjcmVhdGVUb2RheUljb24sXG4gICAgY3JlYXRlQWRkaXRpb25JY29uLFxuICAgIHNldENvbnRlbnRUaXRsZSxcblxuICAgIC8vIFVzZWQgb25seSBpbiBpbmRleFxuICAgIGNyZWF0ZUNoZWNrYm94SWNvbixcbiAgICBjcmVhdGVFZGl0SWNvbixcbiAgICBjcmVhdGVDYWxlbmRhckVkaXRJY29uLFxuICAgIGNyZWF0ZURlbGV0ZUljb24sXG4gICAgY3JlYXRlQWRkQnV0dG9uLFxuICAgIGNyZWF0ZUNhbmNlbEJ1dHRvbixcblxuICAgIGRpc3BsYXlQcm9qZWN0cyxcbiAgICBkaXNwbGF5VGFza3MsXG59IiwiY2xhc3MgdGFza3Mge1xuICAgIHN0YXRpYyBhbGwgPSBbXTtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IgKG5ld1Rhc2spIHtcbiAgICAgICAgdGhpcy50YXNrID0gbmV3VGFza1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZVxuICAgIH1cblxuXG5cbn07XG5cblxuXG5jbGFzcyBwcm9qZWN0cyB7XG4gICAgc3RhdGljIGFsbCA9IFtdO1xuXG5cblxuICAgIGNvbnN0cnVjdG9yIChwcm9qZWN0TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9qZWN0TmFtZVxuICAgIH1cblxuXG5cbn1cblxuXG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdHMsXG4gICAgdGFza3MsXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90YXNrcyc7XG5cblxuLy8gUGFnZSBpbml0aWFsaXphdGlvblxuLy8gaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4vY29yZSc7XG5pbXBvcnQgaW5pdGlhbGl6ZSBmcm9tICcuL2NvcmUnXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuaW5pdGlhbGl6ZSgpO1xuXG5cblxuLy8gR3JhYiBET00gZWxlbWVudHNcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdEJ0bicpO1xuY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkUHJvamVjdEZvcm0nKVxuY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Byb2plY3RJbnB1dCcpO1xuY29uc3QgbmV3UHJvakVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Byb2pFcnJvckNvbnRhaW5lcicpO1xuXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tCdG4nKTtcbmNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tGb3JtJyk7XG5jb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3VGFza0lucHV0Jyk7XG5jb25zdCBuZXdUYXNrRXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3VGFza0Vycm9yQ29udGFpbmVyJyk7XG5cblxuXG4vLyBET00gbW9kaWZpY2F0aW9uIGZ1bmN0aW9uc1xuXG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdHMgfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IGRpc3BsYXlUYXNrcyB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuXG5cblxuXG5cbi8vIFBST0pFQ1QgRk9STVxuLy8gU2hvdy9oaWRlIG5ldyBwcm9qZWN0IGZvcm1cbmNvbnN0IF9zaG93QWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgaWYgKGFkZFRhc2tGb3JtLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ3Nob3dCbG9jaycpIHtcbiAgICAgICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3dGbGV4JylcbiAgICAgICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgIH1cbiAgICBhZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3dCbG9jaycpXG59XG5cblxuLy8gVmVyaWZ5IG5ldyBwcm9qZWN0IGZvcm0gc3VibWlzc2lvblxuY29uc3QgX3N1Ym1pdE5ld1Byb2plY3RGb3JtID0gKGUpID0+IHtcbiAgICAvLyBwcmV2ZW50IGFjdHVhbCBmb3JtIHN1Ym1pc3Npb25cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBzdWJtaXRQcm9qID0gKG5ld1Byb2opID0+IHtcbiAgICAgICAgcHJvamVjdHMuYWxsLnB1c2gobmV3UHJvaik7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cygpO1xuICAgICAgICAvLyBzbyB5b3UgY2FuIGFkZCB0YXNrcyB0byBuZXcgcHJvamVjdDpcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IF9oaWRlQWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93RmxleCcpXG4gICAgICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICAgICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICAgIFxuICAgIC8vIHZlcmlmeSBvciBjYW5jZWwgc3VibWlzc2lvblxuICAgIGlmIChlLnN1Ym1pdHRlci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRCdG4nICYmIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgLy8gc2hvdyBwcm9qZWN0IG5hbWUgZXJyb3JcbiAgICAgICAgbmV3UHJvakVycm9yQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd0Jsb2NrJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGUuc3VibWl0dGVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZEJ0bicpIHtcbiAgICAgICAgLy8gc3VibWl0IG5ldyBwcm9qZWN0XG4gICAgICAgIGNvbnN0IG5ld1Byb2ogPSBuZXdQcm9qZWN0SW5wdXQudmFsdWVcbiAgICAgICAgc3VibWl0UHJvaihuZXdQcm9qKTtcbiAgICB9XG4gICAgX2hpZGVBZGRQcm9qZWN0Rm9ybSgpO1xuICAgIG5ld1Byb2pFcnJvckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xufVxuXG5cblxuXG5cbi8vIFRBU0sgRk9STVxuLy8gU2hvdy9oaWRlIG5ldyB0YXNrIGZvcm1cbmNvbnN0IF9zaG93QWRkVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgaWYgKGFkZFByb2plY3RGb3JtLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ3Nob3dCbG9jaycpIHtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3dGbGV4JylcbiAgICAgICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKSAgICBcbiAgICB9XG4gICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpXG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93QmxvY2snKVxufVxuXG5cbi8vIFZlcmlmeSBuZXcgdGFzayBmb3JtIHN1Ym1pc3Npb25cbmNvbnN0IF9zdWJtaXROZXdUYXNrRm9ybSA9IChlKSA9PiB7XG4gICAgLy8gcHJldmVudCBhY3R1YWwgZm9ybSBzdWJtaXNzaW9uXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgX3N1Ym1pdFRhc2sgPSAobmV3VGFzaykgPT4ge1xuICAgICAgICB0YXNrcy5hbGwucHVzaChuZXdUYXNrKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgX2hpZGVBZGRUYXNrRm9ybSA9ICgpID0+IHtcbiAgICAgICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3dGbGV4JylcbiAgICAgICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgICAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gICAgXG4gICAgLy8gdmVyaWZ5IG9yIGNhbmNlbCBzdWJtaXNzaW9uXG4gICAgaWYgKGUuc3VibWl0dGVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZEJ0bicgJiYgbmV3VGFza0lucHV0LnZhbHVlID09PSAnJykge1xuICAgICAgICAvLyBzaG93IFRhc2sgbmFtZSBlcnJvclxuICAgICAgICBuZXdUYXNrRXJyb3JDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdzaG93QmxvY2snKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoZS5zdWJtaXR0ZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkQnRuJykge1xuICAgICAgICAvLyBhc3NpZ24gcHJvamVjdFxuICAgICAgICB2YXIgbmV3VGFza1Byb2plY3QgPSAnJ1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpLnRleHRDb250ZW50ICE9PSAnQWxsIHRhc2tzJyB8fFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJykudGV4dENvbnRlbnQgIT09ICdEdWUgdG9kYXknIHx8XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VGl0bGUnKS50ZXh0Q29udGVudCAhPT0gJ0R1ZSB0aGlzIHdlZWsnKSB7XG4gICAgICAgICAgICBuZXdUYXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VGl0bGUnKS50ZXh0Q29udGVudFxuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgLy8gc3VibWl0IG5ldyBUYXNrXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICAgICAgICB0YXNrOiBuZXdUYXNrSW5wdXQudmFsdWUsXG4gICAgICAgICAgICBkYXRlOiBgYCxcbiAgICAgICAgICAgIHByb2plY3Q6IGAke25ld1Rhc2tQcm9qZWN0fWAsXG4gICAgICAgICAgICBwcmlvcml0eTogJ21lZGl1bScsXG4gICAgICAgICAgICBjb21wbGV0ZTogJ2ZhbHNlJyxcbiAgICAgICAgfVxuICAgICAgICBfc3VibWl0VGFzayhuZXdUYXNrKTtcbiAgICB9XG4gICAgX2hpZGVBZGRUYXNrRm9ybSgpO1xuICAgIG5ld1Rhc2tFcnJvckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xufVxuXG5cblxuXG5cbi8vIEV2ZW50IGxpc3RlbmVyc1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zaG93QWRkUHJvamVjdEZvcm0pO1xuYWRkUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IF9zdWJtaXROZXdQcm9qZWN0Rm9ybShlKSk7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Nob3dBZGRUYXNrRm9ybSk7XG5hZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gX3N1Ym1pdE5ld1Rhc2tGb3JtKGUpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=