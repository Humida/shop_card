const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    }
});
const accounts = mongoose.model('accounts', userSchema);

module.exports = accounts;