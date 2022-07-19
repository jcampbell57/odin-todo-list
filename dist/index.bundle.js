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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/calendar-edit.svg */ "./src/assets/calendar-edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: lightsteelblue;\n    --secondary-color: steelblue;\n    --menu-color: rgb(145, 189, 224);\n    --accent-color: whitesmoke;\n    --font-color: rgb(20, 20, 20);\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    background-color: var(--background-color);\n    display: grid;\n    grid-template-columns: 250px calc(100vw - 250px);\n    grid-template-rows: 110px calc(100vh - 110px - 62px) 62px;\n    margin: 0;\n}\n\n\n\n\n\n/* Scrollbar styling */\n\n::-webkit-scrollbar {\n    width: 12px;\n}\n\n::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2); \n    box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n    -webkit-border-radius: 6px;\n    border-radius: 6px;\n}\n\n::-webkit-scrollbar-track:hover {\n    border: 1px solid var(--secondary-color);\n}\n\n::-webkit-scrollbar-thumb {\n    background: var(--menu-color); \n    -webkit-border-radius: 6px;\n    border-radius: 6px;\n    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.4); \n    box-shadow: inset 0 0 3px rgba(0,0,0,0.4); \n}\n\n::-webkit-scrollbar-thumb:hover {\n    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.6); \n    box-shadow: inset 0 0 3px rgba(0,0,0,0.6); \n}\n\n::-webkit-scrollbar-thumb:active {\n    border: 1px solid var(--secondary-color);\n}\n\n\n\n\n\n/* Header styling */\n\n.logo {\n    max-height: 90%;\n    margin-right: 8px;\n    /* whitesmoke color */\n    filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(201deg) brightness(107%) contrast(92%);\n}\n\nheader {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.8);\n    z-index: 1;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n\n\n\n\n/* Dropdown menu styling */\n\n.optionsIconContainer {\n    height: 100%;\n    margin-left: auto;\n    display: flex;\n    flex-direction: column-reverse;\n    position: relative;\n    float: right;\n}\n\n.optionsIcon {\n    padding: 4px;\n    border-radius: calc(4px + 0.6rem);\n    /* whitesmoke color */\n    filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(201deg) brightness(107%) contrast(92%);\n}\n\n.optionsIcon:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n    filter: none;\n}\n\n.optionsIcon:active,\n.optionsIcon.selected {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n    filter: none;\n}\n\n.dropdownContainer {\n    background-color: var(--menu-color);\n    color: var(--font-color);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    border-radius: 8px;   \n    position: absolute;\n    right: 0;\n    top: 100%;\n    width: max-content;\n    box-sizing: border-box;\n    z-index: 2;\n}\n\n.dropdownItem {\n    display: block;\n    /* margin: 10px 1rem; */\n    padding: 12px 1rem;\n    border-radius: 8px;   \n}\n\n.dropdownItem:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    cursor: pointer;\n}\n\n.dropdownItem:active {\n    color: darkorange;\n}\n\n\n\n\n\n/* Menu styling */\n\n.menu {\n    background-color: var(--menu-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n}\n\n.icon {\n    height: 1.2rem;\n}\n\n.menuOptions {\n    list-style: none;\n    padding: 0;\n}\n\n.menuOptions>li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.projectsHeader {\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n\n.menuOptions li,\n.projectsHeader,\n.contentTitle,\n.addTaskBtn,\n.addProjectForm,\ntbody>tr {\n    margin: 10px 1rem;\n    padding: 8px;\n    border-radius: 8px;    \n}\n\ntbody>tr.task:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n}\n\n.menuOptions li:hover,\n.addTaskBtn:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.menuOptions li:active,\n.addTaskBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.selected {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.1);\n}\n\n\n\n\n/* Form styling */\n\n#showBlock {\n    display: block;\n}\n\n#showFlex {\n    display: flex;\n}\n\n#hidden {\n    display: none;\n}\n\n.addProjectForm,\n.addTaskForm {\n    padding: 0;\n}\n\n.addTaskForm {\n    margin: 10px;\n}\n\n.formRow {\n    display: flex;\n    justify-content:space-around;\n    gap: 8px;\n\n}\n\n#formButtons {\n    margin-top: 8px;\n}\n\n#newTaskInput,\n.taskCardInput,\n#newProjectInput {\n    padding: 6px;\n    /* with padding compensation */\n    width: calc(100% - 12px);\n    font-size: 1.2rem;\n    margin: 6px;\n    border: none;\n    border-radius: 8px;\n    box-sizing: border-box;\n}\n\n.addBtn,\n.cancelBtn {\n    padding: 8px;\n    width: calc(100% - 16px);\n    border-radius: 8px;    \n    font-size: 1rem;\n}\n\n.addBtn {\n    background-color: lightgreen;\n    border: 2px solid hsl(120, 73%, 55%);\n}\n\n.cancelBtn {\n    background-color: lightpink;\n    border: 2px solid hsl(351, 100%, 70%);\n\n}\n\n.addBtn:hover,\n.cancelBtn:hover {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.addBtn:active,\n.cancelBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.newProjErrorContainer,\n.newTaskErrorContainer {\n    margin-top: 8px;\n    text-align: center;\n    color: darkred;\n}\n\n\n\n\n\n/* Content styling */\n\n.content {\n    background-color: var(--background-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n    max-width: 1000px;\n    box-sizing: border-box;\n    overflow: auto;\n    /* padding: 20px; */\n}\n\n.taskPastDue {\n    color: darkred;\n}\n\n\n\n/* Table styling */\n\ntable,\ntd > form {\n    /* border: 1px solid red; */\n    width: 100%;\n    box-sizing: border-box;\n}\n\ntbody>tr,\nlegend > div {\n    box-sizing: border-box;\n    /* width: 100%; */\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    /* border: 2px solid blue; */\n}\n\n.highPriority {\n    border-left: 5px solid red;\n}\n\n.mediumPriority {\n    border-left: 5px solid darkorange;\n}\n\n.lowPriority {\n    border-left: 5px solid green;\n}\n\n.complete {\n    border-left: 5px solid var(--font-color);\n}\n\n.hidden {\n    display: none;\n}\n\ntd,\nlegend > div {\n    /* border: 2px solid pink; */\n    display: flex;\n    /* align-items: center; */\n    /* justify-content: center; */\n}\n\nimg.icon:hover,\n.dateContainer:hover {\n    cursor: pointer;\n}\n\n.dateContainer,\nimg.deleteItem {\n    margin-left: auto;\n}\n\n.checkboxContainer:active {\n    filter: invert(18%) sepia(76%) saturate(2312%) hue-rotate(109deg) brightness(100%) contrast(107%);\n}\n\n.deleteItem:hover {\n    filter: invert(7%) sepia(51%) saturate(5951%) hue-rotate(350deg) brightness(140%) contrast(136%);\n}\n\n.editContainer:hover {\n    filter: invert(60%) sepia(34%) saturate(3621%) hue-rotate(359deg) brightness(100%) contrast(109%);\n}\n\n#complete {\n    text-decoration: line-through;\n}\n\n\n\n/* Edit card styling */\n\n.task>td {\n    height: min-content;\n    box-sizing: border-box;\n\n}\n\n\nfieldset {\n    display: flex;\n    flex-direction: column;\n    /* border-radius: 6px; */\n    box-sizing: border-box;\n    padding: 6px;\n    width: 100%;\n    border: none;\n}\n\nfieldset > legend {\n    /* box-sizing: border-box; */\n    /* width: 100%; */\n    display: flex;\n    /* align-items: center; */\n    flex-direction: column;\n    gap: none;\n    width: auto;\n    height: auto;\n}\n\n.cardRow2 > div {\n    width: 100%;\n    box-sizing: border-box;\n}\n\nlegend>.cardRow {\n    width: 100%;\n    box-sizing: border-box;\n    margin: 0 1rem;\n    padding: 6px;\n}\n\n/* date input */\ninput[type='date'] {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n}\n\n::-webkit-calendar-picker-indicator {\n    cursor: pointer;    \n    /* new edit calendar icon */\n    display: block;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    height: 1.2rem;\n}\n\n/* dark orange on hover */\n::-webkit-calendar-picker-indicator:hover {\n    filter: invert(58%) sepia(26%) saturate(5470%) hue-rotate(2deg) brightness(105%) contrast(103%);    \n}\n\n\n\n/* Footer styling */\n\nfooter {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: auto;\n    gap: 10px;\n}\n\n.github {\n    height: 24px;\n    transition: transform 0.3s ease-in-out;\n}\n\n.github:hover {\n    transform: rotate(360deg) scale(1.2);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --background-color: lightsteelblue;\n    --secondary-color: steelblue;\n    --menu-color: rgb(145, 189, 224);\n    --accent-color: whitesmoke;\n    --font-color: rgb(20, 20, 20);\n}\n\nbody {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n    background-color: var(--background-color);\n    display: grid;\n    grid-template-columns: 250px calc(100vw - 250px);\n    grid-template-rows: 110px calc(100vh - 110px - 62px) 62px;\n    margin: 0;\n}\n\n\n\n\n\n/* Scrollbar styling */\n\n::-webkit-scrollbar {\n    width: 12px;\n}\n\n::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2); \n    box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\n    -webkit-border-radius: 6px;\n    border-radius: 6px;\n}\n\n::-webkit-scrollbar-track:hover {\n    border: 1px solid var(--secondary-color);\n}\n\n::-webkit-scrollbar-thumb {\n    background: var(--menu-color); \n    -webkit-border-radius: 6px;\n    border-radius: 6px;\n    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.4); \n    box-shadow: inset 0 0 3px rgba(0,0,0,0.4); \n}\n\n::-webkit-scrollbar-thumb:hover {\n    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.6); \n    box-shadow: inset 0 0 3px rgba(0,0,0,0.6); \n}\n\n::-webkit-scrollbar-thumb:active {\n    border: 1px solid var(--secondary-color);\n}\n\n\n\n\n\n/* Header styling */\n\n.logo {\n    max-height: 90%;\n    margin-right: 8px;\n    /* whitesmoke color */\n    filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(201deg) brightness(107%) contrast(92%);\n}\n\nheader {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    box-shadow: 1px 1px 6px rgb(0, 0, 0, 0.8);\n    z-index: 1;\n    padding: 10px;\n    display: flex;\n    align-items: center;\n}\n\n\n\n\n\n/* Dropdown menu styling */\n\n.optionsIconContainer {\n    height: 100%;\n    margin-left: auto;\n    display: flex;\n    flex-direction: column-reverse;\n    position: relative;\n    float: right;\n}\n\n.optionsIcon {\n    padding: 4px;\n    border-radius: calc(4px + 0.6rem);\n    /* whitesmoke color */\n    filter: invert(100%) sepia(0%) saturate(7480%) hue-rotate(201deg) brightness(107%) contrast(92%);\n}\n\n.optionsIcon:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n    filter: none;\n}\n\n.optionsIcon:active,\n.optionsIcon.selected {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n    filter: none;\n}\n\n.dropdownContainer {\n    background-color: var(--menu-color);\n    color: var(--font-color);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    border-radius: 8px;   \n    position: absolute;\n    right: 0;\n    top: 100%;\n    width: max-content;\n    box-sizing: border-box;\n    z-index: 2;\n}\n\n.dropdownItem {\n    display: block;\n    /* margin: 10px 1rem; */\n    padding: 12px 1rem;\n    border-radius: 8px;   \n}\n\n.dropdownItem:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    cursor: pointer;\n}\n\n.dropdownItem:active {\n    color: darkorange;\n}\n\n\n\n\n\n/* Menu styling */\n\n.menu {\n    background-color: var(--menu-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n}\n\n.icon {\n    height: 1.2rem;\n}\n\n.menuOptions {\n    list-style: none;\n    padding: 0;\n}\n\n.menuOptions>li {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.projectsHeader {\n    font-weight: 700;\n    font-size: 1.3rem;\n}\n\n.menuOptions li,\n.projectsHeader,\n.contentTitle,\n.addTaskBtn,\n.addProjectForm,\ntbody>tr {\n    margin: 10px 1rem;\n    padding: 8px;\n    border-radius: 8px;    \n}\n\ntbody>tr.task:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n}\n\n.menuOptions li:hover,\n.addTaskBtn:hover {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.menuOptions li:active,\n.addTaskBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.selected {\n    background-color: rgb(245, 245, 245, 0.3);\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.1);\n}\n\n\n\n\n/* Form styling */\n\n#showBlock {\n    display: block;\n}\n\n#showFlex {\n    display: flex;\n}\n\n#hidden {\n    display: none;\n}\n\n.addProjectForm,\n.addTaskForm {\n    padding: 0;\n}\n\n.addTaskForm {\n    margin: 10px;\n}\n\n.formRow {\n    display: flex;\n    justify-content:space-around;\n    gap: 8px;\n\n}\n\n#formButtons {\n    margin-top: 8px;\n}\n\n#newTaskInput,\n.taskCardInput,\n#newProjectInput {\n    padding: 6px;\n    /* with padding compensation */\n    width: calc(100% - 12px);\n    font-size: 1.2rem;\n    margin: 6px;\n    border: none;\n    border-radius: 8px;\n    box-sizing: border-box;\n}\n\n.addBtn,\n.cancelBtn {\n    padding: 8px;\n    width: calc(100% - 16px);\n    border-radius: 8px;    \n    font-size: 1rem;\n}\n\n.addBtn {\n    background-color: lightgreen;\n    border: 2px solid hsl(120, 73%, 55%);\n}\n\n.cancelBtn {\n    background-color: lightpink;\n    border: 2px solid hsl(351, 100%, 70%);\n\n}\n\n.addBtn:hover,\n.cancelBtn:hover {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.2);\n    cursor: pointer;\n}\n\n.addBtn:active,\n.cancelBtn:active {\n    box-shadow: 2px 2px 6px rgb(0, 0, 0, 0.4);\n}\n\n.newProjErrorContainer,\n.newTaskErrorContainer {\n    margin-top: 8px;\n    text-align: center;\n    color: darkred;\n}\n\n\n\n\n\n/* Content styling */\n\n.content {\n    background-color: var(--background-color);\n    color: var(--font-color);\n    font-size: 1.2rem;\n    max-width: 1000px;\n    box-sizing: border-box;\n    overflow: auto;\n    /* padding: 20px; */\n}\n\n.taskPastDue {\n    color: darkred;\n}\n\n\n\n/* Table styling */\n\ntable,\ntd > form {\n    /* border: 1px solid red; */\n    width: 100%;\n    box-sizing: border-box;\n}\n\ntbody>tr,\nlegend > div {\n    box-sizing: border-box;\n    /* width: 100%; */\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    /* border: 2px solid blue; */\n}\n\n.highPriority {\n    border-left: 5px solid red;\n}\n\n.mediumPriority {\n    border-left: 5px solid darkorange;\n}\n\n.lowPriority {\n    border-left: 5px solid green;\n}\n\n.complete {\n    border-left: 5px solid var(--font-color);\n}\n\n.hidden {\n    display: none;\n}\n\ntd,\nlegend > div {\n    /* border: 2px solid pink; */\n    display: flex;\n    /* align-items: center; */\n    /* justify-content: center; */\n}\n\nimg.icon:hover,\n.dateContainer:hover {\n    cursor: pointer;\n}\n\n.dateContainer,\nimg.deleteItem {\n    margin-left: auto;\n}\n\n.checkboxContainer:active {\n    filter: invert(18%) sepia(76%) saturate(2312%) hue-rotate(109deg) brightness(100%) contrast(107%);\n}\n\n.deleteItem:hover {\n    filter: invert(7%) sepia(51%) saturate(5951%) hue-rotate(350deg) brightness(140%) contrast(136%);\n}\n\n.editContainer:hover {\n    filter: invert(60%) sepia(34%) saturate(3621%) hue-rotate(359deg) brightness(100%) contrast(109%);\n}\n\n#complete {\n    text-decoration: line-through;\n}\n\n\n\n/* Edit card styling */\n\n.task>td {\n    height: min-content;\n    box-sizing: border-box;\n\n}\n\n\nfieldset {\n    display: flex;\n    flex-direction: column;\n    /* border-radius: 6px; */\n    box-sizing: border-box;\n    padding: 6px;\n    width: 100%;\n    border: none;\n}\n\nfieldset > legend {\n    /* box-sizing: border-box; */\n    /* width: 100%; */\n    display: flex;\n    /* align-items: center; */\n    flex-direction: column;\n    gap: none;\n    width: auto;\n    height: auto;\n}\n\n.cardRow2 > div {\n    width: 100%;\n    box-sizing: border-box;\n}\n\nlegend>.cardRow {\n    width: 100%;\n    box-sizing: border-box;\n    margin: 0 1rem;\n    padding: 6px;\n}\n\n/* date input */\ninput[type='date'] {\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n}\n\n::-webkit-calendar-picker-indicator {\n    cursor: pointer;    \n    /* new edit calendar icon */\n    display: block;\n    background: url('./assets/calendar-edit.svg');\n    height: 1.2rem;\n}\n\n/* dark orange on hover */\n::-webkit-calendar-picker-indicator:hover {\n    filter: invert(58%) sepia(26%) saturate(5470%) hue-rotate(2deg) brightness(105%) contrast(103%);    \n}\n\n\n\n/* Footer styling */\n\nfooter {\n    grid-column: 1 / -1;\n    background-color: var(--secondary-color);\n    color: var(--accent-color);\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: auto;\n    gap: 10px;\n}\n\n.github {\n    height: 24px;\n    transition: transform 0.3s ease-in-out;\n}\n\n.github:hover {\n    transform: rotate(360deg) scale(1.2);\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/add/index.js":
/*!************************************************!*\
  !*** ./node_modules/date-fns/esm/add/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ add)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addMonths/index.js */ "./node_modules/date-fns/esm/addMonths/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");






/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns {Date} the new date with the seconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(dirtyDate, duration) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  if (!duration || typeof duration !== 'object') return new Date(NaN);
  var years = duration.years ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.years) : 0;
  var months = duration.months ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.months) : 0;
  var weeks = duration.weeks ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.weeks) : 0;
  var days = duration.days ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.days) : 0;
  var hours = duration.hours ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.hours) : 0;
  var minutes = duration.minutes ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.minutes) : 0;
  var seconds = duration.seconds ? (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(duration.seconds) : 0; // Add years and months

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var dateWithMonths = months || years ? (0,_addMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, months + years * 12) : date; // Add weeks and days

  var dateWithDays = days || weeks ? (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dateWithMonths, days + weeks * 7) : dateWithMonths; // Add days, hours, minutes and seconds

  var minutesToAdd = minutes + hours * 60;
  var secondsToAdd = seconds + minutesToAdd * 60;
  var msToAdd = secondsToAdd * 1000;
  var finalDate = new Date(dateWithDays.getTime() + msToAdd);
  return finalDate;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMonths/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/addMonths/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMonths)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the months added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */

function addMonths(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.

  var endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  var daysInMonth = endOfDesiredMonth.getDate();

  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isWithinInterval/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isWithinInterval/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isWithinInterval)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isWithinRange` to `isWithinInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   isWithinRange(
 *     new Date(2014, 0, 3),
 *     new Date(2014, 0, 1), new Date(2014, 0, 7)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   isWithinInterval(
 *     new Date(2014, 0, 3),
 *     { start: new Date(2014, 0, 1), end: new Date(2014, 0, 7) }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */
function isWithinInterval(dirtyDate, interval) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var time = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var startTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.start).getTime();
  var endTime = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

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
/* harmony import */ var _assets_dots_vertical_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/dots-vertical.svg */ "./src/assets/dots-vertical.svg");
/* harmony import */ var _assets_GitHub_light_32px_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/GitHub-light-32px.png */ "./src/assets/GitHub-light-32px.png");
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactive */ "./src/interactive.js");

const body = document.querySelector('body');








