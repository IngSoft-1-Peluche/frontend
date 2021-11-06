import React from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.css';

import { useHistory } from 'react-router-dom';


const FormCrear = () => {

  
    const history= useHistory();

    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
  
    const onSubmit = async (data) => {
     
    const respuesta = await fetch("http://localhost:8000/partidas/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)}).then(respuesta => respuesta.json());

    window.sessionStorage.setItem('logueado', JSON.stringify({
                                apodo: respuesta.apodo, 
                                id_jugador: respuesta.id_jugador, 
                                creador: true}))

    history.push(`/salaEsp/${respuesta.id_partida}`);

};
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>      
        <label htmlFor="nombre_partida">Nombre de la partida:</label>
        <input 
          {...register("nombre_partida", { 
            required: "Nombre de partida obligatorio", 
            maxLength: { value: 20, message: "20 caracteres máximo" }})}
          id="firstName"
        />
        <div>
        {errors.nombre_partida && <p className="text-danger text-small d-block mb-2">{errors.nombre_partida.message}</p>}
        </div>    
        <label htmlFor="apodo">Apodo:</label>
        <input
          data-testid = "casilla input"
          {...register("apodo", {
            required: "Apodo obligatorio",
            maxLength: { value: 20, message: "20 caracteres máximo" }
          })}
        />
        <div>
        {errors.apodo && <p className="text-danger text-small d-block mb-2">{errors.apodo.message}</p>}
        </div> 
        <input type="submit" value="Crear partida"  />
      </form>
    );
}

export default FormCrear;
