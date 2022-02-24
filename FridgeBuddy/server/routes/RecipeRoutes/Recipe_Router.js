const express = require("express");
const router = express.Router();
const Recipe = require("../../models/Recipe.js");

router.get("/", (req, res, next) => {
  Recipe.find((err, recipes) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(recipes);
  });
});
