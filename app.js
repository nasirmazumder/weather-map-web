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
        if (temparature.length == 0) {
            const errorMessage2 = document.getElementById('error-message2');
            errorMessage2.style.display = "block";
            setTimeout(() => {
                errorMessage2.remove()
            }, 2000);
        }
        const temparatureId = temparature.main.temp;
        const roundTemp = Math.round(temparatureId);
        const feelsLikeTemp = temparature.main.feels_like;
        const roundFeelsLikeTemp = Math.round(feelsLikeTemp);
        console.log(temparature)
        setInnertext('city-name', temparature.name );
        setInnertext('temparature-id', roundTemp);
        setInnertext('weather-status', temparature.weather[0].main);
        setInnertext('feels-like', 'Feels like: ' + roundFeelsLikeTemp );

        const url = `http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`
        const weatherIcons = document.getElementById('weather-icons');
        weatherIcons.setAttribute('src', url)
    }

}

