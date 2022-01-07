import { VITE_OPEN_WEATHER_KEY } from '$lib/Env';

export async function get() {
    const location = "New York";
    const units = 'imperial';

    return (
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${VITE_OPEN_WEATHER_KEY}`)
            .then(response => response.json())
            .then(data => {
                return {
                    body: {
                        forecast: data.weather[0].main,
                        temperature: data.main.temp,
                        sunrise: data.sys.sunrise,
                        sunset: data.sys.sunset,
                    }
                }
            })
    )
}