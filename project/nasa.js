// import {API_KEY} from "../keys.json"

// require('dotenv').config();

// const API_KEY = process.env.API_KEY;


// function fetchData(){
fetch(
  "https://api.nasa.gov/planetary/apod?api_key=G2hmMJchfmh8fC1DOlRPC9IHywzpa6dHIyY7IB2U")
  .then(res => {return res.json()})

  .then(res => {
    document.getElementById("img").src = res.url;
    document.getElementById("copyright").innerHTML = res.copyright;
    document.getElementById("title").innerHTML = res.title;
    document.getElementById("explanation").innerHTML = res.explanation;
  })
  .catch(function(response) {
    // FAILURE RESPONSE
      console.log('Error! Please try again');
    });
// };
//   fetchData();

