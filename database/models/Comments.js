module.exports = function (sequelize, dataTypes){
    // que va a mirar en la base de datos
    
    
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        id_post: {
            type: dataTypes.INTEGER,
        },
        id_usuario: {
            type: dataTypes.INTEGER,
        },
        texto: {
            type: dataTypes.STRING
        },
        creacion: {
            type: dataTypes.DATE
        },
    };
    
    let config = {
        timestamps: false, //Aclaración en caso de no explicitar created_at, deleted_at y updated_at
        underscored: true, //Aclareción en caso que los timestamps usen guiones bajos en lugar de camelCase.
        tableName: "Comentarios"
    };
    
    let alias = 'Comentario'; //este alias se busca como nombre de la tabla en plural dentro de la base de datos
    const Comentario = sequelize.define(alias, cols, config);
    
           Comentario.associate = function(models){
            Comentario.belongsTo(models.Posteo,{
                as: 'comments',
                foreignKey: 'id_post'
            });

            Comentario.belongsTo(models.Usuario,{
                as: 'userComment',
                foreignKey: 'id_usuario'
            })
        }    

        return Comentario
    
    };