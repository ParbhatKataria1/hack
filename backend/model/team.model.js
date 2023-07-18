const mongoose = require('mongoose');
const { UserModel } = require('./user.model');
const teamSchema = mongoose.Schema({
    full_name:String,
    email:String,
    team_name:String
}, {versionKey:false});

const TeamModel = mongoose.model('team', teamSchema);
module.exports = {TeamModel}