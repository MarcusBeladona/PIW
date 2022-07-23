const usuarioModel = require("../models/usuarioModel");
const bcrypt = require("bcrypt");

function postUsuario(req, res) {
	const usuario = {
		nome: req.body.nome,
		email: req.body.email,
		funcao: req.body.funcao,
		senha: bcrypt.hashSync(req.body.senha, 10),
	};

	usuarioModel
		.create(usuario)
		.then(usuario =>
			res.status(201).json({
				_id: usuario._id,
				nome: usuario.nome,
				email: usuario.email,
				funcao: usuario.funcao,
			})
		)
		.catch(e => res.status(404).json(e));
}

module.exports = {
	postUsuario,
};
