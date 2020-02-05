const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(officeNumber);
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;

    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    makeCard() {
        return `
        <div class="card col col-md-3">
            <div class="card-header" style="padding: 15px;">
                <p class="name">${this.name}</p>
                <p class="name"><i class="icon fa fa-coffee" aria-hidden="true"></i> ${this.getRole()}</p>
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