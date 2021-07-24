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
    })
}