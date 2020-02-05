const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function createHTML(res) {

    return `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- links -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>Company Team</title>
        <style>
            .list-item {
                padding: 3px 5px;
                border: 1px solid rgb(219, 219, 219);
                border-radius: 3px;
                margin: 2px auto;

            }
            .row {
                justify-content: center;
            }
            .card {
                background-color: rgb(219, 219, 219);
                margin: 0 15px;
            }
            .name {
                font-size: 25px;
            }
            .card-body {
                background-color: white;
                width: 100%;
                padding: 20px;
            }
            .card-header {
                background-color: rgb(51, 154, 240);
            }
        </style>
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Team Page</h1>
            </div>
        </div>

        <div class="row" style="margin: 20px; display: flex; width: 100%;">
            ${res.join(' ')}
        </div>
    </body>
    </html>`

}

module.exports = createHTML;