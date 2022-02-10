const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    amount: String,
    required: true,
  },
  instructions: {
    type: String,

  },
});
module.exports = mongoose.model("recipe", recipeSchema);