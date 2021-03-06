module.exports = function (sequelize, dataTypes){
// que va a mirar en la base de datos

    let alias = 'Usuario'; //este alias se busca como nombre de la tabla en plural dentro de la base de datos

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING
        },
        email:{
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        edad: {
            type: dataTypes.INTEGER
        },
        nacimiento: {
            type: dataTypes.DATE
        }
    };

    let config = {
        timestamps: false, //Aclaración en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
        tableName: "Usuarios"
    };

    let User = sequelize.define('Usuario', cols, config);

     User.associate = function(models){
        User.hasMany(models.Posteo,{
            as: 'posteoUser',
            foreignKey: 'id_usuario'
        });

        User.hasMany(models.Comentario, {
            as: 'userComment',
            foreignKey: 'id_usuario'
        })
    }  ;

    return User

};