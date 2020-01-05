import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar2 extends Component {
    
    render () {
        
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>All Restaurants</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/map" exact>Map</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            </div>
    );
  }  
}

export default Navbar2;