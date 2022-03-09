const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const expressJwt = require("express-jwt");
require("dotenv").config();

async function main() {
  await mongoose.connect("mongodb://localhost:27017/RecipeFinder");
  console.log("Connected to the DB");
}

main().catch((err) => console.log(err));

app.use(express.json());
app.use(morgan("dev"));
app.use("/auth", require("./routes/Auth_Router"));
app.use(
  "/api",
  expressJwt({ secret: process.env.secret, algorithms: ["HS256"] })
);
app.use("/api/user", require("./routes/User_Router"));
app.use("/api/recipe", require("./routes/RecipeRoutes/Recipe_Router"));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === "Unauthorized Error") {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log("Server is running on LocalHost:9000");
});
