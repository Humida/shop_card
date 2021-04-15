const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/account', { useNewUrlParser: true, useUnifiedTopology: true });

    } catch (error) {
        throw Error(error);
    }
}

module.exports = { connect };