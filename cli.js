const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require('fs');

// select the position of the person you are entering
var positionSelect = [
    {
        type: 'list',
        name: 'position',
        message: 'What role does the Current Employee take?',
        choices: [
            'Intern',
            'Engineer',
            'Manager'
        ]
    }
];
// need to make question select for the user 
// if they want to continue to add more or end session
const continueQues = [
    {
        type: 'list',
        name: 'createAgain',
        message: 'Do you want to add another Employee?',
        choices: [
            'Yes',
            'No get me out of here'
        ]
    }
];
function newCard() {
    return inquirer.prompt(continueQues);
}
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
        }];

    return intern;
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
function askUserLogic(res) {
    if (res.position === 'Intern') {
        inquirer.prompt(internQues())
            .then(answer => {
                const name = answer.name;
                const id = answer.id;
                const email = answer.email;
                const school = answer.school;
                const arr = [name, id, email, school];
                console.log(arr)
                // Create new object
                const internNew = new Intern(name, id, email, school);
                internNew.makeCard();
                newCard()
                    .then(function (res) {
                        if (res.createAgain === "Yes") {
                            promtUser(positionSelect)
                                .then(function (res) {
                                    askUserLogic(res)
                                })
                        } else {
                            console.log('noped');
                        }
                    })
            })
    } else if (res.position === 'Engineer') {
        inquirer.prompt(engineerQues())
            .then(answer => {
                const name = answer.name;
                const id = answer.id;
                const email = answer.email;
                const github = answer.github;
                // Create new object
                const engineerNew = new Engineer(name, id, email, github);
                engineerNew.makeCard();
                newCard()
                    .then(function (res) {
                        if (res.createAgain === "Yes") {
                            promtUser(positionSelect)
                                .then(function (res) {
                                    askUserLogic(res)
                                })
                        } else {
                            console.log('noped');
                        }
                    })
            })
    } else if (res.position === 'Manager') {
        inquirer.prompt(managerQues())
            .then(answer => {
                const name = answer.name;
                const id = answer.id;
                const email = answer.email;
                const officeNum = answer.officeNum;
                // Create new object
                const managerNew = new Manager(name, id, email, officeNum);
                managerNew.makeCard();
                newCard()
                    .then(function (res) {
                        if (res.createAgain === "Yes") {
                            promtUser(positionSelect)
                                .then(function (res) {
                                    askUserLogic(res)
                                })
                        } else {
                            console.log('noped');
                        }
                    })
            })
    }
}
promtUser()
    .then(function (res) {
        // console.log(res)
        askUserLogic(res)
        // write logic for continuing and ending
    })
