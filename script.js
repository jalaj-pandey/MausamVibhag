let valueSearch = document.getElementById('valueSearch')
let city = document.getElementById('city')
let temprature = document.getElementById('temprature')
let description = document.querySelector('.description');
let main = document.querySelector('main');
let clouds = document.getElementById('clouds')
let humidity = document.getElementById('humidity')
let pressure = document.getElementById('pressure')

let form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    if(valueSearch.value != ''){
        searchWeather();
    }
})



let id = '0b956721838c5dd9daa0efe45e506b06'
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
const searchWeather = ()=>{
    fetch(url + '&q=' + valueSearch.value)
    .then(responsive =>responsive.json())
    .then(data =>{
        console.log(data);
        if(data.cod == 200){
            city.querySelector('figcaption').innerHTML = data.name;
            city.querySelector('img').src='http://flagsapi.com/'+data.sys.country+'/shiny/32.png';
            temprature.querySelector('img').src = 'https://openweathermap.org/img/wn/'+data.weather[0].icon +'@4x.png'
            temprature.querySelector('figcaption span').innerText = data.main.temp;
            description.innerText = data.weather[0].description;
            clouds.innerHTML = data.clouds.all;
            humidity.innerHTML = data.main.humidity;
            pressure.innerHTML = data.main.pressure;
        } else{
            main.classList.add('error');
            setTimeout(() => {
                main.classList.remove('error');
            }, 1000);
        }

        valueSearch.value = ' ';
    })
}

const initApp = () =>{
    valueSearch.value = 'Uttarakhand';
    searchWeather();
}
initApp();