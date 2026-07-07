require("dotenv").config();
const express = require("express");
const cors = require("cors");

const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("EduInsight AI Backend is Running 🚀");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`EduInsight AI Backend running on port ${PORT}`);
});