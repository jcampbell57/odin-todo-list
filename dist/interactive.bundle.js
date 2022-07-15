/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!****************************!*\
  !*** ./src/interactive.js ***!
  \****************************/
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
        newCardContainer.setAttribute('class', `incomplete task card${i}`);
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






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSw2Q0FBUztBQUNqQjtBQUNBLFFBQVEsNkNBQVM7QUFDakIsb0JBQW9CLDZDQUFTO0FBQzdCLE1BQU0sU0FBUyw2Q0FBUztBQUN4QjtBQUNBLFFBQVEsNkNBQVM7QUFDakIsb0JBQW9CLDZDQUFTO0FBQzdCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxPQUFPO0FBQzNELG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0EsMERBQTBELE9BQU87QUFDakU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0RBQStELE9BQU87QUFDdEUsK0RBQStELE9BQU87QUFDdEUscUVBQXFFLE9BQU87QUFDNUUsdUVBQXVFLE9BQU87O0FBRTlFO0FBQ0EsSUFBSSw2Q0FBUztBQUNiLElBQUksNkNBQVM7QUFDYixJQUFJLDZDQUFTO0FBQ2IsSUFBSSw2Q0FBUzs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEVBQUU7QUFDNUQsc0NBQXNDLEVBQUU7QUFDeEM7QUFDQSxvREFBb0QsRUFBRTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksb0RBQWdCO0FBQ3BCO0FBQ0E7Ozs7OztBQU1BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbnRlcmFjdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyB0YXNrcyB7XG4gICAgc3RhdGljIGFsbCA9IFtdO1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvciAobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2sgPSBuZXdUYXNrXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlXG4gICAgfVxuXG5cblxufTtcblxuXG5cbmNsYXNzIHByb2plY3RzIHtcbiAgICBzdGF0aWMgYWxsID0gW107XG5cblxuXG4gICAgY29uc3RydWN0b3IgKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb2plY3ROYW1lXG4gICAgfVxuXG5cblxufVxuXG5cblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0cyxcbiAgICB0YXNrcyxcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgY2hlY2tib3hCbGFuayBmcm9tICcuL2Fzc2V0cy9jaGVja2JveC1ibGFuay5zdmcnO1xuaW1wb3J0IGNoZWNrYm94TWFya2VkIGZyb20gJy4vYXNzZXRzL2NoZWNrYm94LW1hcmtlZC5zdmcnO1xuaW1wb3J0IGNoZWNrbGlzdCBmcm9tICcuL2Fzc2V0cy9jaGVja2xpc3Quc3ZnJztcbmltcG9ydCBjYWxlbmRhclRvZGF5IGZyb20gJy4vYXNzZXRzL2NhbGVuZGFyLXRvZGF5LnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJXZWVrIGZyb20gJy4vYXNzZXRzL2NhbGVuZGFyLXJhbmdlLnN2Zyc7XG5pbXBvcnQgYWRkaXRpb25JY29uIGZyb20gJy4vYXNzZXRzL3BsdXMuc3ZnJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2Fzc2V0cy9lZGl0LnN2Zyc7XG5pbXBvcnQgY2FsZW5kYXJFZGl0SWNvbiBmcm9tICcuL2Fzc2V0cy9jYWxlbmRhci1lZGl0LnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICcuL2Fzc2V0cy9kZWxldGUuc3ZnJztcblxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuL3Rhc2tzJztcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSAnLi90YXNrcyc7XG5cblxuXG4vLyBJY29uICYgYnV0dG9uIGdlbmVyYXRvcnMgXG5jb25zdCBjcmVhdGVDaGVja2JveEljb24gPSAodGQsIHRhc2ssIGkpID0+IHtcbiAgICBjb25zdCBjaGVja2JveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgIGNoZWNrYm94SWNvbi5zcmMgPSBjaGVja2JveE1hcmtlZFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrYm94SWNvbi5zcmMgPSBjaGVja2JveEJsYW5rO1xuICAgIH1cbiAgICBjaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gICAgY2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgIGNoZWNrYm94SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfbWFya0NvbXBsZXRlKGUpKVxuICAgIHRkLmFwcGVuZENoaWxkKGNoZWNrYm94SWNvbik7XG59IFxuXG5jb25zdCBfY3JlYXRlTWFya2VkQ2hlY2tib3hJY29uID0gKHRkKSA9PiB7XG4gICAgY29uc3QgbWFya2VkQ2hlY2tib3hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFya2VkQ2hlY2tib3hJY29uLnNyYyA9IGNoZWNrYm94TWFya2VkO1xuICAgIG1hcmtlZENoZWNrYm94SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKTtcbiAgICBtYXJrZWRDaGVja2JveEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX21hcmtJbmNvbXBsZXRlKGUpKVxuICAgIHRkLmFwcGVuZENoaWxkKG1hcmtlZENoZWNrYm94SWNvbik7XG59IFxuXG5jb25zdCBjcmVhdGVDaGVja2xpc3RJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tsaXN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoZWNrbGlzdEljb24uc3JjID0gY2hlY2tsaXN0O1xuICAgIGNoZWNrbGlzdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChjaGVja2xpc3RJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlRWRpdEljb24gPSAodGQpID0+IHtcbiAgICBjb25zdCBuZXdFZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0VkaXRJY29uLnNyYyA9IGVkaXRJY29uO1xuICAgIG5ld0VkaXRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICAgIC8vZXZlbnQgbGlzdGVuZXIgdG8gb3BlbiB0YXNrIGNhcmRcbiAgICBuZXdFZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfc2hvd1Rhc2tDYXJkKGUpKVxuICAgIHRkLmFwcGVuZENoaWxkKG5ld0VkaXRJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlQ2FsZW5kYXJFZGl0SWNvbiA9ICh0ZCkgPT4ge1xuICAgIGNvbnN0IG5ld0NhbGVuZGFyRWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdDYWxlbmRhckVkaXRJY29uLnNyYyA9IGNhbGVuZGFyRWRpdEljb247XG4gICAgbmV3Q2FsZW5kYXJFZGl0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24gZWRpdERhdGVJY29uJylcbiAgICBuZXdDYWxlbmRhckVkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB9KVxuICAgIHRkLmFwcGVuZENoaWxkKG5ld0NhbGVuZGFyRWRpdEljb24pO1xufVxuXG5jb25zdCBjcmVhdGVEZWxldGVJY29uID0gKGNvbnRhaW5lcikgPT4ge1xuICAgIC8vIGNyZWF0ZSBpbWFnZSBhbmQgYXNzaWduIGF0dHJpYnV0ZXNcbiAgICBjb25zdCBuZXdEZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3RGVsZXRlSWNvbi5zcmMgPSBkZWxldGVJY29uO1xuICAgIG5ld0RlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBuZXdEZWxldGVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVsZXRlSXRlbScpXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyXG4gICAgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICd0YXNrQ2xvc2VDb250YWluZXInKSB7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSB0YXNrXG4gICAgICAgIG5ld0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX2RlbGV0ZVRhc2soZSkpXG4gICAgfSBlbHNlIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAncHJvamVjdENsb3NlQ29udGFpbmVyJykge1xuICAgICAgICAvLyBFdmVudCBsaXN0ZW5lciB0byBkZWxldGUgcHJvamVjdFxuICAgICAgICBuZXdEZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9kZWxldGVQcm9qZWN0KGUpKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHN0cmFuZ2UnKTtcbiAgICB9XG4gICAgLy8gYXBwZW5kIHRvIGNvbnRhaW5lclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEZWxldGVJY29uKVxufVxuXG5jb25zdCBjcmVhdGVBZGRpdGlvbkljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBuZXdBZGRpdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdBZGRpdGlvbkljb24uc3JjID0gYWRkaXRpb25JY29uO1xuICAgIG5ld0FkZGl0aW9uSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKG5ld0FkZGl0aW9uSWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZVRvZGF5SWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld1RvZGF5SWNvbi5zcmMgPSBjYWxlbmRhclRvZGF5O1xuICAgIG5ld1RvZGF5SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKG5ld1RvZGF5SWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZVdlZWtJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgbmV3V2Vla0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdXZWVrSWNvbi5zcmMgPSBjYWxlbmRhcldlZWs7XG4gICAgbmV3V2Vla0ljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJylcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdXZWVrSWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZUFkZEJ1dHRvbiA9IChjb250YWluZXIsIGkpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhjb250YWluZXIpXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkQnRuJyk7XG4gICAgYWRkQnRuLmlubmVyVGV4dCA9IFwic3VibWl0XCI7XG4gICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NhcmRSb3czJykpIHtcbiAgICAgICAgLy8gY29udmVydCBjYXJkIHRvIGZvcm0/IGFuZCBjaGFuZ2UgdGhpcyBldmVudCBsaXN0ZW5lciB0byB0cmlnZ2VyIHdoZW4gZm9ybSBzdWJtaXRzXG4gICAgICAgIGFkZEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9zdWJtaXRUYXNrQ2FyZChlKSlcbiAgICB9O1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xufVxuXG5jb25zdCBjcmVhdGVDYW5jZWxCdXR0b24gPSAoY29udGFpbmVyLCBpKSA9PiB7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FuY2VsQnRuJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgIGNhbmNlbEJ0bi5pbm5lclRleHQgPSBcImNhbmNlbFwiO1xuICAgIGlmIChjb250YWluZXIuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnY2FyZFJvdzMnKSB7XG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IF9oaWRlVGFza0NhcmQoaSkpXG4gICAgfTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTsgICBcbn1cblxuXG5cbi8vIENvbnRhaW5lciBBTkQgaWNvbiBnZW5lcmF0b3JzIChGb3IgdGFzayBsaXN0aW5nIGFuZCB0YXNrIGNhcmQpXG5jb25zdCBjcmVhdGVDaGVja2JveENvbnRhaW5lciA9ICh0ciwgdGFzaywgaSkgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjaGVja2JveENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrYm94Q29udGFpbmVyJyk7XG4gICAgY3JlYXRlQ2hlY2tib3hJY29uKGNoZWNrYm94Q29udGFpbmVyLCB0YXNrLCBpKTtcbiAgICB0ci5hcHBlbmRDaGlsZChjaGVja2JveENvbnRhaW5lcik7XG59XG5cbmNvbnN0IGNyZWF0ZURhdGVDb250YWluZXIgPSAodHIsIHRhc2ssIGkpID0+IHtcbiAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBkYXRlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGF0ZUNvbnRhaW5lcicpO1xuICAgIGlmICh0ci5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXREYXRlQ29udGFpbmVyJykpIHtcbiAgICAgICAgZGF0ZUNvbnRhaW5lci5pbm5lckhUTUwgPSBgPGlucHV0IGNsYXNzPSd0YXNrQ2FyZERhdGUke2l9JyB0eXBlPSdkYXRlJyB2YWx1ZT0nJHt0YXNrLmRhdGV9Jz5gXG4gICAgfSBlbHNlIHtcbiAgICBkYXRlQ29udGFpbmVyLmlubmVyVGV4dCA9IGAke3Rhc2suZGF0ZX1gXG4gICAgfVxuICAgIHRyLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xufVxuXG5jb25zdCBjcmVhdGVEZWxldGVDb250YWluZXIgPSAodHIpID0+IHtcbiAgICBjb25zdCBjbG9zZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgY2xvc2VDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0YXNrQ2xvc2VDb250YWluZXInKTtcbiAgICBjcmVhdGVEZWxldGVJY29uKGNsb3NlQ29udGFpbmVyKTtcbiAgICB0ci5hcHBlbmRDaGlsZChjbG9zZUNvbnRhaW5lcik7XG59XG5cblxuXG4vLyBGb3JtIGdlbmVyYXRvclxuY29uc3QgY3JlYXRlRm9ybSA9IChmb3JtKSA9PiB7XG4gICAgXG4gICAgY29uc3QgZm9ybVJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm1Sb3cnKTtcbiAgICBcbiAgICBjb25zdCBmb3JtUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3cyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybVJvdycpO1xuICAgIGZvcm1Sb3cyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybUJ1dHRvbnMnKTtcblxuICAgIGNvbnN0IGZvcm1Sb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvdzMuc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKTtcblxuICAgIC8vIHJvdyBvbmU6IGFzc2lnbiBpbnB1dCBhY2NvcmRpbmcgdG8gY2xhc3Mgb2YgZm9ybVxuICAgIC8vIHJvdyB0aHJlZTogYXNzaWduIGVycm9yIGNsYXNzIGFuZCB0ZXh0IGFjY29yZGluZyB0byBjbGFzcyBvZiBmb3JtXG4gICAgaWYgKGZvcm0uZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkUHJvamVjdEZvcm0nKSB7XG4gICAgICAgIGZvcm1Sb3cxLmlubmVySFRNTCA9IFwiPGlucHV0IHR5cGU9J3RleHQnIGlkPSduZXdQcm9qZWN0SW5wdXQnIG5hbWU9J25ld1Byb2plY3RJbnB1dCc+PC9pbnB1dD5cIjtcbiAgICAgICAgZm9ybVJvdzMuc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXdQcm9qRXJyb3JDb250YWluZXInKTtcbiAgICAgICAgZm9ybVJvdzMuaW5uZXJUZXh0ID0gJ05hbWUgeW91ciBwcm9qZWN0ISdcbiAgICB9IGVsc2UgaWYgKGZvcm0uZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSAnYWRkVGFza0Zvcm0nKSB7XG4gICAgICAgIGZvcm1Sb3cxLmlubmVySFRNTCA9IFwiPGlucHV0IHR5cGU9J3RleHQnIGlkPSduZXdUYXNrSW5wdXQnIG5hbWU9J25ld1Rhc2tJbnB1dCc+PC9pbnB1dD5cIjtcbiAgICAgICAgZm9ybVJvdzMuc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXdUYXNrRXJyb3JDb250YWluZXInKTtcbiAgICAgICAgZm9ybVJvdzMuaW5uZXJUZXh0ID0gJ05hbWUgeW91ciB0YXNrISdcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBzdHJhbmdlJylcbiAgICB9XG5cbiAgICAvLyByb3cgdHdvOiBzdWJtaXQgYW5kIGNhbmNlbCBidXR0b25zXG4gICAgY3JlYXRlQWRkQnV0dG9uKGZvcm1Sb3cyKTtcbiAgICBjcmVhdGVDYW5jZWxCdXR0b24oZm9ybVJvdzIpO1xuICAgICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzEpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzIpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVJvdzMpO1xufVxuXG5cblxuXG5cbi8vIERPTSBtb2RpZmljYXRpb24gZnVuY3Rpb25zXG5cbi8vIFBST0pFQ1RTXG4vLyBEaXNwbGF5IGVudGlyZSBhcnJheSBvZiBwcm9qZWN0cyB0byBtZW51XG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgLy8gR3JhYiBwcm9qZWN0cyBtZW51XG4gICAgY29uc3QgcHJvamVjdHNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3RzTWVudScpO1xuXG4gICAgLy8gQ2xlYXIgcHJvamVjdHMgbWVudVxuICAgIGNvbnN0IG9sZFByb2pDb3VudCA9IHByb2plY3RzTWVudS5jaGlsZEVsZW1lbnRDb3VudFxuICAgIGZvciAobGV0IGk9MDsgaTxvbGRQcm9qQ291bnQ7IGkrKykge1xuICAgICAgICBwcm9qZWN0c01lbnUuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgc2luZ2xlIHByb2plY3QgdG8gbWVudSAoY2FsbGVkIGJlbG93KVxuICAgIGNvbnN0IF9kaXNwbGF5UHJvamVjdCA9IChuZXdQcm9qLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgcHJvamVjdGApXG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YClcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldClcbiAgICAgICAgICAgIHNldENvbnRlbnRUaXRsZShlKVxuICAgICAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICAgIH0pXG4gICAgICAgIGNyZWF0ZUNoZWNrbGlzdEljb24obmV3UHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBuZXdQcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IG5ld1Byb2o7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRleHQpXG4gICAgICAgIC8vIGV4dHJhIHdyYXBwZXIgc28gZXZlbnQgbGlzdGVuZXJzIHdvcmsgb24gYm90aCB0YXNrcyBhbmQgcHJvamVjdHNcbiAgICAgICAgY29uc3QgY2xvc2VDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2xvc2VDb250YWluZXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0Q2xvc2VDb250YWluZXInKVxuICAgICAgICBjcmVhdGVEZWxldGVJY29uKGNsb3NlQ29udGFpbmVyRGl2KTsgICAgXG4gICAgICAgIC8vIGNyZWF0ZURlbGV0ZUljb24obmV3UHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VDb250YWluZXJEaXYpXG4gICAgICAgIHByb2plY3RzTWVudS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9IFxuXG4gICAgLy8gQXBwZW5kIGFsbCB0YXNrcyB0byB0YXNrbGlzdFxuICAgIGxldCBpPTBcbiAgICBwcm9qZWN0cy5hbGwuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgX2Rpc3BsYXlQcm9qZWN0KHByb2plY3QsIGkpXG4gICAgICAgIGkrK1xuICAgIH0pO1xufVxuXG5cblxuLy8gRGVsZXRlIHByb2plY3RcbmNvbnN0IF9kZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgICBsZXQgZG9vbWVkSW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIHByb2plY3RzLmFsbC5zcGxpY2UoZG9vbWVkSW5kZXgsIDEpO1xuICAgIGRpc3BsYXlQcm9qZWN0cygpO1xufVxuXG5cblxuXG5cbi8vIFRBU0tTXG4vLyBEaXNwbGF5IGVudGlyZSBhcnJheSBvZiB0YXNrcyB0byB0YXNrbGlzdFxuY29uc3QgZGlzcGxheVRhc2tzID0gKCkgPT4ge1xuXG4gICAgLy8gR3JhYiB0YXNrbGlzdFxuICAgIGNvbnN0IHRhc2tsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tMaXN0Jyk7XG4gICAgXG4gICAgLy8gY2xlYXIgdGFza2xpc3RcbiAgICBjb25zdCBvbGRUYXNrQ291bnQgPSB0YXNrbGlzdC5jaGlsZEVsZW1lbnRDb3VudFxuICAgIGZvciAobGV0IGk9MDsgaTxvbGRUYXNrQ291bnQ7IGkrKykge1xuICAgICAgICB0YXNrbGlzdC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICBcblxuICAgIC8vIEFkZCBzaW5nbGUgdGFzayB0byB0YXNrbGlzdCBkaXNwbGF5XG4gICAgY29uc3QgX2NyZWF0ZVRhc2tMaXN0aW5nID0gKHRhc2ssIGkpID0+IHtcbiAgICAgICAgLy8gY3JlYXRlIHRhc2sgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IG5ld0xpc3RpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBuZXdMaXN0aW5nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGFzayBsaXN0aW5nJHtpfWApO1xuICAgICAgICAvLyBjb21wbGV0ZSBmaWx0ZXIgdG8gYXNzaWduIGNsYXNzXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxuICAgICAgICB9XG4gICAgICAgIC8vIGFzc2lnbiBwcmlvcml0eSBjbGFzc1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICBuZXdMaXN0aW5nLmNsYXNzTGlzdC5hZGQoJ2hpZ2hQcmlvcml0eScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICBuZXdMaXN0aW5nLmNsYXNzTGlzdC5hZGQoJ21lZGl1bVByaW9yaXR5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnbG93UHJpb3JpdHknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgY2hlY2tib3hcbiAgICAgICAgY3JlYXRlQ2hlY2tib3hDb250YWluZXIobmV3TGlzdGluZywgdGFzaywgaSk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgdGFza1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2tDb250YWluZXIke2l9YCk7XG4gICAgICAgIC8vIGNvbXBsZXRlIGZpbHRlciBmb3Igc3RyaWtldGhyb3VnaFxuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tcGxldGUnKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrQ29udGFpbmVyLmlubmVyVGV4dCA9IGAke3Rhc2sudGFza31gO1xuICAgICAgICBuZXdMaXN0aW5nLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuXG4gICAgICAgIC8vIGFkZCBkYXRlXG4gICAgICAgIGNyZWF0ZURhdGVDb250YWluZXIobmV3TGlzdGluZywgdGFzayk7XG5cbiAgICAgICAgLy8gYWRkIGVkaXQgYnV0dG9uXG4gICAgICAgIGNvbnN0IGVkaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBlZGl0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdENvbnRhaW5lcicpO1xuICAgICAgICBjcmVhdGVFZGl0SWNvbihlZGl0Q29udGFpbmVyKTtcbiAgICAgICAgbmV3TGlzdGluZy5hcHBlbmRDaGlsZChlZGl0Q29udGFpbmVyKTtcblxuICAgICAgICAvLyBhZGQgZGVsZXRlIGJ1dHRvblxuICAgICAgICBjcmVhdGVEZWxldGVDb250YWluZXIobmV3TGlzdGluZyk7XG5cbiAgICAgICAgLy9hcHBlbmQgdGFzayB0byB0YXNrbGlzdFxuICAgICAgICB0YXNrbGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0aW5nKTtcblxuXG5cbiAgICAgICAgLy8gc2V0IGRpc3BsYXkgZmlsdGVyXG4gICAgICAgIGNvbnN0IGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50VGl0bGUnKS50ZXh0Q29udGVudFxuXG4gICAgICAgIC8vIGRhdGUgZmlsdGVyc1xuICAgICAgICBpZiAoZmlsdGVyID09PSAnQWxsIHRhc2tzJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlciA9PT0gJ0R1ZSB0b2RheScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSAnRHVlIHRoaXMgd2VlaycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcik7XG4gICAgICAgIH0gXG5cbiAgICAgICAgLy8gcHJvamVjdCBmaWx0ZXJcbiAgICAgICAgcHJvamVjdHMuYWxsLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBpZiAocHJvamVjdCA9PT0gZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2sucHJvamVjdCAhPT0gZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgfTsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBcblxuICAgIC8vIENyZWF0ZSBhbmQgaGlkZSB0YXNrIGNhcmQgaW4gdGFza2xpc3QgZGlzcGxheVxuICAgIGNvbnN0IF9jcmVhdGVUYXNrQ2FyZCA9ICh0YXNrLCBpKSA9PiB7XG4gICAgICAgIC8vIENSRUFURSBUQVNLIENBUkRcbiAgICAgICAgY29uc3QgbmV3Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJylcbiAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYGluY29tcGxldGUgdGFzayBjYXJkJHtpfWApO1xuICAgICAgICBuZXdDYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgaGlkZGVuYCk7XG5cbiAgICAgICAgLy8gY29tcGxldGUgZmlsdGVyIHRvIGFzc2lnbiBjbGFzc1xuICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJylcbiAgICAgICAgfSAgICAgICBcblxuICAgICAgICAvLyBhc3NpZ24gcHJpb3JpdHkgY2xhc3NcbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWdoUHJpb3JpdHknKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbWVkaXVtJykge1xuICAgICAgICAgICAgbmV3Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZWRpdW1Qcmlvcml0eScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvd1ByaW9yaXR5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgICAgICBuZXdDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW5jb21wbGV0ZSBtZW51T3B0aW9ucycpO1xuICAgICAgICBuZXdDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIGRlbGV0ZSBidXR0b25cbiAgICAgICAgY3JlYXRlRGVsZXRlQ29udGFpbmVyKG5ld0NhcmQpO1xuXG4gICAgICAgIGNvbnN0IG5ld1RoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKTtcbiAgICAgICAgbmV3VGhlYWQuaW5uZXJIVE1MID0gXG4gICAgICAgICAgICBgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nY2hlY2tib3hDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSd0YXNrQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZGF0ZUNvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2VkaXRDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICA8L3RyPmBcbiAgICAgICAgXG4gICAgICAgIC8vIENyZWF0ZSB0Ym9keVxuICAgICAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0NhcmQnKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gRmlyc3Qgcm93XG4gICAgICAgIGNvbnN0IGNhcmRSb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY2FyZFJvdzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkUm93MScpXG4gICAgICAgIC8vIGFkZCB0YXNrIG5hbWUgaW5wdXRcbiAgICAgICAgY29uc3QgdGFza0lucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGFza0lucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGFza0lucHV0Q29udGFpbmVyYCk7XG4gICAgICAgIHRhc2tJbnB1dENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9J3RleHQnIGNsYXNzPSd0YXNrQ2FyZFRhc2ske2l9JyBpZD0nbmV3VGFza0lucHV0JyBuYW1lPSduZXdUYXNrSW5wdXQnIHZhbHVlPScke3Rhc2sudGFza30nPjwvaW5wdXQ+YDtcbiAgICAgICAgY2FyZFJvdzEuYXBwZW5kQ2hpbGQodGFza0lucHV0Q29udGFpbmVyKTtcbiAgICAgICAgLy8gYWRkIGRhdGVcbiAgICAgICAgY29uc3QgZWRpdERhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBlZGl0RGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYGVkaXREYXRlQ29udGFpbmVyYCk7XG4gICAgICAgIGNyZWF0ZURhdGVDb250YWluZXIoZWRpdERhdGVDb250YWluZXIsIHRhc2ssIGkpO1xuICAgICAgICBjYXJkUm93MS5hcHBlbmRDaGlsZChlZGl0RGF0ZUNvbnRhaW5lcik7XG4gICAgICAgIC8vIGFkZCBjYWxlbmRhciBlZGl0IGJ1dHRvblxuICAgICAgICBjcmVhdGVDYWxlbmRhckVkaXRJY29uKGNhcmRSb3cxKTtcblxuXG5cbiAgICAgICAgLy8gU2Vjb25kIHJvdyBcbiAgICAgICAgY29uc3QgY2FyZFJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93Mi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3cyJylcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCBjaGVja2JveFxuICAgICAgICAvLyBjcmVhdGVDaGVja2JveENvbnRhaW5lcihjYXJkUm93Mik7XG4gICAgICAgIFxuICAgICAgICAvLyBwcm9qZWN0IGlucHV0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBwcm9qZWN0SW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0SW5wdXRDb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBwcm9qZWN0IGRyb3Bkb3duIFxuICAgICAgICBjb25zdCBwcm9qZWN0RHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuICAgICAgICBwcm9qZWN0RHJvcGRvd24uc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrQ2FyZFByb2plY3Qke2l9YClcbiAgICAgICAgcHJvamVjdERyb3Bkb3duLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3VGFza0lucHV0JylcbiAgICAgICAgcHJvamVjdERyb3Bkb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXdUYXNrSW5wdXQnKVxuICAgICAgICBwcm9qZWN0RHJvcGRvd24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3Rhc2sucHJvamVjdH1gKVxuXG4gICAgICAgIC8vIGNyZWF0ZSBwcm9qZWN0IGRyb3Bkb3duIG9wdGlvbnNcbiAgICAgICAgLy8gYmxhbmsgb3B0aW9uIGZvciBubyBwcm9qZWN0XG4gICAgICAgIGNvbnN0IGJsYW5rUHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIGJsYW5rUHJvamVjdE9wdGlvbi52YWx1ZSA9ICcnXG4gICAgICAgIGJsYW5rUHJvamVjdE9wdGlvbi50ZXh0ID0gJydcbiAgICAgICAgcHJvamVjdERyb3Bkb3duLmFwcGVuZENoaWxkKGJsYW5rUHJvamVjdE9wdGlvbilcbiAgICAgICAgLy8gcmVtYWluaW5nIG9wdGlvbnMgZ2VuZXJhdGVkIGZyb20gcHJvamVjdHMgYXJyYXlcbiAgICAgICAgcHJvamVjdHMuYWxsLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24udmFsdWUgPSBgJHtwcm9qZWN0fWBcbiAgICAgICAgICAgIHByb2plY3RPcHRpb24udGV4dCA9IGAke3Byb2plY3R9YFxuICAgICAgICAgICAgaWYgKHRhc2sucHJvamVjdCA9PT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvamVjdERyb3Bkb3duLmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RHJvcGRvd24pXG4gICAgICAgIGNhcmRSb3cyLmFwcGVuZENoaWxkKHByb2plY3RJbnB1dENvbnRhaW5lcik7XG4gICAgICAgIFxuXG4gICAgICAgIC8vIHByaW9yaXR5IGlucHV0IGNvbnRhaW5lclxuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5SW5wdXRDb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBwcmlvcml0eSBkcm9wZG93biBcbiAgICAgICAgY29uc3QgcHJpb3JpdHlEcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrQ2FyZFByaW9yaXR5JHtpfWApXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCdpZCcsICduZXdUYXNrSW5wdXQnKVxuICAgICAgICBwcmlvcml0eURyb3Bkb3duLnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXdUYXNrSW5wdXQnKVxuICAgICAgICBwcmlvcml0eURyb3Bkb3duLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHt0YXNrLnByaW9yaXR5fWApXG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgcHJpb3JpdHkgZHJvcGRvd24gb3B0aW9uc1xuICAgICAgICAvLyBoaWdoIHByaW9yaXR5XG4gICAgICAgIGNvbnN0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByaW9yaXR5SGlnaC52YWx1ZSA9ICdoaWdoJ1xuICAgICAgICBwcmlvcml0eUhpZ2gudGV4dCA9ICdIaWdoJ1xuICAgICAgICAvLyBtZWRpdW0gcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBwcmlvcml0eU1lZGl1bS52YWx1ZSA9ICdtZWRpdW0nXG4gICAgICAgIHByaW9yaXR5TWVkaXVtLnRleHQgPSAnTWVkaXVtJ1xuICAgICAgICAvLyBsb3cgcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBwcmlvcml0eUxvdy52YWx1ZSA9ICdsb3cnXG4gICAgICAgIHByaW9yaXR5TG93LnRleHQgPSAnTG93J1xuICAgICAgICBcbiAgICAgICAgLy8gcHJpb3JpdHkgc2VsZWN0aW9uXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgcHJpb3JpdHlIaWdoLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICBwcmlvcml0eUxvdy5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBcbiAgICAgICAgcHJpb3JpdHlNZWRpdW0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgLy8gYXBwZW5kIHByaW9yaXR5IGlucHV0IHRvIHJvd1xuICAgICAgICBwcmlvcml0eURyb3Bkb3duLmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaCk7XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlNZWRpdW0pO1xuICAgICAgICBwcmlvcml0eURyb3Bkb3duLmFwcGVuZENoaWxkKHByaW9yaXR5TG93KTsgICAgICAgIFxuICAgICAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5RHJvcGRvd24pOyAgICAgICAgXG4gICAgICAgIGNhcmRSb3cyLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXRDb250YWluZXIpO1xuXG5cblxuICAgICAgICAvLyBUaGlyZCByb3cgXG4gICAgICAgIGNvbnN0IGNhcmRSb3czID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgY2FyZFJvdzMuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkUm93MycpXG4gICAgICAgIGNyZWF0ZUFkZEJ1dHRvbihjYXJkUm93MywgaSk7XG4gICAgICAgIGNyZWF0ZUNhbmNlbEJ1dHRvbihjYXJkUm93MywgYCR7aX1gKTtcblxuXG5cbiAgICAgICAgLy8gYXBwZW5kIHRhc2sgY2FyZCB0byB0YXNrbGlzdFxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjYXJkUm93MSk7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNhcmRSb3cyKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFJvdzMpO1xuXG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQobmV3VGhlYWQpO1xuICAgICAgICBuZXdDYXJkLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblxuICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhcmQpO1xuXG4gICAgICAgIHRhc2tsaXN0LmFwcGVuZENoaWxkKG5ld0NhcmRDb250YWluZXIpO1xuICAgIH1cbiAgICBcblxuICAgIC8vIGFwcGVuZCBhbGwgdGFza3MgdG8gdGFza2xpc3RcbiAgICBsZXQgaT0wXG4gICAgdGFza3MuYWxsLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIF9jcmVhdGVUYXNrTGlzdGluZyh0YXNrLCBpKTtcbiAgICAgICAgX2NyZWF0ZVRhc2tDYXJkKHRhc2ssIGkpO1xuICAgICAgICBpKytcbiAgICB9KTtcbn1cblxuXG5cblxuXG4vLyBDb21wbGV0ZSB0YXNrXG5jb25zdCBfbWFya0NvbXBsZXRlID0gKGUpID0+IHtcbiAgICBjb25zdCB0YXNrSUQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgaWYgKHRhc2tzLmFsbFt0YXNrSURdLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgLy9tYXJrIHRhc2sgaW5jb21wbGV0ZVxuICAgICAgICB0YXNrcy5hbGxbdGFza0lEXS5jb21wbGV0ZSA9ICdmYWxzZSdcbiAgICAgICAgY29uc29sZS5sb2codGFza3MuYWxsW3Rhc2tJRF0pXG4gICAgfSBlbHNlIGlmICh0YXNrcy5hbGxbdGFza0lEXS5jb21wbGV0ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAvL21hcmsgdGFzayBjb21wbGV0ZVxuICAgICAgICB0YXNrcy5hbGxbdGFza0lEXS5jb21wbGV0ZSA9ICd0cnVlJ1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcy5hbGxbdGFza0lEXSlcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBpcyBzdHJhbmdlJylcbiAgICB9XG4gICAgZGlzcGxheVRhc2tzKCk7XG59XG5cbi8vIEluY29tcGxldGUgdGFza1xuY29uc3QgX21hcmtJbmNvbXBsZXRlID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCdpZCcsICcnKTtcbiAgICBsZXQgY2hlY2tib3hDb250YWluZXIgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgZS50YXJnZXQucmVtb3ZlKCk7XG4gICAgY3JlYXRlQ2hlY2tib3hJY29uKGNoZWNrYm94Q29udGFpbmVyKVxufVxuXG4vLyBTaG93IHRhc2sgY2FyZFxuY29uc3QgX3Nob3dUYXNrQ2FyZCA9IChlKSA9PiB7XG4gICAgY29uc3QgdGFza0lEID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAvLyBzaG93IHRhc2sgY2FyZFxuICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmNhcmQke3Rhc2tJRH1gKTtcbiAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7dGFza0lEfWApO1xuICAgIC8vaGlkZSB0YXNrIGxpc3RpbmdcbiAgICBjb25zdCB0YXNrTGlzdGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saXN0aW5nJHt0YXNrSUR9YCk7XG4gICAgdGFza0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKTtcbn1cblxuY29uc3QgX3N1Ym1pdFRhc2tDYXJkID0gKGUpID0+IHtcbiAgICBjb25zdCB0YXNrSUQgPSAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpKSBcblxuICAgIC8vIEdldCBpbnB1dCB2YWx1ZXNcbiAgICBjb25zdCB1cGRhdGVkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrQ2FyZFRhc2ske3Rhc2tJRH1gKS52YWx1ZVxuICAgIGNvbnN0IHVwZGF0ZWREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tDYXJkRGF0ZSR7dGFza0lEfWApLnZhbHVlXG4gICAgY29uc3QgdXBkYXRlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza0NhcmRQcm9qZWN0JHt0YXNrSUR9YCkudmFsdWVcbiAgICBjb25zdCB1cGRhdGVkUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza0NhcmRQcmlvcml0eSR7dGFza0lEfWApLnZhbHVlXG5cbiAgICAvLyBBcHBseSBpbnB1dCB2YWx1ZXMgdG8gdGFzayBvYmplY3RcbiAgICB0YXNrcy5hbGxbdGFza0lEXS50YXNrID0gdXBkYXRlZFRhc2tcbiAgICB0YXNrcy5hbGxbdGFza0lEXS5kYXRlID0gdXBkYXRlZERhdGVcbiAgICB0YXNrcy5hbGxbdGFza0lEXS5wcm9qZWN0ID0gdXBkYXRlZFByb2plY3RcbiAgICB0YXNrcy5hbGxbdGFza0lEXS5wcmlvcml0eSA9IHVwZGF0ZWRQcmlvcml0eVxuXG4gICAgLy8gUmVmcmVzaCB0YXNrbGlzdFxuICAgIGRpc3BsYXlUYXNrcygpO1xufVxuXG4vLyBIaWRlIHRhc2sgY2FyZFxuY29uc3QgX2hpZGVUYXNrQ2FyZCA9IChpKSA9PiB7XG4gICAgLy8gc2hvdyB0YXNrIGxpc3RpbmdcbiAgICBjb25zdCB0YXNrTGlzdGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saXN0aW5nJHtpfWApO1xuICAgIHRhc2tMaXN0aW5nLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgIC8vIGhpZGUgdGFzayBjYXJkXG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZCR7aX1gKTtcbiAgICB0YXNrQ2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xufVxuXG4vLyBEZWxldGUgdGFza1xuY29uc3QgX2RlbGV0ZVRhc2sgPSAoZSkgPT4ge1xuICAgIGxldCBkb29tZWRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgdGFza3MuYWxsLnNwbGljZShkb29tZWRJbmRleCwgMSk7XG4gICAgZGlzcGxheVRhc2tzKCk7XG59XG5cblxuXG5cblxuLy8gVEFTSyBESVNQTEFZIE9QVElPTlNcblxuY29uc3Qgc2V0Q29udGVudFRpdGxlID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpICE9PSAnZGVsZXRlSXRlbScpIHtcbiAgICAgICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpXG4gICAgICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IGUudGFyZ2V0LmlubmVyVGV4dFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm5cbiAgICB9XG59XG5cblxuXG5cblxuZXhwb3J0IHtcbiAgICAvLyBVc2VkIGluIGluZGV4ICYgY29yZVxuXG5cbiAgICAvLyBVc2VkIG9ubHkgaW4gY29yZVxuICAgIGNyZWF0ZUZvcm0sXG4gICAgY3JlYXRlQ2hlY2tsaXN0SWNvbixcbiAgICBjcmVhdGVXZWVrSWNvbixcbiAgICBjcmVhdGVUb2RheUljb24sXG4gICAgY3JlYXRlQWRkaXRpb25JY29uLFxuICAgIHNldENvbnRlbnRUaXRsZSxcblxuICAgIC8vIFVzZWQgb25seSBpbiBpbmRleFxuICAgIGNyZWF0ZUNoZWNrYm94SWNvbixcbiAgICBjcmVhdGVFZGl0SWNvbixcbiAgICBjcmVhdGVDYWxlbmRhckVkaXRJY29uLFxuICAgIGNyZWF0ZURlbGV0ZUljb24sXG4gICAgY3JlYXRlQWRkQnV0dG9uLFxuICAgIGNyZWF0ZUNhbmNlbEJ1dHRvbixcblxuICAgIGRpc3BsYXlQcm9qZWN0cyxcbiAgICBkaXNwbGF5VGFza3MsXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9