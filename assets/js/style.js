const userInputEl = document.getElementById('user-input');
const searchButtonEl = document.getElementById('search-btn');
const cityButtonEl = document.getElementById('city-btn');

cityButtonEl.style.display = 'none';

searchButtonEl.addEventListener('click', function(event) {

    const userInputValue = userInputEl.value;

    cityButtonEl.style.display = 'block';

    cityButtonEl.innerHTML = userInputValue;
})