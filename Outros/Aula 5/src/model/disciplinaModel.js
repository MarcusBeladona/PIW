var mongoose = require("mongoose");

const disciplinaSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true,
	},
	codigo: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Disciplina", disciplinaSchema);
