import React, { useState } from 'react';
import PreSala from './PreSala';

const WsSala = (params) => {

    var usuario = JSON.parse(sessionStorage.getItem('logueado'));
    const [ws ,setWs] = useState(new WebSocket(`ws://localhost:8000/ws/${usuario.id_jugador}`))

    return(
            <PreSala ws={ws}/>
    )
}

export default WsSala;