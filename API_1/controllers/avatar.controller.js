exports.uploadAvatar = (req, res) => {
  res.json({
    message: "Avatar uploadé avec succès",
    filename: req.file.filename,
  });
};
