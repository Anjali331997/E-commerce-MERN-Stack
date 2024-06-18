const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    cart: { type: Object },
    date: { type: Date, default: Date.now }
})

const User = mongoose.model('user', userSchema)

module.exports = User;