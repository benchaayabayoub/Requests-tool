import Home from "./composants/Home";
import Inscription from "./composants/Inscription";
import Connexion from "./composants/Connexion";
import {Routes,Route,BrowserRouter} from "react-router-dom";


function App(){

  

  return(
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inscription/>}/>
        <Route path="/inscriptionn" element={<Inscription/>}/>
        <Route path="/connexionn" element={<Connexion/>}/>
        <Route path="/homee" element={<Home/>}/>
          
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;