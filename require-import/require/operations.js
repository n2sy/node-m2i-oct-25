//1ere manière d'exporters
function additionner(a, b) {
  return a + b;
}
function soustraire(a, b) {
  return a - b;
}
function multiplier(a, b) {
  return a * b;
}

module.exports = {
  additionner,
  soustraire,
  multiplier,
};

//2ème manière d'exporters
// exports.additionner = (a, b) => {
//   return a + b;
// }
// exports.soustraire = (a, b) => {
//   return a - b;
// }
// exports.multiplier = (a, b) => {
//   return a * b;
// }
