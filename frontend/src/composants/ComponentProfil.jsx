import React from "react";


export default function ComponentProfil(){

    const profil={nom:"Ayoub Ben Chaayab", imageUrl:"https://i.imgur.com/bO6p7N5.jpeg",tailleImg:"150px"}

    return(
        <div style={{display:"flex",alignItems:"center", justifyContent:"center", backgroundColor:"blue"}}>
        <h1>{profil.nom}</h1>
        <img src={profil.imageUrl} alt={"profil de : "+profil.nom} width={profil.tailleImg} style={{borderRadius:"22px"}}></img>
        <br/>
        </div>
    );
}