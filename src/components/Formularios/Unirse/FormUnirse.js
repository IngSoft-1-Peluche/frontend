import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';



const FormUnirse = () => {

    const {idPart, nomPart}= useParams();

    const {register, handleSubmit, formState:{errors}} = useForm();


    const history= useHistory();


    const onSubmit = async (usuario, event) => {

        usuario.id_partida= parseInt(idPart)
        event.preventDefault();
        event.target.reset();
        
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(usuario)
        }

        const respuesta = await fetch(`http://localhost:8000/partidas/${idPart}?apodo=${usuario.apodo}`, requestOptions)
        .then(response => response.json());
        
        window.localStorage.setItem('logueado', JSON.stringify({
                                    apodo: respuesta.apodo, 
                                    id_jugador: respuesta.id_jugador, 
                                    creador: false}))

        history.push(`/salaEsp/${respuesta.id_partida}`);

    }

    return(
       
        <div>
            <h2 className="bg-dark text-white">Definición de apodo para entrar a {nomPart}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="form-inline btn-lg btn-secondary"
                    name="apodo"
                    placeholder="Ingrese su apodo"
                    {...register("apodo",{
                        required:{ value: true, message: 'Apodo obligatorio'},
                        maxLength: {value: 15, message: '15 caracteres máximo'}
                    })
                    }
                />     
                <span className="text-danger text-small d-block mb-2">
                    {errors?.apodo?.message}
                </span>
                
                <button className= "btn btn-dark">Confirmar</button>
               
            </form>
        </div>
    )
}

export default FormUnirse;

