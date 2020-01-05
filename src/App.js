import React, { Component } from 'react';
import Restaurants from './components/Restaurants/Restaurants';
import MapContainer from './components/Map/MapContainer';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
    
    render () {
        
        return (
            <div> 
            <div className="container-fluid">
            <Switch>
            <Route path="/" exact component={Restaurants} />
            <Route path="/map" exact component={MapContainer} />
            </Switch>
            </div>
            </div>
    );
  }  
}

export default App;