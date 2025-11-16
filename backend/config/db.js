const mongoose=require("mongoose");


const cnxDb=async()=>{

    try {
        await mongoose.connect(process.env.URI);
        console.log(`connexion to atlas OK sur le port: ${process.env.PORT}`);
    } catch (error) {
        console.error("connexion to atlas KO!",error.message);
    }
    
}


module.exports=cnxDb;