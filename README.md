Proyecto-Programacion2
express --view=ejs (nombre proyecto)
sudo npm install -g (global)
npm install (dependencias)
sudo npm install sequelize-cli -g (para instalarlo global)
npm install sequelize
npm install mysql2
touch .sequelizerc
sequelize init
npm install express-session --save
npm install bcryptjs --save

conectar tablas
base de datos y modelos
en vez de que te tire el id queres que te de el nombre de lo que le pedis (datos cruzados)
desde modelos usar la variable  .associate = function(models){
    variable .belongsTo(con que modelo (models.), a donde lo va a encontrar {
        as: 'lo que queres conseguir',
        foreignKey: 'en que campo esta',
    })
}
se hace de ambos lados, se copia en el otro modelo y se reemplazan las cosas

    variable .hasMany si la relacion es diferente (por ejemplo usuario y post)
    los usuarios tienen muchos post como los generos tienen muchas peliculas

en el lado de post se usa hasMany y el usuario belongsTo
desp desde el controlador hay que pedir que tire los datos del usuario y post 
tengo que modificar el metodo show de mostrar post(que todavia no lo hice) en el controlador

let ... = req.params.id
findByPk(..., {
    include: [{association : (alias del modelo)}]
})

