// Page initialization
import initialize from './core';
import './style.css';

initialize();


// Event listeners
// import { addProject } from './tasks';
// import { addTask } from './tasks';

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
}

const addProjectForm = document.querySelector('.addProjectForm')
addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
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
}

const addTaskForm = document.querySelector('.addTaskForm')
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    _hideAddTaskForm();
});