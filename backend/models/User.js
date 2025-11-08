const mongoose=require("mongoose");

const schemaUser=new mongoose.Schema({
   nom:{type:String,required:true},
   email:{type:String,required:true, unique:true},
   pass:{type:String,required:true}
},{timestamps:true});


module.exports=mongoose.model("User",schemaUser);