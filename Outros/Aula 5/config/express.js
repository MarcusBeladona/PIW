const express = require("express");
const routes = require("./routes");
const alunoController = require("../src/controller/alunoController");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.use(express.json());
app.use(routes);


module.exports = app;
