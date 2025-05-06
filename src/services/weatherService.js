const API_KEY = 'e87e6bb073704dfbba1222705250505';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        // console.log('Data: ', data);
        return data;
    } catch (err) {
        console.log(err);
    }
}

const formatWeatherData = (data) => ({
    location: data.location.name,
    temperature: data.current.temp_c,
    condition: data.current.condition.text,
  });

// show('New York'); 

export { show, formatWeatherData };