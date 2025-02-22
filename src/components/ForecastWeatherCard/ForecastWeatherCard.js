
function ForecastWeatherCard(props) {
    const { days } = props
    return (
        <div className="ForecastWeatherCard">
            {days.map((day, index) => {
                return (
                    <div key={Date.now() + index}>{day.day} {day.min}~{day.max} {day.huminity}</div>
                )
            })}
        </div>
    );
}

export default ForecastWeatherCard;
