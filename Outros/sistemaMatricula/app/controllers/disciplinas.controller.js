let Disciplina = require("../models/disciplina.model");

module.exports.listarDisciplinas = function (req, res) {
	let promise = Disciplina.find().exec();
	promise
		.then(d => res.status(500).json(d))
		.catch(function (error) {
			res.status(500).json(error);
		});
};

module.exports.inserirDisciplina = function (req, res) {
	let disciplina = req.body;
	let promise = Disciplina.create(disciplina);
	promise
		.then(function (disciplina) {
			res.status(201).json(disciplina);
		})
		.catch(function (error) {
			res.status(500).json(error);
		});
};
