const Api_key = "99ec99f82f3712213de8fb30cc9f6947";

async function getCityName() {
    let city_Name = document.getElementById("city_name").value;
    const geocode = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_Name}&limit=1&appid=${Api_key}`);
    let GeocodeDATA = await geocode.json();

    if (!GeocodeDATA.length) {
        document.getElementById("output").innerText = "City not found!";
        return;
    }

    let lat = GeocodeDATA[0].lat;
    let lon = GeocodeDATA[0].lon;
    getWeather(lat, lon);
}

async function getWeather(lat, lon) {
    const weatherAPI = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api_key}&units=metric`);
    let weather = await weatherAPI.json();

    const temperature = weather.main.temp;
    const condition = weather.weather[0].description; // or .main if you prefer

    document.getElementById("output").innerText =
        `weather: ${condition}, temperature: ${Math.round(temperature)}℃`;
}
