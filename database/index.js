const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'student',
  database: 'neighborhood',
});

connection.connect();

module.exports = connection;
