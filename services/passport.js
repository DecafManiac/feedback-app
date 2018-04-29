const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

//create new instance of GoogleStrategy
passport.use(new GoogleStrategy(
    {
        clientID: process.env.clientID || keys.googleClientID,
        clientSecret: process.env.clientSecret || keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('accesstoken', accessToken);
        console.log('refresn', refreshToken);
        console.log('profn', profile);
    })
);