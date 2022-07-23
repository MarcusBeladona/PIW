const usuarioModel = require("../model/usuarioModel");
const usuarioView = require("../view/usuarioView");
const authController = require("../controller/authController");
const bcrypt = require("bcrypt");

getUsuario = (req, res) => {
	usuarioModel
		.find()
		.exec()
		.then(a => res.status(200).json(usuarioView.renderAll(a)))
		.catch(e => res.status(500).send(e));
};

getUsuarioById = (req, res) => {
	usuarioModel
		.findById(req.params.id)
		.exec()
		.then(a => res.status(200).json(usuarioView.render(a)))
		.catch(e => res.status(404).send(e));
};

postUsuario = (req, res) => {
	usuarioModel
		.create({
			nome: req.body.nome,
			email: req.body.email,
			senha: bcrypt.hashSync(req.body.senha, 10),
		})
		.then(a => res.json(usuarioView.render(a)))
		.catch(e => res.status(500).send(e));
};

deleteUsuario = (req, res) => {
	const token = authController.decode(req.headers.token);

	usuarioModel
		.findById(req.params.id)
		.exec()
		.then(usuario => {
			if (token.usuarioId == usuario._id) {
				usuarioModel
					.findByIdAndDelete(req.params.id)
					.exec()
					.then(a => res.status(200).json("Deleted"))
					.catch(e => res.status(400).send(e));
			} else res.status(400).send("Usuário Inválido.");
		})
		.catch(e => res.status(404).send(e));
};

module.exports = {
	getUsuario,
	getUsuarioById,
	postUsuario,
	deleteUsuario,
};
