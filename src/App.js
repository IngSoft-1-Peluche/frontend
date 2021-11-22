import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import FormCrear from './components/Formularios/Crear/FormCrear';
import TablaDis from './components/Tabla/TablaDisp';
import FormUnirse from './components/Formularios/Unirse/FormUnirse';
import PagInicio from './components/Inicio/PagInicio'
import Home from './components/Juego/Home'
import WsSala from './components/Espera/WsSala';



function App() {
    return (

        <Router>
            <Switch>

                <Route exact path="/partidasDis" component={TablaDis} />
                <Route exact path="/FormCrear" component={FormCrear} />
                <Route exact path="/FormU/:idPart/:nomPart" component={FormUnirse} />
                <Route exact path="/salaEsp" component={WsSala} />
                <Route exact path="/juego" component={Home} />
                <Route exact path="/" component={PagInicio} />
                <Route path="*">{<h1>404 Pagina no encontrada</h1>}</Route>

            </Switch>
        </Router>

    );
}

export default App;

