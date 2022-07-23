let controller_alunos = require("../controllers/alunos.js");

module.exports = function (app) {
	// endpoint GET /alunos?min_ira=5000&max_ira=8000
	// endpoint GET /alunos?min_ira=5000
	// endpoint GET /alunos?max_ira=8000
	app.get("/alunos", controller_alunos.listar_alunos);

	// endpoint GET /alunos/2673782 -> retorna o aluno com id 2673782
	app.get("/alunos/:id", controller_alunos.obter_aluno);

	app.post("/alunos", controller_alunos.inserir_aluno);
};
