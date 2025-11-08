const mongoose=require("mongoose");


const cnxDb=async()=>{

    try {
        await mongoose.connect(process.env.URI);
        console.log(`connection to atlas OK sur le port: ${process.env.PORT}`);
    } catch (error) {
        console.error("connection to atlas KO!");
    }
    

}


module.exports=cnxDb;