const apiKey =  "2eaaf63cfb416bf2e134c49946bd1b16"


$(document).ready(function(){
    $("#date").text( moment().format('ddd MMM Do, YYYY'))
}
)

function weather (city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city +"&appid=" + apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data))
}
function displayWeather (data) {
const {name} = data
document.querySelector(".city").innerHTML = name
const {temp} = data.main
document.querySelector(".temp").innerHTML = "Temperature: " + temp
const { speed } = data.wind
document.querySelector(".wind").innerHTML = "Wind: " + speed
const {humidity} = data.main
document.querySelector(".humidity").innerHTML = "Humidity: " + humidity 
}
{
    function search(){
        this.weather(document.querySelector(".search-bar").value)
    }
}



document.querySelector(".btn").addEventListener("click", function(){
    search()
})