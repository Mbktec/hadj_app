import { useState } from "react";
import { v4 } from "uuid";
import Agence from "./Agence";
import Pelerin from "./Pelerin";


const AddPelerin = ({elha, setElha, user ,setUser,agence,setAgence, update,setUdapte}) => {
    const[nom, setNom] = useState("")
    const[prenom, setPrenom] = useState("")
    const[contact, setContact] = useState("")
    const[naissance, setNaissance] = useState("")
    const[date, setDate] = useState("")
    const[description, setDescription] = useState("")
    const[images, setImages]= useState("")
    const {pelerin} = elha
const AddPelerins = () => {
    const pel =({
                id:v4(),
                nom:nom,
                prenom:prenom,
                contact:contact,
                naissance:naissance,
                date:date,
                images:images,
                affiche:true,
                etat:false,
                affi: false
            }
        )
      
        pelerin.push(pel)
        const newArr = {...elha,pelerin:pelerin}
        setElha(newArr)
        setUdapte(true)
        setNom("")
        setPrenom("")
        setContact("")
        setNaissance("")
        setDate("")
        setImages("")        
    }

const removePelerin = (id) => {
    const newArr2= [...pelerin].filter(elem => elem.id !==id)
    const newArr = {...elha,pelerin:newArr2}
    setElha(newArr)
    console.log(newArr);
    const array = agence.filter(elem => elem.id !== elha.id)
    const array2 = [...array, newArr]
    setAgence(array2)
    console.log(array2);
    setUdapte(true)
        
}

const editPelerin = (id) => {
    const newArr3= [...pelerin];
     newArr3.forEach((el) => {
        if(el.id===id){
            setNom(el.nom)
            setPrenom(el.prenom)
            setContact(el.contact)
            setNaissance(el.naissance)
            setDate(el.date)
            removePelerin(id)
            setUdapte(true)
        }
    }) 
   
   
}

const displayImage = (e) => {
    var files = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function() {
        setImages(reader.result)     
    }     
    reader.readAsDataURL(files); 
    if (files !==".png" || files !==".jpg" ) {
        window.alert("File does not support. You must use .png or .jpg ");
        return false;
     }
     if (files.size > 1e6) {
       window.alert("Please upload a file smaller than 1 MB");
       return false;
     }     
}

const submitAddPelerein =(e) => {
    e.preventDefault()
    if (nom === "" ||prenom ==="" || contact ==="" || naissance ==="" || date ==="" || images ==="" ) {
        alert('Veuillez remplir tous les champs')
    }
    else{
    AddPelerins();

    }

}

    return (
        < div className="d-flex justify-content-between col-12">
            <form onSubmit={ submitAddPelerein} style={{width:"100%"}} >
        <div className="  m-2 p-4 card col-6">
            <div className="mb-3 col text-start d-flex">
                <div className="m-2 col">
                <label className="form-label ">Nom:</label>
                <input type="text" required className="form-control col-4" value={nom}id="formGroupExampleInput" placeholder="Example input placeholder" onChange={(e) => setNom(e.target.value)} />
                </div>
                <div className="m-2 col">
                <label className="form-label">Prenom:</label>
                <input type="text" className="form-control col-4" value={prenom}id="formGroupExampleInput" placeholder="Example input placeholder" onChange={(e) => setPrenom(e.target.value)} />
                </div>
                
            </div>
            <div className="mb-3 col text-start d-flex">
                <div className="m-2 col">
                <label className="form-label">Date de naissance:</label>
                <input type="date" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
               <div className="m-2 col">
               <label className="form-label">Lieu de naissance:</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" value={naissance} onChange={(e) => setNaissance(e.target.value)} />
                
               </div>
      
            </div>
            <div className="mb-3 col-8 text-start">
            <label className="form-label">Contact:</label>
            <input type="tel" className="form-control"  pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}" id="formGroupExampleInput2" placeholder="Another input placeholder" value={contact} onChange={(e) => setContact(e.target.value)} />
                <label className="form-label">Default file input example</label>
                <input className="form-control" type="file" width={400} height={400} accept="image/png, image/jpeg" id="formFile" onChange={displayImage}/>
                </div>
            <div className="mt-3 ">
                <button type="button" className="btn btn-large btn-danger col-auto m-3">Annuler</button>
                <button type="submit" className="btn btn-large btn-success col-auto m-3"  >Enregistrer</button>
            </div>
            
        </div>
        </form>


        <div className="col-6 card m-2">
                    <Pelerin hadj={elha.pelerin} setHadj={setElha} user={user} setUser={setUser} removePelerin={removePelerin} editPelerin={editPelerin}/> 
        </div>
    </div>
    )
}

export default AddPelerin;