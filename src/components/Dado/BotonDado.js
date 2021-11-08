import React, { useState } from 'react';



const BotonDado = (params) => {



const [tirado, setTirado] = useState();
const [turno, setTurno] = useState(true);
const [pasarTurno, setPasar] = useState(false);


params.web.onmessage = function(event) {
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
            console.log(2)
            setPasar(true)
        return;
        case 'error_imp':
            console.log(1)
            setTurno(false)
        return;
    }      
}    

const tirarDado = (event) => {
    const data = JSON.stringify({action: 'tirar_dado', data:''})
    params.web.send(data)
    setTurno(false)
    event.preventDefault()
}
   
const terminarTurno = (event) => {
    const data = JSON.stringify({action: 'terminar_turno', data:''})
    params.web.send(data)
    setPasar(false)
    event.preventDefault()
}



return (
    <>
      <h2>Sos el jugador número: <span id="ws-id">{params.id_jugador}</span></h2>
      {turno && <button onClick={tirarDado}>
       Tirar el dado
      </button>}
      <h1>{tirado}</h1>
      {pasarTurno && <button onClick={terminarTurno}>
       Terminar turno
      </button>}
    </>  
    )
}


export default BotonDado;



