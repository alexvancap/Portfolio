import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import history from './history';
import NavBar from './components/NavBar'
import Home from './components/homePage/Home'
import About from './components/aboutPage/About'
import Contact from './components/contactPage/Contact'

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <NavBar />
      </div>
      <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
