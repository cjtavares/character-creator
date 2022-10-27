const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Characters extends Model{}

Characters.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true, 
        },
        characters_name: {
          type: DataTypes.STRING,  
        },
        motivation:{
            type: DataTypes.TEXT,
        },
        companion:{
            type: DataTypes.STRING,
        },
        background:{
            type: DataTypes.STRING,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
              },
        }
      
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'characters', 
      }
      );

      module.exports = Characters;  