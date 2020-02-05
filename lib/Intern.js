const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(school);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;

    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
    makeCard() {
        return `
        <div class="card col col-md-3">
            <div class="card-header" style="padding: 15px;">
                <p class="name">${this.name}</p>
                <p class="name"><i class="icon fa fa-graduation-cap" aria-hidden="true"></i> ${this.getRole()}</p>
            </div>
            <div class="card-body">
                <p class="list-item">ID: ${this.id}</p>
                <p class="list-item">Email:<a href="#"> ${this.email}</a></p>
                <p class="list-item">School: ${this.school}</p>
            </div>
        </div>
    `
    }
}


module.exports = Intern;