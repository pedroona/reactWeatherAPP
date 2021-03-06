import convert from "convert-units";
import {
  CLOUD,
  SUN,
  RAIN,
  SNOW,
  THUNDER,
  DRIZZLE,
  ATMOSPHERE,
} from "../constants/weathers";

const getTemp = kelvin => {
  return convert(kelvin)
    .from("K")
    .to("C")
    .toFixed(0);
};

const getWeatherState = weatherData => {
  const { id } = weatherData;
  switch (true) {
    case id < 300:
      return THUNDER;
    case id < 500:
      return DRIZZLE;
    case id < 600:
      return RAIN;
    case id < 700:
      return SNOW;
    case id < 800:
      return ATMOSPHERE;
    case id === 800:
      return SUN;
    default:
      return CLOUD;
  }
};

const transformWeather = weatherData => {
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const weatherState = getWeatherState(weatherData.weather[0]);
  const temperature = parseFloat(getTemp(temp));

  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`
  };
  return data;
};

export default transformWeather;
