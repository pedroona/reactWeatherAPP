import React from "react";
import PropTypes from "prop-types";
import WeatherData from "../WeatherLocation/WeatherData";

const ForecastItem = ({ weekDay, hour, data }) => {
  return (
    <div>
      <h2>{weekDay} {hour}</h2>
      <WeatherData data={data} />
    </div>
  );
};

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  }).isRequired
};

export default ForecastItem;
