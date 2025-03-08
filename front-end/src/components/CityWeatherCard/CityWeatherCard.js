import './CityWeatherCard.scss'

function CityWeatherCard(props) {
    const { cities } = props
    return (
        <div className="CityWeatherCard">
            {cities.map((city, index) => {
                return (
                    <div>{city.city} min:{city.min} max:{city.max}</div>
                )
            })}
        </div>
    );
}

export default CityWeatherCard;
