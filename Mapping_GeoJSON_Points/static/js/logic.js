// Create the map object with a center and zoom level.
// We're assigning the variable map to the object L.map(), and we'll instantiate 
// the object with the given string 'mapid'.
// The mapid will reference the id tag in our <div> element on the index.html file.
// The setView() method sets the view of the map with a geographical center,
// where the first coordinate is latitude (40.7) and the second is longitude (-94.5). 
// We set the zoom level of "5" on a scale 0–18.

// Create the map object with center and zoom level. 
// We won't use this for the multi layer map
//let map = L.map('mapid').setView([30, 30], 2);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
// the Street and Dark keys set the text, which we'll see in the index.html file, while the corresponding values reference the tile layers. Street and Dark can be used 
// to toggle between styles in the index.html file
let baseMaps = {
  Street: streets,
  Dark: dark
};

// // Having the tileLayer() method before accessing large datasets ensures that the map gets loaded before the data is added to it.
// // Then we add our tile layer to the map.
// streets.addTo(map);

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
// When creating the Layers Control, the argument passed, baseMaps, is the 
// base layer object, which will allow the two different map styles to be shown on the index.html file. 
//The Layers Control will look like the following before it is clicked to show the 
// Street and Dark options:
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/amykatherines/Mapping_Earthquakes/main/Mapping_GeoJSON_Points/static/data/majorAirports.json";


//add the d3.json() method, which returns a promise with the then() method and the anonymous function().
// Inside the d3.json() method we'll add the airportData variable.
// Inside the anonymous function() we'll add the data parameter, which references the airportData.
// We'll pass this data to the L.geoJSON() layer and then it'll be added to the map with addTo(map).
// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
  L.geoJson(data, {
      onEachFeature: function(features, layer){
        layer.bindPopup("<h3>Airport Code: " + features.properties.faa + "</h3> <hr> <h4>Airport Name: " 
        + features.properties.name + "</h4>")
      }
    }).addTo(map);
});

// // Creating a GeoJSON layer with the retrieved data.
// //Basic Example
// // L.geoJSON(data).addTo(map);


// //with pup up data
// L.geoJSON(data, {
//   onEachFeature: function(features, layer){
//     layer.bindPopup("<h3>Airport Code: " + features.properties.faa + "</h3> <hr> <h4>Airport Name: " 
//     + features.properties.name + "</h4>")
//   }
// }).addTo(map);
// });

