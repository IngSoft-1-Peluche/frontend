import React from 'react';

const BotonDado = (params) => {

  const tirarDado = (event) => {
    const data = JSON.stringify({ action: 'tirar_dado', data: '' })
    params.ws.send(data)
    event.preventDefault()
  }

  return (
    <button onClick={tirarDado}>
      Tirar el dado
    </button>
  )
}

export default BotonDado;
