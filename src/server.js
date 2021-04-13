const express = require('express');
const passport = require('passport');
const hbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./config/db');
const accounts = require('./app/models/user.models');
const auth = require('./router/auth.router');
const googleAuth = require('./router/auth.goolge');
const facebookAuth = require('./router/auth.facebook');
require('./config/auth.google');
require('./config/auth.facebook');

app.use(passport.initialize());
// app.use(passport.session());
db.connect();
//view engine
app.engine('hbs', hbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/login', auth);
app.use('/auth/google', googleAuth);
app.use('/auth/facebook', facebookAuth);
const port = 3000;

app.get('/', (req, res, next) => {
    accounts.find({})
        .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            throw Error(error);
        })
    res.render('login');
})
app.listen(port, () => {
    console.log(`app is running at port ${port}`);
});