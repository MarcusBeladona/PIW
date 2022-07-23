const express = require("express");
const router = express.Router();

const alunosController = require("../src/controller/alunoController");
const disciplinaController = require("../src/controller/disciplinaController");
const matriculaController = require("../src/controller/matriculaController");
const authController = require("../src/controller/authController");

//Auth
router.post("/alunos/signin", authController.sign);
router.use("/alunos", authController.check);


// Usuários
router.get("/alunos", alunosController.getaluno);
router.get("/alunos/:id", alunosController.getalunoById);
router.post("/alunos", alunosController.postaluno);
router.delete("/alunos/:id", alunosController.deletealuno);

// Disciplinas
router.get("/disciplinas", disciplinaController.getDisciplina);
router.get("/disciplinas/:id", disciplinaController.getDisciplinaById);
router.post("/disciplinas", disciplinaController.postDisciplina);
router.delete("/disciplinas/:id", disciplinaController.deleteDisciplina);

// Matricula
router.get("/matriculas", matriculaController.getMatricula);
router.get("/matriculas/:id", matriculaController.getMatriculaById);
router.post("/matriculas", matriculaController.postMatricula);
router.delete("/matriculas/:id", matriculaController.deleteMatricula);

module.exports = router;
