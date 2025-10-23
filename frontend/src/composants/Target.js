import React, { useState } from "react";
import Styles from './Target.module.css';

function Target(){

    const [txt,setTxt]=useState("ayb");
    const [checkedd,setChecked]=useState(false);

    return(
        <div className={Styles.div1}>
           <label> Entrez une valeur:
            <input type="text" value={txt} onChange={(e)=>setTxt(e.target.value)}></input><br/>
            <p>tu as saisi la valeur : {txt}</p>
           </label>
            <label>Check if checked:
           <input type="checkbox" checked={checkedd} onChange={(e)=>setChecked(e.target.checked)}></input>
           </label>
            <p>l etat de checkbox est : {!checkedd?"Non":"Oui"}</p>  
        </div>

    );
}

export default Target;