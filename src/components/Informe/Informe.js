import React from 'react';
import './Informe.css';

const Informe = () => {

  const lista = [["Conde", "Hombre Lobo", "Biblioteca"], ["Condesa", "Fantasma", "Salon"], ["Mayordomo", "Momia", "Panteon"], ["Ama de llaves", "Drácula", "Bodega"], ["Jardinero", "Frankenstein", "Vestibulo"], ["Doncella", "Dr Jekyll Mr Hyde", "Cochera"]]
  const Fila = (params) => {
    return (
      lista[params.numero].map(elem =>
        <>
          <th>{elem}</th>
          <th><input type="radio"  name={elem}></input></th>
          <th><input type="radio" name={elem}></input></th>
          <th><input type="radio" name={elem}></input></th>
        </>
      )
    )
  }

  return (
    <>
      <table>
        <tr Style={{Color: "yellow"}}>
          <th>Victima</th>
          <th>?</th>
          <th>X</th>
          <th>O</th>
          <th>Asesino</th>
          <th>?</th>
          <th>X</th>
          <th>O</th>
          <th>Recinto</th>
          <th>?</th>
          <th>X</th>
          <th>O</th>
        </tr>
        <tr>
          <Fila numero={0} />
        </tr>
        <tr>
          <Fila numero={1} />
        </tr>
        <tr>
          <Fila numero={2} />
        </tr>
        <tr>
          <Fila numero={3} />
        </tr>
        <tr>
          <Fila numero={4} />
        </tr>
        <tr>
          <Fila numero={5} />
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>Alcoba</th>
          <th><input type="radio" name="Alcoba"></input></th>
          <th><input type="radio" name="Alcoba"></input></th>
          <th><input type="radio" name="Alcoba"></input></th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th>Laboratorio</th>
          <th><input type="radio" name="Laboratorio"></input></th>
          <th><input type="radio" name="Laboratorio"></input></th>
          <th><input type="radio" name="Laboratorio"></input></th>
        </tr>
      </table>
    </>
  )
}

export default Informe;