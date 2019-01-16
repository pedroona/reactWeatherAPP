import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Row, Col } from "react-flexbox-grid";
import "./App.css";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";

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
      <Grid>
        <Row>
          <Col xs={12}>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  WeatherApp
                </Typography>
              </Toolbar>
            </AppBar>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8} lg={6}>
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectionLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtended city="Prueba"/>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
