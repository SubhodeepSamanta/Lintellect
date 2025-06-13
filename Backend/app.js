import express from 'express'
import aiRouter from './routes/ai.route.js';
import cors from 'cors'

const app= express();
const PORT= process.env.PORT;
app.use(express.json());
app.use(cors());

app.use('/ai',aiRouter);


app.listen(PORT,()=>{
    console.log(`server is connected on PORT: ${PORT}`);
})