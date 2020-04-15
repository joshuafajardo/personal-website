import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //important for bootstrap!
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './Home';
import { Projects } from './Projects';
import { Photography } from './Photography';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Layout} from './Components/Layout';
import { Navigation } from './Components/Navigation';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path={["/projects", "/photography", "/about"]} component={Navigation}/>
            <Layout>
              <Switch>
                <Route path="/projects" component={Projects} />
                <Route path="/photography" component={Photography} />
                <Route path="/about" component={About} />
              </Switch>
            </Layout>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
