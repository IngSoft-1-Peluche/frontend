import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Sospechar from './Sospechar';


test('Modulo renderiza correctamente', async () => {
    const component = render(<Sospechar />)
    await component.findAllByText('Elegí un monstruo:')
    await component.findAllByText('Elegí una víctima:')
    await component.findByText('Condesa')
    await component.findByText('Ama de llaves')
    await component.findByText('Frankenstein')
    await component.findByText('Realizar sospecha')
})
