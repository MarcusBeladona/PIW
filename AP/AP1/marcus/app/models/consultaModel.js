const mongoose = require("mongoose");

module.exports = (function () {
	var schema = mongoose.Schema({
		//
		nome: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Usuario",
			required: true,
		},
		medicoId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Medico",
			required: true,
		},
	});
	return mongoose.model("Consulta", schema);
})();
