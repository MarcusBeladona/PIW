const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(3000, function () {
	console.log("Online em localhost:3000");
});

// Usar Postman para testar GET, POST e DELETE
