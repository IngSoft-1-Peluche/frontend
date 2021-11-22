import React from 'react';
import PreSala from './PreSala';

const WsSala = function () {
  const usuario = JSON.parse(sessionStorage.getItem('logueado'));
  const ws = new WebSocket(`ws://localhost:8000/ws/${usuario.id_jugador}`);

  return (
    <PreSala ws={ws} />
  );
};

export default WsSala;
