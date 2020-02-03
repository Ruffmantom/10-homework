const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const inquirer = require("inquirer");

// select the position of the person you are entering
var positionSelect = [
    {
        type: 'list',
        name: 'position',
        message: 'What is thier current position?',
        choices: [
            'Intern',
            'Employee',
            'Engineer',
            'Manager'
        ]
    }
];
// need to make question select for the user 
// if they want to continue to add more or end session

// Questions for that specific position
function employeeQues() {
    employee = {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"

    }
    return employee;
}
function internQues() {
    intern = [
        {
            type: "input",
            name: "name",
            message: "What is the applicants Name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is thier ID number?"
        },
        {
            type: "input",
            name: "username",
            message: "What is thier Email?"
        }]
    return intern;
}
function engineerQues() {
    engineer = {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    }
    return engineer;
}
function managerQues() {
    manager = {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    }
    return manager;
}



function promtUser() {
    return inquirer.prompt(positionSelect);
}

promtUser()
    .then(function (res) {
        // console.log(res)
        if (res.position === 'Intern') {

            inquirer.prompt(internQues());
        }
    })