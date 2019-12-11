const express = require('express')
const http = require('http')
const expressLayouts = require('express-ejs-layouts')
const favicon = require('serve-favicon')
const path = require('path')
const bodyParser = require('body-parser')
const engines = require('consolidate')
const session = require('express-session')
const errorHandler = require('errorhandler')
const dotenv = require('dotenv')
const logFile = '/access.log'
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const expressStatusMonitor = require('express-status-monitor')
// const LOG = require('./utils/logger.js')
const flash = require('connect-flash')
var cons = require('consolidate');


// var sess;
// var ssn;

// create express app ..................................

const app = express()
const fs = require("fs")


// Load environment variables from .env file, where API keys and passwords are configured.
// dotenv.load({ path: '.env.example' })
dotenv.config({ path: '.env' })
// LOG.info('Environment variables loaded.')


// initialize data ............................................
// require('./Config/dbConnection.js')  // load seed data

// app variables
// LOG.debug('env port value is: ',process.env.PORT)
const port = process.env.PORT || 8081

// configure app.settings.............................
app.set('port', process.env.PORT || port)

// set the root view folder
// app.set('views', path.join(__dirname, 'views'))

// specify desired view engine
// app.set('view engine', 'ejs')
// app.set('view engine', 'html');
//....app.engine('ejs', engines.ejs)

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// log calls
app.use((req, res, next) => {
//   LOG.debug('%s %s', req.method, req.url)
  next()
})

// specify various resources and apply them to our application
// app.use(bodyParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(expressValidator())
app.use(express.static('public'))
// app.use(expressLayouts)
app.use(errorHandler()) // load error handler

//Express session middleware
app.use(session({
  secret: 'something',
  resave: true,
  saveUninitialized: true
}))

//connect flash
app.use(flash())

//Global vars
app.use((req,res,next)=> {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.error = req.flash('error')
  next()
})


const routes = require('./routes/index')
app.use('/', routes)  // load routing
// app.use(app.router)
// routes.initialize(app)
// LOG.info('Loaded routing.')


// app.use((req, res) => { 
//   res.status(404).render('404.ejs') 
// }) // handle page not found errors


// start Express app
app.listen(port, function() {
  // app.listen(process.env.PORT || 8081, function() {
  console.log('App is running at http://localhost:' + port)
  console.log('\n Logs will be sent to this terminal and ' + logFile )
})
