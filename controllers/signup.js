const router = require('express').Router();
const { Characters, Users } = require('../models');


router.get('/', (req, res) => {
    res.render('signup')
    });

    async function addNewUser(event) {
        event.preventDefault();
        const newUser = document.querySelector('.newUser').value;
        const password = document.querySelector('.password').value;
        const rPassword = document.querySelectorAll('.rPassword').value;

        // if(rPassword !== Password) {

            console.log("newUser")

            const response = await fetch('/api/createChar', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
        //         body: JSON.stringify({
        //             password: password
        //             new_user: newUser
        //              r_password: rPassword
        //             secret: secret,
                }) 
            // });
        // }
        }

        router.post('/', function (req, res) {
            res.sendFile(path.join(__dirname, ""))
        })



    //     console.log(addNewUser);

    // }, 
    // body: JSON.stringify({
    //     new_user: newUser,
    //     password: password,

    
module.exports = router;