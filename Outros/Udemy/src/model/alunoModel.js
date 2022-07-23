const mongoose = require("mongoose");

const alunoSchema = new mongoose.Schema({
	nome: {
		type: String,
		required: true,
	},
	matricula: {
		type: String,
		required: true,
	},
});

const alunoModel = mongoose.model("aluno", alunoSchema);

module.exports = alunoModel;
