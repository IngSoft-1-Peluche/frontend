import React, { useState } from 'react';
import SalaEspera from './SalaEspera';

import { useHistory } from 'react-router-dom';

const PreSala = () => {

    var usuario = JSON.parse(sessionStorage.getItem('logueado'));

    const history= useHistory();

   const [ws ,setWs] = useState(new WebSocket(`ws://localhost:8000/ws/${usuario.id_jugador}`))

   ws.onerror = () => {
       console.log("jugador desconectado")
       history.push("/")
       return (
           <h1>El jugador creador de la partida ha avandonado la sala</h1>
       )
   }

    return(
        <SalaEspera ws={ws} /> 
    )
}

export default PreSala;

