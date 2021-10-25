import React, { useState } from 'react';
import { useParams } from 'react-router';

const IniciarPartida = () => {

  const {id,id_J}=useParams();

  const iniciar = async () => {
    const data = await fetch(`http://localhost:8000/partidas/${id}?id_jugador=${id_J}` ,{
      method : 'PATCH',
      body: JSON.stringify({
      id_jugador:parseInt(id_J),
      id_partida:parseInt(id)
      }) 
    })
  }

  return (
    <div>
      <button onClick={iniciar}>
        Iniciar partida
      </button>
    </div>
  );
}

export default IniciarPartida;

