const app = require("./config/express");
const db = require("./config/mongoose");

// Express
app.listen(3001, function () {
	console.log("Online em localhost:3001");
});

// MongoDB
db.setup("mongodb://localhost:27017/sisteminha");
