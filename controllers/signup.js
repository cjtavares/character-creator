const router = require('express').Router();
const { Characters, Users } = require('../models');


router.get('/', (req, res) => {
    res.render('signup')
    });
    
module.exports = router;