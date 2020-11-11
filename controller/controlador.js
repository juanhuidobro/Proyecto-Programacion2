// atender los request del usuario y generar comunicacion entre vistas y modelos
let db = require('../database/models');
let op = db.Sequelize.op;
let bycrypt = require('bcryptjs');
const post = db.Posteo

let controlador = {
    
    indexHome:  function(req, res) { // Es la pagina que se va a ver cuando el usuario busque home
        if (req.session.user != undefined) {
            return res.render('home')
        }else{
            return res.render('registracion')
        }
    },

    detallePost:  (req, res) =>{
        res.render('detallePost')
    },

    indexAgregarPost: function(req, res){ 
        if (req.session.user != undefined) {
            return res.render('agregarPost')
        } else {
            return res.render('registracion')
        }
    },
// no me reconoce la tabla de post
    storePost: function(req, res){
        let posteo = {
            url: req.body.url,
            texto: req.body.texto,
            creacion: req.body.fecha,
        }
        post.create(posteo);

        //return res.send(post)
        return res.redirect('/perfil/miPerfil')
    },

    detalleUsuario:  (req, res) =>{ 
        res.render('detalleUsuario')
    },
    
    resultadoBusqueda:  (req, res) =>{ 
        res.render('resultadoBusqueda')
    },

    buscador: function (req, res, next) {
        db.User.findAll({
            where: {
                [Op.or]: [{
                    Nombre: {
                        [Op.like]: '%' + req.query.buscador + '%'
                    }
                },
                {
                    email: {
                        [Op.like]: '%' + req.query.buscador + '%'
                    }
                }
                ]
            }
        }).then((name) => {


            res.render("resultadobuscadorusuario", {
                name: name
            });



        });
    },
}

// request es el primer parametro, representa el request solicitado, siempre esta primero
// response (segundo parametro) representa el response que le dara el servidor
// res.render es la logica que va a manejar la ruta definida, es lo que va a ver el usuario en su navegador

module.exports = controlador;
// se exporta para hacerl visible el codigo que definimos en el controlador