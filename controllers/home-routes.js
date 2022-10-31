const router = require('express').Router();
const { Characters, Users } = require('../models');

router.get('/', (req, res) => {
res.render('login', {
    layout: 'login', // using the login.handlebars in LAYOUT folder
    logged_in: req.session.logged_in
})
});

module.exports = router;