const consultaModel = require("../models/consultaModel");
const usuarioModel = require("../models/usuarioModel");
const jwt = require("jsonwebtoken");

function getConsulta(req, res) {
	const token = jwt.decode(req.headers.token);

	if (token.funcao == 2) {
		// Paciente
		consultaModel
			.find({ usuarioId: token._id })
			.exec()
			.then(consultas => res.status(200).json(consultas))
			.catch(e => res.status(404).json(e));
	} else if (token.funcao == 1) {
		// Atendente
		consultaModel
			.find()
			.exec()
			.then(consultas => res.status(200).json(consultas))
			.catch(e => res.status(404).json(e));
	}
}

function postConsulta(req, res) {
	const token = jwt.decode(req.headers.token);

	if (token.funcao == 2) {
		res.status(403).json("Não Autorizado.");
	} else if (token.funcao == 1) {
		// Atendente

		usuarioModel
			.findById(req.body.usuarioId)
			.exec()
			.then(usuario => {
				if (usuario.funcao == 1) {
					res.status(403).json("Não Autorizado.");
				} else if (usuario.funcao == 2) {
					consultaModel
						.create(req.body)
						.then(consulta => res.status(201).json(consulta))
						.catch(e => res.status(404).json(e));
				}
			})
			.catch(e => res.status(404).json(e));
	}
}

module.exports = {
	getConsulta,
	postConsulta,
};
