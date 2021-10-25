import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import TablaDisp from './TablaDisp';



test('renders table', () =>{
    
    const component = render(<TablaDisp />);
    component.getByText('Partidas')
    component.getByText('Cantidad de jugadores')

})




