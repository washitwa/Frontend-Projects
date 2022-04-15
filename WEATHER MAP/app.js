const temp = document.querySelector(".temperature p");
const loc = document.querySelector(".location p");
const dt = document.querySelector(".date p");

const weather = {}
const d = new Date();

weather.temperature = {
    unit : "celsius"
}

function weather_display(){
    temp.innerHTML = `${weather.value}° C`;
    loc.innerHTML = `${weather.city}, ${weather.country}`;
    dt.innerHTML = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
}

function celToFah(temperature){
    return (temperature*9/5)+32;
}

function fahToCel(temperature){
    return (temperature-32)*9/5;
}

temp.addEventListener("click", function(){
    if(weather.value === undefined)
        return;
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celToFah(weather.value);
        fahrenheit = Math.floor(fahrenheit);
        temp.innerHTML = `${fahrenheit}° <span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }
    else{
        temp.innerHTML = `${weather.value}° <span>C</span>`;
        weather.temperature.unit = "celsius";
    }
});

if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError); 
}else{
    alert("Browser Doesn't Support Geolocation.");
}
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function showError(error){
    alert("Error Occured!");
}
const kelvin = 273;
//API key
const key = "b60e50e183d7f5a2d3261d01385c9f87";

function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    console.log(api);

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;

        })
        .then(function(data){
            weather.value = Math.floor(data.main.temp - kelvin);
            weather.city = data.name;
            weather.country = data.sys.country; 
        })
        .then(function(){
            weather_display();
        });
}


