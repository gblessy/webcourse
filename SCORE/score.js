var scorePlayerOne = 0;
var scorePlayerTwo = 0;
var maxScore = 5;

var scoreP1holder = document.getElementById("first");
var scoreP2holder = document.getElementById("second");
var maxScoreholder = document.getElementById("maxScore");
var maxScoreInput = document.getElementById("maxScoreInput");
var PLOneAdd = document.getElementById("PLOneAdd");
var PLTwoAdd = document.getElementById("PLTwoAdd");
var reset = document.getElementById("reset");




PLOneAdd.addEventListener("click", function(){
	if (scorePlayerOne < maxScore && scorePlayerTwo < maxScore){
	scorePlayerOne++;
	scoreP1holder.textContent = scorePlayerOne;}
})

PLTwoAdd.addEventListener("click", function(){
	if (scorePlayerOne < maxScore && scorePlayerTwo < maxScore){
	scorePlayerTwo++;
	scoreP2holder.textContent = scorePlayerTwo;}
})

maxScoreInput.addEventListener("input", function(){
	if (maxScoreInput.value > 0) {
	maxScore = maxScoreInput.value;
	maxScoreholder.textContent = maxScore;
	} else {
		maxScore = 5;
		maxScoreholder.textContent = maxScore;
	}
})

reset.addEventListener("click", function(){
	scorePlayerTwo = 0;
	scorePlayerOne = 0;
	maxScore = 5;
	scoreP1holder.textContent = scorePlayerOne;
	scoreP2holder.textContent = scorePlayerTwo;
	maxScore.textContent = maxScore;
})