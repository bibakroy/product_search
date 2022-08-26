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

app.listen(process.env.PORT || 3000, () => {
  console.log("RESTful API server started on: " + 3000);
});

module.exports = app;
