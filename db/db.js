var mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.ENDPOINT,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

db.connect();

module.exports = db;
