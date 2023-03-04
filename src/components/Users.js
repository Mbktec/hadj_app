import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import AddPelerin from "./AddPerlerin";


const Users = ({ elha, setElha,setUser,user,nums ,agence, setAgence, nbr, setNbr, setNums,  update , setUpdate}) => {
    const[voir, setVoir]= useState(false)
  
   
    const decoUser = ()=>{
        setUpdate(true)
        setUser(!user)
    }
  
  
    return (
        <div className="h-100">
            <nav className="navbar navbar-light bg-primary p-3 container-fluid">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1"><BsPersonCircle /> {elha.nom}</span>
                    <button className="btn btn-dark" onClick={decoUser} > Deconnection</button>
                </div>
            </nav>
            <div className=' bg-transparent '>
                <div className="row">
                
                    <div className='shadow-sm p-3 mb-5 bg-light rounded col-2 '>
                        {
                            !voir ? (<button type="button" className="btn btn-large btn-secondary col-12 mb-1" onClick={(e) => setVoir(!voir)}>Pelerins</button>) : (<div>
                                <button type="button" className="btn btn-large btn-secondary col-12 mb-1" onClick={(e) => setVoir(!voir)}>Pelerins</button>
                                <button type="button" className="btn btn-large btn-primary col-12 mb-1">Ajouter</button>
                                <button type="button" className="btn btn-large btn-success col-12 mb-1">Accepter</button>
                                <button type="button" className="btn btn-large btn-danger col-12 mb-1">Rejeter</button>
                               
                            </div>)
                        }
                    </div>

                    <div className='col m-2' >
                    <div className="row " >
                      <div className="col text-white  m-2 "> 
                      <h4 className="bg-success  col-6 mx-auto px-2">
                        Accepter: {nums.accepters}
                        </h4>
                        </div>
                      <div className="col text-white  m-2">
                        <h4 className="bg-primary  col-5 mx-auto px-2">
                            Attente:{nums.attentes}
                            </h4>
                            </div>
                       <div className="col text-white  m-2">
                       <h4 className="bg-danger  col-5 mx-auto px-2"> 
                       Rejeter:{nums.rejeters}
                       </h4>
                       </div>
                   </div> 
                    <div className="m-2">
                        <AddPelerin 
                        elha={elha} 
                        setElha={setElha} 
                        user={user} 
                        setUser={setUser} 
                        update={update}
                        agence={agence}
                        setAgence={setAgence}
                        setUdapte={setUpdate}/>
                    </div>
                    </div>   
            </div>
            </div>
        </div>
    )



}

export default Users;