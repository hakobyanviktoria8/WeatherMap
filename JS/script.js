let apiKey = "a8e71c9932b20c4ceb0aed183e6a83bb";
getWeathData = (city) =>{
    let weatherPromis = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
    return weatherPromis.then((response)=>{
        return response.json()
    })
};
searchCity = () =>{
  let city = input.value;
  getWeathData(city)
      .then((response)=>{
          showData(response)
      }).catch((error)=>{
          console.log(error)
  })
};
showData = (response) => {
    country.innerHTML = response.name;
    weatherNow.innerHTML = response.weather[0].main;
    temp.innerHTML = response.main.temp;
    mintemp.innerHTML = response.main.temp_min;
    maxtemp.innerHTML = response.main.temp_max;
};
