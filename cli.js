const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require('fs');
const createHTML = require("./output/createHTML")

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
// asking user if they want to make new card
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
// prompting user
function promptUser() {
    return inquirer.prompt(positionSelect);
}
// make array full of objects to add to html when file is finished
const team = [];

// function that holds a task of creating the html page
function writeHTML(team) {
    fs.writeFile('./output/team.html', createHTML(team), (err) => {
        if (err) throw err;
    })
    console.log('Succses! check for your new HTML page!')
}
// logic to ask questions and get the data back
function askUserLogic(res) {
    if (res.position === 'Intern') {
        inquirer.prompt(internQues())
            .then(answer => {
                const resName = answer.name.toLowerCase().split(' ');
                console.log(resName);
                for (var i = 0, x = resName.length; i < x; i++) {
                    resName[i] = resName[i][0].toUpperCase() + resName[i].substr(1);
                }
                var name = resName.join(" ");
                console.log(name);
                const id = answer.id;
                const email = answer.email;
                const school = answer.school;
                const arr = [name, id, email, school];
                console.log(arr)
                // Create new object
                const internNew = new Intern(name, id, email, school);
                let Icard = internNew.makeCard();
                // pushes card to team array in html string format
                team.push(Icard)
                // ask user to make new card or leave
                newCard()
                    .then(function (res) {
                        if (res.createAgain === "Yes") {
                            promptUser(positionSelect)
                                .then(function (res) {
                                    askUserLogic(res)
                                })
                        } else {
                            console.log('Exiting CLI program');
                            writeHTML(team);
                        }
                    })
            })
    } else if (res.position === 'Engineer') {
        inquirer.prompt(engineerQues())
            .then(answer => {
                const resName = answer.name.toLowerCase().split(' ');
                console.log(resName);
                for (var i = 0, x = resName.length; i < x; i++) {
                    resName[i] = resName[i][0].toUpperCase() + resName[i].substr(1);
                }
                var name = resName.join(" ");
                console.log(name);
                const id = answer.id;
                const email = answer.email;
                const github = answer.github;
                // Create new object
                const engineerNew = new Engineer(name, id, email, github);
                let Ecard = engineerNew.makeCard();
                // pushes card to team array in html string format
                team.push(Ecard);
                // ask user to make new card or leave
                newCard()
                    .then(function (res) {
                        if (res.createAgain === "Yes") {
                            promptUser(positionSelect)
                                .then(function (res) {
                                    askUserLogic(res)
                                })
                        } else {
                            console.log('Exiting CLI program');
                            writeHTML(team);
                        }
                    })
            })
    } else if (res.position === 'Manager') {
        inquirer.prompt(managerQues())
            .then(answer => {
                const resName = answer.name.toLowerCase().split(' ');
                console.log(resName);
                for (var i = 0, x = resName.length; i < x; i++) {
                    resName[i] = resName[i][0].toUpperCase() + resName[i].substr(1);
                }
                var name = resName.join(" ");
                console.log(name);
                const id = answer.id;
                const email = answer.email;
                const officeNum = answer.officeNum;
                // Create new object
                const managerNew = new Manager(name, id, email, officeNum);
                let Mcard = managerNew.makeCard();
                // pushes card to team array in html string format
                team.push(Mcard);
                // ask user to make new card or leave
                newCard()
                    .then(function (res) {
                        if (res.createAgain === "Yes") {
                            promptUser(positionSelect)
                                .then(function (res) {
                                    askUserLogic(res)

                                })
                        } else {
                            console.log('Exiting CLI program');
                            writeHTML(team);
                        }
                    })
            })
    }
}

// this is to run the whole program
promptUser()
    .then(function (res) {
        askUserLogic(res)
    })

