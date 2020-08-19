import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; //important for bootstrap!
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './Home';
import { NoMatch } from './NoMatch';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/personal-website/" component={Home} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
