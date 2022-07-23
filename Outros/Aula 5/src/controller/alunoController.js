const alunoModel = require("../model/alunoModel");
const alunoView = require("../view/alunoView");
const bcrypt = require("bcrypt");

getaluno = (req, res) => {
	alunoModel
		.find()
		.exec()
		.then(a => res.status(200).json(alunoView.renderAll(a)))
		.catch(e => res.status(500).send("Error: " + e));
};

getalunoById = (req, res) => {
	alunoModel
		.findById(req.params.id)
		.exec()
		.then(a => res.status(200).json(alunoView.render(a)))
		.catch(e => {
			res.status(404).send("Not Found: " + e);
		});
};

postaluno = (req, res) => {
	let aluno = {
		nome: req.body.nome,
		matricula: req.body.matricula,
		senha: bcrypt.hashSync(req.body.senha, 10),
	};

	alunoModel
		.create(aluno)
		.then(aluno => res.json(alunoView.render(aluno)))
		.catch(e => res.status(500).json(aluno));
};

deletealuno = (req, res) => {
	alunoModel
		.findByIdAndDelete(req.params.id)
		.exec()
		.then(a => res.status(200).json(a))
		.catch(e => res.status(404).send("Not Found: " + e));
};

module.exports = {
	getaluno,
	getalunoById,
	postaluno,
	deletealuno,
};
