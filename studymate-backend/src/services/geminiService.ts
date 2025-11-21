import {GoogleGenerativeAI} from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
console.log("API key: " + process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({model: 'gemini-2.5-flash'});

export const summarizeText = async(text: string) => {
    try{
        console.log("Summarizing text:", text);
        const prompt = `${text}`;;
        const result = await model.generateContent(prompt);
        console.log("Gemini API Response:", result.response.text());
        return result.response.text();
    }catch(error){
        console.error("Gemini API Error:", error);
        throw new Error("Failed to summarize text");
    }
}

