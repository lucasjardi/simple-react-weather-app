import styled from 'styled-components';

import { Weather } from "../models/weather";

const Card = (props: { className?: string, currentWeather: Weather, dailyForecast: Weather[] }) => {
    return (
        <div className={props.className}>
            <div className="main-temp">
                <h1>{Math.round(props.currentWeather.temp)}°</h1>
                <h2>{props.currentWeather.city}</h2>
            </div>
            <div>{Math.round(props.currentWeather.temp_min)}°/{Math.round(props.currentWeather.temp_max)}°</div>
            <div>low high</div>

            <div className="daily-forecast">
                {props.dailyForecast.slice(0, 5).map((forecast, index) => {
                    return (
                        <div key={index}>
                            {!!forecast.dt && <span>{new Date(forecast.dt * 1000).toLocaleDateString()}</span>}
                            <h3>{Math.round(forecast.temp_min)}°/{Math.round(forecast.temp_max)}°</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const WeatherCard = styled(Card)`
    background: #fff;
    border-radius: 2px;
    padding: 2rem;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    .main-temp {
        display: flex;
        align-items: center;

        h1, h2 {
            margin: 0;
        }

        h1 {
            margin-right: 16px;
        }
    }

    .daily-forecast {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        margin-top: 1rem;

        > div {
            display: flex;
            flex-direction: column;
            text-align: center;

            h3 {
                margin: 0;
                padding: 0;
            }
        }
    }

    @media (max-width: 1279px) {
        .daily-forecast {
            grid-template-columns: 1fr;
        }
    }

`

export default WeatherCard;