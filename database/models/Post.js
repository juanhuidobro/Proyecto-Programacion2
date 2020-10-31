module.exports = function (sequelize, dataTypes){
    // que va a mirar en la base de datos
    
        let alias = 'Post'; //este alias se busca como nombre de la tabla en plural dentro de la base de datos
    
        let cols = {
            IdPost: {
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER
            },
            Id_Usuario: {
                type: dataTypes.INTEGER,
                foreignKey: true,
            },
            Url: {
                type: dataTypes.STRING,
            },
        };
    
        let config = {
            tablaName: "Post"
        };
    
        const Post = sequelize.define(alias, cols, config);
    
        return Post
    
    };