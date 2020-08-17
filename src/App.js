import React, { useEffect } from 'react';
import Aos from "aos";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; //important for bootstrap!
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import { Projects } from './Projects';
import { Photography } from './Photography';
import { Blog } from './Blog';
import { NoMatch } from './NoMatch';


function App() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/photography" component={Photography} />
          <Route path="/blog" component={Blog} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
