import React, { Component } from 'react'
import Create from './Create'
import Home from './Home'
import Mapper from './Mapper'
import Time from './Time'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/mapper">
          <Mapper />
        </Route>
        <Route path="/time">
          <Time />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    )
  }
}

export default Body