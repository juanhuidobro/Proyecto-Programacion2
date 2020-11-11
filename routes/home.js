var express = require('express'); // requerir el modulo express para situarse dentro del archivo js
var router = express.Router(); // guardo la ejecucion del metodo de express en una nueva variable 
let controlador = require("../controller/controlador");


router.get('/home', controlador.indexHome);
router.get('/agregarPost', controlador.indexAgregarPost);
router.post('/agregarPost', controlador.storePost);
router.get('/detallePost/:id', controlador.detallePost);
router.get('/detalleUsuario/:id', controlador.detalleUsuario);
// creamos rutas dinamicas, en este caso varia el id
router.get('/resultadoBusqueda', controlador.resultadoBusqueda);
// en router se guarda la ejecucion del metodo router que nos proporciona express
// get es el metodo http que queremos utilizar
// el path hace referencia a la ruta en si
// el callback llama una funcion del controlador
router.get('/resultadousuario', controlador.buscador);

module.exports = router; //exportamos contenido del router para hacerlo visible