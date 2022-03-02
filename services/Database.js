const mysql = require('mysql');
const conn = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "prisonbreak",
 database: "todos",
});

conn.connect();

module.exports = conn;
