const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboards');
const userCharacters = require('./user-characters');
const newChar = require('./newChar');
const characterData = require('./characterData');

const allCharacters = require('./allcharacters');
const signupRoutes = require('./signup');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/user-characters', userCharacters);
router.use('/newChar', newChar);
router.use('/character', characterData);

router.use('/allcharacters', allCharacters);
router.use('/signup', signupRoutes);

module.exports = router;