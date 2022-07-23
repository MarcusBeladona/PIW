let mongoose = require("mongoose");

module.exports = (function () {
	let schema = mongoose.Schema({
		nome: {
			type: String,
			required: true,
		},
		matricula: {
			type: String,
			required: true,
		},
		ira: {
			type: Number,
			required: true,
		},
	});
	return mongoose.model("Aluno", schema);
})();
