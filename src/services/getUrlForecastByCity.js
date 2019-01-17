import {api_key, url_base_forecast} from './../constants/api_weather';

export const getUrlForecastByCity = city => {
    return (`${url_base_forecast}${city}${api_key}`);
} 