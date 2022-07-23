const usuarioController = require("../controllers/usuarioController");
const consultaController = require("../controllers/consultaController");
const medicoController = require("../controllers/medicoController");
const authController = require("../controllers/authController");
const express = require("express");

module.exports = app => {
	// Usuario
	app.post("/usuarios/signin", authController.signin);
	app.post("/usuarios", usuarioController.postUsuario);

	app.use("/medicos", authController.check);

	// Médico
	app.get("/medicos/:id/consultas", medicoController.getConsultasById);
	app.post("/medicos", medicoController.postMedico);

	// Consulta
	app.get("/consultas", consultaController.getConsulta);
	app.post("/consultas", consultaController.postConsulta);
};
