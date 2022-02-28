const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ingredientSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  amount: { type: String, required: true },
});
module.exports = mongoose.model("ingredient", ingredientSchema);
