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
