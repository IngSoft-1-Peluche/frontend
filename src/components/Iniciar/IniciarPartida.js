import React from 'react';

const IniciarPartida = (parametros) => {

  const fillData = (result) => {
    let ele = document.getElementById('container');
    ele.innerHTML = result;
}

  const iniciar = async () => {
    const data = await fetch(`http://localhost:8000/partidas/${parametros.id}?id_jugador=${parametros.id_J}` ,{
      method : 'PATCH',
      body: JSON.stringify({
      id_jugador:parseInt(parametros.id_J),
      id_partida:parseInt(parametros.id)
      }) 
    })
    let resultado = await data.json()
    resultado = resultado["detail"]
    if (resultado === undefined){
      resultado = "Partida creada"
    }
    fillData(resultado)
  }

  return (
    <div>
      <button onClick={iniciar}>
        Iniciar partida
      </button>
      <div id='container'>
    	  <p>
        	
        </p>
      </div>
    </div>
    
  );
}

export default IniciarPartida;

