const watherForm = document.getElementById('weatherForm');
const search = document.querySelector('input');
const errorMessage = document.getElementById('errorMessage');
const longitudeMessage = document.getElementById('longitude');
const latiudeMessage = document.getElementById('latitude');
const locationMessage = document.getElementById('location');

watherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                errorMessage.textContent = data.error;
            } else {
                latiudeMessage.textContent = 'Latitude : ' + data.latitude;
                longitudeMessage.textContent = 'Longitude : ' +data.longitude;
                locationMessage.textContent = 'Location : ' + data.location;
            }
        }); 
    });
});