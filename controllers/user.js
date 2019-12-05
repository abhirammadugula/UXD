const express = require('express')
const api = express.Router()
const UserModel = require('../Models/User')
// const LOG = require('../utils/logger.js')
const find = require('lodash.find')
const remove = require('lodash.remove')
const notfoundstring = 'check'
const mongoose = require('mongoose')

//For Login
let login = (req,res,next) => {
console.log('hey login',req.body)
        
}
module.exports.login = login