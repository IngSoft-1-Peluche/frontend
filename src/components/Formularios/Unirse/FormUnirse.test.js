import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import FormUnirse from './FormUnirse'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { createMemoryHistory } from "history"
import { Router, Route } from 'react-router'
import { withRouter } from "react-router-dom"

const mockHistoryPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const server = setupServer(
  rest.put('http://localhost:8000/partidas/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json())
  }))

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

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

test('Unirse a una partida de manera correcta', async () => {
  const apiRequests = jest.fn();
  server.use(
    rest.put('http://localhost:8000/partidas/', (req, res, ctx) => {
      //console.log(req["body"])
      //expect(req["body"]["id_partida"]).toBe(null)
      //expect(req["body"]["apodo"]).toBe('apodoJugador1')
      apiRequests()
      return res(ctx.status(200), ctx.json([]))
    }),
  )

  const component = renderWithRouterMatch(ContentWrapper, {
    route: "/FormU/1/PrimerPartida",
    path: "/FormU/:id_partida/:apodo"
  });

  await component.findByText('Definición de apodo para entrar a')
  const casilla_apodo = component.getByPlaceholderText("Ingrese su apodo")
  fireEvent.change(casilla_apodo, { target: { value: 'apodoJugador1' } })
  expect(casilla_apodo.value).toBe('apodoJugador1')

  const boton_enviar = await component.findByText('Confirmar')
  await waitFor(() => userEvent.click(boton_enviar), { timeout: 4000 })
  expect(apiRequests).toHaveBeenCalledTimes(1);
  await component.findByText('Confirmar')

})


test('Intentar unirse sin apodo', async () => {
  const apiRequests = jest.fn();

  const component = renderWithRouterMatch(ContentWrapper, {
    route: "/FormU/1/PrimerPartida",
    path: "/FormU/:id_partida/:apodo"
  });

  server.use(
    rest.put('http://localhost:8000/partidas/', (req, res, ctx) => {
      apiRequests()
      return res(ctx.status(200), ctx.json([]))
    }),
  )

  const boton_enviar = await component.findByText('Confirmar')
  await waitFor(() => userEvent.click(boton_enviar), { timeout: 4000 })
  expect(apiRequests).toHaveBeenCalledTimes(0);
  await component.findByText('Apodo obligatorio')
})
