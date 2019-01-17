import React, { Component } from "react";
import CircularProgress from '@material-ui/core/CircularProgress'
import PropTypes from 'prop-types'
import Location from "./Location";
import WeatherData from "./WeatherData";
import transformWeather from '../../services/transformWeather';
import {getUrlWeatherByCity} from '../../services/getUrlWeatherByCity'
import "./styles.css";

class WeatherLocation extends Component {
  constructor(props) {
    super(props);
    const {city} = props;
    this.state = {
      city,
      data: null
    };
  }

  componentDidMount() {
    this.handleUpdateClick();
  }
  

  handleUpdateClick = () => {
    const data = {
      temperature: 15,
      weatherState: "normal",
      humidity: 20,
      wind: "normal"
  }
  this.setState({data: data})

    //******* COMENTADO Y HARDCODEADO DURANTE EL BLOQUEO DE LA API *******//

    // const api_weather = getUrlWeatherByCity(this.state.city);
    // fetch(api_weather)
    //   .then(resolve => {
    //     return resolve.json();
    //   })
    //   .then(resolveJson => {
    //     const newWeather = transformWeather(resolveJson);
    //     this.setState({
    //       data: newWeather
    //     });
    //   });
  };
  render() {
    const { onWeatherLocationClick } = this.props;
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func.isRequired,
}

export default WeatherLocation;
