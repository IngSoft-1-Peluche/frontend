import React from 'react';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {BrowserRouter as Router} from "react-router-dom" ;
import TablaDisp from './TablaDisp';

const MOCK_GET = [
    {"id_partida":1,"nombre_partida":"PrimerPartida","cantidad_jugadores":1},
    {"id_partida":2,"nombre_partida":"SegundaPartida","cantidad_jugadores":5},
    {"id_partida":3,"nombre_partida":"Tercera Partida","cantidad_jugadores":4},
    {"id_partida":4,"nombre_partida":"PrimerPartida","cantidad_jugadores":1}
    ]

const server = setupServer(
    rest.get('http://localhost:8000/partidas', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(MOCK_GET))
    }), 
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Conectado y hay 4 partidas disponibles incluyendo un nombre repetido', async () => {
    const component = render(<Router>
                                <TablaDisp />
                            </Router> )
    await component.findByText('Partidas')
    await component.findByText('Cantidad de jugadores')
    await component.findAllByText('1')
    await component.findByText('5')
    await component.findByText('4')
    await component.findAllByText('PrimerPartida')
    await component.findByText('SegundaPartida')
    await component.findByText('Tercera Partida')
})

test("Click en unirse nos redirige a la url correcta", async () =>{
    const component = render(<Router>
                                <TablaDisp />
                            </Router> );
    await component.findAllByText('PrimerPartida')
    const botones_unirse = await component.findAllByText('Unirse')
    expect(botones_unirse[0]).toHaveAttribute('href', '/FormU/1/PrimerPartida')
    expect(botones_unirse[1]).toHaveAttribute('href', '/FormU/2/SegundaPartida')
    expect(botones_unirse[2]).toHaveAttribute('href', '/FormU/3/Tercera Partida')
    expect(botones_unirse[3]).toHaveAttribute('href', '/FormU/4/PrimerPartida')
})

test('No hay partidas disponibles', async () => {
    server.use(
        rest.get('http://localhost:8000/partidas', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]))
    }), )

    const component = render(<Router>
                                <TablaDisp />
                            </Router> )
    await component.findByText('No hay partidas disponibles')
})
