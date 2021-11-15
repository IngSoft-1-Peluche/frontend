import React, { useState } from 'react';
import './CartasRepartidas.css'

const CartasRepartidas = (params) => {


  var jugador = JSON.parse(sessionStorage.getItem('logueado'));

  const ws = params.ws

  

  const[visible, setVisible] = useState(false)


  const mostrar = (event) => {
    const data = JSON.stringify({action: 'mostrar_cartas', data:''})
    ws.send(data)
    setVisible(true)
  }

  const OcultarCartas = () => {
    setVisible(false)
  }

  

  const MostrarCartas = () => {
    
    return (params.cartas.map((carta) => (
      <div className="flex-div" key={carta}>
        <img className="brightness" src={`/assets/${carta}.png`} width="90" height="137" />
        <p>{carta}</p>
      </div>
    )))
  }

  return (

    <>
    <h4>Cartas de {jugador.apodo} </h4>

      {visible && params.cartas.length > 1 ? (

        <div>
          <div className="flex-container"><MostrarCartas /></div>
          <button onClick={OcultarCartas}>Ocultar cartas</button>
        </div>
                                

      ):(

        <button onClick={mostrar}>Mostrar cartas</button>

      )}

    </>
    
  )
}

export default CartasRepartidas;
