import React from "react";
import { NavLink } from "react-router-dom";
import moon from './imgs/moon.jpg'
import mars from './imgs/mars.jpg'
import jupiter from './imgs/jupiter.jpg'


function NavBar() {
  return (

    <nav className="NavBar">
      <NavLink exact to="/">
        Go Back To Fridge
      </NavLink>
      {/* <NavLink exact to="/SailorMoon">
        <img src={moon} className="moon" />
      </NavLink>
      <NavLink exact to="/SailorMars">
        <img src={mars} className="mars" />
      </NavLink>
      <NavLink exact to="/SailorJupiter">
        <img src={jupiter} className="jupiter" />
      </NavLink> */}
    </nav>
  );
}

export default NavBar;