// Initialization functions
const _createHeader = () => {
    const header = document.createElement('header')
    
    // display logo
    const logo = document.createElement('img');
    logo.src = _assets_check_decagram_outline_svg__WEBPACK_IMPORTED_MODULE_0__;
    logo.target = '_blank';
    logo.setAttribute('class', 'logo');
    header.appendChild(logo);
    
    // display title
    const title = document.createElement('h1');
    title.textContent = 'Things To Do';
    header.appendChild(title);

    // DROPDOWN MENU
    // create options icon container and display icon
    const optionsIconContainer = document.createElement('div');
    optionsIconContainer.setAttribute('class', 'optionsIconContainer');
    const optionsIcon = document.createElement('img');
    optionsIcon.setAttribute('class', 'icon optionsIcon');
    //show dropdown listener
    optionsIcon.addEventListener('click', (e) => {
        optionsIcon.classList.toggle('selected')
        document.querySelector('.dropdownContainer').classList.toggle('hidden')
    });
    optionsIcon.src = _assets_dots_vertical_svg__WEBPACK_IMPORTED_MODULE_1__;
    // close dropdown if the user clicks outside of it
    window.onclick = function(e) {
        if (!e.target.matches('.optionsIcon')) {
            const dropdownContainer = document.querySelector('.dropdownContainer')
            if (dropdownContainer.classList.contains('hidden') === false) {
                dropdownContainer.classList.add('hidden')
            }
            const optionsIcon = document.querySelector('.optionsIcon')
            if (optionsIcon.classList.contains('selected')) {
                optionsIcon.classList.toggle('selected')
            }
        }
    } 

    // create dropdown container 
    const dropdownContainer = document.createElement('div');
    dropdownContainer.setAttribute('class', 'dropdownContainer hidden');

    // create dropdown options
    // set completed filter
    const completedToggle = document.createElement('span');
    completedToggle.setAttribute('class', 'dropdownItem completedTasksToggle');    
    if (localStorage.getItem('completedFilter') === 'false') {
        completedToggle.innerText = 'Hide completed tasks'
    } else {
        completedToggle.innerText = 'Show completed tasks'
    }
    completedToggle.addEventListener('click', () => {
        if (completedToggle.innerText === 'Show completed tasks') {
            completedToggle.innerText = 'Hide completed tasks'
            localStorage.setItem('completedFilter', false)
            ;(0,_interactive__WEBPACK_IMPORTED_MODULE_3__.displayTasks)();
        } else {
            completedToggle.innerText = 'Show completed tasks'
            localStorage.setItem('completedFilter', true)
            ;(0,_interactive__WEBPACK_IMPORTED_MODULE_3__.displayTasks)();
        }
    })

    // append
    dropdownContainer.appendChild(completedToggle)
    optionsIconContainer.appendChild(optionsIcon)
    optionsIconContainer.appendChild(dropdownContainer)
    header.appendChild(optionsIconContainer)
    
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
        (0,_interactive__WEBPACK_IMPORTED_MODULE_3__.setTaskFilter)(allTasks, e)
        allTasks.classList.add('selected')
    })
    ;(0,_interactive__WEBPACK_IMPORTED_MODULE_3__.createChecklistIcon)(allTasks);
    const allTasksText = document.createElement('span');
    allTasksText.textContent = 'All tasks';
    allTasks.appendChild(allTasksText)
    menuOptions.appendChild(allTasks);

    const dueToday = document.createElement('li');
    dueToday.setAttribute('class', 'dueToday');
    dueToday.addEventListener('click', (e) => {
        (0,_interactive__WEBPACK_IMPORTED_MODULE_3__.setTaskFilter)(dueToday, e)
        dueToday.classList.add('selected')
        ;(0,_interactive__WEBPACK_IMPORTED_MODULE_3__.displayTasks)();
    })
    ;(0,_interactive__WEBPACK_IMPORTED_MODULE_3__.createTodayIcon)(dueToday);
    const dueTodayText = document.createElement('span');
    dueTodayText.innerText = 'Due today';
    dueToday.appendChild(dueTodayText);
    menuOptions.appendChild(dueToday);

    const dueWeek = document.createElement('li');
    dueWeek.setAttribute('class', 'dueWeek');
    dueWeek.addEventListener('click', (e) => {
        (0,_interactive__WEBPACK_IMPORTED_MODULE_3__.setTaskFilter)(dueWeek, e)
        dueWeek.classList.add('selected')
        ;(0,_interactive__WEBPACK_IMPORTED_MODULE_3__.displayTasks)();
    })
    ;(0,_interactive__WEBPACK_IMPORTED_MODULE_3__.createWeekIcon)(dueWeek);
    const dueWeekText = document.createElement('span');
    dueWeekText.innerText = 'Due this week';
    dueWeek.appendChild(dueWeekText);
    menuOptions.appendChild(dueWeek);

    const pastDue = document.createElement('li');
    pastDue.setAttribute('class', 'pastDue');
    pastDue.addEventListener('click', (e) => {
        (0,_interactive__WEBPACK_IMPORTED_MODULE_3__.setTaskFilter)(pastDue, e)
        pastDue.classList.add('selected')
        ;(0,_interactive__WEBPACK_IMPORTED_MODULE_3__.displayTasks)();
    })
    ;(0,_interactive__WEBPACK_IMPORTED_MODULE_3__.createPastDueIcon)(pastDue)
    const pastDueText = document.createElement('span');
    pastDueText.innerText = 'Past due';
    pastDue.appendChild(pastDueText);
    menuOptions.appendChild(pastDue);


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
    ;(0,_interactive__WEBPACK_IMPORTED_MODULE_3__.createAdditionIcon)(addProject)
    const addProjectText = document.createElement('span');
    addProjectText.innerText = 'Add Project';
    addProject.appendChild(addProjectText)
    addProjectContainer.appendChild(addProject)


    // Generate and hide new project form
    const addProjectForm = document.createElement('form');
    addProjectForm.setAttribute('class', 'addProjectForm');
    addProjectForm.setAttribute('id', 'hidden')
    addProjectForm.method = 'get';
    (0,_interactive__WEBPACK_IMPORTED_MODULE_3__.createForm)(addProjectForm);
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
    (0,_interactive__WEBPACK_IMPORTED_MODULE_3__.createAdditionIcon)(addTask);
    const addTaskText = document.createElement('span');
    addTaskText.innerText = 'Add task';
    addTask.appendChild(addTaskText);
    addTaskContainer.appendChild(addTask);

    // Generate and hide new task form
    const addTaskForm = document.createElement('form');
    addTaskForm.setAttribute('class', 'addTaskForm');
    addTaskForm.setAttribute('id', 'hidden')
    addTaskForm.method = 'get';
    (0,_interactive__WEBPACK_IMPORTED_MODULE_3__.createForm)(addTaskForm);
    
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
    newGithubIcon.src = _assets_GitHub_light_32px_png__WEBPACK_IMPORTED_MODULE_2__;
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
/* harmony export */   "createPastDueIcon": () => (/* binding */ createPastDueIcon),
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
/* harmony import */ var _assets_history_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/history.svg */ "./src/assets/history.svg");
/* harmony import */ var _assets_plus_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/plus.svg */ "./src/assets/plus.svg");
/* harmony import */ var _assets_edit_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/edit.svg */ "./src/assets/edit.svg");
/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/delete.svg */ "./src/assets/delete.svg");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/add/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isWithinInterval/index.js");















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

const _createEditIcon = (td, i) => {
    const newEditIcon = document.createElement('img');
    newEditIcon.src = _assets_edit_svg__WEBPACK_IMPORTED_MODULE_7__;
    newEditIcon.setAttribute('class', 'icon');
    newEditIcon.setAttribute('id', `${i}`);
    // event listener to open task card
    newEditIcon.addEventListener('click', (e) => _showTaskCard(e))
    td.appendChild(newEditIcon);
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
    newAdditionIcon.src = _assets_plus_svg__WEBPACK_IMPORTED_MODULE_6__;
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

const createPastDueIcon = (li) => {
    const newPastDueIcon = document.createElement('img');
    newPastDueIcon.src = _assets_history_svg__WEBPACK_IMPORTED_MODULE_5__;
    newPastDueIcon.setAttribute('class', 'icon')
    li.appendChild(newPastDueIcon);
}

const _createAddButton = (container, i) => {
    const addBtn = document.createElement('button');
    addBtn.setAttribute('class', 'addBtn');
    addBtn.innerText = "submit";
    if (container.classList.contains('cardRow3')) {
        // convert card to form? and change this event listener to trigger when form submits
        addBtn.setAttribute('id', `${i}`);
        addBtn.addEventListener('click', (e) => _submitTaskCard(e))
    } else if (i.getAttribute('class') === 'addProjectForm') {
        addBtn.classList.add('projectAddBtn');
    } else if (i.getAttribute('class') === 'addTaskForm') {
        addBtn.classList.add('taskAddBtn');
    };
    container.appendChild(addBtn);
}

const _createCancelButton = (container, i) => {
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('class', 'cancelBtn');
    cancelBtn.setAttribute('id', `${i}`);
    cancelBtn.innerText = "cancel";
    if (container.getAttribute('class') === 'cardRow3') {
        cancelBtn.addEventListener('click', () => displayTasks(i))
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
    //task card
    if (tr.classList.contains('editDateContainer')) {
        dateContainer.innerHTML = `<input class='taskCardInput taskCardDate${i}' 
                                   type='date' 
                                   id='taskCardDate' 
                                   name='taskCardDate' 
                                   value='${task.date}'>`
    // task listing
    } else {
        // only display due date if there is one
        if (task.date === '') {
            dateContainer.innerText === ''
        } else {
            dateContainer.innerText = `${(0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(new Date(task.date), {days: 1}).toLocaleDateString()}`
        }
    }
    tr.appendChild(dateContainer);
}

const createDeleteContainer = (tr) => {
    //task card
    if (tr.classList.contains('task') === false) {
        const closeContainer = document.createElement('div');
        closeContainer.setAttribute('class', 'taskCloseContainer');
        _createDeleteIcon(closeContainer);
        tr.appendChild(closeContainer);
    // task listing
    } else {
        const closeContainer = document.createElement('td');
        closeContainer.setAttribute('class', 'taskCloseContainer');
        _createDeleteIcon(closeContainer);
        tr.appendChild(closeContainer);
    }
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
    _createAddButton(formRow2, form);
    _createCancelButton(formRow2, form);
       
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
    const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
    storageProjects.forEach(project => {
        _displayProject(project, i)
        i++
    });
}



// Delete project
const _deleteProject = (e) => {
    // grab arrays from storage
    const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))

    // Identify project to delete
    const doomedIndex = e.target.getAttribute('id');
    const doomedName = storageProjects[doomedIndex].name;

    // delete project
    storageProjects.splice(doomedIndex, 1);

    // delete all tasks in doomed project
    // could change from splice to deleted propery with hidden class to use in stats table with completed property //
    // mark tasks for deletion
    storageTasks.forEach((task, index) => {
        if (task.project === doomedName) {
            // will delete after loop as to not make errors
            _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.toDelete.push(task.name)
        }
    })
    // delete marked tasks
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.toDelete.forEach(doomedTask => {
        storageTasks.forEach((task, index) => {
            if (task.name === doomedTask) {
                storageTasks.splice(index, 1)
            }
        })
    }) 
    // clear teDelete array 
    _tasks__WEBPACK_IMPORTED_MODULE_9__.tasks.toDelete = [];

    // set changes to localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks));
    localStorage.setItem('storageProjects', JSON.stringify(storageProjects));


    // If doomed project was selected, revert tasklist to all tasks
    const contentTitle = document.querySelector('.contentTitle');
    const allTasksClassList = document.querySelector('.allTasks').classList
    if (contentTitle.textContent === doomedName) {
        contentTitle.textContent = 'All tasks' 
        allTasksClassList.add('selected')
    }

    // refresh tasklist
    displayProjects();
    displayTasks();
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
        if (task.priority === '1') {
            newListing.classList.add('highPriority');
        } else if (task.priority === '2') {
            newListing.classList.add('mediumPriority');
        } else if (task.priority === '3') {
            newListing.classList.add('lowPriority');
        }

        // assign past due class (for darkred font color)
        if (new Date() - new Date(task.date) > 0) {
            newListing.classList.add('taskPastDue');
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
        taskContainer.innerText = `${task.name}`;
        newListing.appendChild(taskContainer);

        // add date
        createDateContainer(newListing, task);

        // add edit button
        const editContainer = document.createElement('td');
        editContainer.setAttribute('class', 'editContainer');
        _createEditIcon(editContainer, i);
        newListing.appendChild(editContainer);

        // add delete button
        createDeleteContainer(newListing);

        //append task to tasklist
        tasklist.appendChild(newListing);



        // set display filter

        // completed
        const completedTasksToggle = document.querySelector('.completedTasksToggle')
        // check to see if completed tasks should be displayed
        if (localStorage.getItem('completedFilter') === 'true') {
            // hide completed tasks
            if (task.complete === 'true') {
                newListing.classList.add('hidden');
            }            
        }
        
        // DATE FILTERS
        const filter = document.querySelector('.contentTitle').textContent
        // All tasks
        if (filter === 'All tasks') {
            return;

        // Due Today
        } else if (filter === 'Due today') {
            // hide if no due date
            if (task.date === '') {
                newListing.classList.add('hidden');
                return;
            }
            
            // grab today's date and task date
            const today = new Date();
            const taskDate = new Date(task.date)
            
            // hide if not due today
            if (today.getMonth() !== taskDate.getMonth() ||
                today.getDate() - 1 !== taskDate.getDate() ||
                today.getFullYear() !== taskDate.getFullYear() ) {
                    newListing.classList.add('hidden');
            }
        
        // Due this week
        } else if (filter === 'Due this week') {

            // hide if no due date
            if (task.date === '') {
                newListing.classList.add('hidden');
                return;
            }
            
            // grab week dates and task due date date
            const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date())
            const endOfWeek = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(today, {days: 7})
            // midnight due date
            const taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(task.date)), {days: 1, hours: 23, minutes: 59})
            
            // hide if not due this week
            if ((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(taskDate, {
                start: today,
                end: endOfWeek,
            }) === false) {
                newListing.classList.add('hidden')
                return
            }
        
        // hide if no due date
            
        } else if (filter === 'Past due') {
            // Past due 
            if (task.date === '') {
                newListing.classList.add('hidden');
                return;

            // hide if not past due
            } else if (new Date() - new Date(task.date) < 0) {
                newListing.classList.add('hidden');
                return;
            }    
        }


        // project filter
        // grab projects array from storage
        const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
        // apply filter
        storageProjects.forEach(project => {
            if (project.name === filter) {
                if (task.project !== filter) {
                    newListing.classList.add('hidden');
                };    
            }
        })
        // set projects array back into localStorage
        localStorage.setItem('storageProjects', JSON.stringify(storageProjects))
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
        if (task.priority === '1') {
            newCardContainer.classList.add('highPriority');
        } else if (task.priority === '2') {
            newCardContainer.classList.add('mediumPriority');
        } else if (task.priority === '3') {
            newCardContainer.classList.add('lowPriority');
        }
        
        // create form container 
        const newCardFormContainer = document.createElement('td');

        // Create form
        const editCardForm = document.createElement('form');
        editCardForm.setAttribute('class', 'menuOptions');
        editCardForm.setAttribute('id', `${i}`);
        
        // Create tbody
        const taskCard = document.createElement('fieldset');
        taskCard.setAttribute('id', 'taskCard');
        
        // create legend
        const taskCardLegend = document.createElement('legend');
        // taskCardLegend.innerText = 'Modify task'

        // First row
        const cardRow1 = document.createElement('div');
        cardRow1.setAttribute('class', 'cardRow cardRow1')
        // add task name input
        const taskInputContainer = document.createElement('div');
        taskInputContainer.setAttribute('class', `taskInputContainer`);
        taskInputContainer.innerHTML = `<label for='taskCardTask'>Task:</label>

                                        <input type='text' 
                                        class='taskCardInput taskCardTask${i}' 
                                        id='taskCardTask' 
                                        name='taskCardTask' 
                                        value='${task.name}'></input>`;
        cardRow1.appendChild(taskInputContainer);
        // add date input
        const editDateContainer = document.createElement('div');
        editDateContainer.setAttribute('class', `editDateContainer`);
        editDateContainer.innerHTML = "<label for='taskCardDate'>Due date:</label>";
        createDateContainer(editDateContainer, task, i);
        cardRow1.appendChild(editDateContainer);



        // Second row 
        const cardRow2 = document.createElement('div');
        cardRow2.setAttribute('class', 'cardRow cardRow2')
        
        // project input container
        const projectInputContainer = document.createElement('div');
        projectInputContainer.setAttribute('class', 'projectInputContainer');
        projectInputContainer.innerHTML = "<label for='taskCardProject'>Project:</label>";

        // create project dropdown 
        const projectDropdown = document.createElement('select')
        projectDropdown.setAttribute('class', `taskCardInput taskCardProject${i}`)
        projectDropdown.setAttribute('id', 'taskCardProject')
        projectDropdown.setAttribute('name', 'taskCardProject')
        projectDropdown.setAttribute('value', `${task.project}`)

        // create project dropdown options
        // blank option for no project
        const blankProjectOption = document.createElement('option')
        blankProjectOption.value = ''
        blankProjectOption.text = ''
        projectDropdown.appendChild(blankProjectOption)
        // remaining options generated from projects array
        const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
        storageProjects.forEach(project => {
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
        const priorityInputContainer = document.createElement('div');
        priorityInputContainer.setAttribute('class', 'priorityInputContainer');
        priorityInputContainer.innerHTML = "<label for='taskCardPriority'>Priority:</label>";

        // create priority dropdown 
        const priorityDropdown = document.createElement('select')
        priorityDropdown.setAttribute('class', `taskCardInput taskCardPriority${i}`)
        priorityDropdown.setAttribute('id', 'taskCardPriority')
        priorityDropdown.setAttribute('name', 'taskCardPriority')
        priorityDropdown.setAttribute('value', `${task.priority}`)
        
        // create priority dropdown options
        // high priority
        const priorityHigh = document.createElement('option')
        priorityHigh.value = '1'
        priorityHigh.text = 'High'
        // medium priority
        const priorityMedium = document.createElement('option')
        priorityMedium.value = '2'
        priorityMedium.text = 'Medium'
        // low priority
        const priorityLow = document.createElement('option')
        priorityLow.value = '3'
        priorityLow.text = 'Low'
        
        // priority selection
        if (task.priority === '1') {
        priorityHigh.selected = true;
        } else if (task.priority === '3') {
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
        const cardRow3 = document.createElement('div');
        cardRow3.setAttribute('class', 'cardRow cardRow3')
        _createAddButton(cardRow3, i);
        _createCancelButton(cardRow3, `${i}`);



        // append task card to tasklist
        taskCardLegend.appendChild(cardRow1);
        taskCardLegend.appendChild(cardRow2);
        taskCardLegend.appendChild(cardRow3);
        
        taskCard.appendChild(taskCardLegend);

        // editCardForm.appendChild(newThead);
        editCardForm.appendChild(taskCard);

        newCardFormContainer.appendChild(editCardForm);

        // Create delete button
        createDeleteContainer(newCardFormContainer);

        
        newCardContainer.appendChild(newCardFormContainer);

        tasklist.appendChild(newCardContainer);
    }
    


    // sort tasks by due date then priority
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    storageTasks.sort((taskA, taskB) => {
        if (new Date(taskA.date) - new Date(taskB.date) !== 0) {
            return new Date(taskA.date) - new Date(taskB.date);
        } else {
            return taskA.priority - taskB.priority;
        }
    })
    // set task array back into localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks));



    // append all tasks to tasklist
    let i=0
    storageTasks.forEach(task => {
        _createTaskListing(task, i);
        _createTaskCard(task, i);
        i++
    });
}





// Complete task
const _markComplete = (e) => {
    const taskID = e.target.getAttribute('id');
    // NEW
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    if (storageTasks[taskID].complete === 'true') {
        //mark task incomplete
        storageTasks[taskID].complete = 'false'
    } else if (storageTasks[taskID].complete === 'false') {
        //mark task complete
        storageTasks[taskID].complete = 'true'
    } else {
        console.log('this is strange')
    }
    // set task array back into localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks));
    displayTasks();
}

// Show task card
const _showTaskCard = (e) => {
    const taskID = e.target.getAttribute('id');
    // refresh tasklist to close other task cards (optional but looks cleaner)
    displayTasks();
    // show task card
    const taskCard = document.querySelector(`.card${taskID}`);
    taskCard.setAttribute('id', `${taskID}`);
    //hide task listing
    const taskListing = document.querySelector(`.listing${taskID}`);
    taskListing.setAttribute('id', 'hidden');
}

const _submitTaskCard = (e) => {
    e.preventDefault();
    const taskID = (e.target.getAttribute('id')) 

    // Get input values
    const updatedName = document.querySelector(`.taskCardTask${taskID}`).value
    const updatedDate = document.querySelector(`.taskCardDate${taskID}`).value
    const updatedProject = document.querySelector(`.taskCardProject${taskID}`).value
    const updatedPriority = document.querySelector(`.taskCardPriority${taskID}`).value

    // grab updated task from localStorage
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    var updatedTask = storageTasks[taskID]
    // Apply input values to task object
    updatedTask.name = updatedName
    updatedTask.date = updatedDate
    updatedTask.project = updatedProject
    updatedTask.priority = updatedPriority
    // set task array back into localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks))
    displayTasks();
}

// Delete task
const _deleteTask = (e) => {
    let doomedIndex = e.target.parentElement.parentElement.getAttribute('id');
    // NEW
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    // remove task from localStorage
    storageTasks.splice(doomedIndex, 1);
    // set task array back into localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks))
    // refresh tasklist
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
    const pastDueClassList = document.querySelector('.pastDue').classList
    if (allTasksClassList.contains('selected')) {
        allTasksClassList.remove('selected')
    } if (dueTodayClassList.contains('selected')) {
        dueTodayClassList.remove('selected')
    } if (dueWeekClassList.contains('selected')) {
        dueWeekClassList.remove('selected')
    } if (pastDueClassList.contains('selected')) {
        pastDueClassList.remove('selected')
    } 

    // grab projects array from storage
    const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
    
    // deselect all projects
    storageProjects.forEach(project => {
        if (project.selected === 'true') {
            project.selected = 'false'
        }
    }) 

    // Select project if one is chosen (main menu selection is handled in event listener)
    if (container.getAttribute('class') === 'project') {
        var selectedProjectId = container.getAttribute('id');
        storageProjects[selectedProjectId].selected = 'true'
    }

    // set projects array back into localStorage
    localStorage.setItem('storageProjects', JSON.stringify(storageProjects))

    // refresh
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

    static toDelete = [];

    

    constructor (newTask) {
        this.name = newTask
        this.date = date
        this.project = project
        this.priority = priority
        this.complete = complete
    }



};



class projects {



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

/***/ "./src/assets/dots-vertical.svg":
/*!**************************************!*\
  !*** ./src/assets/dots-vertical.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2500f612ad4630b14fbb.svg";

/***/ }),

