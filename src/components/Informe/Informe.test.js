import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Informe from './Informe';

test('Modulo renderiza correctamente', async () => {
    const numero = 1
    const component = render(<Informe numero={numero} />)
    await component.findByText('Condesa')
    await component.findByText('Ama de llaves')
    await component.findByText('Biblioteca')
    await component.findByText('Panteon')
    await component.findByText('Frankenstein')
    await component.findByText('Laboratorio')
    await component.findByText('Drácula')
})
