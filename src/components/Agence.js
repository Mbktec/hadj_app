import React, { useEffect } from "react";
import { useState } from "react";
import AddAgence from "./AddAgence";
import ButtonAction from "./ButtonAction";
import Pelerin from "./Pelerin";
import { BsPersonCircle } from "react-icons/bs";
import PageAuthen from "./PageAuthen";
import { v4 } from "uuid";
import Users from "./Users";

const Agence = () => {
    const [afficheAgence, setAfficheAgence] = useState(false)
    const [hadj, setHadj] = useState([])
    const [adm, setAdm] = useState(false);
    const [user, setUser] = useState(false)
    const [elha, setElha] = useState([])
    const [etat, setEtat] = useState(false)
    const [affi, setAffi] = useState(false);
    const [nbr, setNbr] = useState({
        "accepter": 0,
        "rejeter": 0,
        "attente": 0
    })
    const [nums, setNums] = useState({
        "accepters": 0,
        "rejeters": 0,
        "attentes": 0
    })

    const [agence, setAgence] = useState(() => {
        const mise = JSON.parse(localStorage.getItem('agence'));
        return mise || [
            {
                nom: "Daffy",
                id: 1,
                description: "description",
                image: "",
                pelerin: [
                    {
                        id: v4(),
                        nom: "Ali",
                        prenom: "Sani",
                        contact: 96564213,
                        naissance: "Niamey",
                        date: "22.08.1990",
                        num: "Ny12756",
                        info: true,
                        etat: false,
                        affi: false
                    }
                ]

            },
            {
                nom: "Lola",
                id: 2,
                description: "description",
                image: "",
                pelerin: [
                    {
                        id: v4(),
                        nom: "Ali",
                        prenom: "Sani",
                        contact: 96564213,
                        naissance: "Niamey",
                        date: "22.08.1990",
                        num: "Ny12756",
                        info: true,
                        etat: false,
                        affi: false
                    },
                    {
                        id: v4(),
                        nom: "Ali",
                        prenom: "Sani",
                        contact: 96564213,
                        naissance: "Niamey",
                        date: "22.08.1990",
                        num: "Ny12756",
                        info: true,
                        etat: false,
                        affi: true
                    }
                ]

            },
            {
                nom: "Bugs",
                id: 3,
                description: "description",
                image: "",
                pelerin: [
                    {
                        id: v4(),
                        nom: "Ali",
                        prenom: "Sani",
                        contact: 96564213,
                        naissance: "Niamey",
                        date: "22.08.1990",
                        num: "Ny12756",
                        info: true,
                        etat: false,
                        affi: false
                    },
                    {
                        id: v4(),
                        nom: "Ali",
                        prenom: "Sani",
                        contact: 96564213,
                        naissance: "Niamey",
                        date: "22.08.1990",
                        num: "Ny12756",
                        info: true,
                        etat: false,
                        affi: false
                    }
                ]

            },
            {
                nom: "Porky",
                id: 4,
                description: "description",
                image: "",
                pelerin: [
                    {
                        id: v4(),
                        nom: "Ali",
                        prenom: "Sani",
                        contact: 96564213,
                        naissance: "Niamey",
                        date: "22.08.1990",
                        num: "Ny12756",
                        info: true,
                        etat: false,
                        affi: false
                    },
                    {
                        id: v4(),
                        nom: "Ali",
                        prenom: "Sani",
                        contact: 96564213,
                        naissance: "Niamey",
                        date: "22.08.1990",
                        num: "Ny12756",
                        info: true,
                        etat: false,
                        affi: false
                    }
                ]

            },
            {
                nom: "Richouf",
                id: 5,
                description: "description",
                image: "",
                pelerin: [
                    {
                        id: v4(),
                        nom: "Ali",
                        prenom: "Sani",
                        contact: 96564213,
                        naissance: "Niamey",
                        date: "22.08.1990",
                        num: "Ny12756",
                        info: true,
                        etat: false,
                        affi: false
                    },
                    {
                        id: v4(),
                        nom: "Ali",
                        prenom: "Sani",
                        contact: 96564213,
                        naissance: "Niamey",
                        date: "22.08.1990",
                        num: "Ny12756",
                        info: true,
                        etat: false,
                        affi: false
                    }
                ]

            },
            {
                nom: "mbk",
                id: 6,
                description: "description",
                image: "",
                pelerin: [
                    {
                        id: v4(),
                        nom: "Ali",
                        prenom: "Sani",
                        contact: 96564213,
                        naissance: "Niamey",
                        date: "22.08.1990",
                        num: "Ny12756",
                        info: true,
                        etat: false,
                        affi: false
                    },
                    {
                        id: v4(),
                        nom: "Ali",
                        prenom: "Sani",
                        contact: 96564213,
                        naissance: "Niamey",
                        date: "22.08.1990",
                        num: "Ny12756",
                        info: true,
                        etat: false,
                        affi: false
                    }
                ]

            }
        ]
    }


    )
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        if (update === true) {
            localStorage.setItem("agence", JSON.stringify(agence));
            let numb = {
                accepter: 0,
                rejeter: 0,
                attente: 0
            }
            let num = {
                accepters: 0,
                rejeters: 0,
                attentes: 0
            }
            if (adm === true) {
                agence.map((el) => {
                    el.pelerin.map((elt) => {
                        if (elt.etat === false) {
                            numb.attente++
                        }
                        else if (elt.etat === "rejeter") {
                            numb.rejeter++
                        }
                        else {
                            numb.accepter++
                        }
                        setNbr(numb)
                    })
                })
            }
            if (user === true) {
                const newArr3 = [...elha.pelerin];
                newArr3.forEach((el) => {

                    if (el.etat === false) {
                        num.attentes++
                    }
                    else if (el.etat === "rejeter") {
                        num.rejeters++
                    }
                    else {
                        num.accepters++
                    }
                    setNums(num)
                })

            }
            setUpdate(false)

        }

    }, [update, agence])
    
    const pelerins = (id) => {
        setHadj([])
        agence.forEach(el => {
            if (el.id === id) {
                setHadj(el.pelerin)
            }
        });
    }

    const removeAgence = (id) => {
        const newArr = [...agence].filter(elem => elem.id !== id)
        setAgence(newArr)
        setUpdate(true)
    }

    const ListAgence = () => {
        return (
            agence.map((elt) => (
                <div className="card m-3 carte " key={elt.id}>
                    <div className="row g-0 ">
                        <div className="col-md-4">
                            <img src={elt.image} className="img-fluid circle rounded-start tex-imag" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body d-flex justify-content-around">
                                <h6 className="card-title ">{elt.nom}</h6>
                                <h6 className="card-text mx-2">{elt.description} </h6>

                                <h6>{elt.id}</h6>
                                <h5 className="card-text ">
                                    {
                                        afficheAgence ? ("") : (<button className="btn btn-danger m-2" onClick={() => removeAgence(elt.id)}>Supprimer</button>)
                                    }

                                    {
                                        afficheAgence ? (<button className="btn btn-success" onClick={() => pelerins(elt.id)}>Pelerin</button>) : ("")
                                    }
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )
    }

    const Admin = () => {
        return (
            <div>
                <nav className="navbar navbar-light bg-primary p-3 h-100">
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1"><BsPersonCircle /> Admin</span>
                        <button className="btn btn-dark" onClick={() => setAdm(!adm)}> Deconnection</button>
                    </div>
                </nav>
                <div className='container-fluid bg-transparent'>
                    <div className="row">
                        <div className="col-3 bg-primary"></div>
                    </div>
                    <div className='row'>
                        <div className='shadow-sm p-3 mb-5 bg-light rounded col-2 '>
                            <ButtonAction
                                afficheAgence={afficheAgence}
                                setAfficheAgence={setAfficheAgence} />
                        </div>
                        <div className="col">
                            <div className="row mx-auto" >
                                <div className="col text-white  m-4 ">
                                    <h4 className="bg-success  col-6 mx-auto px-2">Accepter: {nbr.accepter}</h4></div>
                                <div className="col text-white  m-4">
                                    <h4 className="bg-primary  col-5 mx-auto px-2">Attente:{nbr.attente}</h4></div>
                                <div className="col text-white  m-4">
                                    <h4 className="bg-danger  col-5 mx-auto px-2"> Rejeter:{nbr.rejeter}</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col-5 card m-4' >
                                    {
                                        afficheAgence ? (
                                            <ListAgence />)
                                            : (<AddAgence
                                                agence={agence}
                                                setAgence={setAgence}
                                                setUpdate={setUpdate} />)
                                    }
                                </div>
                                <div className="col card m-4">
                                    {
                                        afficheAgence ? (
                                            <Pelerin
                                                hadj={hadj}
                                                setHadj={setHadj}
                                                etat={etat}
                                                setEtat={setEtat}
                                                setUpdate={setUpdate}
                                                nbr={nbr}
                                                setNbr={setNbr}
                                                affi={affi}
                                                setAffi={setAffi} />)
                                            : (
                                                <ListAgence />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="col-12 ">
            {!adm && !user ? (
                <PageAuthen
                    user={user}
                    adm={adm}
                    setAdm={setAdm}
                    agence={agence}
                    setUser={setUser}
                    elha={elha}
                    setElha={setElha}
                    update={update}
                    setUpdate={setUpdate} />)
                : null}
            {adm ? (
                <Admin />)
                : null}
            {user ? <Users
                elha={elha}
                setElha={setElha}
                setUser={setUser}
                user={user}
                nums={nums}
                setNums={setNums}
                nbr={nbr}
                agence={agence}
                setAgence={setAgence}
                setNbr={setNbr}
                setUpdate={setUpdate}
                update={update} />
                : null}
        </div>
    )

}



export default Agence;