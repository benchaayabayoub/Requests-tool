import React, {  useState } from "react";
import style from './Composant.module.css';

function Duplicate(){
  
  const [input,setInput]=useState("");
  const [nbFois,setNbfois]=useState(1);
  const [nbrPoints,setNbrPoints]=useState(1);
  const [output,setOutput]=useState("");
  const [btn,setBtn]=useState(false);
  const [nbrRandom,setNbrRandom]=useState(1);


  function custumDuplicatePoints(){

      const rows=input.split(/\r?\n/).map(row=>row.trim()).filter(row=>row.trim()!=="");
      const tabResult=[];

      for(let i=0;i<nbFois;i++){
        rows.forEach(row=>{
          tabResult.push(addPoints(row,nbrPoints));
        });
      }

      setOutput(tabResult.join("\n"));
    
  }


  function CustumDuplicateRandom(){
    const rows=input.split(/\r?\n/).map(row=>row.trim()).filter(row=>row.trim() !=="");
    const tabResult=[];

    for(let i=0;i<nbFois;i++){
      rows.forEach(row=>{
        tabResult.push(addRandom(row,nbrRandom));
      });
    }
    setOutput(tabResult.join("\n"));
  }

  function addPoints(email,nbpoints){
    const [user,domaine]=email.split("@");
    let lettres=user.split("");
    let position;

    for(let i=0;i<nbpoints;i++){

      do{
        position=Math.floor(Math.random()* (lettres.length - 1)) +1;
      }
      while(
        lettres[position - 1] ==="." || lettres[position] === "."
      );
      lettres.splice(position,0,".");
    }

    return `${lettres.join('')}@${domaine}`;
  }


  function addRandom(email,nbRandom){
    const [user,domaine]=email.split("@");
    const tousCas="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let randomx="";

    for(let i=0;i<nbRandom;i++){
      const position=Math.floor(Math.random()* (tousCas.length));
      randomx+=tousCas[position];
    }

   //return user+"+"+randomx+"@"+domaine;   OU:
   return `${user}+${randomx}@${domaine}`;
   
    
  }

  //console.log(addRandom("exemple@gmail.com", 5));

const duplicParLigne=()=>{


    const rows=input.split(/\r?\n/).map(r=>r.trim()).filter(r=>r !=="");
    let result=[];
 
    for(let i=0;i<nbFois;i++){
    result.push(...rows);
    }
 

  setOutput(result.join("\n"));

}




  function Shuffle(){
    const out=output.split(/\r?\n/);
     for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }

    setOutput(out.join("\n"));

  }

  const Clear=()=>{
    setInput("");
    setNbfois(1);
    setOutput("");
    setNbrPoints(1);
    setNbrRandom("");
  };

  return(
    <div className={style.div}>

    <textarea value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Entrez la liste à dupliquer:"></textarea>
    <label htmlFor="nombreFois">Nombre de duplication souhaité:</label><input type="number" id="nombreFois" min={1} value={nbFois} onChange={(e)=>setNbfois(Number(e.target.value))} size={5}></input>
    <textarea value={output} readOnly={true}  placeholder="Résultat ici:"></textarea>

   
    
   
    <button onClick={()=>setBtn(inverse=>!inverse)}>custum duplicate</button>
    {btn &&(
      <>
      <button onClick={custumDuplicatePoints}>Dupliquer avec points</button>
      <label htmlFor="nombrePoints">Nombre de points souhaité:</label> <input type="number" id="nombrePoints" value={nbrPoints} onChange={(e)=>setNbrPoints(Number(e.target.value))} min={1} size={5}></input>
     

      <button onClick={CustumDuplicateRandom}>Dupliquer avec random</button>
      <label htmlFor="nombrePoints">Nombre de random souhaité:</label><input type="number" value={nbrRandom} onChange={(e)=>setNbrRandom(Number(e.target.value))} placeholder="Entrez Nombre de random a generer" min={1} size={5}></input>
     
     </>
    )}
    
    


    <button onClick={duplicParLigne}>Dupliquer par ligne</button>
    <button onClick={Shuffle}> Shuffle Output</button>
    <button onClick={Clear}> Clear </button>
  
    </div>
  );
}
export default Duplicate;