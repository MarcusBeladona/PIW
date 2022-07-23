const alunoView = require("./alunoView");
const disciplinaView = require("./disciplinaView");

function render(matricula) {
	return {
		aluno: alunoView.render(matricula.aluno),
		disicplina: disciplinaView.render(matricula.disciplina),
	};
}

function renderAll(aluno) {
	return aluno.map(render);
}

module.exports = { render, renderAll };
