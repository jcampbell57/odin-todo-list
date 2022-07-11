class tasks {
    static all = [];

    constructor (newTask) {
        this.newTask = newTask
    }

};

class projects {
    static all = [];

    constructor (projectName) {
        this.projectName = projectName
    }

}

export {
    projects,
    tasks,
}