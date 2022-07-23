let express = require("express");
let routes_aluno = require("../app/routes/alunos.js");
let routes_disciplina = require("../app/routes/disciplina.routes");

function setup() {
	let app = express();
	app.set("port", 3000);
	app.use(express.static("./public"));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	routes_aluno(app);
	routes_disciplina(app);
	return app;
}

module.exports.setup = setup;
