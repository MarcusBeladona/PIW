const postModel = require("../model/postModel");
const postView = require("../view/postView");

getPost = (req, res) => {
	postModel
		.find()
		.populate("usuarioId")
		.exec()
		.then(a => res.status(200).json(postView.renderAll(a)))
		.catch(e => res.status(500).send(e));
};

getPostById = (req, res) => {
	postModel
		.findById(req.params.id)
		.populate("usuarioId")
		.exec()
		.then(a => res.status(200).json(postView.render(a)))
		.catch(e => res.status(500).send(e));
};

postPost = (req, res) => {
	postModel
		.create(req.body)
		.then(a => res.json(postView.render(a)))
		.catch(e => res.status(500).send(e));
};

deletePost = (req, res) => {
	postModel
		.findByIdAndDelete(req.params.id)
		.exec()
		.then(a => res.status(200).json("Deleted"))
		.catch(e => res.status(404).send(e));
};

module.exports = {
	getPost,
	getPostById,
	postPost,
	deletePost,
};
