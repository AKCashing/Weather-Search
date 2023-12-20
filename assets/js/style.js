// Grab the Search Menu element ID
var searchMenuEl = document.getElementById('search-menu');
// Grab the Users Input element ID
var userInputEl = document.getElementById('user-input');
// Grab the Search Button element ID
var searchButtonEl = document.getElementById('search-btn');
// Grab the City Name element ID
var cityNameEl = document.getElementById('city-name');
// Grab the Temperature element ID
var temperatureEl = document.getElementById('temperature');
// Grab the Wind element ID
var windEl = document.getElementById('wind');
// Grab the Humidity element
var humidityEl = document.getElementById('humidity');

// When the User clicks the Search Button
searchButtonEl.addEventListener('click', function(event) {
    // CREATE a NEW var and store the Users Input
    var userInputValue = userInputEl.value;
    // Store the API Key
    var APIKey = '465bcfeb692bbbf6355282da448dc2af';
    // Store the Users Input into a City var
    var city = userInputValue;
    // Create the URL with the given parameters
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    // FETCH the Weather API with the queryURL
    fetch(queryURL)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            // LOG Data to console
            console.log(data);

            // IF the Input Field is BLANK or CITY NOT FOUND
            if (data.cod === '400' || data.cod === '404')
            {
                // LOG to Console "Error"
                console.log('Error');
            }
            // ELSE
            else
            {
                // Create the City Button element ID
                var cityButtonEl = document.createElement('BUTTON');
                // Attach element ID called "city-btn"
                cityButtonEl.setAttribute('id','city-btn');
                // Attach element CLASS called "btn"
                cityButtonEl.setAttribute('class','btn');
                // Attach cityButtonEl into the document body
                searchMenuEl.appendChild(cityButtonEl);
                // Display the Users Input
                cityButtonEl.innerHTML = userInputValue;

                // Clear the Input Field
                

                // Clear whats in the current Display Field
                cityNameEl.innerHTML = '';
                temperatureEl.innerHTML = '';
                windEl.innerHTML = '';
                humidityEl.innerHTML = '';

                cityNameEl.innerHTML = data.name;
                temperatureEl.innerHTML = 'Temp: ' + temperatureEl.textContent + data.main.temp + '°F';
                windEl.innerHTML = 'Wind: ' + windEl.textContent + data.wind.speed + ' MPH';
                humidityEl.innerHTML = 'Humidity: ' + humidityEl.textContent + data.main.humidity +' %';
            }
        });
})