let http = require("http");
let db = require("./config/db.js");

let modulo_express = require("./config/express.js");
let app = modulo_express.setup();

http.createServer(app).listen(app.get("port"), function () {
	console.log("Express Server escutando na porta " + app.get("port"));
});
db("mongodb://localhost/sistemamatricula");

// let modulo = require("./novo_modulo.js");
// console.log(modulo);
// console.log(modulo.b);

// let valor = modulo.b;
// console.log(modulo.f(valor))