/***/ "./src/assets/edit.svg":
/*!*****************************!*\
  !*** ./src/assets/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c11ca64583db9195885d.svg";

/***/ }),

/***/ "./src/assets/history.svg":
/*!********************************!*\
  !*** ./src/assets/history.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ef9108c17ed49af8fa6.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interactive */ "./src/interactive.js");

// Page initialization
// import { initialize } from './core';



(0,_core__WEBPACK_IMPORTED_MODULE_0__["default"])();



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






// temp
// localStorage.clear();

// Initiate storage arrays if localStorage is empty
const storageTasksArray = [];
const storageProjectsArray = [];
if (localStorage.length === 0) {
    localStorage.setItem('storageTasks', JSON.stringify(storageTasksArray));
    localStorage.setItem('storageProjects', JSON.stringify(storageProjectsArray));
    localStorage.setItem('completedFilter', true);

    // PLACEHOLDER PROJECTS
    // grab storage array from storage
    const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
    // push placerholder projects
    storageProjects.push(
        {
            name: 'Home',
            selected: 'false'    
        },
        {
            name: 'Study',
            selected: 'false'    
        },
        {
            name: 'Work',
            selected: 'false'    
        },
        {
            name: 'Vacation',
            selected: 'false'    
        },
    )
    // set storage array back into storage
    localStorage.setItem('storageProjects', JSON.stringify(storageProjects));

    // PLACEHOLDER TASKS
    // grab tasks array from storage
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    // push placeholder tasks (dates calculated so demo will always be functional)
    storageTasks.push(
        {
            name: 'Meal Prep',
            date: `${(new Date).getFullYear()}-0${(new Date).getMonth() + 1}-${(new Date).getDate() + 5}`,
            project: `Home`,
            priority: '2',
            complete: 'false',
        },
        {
            name: 'Dust & vacuum',
            date: `${(new Date).getFullYear()}-0${(new Date).getMonth() + 1}-${(new Date).getDate() + 2}`,
            project: `Home`,
            priority: '3',
            complete: 'false',
        },
        {
            name: 'Disc golf with friends',
            date: `${(new Date).getFullYear()}-0${(new Date).getMonth() + 1}-${(new Date).getDate() + 8}`,
            project: `Home`,
            priority: '2',
            complete: 'false',
        },
        {
            name: 'Yardwork',
            date: `${(new Date).getFullYear()}-0${(new Date).getMonth() + 1}-${(new Date).getDate() + 6}`,
            project: `Home`,
            priority: '3',
            complete: 'false',
        },
        {
            name: 'Practice on HackerRank',
            date: `${(new Date).getFullYear()}-0${(new Date).getMonth() + 1}-${(new Date).getDate()}`,
            project: `Study`,
            priority: '2',
            complete: 'false',
        },
        {
            name: 'Practice on CodeWars',
            date: `${(new Date).getFullYear()}-0${(new Date).getMonth() + 1}-${(new Date).getDate()}`,
            project: `Study`,
            priority: '2',
            complete: 'false',
        },
        {
            name: 'Update resume',
            date: `${(new Date).getFullYear()}-0${(new Date).getMonth() + 1}-${(new Date).getDate() + 4}`,
            project: `Work`,
            priority: '1',
            complete: 'false',
        },
        {
            name: 'Apply for SWE positions',
            date: `${(new Date).getFullYear()}-0${(new Date).getMonth() + 1}-${(new Date).getDate() + 7}`,
            project: `Work`,
            priority: '1',
            complete: 'false',
        },
        {
            name: 'Purchase event admission tickets',
            date: `${(new Date).getFullYear()}-0${(new Date).getMonth() + 1}-${(new Date).getDate() + 9}`,
            project: `Vacation`,
            priority: '1',
            complete: 'false',
        },
        {
            name: 'Purchase plane tickets',
            date: `${(new Date).getFullYear()}-0${(new Date).getMonth() + 1}-${(new Date).getDate() + 9}`,
            project: `Vacation`,
            priority: '1',
            complete: 'false',
        },
        {
            name: 'Reserve airport parking',
            date: `${(new Date).getFullYear()}-0${(new Date).getMonth() + 1}-${(new Date).getDate() + 9}`,
            project: `Vacation`,
            priority: '1',
            complete: 'false',
        },
        {
            name: 'Book hotel or AirBnB',
            date: `${(new Date).getFullYear()}-0${(new Date).getMonth() + 1}-${(new Date).getDate() + 9}`,
            project: `Vacation`,
            priority: '1',
            complete: 'false',        
        },
    )
    // set tasks array back into storage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks));

}



