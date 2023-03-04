import { Button } from 'bootstrap';
import daffy from '../image/daffy.jpg'
const AffichePelerin = ({affi, setAffi, setUpdate, hadj, setHadj, ap}) => {

return (
  <div className="card mb-3" >
  <div className="row  g-0">
    <div className="col-md-3">
      <img src={daffy} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-6">
      <div className="card-body">
        <p className="card-title">Nom: Moussa <br></br> Prenom : Ali</p>   
        <p className="card-title">Date de naissance: Moussa <br></br> Lieu de naissance : Ali</p>
        <p className='btn btn-danger mx-auto' onClick={ap}>Fermer</p>
      </div>
    </div>
  </div>
</div>
    )
}

export default AffichePelerin;