const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(github);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;

    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github;
    }
    makeCard() {
        return `
        <div class="card col col-md-3">
            <div class="card-header" style="padding: 15px;">
                <p class="name">${this.name}</p>
                <p class="name"><i class="icon fa fa-desktop" aria-hidden="true"></i> ${this.getRole()}</p>
            </div>
            <div class="card-body">
                <p class="list-item">ID: ${this.id}</p>
                <p class="list-item">Email:<a href="#"> ${this.email}</a></p>
                <p class="list-item">GitHub: ${this.github}</p>
            </div>
        </div>
    `
    }
}
module.exports = Engineer;