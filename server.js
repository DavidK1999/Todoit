// DEPENDENCEIS
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const port = 3000;
require('./db/db.js');

// MIDDLEWARE
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// CONTROLLERS
const todoController = require('./controllers/todo.js');
app.use('/todo', todoController);

const userController = require('./controllers/user.js');
app.use('/user', userController);

// ROUTES
app.get('/', (req, res) => {
    res.send('You made it');
});

// LISTENER
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



