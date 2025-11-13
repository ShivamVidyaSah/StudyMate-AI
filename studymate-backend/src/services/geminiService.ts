import {GoogleGenerativeAI} from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({model: 'gemini-2.0-flash'});

export const summarizeText = async(text: string) => {
    try{
        const prompt = `Summarize the following text in a concise manner:\n\n${text}`;;
        const result = await model.generateContent(prompt);
        return result.response.text;
    }catch(error){
        console.error("Gemini API Error:", error);
        throw new Error("Failed to summarize text");
    }
}