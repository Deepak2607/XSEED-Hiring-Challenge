import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    
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
                <form style={{marginLeft:'50px', width:'300px'}}>
                  <input className="form-control mr-sm-2" type="search" placeholder="Search for Restaurants" aria-label="Search" value={this.props.query}
                   onChange={this.props.handleInputChange} />
                </form>
                <form style={{marginLeft:'20px', width:'400px'}}>
                  <input className="form-control mr-sm-2" type="search" placeholder="Search for Cuisines (Indian, Asian, Korean etc)" aria-label="Search" value={this.props.query2}
                   onChange={this.props.handleInputChange2} />
                </form>
              </div>
            </nav>
            </div>
    );
  }  
}

export default Navbar;