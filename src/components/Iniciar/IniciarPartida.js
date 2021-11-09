import React from 'react';
import { useHistory } from 'react-router-dom';


const IniciarPartida = (parametros) => {

  const history= useHistory();

   const iniciar = async () => {
      await fetch(`http://localhost:8000/partidas/${parametros.id}?id_jugador=${parametros.id_J}` ,{
      method : 'PATCH',
      body: JSON.stringify({
      id_jugador:parseInt(parametros.id_J),
      id_partida:parseInt(parametros.id)})
     })
     history.push(`/juego`);
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

