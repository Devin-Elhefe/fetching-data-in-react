

export default function WeatherDetails(){
    return (
        <section>
            <h2>Weather Details</h2>
            <p>Location: {props.cityWeather.location}</p>
            <p>Temperature: {props.cityWeather.currentTemp} </p>
            <p>Condition: {props.cityWeather.currentCondition} </p>
            <img src={`https:${props.cityWeather.icon}`} alt="weather icon" />
        </section>
    )
}