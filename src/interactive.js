import checkboxBlank from './assets/checkbox-blank.svg';
import checkboxMarked from './assets/checkbox-marked.svg';
import checklist from './assets/checklist.svg';
import calendarToday from './assets/calendar-today.svg';
import calendarWeek from './assets/calendar-range.svg';
import additionIcon from './assets/plus.svg';
import editIcon from './assets/edit.svg';
import calendarEditIcon from './assets/calendar-edit.svg';
import deleteIcon from './assets/delete.svg';

import { projects } from './tasks';
import { tasks } from './tasks';



// Icon & button generators 
const _createCheckboxIcon = (td, task, i) => {
    const checkboxIcon = document.createElement('img');
    if (task.complete === 'true') {
        checkboxIcon.src = checkboxMarked
    } else {
        checkboxIcon.src = checkboxBlank;
    }
    checkboxIcon.setAttribute('class', 'icon');
    checkboxIcon.setAttribute('id', `${i}`);
    checkboxIcon.addEventListener('click', (e) => _markComplete(e))
    td.appendChild(checkboxIcon);
} 

const createChecklistIcon = (li) => {
    const checklistIcon = document.createElement('img');
    checklistIcon.src = checklist;
    checklistIcon.setAttribute('class', 'icon')
    li.appendChild(checklistIcon);
}

const _createEditIcon = (td) => {
    const newEditIcon = document.createElement('img');
    newEditIcon.src = editIcon;
    newEditIcon.setAttribute('class', 'icon');
    // event listener to open task card
    newEditIcon.addEventListener('click', (e) => _showTaskCard(e))
    td.appendChild(newEditIcon);
}

const _createCalendarEditIcon = (td) => {
    const newCalendarEditIcon = document.createElement('img');
    newCalendarEditIcon.src = calendarEditIcon;
    newCalendarEditIcon.setAttribute('class', 'icon editDateIcon')
    newCalendarEditIcon.addEventListener('click', (e) => {
    })
    td.appendChild(newCalendarEditIcon);
}

const _createDeleteIcon = (container, i) => {
    // create image and assign attributes
    const newDeleteIcon = document.createElement('img');
    newDeleteIcon.src = deleteIcon;
    newDeleteIcon.setAttribute('class', 'icon deleteItem')
    newDeleteIcon.setAttribute('id', `${i}`)
    // add event listener
    if (container.getAttribute('class') === 'taskCloseContainer') {
        // Event listener to delete task
        newDeleteIcon.addEventListener('click', (e) => _deleteTask(e))
    } else if (container.getAttribute('class') === 'project' || 
    container.classList.contains('project')) {
        // Event listener to delete project
        newDeleteIcon.classList.add(`deleteProject${i}`)        
        newDeleteIcon.classList.add(`hidden`)        
        newDeleteIcon.addEventListener('click', (e) => _deleteProject(e, i))        
        // display trash icon on hover
        container.addEventListener('mouseenter', () => {
            const trashIcon = document.querySelector(`.deleteProject${i}`)
            trashIcon.classList.remove('hidden')
        })
        // hide trash icon 
        container.addEventListener('mouseleave', () => {
            const trashIcon = document.querySelector(`.deleteProject${i}`)
            trashIcon.classList.add('hidden')
        })    
    } else {
        console.log(container)
        console.log('this is strange');
    }
    // append to container
    container.appendChild(newDeleteIcon)
}

const createAdditionIcon = (li) => {
    const newAdditionIcon = document.createElement('img');
    newAdditionIcon.src = additionIcon;
    newAdditionIcon.setAttribute('class', 'icon')
    li.appendChild(newAdditionIcon);
}

const createTodayIcon = (li) => {
    const newTodayIcon = document.createElement('img');
    newTodayIcon.src = calendarToday;
    newTodayIcon.setAttribute('class', 'icon')
    li.appendChild(newTodayIcon);
}

const createWeekIcon = (li) => {
    const newWeekIcon = document.createElement('img');
    newWeekIcon.src = calendarWeek;
    newWeekIcon.setAttribute('class', 'icon')
    li.appendChild(newWeekIcon);
}

