// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
// We're assigning the variable map to the object L.map(), and we'll instantiate 
// the object with the given string 'mapid'.
// The mapid will reference the id tag in our <div> element on the index.html file.
// The setView() method sets the view of the map with a geographical center,
// where the first coordinate is latitude (40.7) and the second is longitude (-94.5). 
// We set the zoom level of "5" on a scale 0–18.

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};


//GeoJSON objects are added to the map through a GeoJSON layer, L.geoJSON(). In "The GeoJSON Layer" section, it says to 
// create the GeoJSON layer and add it to our map.
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport).addTo(map);


// We add two arguments: the data and the pointToLayer callback function.
// The data will be our sanFranAirport data.
// For the pointToLayer callback function, we are first going to call a function() where we pass
// each GeoJSON feature as feature, and its latitude and longitude as latlng.
// Then we add a marker for each feature with a latitude and longitude in the pointToLayer 
// callback function argument by using return L.marker(latlng).
// Grabbing our GeoJSON data.
// Using the dot notation, we can traverse through the JSON object to get the city by using feature.properties.city. 

// // ****GOOD EXAMPLE****
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     return L.marker(latlng).bindPopup("<h2>"+ feature.properties.name + "</h2><hr><h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//   }
// }).addTo(map);

// Let's break down what is happening in the L.geoJSON() layer:
// First, we add two arguments: the data and the onEachFeature callback function.
// The data will be our sanFranAirport data.
// With the onEachFeature callback function we are first going to call an anonymous function, 
// function(), where we pass each GeoJSON feature as feature, and any properties to the second argument, layer.
L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<h2>Aiport Code:") // " + layer.feature.faa + "</h2><hr><h3>Airport Name: " + layer.feature.name + "</h3>");
   }
});


//  DIDN'T GET the onEachFeture WORKING ***********
  // // Give each feature a popup describing the place and time of the earthquake
  // function onEachFeature(features, layer) {
  //   layer.bindPopup("<h2>" + features.properties.Name 
  //   + "</h2><hr><h3>Neighborhood ID: " + features.properties.Neighborhood_ID + "</h3>");
  // }


// L.geoJSON(sanFranAirport, {
//   onEachFeature: function(features, layer) {
//     layer.bindPopup("<h2>" + features.properties.faa  + "</h2>");
//    }
//  });



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our tile layer to the map.
streets.addTo(map);

