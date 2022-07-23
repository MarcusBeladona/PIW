function render(usuario) {
	return {
		id: usuario._id,
		nome: usuario.nome,
		email: usuario.email,
	};
}

function renderAll(usuario) {
	return usuario.map(render);
}

module.exports = { render, renderAll };
