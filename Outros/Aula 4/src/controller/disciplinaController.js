const disciplinaModel = require("../model/disciplinaModel");
const disciplinaView = require("../view/disciplinaView");

getDisciplina = (req, res) => {
	disciplinaModel
		.find()
		.exec()
		.then(a => res.status(200).json(disciplinaView.renderAll(a)))
		.catch(e => res.status(500).send("Error: " + e));
};

getDisciplinaById = (req, res) => {
	disciplinaModel
		.findById(req.params.id)
		.exec()
		.then(a => res.status(200).json(disciplinaView.render(a)))
		.catch(e => {
			res.status(404).send("Not Found: " + e);
		});
};

postDisciplina = (req, res) => {
	disciplinaModel
		.create(req.body)
		.then(disciplina => res.json(disciplina))
		.catch(e => res.status(500).json(disciplina));
};

deleteDisciplina = (req, res) => {
	disciplinaModel
		.findByIdAndDelete(req.params.id)
		.exec()
		.then(a => res.status(200).json(a))
		.catch(e => res.status(404).send("Not Found: " + e));
};

module.exports = {
	getDisciplina,
	getDisciplinaById,
	postDisciplina,
	deleteDisciplina,
};
