import { summarizeText } from "../services/geminiService";
import { Request, Response } from "express";

export const testGemini = async (req: Request,res: Response) => {
    try{
        const {prompt} = req.body;
        console.log(prompt);

        if(!prompt){
            return res.status(400).json({error: "Text is required"});
        }

        const summary = await summarizeText(prompt);
        res.status(200).json({summary});

    }catch(error){
        console.error("Error in summarize route:", error);
        res.status(500).json({ message: "Failed to summarize text" });
    }
}
