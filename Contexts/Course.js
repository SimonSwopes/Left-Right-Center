// Course.js

class Course {
    constructor(name, pars) {
        this.name = name;
        this.pars = pars;
    }

    getHolePar(hole) {
        return this.pars[hole];
    }

    getAllPars() {
        return this.pars;
    }

    getCourseName() {
        return this.name;
    }
}

export default Course;