import { api_key, url_base_weather } from '../constants/api_weather';

export const getUrlWeatherByCity = city => {
    return `${url_base_weather}${city}${api_key}`;
}