import React, { useState }  from 'react';
import { useForm } from 'react-hook-form';
import ReactScrollableFeed from 'react-scrollable-feed';
import 'bootstrap/dist/css/bootstrap.css';
import './SalaChat.css'





const SalaChat = (parametros) => {

    const ws = parametros.ws

    const {register, handleSubmit} = useForm();

    const [mensaje, setMensaje] = useState([])
  

    const onSubmit = (data) => {

        setMensaje([...mensaje, data.mensaje, <br />, <br />])

        
    }


    return (
         
    <div className="container">
        <div id="chats" className="container">
            <div className="chat-window col-xs-5 col-md-3" id="chat_window_1">
                <div className="chat-header col-xs-12">
                    <div className="col-xs-8">
                        <span> Sala de chat</span>
                    </div>
                </div>
            <div className="toHide">
           
                <div className="chat-body">

                
                    <ReactScrollableFeed>

                        {mensaje.map ((men,i) => (
                            <i className="mensajes" key={i}>{men}</i>
                        ))}

                    </ReactScrollableFeed>
                </div>
                <div className="chat-footer">
                    <div className="input-group">

                        <form className="d-inline-flex"  onSubmit={handleSubmit(onSubmit)}>
                            <input type="submit" value="Enviar" className= "btn btn-dark" /> 
                            <input
                                className="btn btn-secondary"
                                name="mensaje"
                                placeholder="Escriba su mensaje"
                                {...register("mensaje",{
                                     maxLength: {value: 300, message: '300 caracteres máximo'}
                                })
                            }/> 
                                  
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    )
}


export default SalaChat;
