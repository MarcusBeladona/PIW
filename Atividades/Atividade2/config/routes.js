const express = require("express");
const router = express.Router();

const usuarioController = require("../src/controller/usuarioController");
const postController = require("../src/controller/postController");
const comentarioController = require("../src/controller/comentarioController");

// Usuários
router.get("/usuarios", usuarioController.getUsuario);
router.get("/usuarios/:id", usuarioController.getUsuarioById);
router.post("/usuarios", usuarioController.postUsuario);
router.delete("/usuarios/:id", usuarioController.deleteUsuario);

// Posts
router.get("/posts", postController.getPost);
router.get("/posts/:id", postController.getPostById);
router.post("/posts", postController.postPost);
router.delete("/posts/:id", postController.deletePost);

// Comentarios
router.get("/comentarios", comentarioController.getComentario);
router.get("/comentarios/:id", comentarioController.getComentarioById);
router.post("/comentarios", comentarioController.postComentario);
router.delete("/comentarios/:id", comentarioController.deleteComentario);

module.exports = router;
