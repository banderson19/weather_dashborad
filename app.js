// var button = document.querySelector('.submit')
// var name = document.querySelector('.name')
// var temp = document.querySelector('.temp')
// var wind = document.querySelector('.wind')
// var humidity = document.querySelector('.humidity')
// var uvIndex = document.querySelector('.uv_index')
// button.addEventListener('click', function() {
//     fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+
//     '&appid=29faf1cd51c283160a674c23d2eff464')
//     .then(response => response.json())
//     .then(data =>  {
//         console.log(data)
//     })
//     .catch(err => alert("No City"))
// })

const apiKey = "29faf1cd51c283160a674c23d2eff464"
const inputValue = document.querySelector('.inputValue')
var button = document.querySelector('.submit')

const currentWeather = "https://api.openweathermap.org/data/2.5/weather?appid="

//taking in user input, and passing the value into a variable
$(document).ready(function() {
    $(button).on("click", function(event) {
      var userInput = $(inputValue).val()
      console.log(userInput)
      getWeather(userInput)
    
    })
  })

const getWeather = () => {

    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+
    '&appid=29faf1cd51c283160a674c23d2eff464')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
        cityName = $("<h3>").text(data.city.name);
        $("#today-weather").append(cityName);

        // date = $("h3>").text(data.list[0].dt_text);
        // console.log(date)
        // $("today-weather").append(date)

        var TempetureToNum = parseInt((data.list[0].main.temp)* 9/5 - 459);
        var cityTemperature = $("<p>").text("Tempeture: "+ TempetureToNum + " °F");
        $("#today-weather").append(cityTemperature);
        var cityHumidity = $("<p>").text("Humidity: "+ data.list[0].main.humidity + " %");
        $("#today-weather").append(cityHumidity);
        var cityWindSpeed = $("<p>").text("Wind Speed: "+ data.list[0].wind.speed + " MPH");
        $("#today-weather").append(cityWindSpeed);


        for (var i=1; i<6; i++) {
          var FivedayDiv = $("<div>");
          FivedayDiv.attr("class","col-2 m-2")
          var TempToNum = parseInt((data.list[i].main.temp)* 9/5 -459);
          var cityTemp = $("<p>").text("Temp: " + TempToNum + " °F")
          var cityHum = $("<p>").text("Humidity: " + data.list[i].main.humidity + " %");
          var windSpeed = $("<p>").text("Wind Speed: " + data.list[i].wind.speed + " MPH");
          
          
          FivedayDiv.append(cityTemp);
          FivedayDiv.append(cityHum);
          FivedayDiv.append(windSpeed);
          $("#five-day").append(FivedayDiv);
          
        }

        // var TempetureToNum_1 = parseInt((data.list[1].main.temp)* 9/5 - 459);
        // var cityTemperature_1 = $("<p>").text("Temp: "+ TempetureToNum_1 + " °F");
        // $("#five-day-1").append(cityTemperature_1);
        // var cityHumidity_1 = $("<p>").text("Humidity: "+ data.list[1].main.humidity + " %");
        // $("#five-day-1").append(cityHumidity_1);
        // var cityWindSpeed = $("<p>").text("Wind Speed: "+ data.list[1].wind.speed + " MPH");
        // $("#five-day-1").append(cityWindSpeed);

        // var TempetureToNum_2 = parseInt((data.list[2].main.temp)* 9/5 - 459);
        // var cityTemperature_2 = $("<p>").text("Temp: "+ TempetureToNum_2 + " °F");
        // $("#five-day-2").append(cityTemperature_2);
        // var cityHumidity_2 = $("<p>").text("Humidity: "+ data.list[2].main.humidity + " %");
        // $("#five-day-2").append(cityHumidity_2);
        // var cityWindSpeed = $("<p>").text("Wind Speed: "+ data.list[2].wind.speed + " MPH");
        // $("#five-day-2").append(cityWindSpeed);

    })
}