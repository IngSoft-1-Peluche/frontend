import React from 'react';
import {render, screen, waitFor} from '@testing-library/react'
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { withRouter } from "react-router-dom";
import { createMemoryHistory } from "history"; 
import {Router, Route } from 'react-router';
import userEvent from '@testing-library/user-event';
import IniciarPartida from './IniciarPartida';


// Fuente : https://medium.com/@aarling/mocking-a-react-router-match-object-in-your-component-tests-fa95904dcc55

const ContentWrapper = ({ children, match }) => (
    <IniciarPartida>
      <p>Match id: {match.params.id}</p>
      {children}
    </IniciarPartida>
  );  
  export default withRouter(ContentWrapper);

// Helper function
export function renderWithRouterMatch(
    ui,
    {
      path = "/",
      route = "/",
      history = createMemoryHistory({ initialEntries: [route] })
    } = {}
  ) {
    return {
      ...render(
        <Router history={history}>
          <Route path={path} component={ui} />
        </Router>
      )
    };
  }

  // Finaliza el codigo obtenido de la fuente externa


const MOCK_GET_PARTIDA_SIN_INICIAR =
    {"id_partida":1,"nombre":"PrimeraPartida","jugadores":[{"id_jugador":1,"apodo":"PrimerJugador","orden":null,"en_turno":false},
    {"id_jugador":2,"apodo":"SegundoJugador","orden":null,"en_turno":false}]}

const MOCK_GET_PARTIDA_INICIADA = 
    {"id_partida":1,"nombre":"PrimeraPartidaIniciada","jugadores":[{"id_jugador":1,"apodo":"PrimerJugadorIniciado","orden":1,"en_turno":true},
    {"id_jugador":2,"apodo":"SegundoJugador","orden":2,"en_turno":false}]}
    
const server = setupServer(
    rest.patch('http://localhost:8000/partidas/:id?:id_jugador', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(MOCK_GET_PARTIDA_SIN_INICIAR))
    }), 
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Conectado y existe la partida pero esta no fue iniciada', async () => {
    const { getByText } = renderWithRouterMatch(ContentWrapper, {
        route: "/partidas/1?1",
        path: "/partidas/:id?:id_jugador"
    });
    const boton_iniciar =  await waitFor(() => screen.getByRole('button'), { timeout: 4000 })  
    userEvent.click(boton_iniciar);
    await waitFor(() => screen.getByText('Partida creada'), { timeout: 4000 })
})

test('Conectado y existe la partida pero esta ya fue iniciada', async () => {
    server.use(
        rest.patch('http://localhost:8000/partidas/:id?:id_jugador', (req, res, ctx) => {
            return res(ctx.status(500), ctx.json({detail : "No eres el dueño de la partida"}))
        }), 
    )
    const { getByText } = renderWithRouterMatch(ContentWrapper, {
        route: "/partidas/1?1",
        path: "/partidas/:id?:id_jugador"
    });
    const boton_iniciar =  await waitFor(() => screen.getByRole('button'), { timeout: 4000 })  
    userEvent.click(boton_iniciar);
    await waitFor(() => screen.getByText('No eres el dueño de la partida'), { timeout: 4000 })
})
