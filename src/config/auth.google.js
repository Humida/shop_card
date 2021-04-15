var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
        clientID: "589884587504-61nhhl2r6dojnbhi885ldtke7h1142b3.apps.googleusercontent.com",
        clientSecret: "wi2iJ6IRC_i5kKnSMuoo4Hhp",
        callbackURL: "http://localhost:3000/home"
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((user, done) => {
    done(null, user);
})