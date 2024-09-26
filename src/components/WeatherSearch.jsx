import { useState } from 'react'

export default function WeatherSearch(props){

    const [city, setCity] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        console.log('handlesubmit is being called')

        props.fetchData(city);

        setCity('');
    }

    return (
        <section>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="city"></label>
                <input 
                type="text" 
                id='city' 
                placeholder="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <button type='submit'>Search Weather</button>
            </form>

        </section>
    )
}