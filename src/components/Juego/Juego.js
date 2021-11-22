import React, { useState } from 'react';
import Acusar from '../Acusar/Acusar';
import BotonDado from '../Dado/BotonDado';
import CartasRepartidas from '../MostrarCartas/CartasRepartidas';
import { Sospechar } from '../Sospecha';
import Tablero from '../Tablero/Tablero';
import ApodoJugadores from '../Tablero/apodo';
import ResponderSospecha from '../Sospecha/Responder';
import Informe from '../Informe/Informe';
import { SalaChat } from '../SalaChat';
import BotonTerminarTurno from '../TerminarTurno/BotonTerminarTurno.js';


const Juego = (params) => {

    const ws = params.ws

    var usuario = JSON.parse(sessionStorage.getItem('logueado'));

    const datosPartidasDefault =
    {
        nombre_sospechador: '',
        nombre_sospechoso: '',
        cartas_sospechadas: []
    }

    const [estado, setEstado] = useState([])


    const [casillasDisponibles, setCasillasDisponibles] = useState([])
    const [estadoTurno, setEstadoTurno] = useState("");

    const [cartasJu, setCartasJu] = useState([null]);
    const [sospecha, setSospecha] = useState(datosPartidasDefault);
    const [responder, setResponder] = useState(false)
    const [sospecha_en_curso, setSospechaEnCurso] = useState(false)
    const [mensaje, setMensaje] = useState([])






    ws.onmessage = function (event) {
        const prueba = JSON.parse(event.data)
        switch (prueba.action) {
            case 'tire_dado':
                const respuesta = prueba.data.casillas_a_mover
                setCasillasDisponibles(respuesta)
                return;
            case 'me_movi':
                setCasillasDisponibles([])


                return;
            case 'mostrar_cartas':
                const datos = prueba.data.cartas
                setCartasJu(datos)
                return;
            case 'estado_jugadores':
                setEstado(prueba.data.lista_jugadores)
                setEstadoTurno(prueba.data.lista_jugadores.find(elem => parseInt(elem.id_jugador) === parseInt(usuario.id_jugador)).estado_turno)
                return;
            case 'acuse':
                const resultado_acuse = prueba.data.message
                if (resultado_acuse === "ganaste") {
                    alert("Ganaste!!!")
                }
                else if (resultado_acuse === "perdiste") {
                    alert("Perdiste :(")
                }
                return;
            case 'cartas_sospechadas':
                const datos_sospecha = prueba.data
                setSospecha(datos_sospecha)
                setSospechaEnCurso(true)
                return;
            case 'muestra':
                setResponder(true)
                return;
            case 'sospecha_respondida':
                setSospecha(datosPartidasDefault)
                setSospechaEnCurso(false)
                setResponder(false)
                return;

            case 'mensaje_sistema':
                console.log(prueba.data.message)
                const menSis = {
                    message: `SISTEMA: ${prueba.data.message}`,
                    color: "mensaje blue"
                }
                setMensaje([...mensaje, menSis])
                return;
            case 'error_imp':
                const error = {
                    message: `SISTEMA: ${prueba.data.message}`,
                    color: "mensaje red"
                }
                setMensaje([...mensaje, error])
                return;
            case 'escribio_chat':
                const chat = {
                    message: `${prueba.data.nombre_jugador}: ${prueba.data.message}`,
                    color: "mensaje black"
                }
                setMensaje([...mensaje, chat])
                return;
            case 'carta_seleccionada':
                const carta = {
                    message: `SISTEMA: ${prueba.data.message}`,
                    color: "mensaje red"
                }
                setMensaje([...mensaje, carta])
                return;



            default:
                console.log("default")
                return;
        }

    }








    return (
        <>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    <Tablero ws={ws} estado={estado} casillasDisponibles={casillasDisponibles} />
                </div>
                <div>



                    <Informe />
                    <ApodoJugadores estado={estado} />
                    {(estadoTurno === "A" || estadoTurno === "SA" || estadoTurno === "F") && <BotonTerminarTurno ws={ws} />}
                </div>
                <div>
                    {estadoTurno === "D" && <BotonDado ws={ws} />}
                    {estadoTurno === "SA" && <Sospechar ws={ws} />}
                    {(estadoTurno === "A" || estadoTurno === "SA") && <Acusar ws={ws} />}
                    {estadoTurno === "MS" && <ResponderSospecha ws={ws} cartas={cartasJu} sospecha={sospecha} sospecha_en_curso={sospecha_en_curso} responder={responder} />}
                </div>
                <div>
                    <SalaChat ws={ws} mensaje={mensaje} />
                </div>
            </div>
            <div>
                <CartasRepartidas cartas={cartasJu} />
            </div>
        </>
    )

}

export default Juego;