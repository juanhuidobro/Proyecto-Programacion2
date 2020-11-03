module.exports = function (sequelize, dataTypes){
    // que va a mirar en la base de datos
    
        let alias = 'Comentarios'; //este alias se busca como nombre de la tabla en plural dentro de la base de datos
    
        let cols = {
            id: {
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER
            },
            id_post: {
                type: dataTypes.INTEGER,
                foreignKey: true
            },
            id_usuario: {
                type: dataTypes.INTEGER,
                foreignKey: true
            },
            texto: {
                type: dataTypes.STRING
            },
            creacion: {
                type: dataTypes.DATE
            },
        };
    
        let config = {
            tablaName: "Comentarios"
        };
    
        const Comments = sequelize.define(alias, cols, config);
    
        return Comments
    
    };