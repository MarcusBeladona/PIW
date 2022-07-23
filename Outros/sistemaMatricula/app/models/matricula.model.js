let mongoose = require("mongoose");

module.exports = (function () {
	let schema = mongoose.Schema({
		aluno: {
			type: mongoose.Schema.ObjectId,
			ref: "Aluno",
		},
		disciplina: {
			type: mongoose.Schema.ObjectId,
			ref: "Disciplina",
		},
		codigo: {
			type: String,
			required: true,
		},
	});
	return mongoose.model("Matricula", schema);
})();
