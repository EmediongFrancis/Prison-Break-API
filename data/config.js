const mysql = require('mysql');
const config = {
  host: 'localhost',
  user: 'root',
  password: 'prisonbreak',
  database: 'PrisonBreakAPI'
};

const pool = mysql.createPool(config);
module.exports = pool;
