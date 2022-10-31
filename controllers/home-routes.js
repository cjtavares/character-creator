const router = require('express').Router();
const { Characters, Users } = require('../models');

router.get('/', (req, res) => {
res.render('login', {
    layout: 'login',
    logged_in: req.session.logged_in
})

});

// router.post('/logout', (req, res) => {
//     if (req.session.logged_in) {
//       req.session.destroy(() => {
//         res.status(204).end();
//       });
//     } else {
//       res.status(404).end();
//     }
//   });



module.exports = router;