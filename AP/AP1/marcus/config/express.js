const routes = require("../app/routes/routes");
const express = require("express");

function setup() {
	let app = express();
	app.set("port", 3000);
	app.use(express.static("./public"));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	routes(app);
	return app;
}

module.exports.setup = setup;
