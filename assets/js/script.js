//var Day1 = document.getElementById("#day1")

const apiKey =  "2eaaf63cfb416bf2e134c49946bd1b16"
var startDate = moment()
$(document).ready(function(){
    $("#date").text( moment().format('ddd MMM Do, YYYY'))
}
)
$(document).ready(function(){
    $("#date0").text( moment().format('ddd MMM Do, YYYY'))
}
)
function weather (city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city +"&appid=" + apiKey + "&units=imperial"
    )
    .then((response) => response.json())
    .then((data) => displayWeather(data))
}

function displayWeather (data) {
    
var name = data.name
document.querySelector(".city").innerHTML = name
var temp = data.main.temp
document.querySelector(".temp").innerHTML = "Temperature: " + temp + ".F"
var speed  = data.wind.speed
document.querySelector(".wind").innerHTML = "Wind: " + speed + "MPH"
var humidity = data.main.humidity
document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%"
var icon = data.weather[0].icon
document.querySelector(".uv-index").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

  // localStorage.setItem(name)
  // localStorage.getItem(name)
}
    function search(){
       weather(document.querySelector(".search-bar").value)
    }
    
    
document.querySelector(".btn").addEventListener("click", function(){
    search()
})


function Day1 (city){
    fetch("https://api.openweathermap.org/data/2.5/forecast/?q="+ city +"&exclude=hourly,minutely,alert&appid=fe72ff1e0807d8c0c9ece9b274326ff1&units=imperial")
    
    .then((response)=> response.json())
    .then((data)=> displayDay1(data))
  

}
function displayDay1(data){
   for (var i=0;i<5;i++){
    var dt_txt = data.list[i+2].dt_txt
    document.querySelector(".date1").innerHTML = "Date: " + dt_txt
    var temp = data.list[i+2].main.temp
    document.querySelector(".temp1").innerHTML = "Temp: " + temp +".F"
    var humidity = data.list[i+2].main.humidity
    document.querySelector(".humidity1").innerHTML = "Humidity: " + humidity +"%"
    var speed = data.list[i+2].wind.speed
    document.querySelector(".wind1").innerHTML = "Wind speed: " + speed + "MPH"
    var icon = data.list[i+2].weather[0].icon
    document.querySelector(".uv-index1").src = "http://openweathermap.org/img/wn/"  + icon + ".png"

    console.log(dt_txt)
    console.log (temp)
}}


    {
    function search1(){
        Day1(document.querySelector(".search-bar").value)
    }
    }
    document.querySelector(".btn").addEventListener("click", function(){
        search1()
    })


    function Day2 (city){
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=fe72ff1e0807d8c0c9ece9b274326ff1&units=imperial")
        
        .then((response)=> response.json())
        .then((data)=> displayDay2(data))
    }

    function displayDay2(data){
        for(i=0;i<5;i++){
        var dt_txt=data.list[i+10].dt_txt
       document.querySelector(".date2").innerHTML = "Date: " + dt_txt
        var temp = data.list[i+10].main.temp
        document.querySelector(".temp2").innerHTML = "Temp: " + temp + ".F"
        var humidity = data.list[i+10].main.humidity
        document.querySelector(".humidity2").innerHTML = "Humidity: " + humidity +"%"
        var speed = data.list[i+10].wind.speed
        document.querySelector(".wind2").innerHTML = "Wind speed: " + speed + "MPH"
        var icon = data.list[i+10].weather[0].icon
        document.querySelector(".uv-index2").src = "http://openweathermap.org/img/wn/"  + icon + ".png"
    }}
        
    
    {
    function search2(){
        Day2(document.querySelector(".search-bar").value)
    }
    }
    document.querySelector(".btn").addEventListener("click", function(){
        search2()
    })


    function Day3 (city){
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=fe72ff1e0807d8c0c9ece9b274326ff1&units=imperial&exclude=hourly,minutely,alert")
        
        .then((response)=> response.json())
        .then((data)=> this.displayDay3(data))
    }

    function displayDay3(data){
        for(i=0;i<5;i++){
        var dt_txt=data.list[i+18].dt_txt
       document.querySelector(".date3").innerHTML = "Date: " + dt_txt
        var temp = data.list[i+18].main.temp
        document.querySelector(".temp3").innerHTML = "Temp: " + temp + ".F"
        var humidity = data.list[i+18].main.humidity
        document.querySelector(".humidity3").innerHTML = "Humidity: " + humidity + "%"
        var speed = data.list[i+18].wind.speed
        document.querySelector(".wind3").innerHTML = "Wind speed: " + speed + "MPH"
        var icon = data.list[i+18].weather[0].icon
        document.querySelector(".uv-index3").src = "http://openweathermap.org/img/wn/"  + icon + ".png"
    }}
        
    
    {
    function search3(){
        Day3(document.querySelector(".search-bar").value)
    }
    }
    document.querySelector(".btn").addEventListener("click", function(){
        search3()
    })
    function Day4 (city){
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=fe72ff1e0807d8c0c9ece9b274326ff1&units=imperial&exclude=hourly,minutely,alert")
        
        .then((response)=> response.json())
        .then((data)=> this.displayDay4(data))
    }


    function displayDay4(data){
        for(i=0;i<5;i++){
        var dt_txt=data.list[i+26].dt_txt
        document.querySelector(".date4").innerHTML = "Date: " + dt_txt
        var temp = data.list[i+26].main.temp
        document.querySelector(".temp4").innerHTML = "Temp: " + temp + ".F"
        var humidity = data.list[i+26].main.humidity
        document.querySelector(".humidity4").innerHTML = "Humidity: " + humidity + "%"
        var speed = data.list[i+26].wind.speed
        document.querySelector(".wind4").innerHTML = "Wind speed: " + speed + "MPH"
        var icon = data.list[i+26].weather[0].icon
        document.querySelector(".uv-index4").src = "http://openweathermap.org/img/wn/"  + icon + ".png"
    }}
        
    
    {
    function search4(){
        Day4(document.querySelector(".search-bar").value)
    }
    }
    document.querySelector(".btn").addEventListener("click", function(){
        search4()
    })
    function Day5 (city){
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=fe72ff1e0807d8c0c9ece9b274326ff1&units=imperial&exclude=hourly,minutely,alert")
        
        .then((response)=> response.json())
        .then((data)=> this.displayDay5(data))
    }


    function displayDay5(data){
        for(i=0;i<5;i++){
        var dt_txt=data.list[i+34].dt_txt
       document.querySelector(".date5").innerHTML = "Date: " + dt_txt
        var temp = data.list[i+34].main.temp
        document.querySelector(".temp5").innerHTML = "Temp: " + temp + ".F"
         var humidity = data.list[i+34].main.humidity
        document.querySelector(".humidity5").innerHTML = "Humidity: " + humidity + "%"
        var speed = data.list[i+34].wind.speed
        document.querySelector(".wind5").innerHTML = "Wind speed: " + speed + "MPH"
        var icon = data.list[i+34].weather[0].icon
        document.querySelector(".uv-index5").src = "http://openweathermap.org/img/wn/"  + icon + ".png"
    
        }
    }
    {
    function search5(){
        Day5(document.querySelector(".search-bar").value)
    }
    }
    document.querySelector(".btn").addEventListener("click", function(){
        search5()
    })
