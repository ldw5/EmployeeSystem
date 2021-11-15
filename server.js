const mysql = require('mysql2');
require("console.table");
const inquirer = require("inquirer")
const db = require("./db");

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Root2468',
    database:'team_db'
}, console.log(`I'm connected to team_db`)
);
module.exports = connect;

function startUp () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choose',
            message: 'Select an option.',
            choices: [
                'View Employees',
                'View Roles',
                'View Departments',
                'Add New Employee',
                'Add Role',
                'Add Department',
                'Quit'
            ],
        }
    ]).then((answer) => {
        switch (answer.choose) {
            case 'View every Department':
                viewDepart();
                break;

            case 'View every Employee':
                viewEmploy();
                break;

            case 'View every Role':
                viewRole();
                break;

            case 'Add new Department':
                newDepart();
                break;

            case 'Add new Employee':
                newEmploy();
                break;

            case 'Add new Role':
                newRole();
                break;

            case 'Quit':
                Quit();
                break;
        }
    })
}