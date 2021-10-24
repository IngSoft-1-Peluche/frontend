import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormCrear from './components/Formularios/Crear/FormCrear';


function App() {
    return(
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/FormCrear" exact render = { props => ( <FormCrear {...props} />)}>
                    </Route>
                    

                </Switch>
            </Router>
        </React.Fragment>
    )
}
export default App;
