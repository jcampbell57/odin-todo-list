import checkboxBlank from './assets/checkbox-blank.svg';
import checkboxMarked from './assets/checkbox-marked.svg';
import checklist from './assets/checklist.svg';
import calendarToday from './assets/calendar-today.svg';
import calendarWeek from './assets/calendar-range.svg';
import pastDue from './assets/history.svg';
import additionIcon from './assets/plus.svg';
import editIcon from './assets/edit.svg';
import deleteIcon from './assets/delete.svg';

import { tasks } from './tasks';
import { add, format, isWithinInterval, parseISO, startOfDay } from 'date-fns';



// Icon & button generators 
const _createCheckboxIcon = (div, task, i) => {
    const checkboxIcon = document.createElement('img');
    if (task.complete === 'true') {
        checkboxIcon.src = checkboxMarked
    } else {
        checkboxIcon.src = checkboxBlank;
    }
    checkboxIcon.classList.add('icon');
    checkboxIcon.setAttribute('id', `${i}`);
    checkboxIcon.addEventListener('click', (e) => _markComplete(e))
    div.appendChild(checkboxIcon);
} 

const createChecklistIcon = (li) => {
    const checklistIcon = document.createElement('img');
    checklistIcon.src = checklist;
    checklistIcon.classList.add('icon')
    li.appendChild(checklistIcon);
}

const _createEditIcon = (div, i) => {
    const newEditIcon = document.createElement('img');
    newEditIcon.src = editIcon;
    newEditIcon.setAttribute('class', 'icon');
    newEditIcon.setAttribute('id', `${i}`);
    // event listener to open task card
    newEditIcon.addEventListener('click', (e) => _showTaskCard(e))
    div.appendChild(newEditIcon);
}

const _createDeleteIcon = (container, i) => {
    // create image and assign attributes
    const newDeleteIcon = document.createElement('img');
    newDeleteIcon.src = deleteIcon;
    newDeleteIcon.classList.add('icon', 'deleteItem')
    newDeleteIcon.setAttribute('id', `${i}`)
    
    // ADD EVENT LISTENER
    if (container.classList.contains('task')) {
        // Event listener to delete task
        newDeleteIcon.addEventListener('click', (e) => _deleteTask(e))
    } else if (container.classList.contains('projectListing')) {
        // Event listener to delete project
        newDeleteIcon.classList.add(`deleteProject`, `deleteProject${i}`, `hidden`)        
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
        console.log('this is strange');
    }
    // append to container
    container.appendChild(newDeleteIcon)
}

const createAdditionIcon = (li) => {
    const newAdditionIcon = document.createElement('img');
    newAdditionIcon.src = additionIcon;
    newAdditionIcon.classList.add('icon')
    li.appendChild(newAdditionIcon);
}

const createTodayIcon = (li) => {
    const newTodayIcon = document.createElement('img');
    newTodayIcon.src = calendarToday;
    newTodayIcon.classList.add('icon')
    li.appendChild(newTodayIcon);
}

const createWeekIcon = (li) => {
    const newWeekIcon = document.createElement('img');
    newWeekIcon.src = calendarWeek;
    newWeekIcon.classList.add('icon')
    li.appendChild(newWeekIcon);
}

const createPastDueIcon = (li) => {
    const newPastDueIcon = document.createElement('img');
    newPastDueIcon.src = pastDue;
    newPastDueIcon.classList.add('icon')
    li.appendChild(newPastDueIcon);
}

const _createAddButton = (container, i) => {
    const addBtn = document.createElement('button');
    addBtn.classList.add('addBtn');
    addBtn.innerText = "submit";
    if (container.classList.contains('cardRow3')) {
        // convert card to form? and change this event listener to trigger when form submits
        addBtn.setAttribute('id', `${i}`);
        addBtn.addEventListener('click', (e) => _submitTaskCard(e))
    } else if (i.classList.contains('addProjectForm')) {
        addBtn.classList.add('projectAddBtn');
    } else if (i.classList.contains('addTaskForm')) {
        addBtn.classList.add('taskAddBtn');
    };
    container.appendChild(addBtn);
}

const _createCancelButton = (container, i) => {
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancelBtn');
    cancelBtn.innerText = "cancel";
    if (container.classList.contains('cardRow3')) {
        cancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            displayTasks()
        })
    };
    container.appendChild(cancelBtn);   
}



