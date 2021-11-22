import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SalaChat from './SalaChat';

test('Modulo renderiza correctamente', async () => {
  const ws = '';
  const mensaje = [{ message: 'SISTEMA: Un jugador se ha unido' }, { message: 'SegundoJugador: Hola' }, { message: 'PrimerJugador: Hola' }, { message: 'SegundoJugador: Chau' }];
  const component = render(<SalaChat ws={ws} mensaje={mensaje} />);
  await component.findByText('Sala de chat');
  mensaje.forEach((mens) => component.getByText(mens.message));
  await component.findByText('Enviar');
});
