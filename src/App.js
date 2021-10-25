import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TablaDis from './components/Tabla/TablaDisp';
import FormUnirse from './components/Formularios/Unirse/FormUnirse';
import ListarJugadores from './components/Listar/ListarJugadores';


function App() {
    return(
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/partidasDis" exact render = { props => ( <TablaDis {...props} />)}>
                    </Route>
                    <Route path="/FormU/:idPart/:nomPart" render = { props => ( <FormUnirse {...props} />)}>
                    </Route>
                    <Route path="/partidas/lista" render = { props => ( <ListarJugadores id={1}/>)}>
                    </Route>
                   
                </Switch>
            </Router>
        </React.Fragment>
    )
}
export default App;

