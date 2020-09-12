// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const Sequelize = require("sequelize")

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the overview page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req.body)
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  // POST ROUTES

  // POST route for saving a new event
  app.post("/api/index/postevent", function (req, res) {
    // create takes an argument of an object describing the Bill we want to
    // insert into our table. 
    console.log("Add event 2")
    db.Event.create({
      date: req.body.date,
      description: req.body.description,
      category: req.body.category,
      classification: req.body.classification,
      userId: req.user.id
    })
      .then(() => {
        // need to update!
        res.redirect("./views/index");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // POST route for saving a new address
  app.post("/api/index/postaddress", function (req, res) {
    // create takes an argument of an object describing the Bill we want to
    // insert into our table. 
    console.log("Add address 2")
    db.Event.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      middleIntial: req.body.middleIntial,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      birthday: req.body.birthday,
      comments: req.body.comments,
      userId: req.user.id
    })
      .then(() => {
        // need to update!
        res.redirect("./views/index");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // DELETE ROUTES

  // Route for deleting Event
  app.delete("/api/overview/deleteevent/:id", function (req, res) {

    // We just have to specify which todo we want to destroy with "where"
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        // need to update
        res.redirect("/api/overview");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for deleting Address
  app.delete("/api/overview/deleteaddress/:id", function (req, res) {

    // We just have to specify which todo we want to destroy with "where"
    db.Address.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(() => {
        // need to update
        res.redirect("/api/overview");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

}