const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function analyzeResult(pdfText) {
 const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",

  contents: `
You are an AI Academic Counselor.

Analyze the student's academic result.

Return ONLY valid JSON.

Do NOT write explanations.

Do NOT use markdown.

Return exactly in this format:

{
  "studentName":"",
  "overallPercentage":0,
  "overallPerformance":"",
  "highestSubject":"",
  "highestMarks":0,
  "averageMarks":0,
  "strengths":[
    "",
    "",
    ""
  ],
  "weaknesses":[
    "",
    ""
  ],
  "careerSuggestions":[
    "",
    "",
    ""
  ],
  "studyPlan":[
    "",
    "",
    "",
    ""
  ],
  "subjects":[
    {
      "name":"",
      "marks":0
    }
  ]
}

Student Result:

${pdfText}
`
});

  const cleanText = response.text
.replace(/```json/g, "")
.replace(/```/g, "")
.trim();

return JSON.parse(cleanText);
}

module.exports = {
  analyzeResult,
};