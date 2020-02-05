const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(officeNumber);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        this.icon = "fas fa-mug-hot";
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
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
                <p class="list-item">Office Number: ${this.officeNumber}</p>
            </div>
        </div>
    `
    }

}
module.exports = Manager;