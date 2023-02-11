
/*OUR LOCATION ARROW*/
const ourLocationBar = document.getElementById('location-bar');
const ourLocationArrow = document.getElementById('location-arrow');

/*Create color swap on hover of location bar - on mouuseenter*/
ourlocationBar.onmouseover = function(){
    ourLocationBar.style.backgroundColor = "#d5966c";
    ourLocationArrow.style.backgroundColor = "#151515";
}

/*Remove color swap hover - on mouseleave */
ourLocationBar.onmouseleave = function(){
    ourLocationBar.style.backgroundColor = "#151515";
    ourLocationArrow.style.backgroundColor = "#d5966c";
}

/*BACK HOME ARROW*/
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