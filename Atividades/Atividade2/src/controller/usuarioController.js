const usuarioModel = require("../model/usuarioModel");
const usuarioView = require("../view/usuarioView");

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
		.create(req.body)
		.then(a => res.json(usuarioView.render(a)))
		.catch(e => res.status(500).send(e));
};

deleteUsuario = (req, res) => {
	usuarioModel
		.findByIdAndDelete(req.params.id)
		.exec()
		.then(a => res.status(200).json("Deleted"))
		.catch(e => res.status(404).send(e));
};

module.exports = {
	getUsuario,
	getUsuarioById,
	postUsuario,
	deleteUsuario,
};
