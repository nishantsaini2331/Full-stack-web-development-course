const btn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const API_key = "a020c8b4fab16c5ecce5b73dbb4681e8";

async function fetchDataByCity(city) {
    try {
        cityName.value = "";
        console.log("city name", city);
        let res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
        );
        let result = await res.json();
        console.log(result)
        if (result.message) {
            document.getElementById(
                "secondDiv"
            ).innerHTML = `<h1>${city} ${result.message}</h1>`;
            return;
        }
        displayWeather(result);
    } catch (err) {
        console.log(err.message);
    }
}
async function fetchDataByCoordinates(lati, longi) {
    try {
        console.log(lati, longi);
        let res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_key}&units=metric`
        );
        let result = await res.json();
        console.log(result);
        if (result.message) {
            document.getElementById(
                "secondDiv"
            ).innerHTML = `<h1>${city} ${result.message}</h1>`;
        }
        displayWeather(result);
    } catch (err) {
        console.log(err.message);
    }
}

btn.addEventListener("click", () => {
    fetchDataByCity(cityName.value);
});

function displayWeather({ name, main, wind,weather }) {
    document.getElementById("secondDiv").innerHTML = `                
    <div id="weatherInfo">
        <p id="temp">${main.temp}°C</p>
        <p class="desc">${weather[0].description}</p>
        <img src='https://openweathermap.org/img/w/${weather[0].icon}.png'>
        <p id="city">${name}</p>
        <div class="otherInfo">
            <div class="wind">
                <p>Wind</p>
                <p>${wind.speed}m/s</p>
            </div>
            <div class="wind">
                <p>Pressure</p>
                <p>${main.pressure}ma</p>
            </div>
            <div class="wind">
                <p>Humidity</p>
                <p>${main.humidity}%</p>
            </div>
        </div>
    </div>`;
}

document.getElementById("currLoc").addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((postion) => {
        let lati = postion.coords.latitude;
        let longi = postion.coords.longitude;
        fetchDataByCoordinates(lati, longi);
    });
});
