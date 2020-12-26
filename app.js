//loading modules
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const admin = require("./models/routs/admin");
const path = require("path");

//config bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//config handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//config mongoose

//public (static arquives)
app.use(express.static(path.join(__dirname, "public"))); 

//routs
app.use("/admin", admin);

const PORT = 8081;
app.listen(PORT, () => {
  console.log("Server is running!");
});
