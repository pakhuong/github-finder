import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';

import Menu from './Menu';
import Home from './Home/Home';
import UserRepo from './UserRepo/UserRepo';
import UserRepoCommit from './UserRepoCommit/UserRepoCommit';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <LoadingBar style={{ zIndex: 9999 }}/>
          <Menu />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/users/:username' component={UserRepo} />
            <Route path='/users/:username/repositories/:repoName' component={UserRepoCommit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
