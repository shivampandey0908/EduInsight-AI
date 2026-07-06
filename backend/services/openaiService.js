const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function analyzeResult(pdfText) {
  const response = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      {
        role: "system",
        content:
          "You are an expert academic counselor. Analyze student academic results.",
      },
      {
        role: "user",
        content: `
Analyze the following academic result.

Generate:

1. Overall Performance
2. Subject-wise Analysis
3. Strengths
4. Weak Areas
5. Study Recommendations
6. Career Suggestions
7. 30-Day Study Plan

Result:

${pdfText}
        `,
      },
    ],
  });

  return response.choices[0].message.content;
}

module.exports = { analyzeResult };