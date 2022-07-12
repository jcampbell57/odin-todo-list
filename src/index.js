// Page initialization
import initialize from './core';
import './style.css';

initialize();


const taskList = document.querySelector('#taskList');

const newProjectInput = document.querySelector('#newProjectInput');
const addProjectForm = document.querySelector('.addProjectForm')

const newTaskInput = document.querySelector('#newTaskInput');
const addTaskForm = document.querySelector('.addTaskForm');

import checkboxBlank from './assets/checkbox-blank.svg';
import checkboxMarked from './assets/checkbox-marked.svg';
import deleteIcon from './assets/delete.svg';
import editIcon from './assets/edit.svg';
import { projects } from './tasks';
import { tasks } from './tasks';



// generate content (important)



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
    if (addTaskForm.getAttribute('id') === 'showBlock') {
        addTaskBtn.setAttribute('id', 'showFlex')
        addTaskForm.setAttribute('id', 'hidden')
    }
    addProjectBtn.setAttribute('id', 'hidden')
    addProjectForm.setAttribute('id', 'showBlock')
}

const addProjectBtn = document.querySelector('.addProjectBtn');
addProjectBtn.addEventListener('click', _showAddProjectForm);

const _hideAddProjectForm = () => {
    addProjectBtn.setAttribute('id', 'showFlex')
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
// REDUNDANT WITH CORE.JS -- CONSOLODATE

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





// add task
const _showAddTaskForm = () => {
    if (addProjectForm.getAttribute('id') === 'showBlock') {
        addProjectBtn.setAttribute('id', 'showFlex')
        addProjectForm.setAttribute('id', 'hidden')    
    }
    addTaskBtn.setAttribute('id', 'hidden')
    addTaskForm.setAttribute('id', 'showBlock')
}
const addTaskBtn = document.querySelector('.addTaskBtn');
addTaskBtn.addEventListener('click', _showAddTaskForm);

const _hideAddTaskForm = () => {
    addTaskBtn.setAttribute('id', 'showFlex')
    addTaskForm.setAttribute('id', 'hidden')
    newTaskInput.value = '';
}





// CHANGE TO STATIC, ADD TO CLASS
// add new project from form
const newProjErrorContainer = document.querySelector('.newProjErrorContainer');

const _submitNewProjectForm = (e) => {
    // verify or cancel submission
    e.preventDefault();

    const submitProj = (newProj) => {
        projects.all.push(newProj);
        addProj(newProj);
        console.log(projects.all)
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


    // Create new row & populate with task info


    // append
}


// CHANGE TO STATIC, ADD TO CLASS
// add new task from form
const newTaskErrorContainer = document.querySelector('.newTaskErrorContainer');

const _submitNewTaskForm = (e) => {
    // verify or cancel submission
    e.preventDefault();

    const submitTask = (newTask) => {
        tasks.all.push(newTask);
        _displayTask(newTask);
        console.log(tasks.all)
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
    _hideAddTaskForm();
    newTaskErrorContainer.setAttribute('id', 'hidden');


    // add task to array(s)

    // Create new row & populate with task info


    // append
}





// Event listeners
// submit new project
addProjectForm.addEventListener('submit', (e) => _submitNewProjectForm(e));
// submit new task
addTaskForm.addEventListener('submit', (e) => _submitNewTaskForm(e));
