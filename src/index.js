
// Page initialization
// import { initialize } from './core';
import initialize from './core'
import './style.css';

initialize();



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

import { displayProjects } from './interactive';
import { displayTasks } from './interactive';



// temp
// localStorage.clear();

// Initiate storage arrays
const storageTasksArray = [];
const storageProjectsArray = [];
if (localStorage.length === 0) {
    localStorage.setItem('storageTasks', JSON.stringify(storageTasksArray));
    localStorage.setItem('storageProjects', JSON.stringify(storageProjectsArray));

    // PLACEHOLDER PROJECTS
    // grab storage array from storage
    const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
    // push placerholder projects
    storageProjects.push(
        {
            name: 'Business trip',
            selected: 'false'    
        },
    )
    // set storage array back into storage
    localStorage.setItem('storageProjects', JSON.stringify(storageProjects));

    // PLACEHOLDER TASKS
    // grab tasks array from storage
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    // push placeholder tasks
    storageTasks.push(
        {
            name: 'Finish Date Filter',
            date: `2022-07-16`,
            project: ``,
            priority: 'high',
            complete: 'false',
        },
        {
            name: 'Finish local storage',
            date: `2022-07-17`,
            project: ``,
            priority: 'high',
            complete: 'false',
        },
        {
            name: 'Space Needle',
            date: `2022-07-27`,
            project: `Business trip`,
            priority: 'high',
            complete: 'false',
        },
        {
            name: 'Troll under the bridge',
            date: `2022-07-27`,
            project: `Business trip`,
            priority: 'medium',
            complete: 'false',
        },
        {
            name: 'Pike place coffee meeting',
            date: `2022-07-26`,
            project: `Business trip`,
            priority: 'medium',
            complete: 'false',        
        },
    )
    // set tasks array back into storage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks));

}



// insert content from local storage if there is any
displayProjects();
displayTasks();





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
        displayProjects();
        // refresh tasklist so you can add tasks to new project
        displayTasks();
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
        displayTasks();
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