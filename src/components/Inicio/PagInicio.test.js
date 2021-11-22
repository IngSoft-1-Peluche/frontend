import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import PagInicio from './PagInicio';

test('Pagina inicio renderiza correctamente', () => {
  const component = render(<Router><PagInicio /></Router>);
  component.getByText('Juego Misterio');
  component.getByText('Crear Partida');
  component.getByText('Unirse a partida creada');
});

test('Click en crear nos dirige a la url correcta', () => {
  const component = render(<Router><PagInicio /></Router>);
  const boton_crear = component.getByText('Crear Partida');
  expect(boton_crear).toHaveAttribute('href', '/FormCrear');
});

test('Click en unirce a partida nos dirige a la url correcta', () => {
  const component = render(<Router><PagInicio /></Router>);
  const boton_crear = component.getByText('Unirse a partida creada');
  expect(boton_crear).toHaveAttribute('href', '/PartidasDis');
});
