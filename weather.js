const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="85c5a4de7e722525b59613df77cdd851";

const cityInput=document.querySelector(".search input ");
const searchBtn=document.querySelector(".search button ");
const weatherIcon=document.querySelector(".weather-icon");
const get_location=document.getElementById('get_location');



async function CheckWeather(city){
       
     const responce= await fetch(apiUrl+city+`&appid=${apikey}`);
     var data= await responce.json();
     console.log(data);

     document.querySelector(".city").innerHTML="Weather in "+ data.name;
     document.querySelector(".temp").innerHTML=data.main.temp + "°c";
     document.querySelector(".col").innerHTML=data.weather[0].main;
     document.querySelector(".humidity").innerHTML="Humidity: "+data.main.humidity+"%";
     document.querySelector(".wind").innerHTML="Wind speed: "+data.wind.speed+" km/h";
     if(data.weather[0].main=="Clouds"){
      weatherIcon.src="clouds.png"
 }
 else if(data.weather[0].main=="Clear"){
      weatherIcon.src="clear.png"
    
 }
 else if(data.weather[0].main=="Rain"){
      weatherIcon.src="rain.png"
      
 }
 else if(data.weather[0].main=="Mist"){
      weatherIcon.src="mist.png"
      
 }else if(data.weather[0].main=="Drizzel"){
      weatherIcon.src="drizzel.png"
      
 }
 else if(data.weather[0].main=="Snow"){
      weatherIcon.src="snow.png"
      }
 else if(data.weather[0].main=="Thunderstorm"){
           weatherIcon.src="thunderstorm.png"
   }

    
}

searchBtn.addEventListener("click",()=>{
CheckWeather(cityInput.value);
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      searchBtn.click();
    }
  });




//fetching your location

  async function gotLocation(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    CheckWeather2(lat,lon);

  }

  async function CheckWeather2(lat, lon){
       
    const promise= await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=85c5a4de7e722525b59613df77cdd851&units=metric");
    var data= await promise.json();
    console.log(data);

    document.querySelector(".city").innerHTML="Weather in Your location";
    document.querySelector(".temp").innerHTML=data.main.temp + "°c";
    document.querySelector(".col").innerHTML=data.weather[0].main;
    document.querySelector(".humidity").innerHTML="Humidity: "+data.main.humidity+"%";
    document.querySelector(".wind").innerHTML="Wind speed: "+data.wind.speed+" km/h";
    if(data.weather[0].main=="Clouds"){
      weatherIcon.src="clouds.png"
 }
 else if(data.weather[0].main=="Clear"){
      weatherIcon.src="clear.png"
    
 }
 else if(data.weather[0].main=="Rain"){
      weatherIcon.src="rain.png"
      
 }
 else if(data.weather[0].main=="Mist"){
      weatherIcon.src="mist.png"
      
 }else if(data.weather[0].main=="Drizzel"){
      weatherIcon.src="drizzel.png"
      
 }
 else if(data.weather[0].main=="Snow"){
      weatherIcon.src="snow.png"
      }
 else if(data.weather[0].main=="Thunderstorm"){
           weatherIcon.src="thunderstorm.png"
          
   }

    

}

function failedtoGet(){
    alert('something went wrong');
}
  get_location.addEventListener("click",async ()=>{
    navigator.geolocation.getCurrentPosition(gotLocation ,failedtoGet)
});


