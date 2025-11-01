import React , {useState} from "react";

import Menu from "./composants/Menu";
import Request  from "./composants/Request";
import Duplicate from "./composants/Duplicate";
import Dmarc from "./composants/Dmarc";
import ChangeDomain from "./composants/ChangeDomain";
import Home from "./Home";

import "./App.css";



function App(){

  const [composantChoisi,setComposantChoisi]=useState("request");

  return(
    <div>
      <Home/>
    </div>
  );
}


export default App;