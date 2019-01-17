import React, { Component } from "react";
import ForecastItem from "./ForecastItem";
import { getUrlForecastByCity } from "./../services/getUrlForecastByCity";
import { transformWeatherForecast } from "./../services/transformWeather";
import "./styles.css";

const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
];

// const data = {
//   temperature: 15,
//   weatherState: "normal",
//   humidity: 20,
//   wind: "normal"
// }

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }
  renderForecastItemDay() {
    const { data } = this.state;
    return days.map(day => {
      return <ForecastItem key={day} weekDay={day} hour="12:30" data={data} />;
    });
  }
  componentDidMount() {
    const { city } = this.props;
    const url_forecast = getUrlForecastByCity(city);
    let data = [];
    fetch(url_forecast)
      .then(result => result.json())
      .then(resultJson => {
        resultJson.list.map(result => console.log(result));
        console.log(resultJson.list);
      });
  }
  render() {
    const { city } = this.props;
    const { data } = this.state;
    return (
      <div>
        <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
        {/* {(data) ? this.renderForecastItemDay() : null} */}
      </div>
    );
  }
}

export default ForecastExtended;
