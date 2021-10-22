import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import TablaDis from './components/Tabla/TablaDisp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return(
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/partidasDis" exact render = { props => ( <TablaDis {...props} />)}>
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}
export default App;