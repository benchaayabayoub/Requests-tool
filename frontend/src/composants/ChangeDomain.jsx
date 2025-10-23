import React, { useState } from "react";
import styles from './Composant.module.css';

function ChangeDomain(){

    const [sep,setSep]=useState("");
    const [areaIp,setAreaIp]=useState("");
    const [areaDom,setAreaDom]=useState("");
    const [areaResult,setAreaResult]=useState("");

    function generer(){

        let ips=areaIp.split("\n");
        let domains=areaDom.split("\n");
        let tableau=[];

        for(let i=0;i<ips.length;i++){
            let ip=ips[i].trim();
            let domain=domains[i].trim();
            tableau.push(`${ip}${sep}${domain}`);
        }
        setAreaResult(tableau.join("\n"));
    }

    return(
        <div className={styles.div}>
            <label htmlFor="txtAreaIp">IPS:</label><textarea id="txtAreaIp" onChange={(e)=>setAreaIp(e.target.value)} value={areaIp}></textarea>
            <label htmlFor="txtAreaDom">Domains:</label><textarea id="txtAreaDom" onChange={(e)=>setAreaDom(e.target.value)} value={areaDom}></textarea>
            <label htmlFor="txtSep">Séparateur:</label><input type="text" id="txtSep" size={3} placeholder=";,:!?.."
            onChange={(e)=>setSep(e.target.value)} value={sep}></input>
            <button onClick={generer}>Générer</button>
            <label htmlFor="txtAreaResult">Résultat:</label><textarea id="txtAreaResult" value={areaResult}></textarea>
            

        </div>
    );
}


export default ChangeDomain;