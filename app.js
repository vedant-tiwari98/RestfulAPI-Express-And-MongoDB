const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
//Middlewares
app.use(cors());
app.use(bodyParser.json());
// Middlewares -> Function which executes when routes are hit.
// app.use("/posts", () => {
//   console.log("This is a Middleware running");
// });
// app.use(auth);

// Import Routes
const postsRoute = require("./Routes/posts");

app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect to DB
mongoose.connect(
  "mongodb://localhost:27017/rest",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);

// Listening to the server
app.listen(3000);
