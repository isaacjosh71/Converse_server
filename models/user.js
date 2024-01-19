const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
username: {type: String, required: true, unique: true},
email: {type: String, required: true, unique: true},
password: {type: String, required: true},
uid: {type: String, required: true},
location: {type: String, required: false},
phone: {type: String, required: false},
updated: {type: Boolean, default: false},
isAdmin: {type: Boolean, default: false},
isAgent: {type: Boolean, default: false},
skills: {type: Boolean, required: false, default: false},
profile: {type: String, required: true, default: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},

}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);