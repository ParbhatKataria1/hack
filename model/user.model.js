const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    full_name:String,
    email:String,
    number:String,
    city:String,
    url:String
}, {versionKey:false});
const UserModel = mongoose.model('user', userSchema);
module.exports = {UserModel};