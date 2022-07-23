const express = require("express");
const router = express.Router();

const usuarioController = require("../src/controller/usuarioController");
const postController = require("../src/controller/postController");
const comentarioController = require("../src/controller/comentarioController");
const authController = require("../src/controller/authController");

// Auth
router.post("/usuarios", usuarioController.postUsuario);
router.post("/usuarios/signin", authController.sign);
router.use("/usuarios", authController.check);
router.use("/posts", authController.check);
router.use("/comentarios", authController.check);

// Usuários
router.get("/usuarios", usuarioController.getUsuario);
router.get("/usuarios/:id", usuarioController.getUsuarioById);
router.get("/usuarios/:id/posts", postController.getPostsByUserId);
router.delete("/usuarios/:id", usuarioController.deleteUsuario);

// Posts
router.post("/posts", postController.postPost);
router.get("/posts", postController.getPost);
router.get("/posts/:id", postController.getPostById);
router.get("/posts/:id/comentarios", comentarioController.getComentariosByPostId);
router.delete("/posts/:id", postController.deletePost);

// Comentarios
router.get("/comentarios", comentarioController.getComentario);
router.get("/comentarios/:id", comentarioController.getComentarioById);
router.post("/comentarios", comentarioController.postComentario);
router.delete("/comentarios/:id", comentarioController.deleteComentario);

module.exports = router;
