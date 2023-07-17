const express = require('express');
const { connection } = require('./db');
const teamdata = require('./teamdata');
const { TeamModel } = require('./model/team.model');
const { UserModel } = require('./model/user.model');
const userdata = require('./userdata');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
require('dotenv').config();



app.get('/', async(req, res)=>{
    try {
        const data = await UserModel.aggregate([{$lookup:{from:'teams', localField:"email", foreignField:"email", as:"brief"}}, {$project:{team_name:{$slice: ['$brief.team_name', 0, 1]}, full_name:1, email:1, number:1, city:1, url:1, _id:0}}], )
        // const item = await UserModel.aggregate([{$lookup:{from:'teams', localField:"email", foreignField:"email", as:"brief"}}, {$project:{team_name:"$brief.team_name", full_name:1, email:1, number:1, city:1, url:1, _id:0}}]).explain();
        // console.log(item)
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send(error.message)
    }

})

app.post('/team', async(req, res)=>{
    try {
        const mongodata = await TeamModel.insertMany(teamdata);
        res.status(200).send('team data is stored');
    } catch (error) {
        res.status(400).json(error.message)
    }
})

app.post('/user', async(req, res)=>{
    try {
        const mongodata = await UserModel.insertMany(userdata);
        res.status(200).send('user data is stored');
    } catch (error) {
        res.status(400).json(error.message)
    }
})

app.listen(process.env.PORT, async(req, res)=>{
    try {
        await connection;
        console.log(`server is running on port number ${process.env.PORT}`)
    } catch (error) {
        console.log('server is not running')
    }
})