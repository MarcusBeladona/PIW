const express = require("express");
const router = express.Router();

const alunosController = require("../src/controller/alunoController");
const postsController = require("../src/controller/postController");

// Usuários
router.get("/alunos", alunosController.getaluno);
router.get("/alunos/:id", alunosController.getalunoById);
router.post("/alunos", alunosController.postaluno);
router.delete("/alunos/:id", alunosController.deletealuno);

// Posts
router.get("/posts", postsController.getPost);
router.get("/posts/:id", postsController.getPostById);
router.post("/posts", postsController.postPost);
router.delete("/posts/:id", postsController.deletePost);

module.exports = router;
