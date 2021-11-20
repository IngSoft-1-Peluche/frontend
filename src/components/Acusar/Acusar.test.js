import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Acusar from './Acusar';


test('Modulo renderiza correctamente', async () => {
    const component = render( <Acusar />)
    await component.findAllByText('Elegí un monstruo:')
    await component.findAllByText('Elegí un recinto:')
    await component.findAllByText('Elegí una víctima:')
    await component.findByText('Condesa')
    await component.findByText('Ama de llaves')
    await component.findByText('Biblioteca')
    await component.findByText('Panteon')
    await component.findByText('Frankenstein')
    await component.findByText('Realizar acusacion')
})

