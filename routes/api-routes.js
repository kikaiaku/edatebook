// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const Sequelize = require("sequelize")
const excel = require('exceljs')
const fs = require("fs")
const path = require("path")
const json2xls = require("json2xls")

module.exports = function (app) {


  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the overview page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    if (req.user) {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    } else {
      req.json("invalid")
    }
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log(req.body)
    console.log("Post Request")
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      middleInitial: req.body.middleInitial,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      birthday: req.body.birthday,
      phone: req.body.phone
    })
      // res.redirect("/");

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
  app.post("/api/calendar", function (req, res) {
    // create takes an argument of an object describing the Bill we want to
    // insert into our table. 
    console.log("Add event!!!!!!!")

    db.Event.create({
      start: req.body.start,
      end: req.body.end,
      title: req.body.title,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      notes: req.body.notes,
      // category: "test",
      // classification: "private",
      userId: req.body.userId
    })
      .catch(err => {
        res.status(401).json(err);
      });
  });


  // POST route for saving a new address
  app.post("/api/AddContact", function (req, res) {
    // create takes an argument of an object describing the Bill we want to
    // insert into our table. 
    console.log(req.body)
    db.Address.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      middleInitial: req.body.middleInitial,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      birthday: req.body.birthday,
      comments: req.body.comments,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      userId: req.body.userId
    })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  app.post("/api/AddGroup", function (req, res) {
    // create takes an argument of an object describing the Bill we want to
    // insert into our table. 
    console.log(req.body)
    db.Address.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      middleInitial: req.body.middleInitial,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      birthday: req.body.birthday,
      comments: req.body.comments,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
      userId: req.body.userId
    })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  app.get("/api/addressbook", function (req, res) {
    if (req.user) {
      console.log("Add address 2")
      db.Address.findAll({ where: { userId: req.user.id } ,order: [['lastName', 'ASC']]})
        .then((result) => {
          // console.log(result);
          res.json(result);
        })
        .catch(err => {
          res.status(401).json(err);
        });
    }
  });

  app.get("/api/EditContact:id", function (req, res) {
    if (req.user) {
      console.log(req.params.id)
      db.Address.findAll({ where: { id: req.params.id } })
        .then((result) => {
          // console.log(result);
          res.json(result);
        })
        .catch(err => {
          res.status(401).json(err);
        });
    }
  });

  //EVENTS GET ROUTE
  app.get("/api/Calendar", function (req, res) {
    // create takes an argument of an object describing the Bill we want to
    // insert into our table. 
    console.log("Get events!!!!!!")
    db.Event.findAll({ where: { userId: req.user.id } })

      .then((result) => {
        // console.log(result);
        res.json(result);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // DELETE ROUTES

  // Route for deleting Address
  app.delete("/api/addressbook/:id", function (req, res) {
    console.log("Address Deleted in DB")
    db.Address.destroy({
      where: {
        id: req.params.id
      }
    })
      .catch(err => {
        res.status(401).json(err);
      });
  });


  // Route for deleting Event
  app.delete("/api/event/:id", function (req, res) {
    console.log("Event Deleted in DB")

    db.Event.destroy({
      where: {
        id: req.params.id
      }
    })
      .catch(err => {
        res.status(401).json(err);
      });
  });


  app.get("/api/addressbook3", function (req, res) {
    if (req.user) {
      db.Address.findAll({ where: { userId: req.user.id }, attributes: ['firstName', 'middleInitial', 'lastName', 'address', 'city', 'state', 'zipCode'] , order: [['lastName', 'ASC']] })
        .then((result) => {
          res.json(result);
        })
        .catch(err => {
          res.status(401).json(err);
        });
    }
  });

  app.get("/api/createGroup", function (req, res) {
    if (req.user) {

      db.Address.findAll({ where: { userId: req.user.id } ,order: [['lastName', 'ASC']]})
        .then((result) => {
          // console.log(result);
          res.json(result);
        })
        .catch(err => {
          res.status(401).json(err);
        });
    }
  });

  app.put("/api/EditContact:id", function (req, res) {
    if (req.user) {
      db.Address.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleInitial: req.body.middleInitial,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        birthday: req.body.birthday,
        comments: req.body.comments,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode,
        userId: req.body.userId
      }, { where: { id: req.params.id } })
        .then((result) => {
          console.log("Contact Updated");

        })
        .catch(err => {
          res.status(401).json(err);
        });
    }
  });

  app.put("/api/EditEvent:id", function (req, res) {

    db.Event.update({
      start: req.body.start,
      end: req.body.end,
      title: req.body.title,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      notes: req.body.notes,
      userId: req.body.userId
    }, { where: { id: req.params.id } })
      .catch(err => {
        res.status(401).json(err);
      });
  });


  app.post("/api/CreateGroupName", (req, res) => {
    console.log(req.body)
    console.log("Post Request")
    db.GroupName.create({
      groupName: req.body.groupName,
      userId: req.body.userId
    })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.post("/api/CreateGroup", (req, res) => {
    console.log(req.body)
    console.log("Post Request")
    db.Group.bulkCreate(req.body)
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/api/getContacts", function (req, res) {
    if (req.user) {
      console.log("Add address 2")
      db.Address.findAll({ where: { userId: req.user.id },attributes: ['firstName','lastName', 'middleInitial','address','city','state','zipCode','phone','email','birthday','comments','userId'],order: [['lastName', 'ASC']] })
        .then((result) => {
          // console.log(result);
          res.json(result);
        })
        .catch(err => {
          res.status(401).json(err);
        });
    }
  });


  app.get("/api/getGroupNames", function (req, res) {
    if (req.user) {
     
      db.GroupName.findAll({
        limit: 1,
        order: [ [ 'updatedAt', 'DESC' ]]
      })
        .then((result) => {
          // console.log(result);
          res.json(result);
        })
        .catch(err => {
          res.status(401).json(err);
        });
    }
  });

  app.get("/api/getGroup", function (req, res) {
    if (req.user) {

      db.GroupName.findAll({ where: { userId: req.user.id },order: [['groupName', 'ASC']] })
        .then((result) => {
          // console.log(result);
          res.json(result);
        })
        .catch(err => {
          res.status(401).json(err);
        });
    }
  });

  app.delete("/api/groupName/:id", function (req, res) {
    console.log("group Deleted in DB")
    console.log(req.params.id)

    db.Group.destroy({
      where: {
        GroupNameId: req.params.id
      }
    })

    db.GroupName.destroy({
      where: {
        id: req.params.id
      }
    })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  app.get("/api/addressbookgroup/:id", function (req, res) {
    if (req.user) {
      console.log(req.params.id)
      db.Group.findAll({ where: { GroupNameId: req.params.id } })
        .then((result) => {
          // console.log(result);
          res.json(result);
        })
        .catch(err => {
          res.status(401).json(err);
        });
    }
  });
  app.get("/api/exportgroup/:id", function (req, res) {
    if (req.user) {
      console.log(req.params.id)
      db.Group.findAll({ where: { GroupNameId: req.params.id }, attributes: ['firstName', 'middleInitial', 'lastName', 'address', 'city', 'state', 'zipCode'], order: [['lastName', 'ASC']] })
        .then((result) => {
          res.json(result);
        })
        .catch(err => {
          res.status(401).json(err);
        });
    }
  });


  app.delete("/api/addressbookgroupdelete/:id", function (req, res) {
    console.log("Address Deleted in DB")
    db.Group.destroy({
      where: {
        id: req.params.id
      }
    })
      .catch(err => {
        res.status(401).json(err);
      });
  });

}