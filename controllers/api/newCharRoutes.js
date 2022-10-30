const router = require('express').Router();
const { Users, Characters } = require('../../models');
const withAuth = require('../../utils/auth');

// Add a character to the database
router.post('/', withAuth, async (req, res) => {
    try {
         var newCharacter = await Characters.create({
            characters_name: req.body.name,
            companion: req.body.companion,
            genre: req.body.genre,
            background: req.body.background,
            age: req.body.age,
            story_role: req.body.story_role,
            goal: req.body.goal,
            secret: req.body.secret,
            user_id: req.session.logged_in
    });
         res.status(200).json(newCharacter);
     } catch (err) {
         res.json(err);
     }
 });

 module.exports = router;