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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dGVyYWN0aXZlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9jb3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjaGVja2JveEJsYW5rIGZyb20gJy4vYXNzZXRzL2NoZWNrYm94LWJsYW5rLnN2Zyc7XG5pbXBvcnQgY2hlY2tib3hNYXJrZWQgZnJvbSAnLi9hc3NldHMvY2hlY2tib3gtbWFya2VkLnN2Zyc7XG5pbXBvcnQgY2hlY2tsaXN0IGZyb20gJy4vYXNzZXRzL2NoZWNrbGlzdC5zdmcnO1xuaW1wb3J0IGNhbGVuZGFyVG9kYXkgZnJvbSAnLi9hc3NldHMvY2FsZW5kYXItdG9kYXkuc3ZnJztcbmltcG9ydCBjYWxlbmRhcldlZWsgZnJvbSAnLi9hc3NldHMvY2FsZW5kYXItcmFuZ2Uuc3ZnJztcbmltcG9ydCBhZGRpdGlvbkljb24gZnJvbSAnLi9hc3NldHMvcGx1cy5zdmcnO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4vYXNzZXRzL2VkaXQuc3ZnJztcbmltcG9ydCBjYWxlbmRhckVkaXRJY29uIGZyb20gJy4vYXNzZXRzL2NhbGVuZGFyLWVkaXQuc3ZnJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJy4vYXNzZXRzL2RlbGV0ZS5zdmcnO1xuXG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4vdGFza3MnO1xuaW1wb3J0IHsgdGFza3MgfSBmcm9tICcuL3Rhc2tzJztcblxuXG5cbi8vIEljb24gJiBidXR0b24gZ2VuZXJhdG9ycyBcbmNvbnN0IGNyZWF0ZUNoZWNrYm94SWNvbiA9ICh0ZCwgdGFzaywgaSkgPT4ge1xuICAgIGNvbnN0IGNoZWNrYm94SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgY2hlY2tib3hJY29uLnNyYyA9IGNoZWNrYm94TWFya2VkXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2hlY2tib3hJY29uLnNyYyA9IGNoZWNrYm94Qmxhbms7XG4gICAgfVxuICAgIGNoZWNrYm94SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKTtcbiAgICBjaGVja2JveEljb24uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgY2hlY2tib3hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9tYXJrQ29tcGxldGUoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQoY2hlY2tib3hJY29uKTtcbn0gXG5cbmNvbnN0IF9jcmVhdGVNYXJrZWRDaGVja2JveEljb24gPSAodGQpID0+IHtcbiAgICBjb25zdCBtYXJrZWRDaGVja2JveEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBtYXJrZWRDaGVja2JveEljb24uc3JjID0gY2hlY2tib3hNYXJrZWQ7XG4gICAgbWFya2VkQ2hlY2tib3hJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpO1xuICAgIG1hcmtlZENoZWNrYm94SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfbWFya0luY29tcGxldGUoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQobWFya2VkQ2hlY2tib3hJY29uKTtcbn0gXG5cbmNvbnN0IGNyZWF0ZUNoZWNrbGlzdEljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBjaGVja2xpc3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2hlY2tsaXN0SWNvbi5zcmMgPSBjaGVja2xpc3Q7XG4gICAgY2hlY2tsaXN0SWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKGNoZWNrbGlzdEljb24pO1xufVxuXG5jb25zdCBjcmVhdGVFZGl0SWNvbiA9ICh0ZCkgPT4ge1xuICAgIGNvbnN0IG5ld0VkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3RWRpdEljb24uc3JjID0gZWRpdEljb247XG4gICAgbmV3RWRpdEljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdpY29uJyk7XG4gICAgLy9ldmVudCBsaXN0ZW5lciB0byBvcGVuIHRhc2sgY2FyZFxuICAgIG5ld0VkaXRJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9zaG93VGFza0NhcmQoZSkpXG4gICAgdGQuYXBwZW5kQ2hpbGQobmV3RWRpdEljb24pO1xufVxuXG5jb25zdCBjcmVhdGVDYWxlbmRhckVkaXRJY29uID0gKHRkKSA9PiB7XG4gICAgY29uc3QgbmV3Q2FsZW5kYXJFZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0NhbGVuZGFyRWRpdEljb24uc3JjID0gY2FsZW5kYXJFZGl0SWNvbjtcbiAgICBuZXdDYWxlbmRhckVkaXRJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbiBlZGl0RGF0ZUljb24nKVxuICAgIG5ld0NhbGVuZGFyRWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIH0pXG4gICAgdGQuYXBwZW5kQ2hpbGQobmV3Q2FsZW5kYXJFZGl0SWNvbik7XG59XG5cbmNvbnN0IGNyZWF0ZURlbGV0ZUljb24gPSAoY29udGFpbmVyKSA9PiB7XG4gICAgLy8gY3JlYXRlIGltYWdlIGFuZCBhc3NpZ24gYXR0cmlidXRlc1xuICAgIGNvbnN0IG5ld0RlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBuZXdEZWxldGVJY29uLnNyYyA9IGRlbGV0ZUljb247XG4gICAgbmV3RGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIG5ld0RlbGV0ZUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVJdGVtJylcbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXJcbiAgICBpZiAoY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSA9PT0gJ3Rhc2tDbG9zZUNvbnRhaW5lcicpIHtcbiAgICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gZGVsZXRlIHRhc2tcbiAgICAgICAgbmV3RGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfZGVsZXRlVGFzayhlKSlcbiAgICB9IGVsc2UgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdwcm9qZWN0Q2xvc2VDb250YWluZXInKSB7XG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSBwcm9qZWN0XG4gICAgICAgIG5ld0RlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX2RlbGV0ZVByb2plY3QoZSkpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgaXMgc3RyYW5nZScpO1xuICAgIH1cbiAgICAvLyBhcHBlbmQgdG8gY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0RlbGV0ZUljb24pXG59XG5cbmNvbnN0IGNyZWF0ZUFkZGl0aW9uSWNvbiA9IChsaSkgPT4ge1xuICAgIGNvbnN0IG5ld0FkZGl0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld0FkZGl0aW9uSWNvbi5zcmMgPSBhZGRpdGlvbkljb247XG4gICAgbmV3QWRkaXRpb25JY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQobmV3QWRkaXRpb25JY29uKTtcbn1cblxuY29uc3QgY3JlYXRlVG9kYXlJY29uID0gKGxpKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3VG9kYXlJY29uLnNyYyA9IGNhbGVuZGFyVG9kYXk7XG4gICAgbmV3VG9kYXlJY29uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaWNvbicpXG4gICAgbGkuYXBwZW5kQ2hpbGQobmV3VG9kYXlJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlV2Vla0ljb24gPSAobGkpID0+IHtcbiAgICBjb25zdCBuZXdXZWVrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG5ld1dlZWtJY29uLnNyYyA9IGNhbGVuZGFyV2VlaztcbiAgICBuZXdXZWVrSWNvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ljb24nKVxuICAgIGxpLmFwcGVuZENoaWxkKG5ld1dlZWtJY29uKTtcbn1cblxuY29uc3QgY3JlYXRlQWRkQnV0dG9uID0gKGNvbnRhaW5lciwgaSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGNvbnRhaW5lcilcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRCdG4nKTtcbiAgICBhZGRCdG4uaW5uZXJUZXh0ID0gXCJzdWJtaXRcIjtcbiAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY2FyZFJvdzMnKSkge1xuICAgICAgICAvLyBjb252ZXJ0IGNhcmQgdG8gZm9ybT8gYW5kIGNoYW5nZSB0aGlzIGV2ZW50IGxpc3RlbmVyIHRvIHRyaWdnZXIgd2hlbiBmb3JtIHN1Ym1pdHNcbiAgICAgICAgYWRkQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtpfWApO1xuICAgICAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gX3N1Ym1pdFRhc2tDYXJkKGUpKVxuICAgIH07XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ0bik7XG59XG5cbmNvbnN0IGNyZWF0ZUNhbmNlbEJ1dHRvbiA9IChjb250YWluZXIsIGkpID0+IHtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYW5jZWxCdG4nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgY2FuY2VsQnRuLmlubmVyVGV4dCA9IFwiY2FuY2VsXCI7XG4gICAgaWYgKGNvbnRhaW5lci5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdjYXJkUm93MycpIHtcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gX2hpZGVUYXNrQ2FyZChpKSlcbiAgICB9O1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pOyAgIFxufVxuXG5cblxuLy8gQ29udGFpbmVyIEFORCBpY29uIGdlbmVyYXRvcnMgKEZvciB0YXNrIGxpc3RpbmcgYW5kIHRhc2sgY2FyZClcbmNvbnN0IGNyZWF0ZUNoZWNrYm94Q29udGFpbmVyID0gKHRyLCB0YXNrLCBpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tib3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGNoZWNrYm94Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tib3hDb250YWluZXInKTtcbiAgICBjcmVhdGVDaGVja2JveEljb24oY2hlY2tib3hDb250YWluZXIsIHRhc2ssIGkpO1xuICAgIHRyLmFwcGVuZENoaWxkKGNoZWNrYm94Q29udGFpbmVyKTtcbn1cblxuY29uc3QgY3JlYXRlRGF0ZUNvbnRhaW5lciA9ICh0ciwgdGFzaywgaSkgPT4ge1xuICAgIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGRhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkYXRlQ29udGFpbmVyJyk7XG4gICAgaWYgKHRyLmNsYXNzTGlzdC5jb250YWlucygnZWRpdERhdGVDb250YWluZXInKSkge1xuICAgICAgICBkYXRlQ29udGFpbmVyLmlubmVySFRNTCA9IGA8aW5wdXQgY2xhc3M9J3Rhc2tDYXJkRGF0ZSR7aX0nIHR5cGU9J2RhdGUnIHZhbHVlPScke3Rhc2suZGF0ZX0nPmBcbiAgICB9IGVsc2Uge1xuICAgIGRhdGVDb250YWluZXIuaW5uZXJUZXh0ID0gYCR7dGFzay5kYXRlfWBcbiAgICB9XG4gICAgdHIuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG59XG5cbmNvbnN0IGNyZWF0ZURlbGV0ZUNvbnRhaW5lciA9ICh0cikgPT4ge1xuICAgIGNvbnN0IGNsb3NlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICBjbG9zZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tDbG9zZUNvbnRhaW5lcicpO1xuICAgIGNyZWF0ZURlbGV0ZUljb24oY2xvc2VDb250YWluZXIpO1xuICAgIHRyLmFwcGVuZENoaWxkKGNsb3NlQ29udGFpbmVyKTtcbn1cblxuXG5cbi8vIEZvcm0gZ2VuZXJhdG9yXG5jb25zdCBjcmVhdGVGb3JtID0gKGZvcm0pID0+IHtcbiAgICBcbiAgICBjb25zdCBmb3JtUm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1Sb3cxLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybVJvdycpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1Sb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybVJvdzIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtUm93Jyk7XG4gICAgZm9ybVJvdzIuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtQnV0dG9ucycpO1xuXG4gICAgY29uc3QgZm9ybVJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xuXG4gICAgLy8gcm93IG9uZTogYXNzaWduIGlucHV0IGFjY29yZGluZyB0byBjbGFzcyBvZiBmb3JtXG4gICAgLy8gcm93IHRocmVlOiBhc3NpZ24gZXJyb3IgY2xhc3MgYW5kIHRleHQgYWNjb3JkaW5nIHRvIGNsYXNzIG9mIGZvcm1cbiAgICBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRQcm9qZWN0Rm9ybScpIHtcbiAgICAgICAgZm9ybVJvdzEuaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25ld1Byb2plY3RJbnB1dCcgbmFtZT0nbmV3UHJvamVjdElucHV0Jz48L2lucHV0PlwiO1xuICAgICAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld1Byb2pFcnJvckNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtUm93My5pbm5lclRleHQgPSAnTmFtZSB5b3VyIHByb2plY3QhJ1xuICAgIH0gZWxzZSBpZiAoZm9ybS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09ICdhZGRUYXNrRm9ybScpIHtcbiAgICAgICAgZm9ybVJvdzEuaW5uZXJIVE1MID0gXCI8aW5wdXQgdHlwZT0ndGV4dCcgaWQ9J25ld1Rhc2tJbnB1dCcgbmFtZT0nbmV3VGFza0lucHV0Jz48L2lucHV0PlwiO1xuICAgICAgICBmb3JtUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld1Rhc2tFcnJvckNvbnRhaW5lcicpO1xuICAgICAgICBmb3JtUm93My5pbm5lclRleHQgPSAnTmFtZSB5b3VyIHRhc2shJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHN0cmFuZ2UnKVxuICAgIH1cblxuICAgIC8vIHJvdyB0d286IHN1Ym1pdCBhbmQgY2FuY2VsIGJ1dHRvbnNcbiAgICBjcmVhdGVBZGRCdXR0b24oZm9ybVJvdzIpO1xuICAgIGNyZWF0ZUNhbmNlbEJ1dHRvbihmb3JtUm93Mik7XG4gICAgICAgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93MSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93Mik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtUm93Myk7XG59XG5cblxuXG5cblxuLy8gRE9NIG1vZGlmaWNhdGlvbiBmdW5jdGlvbnNcblxuLy8gUFJPSkVDVFNcbi8vIERpc3BsYXkgZW50aXJlIGFycmF5IG9mIHByb2plY3RzIHRvIG1lbnVcbmNvbnN0IGRpc3BsYXlQcm9qZWN0cyA9ICgpID0+IHtcbiAgICAvLyBHcmFiIHByb2plY3RzIG1lbnVcbiAgICBjb25zdCBwcm9qZWN0c01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHNNZW51Jyk7XG5cbiAgICAvLyBDbGVhciBwcm9qZWN0cyBtZW51XG4gICAgY29uc3Qgb2xkUHJvakNvdW50ID0gcHJvamVjdHNNZW51LmNoaWxkRWxlbWVudENvdW50XG4gICAgZm9yIChsZXQgaT0wOyBpPG9sZFByb2pDb3VudDsgaSsrKSB7XG4gICAgICAgIHByb2plY3RzTWVudS5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIC8vIEFkZCBzaW5nbGUgcHJvamVjdCB0byBtZW51IChjYWxsZWQgYmVsb3cpXG4gICAgY29uc3QgX2Rpc3BsYXlQcm9qZWN0ID0gKG5ld1Byb2osIGkpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGBwcm9qZWN0YClcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKVxuICAgICAgICBuZXdQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxuICAgICAgICAgICAgc2V0Q29udGVudFRpdGxlKGUpXG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgICAgfSlcbiAgICAgICAgY3JlYXRlQ2hlY2tsaXN0SWNvbihuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIG5ld1Byb2plY3RUZXh0LnRleHRDb250ZW50ID0gbmV3UHJvajtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGV4dClcbiAgICAgICAgLy8gZXh0cmEgd3JhcHBlciBzbyBldmVudCBsaXN0ZW5lcnMgd29yayBvbiBib3RoIHRhc2tzIGFuZCBwcm9qZWN0c1xuICAgICAgICBjb25zdCBjbG9zZUNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjbG9zZUNvbnRhaW5lckRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RDbG9zZUNvbnRhaW5lcicpXG4gICAgICAgIGNyZWF0ZURlbGV0ZUljb24oY2xvc2VDb250YWluZXJEaXYpOyAgICBcbiAgICAgICAgLy8gY3JlYXRlRGVsZXRlSWNvbihuZXdQcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgbmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUNvbnRhaW5lckRpdilcbiAgICAgICAgcHJvamVjdHNNZW51LmFwcGVuZENoaWxkKG5ld1Byb2plY3RDb250YWluZXIpO1xuICAgIH0gXG5cbiAgICAvLyBBcHBlbmQgYWxsIHRhc2tzIHRvIHRhc2tsaXN0XG4gICAgbGV0IGk9MFxuICAgIHByb2plY3RzLmFsbC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBfZGlzcGxheVByb2plY3QocHJvamVjdCwgaSlcbiAgICAgICAgaSsrXG4gICAgfSk7XG59XG5cblxuXG4vLyBEZWxldGUgcHJvamVjdFxuY29uc3QgX2RlbGV0ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIGxldCBkb29tZWRJbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkJyk7XG4gICAgcHJvamVjdHMuYWxsLnNwbGljZShkb29tZWRJbmRleCwgMSk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG59XG5cblxuXG5cblxuLy8gVEFTS1Ncbi8vIERpc3BsYXkgZW50aXJlIGFycmF5IG9mIHRhc2tzIHRvIHRhc2tsaXN0XG5jb25zdCBkaXNwbGF5VGFza3MgPSAoKSA9PiB7XG5cbiAgICAvLyBHcmFiIHRhc2tsaXN0XG4gICAgY29uc3QgdGFza2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFza0xpc3QnKTtcbiAgICBcbiAgICAvLyBjbGVhciB0YXNrbGlzdFxuICAgIGNvbnN0IG9sZFRhc2tDb3VudCA9IHRhc2tsaXN0LmNoaWxkRWxlbWVudENvdW50XG4gICAgZm9yIChsZXQgaT0wOyBpPG9sZFRhc2tDb3VudDsgaSsrKSB7XG4gICAgICAgIHRhc2tsaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gQWRkIHNpbmdsZSB0YXNrIHRvIHRhc2tsaXN0IGRpc3BsYXlcbiAgICBjb25zdCBfY3JlYXRlVGFza0xpc3RpbmcgPSAodGFzaywgaSkgPT4ge1xuICAgICAgICAvLyBjcmVhdGUgdGFzayBjb250YWluZXJcbiAgICAgICAgY29uc3QgbmV3TGlzdGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIG5ld0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrIGxpc3Rpbmcke2l9YCk7XG4gICAgICAgIC8vIGNvbXBsZXRlIGZpbHRlciB0byBhc3NpZ24gY2xhc3NcbiAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXG4gICAgICAgIH1cbiAgICAgICAgLy8gYXNzaWduIHByaW9yaXR5IGNsYXNzXG4gICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnaGlnaFByaW9yaXR5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ21lZGl1bScpIHtcbiAgICAgICAgICAgIG5ld0xpc3RpbmcuY2xhc3NMaXN0LmFkZCgnbWVkaXVtUHJpb3JpdHknKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAnbG93Jykge1xuICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdsb3dQcmlvcml0eScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3TGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7aX1gKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCBjaGVja2JveFxuICAgICAgICBjcmVhdGVDaGVja2JveENvbnRhaW5lcihuZXdMaXN0aW5nLCB0YXNrLCBpKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCB0YXNrXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgdGFza0NvbnRhaW5lciR7aX1gKTtcbiAgICAgICAgLy8gY29tcGxldGUgZmlsdGVyIGZvciBzdHJpa2V0aHJvdWdoXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb21wbGV0ZScpO1xuICAgICAgICB9XG4gICAgICAgIHRhc2tDb250YWluZXIuaW5uZXJUZXh0ID0gYCR7dGFzay50YXNrfWA7XG4gICAgICAgIG5ld0xpc3RpbmcuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbiAgICAgICAgLy8gYWRkIGRhdGVcbiAgICAgICAgY3JlYXRlRGF0ZUNvbnRhaW5lcihuZXdMaXN0aW5nLCB0YXNrKTtcblxuICAgICAgICAvLyBhZGQgZWRpdCBidXR0b25cbiAgICAgICAgY29uc3QgZWRpdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGVkaXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0Q29udGFpbmVyJyk7XG4gICAgICAgIGNyZWF0ZUVkaXRJY29uKGVkaXRDb250YWluZXIpO1xuICAgICAgICBuZXdMaXN0aW5nLmFwcGVuZENoaWxkKGVkaXRDb250YWluZXIpO1xuXG4gICAgICAgIC8vIGFkZCBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNyZWF0ZURlbGV0ZUNvbnRhaW5lcihuZXdMaXN0aW5nKTtcblxuICAgICAgICAvL2FwcGVuZCB0YXNrIHRvIHRhc2tsaXN0XG4gICAgICAgIHRhc2tsaXN0LmFwcGVuZENoaWxkKG5ld0xpc3RpbmcpO1xuXG5cblxuICAgICAgICAvLyBzZXQgZGlzcGxheSBmaWx0ZXJcbiAgICAgICAgY29uc3QgZmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpLnRleHRDb250ZW50XG5cbiAgICAgICAgLy8gZGF0ZSBmaWx0ZXJzXG4gICAgICAgIGlmIChmaWx0ZXIgPT09ICdBbGwgdGFza3MnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09PSAnRHVlIHRvZGF5Jykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT09ICdEdWUgdGhpcyB3ZWVrJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyKTtcbiAgICAgICAgfSBcblxuICAgICAgICAvLyBwcm9qZWN0IGZpbHRlclxuICAgICAgICBwcm9qZWN0cy5hbGwuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0ID09PSBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5wcm9qZWN0ICE9PSBmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3TGlzdGluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICB9OyAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuICAgIFxuXG4gICAgLy8gQ3JlYXRlIGFuZCBoaWRlIHRhc2sgY2FyZCBpbiB0YXNrbGlzdCBkaXNwbGF5XG4gICAgY29uc3QgX2NyZWF0ZVRhc2tDYXJkID0gKHRhc2ssIGkpID0+IHtcbiAgICAgICAgLy8gQ1JFQVRFIFRBU0sgQ0FSRFxuICAgICAgICBjb25zdCBuZXdDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxuICAgICAgICBuZXdDYXJkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgaW5jb21wbGV0ZSB0YXNrIGNhcmQke2l9YCk7XG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsIGBoaWRkZW5gKTtcblxuICAgICAgICAvLyBjb21wbGV0ZSBmaWx0ZXIgdG8gYXNzaWduIGNsYXNzXG4gICAgICAgIGlmICh0YXNrLmNvbXBsZXRlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIG5ld0NhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxuICAgICAgICB9ICAgICAgIFxuXG4gICAgICAgIC8vIGFzc2lnbiBwcmlvcml0eSBjbGFzc1xuICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2hpZ2gnKSB7XG4gICAgICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZ2hQcmlvcml0eScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nKSB7XG4gICAgICAgICAgICBuZXdDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lZGl1bVByaW9yaXR5Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gJ2xvdycpIHtcbiAgICAgICAgICAgIG5ld0NhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG93UHJpb3JpdHknKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbmV3Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgICAgIG5ld0NhcmQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbmNvbXBsZXRlIG1lbnVPcHRpb25zJyk7XG4gICAgICAgIG5ld0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgZGVsZXRlIGJ1dHRvblxuICAgICAgICBjcmVhdGVEZWxldGVDb250YWluZXIobmV3Q2FyZCk7XG5cbiAgICAgICAgY29uc3QgbmV3VGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aGVhZCcpO1xuICAgICAgICBuZXdUaGVhZC5pbm5lckhUTUwgPSBcbiAgICAgICAgICAgIGA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdjaGVja2JveENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J3Rhc2tDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdkYXRlQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0nZWRpdENvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgIDwvdHI+YFxuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRib2R5XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgICAgdGFza0NhcmQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrQ2FyZCcpO1xuICAgICAgICBcblxuICAgICAgICAvLyBGaXJzdCByb3dcbiAgICAgICAgY29uc3QgY2FyZFJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93MS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3cxJylcbiAgICAgICAgLy8gYWRkIHRhc2sgbmFtZSBpbnB1dFxuICAgICAgICBjb25zdCB0YXNrSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0YXNrSW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsIGB0YXNrSW5wdXRDb250YWluZXJgKTtcbiAgICAgICAgdGFza0lucHV0Q29udGFpbmVyLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3M9J3Rhc2tDYXJkVGFzayR7aX0nIGlkPSduZXdUYXNrSW5wdXQnIG5hbWU9J25ld1Rhc2tJbnB1dCcgdmFsdWU9JyR7dGFzay50YXNrfSc+PC9pbnB1dD5gO1xuICAgICAgICBjYXJkUm93MS5hcHBlbmRDaGlsZCh0YXNrSW5wdXRDb250YWluZXIpO1xuICAgICAgICAvLyBhZGQgZGF0ZVxuICAgICAgICBjb25zdCBlZGl0RGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIGVkaXREYXRlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgZWRpdERhdGVDb250YWluZXJgKTtcbiAgICAgICAgY3JlYXRlRGF0ZUNvbnRhaW5lcihlZGl0RGF0ZUNvbnRhaW5lciwgdGFzaywgaSk7XG4gICAgICAgIGNhcmRSb3cxLmFwcGVuZENoaWxkKGVkaXREYXRlQ29udGFpbmVyKTtcbiAgICAgICAgLy8gYWRkIGNhbGVuZGFyIGVkaXQgYnV0dG9uXG4gICAgICAgIGNyZWF0ZUNhbGVuZGFyRWRpdEljb24oY2FyZFJvdzEpO1xuXG5cblxuICAgICAgICAvLyBTZWNvbmQgcm93IFxuICAgICAgICBjb25zdCBjYXJkUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgIGNhcmRSb3cyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZFJvdzInKVxuICAgICAgICBcbiAgICAgICAgLy8gYWRkIGNoZWNrYm94XG4gICAgICAgIC8vIGNyZWF0ZUNoZWNrYm94Q29udGFpbmVyKGNhcmRSb3cyKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHByb2plY3QgaW5wdXQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHByb2plY3RJbnB1dENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RJbnB1dENvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIHByb2plY3QgZHJvcGRvd24gXG4gICAgICAgIGNvbnN0IHByb2plY3REcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG4gICAgICAgIHByb2plY3REcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2tDYXJkUHJvamVjdCR7aX1gKVxuICAgICAgICBwcm9qZWN0RHJvcGRvd24uc2V0QXR0cmlidXRlKCdpZCcsICduZXdUYXNrSW5wdXQnKVxuICAgICAgICBwcm9qZWN0RHJvcGRvd24uc2V0QXR0cmlidXRlKCduYW1lJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgICAgIHByb2plY3REcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7dGFzay5wcm9qZWN0fWApXG5cbiAgICAgICAgLy8gY3JlYXRlIHByb2plY3QgZHJvcGRvd24gb3B0aW9uc1xuICAgICAgICAvLyBibGFuayBvcHRpb24gZm9yIG5vIHByb2plY3RcbiAgICAgICAgY29uc3QgYmxhbmtQcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgYmxhbmtQcm9qZWN0T3B0aW9uLnZhbHVlID0gJydcbiAgICAgICAgYmxhbmtQcm9qZWN0T3B0aW9uLnRleHQgPSAnJ1xuICAgICAgICBwcm9qZWN0RHJvcGRvd24uYXBwZW5kQ2hpbGQoYmxhbmtQcm9qZWN0T3B0aW9uKVxuICAgICAgICAvLyByZW1haW5pbmcgb3B0aW9ucyBnZW5lcmF0ZWQgZnJvbSBwcm9qZWN0cyBhcnJheVxuICAgICAgICBwcm9qZWN0cy5hbGwuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbi52YWx1ZSA9IGAke3Byb2plY3R9YFxuICAgICAgICAgICAgcHJvamVjdE9wdGlvbi50ZXh0ID0gYCR7cHJvamVjdH1gXG4gICAgICAgICAgICBpZiAodGFzay5wcm9qZWN0ID09PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbilcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REcm9wZG93bilcbiAgICAgICAgY2FyZFJvdzIuYXBwZW5kQ2hpbGQocHJvamVjdElucHV0Q29udGFpbmVyKTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gcHJpb3JpdHkgaW5wdXQgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICBwcmlvcml0eUlucHV0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHlJbnB1dENvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgLy8gY3JlYXRlIHByaW9yaXR5IGRyb3Bkb3duIFxuICAgICAgICBjb25zdCBwcmlvcml0eURyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYHRhc2tDYXJkUHJpb3JpdHkke2l9YClcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCduYW1lJywgJ25ld1Rhc2tJbnB1dCcpXG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke3Rhc2sucHJpb3JpdHl9YClcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBwcmlvcml0eSBkcm9wZG93biBvcHRpb25zXG4gICAgICAgIC8vIGhpZ2ggcHJpb3JpdHlcbiAgICAgICAgY29uc3QgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbiAgICAgICAgcHJpb3JpdHlIaWdoLnZhbHVlID0gJ2hpZ2gnXG4gICAgICAgIHByaW9yaXR5SGlnaC50ZXh0ID0gJ0hpZ2gnXG4gICAgICAgIC8vIG1lZGl1bSBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByaW9yaXR5TWVkaXVtLnZhbHVlID0gJ21lZGl1bSdcbiAgICAgICAgcHJpb3JpdHlNZWRpdW0udGV4dCA9ICdNZWRpdW0nXG4gICAgICAgIC8vIGxvdyBwcmlvcml0eVxuICAgICAgICBjb25zdCBwcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIHByaW9yaXR5TG93LnZhbHVlID0gJ2xvdydcbiAgICAgICAgcHJpb3JpdHlMb3cudGV4dCA9ICdMb3cnXG4gICAgICAgIFxuICAgICAgICAvLyBwcmlvcml0eSBzZWxlY3Rpb25cbiAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJykge1xuICAgICAgICBwcmlvcml0eUhpZ2guc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKSB7XG4gICAgICAgIHByaW9yaXR5TG93LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIFxuICAgICAgICBwcmlvcml0eU1lZGl1bS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICAvLyBhcHBlbmQgcHJpb3JpdHkgaW5wdXQgdG8gcm93XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoKTtcbiAgICAgICAgcHJpb3JpdHlEcm9wZG93bi5hcHBlbmRDaGlsZChwcmlvcml0eU1lZGl1bSk7XG4gICAgICAgIHByaW9yaXR5RHJvcGRvd24uYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3cpOyAgICAgICAgXG4gICAgICAgIHByaW9yaXR5SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlEcm9wZG93bik7ICAgICAgICBcbiAgICAgICAgY2FyZFJvdzIuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dENvbnRhaW5lcik7XG5cblxuXG4gICAgICAgIC8vIFRoaXJkIHJvdyBcbiAgICAgICAgY29uc3QgY2FyZFJvdzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICBjYXJkUm93My5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmRSb3czJylcbiAgICAgICAgY3JlYXRlQWRkQnV0dG9uKGNhcmRSb3czLCBpKTtcbiAgICAgICAgY3JlYXRlQ2FuY2VsQnV0dG9uKGNhcmRSb3czLCBgJHtpfWApO1xuXG5cblxuICAgICAgICAvLyBhcHBlbmQgdGFzayBjYXJkIHRvIHRhc2tsaXN0XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKGNhcmRSb3cxKTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQoY2FyZFJvdzIpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjYXJkUm93Myk7XG5cbiAgICAgICAgbmV3Q2FyZC5hcHBlbmRDaGlsZChuZXdUaGVhZCk7XG4gICAgICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQodGFza0NhcmQpO1xuXG4gICAgICAgIG5ld0NhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG5cbiAgICAgICAgdGFza2xpc3QuYXBwZW5kQ2hpbGQobmV3Q2FyZENvbnRhaW5lcik7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gYXBwZW5kIGFsbCB0YXNrcyB0byB0YXNrbGlzdFxuICAgIGxldCBpPTBcbiAgICB0YXNrcy5hbGwuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgX2NyZWF0ZVRhc2tMaXN0aW5nKHRhc2ssIGkpO1xuICAgICAgICBfY3JlYXRlVGFza0NhcmQodGFzaywgaSk7XG4gICAgICAgIGkrK1xuICAgIH0pO1xufVxuXG5cblxuXG5cbi8vIENvbXBsZXRlIHRhc2tcbmNvbnN0IF9tYXJrQ29tcGxldGUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJRCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBpZiAodGFza3MuYWxsW3Rhc2tJRF0uY29tcGxldGUgPT09ICd0cnVlJykge1xuICAgICAgICAvL21hcmsgdGFzayBpbmNvbXBsZXRlXG4gICAgICAgIHRhc2tzLmFsbFt0YXNrSURdLmNvbXBsZXRlID0gJ2ZhbHNlJ1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcy5hbGxbdGFza0lEXSlcbiAgICB9IGVsc2UgaWYgKHRhc2tzLmFsbFt0YXNrSURdLmNvbXBsZXRlID09PSAnZmFsc2UnKSB7XG4gICAgICAgIC8vbWFyayB0YXNrIGNvbXBsZXRlXG4gICAgICAgIHRhc2tzLmFsbFt0YXNrSURdLmNvbXBsZXRlID0gJ3RydWUnXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzLmFsbFt0YXNrSURdKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHN0cmFuZ2UnKVxuICAgIH1cbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuLy8gSW5jb21wbGV0ZSB0YXNrXG5jb25zdCBfbWFya0luY29tcGxldGUgPSAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJycpO1xuICAgIGxldCBjaGVja2JveENvbnRhaW5lciA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICBlLnRhcmdldC5yZW1vdmUoKTtcbiAgICBjcmVhdGVDaGVja2JveEljb24oY2hlY2tib3hDb250YWluZXIpXG59XG5cbi8vIFNob3cgdGFzayBjYXJkXG5jb25zdCBfc2hvd1Rhc2tDYXJkID0gKGUpID0+IHtcbiAgICBjb25zdCB0YXNrSUQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgIC8vIHNob3cgdGFzayBjYXJkXG4gICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2FyZCR7dGFza0lEfWApO1xuICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0YXNrSUR9YCk7XG4gICAgLy9oaWRlIHRhc2sgbGlzdGluZ1xuICAgIGNvbnN0IHRhc2tMaXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3Rpbmcke3Rhc2tJRH1gKTtcbiAgICB0YXNrTGlzdGluZy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpO1xufVxuXG5jb25zdCBfc3VibWl0VGFza0NhcmQgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tJRCA9IChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykpIFxuXG4gICAgLy8gR2V0IGlucHV0IHZhbHVlc1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnRhc2tDYXJkVGFzayR7dGFza0lEfWApLnZhbHVlXG4gICAgY29uc3QgdXBkYXRlZERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudGFza0NhcmREYXRlJHt0YXNrSUR9YCkudmFsdWVcbiAgICBjb25zdCB1cGRhdGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrQ2FyZFByb2plY3Qke3Rhc2tJRH1gKS52YWx1ZVxuICAgIGNvbnN0IHVwZGF0ZWRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC50YXNrQ2FyZFByaW9yaXR5JHt0YXNrSUR9YCkudmFsdWVcblxuICAgIC8vIEFwcGx5IGlucHV0IHZhbHVlcyB0byB0YXNrIG9iamVjdFxuICAgIHRhc2tzLmFsbFt0YXNrSURdLnRhc2sgPSB1cGRhdGVkVGFza1xuICAgIHRhc2tzLmFsbFt0YXNrSURdLmRhdGUgPSB1cGRhdGVkRGF0ZVxuICAgIHRhc2tzLmFsbFt0YXNrSURdLnByb2plY3QgPSB1cGRhdGVkUHJvamVjdFxuICAgIHRhc2tzLmFsbFt0YXNrSURdLnByaW9yaXR5ID0gdXBkYXRlZFByaW9yaXR5XG5cbiAgICAvLyBSZWZyZXNoIHRhc2tsaXN0XG4gICAgZGlzcGxheVRhc2tzKCk7XG59XG5cbi8vIEhpZGUgdGFzayBjYXJkXG5jb25zdCBfaGlkZVRhc2tDYXJkID0gKGkpID0+IHtcbiAgICAvLyBzaG93IHRhc2sgbGlzdGluZ1xuICAgIGNvbnN0IHRhc2tMaXN0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3Rpbmcke2l9YCk7XG4gICAgdGFza0xpc3Rpbmcuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l9YCk7XG4gICAgLy8gaGlkZSB0YXNrIGNhcmRcbiAgICBjb25zdCB0YXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5jYXJkJHtpfWApO1xuICAgIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCAnaGlkZGVuJyk7XG59XG5cbi8vIERlbGV0ZSB0YXNrXG5jb25zdCBfZGVsZXRlVGFzayA9IChlKSA9PiB7XG4gICAgbGV0IGRvb21lZEluZGV4ID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICB0YXNrcy5hbGwuc3BsaWNlKGRvb21lZEluZGV4LCAxKTtcbiAgICBkaXNwbGF5VGFza3MoKTtcbn1cblxuXG5cblxuXG4vLyBUQVNLIERJU1BMQVkgT1BUSU9OU1xuXG5jb25zdCBzZXRDb250ZW50VGl0bGUgPSAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09ICdkZWxldGVJdGVtJykge1xuICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJylcbiAgICAgICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gZS50YXJnZXQuaW5uZXJUZXh0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cbn1cblxuXG5cblxuXG5leHBvcnQge1xuICAgIC8vIFVzZWQgaW4gaW5kZXggJiBjb3JlXG5cblxuICAgIC8vIFVzZWQgb25seSBpbiBjb3JlXG4gICAgY3JlYXRlRm9ybSxcbiAgICBjcmVhdGVDaGVja2xpc3RJY29uLFxuICAgIGNyZWF0ZVdlZWtJY29uLFxuICAgIGNyZWF0ZVRvZGF5SWNvbixcbiAgICBjcmVhdGVBZGRpdGlvbkljb24sXG4gICAgc2V0Q29udGVudFRpdGxlLFxuXG4gICAgLy8gVXNlZCBvbmx5IGluIGluZGV4XG4gICAgY3JlYXRlQ2hlY2tib3hJY29uLFxuICAgIGNyZWF0ZUVkaXRJY29uLFxuICAgIGNyZWF0ZUNhbGVuZGFyRWRpdEljb24sXG4gICAgY3JlYXRlRGVsZXRlSWNvbixcbiAgICBjcmVhdGVBZGRCdXR0b24sXG4gICAgY3JlYXRlQ2FuY2VsQnV0dG9uLFxuXG4gICAgZGlzcGxheVByb2plY3RzLFxuICAgIGRpc3BsYXlUYXNrcyxcbn0iLCJjbGFzcyB0YXNrcyB7XG4gICAgc3RhdGljIGFsbCA9IFtdO1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvciAobmV3VGFzaykge1xuICAgICAgICB0aGlzLnRhc2sgPSBuZXdUYXNrXG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlXG4gICAgfVxuXG5cblxufTtcblxuXG5cbmNsYXNzIHByb2plY3RzIHtcbiAgICBzdGF0aWMgYWxsID0gW107XG5cblxuXG4gICAgY29uc3RydWN0b3IgKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IHByb2plY3ROYW1lXG4gICAgfVxuXG5cblxufVxuXG5cblxuZXhwb3J0IHtcbiAgICBwcm9qZWN0cyxcbiAgICB0YXNrcyxcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmltcG9ydCBsb2dvSWNvbiBmcm9tICcuL2Fzc2V0cy9jaGVjay1kZWNhZ3JhbS1vdXRsaW5lLnN2Zyc7XG5pbXBvcnQgZ2l0aHViSWNvbiBmcm9tICcuL2Fzc2V0cy9HaXRIdWItbGlnaHQtMzJweC5wbmcnO1xuXG5pbXBvcnQgeyBjcmVhdGVDaGVja2xpc3RJY29uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBzZXRDb250ZW50VGl0bGUgfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IGNyZWF0ZVdlZWtJY29uIH0gZnJvbSAnLi9pbnRlcmFjdGl2ZSc7XG5pbXBvcnQgeyBjcmVhdGVUb2RheUljb24gfSBmcm9tICcuL2ludGVyYWN0aXZlJztcbmltcG9ydCB7IGNyZWF0ZUFkZGl0aW9uSWNvbiB9IGZyb20gJy4vaW50ZXJhY3RpdmUnO1xuXG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tICcuL2ludGVyYWN0aXZlJztcblxuXG4vLyBJbml0aWFsaXphdGlvbiBmdW5jdGlvbnNcbmNvbnN0IF9jcmVhdGVIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBcbiAgICAvLyBkaXNwbGF5IHRpdGxlXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGxvZ28uc3JjID0gbG9nb0ljb247XG4gICAgbG9nby50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBsb2dvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9nbycpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGhpbmdzIFRvIERvJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIFxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cblxuXG5jb25zdCBfY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUnKTtcblxuICAgIC8vIE1haW4gbWVudVxuICAgIGNvbnN0IG1lbnVPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBtZW51T3B0aW9ucy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgXG4gICAgY29uc3QgYWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGFsbFRhc2tzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWxsVGFza3MnKTtcbiAgICBhbGxUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHNldENvbnRlbnRUaXRsZShlKVxuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICB9KVxuICAgIGNyZWF0ZUNoZWNrbGlzdEljb24oYWxsVGFza3MpO1xuICAgIGNvbnN0IGFsbFRhc2tzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhbGxUYXNrc1RleHQudGV4dENvbnRlbnQgPSAnQWxsIHRhc2tzJztcbiAgICBhbGxUYXNrcy5hcHBlbmRDaGlsZChhbGxUYXNrc1RleHQpXG4gICAgbWVudU9wdGlvbnMuYXBwZW5kQ2hpbGQoYWxsVGFza3MpO1xuXG4gICAgY29uc3QgZHVlVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGR1ZVRvZGF5LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlVG9kYXknKTtcbiAgICBkdWVUb2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICBzZXRDb250ZW50VGl0bGUoZSlcbiAgICB9KVxuICAgIGNyZWF0ZVRvZGF5SWNvbihkdWVUb2RheSk7XG4gICAgY29uc3QgZHVlVG9kYXlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGR1ZVRvZGF5VGV4dC5pbm5lclRleHQgPSAnRHVlIHRvZGF5JztcbiAgICBkdWVUb2RheS5hcHBlbmRDaGlsZChkdWVUb2RheVRleHQpO1xuICAgIG1lbnVPcHRpb25zLmFwcGVuZENoaWxkKGR1ZVRvZGF5KTtcblxuICAgIGNvbnN0IGR1ZVdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGR1ZVdlZWsuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkdWVXZWVrJyk7XG4gICAgZHVlV2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGRpc3BsYXlUYXNrcygpO1xuICAgICAgICBzZXRDb250ZW50VGl0bGUoZSlcbiAgICB9KVxuICAgIGNyZWF0ZVdlZWtJY29uKGR1ZVdlZWspO1xuICAgIGNvbnN0IGR1ZVdlZWtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGR1ZVdlZWtUZXh0LmlubmVyVGV4dCA9ICdEdWUgdGhpcyB3ZWVrJztcbiAgICBkdWVXZWVrLmFwcGVuZENoaWxkKGR1ZVdlZWtUZXh0KTtcbiAgICBtZW51T3B0aW9ucy5hcHBlbmRDaGlsZChkdWVXZWVrKTtcblxuXG4gICAgLy8gUHJvamVjdHMgbWVudVxuICAgIGNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHByb2plY3RzSGVhZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHNIZWFkZXInKVxuICAgIHByb2plY3RzSGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcblxuICAgIGNvbnN0IHByb2plY3RzTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgcHJvamVjdHNNZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudU9wdGlvbnMnKTtcbiAgICBwcm9qZWN0c01lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0c01lbnUnKTtcblxuXG4gICAgLy8gR2VuZXJhdGUgYWRkIHByb2plY3QgYnV0dG9uXG4gICAgY29uc3QgYWRkUHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgYWRkUHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWRkUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZFByb2plY3RCdG4nKVxuICAgIGNyZWF0ZUFkZGl0aW9uSWNvbihhZGRQcm9qZWN0KVxuICAgIGNvbnN0IGFkZFByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGFkZFByb2plY3RUZXh0LmlubmVyVGV4dCA9ICdBZGQgUHJvamVjdCc7XG4gICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0VGV4dClcbiAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFByb2plY3QpXG5cblxuICAgIC8vIEdlbmVyYXRlIGFuZCBoaWRlIG5ldyBwcm9qZWN0IGZvcm1cbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBhZGRQcm9qZWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZFByb2plY3RGb3JtJyk7XG4gICAgYWRkUHJvamVjdEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdoaWRkZW4nKVxuICAgIGFkZFByb2plY3RGb3JtLm1ldGhvZCA9ICdnZXQnO1xuICAgIGNyZWF0ZUZvcm0oYWRkUHJvamVjdEZvcm0pO1xuICAgIGFkZFByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pXG5cblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudU9wdGlvbnMpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdHNNZW51KTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGFkZFByb2plY3RDb250YWluZXIpO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChtZW51KTtcbn1cblxuXG5jb25zdCBfY3JlYXRlQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29udGVudFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudFRpdGxlJyk7XG4gICAgY29udGVudFRpdGxlLmlubmVyVGV4dCA9ICdBbGwgdGFza3MnO1xuXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XG4gICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSBcbiAgICAgICAgYDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2NoZWNrYm94Q29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0ndGFza0NvbnRhaW5lcic+PC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9J2RhdGVDb250YWluZXInPjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzPSdlZGl0Q29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz0ndGFza0Nsb3NlQ29udGFpbmVyJz48L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5IGlkPSd0YXNrTGlzdCc+PC90Ym9keT5gXG4gICAgXG5cbiAgICAvLyBDcmVhdGUgYWRkIHRhc2sgYnV0dG9uXG4gICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgYWRkVGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnVPcHRpb25zJyk7XG4gICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgYWRkVGFzay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZFRhc2tCdG4nKTtcbiAgICBjcmVhdGVBZGRpdGlvbkljb24oYWRkVGFzayk7XG4gICAgY29uc3QgYWRkVGFza1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYWRkVGFza1RleHQuaW5uZXJUZXh0ID0gJ0FkZCB0YXNrJztcbiAgICBhZGRUYXNrLmFwcGVuZENoaWxkKGFkZFRhc2tUZXh0KTtcbiAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2spO1xuXG4gICAgLy8gR2VuZXJhdGUgYW5kIGhpZGUgbmV3IHRhc2sgZm9ybVxuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkVGFza0Zvcm0nKTtcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hpZGRlbicpXG4gICAgYWRkVGFza0Zvcm0ubWV0aG9kID0gJ2dldCc7XG4gICAgY3JlYXRlRm9ybShhZGRUYXNrRm9ybSk7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tGb3JtKTtcblxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cblxuY29uc3QgX2NyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IGpjYW1wYmVsbDU3YDtcbiAgXG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL2pjYW1wYmVsbDU3JztcbiAgICBnaXRodWJMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICBcbiAgICBjb25zdCBuZXdHaXRodWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbmV3R2l0aHViSWNvbi5zcmMgPSBnaXRodWJJY29uO1xuICAgIG5ld0dpdGh1Ykljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICdnaXRodWInKTtcblxuICAgIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQobmV3R2l0aHViSWNvbik7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuXG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuXG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG4gICAgX2NyZWF0ZUhlYWRlcigpO1xuICAgIF9jcmVhdGVNZW51KCk7XG4gICAgX2NyZWF0ZUNvbnRlbnQoKTtcbiAgICBfY3JlYXRlRm9vdGVyKCk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9