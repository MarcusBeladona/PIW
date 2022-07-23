const express = require("express");
const routes_aluno = require("./app/routes/alunos.js")

function setup() {
	let app = express();
	app.set("port", 9988);
    app.use(express.static("./public"));
    routes_aluno(app);
	return app;
}

module.exports.setup = setup;
