// DEPENDENCEIS
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT;
require('./db/db.js');

// MIDDLEWARE
app.use(session({
    secret: 'secretsarecool',
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// CONTROLLERS
const userController = require('./controllers/user.js');
app.use('/auth', userController);

const todoController = require('./controllers/todo.js');
app.use('/todoit', todoController);


// ROUTES
app.get('/', (req, res) => {
    res.render('index.ejs', {
    message: req.session.message,
    logged: req.session.logged,
    username: req.session.username
    });
});

// LISTENER
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



