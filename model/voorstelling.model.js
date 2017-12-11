const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const VoorstellingSchema = new Schema({
    _id: String,
    name: String,
    genre: String,
    time: Number,
    imagePath: String,
    zaal: String

}, {
    timestamps: true
});



const Voorstelling = mongoose.model('voorstelling', VoorstellingSchema);

module.exports = Voorstelling;