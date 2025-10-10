const express = require("express");
const connectDb = require("./config/db");
const bookRoutes = require("./routes/book.routes");
const authorRoutes = require("./routes/author.routes");
const authRoutes = require("./routes/user.routes");

const app = express();

require("dotenv").config();
app.use(express.json());

app.use("/books", bookRoutes);
app.use("/authors", authorRoutes);
app.use("/auth", authRoutes);

app.use((error, req, res, next) => {
  const statusPersonnalise = error.statusCode || 500;
  const message = error.message || "Erreur interne au serveur";

  //   console.log("On est dans le controleur de la gestion des erreurs");

  res.status(statusPersonnalise).json({ message });
});

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
