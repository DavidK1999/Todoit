// DEPENDENCEIS
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const port = 3000;
require('./db/db.js');

// MIDDLEWARE
app.use(session({
    secret: 'secretsarecool',
    resave: false,
    saveUninitialized: false
}));

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// CONTROLLERS
const userController = require('./controllers/user.js');
app.use('/auth', userController);

const todoController = require('./controllers/todo.js');
app.use('/todo', todoController);


// ROUTES
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// LISTENER
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



