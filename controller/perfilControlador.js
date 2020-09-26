let perfilControlador = {
   
    login:  (req, res) =>{ 
        res.render('login')
    },
    miPerfil:  (req, res) =>{ 
        res.render('miPerfil')
    },
    registracion:  (req, res) =>{ 
        res.render('registracion')
    },

}

module.exports = perfilControlador