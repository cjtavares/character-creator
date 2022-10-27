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
        genre:{
          type: DataTypes.STRING, 
          allowNull: false, 
        },
        characters_name: {
          type: DataTypes.STRING, 
          allowNull: false, 
        },
        companion:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        background:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        age:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        story_role:{
            type: DataTypes.STRING,
            allowNull: false
        },
        goal:{
            type: DataTypes.STRING,
            allowNull: false
        },
        secret:{
            type: DataTypes.STRING,
            allowNull: false
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