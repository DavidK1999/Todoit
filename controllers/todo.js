const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.js');


router.post('/', async (req, res) => {
    try {
        await Todo.create(req.body);
        res.redirect('/todoit');
    } catch(err) {
        res.send(err);
    }
});

router.get('/', async (req, res) => {
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