import React from 'react';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import BotonDado from './BotonDado';

test('Modulo renderiza correctamente', async () => {
    const component = render(<BotonDado/>)
    await component.findByText('Tirar el dado')
})
