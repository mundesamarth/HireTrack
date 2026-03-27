import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function extractJobDetails() {
  const response = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

