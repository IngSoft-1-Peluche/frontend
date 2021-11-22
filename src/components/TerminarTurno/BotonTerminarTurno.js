import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const BotonTerminarTurno = function (params) {
  const terminarTurno = (event) => {
    const data = JSON.stringify({ action: 'terminar_turno', data: '' });
    params.ws.send(data);
    event.preventDefault();
  };

  return (
    <button className="btn btn-primary" onClick={terminarTurno}>
      Terminar turno
    </button>
  );
};

export default BotonTerminarTurno;
