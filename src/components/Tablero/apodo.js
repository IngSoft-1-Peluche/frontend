import React from 'react';

const ApodoJugadores = (params) => {
    return (
        params.estado.map(jugador => (
            <h4 key={jugador.apodo}> {jugador.apodo} :
                <div className="dot2" style={{ backgroundColor: jugador.color }}>  </div>
                {jugador.en_turno && <p> En turno</p>}
            </h4>
        )))
}

export default ApodoJugadores;
