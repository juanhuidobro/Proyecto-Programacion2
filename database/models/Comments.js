module.exports = function (sequelize, dataTypes){
    // que va a mirar en la base de datos
    
        let alias = 'Comments'; //este alias se busca como nombre de la tabla en plural dentro de la base de datos
    
        let cols = {
            IdComentario: {
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER
            },
            Id_Post: {
                type: dataTypes.INTEGER,
                foreignKey: true
            },
            Id_Usuario: {
                type: dataTypes.INTEGER,
                foreignKey: true
            },
            Texto: {
                type: dataTypes.STRING
            },
            Creacion: {
                type: dataTypes.DATE
            },
        };
    
        let config = {
            tablaName: "Comentarios"
        };
    
        const Comments = sequelize.define(alias, cols, config);
    
        return Comments
    
    };