// Container AND icon generators (For task listing and task card)

const createDateContainer = (li, task, i) => {
    const dateContainer = document.createElement('span');
    dateContainer.classList.add('dateContainer');
    // task card date format
    if (li.classList.contains('editDateContainer')) {
        dateContainer.innerHTML = `<input class='taskCardInput taskCardDate${i}' 
                                   type='date' 
                                   id='taskCardDate' 
                                   name='taskCardDate' 
                                   value='${task.date}'>`
    // task listing date format
    } else {
        // grab todays date and due date
        const today = new Date();
        const taskDate = parseISO(task.date)

        // only display due date if there is one
        if (task.date === '') {
            dateContainer.innerText === ''
        // display today
        } else if (today.getDate() === taskDate.getDate()) {
            dateContainer.innerText = `Today`
        // display tomorrow 
        } else if (add(today, {days: 1}).getDate() === taskDate.getDate()) {
            dateContainer.innerText = `Tomorrow`
        // display weekday (if in 2 days)
        } else if (add(today, {days: 2}).getDate() === taskDate.getDate()) {
            dateContainer.innerText = `${format(parseISO(task.date), 'eeee')}`
        // display date 
        } else {
            dateContainer.innerText = `${format(parseISO(task.date), 'LLL do')}`
        }
    }
    li.appendChild(dateContainer);
}



// Form generator
const createForm = (form) => {
    
    const formRow1 = document.createElement('div');
    formRow1.classList.add('formRow');
    
    const formRow2 = document.createElement('div');
    formRow2.classList.add('formRow');
    formRow2.setAttribute('id', 'formButtons');

    const formRow3 = document.createElement('div');
    formRow3.classList.add('hidden');

    // row one: assign input according to class of form
    // row three: assign error class and text according to class of form
    if (form.classList.contains('addProjectForm')) {
        formRow1.innerHTML = "<input type='text' id='newProjectInput' name='newProjectInput'></input>";
        formRow3.classList.add('newProjErrorContainer');
        formRow3.innerText = 'Name your project!'
    } else if (form.classList.contains('addTaskForm')) {
        formRow1.innerHTML = "<input type='text' id='newTaskInput' name='newTaskInput'></input>";
        formRow3.classList.add('newTaskErrorContainer');
        formRow3.innerText = 'Name your task!'
    } else {
        console.log('this is strange')
    }
    // row two: submit and cancel buttons
    _createAddButton(formRow2, form);
    _createCancelButton(formRow2, form);
       
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
    const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
    storageProjects.forEach(project => {
        _displayProject(project, i)
        i++
    });
}



