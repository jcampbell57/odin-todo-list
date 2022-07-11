const body = document.querySelector('body');

const _createHeader = () => {
    const header = document.createElement('header')
    
    // display title
    const title = document.createElement('h1');
    title.textContent = 'Things To Do';
    header.appendChild(title);
    
    body.appendChild(header);
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
    _createFooter();
};

export default initialize;