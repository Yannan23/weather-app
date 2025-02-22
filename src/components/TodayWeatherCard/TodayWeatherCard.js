
function TodayWeatherCard(props) {
    const { temp, temp_max, temp_min, huminity, wind } = props.data

    return (
        <div className="TodayWeatherCard">
            {temp}
            <div>
                L:{temp_min}
                H:{temp_max}
            </div>
            <p>huminity:{huminity}</p>
            <p>wind:{wind}</p>
        </div>
    );
}

export default TodayWeatherCard;
