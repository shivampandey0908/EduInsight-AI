const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { uploadResult } = require("../controllers/uploadController");

const router = express.Router();

const uploadDir = path.join(__dirname, "../uploads");

// Create uploads folder if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadDir);
  },

  filename(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("result"), uploadResult);

module.exports = router;