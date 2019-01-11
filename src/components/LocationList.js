import React from "react";
import WeatherLocation from "./WeatherLocation";

const locationList = () => {
  return (
    <div>
      <WeatherLocation city="Málaga" />
      <WeatherLocation city="Washington,us" />
      <WeatherLocation city="Sevilla" />
      <WeatherLocation city="Huelva" />
      <WeatherLocation city="Londres" />
    </div>
  );
};

export default locationList;