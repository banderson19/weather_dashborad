var button = document.querySelector('.submit')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name')
var temp = document.querySelector('.temp')
var wind = document.querySelector('.wind')
var humidity = document.querySelector('.humidity')
var uvIndex = document.querySelector('.uv_index')

button.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+
    '&appid=29faf1cd51c283160a674c23d2eff464')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(err => alert("No City"))
})