"use strict";

function Personne(prenom, age) {
  this.prenom = prenom;
  this.age = age;
}

let e1 = new Personne("Olivier", 35);
e1.tel = "06121212";
e1.poste = "attaquant";
let e2 = new Personne("Sylvinho", 30);
delete e2.age;

console.log(e1, e2);
