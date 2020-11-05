const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject);

const fetchJoke = () => {
    fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data.joke));
};

window.onload = () => fetchJoke();