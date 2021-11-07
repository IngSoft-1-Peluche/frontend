import React, { useState } from 'react';
import './Responder.css'

const ResponderSospecha = () => {

  const [eleg, setEleg] = useState({ nombre: '', elegido: false }); //carta elegida para responder la sospecha

  const datosPartidasDefault =
  {
    nombre_jugador: '',
    cartas: [{ nombre: '' }, { nombre: '' }, { nombre: '' }]
  }

  const [sospecha, setSospecha] = useState(datosPartidasDefault);

  const [ws, setWs] = useState(new WebSocket(`ws://localhost:8000/ws/${jugador.id_jugador}`));



  ws.onmessage = function (event) {

    const evento = JSON.parse(event.data)

    switch(evento.action){

      case 'cartas_sospechadas':
        const datos= evento.data.cartas
        setSospecha(datos)
      return;
      
      default:
        return;
    }
  }

  const respuesta_sospecha = () => {

    const data = JSON.stringify({action: 'respuesta_sospecha', data: eleg})
    ws.send(data)

  }


  const MostrarSospecha = () => {
    return (sospecha.cartas.map(carta => (
      <div className="flex-div" key={carta.nombre}>
        <img className="brightness" src={`/assets/${carta.nombre}.png`} width="90" height="137" 
                                          onClick={() => setEleg({ nombre: carta.nombre, elegido: true })} />
        <p>{carta.nombre}</p>
      </div>
    )))
  }


  return (

    <div className="fondo">
      <h4>El jugador {datos.nombre_jugador} sospecha que tenes alguna de estas cartas:</h4>
      <div className="flex-container">
        <MostrarSospecha />
      </div>
      {!eleg.elegido && <p>Elegí una carta!!! </p>}
      {eleg.elegido && <button onClick={respuesta_sospecha} >
        Carta elegida : {eleg.nombre}
      </button>}
    </div>
  )
}

export default ResponderSospecha;
