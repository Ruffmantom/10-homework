class Employee {
    constructor(name, id, email) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.icon = "fas fa-glasses";
    }
    getRole() {
        return "Employee"
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
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
module.exports = Employee;
