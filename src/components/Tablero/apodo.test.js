import React from 'react';
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Apodo from './Apodo';

test('Modulo renderiza correctamente', async () => {
    const estado = [{id_jugador: 1, apodo: 'PrimerJugador', color: 'red', posicion: 2, orden: 1},
                    {id_jugador: 2, apodo: 'SegundoJugador', color: 'blue', posicion: 83, orden: 2}]
    const component = render( <Apodo estado={estado} />)
    await component.findByText('PrimerJugador :')
    await component.findByText('SegundoJugador :')
    screen.debug()


})
