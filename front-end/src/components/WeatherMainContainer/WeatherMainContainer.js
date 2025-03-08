import CityWeatherCard from "../CityWeatherCard/CityWeatherCard";
import TodayWeatherCard from "../TodayWeatherCard/TodayWeatherCard";
import ForecastWeatherCard from '../ForecastWeatherCard/ForecastWeatherCard'
import './WeatherMainContainer.scss'

function WeatherMainContainer() {
    const apiData = {
        city: "Sydney",
        temp: 32,
        temp_max: 35,
        temp_min: 31,
        huminity: 2,
        wind: 1
    }

    const cityData = [
        { min: 18, max: 19, city: "sydney" },
        { min: 18, max: 19, city: "mel" },
        { min: 18, max: 20, city: "bri" },
        { min: 18, max: 20, city: "perth" },
    ];

    const dayData = [
        { min: 18, max: 19, day: "Mon", huminity: "5" },
        { min: 18, max: 19, day: "Tue", huminity: "10" },
        { min: 16, max: 23, day: "Wed", huminity: "5" },
        { min: 18, max: 20, day: "Thu", huminity: "6" },
        { min: 12, max: 18, day: "Fri", huminity: "10" },
        { min: 18, max: 20, day: "Sat", huminity: "30" },
        { min: 5, max: 20, day: "Sun", huminity: "60" },
    ]

    return (
        <div className="WeatherMainContainer">
            <div className="TodayWeatherCard"><TodayWeatherCard data={apiData} /></div>
            <div className="WeatherCards">
                <CityWeatherCard cities={cityData} />
                <ForecastWeatherCard days={dayData} />
            </div>
        </div>
    );
}

export default WeatherMainContainer;
