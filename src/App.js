import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormCrear from './components/Formularios/Crear/FormCrear';
import TablaDis from './components/Tabla/TablaDisp';
import FormUnirse from './components/Formularios/Unirse/FormUnirse';
import ListarJugadores from './components/Listar/ListarJugadores';
import IniciarPartida from './components/Iniciar/IniciarPartida';


function App() {
    return(
        <React.Fragment>
            <Router>
                <Switch>

                    <Route path="/FormCrear" exact render = { props => ( <FormCrear {...props} />)}>
                    </Route>
                    <Route path="/partidasDis" exact render = { props => ( <TablaDis {...props} />)}>
                    </Route>
                    <Route path="/FormU/:idPart/:nomPart" render = { props => ( <FormUnirse {...props} />)}>
                    </Route>
                    <Route path="/partidas/:id" render = { props => ( <ListarJugadores {...props}/>)}>
                    </Route>
                    <Route path="/iniciar/:id/:id_J" render = { props => ( <IniciarPartida {...props}/>)}>
                    </Route>
                   
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App;

