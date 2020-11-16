const bcrypt = require('bcryptjs');
const db = require('../database/models/index');

const op = db.Sequelize.Op;

let perfilControlador = {
    index:  function(req, res){ //el metodo index me trae la pagina de registracion
        if(req.session.user != undefined){
            return res.redirect('/perfil/miPerfil')
        } else{
            return res.render('registracion')
            
        }
    },
    store: function(req, res){
        let user = {
            nombre : req.body.name,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, 10),
            edad : req.body.edad,
            nacimiento : req.body.nacimiento,
        }
        db.Usuario.create(user);
        
        //return res.send(user)
        return res.redirect('/perfil/login')
    },
    index2: function(req, res){  //me trae la pagina de login
        // si estoy logeado no me deberia dejar entrar a la pagina de login
        if(req.session.user != undefined){
            return res.redirect('/perfil/miPerfil')
        } else {
        return res.render('login')
    }
    },
    login: function(req, res){ 
        // chequear contraseña y encontrar email
        db.Usuario.findOne({
            where : [{ email : req.body.email }] //tiene que coincidir con lo que viene del formulario
        })
        .then( function(user){
            if(user == null){ //si el email no figura en la base de datos te redirecciona a la pagina de registracion
                return res.send('El Email no existe')
            } else if(bcrypt.compareSync(req.body.password, user.password )== false){
                // email correcto pero contraseña no
                res.send("Contraseña Incorrecta")
                return res.redirect('/perfil/login')
            } else if(bcrypt.compareSync(req.body.password, user.password )){
                // coincide la contraseña
                req.session.user = user

                if(req.body.rememberme != undefined){
                    //guardo el id porque es mas facil de buscar, el tercer parametro es tiempo de vida
                    res.cookie('userId', user.id, {maxAge : 1000 * 60 * 60 * 24 * 90}) //3 meses guarda la cookie
                }
                //session se maneja con un modulo (express session) se configura en app js
                return res.redirect('/perfil/miPerfil')
            }
        })
        .catch( e => console.log(e))
    },
    miPerfil: function(req, res){
        db.Posteo.findAll({
                include: [
                        { association: "posteoUser" },
                        { association: "comments" }
                    ],
                })
            .then(function (usuarioPerfil) {
                res.render('miPerfil',{usuarioPerfil: usuarioPerfil});
            })
            .catch(function (error) {
                console.log(e);
            })

    },

}

module.exports = perfilControlador