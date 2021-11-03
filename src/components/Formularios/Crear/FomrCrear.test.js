import React from 'react';
import {render, screen, waitFor} from '@testing-library/react'
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import userEvent from '@testing-library/user-event';
import FormCrear from './FormCrear';


//{"id_partida":6,"nombre_partida":"preuba","id_jugador":23,"apodo":"asdasd","jugador_creador":true}
const MOCK_POST =
    {"id_partida":1,"nombre_partida":"PrimeraPartida","id_jugador":1,"apodo":"primerJugador","jugador_creador":true}

const server = setupServer(
    rest.post('http://localhost:8000/partidas/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(MOCK_POST))
    }), 
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('Crear una partida', async () => {
    const component = render(<FormCrear />);
    const casilla_input = screen.getByTestId("casilla input")
    casilla_input.value = "apodoJugador1"
    const boton_enviar =  await waitFor(() => screen.getByText('Crear partida'), { timeout: 4000 })  
    await waitFor(() => userEvent.click(boton_enviar), { timeout: 4000 })
    
    screen.debug()
})