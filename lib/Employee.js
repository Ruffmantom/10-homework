class Employee {
    constructor(name, id, email) {
        this.id = id;
        this.email = email;
        this.name = name;

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

}
module.exports = Employee;
