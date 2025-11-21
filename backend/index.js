const express=require("express");
const conx=require("./config/db.js");
require("dotenv").config();
const cors=require("cors");
const app=express();

app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());

conx();




const authentification=require("./routes/authen.js");
app.use("/api/auth",authentification);



let PORT=process.env.PORT || 3001;
app.listen(PORT,()=>{
    console.log(`application executée sur le port : ${PORT}`);
});


