import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; //important for bootstrap!
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import { NoMatch } from './NoMatch';
import Prosthetic from './projects/prosthetic.js';
import AtomicBot from './projects/atomicbot.js';


function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/prosthetic-simulator" component={Prosthetic} />
            <Route exact path="/chess-bot" component={AtomicBot} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;
