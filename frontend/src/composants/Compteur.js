import React, { useState } from "react";




function Compteur(){
    const [nbr,setNbr]=useState(0);

    const increment=()=>{
        setNbr(nbr+1);
    }

    function decrement(){
        setNbr(nbr-1);
    }

    function Clear(){
        setNbr(0);
    }

    return(
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={Clear}>clear</button>
            <p>le compteur est à la valeur: {nbr} </p>
        </div>
    );
}

export default Compteur;