import React from 'react';


const IniciarPartida = (parametros) => {

  const iniciar = async () => {
    await fetch(`http://localhost:8000/partidas/${parametros.id}?id_jugador=${parametros.id_J}` ,{
      method : 'PATCH',
      body: JSON.stringify({
      id_jugador:parseInt(parametros.id_J),
      id_partida:parseInt(parametros.id)})
  })

  const data = JSON.stringify({action: 'iniciar_partida', data:''})
    parametros.ws.send(data)
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

