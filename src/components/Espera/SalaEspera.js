import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';
import IniciarPartida from '../Iniciar/IniciarPartida';



const SalaEspera = () => {

    const { id_p }= useParams();

    var logueado = JSON.parse(sessionStorage.getItem('logueado'));

    const [ws ,setWs] = useState(new WebSocket(`ws://localhost:8000/espera/${logueado.id_jugador}`))
       
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
      obtenerDatos();
    },[]);

    ws.onmessage = function(event) {
        const prueba = JSON.parse(event.data)
        switch(prueba.action) {
            case 'prueba':
                console.log("funco!!!")          
            return;
        }
    }

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

                    {partida.jugadores.length < 2 && logueado.creador ? ( 
                        <th>Esperando que se unan mas jugadores</th>
                    ) : (  
                        <th>Ya puede iniciar la partida</th>  
                    )}
                    
                </tr>
            </thead>
            <tbody>
                {partida.jugadores.length > 0 ? (
                    partida.jugadores.map((jugador) => (
                        <tr key={jugador.id_jugador} className = "table-secondary">                   
                            
                            <td>{jugador.apodo}</td>
                            {logueado.creador && partida.jugadores.length > 1
                             && (jugador.id_jugador === logueado.id_jugador) ? (
                                <td><IniciarPartida id={partida.id_partida} id_J={logueado.id_jugador} /></td>

                            ):(

                                <td></td>

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