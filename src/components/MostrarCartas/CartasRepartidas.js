import React from 'react';
import './CartasRepartidas.css'

const CartasRepartidas = (params) => {

  var jugador = JSON.parse(sessionStorage.getItem('logueado'));

  const MostrarCartas = () => {

    return (params.cartas.map((carta) => (
      <div className="flex-div" key={carta}>
        <img className="brightness" src={`/assets/${carta}.png`} width="90" height="137" alt="cartas del jugador"/>
        <p>{carta}</p>
      </div>
    )))
  }

  return (

    <>
      <h4>Cartas de {jugador.apodo} </h4>
      <div>
        <div className="flex-container">
          <MostrarCartas />
        </div>
      </div>
    </>

  )
}

export default CartasRepartidas;
