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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNFO0FBQ1g7QUFDUztBQUNEO0FBQ1Y7QUFDSjtBQUNpQjtBQUNiOztBQUVWO0FBQ0g7Ozs7QUFJaEM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVEQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsd0RBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixrREFBUztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsc0RBQWdCO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsK0NBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFZO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHVEQUFhO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFZO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsRUFBRTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxFQUFFO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksd0RBQW9CO0FBQ3hCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFtQjtBQUN2QjtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLEVBQUU7QUFDckUseUNBQXlDLEVBQUU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsS0FBSztBQUMxQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxFQUFFO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEVBQUU7OztBQUcxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxxREFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNELG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0EsMERBQTBELE9BQU87QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsRUFBRTtBQUM1RCxzQ0FBc0MsRUFBRTtBQUN4QztBQUNBLG9EQUFvRCxFQUFFO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBZ0I7QUFDcEI7QUFDQTs7Ozs7O0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4YkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7OztBQUlBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTs7QUFFMkQ7QUFDSDs7QUFFSjtBQUNKO0FBQ0w7QUFDSTtBQUNDO0FBQ0c7OztBQUduRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFlO0FBQ3ZCLEtBQUs7QUFDTCxJQUFJLGtFQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFlO0FBQ3ZCLEtBQUs7QUFDTCxJQUFJLDhEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQWU7QUFDdkIsS0FBSztBQUNMLElBQUksNkRBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3REFBVTtBQUNkOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLDBCQUEwQjtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMERBQVU7QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsVUFBVSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW50ZXJhY3RpdmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2NvcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNoZWNrYm94QmxhbmsgZnJvbSAnLi9hc3NldHMvY2hlY2tib3gtYmxhbmsuc3ZnJztcbmltcG9ydCBjaGVja2JveE1hcmtlZCBmcm9tICcuL2Fzc2V0cy9jaGVja2JveC1tYXJrZWQuc3ZnJztcbmltcG9ydCBjaGVja2xpc3QgZnJvbSAnLi9hc3NldHMvY2hlY2tsaXN0LnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJUb2RheSBmcm9tICcuL2Fzc2V0cy9jYWxlbmRhci10b2RheS5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyV2VlayBmcm9tICcuL2Fzc2V0cy9jYWxlbmRhci1yYW5nZS5zdmcnO1xuaW1wb3J0IGFkZGl0aW9uSWNvbiBmcm9tICcuL2Fzc2V0cy9wbHVzLnN2Zyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnLi9hc3NldHMvZWRpdC5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyRWRpdEljb24gZnJvbSAnLi9hc3NldHMvY2FsZW5kYXItZWRpdC5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnLi9hc3NldHMvZGVsZXRlLnN2Zyc7XG5cbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSAnLi90YXNrcyc7XG5pbXBvcnQgeyB0YXNrcyB9IGZyb20gJy4vdGFza3MnO1xuXG5cblxuLy8gSWNvbiAmIGJ1dHRvbiBnZW5lcmF0b3JzIFxuY29uc3QgY3JlYXRlQ2hlY2tib3hJY29uID0gKHRkKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2hlY2tib3hJY29uLnNyYyA9IGNoZWNrYm94Qmxhbms7XG4gICAgY2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICAgIGNoZWNrYm94SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfbWFya0NvbXBsZXRlKGUpKVxuICAgIHRkLmFwcGVuZENoaWxkKGNoZWNrYm94SWNvbik7XG59IFxuXG5jb25zdCBfY3JlYXRlTWFya2VkQ2hlY2tib3hJY29uID0gKHRkKSA9PiB7XG4gICAgY29uc3QgbWFya2VkQ2hlY2tib3hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFya2VkQ2hlY2tib3hJY29uLnNyYyA9IGNoZWNrYm94TWFya2VkO1xuICAgIG1hcmtlZENoZWNrYm94SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKTtcbiAgICBtYXJrZWRDaGVja2JveEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX21hcmtJbmNvbXBsZXRlKGUpKVxuICAgIHRkLmFwcGVuZENoaWxkKG1hcmtlZENoZWNrYm94SWNvbik7XG59IFxuXG5jb25zdCBjcmVhdGVDaGVja2xpc3RJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tsaXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoZWNrbGlzdEljb24uc3JjID0gY2hlY2tsaXN0O1xuICAgIGNoZWNrbGlzdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChjaGVja2xpc3RJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlRWRpdEljb24gPSAodGQpID0+IHtcbiAgICBjb25zdCBuZXdFZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0VkaXRJY29uLnNyYyA9IGVkaXRJY29uO1xuICAgIG5ld0VkaXRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICAgIC8vZXZlbnQgbGlzdGVuZXIgdG8gb3BlbiB0YXNrIGNhcmRcbiAgICBuZXdFZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfc2hvd1Rhc2tDYXJkKGUpKVxuICAgIHRkLmFwcGVuZENoaWxkKG5ld0VkaXRJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlQ2FsZW5kYXJFZGl0SWNvbiA9ICh0ZCkgPT4ge1xuICAgIGNvbnN0IG5ld0NhbGVuZGFyRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdDYWxlbmRhckVkaXRJY29uLnNyYyA9IGNhbGVuZGFyRWRpdEljb247XG4gICAgbmV3Q2FsZW5kYXJFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24gZWRpdERhdGVJY29uJylcbiAgICBuZXdDYWxlbmRhckVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB9KVxuICAgIHRkLmFwcGVuZENoaWxkKG5ld0NhbGVuZGFyRWRpdEljb24pO1xufVxuXG5jb25zdCBjcmVhdGVEZWxldGVJY29uID0gKGNvbnRhaW5lcikgPT4ge1xuICAgIC8vIGNyZWF0ZSBpbWFnZSBhbmQgYXNzaWduIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBuZXdEZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3RGVsZXRlSWNvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgIG5ld0RlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBuZXdEZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVsZXRlSXRlbScpXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICd0YXNrQ2xvc2VDb250YWluZXInKSB7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSB0YXNrXG4gICAgICAgIG5ld0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX2RlbGV0ZVRhc2soZSkpXG4gICAgfSBlbHNlIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAncHJvamVjdENsb3NlQ29udGFpbmVyJykge1xuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciB0byBkZWxldGUgcHJvamVjdFxuICAgICAgICBuZXdEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9kZWxldGVQcm9qZWN0KGUpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHN0cmFuZ2UnKTtcbiAgICB9XG4gICAgLy8gYXBwZW5kIHRvIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEZWxldGVJY29uKVxufVxuXG5jb25zdCBjcmVhdGVBZGRpdGlvbkljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBuZXdBZGRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdBZGRpdGlvbkljb24uc3JjID0gYWRkaXRpb25JY29uO1xuICAgIG5ld0FkZGl0aW9uSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKG5ld0FkZGl0aW9uSWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZVRvZGF5SWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld1RvZGF5SWNvbi5zcmMgPSBjYWxlbmRhclRvZGF5O1xuICAgIG5ld1RvZGF5SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKG5ld1RvZGF5SWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZVdlZWtJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgbmV3V2Vla0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdXZWVrSWNvbi5zcmMgPSBjYWxlbmRhcldlZWs7XG4gICAgbmV3V2Vla0ljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdXZWVrSWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZUFkZEJ1dHRvbiA9IChjb250YWluZXIpID0+IHtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRCdG4nKTtcbiAgICBhZGRCdG4uaW5uZXJUZXh0ID0gXCJzdWJtaXRcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcbiAgICBcbn1cblxuY29uc3QgY3JlYXRlQ2FuY2VsQnV0dG9uID0gKGNvbnRhaW5lciwgaSkgPT4ge1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhbmNlbEJ0bicpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICBjYW5jZWxCdG4uaW5uZXJUZXh0ID0gXCJjYW5jZWxcIjtcbiAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ2NhcmRSb3czJykge1xuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBfaGlkZVRhc2tDYXJkKGkpKVxuICAgIH07XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7ICAgXG59XG5cblxuXG4vLyBDb250YWluZXIgQU5EIGljb24gZ2VuZXJhdG9ycyAoRm9yIHRhc2sgbGlzdGluZyBhbmQgdGFzayBjYXJkKVxuY29uc3QgY3JlYXRlQ2hlY2tib3hDb250YWluZXIgPSAodHIpID0+IHtcbiAgICBjb25zdCBjaGVja2JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2hlY2tib3hDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2JveENvbnRhaW5lcicpO1xuICAgIGNyZWF0ZUNoZWNrYm94SWNvbihjaGVja2JveENvbnRhaW5lcik7XG4gICAgdHIuYXBwZW5kQ2hpbGQoY2hlY2tib3hDb250YWluZXIpO1xufVxuXG5jb25zdCBjcmVhdGVEYXRlQ29udGFpbmVyID0gKHRyKSA9PiB7XG4gICAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgZGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RhdGVDb250YWluZXInKTtcbiAgICBkYXRlQ29udGFpbmVyLmlubmVyVGV4dCA9ICdubyBkYXRlJ1xuICAgIHRyLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xufVxuXG5jb25zdCBjcmVhdGVEZWxldGVDb250YWluZXIgPSAodHIpID0+IHtcbiAgICBjb25zdCBjbG9zZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2xvc2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2xvc2VDb250YWluZXInKTtcbiAgICBjcmVhdGVEZWxldGVJY29uKGNsb3NlQ29udGFpbmVyKTtcbiAgICB0ci5hcHBlbmRDaGlsZChjbG9zZUNvbnRhaW5lcik7XG59XG5cblxuXG4vLyBGb3JtIGdlbmVyYXRvclxuY29uc3QgY3JlYXRlRm9ybSA9IChmb3JtKSA9PiB7XG4gICAgXG4gICAgY29uc3QgZm9ybVJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm1Sb3cnKTtcbiAgICBcbiAgICBjb25zdCBmb3JtUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3cyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybVJvdycpO1xuICAgIGZvcm1Sb3cyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybUJ1dHRvbnMnKTtcblxuICAgIGNvbnN0IGZvcm1Sb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvdzMuc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKTtcblxuICAgIC8vIHJvdyBvbmU6IGFzc2lnbiBpbnB1dCBhY2NvcmRpbmcgdG8gY2xhc3Mgb2YgZm9ybVxuICAgIC8vIHJvdyB0aHJlZTogYXNzaWduIGVycm9yIGNsYXNzIGFuZCB0ZXh0IGFjY29yZGluZyB0byBjbGFzcyBvZiBmb3JtXG4gICAgaWYgKGZvcm0uZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkUHJvamVjdEZvcm0nKSB7XG4gICAgICAgIGZvcm1Sb3cxLmlubmVySFRNTCA9IFwiPGlucHV0IHR5cGU9J3RleHQnIGlkPSduZXdQcm9qZWN0SW5wdXQnIG5hbWU9J25ld1Byb2plY3RJbnB1dCc+PC9pbnB1dD5cIjtcbiAgICAgICAgZm9ybVJvdzMuc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXdQcm9qRXJyb3JDb250YWluZXInKTtcbiAgICAgICAgZm9ybVJvdzMuaW5uZXJUZXh0ID0gJ05hbWUgeW91ciBwcm9qZWN0ISdcbiAgICB9IGVsc2UgaWYgKGZvcm0uZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkVGFza0Zvcm0nKSB7XG4gICAgICAgIGZvcm1Sb3cxLmlubmVySFRNTCA9IFwiPGlucHV0IHR5cGU9J3RleHQnIGlkPSduZXdUYXNrSW5wdXQnIG5hbWU9J25ld1Rhc2tJbnB1dCc+PC9pbnB1dD5cIjtcbiAgICAgICAgZm9ybVJvdzMuc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXdUYXNrRXJyb3JDb250YWluZXInKTtcbiAgICAgICAgZm9ybVJvdzMuaW5uZXJUZXh0ID0gJ05hbWUgeW91ciB0YXNrISdcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBzdHJhbmdlJylcbiAgICB9XG5cbiAgICAvLyByb3cgdHdvOiBzdWJtaXQgYW5kIGNhbmNlbCBidXR0b25zXG4gICAgY3JlYXRlQWRkQnV0dG9uKGZvcm1Sb3cyKTtcbiAgICBjcmVhdGVDYW5jZWxCdXR0b24oZm9ybVJvdzIpO1xuICAgICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzEpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzMpO1xufVxuXG5cblxuXG5cbi8vIERPTSBtb2RpZmljYXRpb24gZnVuY3Rpb25zXG5cbi8vIFBST0pFQ1RTXG4vLyBEaXNwbGF5IGVudGlyZSBhcnJheSBvZiBwcm9qZWN0cyB0byBtZW51XG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgLy8gR3JhYiBwcm9qZWN0cyBtZW51XG4gICAgY29uc3QgcHJvamVjdHNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzTWVudScpO1xuXG4gICAgLy8gQ2xlYXIgcHJvamVjdHMgbWVudVxuICAgIGNvbnN0IG9sZFByb2pDb3VudCA9IHByb2plY3RzTWVudS5jaGlsZEVsZW1lbnRDb3VudFxuICAgIGZvciAobGV0IGk9MDsgaTxvbGRQcm9qQ291bnQ7IGkrKykge1xuICAgICAgICBwcm9qZWN0c01lbnUuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgc2luZ2xlIHByb2plY3QgdG8gbWVudSAoY2FsbGVkIGJlbG93KVxuICAgIGNvbnN0IF9kaXNwbGF5UHJvamVjdCA9IChuZXdQcm9qLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgcHJvamVjdGApXG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YClcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAgICAgICAgIHNldENvbnRlbnRUaXRsZShlKVxuICAgICAgICB9KVxuICAgICAgICBjcmVhdGVDaGVja2xpc3RJY29uKG5ld1Byb2plY3RDb250YWluZXIpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgbmV3UHJvamVjdFRleHQudGV4dENvbnRlbnQgPSBuZXdQcm9qO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUZXh0KVxuICAgICAgICAvLyBleHRyYSB3cmFwcGVyIHNvIGV2ZW50IGxpc3RlbmVycyB3b3JrIG9uIGJvdGggdGFza3MgYW5kIHByb2plY3RzXG4gICAgICAgIGNvbnN0IGNsb3NlQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsb3NlQ29udGFpbmVyRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdENsb3NlQ29udGFpbmVyJylcbiAgICAgICAgY3JlYXRlRGVsZXRlSWNvbihjbG9zZUNvbnRhaW5lckRpdik7ICAgIFxuICAgICAgICAvLyBjcmVhdGVEZWxldGVJY29uKG5ld1Byb2plY3RDb250YWluZXIpO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlQ29udGFpbmVyRGl2KVxuICAgICAgICBwcm9qZWN0c01lbnUuYXBwZW5kQ2hpbGQobmV3UHJvamVjdENvbnRhaW5lcik7XG4gICAgfSBcblxuICAgIC8vIEFwcGVuZCBhbGwgdGFza3MgdG8gdGFza2xpc3RcbiAgICBsZXQgaT0wXG4gICAgcHJvamVjdHMuYWxsLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIF9kaXNwbGF5UHJvamVjdChwcm9qZWN0LCBpKVxuICAgICAgICBpKytcbiAgICB9KTtcbn1cblxuXG5cbi8vIERlbGV0ZSBwcm9qZWN0XG5jb25zdCBfZGVsZXRlUHJvamVjdCA9IChlKSA9PiB7XG4gICAgbGV0IGRvb21lZEluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBwcm9qZWN0cy5hbGwuc3BsaWNlKGRvb21lZEluZGV4LCAxKTtcbiAgICBkaXNwbGF5UHJvamVjdHMoKTtcbn1cblxuXG5cblxuXG4vLyBUQVNLU1xuLy8gRGlzcGxheSBlbnRpcmUgYXJyYXkgb2YgdGFza3MgdG8gdGFza2xpc3RcbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgpID0+IHtcblxuICAgIC8vIEdyYWIgdGFza2xpc3RcbiAgICBjb25zdCB0YXNrbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrTGlzdCcpO1xuICAgIFxuICAgIC8vIGNsZWFyIHRhc2tsaXN0XG4gICAgY29uc3Qgb2xkVGFza0NvdW50ID0gdGFza2xpc3QuY2hpbGRFbGVtZW50Q291bnRcbiAgICBmb3IgKGxldCBpPTA7IGk8b2xkVGFza0NvdW50OyBpKyspIHtcbiAgICAgICAgdGFza2xpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgXG5cbiAgICAvLyBBZGQgc2luZ2xlIHRhc2sgdG8gdGFza2xpc3QgZGlzcGxheVxuICAgIGNvbnN0IF9jcmVhdGVUYXNrTGlzdGluZyA9ICh0YXNrLCBpKSA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSB0YXNrIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBuZXdMaXN0aW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgbmV3TGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYGluY29tcGxldGUgdGFzayBsaXN0aW5nJHtpfWApO1xuICAgICAgICBuZXdMaXN0aW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgICAgICBcbiAgICAgICAgLy8gYWRkIGNoZWNrYm94XG4gICAgICAgIGNyZWF0ZUNoZWNrYm94Q29udGFpbmVyKG5ld0xpc3RpbmcpO1xuICAgICAgICBcbiAgICAgICAgLy8gYWRkIHRhc2tcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ29udGFpbmVyJyk7XG4gICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJUZXh0ID0gYCR7dGFza31gO1xuICAgICAgICBuZXdMaXN0aW5nLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgICAgIC8vIGFkZCBkYXRlXG4gICAgICAgIGNyZWF0ZURhdGVDb250YWluZXIobmV3TGlzdGluZyk7XG5cbiAgICAgICAgLy8gYWRkIGVkaXQgYnV0dG9uXG4gICAgICAgIGNvbnN0IGVkaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBlZGl0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdENvbnRhaW5lcicpO1xuICAgICAgICBjcmVhdGVFZGl0SWNvbihlZGl0Q29udGFpbmVyKTtcbiAgICAgICAgbmV3TGlzdGluZy5hcHBlbmRDaGlsZChlZGl0Q29udGFpbmVyKTtcblxuICAgICAgICAvLyBhZGQgZGVsZXRlIGJ1dHRvblxuICAgICAgICBjcmVhdGVEZWxldGVDb250YWluZXIobmV3TGlzdGluZyk7XG5cbiAgICAgICAgLy9hcHBlbmQgdGFzayB0byB0YXNrbGlzdFxuICAgICAgICB0YXNrbGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0aW5nKTtcbiAgICB9XG4gICAgXG5cbiAgICAvLyBDcmVhdGUgYW5kIGhpZGUgdGFzayBjYXIgaW4gdGFza2xpc3QgZGlzcGxheVxuICAgIGNvbnN0IF9jcmVhdGVUYXNrQ2FyZCA9ICh0YXNrLCBpKSA9PiB7XG4gICAgICAgIC8vIENSRUFURSBUQVNLIENBUkRcbiAgICAgICAgY29uc3QgbmV3Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcbiAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYGluY29tcGxldGUgdGFzayBjYXJkJHtpfWApO1xuICAgICAgICBuZXdDYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgaGlkZGVuYCk7XG5cbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIG5ld0NhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmNvbXBsZXRlIG1lbnVPcHRpb25zJyk7XG4gICAgICAgIG5ld0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgZGVsZXRlIGJ1dHRvblxuICAgICAgICBjcmVhdGVEZWxldGVDb250YWluZXIobmV3Q2FyZCk7XG5cbiAgICAgICAgY29uc3QgbmV3VGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICAgICAgICBuZXdUaGVhZC5pbm5lckhUTUwgPSBcbiAgICAgICAgICAgIGA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdjaGVja2JveENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J3Rhc2tDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdkYXRlQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZWRpdENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgIDwvdHI+YFxuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRib2R5XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrQ2FyZCcpO1xuICAgICAgICBcblxuICAgICAgICAvLyBGaXJzdCByb3dcbiAgICAgICAgY29uc3QgY2FyZFJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3cxJylcbiAgICAgICAgLy8gYWRkIHRhc2sgbmFtZSBpbnB1dFxuICAgICAgICBjb25zdCB0YXNrSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrSW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrSW5wdXRDb250YWluZXInKTtcbiAgICAgICAgdGFza0lucHV0Q29udGFpbmVyLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25ld1Rhc2tJbnB1dCcgbmFtZT0nbmV3VGFza0lucHV0Jz48L2lucHV0PmA7XG4gICAgICAgIGNhcmRSb3cxLmFwcGVuZENoaWxkKHRhc2tJbnB1dENvbnRhaW5lcik7XG4gICAgICAgIC8vIGFkZCBkYXRlXG4gICAgICAgIGNvbnN0IGVkaXREYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgZWRpdERhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0RGF0ZUNvbnRhaW5lcicpO1xuICAgICAgICBjcmVhdGVEYXRlQ29udGFpbmVyKGVkaXREYXRlQ29udGFpbmVyKTtcbiAgICAgICAgY2FyZFJvdzEuYXBwZW5kQ2hpbGQoZWRpdERhdGVDb250YWluZXIpO1xuICAgICAgICAvLyBhZGQgY2FsZW5kYXIgZWRpdCBidXR0b25cbiAgICAgICAgY3JlYXRlQ2FsZW5kYXJFZGl0SWNvbihjYXJkUm93MSk7XG5cblxuICAgICAgICAvLyBTZWNvbmQgcm93IFxuICAgICAgICBjb25zdCBjYXJkUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNhcmRSb3cyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZFJvdzInKVxuICAgICAgICAvLyBhZGQgY2hlY2tib3hcbiAgICAgICAgLy8gY3JlYXRlQ2hlY2tib3hDb250YWluZXIoY2FyZFJvdzIpO1xuICAgICAgICAvLyBwcm9qZWN0IGlucHV0XG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHByb2plY3RJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RJbnB1dENvbnRhaW5lcicpO1xuICAgICAgICBwcm9qZWN0SW5wdXRDb250YWluZXIuaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPSdkcm9wZG93bicgaWQ9J25ld1Rhc2tJbnB1dCcgbmFtZT0nbmV3VGFza0lucHV0Jz48L2lucHV0PmA7XG4gICAgICAgIGNhcmRSb3cyLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dENvbnRhaW5lcik7XG4gICAgICAgIC8vIHByaW9yaXR5IGlucHV0XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHlJbnB1dENvbnRhaW5lcicpO1xuICAgICAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT0nZHJvcGRvd24nIGlkPSduZXdUYXNrSW5wdXQnIG5hbWU9J25ld1Rhc2tJbnB1dCc+PC9pbnB1dD5gO1xuICAgICAgICBjYXJkUm93Mi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0Q29udGFpbmVyKTtcblxuXG4gICAgICAgIC8vIFRoaXJkIHJvdyBcbiAgICAgICAgY29uc3QgY2FyZFJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3czJylcbiAgICAgICAgY3JlYXRlQWRkQnV0dG9uKGNhcmRSb3czKTtcbiAgICAgICAgY3JlYXRlQ2FuY2VsQnV0dG9uKGNhcmRSb3czLCBgJHtpfWApO1xuXG5cbiAgICAgICAgLy8gYXBwZW5kIHRhc2sgY2FyZCB0byB0YXNrbGlzdFxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjYXJkUm93MSk7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNhcmRSb3cyKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFJvdzMpO1xuXG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQobmV3VGhlYWQpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblxuICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQpO1xuXG4gICAgICAgIHRhc2tsaXN0LmFwcGVuZENoaWxkKG5ld0NhcmRDb250YWluZXIpO1xuICAgIH1cbiAgICBcblxuICAgIC8vIGFwcGVuZCBhbGwgdGFza3MgdG8gdGFza2xpc3RcbiAgICBsZXQgaT0wXG4gICAgdGFza3MuYWxsLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIF9jcmVhdGVUYXNrTGlzdGluZyh0YXNrLCBpKTtcbiAgICAgICAgX2NyZWF0ZVRhc2tDYXJkKHRhc2ssIGkpO1xuICAgICAgICBpKytcbiAgICB9KTtcbn1cblxuXG5cblxuXG4vLyBDb21wbGV0ZSB0YXNrXG5jb25zdCBfbWFya0NvbXBsZXRlID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdpZCcsICdjb21wbGV0ZScpO1xuICAgIGxldCBjaGVja2JveENvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICBlLnRhcmdldC5yZW1vdmUoKTtcbiAgICBfY3JlYXRlTWFya2VkQ2hlY2tib3hJY29uKGNoZWNrYm94Q29udGFpbmVyKVxufVxuXG4vLyBJbmNvbXBsZXRlIHRhc2tcbmNvbnN0IF9tYXJrSW5jb21wbGV0ZSA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgnaWQnLCAnJyk7XG4gICAgbGV0IGNoZWNrYm94Q29udGFpbmVyID0gZS50YXJnZXQucGFyZW50RWxlbWVudFxuICAgIGUudGFyZ2V0LnJlbW92ZSgpO1xuICAgIGNyZWF0ZUNoZWNrYm94SWNvbihjaGVja2JveENvbnRhaW5lcilcbn1cblxuLy8gU2hvdyB0YXNrIGNhcmRcbmNvbnN0IF9zaG93VGFza0NhcmQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJRCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgLy8gc2hvdyB0YXNrIGNhcmRcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkJHt0YXNrSUR9YCk7XG4gICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGAke3Rhc2tJRH1gKTtcbiAgICAvL2hpZGUgdGFzayBsaXN0aW5nXG4gICAgY29uc3QgdGFza0xpc3RpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlzdGluZyR7dGFza0lEfWApO1xuICAgIHRhc2tMaXN0aW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG59XG5cbi8vIEhpZGUgdGFzayBjYXJkXG5jb25zdCBfaGlkZVRhc2tDYXJkID0gKGkpID0+IHtcbiAgICAvLyBzaG93IHRhc2sgbGlzdGluZ1xuICAgIGNvbnN0IHRhc2tMaXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3Rpbmcke2l9YCk7XG4gICAgdGFza0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgLy8gaGlkZSB0YXNrIGNhcmRcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkJHtpfWApO1xuICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG59XG5cbi8vIERlbGV0ZSB0YXNrXG5jb25zdCBfZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgbGV0IGRvb21lZEluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICB0YXNrcy5hbGwuc3BsaWNlKGRvb21lZEluZGV4LCAxKTtcbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuXG5cblxuXG4vLyBUQVNLIERJU1BMQVkgT1BUSU9OU1xuXG5jb25zdCBzZXRDb250ZW50VGl0bGUgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09ICdkZWxldGVJdGVtJykge1xuICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJylcbiAgICAgICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gZS50YXJnZXQuaW5uZXJUZXh0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbn1cblxuXG5cblxuXG5leHBvcnQge1xuICAgIC8vIFVzZWQgaW4gaW5kZXggJiBjb3JlXG5cblxuICAgIC8vIFVzZWQgb25seSBpbiBjb3JlXG4gICAgY3JlYXRlRm9ybSxcbiAgICBjcmVhdGVDaGVja2xpc3RJY29uLFxuICAgIGNyZWF0ZVdlZWtJY29uLFxuICAgIGNyZWF0ZVRvZGF5SWNvbixcbiAgICBjcmVhdGVBZGRpdGlvbkljb24sXG4gICAgc2V0Q29udGVudFRpdGxlLFxuXG4gICAgLy8gVXNlZCBvbmx5IGluIGluZGV4XG4gICAgY3JlYXRlQ2hlY2tib3hJY29uLFxuICAgIGNyZWF0ZUVkaXRJY29uLFxuICAgIGNyZWF0ZUNhbGVuZGFyRWRpdEljb24sXG4gICAgY3JlYXRlRGVsZXRlSWNvbixcbiAgICBjcmVhdGVBZGRCdXR0b24sXG4gICAgY3JlYXRlQ2FuY2VsQnV0dG9uLFxuXG4gICAgZGlzcGxheVByb2plY3RzLFxuICAgIGRpc3BsYXlUYXNrcyxcbn0iLCJjbGFzcyB0YXNrcyB7XG4gICAgc3RhdGljIGFsbCA9IFtdO1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvciAobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2sgPSBuZXdUYXNrXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB9XG5cblxuXG59O1xuXG5cblxuY2xhc3MgcHJvamVjdHMge1xuICAgIHN0YXRpYyBhbGwgPSBbXTtcblxuXG5cbiAgICBjb25zdHJ1Y3RvciAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdE5hbWVcbiAgICB9XG5cblxuXG59XG5cblxuXG5leHBvcnQge1xuICAgIHByb2plY3RzLFxuICAgIHRhc2tzLFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIlxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuaW1wb3J0IGxvZ29JY29uIGZyb20gJy4vYXNzZXRzL2NoZWNrLWRlY2FncmFtLW91dGxpbmUuc3ZnJztcbmltcG9ydCBnaXRodWJJY29uIGZyb20gJy4vYXNzZXRzL0dpdEh1Yi1saWdodC0zMnB4LnBuZyc7XG5cbmltcG9ydCB7IGNyZWF0ZUNoZWNrbGlzdEljb24gfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IHNldENvbnRlbnRUaXRsZSB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlV2Vla0ljb24gfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IGNyZWF0ZVRvZGF5SWNvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuaW1wb3J0IHsgY3JlYXRlQWRkaXRpb25JY29uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5cblxuLy8gSW5pdGlhbGl6YXRpb24gZnVuY3Rpb25zXG5jb25zdCBfY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgXG4gICAgLy8gZGlzcGxheSB0aXRsZVxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29JY29uO1xuICAgIGxvZ28udGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgbG9nby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xvZ28nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1RoaW5ncyBUbyBEbyc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cblxuY29uc3QgX2NyZWF0ZU1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51Jyk7XG5cbiAgICAvLyBNYWluIG1lbnVcbiAgICBjb25zdCBtZW51T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbWVudU9wdGlvbnMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIFxuICAgIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhbGxUYXNrcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FsbFRhc2tzJyk7XG4gICAgYWxsVGFza3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBzZXRDb250ZW50VGl0bGUoZSlcbiAgICB9KVxuICAgIGNyZWF0ZUNoZWNrbGlzdEljb24oYWxsVGFza3MpO1xuICAgIGNvbnN0IGFsbFRhc2tzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhbGxUYXNrc1RleHQudGV4dENvbnRlbnQgPSAnQWxsIHRhc2tzJztcbiAgICBhbGxUYXNrcy5hcHBlbmRDaGlsZChhbGxUYXNrc1RleHQpXG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoYWxsVGFza3MpO1xuXG4gICAgY29uc3QgZHVlVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGR1ZVRvZGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlVG9kYXknKTtcbiAgICBkdWVUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNldENvbnRlbnRUaXRsZShlKVxuICAgIH0pXG4gICAgY3JlYXRlVG9kYXlJY29uKGR1ZVRvZGF5KTtcbiAgICBjb25zdCBkdWVUb2RheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHVlVG9kYXlUZXh0LmlubmVyVGV4dCA9ICdEdWUgdG9kYXknO1xuICAgIGR1ZVRvZGF5LmFwcGVuZENoaWxkKGR1ZVRvZGF5VGV4dCk7XG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoZHVlVG9kYXkpO1xuXG4gICAgY29uc3QgZHVlV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgZHVlV2Vlay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZVdlZWsnKTtcbiAgICBkdWVXZWVrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgc2V0Q29udGVudFRpdGxlKGUpXG4gICAgfSlcbiAgICBjcmVhdGVXZWVrSWNvbihkdWVXZWVrKTtcbiAgICBjb25zdCBkdWVXZWVrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkdWVXZWVrVGV4dC5pbm5lclRleHQgPSAnRHVlIHRoaXMgd2Vlayc7XG4gICAgZHVlV2Vlay5hcHBlbmRDaGlsZChkdWVXZWVrVGV4dCk7XG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoZHVlV2Vlayk7XG5cblxuICAgIC8vIFByb2plY3RzIG1lbnVcbiAgICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9qZWN0c0hlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RzSGVhZGVyJylcbiAgICBwcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG5cbiAgICBjb25zdCBwcm9qZWN0c01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHByb2plY3RzTWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgcHJvamVjdHNNZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHNNZW51Jyk7XG5cblxuICAgIC8vIEdlbmVyYXRlIGFkZCBwcm9qZWN0IGJ1dHRvblxuICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGFkZFByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRQcm9qZWN0QnRuJylcbiAgICBjcmVhdGVBZGRpdGlvbkljb24oYWRkUHJvamVjdClcbiAgICBjb25zdCBhZGRQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRQcm9qZWN0VGV4dC5pbm5lclRleHQgPSAnQWRkIFByb2plY3QnO1xuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdFRleHQpXG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KVxuXG5cbiAgICAvLyBHZW5lcmF0ZSBhbmQgaGlkZSBuZXcgcHJvamVjdCBmb3JtXG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRQcm9qZWN0Rm9ybScpO1xuICAgIGFkZFByb2plY3RGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJylcbiAgICBhZGRQcm9qZWN0Rm9ybS5tZXRob2QgPSAnZ2V0JztcbiAgICBjcmVhdGVGb3JtKGFkZFByb2plY3RGb3JtKTtcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3RGb3JtKVxuXG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVPcHRpb25zKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHByb2plY3RzTWVudSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0Q29udGFpbmVyKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWVudSk7XG59XG5cblxuY29uc3QgX2NyZWF0ZUNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnRUaXRsZScpO1xuICAgIGNvbnRlbnRUaXRsZS5pbm5lclRleHQgPSAnQWxsIHRhc2tzJztcblxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIHRhc2tDb250YWluZXIuaW5uZXJIVE1MID0gXG4gICAgICAgIGA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdjaGVja2JveENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J3Rhc2tDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdkYXRlQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZWRpdENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J3Rhc2tDbG9zZUNvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSBpZD0ndGFza0xpc3QnPjwvdGJvZHk+YFxuICAgIFxuXG4gICAgLy8gQ3JlYXRlIGFkZCB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGFkZFRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51T3B0aW9ucycpO1xuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFkZFRhc2suc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRUYXNrQnRuJyk7XG4gICAgY3JlYXRlQWRkaXRpb25JY29uKGFkZFRhc2spO1xuICAgIGNvbnN0IGFkZFRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZFRhc2tUZXh0LmlubmVyVGV4dCA9ICdBZGQgdGFzayc7XG4gICAgYWRkVGFzay5hcHBlbmRDaGlsZChhZGRUYXNrVGV4dCk7XG4gICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrKTtcblxuICAgIC8vIEdlbmVyYXRlIGFuZCBoaWRlIG5ldyB0YXNrIGZvcm1cbiAgICBjb25zdCBhZGRUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZFRhc2tGb3JtJyk7XG4gICAgYWRkVGFza0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgIGFkZFRhc2tGb3JtLm1ldGhvZCA9ICdnZXQnO1xuICAgIGNyZWF0ZUZvcm0oYWRkVGFza0Zvcm0pO1xuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0NvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG5cbmNvbnN0IF9jcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcblxuICAgIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBqY2FtcGJlbGw1N2A7XG4gIFxuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9qY2FtcGJlbGw1Nyc7XG4gICAgZ2l0aHViTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgXG4gICAgY29uc3QgbmV3R2l0aHViSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0dpdGh1Ykljb24uc3JjID0gZ2l0aHViSWNvbjtcbiAgICBuZXdHaXRodWJJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZ2l0aHViJyk7XG5cbiAgICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKG5ld0dpdGh1Ykljb24pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cblxuXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuICAgIF9jcmVhdGVIZWFkZXIoKTtcbiAgICBfY3JlYXRlTWVudSgpO1xuICAgIF9jcmVhdGVDb250ZW50KCk7XG4gICAgX2NyZWF0ZUZvb3RlcigpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsaXplOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==