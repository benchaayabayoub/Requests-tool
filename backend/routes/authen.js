const express=require("express");
const {inscription:register,connexion:login} = require("../controllers/userController");
const router=express.Router();


router.post('/inscription',register);
router.post('/connexion',login);

module.exports=router;