const router = require('express').Router();
const { Characters, Users } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try{
        const allCharacters = await Characters.findAll({ 
            include: [{
                model: Users, //from models table taking their username to add to date were pulling
                attributes: ['username']
            }]
        });
        const everyCharacter = allCharacters.map((characters) =>
        characters.get({plain: true})
        );
        
        res.render('allcharacters', { //pushing it into allcharacters.HANDLEBARS
            everyCharacter,
            logged_in: req.session.logged_in
        });
    } catch (err){
        console.log(err);
        res.status(500).json(err)
    }
} );

module.exports = router;