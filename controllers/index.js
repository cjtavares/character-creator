const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboards');
const userCharacters = require('./user-characters');
const characterData = require('./characterData');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/user-characters', userCharacters);
router.use('/character', characterData);

module.exports = router;