import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import BotonDado from './BotonDado';

test('Modulo renderiza correctamente cuando es mi turno', async () => {
    const id_jugador = 1
    const turno = true
    const component = render(<BotonDado id_jugador={id_jugador} turno={turno} />)
    await component.findByText('Sos el jugador número:')
    await component.findByText('1')
    await component.findByText('Tirar el dado')

})

test('Modulo renderiza correctamente cuando es mi turno y ya tire el dado', async () => {
    const id_jugador = 1
    const turno = false
    const pasarTurno = true
    const component = render(<BotonDado id_jugador={id_jugador} turno={turno} pasarTurno={pasarTurno} />)
    await component.findByText('Sos el jugador número:')
    await component.findByText('1')
    await component.findByText('Terminar turno')

})

test('Modulo renderiza correctamente cuando no es mi turno (Es decir no muestra botones)', async () => {
    const id_jugador = 1
    const turno = false
    const pasarTurno = false
    const component = render(<BotonDado id_jugador={id_jugador} turno={turno} pasarTurno={pasarTurno} />)
    await component.findByText('Sos el jugador número:')
    await component.findByText('1')
    expect(() => component.getAllByRole('button')).toThrow()
})
