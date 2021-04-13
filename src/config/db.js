const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/account', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('db connected');
    } catch (error) {
        throw Error(error);
    }
}

module.exports = { connect };