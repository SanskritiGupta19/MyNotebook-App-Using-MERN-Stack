const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://Samarth:Samarth@cluster0.on09pa8.mongodb.net/"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;