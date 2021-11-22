import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import FormCrear from './FormCrear';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const MOCK_POST =
    { "id_partida": 1, "nombre_partida": "PrimerPartida", "id_jugador": 1, "apodo": "primerJugador", "jugador_creador": true }

const server = setupServer(
    rest.post('http://localhost:8000/partidas/', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(MOCK_POST))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));


test('Crear una partida de manera correcta', async () => {
    const apiRequests = jest.fn();
    server.use(
        rest.post('http://localhost:8000/partidas/', (req, res, ctx) => {
            expect(req["body"]["nombre_partida"]).toBe('nombrePartida1')
            expect(req["body"]["apodo"]).toBe('apodoJugador1')
            apiRequests()
            return res(ctx.status(200), ctx.json(MOCK_POST))
        }),
    )
    const component = render(<FormCrear />);
    const casilla_apodo = component.getByTestId("casilla_apodo")
    const casilla_nombre = component.getByTestId("casilla_nombre")
    fireEvent.change(casilla_apodo, { target: { value: 'apodoJugador1' } })
    fireEvent.change(casilla_nombre, { target: { value: 'nombrePartida1' } })
    expect(casilla_apodo.value).toBe('apodoJugador1')
    expect(casilla_nombre.value).toBe('nombrePartida1')

    const boton_enviar = await component.findByText('Crear partida')
    await waitFor(() => userEvent.click(boton_enviar), { timeout: 4000 })
    expect(apiRequests).toHaveBeenCalledTimes(1);
    await component.findByText('Nombre de la partida:')
})

test('Intentar crear una partida sin escribir apodo ni nombre ', async () => {
    const apiRequests = jest.fn();
    server.use(
        rest.post('http://localhost:8000/partidas/', (req, res, ctx) => {
            console.log(req)
            apiRequests()
            return res(ctx.status(200), ctx.json(MOCK_POST))
        }),
    )
    const component = render(<FormCrear />);

    const boton_enviar = await component.findByText('Crear partida')
    await waitFor(() => userEvent.click(boton_enviar), { timeout: 4000 })
    expect(apiRequests).toHaveBeenCalledTimes(0);
    await component.findByText('Nombre de partida obligatorio')
    await component.findByText('Apodo obligatorio')
})
