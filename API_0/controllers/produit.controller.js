exports.getM2i = (req, res) => {
  res.send("<h1>Premier test de notre API</h1>");
};
exports.getIntro = (req, res) => {
  console.log(req);

  res.sendFile(`index.html`); // SendFile exige un chemin absolu
};
exports.addExample = (req, res) => {
  console.log(req);
  console.log(req.body);
  res.json({ message: "body parfaitement récupéré" });
};
