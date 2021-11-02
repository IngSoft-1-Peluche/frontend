import React from 'react';
import {jest} from '@jest/globals'
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import ListarJugadores from './ListarJugadores';
import { withRouter } from "react-router-dom";
import { createMemoryHistory } from "history"; 
import { browserHistory, Router, Route } from 'react-router';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

// Fuente : https://medium.com/@aarling/mocking-a-react-router-match-object-in-your-component-tests-fa95904dcc55

const ContentWrapper = ({ children, match }) => (
    <ListarJugadores>
      <p>Match id: {match.params.id}</p>
      {children}
    </ListarJugadores>
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
    rest.get('http://localhost:8000/partidas/:id', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(MOCK_GET_PARTIDA_SIN_INICIAR))
    }), 
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Conectado y existe la partida pero esta no fue iniciada', async () => {
    const { getByText } = renderWithRouterMatch(ContentWrapper, {
        route: "/partidas/1",
        path: "/partidas/:id"
      });
    await waitFor(() => screen.getByText('El orden de los jugadores no fue asignado aun para esta partida'), { timeout: 3000 })
})

test('Conectado y existe la partida, esta ya fue iniciada y tiene 2 jugadores', async () => {
    server.use(
        rest.get('http://localhost:8000/partidas/:id', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(MOCK_GET_PARTIDA_INICIADA))
    }), )
    const { getByText } = renderWithRouterMatch(ContentWrapper, {
        route: "/partidas/1",
        path: "/partidas/:id"
      });
    await waitFor(() => screen.getByText('PrimerJugadorIniciado'), { timeout: 4000 })
})

test("No existe la partida", async () =>{
    server.use(
        rest.get('http://localhost:8000/partidas/:id', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json(""))
    }), )
    const { getByText } = renderWithRouterMatch(ContentWrapper, {
        route: "/partidas/1",
        path: "/partidas/:id"
      });
    await waitFor(() => screen.getByText('El orden de los jugadores no fue asignado aun para esta partida'), { timeout: 4000 })
})
