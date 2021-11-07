// Add console.log to check to see if our code is working.
console.log("working");

// Get data from cities.js
let cityData = cities;

//Create the map object with a center and zoom level using setView method.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790],
  [30.1975, - 97.6664],
  [43.6777, - 79.6248],
  [40.6413, - 73.7781]
];

//Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  dashArray: '20, 20',
  opacity: .5,
  lineweight: 4
}).addTo(map);

//  Add a marker to the map for Los Angeles, California.
// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location,{
    radius: (city.population-200000)/100000,
    color: 'orange',
    lineweight: 4,
    fillColor: 'orange'

  })
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);