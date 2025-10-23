import React from "react";

function UlistColor(){

    const villes=[
        {nom:"taza",isEurope:false,identifiant:1},
        {nom:"paris",isEurope:true,identifiant:2},
        {nom:"fes",isEurope:false,identifiant:3},
    ];

    function getColor(ss){
        if(ss.isEurope)
            return "blue";
        else
            return "green";
    }

    const listeVilles=villes.map(ville=><li key={ville.identifiant} style={{color: getColor(ville) }}>{ville.nom}</li>)

   return(
    <ul>
        {listeVilles}
    </ul>
   );
}

export default UlistColor;