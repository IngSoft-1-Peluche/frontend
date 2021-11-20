import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';



const Sospechar = (params) => {


  const [cartasSos, SetCartasSos] = useState([null])

  const [elegidas, SetElegidas] = useState(false)

  const ws = params.ws

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (info) => {

    SetCartasSos(info)
    const data = JSON.stringify({ action: 'sospechan', data: info })
    SetElegidas(true)
    ws.send(data)
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
          <option value="Frankestein">Frankestein</option>
          <option value="Hombre lobo">Hombre lobo</option>
          <option value="Fantasma">Fantasma</option>
          <option value="Momia">Momia</option>
          <option value="Dr. Jekyll Hyde">Dr. Jekyll Hyde</option>
        </select>
      </div>
      <input type="submit" value="Realizar sospecha" />
      {elegidas ? (
        <h4>Usted eligio las cartas: {cartasSos.carta_monstruo} y {cartasSos.carta_victima}</h4>
      ) : (<h4>Elija</h4>)}
    </form>

  );
}

export default Sospechar;