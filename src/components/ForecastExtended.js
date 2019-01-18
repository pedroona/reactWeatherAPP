import React, { Component } from "react";
import ForecastItem from "./ForecastItem";
import { getUrlForecastByCity } from "./../services/getUrlForecastByCity";
import transformForecast from "./../services/transformForecast";
import CircularProgress from "@material-ui/core/CircularProgress";
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

class ForecastExtended extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  renderForecastItemDay() {
    const { data } = this.state;
    return data.map(item => {
      return (
        <ForecastItem
          key={`${item.weekDay}${item.hour}`}
          weekDay={item.weekDay}
          hour={`${item.hour}:00`}
          data={item.data}
        />
      );
    });
  }

  renderProgress() {
    return <CircularProgress />;
  }

  componentDidMount() {
    const { city } = this.props;
    this.updateCity(city);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city != this.props.city) {
      this.setState({
        data: null
      })
      this.updateCity(nextProps.city);
    }
  }

  updateCity = city => {
    const url_forecast = getUrlForecastByCity(city);
    fetch(url_forecast)
      .then(result => result.json())
      .then(resultJson => {
        const res = transformForecast(resultJson);
        this.setState({
          data: res
        });
      });
  };

  render() {
    const { city } = this.props;
    const { data } = this.state;
    return (
      <div>
        <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
        {data ? this.renderForecastItemDay() : this.renderProgress()}
      </div>
    );
  }
}

export default ForecastExtended;
