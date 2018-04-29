const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

//create new instance of GoogleStrategy
passport.use(new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('accesstoken', accessToken);
        console.log('refresn', refreshToken);
        console.log('profn', profile);
    })
);

app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email', 
    'https://www.googleapis.com/auth/plus.profile.emails.read']
    })
);

app.get('/auth/google/callback', passport.authenticate('google'))

app.get('/', (req, res) => {
    res.send({ hi: 'therasde'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
