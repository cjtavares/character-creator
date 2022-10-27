const { Users } = require('../models');

const usersdata = [
  {
   username: 'tibbs',
   password: 'Dickens'
  },
  {
   username: 'stark',
   password: 'Martin' 
  },
  {
    username: 'pikachu',
   password: 'Pokemon'
  },
];

const seedUsers = () => Users.bulkCreate(usersdata, {individualHooks: true});

module.exports = seedUsers;