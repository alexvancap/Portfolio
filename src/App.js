import React from 'react';
import { BrowserRouter as Router, //Route, 
  Switch } from "react-router-dom";
import './App.css';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <div className="App">
      
      </div>
      <Switch>
          {/* <Route path="/home">
            <About />
          </Home> */}
        </Switch>
    </Router>
  );
}

export default App;
