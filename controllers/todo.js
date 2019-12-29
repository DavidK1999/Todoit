const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.js');
const User = require('../models/user.js');


router.post('/', async (req, res) => {
    try {
        const found = await User.find({});
        console.log(found);
        await Todo.create(req.body);
        res.redirect('/todoit');
    } catch(err) {
        res.send(err);
    }
});

router.get('/:username', async (req, res) => {
    try {
        const foundTodos = await Todo.find();

        res.render('todo.ejs', {
            todos: foundTodos
        });
    } catch(err) {
        res.send(err);
    }
});




module.exports = router;