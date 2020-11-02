const bcrypt = require('bcryptjs');
const db = require('../database/models');
const users = db.User;

const op = db.Sequelize.Op;

let perfilControlador = {
    index:  function(req, res){ 
        return res.render('registracion')
    },
    store: function(req, res){
        let user = {
            nombre : req.body.name,
            email : req.body.email,
            password : bcrypt.hashSync(req.body.password, 10),
            age : req.body.age,
            nacimiento : req.body.nacimiento,
        }
        users.create(user);

        return res.redirect('/perfil/login')
    },
    index2: function(req, res){ 
        return res.render('login')
    },
    login: function(req, res){
        // chequear contraseña y encontrar email
        users.findOne({
            where : [{ email : req.body.email }] //tiene que coincidir con lo que viene del formulario
        })
        .then( function(user){
            if(user == null){ //si el email no figura en la base de datos te redirecciona a la pagina de registracion
                return res.redirect('/perfil/registracion')
            } else if(bcrypt.compareSync(req.body.password, user.password )== false){
                // email correcto pero contraseña no
                return res.send("Contraseña Incorrecta")
            } else if(bcrypt.compareSync(req.body.password, user.password )){
                // coincide la contraseña
                req.session.user = user
                //session se maneja con un modulo (express session) se configura en app js
                return res.redirect('/perfil/miPerfil')
            }
        })
        .catch( e => console.log(e))
    },
    miPerfil:  (req, res) =>{ 
        res.render('miPerfil')
    }

}

module.exports = perfilControlador