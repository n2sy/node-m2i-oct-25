const http = require("http");

let myServer = http.createServer((request, response) => {
  if (request.url == "/") {
    response.end("Bienvenue chez M2I");
  } else if (request.url == "/produits") {
    response.end("Liste des produits");
  } else {
    response.statusCode = 404;
    response.end("Page non trouvée");
  }
});

myServer.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
