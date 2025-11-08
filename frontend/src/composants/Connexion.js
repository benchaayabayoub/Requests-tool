import React, { useState } from "react";
import axios from "axios";


function Connexion(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const onHandleSubmit=async (e)=>{
        e.preventDefault();
        try {
            if(email==="" || password===""){
                alert("Fill all inputs please!");
                return;
            }
            else{
                const res=await axios.post("http://localhost:6002/api/auth/connexion",{email:email,pass:password});
                alert(res.data.msg+" "+res.data.user.email);
                
            }
        } catch (error) {
            alert(error.response?.data?.msg);
            setPassword("");
        }
    }

    return(
        <div>
        <form onSubmit={onHandleSubmit}>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit">Sign up</button>

        </form>

        </div>


    );
}


export default Connexion;