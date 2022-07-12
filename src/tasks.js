class tasks {
    static all = [];

    

    constructor (newTask) {
        this.task = newTask
    }



};



class projects {
    static all = [];



    constructor (projectName) {
        this.project = projectName
    }



}



export {
    projects,
    tasks,
}