const router = require('express').Router();
const { Characters, Users } = require('../models');
const withAuth = require('../utils/auth');
const { route } = require('./home-routes');

router.get('/', withAuth, async (req, res) => {
});

module.exports = router;