const _createAddButton = (container, i) => {
    const addBtn = document.createElement('button');
    addBtn.setAttribute('class', 'addBtn');
    addBtn.innerText = "submit";
    if (container.classList.contains('cardRow3')) {
        // convert card to form? and change this event listener to trigger when form submits
        addBtn.setAttribute('id', `${i}`);
        addBtn.addEventListener('click', (e) => _submitTaskCard(e))
    };
    container.appendChild(addBtn);
}

const _createCancelButton = (container, i) => {
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('class', 'cancelBtn');
    cancelBtn.setAttribute('id', `${i}`);
    cancelBtn.innerText = "cancel";
    if (container.getAttribute('class') === 'cardRow3') {
        cancelBtn.addEventListener('click', () => displayTasks(i))
    };
    container.appendChild(cancelBtn);   
}



// Container AND icon generators (For task listing and task card)
const createCheckboxContainer = (tr, task, i) => {
    const checkboxContainer = document.createElement('td');
    checkboxContainer.setAttribute('class', 'checkboxContainer');
    _createCheckboxIcon(checkboxContainer, task, i);
    tr.appendChild(checkboxContainer);
}

const createDateContainer = (tr, task, i) => {
    const dateContainer = document.createElement('td');
    dateContainer.setAttribute('class', 'dateContainer');
    if (tr.classList.contains('editDateContainer')) {
        dateContainer.innerHTML = `<input class='taskCardDate${i}' type='date' value='${task.date}'>`
    } else {
    dateContainer.innerText = `${task.date}`
    }
    tr.appendChild(dateContainer);
}

const createDeleteContainer = (tr) => {
    const closeContainer = document.createElement('td');
    closeContainer.setAttribute('class', 'taskCloseContainer');
    _createDeleteIcon(closeContainer);
    tr.appendChild(closeContainer);
}



// Form generator
const createForm = (form) => {
    
    const formRow1 = document.createElement('div');
    formRow1.setAttribute('class', 'formRow');
    
    const formRow2 = document.createElement('div');
    formRow2.setAttribute('class', 'formRow');
    formRow2.setAttribute('id', 'formButtons');

    const formRow3 = document.createElement('div');
    formRow3.setAttribute('id', 'hidden');

    // row one: assign input according to class of form
    // row three: assign error class and text according to class of form
    if (form.getAttribute('class') === 'addProjectForm') {
        formRow1.innerHTML = "<input type='text' id='newProjectInput' name='newProjectInput'></input>";
        formRow3.setAttribute('class', 'newProjErrorContainer');
        formRow3.innerText = 'Name your project!'
    } else if (form.getAttribute('class') === 'addTaskForm') {
        formRow1.innerHTML = "<input type='text' id='newTaskInput' name='newTaskInput'></input>";
        formRow3.setAttribute('class', 'newTaskErrorContainer');
        formRow3.innerText = 'Name your task!'
    } else {
        console.log('this is strange')
    }

    // row two: submit and cancel buttons
    _createAddButton(formRow2);
    _createCancelButton(formRow2);
       
    form.appendChild(formRow1);
    form.appendChild(formRow2);
    form.appendChild(formRow3);
}





// DOM modification functions

// PROJECTS
// Display entire array of projects to menu
const displayProjects = () => {
    // Grab projects menu
    const projectsMenu = document.querySelector('#projectsMenu');

    // Clear projects menu
    const oldProjCount = projectsMenu.childElementCount
    for (let i=0; i<oldProjCount; i++) {
        projectsMenu.firstChild.remove();
    }

    // Add single project to menu (called below)
    const _displayProject = (newProj, i) => {
        const newProjectContainer = document.createElement('li');
        newProjectContainer.classList.add(`project`)
        newProjectContainer.setAttribute('id', `${i}`)
        // assign class to selected project 
        if (newProj.selected === 'true') {
            newProjectContainer.classList.add('selected')
        }

        // event listener to filter tasklist by project name     
        newProjectContainer.addEventListener('click', (e) => {
            // if deleting project, do not set filter
            if (e.target.classList.contains('deleteItem')) {
                return;
            };
            setTaskFilter(newProjectContainer)
        })
    
        createChecklistIcon(newProjectContainer);
        const newProjectText = document.createElement('span');
        newProjectText.textContent = newProj.name;
        newProjectContainer.appendChild(newProjectText)
        _createDeleteIcon(newProjectContainer, i);
        projectsMenu.appendChild(newProjectContainer);
    } 

    // Append all tasks to tasklist
    let i=0
    projects.all.forEach(project => {
        _displayProject(project, i)
        i++
    });
}



