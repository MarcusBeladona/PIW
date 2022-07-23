let controller_alunos = require("../controller/alunos.js");

module.exports = function (app) {
	app.get("/alunos", controller_alunos.listar_alunos);
	app.get("/alunos/:id", controller_alunos.obter_alunos);
};
