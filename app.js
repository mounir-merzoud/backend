const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const stuffRoutes = require("./routes/stuff");
const userRoutes = require("./routes/user");
const vehicleRoutes = require("./routes/vehicle");
const path = require("path");

const app = express();

// Connexion à MongoDB
const uri =
  "mongodb+srv://mounir:Mounir-1992@cluster0.zp66i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((err) => console.log("Connexion à MongoDB échouée !", err));

// Middleware CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json()); // Parser JSON

// Routes
app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/vehicles", vehicleRoutes); // Nouvelle route pour véhicules
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
