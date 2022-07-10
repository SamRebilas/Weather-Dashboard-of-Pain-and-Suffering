var button = document.querySelector('.button')
var inputValue = document.querySelector('.search')
var name = document.querySelector('.cityName')
var temp = document.querySelector('.temp')
var wind = document.querySelector('.wind')
var humidity = document.querySelector('.humidity')
var uvIndex = document.querySelector('.uv-index')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+inputValue.value+'&lon='+inputValue.value+'&appid=6a95f043ca0f7aaa2c813fca9771dc41')
    .then(response => response.json())
    .then(data => console.log(data))
    
    .catch(err => alert("wrong city name"))
})
