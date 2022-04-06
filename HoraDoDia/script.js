const hour = new Date()
const hora = hour.getHours()
const min = hour.getMinutes()
const sec = hour.getUTCSeconds()

var msg = document.getElementById('hour')
var picture = document.getElementById('img')

msg.innerHTML = `Welcome! You visit us at ${hora}:${min}`

if (hora >=0 && hora<5) {
  //madrugada
  picture.src = `noite.png`
  document.body.style.background ='#515154'
} 
if (hora >=5 && hora<12) {
  //dia
  picture.src = "manha.png"
  document.body.style.background ='#e2cd9f'
} 
if (hora >=12 && hora<18) {
  //tarde
  picture.src = "tarde.png"
  document.body.style.background ='#b9846f'
} 
if (hora >=18 && hora<=23) {
  //noite
  picture.src = "noite.png"
  document.body.style.background ='#515154'
} 


// Timer

var timenow = setInterval(myTimer);
    function myTimer() {
        var time = new Date(), displayDate;
       if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
          displayDate = time.toLocaleTimeString('pt-Br');
       } else {
          displayDate = time.toLocaleTimeString('pt-Br', {timeZone: 'America/Sao_Paulo'});
       }
          document.getElementById("now").innerHTML ='Official Brazilian Time Now: '+ displayDate;
    }

// Lot e Long

var coord = document.getElementById("coords");
var button = document.getElementById('button').addEventListener('click', getLocation)


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    coord.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  coord.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}