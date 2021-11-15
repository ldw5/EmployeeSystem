const mysql = require('mysql2');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Root2468',
    database:'team_db'
}, console.log(`I'm connected to team_db`)
);
module.exports = connect;