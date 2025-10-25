import React, {  useState } from "react";
import style from './Composant.module.css';

function Duplicate(){
  
  const [input,setInput]=useState("");
  const [nbFois,setNbfois]=useState(1);
  const [nbrPoints,setNbrPoints]=useState(1);
  const [output,setOutput]=useState("");
  const [btn,setBtn]=useState(false);
  const [txtRandom,setTxtRandom]=useState("");


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


    const rows=input.split(/\r?\n/).map(r=>r.trim()).filter(r=>r !=="");
    let result=[];
 
    for(let i=0;i<nbFois;i++){
    result.push(...rows);
    }
 

  setOutput(result.join("\n"));

}




  function Shuffle(){
    
  }

  const Clear=()=>{
    setInput("");
    setNbfois(1);
    setOutput("");
    setNbrPoints(1);
    setTxtRandom("");
  };

  return(
    <div className={style.div}>

    <textarea value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Entrez la liste à dupliquer:"></textarea>
    <input type="number" min={1} value={nbFois} onChange={(e)=>setNbfois(Number(e.target.value))} size={5}></input>
    <textarea value={output} readOnly={true}  placeholder="Résultat ici:"></textarea>

   
    
   
    <button onClick={()=>setBtn(inverse=>!inverse)}>custum duplicate</button>
    {btn &&(
      <>
      <button onClick={custumDuplicate}>Dupliquer avec points</button>
      <input type="number" value={nbrPoints} onChange={(e)=>setNbrPoints(Number(e.target.value))} min={1} size={5}></input>
     

      <button>Dupliquer avec random</button>
      <input type="text" value={txtRandom} onChange={(e)=>setTxtRandom(e.target.value)} placeholder="Entrez le tag random"></input>
     
     </>
    )}
    
    


    <button onClick={duplicParLigne}>Dupliquer par ligne</button>
    <button onClick={Shuffle}> Shuffle Output</button>
    <button onClick={Clear}> Clear </button>
  
    </div>
  );
}
export default Duplicate;