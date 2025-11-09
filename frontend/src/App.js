import Home from "./composants/Home";
import Inscription from "./composants/Inscription";
import Connexion from "./composants/Connexion";
import {Routes,Route,BrowserRouter} from "react-router-dom";


function App(){

  

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inscription/>}/>
        <Route path="/inscription" element={<Inscription/>}/>
        <Route path="/connexion" element={<Connexion/>}/>
        <Route path="/home" element={<Home/>}/>
          
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;