const { Characters } = require('../models');

const characterdata = [
  {
   character_name: 'Dr Valeria Silva',
   genre: 'Noir',
   companion: 'Bob',
   background: 'From the streets of the capital',
   age: '29',
   story_role: 'main',
   goal: 'To help as many people as she can',
   secret: 'none',
   user_id: 1,
  },
  {
    character_name: '',
    genre: '',
    companion: '',
    background: '',
    age: '',
    story_role: '',
    goal: '',
    secret: '',
    user_id: 2,
  },
  {
   character_name: '',
   genre: '',
   companion: '',
   background: '',
   age: '',
   story_role: '',
   goal: '',
   secret: '',
   user_id: 3,
  },
];

const seedCharacters = () => Comments.bulkCreate(characterdata);

module.exports = seedCharacters;