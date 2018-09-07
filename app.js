var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/user");

mongoose.connect("mongodb://localhost/auth_demo_app");



var app = express();

app.set("view engine", "ejs");
app.use(
    require("express-session")({
      secret: "Rusty is the best and cutest dog in the world",
      resave: false,
      saveUninitialized: false
    })
  );
app.use(passport.initialize());
app.use(passport.session());

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/secret", function(req, res) {
  res.render("secret");
});

app.listen(8889, () => {
  console.log("The  server has started!");
});
