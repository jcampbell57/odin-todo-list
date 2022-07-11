class task {
    static myTasks = [];

    constructor (newTask) {
        this.newTask = newTask
    }

};

class project {
    static myProjects = [];

    constructor (projectName) {
        this.projectName = projectName
    }

}

export {
    project,
    task,
}