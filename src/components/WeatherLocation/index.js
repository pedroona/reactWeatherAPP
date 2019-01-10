import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import { SNOW, WINDY } from "../../constants/weathers";
import "./styles.css";

const location = "Malaga,es";
const api_key = "eda93e9962ec6f167534d81e1ca17ee6";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather?q=";
const options = "&units=metric&appid=";

const api_weather = `${url_base_weather}${location}${options}${api_key}`;

const data = {
  temperature: 2,
  weatherState: SNOW,
  humidity: 30,
  wind: "10 m/s"
};
const data2 = {
    temperature: 20,
    weatherState: WINDY,
    humidity: 90,
    wind: "50 m/s"
  };

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: "Barcelona",
            data: data,
        };
    }

    handleUpdateClick = () => {
        fetch(api_weather);
        this.setState({
            city: "Madrid",
        });
    }
  render() {
      const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
