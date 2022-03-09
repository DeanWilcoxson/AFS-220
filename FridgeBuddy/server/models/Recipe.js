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
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  instructions: { type: Array, required: true, default: [] },
});
module.exports = mongoose.model("recipe", recipeSchema);
