const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const bcrypt = require('bcrypt');

// SIGN IN ROUTE
router.post('/signin', async (req, res) => {
    try {
        const foundUser = await User.findOne({username: req.body.username});

        if(foundUser) {
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.message = '';
                req.session.username = foundUser.username;
                req.session.loggedIn = true;
                res.redirect(`/todoit/${foundUser._id}`);
            } else {
                req.session.message = 'Username or password is incorrect';
                res.redirect('/');
            }
        } else {
            req.session.message = 'Username or password is incorrect';
            res.redirect('/');
        }
    } catch(err) {
        res.send(err);
    }

});

// SIGN UP ROUTE
router.post('/signup', async (req, res) => {
    const passwordHash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    const userInformation =  {
        username: req.body.username,
        email: req.body.email,
        password: passwordHash
    }
    
    try {
        const newUser = await User.create(userInformation);
        req.session.username = newUser.username;
        req.session.loggedIn = true;
        res.redirect(`/todoit/${newUser._id}`);
    } catch(err) {
        res.send(err);
    }
});

// SIGNOUT ROUTE
router.get('/signout', (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            res.send(err);
        } else {
            res.redirect('/');
        }
    })
});

module.exports = router;