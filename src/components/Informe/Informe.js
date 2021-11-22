
import React, { useState, useEffect } from 'react';
import './Informe.css';

const Informe = () => {

  const datosPartidasDefault = { Conde: "?", Hombre_Lobo: "?", Biblioteca: "?", Condesa: "?", Fantasma: "?", Salon: "?", Mayordomo: "?", Momia: "?", Panteon: "?", Ama_de_llaves: "?", Drácula: "?", Bodega: "?", Jardinero: "?", Frankenstein: "?", Vestibulo: "?", Doncella: "?", Dr_Jekyll_Mr_Hyde: "?", Cochera: "?", Alcoba: "?", Laboratorio: "?"  }
  const [estado, setEstado] = useState(datosPartidasDefault)

  const handleclick = (event) => {
    setEstado(prevState => ({
      ...prevState,
      [event.target.id]: (estado[event.target.id]=="?") ? "X" : (estado[event.target.id]=="X" ? "0" : "?")
  }))
  }

  return (
    <>
      <table>
        <tbody>
          <tr >
            <th>Victima</th>
            <th>?/X/O</th>
            <th>Asesino</th>
            <th>?/X/O</th>
            <th>Recinto</th>
            <th>?/X/O</th>
          </tr>
          <tr>
            <th >Conde</th>
            <th id="Conde" onClick={handleclick}>{estado.Conde}</th>
            <th>Hombre Lobo</th>
            <th id="Hombre_Lobo" onClick={handleclick}>{estado.Hombre_Lobo}</th>
            <th>Biblioteca</th>
            <th id="Biblioteca" onClick={handleclick}>{estado.Biblioteca}</th>
          </tr>
          <tr>
            <th>Condesa</th>
            <th id="Condesa" onClick={handleclick}>{estado.Condesa}</th>
            <th>Fantasma</th>
            <th id="Fantasma" onClick={handleclick}>{estado.Fantasma}</th>
            <th>Salon</th>
            <th id="Salon" onClick={handleclick}>{estado.Salon}</th>
          </tr>
          <tr>
            <th>Mayordomo</th>
            <th id="Mayordomo" onClick={handleclick}>{estado.Mayordomo}</th>
            <th>Momia</th>
            <th id="Momia" onClick={handleclick}>{estado.Momia}</th>
            <th>Panteon</th>
            <th id="Panteon" onClick={handleclick}>{estado.Panteon}</th>
          </tr>
          <tr>
            <th>Ama de llaves</th>
            <th id="Ama_de_llaves" onClick={handleclick}>{estado.Ama_de_llaves}</th>
            <th>Drácula</th>
            <th id="Drácula" onClick={handleclick}>{estado.Drácula}</th>
            <th>Bodega</th>
            <th id="Bodega" onClick={handleclick}>{estado.Bodega}</th>
          </tr>
          <tr>
            <th>Jardinero</th>
            <th id="Jardinero" onClick={handleclick}>{estado.Jardinero}</th>
            <th>Frankenstein</th>
            <th id="Frankenstein" onClick={handleclick}>{estado.Frankenstein}</th>
            <th>Vestibulo</th>
            <th id="Vestibulo" onClick={handleclick}>{estado.Vestibulo}</th>
          </tr>
          <tr>
            <th>Doncella</th>
            <th id="Doncella" onClick={handleclick}>{estado.Doncella}</th>
            <th>Dr Jekyll Mr Hyde</th>
            <th id="Dr_Jekyll_Mr_Hyde" onClick={handleclick}>{estado.Dr_Jekyll_Mr_Hyde}</th>
            <th>Cochera</th>
            <th id="Cochera" onClick={handleclick}>{estado.Cochera}</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Alcoba</th>
            <th id="Alcoba" onClick={handleclick}>{estado.Alcoba}</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Laboratorio</th>
            <th id="Laboratorio" onClick={handleclick}>{estado.Laboratorio}</th>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Informe;
