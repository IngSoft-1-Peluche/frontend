import React, { useState } from 'react';
import './Responder.css'

const ResponderSospecha = (params) => {

  const ws = params.ws
  const sospecha_en_curso = params.sospecha_en_curso

  const [eleg, setEleg] = useState({ nombre: '', elegido: false });

  const sospecha = params.sospecha
  const responder = params.responder
  const cartas = params.cartas
  if (responder) {
    sospecha.cartas_sospechadas = sospecha.cartas_sospechadas.filter(carta => (cartas.includes(carta)))
  }

  const respuesta_sospecha = () => {
    const data = JSON.stringify({ action: 'respuesta_sospecha', data: eleg.nombre })
    ws.send(data)
    setEleg(false)
  }
  return (
    <div>
      {sospecha_en_curso &&
        <div className="fondo_respuesta">

          <h4>El jugador {sospecha.nombre_sospechador} sospecho lo siguiente:</h4>

          {responder ? <p>Te toca responder la sospecha, selecciona que carta deseas mostrar:</p> : <p>Sospecha en curso</p>}
          <div className="flex-container">
            {(sospecha.cartas_sospechadas.map(carta => (
              <div className="flex-div" key={carta}>

                {responder ? (
                  <div>
                    <img className="brightness" src={`/assets/${carta}.png`} width="90" height="137" alt="cartas sospechadas"
                      onClick={() => setEleg({ nombre: carta, elegido: true })} />
                    <p>{carta}</p>
                  </div>
                ) : (
                  <div>
                    <img className="brightness" src={`/assets/${carta}.png`} width="90" height="137" alt="cartas sospechadas" />
                    <p>{carta}</p>
                  </div>
                )
                }
              </div>)))
            }
          </div>

          {eleg.elegido && <button onClick={respuesta_sospecha} >
            Elegir {eleg.nombre}
          </button>}
          {!responder && <h4>Esperando la respuesta de {sospecha.nombre_sospechoso}</h4>}
        </div>
      }
    </div>
  )
}
export default ResponderSospecha;
