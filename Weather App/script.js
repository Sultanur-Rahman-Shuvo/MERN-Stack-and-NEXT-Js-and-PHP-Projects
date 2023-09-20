const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '52147e1c41msh1b396a72df8fe0fp1686e5jsnf382f2d7f9d1',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
    cityName.innerHTML = city;
    const p = fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options);
    p.then(response=> response.json())
    .then((response)=>{
        console.log(response);
        last_updated_epoch.innerHTML = response.current.last_updated_epoch
        last_updated.innerHTML = response.current.last_updated
        temp_c.innerHTML = response.current.temp_c
        temp_c2.innerHTML = response.current.temp_c
        temp_f.innerHTML = response.current.temp_f
        is_day.innerHTML = response.current.is_day
        region.innerHTML = response.location.region
        country.innerHTML = response.location.country
    })
    .catch(err => console.log(err))
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})