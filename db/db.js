require("dotenv").config();
console.log(typeof process.env.DB_PORT);
const db = require("serverless-mysql")({
  config: {
    host: process.env.ENDPOINT,
    database: process.env.DATABASE,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: 6033,
  },
});

// Main handler function
module.exports = db;
