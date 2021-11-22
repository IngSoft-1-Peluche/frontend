import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BotonTerminarTurno from './BotonTerminarTurno';

test('Modulo renderiza correctamente cuando es mi turno', async () => {
  const component = render(<BotonTerminarTurno />);
  await component.findByText('Terminar turno');
});
