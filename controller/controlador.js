// atender los request del usuario y generar comunicacion entre vistas y modelos
let controlador = {
    
    home:  (req, res) =>{ // Es la pagina que se va a ver cuando el usuario busque home
        res.render('home')
    },

    detallePost:  (req, res) =>{
        res.render('detallePost')
    },

    agregarPost:  (req, res) =>{ 
        res.render('agregarPost')
    },

    detalleUsuario:  (req, res) =>{ 
        res.render('detalleUsuario')
    },
    
    resultadoBusqueda:  (req, res) =>{ 
        res.render('resultadoBusqueda')
    },

}

// request es el primer parametro, representa el request solicitado, siempre esta primero
// response (segundo parametro) representa el response que le dara el servidor
// res.render es la logica que va a manejar la ruta definida, es lo que va a ver el usuario en su navegador

module.exports = controlador;
// se exporta para hacerl visible el codigo que definimos en el controlador