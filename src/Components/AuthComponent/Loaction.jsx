import React, { Component } from "react";

class Loaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      alert("Geolocation is not supported by this browser");
    }
  }
  getCoordinates(position) {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }
  handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable");
        break;
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation");
        break;

      default:
        alert("unknow error occured");
        break;
    }
  }
  render() {
    return (
      <>
        <div className="locationBlock">
          <h2>location</h2>
          <button onClick={this.getLocation}>Get Coordinates</button>
          <p>Latitude:{this.state.latitude}</p>
          <p>Longitude:{this.state.longitude}</p>
          <p>Adress:{this.state.userAddress}</p>
          {this.state.latitude && this.state.longitude ? (
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=AIzaSyCTAgKIdQXd6hxvnnUz5RyZwea2rCEZDk_A`}
            />
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}

export default Loaction;
