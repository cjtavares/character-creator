const router = require('express').Router();
const { Characters, Users } = require('../models');


router.get('/', (req, res) => {
    res.render('signup', {
        layout: 'login',
        logged_in: req.session.logged_in
    })
    });
    
module.exports = router;