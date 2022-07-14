// Page initialization
// import initialize from './core'
import { initialize } from './core';
import './style.css';

initialize();


import { projects } from './tasks';
import { tasks } from './tasks';


const addProjectBtn = document.querySelector('.addProjectBtn');
const addProjectForm = document.querySelector('.addProjectForm')
const newProjectInput = document.querySelector('#newProjectInput');

const addTaskBtn = document.querySelector('.addTaskBtn');
const addTaskForm = document.querySelector('.addTaskForm');
const newTaskInput = document.querySelector('#newTaskInput');

const tasklist = document.querySelector('#taskList');
const projectsMenu = document.querySelector('#projectsMenu');


import { createCheckboxIcon } from './core';
import { createChecklistIcon } from './core';
import { createEditIcon } from './core';
import { createCalendarEditIcon } from './core';
import { createDeleteIcon } from './core';
import { createAddButton } from './core';
import { createCancelButton } from './core';
import { setContentTitle } from './core';





// DOM modification functions



// FORMS
// Show/hide new project form
const _showAddProjectForm = () => {
    if (addTaskForm.getAttribute('id') === 'showBlock') {
        addTaskBtn.setAttribute('id', 'showFlex')
        addTaskForm.setAttribute('id', 'hidden')
    }
    addProjectBtn.setAttribute('id', 'hidden')
    addProjectForm.setAttribute('id', 'showBlock')
}

const _hideAddProjectForm = () => {
    addProjectBtn.setAttribute('id', 'showFlex')
    addProjectForm.setAttribute('id', 'hidden')
    newProjectInput.value = '';
}

// Verify new project form submission
const newProjErrorContainer = document.querySelector('.newProjErrorContainer');

const _submitNewProjectForm = (e) => {
    // verify or cancel submission
    e.preventDefault();


    const submitProj = (newProj) => {
        projects.all.push(newProj);
        _displayProjects();
    }
    

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



// Show/hide new task form
const _showAddTaskForm = () => {
    if (addProjectForm.getAttribute('id') === 'showBlock') {
        addProjectBtn.setAttribute('id', 'showFlex')
        addProjectForm.setAttribute('id', 'hidden')    
    }
    addTaskBtn.setAttribute('id', 'hidden')
    addTaskForm.setAttribute('id', 'showBlock')
}

const hideAddTaskForm = () => {
    addTaskBtn.setAttribute('id', 'showFlex')
    addTaskForm.setAttribute('id', 'hidden')
    newTaskInput.value = '';
}

// Verify new task form submission
const newTaskErrorContainer = document.querySelector('.newTaskErrorContainer');

const submitNewTaskForm = (e) => {
    // verify or cancel submission
    e.preventDefault();

    const submitTask = (newTask) => {
        tasks.all.push(newTask);
        _displayTasks();
    }

    if (e.submitter.getAttribute('class') === 'addBtn' && newTaskInput.value === '') {
        // show Task name error
        newTaskErrorContainer.setAttribute('id', 'showBlock');
        return;
    } else if (e.submitter.getAttribute('class') === 'addBtn') {
        // submit new Task
        const newTask = newTaskInput.value
        submitTask(newTask);
    }
    hideAddTaskForm();
    newTaskErrorContainer.setAttribute('id', 'hidden');
}





// TASKS
// Add single task to tasklist display
const _displayTask = (task, i) => {
    

    // FUNCTIONS FOR CREATE LISTING AND CREATE CARD BELOW
    // create checkbox
    const createCheckboxContainer = (tr) => {
        const checkboxContainer = document.createElement('td');
        checkboxContainer.setAttribute('class', 'checkboxContainer');
        createCheckboxIcon(checkboxContainer);
        tr.appendChild(checkboxContainer);
    }

    // create date
    const createDateContainer = (tr) => {
        const dateContainer = document.createElement('td');
        dateContainer.setAttribute('class', 'dateContainer');
        dateContainer.innerText = 'no date'
        tr.appendChild(dateContainer);
    }

    // create delete button
    const createDeleteContainer = (tr) => {
        const closeContainer = document.createElement('td');
        closeContainer.setAttribute('class', 'taskCloseContainer');
        createDeleteIcon(closeContainer);
        tr.appendChild(closeContainer);
    }



    // CREATE TASK LISTING
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
            <th class='taskCloseContainer'></th>
        </tr>`
    
    // Create tbody
    const taskCard = document.createElement('tbody');
    taskCard.setAttribute('id', 'taskCard');
    
    // First row
    const cardRow1 = document.createElement('tr');
    
    // add checkbox
    createCheckboxContainer(cardRow1);
    
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

    // // add delete button
    // createDeleteContainer(cardRow1);
    
    
    // Second row (project selection)
    const cardRow2 = document.createElement('tr');
    const projectInputContainer = document.createElement('td');
    projectInputContainer.setAttribute('class', 'projectInputContainer');
    projectInputContainer.innerHTML = `<input type='dropdown' id='newTaskInput' name='newTaskInput'></input>`;
    cardRow2.appendChild(projectInputContainer);


    // Third row (priority selection, submit/cancel buttons)
    const cardRow3 = document.createElement('tr');
    cardRow3.setAttribute('class', 'cardRow')
    const priorityInputContainer = document.createElement('td');
    priorityInputContainer.setAttribute('class', 'priorityInputContainer');
    priorityInputContainer.innerHTML = `<input type='dropdown' id='newTaskInput' name='newTaskInput'></input>`;
    cardRow2.appendChild(priorityInputContainer);
    createAddButton(cardRow3);
    createCancelButton(cardRow3, `${i}`);


    // append task to tasklist
    taskCard.appendChild(cardRow1);
    taskCard.appendChild(cardRow2);
    taskCard.appendChild(cardRow3);

    newCard.appendChild(newThead);
    newCard.appendChild(taskCard);

    newCardContainer.appendChild(newCard);

    tasklist.appendChild(newCardContainer);
}


// Display entire array of tasks to tasklist
const _displayTasks = () => {
    // clear tasklist
    const oldTaskCount = tasklist.childElementCount
    for (let i=0; i<oldTaskCount; i++) {
        tasklist.firstChild.remove();
    }
    
    // append all tasks to tasklist
    let i=0
    tasks.all.forEach(task => {
        _displayTask(task, i)
        i++
    });
}





// PROJECTS
// Add single project to menu
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


// Display entire array of projects to menu
const _displayProjects = () => {
    // clear projects menu
    const oldProjCount = projectsMenu.childElementCount
    for (let i=0; i<oldProjCount; i++) {
        projectsMenu.firstChild.remove();
    }

    // append all tasks to tasklist
    let i=0
    projects.all.forEach(project => {
        _displayProject(project, i)
        i++
    });
}





// TASKS DISPLAY OPTIONS





// Event listeners
addProjectBtn.addEventListener('click', _showAddProjectForm);
addProjectForm.addEventListener('submit', (e) => _submitNewProjectForm(e));
addTaskBtn.addEventListener('click', _showAddTaskForm);
addTaskForm.addEventListener('submit', (e) => submitNewTaskForm(e));