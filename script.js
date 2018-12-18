// Section 12 | Lecture 127 | Exercise: Background Generator
// This exercise has issues running in Google Chrome and Microsoft Edge
// Works normally in Mozilla Firefox
 
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// css.textContent adds text content to your webpage.
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);





















