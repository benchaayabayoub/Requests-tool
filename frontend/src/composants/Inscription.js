import React, { useState } from "react";
import axios from "axios";
import styles from'./Inscription.module.css';

function Insciption(){

  const [nom,setNom]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");


  const onHandleSubmit= async (e)=>{
    e.preventDefault();
    try {
      if(nom==="" || email==="" || password==="")
      {
        alert("Fill all inputs please!");
        return;
      }
      else{
      const res=await axios.post("http://localhost:6002/api/auth/inscription",{nom:nom,email:email,pass:password});
      alert(res.data.msg);
     
      }
      
    } catch (error) {
      alert(error.response?.data?.msg);
      setPassword("");
    }
  }


  return(
    <div>
    
    <form className={styles.Insciption} onSubmit={onHandleSubmit}>
    <h2>Sign in Form</h2>
    <label htmlFor="txtNom">Full Name:</label><input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} id="txtNom"></input>
    <label htmlFor="txtNom">Email:</label><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="txtEmail"/>
    <label htmlFor="txtNom">Password:</label><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="txtPass"/>
    <button type="submit">Sign in</button>
    <a href="">have an account ? connect instead!</a>
    </form>
    </div>
  );
}

export default Insciption;