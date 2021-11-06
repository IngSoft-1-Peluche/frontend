import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormCrear from './components/Formularios/Crear/FormCrear';
import TablaDis from './components/Tabla/TablaDisp';
import FormUnirse from './components/Formularios/Unirse/FormUnirse';
import ListarJugadores from './components/Listar/ListarJugadores';
import PagInicio from './components/Inicio/PagInicio'
import SalaEspera from './components/Espera/SalaEspera';
import StoreProvider from './store/StoreProvider';
import CartasRepartidas from './components/MostrarCartas/CartasRepartidas';


function App() {
    return(
        <StoreProvider>
            <React.Fragment>
                <Router>
                    <Switch>
                        
                        <Route exact path="/partidasDis" component = { TablaDis }/>
                        <Route exact path="/FormCrear" component = { FormCrear }/>
                        <Route exact path="/FormU/:idPart/:nomPart" component = { FormUnirse }/>
                        <Route exact path="/salaEsp/:id_p" component = { SalaEspera }/>
                        <Route exact path="/partidas/:id" component = { ListarJugadores }/>

                        <Route exact path="/cartas/:idPart" component = { CartasRepartidas }/>
                        
                        <Route exact path="/" component = { PagInicio }/>
                        <Route path="*">{<h1>404 Pagina no encontrada</h1>}</Route>
                    
                    </Switch>
                </Router>
            </React.Fragment>
        </StoreProvider>
    );
}

export default App;

