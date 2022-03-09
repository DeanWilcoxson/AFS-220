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

router.post("/", (req, res, next) => {
  req.body.user = req.user._id;
  const newRecipe = new Recipe(req.body);
  newRecipe.save((err, newRecipe) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(newRecipe);
  });
});

router.get("/saved/", (req, res, next) => {
  console.log("a test");
  Recipe.find({ user: req.user._id }, (err, recipes) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(recipes);
  });
});
module.exports = router;
