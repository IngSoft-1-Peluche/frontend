import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const BotonDado = function (params) {
  const tirarDado = (event) => {
    const data = JSON.stringify({ action: 'tirar_dado', data: '' });
    params.ws.send(data);
    event.preventDefault();
  };

  return (
    <button className="btn btn-primary" onClick={tirarDado}>
      Tirar el dado
    </button>
  );
};

export default BotonDado;
