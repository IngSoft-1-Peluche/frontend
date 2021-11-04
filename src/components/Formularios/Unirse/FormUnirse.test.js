import React from 'react';
import {render, screen, waitFor} from '@testing-library/react'
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import { withRouter } from "react-router-dom";
import { createMemoryHistory } from "history"; 
import {Router, Route } from 'react-router';
import userEvent from '@testing-library/user-event';
import FormUnirse from './FormUnirse';

// Fuente : https://medium.com/@aarling/mocking-a-react-router-match-object-in-your-component-tests-fa95904dcc55

const ContentWrapper = ({ children, match }) => (
    <FormUnirse>
      <p>Match id: {match.params.id}</p>
      {children}
    </FormUnirse>
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

const server = setupServer(
    rest.put('http://localhost:8000/partidas/:id_partida?:apodo', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([]))
    }), 
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('Unir un usuario a partida', async () => {
    const { getByText } = renderWithRouterMatch(ContentWrapper, {
        route: "/partidas/1?persona_unida",
        path: "/partidas/:id_partida?:apodo"
    });
    await waitFor(() => screen.getByText('Definición de apodo para entrar a'), { timeout: 4000 })  
    const casilla_input = screen.getByPlaceholderText("Ingrese su apodo")
    casilla_input.value = "apodoJugador1"
    const boton_enviar =  await waitFor(() => screen.getByText('Confirmar'), { timeout: 4000 })  
    await waitFor(() => userEvent.click(boton_enviar), { timeout: 4000 })

})