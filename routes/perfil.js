var express = require('express');
var router = express.Router();
let perfilControlador = require("../controller/perfilControlador")

router.get('/login', perfilControlador.index2);
router.post('/login', perfilControlador.login);
/* router.get('/miPerfil', perfilControlador.show); */
router.get('/miPerfil', perfilControlador.miPerfil);
router.get('/registracion', perfilControlador.index);
router.post('/registracion', perfilControlador.store)


module.exports = router;