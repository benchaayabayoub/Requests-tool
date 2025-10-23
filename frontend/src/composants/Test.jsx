

function Test(){

    const lettres =["a","b","c","u"];
    
    const afficher=()=>{
       return lettres.map((lettre,indice)=><li key={indice}>{`lettre avec indice : ${indice} est ${lettre}`}</li>)
    }

    return(
        <div>
           
            <ul>
            {afficher()}
            </ul>

        </div>
    );
}

export default Test;