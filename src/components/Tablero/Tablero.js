import React from 'react';
import './Tablero.css';
import MisterioBoard from '../../assets/imagenes/MisterioBoard.jpeg'
import cochera from '../../assets/imagenes/cochera.jpg';
import casilla from '../../assets/imagenes/casilla.png';


const Tablero = () =>{

    const algo = () => {
        console.log('click')

    }

  
    return(

        <div className="todo">
            <img src={cochera}/>
        <div className="todo1">
            <img id="5" src={casilla} onClick={algo}/>
            <img src={casilla}/>  
            <img src={casilla}/>
            <img src={casilla}/>
            <img src={casilla}/>
            <img src={casilla}/>
            <img src={casilla}/>
        </div>
        </div> 
    )

}

export default Tablero;

/*.fondo {
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    height: 115vh;
  }*/
