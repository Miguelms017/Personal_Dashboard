/*
weather.js

this shows the weather in current location
*/

// Locator
function getlocation(){
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation){
            reject("Geolocation Not Supported");
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            },
            (error) => reject(error)
        );
    });
}

// geolocation (City)
async function getCityName(lat, lon) {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
    const data = await response.json();
    return data.address.city || data.address.town || data.address.village || data.address.county;
}

// weather loader
export async function loadweather() {
    try{

        // call locator
        const { lat, lon } = await getlocation();

        // weather API
        const apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/today?unitGroup=us&key=KSJ9FPR9HAXPBHBT5QCNHAG4Z&contentType=json`

        // 
        const response = await fetch(apiURL);
        const data = await response.json();

        const currentTemp = data.currentConditions.temp;
        const maxTemp = data.days[0].tempmax;
        const minTemp = data.days[0].tempmin;
        const precipitation = data.days[0].precip;
        const city = await getCityName(lat, lon);

        document.getElementById("local").textContent = city
        document.getElementById("CurrTemp").textContent = `${currentTemp}°F`;
        document.getElementById("MaxTemp").textContent = `H: ${maxTemp}°F`;
        document.getElementById("MinTemp").textContent = `L: ${minTemp}°F`;
        document.getElementById("Prec").textContent = `Rain: ${precipitation} in`;
    } catch (error) {
        console.error("Error fetching weather:", error);
    }  
}