const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(school);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
        this.icon = "fas fa-user-graduate";
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
    makeCard() {
        return `
        <div class="card">
            <div class="card-header" style="padding: 15px;">
                <p class="name">${this.name}</p>
                <p><i class="${this.icon}"></i>${this.getRole()}</p>
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