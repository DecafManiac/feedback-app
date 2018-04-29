const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => done(null, user));
});

//create new instance of GoogleStrategy
passport.use(new GoogleStrategy(
    {
        clientID: process.env.clientID || keys.googleClientID,
        clientSecret: process.env.clientSecret || keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id})
                    .then((existingUser) => {
                        if(existingUser) {
                            done(null, existingUser);
                        } else {
                            new User({ googleId: profile.id })
                                .save()
                                .then(user => done(null, user));
                        }
                    });
                    
    })
);