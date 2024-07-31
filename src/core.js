
const body = document.querySelector('body');

import logoIcon from './assets/check-decagram-outline.svg';
import verticalDotsIcon from './assets/dots-vertical.svg';
import githubIcon from './assets/GitHub-light-32px.png';

import { 
    createChecklistIcon, 
    displayTasks,
    setTaskFilter,
    createForm,
    createWeekIcon,
    createPastDueIcon,
    createTodayIcon,
    createAdditionIcon } from './interactive';


// Initialization functions
const _createHeader = () => {
    const header = document.createElement('header')
    
    // display logo
    const logo = document.createElement('img');
    logo.src = logoIcon;
    logo.target = '_blank';
    logo.classList.add('logo');
    header.appendChild(logo);
    
    // display title
    const title = document.createElement('h1');
    title.textContent = 'Things To Do';
    header.appendChild(title);

    // DROPDOWN MENU
    // create options icon container and display icon
    const optionsIconContainer = document.createElement('div');
    optionsIconContainer.classList.add('optionsIconContainer');
    const optionsIcon = document.createElement('img');
    optionsIcon.classList.add('icon', 'optionsIcon');
    //show dropdown listener
    optionsIcon.addEventListener('click', (e) => {
        optionsIcon.classList.toggle('selected')
        document.querySelector('.dropdownContainer').classList.toggle('hidden')
    });
    optionsIcon.src = verticalDotsIcon;
    // close dropdown if the user clicks outside of it
    window.onclick = function(e) {
        if (!e.target.matches('.optionsIcon')) {
            const dropdownContainer = document.querySelector('.dropdownContainer')
            if (dropdownContainer.classList.contains('hidden') === false) {
                dropdownContainer.classList.add('hidden')
            }
            const optionsIcon = document.querySelector('.optionsIcon')
            if (optionsIcon.classList.contains('selected')) {
                optionsIcon.classList.toggle('selected')
            }
        }
    } 

    // create dropdown container 
    const dropdownContainer = document.createElement('div');
    dropdownContainer.classList.add('dropdownContainer', 'hidden');

    // create dropdown options
    // set completed filter
    const completedToggle = document.createElement('span');
    completedToggle.classList.add('dropdownItem', 'completedTasksToggle');
    if (localStorage.getItem('completedFilter') === 'false') {
        completedToggle.innerText = 'Hide completed tasks'
    } else {
        completedToggle.innerText = 'Show completed tasks'
    }
    completedToggle.addEventListener('click', () => {
        if (completedToggle.innerText === 'Show completed tasks') {
            completedToggle.innerText = 'Hide completed tasks'
            localStorage.setItem('completedFilter', false)
            displayTasks();
        } else {
            completedToggle.innerText = 'Show completed tasks'
            localStorage.setItem('completedFilter', true)
            displayTasks();
        }
    })

    // append
    dropdownContainer.appendChild(completedToggle)
    optionsIconContainer.appendChild(optionsIcon)
    optionsIconContainer.appendChild(dropdownContainer)
    header.appendChild(optionsIconContainer)
    
    body.appendChild(header);
}



const _createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // Main menu
    const menuOptions = document.createElement('ul');
    menuOptions.classList.add('menuOptions');
    
    const allTasks = document.createElement('li');
    allTasks.classList.add('allTasks', 'selected');
    allTasks.addEventListener('click', (e) => {
        setTaskFilter(allTasks, e)
        allTasks.classList.add('selected')
    })
    createChecklistIcon(allTasks);
    const allTasksText = document.createElement('span');
    allTasksText.textContent = 'All tasks';
    allTasks.appendChild(allTasksText)
    menuOptions.appendChild(allTasks);

    const dueToday = document.createElement('li');
    dueToday.classList.add('dueToday');
    dueToday.addEventListener('click', (e) => {
        setTaskFilter(dueToday, e)
        dueToday.classList.add('selected')
        displayTasks();
    })
    createTodayIcon(dueToday);
    const dueTodayText = document.createElement('span');
    dueTodayText.innerText = 'Due today';
    dueToday.appendChild(dueTodayText);
    menuOptions.appendChild(dueToday);

    const dueWeek = document.createElement('li');
    dueWeek.classList.add('dueWeek');
    dueWeek.addEventListener('click', (e) => {
        setTaskFilter(dueWeek, e)
        dueWeek.classList.add('selected')
        displayTasks();
    })
    createWeekIcon(dueWeek);
    const dueWeekText = document.createElement('span');
    dueWeekText.innerText = 'Due this week';
    dueWeek.appendChild(dueWeekText);
    menuOptions.appendChild(dueWeek);

    const pastDue = document.createElement('li');
    pastDue.classList.add('pastDue');
    pastDue.addEventListener('click', (e) => {
        setTaskFilter(pastDue, e)
        pastDue.classList.add('selected')
        displayTasks();
    })
    createPastDueIcon(pastDue)
    const pastDueText = document.createElement('span');
    pastDueText.innerText = 'Past due';
    pastDue.appendChild(pastDueText);
    menuOptions.appendChild(pastDue);


    // Projects menu
    const projectsHeader = document.createElement('p');
    projectsHeader.classList.add('projectsHeader')
    projectsHeader.textContent = 'Projects';

    const projectsMenu = document.createElement('ul');
    projectsMenu.classList.add('menuOptions');
    projectsMenu.setAttribute('id', 'projectsMenu');


    // Generate add project button
    const addProjectContainer = document.createElement('ul');
    addProjectContainer.classList.add('menuOptions');
    const addProject = document.createElement('li');
    addProject.classList.add('addProjectBtn')
    createAdditionIcon(addProject)
    const addProjectText = document.createElement('span');
    addProjectText.innerText = 'Add Project';
    addProject.appendChild(addProjectText)
    addProjectContainer.appendChild(addProject)


    // Generate and hide new project form
    const addProjectForm = document.createElement('form');
    addProjectForm.classList.add('addProjectForm', 'hidden');
    addProjectForm.method = 'get';
    createForm(addProjectForm);
    addProjectContainer.appendChild(addProjectForm)


    menu.appendChild(menuOptions);
    menu.appendChild(projectsHeader);
    menu.appendChild(projectsMenu);
    menu.appendChild(addProjectContainer);

    body.appendChild(menu);
}



const _createContent = () => {
    const content = document.createElement('div');
    content.classList.add('content');

    const contentTitle = document.createElement('h2');
    contentTitle.classList.add('contentTitle');
    contentTitle.innerText = 'All tasks';

    const taskContainer = document.createElement('ul');
    taskContainer.classList.add('taskList');
    taskContainer.setAttribute('id', 'taskList');

    // Create add task button
    const addTaskContainer = document.createElement('ul');
    addTaskContainer.classList.add('menuOptions');
    const addTask = document.createElement('li');
    addTask.classList.add('addTaskBtn');
    createAdditionIcon(addTask);
    const addTaskText = document.createElement('span');
    addTaskText.innerText = 'Add task';
    addTask.appendChild(addTaskText);
    addTaskContainer.appendChild(addTask);

    // Generate and hide new task form
    const addTaskForm = document.createElement('form');
    addTaskForm.classList.add('addTaskForm', 'hidden');
    addTaskForm.method = 'get';
    createForm(addTaskForm);
    
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
    newGithubIcon.src = githubIcon;
    newGithubIcon.classList.add('github');

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


export default initialize;