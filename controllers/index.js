const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboards');
const userCharacters = require('./user-characters');
const characterData = require('./characterData');
const allCharacters = require('./allcharacters');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/user-characters', userCharacters);
router.use('/character', characterData);
router.use('/allcharacters', allCharacters);

module.exports = router;