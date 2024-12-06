const apiKey="62164bb7a82f6e";
const apiUrl="https://ipinfo.io/json";
async function fetchWeather(city) {
    try{
        const fullUrl=`${apiUrl}?key=${apiKey}&q=${encodeURIComponent(city)}`;

        const response = await fetch(fullUrl);
        if(!response.ok){
            throw new Error(`Error:${response.status} ${response.statusText}`);
        }
        const data= await response.json();
        console.log("Weather Data:",data);
        return data;
    }catch(error){
        console.error("failed to fetch weather data:",error)
    }
}
fetchWeather("delhi");