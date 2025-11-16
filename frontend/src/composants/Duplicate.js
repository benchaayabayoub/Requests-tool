import React, {  useState } from "react";
import style from './Duplicate.module.css';

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
    // juste après let lettres = user.split("");
    let maxPoints = lettres.length - 1;
    nbpoints = Math.min(nbpoints, maxPoints);

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
    setNbrRandom(1);
  };

  return(
    <div className={style.divGlobal}>

    <textarea value={input} onChange={(e)=>setInput(e.target.value)} placeholder="user@domain.com"></textarea>
    <label htmlFor="nombreFois">Desired duplication count:</label><input type="number" id="nombreFois" min={1} value={nbFois} onChange={(e)=>setNbfois(Number(e.target.value))}></input>
    <textarea value={output} readOnly={true}  placeholder="Output.." className={style.result}></textarea>

   
    <div className={style.divbuttons}>
   
    <button onClick={()=>setBtn(inverse=>!inverse)}>Custum duplication</button>
    {btn &&(
      <div className={style.divcachedButtons}>
      <button onClick={custumDuplicatePoints}>Duplicate including points</button>
      <label htmlFor="nombrePoints">Desired points count:</label> <input type="number" id="nombrePoints" value={nbrPoints} onChange={(e)=>setNbrPoints(Number(e.target.value))} min={1}></input>
     

      <button onClick={CustumDuplicateRandom}>Duplicate with +random</button><br/>
      <label htmlFor="nombrePoints">Desired random count:</label><input type="number" value={nbrRandom} onChange={(e)=>setNbrRandom(Number(e.target.value))} min={1} ></input>
     
     </div>
    )}
    
   
    


    <button onClick={duplicParLigne}>Basic duplication</button>
    <button onClick={Shuffle}>Shuffle</button>
    <button onClick={()=>navigator.clipboard.writeText(output)}>Copy</button>
    <button onClick={Clear}>Clear</button>
  
     </div>

    </div>
  );
}
export default Duplicate;