const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function generateWithGemini(documentType) {
  const prompt = `
You are a professional government tender documentation expert.

Create a formal "${documentType}" document.

Company Name: Vikash TechSech Private Limited
Address: 1st Floor, Saluja Mansion, Ranchi
Tender ID: GEM/2026/B/7069690
Authorized Person: Ujjwal Kumar
Designation: Business Development Manager

Use professional tone.
Return only the document content.
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      }),
    }
  );

  const data = await response.json();

  if (!data.candidates) {
    throw new Error("Gemini API error");
  }

  return data.candidates[0].content.parts[0].text;
}
