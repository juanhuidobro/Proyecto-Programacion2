module.exports = function (sequelize, dataTypes){
    // que va a mirar en la base de datos
    
        let alias = 'Posteo'; //este alias se busca como nombre de la tabla en plural dentro de la base de datos
    
        let cols = {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER
            },
            id_usuario: {
                type: dataTypes.INTEGER,
                foreignKey: true,
            },
            url: {
                type: dataTypes.STRING,
            },
            texto: {
                type: dataTypes.STRING,
            },
            creacion: {
                type: dataTypes.DATE,
            }
        };
    
        let config = {
            tablaName: "Post",
            timestamps: false, //Aclaración en caso de no explicitar created_at, deleted_at y updated_at
            underscored: true //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
        };
    
        const Post = sequelize.define(alias, cols, config);
    
        return Post
    
    };