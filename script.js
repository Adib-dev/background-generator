let colorCode = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient")

function changeBackground() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    colorCode.textContent = "(" + color1.value + ", " + color2.value + ")";
}
color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);
