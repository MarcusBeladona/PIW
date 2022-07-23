const usuarioModel = require("../model/usuarioModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

sign = (req, res) => {
	usuarioModel
		.findOne({
			email: req.body.email,
		})
		.then(usuario => {
			if (bcrypt.compareSync(req.body.senha, usuario.senha)) {
				let token = jwt.sign({ usuarioId: usuario._id, nome: usuario.nome, email: usuario.email }, "piw2022");
				res.status(200).json({ token: token, nome: usuario.nome });
			} else res.status(401).send("NOT OK");
		})
		.catch(e => res.status(404).send("Not Found: " + e));
};

check = (req, res, next) => {
	let token = req.headers.token;
	jwt.verify(token, "piw2022", (err, decoded) => {
		if (!err) {
			next();
		} else {
			res.status(401).json("Não autorizado.");
		}
	});
};

decode = token => {
	return jwt.decode(token);
};

module.exports = {
	sign,
	check,
	decode,
};
