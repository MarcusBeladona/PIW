const alunoModel = require("../model/alunoModel");

getaluno = (req, res) => {
	alunoModel
		.find()
		.exec()
		.then((a) => res.status(200).json(a))
		.catch((e) => res.status(500).send("Error: " + e));
};

getalunoById = (req, res) => {
	alunoModel
		.findById(req.params.id)
		.exec()
		.then((a) => res.status(200).json(a))
		.catch((e) => {
			res.status(404).send("Not Found: " + e);
		});
};

postaluno = (req, res) => {
	alunoModel
		.create(req.body)
		.then((aluno) => res.json(aluno))
		.catch((e) => res.status(500).json(aluno));
};

deletealuno = (req, res) => {
	alunoModel
		.findByIdAndDelete(req.params.id)
		.exec()
		.then((a) => res.status(200).json(a))
		.catch((e) => res.status(404).send("Not Found: " + e));
};

module.exports = {
	getaluno,
	getalunoById,
	postaluno,
	deletealuno,
};
