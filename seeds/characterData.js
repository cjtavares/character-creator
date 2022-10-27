const { Characters } = require('../models');

const characterdata = [
  {
   character_name: 'Dr Valeria Silva',
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
   companion: '',
   background: '',
   age: '',
   story_role: '',
   goal: '',
   secret: '',
   user_id: 2,
  },
];

const seedCharacters = () => Comments.bulkCreate(characterdata);

module.exports = seedCharacters;