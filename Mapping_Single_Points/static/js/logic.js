// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// We're assigning the variable map to the object L.map(), and we'll instantiate 
// the object with the given string 'mapid'.
// The mapid will reference the id tag in our <div> element on the index.html file.
// The setView() method sets the view of the map with a geographical center,
// where the first coordinate is latitude (40.7) and the second is longitude (-94.5). 
// We set the zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([40.7,-94.5], 4);

//  Add a marker to the map for Los Angeles, California.
// This is the traditional marker
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

//This uses a circle for the marker.
// L.circle([34.0522, -118.2437], {radius: 300, color: "black", fillColor: "#ffffe0", fillOpacity: .8, weight: 1}).addTo(map);

 
//This uses  circlemarker method for the marker.
//Uses pixel radius instead of meters
L.circleMarker([34.0522, -118.2437], {radius: 30, color: "black", fillColor: "#ffffa1", fillOpacity: .8, weight: 1}).addTo(map);



// Alternative for when multiple tile layers required
// // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// From the Leaflet Documentation at https://leafletjs.com/SlavaUkraini/examples/quick-start/
// We assign the tileLayer() method, as shown in the Quick Start Guide's "Setting up the map" section to the variable streets. Leaflet doesn't provide a tile layer. Instead, it offers various tile layer APIs.
// The following URLs appear in the parentheses of our tileLayer() method:
// The API URL with a reference to the accessToken
// The OpenStreetMap URL inside the curly braces of our tileLayer() method
// Add the maxZoom attribute and assign it a value of 18.
// Add the id attribute and assign it mapbox/streets-v11, which will show the streets on the map.
// Add the AccessToken attribute and assign it the value of our API_KEY.
// Call the addTo() function with our map object, map on our graymap object tile layer. The addTo() function will add the graymap object tile layer to our let map.
// Other styles:
// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11



// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

