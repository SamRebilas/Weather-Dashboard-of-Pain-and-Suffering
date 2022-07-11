//var Day1 = document.getElementById("#day1")

const apiKey =  "2eaaf63cfb416bf2e134c49946bd1b16"
var startDate = moment()
$(document).ready(function(){
    $("#date").text( moment().format('ddd MMM Do, YYYY'))
}
)

function weather (city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city +"&appid=" + apiKey + "&units=imperial"
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data))
}
function displayWeather (data) {
const {name} = data
document.querySelector(".city").innerHTML = name
const {temp} = data.main
document.querySelector(".temp", "temp1").innerHTML = "Temperature: " + temp
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

function Day1 (city){
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=fe72ff1e0807d8c0c9ece9b274326ff1&units=imperial&exclude=hourly,minutely,alert")
    
    .then((response)=> response.json())
    .then((data)=> this.displayDay1(data))
  

}
function displayDay1(data){
   for(i=0;i<5;i++){
    const{dt_txt}=data.list[1]
    document.querySelector(".date1").innerHTML = "Date: " + dt_txt
    const {temp} = data.list[1].main
    document.querySelector(".temp1").innerHTML = "Temp: " + temp
    const{humidity} = data.list[1].main
    document.querySelector(".humidity1").innerHTML = "Humidity: " + humidity
    const {speed} = data.list[1].wind
    document.querySelector(".wind1").innerHTML = "Wind speed: " + speed
}}

    {
    function search1(){
        this.Day1(document.querySelector(".search-bar").value)
    }
    }
    document.querySelector(".btn").addEventListener("click", function(){
        search1()
    })


    function Day2 (city){
        fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=fe72ff1e0807d8c0c9ece9b274326ff1&units=imperial&exclude=hourly,minutely,alert")
        
        .then((response)=> response.json())
        .then((data)=> this.displayDay2(data))
    }

    function displayDay2(data){
        for(i=0;i<5;i++){
        const{dt_txt}=data.list[2]
       document.querySelector(".date2").innerHTML = "Date: " + dt_txt
        const {temp} = data.list[2].main
        document.querySelector(".temp2").innerHTML = "Temp: " + temp
        const{humidity} = data.list[2].main
        document.querySelector(".humidity2").innerHTML = "Humidity: " + humidity
        const {speed} = data.list[2].wind
        document.querySelector(".wind2").innerHTML = "Wind speed: " + speed
        }
    }
    {
    function search2(){
        this.Day2(document.querySelector(".search-bar").value)
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
        const{dt_txt}=data.list[3]
       document.querySelector(".date3").innerHTML = "Date: " + dt_txt
        const {temp} = data.list[3].main
        document.querySelector(".temp3").innerHTML = "Temp: " + temp
        const{humidity} = data.list[3].main
        document.querySelector(".humidity3").innerHTML = "Humidity: " + humidity
        const {speed} = data.list[3].wind
        document.querySelector(".wind3").innerHTML = "Wind speed: " + speed
        }
    }
    {
    function search3(){
        this.Day3(document.querySelector(".search-bar").value)
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
        const{dt_txt}=data.list[4]
       document.querySelector(".date4").innerHTML = "Date: " + dt_txt
        const {temp} = data.list[4].main
        document.querySelector(".temp4").innerHTML = "Temp: " + temp
        const{humidity} = data.list[4].main
        document.querySelector(".humidity4").innerHTML = "Humidity: " + humidity
        const {speed} = data.list[4].wind
        document.querySelector(".wind4").innerHTML = "Wind speed: " + speed
        }
    }
    {
    function search4(){
        this.Day4(document.querySelector(".search-bar").value)
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
        const{dt_txt}=data.list[5]
       document.querySelector(".date5").innerHTML = "Date: " + dt_txt
        const {temp} = data.list[5].main
        document.querySelector(".temp5").innerHTML = "Temp: " + temp
        const{humidity} = data.list[5].main
        document.querySelector(".humidity5").innerHTML = "Humidity: " + humidity
        const {speed} = data.list[5].wind
        document.querySelector(".wind5").innerHTML = "Wind speed: " + speed
        }
    }
    {
    function search5(){
        this.Day5(document.querySelector(".search-bar").value)
    }
    }
    document.querySelector(".btn").addEventListener("click", function(){
        search5()
    })