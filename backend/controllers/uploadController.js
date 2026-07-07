const fs = require("fs");
const { extractPdfText } = require("../services/pdfService");
const { analyzeResult } = require("../services/geminiService");

async function uploadResult(req, res) {
  try {
    console.log("========== UPLOAD REQUEST ==========");

    console.log("req.file:", req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF file received.",
      });
    }

    console.log("File Path:", req.file.path);
    console.log("File Exists:", fs.existsSync(req.file.path));

    // Extract text from PDF
    const pdfText = await extractPdfText(req.file.path);

    console.log("PDF Extracted Successfully");
    console.log("Extracted Characters:", pdfText.length);

    // Analyze with Gemini
    const aiReport = await analyzeResult(pdfText);

    console.log("Gemini Analysis Completed");

    return res.json({
      success: true,
      analysis: aiReport,
    });

  } catch (err) {
    console.error("========== ERROR ==========");
    console.error(err);
    console.error(err.stack);

    return res.status(500).json({
      success: false,
      message: err.message,
      stack: err.stack,
    });
  }
}

module.exports = {
  uploadResult,
};