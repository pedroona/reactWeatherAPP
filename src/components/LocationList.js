import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from "prop-types";
import './styles.css';

const locationList = ({ cities, onSelectedLocation }) => {
  const handleWeatherlocationClick = city => {
    onSelectedLocation(city);
  }
  const citiesTocity = cities =>
  cities.map(city => (
    <WeatherLocation 
      city={city} 
      key={city} 
      onWeatherLocationClick={() => handleWeatherlocationClick(city)}
      />
      ));
  return (
  <div className="locationList">{citiesTocity(cities)}</div>
  )};

locationList.prototype = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func.isRequired,
};

export default locationList;
