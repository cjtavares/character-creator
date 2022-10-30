const router = require('express').Router();
const { Characters, Users } = require('../models');
const withAuth = require('../utils/auth');
const { route } = require('./home-routes');

router.get('/', withAuth, async (req, res) => {
    try {
        res.render('newChar', {
            logged_in: req.session.logged_in
         });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;