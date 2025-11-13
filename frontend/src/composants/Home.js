import React, { useState,useEffect } from "react";
import Duplicate from "./Duplicate";
import Dmarc from "./Dmarc";
import ChangeDomain from "./ChangeDomain";
import styles from './Home.module.css';
import { IoDuplicate } from "react-icons/io5";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { GrDomain } from "react-icons/gr";
import { SiJoomla } from "react-icons/si";
import { RiShutDownLine } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home(){

    const navigate=useNavigate();
    const [composantAffiche,setComposantAffiche]=useState("ChangeDomain");

 
    useEffect(()=>{
        const userEmail=localStorage.getItem("userEmail");
        if(!userEmail){
            navigate("/connexionn");
        }
        
    },[navigate]);


    const [nomUser,setNomUser]=useState("");
    useEffect(()=>{
        const userName=localStorage.getItem("userName");
        if(userName)
            setNomUser(userName);
    },[]);


    

    const logOut=()=>{
        localStorage.removeItem("userEmail");
        navigate("/connexionn");
    }

    const contactUs=()=>{
      window.open("https://t.me/ayoub_ben", "_blank", "noopener,noreferrer");
    }

    return(
        <>
       
        <header className={styles.barriere}>
            <div className={styles.leftPart}>
            <SiJoomla className={styles.iconeheader}/>
            <span>EMS Request Tool</span>
            <span style={{cursor:"pointer",backgroundColor:"#4682B4"}} onClick={contactUs}><FaTelegramPlane className={styles.iconContact}/>  @ayoub_ben</span>
            </div>
            <div className={styles.rightPart}>
            <span>{nomUser}</span>
            <RiShutDownLine title="logout" className={styles.iconeLogOut} onClick={logOut}>Logout</RiShutDownLine>
            </div>
        </header>

        <div className={styles.divGlobal}>
       
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
       

        <main style={{flex:"1",padding:"10px",overflowY: "auto"}}>
        {composantAffiche==="Dmarc" && <Dmarc/>}
        {composantAffiche==="ChangeDomain" && <ChangeDomain/>}
        {composantAffiche==="Duplicate" && <Duplicate/>}
        </main>
        </div>
        </>
    );
}

