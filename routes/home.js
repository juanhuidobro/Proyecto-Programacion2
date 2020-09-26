var express = require('express');
var router = express.Router();
let controlador = require("../controller/controlador");


router.get('/home', controlador.home);
router.get('/agregarPost', controlador.agregarPost);
router.get('/detallePost', controlador.detallePost);
router.get('/detalleUsuario', controlador.detalleUsuario);
router.get('/resultadoBusqueda', controlador.resultadoBusqueda);




module.exports = router;