const authController = require("../controller/authController");
const usuarioModel = require("../model/usuarioModel");
const postModel = require("../model/postModel");
const postView = require("../view/postView");

getPost = (req, res) => {
	const token = authController.decode(req.headers.token);

	postModel
		.find({ usuarioId: token.usuarioId })
		.populate("usuarioId")
		.exec()
		.then(a => res.status(200).json(postView.renderAll(a)))
		.catch(e => res.status(500).send(e));
};

getPostById = (req, res) => {
	const token = authController.decode(req.headers.token);

	postModel
		.findOne({
			_id: req.params.id,
			usuarioId: token.usuarioId,
		})
		.populate("usuarioId")
		.exec()
		.then(a => res.status(200).json(postView.render(a)))
		.catch(e => res.status(500).send(e));
};

getPostsByUserId = (req, res) => {
	postModel
		.find({ usuarioId: req.params.id })
		.exec()
		.then(u => res.status(200).json(postView.renderAll(u)))
		.catch(e => res.status(404).send(e));
};

postPost = (req, res) => {
	const token = authController.decode(req.headers.token);

	usuarioModel
		.findById(token.usuarioId)
		.exec()
		.then(usuario => {
			if (usuario._id == token.usuarioId) {
				postModel
					.create({
						texto: req.body.texto,
						likes: req.body.likes,
						usuarioId: usuario._id,
					})
					.then(a => res.status(201).json(postView.render(a)))
					.catch(e => res.status(500).send(e));
			} else return res.status(404).send("Not Found " + e);
		})
		.catch(e => res.status(404).send(e));
};

deletePost = (req, res) => {
	const token = authController.decode(req.headers.token);

	postModel
		.findById(req.params.id)
		.exec()
		.then(post => {
			if (token.usuarioId == post.usuarioId) {
				postModel
					.findByIdAndDelete(req.params.id)
					.exec()
					.then(a => res.status(200).json("Deleted"))
					.catch(e => res.status(400).send(e));
			} else res.status(400).send("Usuário Inválido.");
		})
		.catch(e => res.status(404).send(e));
};

module.exports = {
	getPost,
	getPostById,
	postPost,
	deletePost,
	getPostsByUserId,
};
