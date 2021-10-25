    import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';


const TablaDisp = () => {

    const datosPartidasDefault = [ 
        {id_partida: '', nombre_partida: '', cantidad_jugadores: ''}     
    ];

    const [partida, setPartida] = useState(datosPartidasDefault);

    const obtenerPartidas = async () => {
       const datos = await fetch('http://localhost:8000/partidas') 
       const partidas = await datos.json()
       setPartida(partidas)
       console.log(partidas)
    }

    useEffect(() => {
        obtenerPartidas()
    }, [])


    return (
       

    <table className="table table-striped table-dark">
        <thead className="thead-dark">
            <tr>
                <th scope="col">Partidas</th>
                <th scope="col">Cantidad de jugadores</th>
                <th></th>
                
            </tr>
        </thead>
        <tbody>
            {partida.length > 0 ? (
                partida.map((partida) => (
                    <tr key={partida.id_partida} className = "table-secondary">
                        <td>{partida.nombre_partida}</td>
                        <td>{partida.cantidad_jugadores}</td>
                        <td>
                            <a className= "btn btn-dark"
                             href={`/FormU/${partida.id_partida}/${partida.nombre_partida}`}>Unirse
                            </a>  
                        </td>
                    </tr>
                    )
                )
            ) : (
                <tr>
                    <td colSpan = {3}>No hay partidas disponibles</td>
                </tr>
                )    
            }
            
        </tbody>
    </table>
 
    );
}

export default TablaDisp;
