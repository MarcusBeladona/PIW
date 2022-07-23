let http = require("http");

let modulo_express = require("./express.js");
let app = modulo_express.setup();

http.createServer(app).listen(app.get("port"), function () {
	console.log("Express Server na porta " + app.get("port"));
});
