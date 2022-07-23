var mongoose = require("mongoose");

const matriculaSchema = new mongoose.Schema({
	aluno: {
		type: mongoose.Schema.ObjectId,
		ref: "Aluno",
	},
	disciplina: {
		type: mongoose.Schema.ObjectId,
		ref: "Disciplina",
	},
});

module.exports = mongoose.model("Matricula", matriculaSchema);
