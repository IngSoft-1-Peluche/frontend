import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';



const Acusar = (params) => {

  const [cartasAcus, SetCartasAcus] = useState([null])
  const [elegidas, SetElegidas] = useState(false)

  const ws = params.ws

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (info) => {

    SetCartasAcus(info)
    const data = JSON.stringify({action:'acusar', data: info})
    console.log(data)
    SetElegidas(true)
    ws.send(data)
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="carta_victima">Elegí una víctima:</label>
      <select {...register("carta_victima")} >
        <option value="Conde">Conde</option>
        <option value="Condesa">Condesa</option>
        <option value="Ama de llaves">Ama de llaves</option>
        <option value="Mayordomo">Mayordomo</option>
        <option value="Doncella">Doncella</option>
        <option value="Jardinero">Jardinero</option>
      </select>

      <div>
      <label htmlFor="carta_monstruo">Elegí un monstruo:</label>
      <select {...register("carta_monstruo")} >
        <option value="Dracula">Drácula</option>
        <option value="Frankenstein">Frankenstein</option>
        <option value="Hombre lobo">Hombre lobo</option>
        <option value="Fantasma">Fantasma</option>
        <option value="Momia">Momia</option>
        <option value="Dr. Jekyll Hyde">Dr. Jekyll Hyde</option>
      </select>
      </div>

      <div>
      <label htmlFor="carta_recinto">Elegí un recinto:</label>
      <select {...register("carta_recinto")} >
        <option value="Alcoba">Alcoba</option>
        <option value="Biblioteca">Biblioteca</option>
        <option value="Bodega">Bodega</option>
        <option value="Cochera">Cochera</option>
        <option value="Laboratorio">Laboratorio</option>
        <option value="Panteon">Panteon</option>
        <option value="Salon">Salon</option>
        <option value="Vestibulo">Vestibulo</option>
      </select>
      </div>

      <input type="submit" value="Realizar acusacion" />
      {elegidas ? (
        <h4>Usted eligio las cartas: {cartasAcus.carta_monstruo} , {cartasAcus.carta_victima} y {cartasAcus.carta_recinto}</h4>
        ):(<h4>Elija</h4>)}
    </form>
  );
}

export default Acusar ;