import React from 'react';

const BotonTerminarTurno = (params) => {

    const terminarTurno = (event) => {
        const data = JSON.stringify({ action: 'terminar_turno', data: '' })
        params.ws.send(data)
        event.preventDefault()
    }

    return (
        <button onClick={terminarTurno}>
            Terminar turno
        </button>
    )
}

export default BotonTerminarTurno;
