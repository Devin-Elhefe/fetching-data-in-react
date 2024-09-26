import { useState, useEffect } from 'react';
// import our service
// all the functions in weatherService being exported 
// will be methods on the weatherService object
import * as weatherService from './services/weatherService'
import WeatherSearch from './components/WeatherSearch';
import WeatherDetails from './components/WeatherDetails';

const App = () => {

  const [cityWeather, setCityWeather] = useState({})
  //location
  //current temp
  //current weather condition

  useEffect(() => {
    console.log('useEffect is running')

    const fetchDefaultData = async () => {
      const data = await weatherService.show('New York');
      const newWeatherState = {
        location: data.location.name,
        temperature: data.current.temp_f,
        condition: data.current.condition.text,
        icon: data.current.condition.icon
      };
      setCityWeather(newWeatherState);
    };

    fetchDefaultData();


  }, []); //empty array says run this function once when the component

  async function fetchData(city){

    //here city is referencing the argument
    const data = await weatherService.show(city)
    // if we want to do ANYTHING with the data we must store it in State
    setCityWeather({
      location: data.location.name,
      currentTemp: data.current.temp_f,
      currentWeatherCondition: data.current.condition.text,
      icon: data.current.condition.icon
    })
  }

  return (
    <main>
      <h1>Weather API</h1>
      <WeatherSearch fetchData={fetchData} />
      <WeatherDetails cityWeather={cityWeather} />
      
    
    </main>
    
  );
}

export default App
