const router = require('express').Router();
const { Characters, Users } = require('../models');
const withAuth = require('../utils/auth');
// localhost:3001/user-characters
router.get('/', withAuth, async (req, res) => {
    try{
    const allUserCharacters = await Characters.findAll({
        where:{
            user_id: req.session.user_id
        },
        include: [{
            model: Users,
            attributes: ["username"]
        }]
    });
    const characters = allUserCharacters.map((character) => 
        character.get({plain: true})
    );
    res.render('displaycharacters', {
       characters,
       logged_in: req.session.logged_in
    });
} catch (err){
    console.log(err);
    res.status(500).json(err)
}
});

module.exports = router;