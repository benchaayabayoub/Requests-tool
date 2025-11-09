import React, { useState,useEffect } from "react";
import Duplicate from "./Duplicate";
import Dmarc from "./Dmarc";
import ChangeDomain from "./ChangeDomain";
import styles from './Home.module.css';
import { IoDuplicate } from "react-icons/io5";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { GrDomain } from "react-icons/gr";
import { RiAppsLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Home(){

    const navigate=useNavigate();
    const [composantAffiche,setComposantAffiche]=useState("ChangeDomain");

 
    useEffect(()=>{
        const userEmail=localStorage.getItem("userEmail");
        const userNom=localStorage.getItem("userName");
        if(!userEmail){
            navigate("/connexionn");
        }
        else{
            console.log(userNom);
        }
    },[navigate]);


    

    const logOut=()=>{
        localStorage.removeItem("userEmail");
        navigate("/connexionn");
    }


    return(
        <>
       
        <header className={styles.barriere}><RiAppsLine className={styles.iconeheader}/>EMS Request Tool<button onClick={logOut}>Logout</button><span>Bienvenu {localStorage.getItem("userNom")}</span></header>
        <div style={{width:"100%" ,display:"flex"}}>
       
        <aside className={styles.menugauche}>
            <section>Requests</section>
                <nav>
                    <ul>
                        <li>
                            <button onClick={()=>setComposantAffiche("Dmarc")}><GrDomain className={styles.iconmenuside}/>Dmarc Request</button>
                        </li>

                        <li>
                            <button onClick={()=>setComposantAffiche("ChangeDomain")}><LiaExchangeAltSolid className={styles.iconmenuside} />Change Domain request</button>
                        </li>

                        <li>
                            <button onClick={()=>setComposantAffiche("Duplicate")}><IoDuplicate className={styles.iconmenuside} />Duplicate</button>
                        </li>

                    </ul>

                </nav>
            <section>Api</section>
        </aside>
       

        <main style={{alignItems:"center",flex:"1",padding:"50px"}}>
        {composantAffiche==="Dmarc" && <Dmarc/>}
        {composantAffiche==="ChangeDomain" && <ChangeDomain/>}
        {composantAffiche==="Duplicate" && <Duplicate/>}
        </main>
        </div>
        </>
    );
}

