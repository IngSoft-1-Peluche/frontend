import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormCrear from './components/Formularios/Crear/FormCrear';
import TablaDis from './components/Tabla/TablaDisp';
import FormUnirse from './components/Formularios/Unirse/FormUnirse';
import ListarJugadores from './components/Listar/ListarJugadores';
import IniciarPartida from './components/Iniciar/IniciarPartida';
import PagInicio from './components/Inicio/PagInicio'

function App() {
    return(
        <React.Fragment>
            <Router>
                <Switch>

                    <Route exact path="/FormCrear" render = { props => ( <FormCrear {...props} />)}>
                    </Route>
                    <Route exact path="/partidasDis" render = { props => ( <TablaDis {...props} />)}>
                    </Route>
                    <Route exact path="/FormU/:idPart/:nomPart" render = { props => ( <FormUnirse {...props} />)}>
                    </Route>
                    <Route exact path="/partidas/:id" render = { props => ( <ListarJugadores {...props}/>)}>
                    </Route>
                    <Route exact path="/iniciar/:id/:id_J" render = { props => ( <IniciarPartida {...props}/>)}>
                    </Route>
                    <Route exact path="/" render = { props => ( <PagInicio {...props}/>)}>
                    </Route>
                    <Route path="*"><h1>404 Pagina no encontrada</h1></Route>
                   
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App;

