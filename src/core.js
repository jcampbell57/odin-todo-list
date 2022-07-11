const body = document.querySelector('body');


const _createHeader = () => {
    const header = document.createElement('header')
    
    // display title
    const logo = document.createElement('img');
    logo.src = '../src/assets/check-decagram-outline.svg';
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

    const menuOptions = document.createElement('ul');
    menuOptions.setAttribute('class', 'menuOptions');

    const allTasks = document.createElement('li');
    allTasks.innerText = 'All tasks';
    menuOptions.appendChild(allTasks);

    const pastDue = document.createElement('li');
    pastDue.innerText = 'Past due';
    menuOptions.appendChild(pastDue);

    const dueToday = document.createElement('li');
    dueToday.innerText = 'Due today';
    menuOptions.appendChild(dueToday);

    const dueWeek = document.createElement('li');
    dueWeek.innerText = 'Due this week';
    menuOptions.appendChild(dueWeek);


    const projectsHeader = document.createElement('p');
    projectsHeader.setAttribute('class', 'projectsHeader')
    projectsHeader.textContent = 'Projects';


    const projectsMenu = document.createElement('ul');
    projectsMenu.setAttribute('class', 'menuOptions');

    const addProject = document.createElement('li');
    addProject.innerText = 'Add Project';
    projectsMenu.appendChild(addProject);


    menu.appendChild(menuOptions);
    menu.appendChild(projectsHeader);
    menu.appendChild(projectsMenu);

    body.appendChild(menu);
}


const _createContent = () => {
    const content = document.createElement('div');
    content.setAttribute('class', 'content');
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
    githubIcon.src = '../src/assets/GitHub-light-32px.png';
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