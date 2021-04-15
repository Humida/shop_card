const passport = require('passport');
const express = require('express');
const router = express.Router();
router.get('/',
    passport.authenticate('google', { scope: 'profile' }));

router.get('/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        res.render('home');
    });

module.exports = router;