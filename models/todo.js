const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    description: { type: String, required: true},
    dateCreated: Date,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;