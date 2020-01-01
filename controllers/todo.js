const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.js');


router.post('/:id', async (req, res) => {
    try {
        await Todo.create(req.body);
        res.redirect(`/todoit/${req.params.id}`);
    } catch(err) {
        res.send(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const foundTodos = await Todo.find();
        console.log(foundTodos);

        res.render('todo.ejs', {
            todos: foundTodos
        });
    } catch(err) {
        res.send(err);
    }
});




module.exports = router;