import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import IniciarPartida from '../Iniciar/IniciarPartida';



const SalaEspera = () => {

    const { id_p }= useParams();

    const history= useHistory();

    var logueado = JSON.parse(sessionStorage.getItem('logueado'));

    const ws = new WebSocket(`ws://localhost:8000/espera/${logueado.id_jugador}`)
       

    const [jugadores, setJugadores] = useState()  //aca voy almacenando los nuevos jugadores que se unen


    ws.onmessage = function(event) {
        const info = JSON.parse(event.data)
        switch(info.action) {
            case 'nuevo_jugador':
                setJugadores(info.data.jugador)         
            return;
        }
        switch(info.action){
            case 'iniciar':
                history.push("/juego")

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

                    {jugadores.length < 2 && logueado.creador ? ( 
                        <th>Esperando que se unan mas jugadores</th>
                    ) : (  
                        <th></th>  
                    )}
                    {!logueado.creador} ? (
                        <th>Espere a que se inicie la partida</th>
                    ):(
                        <th></th>
                    )
                </tr>
            </thead>
            <tbody>
                {jugadores.length > 0 ? (
                    jugadores.map((jugador) => (
                        <tr key={jugador.id_jugador} className = "table-secondary">                   
                            
                            <td>{jugador.apodo}</td>
                            {logueado.creador && jugadores.length > 1
                             && (jugador.id_jugador === logueado.id_jugador) ? (

                                <td><IniciarPartida id={id_p} id_J={logueado.id_jugador} ws={ws}/></td> //mandar el ws como arg y de ahi enviale que inicie la partida??

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