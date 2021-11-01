import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Link, MemoryRouter} from 'react-router-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PagInicio from './PagInicio';

configure({ adapter: new Adapter() });




test('Pagina inicio renderiza correctamente', () =>{
    
    const component = render(<Router><PagInicio /></Router>);
    component.getByText('Juego Misterio')
    component.getByText('Crear Partida')
    component.getByText('Unirse a partida creada')

});

it('incluye link a crear partida', () => {

   

    const wrapper = shallow(<Router><PagInicio /></Router>);
    expect(wrapper.find(Link).to).toBe('/FormCrear');


});

