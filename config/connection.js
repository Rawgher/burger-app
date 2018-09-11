// Requiring dotenv to hide database password
require("dotenv").config();

// Set up MySQL connection
const mysql = require("mysql");

let connection = mysql.createConnection({
  
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MySQL_Password,
  database: "burgers_db"

});

// Making connection to the database
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection use in the ORM file
module.exports = connection;