import React from 'react';
import { useParams } from 'react-router';

const IniciarPartida = () => {

  const {id,id_J}=useParams();

  const fillData = (result) => {
    let ele = document.getElementById('container');
    ele.innerHTML = result;
}

  const iniciar = async () => {
      const data = await fetch(`http://localhost:8000/partidas/${id}?id_jugador=${id_J}` ,{
      method : 'PATCH',
      body: JSON.stringify({
      id_jugador:parseInt(id_J),
      id_partida:parseInt(id)
      }) 
    })
    let resultado = await data.json()
    console.log(resultado)
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

