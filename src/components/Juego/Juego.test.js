import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { jest } from '@jest/globals';
import Juego from './Juego';

test('Modulo renderiza correctamente', async () => {
  const ws = { onmessage: '' };
  Storage.prototype.getItem = jest.fn(() => '{"logueado":true}');
  const component = render(<Juego ws={ws} />);

  await component.findByText('Sala de chat');
  await component.findByText('Victima');
  await component.findByText('Asesino');
  await component.findByText('Recinto');
  await component.findByText('Cartas de');
  const imagenes = await component.findAllByRole('img');
  expect(imagenes.length >= 80).toBe(true);
});
