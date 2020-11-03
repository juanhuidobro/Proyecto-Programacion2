module.exports = function (sequelize, dataTypes){
// que va a mirar en la base de datos

    let alias = 'Usuario'; //este alias se busca como nombre de la tabla en plural dentro de la base de datos

    let cols = {
        IdUsuario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        Nombre_Completo: {
            type: dataTypes.STRING,
        },
        Email:{
            type: dataTypes.STRING,
        },
        Contraseña: {
            type: dataTypes.STRING,
        },
        Edad: {
            type: dataTypes.DECIMAL,
        },
        Nacimiento: {
            type: dataTypes.DATE,
        }
    };

    let config = {
        timestamps: false, //Aclaración en caso de no explicitar created_at, deleted_at y updated_at
        // underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
        tablaName: "Usuarios"
    };

    const User = sequelize.define(alias, cols, config);

    return User

};