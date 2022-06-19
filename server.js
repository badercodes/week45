// import the libraries

const express = require("express");

// calling the express funciton will return an object
// with all of the methods for handling HTTP

const server = express();

// create routes
server.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

server.get("/about", function (req, res) {
  res.send("<h1>  1- About Page </h1>");
});

server.get("/contact", function (req, res) {
  res.send("<h1> 2- Contact Page</h1>");
});

server.get("/products", function (req, res) {
  res.send("<h1> 3- Products Page");
});

// listen to port on host
server.listen(3011, function () {
  console.log("Server is running at http://localhost:3011");
});
