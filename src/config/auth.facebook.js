var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
        clientID: "253784803074124",
        clientSecret: "a620ff8ac788cf7f1b28dea6a0cd7292",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        done(profile, null);
    }
));