import {GoogleGenerativeAI} from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({model: 'gemini-2.5-flash'});

export const summarizeText = async(text: string) => {
    try{
        console.log("Summarizing text:", text);
        const prompt = `Summarize the following text in a concise manner:\n\n${text}`;;
        const result = await model.generateContent(prompt);
        console.log("Gemini API Response:", result.response.text());
        return result.response.text();
    }catch(error){
        console.error("Gemini API Error:", error);
        throw new Error("Failed to summarize text");
    }
}

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

// await main();