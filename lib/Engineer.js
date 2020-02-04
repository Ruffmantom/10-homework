const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(github);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.icon = "fas fa-glasses";
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github;
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
module.exports = Engineer;