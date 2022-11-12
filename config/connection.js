const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '7450',
    database: 'employees_db'

});

module.exports = db;