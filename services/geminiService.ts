
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

export class GeminiService {
  private ai: GoogleGenAI;
  private model: string = "gemini-3-flash-preview";

  constructor() {
    if (!API_KEY) throw new Error("API Key is missing");
    this.ai = new GoogleGenAI({ apiKey: API_KEY });
  }

  async chat(message: string, context: string = "") {
    const systemInstruction = `
      You are an expert financial technology engineer specialized in the Modern Treasury API.
      Your goal is to help users understand the API specification, explain complex schemas (like account_detail, payments), 
      and generate JSON request payloads for various operations.
      
      Current Spec Context:
      The API supports Accounts, Counterparties, Payment Orders (ACH, Wire, RTP), and Balance Reports.
      Always format your output using Markdown. If providing JSON examples, use code blocks.
      
      User context: ${context}
    `;

    const response = await this.ai.models.generateContent({
      model: this.model,
      contents: message,
      config: {
        systemInstruction,
      },
    });

    return response.text;
  }

  async generatePayload(naturalLanguageRequest: string) {
    const prompt = `
      Based on the Modern Treasury API spec, generate a valid JSON request payload for this request: 
      "${naturalLanguageRequest}"
      Return ONLY the JSON object. Do not add explanation.
    `;

    const response = await this.ai.models.generateContent({
      model: this.model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    return response.text;
  }
}

export const gemini = new GeminiService();
