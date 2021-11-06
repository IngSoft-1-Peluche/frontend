import React, { useState } from 'react';
import './CartasRepartidas.css'

const CartasRepartidas = () => {
 
  const [datos, setToggle] = useState('');


  const MostrarCartas = () => {
    return (datos.cartas.map(person => (
      <div className="flex-div" key={person.nombre}>
        <img className="brightness" src={`/assets/${person.nombre}.png`} width="90" height="137" />
        <p>{person.nombre}</p>
      </div>
    )))
  }
  return (
    <div>
      <h4>Cartas</h4>
      <div className="flex-container">
        <MostrarCartas />
      </div>
    </div>
  )
}

export default CartasRepartidas;
