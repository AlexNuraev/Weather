const button = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=2f66aebdfda8d6c7b65462eb4d03936f')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            console.log(nameValue);
            var tempValue = data['main']['temp'];
            var descValue = data['weather']['0']['description'];
            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;
        })
        .catch(err => alert("Wrong city name!"))
})
