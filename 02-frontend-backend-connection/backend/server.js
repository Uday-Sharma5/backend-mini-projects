import dotenv from 'dotenv';
import express from'express';
const app= express();
app.get('/',(req,res)=>{
    res.send('server is ready');
});
dotenv.config()
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
});