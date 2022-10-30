const router = require('express').Router();
const userRoutes = require('./userRoutes');
const createCharRoutes = require('./createChar');

router.use('/users', userRoutes);
router.use('/createChar', createCharRoutes);

module.exports = router;