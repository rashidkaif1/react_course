
// import Header from './components/Header';
// import Leftbar from './components/Leftbar';
// import Main from './components/Main';

//import TForm from './components/TForm';
//import About from './components/About';
//import Alert from './components/Alert';

<div id="wrapper">
      
      <Navbar mode={mode} modeName={modeName} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}/>
      <TForm mode={mode} showAlert={showAlert} heading="Enter the text to analyze below" />
    
</div>


import Navbar from './components/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <>
    <Router>
      <div>
      <Navbar mode={mode} modeName={modeName} toggleMode={toggleMode}></Navbar>

      
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