// Delete project
const _deleteProject = (e) => {
    // Identify project to delete
    const doomedIndex = e.target.getAttribute('id');
    const doomedName = projects.all[doomedIndex].name;

    // delete project
    projects.all.splice(doomedIndex, 1);
    displayProjects();

    // delete all tasks in doomed project
    // optional, but seems necesarry
    // change from splice to deleted propery with hidden class to use in stats table with completed property
    tasks.all.forEach((task, index) => {
        if (task.project === doomedName) {
            tasks.all.splice(index, 1)
        }
    })

    // If doomed project was selected, revert tasklist to all tasks
    const contentTitle = document.querySelector('.contentTitle');
    const allTasksClassList = document.querySelector('.allTasks').classList
    if (contentTitle.textContent === doomedName) {
        contentTitle.textContent = 'All tasks' 
        allTasksClassList.add('selected')
        displayTasks();
    }

}





// TASKS
// Display entire array of tasks to tasklist
const displayTasks = () => {

    // Grab tasklist
    const tasklist = document.querySelector('#taskList');
    
    // clear tasklist
    const oldTaskCount = tasklist.childElementCount
    for (let i=0; i<oldTaskCount; i++) {
        tasklist.firstChild.remove();
    }
    

    // Add single task to tasklist display
    const _createTaskListing = (task, i) => {
        // create task container
        const newListing = document.createElement('tr');
        newListing.setAttribute('class', `task listing${i}`);
        // complete filter to assign class
        if (task.complete === 'true') {
            newListing.classList.add('complete')
        }
        // assign priority class
        if (task.priority === 'high') {
            newListing.classList.add('highPriority');
        } else if (task.priority === 'medium') {
            newListing.classList.add('mediumPriority');
        } else if (task.priority === 'low') {
            newListing.classList.add('lowPriority');
        }

        newListing.setAttribute('id', `${i}`);
        
        // add checkbox
        createCheckboxContainer(newListing, task, i);
        
        // add task
        const taskContainer = document.createElement('td');
        taskContainer.setAttribute('class', `taskContainer${i}`);
        // complete filter for strikethrough
        if (task.complete === 'true') {
            taskContainer.setAttribute('id', 'complete');
        }
        taskContainer.innerText = `${task.task}`;
        newListing.appendChild(taskContainer);

        // add date
        createDateContainer(newListing, task);

        // add edit button
        const editContainer = document.createElement('td');
        editContainer.setAttribute('class', 'editContainer');
        _createEditIcon(editContainer);
        newListing.appendChild(editContainer);

        // add delete button
        createDeleteContainer(newListing);

        //append task to tasklist
        tasklist.appendChild(newListing);



        // set display filter
        const filter = document.querySelector('.contentTitle').textContent
        // date filters
        if (filter === 'All tasks') {
            return;
        } else if (filter === 'Due today') {
            console.log(filter);
        } else if (filter === 'Due this week') {
            console.log(filter);
        } 

        // project filter
        projects.all.forEach(project => {
            if (project.name === filter) {
                if (task.project !== filter) {
                    newListing.classList.add('hidden');
                };    
            }
        })
        
    }
    

    // Create and hide task card in tasklist display
    const _createTaskCard = (task, i) => {
        // CREATE TASK CARD
        const newCardContainer = document.createElement('tr')
        newCardContainer.setAttribute('class', `task card${i}`);
        newCardContainer.setAttribute('id', `hidden`);

        // complete filter to assign class
        if (task.complete === 'true') {
            newCardContainer.classList.add('complete')
        }       

        // assign priority class
        if (task.priority === 'high') {
            newCardContainer.classList.add('highPriority');
        } else if (task.priority === 'medium') {
            newCardContainer.classList.add('mediumPriority');
        } else if (task.priority === 'low') {
            newCardContainer.classList.add('lowPriority');
        }
        
        const newCard = document.createElement('table');
        newCard.setAttribute('class', 'incomplete menuOptions');
        newCard.setAttribute('id', `${i}`);
        
        // Create delete button
        createDeleteContainer(newCard);

        const newThead = document.createElement('thead');
        newThead.innerHTML = 
            `<tr>
                <th class='checkboxContainer'></th>
                <th class='taskContainer'></th>
                <th class='dateContainer'></th>
                <th class='editContainer'></th>
            </tr>`
        
        // Create tbody
        const taskCard = document.createElement('tbody');
        taskCard.setAttribute('id', 'taskCard');
        

        // First row
        const cardRow1 = document.createElement('tr');
        cardRow1.setAttribute('class', 'cardRow1')
        // add task name input
        const taskInputContainer = document.createElement('td');
        taskInputContainer.setAttribute('class', `taskInputContainer`);
        taskInputContainer.innerHTML = `<input type='text' class='taskCardTask${i}' id='newTaskInput' name='newTaskInput' value='${task.task}'></input>`;
        cardRow1.appendChild(taskInputContainer);
        // add date
        const editDateContainer = document.createElement('td');
        editDateContainer.setAttribute('class', `editDateContainer`);
        createDateContainer(editDateContainer, task, i);
        cardRow1.appendChild(editDateContainer);
        // add calendar edit button
        _createCalendarEditIcon(cardRow1);



        // Second row 
        const cardRow2 = document.createElement('tr');
        cardRow2.setAttribute('class', 'cardRow2')
        
        // add checkbox
        // createCheckboxContainer(cardRow2);
        
        // project input container
        const projectInputContainer = document.createElement('td');
        projectInputContainer.setAttribute('class', 'projectInputContainer');
        
        // create project dropdown 
        const projectDropdown = document.createElement('select')
        projectDropdown.setAttribute('class', `taskCardProject${i}`)
        projectDropdown.setAttribute('id', 'newTaskInput')
        projectDropdown.setAttribute('name', 'newTaskInput')
        projectDropdown.setAttribute('value', `${task.project}`)

        // create project dropdown options
        // blank option for no project
        const blankProjectOption = document.createElement('option')
        blankProjectOption.value = ''
        blankProjectOption.text = ''
        projectDropdown.appendChild(blankProjectOption)
        // remaining options generated from projects array
        projects.all.forEach(project => {
            const projectOption = document.createElement('option')
            projectOption.value = `${project.name}`
            projectOption.text = `${project.name}`
            if (task.project === project.name) {
                projectOption.selected = true;
            }
            projectDropdown.appendChild(projectOption)
        })
        projectInputContainer.appendChild(projectDropdown)
        cardRow2.appendChild(projectInputContainer);
        

        // priority input container
        const priorityInputContainer = document.createElement('td');
        priorityInputContainer.setAttribute('class', 'priorityInputContainer');
        
        // create priority dropdown 
        const priorityDropdown = document.createElement('select')
        priorityDropdown.setAttribute('class', `taskCardPriority${i}`)
        priorityDropdown.setAttribute('id', 'newTaskInput')
        priorityDropdown.setAttribute('name', 'newTaskInput')
        priorityDropdown.setAttribute('value', `${task.priority}`)
        
        // create priority dropdown options
        // high priority
        const priorityHigh = document.createElement('option')
        priorityHigh.value = 'high'
        priorityHigh.text = 'High'
        // medium priority
        const priorityMedium = document.createElement('option')
        priorityMedium.value = 'medium'
        priorityMedium.text = 'Medium'
        // low priority
        const priorityLow = document.createElement('option')
        priorityLow.value = 'low'
        priorityLow.text = 'Low'
        
        // priority selection
        if (task.priority === 'high') {
        priorityHigh.selected = true;
        } else if (task.priority === 'low') {
        priorityLow.selected = true;
        } else 
        priorityMedium.selected = true;
        
        // append priority input to row
        priorityDropdown.appendChild(priorityHigh);
        priorityDropdown.appendChild(priorityMedium);
        priorityDropdown.appendChild(priorityLow);        
        priorityInputContainer.appendChild(priorityDropdown);        
        cardRow2.appendChild(priorityInputContainer);



        // Third row 
        const cardRow3 = document.createElement('tr');
        cardRow3.setAttribute('class', 'cardRow3')
        _createAddButton(cardRow3, i);
        _createCancelButton(cardRow3, `${i}`);



        // append task card to tasklist
        taskCard.appendChild(cardRow1);
        taskCard.appendChild(cardRow2);
        taskCard.appendChild(cardRow3);

        newCard.appendChild(newThead);
        newCard.appendChild(taskCard);

        newCardContainer.appendChild(newCard);

        tasklist.appendChild(newCardContainer);
    }
    

    // append all tasks to tasklist
    let i=0
    tasks.all.forEach(task => {
        _createTaskListing(task, i);
        _createTaskCard(task, i);
        i++
    });
}





