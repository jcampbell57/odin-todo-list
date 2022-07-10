
const _displayTitle = () => {
    const body = document.querySelector('body');
    let title = document.createElement('h1');
    title.textContent = 'Things To Do';
    body.appendChild(title);
}


const initialize = () => {
    _displayTitle();    
};

export default initialize;