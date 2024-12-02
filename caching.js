async function weather() {
    try {
       let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=adb354da2d99d15a46101ff01ac54fbb')
       let data = await response.json();
       console.log(data);
       
       addData(data);
    } catch (error) {
        console.log(`Error: ${error}`);
        
    }
}
weather();
function addData(data) {
    const weatherElement = document.getElementById('weather'); 
    weatherElement.innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

// var address = 'http://127.0.0.1:5501/first.html';  
// var socket = new WebSocket(address);

// socket.onopen = function () {
//     console.log('WebSocket connection established');
// };

// socket.onerror = function (error) {
//     console.error('WebSocket error:', error);

//     if (!navigator.onLine) {
//         console.log('User is offline, WebSocket connection failed.');
//     } else {
//         console.log('WebSocket server might be down, or the connection was refused.');
//     }
// };

// socket.onclose = function () {
//     console.log('WebSocket connection closed');
// };


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('./service-worker.js')
            .then(function (registration) {
                console.log('ServiceWorker registered with scope:', registration.scope);
            })
            .catch(function (err) {
                console.log('ServiceWorker registration failed:', err);
            });
    });
}
