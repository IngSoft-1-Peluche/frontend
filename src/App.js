import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormCrear from './components/Formularios/Crear/FormCrear';
import TablaDis from './components/Tabla/TablaDisp';
import FormUnirse from './components/Formularios/Unirse/FormUnirse';
import ListarJugadores from './components/Listar/ListarJugadores';
import PagInicio from './components/Inicio/PagInicio'
import SalaEspera from './components/Espera/SalaEspera';
import StoreProvider from './store/StoreProvider';
import Home from './components/Juego/Home'
import { Responder, Sospechar } from './components/Sospecha';
import PreSala from './components/Espera/PreSala';
import SalaChat from './components/SalaChat/SalaChat';



function App() {
    return(
        <StoreProvider>
            <React.Fragment>
                <Router>
                    <Switch>
                        
                        <Route exact path="/partidasDis" component = { TablaDis }/>
                        <Route exact path="/FormCrear" component = { FormCrear }/>
                        <Route exact path="/FormU/:idPart/:nomPart" component = { FormUnirse }/>
                        <Route exact path="/salaEsp" component = { PreSala }/>

                        <Route exact path="/salaChat" component = { SalaChat }/>


                        <Route exact path="/juego" component = { Home }/>                      

                        <Route exact path="/sospechar" component = { Sospechar }/>
                        <Route exact path="/responder" component = { Responder }/>

                        <Route exact path="/" component = { PagInicio }/>
                        <Route path="*">{<h1>404 Pagina no encontrada</h1>}</Route>
                    
                    </Switch>
                </Router>
            </React.Fragment>
        </StoreProvider>
    );
}

export default App;

