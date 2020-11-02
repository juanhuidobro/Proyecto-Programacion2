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
            if(bcrypt.compareSync(req.body.password, user.password)){
                req.session.user = user // colocar al usuario de la base de datos en sesion
            }
        })
        .catch( e => console.log(e))
    },
    miPerfil:  (req, res) =>{ 
        res.render('miPerfil')
    }

}

module.exports = perfilControlador