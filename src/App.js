import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TablaDis from './components/Tabla/TablaDisp';
import FormUnirse from './components/Formularios/Unirse/FormUnirse';


function App() {
    return(
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/partidasDis" exact render = { props => ( <TablaDis {...props} />)}>
                    </Route>
                    <Route path="/FormU/:idPart/:nomPart" render = { props => ( <FormUnirse {...props} />)}>
                    </Route>
                    
                </Switch>
            </Router>
        </React.Fragment>
    )
}
export default App;
