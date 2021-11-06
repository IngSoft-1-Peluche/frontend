import React from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';



const Sospechar = ({id_partida}) => {

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    
    const respuesta = await fetch(`http://localhost:8000/${id_partida}/sospechar`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(respuesta => respuesta.json())   
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="nombre_victima">Elegí una víctima:</label>
      <select {...register("nombre_victima")} >
        <option value="Conde">Conde</option>
        <option value="Condesa">Condesa</option>
        <option value="Ama de llaves">Ama de llaves</option>
        <option value="Mayordomo">Mayordomo</option>
        <option value="Doncella">Doncella</option>
        <option value="Jardinero">Jardinero</option>
      </select>
      <div>
      <label htmlFor="nombre_monstruo">Elegí una monstruo:</label>
      <select {...register("nombre_monstruo")} >
        <option value="Drácula">Drácula</option>
        <option value="Frankestein">Frankestein</option>
        <option value="Hombre lobo">Hombre lobo</option>
        <option value="Fantasma">Fantasma</option>
        <option value="Momia">Momia</option>
        <option value="Dr. Jekyll Hyde">Dr. Jekyll Hyde</option>
      </select>
      </div>
      <input type="submit" value="Realizar sospecha" />
    </form>
  );
}

export default Sospechar ;