const mongoose = require("mongoose");

module.exports = (function () {
	var schema = mongoose.Schema({
		id: { type: mongoose.Schema.Types.ObjectId },

		nome: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},

		funcao: {
			type: Number,
			required: true,
		},
		senha: {
			type: String,
			required: true,
		},
	});
	return mongoose.model("Usuario", schema);
})();
