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

init();
function init(){startUp();}

function startUp () {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choose',
            message: 'Select an option.',
            choices: [
                'View Department',
                'View Employee',
                'View Role',
                'Add new Department',
                'Add new Employee',
                'Add new Role',
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
                
        }
    })
}
function viewDepart() {
    db.viewDepart().then(([information]) => {
        let depart = information;
        console.log('\n');
        console.table(depart)
    }).then(() => startUp());
}
function viewEmploy() {
    db.viewEmploy().then(([information]) => {
        let employ = information;
        console.log('\n');
        console.table(employ)
    }).then(() => startUp());
}
function viewRole() {
    db.viewRole().then(([information]) => {
        let role = information;
        console.log('\n');
        console.table(role)
    }).then(() => startUp());
}
