const router = require('express').Router();
const { Characters, Users } = require('../models');

router.get('/', (req, res) => {
res.render('login', {
    layout: 'login'
})
});



module.exports = router;