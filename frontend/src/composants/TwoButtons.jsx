import React, { useState } from "react";


const TwoButtons=()=>{

    const [cmp,setCmp]=useState(0);
    const obj=0;
    console.log(typeof obj);
    console.log(Array.isArray(obj));

    const incrementer=()=>{
        setCmp(cmp+1);
    }

    return(
        <>
            <button onClick={incrementer}>
                incrementer {cmp}
            </button>
            <hr/>
        </>
    );
}


export default TwoButtons;