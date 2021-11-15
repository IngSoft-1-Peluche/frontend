import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';


const SalaEspera = (params) => {


    const history= useHistory();

    var logueado = JSON.parse(sessionStorage.getItem('logueado'));

    const ws = params.ws

    const partidaDefault = {
        jugador_conectado: null,
        id_partida: null,
        nombre_partida: null,
        jugadores: []
    }

   
    const [partida, setPartida] = useState(partidaDefault); 
   

        ws.onmessage = function(event) {
        
            const info = JSON.parse(event.data)
    
            switch(info.action) {
                
                case 'nuevo_jugador':
                    
                    const datos = info.data
                    setPartida(datos) 

                return;
            
                case 'iniciada':
                    history.push("/juego")
                return;

                case 'jugador_desconectado_lobby':
                    
                    const desconecta = info.data
                    setPartida(desconecta) 
                return;

            }

        }

    const iniciar = () => {

        const mensaje = JSON.stringify({action: 'iniciar_partida', data:''})
        ws.send(mensaje)
    }

    return (

        <div>
            <h2 className="bg-dark text-white">
                Sala de espera de la partida {partida.nombre_partida} 
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
                        <></>  
                    )}
                    {!logueado.creador ? (

                        <th>Espere a que se inicie la partida</th>
                    ):(
                        <></>
                    )}
                    <th>  {partida.jugadores.length > 1 && logueado.creador ? (
                            <button className= "btn btn-primary" onClick={iniciar}>Iniciar partida</button>
                        ) : (
                            <></>
                        )} 
                    </th>
                </tr>
            </thead>
            <tbody>
                {partida.jugadores.length > 0 ? (
                    partida.jugadores.map((jugador) => (
                        <tr key={jugador} className = "table-secondary">                   
                            
                            <td>{jugador}</td>
                            <td></td>
                        
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