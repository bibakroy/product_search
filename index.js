"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

var routes = require("./route");
routes(app);

app.listen(process.env.PORT || 5050, () => {
  console.log("RESTful API server started on: " + process.env.PORT || 5050);
});

module.exports = app;
