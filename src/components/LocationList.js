import React from "react";
import WeatherLocation from "./WeatherLocation";

const locationList = () => {
  return (
    <div>
      <WeatherLocation city="Málaga" />
      <WeatherLocation city="Sevilla" />
      <WeatherLocation city="Huelva" />
      <WeatherLocation city="Londres" />
      <WeatherLocation city="Habana" />
    </div>
  );
};

export default locationList;