import React, { useState, useEffect, find } from 'react';
import { useParams } from 'react-router';


const ListarJugadores = () => {
  const datosPartidasDefault = {id_partida: 0, nombre: '', jugadores: [{
    "id_jugador": 1,
    "apodo": "",
    "orden": 1,
    "en_turno": true
  }]
};
const {id}=useParams();

  const [lista, setLista] = useState(datosPartidasDefault);

  useEffect(() => {
    obtenerDatos()
  }, [])
  

  const obtenerDatos = async () => {
    const data = await fetch(`http://localhost:8000/partidas/${id}`)
    const jugador = await data.json()
    setLista(jugador)
    console.log(jugador)
  }

  useEffect(() => {
    obtenerDatos()
  }, [])

    
  const todos = lista.jugadores.sort(function (a, b) {
    return a.orden - b.orden;
  });

  let myList = [];
  myList.push(todos.find(element => element.en_turno === true));
  let index = myList[0].orden
  console.log(index)
  for (var i = index + 1 ; i < todos.length +1 ; i++){
  myList.push(todos.find(element => element.orden === i));
  };
  for (var j = 1 ; j < index ; j++){
    myList.push(todos.find(element => element.orden === j));
  }
  console.log(myList)
  
  return (
    <div>
      <ol>
        {myList.map(person => (
          <li key={person.id_jugador}>{person.apodo}</li>
        ))}
      </ol>
    </div>
  )

}

export default ListarJugadores;
