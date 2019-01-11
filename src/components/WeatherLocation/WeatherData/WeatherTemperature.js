import React from "react";
import WeatherIcons from "react-weathericons";
import {
  CLOUD,
  RAIN,
  SUN,
  SNOW,
  THUNDER,
  DRIZZLE,
  ATMOSPHERE,
} from "../../../constants/weathers";
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
  [CLOUD]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [THUNDER]: "day-thunderstorm",
  [DRIZZLE]: "day-showers",
  [ATMOSPHERE]: "windy",
};

const getWeatherIcon = weatherState => {
  let icon = icons[weatherState];
  const sizeIcon = "4x";
  if (!icon || icon === undefined) {
    icon = "day-sunny";
  }
  return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    <span>{getWeatherIcon(weatherState)}</span>
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">{`C°`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;
