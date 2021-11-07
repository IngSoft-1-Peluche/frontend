import React, { useState } from 'react';
import './CartasRepartidas.css'

const CartasRepartidas = () => {


  var jugador = JSON.parse(sessionStorage.getItem('logueado'));

  const [ws, setWs] = useState(new WebSocket(`ws://localhost:8000/ws/${jugador.id_jugador}`))

  const [cartasJu, setCartasJu] = useState([null]);

  const[visible, setVisible] = useState(false)

  ws.onmessage = function (event) {

    const evento = JSON.parse(event.data)

    switch(evento.action){

      case 'mostrar_cartas':
        const datos = evento.data.cartas
        setCartasJu(datos)
      return;
    }
  }

  const mostrar = (event) => {
    const data = JSON.stringify({action: 'mostrar_cartas', data:''})
    ws.send(data)
    setVisible(true)
  }

  const OcultarCartas = () => {
    setVisible(false)
  }

  

  const MostrarCartas = () => {
    
    return (cartasJu.map((carta) => (
      <div className="flex-div" key={carta}>
        <img className="brightness" src={`/assets/${carta}.png`} width="90" height="137" />
        <p>{carta}</p>
      </div>
    )))
  }

  return (

    <div>
    <h4>Cartas de {jugador.apodo} </h4>

      {visible && cartasJu.length > 1 ? (

        <div>
          <div className="flex-container"><MostrarCartas /></div>
          <button onClick={OcultarCartas}>Ocultar cartas</button>
        </div>
                                

      ):(

        <button onClick={mostrar}>Mostrar cartas</button>

      )}

    </div>
    
  )
}

export default CartasRepartidas;
