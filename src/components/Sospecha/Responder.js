import React, { useState } from 'react';
import './Responder.css'

const ResponderSospecha = () => {

  const [eleg, setEleg] = useState({ nombre: '', elegido: false });

  const datosPartidasDefault =
  {
    nombre_jugador: 'Juan',
    cartas: [{ nombre: 'Momia' }, { nombre: 'Biblioteca' }, { nombre: 'Mayordomo' }]
  }

  const [datos, setToggle] = useState(datosPartidasDefault);
  

  const MostrarSospecha = () => {
    return (datos.cartas.map(person => (
      <div className="flex-div" key={person.nombre}>
        <img className="brightness" src={`/assets/${person.nombre}.png`} width="90" height="137" onClick={() => setEleg({ nombre: person.nombre, elegido: true })} />
        <p>{person.nombre}</p>
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
      {eleg.elegido && <button >
        Carta elegida : {eleg.nombre}
      </button>}

    </div>
  )
}

export default ResponderSospecha;
