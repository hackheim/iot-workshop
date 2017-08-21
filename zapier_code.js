var photonUrl = 'https://api.particle.io/v1/devices/400032001047343438323536/';
var particleToken = '2b54d45e67fb08b6cf631f2397aefb8455d7357b';

fetch('http://api.openweathermap.org/data/2.5/weather?zip=2011,no&appid=670a98004d4339df87e01d56d318c6ec&units=metric')
  .then(function(res) {
    return res.json();
  })
  .then(function(json) {
    var weather = json.weather[0];
    var degree = 0;

    if (weather.main.match(/rain/i)) {
      //umbrella
      degree = 170;
    } else if (weather.main.match(/snow/i)) {
      //shovel
      degree = 20;
    }  else if(weather.temp < 0) {
      //hat
      degree = 47;
    } else if(weather.temp < 10) {
      //jacket
      degree = 135;
    } else if(weather.temp < 20) {
      //sweater
      degree = 69;
    } else {
      //tshirt
      degree = 105;
    }
  
  fetch(
    photonUrl+'setPosition', 
    { 
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'arg='+0+'&access_token='+particleToken 
    }
  );
  
  callback(null, {'degrees': degree});
})
.catch(callback);
