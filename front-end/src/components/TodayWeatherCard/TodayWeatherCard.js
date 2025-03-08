import './TodayWeatherCard.scss'

function TodayWeatherCard(props) {
    const { temp, temp_max, temp_min, huminity, wind, city } = props.data
    return (
        <div className="TodayWeatherCard">
            {city}
            {temp}

            L:{temp_min}
            H:{temp_max}

            huminity:{huminity}
            wind:{wind}
        </div>
    );
}

export default TodayWeatherCard;
