import React, { useState } from 'react';
import SalaEspera from './SalaEspera';

const PreSala = () => {

    var usuario = JSON.parse(sessionStorage.getItem('logueado'));

   const [ws ,setWs] = useState(new WebSocket(`ws://localhost:8000/ws/${usuario.id_jugador}`))

   

    return(
        <SalaEspera ws={ws} /> 
    )
}

export default PreSala;

