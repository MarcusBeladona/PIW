let alunos = [
	{ id: 1, nome: "João", sobrenome: "Gomes", ira: 2000 },
	{ id: 2, nome: "Adele", sobrenome: "Luana", ira: 9000 },
	{ id: 3, nome: "Billie", sobrenome: "Eilish", ira: 7000 },
];

module.exports.listar_alunos = function (req, res) {
	let alunos_filtrados = [...alunos];
	// for (const i in alunos) {
	// 	alunos_filtrados.push(alunos[i]);
	// }

	// if (req.query.min_ira) {
	// 	alunos_filtrados = alunos_filtrados.filter(function (aluno) {
	// 		return aluno.ira >= req.query.min_ira;
	// 	});
	// }

	if (req.query.max_ira) {
		alunos_filtrados = alunos_filtrados.filter(function (aluno) {
			return aluno.ira <= req.query.max_ira;
		});
	}
	console.log(alunos_filtrados);
	res.json(alunos);
};

module.exports.obter_alunos = function (req, res) {
	let id = req.params.id;
	let aluno = null;

	for (let i = 0; i < alunos.length; i++) {
		if (alunos[i].id == id) {
			aluno = alunos[i];
		}
	}

	if (aluno != null) {
		res.json(aluno);
	} else {
		res.status(404).send("Not Found");
	}
};