// Complete task
const _markComplete = (e) => {
    const taskID = e.target.getAttribute('id');
    if (tasks.all[taskID].complete === 'true') {
        //mark task incomplete
        tasks.all[taskID].complete = 'false'
    } else if (tasks.all[taskID].complete === 'false') {
        //mark task complete
        tasks.all[taskID].complete = 'true'
    } else {
        console.log('this is strange')
    }
    displayTasks();
}

// Show task card
const _showTaskCard = (e) => {
    const taskID = e.target.parentElement.parentElement.getAttribute('id');
    // show task card
    const taskCard = document.querySelector(`.card${taskID}`);
    taskCard.setAttribute('id', `${taskID}`);
    //hide task listing
    const taskListing = document.querySelector(`.listing${taskID}`);
    taskListing.setAttribute('id', 'hidden');
}

const _submitTaskCard = (e) => {
    const taskID = (e.target.getAttribute('id')) 

    // Get input values
    const updatedTask = document.querySelector(`.taskCardTask${taskID}`).value
    const updatedDate = document.querySelector(`.taskCardDate${taskID}`).value
    const updatedProject = document.querySelector(`.taskCardProject${taskID}`).value
    const updatedPriority = document.querySelector(`.taskCardPriority${taskID}`).value

    // Apply input values to task object
    tasks.all[taskID].task = updatedTask
    tasks.all[taskID].date = updatedDate
    tasks.all[taskID].project = updatedProject
    tasks.all[taskID].priority = updatedPriority

    // Refresh tasklist
    displayTasks();
}

