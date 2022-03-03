const mysql = require('mysql');
const config = {
  host: 'localhost',
  user: 'root',
  password: 'prisonbreak',
  database: 'api'
};

const pool = mysql.createPool(config);
module.exports = pool;
