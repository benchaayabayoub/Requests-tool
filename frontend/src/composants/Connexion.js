import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import styles from "./Inscription.module.css";

function Connexion(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    

    const submitConnexion=async (e)=>{
        e.preventDefault();
        try {
            if(email==="" || password===""){
                alert("Fill all inputs please!");
                return;
            }
           
                const res=await axios.post("http://localhost:6002/api/auth/connexion",{email:email,pass:password});
                alert(res.data.msg+" "+res.data.user.nom);
                
            if(res.data.msg==="Welcome"){
                localStorage.setItem("userEmail",res.data.user.email);
                localStorage.setItem("userName",res.data.user.nom);
                navigate("/homee");
            }

        } catch (error) {
            alert(error.response?.data?.msg);
            setPassword("");
        }
    }

    return(
        <div>
        <form className={styles.formm} onSubmit={submitConnexion}>
        <h2>Sign In</h2>
        <label htmlFor="txtEmail">Email:</label><input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="txtEmail"></input>
        <label htmlFor="txtPass">Password:</label><input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="txtPass"></input>
        <button type="submit">Sign in</button>
        Not a member? <Link to="/inscriptionn">Create an account</Link>
        </form>

        </div>


    );
}


export default Connexion;