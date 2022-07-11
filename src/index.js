// Page initialization
import initialize from './core';
import './style.css';

initialize();


// Event listeners
// import { addProject } from './tasks';
// import { addTask } from './tasks';
const addProjectBtn = document.querySelector('.addProjectBtn');
addProjectBtn.addEventListener('click', () => {
    console.log('yay');
})
// const addTaskBtn = document.querySelector('');