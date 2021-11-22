import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import SalaEspera from './SalaEspera';
import { jest } from '@jest/globals'


test('Modulo renderiza correctamente cuando soy el creador y hay dos jugadores', async () => {
    Storage.prototype.getItem = jest.fn(() => {
        return '{"creador":true}'
    });
    const ws = ""
    const partida = { jugador_conectado: 'PrimerJugador', id_partida: 1, nombre_partida: 'PrimerPartida', jugadores: ['PrimerJugador', 'SegundoJugador'] }
    const component = render(<SalaEspera ws={ws} partida={partida} />)
    await component.findAllByText('Sala de espera de la partida PrimerPartida')
    await component.findAllByText('Apodo')
    await component.findAllByText('PrimerJugador')
    await component.findAllByText('SegundoJugador')
    await component.findAllByText('Iniciar partida')
})

test('Modulo renderiza correctamente cuando soy el creador y no hay dos jugadores', async () => {
    Storage.prototype.getItem = jest.fn(() => {
        return '{"creador":true}'
    });
    const ws = ""
    const partida = { jugador_conectado: 'PrimerJugador', id_partida: 1, nombre_partida: 'PrimerPartida', jugadores: ['PrimerJugador'] }
    const component = render(<SalaEspera ws={ws} partida={partida} />)
    await component.findAllByText('Sala de espera de la partida PrimerPartida')
    await component.findAllByText('Apodo')
    await component.findAllByText('PrimerJugador')
    await component.findAllByText('Esperando que se unan mas jugadores')
})

test('Modulo renderiza correctamente cuando no soy el creador', async () => {
    Storage.prototype.getItem = jest.fn(() => {
        return '{"creador":false}'
    });
    const ws = ""
    const partida = { jugador_conectado: 'PrimerJugador', id_partida: 1, nombre_partida: 'PrimerPartida', jugadores: ['PrimerJugador', 'SegundoJugador'] }
    const component = render(<SalaEspera ws={ws} partida={partida} />)
    await component.findAllByText('Sala de espera de la partida PrimerPartida')
    await component.findAllByText('Apodo')
    await component.findAllByText('PrimerJugador')
    await component.findAllByText('SegundoJugador')
    await component.findAllByText('Espere a que se inicie la partida')
})

