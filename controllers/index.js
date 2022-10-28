const router = require('express').Router();

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboards');
const userCharacters = require('./user-characters');
const newChar = require('./newChar');
const characterData = require('./characterData');
const questionaire = require('./questionaire')


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/user-characters', userCharacters);
router.use('/newChar', newChar)
router.use('/character', characterData);
router.use('/questionaire', questionaire)


module.exports = router;