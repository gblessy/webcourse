var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode Buttons event Listeners.
for (var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		resetColors(numSquares);
	})
}

}





resetButton.addEventListener("click", function(){
	resetColors(numSquares);
})

colorDisplay.textContent = pickedColor;

for (var i=0; i < squares.length; i++){
	//Add initial Colors to squares
	squares[i].style.background = colors[i];

	//Add click listeners.
	squares[i].addEventListener("click", function(){
		//grab color of picked square
		var clickedColor = this.style.background;

		//compare to chosen color
		if (clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!!"
			changeColor(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?"

		} else {
			this.style.background = "#232323";
			messageDisplay.textContent= "Try again!";
		}
	})
}

function changeColor(color) {
	for (var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];

	//add num random colours to array
	for (var i =0; i < num; i++) {
		//get random colors
		 arr.push(randomColor());
	}
	//return this array
	return arr;
}


function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "red" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "red" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}

function resetColors(cn){
	//generate New Colors
	colors = generateRandomColors(cn);
	//Pick color
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i=0; i < squares.length; i++){
	//Add initial Colors to squares
	//Check if there are colors[i] exist we set proper colors
	if(colors[i]){
	squares[i].style.background = colors[i];
	squares[i].style.display = "block";
	}
	else {
	squares[i].style.display = "none";
	}
	}
	h1.style.background = "steelblue";

	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

}