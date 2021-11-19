import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import SalaChat from '../SalaChat/SalaChat';
import SalaEspera from './SalaEspera';
import './PreSala.css'

const PreSala = (parametros) => {
    

    
    const ws = parametros.ws


    const partidaDefault = {
        jugador_conectado: null,
        id_partida: null,
        nombre_partida: null,
        jugadores: []
       }
    
    const [partida, setPartida] = useState(partidaDefault);
    const [mensaje, setMensaje] = useState([])
    

    const history= useHistory();


    ws.onerror = () => {
       console.log("jugador desconectado")
       history.push("/")
       return;
    }

    ws.onmessage = function(event) {
        
        const info = JSON.parse(event.data)
    
        switch(info.action) {
            
            case 'nuevo_jugador':
                
                const datos = info.data
                setPartida(datos) 
                setMensaje([...mensaje, `SISTEMA: El jugador ${datos.jugador_conectado} se ha unido`])
                
    
            return;
        
            case 'iniciada':
                history.push("/juego")
            return;
    
            case 'jugador_desconectado_lobby':
                
                const desconecta = info.data

                setPartida(desconecta) 
                console.log(desconecta)
                setMensaje([...mensaje, `SISTEMA: El jugador ${desconecta.jugador_desconectado} ha abandonado la sala`])
                
            return;
            case 'escribio_chat':
                
                const chat = `${info.data.nombre_jugador}: \n ${info.data.message}`
                setMensaje([...mensaje, chat])   
                      
            return;
    
        }
    } 

    return(
    <div>
       <div className="Espera">
        <SalaEspera ws={ws} partida={partida} /> 
        </div>
        <div className="chat">
        <SalaChat ws={ws} mensaje={mensaje} />
        </div>
    </div>
    )
}

export default PreSala;

