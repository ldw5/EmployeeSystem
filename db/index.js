const server = require("../server")


class Team{
    constructor(server)
    {this.server = server;}

    viewDart(){
        return this.server.query(
            'SELECT * FROM department'
        )
    }
    viewEmploy(){
        return this.server.query(
            'SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, CONCAT(manager.first_name, manager.last_name) AS manager FROM employee LEFT JOIN roles on employee.role_id = roles.id LEFT JOIN department on roles.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;'
        )
    }
    viewRole(){
        return this.server.query(
            'SELECT roles.id, roles.title, department.name AS department, roles.salary FROM roles LEFT JOIN department on roles.department_id = department.id;'
        )
    }
}


module.exports = new Team(server);
