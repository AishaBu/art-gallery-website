/*BACK HOME BAR HOVER*/
const backHomeBar = document.getElementById('back-home-bar');
const backHomeArrow = document.getElementById('back-home-arrow');

/*Create color swap on hover of location bar - on mouuseenter*/
backHomeBar.onmouseover = function(){
    backHomeBar.style.backgroundColor = "#d5966c";
    backHomeArrow.style.backgroundColor = "#151515";
}

/*Remove color swap hover - on mouseleave*/
backHomeBar.onmouseleave = function(){
   backHomeBar.style.backgroundColor = "#151515";
    backHomeArrow.style.backgroundColor = "#d5966c";
}

/*Leaflet Map*/ /*Create Map With Coordinates*/
const leafletMap = L.map('leaflet-map').setView([41.4815, -71.3103], 17);

/*Add Open Street Map Tiles*/
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom:17,
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
