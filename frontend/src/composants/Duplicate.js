import React, { use, useState } from "react";
import style from './Composant.module.css';

function Duplicate(){
  
  const [input,setInput]=useState("");
  const [nbFois,setNbfois]=useState(1);
  const [nbrPoints,setNbrPoints]=useState(1);
  const [output,setOutput]=useState("");


  function custumDuplicate(){

      const rows=input.split(/\r?\n/).map(row=>row.trim()).filter(row=>row.trim()!=="");
      const tabResult=[];

      for(let i=0;i<nbFois;i++){
        rows.forEach(row=>{
          tabResult.push(addPoints(row,nbrPoints));
        });
      }

      setOutput(tabResult.join("\n"));
    
  }

  function addPoints(email,nbpoints){
    const [user,domaine]=email.split("@");
    let lettres=user.split("");

    for(let i=0;i<nbpoints;i++){
      const position=Math.floor(Math.random()* (lettres.length - 1)) +1;
      lettres.splice(position,0,".");
    }

    return `${lettres.join('')}@${domaine}`;
  }

const duplicParLigne=()=>{

  let result="";
  for(let i=0;i<nbFois;i++){
    result+=input.trim();
    result+='\n';
  }
  setOutput(result);
}

  const duplicMemeLigne=()=>{
    setOutput(input.replaceAll("\n","").repeat(nbFois).trim());
  };


  function Shuffle(){
    
  }

  const Clear=()=>{
    setInput("");
    setNbfois(1);
    setOutput("");
    setNbrPoints(1);
  };

  return(
    <div className={style.div}>

    <textarea value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Entrez la liste à dupliquer:"></textarea>
    <input type="number" min={1} value={nbFois} onChange={(e)=>setNbfois(e.target.value)} size={5}></input>
    <textarea value={output} readOnly={true}  placeholder="Résultat ici:"></textarea>

    <div className={style.groupechoix}>
    <input type="number" value={nbrPoints} onChange={(e)=>setNbrPoints(e.target.value)} min={1} size={5}></input>
    <button onClick={custumDuplicate}>Dupliquer avec points</button>
    </div>

    <button onClick={duplicParLigne}>Dupliquer par ligne</button>
    <button onClick={duplicMemeLigne}>Dupliquer en une ligne</button>
    <button onClick={Shuffle}> Shuffle Output</button>
    <button onClick={Clear}> Clear </button>
  
    </div>
  );
}
export default Duplicate;