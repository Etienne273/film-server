const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    title: String,
    imagePath: String
 
}, {
    timestamps: true
});


const User = mongoose.model('user', UserSchema);


module.exports = User;