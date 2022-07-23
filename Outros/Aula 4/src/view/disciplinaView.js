function render(disciplina) {
	console.log(disciplina);
	return {
		nome: disciplina.nome,
		codigo: disciplina.codigo,
	};
}

function renderAll(disciplina) {
	return disciplina.map(render);
}

module.exports = { render, renderAll };
