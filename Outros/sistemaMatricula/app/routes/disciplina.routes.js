let controller_disciplinas = require("../controllers/disciplinas.controller");

module.exports = function (app) {
	app.get("/disciplinas", controller_disciplinas.listarDisciplinas);
	app.post("/disciplinas", controller_disciplinas.inserirDisciplina);
};
