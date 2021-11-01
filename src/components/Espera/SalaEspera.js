import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import IniciarPartida from '../Iniciar/IniciarPartida';


const SalaEspera = () => {

    const {id_p,id_j}=useParams();

    const unJugador = [
        {id_jugador: 1 , apodo: 'alguien', es_creador: true},
        {id_jugador: 2, apodo:'nadie', es_creador: false}
        
    ]

    const [jugadores, setJugadores] = useState(unJugador);

    return (

    <Fragment>
 
        <h2 className="bg-dark text-white">Sala de espera de la partida: {id_p}</h2>
    
        <table className="table table-striped table-dark">
    
        <thead className="thead-dark">
            <tr>

                <th scope="col">Apodo</th>
                <th></th>
                
            </tr>
        </thead>
        <tbody>
            {jugadores.length > 0 ? (
                jugadores.map((jugadore) => (
                    <tr key={jugadore.id_jugador} className = "table-secondary">                   
                        
                        <td>{jugadore.apodo}</td>
                        {jugadore.es_creador && jugadores.length > 1 && jugadore.id_jugador == parseInt(id_j) ? (
                            <td><IniciarPartida id={id_p} id_J={id_j} /></td>
                        ):(
                            <td>Por favor, espere...</td>
                        )}
                       
                    </tr>
                    )
                )
            ) : (
                <tr>
                    <td colSpan = {3}>No hay jugadores</td>
                </tr>
                )    
            }
            
        </tbody>
    </table>
    </Fragment>
    );

}

export default SalaEspera;