import { Weather } from "../models/weather";

const baseUrl = 'https://api.openweathermap.org/data/2.5';

async function fetchCurrentWeather(city: string): Promise<Response> {
    return fetch(`${ baseUrl }/weather?q=${city}&units=metric&appid=${ process.env.REACT_APP_OPEN_WEATHER_API_KEY }`);
};

async function fetchDailyForecast(lat: number, long: number): Promise<Response> {
    return fetch(`${ baseUrl }/onecall?lat=${ lat }&lon=${ long }&exclude=minutely,hourly,current&units=metric&appid=${ process.env.REACT_APP_OPEN_WEATHER_API_KEY }`);
};

export async function fetchCurrentAndDailyForecast(city: string): Promise<{ currentWeather: Weather, dailyForecast: Weather[] }> {
    const currentWeather = await fetchCurrentWeather(city);

    switch(currentWeather.status) {
        case 200:
            const currentWeatherBody: any = await currentWeather.json();
            const dailyForecast = await fetchDailyForecast(currentWeatherBody.coord.lat, currentWeatherBody.coord.lon);
            const dailyForecastBody: any = await dailyForecast.json();

            return {
                currentWeather: {
                    city: currentWeatherBody.name,
                    temp: currentWeatherBody.main.temp,
                    temp_max: currentWeatherBody.main.temp_max,
                    temp_min: currentWeatherBody.main.temp_min,
                },
                dailyForecast: dailyForecastBody?.daily?.map((weather: any) => ({
                    temp: weather.temp.day,
                    temp_max: weather.temp.max,
                    temp_min: weather.temp.min,
                    dt: weather.dt,
                })),
            };
        case 404:
            throw new Error('City not found');
        default:
            throw new Error('Request Error');
    }
}