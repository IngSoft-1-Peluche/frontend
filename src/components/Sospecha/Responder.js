import React, { useState } from 'react';
import './Responder.css'

const ResponderSospecha = () => {

  var jugador = JSON.parse(sessionStorage.getItem('logueado'));

  const [eleg, setEleg] = useState({ nombre: '', elegido: false }); 

  const datosPartidasDefault =
  {
    nombre_sospechador: '',
    cartas_sospechadas: []
  }

  const [sospecha, setSospecha] = useState(datosPartidasDefault);

  const [responder, setResponder] = useState(false)

  var socket = useState(new WebSocket(`ws://localhost:8000/ws/${jugador.id_jugador}`));

  const [ws, setWs] = setWs(socket)

  console.log(sospecha)

  ws.onmessage = function (event) {

    const evento = JSON.parse(event.data)

    switch(evento.action){

      case 'cartas_sospechadas':                     
        const datos= evento.data.cartas_sospechadas
        setSospecha(datos) 
      return;

      case 'no_carta':   
        setResponder(false)  
      return;       

      case 'muestra_carta':
        setResponder(true)
      return;         

    }
  }

  const respuesta_sospecha = () => {

    const data = JSON.stringify({action: 'respuesta_sospecha', data: eleg.nombre})
    console.log(data)
    ws.send(data)

  }


  return (

    <div className="fondo">
      
      <h4>El jugador {sospecha.nombre_sospechador} sospecho lo siguiente:</h4>
      
      {!responder && <p>Sospecha en curso</p>}
      
      {(sospecha.cartas_sospechadas.map(carta => (
        <div className="flex-div" key={carta}>
          <p>{carta}</p>
         
          {responder ? (
            <div>
            <img className="brightness" src={`/assets/${carta}.png`} width="90" height="137" 
                                            onClick={() => setEleg({ nombre: carta, elegido: true })} />
            
            {!eleg.elegido && <p>Elegí una carta!!! </p>}
            {eleg.elegido && <button onClick={respuesta_sospecha} >
               Elegir {eleg.nombre}
              </button>}
            </div>
          ) : (
            <div>
              <img className="brightness" src={`/assets/${carta}.png`} width="90" height="137" />
            </div>
          )
          } 
        </div>)))}      
    </div>
  )
}

export default ResponderSospecha;
