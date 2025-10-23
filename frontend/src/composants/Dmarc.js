import React, { useState } from "react";

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

        let ligne=`${areaInput},_dmarc.${areaInput},TXT,`;
        if(checked1)  ligne+=`v=${select1}; `;
        if(checked2)  ligne+=`p=${select2}; `;
        if(checked3)  ligne+=`sp=${select3}; `;
        if(checked4)  ligne=ligne+`pct=${inp3}; `;
        if(checked5)  ligne+=`rua=${inp4}@${areaInput}; `;
        if(checked6)  ligne+=`ruf=${inp5}@${areaInput}; `;
        if(checked7)  ligne+=`aspf=${select4}; `;
        if(checked8)  ligne+=`adkim=${select5}; `;
        if(checked9)  ligne+=`fo=${inp6};`;

        setAreaResult(ligne);
        } 

  
    const clearAll=()=>{

        setSelect1("DMARC1");
        setSelect2("none");
        setSelect3("none");
        setSelect4("");
        setSelect5("");
        setInp3(100);
        setInp4("");
        setInp5("");
        setInp6("");
        setAreaInput("");
        setAreaResult("");

    }

    function reinitialiser(){
        setSelect1("DMARC1");
        setSelect2("none");
        setSelect3("none");
        setSelect4("");
        setSelect5("");
        setInp3(0);
        setInp4("mailto:dmarc");
        setInp5("mailto:dmarc");
        setInp6("");
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
    }
    

    return(
        <div style={{margin:"10px auto",width:"600px"}}> 
            <label htmlFor="in1">Version:</label><input type="checkBox" id="in1" checked={checked1} onChange={(e)=>setChecked1(e.target.checked)} /><br/>
           {checked1 &&(
           <>
            <select value={select1} onChange={(e)=>setSelect1(e.target.value)}>
                <option>DMARC1</option>
                <option>DMARC2</option>
                <option>DMARC3</option>
            </select>
            <br/>
            </>
           )}

            <label htmlFor="in2">Politque:</label><input type="checkBox" id="in2" checked={checked2} onChange={(e)=>setChecked2(e.target.checked)}/><br/>
           {checked2 && (
            <>
            <select value={select2} onChange={(e)=>setSelect2(e.target.value)}>
                <option>none</option>
                <option>quarantine</option>
                <option>reject</option>
            </select>
            <br/>
            </>
           )
           }


            <label htmlFor="in3">Politque Sous domaine:</label><input type="checkBox" id="in3" checked={checked3} onChange={(e)=>setChecked3(e.target.checked)}/><br/>
           {checked3 && (
            <>
             <select value={select3} onChange={(e)=>setSelect3(e.target.value)}>
                <option>none</option>
                <option>quarantine</option>
                <option>reject</option>
             </select>
             <br/>
            </>
           )}

            <label htmlFor="in4">pct:</label><input type="checkBox" id="in4" checked={checked4} onChange={(e)=>setChecked4(e.target.checked)}/><br/>
            {checked4 && (
            <>
             <input type="number" value={inp3} onChange={(e)=>setInp3(e.target.value)}/><br/>
            </>
           )}


            <label htmlFor="in5">rua:</label><input type="checkBox" id="in5" checked={checked5} onChange={(e)=>setChecked5(e.target.checked)}/><br/>
           {checked5 && (
            <>
            <input type="text" value={inp4} onChange={(e)=>setInp4(e.target.value)}/><br/>
            </>
           )

           }

            <label htmlFor="in6">ruf:</label><input type="checkBox" id="in6" checked={checked6} onChange={(e)=>setChecked6(e.target.checked)}/><br/>
           {checked6 && (
            <>
            <input type="text" value={inp5} onChange={(e)=>setInp5(e.target.value)}/><br/>
            </>
           )}

            <label htmlFor="in7">aspf:</label><input type="checkBox" id="in7" checked={checked7} onChange={(e)=>setChecked7(e.target.checked)}/><br/>
           {checked7 && (
            <>
             <select value={select4} onChange={(e)=>setSelect4(e.target.value)}>
                <option>s</option>
                <option>r</option>
            </select>
            <br/>           
            </>
           )}

            <label htmlFor="in8">adkim:</label><input type="checkBox" id="in8" checked={checked8} onChange={(e)=>setChecked8(e.target.checked)} /><br/>
           {checked8 && (
            <>
             <select value={select5} onChange={(e)=>setSelect5(e.target.value)}>
                <option>s</option>
                <option>r</option>
                </select>
            <br/>          
            </>
           )

           }

            <label htmlFor="in9">fo:</label><input type="checkBox" id="in9" checked={checked9} onChange={(e)=>setChecked9(e.target.checked)}/><br/>
           {checked9 && (
            <>
            <input type="number" value={inp6} onChange={(e)=>setInp6(e.target.value)}/><br/>
            </>
           )}

           
           <textarea style={{width:"400px",height:"400px"}} placeholder="Entrez la liste des domaines" value={areaInput} onChange={(e)=>setAreaInput(e.target.value)}></textarea><br/>
            <button onClick={()=>areaInput && creerRecord()}>Make record</button>
            <button onClick={clearAll}>Clear All</button>
            <button onClick={reinitialiser}>réinitiliaser</button><br/>
            <textarea style={{width:"800px",height:"400px"}} placeholder="Résultat Ici:" value={areaResult} readOnly ></textarea>
        </div>
    );
}
export default Dmarc;