import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //important for bootstrap!
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from './Home';
import { Blog } from './Blog';
import { NoMatch } from './NoMatch';
import { Layout} from './Components/Layout';


function App() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
