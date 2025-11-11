import React, { useEffect, useState } from "react";
import style from './Dmarc.module.css';

function Dmarc(){

    const [checked1,setChecked1]=useState(false);
    const [checked2,setChecked2]=useState(false);
    const [checked3,setChecked3]=useState(false);
    const [checked4,setChecked4]=useState(false);
    const [checked5,setChecked5]=useState(false);
    const [checked6,setChecked6]=useState(false);
    const [checked7,setChecked7]=useState(false);
    const [checked8,setChecked8]=useState(false);
    const [checked9,setChecked9]=useState(false);
    const [checkedAll,setCheckedAll]=useState(true);

    const [select1,setSelect1]=useState("DMARC1");
    const [select2,setSelect2]=useState("none"); 
    const [select3,setSelect3]=useState("none");    
    const [inp3,setInp3]=useState(100); 
    const [inp4,setInp4]=useState("mailto:dmarc"); 
    const [inp5,setInp5]=useState("mailto:dmarc"); 
    const [select4,setSelect4]=useState("s"); 
    const [select5,setSelect5]=useState("s");  
    const [inp6,setInp6]=useState(1);
    const [areaInput,setAreaInput]=useState("");
    const [areaResult,setAreaResult]=useState("");

    function creerRecord(){


        const domaines=areaInput.split(/\r?\n/).map(d=>d.trim()).filter(d=>d !== "");
        const result=[];
        
        domaines.forEach(domaine=>{

        let ligne=`${domaine},_dmarc.${domaine},TXT,`;
        if(checked1)  ligne+=`v=${select1}; `;
        if(checked2)  ligne+=`p=${select2}; `;
        if(checked3)  ligne+=`sp=${select3}; `;
        if(checked4)  ligne=ligne+`pct=${inp3}; `;
        if(checked5)  ligne+=`rua=${inp4}@${domaine}; `;
        if(checked6)  ligne+=`ruf=${inp5}@${domaine}; `;
        if(checked7)  ligne+=`aspf=${select4}; `;
        if(checked8)  ligne+=`adkim=${select5}; `;
        if(checked9)  ligne+=`fo=${inp6};`;

        result.push(ligne);
     })
        
        setAreaResult(result.join("\n"));
  } 

 

    function clearAll(){
        setSelect1("DMARC1");
        setSelect2("none");
        setSelect3("none");
        setSelect4("");
        setSelect5("");
        setInp3(100);
        setInp4("mailto:dmarc");
        setInp5("mailto:dmarc");
        setInp6(1);
        setAreaInput("");
        setAreaResult("");
        setChecked1(false);
        setChecked2(false);
        setChecked3(false);
        setChecked4(false);
        setChecked5(false);
        setChecked6(false);
        setChecked7(false);
        setChecked8(false);
        setChecked9(false);
        setCheckedAll(false);
    }


    useEffect(()=>{
        setChecked1(checkedAll);
        setChecked2(checkedAll);
        setChecked3(checkedAll);
        setChecked4(checkedAll);
        setChecked5(checkedAll);
        setChecked6(checkedAll);
        setChecked7(checkedAll);
        setChecked8(checkedAll);
        setChecked9(checkedAll);
        
    },[checkedAll])
    

    return(
        <div className={style.divGlobal}> 

        <div className={style.divContenu}>
     

        <div className={style.divInterieure}>
            <label className={style.lblSelectAll} htmlFor="inAll">Select All</label><input type="checkbox" id="inAll" checked={checkedAll} onChange={(e)=>setCheckedAll(e.target.checked)}/>
            <label htmlFor="in1">Version:</label><input type="checkBox" id="in1" checked={checked1} onChange={(e)=>setChecked1(e.target.checked)} />
           {checked1 &&(
           <>
            <select value={select1} onChange={(e)=>setSelect1(e.target.value)}>
                <option>DMARC1</option>
                <option>DMARC2</option>
                <option>DMARC3</option>
            </select>
            
            </>
          
           )}
     
       
            <label htmlFor="in2">Policy:</label><input type="checkBox" id="in2" checked={checked2} onChange={(e)=>setChecked2(e.target.checked)}/>
           {checked2 && (
            <>
            <select value={select2} onChange={(e)=>setSelect2(e.target.value)}>
                <option>none</option>
                <option>quarantine</option>
                <option>reject</option>
            </select>
            
            </>
           )
           }
        

       
            <label htmlFor="in3">subdomain policy:</label><input type="checkBox" id="in3" checked={checked3} onChange={(e)=>setChecked3(e.target.checked)}/>
           {checked3 && (
            <>
             <select value={select3} onChange={(e)=>setSelect3(e.target.value)}>
                <option>none</option>
                <option>quarantine</option>
                <option>reject</option>
             </select>
            
            </>
           )}
   
            <label htmlFor="in4">percentage (pct):</label><input type="checkBox" id="in4" checked={checked4} onChange={(e)=>setChecked4(e.target.checked)}/>
            {checked4 && (
            <>
             <input type="number" value={inp3} onChange={(e)=>setInp3(e.target.value)}/>
            </>
           )}

  
            <label htmlFor="in5">aggregate report URI (rua):</label><input type="checkBox" id="in5" checked={checked5} onChange={(e)=>setChecked5(e.target.checked)}/>
           {checked5 && (
            <>
            <input type="text" value={inp4} onChange={(e)=>setInp4(e.target.value)}/>
            </>
           )

           }

            <label htmlFor="in6">forensic report URI (ruf):</label><input type="checkBox" id="in6" checked={checked6} onChange={(e)=>setChecked6(e.target.checked)}/>
           {checked6 && (
            <>
            <input type="text" value={inp5} onChange={(e)=>setInp5(e.target.value)}/>
            </>
           )}
     
            <label htmlFor="in7">alignment for SPF (aspf):</label><input type="checkBox" id="in7" checked={checked7} onChange={(e)=>setChecked7(e.target.checked)}/>
           {checked7 && (
            <>
             <select value={select4} onChange={(e)=>setSelect4(e.target.value)}>
                <option>s</option>
                <option>r</option>
            </select>
                    
            </>
           )}
        
            <label htmlFor="in8">alignment for DKIM (adkim):</label><input type="checkBox" id="in8" checked={checked8} onChange={(e)=>setChecked8(e.target.checked)} />
           {checked8 && (
            <>
             <select value={select5} onChange={(e)=>setSelect5(e.target.value)}>
                <option>s</option>
                <option>r</option>
                </select>
                     
            </>
           )

           }
       
            <label htmlFor="in9">failure options (fo):</label><input type="checkBox" id="in9" checked={checked9} onChange={(e)=>setChecked9(e.target.checked)}/>
           {checked9 && (
            <>
            <input type="text" value={inp6} onChange={(e)=>setInp6(e.target.value)}/>
            </>
           )}
          
        </div>












        <div className={style.divArea}>
           <textarea placeholder="Domains list.." value={areaInput} onChange={(e)=>setAreaInput(e.target.value)}></textarea>
        </div>

        
        </div>
        
        















        <div className={style.divbuttons}>
        <button onClick={()=>areaInput && creerRecord()}>Make record</button>
            <button onClick={clearAll}>Clear All</button>
           
           <button onClick={() => navigator.clipboard.writeText(areaResult)}>
            Copy
           </button>
         </div>

       
            {areaResult && <div className={style.divResult}>
            {areaResult ? areaResult.split("\n").map((ligne,indice)=>(
              <div key={indice} className={style.divLigneResult}>{ligne}</div>
          )) : <span>Records...</span>}
          
          </div>}

  </div>




    );




}
export default Dmarc;