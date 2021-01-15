const api = { 
    key: "08da26d7229b40324650cb40ebf74451", //the api key for the weather api
    base: "https://api.openweathermap.org/data/2.5/" //define the base url for api
  }
  
  const searchbox = document.querySelector('.search-box'); //grab user input from the search box 
  searchbox.addEventListener('keypress', setQuery);       //grab user input from the search box
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {        //if user uses the "enter key" which has the value of 13
      getResults(searchbox.value); //sends user input through the getResults function
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`) //pulling info from API
      .then(weather => {                                                 //shorthand for traditional function expression
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {                           //Where all the relevant info gets pushed
    let city = document.querySelector('.location .city');       //correlates the new variable city with the element .city which is within .location
    city.innerText = `${weather.name}, ${weather.sys.country}`; //adds the values of the variables to "city"'s inner text
  
    let now = new Date();
    let date = document.querySelector('.location .date'); //correlates the new variable date with the element .date which is within .location
    date.innerText = dateBuilder(now);                    //send current time to dateBuilder function to reformat the date and be pushed onto the date tag as inner text
  
    let temp = document.querySelector('.current .temp');                                //correlates the new variable temp with the element .temp which is within .current
    temp.innerHTML = `${((Math.round(weather.main.temp))*1.8)+32}<span>°f</span>`;      //takes the temperature and converts it to fahrenheit 
  
    let temps = document.querySelector('.current .temps');               //correlates the new variable temps with the element .temps which is within .current 
    temps.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`; //display weather temperature as celcius in the temp element
  

    let weather_el = document.querySelector('.current .weather'); //correlates the new variable weather_el with the element .weather which is within .current 
    weather_el.innerText = weather.weather[0].main;              //displays the given weather conditions on the weather_el element
  
    let hilow = document.querySelector('.hi-low');              //correlates the new variable hilow with the element .hi-low
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`; //display the celcius weathers on the page element .hi-low
  
    let hilows = document.querySelector('.hi-lows');            //correlates the new variable hilows with the element .hi-lows
    hilows.innerText = `${((Math.round(weather.main.temp_min))*1.8)+32}°f / ${((Math.round(weather.main.temp_max))*1.8)+32}°f`; //display the fahrenheit weathers on the page element .hi-lows
  

}
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }