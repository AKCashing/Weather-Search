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

// Save the Date Object into a var called date
var date = new Date();
// Save the current Month into a var called month
var month = date.getMonth() + 1;
// Save the current Day of the Month into a var called month
var day = date.getDate();
// Save the current Year into a var called month
var year = date.getFullYear();

// When the User clicks the Search Button
searchButtonEl.addEventListener('click', function(event) {
    // CREATE a NEW var and store the Users Input
    var userInputValue = userInputEl.value;
    // Store the API Key
    var APIKey = '465bcfeb692bbbf6355282da448dc2af';
    // Store the Users Input into a City var
    var city = userInputValue;
    // Create the URL with the given parameters
    var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey + '&units=imperial';
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
                // Clear the Input Field
                userInputEl.value = '';
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
                userInputEl.value = '';
                // Clear the City Name Field
                cityNameEl.innerHTML = '';
                // Clear the Temperature Field
                temperatureEl.innerHTML = '';
                // Clear the Wind Field
                windEl.innerHTML = '';
                // Clear the Humidity Field
                humidityEl.innerHTML = '';

                // Insert NEW City Name and Date
                cityNameEl.innerHTML = data.name + ' (' + month + '/' + day + '/' + year + ')';
                // Insert NEW Temperature data
                temperatureEl.innerHTML = 'Temp: ' + temperatureEl.textContent + data.main.temp + '°F';
                // Insert NEW Wind data
                windEl.innerHTML = 'Wind: ' + windEl.textContent + data.wind.speed + ' MPH';
                // Insert NEW Humidity data
                humidityEl.innerHTML = 'Humidity: ' + humidityEl.textContent + data.main.humidity +' %';
            }

            // When the User CLICKS any City Button they previously searched
            cityButtonEl.addEventListener('click', function(event) {
                // Use the Current Name on the Button and Save it to the City var
                city = cityButtonEl.innerHTML;
                // FETCH the Weather API with the queryURL
                fetch(queryURL)
                    .then(function(response){
                        return response.json();
                    })
                    .then(function(data){
                        // LOG Data to console
                        console.log(data);

                        // Clear the Input Field
                        userInputEl.value = '';
                        // Clear the City Name Field
                        cityNameEl.innerHTML = '';
                        // Clear the Temperature Field
                        temperatureEl.innerHTML = '';
                        // Clear the Wind Field
                        windEl.innerHTML = '';
                        // Clear the Humidity Field
                        humidityEl.innerHTML = '';

                        // Insert NEW City Name and Date
                        cityNameEl.innerHTML = data.name + ' (' + month + '/' + day + '/' + year + ')';
                        // Insert NEW Temperature data
                        temperatureEl.innerHTML = 'Temp: ' + temperatureEl.textContent + data.main.temp + '°F';
                        // Insert NEW Wind data
                        windEl.innerHTML = 'Wind: ' + windEl.textContent + data.wind.speed + ' MPH';
                        // Insert NEW Humidity data
                        humidityEl.innerHTML = 'Humidity: ' + humidityEl.textContent + data.main.humidity +' %';
                    });
            })
        });
    })