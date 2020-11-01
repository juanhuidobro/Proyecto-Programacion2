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
        res.render('login')
    },
    login: function(req, res){
        res.render('login')
    },
    miPerfil:  (req, res) =>{ 
        res.render('miPerfil')
    }

}

module.exports = perfilControlador