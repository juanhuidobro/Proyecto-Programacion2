
let usersControlador = {
    logout: function(req, res){
        req.session.destroy();
        
        return res.redirect('/perfil/login')
    },

}


module.exports = usersControlador