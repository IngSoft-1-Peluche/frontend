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


    const history = useHistory();


    ws.onerror = () => {
        history.push("/")
        return;
    }

    ws.onmessage = function (event) {

        const info = JSON.parse(event.data)

        switch (info.action) {

            case 'nuevo_jugador':
                const datos = info.data
                setPartida(datos)
                const mensCon = {
                    message: `SISTEMA: El jugador ${datos.jugador_conectado} se ha unido`,
                    color: "mensaje blue"
                }
                setMensaje([...mensaje, mensCon])
                return;

            case 'iniciada':
                history.push("/juego")
                ws.close();
                return;

            case 'jugador_desconectado_lobby':
                const desconecta = info.data
                setPartida(desconecta)
                const mensDesc = {
                    message: `SISTEMA: El jugador ${desconecta.jugador_desconectado} ha abandonado la sala`,
                    color: "mensaje blue"
                }
                setMensaje([...mensaje, mensDesc])
                return;

            case 'escribio_chat':
                const chat = {
                    message: `${info.data.nombre_jugador}:  ${info.data.message}`,
                    color: "mensaje black"
                }
                setMensaje([...mensaje, chat])
                return;

            default:
                return;
        }
    }

    return (
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

