const mongoose = require("mongoose");

module.exports = (function () {
	var schema = mongoose.Schema({
		id: { type: mongoose.Schema.Types.ObjectId },

		nome: {
			type: String,
			required: true,
		},
		crm: {
			type: String,
			required: true,
		},
	});
	return mongoose.model("Medico", schema);
})();
