/*Leaflet Map*/ /*Create Map With Coordinates*/
const leafletMap = L.map('leaflet-map').setView([41.4815, -71.3103], 16);

/*Add Open Street Map Tiles*/
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom:16,
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

}).addTo(leafletMap);


/*Map Controls*/ /*Remove default map controls*/
leafletMap.zoomControl.remove();

/*Change position of map controls*/
L.control.zoom({
    position: 'bottomright'
}).addTo(leafletMap);

/*Add Custom Map Markers*/
let mapMarker = L.icon({
    iconUrl: '../assets/icon-location.svg',
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
});

/*Add marker to map*/
L.marker([41.4815, -71.3103], {icon: mapMarker}).addTo(leafletMap);
