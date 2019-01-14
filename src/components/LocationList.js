import React from "react";
import WeatherLocation from "./WeatherLocation";
import PropTypes from "prop-types";

const citiesTocity = cities =>
  cities.map((city, index) => <WeatherLocation city={city} key={index}/>);
const locationList = ({ cities }) => <div>{citiesTocity(cities)}</div>;

locationList.prototype = {
  cities: PropTypes.array.isRequired
};

export default locationList;
