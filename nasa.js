

fetch(
  "https://api.nasa.gov/planetary/apod?api_key=G2hmMJchfmh8fC1DOlRPC9IHywzpa6dHIyY7IB2U"
  )

  .then((response) => {
    return response.json();
    
  })
  .then((data) => {
    document.getElementById("img").src = data.url;
    document.getElementById("copyright").innerHTML = data.copyright;
    document.getElementById("title").innerHTML = data.title;
    document.getElementById("explanation").innerHTML = data.explanation;
  });
