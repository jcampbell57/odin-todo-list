/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

const createAddButton = (container) => {
    const addBtn = document.createElement('button');
    addBtn.setAttribute('class', 'addBtn');
    addBtn.innerText = "submit";
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

const createDateContainer = (tr) => {
    const dateContainer = document.createElement('td');
    dateContainer.setAttribute('class', 'dateContainer');
    dateContainer.innerText = 'no date'
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
    // not sure why this if statement was here... leaving it in case bug pops up
    // if (e.target.getAttribute('id') === 'deleteItem') {
        let doomedIndex = e.target.parentElement.parentElement.getAttribute('id');
        _tasks__WEBPACK_IMPORTED_MODULE_9__.projects.all.splice(doomedIndex, 1);
        e.target.parentElement.parentElement.remove();
    // } else {
        // return
    // }
    // console.log(e.target.getAttribute('id') === 'deleteItem')
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
        taskContainer.innerText = `${task}`;
        newListing.appendChild(taskContainer);

        // add date
        createDateContainer(newListing);

        // add edit button
        const editContainer = document.createElement('td');
        editContainer.setAttribute('class', 'editContainer');
        createEditIcon(editContainer);
        newListing.appendChild(editContainer);

        // add delete button
        createDeleteContainer(newListing);

        //append task to tasklist
        tasklist.appendChild(newListing);
    }
    

    // Create and hide task car in tasklist display
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
        taskInputContainer.setAttribute('class', 'taskInputContainer');
        taskInputContainer.innerHTML = `<input type='text' id='newTaskInput' name='newTaskInput'></input>`;
        cardRow1.appendChild(taskInputContainer);
        // add date
        const editDateContainer = document.createElement('td');
        editDateContainer.setAttribute('class', 'editDateContainer');
        createDateContainer(editDateContainer);
        cardRow1.appendChild(editDateContainer);
        // add calendar edit button
        createCalendarEditIcon(cardRow1);


        // Second row 
        const cardRow2 = document.createElement('tr');
        cardRow2.setAttribute('class', 'cardRow2')
        // add checkbox
        // createCheckboxContainer(cardRow2);
        // project input
        const projectInputContainer = document.createElement('td');
        projectInputContainer.setAttribute('class', 'projectInputContainer');
        projectInputContainer.innerHTML = `<input type='dropdown' id='newTaskInput' name='newTaskInput'></input>`;
        cardRow2.appendChild(projectInputContainer);
        // priority input
        const priorityInputContainer = document.createElement('td');
        priorityInputContainer.setAttribute('class', 'priorityInputContainer');
        priorityInputContainer.innerHTML = `<input type='dropdown' id='newTaskInput' name='newTaskInput'></input>`;
        cardRow2.appendChild(priorityInputContainer);


        // Third row 
        const cardRow3 = document.createElement('tr');
        cardRow3.setAttribute('class', 'cardRow3')
        createAddButton(cardRow3);
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
    e.target.parentElement.parentElement.remove();
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
    }



};



class projects {
    static all = [];



