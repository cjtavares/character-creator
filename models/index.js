const Users = require('./user');
const Characters = require('./character');

Users.hasMany(Characters, {
    foreignKey: "user_id",
    onDelete: 'CASCADE'
});

Characters.belongsTo(Users, {
    foreignKey: "user_id" 
});

module.exports = {  Users, Characters };