var express = require('express');
var deptModel = require("./Models/deptModel");
var deptsController = require("./Controllers/deptsController");
var cors = require("cors");  

/*
const appSettings = require('./config');
console.log(appSettings.mongoDb);
*/


var app=express();

app.use( cors() );

// Add route prefix
app.use("/api/depts", deptsController);

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
   
app.get('/',function(req,res)
{ 
    res.send("Welcome to REST API using Express JS");
});

var server=app.listen(3002,function() {});
 
console.log("Server Started. URL:http://localhost:3002");
