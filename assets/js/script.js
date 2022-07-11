var apiKey =  "2eaaf63cfb416bf2e134c49946bd1b16"

function weather (){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Austin&appid=2eaaf63cfb416bf2e134c49946bd1b16"
    ).then((response) => response.json())
    .then((data) => console.log(data))
}
weather()