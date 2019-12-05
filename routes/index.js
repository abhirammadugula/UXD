/**
 * @index.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require("express");
const bodyParser = require("body-parser");
// const LOG = require("../utils/logger.js");
// const userController = require("../Controllers/User");
const session = require("express-session");

//LOG.debug('START routing')
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("register.html");
});

// Logout
// router.get("/logout", (req, res) => {
//   req.logout();
//   req.flash("success_msg", "You are logged out");
//   res.redirect("/");
// });

router.get("/", (req, res) => {
  res.render("login.html");
});

module.exports = router;