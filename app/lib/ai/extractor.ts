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
      model: "gemini-2.5-flash", 
      contents: text,
      config: {
        systemInstruction: `Extract job application data. Return ONLY JSON:
        {
          "company": string,
          "role": string,
          "status": "APPLIED" | "INTERVIEW" | "REJECTED" | "OFFER" | "OTHER",
          "location": string,
          "interview": { "date": string, "time": string, "type": "remote" | "onsite" | null } | null,
          "summary":string, 
        }
        Use ISO 8601 for dates. If info is missing, use null. Also in the summary section add the small summary of the email in less than 100 words !important`,
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
// const testEmail = "Thank you so much for confirming your interview for the position of Senior Waiters with Lina Stores. Were thrilled to have the opportunity to meet you and want to ensure everything is in place for your upcoming interview.Here are the details youll need: Interview day - Lina Stores: Senior Waiters Monday 16 February 2026 15:00 - 16:00 (1 hr 0 mins) Face to Face: 13-15 Marylebone Ln, London W1U 2NE, w1u2ne";

// extractJobDetails(testEmail).then((data) => {
//   console.log("--- Extraction Success ---");
//   console.log(data); 
// });


