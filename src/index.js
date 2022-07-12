// Page initialization
import initialize from './core';
import './style.css';

initialize();


// Event listeners
// import { addProject } from './tasks';
// import { addTask } from './tasks';

// generate content (important)
const _generateContent = () => {
    const _generateTask = () => {
        
    }
}


// add project
const _showAddProjectForm = () => {
    if (addTaskForm.getAttribute('id') === 'shown') {
        addTaskBtn.setAttribute('id', 'shown')
        addTaskForm.setAttribute('id', 'hidden')
    }
    addProjectBtn.setAttribute('id', 'hidden')
    addProjectForm.setAttribute('id', 'shown')
}

const addProjectBtn = document.querySelector('.addProjectBtn');
addProjectBtn.addEventListener('click', _showAddProjectForm);

const _hideAddProjectForm = () => {
    addProjectBtn.setAttribute('id', 'shown')
    addProjectForm.setAttribute('id', 'hidden')
    newProjectInput.value = '';
}

const newProjectInput = document.querySelector('#newProjectInput');
const addProjectForm = document.querySelector('.addProjectForm')
addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.submitter.getAttribute('class') === 'addBtn') {
        // submitProject function goes here
        console.log(newProjectInput.value);
    }
    _hideAddProjectForm();
});


// add task
const _showAddTaskForm = () => {
    if (addProjectForm.getAttribute('id') === 'shown') {
        addProjectBtn.setAttribute('id', 'shown')
        addProjectForm.setAttribute('id', 'hidden')    
    }
    addTaskBtn.setAttribute('id', 'hidden')
    addTaskForm.setAttribute('id', 'shown')
}
const addTaskBtn = document.querySelector('.addTaskBtn');
addTaskBtn.addEventListener('click', _showAddTaskForm);

const _hideAddTaskForm = () => {
    addTaskBtn.setAttribute('id', 'shown')
    addTaskForm.setAttribute('id', 'hidden')
    newTaskInput.value = '';
}

const newTaskInput = document.querySelector('#newTaskInput');
const addTaskForm = document.querySelector('.addTaskForm');
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.submitter.getAttribute('class') === 'addBtn') {
        // submitTask function goes here
        console.log(newTaskInput.value)
    }
    _hideAddTaskForm();
});