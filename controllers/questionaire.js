const router = require('express').Router();
const { Characters, Users } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const questionaire = ("./");
        res.status(200).json()
    } catch(err) {

    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newCharData = await Characters.create(req.body);
        res.status(200).json({message: "Character created!"}, newCharData)
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;