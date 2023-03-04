import { useState } from "react";
import { v4 } from "uuid";


const AddAgence = ({agence, setAgence, setUpdate}) => {
    const[nom, setNom] = useState("")
    const[description, setDescription] = useState("")
    const[image, setImage] = useState("")

    const AddAgences = () => {
            setAgence([
                ...agence, {
                    id:v4(),
                    nom:nom,
                    pelerin:[],
                    description:description,
                    image:image,
                    affiche:true,
                    etat:false
                }
            ])
            setDescription('')
            setNom('')
            setUpdate(true)   
    }

    function displayImage(e){
       
        var files = e.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(files);
      
        reader.onload = function() {
             setImage(reader.result)
        }
       
      }

    return (
        <div className="  m-2 p-4">
            <div className="mb-3 col-8 text-start">
                <label className="form-label ">Nom agence:</label>
                <input type="text" className="form-control col-4" value={nom}id="formGroupExampleInput" placeholder="Example input placeholder" onChange={(e) => setNom(e.target.value)} />
            </div>
            <div className="mb-3 col-8 text-start">
                <label className="form-label">Description:</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="mb-3 col-8 text-start">
                <label className="form-label">Default file input example</label>
                <input className="form-control" type="file" id="formFile"   onChange={displayImage}/>
                </div>
            <div className="mt-3 ">
                <button type="button" className="btn btn-large btn-danger col-4 m-3">Annuler</button>
                <button type="button" className="btn btn-large btn-success col-4 m-3" onClick={AddAgences}>Enregistrer</button>
            </div>
        </div>
    )
}

export default AddAgence;