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

/*Leaflet Map*/ 
/*Create Map With Coordinates*/
const leafletMap = L.map('leaflet-map').setView([51.505, -0.09], 13);

/*Add Open Street Map Tiles*/
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(leafletMap);