// insert content from local storage if there is any
(0,_interactive__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
(0,_interactive__WEBPACK_IMPORTED_MODULE_2__.displayTasks)();





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

    // submit to local storage
    const submitProj = (newProj) => {
        // grab array from storage
        const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
        // push task to array
        storageProjects.push(newProj)
        // set array back into storage
        localStorage.setItem('storageProjects', JSON.stringify(storageProjects))
        // refresh projects list
        ;(0,_interactive__WEBPACK_IMPORTED_MODULE_2__.displayProjects)();
        // refresh tasklist so you can add tasks to new project
        (0,_interactive__WEBPACK_IMPORTED_MODULE_2__.displayTasks)();
    }
    
    const _hideAddProjectForm = () => {
        addProjectBtn.setAttribute('id', 'showFlex')
        addProjectForm.setAttribute('id', 'hidden')
        newProjectInput.value = '';
    }
    
    // verify or cancel submission
    if (e.submitter.classList.contains('addBtn') && newProjectInput.value === '') {
        // show project name error
        newProjErrorContainer.setAttribute('id', 'showBlock');
        return;
    } else if (e.submitter.classList.contains('addBtn')) {
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

    // submit to localStorage
    const _submitTask = (newTask) => {
        // NEW
        // grab array from storage
        const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
        // push task to array
        storageTasks.push(newTask)
        // set array back into storage
        localStorage.setItem('storageTasks', JSON.stringify(storageTasks))
        // refresh tasklist
        ;(0,_interactive__WEBPACK_IMPORTED_MODULE_2__.displayTasks)();
    }

    const _hideAddTaskForm = () => {
        addTaskBtn.setAttribute('id', 'showFlex')
        addTaskForm.setAttribute('id', 'hidden')
        newTaskInput.value = '';
    }
    
    // verify or cancel submission
    if (e.submitter.classList.contains('addBtn') && newTaskInput.value === '') {
        // show Task name error
        newTaskErrorContainer.setAttribute('id', 'showBlock');
        return;
    } else if (e.submitter.classList.contains('addBtn')) {
        // assign project
        var newTaskProject = ''
        if (document.querySelector('.contentTitle').textContent !== 'All tasks' &&
        document.querySelector('.contentTitle').textContent !== 'Due today' &&
        document.querySelector('.contentTitle').textContent !== 'Due this week') {
            newTaskProject = document.querySelector('.contentTitle').textContent
        } 
        
        // submit new Task
        const newTask = {
            name: newTaskInput.value,
            date: '',
            project: `${newTaskProject}`,
            priority: '2',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsVUFBVSxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxNQUFNLFlBQVksV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsV0FBVyxhQUFhLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxTQUFTLGFBQWEsT0FBTyxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxN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O0FBQ0EsS0FBSztBQUNMOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFtQjtBQUMvQjtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUksMERBQXNCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLElBQUksa0RBQWM7O0FBRWxCO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF5QyxFQUFFO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxFQUFFO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLFVBQVU7QUFDL0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFZO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGREYXlzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzV2l0aGluSW50ZXJ2YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvY2FsZW5kYXItZWRpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogbGlnaHRzdGVlbGJsdWU7XFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiBzdGVlbGJsdWU7XFxuICAgIC0tbWVudS1jb2xvcjogcmdiKDE0NSwgMTg5LCAyMjQpO1xcbiAgICAtLWFjY2VudC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS1mb250LWNvbG9yOiByZ2IoMjAsIDIwLCAyMCk7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IGNhbGMoMTAwdncgLSAyNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTEwcHggY2FsYygxMDB2aCAtIDExMHB4IC0gNjJweCkgNjJweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBTY3JvbGxiYXIgc3R5bGluZyAqL1xcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogMTJweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMik7IFxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LWNvbG9yKTsgXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDAsMCwwLDAuNCk7IFxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMCwwLDAsMC40KTsgXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgwLDAsMCwwLjYpOyBcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDAsMCwwLDAuNik7IFxcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcblxcblxcblxcblxcbi8qIEhlYWRlciBzdHlsaW5nICovXFxuXFxuLmxvZ28ge1xcbiAgICBtYXgtaGVpZ2h0OiA5MCU7XFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgICAvKiB3aGl0ZXNtb2tlIGNvbG9yICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDgwJSkgaHVlLXJvdGF0ZSgyMDFkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoOTIlKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNnB4IHJnYigwLCAwLCAwLCAwLjgpO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBEcm9wZG93biBtZW51IHN0eWxpbmcgKi9cXG5cXG4ub3B0aW9uc0ljb25Db250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4ub3B0aW9uc0ljb24ge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGMoNHB4ICsgMC42cmVtKTtcXG4gICAgLyogd2hpdGVzbW9rZSBjb2xvciAqL1xcbiAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ4MCUpIGh1ZS1yb3RhdGUoMjAxZGVnKSBicmlnaHRuZXNzKDEwNyUpIGNvbnRyYXN0KDkyJSk7XFxufVxcblxcbi5vcHRpb25zSWNvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1LCAwLjMpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmaWx0ZXI6IG5vbmU7XFxufVxcblxcbi5vcHRpb25zSWNvbjphY3RpdmUsXFxuLm9wdGlvbnNJY29uLnNlbGVjdGVkIHtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuNCk7XFxuICAgIGZpbHRlcjogbm9uZTtcXG59XFxuXFxuLmRyb3Bkb3duQ29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDsgICBcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcblxcbi5kcm9wZG93bkl0ZW0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgLyogbWFyZ2luOiAxMHB4IDFyZW07ICovXFxuICAgIHBhZGRpbmc6IDEycHggMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAgIFxcbn1cXG5cXG4uZHJvcGRvd25JdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUsIDAuMyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRyb3Bkb3duSXRlbTphY3RpdmUge1xcbiAgICBjb2xvcjogZGFya29yYW5nZTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogTWVudSBzdHlsaW5nICovXFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmljb24ge1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLm1lbnVPcHRpb25zIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1lbnVPcHRpb25zPmxpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5wcm9qZWN0c0hlYWRlciB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMgbGksXFxuLnByb2plY3RzSGVhZGVyLFxcbi5jb250ZW50VGl0bGUsXFxuLmFkZFRhc2tCdG4sXFxuLmFkZFByb2plY3RGb3JtLFxcbnRib2R5PnRyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDFyZW07XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAgICBcXG59XFxuXFxudGJvZHk+dHIudGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1LCAwLjMpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLm1lbnVPcHRpb25zIGxpOmhvdmVyLFxcbi5hZGRUYXNrQnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUsIDAuMyk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51T3B0aW9ucyBsaTphY3RpdmUsXFxuLmFkZFRhc2tCdG46YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1LCAwLjMpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuXFxuXFxuXFxuLyogRm9ybSBzdHlsaW5nICovXFxuXFxuI3Nob3dCbG9jayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jc2hvd0ZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZFByb2plY3RGb3JtLFxcbi5hZGRUYXNrRm9ybSB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5hZGRUYXNrRm9ybSB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmZvcm1Sb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xcbiAgICBnYXA6IDhweDtcXG5cXG59XFxuXFxuI2Zvcm1CdXR0b25zIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4jbmV3VGFza0lucHV0LFxcbi50YXNrQ2FyZElucHV0LFxcbiNuZXdQcm9qZWN0SW5wdXQge1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIC8qIHdpdGggcGFkZGluZyBjb21wZW5zYXRpb24gKi9cXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEycHgpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWFyZ2luOiA2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYWRkQnRuLFxcbi5jYW5jZWxCdG4ge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAgICBcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgaHNsKDEyMCwgNzMlLCA1NSUpO1xcbn1cXG5cXG4uY2FuY2VsQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRwaW5rO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBoc2woMzUxLCAxMDAlLCA3MCUpO1xcblxcbn1cXG5cXG4uYWRkQnRuOmhvdmVyLFxcbi5jYW5jZWxCdG46aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkQnRuOmFjdGl2ZSxcXG4uY2FuY2VsQnRuOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ubmV3UHJvakVycm9yQ29udGFpbmVyLFxcbi5uZXdUYXNrRXJyb3JDb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcblxcblxcblxcblxcbi8qIENvbnRlbnQgc3R5bGluZyAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgLyogcGFkZGluZzogMjBweDsgKi9cXG59XFxuXFxuLnRhc2tQYXN0RHVlIHtcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcblxcblxcbi8qIFRhYmxlIHN0eWxpbmcgKi9cXG5cXG50YWJsZSxcXG50ZCA+IGZvcm0ge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG50Ym9keT50cixcXG5sZWdlbmQgPiBkaXYge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7ICovXFxufVxcblxcbi5oaWdoUHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJlZDtcXG59XFxuXFxuLm1lZGl1bVByaW9yaXR5IHtcXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBkYXJrb3JhbmdlO1xcbn1cXG5cXG4ubG93UHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxudGQsXFxubGVnZW5kID4gZGl2IHtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgcGluazsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxufVxcblxcbmltZy5pY29uOmhvdmVyLFxcbi5kYXRlQ29udGFpbmVyOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGF0ZUNvbnRhaW5lcixcXG5pbWcuZGVsZXRlSXRlbSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uY2hlY2tib3hDb250YWluZXI6YWN0aXZlIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTglKSBzZXBpYSg3NiUpIHNhdHVyYXRlKDIzMTIlKSBodWUtcm90YXRlKDEwOWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDclKTtcXG59XFxuXFxuLmRlbGV0ZUl0ZW06aG92ZXIge1xcbiAgICBmaWx0ZXI6IGludmVydCg3JSkgc2VwaWEoNTElKSBzYXR1cmF0ZSg1OTUxJSkgaHVlLXJvdGF0ZSgzNTBkZWcpIGJyaWdodG5lc3MoMTQwJSkgY29udHJhc3QoMTM2JSk7XFxufVxcblxcbi5lZGl0Q29udGFpbmVyOmhvdmVyIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoNjAlKSBzZXBpYSgzNCUpIHNhdHVyYXRlKDM2MjElKSBodWUtcm90YXRlKDM1OWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCgxMDklKTtcXG59XFxuXFxuI2NvbXBsZXRlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcblxcblxcbi8qIEVkaXQgY2FyZCBzdHlsaW5nICovXFxuXFxuLnRhc2s+dGQge1xcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbn1cXG5cXG5cXG5maWVsZHNldCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDZweDsgKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5maWVsZHNldCA+IGxlZ2VuZCB7XFxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IG5vbmU7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jYXJkUm93MiA+IGRpdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5sZWdlbmQ+LmNhcmRSb3cge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHBhZGRpbmc6IDZweDtcXG59XFxuXFxuLyogZGF0ZSBpbnB1dCAqL1xcbmlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsc2Fucy1zZXJpZjtcXG59XFxuXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICAgIFxcbiAgICAvKiBuZXcgZWRpdCBjYWxlbmRhciBpY29uICovXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLyogZGFyayBvcmFuZ2Ugb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcjpob3ZlciB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDU4JSkgc2VwaWEoMjYlKSBzYXR1cmF0ZSg1NDcwJSkgaHVlLXJvdGF0ZSgyZGVnKSBicmlnaHRuZXNzKDEwNSUpIGNvbnRyYXN0KDEwMyUpOyAgICBcXG59XFxuXFxuXFxuXFxuLyogRm9vdGVyIHN0eWxpbmcgKi9cXG5cXG5mb290ZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5naXRodWIge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZ2l0aHViOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lB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c0JBQXNCOztBQUUxQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQSxlQUFlO0FBQ2Y7SUFDSSx3SEFBd0g7QUFDNUg7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGNBQWM7SUFDZCxtREFBNkM7SUFDN0MsY0FBYztBQUNsQjs7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSwrRkFBK0Y7QUFDbkc7Ozs7QUFJQSxtQkFBbUI7O0FBRW5CO0lBQ0ksbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QywwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHN0ZWVsYmx1ZTtcXG4gICAgLS1zZWNvbmRhcnktY29sb3I6IHN0ZWVsYmx1ZTtcXG4gICAgLS1tZW51LWNvbG9yOiByZ2IoMTQ1LCAxODksIDIyNCk7XFxuICAgIC0tYWNjZW50LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLWZvbnQtY29sb3I6IHJnYigyMCwgMjAsIDIwKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggY2FsYygxMDB2dyAtIDI1MHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMTBweCBjYWxjKDEwMHZoIC0gMTEwcHggLSA2MnB4KSA2MnB4O1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcblxcblxcblxcblxcbi8qIFNjcm9sbGJhciBzdHlsaW5nICovXFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiAxMnB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4yKTsgXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjIpO1xcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtY29sb3IpOyBcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMCwwLDAsMC40KTsgXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgwLDAsMCwwLjQpOyBcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDAsMCwwLDAuNik7IFxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IHJnYmEoMCwwLDAsMC42KTsgXFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogSGVhZGVyIHN0eWxpbmcgKi9cXG5cXG4ubG9nbyB7XFxuICAgIG1heC1oZWlnaHQ6IDkwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAgIC8qIHdoaXRlc21va2UgY29sb3IgKi9cXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0ODAlKSBodWUtcm90YXRlKDIwMWRlZykgYnJpZ2h0bmVzcygxMDclKSBjb250cmFzdCg5MiUpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA2cHggcmdiKDAsIDAsIDAsIDAuOCk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcblxcblxcblxcbi8qIERyb3Bkb3duIG1lbnUgc3R5bGluZyAqL1xcblxcbi5vcHRpb25zSWNvbkNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5vcHRpb25zSWNvbiB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyg0cHggKyAwLjZyZW0pO1xcbiAgICAvKiB3aGl0ZXNtb2tlIGNvbG9yICovXFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDgwJSkgaHVlLXJvdGF0ZSgyMDFkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoOTIlKTtcXG59XFxuXFxuLm9wdGlvbnNJY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUsIDAuMyk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZpbHRlcjogbm9uZTtcXG59XFxuXFxuLm9wdGlvbnNJY29uOmFjdGl2ZSxcXG4ub3B0aW9uc0ljb24uc2VsZWN0ZWQge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC40KTtcXG4gICAgZmlsdGVyOiBub25lO1xcbn1cXG5cXG4uZHJvcGRvd25Db250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4OyAgIFxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDEwMCU7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgei1pbmRleDogMjtcXG59XFxuXFxuLmRyb3Bkb3duSXRlbSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAvKiBtYXJnaW46IDEwcHggMXJlbTsgKi9cXG4gICAgcGFkZGluZzogMTJweCAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7ICAgXFxufVxcblxcbi5kcm9wZG93bkl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSwgMC4zKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZHJvcGRvd25JdGVtOmFjdGl2ZSB7XFxuICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKiBNZW51IHN0eWxpbmcgKi9cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uaWNvbiB7XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWVudU9wdGlvbnM+bGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuLnByb2plY3RzSGVhZGVyIHtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5tZW51T3B0aW9ucyBsaSxcXG4ucHJvamVjdHNIZWFkZXIsXFxuLmNvbnRlbnRUaXRsZSxcXG4uYWRkVGFza0J0bixcXG4uYWRkUHJvamVjdEZvcm0sXFxudGJvZHk+dHIge1xcbiAgICBtYXJnaW46IDEwcHggMXJlbTtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7ICAgIFxcbn1cXG5cXG50Ym9keT50ci50YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUsIDAuMyk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ubWVudU9wdGlvbnMgbGk6aG92ZXIsXFxuLmFkZFRhc2tCdG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSwgMC4zKTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuMik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1lbnVPcHRpb25zIGxpOmFjdGl2ZSxcXG4uYWRkVGFza0J0bjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2IoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUsIDAuMyk7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBGb3JtIHN0eWxpbmcgKi9cXG5cXG4jc2hvd0Jsb2NrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNzaG93RmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNoaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkUHJvamVjdEZvcm0sXFxuLmFkZFRhc2tGb3JtIHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLmFkZFRhc2tGb3JtIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZm9ybVJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XFxuICAgIGdhcDogOHB4O1xcblxcbn1cXG5cXG4jZm9ybUJ1dHRvbnMge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcblxcbiNuZXdUYXNrSW5wdXQsXFxuLnRhc2tDYXJkSW5wdXQsXFxuI25ld1Byb2plY3RJbnB1dCB7XFxuICAgIHBhZGRpbmc6IDZweDtcXG4gICAgLyogd2l0aCBwYWRkaW5nIGNvbXBlbnNhdGlvbiAqL1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTJweCk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtYXJnaW46IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5hZGRCdG4sXFxuLmNhbmNlbEJ0biB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7ICAgIFxcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hZGRCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBoc2woMTIwLCA3MyUsIDU1JSk7XFxufVxcblxcbi5jYW5jZWxCdG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHBpbms7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGhzbCgzNTEsIDEwMCUsIDcwJSk7XFxuXFxufVxcblxcbi5hZGRCdG46aG92ZXIsXFxuLmNhbmNlbEJ0bjpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYigwLCAwLCAwLCAwLjIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRCdG46YWN0aXZlLFxcbi5jYW5jZWxCdG46YWN0aXZlIHtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbi5uZXdQcm9qRXJyb3JDb250YWluZXIsXFxuLm5ld1Rhc2tFcnJvckNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDhweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogZGFya3JlZDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuLyogQ29udGVudCBzdHlsaW5nICovXFxuXFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xcbn1cXG5cXG4udGFza1Bhc3REdWUge1xcbiAgICBjb2xvcjogZGFya3JlZDtcXG59XFxuXFxuXFxuXFxuLyogVGFibGUgc3R5bGluZyAqL1xcblxcbnRhYmxlLFxcbnRkID4gZm9ybSB7XFxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbnRib2R5PnRyLFxcbmxlZ2VuZCA+IGRpdiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmx1ZTsgKi9cXG59XFxuXFxuLmhpZ2hQcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xcbn1cXG5cXG4ubWVkaXVtUHJpb3JpdHkge1xcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGRhcmtvcmFuZ2U7XFxufVxcblxcbi5sb3dQcmlvcml0eSB7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgZ3JlZW47XFxufVxcblxcbi5jb21wbGV0ZSB7XFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG50ZCxcXG5sZWdlbmQgPiBkaXYge1xcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCBwaW5rOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG59XFxuXFxuaW1nLmljb246aG92ZXIsXFxuLmRhdGVDb250YWluZXI6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kYXRlQ29udGFpbmVyLFxcbmltZy5kZWxldGVJdGVtIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi5jaGVja2JveENvbnRhaW5lcjphY3RpdmUge1xcbiAgICBmaWx0ZXI6IGludmVydCgxOCUpIHNlcGlhKDc2JSkgc2F0dXJhdGUoMjMxMiUpIGh1ZS1yb3RhdGUoMTA5ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwNyUpO1xcbn1cXG5cXG4uZGVsZXRlSXRlbTpob3ZlciB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDclKSBzZXBpYSg1MSUpIHNhdHVyYXRlKDU5NTElKSBodWUtcm90YXRlKDM1MGRlZykgYnJpZ2h0bmVzcygxNDAlKSBjb250cmFzdCgxMzYlKTtcXG59XFxuXFxuLmVkaXRDb250YWluZXI6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGludmVydCg2MCUpIHNlcGlhKDM0JSkgc2F0dXJhdGUoMzYyMSUpIGh1ZS1yb3RhdGUoMzU5ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDEwOSUpO1xcbn1cXG5cXG4jY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuXFxuXFxuLyogRWRpdCBjYXJkIHN0eWxpbmcgKi9cXG5cXG4udGFzaz50ZCB7XFxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcblxcbmZpZWxkc2V0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogNnB4OyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiA2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmZpZWxkc2V0ID4gbGVnZW5kIHtcXG4gICAgLyogYm94LXNpemluZzogYm9yZGVyLWJveDsgKi9cXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogbm9uZTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmNhcmRSb3cyID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmxlZ2VuZD4uY2FyZFJvdyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4vKiBkYXRlIGlucHV0ICovXFxuaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgICAgXFxuICAgIC8qIG5ldyBlZGl0IGNhbGVuZGFyIGljb24gKi9cXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi9hc3NldHMvY2FsZW5kYXItZWRpdC5zdmcnKTtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxufVxcblxcbi8qIGRhcmsgb3JhbmdlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3I6aG92ZXIge1xcbiAgICBmaWx0ZXI6IGludmVydCg1OCUpIHNlcGlhKDI2JSkgc2F0dXJhdGUoNTQ3MCUpIGh1ZS1yb3RhdGUoMmRlZykgYnJpZ2h0bmVzcygxMDUlKSBjb250cmFzdCgxMDMlKTsgICAgXFxufVxcblxcblxcblxcbi8qIEZvb3RlciBzdHlsaW5nICovXFxuXFxuZm9vdGVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZ2l0aHViIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmdpdGh1Yjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgYWRkRGF5cyBmcm9tIFwiLi4vYWRkRGF5cy9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1vbnRocyBmcm9tIFwiLi4vYWRkTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGFkZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7RHVyYXRpb259IGR1cmF0aW9uIC0gdGhlIG9iamVjdCB3aXRoIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICpcbiAqIHwgS2V5ICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgeWVhcnMgICAgICAgICAgfCBBbW91bnQgb2YgeWVhcnMgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgbW9udGhzICAgICAgICAgfCBBbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkICAgICAgIHxcbiAqIHwgd2Vla3MgICAgICAgICAgfCBBbW91bnQgb2Ygd2Vla3MgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgZGF5cyAgICAgICAgICAgfCBBbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZCAgICAgICAgIHxcbiAqIHwgaG91cnMgICAgICAgICAgfCBBbW91bnQgb2YgaG91cnMgdG8gYmUgYWRkZWQgICAgICAgIHxcbiAqIHwgbWludXRlcyAgICAgICAgfCBBbW91bnQgb2YgbWludXRlcyB0byBiZSBhZGRlZCAgICAgIHxcbiAqIHwgc2Vjb25kcyAgICAgICAgfCBBbW91bnQgb2Ygc2Vjb25kcyB0byBiZSBhZGRlZCAgICAgIHxcbiAqXG4gKiBBbGwgdmFsdWVzIGRlZmF1bHQgdG8gMFxuICpcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgdGhlIGZvbGxvd2luZyBkdXJhdGlvbiB0byAxIFNlcHRlbWJlciAyMDE0LCAxMDoxOTo1MFxuICogY29uc3QgcmVzdWx0ID0gYWRkKG5ldyBEYXRlKDIwMTQsIDgsIDEsIDEwLCAxOSwgNTApLCB7XG4gKiAgIHllYXJzOiAyLFxuICogICBtb250aHM6IDksXG4gKiAgIHdlZWtzOiAxLFxuICogICBkYXlzOiA3LFxuICogICBob3VyczogNSxcbiAqICAgbWludXRlczogOSxcbiAqICAgc2Vjb25kczogMzAsXG4gKiB9KVxuICogLy89PiBUaHUgSnVuIDE1IDIwMTcgMTU6Mjk6MjBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkKGRpcnR5RGF0ZSwgZHVyYXRpb24pIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIGlmICghZHVyYXRpb24gfHwgdHlwZW9mIGR1cmF0aW9uICE9PSAnb2JqZWN0JykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciB5ZWFycyA9IGR1cmF0aW9uLnllYXJzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLnllYXJzKSA6IDA7XG4gIHZhciBtb250aHMgPSBkdXJhdGlvbi5tb250aHMgPyB0b0ludGVnZXIoZHVyYXRpb24ubW9udGhzKSA6IDA7XG4gIHZhciB3ZWVrcyA9IGR1cmF0aW9uLndlZWtzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLndlZWtzKSA6IDA7XG4gIHZhciBkYXlzID0gZHVyYXRpb24uZGF5cyA/IHRvSW50ZWdlcihkdXJhdGlvbi5kYXlzKSA6IDA7XG4gIHZhciBob3VycyA9IGR1cmF0aW9uLmhvdXJzID8gdG9JbnRlZ2VyKGR1cmF0aW9uLmhvdXJzKSA6IDA7XG4gIHZhciBtaW51dGVzID0gZHVyYXRpb24ubWludXRlcyA/IHRvSW50ZWdlcihkdXJhdGlvbi5taW51dGVzKSA6IDA7XG4gIHZhciBzZWNvbmRzID0gZHVyYXRpb24uc2Vjb25kcyA/IHRvSW50ZWdlcihkdXJhdGlvbi5zZWNvbmRzKSA6IDA7IC8vIEFkZCB5ZWFycyBhbmQgbW9udGhzXG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVXaXRoTW9udGhzID0gbW9udGhzIHx8IHllYXJzID8gYWRkTW9udGhzKGRhdGUsIG1vbnRocyArIHllYXJzICogMTIpIDogZGF0ZTsgLy8gQWRkIHdlZWtzIGFuZCBkYXlzXG5cbiAgdmFyIGRhdGVXaXRoRGF5cyA9IGRheXMgfHwgd2Vla3MgPyBhZGREYXlzKGRhdGVXaXRoTW9udGhzLCBkYXlzICsgd2Vla3MgKiA3KSA6IGRhdGVXaXRoTW9udGhzOyAvLyBBZGQgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcblxuICB2YXIgbWludXRlc1RvQWRkID0gbWludXRlcyArIGhvdXJzICogNjA7XG4gIHZhciBzZWNvbmRzVG9BZGQgPSBzZWNvbmRzICsgbWludXRlc1RvQWRkICogNjA7XG4gIHZhciBtc1RvQWRkID0gc2Vjb25kc1RvQWRkICogMTAwMDtcbiAgdmFyIGZpbmFsRGF0ZSA9IG5ldyBEYXRlKGRhdGVXaXRoRGF5cy5nZXRUaW1lKCkgKyBtc1RvQWRkKTtcbiAgcmV0dXJuIGZpbmFsRGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1vbnRocyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNSBtb250aHMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgNSlcbiAqIC8vPT4gU3VuIEZlYiAwMSAyMDE1IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTW9udGhzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuXG4gIGlmIChpc05hTihhbW91bnQpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgbW9udGhzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgdmFyIGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKTsgLy8gVGhlIEpTIERhdGUgb2JqZWN0IHN1cHBvcnRzIGRhdGUgbWF0aCBieSBhY2NlcHRpbmcgb3V0LW9mLWJvdW5kcyB2YWx1ZXMgZm9yXG4gIC8vIG1vbnRoLCBkYXksIGV0Yy4gRm9yIGV4YW1wbGUsIG5ldyBEYXRlKDIwMjAsIDAsIDApIHJldHVybnMgMzEgRGVjIDIwMTkgYW5kXG4gIC8vIG5ldyBEYXRlKDIwMjAsIDEzLCAxKSByZXR1cm5zIDEgRmViIDIwMjEuICBUaGlzIGlzICphbG1vc3QqIHRoZSBiZWhhdmlvciB3ZVxuICAvLyB3YW50IGV4Y2VwdCB0aGF0IGRhdGVzIHdpbGwgd3JhcCBhcm91bmQgdGhlIGVuZCBvZiBhIG1vbnRoLCBtZWFuaW5nIHRoYXRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDMxKSB3aWxsIHJldHVybiAzIE1hciAyMDIxIG5vdCAyOCBGZWIgMjAyMSBhcyBkZXNpcmVkLiBTb1xuICAvLyB3ZSdsbCBkZWZhdWx0IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWQgbW9udGggYnkgYWRkaW5nIDEgdG8gdGhlIGRlc2lyZWRcbiAgLy8gbW9udGggYW5kIHVzaW5nIGEgZGF0ZSBvZiAwIHRvIGJhY2sgdXAgb25lIGRheSB0byB0aGUgZW5kIG9mIHRoZSBkZXNpcmVkXG4gIC8vIG1vbnRoLlxuXG4gIHZhciBlbmRPZkRlc2lyZWRNb250aCA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcbiAgZW5kT2ZEZXNpcmVkTW9udGguc2V0TW9udGgoZGF0ZS5nZXRNb250aCgpICsgYW1vdW50ICsgMSwgMCk7XG4gIHZhciBkYXlzSW5Nb250aCA9IGVuZE9mRGVzaXJlZE1vbnRoLmdldERhdGUoKTtcblxuICBpZiAoZGF5T2ZNb250aCA+PSBkYXlzSW5Nb250aCkge1xuICAgIC8vIElmIHdlJ3JlIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgbW9udGgsIHRoZW4gdGhpcyBpcyB0aGUgY29ycmVjdCBkYXRlXG4gICAgLy8gYW5kIHdlJ3JlIGRvbmUuXG4gICAgcmV0dXJuIGVuZE9mRGVzaXJlZE1vbnRoO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgd2Ugbm93IGtub3cgdGhhdCBzZXR0aW5nIHRoZSBvcmlnaW5hbCBkYXktb2YtbW9udGggdmFsdWUgd29uJ3RcbiAgICAvLyBjYXVzZSBhbiBvdmVyZmxvdywgc28gc2V0IHRoZSBkZXNpcmVkIGRheS1vZi1tb250aC4gTm90ZSB0aGF0IHdlIGNhbid0XG4gICAgLy8ganVzdCBzZXQgdGhlIGRhdGUgb2YgYGVuZE9mRGVzaXJlZE1vbnRoYCBiZWNhdXNlIHRoYXQgb2JqZWN0IG1heSBoYXZlIGhhZFxuICAgIC8vIGl0cyB0aW1lIGNoYW5nZWQgaW4gdGhlIHVudXN1YWwgY2FzZSB3aGVyZSB3aGVyZSBhIERTVCB0cmFuc2l0aW9uIHdhcyBvblxuICAgIC8vIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGggYW5kIGl0cyBsb2NhbCB0aW1lIHdhcyBpbiB0aGUgaG91ciBza2lwcGVkIG9yXG4gICAgLy8gcmVwZWF0ZWQgbmV4dCB0byBhIERTVCB0cmFuc2l0aW9uLiAgU28gd2UgdXNlIGBkYXRlYCBpbnN0ZWFkIHdoaWNoIGlzXG4gICAgLy8gZ3VhcmFudGVlZCB0byBzdGlsbCBoYXZlIHRoZSBvcmlnaW5hbCB0aW1lLlxuICAgIGRhdGUuc2V0RnVsbFllYXIoZW5kT2ZEZXNpcmVkTW9udGguZ2V0RnVsbFllYXIoKSwgZW5kT2ZEZXNpcmVkTW9udGguZ2V0TW9udGgoKSwgZGF5T2ZNb250aCk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNXaXRoaW5JbnRlcnZhbFxuICogQGNhdGVnb3J5IEludGVydmFsIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB3aXRoaW4gdGhlIGludGVydmFsPyAoSW5jbHVkaW5nIHN0YXJ0IGFuZCBlbmQuKVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgZnVuY3Rpb24gd2FzIHJlbmFtZWQgZnJvbSBgaXNXaXRoaW5SYW5nZWAgdG8gYGlzV2l0aGluSW50ZXJ2YWxgLlxuICogICBUaGlzIGNoYW5nZSB3YXMgbWFkZSB0byBtaXJyb3IgdGhlIHVzZSBvZiB0aGUgd29yZCBcImludGVydmFsXCIgaW4gc3RhbmRhcmQgSVNPIDg2MDE6MjAwNCB0ZXJtaW5vbG9neTpcbiAqXG4gKiAgIGBgYFxuICogICAyLjEuM1xuICogICB0aW1lIGludGVydmFsXG4gKiAgIHBhcnQgb2YgdGhlIHRpbWUgYXhpcyBsaW1pdGVkIGJ5IHR3byBpbnN0YW50c1xuICogICBgYGBcbiAqXG4gKiAgIEFsc28sIHRoaXMgZnVuY3Rpb24gbm93IGFjY2VwdHMgYW4gb2JqZWN0IHdpdGggYHN0YXJ0YCBhbmQgYGVuZGAgcHJvcGVydGllc1xuICogICBpbnN0ZWFkIG9mIHR3byBhcmd1bWVudHMgYXMgYW4gaW50ZXJ2YWwuXG4gKiAgIFRoaXMgZnVuY3Rpb24gbm93IHRocm93cyBgUmFuZ2VFcnJvcmAgaWYgdGhlIHN0YXJ0IG9mIHRoZSBpbnRlcnZhbCBpcyBhZnRlciBpdHMgZW5kXG4gKiAgIG9yIGlmIGFueSBkYXRlIGluIHRoZSBpbnRlcnZhbCBpcyBgSW52YWxpZCBEYXRlYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgaXNXaXRoaW5SYW5nZShcbiAqICAgICBuZXcgRGF0ZSgyMDE0LCAwLCAzKSxcbiAqICAgICBuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqICAgKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgaXNXaXRoaW5JbnRlcnZhbChcbiAqICAgICBuZXcgRGF0ZSgyMDE0LCAwLCAzKSxcbiAqICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KSB9XG4gKiAgIClcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0ludGVydmFsfSBpbnRlcnZhbCAtIHRoZSBpbnRlcnZhbCB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHdpdGhpbiB0aGUgaW50ZXJ2YWxcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IFRoZSBzdGFydCBvZiBhbiBpbnRlcnZhbCBjYW5ub3QgYmUgYWZ0ZXIgaXRzIGVuZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gRGF0ZSBpbiBpbnRlcnZhbCBjYW5ub3QgYmUgYEludmFsaWQgRGF0ZWBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBkYXRlIHdpdGhpbiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDMpLCB7XG4gKiAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgZW5kOiBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogfSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgaW50ZXJ2YWw6XG4gKiBpc1dpdGhpbkludGVydmFsKG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwge1xuICogICBzdGFydDogbmV3IERhdGUoMjAxNCwgMCwgMSksXG4gKiAgIGVuZDogbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBkYXRlIGVxdWFsIHRvIGludGVydmFsIHN0YXJ0OlxuICogaXNXaXRoaW5JbnRlcnZhbChkYXRlLCB7IHN0YXJ0LCBlbmQ6IGRhdGUgfSkgLy8gPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgZGF0ZSBlcXVhbCB0byBpbnRlcnZhbCBlbmQ6XG4gKiBpc1dpdGhpbkludGVydmFsKGRhdGUsIHsgc3RhcnQ6IGRhdGUsIGVuZCB9KSAvLyA9PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzV2l0aGluSW50ZXJ2YWwoZGlydHlEYXRlLCBpbnRlcnZhbCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWUgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBzdGFydFRpbWUgPSB0b0RhdGUoaW50ZXJ2YWwuc3RhcnQpLmdldFRpbWUoKTtcbiAgdmFyIGVuZFRpbWUgPSB0b0RhdGUoaW50ZXJ2YWwuZW5kKS5nZXRUaW1lKCk7IC8vIFRocm93IGFuIGV4Y2VwdGlvbiBpZiBzdGFydCBkYXRlIGlzIGFmdGVyIGVuZCBkYXRlIG9yIGlmIGFueSBkYXRlIGlzIGBJbnZhbGlkIERhdGVgXG5cbiAgaWYgKCEoc3RhcnRUaW1lIDw9IGVuZFRpbWUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgaW50ZXJ2YWwnKTtcbiAgfVxuXG4gIHJldHVybiB0aW1lID49IHN0YXJ0VGltZSAmJiB0aW1lIDw9IGVuZFRpbWU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuaW1wb3J0IGxvZ29JY29uIGZyb20gJy4vYXNzZXRzL2NoZWNrLWRlY2FncmFtLW91dGxpbmUuc3ZnJztcbmltcG9ydCB2ZXJ0aWNhbERvdHNJY29uIGZyb20gJy4vYXNzZXRzL2RvdHMtdmVydGljYWwuc3ZnJztcbmltcG9ydCBnaXRodWJJY29uIGZyb20gJy4vYXNzZXRzL0dpdEh1Yi1saWdodC0zMnB4LnBuZyc7XG5cbmltcG9ydCB7IFxuICAgIGNyZWF0ZUNoZWNrbGlzdEljb24sIFxuICAgIGRpc3BsYXlUYXNrcyxcbiAgICBzZXRUYXNrRmlsdGVyLFxuICAgIGNyZWF0ZUZvcm0sXG4gICAgY3JlYXRlV2Vla0ljb24sXG4gICAgY3JlYXRlUGFzdER1ZUljb24sXG4gICAgY3JlYXRlVG9kYXlJY29uLFxuICAgIGNyZWF0ZUFkZGl0aW9uSWNvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuXG5cbi8vIEluaXRpYWxpemF0aW9uIGZ1bmN0aW9uc1xuY29uc3QgX2NyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIFxuICAgIC8vIGRpc3BsYXkgbG9nb1xuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29JY29uO1xuICAgIGxvZ28udGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvZ28nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgXG4gICAgLy8gZGlzcGxheSB0aXRsZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUaGluZ3MgVG8gRG8nO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvLyBEUk9QRE9XTiBNRU5VXG4gICAgLy8gY3JlYXRlIG9wdGlvbnMgaWNvbiBjb250YWluZXIgYW5kIGRpc3BsYXkgaWNvblxuICAgIGNvbnN0IG9wdGlvbnNJY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3B0aW9uc0ljb25Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdvcHRpb25zSWNvbkNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG9wdGlvbnNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgb3B0aW9uc0ljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uIG9wdGlvbnNJY29uJyk7XG4gICAgLy9zaG93IGRyb3Bkb3duIGxpc3RlbmVyXG4gICAgb3B0aW9uc0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBvcHRpb25zSWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bkNvbnRhaW5lcicpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG4gICAgfSk7XG4gICAgb3B0aW9uc0ljb24uc3JjID0gdmVydGljYWxEb3RzSWNvbjtcbiAgICAvLyBjbG9zZSBkcm9wZG93biBpZiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSBvZiBpdFxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJy5vcHRpb25zSWNvbicpKSB7XG4gICAgICAgICAgICBjb25zdCBkcm9wZG93bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bkNvbnRhaW5lcicpXG4gICAgICAgICAgICBpZiAoZHJvcGRvd25Db250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uc0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3B0aW9uc0ljb24nKVxuICAgICAgICAgICAgaWYgKG9wdGlvbnNJY29uLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNJY29uLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICAvLyBjcmVhdGUgZHJvcGRvd24gY29udGFpbmVyIFxuICAgIGNvbnN0IGRyb3Bkb3duQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJvcGRvd25Db250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkcm9wZG93bkNvbnRhaW5lciBoaWRkZW4nKTtcblxuICAgIC8vIGNyZWF0ZSBkcm9wZG93biBvcHRpb25zXG4gICAgLy8gc2V0IGNvbXBsZXRlZCBmaWx0ZXJcbiAgICBjb25zdCBjb21wbGV0ZWRUb2dnbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29tcGxldGVkVG9nZ2xlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHJvcGRvd25JdGVtIGNvbXBsZXRlZFRhc2tzVG9nZ2xlJyk7ICAgIFxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tcGxldGVkRmlsdGVyJykgPT09ICdmYWxzZScpIHtcbiAgICAgICAgY29tcGxldGVkVG9nZ2xlLmlubmVyVGV4dCA9ICdIaWRlIGNvbXBsZXRlZCB0YXNrcydcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wbGV0ZWRUb2dnbGUuaW5uZXJUZXh0ID0gJ1Nob3cgY29tcGxldGVkIHRhc2tzJ1xuICAgIH1cbiAgICBjb21wbGV0ZWRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChjb21wbGV0ZWRUb2dnbGUuaW5uZXJUZXh0ID09PSAnU2hvdyBjb21wbGV0ZWQgdGFza3MnKSB7XG4gICAgICAgICAgICBjb21wbGV0ZWRUb2dnbGUuaW5uZXJUZXh0ID0gJ0hpZGUgY29tcGxldGVkIHRhc2tzJ1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbXBsZXRlZEZpbHRlcicsIGZhbHNlKVxuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wbGV0ZWRUb2dnbGUuaW5uZXJUZXh0ID0gJ1Nob3cgY29tcGxldGVkIHRhc2tzJ1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbXBsZXRlZEZpbHRlcicsIHRydWUpXG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBhcHBlbmRcbiAgICBkcm9wZG93bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRUb2dnbGUpXG4gICAgb3B0aW9uc0ljb25Db250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uc0ljb24pXG4gICAgb3B0aW9uc0ljb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZHJvcGRvd25Db250YWluZXIpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG9wdGlvbnNJY29uQ29udGFpbmVyKVxuICAgIFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuXG5jb25zdCBfY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcblxuICAgIC8vIE1haW4gbWVudVxuICAgIGNvbnN0IG1lbnVPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBtZW51T3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgXG4gICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFsbFRhc2tzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWxsVGFza3Mgc2VsZWN0ZWQnKTtcbiAgICBhbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNldFRhc2tGaWx0ZXIoYWxsVGFza3MsIGUpXG4gICAgICAgIGFsbFRhc2tzLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICB9KVxuICAgIGNyZWF0ZUNoZWNrbGlzdEljb24oYWxsVGFza3MpO1xuICAgIGNvbnN0IGFsbFRhc2tzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhbGxUYXNrc1RleHQudGV4dENvbnRlbnQgPSAnQWxsIHRhc2tzJztcbiAgICBhbGxUYXNrcy5hcHBlbmRDaGlsZChhbGxUYXNrc1RleHQpXG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoYWxsVGFza3MpO1xuXG4gICAgY29uc3QgZHVlVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGR1ZVRvZGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlVG9kYXknKTtcbiAgICBkdWVUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNldFRhc2tGaWx0ZXIoZHVlVG9kYXksIGUpXG4gICAgICAgIGR1ZVRvZGF5LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfSlcbiAgICBjcmVhdGVUb2RheUljb24oZHVlVG9kYXkpO1xuICAgIGNvbnN0IGR1ZVRvZGF5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkdWVUb2RheVRleHQuaW5uZXJUZXh0ID0gJ0R1ZSB0b2RheSc7XG4gICAgZHVlVG9kYXkuYXBwZW5kQ2hpbGQoZHVlVG9kYXlUZXh0KTtcbiAgICBtZW51T3B0aW9ucy5hcHBlbmRDaGlsZChkdWVUb2RheSk7XG5cbiAgICBjb25zdCBkdWVXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBkdWVXZWVrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlV2VlaycpO1xuICAgIGR1ZVdlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBzZXRUYXNrRmlsdGVyKGR1ZVdlZWssIGUpXG4gICAgICAgIGR1ZVdlZWsuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9KVxuICAgIGNyZWF0ZVdlZWtJY29uKGR1ZVdlZWspO1xuICAgIGNvbnN0IGR1ZVdlZWtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGR1ZVdlZWtUZXh0LmlubmVyVGV4dCA9ICdEdWUgdGhpcyB3ZWVrJztcbiAgICBkdWVXZWVrLmFwcGVuZENoaWxkKGR1ZVdlZWtUZXh0KTtcbiAgICBtZW51T3B0aW9ucy5hcHBlbmRDaGlsZChkdWVXZWVrKTtcblxuICAgIGNvbnN0IHBhc3REdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHBhc3REdWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwYXN0RHVlJyk7XG4gICAgcGFzdER1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNldFRhc2tGaWx0ZXIocGFzdER1ZSwgZSlcbiAgICAgICAgcGFzdER1ZS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIH0pXG4gICAgY3JlYXRlUGFzdER1ZUljb24ocGFzdER1ZSlcbiAgICBjb25zdCBwYXN0RHVlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwYXN0RHVlVGV4dC5pbm5lclRleHQgPSAnUGFzdCBkdWUnO1xuICAgIHBhc3REdWUuYXBwZW5kQ2hpbGQocGFzdER1ZVRleHQpO1xuICAgIG1lbnVPcHRpb25zLmFwcGVuZENoaWxkKHBhc3REdWUpO1xuXG5cbiAgICAvLyBQcm9qZWN0cyBtZW51XG4gICAgY29uc3QgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcHJvamVjdHNIZWFkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0c0hlYWRlcicpXG4gICAgcHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuXG4gICAgY29uc3QgcHJvamVjdHNNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBwcm9qZWN0c01lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIHByb2plY3RzTWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3RzTWVudScpO1xuXG5cbiAgICAvLyBHZW5lcmF0ZSBhZGQgcHJvamVjdCBidXR0b25cbiAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudU9wdGlvbnMnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRQcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkUHJvamVjdEJ0bicpXG4gICAgY3JlYXRlQWRkaXRpb25JY29uKGFkZFByb2plY3QpXG4gICAgY29uc3QgYWRkUHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWRkUHJvamVjdFRleHQuaW5uZXJUZXh0ID0gJ0FkZCBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RUZXh0KVxuICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdClcblxuXG4gICAgLy8gR2VuZXJhdGUgYW5kIGhpZGUgbmV3IHByb2plY3QgZm9ybVxuICAgIGNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkUHJvamVjdEZvcm0nKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpXG4gICAgYWRkUHJvamVjdEZvcm0ubWV0aG9kID0gJ2dldCc7XG4gICAgY3JlYXRlRm9ybShhZGRQcm9qZWN0Rm9ybSk7XG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Rm9ybSlcblxuXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51T3B0aW9ucyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0c01lbnUpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdENvbnRhaW5lcik7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKG1lbnUpO1xufVxuXG5cbmNvbnN0IF9jcmVhdGVDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudCcpO1xuXG4gICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50VGl0bGUnKTtcbiAgICBjb250ZW50VGl0bGUuaW5uZXJUZXh0ID0gJ0FsbCB0YXNrcyc7XG5cbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudU9wdGlvbnMnKTtcbiAgICB0YXNrQ29udGFpbmVyLmlubmVySFRNTCA9IFxuICAgICAgICBgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nY2hlY2tib3hDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSd0YXNrQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZGF0ZUNvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2VkaXRDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSd0YXNrQ2xvc2VDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHkgaWQ9J3Rhc2tMaXN0Jz48L3Rib2R5PmBcbiAgICBcblxuICAgIC8vIENyZWF0ZSBhZGQgdGFzayBidXR0b25cbiAgICBjb25zdCBhZGRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBhZGRUYXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudU9wdGlvbnMnKTtcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRUYXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkVGFza0J0bicpO1xuICAgIGNyZWF0ZUFkZGl0aW9uSWNvbihhZGRUYXNrKTtcbiAgICBjb25zdCBhZGRUYXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRUYXNrVGV4dC5pbm5lclRleHQgPSAnQWRkIHRhc2snO1xuICAgIGFkZFRhc2suYXBwZW5kQ2hpbGQoYWRkVGFza1RleHQpO1xuICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFzayk7XG5cbiAgICAvLyBHZW5lcmF0ZSBhbmQgaGlkZSBuZXcgdGFzayBmb3JtXG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRUYXNrRm9ybScpO1xuICAgIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICBhZGRUYXNrRm9ybS5tZXRob2QgPSAnZ2V0JztcbiAgICBjcmVhdGVGb3JtKGFkZFRhc2tGb3JtKTtcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0pO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuXG5jb25zdCBfY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG5cbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29weXJpZ2h0LnRleHRDb250ZW50ID0gYENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gamNhbXBiZWxsNTdgO1xuICBcbiAgICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdGh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vamNhbXBiZWxsNTcnO1xuICAgIGdpdGh1YkxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gIFxuICAgIGNvbnN0IG5ld0dpdGh1Ykljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdHaXRodWJJY29uLnNyYyA9IGdpdGh1Ykljb247XG4gICAgbmV3R2l0aHViSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2dpdGh1YicpO1xuXG4gICAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChuZXdHaXRodWJJY29uKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cblxuY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcbiAgICBfY3JlYXRlSGVhZGVyKCk7XG4gICAgX2NyZWF0ZU1lbnUoKTtcbiAgICBfY3JlYXRlQ29udGVudCgpO1xuICAgIF9jcmVhdGVGb290ZXIoKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZTsiLCJpbXBvcnQgY2hlY2tib3hCbGFuayBmcm9tICcuL2Fzc2V0cy9jaGVja2JveC1ibGFuay5zdmcnO1xuaW1wb3J0IGNoZWNrYm94TWFya2VkIGZyb20gJy4vYXNzZXRzL2NoZWNrYm94LW1hcmtlZC5zdmcnO1xuaW1wb3J0IGNoZWNrbGlzdCBmcm9tICcuL2Fzc2V0cy9jaGVja2xpc3Quc3ZnJztcbmltcG9ydCBjYWxlbmRhclRvZGF5IGZyb20gJy4vYXNzZXRzL2NhbGVuZGFyLXRvZGF5LnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJXZWVrIGZyb20gJy4vYXNzZXRzL2NhbGVuZGFyLXJhbmdlLnN2Zyc7XG5pbXBvcnQgcGFzdER1ZSBmcm9tICcuL2Fzc2V0cy9oaXN0b3J5LnN2Zyc7XG5pbXBvcnQgYWRkaXRpb25JY29uIGZyb20gJy4vYXNzZXRzL3BsdXMuc3ZnJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2Fzc2V0cy9lZGl0LnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2Fzc2V0cy9kZWxldGUuc3ZnJztcblxuaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7IGFkZCwgaXNXaXRoaW5JbnRlcnZhbCwgc3RhcnRPZkRheSB9IGZyb20gJ2RhdGUtZm5zJztcblxuXG5cbi8vIEljb24gJiBidXR0b24gZ2VuZXJhdG9ycyBcbmNvbnN0IF9jcmVhdGVDaGVja2JveEljb24gPSAodGQsIHRhc2ssIGkpID0+IHtcbiAgICBjb25zdCBjaGVja2JveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGNoZWNrYm94SWNvbi5zcmMgPSBjaGVja2JveE1hcmtlZFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrYm94SWNvbi5zcmMgPSBjaGVja2JveEJsYW5rO1xuICAgIH1cbiAgICBjaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gICAgY2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgIGNoZWNrYm94SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfbWFya0NvbXBsZXRlKGUpKVxuICAgIHRkLmFwcGVuZENoaWxkKGNoZWNrYm94SWNvbik7XG59IFxuXG5jb25zdCBjcmVhdGVDaGVja2xpc3RJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tsaXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoZWNrbGlzdEljb24uc3JjID0gY2hlY2tsaXN0O1xuICAgIGNoZWNrbGlzdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChjaGVja2xpc3RJY29uKTtcbn1cblxuY29uc3QgX2NyZWF0ZUVkaXRJY29uID0gKHRkLCBpKSA9PiB7XG4gICAgY29uc3QgbmV3RWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdFZGl0SWNvbi5zcmMgPSBlZGl0SWNvbjtcbiAgICBuZXdFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKTtcbiAgICBuZXdFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAvLyBldmVudCBsaXN0ZW5lciB0byBvcGVuIHRhc2sgY2FyZFxuICAgIG5ld0VkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9zaG93VGFza0NhcmQoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQobmV3RWRpdEljb24pO1xufVxuXG5jb25zdCBfY3JlYXRlRGVsZXRlSWNvbiA9IChjb250YWluZXIsIGkpID0+IHtcbiAgICAvLyBjcmVhdGUgaW1hZ2UgYW5kIGFzc2lnbiBhdHRyaWJ1dGVzXG4gICAgY29uc3QgbmV3RGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0RlbGV0ZUljb24uc3JjID0gZGVsZXRlSWNvbjtcbiAgICBuZXdEZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbiBkZWxldGVJdGVtJylcbiAgICBuZXdEZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICd0YXNrQ2xvc2VDb250YWluZXInKSB7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSB0YXNrXG4gICAgICAgIG5ld0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX2RlbGV0ZVRhc2soZSkpXG4gICAgfSBlbHNlIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAncHJvamVjdCcgfHwgXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdCcpKSB7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSBwcm9qZWN0XG4gICAgICAgIG5ld0RlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChgZGVsZXRlUHJvamVjdCR7aX1gKSAgICAgICAgXG4gICAgICAgIG5ld0RlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChgaGlkZGVuYCkgICAgICAgIFxuICAgICAgICBuZXdEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9kZWxldGVQcm9qZWN0KGUsIGkpKSAgICAgICAgXG4gICAgICAgIC8vIGRpc3BsYXkgdHJhc2ggaWNvbiBvbiBob3ZlclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZWxldGVQcm9qZWN0JHtpfWApXG4gICAgICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgfSlcbiAgICAgICAgLy8gaGlkZSB0cmFzaCBpY29uIFxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZWxldGVQcm9qZWN0JHtpfWApXG4gICAgICAgICAgICB0cmFzaEljb24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgfSkgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coY29udGFpbmVyKVxuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBzdHJhbmdlJyk7XG4gICAgfVxuICAgIC8vIGFwcGVuZCB0byBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGVsZXRlSWNvbilcbn1cblxuY29uc3QgY3JlYXRlQWRkaXRpb25JY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgbmV3QWRkaXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3QWRkaXRpb25JY29uLnNyYyA9IGFkZGl0aW9uSWNvbjtcbiAgICBuZXdBZGRpdGlvbkljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdBZGRpdGlvbkljb24pO1xufVxuXG5jb25zdCBjcmVhdGVUb2RheUljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBuZXdUb2RheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdUb2RheUljb24uc3JjID0gY2FsZW5kYXJUb2RheTtcbiAgICBuZXdUb2RheUljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdUb2RheUljb24pO1xufVxuXG5jb25zdCBjcmVhdGVXZWVrSWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IG5ld1dlZWtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3V2Vla0ljb24uc3JjID0gY2FsZW5kYXJXZWVrO1xuICAgIG5ld1dlZWtJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQobmV3V2Vla0ljb24pO1xufVxuXG5jb25zdCBjcmVhdGVQYXN0RHVlSWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IG5ld1Bhc3REdWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3UGFzdER1ZUljb24uc3JjID0gcGFzdER1ZTtcbiAgICBuZXdQYXN0RHVlSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKG5ld1Bhc3REdWVJY29uKTtcbn1cblxuY29uc3QgX2NyZWF0ZUFkZEJ1dHRvbiA9IChjb250YWluZXIsIGkpID0+IHtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRCdG4nKTtcbiAgICBhZGRCdG4uaW5uZXJUZXh0ID0gXCJzdWJtaXRcIjtcbiAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2FyZFJvdzMnKSkge1xuICAgICAgICAvLyBjb252ZXJ0IGNhcmQgdG8gZm9ybT8gYW5kIGNoYW5nZSB0aGlzIGV2ZW50IGxpc3RlbmVyIHRvIHRyaWdnZXIgd2hlbiBmb3JtIHN1Ym1pdHNcbiAgICAgICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX3N1Ym1pdFRhc2tDYXJkKGUpKVxuICAgIH0gZWxzZSBpZiAoaS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRQcm9qZWN0Rm9ybScpIHtcbiAgICAgICAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RBZGRCdG4nKTtcbiAgICB9IGVsc2UgaWYgKGkuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkVGFza0Zvcm0nKSB7XG4gICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QuYWRkKCd0YXNrQWRkQnRuJyk7XG4gICAgfTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbn1cblxuY29uc3QgX2NyZWF0ZUNhbmNlbEJ1dHRvbiA9IChjb250YWluZXIsIGkpID0+IHtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYW5jZWxCdG4nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgY2FuY2VsQnRuLmlubmVyVGV4dCA9IFwiY2FuY2VsXCI7XG4gICAgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdjYXJkUm93MycpIHtcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGlzcGxheVRhc2tzKGkpKVxuICAgIH07XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7ICAgXG59XG5cblxuXG4vLyBDb250YWluZXIgQU5EIGljb24gZ2VuZXJhdG9ycyAoRm9yIHRhc2sgbGlzdGluZyBhbmQgdGFzayBjYXJkKVxuY29uc3QgY3JlYXRlQ2hlY2tib3hDb250YWluZXIgPSAodHIsIHRhc2ssIGkpID0+IHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2hlY2tib3hDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2JveENvbnRhaW5lcicpO1xuICAgIF9jcmVhdGVDaGVja2JveEljb24oY2hlY2tib3hDb250YWluZXIsIHRhc2ssIGkpO1xuICAgIHRyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKTtcbn1cblxuY29uc3QgY3JlYXRlRGF0ZUNvbnRhaW5lciA9ICh0ciwgdGFzaywgaSkgPT4ge1xuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGRhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXRlQ29udGFpbmVyJyk7XG4gICAgLy90YXNrIGNhcmRcbiAgICBpZiAodHIuY2xhc3NMaXN0LmNvbnRhaW5zKCdlZGl0RGF0ZUNvbnRhaW5lcicpKSB7XG4gICAgICAgIGRhdGVDb250YWluZXIuaW5uZXJIVE1MID0gYDxpbnB1dCBjbGFzcz0ndGFza0NhcmRJbnB1dCB0YXNrQ2FyZERhdGUke2l9JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nZGF0ZScgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0YXNrQ2FyZERhdGUnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0YXNrQ2FyZERhdGUnIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nJHt0YXNrLmRhdGV9Jz5gXG4gICAgLy8gdGFzayBsaXN0aW5nXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb25seSBkaXNwbGF5IGR1ZSBkYXRlIGlmIHRoZXJlIGlzIG9uZVxuICAgICAgICBpZiAodGFzay5kYXRlID09PSAnJykge1xuICAgICAgICAgICAgZGF0ZUNvbnRhaW5lci5pbm5lclRleHQgPT09ICcnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRlQ29udGFpbmVyLmlubmVyVGV4dCA9IGAke2FkZChuZXcgRGF0ZSh0YXNrLmRhdGUpLCB7ZGF5czogMX0pLnRvTG9jYWxlRGF0ZVN0cmluZygpfWBcbiAgICAgICAgfVxuICAgIH1cbiAgICB0ci5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbn1cblxuY29uc3QgY3JlYXRlRGVsZXRlQ29udGFpbmVyID0gKHRyKSA9PiB7XG4gICAgLy90YXNrIGNhcmRcbiAgICBpZiAodHIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrJykgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNsb3NlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsb3NlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza0Nsb3NlQ29udGFpbmVyJyk7XG4gICAgICAgIF9jcmVhdGVEZWxldGVJY29uKGNsb3NlQ29udGFpbmVyKTtcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQoY2xvc2VDb250YWluZXIpO1xuICAgIC8vIHRhc2sgbGlzdGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNsb3NlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgY2xvc2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2xvc2VDb250YWluZXInKTtcbiAgICAgICAgX2NyZWF0ZURlbGV0ZUljb24oY2xvc2VDb250YWluZXIpO1xuICAgICAgICB0ci5hcHBlbmRDaGlsZChjbG9zZUNvbnRhaW5lcik7XG4gICAgfVxufVxuXG5cblxuLy8gRm9ybSBnZW5lcmF0b3JcbmNvbnN0IGNyZWF0ZUZvcm0gPSAoZm9ybSkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGZvcm1Sb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvdzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtUm93Jyk7XG4gICAgXG4gICAgY29uc3QgZm9ybVJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93Mi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm1Sb3cnKTtcbiAgICBmb3JtUm93Mi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvcm1CdXR0b25zJyk7XG5cbiAgICBjb25zdCBmb3JtUm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3czLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG5cbiAgICAvLyByb3cgb25lOiBhc3NpZ24gaW5wdXQgYWNjb3JkaW5nIHRvIGNsYXNzIG9mIGZvcm1cbiAgICAvLyByb3cgdGhyZWU6IGFzc2lnbiBlcnJvciBjbGFzcyBhbmQgdGV4dCBhY2NvcmRpbmcgdG8gY2xhc3Mgb2YgZm9ybVxuICAgIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZFByb2plY3RGb3JtJykge1xuICAgICAgICBmb3JtUm93MS5pbm5lckhUTUwgPSBcIjxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nbmV3UHJvamVjdElucHV0JyBuYW1lPSduZXdQcm9qZWN0SW5wdXQnPjwvaW5wdXQ+XCI7XG4gICAgICAgIGZvcm1Sb3czLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3UHJvakVycm9yQ29udGFpbmVyJyk7XG4gICAgICAgIGZvcm1Sb3czLmlubmVyVGV4dCA9ICdOYW1lIHlvdXIgcHJvamVjdCEnXG4gICAgfSBlbHNlIGlmIChmb3JtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2FkZFRhc2tGb3JtJykge1xuICAgICAgICBmb3JtUm93MS5pbm5lckhUTUwgPSBcIjxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nbmV3VGFza0lucHV0JyBuYW1lPSduZXdUYXNrSW5wdXQnPjwvaW5wdXQ+XCI7XG4gICAgICAgIGZvcm1Sb3czLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3VGFza0Vycm9yQ29udGFpbmVyJyk7XG4gICAgICAgIGZvcm1Sb3czLmlubmVyVGV4dCA9ICdOYW1lIHlvdXIgdGFzayEnXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgc3RyYW5nZScpXG4gICAgfVxuICAgIC8vIHJvdyB0d286IHN1Ym1pdCBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgICBfY3JlYXRlQWRkQnV0dG9uKGZvcm1Sb3cyLCBmb3JtKTtcbiAgICBfY3JlYXRlQ2FuY2VsQnV0dG9uKGZvcm1Sb3cyLCBmb3JtKTtcbiAgICAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Sb3cxKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Sb3cyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1Sb3czKTtcbn1cblxuXG5cblxuXG4vLyBET00gbW9kaWZpY2F0aW9uIGZ1bmN0aW9uc1xuXG4vLyBQUk9KRUNUU1xuLy8gRGlzcGxheSBlbnRpcmUgYXJyYXkgb2YgcHJvamVjdHMgdG8gbWVudVxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICAgIC8vIEdyYWIgcHJvamVjdHMgbWVudVxuICAgIGNvbnN0IHByb2plY3RzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0c01lbnUnKTtcblxuICAgIC8vIENsZWFyIHByb2plY3RzIG1lbnVcbiAgICBjb25zdCBvbGRQcm9qQ291bnQgPSBwcm9qZWN0c01lbnUuY2hpbGRFbGVtZW50Q291bnRcbiAgICBmb3IgKGxldCBpPTA7IGk8b2xkUHJvakNvdW50OyBpKyspIHtcbiAgICAgICAgcHJvamVjdHNNZW51LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHNpbmdsZSBwcm9qZWN0IHRvIG1lbnUgKGNhbGxlZCBiZWxvdylcbiAgICBjb25zdCBfZGlzcGxheVByb2plY3QgPSAobmV3UHJvaiwgaSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0YClcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKVxuICAgICAgICAvLyBhc3NpZ24gY2xhc3MgdG8gc2VsZWN0ZWQgcHJvamVjdCBcbiAgICAgICAgaWYgKG5ld1Byb2ouc2VsZWN0ZWQgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBldmVudCBsaXN0ZW5lciB0byBmaWx0ZXIgdGFza2xpc3QgYnkgcHJvamVjdCBuYW1lICAgICBcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBpZiBkZWxldGluZyBwcm9qZWN0LCBkbyBub3Qgc2V0IGZpbHRlclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlSXRlbScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldFRhc2tGaWx0ZXIobmV3UHJvamVjdENvbnRhaW5lcilcbiAgICAgICAgfSlcbiAgICBcbiAgICAgICAgY3JlYXRlQ2hlY2tsaXN0SWNvbihuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG5ld1Byb2plY3RUZXh0LnRleHRDb250ZW50ID0gbmV3UHJvai5uYW1lO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUZXh0KVxuICAgICAgICBfY3JlYXRlRGVsZXRlSWNvbihuZXdQcm9qZWN0Q29udGFpbmVyLCBpKTtcbiAgICAgICAgcHJvamVjdHNNZW51LmFwcGVuZENoaWxkKG5ld1Byb2plY3RDb250YWluZXIpO1xuICAgIH0gXG5cbiAgICAvLyBBcHBlbmQgYWxsIHRhc2tzIHRvIHRhc2tsaXN0XG4gICAgbGV0IGk9MFxuICAgIGNvbnN0IHN0b3JhZ2VQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2VQcm9qZWN0cycpKVxuICAgIHN0b3JhZ2VQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBfZGlzcGxheVByb2plY3QocHJvamVjdCwgaSlcbiAgICAgICAgaSsrXG4gICAgfSk7XG59XG5cblxuXG4vLyBEZWxldGUgcHJvamVjdFxuY29uc3QgX2RlbGV0ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIC8vIGdyYWIgYXJyYXlzIGZyb20gc3RvcmFnZVxuICAgIGNvbnN0IHN0b3JhZ2VQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2VQcm9qZWN0cycpKVxuICAgIGNvbnN0IHN0b3JhZ2VUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2VUYXNrcycpKVxuXG4gICAgLy8gSWRlbnRpZnkgcHJvamVjdCB0byBkZWxldGVcbiAgICBjb25zdCBkb29tZWRJbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCBkb29tZWROYW1lID0gc3RvcmFnZVByb2plY3RzW2Rvb21lZEluZGV4XS5uYW1lO1xuXG4gICAgLy8gZGVsZXRlIHByb2plY3RcbiAgICBzdG9yYWdlUHJvamVjdHMuc3BsaWNlKGRvb21lZEluZGV4LCAxKTtcblxuICAgIC8vIGRlbGV0ZSBhbGwgdGFza3MgaW4gZG9vbWVkIHByb2plY3RcbiAgICAvLyBjb3VsZCBjaGFuZ2UgZnJvbSBzcGxpY2UgdG8gZGVsZXRlZCBwcm9wZXJ5IHdpdGggaGlkZGVuIGNsYXNzIHRvIHVzZSBpbiBzdGF0cyB0YWJsZSB3aXRoIGNvbXBsZXRlZCBwcm9wZXJ0eSAvL1xuICAgIC8vIG1hcmsgdGFza3MgZm9yIGRlbGV0aW9uXG4gICAgc3RvcmFnZVRhc2tzLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh0YXNrLnByb2plY3QgPT09IGRvb21lZE5hbWUpIHtcbiAgICAgICAgICAgIC8vIHdpbGwgZGVsZXRlIGFmdGVyIGxvb3AgYXMgdG8gbm90IG1ha2UgZXJyb3JzXG4gICAgICAgICAgICB0YXNrcy50b0RlbGV0ZS5wdXNoKHRhc2submFtZSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy8gZGVsZXRlIG1hcmtlZCB0YXNrc1xuICAgIHRhc2tzLnRvRGVsZXRlLmZvckVhY2goZG9vbWVkVGFzayA9PiB7XG4gICAgICAgIHN0b3JhZ2VUYXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2submFtZSA9PT0gZG9vbWVkVGFzaykge1xuICAgICAgICAgICAgICAgIHN0b3JhZ2VUYXNrcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSkgXG4gICAgLy8gY2xlYXIgdGVEZWxldGUgYXJyYXkgXG4gICAgdGFza3MudG9EZWxldGUgPSBbXTtcblxuICAgIC8vIHNldCBjaGFuZ2VzIHRvIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yYWdlVGFza3MnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlVGFza3MpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmFnZVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVByb2plY3RzKSk7XG5cblxuICAgIC8vIElmIGRvb21lZCBwcm9qZWN0IHdhcyBzZWxlY3RlZCwgcmV2ZXJ0IHRhc2tsaXN0IHRvIGFsbCB0YXNrc1xuICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VGl0bGUnKTtcbiAgICBjb25zdCBhbGxUYXNrc0NsYXNzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGxUYXNrcycpLmNsYXNzTGlzdFxuICAgIGlmIChjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPT09IGRvb21lZE5hbWUpIHtcbiAgICAgICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gJ0FsbCB0YXNrcycgXG4gICAgICAgIGFsbFRhc2tzQ2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKVxuICAgIH1cblxuICAgIC8vIHJlZnJlc2ggdGFza2xpc3RcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuXG5cblxuXG4vLyBUQVNLU1xuLy8gRGlzcGxheSBlbnRpcmUgYXJyYXkgb2YgdGFza3MgdG8gdGFza2xpc3RcbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgpID0+IHtcblxuICAgIC8vIEdyYWIgdGFza2xpc3RcbiAgICBjb25zdCB0YXNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpO1xuICAgIFxuICAgIC8vIGNsZWFyIHRhc2tsaXN0XG4gICAgY29uc3Qgb2xkVGFza0NvdW50ID0gdGFza2xpc3QuY2hpbGRFbGVtZW50Q291bnRcbiAgICBmb3IgKGxldCBpPTA7IGk8b2xkVGFza0NvdW50OyBpKyspIHtcbiAgICAgICAgdGFza2xpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG5cbiAgICAvLyBBZGQgc2luZ2xlIHRhc2sgdG8gdGFza2xpc3QgZGlzcGxheVxuICAgIGNvbnN0IF9jcmVhdGVUYXNrTGlzdGluZyA9ICh0YXNrLCBpKSA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSB0YXNrIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBuZXdMaXN0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgbmV3TGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2sgbGlzdGluZyR7aX1gKTtcbiAgICAgICAgLy8gY29tcGxldGUgZmlsdGVyIHRvIGFzc2lnbiBjbGFzc1xuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBuZXdMaXN0aW5nLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJylcbiAgICAgICAgfVxuICAgICAgICAvLyBhc3NpZ24gcHJpb3JpdHkgY2xhc3NcbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICcxJykge1xuICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdoaWdoUHJpb3JpdHknKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnMicpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnbWVkaXVtUHJpb3JpdHknKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnMycpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnbG93UHJpb3JpdHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFzc2lnbiBwYXN0IGR1ZSBjbGFzcyAoZm9yIGRhcmtyZWQgZm9udCBjb2xvcilcbiAgICAgICAgaWYgKG5ldyBEYXRlKCkgLSBuZXcgRGF0ZSh0YXNrLmRhdGUpID4gMCkge1xuICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCd0YXNrUGFzdER1ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3TGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCBjaGVja2JveFxuICAgICAgICBjcmVhdGVDaGVja2JveENvbnRhaW5lcihuZXdMaXN0aW5nLCB0YXNrLCBpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCB0YXNrXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGFza0NvbnRhaW5lciR7aX1gKTtcbiAgICAgICAgLy8gY29tcGxldGUgZmlsdGVyIGZvciBzdHJpa2V0aHJvdWdoXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wbGV0ZScpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJUZXh0ID0gYCR7dGFzay5uYW1lfWA7XG4gICAgICAgIG5ld0xpc3RpbmcuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gYWRkIGRhdGVcbiAgICAgICAgY3JlYXRlRGF0ZUNvbnRhaW5lcihuZXdMaXN0aW5nLCB0YXNrKTtcblxuICAgICAgICAvLyBhZGQgZWRpdCBidXR0b25cbiAgICAgICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGVkaXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0Q29udGFpbmVyJyk7XG4gICAgICAgIF9jcmVhdGVFZGl0SWNvbihlZGl0Q29udGFpbmVyLCBpKTtcbiAgICAgICAgbmV3TGlzdGluZy5hcHBlbmRDaGlsZChlZGl0Q29udGFpbmVyKTtcblxuICAgICAgICAvLyBhZGQgZGVsZXRlIGJ1dHRvblxuICAgICAgICBjcmVhdGVEZWxldGVDb250YWluZXIobmV3TGlzdGluZyk7XG5cbiAgICAgICAgLy9hcHBlbmQgdGFzayB0byB0YXNrbGlzdFxuICAgICAgICB0YXNrbGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0aW5nKTtcblxuXG5cbiAgICAgICAgLy8gc2V0IGRpc3BsYXkgZmlsdGVyXG5cbiAgICAgICAgLy8gY29tcGxldGVkXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFRhc2tzVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXBsZXRlZFRhc2tzVG9nZ2xlJylcbiAgICAgICAgLy8gY2hlY2sgdG8gc2VlIGlmIGNvbXBsZXRlZCB0YXNrcyBzaG91bGQgYmUgZGlzcGxheWVkXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29tcGxldGVkRmlsdGVyJykgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgLy8gaGlkZSBjb21wbGV0ZWQgdGFza3NcbiAgICAgICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICBuZXdMaXN0aW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBEQVRFIEZJTFRFUlNcbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpLnRleHRDb250ZW50XG4gICAgICAgIC8vIEFsbCB0YXNrc1xuICAgICAgICBpZiAoZmlsdGVyID09PSAnQWxsIHRhc2tzJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIC8vIER1ZSBUb2RheVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gJ0R1ZSB0b2RheScpIHtcbiAgICAgICAgICAgIC8vIGhpZGUgaWYgbm8gZHVlIGRhdGVcbiAgICAgICAgICAgIGlmICh0YXNrLmRhdGUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGdyYWIgdG9kYXkncyBkYXRlIGFuZCB0YXNrIGRhdGVcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUodGFzay5kYXRlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBoaWRlIGlmIG5vdCBkdWUgdG9kYXlcbiAgICAgICAgICAgIGlmICh0b2RheS5nZXRNb250aCgpICE9PSB0YXNrRGF0ZS5nZXRNb250aCgpIHx8XG4gICAgICAgICAgICAgICAgdG9kYXkuZ2V0RGF0ZSgpIC0gMSAhPT0gdGFza0RhdGUuZ2V0RGF0ZSgpIHx8XG4gICAgICAgICAgICAgICAgdG9kYXkuZ2V0RnVsbFllYXIoKSAhPT0gdGFza0RhdGUuZ2V0RnVsbFllYXIoKSApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIER1ZSB0aGlzIHdlZWtcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09ICdEdWUgdGhpcyB3ZWVrJykge1xuXG4gICAgICAgICAgICAvLyBoaWRlIGlmIG5vIGR1ZSBkYXRlXG4gICAgICAgICAgICBpZiAodGFzay5kYXRlID09PSAnJykge1xuICAgICAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBncmFiIHdlZWsgZGF0ZXMgYW5kIHRhc2sgZHVlIGRhdGUgZGF0ZVxuICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBzdGFydE9mRGF5KG5ldyBEYXRlKCkpXG4gICAgICAgICAgICBjb25zdCBlbmRPZldlZWsgPSBhZGQodG9kYXksIHtkYXlzOiA3fSlcbiAgICAgICAgICAgIC8vIG1pZG5pZ2h0IGR1ZSBkYXRlXG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGFkZChzdGFydE9mRGF5KG5ldyBEYXRlKHRhc2suZGF0ZSkpLCB7ZGF5czogMSwgaG91cnM6IDIzLCBtaW51dGVzOiA1OX0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGhpZGUgaWYgbm90IGR1ZSB0aGlzIHdlZWtcbiAgICAgICAgICAgIGlmIChpc1dpdGhpbkludGVydmFsKHRhc2tEYXRlLCB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IHRvZGF5LFxuICAgICAgICAgICAgICAgIGVuZDogZW5kT2ZXZWVrLFxuICAgICAgICAgICAgfSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gaGlkZSBpZiBubyBkdWUgZGF0ZVxuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSAnUGFzdCBkdWUnKSB7XG4gICAgICAgICAgICAvLyBQYXN0IGR1ZSBcbiAgICAgICAgICAgIGlmICh0YXNrLmRhdGUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIGhpZGUgaWYgbm90IHBhc3QgZHVlXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ldyBEYXRlKCkgLSBuZXcgRGF0ZSh0YXNrLmRhdGUpIDwgMCkge1xuICAgICAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gcHJvamVjdCBmaWx0ZXJcbiAgICAgICAgLy8gZ3JhYiBwcm9qZWN0cyBhcnJheSBmcm9tIHN0b3JhZ2VcbiAgICAgICAgY29uc3Qgc3RvcmFnZVByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmFnZVByb2plY3RzJykpXG4gICAgICAgIC8vIGFwcGx5IGZpbHRlclxuICAgICAgICBzdG9yYWdlUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IGZpbHRlcikge1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLnByb2plY3QgIT09IGZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICBuZXdMaXN0aW5nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIH07ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyBzZXQgcHJvamVjdHMgYXJyYXkgYmFjayBpbnRvIGxvY2FsU3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmFnZVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVByb2plY3RzKSlcbiAgICB9XG4gICAgXG5cbiAgICAvLyBDcmVhdGUgYW5kIGhpZGUgdGFzayBjYXJkIGluIHRhc2tsaXN0IGRpc3BsYXlcbiAgICBjb25zdCBfY3JlYXRlVGFza0NhcmQgPSAodGFzaywgaSkgPT4ge1xuICAgICAgICAvLyBDUkVBVEUgVEFTSyBDQVJEXG4gICAgICAgIGNvbnN0IG5ld0NhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpXG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrIGNhcmQke2l9YCk7XG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGBoaWRkZW5gKTtcblxuICAgICAgICAvLyBjb21wbGV0ZSBmaWx0ZXIgdG8gYXNzaWduIGNsYXNzXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIG5ld0NhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxuICAgICAgICB9ICAgICAgIFxuXG4gICAgICAgIC8vIGFzc2lnbiBwcmlvcml0eSBjbGFzc1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJzEnKSB7XG4gICAgICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZ2hQcmlvcml0eScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICcyJykge1xuICAgICAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZWRpdW1Qcmlvcml0eScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICczJykge1xuICAgICAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb3dQcmlvcml0eScpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgZm9ybSBjb250YWluZXIgXG4gICAgICAgIGNvbnN0IG5ld0NhcmRGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcblxuICAgICAgICAvLyBDcmVhdGUgZm9ybVxuICAgICAgICBjb25zdCBlZGl0Q2FyZEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIGVkaXRDYXJkRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgICAgIGVkaXRDYXJkRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSB0Ym9keVxuICAgICAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gICAgICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0NhcmQnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBsZWdlbmRcbiAgICAgICAgY29uc3QgdGFza0NhcmRMZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgICAgICAgLy8gdGFza0NhcmRMZWdlbmQuaW5uZXJUZXh0ID0gJ01vZGlmeSB0YXNrJ1xuXG4gICAgICAgIC8vIEZpcnN0IHJvd1xuICAgICAgICBjb25zdCBjYXJkUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkUm93MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3cgY2FyZFJvdzEnKVxuICAgICAgICAvLyBhZGQgdGFzayBuYW1lIGlucHV0XG4gICAgICAgIGNvbnN0IHRhc2tJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrSW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrSW5wdXRDb250YWluZXJgKTtcbiAgICAgICAgdGFza0lucHV0Q29udGFpbmVyLmlubmVySFRNTCA9IGA8bGFiZWwgZm9yPSd0YXNrQ2FyZFRhc2snPlRhc2s6PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz0ndGFza0NhcmRJbnB1dCB0YXNrQ2FyZFRhc2ske2l9JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ndGFza0NhcmRUYXNrJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0YXNrQ2FyZFRhc2snIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScke3Rhc2submFtZX0nPjwvaW5wdXQ+YDtcbiAgICAgICAgY2FyZFJvdzEuYXBwZW5kQ2hpbGQodGFza0lucHV0Q29udGFpbmVyKTtcbiAgICAgICAgLy8gYWRkIGRhdGUgaW5wdXRcbiAgICAgICAgY29uc3QgZWRpdERhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWRpdERhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBlZGl0RGF0ZUNvbnRhaW5lcmApO1xuICAgICAgICBlZGl0RGF0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIjxsYWJlbCBmb3I9J3Rhc2tDYXJkRGF0ZSc+RHVlIGRhdGU6PC9sYWJlbD5cIjtcbiAgICAgICAgY3JlYXRlRGF0ZUNvbnRhaW5lcihlZGl0RGF0ZUNvbnRhaW5lciwgdGFzaywgaSk7XG4gICAgICAgIGNhcmRSb3cxLmFwcGVuZENoaWxkKGVkaXREYXRlQ29udGFpbmVyKTtcblxuXG5cbiAgICAgICAgLy8gU2Vjb25kIHJvdyBcbiAgICAgICAgY29uc3QgY2FyZFJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZFJvdzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkUm93IGNhcmRSb3cyJylcbiAgICAgICAgXG4gICAgICAgIC8vIHByb2plY3QgaW5wdXQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0SW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0SW5wdXRDb250YWluZXInKTtcbiAgICAgICAgcHJvamVjdElucHV0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiPGxhYmVsIGZvcj0ndGFza0NhcmRQcm9qZWN0Jz5Qcm9qZWN0OjwvbGFiZWw+XCI7XG5cbiAgICAgICAgLy8gY3JlYXRlIHByb2plY3QgZHJvcGRvd24gXG4gICAgICAgIGNvbnN0IHByb2plY3REcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAgIHByb2plY3REcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2tDYXJkSW5wdXQgdGFza0NhcmRQcm9qZWN0JHtpfWApXG4gICAgICAgIHByb2plY3REcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tDYXJkUHJvamVjdCcpXG4gICAgICAgIHByb2plY3REcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFza0NhcmRQcm9qZWN0JylcbiAgICAgICAgcHJvamVjdERyb3Bkb3duLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt0YXNrLnByb2plY3R9YClcblxuICAgICAgICAvLyBjcmVhdGUgcHJvamVjdCBkcm9wZG93biBvcHRpb25zXG4gICAgICAgIC8vIGJsYW5rIG9wdGlvbiBmb3Igbm8gcHJvamVjdFxuICAgICAgICBjb25zdCBibGFua1Byb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBibGFua1Byb2plY3RPcHRpb24udmFsdWUgPSAnJ1xuICAgICAgICBibGFua1Byb2plY3RPcHRpb24udGV4dCA9ICcnXG4gICAgICAgIHByb2plY3REcm9wZG93bi5hcHBlbmRDaGlsZChibGFua1Byb2plY3RPcHRpb24pXG4gICAgICAgIC8vIHJlbWFpbmluZyBvcHRpb25zIGdlbmVyYXRlZCBmcm9tIHByb2plY3RzIGFycmF5XG4gICAgICAgIGNvbnN0IHN0b3JhZ2VQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2VQcm9qZWN0cycpKVxuICAgICAgICBzdG9yYWdlUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IGAke3Byb2plY3QubmFtZX1gXG4gICAgICAgICAgICBwcm9qZWN0T3B0aW9uLnRleHQgPSBgJHtwcm9qZWN0Lm5hbWV9YFxuICAgICAgICAgICAgaWYgKHRhc2sucHJvamVjdCA9PT0gcHJvamVjdC5uYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REcm9wZG93bilcbiAgICAgICAgY2FyZFJvdzIuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0Q29udGFpbmVyKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gcHJpb3JpdHkgaW5wdXQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5SW5wdXRDb250YWluZXInKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBcIjxsYWJlbCBmb3I9J3Rhc2tDYXJkUHJpb3JpdHknPlByaW9yaXR5OjwvbGFiZWw+XCI7XG5cbiAgICAgICAgLy8gY3JlYXRlIHByaW9yaXR5IGRyb3Bkb3duIFxuICAgICAgICBjb25zdCBwcmlvcml0eURyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2tDYXJkSW5wdXQgdGFza0NhcmRQcmlvcml0eSR7aX1gKVxuICAgICAgICBwcmlvcml0eURyb3Bkb3duLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0NhcmRQcmlvcml0eScpXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2tDYXJkUHJpb3JpdHknKVxuICAgICAgICBwcmlvcml0eURyb3Bkb3duLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt0YXNrLnByaW9yaXR5fWApXG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgcHJpb3JpdHkgZHJvcGRvd24gb3B0aW9uc1xuICAgICAgICAvLyBoaWdoIHByaW9yaXR5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByaW9yaXR5SGlnaC52YWx1ZSA9ICcxJ1xuICAgICAgICBwcmlvcml0eUhpZ2gudGV4dCA9ICdIaWdoJ1xuICAgICAgICAvLyBtZWRpdW0gcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBwcmlvcml0eU1lZGl1bS52YWx1ZSA9ICcyJ1xuICAgICAgICBwcmlvcml0eU1lZGl1bS50ZXh0ID0gJ01lZGl1bSdcbiAgICAgICAgLy8gbG93IHByaW9yaXR5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgcHJpb3JpdHlMb3cudmFsdWUgPSAnMydcbiAgICAgICAgcHJpb3JpdHlMb3cudGV4dCA9ICdMb3cnXG4gICAgICAgIFxuICAgICAgICAvLyBwcmlvcml0eSBzZWxlY3Rpb25cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICcxJykge1xuICAgICAgICBwcmlvcml0eUhpZ2guc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICczJykge1xuICAgICAgICBwcmlvcml0eUxvdy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBcbiAgICAgICAgcHJpb3JpdHlNZWRpdW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgLy8gYXBwZW5kIHByaW9yaXR5IGlucHV0IHRvIHJvd1xuICAgICAgICBwcmlvcml0eURyb3Bkb3duLmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaCk7XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlNZWRpdW0pO1xuICAgICAgICBwcmlvcml0eURyb3Bkb3duLmFwcGVuZENoaWxkKHByaW9yaXR5TG93KTsgICAgICAgIFxuICAgICAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5RHJvcGRvd24pOyAgICAgICAgXG4gICAgICAgIGNhcmRSb3cyLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXRDb250YWluZXIpO1xuXG5cblxuICAgICAgICAvLyBUaGlyZCByb3cgXG4gICAgICAgIGNvbnN0IGNhcmRSb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRSb3czLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZFJvdyBjYXJkUm93MycpXG4gICAgICAgIF9jcmVhdGVBZGRCdXR0b24oY2FyZFJvdzMsIGkpO1xuICAgICAgICBfY3JlYXRlQ2FuY2VsQnV0dG9uKGNhcmRSb3czLCBgJHtpfWApO1xuXG5cblxuICAgICAgICAvLyBhcHBlbmQgdGFzayBjYXJkIHRvIHRhc2tsaXN0XG4gICAgICAgIHRhc2tDYXJkTGVnZW5kLmFwcGVuZENoaWxkKGNhcmRSb3cxKTtcbiAgICAgICAgdGFza0NhcmRMZWdlbmQuYXBwZW5kQ2hpbGQoY2FyZFJvdzIpO1xuICAgICAgICB0YXNrQ2FyZExlZ2VuZC5hcHBlbmRDaGlsZChjYXJkUm93Myk7XG4gICAgICAgIFxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ2FyZExlZ2VuZCk7XG5cbiAgICAgICAgLy8gZWRpdENhcmRGb3JtLmFwcGVuZENoaWxkKG5ld1RoZWFkKTtcbiAgICAgICAgZWRpdENhcmRGb3JtLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblxuICAgICAgICBuZXdDYXJkRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0Q2FyZEZvcm0pO1xuXG4gICAgICAgIC8vIENyZWF0ZSBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNyZWF0ZURlbGV0ZUNvbnRhaW5lcihuZXdDYXJkRm9ybUNvbnRhaW5lcik7XG5cbiAgICAgICAgXG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZEZvcm1Db250YWluZXIpO1xuXG4gICAgICAgIHRhc2tsaXN0LmFwcGVuZENoaWxkKG5ld0NhcmRDb250YWluZXIpO1xuICAgIH1cbiAgICBcblxuXG4gICAgLy8gc29ydCB0YXNrcyBieSBkdWUgZGF0ZSB0aGVuIHByaW9yaXR5XG4gICAgY29uc3Qgc3RvcmFnZVRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmFnZVRhc2tzJykpXG4gICAgc3RvcmFnZVRhc2tzLnNvcnQoKHRhc2tBLCB0YXNrQikgPT4ge1xuICAgICAgICBpZiAobmV3IERhdGUodGFza0EuZGF0ZSkgLSBuZXcgRGF0ZSh0YXNrQi5kYXRlKSAhPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRhc2tBLmRhdGUpIC0gbmV3IERhdGUodGFza0IuZGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGFza0EucHJpb3JpdHkgLSB0YXNrQi5wcmlvcml0eTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy8gc2V0IHRhc2sgYXJyYXkgYmFjayBpbnRvIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yYWdlVGFza3MnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlVGFza3MpKTtcblxuXG5cbiAgICAvLyBhcHBlbmQgYWxsIHRhc2tzIHRvIHRhc2tsaXN0XG4gICAgbGV0IGk9MFxuICAgIHN0b3JhZ2VUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBfY3JlYXRlVGFza0xpc3RpbmcodGFzaywgaSk7XG4gICAgICAgIF9jcmVhdGVUYXNrQ2FyZCh0YXNrLCBpKTtcbiAgICAgICAgaSsrXG4gICAgfSk7XG59XG5cblxuXG5cblxuLy8gQ29tcGxldGUgdGFza1xuY29uc3QgX21hcmtDb21wbGV0ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza0lEID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIC8vIE5FV1xuICAgIGNvbnN0IHN0b3JhZ2VUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2VUYXNrcycpKVxuICAgIGlmIChzdG9yYWdlVGFza3NbdGFza0lEXS5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIC8vbWFyayB0YXNrIGluY29tcGxldGVcbiAgICAgICAgc3RvcmFnZVRhc2tzW3Rhc2tJRF0uY29tcGxldGUgPSAnZmFsc2UnXG4gICAgfSBlbHNlIGlmIChzdG9yYWdlVGFza3NbdGFza0lEXS5jb21wbGV0ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAvL21hcmsgdGFzayBjb21wbGV0ZVxuICAgICAgICBzdG9yYWdlVGFza3NbdGFza0lEXS5jb21wbGV0ZSA9ICd0cnVlJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHN0cmFuZ2UnKVxuICAgIH1cbiAgICAvLyBzZXQgdGFzayBhcnJheSBiYWNrIGludG8gbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JhZ2VUYXNrcycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VUYXNrcykpO1xuICAgIGRpc3BsYXlUYXNrcygpO1xufVxuXG4vLyBTaG93IHRhc2sgY2FyZFxuY29uc3QgX3Nob3dUYXNrQ2FyZCA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza0lEID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIC8vIHJlZnJlc2ggdGFza2xpc3QgdG8gY2xvc2Ugb3RoZXIgdGFzayBjYXJkcyAob3B0aW9uYWwgYnV0IGxvb2tzIGNsZWFuZXIpXG4gICAgZGlzcGxheVRhc2tzKCk7XG4gICAgLy8gc2hvdyB0YXNrIGNhcmRcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkJHt0YXNrSUR9YCk7XG4gICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tJRH1gKTtcbiAgICAvL2hpZGUgdGFzayBsaXN0aW5nXG4gICAgY29uc3QgdGFza0xpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlzdGluZyR7dGFza0lEfWApO1xuICAgIHRhc2tMaXN0aW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG59XG5cbmNvbnN0IF9zdWJtaXRUYXNrQ2FyZCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhc2tJRCA9IChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykpIFxuXG4gICAgLy8gR2V0IGlucHV0IHZhbHVlc1xuICAgIGNvbnN0IHVwZGF0ZWROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tDYXJkVGFzayR7dGFza0lEfWApLnZhbHVlXG4gICAgY29uc3QgdXBkYXRlZERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza0NhcmREYXRlJHt0YXNrSUR9YCkudmFsdWVcbiAgICBjb25zdCB1cGRhdGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrQ2FyZFByb2plY3Qke3Rhc2tJRH1gKS52YWx1ZVxuICAgIGNvbnN0IHVwZGF0ZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrQ2FyZFByaW9yaXR5JHt0YXNrSUR9YCkudmFsdWVcblxuICAgIC8vIGdyYWIgdXBkYXRlZCB0YXNrIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgY29uc3Qgc3RvcmFnZVRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmFnZVRhc2tzJykpXG4gICAgdmFyIHVwZGF0ZWRUYXNrID0gc3RvcmFnZVRhc2tzW3Rhc2tJRF1cbiAgICAvLyBBcHBseSBpbnB1dCB2YWx1ZXMgdG8gdGFzayBvYmplY3RcbiAgICB1cGRhdGVkVGFzay5uYW1lID0gdXBkYXRlZE5hbWVcbiAgICB1cGRhdGVkVGFzay5kYXRlID0gdXBkYXRlZERhdGVcbiAgICB1cGRhdGVkVGFzay5wcm9qZWN0ID0gdXBkYXRlZFByb2plY3RcbiAgICB1cGRhdGVkVGFzay5wcmlvcml0eSA9IHVwZGF0ZWRQcmlvcml0eVxuICAgIC8vIHNldCB0YXNrIGFycmF5IGJhY2sgaW50byBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmFnZVRhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVRhc2tzKSlcbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuLy8gRGVsZXRlIHRhc2tcbmNvbnN0IF9kZWxldGVUYXNrID0gKGUpID0+IHtcbiAgICBsZXQgZG9vbWVkSW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIC8vIE5FV1xuICAgIGNvbnN0IHN0b3JhZ2VUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2VUYXNrcycpKVxuICAgIC8vIHJlbW92ZSB0YXNrIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgc3RvcmFnZVRhc2tzLnNwbGljZShkb29tZWRJbmRleCwgMSk7XG4gICAgLy8gc2V0IHRhc2sgYXJyYXkgYmFjayBpbnRvIGxvY2FsU3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yYWdlVGFza3MnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlVGFza3MpKVxuICAgIC8vIHJlZnJlc2ggdGFza2xpc3RcbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuXG5cblxuXG4vLyBUQVNLIERJU1BMQVkgT1BUSU9OU1xuXG4vLyBob3cgaXMgdGhpcyBiZWluZyBza2lwcGVkIHdoZW4gY2xpY2tpbmcgb24gZGVsZXRlIGljb24/P1xuY29uc3Qgc2V0VGFza0ZpbHRlciA9IChjb250YWluZXIsIGUpID0+IHsgICBcblxuICAgIC8vIHNldCBjb250ZW50IHRpdGxlIChmaWx0ZXIpXG4gICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpXG4gICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gY29udGFpbmVyLmlubmVyVGV4dFxuXG4gICAgLy8gZGVzZWxlY3QgYW55IG1lbnUgZmlsdGVyIFxuICAgIGNvbnN0IGFsbFRhc2tzQ2xhc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbFRhc2tzJykuY2xhc3NMaXN0XG4gICAgY29uc3QgZHVlVG9kYXlDbGFzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlVG9kYXknKS5jbGFzc0xpc3RcbiAgICBjb25zdCBkdWVXZWVrQ2xhc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZVdlZWsnKS5jbGFzc0xpc3RcbiAgICBjb25zdCBwYXN0RHVlQ2xhc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhc3REdWUnKS5jbGFzc0xpc3RcbiAgICBpZiAoYWxsVGFza3NDbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgYWxsVGFza3NDbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgfSBpZiAoZHVlVG9kYXlDbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgZHVlVG9kYXlDbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgfSBpZiAoZHVlV2Vla0NsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICBkdWVXZWVrQ2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgIH0gaWYgKHBhc3REdWVDbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHtcbiAgICAgICAgcGFzdER1ZUNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICB9IFxuXG4gICAgLy8gZ3JhYiBwcm9qZWN0cyBhcnJheSBmcm9tIHN0b3JhZ2VcbiAgICBjb25zdCBzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yYWdlUHJvamVjdHMnKSlcbiAgICBcbiAgICAvLyBkZXNlbGVjdCBhbGwgcHJvamVjdHNcbiAgICBzdG9yYWdlUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYgKHByb2plY3Quc2VsZWN0ZWQgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgcHJvamVjdC5zZWxlY3RlZCA9ICdmYWxzZSdcbiAgICAgICAgfVxuICAgIH0pIFxuXG4gICAgLy8gU2VsZWN0IHByb2plY3QgaWYgb25lIGlzIGNob3NlbiAobWFpbiBtZW51IHNlbGVjdGlvbiBpcyBoYW5kbGVkIGluIGV2ZW50IGxpc3RlbmVyKVxuICAgIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAncHJvamVjdCcpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkUHJvamVjdElkID0gY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgc3RvcmFnZVByb2plY3RzW3NlbGVjdGVkUHJvamVjdElkXS5zZWxlY3RlZCA9ICd0cnVlJ1xuICAgIH1cblxuICAgIC8vIHNldCBwcm9qZWN0cyBhcnJheSBiYWNrIGludG8gbG9jYWxTdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0b3JhZ2VQcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VQcm9qZWN0cykpXG5cbiAgICAvLyByZWZyZXNoXG4gICAgZGlzcGxheVByb2plY3RzKCk7ICAgIFxuICAgIGRpc3BsYXlUYXNrcygpO1xufVxuXG5cblxuXG5cbmV4cG9ydCB7XG4gICAgLy8gVXNlZCBpbiBpbmRleCAmIGNvcmVcblxuICAgIC8vIFVzZWQgb25seSBpbiBjb3JlXG4gICAgY3JlYXRlRm9ybSxcbiAgICBjcmVhdGVDaGVja2xpc3RJY29uLFxuICAgIGNyZWF0ZVdlZWtJY29uLFxuICAgIGNyZWF0ZVBhc3REdWVJY29uLFxuICAgIGNyZWF0ZVRvZGF5SWNvbixcbiAgICBjcmVhdGVBZGRpdGlvbkljb24sXG4gICAgc2V0VGFza0ZpbHRlcixcblxuICAgIC8vIFVzZWQgb25seSBpbiBpbmRleFxuICAgIGRpc3BsYXlQcm9qZWN0cyxcbiAgICBkaXNwbGF5VGFza3MsXG59IiwiXG5jbGFzcyB0YXNrcyB7XG5cbiAgICBzdGF0aWMgdG9EZWxldGUgPSBbXTtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IgKG5ld1Rhc2spIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3VGFza1xuICAgICAgICB0aGlzLmRhdGUgPSBkYXRlXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZVxuICAgIH1cblxuXG5cbn07XG5cblxuXG5jbGFzcyBwcm9qZWN0cyB7XG5cblxuXG4gICAgY29uc3RydWN0b3IgKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb2plY3ROYW1lXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZFxuICAgIH1cblxuXG5cbn1cblxuXG5cbmV4cG9ydCB7XG4gICAgcHJvamVjdHMsXG4gICAgdGFza3MsXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbi8vIFBhZ2UgaW5pdGlhbGl6YXRpb25cbi8vIGltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuL2NvcmUnO1xuaW1wb3J0IGluaXRpYWxpemUgZnJvbSAnLi9jb3JlJ1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRpYWxpemUoKTtcblxuXG5cbi8vIEdyYWIgRE9NIGVsZW1lbnRzXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RCdG4nKTtcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFByb2plY3RGb3JtJylcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXdQcm9qZWN0SW5wdXQnKTtcbmNvbnN0IG5ld1Byb2pFcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdQcm9qRXJyb3JDb250YWluZXInKTtcblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrQnRuJyk7XG5jb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrRm9ybScpO1xuY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld1Rhc2tJbnB1dCcpO1xuY29uc3QgbmV3VGFza0Vycm9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld1Rhc2tFcnJvckNvbnRhaW5lcicpO1xuXG5cblxuLy8gRE9NIG1vZGlmaWNhdGlvbiBmdW5jdGlvbnNcblxuaW1wb3J0IHsgZGlzcGxheVByb2plY3RzIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tICcuL2ludGVyYWN0aXZlJztcblxuXG5cbi8vIHRlbXBcbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuXG4vLyBJbml0aWF0ZSBzdG9yYWdlIGFycmF5cyBpZiBsb2NhbFN0b3JhZ2UgaXMgZW1wdHlcbmNvbnN0IHN0b3JhZ2VUYXNrc0FycmF5ID0gW107XG5jb25zdCBzdG9yYWdlUHJvamVjdHNBcnJheSA9IFtdO1xuaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmFnZVRhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVRhc2tzQXJyYXkpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmFnZVByb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVByb2plY3RzQXJyYXkpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29tcGxldGVkRmlsdGVyJywgdHJ1ZSk7XG5cbiAgICAvLyBQTEFDRUhPTERFUiBQUk9KRUNUU1xuICAgIC8vIGdyYWIgc3RvcmFnZSBhcnJheSBmcm9tIHN0b3JhZ2VcbiAgICBjb25zdCBzdG9yYWdlUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yYWdlUHJvamVjdHMnKSlcbiAgICAvLyBwdXNoIHBsYWNlcmhvbGRlciBwcm9qZWN0c1xuICAgIHN0b3JhZ2VQcm9qZWN0cy5wdXNoKFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnSG9tZScsXG4gICAgICAgICAgICBzZWxlY3RlZDogJ2ZhbHNlJyAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1N0dWR5JyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiAnZmFsc2UnICAgIFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnV29yaycsXG4gICAgICAgICAgICBzZWxlY3RlZDogJ2ZhbHNlJyAgICBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1ZhY2F0aW9uJyxcbiAgICAgICAgICAgIHNlbGVjdGVkOiAnZmFsc2UnICAgIFxuICAgICAgICB9LFxuICAgIClcbiAgICAvLyBzZXQgc3RvcmFnZSBhcnJheSBiYWNrIGludG8gc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yYWdlUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlUHJvamVjdHMpKTtcblxuICAgIC8vIFBMQUNFSE9MREVSIFRBU0tTXG4gICAgLy8gZ3JhYiB0YXNrcyBhcnJheSBmcm9tIHN0b3JhZ2VcbiAgICBjb25zdCBzdG9yYWdlVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yYWdlVGFza3MnKSlcbiAgICAvLyBwdXNoIHBsYWNlaG9sZGVyIHRhc2tzIChkYXRlcyBjYWxjdWxhdGVkIHNvIGRlbW8gd2lsbCBhbHdheXMgYmUgZnVuY3Rpb25hbClcbiAgICBzdG9yYWdlVGFza3MucHVzaChcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ01lYWwgUHJlcCcsXG4gICAgICAgICAgICBkYXRlOiBgJHsobmV3IERhdGUpLmdldEZ1bGxZZWFyKCl9LTAkeyhuZXcgRGF0ZSkuZ2V0TW9udGgoKSArIDF9LSR7KG5ldyBEYXRlKS5nZXREYXRlKCkgKyA1fWAsXG4gICAgICAgICAgICBwcm9qZWN0OiBgSG9tZWAsXG4gICAgICAgICAgICBwcmlvcml0eTogJzInLFxuICAgICAgICAgICAgY29tcGxldGU6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdEdXN0ICYgdmFjdXVtJyxcbiAgICAgICAgICAgIGRhdGU6IGAkeyhuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKX0tMCR7KG5ldyBEYXRlKS5nZXRNb250aCgpICsgMX0tJHsobmV3IERhdGUpLmdldERhdGUoKSArIDJ9YCxcbiAgICAgICAgICAgIHByb2plY3Q6IGBIb21lYCxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnMycsXG4gICAgICAgICAgICBjb21wbGV0ZTogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0Rpc2MgZ29sZiB3aXRoIGZyaWVuZHMnLFxuICAgICAgICAgICAgZGF0ZTogYCR7KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpfS0wJHsobmV3IERhdGUpLmdldE1vbnRoKCkgKyAxfS0keyhuZXcgRGF0ZSkuZ2V0RGF0ZSgpICsgOH1gLFxuICAgICAgICAgICAgcHJvamVjdDogYEhvbWVgLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICcyJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnWWFyZHdvcmsnLFxuICAgICAgICAgICAgZGF0ZTogYCR7KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpfS0wJHsobmV3IERhdGUpLmdldE1vbnRoKCkgKyAxfS0keyhuZXcgRGF0ZSkuZ2V0RGF0ZSgpICsgNn1gLFxuICAgICAgICAgICAgcHJvamVjdDogYEhvbWVgLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICczJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnUHJhY3RpY2Ugb24gSGFja2VyUmFuaycsXG4gICAgICAgICAgICBkYXRlOiBgJHsobmV3IERhdGUpLmdldEZ1bGxZZWFyKCl9LTAkeyhuZXcgRGF0ZSkuZ2V0TW9udGgoKSArIDF9LSR7KG5ldyBEYXRlKS5nZXREYXRlKCl9YCxcbiAgICAgICAgICAgIHByb2plY3Q6IGBTdHVkeWAsXG4gICAgICAgICAgICBwcmlvcml0eTogJzInLFxuICAgICAgICAgICAgY29tcGxldGU6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdQcmFjdGljZSBvbiBDb2RlV2FycycsXG4gICAgICAgICAgICBkYXRlOiBgJHsobmV3IERhdGUpLmdldEZ1bGxZZWFyKCl9LTAkeyhuZXcgRGF0ZSkuZ2V0TW9udGgoKSArIDF9LSR7KG5ldyBEYXRlKS5nZXREYXRlKCl9YCxcbiAgICAgICAgICAgIHByb2plY3Q6IGBTdHVkeWAsXG4gICAgICAgICAgICBwcmlvcml0eTogJzInLFxuICAgICAgICAgICAgY29tcGxldGU6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdVcGRhdGUgcmVzdW1lJyxcbiAgICAgICAgICAgIGRhdGU6IGAkeyhuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKX0tMCR7KG5ldyBEYXRlKS5nZXRNb250aCgpICsgMX0tJHsobmV3IERhdGUpLmdldERhdGUoKSArIDR9YCxcbiAgICAgICAgICAgIHByb2plY3Q6IGBXb3JrYCxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnMScsXG4gICAgICAgICAgICBjb21wbGV0ZTogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0FwcGx5IGZvciBTV0UgcG9zaXRpb25zJyxcbiAgICAgICAgICAgIGRhdGU6IGAkeyhuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKX0tMCR7KG5ldyBEYXRlKS5nZXRNb250aCgpICsgMX0tJHsobmV3IERhdGUpLmdldERhdGUoKSArIDd9YCxcbiAgICAgICAgICAgIHByb2plY3Q6IGBXb3JrYCxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnMScsXG4gICAgICAgICAgICBjb21wbGV0ZTogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1B1cmNoYXNlIGV2ZW50IGFkbWlzc2lvbiB0aWNrZXRzJyxcbiAgICAgICAgICAgIGRhdGU6IGAkeyhuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKX0tMCR7KG5ldyBEYXRlKS5nZXRNb250aCgpICsgMX0tJHsobmV3IERhdGUpLmdldERhdGUoKSArIDl9YCxcbiAgICAgICAgICAgIHByb2plY3Q6IGBWYWNhdGlvbmAsXG4gICAgICAgICAgICBwcmlvcml0eTogJzEnLFxuICAgICAgICAgICAgY29tcGxldGU6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdQdXJjaGFzZSBwbGFuZSB0aWNrZXRzJyxcbiAgICAgICAgICAgIGRhdGU6IGAkeyhuZXcgRGF0ZSkuZ2V0RnVsbFllYXIoKX0tMCR7KG5ldyBEYXRlKS5nZXRNb250aCgpICsgMX0tJHsobmV3IERhdGUpLmdldERhdGUoKSArIDl9YCxcbiAgICAgICAgICAgIHByb2plY3Q6IGBWYWNhdGlvbmAsXG4gICAgICAgICAgICBwcmlvcml0eTogJzEnLFxuICAgICAgICAgICAgY29tcGxldGU6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdSZXNlcnZlIGFpcnBvcnQgcGFya2luZycsXG4gICAgICAgICAgICBkYXRlOiBgJHsobmV3IERhdGUpLmdldEZ1bGxZZWFyKCl9LTAkeyhuZXcgRGF0ZSkuZ2V0TW9udGgoKSArIDF9LSR7KG5ldyBEYXRlKS5nZXREYXRlKCkgKyA5fWAsXG4gICAgICAgICAgICBwcm9qZWN0OiBgVmFjYXRpb25gLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICcxJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQm9vayBob3RlbCBvciBBaXJCbkInLFxuICAgICAgICAgICAgZGF0ZTogYCR7KG5ldyBEYXRlKS5nZXRGdWxsWWVhcigpfS0wJHsobmV3IERhdGUpLmdldE1vbnRoKCkgKyAxfS0keyhuZXcgRGF0ZSkuZ2V0RGF0ZSgpICsgOX1gLFxuICAgICAgICAgICAgcHJvamVjdDogYFZhY2F0aW9uYCxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnMScsXG4gICAgICAgICAgICBjb21wbGV0ZTogJ2ZhbHNlJywgICAgICAgIFxuICAgICAgICB9LFxuICAgIClcbiAgICAvLyBzZXQgdGFza3MgYXJyYXkgYmFjayBpbnRvIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmFnZVRhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZVRhc2tzKSk7XG5cbn1cblxuXG5cbi8vIGluc2VydCBjb250ZW50IGZyb20gbG9jYWwgc3RvcmFnZSBpZiB0aGVyZSBpcyBhbnlcbmRpc3BsYXlQcm9qZWN0cygpO1xuZGlzcGxheVRhc2tzKCk7XG5cblxuXG5cblxuLy8gUFJPSkVDVCBGT1JNXG4vLyBTaG93L2hpZGUgbmV3IHByb2plY3QgZm9ybVxuY29uc3QgX3Nob3dBZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBpZiAoYWRkVGFza0Zvcm0uZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnc2hvd0Jsb2NrJykge1xuICAgICAgICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd0ZsZXgnKVxuICAgICAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpXG4gICAgfVxuICAgIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd0Jsb2NrJylcbn1cblxuXG4vLyBWZXJpZnkgbmV3IHByb2plY3QgZm9ybSBzdWJtaXNzaW9uXG5jb25zdCBfc3VibWl0TmV3UHJvamVjdEZvcm0gPSAoZSkgPT4ge1xuICAgIC8vIHByZXZlbnQgYWN0dWFsIGZvcm0gc3VibWlzc2lvblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIHN1Ym1pdCB0byBsb2NhbCBzdG9yYWdlXG4gICAgY29uc3Qgc3VibWl0UHJvaiA9IChuZXdQcm9qKSA9PiB7XG4gICAgICAgIC8vIGdyYWIgYXJyYXkgZnJvbSBzdG9yYWdlXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2VQcm9qZWN0cycpKVxuICAgICAgICAvLyBwdXNoIHRhc2sgdG8gYXJyYXlcbiAgICAgICAgc3RvcmFnZVByb2plY3RzLnB1c2gobmV3UHJvailcbiAgICAgICAgLy8gc2V0IGFycmF5IGJhY2sgaW50byBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yYWdlUHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlUHJvamVjdHMpKVxuICAgICAgICAvLyByZWZyZXNoIHByb2plY3RzIGxpc3RcbiAgICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgICAgIC8vIHJlZnJlc2ggdGFza2xpc3Qgc28geW91IGNhbiBhZGQgdGFza3MgdG8gbmV3IHByb2plY3RcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IF9oaWRlQWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93RmxleCcpXG4gICAgICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICAgICAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICAgIFxuICAgIC8vIHZlcmlmeSBvciBjYW5jZWwgc3VibWlzc2lvblxuICAgIGlmIChlLnN1Ym1pdHRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZEJ0bicpICYmIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgLy8gc2hvdyBwcm9qZWN0IG5hbWUgZXJyb3JcbiAgICAgICAgbmV3UHJvakVycm9yQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd0Jsb2NrJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGUuc3VibWl0dGVyLmNsYXNzTGlzdC5jb250YWlucygnYWRkQnRuJykpIHtcbiAgICAgICAgLy8gc3VibWl0IG5ldyBwcm9qZWN0XG4gICAgICAgIGNvbnN0IG5ld1Byb2ogPSB7XG4gICAgICAgICAgICBuYW1lOiBuZXdQcm9qZWN0SW5wdXQudmFsdWUsXG4gICAgICAgICAgICBzZWxlY3RlZDogJ2ZhbHNlJyxcbiAgICAgICAgfVxuICAgICAgICBuZXdQcm9qZWN0SW5wdXQudmFsdWVcbiAgICAgICAgc3VibWl0UHJvaihuZXdQcm9qKTtcbiAgICB9XG4gICAgX2hpZGVBZGRQcm9qZWN0Rm9ybSgpO1xuICAgIG5ld1Byb2pFcnJvckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xufVxuXG5cblxuXG5cbi8vIFRBU0sgRk9STVxuLy8gU2hvdy9oaWRlIG5ldyB0YXNrIGZvcm1cbmNvbnN0IF9zaG93QWRkVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgaWYgKGFkZFByb2plY3RGb3JtLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ3Nob3dCbG9jaycpIHtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Nob3dGbGV4JylcbiAgICAgICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKSAgICBcbiAgICB9XG4gICAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpXG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93QmxvY2snKVxufVxuXG5cbi8vIFZlcmlmeSBuZXcgdGFzayBmb3JtIHN1Ym1pc3Npb25cbmNvbnN0IF9zdWJtaXROZXdUYXNrRm9ybSA9IChlKSA9PiB7XG4gICAgLy8gcHJldmVudCBhY3R1YWwgZm9ybSBzdWJtaXNzaW9uXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gc3VibWl0IHRvIGxvY2FsU3RvcmFnZVxuICAgIGNvbnN0IF9zdWJtaXRUYXNrID0gKG5ld1Rhc2spID0+IHtcbiAgICAgICAgLy8gTkVXXG4gICAgICAgIC8vIGdyYWIgYXJyYXkgZnJvbSBzdG9yYWdlXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JhZ2VUYXNrcycpKVxuICAgICAgICAvLyBwdXNoIHRhc2sgdG8gYXJyYXlcbiAgICAgICAgc3RvcmFnZVRhc2tzLnB1c2gobmV3VGFzaylcbiAgICAgICAgLy8gc2V0IGFycmF5IGJhY2sgaW50byBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9yYWdlVGFza3MnLCBKU09OLnN0cmluZ2lmeShzdG9yYWdlVGFza3MpKVxuICAgICAgICAvLyByZWZyZXNoIHRhc2tsaXN0XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgIH1cblxuICAgIGNvbnN0IF9oaWRlQWRkVGFza0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzaG93RmxleCcpXG4gICAgICAgIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICAgICAgbmV3VGFza0lucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICAgIFxuICAgIC8vIHZlcmlmeSBvciBjYW5jZWwgc3VibWlzc2lvblxuICAgIGlmIChlLnN1Ym1pdHRlci5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZEJ0bicpICYmIG5ld1Rhc2tJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgLy8gc2hvdyBUYXNrIG5hbWUgZXJyb3JcbiAgICAgICAgbmV3VGFza0Vycm9yQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hvd0Jsb2NrJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKGUuc3VibWl0dGVyLmNsYXNzTGlzdC5jb250YWlucygnYWRkQnRuJykpIHtcbiAgICAgICAgLy8gYXNzaWduIHByb2plY3RcbiAgICAgICAgdmFyIG5ld1Rhc2tQcm9qZWN0ID0gJydcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VGl0bGUnKS50ZXh0Q29udGVudCAhPT0gJ0FsbCB0YXNrcycgJiZcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpLnRleHRDb250ZW50ICE9PSAnRHVlIHRvZGF5JyAmJlxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJykudGV4dENvbnRlbnQgIT09ICdEdWUgdGhpcyB3ZWVrJykge1xuICAgICAgICAgICAgbmV3VGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJykudGV4dENvbnRlbnRcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIC8vIHN1Ym1pdCBuZXcgVGFza1xuICAgICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICAgICAgbmFtZTogbmV3VGFza0lucHV0LnZhbHVlLFxuICAgICAgICAgICAgZGF0ZTogJycsXG4gICAgICAgICAgICBwcm9qZWN0OiBgJHtuZXdUYXNrUHJvamVjdH1gLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICcyJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAnZmFsc2UnLFxuICAgICAgICB9XG4gICAgICAgIF9zdWJtaXRUYXNrKG5ld1Rhc2spO1xuICAgIH1cbiAgICBfaGlkZUFkZFRhc2tGb3JtKCk7XG4gICAgbmV3VGFza0Vycm9yQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG59XG5cblxuXG5cblxuLy8gRXZlbnQgbGlzdGVuZXJzXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3Nob3dBZGRQcm9qZWN0Rm9ybSk7XG5hZGRQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gX3N1Ym1pdE5ld1Byb2plY3RGb3JtKGUpKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfc2hvd0FkZFRhc2tGb3JtKTtcbmFkZFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBfc3VibWl0TmV3VGFza0Zvcm0oZSkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==