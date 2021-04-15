const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = new Schema({
    nameItem: String,
    priceItem: String,
    path: String,
    forHim: Boolean,
    forHer: Boolean,
    createAt: Date
});
const items = mongoose.model('items', itemSchema);
module.exports = items;