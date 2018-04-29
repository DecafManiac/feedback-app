const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email', 
        'https://www.googleapis.com/auth/plus.profile.emails.read']
        })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google'));
}
