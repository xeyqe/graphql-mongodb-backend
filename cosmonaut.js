const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cosmonautSchema = new Schema({
    name: String,
    surname: String,
    birth: String,
    powers: String
});

module.exports = mongoose.model('Cosmonaut', cosmonautSchema);