import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./App.css";
import LocationList from "./components/LocationList";

const cities = [
  "Málaga,es",
  "Sevilla",
  "Bogotá",
  "Huelva",
  "Lisboa",
  "Washington"
];

class App extends Component {
  handleSelectionLocation = city => {
    console.log(`handleSelectionLocation ${city}`);
  };
  render() {
    return (
      <div className="App">
        <Grid fluid>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <div className="red" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="blue" />
            </Col>
            <Col xs={12} sm={6} md={4}>
              <div className="green" />
            </Col>
          </Row>
        </Grid>
        {/* <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}></LocationList> */}
      </div>
    );
  }
}

export default App;
