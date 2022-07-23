const mongoose = require("mongoose");

const comentarioSchema = new mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	texto: {
		type: String,
		required: true,
	},
	postId: {
		type: mongoose.Schema.ObjectId,
		ref: "Post",
	},
	usuarioId: {
		type: mongoose.Schema.ObjectId,
		ref: "Usuario",
	},
});

module.exports = mongoose.model("Comentario", comentarioSchema);
