import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Tablero from './Tablero';

test('Modulo renderiza correctamente', async () => {
    const ws = "" 
    const estado = [{id_jugador: 1, apodo: 'PrimerJugador', color: 'red', posicion: 2, orden: 1},
                    {id_jugador: 2, apodo: 'SegundoJugador', color: 'blue', posicion: 83, orden: 2}]
    const casillasDisponibles = [2,4,6,8]
    const component = render( <Tablero ws = {ws} casillasDisponibles={casillasDisponibles} estado={estado} />)

    var imagenes = await component.findAllByRole('img');
    var i = 0
    imagenes.map( img => {
        imagenes[i] = img.id
        i = i+1
    } )
    expect(imagenes).toStrictEqual([
      '1',  '2',  '6',  '8',  '10', '12', '14', '3',  '4',
      '7',  '9',  '11', '13', '15', '5',  '16', '17', '18',
      '19', '20', '21', '22', '23', '24', '25', '26', '27',
      '28', '29', '30', '31', '32', '33', '34', '35', '36',
      '37', '40', '42', '44', '46', '48', '0',  '38', '41',
      '43', '45', '47', '49', '39', '50', '51', '52', '53',
      '54', '55', '56', '57', '58', '59', '60', '61', '62',
      '63', '64', '65', '66', '67', '68', '69', '70', '71',
      '75', '77', '79', '81', '83', '72', '73', '76', '78',
      '80', '82', '84', '74']
    )
    expect(document.getElementsByClassName("dot")[0].parentElement.previousElementSibling.id).toBe("2")
    expect(document.getElementsByClassName("dot")[1].parentElement.previousElementSibling.id).toBe("83")

})
