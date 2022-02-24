const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

router.get("/", (req, res, next) => {
  User.find((err, users) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(users);
  });
});
router.get("/:userID", (req, res, next) => {
  User.findOne({ _id: req.params.userID }, (err, users) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(users);
  });
});
router.post("/", (req, res, next) => {
  const newUser = new User(req.body);
  newUser.save((err, savedUser) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedUser)
  });
});