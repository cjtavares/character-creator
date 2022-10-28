const { Characters } = require('../models');

const characterdata = [
  {
   characters_name: 'Dr Valeria Silva',
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
    characters_name: 'Oran Tovana',
    genre: 'Fantasy',
    companion: 'Pietro Quint',
    background: 'Farmer',
    age: '37',
    story_role: 'Mentor',
    goal: 'Rescue the people of his home-village',
    secret: 'Wields forbidden magicks',
    user_id: 2,
  },
  {
   characters_name: 'Rodrigo De Leon',
   genre: 'Romance',
   companion: 'His horse, Zenyatta',
   background: "Nobleman's son",
   age: '25',
   story_role: 'Love Interest',
   goal: 'To discover the name of the beautiful stranger he met one night',
   secret: 'Dumber than a bag of hammers (not that secret)',

   user_id: 3,
  },
  {
    characters_name: 'Anita Carlisle',
    genre: 'Noir',
    companion: 'Her cat, Anna Meow Wong',
    background: "Grocer's kid turned Private Eye",
    age: '32',
    story_role: 'Protagonist',
    goal: 'Uncover the murder of her former partner',
    secret: 'Stole the identity of a neighbor',
    user_id: 1,
  }
];

const seedCharacters = () => Characters.bulkCreate(characterdata);

module.exports = seedCharacters;