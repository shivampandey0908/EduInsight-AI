const { extractPdfText } = require("../services/pdfService");
const { analyzeResult } = require("../services/geminiService");

async function uploadResult(req, res) {
  console.log("Upload controller reached");
  try {
    // Extract text from PDF
    const pdfText = await extractPdfText(req.file.path);

    // Send extracted text to ChatGPT
    const aiReport = await analyzeResult(pdfText);

    // Return AI report to frontend
    res.json({

      success: true,

      analysis: aiReport

    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

module.exports = {
  uploadResult,
};