    constructor (projectName) {
        this.project = projectName
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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
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
    })
    ;(0,_interactive__WEBPACK_IMPORTED_MODULE_2__.createChecklistIcon)(allTasks);
    const allTasksText = document.createElement('span');
    allTasksText.textContent = 'All tasks';
    allTasks.appendChild(allTasksText)
    menuOptions.appendChild(allTasks);

    const dueToday = document.createElement('li');
    dueToday.setAttribute('class', 'dueToday');
    dueToday.addEventListener('click', (e) => {
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFVO0FBQ2Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSwyQ0FBMkMsMEJBQTBCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwREFBVTtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxVQUFVLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbnRlcmFjdGl2ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29yZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2hlY2tib3hCbGFuayBmcm9tICcuL2Fzc2V0cy9jaGVja2JveC1ibGFuay5zdmcnO1xuaW1wb3J0IGNoZWNrYm94TWFya2VkIGZyb20gJy4vYXNzZXRzL2NoZWNrYm94LW1hcmtlZC5zdmcnO1xuaW1wb3J0IGNoZWNrbGlzdCBmcm9tICcuL2Fzc2V0cy9jaGVja2xpc3Quc3ZnJztcbmltcG9ydCBjYWxlbmRhclRvZGF5IGZyb20gJy4vYXNzZXRzL2NhbGVuZGFyLXRvZGF5LnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJXZWVrIGZyb20gJy4vYXNzZXRzL2NhbGVuZGFyLXJhbmdlLnN2Zyc7XG5pbXBvcnQgYWRkaXRpb25JY29uIGZyb20gJy4vYXNzZXRzL3BsdXMuc3ZnJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2Fzc2V0cy9lZGl0LnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJFZGl0SWNvbiBmcm9tICcuL2Fzc2V0cy9jYWxlbmRhci1lZGl0LnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2Fzc2V0cy9kZWxldGUuc3ZnJztcblxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90YXNrcyc7XG5cblxuXG4vLyBJY29uICYgYnV0dG9uIGdlbmVyYXRvcnMgXG5jb25zdCBjcmVhdGVDaGVja2JveEljb24gPSAodGQpID0+IHtcbiAgICBjb25zdCBjaGVja2JveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaGVja2JveEljb24uc3JjID0gY2hlY2tib3hCbGFuaztcbiAgICBjaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gICAgY2hlY2tib3hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9tYXJrQ29tcGxldGUoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQoY2hlY2tib3hJY29uKTtcbn0gXG5cbmNvbnN0IF9jcmVhdGVNYXJrZWRDaGVja2JveEljb24gPSAodGQpID0+IHtcbiAgICBjb25zdCBtYXJrZWRDaGVja2JveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYXJrZWRDaGVja2JveEljb24uc3JjID0gY2hlY2tib3hNYXJrZWQ7XG4gICAgbWFya2VkQ2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICAgIG1hcmtlZENoZWNrYm94SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfbWFya0luY29tcGxldGUoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQobWFya2VkQ2hlY2tib3hJY29uKTtcbn0gXG5cbmNvbnN0IGNyZWF0ZUNoZWNrbGlzdEljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBjaGVja2xpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2hlY2tsaXN0SWNvbi5zcmMgPSBjaGVja2xpc3Q7XG4gICAgY2hlY2tsaXN0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKGNoZWNrbGlzdEljb24pO1xufVxuXG5jb25zdCBjcmVhdGVFZGl0SWNvbiA9ICh0ZCkgPT4ge1xuICAgIGNvbnN0IG5ld0VkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3RWRpdEljb24uc3JjID0gZWRpdEljb247XG4gICAgbmV3RWRpdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gICAgLy9ldmVudCBsaXN0ZW5lciB0byBvcGVuIHRhc2sgY2FyZFxuICAgIG5ld0VkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9zaG93VGFza0NhcmQoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQobmV3RWRpdEljb24pO1xufVxuXG5jb25zdCBjcmVhdGVDYWxlbmRhckVkaXRJY29uID0gKHRkKSA9PiB7XG4gICAgY29uc3QgbmV3Q2FsZW5kYXJFZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0NhbGVuZGFyRWRpdEljb24uc3JjID0gY2FsZW5kYXJFZGl0SWNvbjtcbiAgICBuZXdDYWxlbmRhckVkaXRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbiBlZGl0RGF0ZUljb24nKVxuICAgIG5ld0NhbGVuZGFyRWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIH0pXG4gICAgdGQuYXBwZW5kQ2hpbGQobmV3Q2FsZW5kYXJFZGl0SWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZURlbGV0ZUljb24gPSAoY29udGFpbmVyKSA9PiB7XG4gICAgLy8gY3JlYXRlIGltYWdlIGFuZCBhc3NpZ24gYXR0cmlidXRlc1xuICAgIGNvbnN0IG5ld0RlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdEZWxldGVJY29uLnNyYyA9IGRlbGV0ZUljb247XG4gICAgbmV3RGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIG5ld0RlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVJdGVtJylcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ3Rhc2tDbG9zZUNvbnRhaW5lcicpIHtcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gZGVsZXRlIHRhc2tcbiAgICAgICAgbmV3RGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfZGVsZXRlVGFzayhlKSlcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdwcm9qZWN0Q2xvc2VDb250YWluZXInKSB7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSBwcm9qZWN0XG4gICAgICAgIG5ld0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX2RlbGV0ZVByb2plY3QoZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgc3RyYW5nZScpO1xuICAgIH1cbiAgICAvLyBhcHBlbmQgdG8gY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0RlbGV0ZUljb24pXG59XG5cbmNvbnN0IGNyZWF0ZUFkZGl0aW9uSWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IG5ld0FkZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0FkZGl0aW9uSWNvbi5zcmMgPSBhZGRpdGlvbkljb247XG4gICAgbmV3QWRkaXRpb25JY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQobmV3QWRkaXRpb25JY29uKTtcbn1cblxuY29uc3QgY3JlYXRlVG9kYXlJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3VG9kYXlJY29uLnNyYyA9IGNhbGVuZGFyVG9kYXk7XG4gICAgbmV3VG9kYXlJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQobmV3VG9kYXlJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlV2Vla0ljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBuZXdXZWVrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld1dlZWtJY29uLnNyYyA9IGNhbGVuZGFyV2VlaztcbiAgICBuZXdXZWVrSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKG5ld1dlZWtJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlQWRkQnV0dG9uID0gKGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZEJ0bicpO1xuICAgIGFkZEJ0bi5pbm5lclRleHQgPSBcInN1Ym1pdFwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xuICAgIFxufVxuXG5jb25zdCBjcmVhdGVDYW5jZWxCdXR0b24gPSAoY29udGFpbmVyLCBpKSA9PiB7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FuY2VsQnRuJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgIGNhbmNlbEJ0bi5pbm5lclRleHQgPSBcImNhbmNlbFwiO1xuICAgIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnY2FyZFJvdzMnKSB7XG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9oaWRlVGFza0NhcmQoaSkpXG4gICAgfTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTsgICBcbn1cblxuXG5cbi8vIENvbnRhaW5lciBBTkQgaWNvbiBnZW5lcmF0b3JzIChGb3IgdGFzayBsaXN0aW5nIGFuZCB0YXNrIGNhcmQpXG5jb25zdCBjcmVhdGVDaGVja2JveENvbnRhaW5lciA9ICh0cikgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjaGVja2JveENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrYm94Q29udGFpbmVyJyk7XG4gICAgY3JlYXRlQ2hlY2tib3hJY29uKGNoZWNrYm94Q29udGFpbmVyKTtcbiAgICB0ci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XG59XG5cbmNvbnN0IGNyZWF0ZURhdGVDb250YWluZXIgPSAodHIpID0+IHtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBkYXRlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0ZUNvbnRhaW5lcicpO1xuICAgIGRhdGVDb250YWluZXIuaW5uZXJUZXh0ID0gJ25vIGRhdGUnXG4gICAgdHIuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG59XG5cbmNvbnN0IGNyZWF0ZURlbGV0ZUNvbnRhaW5lciA9ICh0cikgPT4ge1xuICAgIGNvbnN0IGNsb3NlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjbG9zZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tDbG9zZUNvbnRhaW5lcicpO1xuICAgIGNyZWF0ZURlbGV0ZUljb24oY2xvc2VDb250YWluZXIpO1xuICAgIHRyLmFwcGVuZENoaWxkKGNsb3NlQ29udGFpbmVyKTtcbn1cblxuXG5cbi8vIEZvcm0gZ2VuZXJhdG9yXG5jb25zdCBjcmVhdGVGb3JtID0gKGZvcm0pID0+IHtcbiAgICBcbiAgICBjb25zdCBmb3JtUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3cxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybVJvdycpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1Sb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvdzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtUm93Jyk7XG4gICAgZm9ybVJvdzIuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtQnV0dG9ucycpO1xuXG4gICAgY29uc3QgZm9ybVJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xuXG4gICAgLy8gcm93IG9uZTogYXNzaWduIGlucHV0IGFjY29yZGluZyB0byBjbGFzcyBvZiBmb3JtXG4gICAgLy8gcm93IHRocmVlOiBhc3NpZ24gZXJyb3IgY2xhc3MgYW5kIHRleHQgYWNjb3JkaW5nIHRvIGNsYXNzIG9mIGZvcm1cbiAgICBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRQcm9qZWN0Rm9ybScpIHtcbiAgICAgICAgZm9ybVJvdzEuaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25ld1Byb2plY3RJbnB1dCcgbmFtZT0nbmV3UHJvamVjdElucHV0Jz48L2lucHV0PlwiO1xuICAgICAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld1Byb2pFcnJvckNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtUm93My5pbm5lclRleHQgPSAnTmFtZSB5b3VyIHByb2plY3QhJ1xuICAgIH0gZWxzZSBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRUYXNrRm9ybScpIHtcbiAgICAgICAgZm9ybVJvdzEuaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25ld1Rhc2tJbnB1dCcgbmFtZT0nbmV3VGFza0lucHV0Jz48L2lucHV0PlwiO1xuICAgICAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld1Rhc2tFcnJvckNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtUm93My5pbm5lclRleHQgPSAnTmFtZSB5b3VyIHRhc2shJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHN0cmFuZ2UnKVxuICAgIH1cblxuICAgIC8vIHJvdyB0d286IHN1Ym1pdCBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgICBjcmVhdGVBZGRCdXR0b24oZm9ybVJvdzIpO1xuICAgIGNyZWF0ZUNhbmNlbEJ1dHRvbihmb3JtUm93Mik7XG4gICAgICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93MSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93Mik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93Myk7XG59XG5cblxuXG5cblxuLy8gRE9NIG1vZGlmaWNhdGlvbiBmdW5jdGlvbnNcblxuLy8gUFJPSkVDVFNcbi8vIERpc3BsYXkgZW50aXJlIGFycmF5IG9mIHByb2plY3RzIHRvIG1lbnVcbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAvLyBHcmFiIHByb2plY3RzIG1lbnVcbiAgICBjb25zdCBwcm9qZWN0c01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHNNZW51Jyk7XG5cbiAgICAvLyBDbGVhciBwcm9qZWN0cyBtZW51XG4gICAgY29uc3Qgb2xkUHJvakNvdW50ID0gcHJvamVjdHNNZW51LmNoaWxkRWxlbWVudENvdW50XG4gICAgZm9yIChsZXQgaT0wOyBpPG9sZFByb2pDb3VudDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RzTWVudS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIEFkZCBzaW5nbGUgcHJvamVjdCB0byBtZW51IChjYWxsZWQgYmVsb3cpXG4gICAgY29uc3QgX2Rpc3BsYXlQcm9qZWN0ID0gKG5ld1Byb2osIGkpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBwcm9qZWN0YClcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKVxuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgICAgICAgICAgc2V0Q29udGVudFRpdGxlKGUpXG4gICAgICAgIH0pXG4gICAgICAgIGNyZWF0ZUNoZWNrbGlzdEljb24obmV3UHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBuZXdQcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IG5ld1Byb2o7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRleHQpXG4gICAgICAgIC8vIGV4dHJhIHdyYXBwZXIgc28gZXZlbnQgbGlzdGVuZXJzIHdvcmsgb24gYm90aCB0YXNrcyBhbmQgcHJvamVjdHNcbiAgICAgICAgY29uc3QgY2xvc2VDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2xvc2VDb250YWluZXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0Q2xvc2VDb250YWluZXInKVxuICAgICAgICBjcmVhdGVEZWxldGVJY29uKGNsb3NlQ29udGFpbmVyRGl2KTsgICAgXG4gICAgICAgIC8vIGNyZWF0ZURlbGV0ZUljb24obmV3UHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VDb250YWluZXJEaXYpXG4gICAgICAgIHByb2plY3RzTWVudS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9IFxuXG4gICAgLy8gQXBwZW5kIGFsbCB0YXNrcyB0byB0YXNrbGlzdFxuICAgIGxldCBpPTBcbiAgICBwcm9qZWN0cy5hbGwuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgX2Rpc3BsYXlQcm9qZWN0KHByb2plY3QsIGkpXG4gICAgICAgIGkrK1xuICAgIH0pO1xufVxuXG5cblxuLy8gRGVsZXRlIHByb2plY3RcbmNvbnN0IF9kZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAvLyBub3Qgc3VyZSB3aHkgdGhpcyBpZiBzdGF0ZW1lbnQgd2FzIGhlcmUuLi4gbGVhdmluZyBpdCBpbiBjYXNlIGJ1ZyBwb3BzIHVwXG4gICAgLy8gaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2RlbGV0ZUl0ZW0nKSB7XG4gICAgICAgIGxldCBkb29tZWRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgICAgIHByb2plY3RzLmFsbC5zcGxpY2UoZG9vbWVkSW5kZXgsIDEpO1xuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gcmV0dXJuXG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ2RlbGV0ZUl0ZW0nKVxufVxuXG5cblxuXG5cbi8vIFRBU0tTXG4vLyBEaXNwbGF5IGVudGlyZSBhcnJheSBvZiB0YXNrcyB0byB0YXNrbGlzdFxuY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuXG4gICAgLy8gR3JhYiB0YXNrbGlzdFxuICAgIGNvbnN0IHRhc2tsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tMaXN0Jyk7XG4gICAgXG4gICAgLy8gY2xlYXIgdGFza2xpc3RcbiAgICBjb25zdCBvbGRUYXNrQ291bnQgPSB0YXNrbGlzdC5jaGlsZEVsZW1lbnRDb3VudFxuICAgIGZvciAobGV0IGk9MDsgaTxvbGRUYXNrQ291bnQ7IGkrKykge1xuICAgICAgICB0YXNrbGlzdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICBcblxuICAgIC8vIEFkZCBzaW5nbGUgdGFzayB0byB0YXNrbGlzdCBkaXNwbGF5XG4gICAgY29uc3QgX2NyZWF0ZVRhc2tMaXN0aW5nID0gKHRhc2ssIGkpID0+IHtcbiAgICAgICAgLy8gY3JlYXRlIHRhc2sgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG5ld0xpc3RpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBuZXdMaXN0aW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgaW5jb21wbGV0ZSB0YXNrIGxpc3Rpbmcke2l9YCk7XG4gICAgICAgIG5ld0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgY2hlY2tib3hcbiAgICAgICAgY3JlYXRlQ2hlY2tib3hDb250YWluZXIobmV3TGlzdGluZyk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgdGFza1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tDb250YWluZXInKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lclRleHQgPSBgJHt0YXNrfWA7XG4gICAgICAgIG5ld0xpc3RpbmcuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gYWRkIGRhdGVcbiAgICAgICAgY3JlYXRlRGF0ZUNvbnRhaW5lcihuZXdMaXN0aW5nKTtcblxuICAgICAgICAvLyBhZGQgZWRpdCBidXR0b25cbiAgICAgICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGVkaXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0Q29udGFpbmVyJyk7XG4gICAgICAgIGNyZWF0ZUVkaXRJY29uKGVkaXRDb250YWluZXIpO1xuICAgICAgICBuZXdMaXN0aW5nLmFwcGVuZENoaWxkKGVkaXRDb250YWluZXIpO1xuXG4gICAgICAgIC8vIGFkZCBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNyZWF0ZURlbGV0ZUNvbnRhaW5lcihuZXdMaXN0aW5nKTtcblxuICAgICAgICAvL2FwcGVuZCB0YXNrIHRvIHRhc2tsaXN0XG4gICAgICAgIHRhc2tsaXN0LmFwcGVuZENoaWxkKG5ld0xpc3RpbmcpO1xuICAgIH1cbiAgICBcblxuICAgIC8vIENyZWF0ZSBhbmQgaGlkZSB0YXNrIGNhciBpbiB0YXNrbGlzdCBkaXNwbGF5XG4gICAgY29uc3QgX2NyZWF0ZVRhc2tDYXJkID0gKHRhc2ssIGkpID0+IHtcbiAgICAgICAgLy8gQ1JFQVRFIFRBU0sgQ0FSRFxuICAgICAgICBjb25zdCBuZXdDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxuICAgICAgICBuZXdDYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgaW5jb21wbGV0ZSB0YXNrIGNhcmQke2l9YCk7XG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGBoaWRkZW5gKTtcblxuICAgICAgICBjb25zdCBuZXdDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbiAgICAgICAgbmV3Q2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2luY29tcGxldGUgbWVudU9wdGlvbnMnKTtcbiAgICAgICAgbmV3Q2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNyZWF0ZURlbGV0ZUNvbnRhaW5lcihuZXdDYXJkKTtcblxuICAgICAgICBjb25zdCBuZXdUaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJyk7XG4gICAgICAgIG5ld1RoZWFkLmlubmVySFRNTCA9IFxuICAgICAgICAgICAgYDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2NoZWNrYm94Q29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0ndGFza0NvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2RhdGVDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdlZGl0Q29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgPC90cj5gXG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGJvZHlcbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgICAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tDYXJkJyk7XG4gICAgICAgIFxuXG4gICAgICAgIC8vIEZpcnN0IHJvd1xuICAgICAgICBjb25zdCBjYXJkUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNhcmRSb3cxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZFJvdzEnKVxuICAgICAgICAvLyBhZGQgdGFzayBuYW1lIGlucHV0XG4gICAgICAgIGNvbnN0IHRhc2tJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRhc2tJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tJbnB1dENvbnRhaW5lcicpO1xuICAgICAgICB0YXNrSW5wdXRDb250YWluZXIuaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPSd0ZXh0JyBpZD0nbmV3VGFza0lucHV0JyBuYW1lPSduZXdUYXNrSW5wdXQnPjwvaW5wdXQ+YDtcbiAgICAgICAgY2FyZFJvdzEuYXBwZW5kQ2hpbGQodGFza0lucHV0Q29udGFpbmVyKTtcbiAgICAgICAgLy8gYWRkIGRhdGVcbiAgICAgICAgY29uc3QgZWRpdERhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBlZGl0RGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXREYXRlQ29udGFpbmVyJyk7XG4gICAgICAgIGNyZWF0ZURhdGVDb250YWluZXIoZWRpdERhdGVDb250YWluZXIpO1xuICAgICAgICBjYXJkUm93MS5hcHBlbmRDaGlsZChlZGl0RGF0ZUNvbnRhaW5lcik7XG4gICAgICAgIC8vIGFkZCBjYWxlbmRhciBlZGl0IGJ1dHRvblxuICAgICAgICBjcmVhdGVDYWxlbmRhckVkaXRJY29uKGNhcmRSb3cxKTtcblxuXG4gICAgICAgIC8vIFNlY29uZCByb3cgXG4gICAgICAgIGNvbnN0IGNhcmRSb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY2FyZFJvdzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkUm93MicpXG4gICAgICAgIC8vIGFkZCBjaGVja2JveFxuICAgICAgICAvLyBjcmVhdGVDaGVja2JveENvbnRhaW5lcihjYXJkUm93Mik7XG4gICAgICAgIC8vIHByb2plY3QgaW5wdXRcbiAgICAgICAgY29uc3QgcHJvamVjdElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgcHJvamVjdElucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdElucHV0Q29udGFpbmVyJyk7XG4gICAgICAgIHByb2plY3RJbnB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9J2Ryb3Bkb3duJyBpZD0nbmV3VGFza0lucHV0JyBuYW1lPSduZXdUYXNrSW5wdXQnPjwvaW5wdXQ+YDtcbiAgICAgICAgY2FyZFJvdzIuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0Q29udGFpbmVyKTtcbiAgICAgICAgLy8gcHJpb3JpdHkgaW5wdXRcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eUlucHV0Q29udGFpbmVyJyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXRDb250YWluZXIuaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPSdkcm9wZG93bicgaWQ9J25ld1Rhc2tJbnB1dCcgbmFtZT0nbmV3VGFza0lucHV0Jz48L2lucHV0PmA7XG4gICAgICAgIGNhcmRSb3cyLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXRDb250YWluZXIpO1xuXG5cbiAgICAgICAgLy8gVGhpcmQgcm93IFxuICAgICAgICBjb25zdCBjYXJkUm93MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNhcmRSb3czLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZFJvdzMnKVxuICAgICAgICBjcmVhdGVBZGRCdXR0b24oY2FyZFJvdzMpO1xuICAgICAgICBjcmVhdGVDYW5jZWxCdXR0b24oY2FyZFJvdzMsIGAke2l9YCk7XG5cblxuICAgICAgICAvLyBhcHBlbmQgdGFzayBjYXJkIHRvIHRhc2tsaXN0XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNhcmRSb3cxKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFJvdzIpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjYXJkUm93Myk7XG5cbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChuZXdUaGVhZCk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG5cbiAgICAgICAgdGFza2xpc3QuYXBwZW5kQ2hpbGQobmV3Q2FyZENvbnRhaW5lcik7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gYXBwZW5kIGFsbCB0YXNrcyB0byB0YXNrbGlzdFxuICAgIGxldCBpPTBcbiAgICB0YXNrcy5hbGwuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgX2NyZWF0ZVRhc2tMaXN0aW5nKHRhc2ssIGkpO1xuICAgICAgICBfY3JlYXRlVGFza0NhcmQodGFzaywgaSk7XG4gICAgICAgIGkrK1xuICAgIH0pO1xufVxuXG5cblxuXG5cbi8vIENvbXBsZXRlIHRhc2tcbmNvbnN0IF9tYXJrQ29tcGxldGUgPSAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXBsZXRlJyk7XG4gICAgbGV0IGNoZWNrYm94Q29udGFpbmVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudFxuICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xuICAgIF9jcmVhdGVNYXJrZWRDaGVja2JveEljb24oY2hlY2tib3hDb250YWluZXIpXG59XG5cbi8vIEluY29tcGxldGUgdGFza1xuY29uc3QgX21hcmtJbmNvbXBsZXRlID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdpZCcsICcnKTtcbiAgICBsZXQgY2hlY2tib3hDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgZS50YXJnZXQucmVtb3ZlKCk7XG4gICAgY3JlYXRlQ2hlY2tib3hJY29uKGNoZWNrYm94Q29udGFpbmVyKVxufVxuXG4vLyBTaG93IHRhc2sgY2FyZFxuY29uc3QgX3Nob3dUYXNrQ2FyZCA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza0lEID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAvLyBzaG93IHRhc2sgY2FyZFxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmQke3Rhc2tJRH1gKTtcbiAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza0lEfWApO1xuICAgIC8vaGlkZSB0YXNrIGxpc3RpbmdcbiAgICBjb25zdCB0YXNrTGlzdGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saXN0aW5nJHt0YXNrSUR9YCk7XG4gICAgdGFza0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKTtcbn1cblxuLy8gSGlkZSB0YXNrIGNhcmRcbmNvbnN0IF9oaWRlVGFza0NhcmQgPSAoaSkgPT4ge1xuICAgIC8vIHNob3cgdGFzayBsaXN0aW5nXG4gICAgY29uc3QgdGFza0xpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlzdGluZyR7aX1gKTtcbiAgICB0YXNrTGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAvLyBoaWRlIHRhc2sgY2FyZFxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmQke2l9YCk7XG4gICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKTtcbn1cblxuLy8gRGVsZXRlIHRhc2tcbmNvbnN0IF9kZWxldGVUYXNrID0gKGUpID0+IHtcbiAgICBsZXQgZG9vbWVkSW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIHRhc2tzLmFsbC5zcGxpY2UoZG9vbWVkSW5kZXgsIDEpO1xuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbn1cblxuXG5cblxuXG4vLyBUQVNLIERJU1BMQVkgT1BUSU9OU1xuXG5jb25zdCBzZXRDb250ZW50VGl0bGUgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09ICdkZWxldGVJdGVtJykge1xuICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJylcbiAgICAgICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gZS50YXJnZXQuaW5uZXJUZXh0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbn1cblxuXG5cblxuXG5leHBvcnQge1xuICAgIC8vIFVzZWQgaW4gaW5kZXggJiBjb3JlXG5cblxuICAgIC8vIFVzZWQgb25seSBpbiBjb3JlXG4gICAgY3JlYXRlRm9ybSxcbiAgICBjcmVhdGVDaGVja2xpc3RJY29uLFxuICAgIGNyZWF0ZVdlZWtJY29uLFxuICAgIGNyZWF0ZVRvZGF5SWNvbixcbiAgICBjcmVhdGVBZGRpdGlvbkljb24sXG4gICAgc2V0Q29udGVudFRpdGxlLFxuXG4gICAgLy8gVXNlZCBvbmx5IGluIGluZGV4XG4gICAgY3JlYXRlQ2hlY2tib3hJY29uLFxuICAgIGNyZWF0ZUVkaXRJY29uLFxuICAgIGNyZWF0ZUNhbGVuZGFyRWRpdEljb24sXG4gICAgY3JlYXRlRGVsZXRlSWNvbixcbiAgICBjcmVhdGVBZGRCdXR0b24sXG4gICAgY3JlYXRlQ2FuY2VsQnV0dG9uLFxuXG4gICAgZGlzcGxheVByb2plY3RzLFxuICAgIGRpc3BsYXlUYXNrcyxcbn0iLCJjbGFzcyB0YXNrcyB7XG4gICAgc3RhdGljIGFsbCA9IFtdO1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvciAobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2sgPSBuZXdUYXNrXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB9XG5cblxuXG59O1xuXG5cblxuY2xhc3MgcHJvamVjdHMge1xuICAgIHN0YXRpYyBhbGwgPSBbXTtcblxuXG5cbiAgICBjb25zdHJ1Y3RvciAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdE5hbWVcbiAgICB9XG5cblxuXG59XG5cblxuXG5leHBvcnQge1xuICAgIHByb2plY3RzLFxuICAgIHRhc2tzLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIlxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuaW1wb3J0IGxvZ29JY29uIGZyb20gJy4vYXNzZXRzL2NoZWNrLWRlY2FncmFtLW91dGxpbmUuc3ZnJztcbmltcG9ydCBnaXRodWJJY29uIGZyb20gJy4vYXNzZXRzL0dpdEh1Yi1saWdodC0zMnB4LnBuZyc7XG5cbmltcG9ydCB7IGNyZWF0ZUNoZWNrbGlzdEljb24gfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IHNldENvbnRlbnRUaXRsZSB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlV2Vla0ljb24gfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IGNyZWF0ZVRvZGF5SWNvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlQWRkaXRpb25JY29uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5cblxuLy8gSW5pdGlhbGl6YXRpb24gZnVuY3Rpb25zXG5jb25zdCBfY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgXG4gICAgLy8gZGlzcGxheSB0aXRsZVxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29JY29uO1xuICAgIGxvZ28udGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvZ28nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RoaW5ncyBUbyBEbyc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cblxuY29uc3QgX2NyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG5cbiAgICAvLyBNYWluIG1lbnVcbiAgICBjb25zdCBtZW51T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbWVudU9wdGlvbnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIFxuICAgIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhbGxUYXNrcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FsbFRhc2tzJyk7XG4gICAgYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBzZXRDb250ZW50VGl0bGUoZSlcbiAgICB9KVxuICAgIGNyZWF0ZUNoZWNrbGlzdEljb24oYWxsVGFza3MpO1xuICAgIGNvbnN0IGFsbFRhc2tzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhbGxUYXNrc1RleHQudGV4dENvbnRlbnQgPSAnQWxsIHRhc2tzJztcbiAgICBhbGxUYXNrcy5hcHBlbmRDaGlsZChhbGxUYXNrc1RleHQpXG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoYWxsVGFza3MpO1xuXG4gICAgY29uc3QgZHVlVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGR1ZVRvZGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlVG9kYXknKTtcbiAgICBkdWVUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNldENvbnRlbnRUaXRsZShlKVxuICAgIH0pXG4gICAgY3JlYXRlVG9kYXlJY29uKGR1ZVRvZGF5KTtcbiAgICBjb25zdCBkdWVUb2RheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHVlVG9kYXlUZXh0LmlubmVyVGV4dCA9ICdEdWUgdG9kYXknO1xuICAgIGR1ZVRvZGF5LmFwcGVuZENoaWxkKGR1ZVRvZGF5VGV4dCk7XG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoZHVlVG9kYXkpO1xuXG4gICAgY29uc3QgZHVlV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZHVlV2Vlay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZVdlZWsnKTtcbiAgICBkdWVXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgc2V0Q29udGVudFRpdGxlKGUpXG4gICAgfSlcbiAgICBjcmVhdGVXZWVrSWNvbihkdWVXZWVrKTtcbiAgICBjb25zdCBkdWVXZWVrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkdWVXZWVrVGV4dC5pbm5lclRleHQgPSAnRHVlIHRoaXMgd2Vlayc7XG4gICAgZHVlV2Vlay5hcHBlbmRDaGlsZChkdWVXZWVrVGV4dCk7XG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoZHVlV2Vlayk7XG5cblxuICAgIC8vIFByb2plY3RzIG1lbnVcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0c0hlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RzSGVhZGVyJylcbiAgICBwcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICBjb25zdCBwcm9qZWN0c01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHByb2plY3RzTWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgcHJvamVjdHNNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHNNZW51Jyk7XG5cblxuICAgIC8vIEdlbmVyYXRlIGFkZCBwcm9qZWN0IGJ1dHRvblxuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGFkZFByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRQcm9qZWN0QnRuJylcbiAgICBjcmVhdGVBZGRpdGlvbkljb24oYWRkUHJvamVjdClcbiAgICBjb25zdCBhZGRQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRQcm9qZWN0VGV4dC5pbm5lclRleHQgPSAnQWRkIFByb2plY3QnO1xuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFRleHQpXG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KVxuXG5cbiAgICAvLyBHZW5lcmF0ZSBhbmQgaGlkZSBuZXcgcHJvamVjdCBmb3JtXG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRQcm9qZWN0Rm9ybScpO1xuICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICBhZGRQcm9qZWN0Rm9ybS5tZXRob2QgPSAnZ2V0JztcbiAgICBjcmVhdGVGb3JtKGFkZFByb2plY3RGb3JtKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RGb3JtKVxuXG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVPcHRpb25zKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHByb2plY3RzTWVudSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVudSk7XG59XG5cblxuY29uc3QgX2NyZWF0ZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnRUaXRsZScpO1xuICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSAnQWxsIHRhc2tzJztcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXG4gICAgICAgIGA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdjaGVja2JveENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J3Rhc2tDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdkYXRlQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZWRpdENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J3Rhc2tDbG9zZUNvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSBpZD0ndGFza0xpc3QnPjwvdGJvZHk+YFxuICAgIFxuXG4gICAgLy8gQ3JlYXRlIGFkZCB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGFkZFRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRUYXNrQnRuJyk7XG4gICAgY3JlYXRlQWRkaXRpb25JY29uKGFkZFRhc2spO1xuICAgIGNvbnN0IGFkZFRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZFRhc2tUZXh0LmlubmVyVGV4dCA9ICdBZGQgdGFzayc7XG4gICAgYWRkVGFzay5hcHBlbmRDaGlsZChhZGRUYXNrVGV4dCk7XG4gICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrKTtcblxuICAgIC8vIEdlbmVyYXRlIGFuZCBoaWRlIG5ldyB0YXNrIGZvcm1cbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZFRhc2tGb3JtJyk7XG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgIGFkZFRhc2tGb3JtLm1ldGhvZCA9ICdnZXQnO1xuICAgIGNyZWF0ZUZvcm0oYWRkVGFza0Zvcm0pO1xuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG5cbmNvbnN0IF9jcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcblxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBqY2FtcGJlbGw1N2A7XG4gIFxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Nyc7XG4gICAgZ2l0aHViTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgXG4gICAgY29uc3QgbmV3R2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0dpdGh1Ykljb24uc3JjID0gZ2l0aHViSWNvbjtcbiAgICBuZXdHaXRodWJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2l0aHViJyk7XG5cbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKG5ld0dpdGh1Ykljb24pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIF9jcmVhdGVIZWFkZXIoKTtcbiAgICBfY3JlYXRlTWVudSgpO1xuICAgIF9jcmVhdGVDb250ZW50KCk7XG4gICAgX2NyZWF0ZUZvb3RlcigpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==