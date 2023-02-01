const locationBar = document.getElementById('location-bar');
const locationArrow = document.getElementById('location-arrow');

/*Create hover color swap on location bar - on mouuseenter*/
locationBar.onmouseover = function(){
    locationBar.style.backgroundColor = "#d5966c";
    locationArrow.style.backgroundColor = "#151515";
}

/*Remove hover color swap - on mouseleave*/
locationBar.onmouseleave = function(){
    locationBar.style.backgroundColor = "#151515";
    locationArrow.style.backgroundColor = "#d5966c";
}