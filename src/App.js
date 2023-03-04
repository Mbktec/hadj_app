
import './App.css';
import Agence from './components/Agence';
import ButtonAction from './components/ButtonAction';
import 'bootstrap/dist/css/bootstrap.css';
import AddAgence from './components/AddAgence';
import AddPelerin from './components/AddPerlerin';
import PageAuthen from './components/PageAuthen';
import { useState } from 'react';
import Users from './components/Users';
import AffichePelerin from './components/CardPelerin';




function App() {

  return (
    <div className='col-12'>
     <Agence/>
    </div>
  );
}

export default App;
