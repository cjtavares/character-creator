const router = require('express').Router();
const { Users, Characters } = require('../../models');
const withAuth = require('../../utils/auth');

// /api/users/login
router.post('/login', async (req, res) => {
    try {
      const userData = await Users.findOne({ where: { username: req.body.username}});
      if (!userData){
          res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again'});
          return;
      }  
  
      const validatePassword = userData.checkPassword(req.body.password);
  
      if (!validatePassword) {
          res
            .status(400)
            .json({ message: 'Incorrect email or password, please try again' });
          return;
        }
  
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          
          res.json({ user: userData, message: 'You are now logged in!' });
        });
    
    }catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
    });

    module.exports = router;