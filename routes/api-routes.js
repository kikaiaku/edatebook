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
  
    console.log("hello ricky bobby")
    // Sending back a password, even a hashed password, isn't a good idea
    if(req.user){
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }else{
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

  // POST route for saving a new event
  // app.post("/api/Calendar", function (req, res) {
  //   // create takes an argument of an object describing the Bill we want to
  //   // insert into our table. 
  //   console.log("Add event!!!!!!!")
  //   db.Event.create({
  //     date: req.body.eventDate,
  //     time: req.body.time,
  //     eventName: req.body.eventName,
  //     notes: req.body.notes,
  //     category: "test",
  //     classification: "private",
  //     userId: req.body.userId
  //   })
  //     .catch(err => {
  //       res.status(401).json(err);
  //     });
  // });

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
    if(req.user) {
    console.log("Add address 2")
    db.Address.findAll({where: {userId: req.user.id}})
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
    db.Event.findAll()
    // ({where: {userId: req.user.id}})
      .then((result) => {
        // console.log(result);
        res.json(result);
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
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for deleting Address
  app.delete("/api/addressbook/:id", function (req, res) {
    console.log("Address Deleted in DB")
    console.log(req.body)
    console.log(req.params)

    // We just have to specify which todo we want to destroy with "where"
    db.Address.destroy({
      where: {
        id: req.params.id
      }
    })
      .catch(err => {
        res.status(401).json(err);
      });
  });


  // app.get("/api/addressbook2", function (req, res) {
  //   if(req.user) {
     
  //     // fs.unlink("public/Test5.xlsx", function(err) {
  //     //   if (err) {
  //     //     throw err
  //     //   } else {
  //     //     console.log("Successfully deleted the file.")
  //     //   }
  //     // })
    
    
  //   db.Address.findAll({where: {userId: req.user.id}})
  //     .then(async (result) => {
  //       console.log(result);
  //       const dataMap = result.map(address => {return {id: address.id}})
  //     //   var xls = json2xls(json,{
  //     //     fields: {id:'string'}
  //     // });
        

  //   res.xls('data.xlsx', dataMap,{fields: {id:'string'}});
        
  //       // let workbook = new excel.Workbook();
  //       // let worksheet = workbook.addWorksheet('Test')
  //       // worksheet.columns = [
  //       //   { header: 'firstName', key: 'firstName', width: 10 },
  //       //   { header: 'lastName', key: 'lastName', width: 30 },
  //       // ];
  //       // worksheet.addRows(result);
  //       // await workbook.xlsx.writeFile("public/Test5.xlsx")
  //       // // .then(function () {
  //       // //   fs.createWriteStream('Test4.xlsx')
  //       // // });
  //       // console.log("File created")
  //       // let book = new excel.Workbook();
  //       // await book.xlsx.readFile("public/Test5.xlsx");
  //       //  console.log(book) 
  //       //  const filePath = path.join(__dirname, '../public', 'Test5.xlsx')
  //       //  console.log(filePath)

  //       //  res.setHeader('Content-disposition', 'attachment; Test5.xlsx');
  //       //  res.setHeader('Content-type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  //       //  await res.download(filePath,"Test.xlsx");
  //       // // res.end()
       
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   } 
  // });
  app.get("/api/addressbook3", function (req, res) {
    if(req.user) {
    console.log("Add address 2")
    db.Address.findAll({where: {userId: req.user.id}})
      .then((result) => {
        // console.log(result);
        res.json(result);
      })
      .catch(err => {
        res.status(401).json(err);
      });
    } 
  });

  app.get("/api/createGroup", function (req, res) {
    if(req.user) {
   
    db.Address.findAll({where: {userId: req.user.id}})
      .then((result) => {
        // console.log(result);
        res.json(result);
      })
      .catch(err => {
        res.status(401).json(err);
      });
    } 
  });

  // app.get("/api/CreateGroup", function (req, res) {
  //   if(req.user) {
   
  //   db.Address.findAll({where: {userId: req.user.id}})
  //     .then((result) => {
  //       // console.log(result);
  //       res.json(result);
  //     })
  //     .catch(err => {
  //       res.status(401).json(err);
  //     });
  //   } 
  // });

  // app.get("/api/Group", function (req, res) {
  //   if(req.user) {
   
  //   db.Groups.findAll({where: {userId: req.user.id}})
  //     .then((result) => {
  //       // console.log(result);
  //       res.json(result);
  //     })
  //     .catch(err => {
  //       res.status(401).json(err);
  //     });
  //   } 
  // });


}