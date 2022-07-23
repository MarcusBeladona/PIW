const comentarioModel = require("../model/comentarioModel");
const comentarioView = require("../view/comentarioView");

getComentario = (req, res) => {
	comentarioModel
		.find()
		.populate({
			path: "postId", // Para popular o post
			populate: {
				path: "usuarioId", // Para popular o usuário DENTRO do post
			},
		})
		.populate("usuarioId") // Para popular o usuário do comentário
		.exec()
		.then(a => res.status(200).json(comentarioView.renderAll(a)))
		.catch(e => res.status(500).send(e));
};

getComentarioById = (req, res) => {
	comentarioModel
		.findById(req.params.id)
		.populate({
			path: "postId", // Para popular o post
			populate: {
				path: "usuarioId", // Para popular o usuário DENTRO do post
			},
		})
		.populate("usuarioId") // Para popular o usuário do comentário
		.exec()
		.then(a => res.status(200).json(comentarioView.render(a)))
		.catch(e => res.status(404).send(e));
};

postComentario = (req, res) => {
	comentarioModel
		.create(req.body)
		.then(a => res.json("Posted"))
		.catch(e => res.status(500).send(e));
};

deleteComentario = (req, res) => {
	comentarioModel
		.findByIdAndDelete(req.params.id)
		.exec()
		.then(a => res.status(200).json("Deleted"))
		.catch(e => res.status(404).send(e));
};

module.exports = {
	getComentario,
	getComentarioById,
	postComentario,
	deleteComentario,
};
