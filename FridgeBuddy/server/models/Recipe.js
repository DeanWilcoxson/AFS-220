const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipeSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String },
  imageType: { type: String, default: "jpg" },
  usedIngredientCount: { type: Number, default: 0, required: true },
  missedIngredientCount: { type: Number, default: 0, required: true },
  missedIngredients: { type: Array, default: [] },
  usedIngredients: { type: Array, required: true, default: [] },
  unusedIngredients: { type: Array, default: [] },
  likes: { type: Number, default: 0 },
});
module.exports = mongoose.model("recipe", recipeSchema);
