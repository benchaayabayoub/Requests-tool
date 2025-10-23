const express=require("express");
const cnx=require("./config/db");
require("dotenv").config();

const app=express();
app.use(express.json());

cnx();

app.post("/testbody",(req,res)=>{
    console.log(`contenu de reqBody: \n`,req.body);
    res.send(req.body);
});

app.get('/home',(req,res)=>{
    console.log('welcome to response');
    res.send("Welcome in   navigateur");
});


let PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`app on ^port: ${PORT}`);
    
});


