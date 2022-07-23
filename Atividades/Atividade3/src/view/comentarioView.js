const postView = require("./postView");
const usuarioView = require("./usuarioView");

function render(comentario) {
	return {
		id: comentario._id,
		texto: comentario.texto,
		postId: postView.render(comentario.postId),
		usuarioId: usuarioView.render(comentario.usuarioId),
	};
}

function renderAll(comentario) {
	return comentario.map(render);
}

module.exports = { render, renderAll };
