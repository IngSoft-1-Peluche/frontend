import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { jest } from '@jest/globals'
import Juego from './Juego';

test('Modulo renderiza correctamente', async () => {
    const ws = { onmessage: "" }
    Storage.prototype.getItem = jest.fn(() => {
        return '{"logueado":true}'
    });
    const component = render(<Juego ws={ws} />)

    await component.findByText("Sos el jugador número:")
    await component.findByText("Cartas de")
    const imagenes = await component.findAllByRole('img')
    expect(imagenes.length >= 80).toBe(true)
})
