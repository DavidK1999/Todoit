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
        res.render('todo.ejs', {
            todos: foundTodos,
            id: req.params.id
        });
        console.log(foundTodos);
    } catch(err) {
        res.send(err);
    }
});

router.put('/:id', async (req, res) => {
	try {
        console.log(req.body);
		await Todo.findByIdAndUpdate(req.body.id, req.body);
        res.redirect(`/todoit/${req.params.id}`);
	} catch (err) {
		res.send(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
        await Todo.findByIdAndRemove(req.body.id);
        res.redirect(`/todoit/${req.params.id}`);
	} catch (err) {
		res.send(err);
	}
});



module.exports = router;