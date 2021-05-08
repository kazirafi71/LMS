const multer = require("multer");
const path = require("path");
let storage = multer.diskStorage({});
const fileFilter = (req, file, cb) => {
  if (
  file.mimetype === "image/png" ||
  file.mimetype === "image/jpg" ||
  file.mimetype === "image/jpeg"
  ) {
  cb(null, true);
  } else {
  cb(new Error("File format should be PNG,JPG,JPEG"), false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });
module.exports = upload;