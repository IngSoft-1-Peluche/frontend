import React, { useState } from 'react';
import './Responder.css'

const ResponderSospecha = (params) => {

  

  const ws = params.ws

  const [eleg, setEleg] = useState({ nombre: '', elegido: false }); 
  const [sospecha_en_curso, setSospechaEnCurso] = useState(false)
  const sospecha = params.sospecha
  const responder = params.responder
  if(sospecha.nombre_sospechador != '' && !sospecha_en_curso){
    setSospechaEnCurso(true) 
  }

  const respuesta_sospecha = () => {

    const data = JSON.stringify({action: 'respuesta_sospecha', data: eleg.nombre})
    console.log(data)
    ws.send(data)
    setSospechaEnCurso(false) //Esto no funciona porque nunca nadie me avisa que ya se realizo la sopecha y la linea 15 se vuelve a ejecutar

  }

  return (
    <div>
      { sospecha_en_curso &&
    <div className="fondo_respuesta">
      
      <h4>El jugador {sospecha.nombre_sospechador} sospecho lo siguiente:</h4>
      
      {responder ? <p>Te toca responder la sospecha, selecciona que carta deseas mostrar:</p> : <p>Sospecha en curso</p>}
      
      {(sospecha.cartas_sospechadas.map(carta => (
        <div className="flex-div" key={carta}>
          <p>{carta}</p>
         
          {responder ? (
            <div>
            <img className="brightness" src={`/assets/${carta}.png`} width="90" height="137" 
                                            onClick={() => setEleg({ nombre: carta, elegido: true })} />
            
            </div>
          ) : (
            <div>
              <img className="brightness" src={`/assets/${carta}.png`} width="90" height="137" />
            </div>
          )
        } 
        </div>)))}      
        {!eleg.elegido && <p>Elegí una carta!!! </p>} 
        {eleg.elegido && <button onClick={respuesta_sospecha} >
              Elegir {eleg.nombre}
        </button>}
    </div>
      }
    </div>
  )
}

export default ResponderSospecha;
