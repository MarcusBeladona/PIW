const consultaModel = require("../models/consultaModel");
const medicoModel = require("../models/medicoModel");
const jwt = require("jsonwebtoken");

function getConsultasById(req, res) {
	const token = jwt.decode(req.headers.token);

	medicoModel
		.find()
		.exec()
		.then(medicos => {
			if (token.funcao == 2) {
				//paciente
				res.status(403).json("Não Autorizado");
			} else {
				consultaModel
					.find({
						medicoId: req.params.id,
					})
					.populate("usuarioId")
					.populate("medicoId")
					.exec()
					.then(consultas => res.status(200).json(consultas))
					.catch(e => res.status(404).json(e));
			}
		})
		.catch(e => res.status(404).json(e));
}

function postMedico(req, res) {
	medicoModel
		.create(req.body)
		.then(medico => res.status(201).json(medico))
		.catch(e => res.status(404).json(e));
}

module.exports = {
	getConsultasById,
	postMedico,
};
