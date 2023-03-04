import { useState } from "react"
import AffichePelerin from "./CardPelerin";


const Pelerin = ({ hadj, setHadj, user, setUser, removePelerin, editPelerin, etat, setEtat, setUpdate, nbr, setNbr, affi, setAffi }) => {



  const Rejeter = (id) => {
    const varl = [...hadj];
    varl.map((el) => {
      if (el.id == id) {
        el.etat = "rejeter"
        nbr.rejeter++
      }
    })
    setHadj(varl)
    setNbr(nbr)
    setUpdate(true)
  }
  const Accepter = (id) => {
    const var1 = [...hadj]
    var1.map((el) => {
      if (el.id == id) {
        el.etat = true
        nbr.accepter++
      }
      console.log(el.id)
      setHadj(var1)
      setNbr(nbr)
      setUpdate(true)
    })
  }

  const change = (id) => {
    /* const var3=[...hadj]
    var3.filter((el) => {
        if(el.id===id){
          el.affi= true
        } 
  console.log(el.id)
    }) */
    const copy = [...hadj];
    copy.filter(c => c.id === id ? c.affi = true : "");
    setHadj(copy);
    setUpdate(true)
  }

const ret = (id) =>{
  const rem = [...hadj];
  rem.filter(c => c.id === id ? c.affi = false : "");
  setHadj(rem);
  setUpdate(true)
}


  return (
    hadj.map((elt) => (
      <div key={elt.id}>
        {
          !elt.affi ? (
            <div className="card mt-2 carte " >
              <div className="row g-0 longueur ">
                <div className="col-md-2 col-sm-2">
                  <img src={elt.images} className=" image" alt="..." />
                </div>
                <div className="col-md-6 col-sm-4">
                  <div className="card-body d-flex justify-content-around">
                    <h5 className="card-title ">{elt.nom} {elt.prenom}</h5>
                    <h6 className="card-text " onClick={() => change(elt.id)}><span >Detail</span>
                    </h6>
                  </div>
                </div>
                {
                  user ? (
                    <div className="col-md-4 col-sm-6 ">
                      {elt.etat === false ? (<div>
                        <button className="btn btn-success m-1" onClick={() => editPelerin(elt.id)} >Modifier</button>
                        <button className="btn btn-danger " onClick={() => removePelerin(elt.id)}>Supprimer</button>
                      </div>
                      ) : ("")

                      }
                      {elt.etat === true ? (<div className="text-success text-center m-2">
                        <h4>Accepter</h4>
                      </div>) : null}
                      {elt.etat === "rejeter" ? (<div className="d-flex">
                        <h3 className="text-danger m-1">Rejeter</h3>
                        <button className="btn btn-success m-1" onClick={() => editPelerin(elt.id)} >Modifier</button>
                      </div>) : null}
                    </div>
                  ) : (<div className="col-md-2 col-sm-4">
                    {elt.etat === false ? (<div>
                      <button className="btn btn-success col m-1" onClick={() => Accepter(elt.id)}>Accepter</button>
                      <button className="btn btn-danger col my-1" onClick={() => Rejeter(elt.id)}>Rejeter</button>
                    </div>) : null}
                    {elt.etat === true ? (<div className="text-success">
                      <h3>Accepter</h3>
                    </div>) : null}
                    {elt.etat === "rejeter" ? (<div className="text-danger">
                      <h3>Rejeter</h3>
                    </div>) : null}

                  </div>)
                }
              </div>
            </div>
          ) : (
            <AffichePelerin 
            affi={affi}
            setAffi={setAffi}
            setUpdate={setUpdate}
            hadj={hadj}
            setHadj={setHadj}
            ap= {()=> ret(elt.id)} />
          )
        }

      </div>
    ))
  )
}


export default Pelerin;

