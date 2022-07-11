const body = document.querySelector('body');


// Icon generators 
import logoIcon from './assets/check-decagram-outline.svg';
import checklist from './assets/checklist.svg';
import calendarToday from './assets/calendar-today.svg';
import calendarWeek from './assets/calendar-week.svg';
import additionIcon from './assets/plus.svg';
import githubIcon from './assets/GitHub-light-32px.svg';

const _createChecklistIcon = (li) => {
    const checklistIcon = document.createElement('img');
    checklistIcon.src = checklist;
    checklistIcon.setAttribute('class', 'icon')
    li.appendChild(checklistIcon);
}

const _createAdditionIcon = (li) => {
    const newAdditionIcon = document.createElement('img');
    newAdditionIcon.src = additionIcon;
    newAdditionIcon.setAttribute('class', 'icon')
    li.appendChild(newAdditionIcon);
}

const _createTodayIcon = (li) => {
    const _createTodayIcon = document.createElement('img');
    _createTodayIcon.src = calendarToday;
    _createTodayIcon.setAttribute('class', 'icon')
    li.appendChild(_createTodayIcon);
}

const _createWeekIcon = (li) => {
    const _createWeekIcon = document.createElement('img');
    _createWeekIcon.src = calendarWeek;
    _createWeekIcon.setAttribute('class', 'icon')
    li.appendChild(_createWeekIcon);
}


const _createHeader = () => {
    const header = document.createElement('header')
    
    // display title
    const logo = document.createElement('img');
    logo.src = logoIcon;
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
    _createChecklistIcon(allTasks);
    const allTasksText = document.createElement('span');
    allTasksText.textContent = 'All tasks';
    allTasks.appendChild(allTasksText)
    menuOptions.appendChild(allTasks);

    const dueToday = document.createElement('li');
    _createTodayIcon(dueToday);
    const dueTodayText = document.createElement('span');
    dueTodayText.innerText = 'Due today';
    dueToday.appendChild(dueTodayText);
    menuOptions.appendChild(dueToday);

    const dueWeek = document.createElement('li');
    _createWeekIcon(dueWeek);
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

    const sampleProj = document.createElement('li');
    _createChecklistIcon(sampleProj);
    const sampleProjText = document.createElement('span');
    sampleProjText.textContent = 'Sample project';
    sampleProj.appendChild(sampleProjText)
    projectsMenu.appendChild(sampleProj);

    const addProject = document.createElement('li');
    addProject.setAttribute('class', 'addProjectBtn')
    _createAdditionIcon(addProject)
    const addProjectText = document.createElement('span');
    addProjectText.innerText = 'Add Project';
    addProject.appendChild(addProjectText)
    projectsMenu.appendChild(addProject);


    menu.appendChild(menuOptions);
    menu.appendChild(projectsHeader);
    menu.appendChild(projectsMenu);

    body.appendChild(menu);
}


const _createContent = () => {
    const content = document.createElement('div');
    content.setAttribute('class', 'content');

    const contentTitle = document.createElement('h2');
    contentTitle.setAttribute('class', 'contentTitle');
    contentTitle.innerText = 'All tasks';
    
    const taskContainer = document.createElement('ul');
    taskContainer.setAttribute('class', 'menuOptions');

    const addTaskContainer = document.createElement('ul');
    addTaskContainer.setAttribute('class', 'menuOptions');
    const addTask = document.createElement('li');
    addTask.setAttribute('class', 'addTaskBtn');
    _createAdditionIcon(addTask);
    const addTaskText = document.createElement('span');
    addTaskText.innerText = 'Add task';
    addTask.appendChild(addTaskText)
    addTaskContainer.appendChild(addTask)
    
    content.appendChild(contentTitle);
    content.appendChild(taskContainer);
    content.appendChild(addTaskContainer)

    body.appendChild(content);
}


const _createFooter = () => {
    const footer = document.createElement('footer')

    const copyright = document.createElement('p');
    copyright.textContent = `Copyright © ${new Date().getFullYear()} jcampbell57`;
  
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/jcampbell57';
    githubLink.target = '_blank';
  
    const githubIcon = document.createElement('img');
    githubIcon.src = githubIcon;
    githubIcon.setAttribute('class', 'github');

    githubLink.appendChild(githubIcon);
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