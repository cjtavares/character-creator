const sequelize = require('../config/connection');
const seedCharacter = require('./characterData');
const seedUsers = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

//   await seedCharacter();
 
  process.exit(0);
};

seedAll();