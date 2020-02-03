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
function internQues() {
    intern = [
        {
            type: "input",
            name: "name",
            message: "What is the Intern's Name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is thier ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is thier Email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is the school they are attending?"
        }]
    return intern;

}
function employeeQues() {
    employee = [
        {
            type: "input",
            name: "name",
            message: "What is the Employee's Name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is thier ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is thier Email?"
        }]
    return employee;
}

function engineerQues() {
    engineer = [
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's Name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is thier ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is thier Email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is thier GitHub?"
        }]
    return engineer;
}
function managerQues() {
    manager = [
        {
            type: "input",
            name: "name",
            message: "What is the Manager's Name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is thier ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is thier Email?"
        },
        {
            type: "input",
            name: "officeNum",
            message: "What is the curent office number?"
        }]
    return manager;
}



function promtUser() {
    return inquirer.prompt(positionSelect);
}

promtUser()
    .then(function (res) {
        // console.log(res)
        if (res.position === 'Intern') {
            inquirer.prompt(internQues())
                .then(answer => {
                    const name = answer.name;
                    const id = answer.id;
                    const email = answer.email;
                    const school = answer.school;
                    const cardArray = [name, id, email, school];
                    console.log(cardArray)
                })
        } else if (res.position === 'Employee') {
            inquirer.prompt(employeeQues())
                .then(answer => {
                    const name = answer.name;
                    const id = answer.id;
                    const email = answer.email;
                    const cardArray = [name, id, email];
                    console.log(cardArray)
                })
        } else if (res.position === 'Engineer') {
            inquirer.prompt(engineerQues())
                .then(answer => {
                    const name = answer.name;
                    const id = answer.id;
                    const email = answer.email;
                    const github = answer.github;
                    const cardArray = [name, id, email, github];
                    console.log(cardArray)
                })
        } else if (res.position === 'Manager') {
            inquirer.prompt(managerQues())
                .then(answer => {
                    const name = answer.name;
                    const id = answer.id;
                    const email = answer.email;
                    const officeNum = answer.officeNum;
                    const cardArray = [name, id, email, officeNum];
                    console.log(cardArray)
                })
        }

    })