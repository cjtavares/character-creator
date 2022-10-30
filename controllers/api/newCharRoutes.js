const router = require('express').Router();
const { Users, Characters } = require('../../models');
const withAuth = require('../../utils/auth');
const { route } = require('./home-routes');

// Add a character to the database
router.post('/', withAuth, async (req, res) => {
    try {
         var newCharacter = await Characters.create({
            name: req.body.name,
            companion: req.body.companion,
            genre: req.body.genre,
            background: req.body.background,
            age: req.body.age,
            story_role: req.body.story_role,
            goal: req.body.goal,
            secret: req.body.secret,
            user_id: req.body.user_id
    });
         res.status(200).json(newCharacter);
     } catch (err) {
         res.json(err);
     }
 });
   