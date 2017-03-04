var num = prompt("Please enter a number to find out is it even.")

function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
	return false;
}

function factorial(num){
	var fact = num;
	if (num === 0) {
		fact = 1;
	} else if (num > 0) {
	 	for (var i = fact-1; i > 0; i--) {
	 		fact = fact * i;
	 	}
	 }
	else {
		console.log ("Please enter number greater then 0")
	}
	 return fact;
}

function kebabToSnake (word) {
	if (word.indexOf('-') === -1) {
		return word;
	}
	word = word.replace('-','_');
	return word;
}