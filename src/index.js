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

import checkboxBlank from './assets/checkbox-blank.svg';
import checkboxMarked from './assets/checkbox-marked.svg';
import deleteIcon from './assets/delete.svg';
import editIcon from './assets/edit.svg';

import { createChecklistIcon } from './core';
import { createDeleteIcon } from './core';





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





// TASKS
// Add single task to tasklist display
const _displayTask = (task) => {
    const newRow = document.createElement('tr');
    newRow.setAttribute('id', 'notComplete');
    newRow.innerHTML = 
        `<tr id='notComplete'>
            <td class='checkboxContainer'><img src='${checkboxBlank}' class='icon'></td>
            <td class='taskContainer'>${task}</td>
            <td class='dateContainer'>no date</td>
            <td class='editContainer'><img src='${editIcon}' class='icon'></td>
            <td class='closeContainer'><img src='${deleteIcon}' class='icon' alt='delete' id='removeRow'></td>
        </tr>`;
    tasklist.appendChild(newRow);
}


// Display entire array of tasks to tasklist
const _displayTasks = () => {
    // clear tasklist
    const oldTaskCount = tasklist.childElementCount
    for (let i=0; i<oldTaskCount; i++) {
        tasklist.firstChild.remove();
    }

    // append all tasks to tasklist
    tasks.all.forEach(task => _displayTask(task));
}





// PROJECTS
// Add single project to tasklist display
const _displayProject = (newProj) => {
    const sampleProj = document.createElement('li');
    createChecklistIcon(sampleProj);
    const sampleProjText = document.createElement('span');
    sampleProjText.textContent = newProj;
    sampleProj.appendChild(sampleProjText)
    createDeleteIcon(sampleProj);
    projectsMenu.appendChild(sampleProj);
} 


// Display entire array of projects to menu
const _displayProjects = () => {
    // clear projects menu
    const oldProjCount = projectsMenu.childElementCount
    for (let i=0; i<oldProjCount; i++) {
        projectsMenu.firstChild.remove();
    }

    // append all tasks to tasklist
    projects.all.forEach(project => _displayProject(project));
}





// Verify new project form submission
const newProjErrorContainer = document.querySelector('.newProjErrorContainer');

const _submitNewProjectForm = (e) => {
    // verify or cancel submission
    e.preventDefault();


    const submitProj = (newProj) => {
        projects.all.push(newProj);
        _displayProjects(newProj);
        // console.log(projects.all)
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





// Verify new task form submission
const newTaskErrorContainer = document.querySelector('.newTaskErrorContainer');

const submitNewTaskForm = (e) => {
    // verify or cancel submission
    e.preventDefault();

    const submitTask = (newTask) => {
        tasks.all.push(newTask);
        console.log(tasks.all)
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





// Event listeners
addProjectBtn.addEventListener('click', _showAddProjectForm);
addProjectForm.addEventListener('submit', (e) => _submitNewProjectForm(e));
addTaskBtn.addEventListener('click', _showAddTaskForm);
addTaskForm.addEventListener('submit', (e) => submitNewTaskForm(e));