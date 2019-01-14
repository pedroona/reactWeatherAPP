import React, { Component } from "react";
import "./App.css";
import LocationList from './components/LocationList'

const cities = ['Malaga', 'Sevilla', 'Bogotá', 'Huelva', 'Lisboa', 'Washington'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}></LocationList>
      </div>
    );
  }
}

export default App;
