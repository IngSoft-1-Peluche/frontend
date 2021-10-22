import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';



const FormUnirse = () => {

    const {idPart, nomPart}= useParams();
  

    const {register, handleSubmit, formState:{errors}} = useForm();

    const onSubmit = (data, e) => {
        data.id_partida= idPart
        console.log(data)
        e.target.reset();
    }
    
    return(

        <Fragment>
            <h2 className="bg-dark text-white">Definición de apodo para entrar a {nomPart}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="form-inline btn btn-lg btn-secondary"
                    name="apodo"
                    placeholder="Ingrese su apodo"
                    {...register("apodo",{
                        required:{ value:true, message: 'apodo obligatorio'},
                        maxLength: {value: 15, message: '15 caracteres máximo'}
                    })
                    }
                />     
                <span className="text-danger text-small d-block mb-2">
                    {errors?.apodo?.message}
                </span>
                <button className= "btn btn-dark">Confirmar</button>
            </form>
        </Fragment>

    )
}

export default FormUnirse;