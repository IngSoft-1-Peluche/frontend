import React, { useState, useEffect } from 'react';
import BotonDado from '../Dado/BotonDado';
import Tablero from '../Tablero/Tablero';

const Juego = (params) => {

    const ws= params.ws

    var usuario = JSON.parse(sessionStorage.getItem('logueado'));
    
    const [posicion,setPosicion] = useState(2)
    const [casillasDisponibles,setCasillasDisponibles] = useState([])
    const [turno, setTurno] = useState(true);
    const [pasarTurno, setPasar] = useState(false);
    const [tirado, setTirado] = useState("")

    ws.onmessage = function(event) {
        const prueba = JSON.parse(event.data)
        switch(prueba.action) {
            case 'tiraron_dado':
                const resultado = 'El jugador '+ prueba.data.nombre_jugador +' tiró un ' + prueba.data.numero_dado
                setTirado(resultado)           
            return;
            case 'tu_turno':
                setTurno(true)
            return;
            case 'tire_dado':
                setPasar(true)
                const respuesta = prueba.data.casillas_a_mover
                console.log(respuesta)
                setCasillasDisponibles(respuesta)
                console.log(respuesta)
            return;
            case 'me_movi':
                console.log(prueba.data.posicion_final)
                setPosicion(prueba.data.posicion_final)
                setCasillasDisponibles([])
                console.log(posicion)
            return;
            case 'error_imp':
                setTurno(false)
            return; 
        }      
    }  

    const tirarDado = (event) => {
        const data = JSON.stringify({action: 'tirar_dado', data:''})
        ws.send(data)
        setTurno(false)
        event.preventDefault()
    }

    const terminarTurno = (event) => {
        const data = JSON.stringify({action: 'terminar_turno', data:''})
        ws.send(data)
        setTurno(false)
        setPasar(false)
        event.preventDefault()
    }

    

    return (
        <>  
            <div style={{display:"flex",flexDirection:"row"}}>
            <div>
            <Tablero ws={ws} posicion={posicion} casillasDisponibles={casillasDisponibles} />
            </div>            
            <div> 
            <BotonDado ws={ws} id_jugador={usuario.id_jugador} turno={turno} pasarTurno={pasarTurno} tirado={tirado} tirar={tirarDado} terminar={terminarTurno}/>
            </div>
            </div>
        </>
    )

}

export default Juego;
