import './styles/CityWeatherCard.css'

function CityWeatherCard(props) {
    const { cities } = props

    return (
        <div className="CityWeatherCard">
            {cities.map((city, index) => {
                return (
                    <p key={index}>{city.city}: {city.min}~{city.max}</p>
                )
            })}
        </div>
    );
}

export default CityWeatherCard;
