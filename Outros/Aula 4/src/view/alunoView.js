function render(aluno) {
	console.log(aluno);
	return {
		id: aluno._id,
		nome: aluno.nome,
		matricula: aluno.matricula,
	};
}

function renderAll(aluno) {
	return aluno.map(render);
}

module.exports = { render, renderAll };
