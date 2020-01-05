import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Navbar2 from "../Navbar/Navbar2";
import axios from 'axios';

class MapContainer extends Component {
    
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    restaurants:[]
  };


    componentDidMount=()=> {
        //fetching data
        axios.get("https://deepak2607.github.io/XSEED_restaurants2.json").then(response=>{

            const restaurants= response.data; 
            console.log(restaurants);

            this.setState({
                restaurants:restaurants
            });
        })
    }

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {
      
    if (!this.props.loaded) return <div>Loading...</div>;
      
    console.log(this.state.restaurants);
    

    return (
      
      <div>
      <Navbar2/>
        
      <Map
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ height: '90%', position: 'relative', width: '100%' }}
        zoom={2}>
        
        
        {this.state.restaurants.map(restaurant=> (

            <Marker key={restaurant.Restaurant_ID}
              name= {'Restaurant ID => ' + restaurant.Restaurant_ID + ' address => ' + restaurant.Address}
              onClick={this.onMarkerClick}
              position={{ lat: restaurant.Latitude , lng: restaurant.Longitude }}
            />
        ))}
       

        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>

      </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("")
})(MapContainer)
