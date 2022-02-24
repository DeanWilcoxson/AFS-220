const express = require("express");
const authRouter = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
//Signup
authRouter.post("/signup", (req, res, next) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (user) {
      res.status(403);
      return next(new Error("Username is Taken."));
    }
    const newUser = new User(req.body);
    newUser.save((err, savedUser) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
      return res.status(201).send({ token, user: savedUser.withoutPassword() });
    });
  });
});

//Login
authRouter.post("/login", (req, res, next) => {
  const failedLogin = "Username or password is Incorrect";
  User.findOne({ username: req.body.username }, (err, user) => {
    console.log(user);
    if (err) {
      res.status(500);
      return next(err);
    }
    if (!user) {
      console.log(req.body.password, user);
      res.status(403);
      return next(new Error(failedLogin));
    }
    user.checkPassword(req.body.password, (err, isMatch) => {
      if (err) {
        res.status(403);
        return next(new Error(failedLogin));
      }
      if (!isMatch) {
        res.status(403);
        return next(new Error(failedLogin));
      }
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      return res.status(200).send({ token, user: user.withoutPassword() });
    });
  });
});

module.exports = authRouter;