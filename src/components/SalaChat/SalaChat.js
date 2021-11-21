import React from 'react';
import { useForm } from 'react-hook-form';
import ReactScrollableFeed from 'react-scrollable-feed';
import 'bootstrap/dist/css/bootstrap.css';
import './SalaChat.css'





const SalaChat = (parametros) => {

    const ws = parametros.ws
    const mensaje = parametros.mensaje


    const { register, handleSubmit } = useForm();




    const onSubmit = (datos, e) => {

        const mensaje = JSON.stringify({ action: 'escribe_chat', data: datos })
        ws.send(mensaje)
        e.target.reset()
        console.log(mensaje)
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

                                {mensaje.map((men, i) => (
                                    <p className={men.color} key={i}>{men.message}</p>
                                ))}

                            </ReactScrollableFeed>
                        </div>
                        <div className="chat-footer">
                            <div className="input-group">

                                <form className="d-inline-flex" onSubmit={handleSubmit(onSubmit)}>

                                    <input
                                        className="form-control input-sm chat-input"
                                        name="message"
                                        placeholder="Escriba su mensaje"
                                        {...register("message", {
                                            required: true,
                                        })
                                        } />
                                    <button type="submit" className="btn btn-primary">Enviar</button>

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
