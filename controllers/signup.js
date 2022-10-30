const router = require('express').Router();
const { Characters, Users } = require('../models');
const withAuth = require("../utils/auth");

router.get('/signup', withAuth, (req, res) => {
    res.render('signup')
    });

module.exports = router;