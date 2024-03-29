const apiKey = "ef26f412bf337932eea863796823b951";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

//fetch input tag
/*document.getElementById("inputForm").addEventListener("submit", function(event){
    event.preventDefault();
    const formData = new FormData(this);
    const cityData = formData.get("cityName");
    console.log("city - ", cityData);
    console.log(cityName)
    cityName = cityData;    //updated the city name
    console.log(cityName)
    document.getElementById("inputField").value = "";
    checkWeather();    // Call checkWeather after updating cityName
})*/

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    console.log(city)
    const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);

    var data = await response.json();
    console.log(data.main.temp);
    console.log(data);

    (response.status === 404) ? window.alert("Enter correct city name") : null;

    //updating temperature
    // const temp = document.getElementsByClassName("temp");
    // temp[0].innerHTML = data.main.temp + "°C";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

    //updating the city name
    // const updateCity = document.getElementsByClassName("city");
    // updateCity[0].innerHTML = cityName;
    document.querySelector(".city").innerHTML = data.name;

    //updating humiidity
    // const humidity = document.getElementsByClassName("humidity");
    // humidity[0].innerHTML = data.main.humidity + "%";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    //updating wind speed
    // const windSpeed = document.getElementsByClassName("wind");
    // windSpeed[0].innerHTML = data.wind.speed + "km/h";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

    //updating the images
    switch(data.weather[0].main) {
        case "Clear":
            weatherIcon.src = "weather-app-img/clear.png";
            break;
        case "Clouds":
            weatherIcon.src = "weather-app-img/clouds.png";
            break;
        case "Drizzle":
            weatherIcon.src = "weather-app-img/drizzle.png";
            break;
        case "Humidity":
            weatherIcon.src = "weather-app-img/humidity.png";
            break;
        case "Mist":
            weatherIcon.src = "weather-app-img/mist.png";
            break;
        case "Snow":
            weatherIcon.src = "weather-app-img/snow.png";
            break;
        case "Wind":
            weatherIcon.src = "weather-app-img/wind.png";
            break;
        default:
            // Handle the case when none of the above conditions match
    }
    
}

searchBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    checkWeather(searchBox.value);
    searchBox.value = "";
})