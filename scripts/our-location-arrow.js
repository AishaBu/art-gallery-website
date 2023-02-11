/*OUR LOCATION ARROW*/
const ourLocationBar = document.getElementById("location-bar");
const ourLocationArrow = document.getElementById("location-arrow");

/*Create color swap on hover of location bar - on mouseenter*/
ourLocationBar.onmouseover = function () {
  ourLocationBar.style.backgroundColor = "#d5966c";
  ourLocationArrow.style.backgroundColor = "#151515";
};

/*Remove color swap hover - on mouseleave */
ourLocationBar.onmouseleave = function () {
  ourLocationBar.style.backgroundColor = "#151515";
  ourLocationArrow.style.backgroundColor = "#d5966c";
};

