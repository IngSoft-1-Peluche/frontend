import React, { useState } from 'react';
import Juego from './Juego';

const Home = (params) => {

    var usuario = JSON.parse(sessionStorage.getItem('logueado'));
    const [ws ,setWs] = useState(new WebSocket(`ws://localhost:8000/ws/${usuario.id_jugador}`))

    return(
            <Juego ws={ws}/>
    )
}

export default Home;



