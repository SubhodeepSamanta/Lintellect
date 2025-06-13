import express from 'express'
import aiRouter from './routes/ai.route.js';

const app= express();
const PORT= process.env.PORT;
app.use(express.json());

app.use('/ai',aiRouter);


app.listen(PORT,()=>{
    console.log(`server is connected on PORT: ${PORT}`);
})