// Delete task
const _deleteTask = (e) => {
    let doomedIndex = e.target.parentElement.parentElement.getAttribute('id');
    tasks.all.splice(doomedIndex, 1);
    displayTasks();
}





// TASK DISPLAY OPTIONS

// how is this being skipped when clicking on delete icon??
const setTaskFilter = (container, e) => {   

    // set content title (filter)
    const contentTitle = document.querySelector('.contentTitle')
    contentTitle.textContent = container.innerText

    // deselect any menu filter 
    const allTasksClassList = document.querySelector('.allTasks').classList
    const dueTodayClassList = document.querySelector('.dueToday').classList
    const dueWeekClassList = document.querySelector('.dueWeek').classList
    if (allTasksClassList.contains('selected')) {
        allTasksClassList.remove('selected')
    } if (dueTodayClassList.contains('selected')) {
        dueTodayClassList.remove('selected')
    } if (dueWeekClassList.contains('selected')) {
        dueWeekClassList.remove('selected')
    } 

    // deselect all projects
    projects.all.forEach(project => {
        if (project.selected === 'true') {
            project.selected = 'false'
        }
    }) 

    // Select project if one is chosen (main menu selection is handled in event listener)
    if (container.getAttribute('class') === 'project') {
        var selectedProjectId = container.getAttribute('id');
        projects.all[selectedProjectId].selected = 'true'
    }

    displayProjects();    
    displayTasks();
}





export {
    // Used in index & core

    // Used only in core
    createForm,
    createChecklistIcon,
    createWeekIcon,
    createTodayIcon,
    createAdditionIcon,
    setTaskFilter,

    // Used only in index
    displayProjects,
    displayTasks,
}