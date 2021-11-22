import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import CartasRepartidas from './CartasRepartidas';
import { jest } from '@jest/globals'


test('Modulo renderiza correctamente', async () => {
    Storage.prototype.getItem = jest.fn(() => {
        return '{"logueado":true}'
    });
    const ws = ""
    const cartas = ["Biblioteca", "Conde", "Alcoba", "Panteon"]
    const component = render(<CartasRepartidas ws={ws} cartas={cartas} />)
    await component.findAllByText('Biblioteca')
    await component.findAllByText('Conde')
    await component.findAllByText('Alcoba')
    await component.findAllByText('Panteon')
})

