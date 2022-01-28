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
    amount: Number,
    required: true,
  },
//   instructions: {},
});
module.exports = mongoose.model("recipe", recipeSchema);
