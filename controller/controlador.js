// atender los request del usuario y generar comunicacion entre vistas y modelos
let db = require('../database/models/index');
let op = db.Sequelize.op;
let bycrypt = require('bcryptjs');
const { localsName } = require('ejs');


let controlador = {
    
    indexHome:  function(req, res) { // Es la pagina que se va a ver cuando el usuario busque home
        db.Posteo.findAll(
            {
                include: [
                    { association: "posteoUser" },
                    { association: "comments" }
                ],
            })
            .then(function(posteo){
                res.render('home');
            })
            .catch(function (error) {
                console.log(e);
            })
        if (req.session.user != undefined) {
            return res.render('home')
        }else{
            return res.render('registracion')
        }
    },

    detallePost:  (req, res) =>{
        
        var id = req.params.id

        db.Post.findByPk(id,
            {
                include: [
                    { association: "posteoUser" },
                    { association: "comments" }
                ]})
            .then(function(post){
                res.render('detallePost')
            })
            .catch(function (error) {
                console.log(error);
            })
    },

    indexAgregarPost: function(req, res){ 
        if (req.session.user != undefined) {
            return res.render('agregarPost')
        } else {
            return res.render('registracion')
        }
    },

    storePost: function(req, res){
        let posts = {
            url: req.body.url,
            texto: req.body.texto,
            creacion: req.body.fecha,
            id_usuario: req.session.user.id
        }
        db.Posteo.create(posts);

        //return res.send(posts)
        return res.redirect('/perfil/miPerfil')
    },

    detalleUsuario:  (req, res) =>{ 
        
        var idUsuarios = req.params.id
        
        db.Usuario.findByPk(idUsuarios,
            {
                include: [
                    { association: "posteoUser" },
                ]
            })  
            .then(function(usuario){
            res.render('detalleUsuario')
            })
            .catch(function (error) {
                console.log(error);
            })
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