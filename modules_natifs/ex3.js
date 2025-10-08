let adresse = "https://m2i-shop.fr/products?category=books1231&id=42";
const { URL } = require("url");
const myUrl = new URL(adresse);

console.log("Nom de domaine : ", myUrl.hostname);
console.log("Route demandée: ", myUrl.pathname);
console.log("Catégorie: ", myUrl.searchParams.get("category"));
console.log("ID: ", myUrl.searchParams.get("id"));
