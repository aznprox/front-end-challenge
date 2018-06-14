import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

  // componentWillMount(){
  //   getCurrentPosition() 
  // }

  render() {

    const style = {
      width: '50vw',
      height: '50vh'
    }

    return (
      <Map google={this.props.google} zoom={14} style={style}>
 
        {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> */}
 
        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}

      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo"
})(MapContainer)