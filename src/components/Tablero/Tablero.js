import React from 'react';
import './Tablero.css';
import MisterioBoard from '../../assets/imagenes/MisterioBoard.jpeg'

const Tablero = () =>{

    return(

    
        <div className='fondo'>
            <img className='tablero' src={MisterioBoard}></img>
        </div>
        
    )

}

export default Tablero;