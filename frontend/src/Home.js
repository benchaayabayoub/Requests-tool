import React, { useState } from "react";
import Duplicate from "./composants/Duplicate";
import Dmarc from "./composants/Dmarc";
import ChangeDomain from "./composants/ChangeDomain";

export default function Home(){

    const [composantAffiche,setComposantAffiche]=useState("Dmarc");

    return(
        <>

        <header style={{width:"100%",height:"10vh",backgroundColor:"blue"}}>EMS</header>
        <div style={{width:"100%" ,display:"flex"}}>
        <aside style={{marginTop:"50px"}}>
            <section>Requetes</section>
                <nav>
                    <ul>
                        <li>
                            <button onClick={()=>setComposantAffiche("Dmarc")}>Record Dmarc</button>
                        </li>

                        <li>
                            <button onClick={()=>setComposantAffiche("ChangeDomain")}>Changement domaine</button>
                        </li>

                        <li>
                            <button onClick={()=>setComposantAffiche("Duplicate")}>Duplication</button>
                        </li>

                    </ul>

                </nav>
            <section>Api</section>
        </aside>


        <main style={{flex:1,alignItems:"center"}}>
        {composantAffiche==="Dmarc" && <Dmarc/>}
        {composantAffiche==="ChangeDomain" && <ChangeDomain/>}
        {composantAffiche==="Duplicate" && <Duplicate/>}
        </main>
        </div>
        <footer style={{width:"100%",height:"10vh",backgroundColor:"gray",bottom:0,left:0,position:"fixed"}}>Contact us</footer>
        </>
    );
}

