const API_KEY = `6b517b05fe2de5cd99a5187ba875f963`;
const searchCity = () => {
    const searchInput = document.getElementById('input-box');
    const inputText = searchInput.value;
    searchInput.value = '';
    if (inputText === "") {
        document.getElementById('error-message').style.display = "block"
        setTimeout(() => {
            document.getElementById('error-message').remove();
        }, 2000);
    }
    else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=${API_KEY}&units=metric`

        fetch(url)
            .then(res => res.json())
            .then(data => displayWeatherValue(data))

    }
    const setInnertext = (id, value) => {
        document.getElementById(id).innerText = value;
    }
    const displayWeatherValue = temparature => {
        console.log(temparature)
        setInnertext('city-name', temparature.name);
        setInnertext('temparature-id', temparature.main.temp);
        setInnertext('weather-status', temparature.weather[0].main);
        setInnertext('feels-like', 'Feels like: ' + temparature.main.feels_like);

        const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`
        const weatherIcons = document.getElementById('weather-icons');
        weatherIcons.setAttribute('src', url)
    }

}

