const express = require("express");
const multer = require("multer");
const path = require("path");
const { uploadResult } = require("../controllers/uploadController");

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },

  filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("result"), uploadResult);

module.exports = router;