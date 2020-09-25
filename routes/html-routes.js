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
    res.render("login", { loggedIn: req.user ? true : false });
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

  app.get("/calendar", (req, res) => {

    // If the user already has an account send them to the overview page

    if (!req.user) {
      res.render("login", { loggedIn: req.user ? true : false });
    }

    db.Event.findAll({ where: { userID: req.user.id }, }).then(function (dbEvent) {
      // We have access to the Bills as an argument inside of the callback function
      let hbsEvent = { events: dbEvent.map(event => { return { id: event.id, date: event.date, description: event.description, category: event.category, classification: event.classification } }) }
      res.render("events", hbsEvent);


    });
  });

  app.get("/addressbook", (req, res) => {

    // If the user already has an account send them to the overview page

    if (!req.user) {
      res.render("login", { loggedIn: req.user ? true : false });
    }

    db.Address.findAll({ where: { userID: req.user.id }, }).then(function (dbAddress) {
      // We have access to the Bills as an argument inside of the callback function
      let hbsAddress = { address: dbAddress.map(address => { return { id: address.id, firstName: address.firstName, lastName: address.lastName, middleIntial: address.middleIntial, address: address.address, phone: address.phone, email: address.email, birthday: address.birthday, comments: address.comments  } }) }
      res.render("address", hbsaddress);


    });
  });

}
