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


router.get("/register1", (req, res) => {
  res.render("register1.html");
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

router.get("/home", (req, res) => {
  res.render("index.html");
});

router.get("/about", (req, res) => {
  res.render("about.html");
});

router.get("/contact", (req, res) => {
  res.render("contact.html");
});

router.post("/login", (req, res) => {
  res.render("index.html");
});

router.get("/logout", (req, res) => {
  res.render("login.html");
});

router.get("/bookings", (req, res) => {
  res.render("bookings.html");
});


router.get("/findTrucks", (req, res) => {
  res.render("findTrucks.html");
});

router.get("/track", (req, res) => {
  res.render("track.html");
});

router.get("/payment", (req, res) => {
  res.render("payment.html");
});

router.get("/success", (req, res) => {
  res.render("success.html");
});

router.get("/truckOwnerIndex", (req, res) => {
  res.render("truckOwnerIndex.html");
});

router.get("/managetrucks", (req, res) => {
  res.render("managetrucks.html");
});

router.get("/managebookings", (req, res) => {
  res.render("managebookings.html");
});
module.exports = router;
