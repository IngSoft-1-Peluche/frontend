import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const SalaEspera = function (params) {
  const logueado = JSON.parse(sessionStorage.getItem('logueado'));

  const { ws } = params;

  const { partida } = params;

  const iniciar = () => {
    const mensaje = JSON.stringify({ action: 'iniciar_partida', data: '' });
    ws.send(mensaje);
  };

  return (

    <div>
      <h2 className="bg-dark text-white">
        Sala de espera de la partida
        {' '}
        {partida.nombre_partida}
      </h2>
      <h2 className="bg-dark text-white">
        Jugador :
        {' '}
        {logueado.apodo}
      </h2>
      <table className="table table-striped table-dark">

        <thead className="thead-dark">
          <tr>
            <th scope="col">Apodo</th>

            {partida.jugadores.length < 2 && logueado.creador
              ? (
                <th>Esperando que se unan mas jugadores</th>
              )
              : (
                <></>
              )}
            {!logueado.creador
              ? (

                <th>Espere a que se inicie la partida</th>
              )
              : (
                <></>
              )}
            <th>
              {' '}
              {partida.jugadores.length > 1 && logueado.creador
                ? (
                  <button className="btn btn-primary" onClick={iniciar}>Iniciar partida</button>
                )
                : (
                  <></>
                )}
            </th>
          </tr>
        </thead>
        <tbody>
          {partida.jugadores.length > 0
            ? (
              partida.jugadores.map((jugador, i) => (
                <tr key={i} className="table-secondary">

                  <td>{jugador}</td>
                  <td />
                  <td />

                </tr>
              ))
            )
            : (
              <tr>
                <td colSpan={3}>No hay jugadores</td>
              </tr>
            )}
        </tbody>
      </table>
    </div>
  );
};

export default SalaEspera;
