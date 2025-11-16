import React, { useState } from "react";
import axios from "axios";
import styles from'./Inscription.module.css';
import {Link, useNavigate} from "react-router-dom";


function Inscription(){

  const [nom,setNom]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const SubmitInscription= async (e)=>{
    e.preventDefault();
    try {
      if(nom==="" || email==="" || password==="")
      {
        alert("Fill all inputs please!");
        return;
      }
      const res=await axios.post("http://localhost:6002/api/auth/inscription",{nom:nom,email:email,pass:password});
      alert(res.data.msg);
     
      if(res.data.msg==="Your account has been created!"){
        navigate("/connexionn");
      }
      
    } catch (error) {
      alert(error.response?.data?.msg);
      setPassword("");
    }
  }


  return(
    <div>
    
    <form className={styles.formm} onSubmit={SubmitInscription}>
    <h2>Sign Up</h2>
    <label htmlFor="txtNom">Full Name:</label><input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} id="txtNom"></input>
    <label htmlFor="txtEmail">Email:</label><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="txtEmail"/>
    <label htmlFor="txtPass">Password:</label><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="txtPass"/>
    <button type="submit">Sign up</button>
     Have an account ?<Link to="../connexionn">connect instead!</Link>
    </form>
    </div>
  );
}

export default Inscription;