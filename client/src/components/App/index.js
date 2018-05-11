import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import NotFound from '../NotFound';

import './style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route component={NotFound}/>
       </Switch>
      </Router>
    );
  }
}

export default App;
