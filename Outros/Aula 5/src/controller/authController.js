const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const alunoModel = require("../model/alunoModel");

sign = (req, res) => {
	alunoModel
		.findOne({
			matricula: req.body.matricula,
		})
		.then(aluno => {
			if (bcrypt.compareSync(req.body.senha, aluno.senha)) {
				let token = jwt.sign({ alunoId: aluno.id, matricula: aluno.matricula, nome: aluno.nome }, "piw2022");
				res.status(200).json({ token: token });
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
	console.log(jwt.decode(token));
	return jwt.decode(token);
};

module.exports = {
	sign,
	check,
	decode,
};
