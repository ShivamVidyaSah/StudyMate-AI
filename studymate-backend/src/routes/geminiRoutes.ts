import express from "express";
import { testGemini } from "../controller/testController";


const router = express.Router();

router.post('/testgemini', testGemini)



export default router;