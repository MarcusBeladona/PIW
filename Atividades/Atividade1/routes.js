const express = require("express");
const router = express.Router();

const usuariosController = require("./Controller/usuariosController");
const postsController = require("./Controller/postsController");

// Usuários
router.get("/usuarios", usuariosController.getUsuario);
router.get("/usuarios/:id", usuariosController.getUsuarioById);
router.post("/usuarios", usuariosController.postUsuario);
router.delete("/usuarios/:id", usuariosController.deleteUsuario);

// Posts
router.get("/posts", postsController.getPost);
router.get("/posts/:id", postsController.getPostById);
router.post("/posts", postsController.postPost);
router.delete("/posts/:id", postsController.deletePost);

module.exports = router;
