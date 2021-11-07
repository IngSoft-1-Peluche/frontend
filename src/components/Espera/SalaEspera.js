import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import IniciarPartida from '../Iniciar/IniciarPartida';


const SalaEspera = () => {


    const { id_p }= useParams();

    var logueado = JSON.parse(sessionStorage.getItem('logueado'));
       
    const datosPartidasDefault = {id_partida: null, nombre: '', jugadores: [{
          "id_jugador": null,
          "apodo": "",
          "orden": null,
          "en_turno": true
        }]
    };
      
    const [partida, setPartida] = useState(datosPartidasDefault);
   
    const obtenerDatos = async () => {
        const data = await fetch(`http://localhost:8000/partidas/${id_p}`)
        const jugador = await data.json()
        setPartida(jugador)  
       
    }

    useEffect(() => {
        obtenerDatos()
    }, [])

    return (

        <div>
            <h2 className="bg-dark text-white">
                Sala de espera de la partida {partida.nombre} 
            </h2>
            <h2 className="bg-dark text-white">
                Jugador : {logueado.apodo}
            </h2>
        
            <table className="table table-striped table-dark">
        
            <thead className="thead-dark">
                <tr>

                    <th scope="col">Apodo</th>
                    <th></th>
                    
                </tr>
            </thead>
            <tbody>
                {partida.jugadores.length > 0 ? (
                    partida.jugadores.map((jugador) => (
                        <tr key={jugador.id_jugador} className = "table-secondary">                   
                            
                            <td>{jugador.apodo}</td>
                            {logueado.creador && partida.jugadores.length > 1
                             && (jugador.id_jugador == logueado.id_jugador) ? (
                                <td><IniciarPartida id={partida.id_partida} id_J={logueado.id_jugador} /></td>

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
        </div>
    );
}

export default SalaEspera;