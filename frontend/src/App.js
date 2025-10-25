import React , {useState} from "react";

import Menu from "./composants/Menu";
import Request  from "./composants/Request";
import Duplicate from "./composants/Duplicate";
import Target from "./composants/Target";
import Dmarc from "./composants/Dmarc";
import Compteur from "./composants/Compteur";
import ChangeDomain from "./composants/ChangeDomain";
import TwoButtons from "./composants/TwoButtons";
import UlistColor from "./composants/UlistColor";
import "./App.css";
import ComponentProfil from "./composants/ComponentProfil";
import Test from './composants/Test';

function App(){
  return(
    
    <div>
    <Duplicate  />
    <Dmarc />


    </div>
  );
}


export default App;