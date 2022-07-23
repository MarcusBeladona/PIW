const matriculaModel = require("../model/matriculaModel");
const matriculaView = require("../view/matriculaView");
const authController = require("../controller/authController");

getMatricula = (req, res) => {
	matriculaModel
		.find()
		.populate("disciplina")
		.populate("aluno")
		.exec()
		.then(a => res.status(200).json(matriculaView.renderAll(a)))
		.catch(e => res.status(500).send("Error: " + e));
};

getMatriculaById = (req, res) => {
	matriculaModel
		.findById(req.params.id)
		.exec()
		.then(a => res.status(200).json(matriculaView.render(a)))
		.catch(e => {
			res.status(404).send("Not Found: " + e);
		});
};

postMatricula = (req, res) => {
	matriculaModel
		.create({
			aluno: authController.decode(req.headers.token).alunoId,
			disciplina: req.body.disciplina,
		})
		.then(matricula => res.json(matriculaView.render(matricula)))
		.catch(e => res.status(500).json(matricula));
};

deleteMatricula = (req, res) => {
	matriculaModel
		.findByIdAndDelete(req.params.id)
		.exec()
		.then(a => res.status(200).json(a))
		.catch(e => res.status(404).send("Not Found: " + e));
};

module.exports = {
	getMatricula,
	getMatriculaById,
	postMatricula,
	deleteMatricula,
};
