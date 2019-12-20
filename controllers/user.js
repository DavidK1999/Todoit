const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');



// SIGN IN ROUTE


// SIGN UP ROUTE
router.post('/signup', async (req, res) => {
    const passwordHash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    const userInformation =  {
        username: req.body.username,
        password: passwordHash,
        email: req.body.email
    }
    
    try {
        const newUser = await User.create(userInformation);
        req.session.username = newUser.username;
        req.session.loggedIn = true;
        res.redirect('/todo');
    } catch(err) {
        res.send(err);
    }
});








module.exports = router;