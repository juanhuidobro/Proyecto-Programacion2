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
module.exports = controlador;