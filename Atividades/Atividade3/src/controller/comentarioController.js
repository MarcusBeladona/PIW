const authController = require("../controller/authController");
const comentarioModel = require("../model/comentarioModel");
const comentarioView = require("../view/comentarioView");
const usuarioModel = require("../model/usuarioModel");
const postModel = require("../model/postModel");

getComentario = (req, res) => {
	const token = authController.decode(req.headers.token);

	comentarioModel
		.find({ usuarioId: token.usuarioId })
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
	const token = authController.decode(req.headers.token);

	comentarioModel
		.findOne({
			_id: req.params.id,
			usuarioId: token.usuarioId,
		})
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
	const token = authController.decode(req.headers.token);

	usuarioModel
		.findById(token.usuarioId)
		.exec()
		.then(usuario => {
			if (usuario._id == token.usuarioId) {
				comentarioModel
					.create({
						texto: req.body.texto,
						postId: req.body.postId,
						usuarioId: token.usuarioId,
					})
					.then(a => res.json("Posted"))
					.catch(e => res.status(500).send(e));
			} else return res.status(404).send("Not Found " + e);
		})
		.catch(e => res.status(404).send(e));
};

deleteComentario = (req, res) => {
	const token = authController.decode(req.headers.token);

	comentarioModel
		.findById(req.params.id)
		.exec()
		.then(comentario => {
			if (token.usuarioId == comentario.usuarioId) {
				comentarioModel
					.findByIdAndDelete(req.params.id)
					.exec()
					.then(a => res.status(200).json("Deleted"))
					.catch(e => res.status(400).send(e));
			} else res.status(400).send("Usuário Inválido.");
		})
		.catch(e => res.status(404).send(e));
};

getComentariosByPostId = (req, res) => {
	comentarioModel
		.find({ postId: req.params.id })
		.populate({
			path: "postId", // Para popular o post
			populate: {
				path: "usuarioId", // Para popular o usuário DENTRO do post
			},
		})
		.populate("usuarioId")
		.exec()
		.then(c => res.status(200).json(comentarioView.renderAll(c)))
		.catch(e => res.status(404).send(e));
};

module.exports = {
	getComentario,
	getComentarioById,
	postComentario,
	deleteComentario,
	getComentariosByPostId,
};
