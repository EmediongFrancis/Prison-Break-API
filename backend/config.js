// Configure database connection with credentials
const mysql = require('mysql');
const config = {
  host: 'localhost',
  user: 'root',
  password: 'prisonbreak',
  database: 'PrisonBreakAPI'
};

// Export configuration to be used outside
const pool = mysql.createPool(config);
module.exports = pool;
