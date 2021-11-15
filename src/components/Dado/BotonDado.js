import React, { useState } from 'react';

const BotonDado = (params) => {

return (
    <>
      <h2>Sos el jugador número: <span id="ws-id">{params.id_jugador}</span></h2>
      {params.turno && <button onClick={params.tirar}>
       Tirar el dado
      </button>}
      <h1>{params.tirado}</h1>
      {params.pasarTurno && <button onClick={params.terminar}>
       Terminar turno
      </button>}
    </>  
    )
}

export default BotonDado;
