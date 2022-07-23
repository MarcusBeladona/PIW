const app = require("./config/express");
const db = require("./config/mongoose");

// Express
app.listen(3000, function () {
	console.log("Online em localhost:3000");
});

// MongoDB
db.setup("mongodb://localhost:27017/atividade2");
