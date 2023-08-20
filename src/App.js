import './App.css';
import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar'
import VendingMachine from './VendingMachine';
import SailorMoon from './SailorMoon'
import SailorMars from './SailorMars';
import SailorJupiter from './SailorJupiter';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />
        <Route exact path='/'>
          <VendingMachine />
        </Route>
        <Route exact path="/SailorMoon">
          <SailorMoon />
        </Route>
        <Route exact path="/SailorMars">
          <SailorMars />
        </Route>
        <Route exact path="/SailorJupiter">
          <SailorJupiter />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
