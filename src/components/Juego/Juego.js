import React, { useState, useEffect } from 'react';
import Acusar from '../Acusar/Acusar';
import BotonDado from '../Dado/BotonDado';
import ListarJugadores from '../Listar/ListarJugadores';
import CartasRepartidas from '../MostrarCartas/CartasRepartidas';
import { Sospechar } from '../Sospecha';
import Tablero from '../Tablero/Tablero';
import ApodoJugadores from '../Tablero/apodo';
import ResponderSospecha from '../Sospecha/Responder';

const Juego = (params) => {

    const ws= params.ws

    var usuario = JSON.parse(sessionStorage.getItem('logueado'));
    
    const datosPartidasDefault =
    {
        nombre_sospechador: '',
        cartas_sospechadas: []
    }
   
    const [estado,setEstado] = useState([])
    const [miPosicion,setMiPosicion] = useState(0)
    const [casillasDisponibles,setCasillasDisponibles] = useState([])
    const [turno, setTurno] = useState(false);
    const [pasarTurno, setPasar] = useState(false);
    const [tirado, setTirado] = useState("")
    const [cartasJu, setCartasJu] = useState([null]);
    const [sospecha, setSospecha] = useState(datosPartidasDefault);
    const [responder, setResponder] = useState(false)



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
                
                const respuesta = prueba.data.casillas_a_mover
                setCasillasDisponibles(respuesta)
            return;
            case 'me_movi':
                setCasillasDisponibles([])
                setPasar(true)
                setMiPosicion(prueba.data.posicion_final)
            return;
            case 'error_imp':
                setTurno(false)
            return; 
            case 'no_recinto':
                console.log("no esta en recinto")
            return;
            case 'mostrar_cartas':
                const datos = prueba.data.cartas
                setCartasJu(datos)
            return;

            case 'estado_jugadores':
                setEstado(prueba.data.lista_jugadores)
                setTurno(prueba.data.lista_jugadores.find(el=> el.apodo ==usuario.apodo).en_turno)
            return;
            case 'se_movio':
                setEstado(prueba.data.lista_jugadores)
            return;
            case 'terminaron_turno':
                (prueba.data.nombre_jugador==usuario.apodo) ? setTurno(true) : setTurno(false);
                setEstado(prueba.data.lista_jugadores)
            return;

            case 'acuse':
                const resultado_acuse = prueba.data.message
                if (resultado_acuse == "ganaste"){
                    alert("Ganaste!!!") 
                }
                else if(resultado_acuse == "perdiste"){
                    alert("Perdiste :(") 
                }
            return;
            case 'cartas_sospechadas':                     
            const datos_sospecha= prueba.data
            setSospecha(datos_sospecha) 
            return;

            case 'no_carta':   
            setResponder(false)  
            return;       

            case 'muestra':
            setResponder(true)
            return;  
            default:
                console.log("default")
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

    const permisoSospechar = () => {
        return (pasarTurno && (miPosicion ===1 || miPosicion ===3 ||miPosicion ===5 ||miPosicion ==36 ||miPosicion ===39 ||miPosicion ===70 ||miPosicion ===72 || miPosicion ===74 )) 
    }
    const permisoAcusar = () => {
        return (pasarTurno) 
    }
    

    return (
        <>  
            <div style={{display:"flex",flexDirection:"row"}}>
            <div>
            <Tablero ws={ws} estado={estado} casillasDisponibles={casillasDisponibles} />
            </div>            
                <div> 
                <BotonDado ws={ws} id_jugador={usuario.id_jugador} 
                    turno={turno} pasarTurno={pasarTurno} tirado={tirado} tirar={tirarDado} terminar={terminarTurno}/>

                {permisoSospechar()  && <Sospechar ws={ws}/>}
                {permisoAcusar()  && <Acusar ws={ws}/>}
                <ApodoJugadores estado={estado}/>
                <ResponderSospecha ws={ws} sospecha={sospecha} responder={responder}/>

                </div>
            </div>
            <div>
               <CartasRepartidas cartas={cartasJu}/>
            </div>
        </>
    )

}

export default Juego;
