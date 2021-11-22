import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

const PagInicio = function () {
  return (

    <nav>
      <h1 className="bg-dark text-white">Juego Misterio</h1>
      <ul>
        <Link to="/FormCrear" className="btn btn-dark">Crear Partida</Link>
      </ul>
      <ul>
        <Link to="/PartidasDis" className="btn btn-dark">Unirse a partida creada</Link>
      </ul>
    </nav>
  );
};

export default PagInicio;
