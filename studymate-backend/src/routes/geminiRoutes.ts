import express from "express";
import { summarizeText } from "../services/geminiService";

const router = express.Router();

router.post('/summarize', async (req,res) => {
    try{
        const {text} = req.body;

        if(!text){
            return res.status(400).json({error: "Text is required"});
        }

        const summary = await summarizeText(text);
        res.json({summary});

    }catch(error){
         console.error("Error in summarize route:", error);
    res.status(500).json({ message: "Failed to summarize text" });
    }
})

export default router;