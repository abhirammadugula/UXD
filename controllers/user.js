const express = require("express");
const api = express.Router();
const UserModel = require("../Models/User");
// const LOG = require('../utils/logger.js')
const find = require("lodash.find");
const remove = require("lodash.remove");
const notfoundstring = "check";
const mongoose = require("mongoose");

//For Login
let login = (req, res, next) => {
  console.log("hey login", req.body);
  console.log("username is", req.body.username);
  console.log("password is", req.body.password);
  if (req.body.username == "truck" && req.body.password == "truck") {
    res.render("truckOwnerIndex.html");
  } else if (req.body.username == "admin" && req.body.password == "admin") {
    res.render("adminIndex.html");
  } else {
    res.render("index.html");
  }
};
module.exports.login = login;
