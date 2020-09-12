// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
// Requiring our models and passport as we've configured it
const db = require("../models");
const Sequelize = require('sequelize')


module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the overview page
    if (req.user) {
      // res.redirect("/overview");
    }
    res.render("login");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the overview page
    if (req.user) {
      // res.redirect("/overview");
    }
    res.render("login", { loggedIn: req.user ? true : false });
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the overview page
    if (req.user) {
      // res.redirect("/overview");
    }
    res.render("signup");
  });

  


}
