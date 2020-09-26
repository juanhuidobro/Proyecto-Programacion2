var express = require('express');
var router = express.Router();
let perfilControlador = require("../controller/perfilControlador")

router.get('/login', perfilControlador.login);
router.get('/miPerfil', perfilControlador.miPerfil);
router.get('/registracion', perfilControlador.registracion);


module.exports = router;