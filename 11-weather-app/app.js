/*
  WEATHER APP:

  1. Log out the current temperature for Sydney's latitude and longitude
    (hint: complete the getWeather function, returning a promise with the result from the API call, use that promise to then log the result)
  2. Convert the temperature from kelvin to degrees celsius
  3. Add a form on index.html that allows a user to search for any city's weather and logs out the result.
    (hint: google maps api from previous example)
  4. Display the result of the users search on the DOM.
  5. Display the type of weather too (cloudy, sunny, etc -- check the response)

  --BONUS ROUND--
  6. Add a loading indicator until you're ready to display the information for the city.
  7. Make it pretty, ideas:
    * Change the background of the page to reflect the temperature
    * Add pictures to represent the type of weather -- clouds, the sun, etc.
    * Request a new temperature every few minutes (hint: setInterval)
    * Animate when the weather changes.
    *


*/

// console
let container = document.querySelector('.printWeather')

let state = document.querySelector('.printWeather-temperature')
let stateIMG = document.querySelector('.printWeather-visual')
let stateBackground = document.querySelector('body')

// location

// let mappedData = JSON.parse('/countriesToCities.json')
let mapsApi = 'https://maps.googleapis.com/maps/api/geocode/json?address='

// weather
let weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
let apiKey = "72af66db614bf9fd03583352142dd7a7";

// Input Submit Controller
delegate('#searchLocation', 'click', '.searchLocation-search', event => {
    event.preventDefault()

    let userInput = document.querySelector('.searchLocation-input').value
    state.innerHTML = `<img src="imgs/loading.gif" class="printWeather-loading" />`
    getLatLng(userInput)
    .then(location => {
        console.log(location);
        return getWeather(location.lat, location.lng)
    })
    .then(temp => {
        state.removeChild(document.querySelector('.printWeather-loading'))
        state.innerHTML = `${temp}°C`
        if (temp <= 15) {
            stateIMG.setAttribute("src", "imgs/cold.gif")
        } else if (temp >= 15 && temp <= 26 ) {
            stateIMG.setAttribute("src", "imgs/coldNhot.gif")
        } else {
            stateIMG.setAttribute("src", "imgs/hot.gif")
        }
        console.log(temp);
    })
})

function getLatLng(city) {
    return fetch(mapsApi + city) // we have to return our promise
    .then (response => response.json())
    .then(data => {

        let location =  data.results[0].geometry.location
        // let lattitude = data.results[0].geometry.location.lat
        // let longitude = data.results[0].geometry.location.lng

        // console.log(lattitude, longitude)
        // console.log(data.results)
        return location
    })
}

function getWeather(lat, lng) {
    let url = `${weatherUrl}?lat=${lat}&lon=${lng}&APPID=${apiKey}`

    return fetch(url)
    .then(response => response.json())
    .then(data => {
        let temperature = Math.floor(data.main.temp - 273.15)

        // let tempNode = document.querySelector('.printWeather-temperature')

        // tempNode.innerHTML = temperature
        console.log(data.main)
        return temperature
    })
}


// getWeather(33.8688, 151.2093)

// getLatLng(userInput)
