import { GoogleGenAI } from "@google/genai";
import 'dotenv/config';
import { createXai } from '@ai-sdk/xai';
import { generateText } from 'ai';

// const apiKey = process.env.GEMINI_API_KEY;
// if (!apiKey) {
//   throw new Error("GEMINI_API_KEY is missing. Check your .env file.");
// }

// 2. Initialize with the key (this stops the ADC error)
// const ai = new GoogleGenAI({ apiKey });
const xai = createXai({ apiKey: process.env.XAI_API_KEY });

// export async function extractJobDetails(text: any) {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.5-flash-lite",
//       contents: text,
//       config: {
//         systemInstruction: `Extract job application data from the provided email text. Return ONLY valid JSON. Do not add markdown, commentary, or extra text. Do not guess or invent missing information.

// Schema:
// {
//   "company": string | null,
//   "role": string | null,
//   "status": "APPLIED" | "INTERVIEW" | "REJECTED" | "OFFER" ,
//   "location": string | null,
//   "interview": {
//     "date": string | null,
//     "time": string | null,
//     "type": "remote" | "onsite" | "hybrid" | null
//   } | null
// }

// Rules:
// - Use only information explicitly supported by the email text.
// - If a field is missing, unclear, or not explicitly stated, return null.
// - If the email is not clearly about a job application or hiring process, return status as "OTHER" and set all other fields to null.
// - Normalize status strictly to one of:
//   - "APPLIED" → application received, submitted, under review, thank you for applying
//   - "INTERVIEW" → screening, interview invite, scheduling, next round, assessment tied to interview stage
//   - "REJECTED" → rejection, declined, not moving forward
//   - "OFFER" → offer, offer letter, compensation/package discussion clearly indicating offer stage
//   - "OTHER" → anything else
// - Normalize interview.type strictly to one of: "remote", "onsite", "hybrid", or null.
// - For interview.date, use format YYYY-MM-DD only.
// - For interview.time, use format HH:mm (24-hour) only.
// - Only populate the interview object if the email clearly refers to an interview or interview-related step. Otherwise return null.
// - Do not infer an application date or rejection date unless the email explicitly states it.
// - If multiple roles or companies are mentioned, choose the primary one the email is about.
// - If company or role cannot be confidently determined, return null for that field.`,
//         responseMimeType: "application/json",
//       },
//     });

//     const rawData = response.text;
//     if (!rawData) {
//       throw new Error("No text returned from Gemini");
//     }
//     return JSON.parse(rawData);

//   } catch (error) {
//     console.error("AI Extraction Failed:", error);
//     return null;
//   }
// }


export async function extractJobDetails(text: any){
  try{
    const {text:rawData} = await generateText({
      model: xai.responses("grok-4-1-fast-reasoning"),
       system: `Extract job application data from the provided email text. Return ONLY valid JSON. Do not add markdown, commentary, or extra text. Do not guess or invent missing information.

Schema:
{
  "company": string | null,
  "role": string | null,
  "status": "APPLIED" | "INTERVIEW" | "REJECTED" | "OFFER" | "OTHER",
  "location": string | null,
  "interview": {
    "date": string | null,
    "time": string | null,
    "type": "remote" | "onsite" | "hybrid" | null
  } | null
}

Rules:
- Use only information explicitly supported by the email text.
- If a field is missing, unclear, or not explicitly stated, return null.
- If the email is not clearly about a job application or hiring process, return status as "OTHER" and set all other fields to null.
- Normalize status strictly to one of:
  - "APPLIED" → application received, submitted, under review, thank you for applying
  - "INTERVIEW" → screening, interview invite, scheduling, next round, assessment tied to interview stage
  - "REJECTED" → rejection, declined, not moving forward
  - "OFFER" → offer, offer letter, compensation/package discussion clearly indicating offer stage
  - "OTHER" → anything else
- Normalize interview.type strictly to one of: "remote", "onsite", "hybrid", or null.
- For interview.date, use format YYYY-MM-DD only.
- For interview.time, use format HH:mm (24-hour) only.
- Only populate the interview object if the email clearly refers to an interview or interview-related step. Otherwise return null.
- Do not infer an application date or rejection date unless the email explicitly states it.
- If multiple roles or companies are mentioned, choose the primary one the email is about.
- If company or role cannot be confidently determined, return null for that field.`,
      prompt: text,
    });
    if(!rawData){
      throw new Error("No text retured from xAI")
    }
    return JSON.parse(rawData);
  }catch(error){
    console.error("AI Extraction Failed",error);
    return null
  }
}