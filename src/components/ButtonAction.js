import { useState } from "react"
import AddAgence from "./AddAgence"


const ButtonAction = ({afficheAgence,setAfficheAgence}) => {

const showForm =()=>{
setAfficheAgence(false);
}
const showFormt =()=>{
    setAfficheAgence(true);
    }

    return(
        <div className=" ">
                <button type="button" className="btn btn-large btn-secondary col-12 mb-1" onClick={showForm}>Ajouter</button>
               <button type="button" className="btn btn-large btn-secondary col-12 mb-1" onClick={showFormt}>List</button>
           </div>
        )
}

export default ButtonAction;