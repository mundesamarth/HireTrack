import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is missing. Check your .env file.");
}

// 2. Initialize with the key (this stops the ADC error)
const ai = new GoogleGenAI({ apiKey });

export async function extractJobDetails(text: any) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: text,
      config: {
        systemInstruction: `Extract job application data. Return ONLY JSON:
        {
          "company": string,
          "role": string,
          "status": "APPLIED" | "INTERVIEW" | "REJECTED" | "OFFER" | "OTHER",
          "location": string,
          "interview": { "date": string, "time": string, "type": "remote" | "onsite" | null } | null,
        }
        Use ISO 8601 for dates. If info is missing, use null. `,
        responseMimeType: "application/json",
      },
    });

    const rawData = response.text;
    if (!rawData) {
      throw new Error("No text returned from Gemini");
    }
    return JSON.parse(rawData);

  } catch (error) {
    console.error("AI Extraction Failed:", error);
    return null;
  }
}


