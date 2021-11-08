import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';



const Sospechar = () => {

  var jugador = JSON.parse(sessionStorage.getItem('logueado'));

  const [ws, setWs] = useState(new WebSocket(`ws://localhost:8000/ws/${jugador.id_jugador}`));

  const [cartasSos, SetCartasSos] = useState([null])

  const [elegidas, SetElegidas] = useState(false)
  
  const {
    register,
    handleSubmit,
  } = useForm();


  const onSubmit = async (info) => {
    
    SetCartasSos(info)
    const data = JSON.stringify({action:'sospechan', data: info})
    ws.send(data)
    console.log(data)
    SetElegidas(true) 
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="nombre_victima">Elegí una víctima:</label>
      <select {...register("carta_victima")} >
        <option value="Conde">Conde</option>
        <option value="Condesa">Condesa</option>
        <option value="Ama de llaves">Ama de llaves</option>
        <option value="Mayordomo">Mayordomo</option>
        <option value="Doncella">Doncella</option>
        <option value="Jardinero">Jardinero</option>
      </select>
      <div>
      <label htmlFor="nombre_monstruo">Elegí una monstruo:</label>
      <select {...register("carta_monstruo")} >
        <option value="Drácula">Drácula</option>
        <option value="Frankestein">Frankestein</option>
        <option value="Hombre lobo">Hombre lobo</option>
        <option value="Fantasma">Fantasma</option>
        <option value="Momia">Momia</option>
        <option value="Dr. Jekyll Hyde">Dr. Jekyll Hyde</option>
      </select>
      </div>
      <input type="submit" value="Realizar sospecha" />
      {elegidas ? (
        <h1>Usted eligio las cartas: {cartasSos.carta_monstruo} y {cartasSos.carta_victima}</h1>
        ):(<h1>Elija</h1>)}
    </form>
    
   
   
  );
}

export default Sospechar ;