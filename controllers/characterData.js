const router = require('express').Router();
const { Characters, Users } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    try{
    const oneCharacter = await Characters.findByPk( req.params.id, {
        include: [{
            model: Users,
            attributes: ["username"]
        }]
    });

    const character = oneCharacter.get({ plain: true });

    console.log(character);
   
    res.render('character', {
       character,
       logged_in: req.session.logged_in
    });
} catch (err){
    console.log(err);
    res.status(500).json(err)
}
});

module.exports = router;