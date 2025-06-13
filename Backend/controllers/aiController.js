import { aiService } from "../services/aiService.js";


export const aiController= async (req,res)=>{
    const code= req.body.code;
    if(!code) return res.json(401).send("Code is required");
    const review= await aiService(code);
    res.status(200).send(review);
}