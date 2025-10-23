const mongoose=require('mongoose');


const cnxDB=async()=>{
    try {
        await mongoose.connect(process.env.URI);
        console.log(`cnx ok à la bdd sur le port : ${process.env.PORT}`);
    } catch (error) {
        console.error('prob de cnx à la bdd'+" "+error);
    }
}

module.exports=cnxDB;