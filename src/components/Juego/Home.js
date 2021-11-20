import React from 'react';
import Juego from './Juego';

const Home = () => {

    var usuario = JSON.parse(sessionStorage.getItem('logueado'));
    const ws = new WebSocket(`ws://localhost:8000/ws/${usuario.id_jugador}`)

    return (
        <Juego ws={ws} />
    )
}

export default Home;



