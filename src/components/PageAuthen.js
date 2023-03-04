import { useState } from "react"


const PageAuthen = ({adm, setAdm,agence,setUser,user, setElha,elha, update, setUpdate}) => {
const [nom, setNom]= useState("")
const[password, setPassword] = useState("")


    const [admin, setAdmin] = useState([
        {
            nom: "Moussa",
            password: 12345
        }
    ])
const Connection = () => {
     setElha([])
     const admins = [...admin].map((el) => {
            if(el.nom==nom && (el.password)==password) {
              setAdm(true)
              setUpdate(true)
    }
 })
     agence.forEach((el)=>{
        if (el.nom == nom && el.id == password) {
            setElha(el)
            setUser(true)
            setUpdate(true)
          
        }      
     })    
}

    return (
    <div className="card col-4 mx-auto text-start p-3 align-self-center bg-transparent border">
            <div className="mb-3 col-8">
                <label className="form-label text-white">Nom d'utilisateur:</label>
                <input type="text" className="form-control col-6 bg-transparent text-white" id="exampleFormControlInput1" placeholder="nom utilisateur" value={nom} onChange={(e) => setNom(e.target.value)} />
            </div>
            <div className="mb-3 col-8 ">
                <label className=" col-form-label text-white">Password</label>
                <div className="col">
                    <input type="password" className="form-control bg-transparent" id="inputPassword" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

            </div>
            <div className="col-3">
                <button type="submit" className="btn btn-primary mb-3" onClick={Connection}>Connecter</button>
            </div>
        </div>
    )
}

export default PageAuthen;