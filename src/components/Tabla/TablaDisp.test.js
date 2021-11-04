import React from 'react';
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import TablaDisp from './TablaDisp';
import {BrowserRouter as Router} from "react-router-dom" ;

const MOCK_GET = [
    {"id_partida":1,"nombre_partida":"PrimerPartida","cantidad_jugadores":1},
    {"id_partida":2,"nombre_partida":"SegundaPartida","cantidad_jugadores":1},
    {"id_partida":3,"nombre_partida":"TerceraPartida","cantidad_jugadores":1},
    {"id_partida":4,"nombre_partida":"CuartaPartida","cantidad_jugadores":1}
    ]

const server = setupServer(
    rest.get('http://localhost:8000/partidas', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(MOCK_GET))
    }), 
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Conectado y partidas disponibles', async () => {
    const component = render(<Router>
                                <TablaDisp />
                            </Router> )
    await component.findByText('Partidas')
    await component.findByText('Cantidad de jugadores')
    await component.findByText('PrimerPartida')
    await component.findByText('SegundaPartida')
    await component.findByText('TerceraPartida')
    await component.findByText('CuartaPartida')
})

test("Click en unirse nos redirige a la url correcta", async () =>{
    const component = render(<Router>
                                <TablaDisp />
                            </Router> );
    await waitFor(() => screen.getByText('TerceraPartida'), { timeout: 3000 })
    const botones_unirse = screen.getAllByText('Unirse')
    expect(await botones_unirse[0]).toHaveAttribute('href', '/FormU/1/PrimerPartida')
    expect(await botones_unirse[1]).toHaveAttribute('href', '/FormU/2/SegundaPartida')
    expect(await botones_unirse[2]).toHaveAttribute('href', '/FormU/3/TerceraPartida')
    expect(await botones_unirse[3]).toHaveAttribute('href', '/FormU/4/CuartaPartida')

})

test('No hay partidas disponibles', async () => {
    server.use(
        rest.get('http://localhost:8000/partidas', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]))
    }), )

    const component = render(<Router>
                                <TablaDisp />
                            </Router> )
    await waitFor(() => screen.getByText('No hay partidas disponibles'), { timeout: 3000 })
})
