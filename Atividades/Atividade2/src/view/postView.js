const usuarioView = require("./usuarioView");

function render(post) {
	return {
		id: post._id,
		texto: post.texto,
		likes: post.likes,
		usuario: usuarioView.render(post.usuarioId),
	};
}

function renderAll(post) {
	return post.map(render);
}

module.exports = { render, renderAll };
