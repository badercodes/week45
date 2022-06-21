// import the libraries

const express = require("express");
const bodyParser = require("body-parser");

// calling the express funciton will return an object
// with all of the methods for handling HTTP

const server = express();

// MongoDB Connection String
//  mongodb+srv://admin01:123kdd123@cluster0.f96q4.mongodb.net/?retryWrites=true&w=majority

// configure express so we can acces "body" during POST request
// "use" method tells express what package to use so these are extra pckgs
const bodyParserConfig = { extended: false };
server.use(bodyParser.urlencoded(bodyParserConfig));
server.use(bodyParser.json());

// create routes
server.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

// testing post request
server.post("/user", function (req, res) {
  res.send(req.body.firstname);
});

// to automatically reload the server after code changes
// istall this package: nodemon (node monitor)
// only time nodemon won't trigger reboot of server is when installing
// new package

// also install cors & body-parser & express-form-data

// listen to port on host
server.listen(3011, function () {
  console.log("Server is running at http://localhost:3011");
});
