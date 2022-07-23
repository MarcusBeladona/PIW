let usuarios = [
	{ id: 1, nome: "Victor", email: "victor.aefarias@gmail.com", senha: "123" },
	{ id: 5, nome: "João", email: "joao@gmail.com", senha: "456" },
];

getUsuario = (req, res) => {
	res.json(usuarios);
};

getUsuarioById = (req, res) => {
	var reqId = parseInt(req.params.id);

	var usuario = usuarios.find(({ id }) => id === reqId);

	if (usuario) {
		res.json(usuario);
	} else {
		res.status(404).send("Not Found");
	}
};

postUsuario = (req, res) => {
	usuarios.push(req.body);
	res.status(200).send(req.body);
};

deleteUsuario = (req, res) => {
	var reqId = parseInt(req.params.id);

	var usuario = usuarios.find(({ id }) => id === reqId);

	if (usuario) {
		res.status(200).send(usuarios.splice(usuarios.indexOf(usuario), 1));
	} else {
		res.status(404).send("Not Found");
	}
};

module.exports = {
	getUsuario,
	getUsuarioById,
	postUsuario,
	deleteUsuario,
};
