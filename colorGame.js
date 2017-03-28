var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initials colors to squares
	squares[i].style.background = colors[i];
	//add click listeners to suqares
	squares[i].addEventListener("click", function(){
	//grab color of clicked square
	var clickedColor = this.style.background;
	//compare color to picked color
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		changeColors(clickedColor);
		}
		else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!"; 
		}
	});
}

function changeColors(color){
	//loop through all squares
	for(i = 0; i < squares.length; i ++){
	//change each color to match the given color
	squares[i].style.background = color;
	}
}

function pickColor(){
	//pick a random color
	var random = Math.floor(Math.random() * colors.length + 1);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	arr = [];
	//repeat num times
	for(i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	// pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	//rgb(r, g, b)
	return "rgb(" + r + "," + g + "," + b  +")";
}
