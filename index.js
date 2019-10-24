const express = require("express");
const app = express();
const mongoose = require("mongoose");

var mongoDB = "mongodb://127.0.0.1:27017/authapi";
//Connect to Database
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to Database!")
);

//Import routes
const authRoute = require("./routes/auth");
const privateRoutes = require("./routes/privateRoutes");

//Middlewares
app.use(express.json()); //importing body-parsar

//Route Middlewares
app.use("/user", authRoute);
app.use("/home", privateRoutes);

app.listen(3000, () => console.log("server is up and running!"));
