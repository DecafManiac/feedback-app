//moongose model class
const moongose = require('mongoose');
const { Schema } = moongose;

const userSchema = new Schema({
    googleId: String
});

moongose.model('users', userSchema);