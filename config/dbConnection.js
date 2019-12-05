const mongoose = require('mongoose')
const user = require('../models/user')
const MONGODB_URI = "mongodb+srv://admin:admin@cluster0-slwmm.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

mongoose.connection.once('open',function(){
    console.log('Mongoose Connection has been made!')
}).on('error',function(error){
    console.log('Mongoose Connection error:',error)
})