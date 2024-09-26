
const API_KEY = 'd32a6ddcd9cc4ce1819161219242609'

//this is the url that would be constant in every single request to the weather API
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`

//API call! Definition of the function, we use it inside a component.
// city will be apssed ina based on the city's weather we want to find
async function show(city) {
    try {
        const queryString = `&q=${city}`
        // GET request to BASE_URL (api.weather)
        const response = await fetch(BASE_URL + queryString)
        // the response is a string of json
        // we need to parse it (change the string into a javascript object!)
        const data = await response.json()
        console.log("Data: ", data)
        return data

    } catch(err) {
        console.log(err, ' <- err in show api call')
    }
    
}

//export the functions
export { show }