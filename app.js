var express =require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-passport');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect("mongodb://localhost/auth_demo_app");l


var app=express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
    res.render("home");
});


app.get('/secret', function(req, res){
    res.render('secret');
})

app.listen(8889, () => {
    console.log("The  server has started!");
  });