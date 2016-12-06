//Creates Variables and save DOM Elements to each 
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

colorChangeButton.addEventListener("click", function() {
    document.body.style.background = newBGColor.value;
})
