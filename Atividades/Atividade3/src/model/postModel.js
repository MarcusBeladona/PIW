const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId,
	},
	texto: {
		type: String,
		required: true,
	},
	likes: {
		type: Number,
		required: true,
	},
	usuarioId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Usuario",
	},
});

module.exports = mongoose.model("Post", postSchema);
