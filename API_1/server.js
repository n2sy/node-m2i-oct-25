const express = require("express");
const connectDb = require("./config/db");

const app = express();

require("dotenv").config();
app.use(express.json());

const startServer = async () => {
  try {
    await connectDb();
    let port = process.env.port || 3002;
    app.listen(port, () => {
      console.log("Serveur démarré sur le port 3000...");
    });
  } catch (err) {
    console.log("Problème pour démarrer notre serveur");
  }
};

startServer();
