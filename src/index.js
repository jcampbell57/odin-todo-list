// Page initialization
import initialize from './core';
import './style.css';

initialize();


// Event listeners
// import { addProject } from './tasks';
// import { addTask } from './tasks';

// generate content (important)
const taskList = document.querySelector('#taskList');


const _generateContent = () => {

}

import checkboxBlank from './assets/checkbox-blank.svg';
import checkboxMarked from './assets/checkbox-marked.svg';
import deleteIcon from './assets/delete.svg';
import editIcon from './assets/edit.svg';


const _displayTask = (newTask) => {
    const newRow = document.createElement('tr');
    newRow.setAttribute('id', 'notComplete');
    newRow.innerHTML = 
        `<tr id='notComplete'>
            <td class='checkboxContainer'><img src='${checkboxBlank}' class='icon'></td>
            <td class='taskContainer'>${newTask}</td>
            <td class='dateContainer'>no date</td>
            <td class='editContainer'><img src='${editIcon}' class='icon'></td>
            <td class='closeContainer'><img src='${deleteIcon}' class='icon' alt='delete' id='removeRow'></td>
        </tr>`;
    taskList.appendChild(newRow);
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



const _createDeleteIcon = (li) => {
    const newCloseContainer = document.createElement('div');
    newCloseContainer.setAttribute('id', 'closeContainer')
    const newDeleteIcon = document.createElement('img');
    newDeleteIcon.src = deleteIcon;
    newDeleteIcon.setAttribute('class', 'icon')
    newCloseContainer.appendChild(newDeleteIcon);
    li.appendChild(newCloseContainer);
}

// REDUNDANT WITH CORE.JS -- CONSOLODATE
import checklist from './assets/checklist.svg';
const _createChecklistIcon = (li) => {
    const checklistIcon = document.createElement('img');
    checklistIcon.src = checklist;
    checklistIcon.setAttribute('class', 'icon')
    li.appendChild(checklistIcon);
}

const addProj = (newProj) => {
    const projectsMenu = document.querySelector('#projectsMenu');
    const sampleProj = document.createElement('li');
    _createChecklistIcon(sampleProj);
    const sampleProjText = document.createElement('span');
    sampleProjText.textContent = newProj;
    sampleProj.appendChild(sampleProjText)
    _createDeleteIcon(sampleProj);
    projectsMenu.appendChild(sampleProj);
} 
// REDUNDANT WITH CORE.JS -- CONSOLODATE





const newProjectInput = document.querySelector('#newProjectInput');
const addProjectForm = document.querySelector('.addProjectForm')
addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.submitter.getAttribute('class') === 'addBtn') {
        // submitProject function goes here
        const newProj = newProjectInput.value
        addProj(newProj);
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
        const newTask = newTaskInput.value
        _displayTask(newTask);
    }
    _hideAddTaskForm();
});