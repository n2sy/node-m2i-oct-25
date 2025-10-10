const express = require("express");
const { uploadAvatar } = require("../controllers/avatar.controller");
const multer = require("multer");
const router = express.Router();

const MIME_TYPE = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
};

const upload = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    if (!isValid) {
      let error = new Error(
        "Probléme avec le type ou le format du fichier uploadé"
      );
      cb(error, "");
    } else {
      cb(null, "./covers");
    }
  },
  filename: (req, file, cb) => {
    const extension = MIME_TYPE[file.mimetype];
    let newFileName =
      file.originalname.toLowerCase().slice(0, 3) +
      Date.now() +
      "." +
      extension;
    cb(null, newFileName);
  },
});

router.post("", multer({ storage: upload }).single("couverture"), uploadAvatar);

module.exports = router;
