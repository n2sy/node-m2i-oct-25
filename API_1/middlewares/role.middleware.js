const role = (roleDemande) => {
  return (req, res, next) => {
    if (req.roleUser !== roleDemande) {
      delete req.roleUser;
      let error = new Error("Vous n'avez pas les permissions nécessaires");
      error.statusCode = 403;
      next(error);
    } else {
      delete req.roleUser;

      next();
    }
  };
};

module.exports = role;
