const apiKey = "ef26f412bf337932eea863796823b951";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let cityName = "Kolkata";

//fetch input tag
document.getElementById("inputForm").addEventListener("submit", function(event){
    event.preventDefault();
    const formData = new FormData(this);
    const cityData = formData.get("cityName");
    console.log("city - ", cityData);
    console.log(cityName)
    cityName = cityData;    //updated the city name
    console.log(cityName)
    document.getElementById("inputField").value = "";
    checkWeather();    // Call checkWeather after updating cityName
})

async function checkWeather(){
    console.log(cityName)
    const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${cityName}`);

    var data = await response.json();
    console.log(data.main.temp);
    console.log(data);

    //updating temperature
    const temp = document.getElementsByClassName("temp");
    temp[0].innerHTML = data.main.temp + "°C";

    //updating the city name
    const updateCity = document.getElementsByClassName("city");
    updateCity[0].innerHTML = cityName;

    //updating humiidity
    const humidity = document.getElementsByClassName("humidity");
    humidity[0].innerHTML = data.main.humidity + "%";

    //updating wind speed
    const windSpeed = document.getElementsByClassName("wind");
    windSpeed[0].innerHTML = data.wind.speed + "km/h";
}