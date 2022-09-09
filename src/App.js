
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Users from './components/Users';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
       <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route  exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



 