// Delete project
const _deleteProject = (e) => {
    // grab arrays from storage
    const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))

    // Identify project to delete
    const doomedIndex = e.target.getAttribute('id');
    const doomedName = storageProjects[doomedIndex].name;

    // delete project
    storageProjects.splice(doomedIndex, 1);


    // delete all tasks in doomed project
    // mark tasks for deletion
    storageTasks.forEach((task, index) => {
        if (task.project === doomedName) {
            // will delete after loop as to not make errors
            tasks.toDelete.push(task.name)
        }
    })
    // delete marked tasks
    tasks.toDelete.forEach(doomedTask => {
        storageTasks.forEach((task, index) => {
            if (task.name === doomedTask) {
                storageTasks.splice(index, 1)
            }
        })
    }) 
    // clear teDelete array 
    tasks.toDelete = [];

    // set changes to localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks));
    localStorage.setItem('storageProjects', JSON.stringify(storageProjects));


    // If doomed project was selected, revert tasklist to all tasks
    const contentTitle = document.querySelector('.contentTitle');
    const allTasksClassList = document.querySelector('.allTasks').classList
    if (contentTitle.textContent === doomedName) {
        contentTitle.textContent = 'All tasks' 
        allTasksClassList.add('selected')
    }

    // refresh tasklist
    displayProjects();
    displayTasks();
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
        const newListing = document.createElement('li');
        newListing.classList.add('task', `listing${i}`);
        // complete filter to assign class
        if (task.complete === 'true') {
            newListing.classList.add('complete')
        }
        // assign priority class
        if (task.priority === '1') {
            newListing.classList.add('highPriority');
        } else if (task.priority === '2') {
            newListing.classList.add('mediumPriority');
        } else if (task.priority === '3') {
            newListing.classList.add('lowPriority');
        }

        // assign past due class (for darkred font color)
        if (new Date() - add(parseISO(task.date), {days: 1, seconds: -1}) > 0 && task.complete === 'false') {
            newListing.classList.add('taskPastDue');
        }

        newListing.setAttribute('id', `${i}`);
        
        // add checkbox
        _createCheckboxIcon(newListing, task, i);
        
        // add task
        const taskContainer = document.createElement('div');
        taskContainer.classList.add(`taskContainer${i}`);
        // complete filter for strikethrough
        if (task.complete === 'true') {
            taskContainer.setAttribute('id', 'complete');
        }
        taskContainer.innerText = `${task.name}`;
        newListing.appendChild(taskContainer);

        // add date
        createDateContainer(newListing, task);

        // add edit button
        const editContainer = document.createElement('div');
        editContainer.classList.add('editContainer', 'taskEdit');
        _createEditIcon(editContainer, i);
        newListing.appendChild(editContainer);

        // add delete button
        _createDeleteIcon(newListing, i);

        //append task to tasklist
        tasklist.appendChild(newListing);



        // set display filter

        // completed
        const completedTasksToggle = document.querySelector('.completedTasksToggle')
        // check to see if completed tasks should be displayed
        if (localStorage.getItem('completedFilter') === 'true') {
            // hide completed tasks
            if (task.complete === 'true') {
                newListing.classList.add('hidden');
            }            
        }
        
        // DATE FILTERS
        const filter = document.querySelector('.contentTitle').textContent
        // All tasks
        if (filter === 'All tasks') {
            return;

        // Due Today
        } else if (filter === 'Due today') {
            // hide if no due date
            if (task.date === '') {
                newListing.classList.add('hidden');
                return;
            }
            
            // grab today's date and task due date
            const today = new Date();
            // end of day due date
            const taskDate = add(parseISO(task.date), {days: 1, seconds: -1})
            // console.log(add(parseISO(task.date), {days: 1, seconds: -1}))

            // hide if not due today
            if (today.getMonth() !== taskDate.getMonth() ||
                today.getDate() !== taskDate.getDate() ||
                today.getFullYear() !== taskDate.getFullYear() ) {
                    newListing.classList.add('hidden');
            }
        
        // Due this week
        } else if (filter === 'Due this week') {

            // hide if no due date
            if (task.date === '') {
                newListing.classList.add('hidden');
                return;
            }
            
            // grab week dates and task due date date
            const today = startOfDay(new Date())
            const endOfWeek = add(today, {days: 8, seconds: -1})
            // midnight due date
            const taskDate = add(parseISO(task.date), {days: 1, seconds: -1})
            
            // hide if not due this week
            if (isWithinInterval(taskDate, {
                start: today,
                end: endOfWeek,
            }) === false) {
                newListing.classList.add('hidden')
                return
            }
        
        // hide if no due date
            
        } else if (filter === 'Past due') {
            // Past due 
            if (task.date === '' || task.complete === 'true') {
                newListing.classList.add('hidden');
                return;

            // hide if not past due
            } else if (new Date() - add(parseISO(task.date), {days: 1, seconds: -1}) < 0) {
                newListing.classList.add('hidden');
                return;
            }    
        }


        // project filter
        // grab projects array from storage
        const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
        // apply filter
        storageProjects.forEach(project => {
            if (project.name === filter) {
                if (task.project !== filter) {
                    newListing.classList.add('hidden');
                };    
            }
        })
        // set projects array back into localStorage
        localStorage.setItem('storageProjects', JSON.stringify(storageProjects))
    }
    

    // Create and hide task card in tasklist display
    const _createTaskCard = (task, i) => {
        // CREATE TASK CARD
        const newCardContainer = document.createElement('li')
        newCardContainer.classList.add('task', 'card', `card${i}`, 'hidden');

        // complete filter to assign class
        if (task.complete === 'true') {
            newCardContainer.classList.add('complete')
        }       

        // assign priority class
        if (task.priority === '1') {
            newCardContainer.classList.add('highPriority');
        } else if (task.priority === '2') {
            newCardContainer.classList.add('mediumPriority');
        } else if (task.priority === '3') {
            newCardContainer.classList.add('lowPriority');
        }

        // Create form
        const editCardForm = document.createElement('form');
        editCardForm.setAttribute('class', 'menuOptions');
        editCardForm.setAttribute('id', `${i}`);
        
        // Create fieldset
        const taskCard = document.createElement('fieldset');
        taskCard.setAttribute('id', 'taskCard');
        
        // create legend
        const taskCardLegend = document.createElement('legend');
        // taskCardLegend.innerText = 'Modify task'

        // First row
        const cardRow1 = document.createElement('div');
        cardRow1.classList.add('cardRow', 'cardRow1')
        // add task name input
        const taskInputContainer = document.createElement('div');
        taskInputContainer.classList.add(`taskInputContainer`);
        taskInputContainer.innerHTML = `<label for='taskCardTask'>Task:</label>

                                        <input type='text' 
                                        class='taskCardInput taskCardTask${i}' 
                                        id='taskCardTask' 
                                        name='taskCardTask' 
                                        value='${task.name}'></input>`;
        cardRow1.appendChild(taskInputContainer);
        // add date input
        const editDateContainer = document.createElement('div');
        editDateContainer.classList.add(`editDateContainer`);
        editDateContainer.innerHTML = "<label for='taskCardDate'>Due date:</label>";
        createDateContainer(editDateContainer, task, i);
        cardRow1.appendChild(editDateContainer);



        // Second row 
        const cardRow2 = document.createElement('div');
        cardRow2.classList.add('cardRow', 'cardRow2')
        
        // project input container
        const projectInputContainer = document.createElement('div');
        projectInputContainer.classList.add('projectInputContainer');
        projectInputContainer.innerHTML = "<label for='taskCardProject'>Project:</label>";

        // create project dropdown 
        const projectDropdown = document.createElement('select')
        projectDropdown.classList.add('taskCardInput', `taskCardProject${i}`)
        projectDropdown.setAttribute('id', 'taskCardProject')
        projectDropdown.setAttribute('name', 'taskCardProject')
        projectDropdown.setAttribute('value', `${task.project}`)

        // create project dropdown options
        // blank option for no project
        const blankProjectOption = document.createElement('option')
        blankProjectOption.value = ''
        blankProjectOption.text = ''
        projectDropdown.appendChild(blankProjectOption)
        // remaining options generated from projects array
        const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
        storageProjects.forEach(project => {
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
        const priorityInputContainer = document.createElement('div');
        priorityInputContainer.classList.add('priorityInputContainer');
        priorityInputContainer.innerHTML = "<label for='taskCardPriority'>Priority:</label>";

        // create priority dropdown 
        const priorityDropdown = document.createElement('select')
        priorityDropdown.classList.add('taskCardInput', `taskCardPriority${i}`)
        priorityDropdown.setAttribute('id', 'taskCardPriority')
        priorityDropdown.setAttribute('name', 'taskCardPriority')
        priorityDropdown.setAttribute('value', `${task.priority}`)
        
        // create priority dropdown options
        // high priority
        const priorityHigh = document.createElement('option')
        priorityHigh.value = '1'
        priorityHigh.text = 'High'
        // medium priority
        const priorityMedium = document.createElement('option')
        priorityMedium.value = '2'
        priorityMedium.text = 'Medium'
        // low priority
        const priorityLow = document.createElement('option')
        priorityLow.value = '3'
        priorityLow.text = 'Low'
        
        // priority selection
        if (task.priority === '1') {
        priorityHigh.selected = true;
        } else if (task.priority === '3') {
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
        const cardRow3 = document.createElement('div');
        cardRow3.classList.add('cardRow', 'cardRow3')
        _createAddButton(cardRow3, i);
        _createCancelButton(cardRow3, `${i}`);



        // append task card to tasklist
        taskCardLegend.appendChild(cardRow1);
        taskCardLegend.appendChild(cardRow2);
        taskCardLegend.appendChild(cardRow3);
        
        taskCard.appendChild(taskCardLegend);
        editCardForm.appendChild(taskCard);
        newCardContainer.appendChild(editCardForm);

        // Create delete button
        _createDeleteIcon(newCardContainer, i)

        tasklist.appendChild(newCardContainer);
    }
    


    // sort tasks by due date then priority
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    storageTasks.sort((taskA, taskB) => {
        // tasks with no date to the top
        if (taskA.date === '') {
            return -1;
        } else if (taskB.date === '') {
            return 1;
        // sort by due date
        } else if (parseISO(taskA.date) - parseISO(taskB.date) !== 0) {
            return parseISO(taskA.date) - parseISO(taskB.date);
        // sort by priority
        } else {
            return taskA.priority - taskB.priority;
        }
    })
    // set task array back into localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks));



    // append all tasks to tasklist
    let i=0
    storageTasks.forEach(task => {
        _createTaskListing(task, i);
        _createTaskCard(task, i);
        i++
    });
}





// Complete task
const _markComplete = (e) => {
    const taskID = e.target.getAttribute('id');
    // NEW
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    if (storageTasks[taskID].complete === 'true') {
        //mark task incomplete
        storageTasks[taskID].complete = 'false'
    } else if (storageTasks[taskID].complete === 'false') {
        //mark task complete
        storageTasks[taskID].complete = 'true'
    } else {
        console.log('this is strange')
    }
    // set task array back into localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks));
    displayTasks();
}

// Show task card
const _showTaskCard = (e) => {
    const taskID = e.target.getAttribute('id');
    // refresh tasklist to close other task cards (optional but looks cleaner)
    displayTasks();
    // show task card
    const taskCard = document.querySelector(`.card${taskID}`);
    taskCard.setAttribute('id', `${taskID}`);
    //hide task listing
    const taskListing = document.querySelector(`.listing${taskID}`);
    taskListing.setAttribute('id', 'hidden');
}

const _submitTaskCard = (e) => {
    e.preventDefault();
    const taskID = (e.target.getAttribute('id')) 

    // Get input values
    const updatedName = document.querySelector(`.taskCardTask${taskID}`).value
    const updatedDate = document.querySelector(`.taskCardDate${taskID}`).value
    const updatedProject = document.querySelector(`.taskCardProject${taskID}`).value
    const updatedPriority = document.querySelector(`.taskCardPriority${taskID}`).value

    // grab updated task from localStorage
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    var updatedTask = storageTasks[taskID]
    // Apply input values to task object
    updatedTask.name = updatedName
    updatedTask.date = updatedDate
    updatedTask.project = updatedProject
    updatedTask.priority = updatedPriority
    // set task array back into localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks))
    displayTasks();
}

// Delete task
const _deleteTask = (e) => {
    let doomedIndex = e.target.getAttribute('id');
    const storageTasks = JSON.parse(localStorage.getItem('storageTasks'))
    // remove task from localStorage
    storageTasks.splice(doomedIndex, 1);
    // set task array back into localStorage
    localStorage.setItem('storageTasks', JSON.stringify(storageTasks))
    // refresh tasklist
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
    const pastDueClassList = document.querySelector('.pastDue').classList
    if (allTasksClassList.contains('selected')) {
        allTasksClassList.remove('selected')
    } if (dueTodayClassList.contains('selected')) {
        dueTodayClassList.remove('selected')
    } if (dueWeekClassList.contains('selected')) {
        dueWeekClassList.remove('selected')
    } if (pastDueClassList.contains('selected')) {
        pastDueClassList.remove('selected')
    } 

    // grab projects array from storage
    const storageProjects = JSON.parse(localStorage.getItem('storageProjects'))
    
    // deselect all projects
    storageProjects.forEach(project => {
        if (project.selected === 'true') {
            project.selected = 'false'
        }
    }) 

    // Select project if one is chosen (main menu selection is handled in event listener)
    if (container.classList.contains('projectListing')) {
        var selectedProjectId = container.getAttribute('id');
        storageProjects[selectedProjectId].selected = 'true'
    }

    // set projects array back into localStorage
    localStorage.setItem('storageProjects', JSON.stringify(storageProjects))

    // refresh
    displayProjects();    
    displayTasks();
}





export {
    // Used in index & core

    // Used only in core
    createForm,
    createChecklistIcon,
    createWeekIcon,
    createPastDueIcon,
    createTodayIcon,
    createAdditionIcon,
    setTaskFilter,

    // Used only in index
    displayProjects,
    displayTasks,
}