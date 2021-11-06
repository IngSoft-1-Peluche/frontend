import React, { useState, useEffect } from 'react';
import './CartasRepartidas.css'

const CartasRepartidas = () => {

  var jugador = JSON.parse(sessionStorage.getItem('logueado'));

  const [ws, setWs] = useState(new WebSocket(`ws://localhost:8000/ws/${jugador.id_jugador}`))

  const [cartasJu, setCartasJu] = useState(['']);

  ws.onmessage = function (event) {

    const evento = JSON.parse(event.data)

    switch(evento.action){

      case 'mostrar_cartas':
        const datos = evento.data.cartas
        setCartasJu(datos)
      return;
    }
  }

  const mostrar = () => {
    const data = JSON.stringify({action: 'repartir', data:''})
    wd.send(data)
  }

  useEffect(() => {
    mostrar()
  },[])


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
      <h4>Cartas</h4>
      <div className="flex-container">
        <MostrarCartas />
      </div>
    </div>
  )
}

export default CartasRepartidas;
