import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import Menu from './Menu/Menu';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
