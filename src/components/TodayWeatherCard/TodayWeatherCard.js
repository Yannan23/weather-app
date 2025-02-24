import './styles/TodayWeatherCard.css'

function TodayWeatherCard(props) {
    const { temp, temp_max, temp_min, huminity, wind } = props.data

    return (
        <div className="TodayWeatherCard">
            <p>{temp}</p>
            <p>
                L:{temp_min}
                H:{temp_max}
            </p>
            <p>huminity:{huminity}</p>
            <p>wind:{wind}</p>
        </div>
    );
}

export default TodayWeatherCard;
